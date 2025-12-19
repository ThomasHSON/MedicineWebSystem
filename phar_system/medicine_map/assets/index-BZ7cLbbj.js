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
function Df(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Uc = { exports: {} },
  zo = {},
  Lc = { exports: {} },
  ze = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ts = Symbol.for("react.element"),
  kf = Symbol.for("react.portal"),
  _f = Symbol.for("react.fragment"),
  Mf = Symbol.for("react.strict_mode"),
  Ef = Symbol.for("react.profiler"),
  If = Symbol.for("react.provider"),
  Pf = Symbol.for("react.context"),
  Tf = Symbol.for("react.forward_ref"),
  Rf = Symbol.for("react.suspense"),
  $f = Symbol.for("react.memo"),
  Af = Symbol.for("react.lazy"),
  Di = Symbol.iterator;
function Of(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Di && e[Di]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Gc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  zc = Object.assign,
  Bc = {};
function Gr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Bc),
    (this.updater = n || Gc);
}
Gr.prototype.isReactComponent = {};
Gr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Gr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Fc() {}
Fc.prototype = Gr.prototype;
function Ma(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Bc),
    (this.updater = n || Gc);
}
var Ea = (Ma.prototype = new Fc());
Ea.constructor = Ma;
zc(Ea, Gr.prototype);
Ea.isPureReactComponent = !0;
var ki = Array.isArray,
  Hc = Object.prototype.hasOwnProperty,
  Ia = { current: null },
  Vc = { key: !0, ref: !0, __self: !0, __source: !0 };
function qc(e, t, n) {
  var s,
    o = {},
    l = null,
    a = null;
  if (t != null)
    for (s in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Hc.call(t, s) && !Vc.hasOwnProperty(s) && (o[s] = t[s]);
  var i = arguments.length - 2;
  if (i === 1) o.children = n;
  else if (1 < i) {
    for (var c = Array(i), h = 0; h < i; h++) c[h] = arguments[h + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (s in ((i = e.defaultProps), i)) o[s] === void 0 && (o[s] = i[s]);
  return {
    $$typeof: Ts,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: Ia.current,
  };
}
function Uf(e, t) {
  return {
    $$typeof: Ts,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Pa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ts;
}
function Lf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var _i = /\/+/g;
function dl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Lf("" + e.key)
    : t.toString(36);
}
function no(e, t, n, s, o) {
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
          case Ts:
          case kf:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = s === "" ? "." + dl(a, 0) : s),
      ki(o)
        ? ((n = ""),
          e != null && (n = e.replace(_i, "$&/") + "/"),
          no(o, t, n, "", function (h) {
            return h;
          }))
        : o != null &&
          (Pa(o) &&
            (o = Uf(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(_i, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (s = s === "" ? "." : s + ":"), ki(e)))
    for (var i = 0; i < e.length; i++) {
      l = e[i];
      var c = s + dl(l, i);
      a += no(l, t, n, c, o);
    }
  else if (((c = Of(e)), typeof c == "function"))
    for (e = c.call(e), i = 0; !(l = e.next()).done; )
      (l = l.value), (c = s + dl(l, i++)), (a += no(l, t, n, c, o));
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
function Us(e, t, n) {
  if (e == null) return e;
  var s = [],
    o = 0;
  return (
    no(e, s, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    s
  );
}
function Gf(e) {
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
var kt = { current: null },
  ro = { transition: null },
  zf = {
    ReactCurrentDispatcher: kt,
    ReactCurrentBatchConfig: ro,
    ReactCurrentOwner: Ia,
  };
function Wc() {
  throw Error("act(...) is not supported in production builds of React.");
}
ze.Children = {
  map: Us,
  forEach: function (e, t, n) {
    Us(
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
      Us(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Us(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Pa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ze.Component = Gr;
ze.Fragment = _f;
ze.Profiler = Ef;
ze.PureComponent = Ma;
ze.StrictMode = Mf;
ze.Suspense = Rf;
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zf;
ze.act = Wc;
ze.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var s = zc({}, e.props),
    o = e.key,
    l = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (a = Ia.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (c in t)
      Hc.call(t, c) &&
        !Vc.hasOwnProperty(c) &&
        (s[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) s.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var h = 0; h < c; h++) i[h] = arguments[h + 2];
    s.children = i;
  }
  return { $$typeof: Ts, type: e.type, key: o, ref: l, props: s, _owner: a };
};
ze.createContext = function (e) {
  return (
    (e = {
      $$typeof: Pf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: If, _context: e }),
    (e.Consumer = e)
  );
};
ze.createElement = qc;
ze.createFactory = function (e) {
  var t = qc.bind(null, e);
  return (t.type = e), t;
};
ze.createRef = function () {
  return { current: null };
};
ze.forwardRef = function (e) {
  return { $$typeof: Tf, render: e };
};
ze.isValidElement = Pa;
ze.lazy = function (e) {
  return { $$typeof: Af, _payload: { _status: -1, _result: e }, _init: Gf };
};
ze.memo = function (e, t) {
  return { $$typeof: $f, type: e, compare: t === void 0 ? null : t };
};
ze.startTransition = function (e) {
  var t = ro.transition;
  ro.transition = {};
  try {
    e();
  } finally {
    ro.transition = t;
  }
};
ze.unstable_act = Wc;
ze.useCallback = function (e, t) {
  return kt.current.useCallback(e, t);
};
ze.useContext = function (e) {
  return kt.current.useContext(e);
};
ze.useDebugValue = function () {};
ze.useDeferredValue = function (e) {
  return kt.current.useDeferredValue(e);
};
ze.useEffect = function (e, t) {
  return kt.current.useEffect(e, t);
};
ze.useId = function () {
  return kt.current.useId();
};
ze.useImperativeHandle = function (e, t, n) {
  return kt.current.useImperativeHandle(e, t, n);
};
ze.useInsertionEffect = function (e, t) {
  return kt.current.useInsertionEffect(e, t);
};
ze.useLayoutEffect = function (e, t) {
  return kt.current.useLayoutEffect(e, t);
};
ze.useMemo = function (e, t) {
  return kt.current.useMemo(e, t);
};
ze.useReducer = function (e, t, n) {
  return kt.current.useReducer(e, t, n);
};
ze.useRef = function (e) {
  return kt.current.useRef(e);
};
ze.useState = function (e) {
  return kt.current.useState(e);
};
ze.useSyncExternalStore = function (e, t, n) {
  return kt.current.useSyncExternalStore(e, t, n);
};
ze.useTransition = function () {
  return kt.current.useTransition();
};
ze.version = "18.3.1";
Lc.exports = ze;
var f = Lc.exports;
const ho = Df(f);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bf = f,
  Ff = Symbol.for("react.element"),
  Hf = Symbol.for("react.fragment"),
  Vf = Object.prototype.hasOwnProperty,
  qf = Bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Wf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yc(e, t, n) {
  var s,
    o = {},
    l = null,
    a = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (s in t) Vf.call(t, s) && !Wf.hasOwnProperty(s) && (o[s] = t[s]);
  if (e && e.defaultProps)
    for (s in ((t = e.defaultProps), t)) o[s] === void 0 && (o[s] = t[s]);
  return {
    $$typeof: Ff,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: qf.current,
  };
}
zo.Fragment = Hf;
zo.jsx = Yc;
zo.jsxs = Yc;
Uc.exports = zo;
var r = Uc.exports,
  Xc = { exports: {} },
  Bt = {},
  Qc = { exports: {} },
  Kc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, J) {
    var E = C.length;
    C.push(J);
    e: for (; 0 < E; ) {
      var H = (E - 1) >>> 1,
        $ = C[H];
      if (0 < o($, J)) (C[H] = J), (C[E] = $), (E = H);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function s(C) {
    if (C.length === 0) return null;
    var J = C[0],
      E = C.pop();
    if (E !== J) {
      C[0] = E;
      e: for (var H = 0, $ = C.length, me = $ >>> 1; H < me; ) {
        var fe = 2 * (H + 1) - 1,
          z = C[fe],
          ge = fe + 1,
          ne = C[ge];
        if (0 > o(z, E))
          ge < $ && 0 > o(ne, z)
            ? ((C[H] = ne), (C[ge] = E), (H = ge))
            : ((C[H] = z), (C[fe] = E), (H = fe));
        else if (ge < $ && 0 > o(ne, E)) (C[H] = ne), (C[ge] = E), (H = ge);
        else break e;
      }
    }
    return J;
  }
  function o(C, J) {
    var E = C.sortIndex - J.sortIndex;
    return E !== 0 ? E : C.id - J.id;
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
    h = [],
    g = 1,
    m = null,
    p = 3,
    j = !1,
    b = !1,
    k = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    u = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(C) {
    for (var J = n(h); J !== null; ) {
      if (J.callback === null) s(h);
      else if (J.startTime <= C)
        s(h), (J.sortIndex = J.expirationTime), t(c, J);
      else break;
      J = n(h);
    }
  }
  function v(C) {
    if (((k = !1), x(C), !b))
      if (n(c) !== null) (b = !0), w(T);
      else {
        var J = n(h);
        J !== null && U(v, J.startTime - C);
      }
  }
  function T(C, J) {
    (b = !1), k && ((k = !1), u(V), (V = -1)), (j = !0);
    var E = p;
    try {
      for (
        x(J), m = n(c);
        m !== null && (!(m.expirationTime > J) || (C && !oe()));

      ) {
        var H = m.callback;
        if (typeof H == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var $ = H(m.expirationTime <= J);
          (J = e.unstable_now()),
            typeof $ == "function" ? (m.callback = $) : m === n(c) && s(c),
            x(J);
        } else s(c);
        m = n(c);
      }
      if (m !== null) var me = !0;
      else {
        var fe = n(h);
        fe !== null && U(v, fe.startTime - J), (me = !1);
      }
      return me;
    } finally {
      (m = null), (p = E), (j = !1);
    }
  }
  var S = !1,
    R = null,
    V = -1,
    P = 5,
    A = -1;
  function oe() {
    return !(e.unstable_now() - A < P);
  }
  function ue() {
    if (R !== null) {
      var C = e.unstable_now();
      A = C;
      var J = !0;
      try {
        J = R(!0, C);
      } finally {
        J ? M() : ((S = !1), (R = null));
      }
    } else S = !1;
  }
  var M;
  if (typeof d == "function")
    M = function () {
      d(ue);
    };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(),
      F = N.port2;
    (N.port1.onmessage = ue),
      (M = function () {
        F.postMessage(null);
      });
  } else
    M = function () {
      _(ue, 0);
    };
  function w(C) {
    (R = C), S || ((S = !0), M());
  }
  function U(C, J) {
    V = _(function () {
      C(e.unstable_now());
    }, J);
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
      b || j || ((b = !0), w(T));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (P = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (C) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = p;
      }
      var E = p;
      p = J;
      try {
        return C();
      } finally {
        p = E;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, J) {
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
      var E = p;
      p = C;
      try {
        return J();
      } finally {
        p = E;
      }
    }),
    (e.unstable_scheduleCallback = function (C, J, E) {
      var H = e.unstable_now();
      switch (
        (typeof E == "object" && E !== null
          ? ((E = E.delay), (E = typeof E == "number" && 0 < E ? H + E : H))
          : (E = H),
        C)
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
        ($ = E + $),
        (C = {
          id: g++,
          callback: J,
          priorityLevel: C,
          startTime: E,
          expirationTime: $,
          sortIndex: -1,
        }),
        E > H
          ? ((C.sortIndex = E),
            t(h, C),
            n(c) === null &&
              C === n(h) &&
              (k ? (u(V), (V = -1)) : (k = !0), U(v, E - H)))
          : ((C.sortIndex = $), t(c, C), b || j || ((b = !0), w(T))),
        C
      );
    }),
    (e.unstable_shouldYield = oe),
    (e.unstable_wrapCallback = function (C) {
      var J = p;
      return function () {
        var E = p;
        p = J;
        try {
          return C.apply(this, arguments);
        } finally {
          p = E;
        }
      };
    });
})(Kc);
Qc.exports = Kc;
var Yf = Qc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xf = f,
  zt = Yf;
function de(e) {
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
var Jc = new Set(),
  gs = {};
function lr(e, t) {
  Pr(e, t), Pr(e + "Capture", t);
}
function Pr(e, t) {
  for (gs[e] = t, e = 0; e < t.length; e++) Jc.add(t[e]);
}
var vn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Al = Object.prototype.hasOwnProperty,
  Qf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Mi = {},
  Ei = {};
function Kf(e) {
  return Al.call(Ei, e)
    ? !0
    : Al.call(Mi, e)
    ? !1
    : Qf.test(e)
    ? (Ei[e] = !0)
    : ((Mi[e] = !0), !1);
}
function Jf(e, t, n, s) {
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
function Zf(e, t, n, s) {
  if (t === null || typeof t > "u" || Jf(e, t, n, s)) return !0;
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
function _t(e, t, n, s, o, l, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = s),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = a);
}
var vt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    vt[e] = new _t(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  vt[t] = new _t(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  vt[e] = new _t(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  vt[e] = new _t(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    vt[e] = new _t(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  vt[e] = new _t(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  vt[e] = new _t(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  vt[e] = new _t(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  vt[e] = new _t(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ta = /[\-:]([a-z])/g;
function Ra(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ta, Ra);
    vt[t] = new _t(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ta, Ra);
    vt[t] = new _t(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ta, Ra);
  vt[t] = new _t(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  vt[e] = new _t(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
vt.xlinkHref = new _t(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  vt[e] = new _t(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function $a(e, t, n, s) {
  var o = vt.hasOwnProperty(t) ? vt[t] : null;
  (o !== null
    ? o.type !== 0
    : s ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Zf(t, n, o, s) && (n = null),
    s || o === null
      ? Kf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var jn = Xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ls = Symbol.for("react.element"),
  fr = Symbol.for("react.portal"),
  pr = Symbol.for("react.fragment"),
  Aa = Symbol.for("react.strict_mode"),
  Ol = Symbol.for("react.profiler"),
  Zc = Symbol.for("react.provider"),
  ed = Symbol.for("react.context"),
  Oa = Symbol.for("react.forward_ref"),
  Ul = Symbol.for("react.suspense"),
  Ll = Symbol.for("react.suspense_list"),
  Ua = Symbol.for("react.memo"),
  kn = Symbol.for("react.lazy"),
  td = Symbol.for("react.offscreen"),
  Ii = Symbol.iterator;
function Wr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ii && e[Ii]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var st = Object.assign,
  ul;
function ns(e) {
  if (ul === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ul = (t && t[1]) || "";
    }
  return (
    `
` +
    ul +
    e
  );
}
var fl = !1;
function pl(e, t) {
  if (!e || fl) return "";
  fl = !0;
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
        } catch (h) {
          var s = h;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (h) {
          s = h;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (h) {
        s = h;
      }
      e();
    }
  } catch (h) {
    if (h && s && typeof h.stack == "string") {
      for (
        var o = h.stack.split(`
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
    (fl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ns(e) : "";
}
function ep(e) {
  switch (e.tag) {
    case 5:
      return ns(e.type);
    case 16:
      return ns("Lazy");
    case 13:
      return ns("Suspense");
    case 19:
      return ns("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = pl(e.type, !1)), e;
    case 11:
      return (e = pl(e.type.render, !1)), e;
    case 1:
      return (e = pl(e.type, !0)), e;
    default:
      return "";
  }
}
function Gl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case pr:
      return "Fragment";
    case fr:
      return "Portal";
    case Ol:
      return "Profiler";
    case Aa:
      return "StrictMode";
    case Ul:
      return "Suspense";
    case Ll:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ed:
        return (e.displayName || "Context") + ".Consumer";
      case Zc:
        return (e._context.displayName || "Context") + ".Provider";
      case Oa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ua:
        return (
          (t = e.displayName || null), t !== null ? t : Gl(e.type) || "Memo"
        );
      case kn:
        (t = e._payload), (e = e._init);
        try {
          return Gl(e(t));
        } catch {}
    }
  return null;
}
function tp(e) {
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
      return Gl(t);
    case 8:
      return t === Aa ? "StrictMode" : "Mode";
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
function Bn(e) {
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
function nd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function np(e) {
  var t = nd(e) ? "checked" : "value",
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
function Gs(e) {
  e._valueTracker || (e._valueTracker = np(e));
}
function rd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    s = "";
  return (
    e && (s = nd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = s),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function go(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function zl(e, t) {
  var n = t.checked;
  return st({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Pi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    s = t.checked != null ? t.checked : t.defaultChecked;
  (n = Bn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: s,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function sd(e, t) {
  (t = t.checked), t != null && $a(e, "checked", t, !1);
}
function Bl(e, t) {
  sd(e, t);
  var n = Bn(t.value),
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
    ? Fl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Fl(e, t.type, Bn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ti(e, t, n) {
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
function Fl(e, t, n) {
  (t !== "number" || go(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var rs = Array.isArray;
function Dr(e, t, n, s) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && s && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Bn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), s && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Hl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(de(91));
  return st({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ri(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(de(92));
      if (rs(n)) {
        if (1 < n.length) throw Error(de(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Bn(n) };
}
function od(e, t) {
  var n = Bn(t.value),
    s = Bn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    s != null && (e.defaultValue = "" + s);
}
function $i(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ld(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Vl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ld(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var zs,
  ad = (function (e) {
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
        zs = zs || document.createElement("div"),
          zs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = zs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function xs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ls = {
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
  rp = ["Webkit", "ms", "Moz", "O"];
Object.keys(ls).forEach(function (e) {
  rp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ls[t] = ls[e]);
  });
});
function id(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ls.hasOwnProperty(e) && ls[e])
    ? ("" + t).trim()
    : t + "px";
}
function cd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0,
        o = id(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, o) : (e[n] = o);
    }
}
var sp = st(
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
function ql(e, t) {
  if (t) {
    if (sp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(de(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(de(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(de(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(de(62));
  }
}
function Wl(e, t) {
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
var Yl = null;
function La(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Xl = null,
  kr = null,
  _r = null;
function Ai(e) {
  if ((e = As(e))) {
    if (typeof Xl != "function") throw Error(de(280));
    var t = e.stateNode;
    t && ((t = qo(t)), Xl(e.stateNode, e.type, t));
  }
}
function dd(e) {
  kr ? (_r ? _r.push(e) : (_r = [e])) : (kr = e);
}
function ud() {
  if (kr) {
    var e = kr,
      t = _r;
    if (((_r = kr = null), Ai(e), t)) for (e = 0; e < t.length; e++) Ai(t[e]);
  }
}
function fd(e, t) {
  return e(t);
}
function pd() {}
var ml = !1;
function md(e, t, n) {
  if (ml) return e(t, n);
  ml = !0;
  try {
    return fd(e, t, n);
  } finally {
    (ml = !1), (kr !== null || _r !== null) && (pd(), ud());
  }
}
function ys(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var s = qo(n);
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
  if (n && typeof n != "function") throw Error(de(231, t, typeof n));
  return n;
}
var Ql = !1;
if (vn)
  try {
    var Yr = {};
    Object.defineProperty(Yr, "passive", {
      get: function () {
        Ql = !0;
      },
    }),
      window.addEventListener("test", Yr, Yr),
      window.removeEventListener("test", Yr, Yr);
  } catch {
    Ql = !1;
  }
function op(e, t, n, s, o, l, a, i, c) {
  var h = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, h);
  } catch (g) {
    this.onError(g);
  }
}
var as = !1,
  xo = null,
  yo = !1,
  Kl = null,
  lp = {
    onError: function (e) {
      (as = !0), (xo = e);
    },
  };
function ap(e, t, n, s, o, l, a, i, c) {
  (as = !1), (xo = null), op.apply(lp, arguments);
}
function ip(e, t, n, s, o, l, a, i, c) {
  if ((ap.apply(this, arguments), as)) {
    if (as) {
      var h = xo;
      (as = !1), (xo = null);
    } else throw Error(de(198));
    yo || ((yo = !0), (Kl = h));
  }
}
function ar(e) {
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
function hd(e) {
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
function Oi(e) {
  if (ar(e) !== e) throw Error(de(188));
}
function cp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ar(e)), t === null)) throw Error(de(188));
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
        if (l === n) return Oi(o), e;
        if (l === s) return Oi(o), t;
        l = l.sibling;
      }
      throw Error(de(188));
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
        if (!a) throw Error(de(189));
      }
    }
    if (n.alternate !== s) throw Error(de(190));
  }
  if (n.tag !== 3) throw Error(de(188));
  return n.stateNode.current === n ? e : t;
}
function gd(e) {
  return (e = cp(e)), e !== null ? xd(e) : null;
}
function xd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = xd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var yd = zt.unstable_scheduleCallback,
  Ui = zt.unstable_cancelCallback,
  dp = zt.unstable_shouldYield,
  up = zt.unstable_requestPaint,
  it = zt.unstable_now,
  fp = zt.unstable_getCurrentPriorityLevel,
  Ga = zt.unstable_ImmediatePriority,
  vd = zt.unstable_UserBlockingPriority,
  vo = zt.unstable_NormalPriority,
  pp = zt.unstable_LowPriority,
  bd = zt.unstable_IdlePriority,
  Bo = null,
  un = null;
function mp(e) {
  if (un && typeof un.onCommitFiberRoot == "function")
    try {
      un.onCommitFiberRoot(Bo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var rn = Math.clz32 ? Math.clz32 : xp,
  hp = Math.log,
  gp = Math.LN2;
function xp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((hp(e) / gp) | 0)) | 0;
}
var Bs = 64,
  Fs = 4194304;
function ss(e) {
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
function bo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var s = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var i = a & ~o;
    i !== 0 ? (s = ss(i)) : ((l &= a), l !== 0 && (s = ss(l)));
  } else (a = n & ~o), a !== 0 ? (s = ss(a)) : l !== 0 && (s = ss(l));
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
      (n = 31 - rn(t)), (o = 1 << n), (s |= e[n]), (t &= ~o);
  return s;
}
function yp(e, t) {
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
function vp(e, t) {
  for (
    var n = e.suspendedLanes,
      s = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var a = 31 - rn(l),
      i = 1 << a,
      c = o[a];
    c === -1
      ? (!(i & n) || i & s) && (o[a] = yp(i, t))
      : c <= t && (e.expiredLanes |= i),
      (l &= ~i);
  }
}
function Jl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function wd() {
  var e = Bs;
  return (Bs <<= 1), !(Bs & 4194240) && (Bs = 64), e;
}
function hl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Rs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - rn(t)),
    (e[t] = n);
}
function bp(e, t) {
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
    var o = 31 - rn(n),
      l = 1 << o;
    (t[o] = 0), (s[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function za(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var s = 31 - rn(n),
      o = 1 << s;
    (o & t) | (e[s] & t) && (e[s] |= t), (n &= ~o);
  }
}
var qe = 0;
function Nd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var jd,
  Ba,
  Sd,
  Cd,
  Dd,
  Zl = !1,
  Hs = [],
  Rn = null,
  $n = null,
  An = null,
  vs = new Map(),
  bs = new Map(),
  Mn = [],
  wp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Li(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Rn = null;
      break;
    case "dragenter":
    case "dragleave":
      $n = null;
      break;
    case "mouseover":
    case "mouseout":
      An = null;
      break;
    case "pointerover":
    case "pointerout":
      vs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      bs.delete(t.pointerId);
  }
}
function Xr(e, t, n, s, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: s,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = As(t)), t !== null && Ba(t)),
      e)
    : ((e.eventSystemFlags |= s),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Np(e, t, n, s, o) {
  switch (t) {
    case "focusin":
      return (Rn = Xr(Rn, e, t, n, s, o)), !0;
    case "dragenter":
      return ($n = Xr($n, e, t, n, s, o)), !0;
    case "mouseover":
      return (An = Xr(An, e, t, n, s, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return vs.set(l, Xr(vs.get(l) || null, e, t, n, s, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), bs.set(l, Xr(bs.get(l) || null, e, t, n, s, o)), !0
      );
  }
  return !1;
}
function kd(e) {
  var t = Qn(e.target);
  if (t !== null) {
    var n = ar(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = hd(n)), t !== null)) {
          (e.blockedOn = t),
            Dd(e.priority, function () {
              Sd(n);
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
function so(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ea(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var s = new n.constructor(n.type, n);
      (Yl = s), n.target.dispatchEvent(s), (Yl = null);
    } else return (t = As(n)), t !== null && Ba(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Gi(e, t, n) {
  so(e) && n.delete(t);
}
function jp() {
  (Zl = !1),
    Rn !== null && so(Rn) && (Rn = null),
    $n !== null && so($n) && ($n = null),
    An !== null && so(An) && (An = null),
    vs.forEach(Gi),
    bs.forEach(Gi);
}
function Qr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Zl ||
      ((Zl = !0),
      zt.unstable_scheduleCallback(zt.unstable_NormalPriority, jp)));
}
function ws(e) {
  function t(o) {
    return Qr(o, e);
  }
  if (0 < Hs.length) {
    Qr(Hs[0], e);
    for (var n = 1; n < Hs.length; n++) {
      var s = Hs[n];
      s.blockedOn === e && (s.blockedOn = null);
    }
  }
  for (
    Rn !== null && Qr(Rn, e),
      $n !== null && Qr($n, e),
      An !== null && Qr(An, e),
      vs.forEach(t),
      bs.forEach(t),
      n = 0;
    n < Mn.length;
    n++
  )
    (s = Mn[n]), s.blockedOn === e && (s.blockedOn = null);
  for (; 0 < Mn.length && ((n = Mn[0]), n.blockedOn === null); )
    kd(n), n.blockedOn === null && Mn.shift();
}
var Mr = jn.ReactCurrentBatchConfig,
  wo = !0;
function Sp(e, t, n, s) {
  var o = qe,
    l = Mr.transition;
  Mr.transition = null;
  try {
    (qe = 1), Fa(e, t, n, s);
  } finally {
    (qe = o), (Mr.transition = l);
  }
}
function Cp(e, t, n, s) {
  var o = qe,
    l = Mr.transition;
  Mr.transition = null;
  try {
    (qe = 4), Fa(e, t, n, s);
  } finally {
    (qe = o), (Mr.transition = l);
  }
}
function Fa(e, t, n, s) {
  if (wo) {
    var o = ea(e, t, n, s);
    if (o === null) Cl(e, t, s, No, n), Li(e, s);
    else if (Np(o, e, t, n, s)) s.stopPropagation();
    else if ((Li(e, s), t & 4 && -1 < wp.indexOf(e))) {
      for (; o !== null; ) {
        var l = As(o);
        if (
          (l !== null && jd(l),
          (l = ea(e, t, n, s)),
          l === null && Cl(e, t, s, No, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && s.stopPropagation();
    } else Cl(e, t, s, null, n);
  }
}
var No = null;
function ea(e, t, n, s) {
  if (((No = null), (e = La(s)), (e = Qn(e)), e !== null))
    if (((t = ar(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = hd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (No = e), null;
}
function _d(e) {
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
      switch (fp()) {
        case Ga:
          return 1;
        case vd:
          return 4;
        case vo:
        case pp:
          return 16;
        case bd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var In = null,
  Ha = null,
  oo = null;
function Md() {
  if (oo) return oo;
  var e,
    t = Ha,
    n = t.length,
    s,
    o = "value" in In ? In.value : In.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (s = 1; s <= a && t[n - s] === o[l - s]; s++);
  return (oo = o.slice(e, 1 < s ? 1 - s : void 0));
}
function lo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Vs() {
  return !0;
}
function zi() {
  return !1;
}
function Ft(e) {
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
        ? Vs
        : zi),
      (this.isPropagationStopped = zi),
      this
    );
  }
  return (
    st(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Vs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Vs));
      },
      persist: function () {},
      isPersistent: Vs,
    }),
    t
  );
}
var zr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Va = Ft(zr),
  $s = st({}, zr, { view: 0, detail: 0 }),
  Dp = Ft($s),
  gl,
  xl,
  Kr,
  Fo = st({}, $s, {
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
    getModifierState: qa,
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
        : (e !== Kr &&
            (Kr && e.type === "mousemove"
              ? ((gl = e.screenX - Kr.screenX), (xl = e.screenY - Kr.screenY))
              : (xl = gl = 0),
            (Kr = e)),
          gl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : xl;
    },
  }),
  Bi = Ft(Fo),
  kp = st({}, Fo, { dataTransfer: 0 }),
  _p = Ft(kp),
  Mp = st({}, $s, { relatedTarget: 0 }),
  yl = Ft(Mp),
  Ep = st({}, zr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ip = Ft(Ep),
  Pp = st({}, zr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Tp = Ft(Pp),
  Rp = st({}, zr, { data: 0 }),
  Fi = Ft(Rp),
  $p = {
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
  Ap = {
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
  Op = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Up(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Op[e]) ? !!t[e] : !1;
}
function qa() {
  return Up;
}
var Lp = st({}, $s, {
    key: function (e) {
      if (e.key) {
        var t = $p[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = lo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Ap[e.keyCode] || "Unidentified"
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
    getModifierState: qa,
    charCode: function (e) {
      return e.type === "keypress" ? lo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? lo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Gp = Ft(Lp),
  zp = st({}, Fo, {
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
  Hi = Ft(zp),
  Bp = st({}, $s, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: qa,
  }),
  Fp = Ft(Bp),
  Hp = st({}, zr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vp = Ft(Hp),
  qp = st({}, Fo, {
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
  Wp = Ft(qp),
  Yp = [9, 13, 27, 32],
  Wa = vn && "CompositionEvent" in window,
  is = null;
vn && "documentMode" in document && (is = document.documentMode);
var Xp = vn && "TextEvent" in window && !is,
  Ed = vn && (!Wa || (is && 8 < is && 11 >= is)),
  Vi = " ",
  qi = !1;
function Id(e, t) {
  switch (e) {
    case "keyup":
      return Yp.indexOf(t.keyCode) !== -1;
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
function Pd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var mr = !1;
function Qp(e, t) {
  switch (e) {
    case "compositionend":
      return Pd(t);
    case "keypress":
      return t.which !== 32 ? null : ((qi = !0), Vi);
    case "textInput":
      return (e = t.data), e === Vi && qi ? null : e;
    default:
      return null;
  }
}
function Kp(e, t) {
  if (mr)
    return e === "compositionend" || (!Wa && Id(e, t))
      ? ((e = Md()), (oo = Ha = In = null), (mr = !1), e)
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
      return Ed && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Jp = {
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
function Wi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Jp[e.type] : t === "textarea";
}
function Td(e, t, n, s) {
  dd(s),
    (t = jo(t, "onChange")),
    0 < t.length &&
      ((n = new Va("onChange", "change", null, n, s)),
      e.push({ event: n, listeners: t }));
}
var cs = null,
  Ns = null;
function Zp(e) {
  Hd(e, 0);
}
function Ho(e) {
  var t = xr(e);
  if (rd(t)) return e;
}
function em(e, t) {
  if (e === "change") return t;
}
var Rd = !1;
if (vn) {
  var vl;
  if (vn) {
    var bl = "oninput" in document;
    if (!bl) {
      var Yi = document.createElement("div");
      Yi.setAttribute("oninput", "return;"),
        (bl = typeof Yi.oninput == "function");
    }
    vl = bl;
  } else vl = !1;
  Rd = vl && (!document.documentMode || 9 < document.documentMode);
}
function Xi() {
  cs && (cs.detachEvent("onpropertychange", $d), (Ns = cs = null));
}
function $d(e) {
  if (e.propertyName === "value" && Ho(Ns)) {
    var t = [];
    Td(t, Ns, e, La(e)), md(Zp, t);
  }
}
function tm(e, t, n) {
  e === "focusin"
    ? (Xi(), (cs = t), (Ns = n), cs.attachEvent("onpropertychange", $d))
    : e === "focusout" && Xi();
}
function nm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ho(Ns);
}
function rm(e, t) {
  if (e === "click") return Ho(t);
}
function sm(e, t) {
  if (e === "input" || e === "change") return Ho(t);
}
function om(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var on = typeof Object.is == "function" ? Object.is : om;
function js(e, t) {
  if (on(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    s = Object.keys(t);
  if (n.length !== s.length) return !1;
  for (s = 0; s < n.length; s++) {
    var o = n[s];
    if (!Al.call(t, o) || !on(e[o], t[o])) return !1;
  }
  return !0;
}
function Qi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ki(e, t) {
  var n = Qi(e);
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
    n = Qi(n);
  }
}
function Ad(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ad(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Od() {
  for (var e = window, t = go(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = go(e.document);
  }
  return t;
}
function Ya(e) {
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
function lm(e) {
  var t = Od(),
    n = e.focusedElem,
    s = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ad(n.ownerDocument.documentElement, n)
  ) {
    if (s !== null && Ya(n)) {
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
          (o = Ki(n, l));
        var a = Ki(n, s);
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
var am = vn && "documentMode" in document && 11 >= document.documentMode,
  hr = null,
  ta = null,
  ds = null,
  na = !1;
function Ji(e, t, n) {
  var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  na ||
    hr == null ||
    hr !== go(s) ||
    ((s = hr),
    "selectionStart" in s && Ya(s)
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
    (ds && js(ds, s)) ||
      ((ds = s),
      (s = jo(ta, "onSelect")),
      0 < s.length &&
        ((t = new Va("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: s }),
        (t.target = hr))));
}
function qs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var gr = {
    animationend: qs("Animation", "AnimationEnd"),
    animationiteration: qs("Animation", "AnimationIteration"),
    animationstart: qs("Animation", "AnimationStart"),
    transitionend: qs("Transition", "TransitionEnd"),
  },
  wl = {},
  Ud = {};
vn &&
  ((Ud = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete gr.animationend.animation,
    delete gr.animationiteration.animation,
    delete gr.animationstart.animation),
  "TransitionEvent" in window || delete gr.transitionend.transition);
function Vo(e) {
  if (wl[e]) return wl[e];
  if (!gr[e]) return e;
  var t = gr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ud) return (wl[e] = t[n]);
  return e;
}
var Ld = Vo("animationend"),
  Gd = Vo("animationiteration"),
  zd = Vo("animationstart"),
  Bd = Vo("transitionend"),
  Fd = new Map(),
  Zi =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Hn(e, t) {
  Fd.set(e, t), lr(t, [e]);
}
for (var Nl = 0; Nl < Zi.length; Nl++) {
  var jl = Zi[Nl],
    im = jl.toLowerCase(),
    cm = jl[0].toUpperCase() + jl.slice(1);
  Hn(im, "on" + cm);
}
Hn(Ld, "onAnimationEnd");
Hn(Gd, "onAnimationIteration");
Hn(zd, "onAnimationStart");
Hn("dblclick", "onDoubleClick");
Hn("focusin", "onFocus");
Hn("focusout", "onBlur");
Hn(Bd, "onTransitionEnd");
Pr("onMouseEnter", ["mouseout", "mouseover"]);
Pr("onMouseLeave", ["mouseout", "mouseover"]);
Pr("onPointerEnter", ["pointerout", "pointerover"]);
Pr("onPointerLeave", ["pointerout", "pointerover"]);
lr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
lr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
lr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
lr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
lr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
lr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var os =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  dm = new Set("cancel close invalid load scroll toggle".split(" ").concat(os));
function ec(e, t, n) {
  var s = e.type || "unknown-event";
  (e.currentTarget = n), ip(s, t, void 0, e), (e.currentTarget = null);
}
function Hd(e, t) {
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
            h = i.currentTarget;
          if (((i = i.listener), c !== l && o.isPropagationStopped())) break e;
          ec(o, i, h), (l = c);
        }
      else
        for (a = 0; a < s.length; a++) {
          if (
            ((i = s[a]),
            (c = i.instance),
            (h = i.currentTarget),
            (i = i.listener),
            c !== l && o.isPropagationStopped())
          )
            break e;
          ec(o, i, h), (l = c);
        }
    }
  }
  if (yo) throw ((e = Kl), (yo = !1), (Kl = null), e);
}
function Xe(e, t) {
  var n = t[aa];
  n === void 0 && (n = t[aa] = new Set());
  var s = e + "__bubble";
  n.has(s) || (Vd(t, e, 2, !1), n.add(s));
}
function Sl(e, t, n) {
  var s = 0;
  t && (s |= 4), Vd(n, e, s, t);
}
var Ws = "_reactListening" + Math.random().toString(36).slice(2);
function Ss(e) {
  if (!e[Ws]) {
    (e[Ws] = !0),
      Jc.forEach(function (n) {
        n !== "selectionchange" && (dm.has(n) || Sl(n, !1, e), Sl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ws] || ((t[Ws] = !0), Sl("selectionchange", !1, t));
  }
}
function Vd(e, t, n, s) {
  switch (_d(t)) {
    case 1:
      var o = Sp;
      break;
    case 4:
      o = Cp;
      break;
    default:
      o = Fa;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ql ||
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
function Cl(e, t, n, s, o) {
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
          if (((a = Qn(i)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            s = l = a;
            continue e;
          }
          i = i.parentNode;
        }
      }
      s = s.return;
    }
  md(function () {
    var h = l,
      g = La(n),
      m = [];
    e: {
      var p = Fd.get(e);
      if (p !== void 0) {
        var j = Va,
          b = e;
        switch (e) {
          case "keypress":
            if (lo(n) === 0) break e;
          case "keydown":
          case "keyup":
            j = Gp;
            break;
          case "focusin":
            (b = "focus"), (j = yl);
            break;
          case "focusout":
            (b = "blur"), (j = yl);
            break;
          case "beforeblur":
          case "afterblur":
            j = yl;
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
            j = Bi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            j = _p;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            j = Fp;
            break;
          case Ld:
          case Gd:
          case zd:
            j = Ip;
            break;
          case Bd:
            j = Vp;
            break;
          case "scroll":
            j = Dp;
            break;
          case "wheel":
            j = Wp;
            break;
          case "copy":
          case "cut":
          case "paste":
            j = Tp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            j = Hi;
        }
        var k = (t & 4) !== 0,
          _ = !k && e === "scroll",
          u = k ? (p !== null ? p + "Capture" : null) : p;
        k = [];
        for (var d = h, x; d !== null; ) {
          x = d;
          var v = x.stateNode;
          if (
            (x.tag === 5 &&
              v !== null &&
              ((x = v),
              u !== null && ((v = ys(d, u)), v != null && k.push(Cs(d, v, x)))),
            _)
          )
            break;
          d = d.return;
        }
        0 < k.length &&
          ((p = new j(p, b, null, n, g)), m.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (j = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Yl &&
            (b = n.relatedTarget || n.fromElement) &&
            (Qn(b) || b[bn]))
        )
          break e;
        if (
          (j || p) &&
          ((p =
            g.window === g
              ? g
              : (p = g.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          j
            ? ((b = n.relatedTarget || n.toElement),
              (j = h),
              (b = b ? Qn(b) : null),
              b !== null &&
                ((_ = ar(b)), b !== _ || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
            : ((j = null), (b = h)),
          j !== b)
        ) {
          if (
            ((k = Bi),
            (v = "onMouseLeave"),
            (u = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = Hi),
              (v = "onPointerLeave"),
              (u = "onPointerEnter"),
              (d = "pointer")),
            (_ = j == null ? p : xr(j)),
            (x = b == null ? p : xr(b)),
            (p = new k(v, d + "leave", j, n, g)),
            (p.target = _),
            (p.relatedTarget = x),
            (v = null),
            Qn(g) === h &&
              ((k = new k(u, d + "enter", b, n, g)),
              (k.target = x),
              (k.relatedTarget = _),
              (v = k)),
            (_ = v),
            j && b)
          )
            t: {
              for (k = j, u = b, d = 0, x = k; x; x = ur(x)) d++;
              for (x = 0, v = u; v; v = ur(v)) x++;
              for (; 0 < d - x; ) (k = ur(k)), d--;
              for (; 0 < x - d; ) (u = ur(u)), x--;
              for (; d--; ) {
                if (k === u || (u !== null && k === u.alternate)) break t;
                (k = ur(k)), (u = ur(u));
              }
              k = null;
            }
          else k = null;
          j !== null && tc(m, p, j, k, !1),
            b !== null && _ !== null && tc(m, _, b, k, !0);
        }
      }
      e: {
        if (
          ((p = h ? xr(h) : window),
          (j = p.nodeName && p.nodeName.toLowerCase()),
          j === "select" || (j === "input" && p.type === "file"))
        )
          var T = em;
        else if (Wi(p))
          if (Rd) T = sm;
          else {
            T = nm;
            var S = tm;
          }
        else
          (j = p.nodeName) &&
            j.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (T = rm);
        if (T && (T = T(e, h))) {
          Td(m, T, n, g);
          break e;
        }
        S && S(e, p, h),
          e === "focusout" &&
            (S = p._wrapperState) &&
            S.controlled &&
            p.type === "number" &&
            Fl(p, "number", p.value);
      }
      switch (((S = h ? xr(h) : window), e)) {
        case "focusin":
          (Wi(S) || S.contentEditable === "true") &&
            ((hr = S), (ta = h), (ds = null));
          break;
        case "focusout":
          ds = ta = hr = null;
          break;
        case "mousedown":
          na = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (na = !1), Ji(m, n, g);
          break;
        case "selectionchange":
          if (am) break;
        case "keydown":
        case "keyup":
          Ji(m, n, g);
      }
      var R;
      if (Wa)
        e: {
          switch (e) {
            case "compositionstart":
              var V = "onCompositionStart";
              break e;
            case "compositionend":
              V = "onCompositionEnd";
              break e;
            case "compositionupdate":
              V = "onCompositionUpdate";
              break e;
          }
          V = void 0;
        }
      else
        mr
          ? Id(e, n) && (V = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (V = "onCompositionStart");
      V &&
        (Ed &&
          n.locale !== "ko" &&
          (mr || V !== "onCompositionStart"
            ? V === "onCompositionEnd" && mr && (R = Md())
            : ((In = g),
              (Ha = "value" in In ? In.value : In.textContent),
              (mr = !0))),
        (S = jo(h, V)),
        0 < S.length &&
          ((V = new Fi(V, e, null, n, g)),
          m.push({ event: V, listeners: S }),
          R ? (V.data = R) : ((R = Pd(n)), R !== null && (V.data = R)))),
        (R = Xp ? Qp(e, n) : Kp(e, n)) &&
          ((h = jo(h, "onBeforeInput")),
          0 < h.length &&
            ((g = new Fi("onBeforeInput", "beforeinput", null, n, g)),
            m.push({ event: g, listeners: h }),
            (g.data = R)));
    }
    Hd(m, t);
  });
}
function Cs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function jo(e, t) {
  for (var n = t + "Capture", s = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = ys(e, n)),
      l != null && s.unshift(Cs(e, l, o)),
      (l = ys(e, t)),
      l != null && s.push(Cs(e, l, o))),
      (e = e.return);
  }
  return s;
}
function ur(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function tc(e, t, n, s, o) {
  for (var l = t._reactName, a = []; n !== null && n !== s; ) {
    var i = n,
      c = i.alternate,
      h = i.stateNode;
    if (c !== null && c === s) break;
    i.tag === 5 &&
      h !== null &&
      ((i = h),
      o
        ? ((c = ys(n, l)), c != null && a.unshift(Cs(n, c, i)))
        : o || ((c = ys(n, l)), c != null && a.push(Cs(n, c, i)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var um = /\r\n?/g,
  fm = /\u0000|\uFFFD/g;
function nc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      um,
      `
`
    )
    .replace(fm, "");
}
function Ys(e, t, n) {
  if (((t = nc(t)), nc(e) !== t && n)) throw Error(de(425));
}
function So() {}
var ra = null,
  sa = null;
function oa(e, t) {
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
var la = typeof setTimeout == "function" ? setTimeout : void 0,
  pm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  rc = typeof Promise == "function" ? Promise : void 0,
  mm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof rc < "u"
      ? function (e) {
          return rc.resolve(null).then(e).catch(hm);
        }
      : la;
function hm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Dl(e, t) {
  var n = t,
    s = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (s === 0) {
          e.removeChild(o), ws(t);
          return;
        }
        s--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || s++;
    n = o;
  } while (n);
  ws(t);
}
function On(e) {
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
function sc(e) {
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
var Br = Math.random().toString(36).slice(2),
  dn = "__reactFiber$" + Br,
  Ds = "__reactProps$" + Br,
  bn = "__reactContainer$" + Br,
  aa = "__reactEvents$" + Br,
  gm = "__reactListeners$" + Br,
  xm = "__reactHandles$" + Br;
function Qn(e) {
  var t = e[dn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[bn] || n[dn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = sc(e); e !== null; ) {
          if ((n = e[dn])) return n;
          e = sc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function As(e) {
  return (
    (e = e[dn] || e[bn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function xr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(de(33));
}
function qo(e) {
  return e[Ds] || null;
}
var ia = [],
  yr = -1;
function Vn(e) {
  return { current: e };
}
function Qe(e) {
  0 > yr || ((e.current = ia[yr]), (ia[yr] = null), yr--);
}
function Ye(e, t) {
  yr++, (ia[yr] = e.current), (e.current = t);
}
var Fn = {},
  jt = Vn(Fn),
  Rt = Vn(!1),
  tr = Fn;
function Tr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Fn;
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
function $t(e) {
  return (e = e.childContextTypes), e != null;
}
function Co() {
  Qe(Rt), Qe(jt);
}
function oc(e, t, n) {
  if (jt.current !== Fn) throw Error(de(168));
  Ye(jt, t), Ye(Rt, n);
}
function qd(e, t, n) {
  var s = e.stateNode;
  if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
    return n;
  s = s.getChildContext();
  for (var o in s) if (!(o in t)) throw Error(de(108, tp(e) || "Unknown", o));
  return st({}, n, s);
}
function Do(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Fn),
    (tr = jt.current),
    Ye(jt, e),
    Ye(Rt, Rt.current),
    !0
  );
}
function lc(e, t, n) {
  var s = e.stateNode;
  if (!s) throw Error(de(169));
  n
    ? ((e = qd(e, t, tr)),
      (s.__reactInternalMemoizedMergedChildContext = e),
      Qe(Rt),
      Qe(jt),
      Ye(jt, e))
    : Qe(Rt),
    Ye(Rt, n);
}
var hn = null,
  Wo = !1,
  kl = !1;
function Wd(e) {
  hn === null ? (hn = [e]) : hn.push(e);
}
function ym(e) {
  (Wo = !0), Wd(e);
}
function qn() {
  if (!kl && hn !== null) {
    kl = !0;
    var e = 0,
      t = qe;
    try {
      var n = hn;
      for (qe = 1; e < n.length; e++) {
        var s = n[e];
        do s = s(!0);
        while (s !== null);
      }
      (hn = null), (Wo = !1);
    } catch (o) {
      throw (hn !== null && (hn = hn.slice(e + 1)), yd(Ga, qn), o);
    } finally {
      (qe = t), (kl = !1);
    }
  }
  return null;
}
var vr = [],
  br = 0,
  ko = null,
  _o = 0,
  Ht = [],
  Vt = 0,
  nr = null,
  gn = 1,
  xn = "";
function Yn(e, t) {
  (vr[br++] = _o), (vr[br++] = ko), (ko = e), (_o = t);
}
function Yd(e, t, n) {
  (Ht[Vt++] = gn), (Ht[Vt++] = xn), (Ht[Vt++] = nr), (nr = e);
  var s = gn;
  e = xn;
  var o = 32 - rn(s) - 1;
  (s &= ~(1 << o)), (n += 1);
  var l = 32 - rn(t) + o;
  if (30 < l) {
    var a = o - (o % 5);
    (l = (s & ((1 << a) - 1)).toString(32)),
      (s >>= a),
      (o -= a),
      (gn = (1 << (32 - rn(t) + o)) | (n << o) | s),
      (xn = l + e);
  } else (gn = (1 << l) | (n << o) | s), (xn = e);
}
function Xa(e) {
  e.return !== null && (Yn(e, 1), Yd(e, 1, 0));
}
function Qa(e) {
  for (; e === ko; )
    (ko = vr[--br]), (vr[br] = null), (_o = vr[--br]), (vr[br] = null);
  for (; e === nr; )
    (nr = Ht[--Vt]),
      (Ht[Vt] = null),
      (xn = Ht[--Vt]),
      (Ht[Vt] = null),
      (gn = Ht[--Vt]),
      (Ht[Vt] = null);
}
var Gt = null,
  Lt = null,
  et = !1,
  nn = null;
function Xd(e, t) {
  var n = qt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ac(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Gt = e), (Lt = On(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Gt = e), (Lt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = nr !== null ? { id: gn, overflow: xn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = qt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Gt = e),
            (Lt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ca(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function da(e) {
  if (et) {
    var t = Lt;
    if (t) {
      var n = t;
      if (!ac(e, t)) {
        if (ca(e)) throw Error(de(418));
        t = On(n.nextSibling);
        var s = Gt;
        t && ac(e, t)
          ? Xd(s, n)
          : ((e.flags = (e.flags & -4097) | 2), (et = !1), (Gt = e));
      }
    } else {
      if (ca(e)) throw Error(de(418));
      (e.flags = (e.flags & -4097) | 2), (et = !1), (Gt = e);
    }
  }
}
function ic(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Gt = e;
}
function Xs(e) {
  if (e !== Gt) return !1;
  if (!et) return ic(e), (et = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !oa(e.type, e.memoizedProps))),
    t && (t = Lt))
  ) {
    if (ca(e)) throw (Qd(), Error(de(418)));
    for (; t; ) Xd(e, t), (t = On(t.nextSibling));
  }
  if ((ic(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(de(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Lt = On(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Lt = null;
    }
  } else Lt = Gt ? On(e.stateNode.nextSibling) : null;
  return !0;
}
function Qd() {
  for (var e = Lt; e; ) e = On(e.nextSibling);
}
function Rr() {
  (Lt = Gt = null), (et = !1);
}
function Ka(e) {
  nn === null ? (nn = [e]) : nn.push(e);
}
var vm = jn.ReactCurrentBatchConfig;
function Jr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(de(309));
        var s = n.stateNode;
      }
      if (!s) throw Error(de(147, e));
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
    if (typeof e != "string") throw Error(de(284));
    if (!n._owner) throw Error(de(290, e));
  }
  return e;
}
function Qs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      de(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function cc(e) {
  var t = e._init;
  return t(e._payload);
}
function Kd(e) {
  function t(u, d) {
    if (e) {
      var x = u.deletions;
      x === null ? ((u.deletions = [d]), (u.flags |= 16)) : x.push(d);
    }
  }
  function n(u, d) {
    if (!e) return null;
    for (; d !== null; ) t(u, d), (d = d.sibling);
    return null;
  }
  function s(u, d) {
    for (u = new Map(); d !== null; )
      d.key !== null ? u.set(d.key, d) : u.set(d.index, d), (d = d.sibling);
    return u;
  }
  function o(u, d) {
    return (u = zn(u, d)), (u.index = 0), (u.sibling = null), u;
  }
  function l(u, d, x) {
    return (
      (u.index = x),
      e
        ? ((x = u.alternate),
          x !== null
            ? ((x = x.index), x < d ? ((u.flags |= 2), d) : x)
            : ((u.flags |= 2), d))
        : ((u.flags |= 1048576), d)
    );
  }
  function a(u) {
    return e && u.alternate === null && (u.flags |= 2), u;
  }
  function i(u, d, x, v) {
    return d === null || d.tag !== 6
      ? ((d = Rl(x, u.mode, v)), (d.return = u), d)
      : ((d = o(d, x)), (d.return = u), d);
  }
  function c(u, d, x, v) {
    var T = x.type;
    return T === pr
      ? g(u, d, x.props.children, v, x.key)
      : d !== null &&
        (d.elementType === T ||
          (typeof T == "object" &&
            T !== null &&
            T.$$typeof === kn &&
            cc(T) === d.type))
      ? ((v = o(d, x.props)), (v.ref = Jr(u, d, x)), (v.return = u), v)
      : ((v = mo(x.type, x.key, x.props, null, u.mode, v)),
        (v.ref = Jr(u, d, x)),
        (v.return = u),
        v);
  }
  function h(u, d, x, v) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== x.containerInfo ||
      d.stateNode.implementation !== x.implementation
      ? ((d = $l(x, u.mode, v)), (d.return = u), d)
      : ((d = o(d, x.children || [])), (d.return = u), d);
  }
  function g(u, d, x, v, T) {
    return d === null || d.tag !== 7
      ? ((d = er(x, u.mode, v, T)), (d.return = u), d)
      : ((d = o(d, x)), (d.return = u), d);
  }
  function m(u, d, x) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = Rl("" + d, u.mode, x)), (d.return = u), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Ls:
          return (
            (x = mo(d.type, d.key, d.props, null, u.mode, x)),
            (x.ref = Jr(u, null, d)),
            (x.return = u),
            x
          );
        case fr:
          return (d = $l(d, u.mode, x)), (d.return = u), d;
        case kn:
          var v = d._init;
          return m(u, v(d._payload), x);
      }
      if (rs(d) || Wr(d))
        return (d = er(d, u.mode, x, null)), (d.return = u), d;
      Qs(u, d);
    }
    return null;
  }
  function p(u, d, x, v) {
    var T = d !== null ? d.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return T !== null ? null : i(u, d, "" + x, v);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ls:
          return x.key === T ? c(u, d, x, v) : null;
        case fr:
          return x.key === T ? h(u, d, x, v) : null;
        case kn:
          return (T = x._init), p(u, d, T(x._payload), v);
      }
      if (rs(x) || Wr(x)) return T !== null ? null : g(u, d, x, v, null);
      Qs(u, x);
    }
    return null;
  }
  function j(u, d, x, v, T) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (u = u.get(x) || null), i(d, u, "" + v, T);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ls:
          return (u = u.get(v.key === null ? x : v.key) || null), c(d, u, v, T);
        case fr:
          return (u = u.get(v.key === null ? x : v.key) || null), h(d, u, v, T);
        case kn:
          var S = v._init;
          return j(u, d, x, S(v._payload), T);
      }
      if (rs(v) || Wr(v)) return (u = u.get(x) || null), g(d, u, v, T, null);
      Qs(d, v);
    }
    return null;
  }
  function b(u, d, x, v) {
    for (
      var T = null, S = null, R = d, V = (d = 0), P = null;
      R !== null && V < x.length;
      V++
    ) {
      R.index > V ? ((P = R), (R = null)) : (P = R.sibling);
      var A = p(u, R, x[V], v);
      if (A === null) {
        R === null && (R = P);
        break;
      }
      e && R && A.alternate === null && t(u, R),
        (d = l(A, d, V)),
        S === null ? (T = A) : (S.sibling = A),
        (S = A),
        (R = P);
    }
    if (V === x.length) return n(u, R), et && Yn(u, V), T;
    if (R === null) {
      for (; V < x.length; V++)
        (R = m(u, x[V], v)),
          R !== null &&
            ((d = l(R, d, V)), S === null ? (T = R) : (S.sibling = R), (S = R));
      return et && Yn(u, V), T;
    }
    for (R = s(u, R); V < x.length; V++)
      (P = j(R, u, V, x[V], v)),
        P !== null &&
          (e && P.alternate !== null && R.delete(P.key === null ? V : P.key),
          (d = l(P, d, V)),
          S === null ? (T = P) : (S.sibling = P),
          (S = P));
    return (
      e &&
        R.forEach(function (oe) {
          return t(u, oe);
        }),
      et && Yn(u, V),
      T
    );
  }
  function k(u, d, x, v) {
    var T = Wr(x);
    if (typeof T != "function") throw Error(de(150));
    if (((x = T.call(x)), x == null)) throw Error(de(151));
    for (
      var S = (T = null), R = d, V = (d = 0), P = null, A = x.next();
      R !== null && !A.done;
      V++, A = x.next()
    ) {
      R.index > V ? ((P = R), (R = null)) : (P = R.sibling);
      var oe = p(u, R, A.value, v);
      if (oe === null) {
        R === null && (R = P);
        break;
      }
      e && R && oe.alternate === null && t(u, R),
        (d = l(oe, d, V)),
        S === null ? (T = oe) : (S.sibling = oe),
        (S = oe),
        (R = P);
    }
    if (A.done) return n(u, R), et && Yn(u, V), T;
    if (R === null) {
      for (; !A.done; V++, A = x.next())
        (A = m(u, A.value, v)),
          A !== null &&
            ((d = l(A, d, V)), S === null ? (T = A) : (S.sibling = A), (S = A));
      return et && Yn(u, V), T;
    }
    for (R = s(u, R); !A.done; V++, A = x.next())
      (A = j(R, u, V, A.value, v)),
        A !== null &&
          (e && A.alternate !== null && R.delete(A.key === null ? V : A.key),
          (d = l(A, d, V)),
          S === null ? (T = A) : (S.sibling = A),
          (S = A));
    return (
      e &&
        R.forEach(function (ue) {
          return t(u, ue);
        }),
      et && Yn(u, V),
      T
    );
  }
  function _(u, d, x, v) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === pr &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case Ls:
          e: {
            for (var T = x.key, S = d; S !== null; ) {
              if (S.key === T) {
                if (((T = x.type), T === pr)) {
                  if (S.tag === 7) {
                    n(u, S.sibling),
                      (d = o(S, x.props.children)),
                      (d.return = u),
                      (u = d);
                    break e;
                  }
                } else if (
                  S.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === kn &&
                    cc(T) === S.type)
                ) {
                  n(u, S.sibling),
                    (d = o(S, x.props)),
                    (d.ref = Jr(u, S, x)),
                    (d.return = u),
                    (u = d);
                  break e;
                }
                n(u, S);
                break;
              } else t(u, S);
              S = S.sibling;
            }
            x.type === pr
              ? ((d = er(x.props.children, u.mode, v, x.key)),
                (d.return = u),
                (u = d))
              : ((v = mo(x.type, x.key, x.props, null, u.mode, v)),
                (v.ref = Jr(u, d, x)),
                (v.return = u),
                (u = v));
          }
          return a(u);
        case fr:
          e: {
            for (S = x.key; d !== null; ) {
              if (d.key === S)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === x.containerInfo &&
                  d.stateNode.implementation === x.implementation
                ) {
                  n(u, d.sibling),
                    (d = o(d, x.children || [])),
                    (d.return = u),
                    (u = d);
                  break e;
                } else {
                  n(u, d);
                  break;
                }
              else t(u, d);
              d = d.sibling;
            }
            (d = $l(x, u.mode, v)), (d.return = u), (u = d);
          }
          return a(u);
        case kn:
          return (S = x._init), _(u, d, S(x._payload), v);
      }
      if (rs(x)) return b(u, d, x, v);
      if (Wr(x)) return k(u, d, x, v);
      Qs(u, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        d !== null && d.tag === 6
          ? (n(u, d.sibling), (d = o(d, x)), (d.return = u), (u = d))
          : (n(u, d), (d = Rl(x, u.mode, v)), (d.return = u), (u = d)),
        a(u))
      : n(u, d);
  }
  return _;
}
var $r = Kd(!0),
  Jd = Kd(!1),
  Mo = Vn(null),
  Eo = null,
  wr = null,
  Ja = null;
function Za() {
  Ja = wr = Eo = null;
}
function ei(e) {
  var t = Mo.current;
  Qe(Mo), (e._currentValue = t);
}
function ua(e, t, n) {
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
function Er(e, t) {
  (Eo = e),
    (Ja = wr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (It = !0), (e.firstContext = null));
}
function Yt(e) {
  var t = e._currentValue;
  if (Ja !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), wr === null)) {
      if (Eo === null) throw Error(de(308));
      (wr = e), (Eo.dependencies = { lanes: 0, firstContext: e });
    } else wr = wr.next = e;
  return t;
}
var Kn = null;
function ti(e) {
  Kn === null ? (Kn = [e]) : Kn.push(e);
}
function Zd(e, t, n, s) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ti(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    wn(e, s)
  );
}
function wn(e, t) {
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
var _n = !1;
function ni(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function eu(e, t) {
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
function yn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Un(e, t, n) {
  var s = e.updateQueue;
  if (s === null) return null;
  if (((s = s.shared), Fe & 2)) {
    var o = s.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (s.pending = t),
      wn(e, n)
    );
  }
  return (
    (o = s.interleaved),
    o === null ? ((t.next = t), ti(s)) : ((t.next = o.next), (o.next = t)),
    (s.interleaved = t),
    wn(e, n)
  );
}
function ao(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var s = t.lanes;
    (s &= e.pendingLanes), (n |= s), (t.lanes = n), za(e, n);
  }
}
function dc(e, t) {
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
function Io(e, t, n, s) {
  var o = e.updateQueue;
  _n = !1;
  var l = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    i = o.shared.pending;
  if (i !== null) {
    o.shared.pending = null;
    var c = i,
      h = c.next;
    (c.next = null), a === null ? (l = h) : (a.next = h), (a = c);
    var g = e.alternate;
    g !== null &&
      ((g = g.updateQueue),
      (i = g.lastBaseUpdate),
      i !== a &&
        (i === null ? (g.firstBaseUpdate = h) : (i.next = h),
        (g.lastBaseUpdate = c)));
  }
  if (l !== null) {
    var m = o.baseState;
    (a = 0), (g = h = c = null), (i = l);
    do {
      var p = i.lane,
        j = i.eventTime;
      if ((s & p) === p) {
        g !== null &&
          (g = g.next =
            {
              eventTime: j,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var b = e,
            k = i;
          switch (((p = t), (j = n), k.tag)) {
            case 1:
              if (((b = k.payload), typeof b == "function")) {
                m = b.call(j, m, p);
                break e;
              }
              m = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (
                ((b = k.payload),
                (p = typeof b == "function" ? b.call(j, m, p) : b),
                p == null)
              )
                break e;
              m = st({}, m, p);
              break e;
            case 2:
              _n = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [i]) : p.push(i));
      } else
        (j = {
          eventTime: j,
          lane: p,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          g === null ? ((h = g = j), (c = m)) : (g = g.next = j),
          (a |= p);
      if (((i = i.next), i === null)) {
        if (((i = o.shared.pending), i === null)) break;
        (p = i),
          (i = p.next),
          (p.next = null),
          (o.lastBaseUpdate = p),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (g === null && (c = m),
      (o.baseState = c),
      (o.firstBaseUpdate = h),
      (o.lastBaseUpdate = g),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (sr |= a), (e.lanes = a), (e.memoizedState = m);
  }
}
function uc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var s = e[t],
        o = s.callback;
      if (o !== null) {
        if (((s.callback = null), (s = n), typeof o != "function"))
          throw Error(de(191, o));
        o.call(s);
      }
    }
}
var Os = {},
  fn = Vn(Os),
  ks = Vn(Os),
  _s = Vn(Os);
function Jn(e) {
  if (e === Os) throw Error(de(174));
  return e;
}
function ri(e, t) {
  switch ((Ye(_s, t), Ye(ks, e), Ye(fn, Os), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Vl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Vl(t, e));
  }
  Qe(fn), Ye(fn, t);
}
function Ar() {
  Qe(fn), Qe(ks), Qe(_s);
}
function tu(e) {
  Jn(_s.current);
  var t = Jn(fn.current),
    n = Vl(t, e.type);
  t !== n && (Ye(ks, e), Ye(fn, n));
}
function si(e) {
  ks.current === e && (Qe(fn), Qe(ks));
}
var nt = Vn(0);
function Po(e) {
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
var _l = [];
function oi() {
  for (var e = 0; e < _l.length; e++)
    _l[e]._workInProgressVersionPrimary = null;
  _l.length = 0;
}
var io = jn.ReactCurrentDispatcher,
  Ml = jn.ReactCurrentBatchConfig,
  rr = 0,
  rt = null,
  dt = null,
  pt = null,
  To = !1,
  us = !1,
  Ms = 0,
  bm = 0;
function bt() {
  throw Error(de(321));
}
function li(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!on(e[n], t[n])) return !1;
  return !0;
}
function ai(e, t, n, s, o, l) {
  if (
    ((rr = l),
    (rt = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (io.current = e === null || e.memoizedState === null ? Sm : Cm),
    (e = n(s, o)),
    us)
  ) {
    l = 0;
    do {
      if (((us = !1), (Ms = 0), 25 <= l)) throw Error(de(301));
      (l += 1),
        (pt = dt = null),
        (t.updateQueue = null),
        (io.current = Dm),
        (e = n(s, o));
    } while (us);
  }
  if (
    ((io.current = Ro),
    (t = dt !== null && dt.next !== null),
    (rr = 0),
    (pt = dt = rt = null),
    (To = !1),
    t)
  )
    throw Error(de(300));
  return e;
}
function ii() {
  var e = Ms !== 0;
  return (Ms = 0), e;
}
function cn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return pt === null ? (rt.memoizedState = pt = e) : (pt = pt.next = e), pt;
}
function Xt() {
  if (dt === null) {
    var e = rt.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = dt.next;
  var t = pt === null ? rt.memoizedState : pt.next;
  if (t !== null) (pt = t), (dt = e);
  else {
    if (e === null) throw Error(de(310));
    (dt = e),
      (e = {
        memoizedState: dt.memoizedState,
        baseState: dt.baseState,
        baseQueue: dt.baseQueue,
        queue: dt.queue,
        next: null,
      }),
      pt === null ? (rt.memoizedState = pt = e) : (pt = pt.next = e);
  }
  return pt;
}
function Es(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function El(e) {
  var t = Xt(),
    n = t.queue;
  if (n === null) throw Error(de(311));
  n.lastRenderedReducer = e;
  var s = dt,
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
      h = l;
    do {
      var g = h.lane;
      if ((rr & g) === g)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
          (s = h.hasEagerState ? h.eagerState : e(s, h.action));
      else {
        var m = {
          lane: g,
          action: h.action,
          hasEagerState: h.hasEagerState,
          eagerState: h.eagerState,
          next: null,
        };
        c === null ? ((i = c = m), (a = s)) : (c = c.next = m),
          (rt.lanes |= g),
          (sr |= g);
      }
      h = h.next;
    } while (h !== null && h !== l);
    c === null ? (a = s) : (c.next = i),
      on(s, t.memoizedState) || (It = !0),
      (t.memoizedState = s),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = s);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (rt.lanes |= l), (sr |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Il(e) {
  var t = Xt(),
    n = t.queue;
  if (n === null) throw Error(de(311));
  n.lastRenderedReducer = e;
  var s = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (l = e(l, a.action)), (a = a.next);
    while (a !== o);
    on(l, t.memoizedState) || (It = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, s];
}
function nu() {}
function ru(e, t) {
  var n = rt,
    s = Xt(),
    o = t(),
    l = !on(s.memoizedState, o);
  if (
    (l && ((s.memoizedState = o), (It = !0)),
    (s = s.queue),
    ci(lu.bind(null, n, s, e), [e]),
    s.getSnapshot !== t || l || (pt !== null && pt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Is(9, ou.bind(null, n, s, o, t), void 0, null),
      mt === null)
    )
      throw Error(de(349));
    rr & 30 || su(n, t, o);
  }
  return o;
}
function su(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = rt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (rt.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ou(e, t, n, s) {
  (t.value = n), (t.getSnapshot = s), au(t) && iu(e);
}
function lu(e, t, n) {
  return n(function () {
    au(t) && iu(e);
  });
}
function au(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !on(e, n);
  } catch {
    return !0;
  }
}
function iu(e) {
  var t = wn(e, 1);
  t !== null && sn(t, e, 1, -1);
}
function fc(e) {
  var t = cn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Es,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = jm.bind(null, rt, e)),
    [t.memoizedState, e]
  );
}
function Is(e, t, n, s) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: s, next: null }),
    (t = rt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (rt.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((s = n.next), (n.next = e), (e.next = s), (t.lastEffect = e))),
    e
  );
}
function cu() {
  return Xt().memoizedState;
}
function co(e, t, n, s) {
  var o = cn();
  (rt.flags |= e),
    (o.memoizedState = Is(1 | t, n, void 0, s === void 0 ? null : s));
}
function Yo(e, t, n, s) {
  var o = Xt();
  s = s === void 0 ? null : s;
  var l = void 0;
  if (dt !== null) {
    var a = dt.memoizedState;
    if (((l = a.destroy), s !== null && li(s, a.deps))) {
      o.memoizedState = Is(t, n, l, s);
      return;
    }
  }
  (rt.flags |= e), (o.memoizedState = Is(1 | t, n, l, s));
}
function pc(e, t) {
  return co(8390656, 8, e, t);
}
function ci(e, t) {
  return Yo(2048, 8, e, t);
}
function du(e, t) {
  return Yo(4, 2, e, t);
}
function uu(e, t) {
  return Yo(4, 4, e, t);
}
function fu(e, t) {
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
function pu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Yo(4, 4, fu.bind(null, t, e), n)
  );
}
function di() {}
function mu(e, t) {
  var n = Xt();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && li(t, s[1])
    ? s[0]
    : ((n.memoizedState = [e, t]), e);
}
function hu(e, t) {
  var n = Xt();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && li(t, s[1])
    ? s[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function gu(e, t, n) {
  return rr & 21
    ? (on(n, t) || ((n = wd()), (rt.lanes |= n), (sr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (It = !0)), (e.memoizedState = n));
}
function wm(e, t) {
  var n = qe;
  (qe = n !== 0 && 4 > n ? n : 4), e(!0);
  var s = Ml.transition;
  Ml.transition = {};
  try {
    e(!1), t();
  } finally {
    (qe = n), (Ml.transition = s);
  }
}
function xu() {
  return Xt().memoizedState;
}
function Nm(e, t, n) {
  var s = Gn(e);
  if (
    ((n = {
      lane: s,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    yu(e))
  )
    vu(t, n);
  else if (((n = Zd(e, t, n, s)), n !== null)) {
    var o = Dt();
    sn(n, e, s, o), bu(n, t, s);
  }
}
function jm(e, t, n) {
  var s = Gn(e),
    o = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (yu(e)) vu(t, o);
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
        if (((o.hasEagerState = !0), (o.eagerState = i), on(i, a))) {
          var c = t.interleaved;
          c === null
            ? ((o.next = o), ti(t))
            : ((o.next = c.next), (c.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Zd(e, t, o, s)),
      n !== null && ((o = Dt()), sn(n, e, s, o), bu(n, t, s));
  }
}
function yu(e) {
  var t = e.alternate;
  return e === rt || (t !== null && t === rt);
}
function vu(e, t) {
  us = To = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function bu(e, t, n) {
  if (n & 4194240) {
    var s = t.lanes;
    (s &= e.pendingLanes), (n |= s), (t.lanes = n), za(e, n);
  }
}
var Ro = {
    readContext: Yt,
    useCallback: bt,
    useContext: bt,
    useEffect: bt,
    useImperativeHandle: bt,
    useInsertionEffect: bt,
    useLayoutEffect: bt,
    useMemo: bt,
    useReducer: bt,
    useRef: bt,
    useState: bt,
    useDebugValue: bt,
    useDeferredValue: bt,
    useTransition: bt,
    useMutableSource: bt,
    useSyncExternalStore: bt,
    useId: bt,
    unstable_isNewReconciler: !1,
  },
  Sm = {
    readContext: Yt,
    useCallback: function (e, t) {
      return (cn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Yt,
    useEffect: pc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        co(4194308, 4, fu.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return co(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return co(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = cn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var s = cn();
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
        (e = e.dispatch = Nm.bind(null, rt, e)),
        [s.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = cn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: fc,
    useDebugValue: di,
    useDeferredValue: function (e) {
      return (cn().memoizedState = e);
    },
    useTransition: function () {
      var e = fc(!1),
        t = e[0];
      return (e = wm.bind(null, e[1])), (cn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var s = rt,
        o = cn();
      if (et) {
        if (n === void 0) throw Error(de(407));
        n = n();
      } else {
        if (((n = t()), mt === null)) throw Error(de(349));
        rr & 30 || su(s, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        pc(lu.bind(null, s, l, e), [e]),
        (s.flags |= 2048),
        Is(9, ou.bind(null, s, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = cn(),
        t = mt.identifierPrefix;
      if (et) {
        var n = xn,
          s = gn;
        (n = (s & ~(1 << (32 - rn(s) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ms++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = bm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Cm = {
    readContext: Yt,
    useCallback: mu,
    useContext: Yt,
    useEffect: ci,
    useImperativeHandle: pu,
    useInsertionEffect: du,
    useLayoutEffect: uu,
    useMemo: hu,
    useReducer: El,
    useRef: cu,
    useState: function () {
      return El(Es);
    },
    useDebugValue: di,
    useDeferredValue: function (e) {
      var t = Xt();
      return gu(t, dt.memoizedState, e);
    },
    useTransition: function () {
      var e = El(Es)[0],
        t = Xt().memoizedState;
      return [e, t];
    },
    useMutableSource: nu,
    useSyncExternalStore: ru,
    useId: xu,
    unstable_isNewReconciler: !1,
  },
  Dm = {
    readContext: Yt,
    useCallback: mu,
    useContext: Yt,
    useEffect: ci,
    useImperativeHandle: pu,
    useInsertionEffect: du,
    useLayoutEffect: uu,
    useMemo: hu,
    useReducer: Il,
    useRef: cu,
    useState: function () {
      return Il(Es);
    },
    useDebugValue: di,
    useDeferredValue: function (e) {
      var t = Xt();
      return dt === null ? (t.memoizedState = e) : gu(t, dt.memoizedState, e);
    },
    useTransition: function () {
      var e = Il(Es)[0],
        t = Xt().memoizedState;
      return [e, t];
    },
    useMutableSource: nu,
    useSyncExternalStore: ru,
    useId: xu,
    unstable_isNewReconciler: !1,
  };
function en(e, t) {
  if (e && e.defaultProps) {
    (t = st({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function fa(e, t, n, s) {
  (t = e.memoizedState),
    (n = n(s, t)),
    (n = n == null ? t : st({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Xo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ar(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var s = Dt(),
      o = Gn(e),
      l = yn(s, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = Un(e, l, o)),
      t !== null && (sn(t, e, o, s), ao(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var s = Dt(),
      o = Gn(e),
      l = yn(s, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Un(e, l, o)),
      t !== null && (sn(t, e, o, s), ao(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Dt(),
      s = Gn(e),
      o = yn(n, s);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Un(e, o, s)),
      t !== null && (sn(t, e, s, n), ao(t, e, s));
  },
};
function mc(e, t, n, s, o, l, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(s, l, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !js(n, s) || !js(o, l)
      : !0
  );
}
function wu(e, t, n) {
  var s = !1,
    o = Fn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Yt(l))
      : ((o = $t(t) ? tr : jt.current),
        (s = t.contextTypes),
        (l = (s = s != null) ? Tr(e, o) : Fn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Xo),
    (e.stateNode = t),
    (t._reactInternals = e),
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function hc(e, t, n, s) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, s),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, s),
    t.state !== e && Xo.enqueueReplaceState(t, t.state, null);
}
function pa(e, t, n, s) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), ni(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = Yt(l))
    : ((l = $t(t) ? tr : jt.current), (o.context = Tr(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (fa(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Xo.enqueueReplaceState(o, o.state, null),
      Io(e, n, o, s),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Or(e, t) {
  try {
    var n = "",
      s = t;
    do (n += ep(s)), (s = s.return);
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
function Pl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ma(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var km = typeof WeakMap == "function" ? WeakMap : Map;
function Nu(e, t, n) {
  (n = yn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var s = t.value;
  return (
    (n.callback = function () {
      Ao || ((Ao = !0), (Sa = s)), ma(e, t);
    }),
    n
  );
}
function ju(e, t, n) {
  (n = yn(-1, n)), (n.tag = 3);
  var s = e.type.getDerivedStateFromError;
  if (typeof s == "function") {
    var o = t.value;
    (n.payload = function () {
      return s(o);
    }),
      (n.callback = function () {
        ma(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        ma(e, t),
          typeof s != "function" &&
            (Ln === null ? (Ln = new Set([this])) : Ln.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function gc(e, t, n) {
  var s = e.pingCache;
  if (s === null) {
    s = e.pingCache = new km();
    var o = new Set();
    s.set(t, o);
  } else (o = s.get(t)), o === void 0 && ((o = new Set()), s.set(t, o));
  o.has(n) || (o.add(n), (e = zm.bind(null, e, t, n)), t.then(e, e));
}
function xc(e) {
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
function yc(e, t, n, s, o) {
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
              : ((t = yn(-1, 1)), (t.tag = 2), Un(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var _m = jn.ReactCurrentOwner,
  It = !1;
function Ct(e, t, n, s) {
  t.child = e === null ? Jd(t, null, n, s) : $r(t, e.child, n, s);
}
function vc(e, t, n, s, o) {
  n = n.render;
  var l = t.ref;
  return (
    Er(t, o),
    (s = ai(e, t, n, s, l, o)),
    (n = ii()),
    e !== null && !It
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Nn(e, t, o))
      : (et && n && Xa(t), (t.flags |= 1), Ct(e, t, s, o), t.child)
  );
}
function bc(e, t, n, s, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !yi(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Su(e, t, l, s, o))
      : ((e = mo(n.type, null, s, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var a = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : js), n(a, s) && e.ref === t.ref)
    )
      return Nn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = zn(l, s)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Su(e, t, n, s, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (js(l, s) && e.ref === t.ref)
      if (((It = !1), (t.pendingProps = s = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (It = !0);
      else return (t.lanes = e.lanes), Nn(e, t, o);
  }
  return ha(e, t, n, s, o);
}
function Cu(e, t, n) {
  var s = t.pendingProps,
    o = s.children,
    l = e !== null ? e.memoizedState : null;
  if (s.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ye(jr, Ut),
        (Ut |= n);
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
          Ye(jr, Ut),
          (Ut |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (s = l !== null ? l.baseLanes : n),
        Ye(jr, Ut),
        (Ut |= s);
    }
  else
    l !== null ? ((s = l.baseLanes | n), (t.memoizedState = null)) : (s = n),
      Ye(jr, Ut),
      (Ut |= s);
  return Ct(e, t, o, n), t.child;
}
function Du(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ha(e, t, n, s, o) {
  var l = $t(n) ? tr : jt.current;
  return (
    (l = Tr(t, l)),
    Er(t, o),
    (n = ai(e, t, n, s, l, o)),
    (s = ii()),
    e !== null && !It
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Nn(e, t, o))
      : (et && s && Xa(t), (t.flags |= 1), Ct(e, t, n, o), t.child)
  );
}
function wc(e, t, n, s, o) {
  if ($t(n)) {
    var l = !0;
    Do(t);
  } else l = !1;
  if ((Er(t, o), t.stateNode === null))
    uo(e, t), wu(t, n, s), pa(t, n, s, o), (s = !0);
  else if (e === null) {
    var a = t.stateNode,
      i = t.memoizedProps;
    a.props = i;
    var c = a.context,
      h = n.contextType;
    typeof h == "object" && h !== null
      ? (h = Yt(h))
      : ((h = $t(n) ? tr : jt.current), (h = Tr(t, h)));
    var g = n.getDerivedStateFromProps,
      m =
        typeof g == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== s || c !== h) && hc(t, a, s, h)),
      (_n = !1);
    var p = t.memoizedState;
    (a.state = p),
      Io(t, s, a, o),
      (c = t.memoizedState),
      i !== s || p !== c || Rt.current || _n
        ? (typeof g == "function" && (fa(t, n, g, s), (c = t.memoizedState)),
          (i = _n || mc(t, n, i, s, p, c, h))
            ? (m ||
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
          (a.context = h),
          (s = i))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (s = !1));
  } else {
    (a = t.stateNode),
      eu(e, t),
      (i = t.memoizedProps),
      (h = t.type === t.elementType ? i : en(t.type, i)),
      (a.props = h),
      (m = t.pendingProps),
      (p = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = Yt(c))
        : ((c = $t(n) ? tr : jt.current), (c = Tr(t, c)));
    var j = n.getDerivedStateFromProps;
    (g =
      typeof j == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== m || p !== c) && hc(t, a, s, c)),
      (_n = !1),
      (p = t.memoizedState),
      (a.state = p),
      Io(t, s, a, o);
    var b = t.memoizedState;
    i !== m || p !== b || Rt.current || _n
      ? (typeof j == "function" && (fa(t, n, j, s), (b = t.memoizedState)),
        (h = _n || mc(t, n, h, s, p, b, c) || !1)
          ? (g ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(s, b, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(s, b, c)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = s),
            (t.memoizedState = b)),
        (a.props = s),
        (a.state = b),
        (a.context = c),
        (s = h))
      : (typeof a.componentDidUpdate != "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (s = !1));
  }
  return ga(e, t, n, s, l, o);
}
function ga(e, t, n, s, o, l) {
  Du(e, t);
  var a = (t.flags & 128) !== 0;
  if (!s && !a) return o && lc(t, n, !1), Nn(e, t, l);
  (s = t.stateNode), (_m.current = t);
  var i =
    a && typeof n.getDerivedStateFromError != "function" ? null : s.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = $r(t, e.child, null, l)), (t.child = $r(t, null, i, l)))
      : Ct(e, t, i, l),
    (t.memoizedState = s.state),
    o && lc(t, n, !0),
    t.child
  );
}
function ku(e) {
  var t = e.stateNode;
  t.pendingContext
    ? oc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && oc(e, t.context, !1),
    ri(e, t.containerInfo);
}
function Nc(e, t, n, s, o) {
  return Rr(), Ka(o), (t.flags |= 256), Ct(e, t, n, s), t.child;
}
var xa = { dehydrated: null, treeContext: null, retryLane: 0 };
function ya(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function _u(e, t, n) {
  var s = t.pendingProps,
    o = nt.current,
    l = !1,
    a = (t.flags & 128) !== 0,
    i;
  if (
    ((i = a) ||
      (i = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    i
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Ye(nt, o & 1),
    e === null)
  )
    return (
      da(t),
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
                : (l = Jo(a, s, 0, null)),
              (e = er(e, s, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = ya(n)),
              (t.memoizedState = xa),
              e)
            : ui(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((i = o.dehydrated), i !== null)))
    return Mm(e, t, a, s, i, o, n);
  if (l) {
    (l = s.fallback), (a = t.mode), (o = e.child), (i = o.sibling);
    var c = { mode: "hidden", children: s.children };
    return (
      !(a & 1) && t.child !== o
        ? ((s = t.child),
          (s.childLanes = 0),
          (s.pendingProps = c),
          (t.deletions = null))
        : ((s = zn(o, c)), (s.subtreeFlags = o.subtreeFlags & 14680064)),
      i !== null ? (l = zn(i, l)) : ((l = er(l, a, n, null)), (l.flags |= 2)),
      (l.return = t),
      (s.return = t),
      (s.sibling = l),
      (t.child = s),
      (s = l),
      (l = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? ya(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (l.memoizedState = a),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = xa),
      s
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (s = zn(l, { mode: "visible", children: s.children })),
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
function ui(e, t) {
  return (
    (t = Jo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ks(e, t, n, s) {
  return (
    s !== null && Ka(s),
    $r(t, e.child, null, n),
    (e = ui(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Mm(e, t, n, s, o, l, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (s = Pl(Error(de(422)))), Ks(e, t, a, s))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = s.fallback),
        (o = t.mode),
        (s = Jo({ mode: "visible", children: s.children }, o, 0, null)),
        (l = er(l, o, a, null)),
        (l.flags |= 2),
        (s.return = t),
        (l.return = t),
        (s.sibling = l),
        (t.child = s),
        t.mode & 1 && $r(t, e.child, null, a),
        (t.child.memoizedState = ya(a)),
        (t.memoizedState = xa),
        l);
  if (!(t.mode & 1)) return Ks(e, t, a, null);
  if (o.data === "$!") {
    if (((s = o.nextSibling && o.nextSibling.dataset), s)) var i = s.dgst;
    return (
      (s = i), (l = Error(de(419))), (s = Pl(l, s, void 0)), Ks(e, t, a, s)
    );
  }
  if (((i = (a & e.childLanes) !== 0), It || i)) {
    if (((s = mt), s !== null)) {
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
          ((l.retryLane = o), wn(e, o), sn(s, e, o, -1));
    }
    return xi(), (s = Pl(Error(de(421)))), Ks(e, t, a, s);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Bm.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Lt = On(o.nextSibling)),
      (Gt = t),
      (et = !0),
      (nn = null),
      e !== null &&
        ((Ht[Vt++] = gn),
        (Ht[Vt++] = xn),
        (Ht[Vt++] = nr),
        (gn = e.id),
        (xn = e.overflow),
        (nr = t)),
      (t = ui(t, s.children)),
      (t.flags |= 4096),
      t);
}
function jc(e, t, n) {
  e.lanes |= t;
  var s = e.alternate;
  s !== null && (s.lanes |= t), ua(e.return, t, n);
}
function Tl(e, t, n, s, o) {
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
function Mu(e, t, n) {
  var s = t.pendingProps,
    o = s.revealOrder,
    l = s.tail;
  if ((Ct(e, t, s.children, n), (s = nt.current), s & 2))
    (s = (s & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && jc(e, n, t);
        else if (e.tag === 19) jc(e, n, t);
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
  if ((Ye(nt, s), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Po(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Tl(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Po(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Tl(t, !0, n, null, l);
        break;
      case "together":
        Tl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function uo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Nn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (sr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(de(153));
  if (t.child !== null) {
    for (
      e = t.child, n = zn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = zn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Em(e, t, n) {
  switch (t.tag) {
    case 3:
      ku(t), Rr();
      break;
    case 5:
      tu(t);
      break;
    case 1:
      $t(t.type) && Do(t);
      break;
    case 4:
      ri(t, t.stateNode.containerInfo);
      break;
    case 10:
      var s = t.type._context,
        o = t.memoizedProps.value;
      Ye(Mo, s._currentValue), (s._currentValue = o);
      break;
    case 13:
      if (((s = t.memoizedState), s !== null))
        return s.dehydrated !== null
          ? (Ye(nt, nt.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? _u(e, t, n)
          : (Ye(nt, nt.current & 1),
            (e = Nn(e, t, n)),
            e !== null ? e.sibling : null);
      Ye(nt, nt.current & 1);
      break;
    case 19:
      if (((s = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (s) return Mu(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Ye(nt, nt.current),
        s)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Cu(e, t, n);
  }
  return Nn(e, t, n);
}
var Eu, va, Iu, Pu;
Eu = function (e, t) {
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
va = function () {};
Iu = function (e, t, n, s) {
  var o = e.memoizedProps;
  if (o !== s) {
    (e = t.stateNode), Jn(fn.current);
    var l = null;
    switch (n) {
      case "input":
        (o = zl(e, o)), (s = zl(e, s)), (l = []);
        break;
      case "select":
        (o = st({}, o, { value: void 0 })),
          (s = st({}, s, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = Hl(e, o)), (s = Hl(e, s)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof s.onClick == "function" &&
          (e.onclick = So);
    }
    ql(n, s);
    var a;
    n = null;
    for (h in o)
      if (!s.hasOwnProperty(h) && o.hasOwnProperty(h) && o[h] != null)
        if (h === "style") {
          var i = o[h];
          for (a in i) i.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          h !== "dangerouslySetInnerHTML" &&
            h !== "children" &&
            h !== "suppressContentEditableWarning" &&
            h !== "suppressHydrationWarning" &&
            h !== "autoFocus" &&
            (gs.hasOwnProperty(h)
              ? l || (l = [])
              : (l = l || []).push(h, null));
    for (h in s) {
      var c = s[h];
      if (
        ((i = o != null ? o[h] : void 0),
        s.hasOwnProperty(h) && c !== i && (c != null || i != null))
      )
        if (h === "style")
          if (i) {
            for (a in i)
              !i.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in c)
              c.hasOwnProperty(a) &&
                i[a] !== c[a] &&
                (n || (n = {}), (n[a] = c[a]));
          } else n || (l || (l = []), l.push(h, n)), (n = c);
        else
          h === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (i = i ? i.__html : void 0),
              c != null && i !== c && (l = l || []).push(h, c))
            : h === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (l = l || []).push(h, "" + c)
            : h !== "suppressContentEditableWarning" &&
              h !== "suppressHydrationWarning" &&
              (gs.hasOwnProperty(h)
                ? (c != null && h === "onScroll" && Xe("scroll", e),
                  l || i === c || (l = []))
                : (l = l || []).push(h, c));
    }
    n && (l = l || []).push("style", n);
    var h = l;
    (t.updateQueue = h) && (t.flags |= 4);
  }
};
Pu = function (e, t, n, s) {
  n !== s && (t.flags |= 4);
};
function Zr(e, t) {
  if (!et)
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
function wt(e) {
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
function Im(e, t, n) {
  var s = t.pendingProps;
  switch ((Qa(t), t.tag)) {
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
      return wt(t), null;
    case 1:
      return $t(t.type) && Co(), wt(t), null;
    case 3:
      return (
        (s = t.stateNode),
        Ar(),
        Qe(Rt),
        Qe(jt),
        oi(),
        s.pendingContext &&
          ((s.context = s.pendingContext), (s.pendingContext = null)),
        (e === null || e.child === null) &&
          (Xs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), nn !== null && (ka(nn), (nn = null)))),
        va(e, t),
        wt(t),
        null
      );
    case 5:
      si(t);
      var o = Jn(_s.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Iu(e, t, n, s, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!s) {
          if (t.stateNode === null) throw Error(de(166));
          return wt(t), null;
        }
        if (((e = Jn(fn.current)), Xs(t))) {
          (s = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((s[dn] = t), (s[Ds] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Xe("cancel", s), Xe("close", s);
              break;
            case "iframe":
            case "object":
            case "embed":
              Xe("load", s);
              break;
            case "video":
            case "audio":
              for (o = 0; o < os.length; o++) Xe(os[o], s);
              break;
            case "source":
              Xe("error", s);
              break;
            case "img":
            case "image":
            case "link":
              Xe("error", s), Xe("load", s);
              break;
            case "details":
              Xe("toggle", s);
              break;
            case "input":
              Pi(s, l), Xe("invalid", s);
              break;
            case "select":
              (s._wrapperState = { wasMultiple: !!l.multiple }),
                Xe("invalid", s);
              break;
            case "textarea":
              Ri(s, l), Xe("invalid", s);
          }
          ql(n, l), (o = null);
          for (var a in l)
            if (l.hasOwnProperty(a)) {
              var i = l[a];
              a === "children"
                ? typeof i == "string"
                  ? s.textContent !== i &&
                    (l.suppressHydrationWarning !== !0 &&
                      Ys(s.textContent, i, e),
                    (o = ["children", i]))
                  : typeof i == "number" &&
                    s.textContent !== "" + i &&
                    (l.suppressHydrationWarning !== !0 &&
                      Ys(s.textContent, i, e),
                    (o = ["children", "" + i]))
                : gs.hasOwnProperty(a) &&
                  i != null &&
                  a === "onScroll" &&
                  Xe("scroll", s);
            }
          switch (n) {
            case "input":
              Gs(s), Ti(s, l, !0);
              break;
            case "textarea":
              Gs(s), $i(s);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (s.onclick = So);
          }
          (s = o), (t.updateQueue = s), s !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ld(n)),
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
            (e[dn] = t),
            (e[Ds] = s),
            Eu(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Wl(n, s)), n)) {
              case "dialog":
                Xe("cancel", e), Xe("close", e), (o = s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Xe("load", e), (o = s);
                break;
              case "video":
              case "audio":
                for (o = 0; o < os.length; o++) Xe(os[o], e);
                o = s;
                break;
              case "source":
                Xe("error", e), (o = s);
                break;
              case "img":
              case "image":
              case "link":
                Xe("error", e), Xe("load", e), (o = s);
                break;
              case "details":
                Xe("toggle", e), (o = s);
                break;
              case "input":
                Pi(e, s), (o = zl(e, s)), Xe("invalid", e);
                break;
              case "option":
                o = s;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!s.multiple }),
                  (o = st({}, s, { value: void 0 })),
                  Xe("invalid", e);
                break;
              case "textarea":
                Ri(e, s), (o = Hl(e, s)), Xe("invalid", e);
                break;
              default:
                o = s;
            }
            ql(n, o), (i = o);
            for (l in i)
              if (i.hasOwnProperty(l)) {
                var c = i[l];
                l === "style"
                  ? cd(e, c)
                  : l === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && ad(e, c))
                  : l === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && xs(e, c)
                    : typeof c == "number" && xs(e, "" + c)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (gs.hasOwnProperty(l)
                      ? c != null && l === "onScroll" && Xe("scroll", e)
                      : c != null && $a(e, l, c, a));
              }
            switch (n) {
              case "input":
                Gs(e), Ti(e, s, !1);
                break;
              case "textarea":
                Gs(e), $i(e);
                break;
              case "option":
                s.value != null && e.setAttribute("value", "" + Bn(s.value));
                break;
              case "select":
                (e.multiple = !!s.multiple),
                  (l = s.value),
                  l != null
                    ? Dr(e, !!s.multiple, l, !1)
                    : s.defaultValue != null &&
                      Dr(e, !!s.multiple, s.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = So);
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
      return wt(t), null;
    case 6:
      if (e && t.stateNode != null) Pu(e, t, e.memoizedProps, s);
      else {
        if (typeof s != "string" && t.stateNode === null) throw Error(de(166));
        if (((n = Jn(_s.current)), Jn(fn.current), Xs(t))) {
          if (
            ((s = t.stateNode),
            (n = t.memoizedProps),
            (s[dn] = t),
            (l = s.nodeValue !== n) && ((e = Gt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ys(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ys(s.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s)),
            (s[dn] = t),
            (t.stateNode = s);
      }
      return wt(t), null;
    case 13:
      if (
        (Qe(nt),
        (s = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (et && Lt !== null && t.mode & 1 && !(t.flags & 128))
          Qd(), Rr(), (t.flags |= 98560), (l = !1);
        else if (((l = Xs(t)), s !== null && s.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(de(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(de(317));
            l[dn] = t;
          } else
            Rr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          wt(t), (l = !1);
        } else nn !== null && (ka(nn), (nn = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((s = s !== null),
          s !== (e !== null && e.memoizedState !== null) &&
            s &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || nt.current & 1 ? ut === 0 && (ut = 3) : xi())),
          t.updateQueue !== null && (t.flags |= 4),
          wt(t),
          null);
    case 4:
      return (
        Ar(), va(e, t), e === null && Ss(t.stateNode.containerInfo), wt(t), null
      );
    case 10:
      return ei(t.type._context), wt(t), null;
    case 17:
      return $t(t.type) && Co(), wt(t), null;
    case 19:
      if ((Qe(nt), (l = t.memoizedState), l === null)) return wt(t), null;
      if (((s = (t.flags & 128) !== 0), (a = l.rendering), a === null))
        if (s) Zr(l, !1);
        else {
          if (ut !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Po(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Zr(l, !1),
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
                return Ye(nt, (nt.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            it() > Ur &&
            ((t.flags |= 128), (s = !0), Zr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!s)
          if (((e = Po(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (s = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Zr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !a.alternate && !et)
            )
              return wt(t), null;
          } else
            2 * it() - l.renderingStartTime > Ur &&
              n !== 1073741824 &&
              ((t.flags |= 128), (s = !0), Zr(l, !1), (t.lanes = 4194304));
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
          (l.renderingStartTime = it()),
          (t.sibling = null),
          (n = nt.current),
          Ye(nt, s ? (n & 1) | 2 : n & 1),
          t)
        : (wt(t), null);
    case 22:
    case 23:
      return (
        gi(),
        (s = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
        s && t.mode & 1
          ? Ut & 1073741824 && (wt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : wt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(de(156, t.tag));
}
function Pm(e, t) {
  switch ((Qa(t), t.tag)) {
    case 1:
      return (
        $t(t.type) && Co(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ar(),
        Qe(Rt),
        Qe(jt),
        oi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return si(t), null;
    case 13:
      if (
        (Qe(nt), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(de(340));
        Rr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Qe(nt), null;
    case 4:
      return Ar(), null;
    case 10:
      return ei(t.type._context), null;
    case 22:
    case 23:
      return gi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Js = !1,
  Nt = !1,
  Tm = typeof WeakSet == "function" ? WeakSet : Set,
  we = null;
function Nr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (s) {
        ot(e, t, s);
      }
    else n.current = null;
}
function ba(e, t, n) {
  try {
    n();
  } catch (s) {
    ot(e, t, s);
  }
}
var Sc = !1;
function Rm(e, t) {
  if (((ra = wo), (e = Od()), Ya(e))) {
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
            h = 0,
            g = 0,
            m = e,
            p = null;
          t: for (;;) {
            for (
              var j;
              m !== n || (o !== 0 && m.nodeType !== 3) || (i = a + o),
                m !== l || (s !== 0 && m.nodeType !== 3) || (c = a + s),
                m.nodeType === 3 && (a += m.nodeValue.length),
                (j = m.firstChild) !== null;

            )
              (p = m), (m = j);
            for (;;) {
              if (m === e) break t;
              if (
                (p === n && ++h === o && (i = a),
                p === l && ++g === s && (c = a),
                (j = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = j;
          }
          n = i === -1 || c === -1 ? null : { start: i, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    sa = { focusedElem: e, selectionRange: n }, wo = !1, we = t;
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
                  var k = b.memoizedProps,
                    _ = b.memoizedState,
                    u = t.stateNode,
                    d = u.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : en(t.type, k),
                      _
                    );
                  u.__reactInternalSnapshotBeforeUpdate = d;
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
                throw Error(de(163));
            }
        } catch (v) {
          ot(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (we = e);
          break;
        }
        we = t.return;
      }
  return (b = Sc), (Sc = !1), b;
}
function fs(e, t, n) {
  var s = t.updateQueue;
  if (((s = s !== null ? s.lastEffect : null), s !== null)) {
    var o = (s = s.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && ba(t, n, l);
      }
      o = o.next;
    } while (o !== s);
  }
}
function Qo(e, t) {
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
function wa(e) {
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
function Tu(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Tu(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[dn], delete t[Ds], delete t[aa], delete t[gm], delete t[xm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ru(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Cc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ru(e.return)) return null;
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
function Na(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = So));
  else if (s !== 4 && ((e = e.child), e !== null))
    for (Na(e, t, n), e = e.sibling; e !== null; ) Na(e, t, n), (e = e.sibling);
}
function ja(e, t, n) {
  var s = e.tag;
  if (s === 5 || s === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (s !== 4 && ((e = e.child), e !== null))
    for (ja(e, t, n), e = e.sibling; e !== null; ) ja(e, t, n), (e = e.sibling);
}
var xt = null,
  tn = !1;
function Dn(e, t, n) {
  for (n = n.child; n !== null; ) $u(e, t, n), (n = n.sibling);
}
function $u(e, t, n) {
  if (un && typeof un.onCommitFiberUnmount == "function")
    try {
      un.onCommitFiberUnmount(Bo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Nt || Nr(n, t);
    case 6:
      var s = xt,
        o = tn;
      (xt = null),
        Dn(e, t, n),
        (xt = s),
        (tn = o),
        xt !== null &&
          (tn
            ? ((e = xt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : xt.removeChild(n.stateNode));
      break;
    case 18:
      xt !== null &&
        (tn
          ? ((e = xt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Dl(e.parentNode, n)
              : e.nodeType === 1 && Dl(e, n),
            ws(e))
          : Dl(xt, n.stateNode));
      break;
    case 4:
      (s = xt),
        (o = tn),
        (xt = n.stateNode.containerInfo),
        (tn = !0),
        Dn(e, t, n),
        (xt = s),
        (tn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Nt &&
        ((s = n.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
      ) {
        o = s = s.next;
        do {
          var l = o,
            a = l.destroy;
          (l = l.tag),
            a !== void 0 && (l & 2 || l & 4) && ba(n, t, a),
            (o = o.next);
        } while (o !== s);
      }
      Dn(e, t, n);
      break;
    case 1:
      if (
        !Nt &&
        (Nr(n, t),
        (s = n.stateNode),
        typeof s.componentWillUnmount == "function")
      )
        try {
          (s.props = n.memoizedProps),
            (s.state = n.memoizedState),
            s.componentWillUnmount();
        } catch (i) {
          ot(n, t, i);
        }
      Dn(e, t, n);
      break;
    case 21:
      Dn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Nt = (s = Nt) || n.memoizedState !== null), Dn(e, t, n), (Nt = s))
        : Dn(e, t, n);
      break;
    default:
      Dn(e, t, n);
  }
}
function Dc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Tm()),
      t.forEach(function (s) {
        var o = Fm.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(o, o));
      });
  }
}
function Zt(e, t) {
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
              (xt = i.stateNode), (tn = !1);
              break e;
            case 3:
              (xt = i.stateNode.containerInfo), (tn = !0);
              break e;
            case 4:
              (xt = i.stateNode.containerInfo), (tn = !0);
              break e;
          }
          i = i.return;
        }
        if (xt === null) throw Error(de(160));
        $u(l, a, o), (xt = null), (tn = !1);
        var c = o.alternate;
        c !== null && (c.return = null), (o.return = null);
      } catch (h) {
        ot(o, t, h);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Au(t, e), (t = t.sibling);
}
function Au(e, t) {
  var n = e.alternate,
    s = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Zt(t, e), ln(e), s & 4)) {
        try {
          fs(3, e, e.return), Qo(3, e);
        } catch (k) {
          ot(e, e.return, k);
        }
        try {
          fs(5, e, e.return);
        } catch (k) {
          ot(e, e.return, k);
        }
      }
      break;
    case 1:
      Zt(t, e), ln(e), s & 512 && n !== null && Nr(n, n.return);
      break;
    case 5:
      if (
        (Zt(t, e),
        ln(e),
        s & 512 && n !== null && Nr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          xs(o, "");
        } catch (k) {
          ot(e, e.return, k);
        }
      }
      if (s & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          a = n !== null ? n.memoizedProps : l,
          i = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            i === "input" && l.type === "radio" && l.name != null && sd(o, l),
              Wl(i, a);
            var h = Wl(i, l);
            for (a = 0; a < c.length; a += 2) {
              var g = c[a],
                m = c[a + 1];
              g === "style"
                ? cd(o, m)
                : g === "dangerouslySetInnerHTML"
                ? ad(o, m)
                : g === "children"
                ? xs(o, m)
                : $a(o, g, m, h);
            }
            switch (i) {
              case "input":
                Bl(o, l);
                break;
              case "textarea":
                od(o, l);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var j = l.value;
                j != null
                  ? Dr(o, !!l.multiple, j, !1)
                  : p !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Dr(o, !!l.multiple, l.defaultValue, !0)
                      : Dr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[Ds] = l;
          } catch (k) {
            ot(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Zt(t, e), ln(e), s & 4)) {
        if (e.stateNode === null) throw Error(de(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (k) {
          ot(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Zt(t, e), ln(e), s & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ws(t.containerInfo);
        } catch (k) {
          ot(e, e.return, k);
        }
      break;
    case 4:
      Zt(t, e), ln(e);
      break;
    case 13:
      Zt(t, e),
        ln(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (mi = it())),
        s & 4 && Dc(e);
      break;
    case 22:
      if (
        ((g = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Nt = (h = Nt) || g), Zt(t, e), (Nt = h)) : Zt(t, e),
        ln(e),
        s & 8192)
      ) {
        if (
          ((h = e.memoizedState !== null),
          (e.stateNode.isHidden = h) && !g && e.mode & 1)
        )
          for (we = e, g = e.child; g !== null; ) {
            for (m = we = g; we !== null; ) {
              switch (((p = we), (j = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  fs(4, p, p.return);
                  break;
                case 1:
                  Nr(p, p.return);
                  var b = p.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    (s = p), (n = p.return);
                    try {
                      (t = s),
                        (b.props = t.memoizedProps),
                        (b.state = t.memoizedState),
                        b.componentWillUnmount();
                    } catch (k) {
                      ot(s, n, k);
                    }
                  }
                  break;
                case 5:
                  Nr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    _c(m);
                    continue;
                  }
              }
              j !== null ? ((j.return = p), (we = j)) : _c(m);
            }
            g = g.sibling;
          }
        e: for (g = null, m = e; ; ) {
          if (m.tag === 5) {
            if (g === null) {
              g = m;
              try {
                (o = m.stateNode),
                  h
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((i = m.stateNode),
                      (c = m.memoizedProps.style),
                      (a =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (i.style.display = id("display", a)));
              } catch (k) {
                ot(e, e.return, k);
              }
            }
          } else if (m.tag === 6) {
            if (g === null)
              try {
                m.stateNode.nodeValue = h ? "" : m.memoizedProps;
              } catch (k) {
                ot(e, e.return, k);
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
            g === m && (g = null), (m = m.return);
          }
          g === m && (g = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Zt(t, e), ln(e), s & 4 && Dc(e);
      break;
    case 21:
      break;
    default:
      Zt(t, e), ln(e);
  }
}
function ln(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ru(n)) {
            var s = n;
            break e;
          }
          n = n.return;
        }
        throw Error(de(160));
      }
      switch (s.tag) {
        case 5:
          var o = s.stateNode;
          s.flags & 32 && (xs(o, ""), (s.flags &= -33));
          var l = Cc(e);
          ja(e, l, o);
          break;
        case 3:
        case 4:
          var a = s.stateNode.containerInfo,
            i = Cc(e);
          Na(e, i, a);
          break;
        default:
          throw Error(de(161));
      }
    } catch (c) {
      ot(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function $m(e, t, n) {
  (we = e), Ou(e);
}
function Ou(e, t, n) {
  for (var s = (e.mode & 1) !== 0; we !== null; ) {
    var o = we,
      l = o.child;
    if (o.tag === 22 && s) {
      var a = o.memoizedState !== null || Js;
      if (!a) {
        var i = o.alternate,
          c = (i !== null && i.memoizedState !== null) || Nt;
        i = Js;
        var h = Nt;
        if (((Js = a), (Nt = c) && !h))
          for (we = o; we !== null; )
            (a = we),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Mc(o)
                : c !== null
                ? ((c.return = a), (we = c))
                : Mc(o);
        for (; l !== null; ) (we = l), Ou(l), (l = l.sibling);
        (we = o), (Js = i), (Nt = h);
      }
      kc(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (we = l)) : kc(e);
  }
}
function kc(e) {
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
              Nt || Qo(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !Nt)
                if (n === null) s.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : en(t.type, n.memoizedProps);
                  s.componentDidUpdate(
                    o,
                    n.memoizedState,
                    s.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && uc(t, l, s);
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
                uc(t, a, n);
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
                var h = t.alternate;
                if (h !== null) {
                  var g = h.memoizedState;
                  if (g !== null) {
                    var m = g.dehydrated;
                    m !== null && ws(m);
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
              throw Error(de(163));
          }
        Nt || (t.flags & 512 && wa(t));
      } catch (p) {
        ot(t, t.return, p);
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
function _c(e) {
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
function Mc(e) {
  for (; we !== null; ) {
    var t = we;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Qo(4, t);
          } catch (c) {
            ot(t, n, c);
          }
          break;
        case 1:
          var s = t.stateNode;
          if (typeof s.componentDidMount == "function") {
            var o = t.return;
            try {
              s.componentDidMount();
            } catch (c) {
              ot(t, o, c);
            }
          }
          var l = t.return;
          try {
            wa(t);
          } catch (c) {
            ot(t, l, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            wa(t);
          } catch (c) {
            ot(t, a, c);
          }
      }
    } catch (c) {
      ot(t, t.return, c);
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
var Am = Math.ceil,
  $o = jn.ReactCurrentDispatcher,
  fi = jn.ReactCurrentOwner,
  Wt = jn.ReactCurrentBatchConfig,
  Fe = 0,
  mt = null,
  ct = null,
  yt = 0,
  Ut = 0,
  jr = Vn(0),
  ut = 0,
  Ps = null,
  sr = 0,
  Ko = 0,
  pi = 0,
  ps = null,
  Et = null,
  mi = 0,
  Ur = 1 / 0,
  mn = null,
  Ao = !1,
  Sa = null,
  Ln = null,
  Zs = !1,
  Pn = null,
  Oo = 0,
  ms = 0,
  Ca = null,
  fo = -1,
  po = 0;
function Dt() {
  return Fe & 6 ? it() : fo !== -1 ? fo : (fo = it());
}
function Gn(e) {
  return e.mode & 1
    ? Fe & 2 && yt !== 0
      ? yt & -yt
      : vm.transition !== null
      ? (po === 0 && (po = wd()), po)
      : ((e = qe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : _d(e.type))),
        e)
    : 1;
}
function sn(e, t, n, s) {
  if (50 < ms) throw ((ms = 0), (Ca = null), Error(de(185)));
  Rs(e, n, s),
    (!(Fe & 2) || e !== mt) &&
      (e === mt && (!(Fe & 2) && (Ko |= n), ut === 4 && En(e, yt)),
      At(e, s),
      n === 1 && Fe === 0 && !(t.mode & 1) && ((Ur = it() + 500), Wo && qn()));
}
function At(e, t) {
  var n = e.callbackNode;
  vp(e, t);
  var s = bo(e, e === mt ? yt : 0);
  if (s === 0)
    n !== null && Ui(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = s & -s), e.callbackPriority !== t)) {
    if ((n != null && Ui(n), t === 1))
      e.tag === 0 ? ym(Ec.bind(null, e)) : Wd(Ec.bind(null, e)),
        mm(function () {
          !(Fe & 6) && qn();
        }),
        (n = null);
    else {
      switch (Nd(s)) {
        case 1:
          n = Ga;
          break;
        case 4:
          n = vd;
          break;
        case 16:
          n = vo;
          break;
        case 536870912:
          n = bd;
          break;
        default:
          n = vo;
      }
      n = Vu(n, Uu.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Uu(e, t) {
  if (((fo = -1), (po = 0), Fe & 6)) throw Error(de(327));
  var n = e.callbackNode;
  if (Ir() && e.callbackNode !== n) return null;
  var s = bo(e, e === mt ? yt : 0);
  if (s === 0) return null;
  if (s & 30 || s & e.expiredLanes || t) t = Uo(e, s);
  else {
    t = s;
    var o = Fe;
    Fe |= 2;
    var l = Gu();
    (mt !== e || yt !== t) && ((mn = null), (Ur = it() + 500), Zn(e, t));
    do
      try {
        Lm();
        break;
      } catch (i) {
        Lu(e, i);
      }
    while (!0);
    Za(),
      ($o.current = l),
      (Fe = o),
      ct !== null ? (t = 0) : ((mt = null), (yt = 0), (t = ut));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Jl(e)), o !== 0 && ((s = o), (t = Da(e, o)))), t === 1)
    )
      throw ((n = Ps), Zn(e, 0), En(e, s), At(e, it()), n);
    if (t === 6) En(e, s);
    else {
      if (
        ((o = e.current.alternate),
        !(s & 30) &&
          !Om(o) &&
          ((t = Uo(e, s)),
          t === 2 && ((l = Jl(e)), l !== 0 && ((s = l), (t = Da(e, l)))),
          t === 1))
      )
        throw ((n = Ps), Zn(e, 0), En(e, s), At(e, it()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = s), t)) {
        case 0:
        case 1:
          throw Error(de(345));
        case 2:
          Xn(e, Et, mn);
          break;
        case 3:
          if (
            (En(e, s), (s & 130023424) === s && ((t = mi + 500 - it()), 10 < t))
          ) {
            if (bo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & s) !== s)) {
              Dt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = la(Xn.bind(null, e, Et, mn), t);
            break;
          }
          Xn(e, Et, mn);
          break;
        case 4:
          if ((En(e, s), (s & 4194240) === s)) break;
          for (t = e.eventTimes, o = -1; 0 < s; ) {
            var a = 31 - rn(s);
            (l = 1 << a), (a = t[a]), a > o && (o = a), (s &= ~l);
          }
          if (
            ((s = o),
            (s = it() - s),
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
                : 1960 * Am(s / 1960)) - s),
            10 < s)
          ) {
            e.timeoutHandle = la(Xn.bind(null, e, Et, mn), s);
            break;
          }
          Xn(e, Et, mn);
          break;
        case 5:
          Xn(e, Et, mn);
          break;
        default:
          throw Error(de(329));
      }
    }
  }
  return At(e, it()), e.callbackNode === n ? Uu.bind(null, e) : null;
}
function Da(e, t) {
  var n = ps;
  return (
    e.current.memoizedState.isDehydrated && (Zn(e, t).flags |= 256),
    (e = Uo(e, t)),
    e !== 2 && ((t = Et), (Et = n), t !== null && ka(t)),
    e
  );
}
function ka(e) {
  Et === null ? (Et = e) : Et.push.apply(Et, e);
}
function Om(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var s = 0; s < n.length; s++) {
          var o = n[s],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!on(l(), o)) return !1;
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
function En(e, t) {
  for (
    t &= ~pi,
      t &= ~Ko,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - rn(t),
      s = 1 << n;
    (e[n] = -1), (t &= ~s);
  }
}
function Ec(e) {
  if (Fe & 6) throw Error(de(327));
  Ir();
  var t = bo(e, 0);
  if (!(t & 1)) return At(e, it()), null;
  var n = Uo(e, t);
  if (e.tag !== 0 && n === 2) {
    var s = Jl(e);
    s !== 0 && ((t = s), (n = Da(e, s)));
  }
  if (n === 1) throw ((n = Ps), Zn(e, 0), En(e, t), At(e, it()), n);
  if (n === 6) throw Error(de(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Xn(e, Et, mn),
    At(e, it()),
    null
  );
}
function hi(e, t) {
  var n = Fe;
  Fe |= 1;
  try {
    return e(t);
  } finally {
    (Fe = n), Fe === 0 && ((Ur = it() + 500), Wo && qn());
  }
}
function or(e) {
  Pn !== null && Pn.tag === 0 && !(Fe & 6) && Ir();
  var t = Fe;
  Fe |= 1;
  var n = Wt.transition,
    s = qe;
  try {
    if (((Wt.transition = null), (qe = 1), e)) return e();
  } finally {
    (qe = s), (Wt.transition = n), (Fe = t), !(Fe & 6) && qn();
  }
}
function gi() {
  (Ut = jr.current), Qe(jr);
}
function Zn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), pm(n)), ct !== null))
    for (n = ct.return; n !== null; ) {
      var s = n;
      switch ((Qa(s), s.tag)) {
        case 1:
          (s = s.type.childContextTypes), s != null && Co();
          break;
        case 3:
          Ar(), Qe(Rt), Qe(jt), oi();
          break;
        case 5:
          si(s);
          break;
        case 4:
          Ar();
          break;
        case 13:
          Qe(nt);
          break;
        case 19:
          Qe(nt);
          break;
        case 10:
          ei(s.type._context);
          break;
        case 22:
        case 23:
          gi();
      }
      n = n.return;
    }
  if (
    ((mt = e),
    (ct = e = zn(e.current, null)),
    (yt = Ut = t),
    (ut = 0),
    (Ps = null),
    (pi = Ko = sr = 0),
    (Et = ps = null),
    Kn !== null)
  ) {
    for (t = 0; t < Kn.length; t++)
      if (((n = Kn[t]), (s = n.interleaved), s !== null)) {
        n.interleaved = null;
        var o = s.next,
          l = n.pending;
        if (l !== null) {
          var a = l.next;
          (l.next = o), (s.next = a);
        }
        n.pending = s;
      }
    Kn = null;
  }
  return e;
}
function Lu(e, t) {
  do {
    var n = ct;
    try {
      if ((Za(), (io.current = Ro), To)) {
        for (var s = rt.memoizedState; s !== null; ) {
          var o = s.queue;
          o !== null && (o.pending = null), (s = s.next);
        }
        To = !1;
      }
      if (
        ((rr = 0),
        (pt = dt = rt = null),
        (us = !1),
        (Ms = 0),
        (fi.current = null),
        n === null || n.return === null)
      ) {
        (ut = 1), (Ps = t), (ct = null);
        break;
      }
      e: {
        var l = e,
          a = n.return,
          i = n,
          c = t;
        if (
          ((t = yt),
          (i.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var h = c,
            g = i,
            m = g.tag;
          if (!(g.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = g.alternate;
            p
              ? ((g.updateQueue = p.updateQueue),
                (g.memoizedState = p.memoizedState),
                (g.lanes = p.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var j = xc(a);
          if (j !== null) {
            (j.flags &= -257),
              yc(j, a, i, l, t),
              j.mode & 1 && gc(l, h, t),
              (t = j),
              (c = h);
            var b = t.updateQueue;
            if (b === null) {
              var k = new Set();
              k.add(c), (t.updateQueue = k);
            } else b.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              gc(l, h, t), xi();
              break e;
            }
            c = Error(de(426));
          }
        } else if (et && i.mode & 1) {
          var _ = xc(a);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              yc(_, a, i, l, t),
              Ka(Or(c, i));
            break e;
          }
        }
        (l = c = Or(c, i)),
          ut !== 4 && (ut = 2),
          ps === null ? (ps = [l]) : ps.push(l),
          (l = a);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var u = Nu(l, c, t);
              dc(l, u);
              break e;
            case 1:
              i = c;
              var d = l.type,
                x = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (Ln === null || !Ln.has(x))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var v = ju(l, i, t);
                dc(l, v);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Bu(n);
    } catch (T) {
      (t = T), ct === n && n !== null && (ct = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Gu() {
  var e = $o.current;
  return ($o.current = Ro), e === null ? Ro : e;
}
function xi() {
  (ut === 0 || ut === 3 || ut === 2) && (ut = 4),
    mt === null || (!(sr & 268435455) && !(Ko & 268435455)) || En(mt, yt);
}
function Uo(e, t) {
  var n = Fe;
  Fe |= 2;
  var s = Gu();
  (mt !== e || yt !== t) && ((mn = null), Zn(e, t));
  do
    try {
      Um();
      break;
    } catch (o) {
      Lu(e, o);
    }
  while (!0);
  if ((Za(), (Fe = n), ($o.current = s), ct !== null)) throw Error(de(261));
  return (mt = null), (yt = 0), ut;
}
function Um() {
  for (; ct !== null; ) zu(ct);
}
function Lm() {
  for (; ct !== null && !dp(); ) zu(ct);
}
function zu(e) {
  var t = Hu(e.alternate, e, Ut);
  (e.memoizedProps = e.pendingProps),
    t === null ? Bu(e) : (ct = t),
    (fi.current = null);
}
function Bu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Pm(n, t)), n !== null)) {
        (n.flags &= 32767), (ct = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ut = 6), (ct = null);
        return;
      }
    } else if (((n = Im(n, t, Ut)), n !== null)) {
      ct = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ct = t;
      return;
    }
    ct = t = e;
  } while (t !== null);
  ut === 0 && (ut = 5);
}
function Xn(e, t, n) {
  var s = qe,
    o = Wt.transition;
  try {
    (Wt.transition = null), (qe = 1), Gm(e, t, n, s);
  } finally {
    (Wt.transition = o), (qe = s);
  }
  return null;
}
function Gm(e, t, n, s) {
  do Ir();
  while (Pn !== null);
  if (Fe & 6) throw Error(de(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(de(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (bp(e, l),
    e === mt && ((ct = mt = null), (yt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Zs ||
      ((Zs = !0),
      Vu(vo, function () {
        return Ir(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Wt.transition), (Wt.transition = null);
    var a = qe;
    qe = 1;
    var i = Fe;
    (Fe |= 4),
      (fi.current = null),
      Rm(e, n),
      Au(n, e),
      lm(sa),
      (wo = !!ra),
      (sa = ra = null),
      (e.current = n),
      $m(n),
      up(),
      (Fe = i),
      (qe = a),
      (Wt.transition = l);
  } else e.current = n;
  if (
    (Zs && ((Zs = !1), (Pn = e), (Oo = o)),
    (l = e.pendingLanes),
    l === 0 && (Ln = null),
    mp(n.stateNode),
    At(e, it()),
    t !== null)
  )
    for (s = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), s(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ao) throw ((Ao = !1), (e = Sa), (Sa = null), e);
  return (
    Oo & 1 && e.tag !== 0 && Ir(),
    (l = e.pendingLanes),
    l & 1 ? (e === Ca ? ms++ : ((ms = 0), (Ca = e))) : (ms = 0),
    qn(),
    null
  );
}
function Ir() {
  if (Pn !== null) {
    var e = Nd(Oo),
      t = Wt.transition,
      n = qe;
    try {
      if (((Wt.transition = null), (qe = 16 > e ? 16 : e), Pn === null))
        var s = !1;
      else {
        if (((e = Pn), (Pn = null), (Oo = 0), Fe & 6)) throw Error(de(331));
        var o = Fe;
        for (Fe |= 4, we = e.current; we !== null; ) {
          var l = we,
            a = l.child;
          if (we.flags & 16) {
            var i = l.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var h = i[c];
                for (we = h; we !== null; ) {
                  var g = we;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fs(8, g, l);
                  }
                  var m = g.child;
                  if (m !== null) (m.return = g), (we = m);
                  else
                    for (; we !== null; ) {
                      g = we;
                      var p = g.sibling,
                        j = g.return;
                      if ((Tu(g), g === h)) {
                        we = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = j), (we = p);
                        break;
                      }
                      we = j;
                    }
                }
              }
              var b = l.alternate;
              if (b !== null) {
                var k = b.child;
                if (k !== null) {
                  b.child = null;
                  do {
                    var _ = k.sibling;
                    (k.sibling = null), (k = _);
                  } while (k !== null);
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
                    fs(9, l, l.return);
                }
              var u = l.sibling;
              if (u !== null) {
                (u.return = l.return), (we = u);
                break e;
              }
              we = l.return;
            }
        }
        var d = e.current;
        for (we = d; we !== null; ) {
          a = we;
          var x = a.child;
          if (a.subtreeFlags & 2064 && x !== null) (x.return = a), (we = x);
          else
            e: for (a = d; we !== null; ) {
              if (((i = we), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qo(9, i);
                  }
                } catch (T) {
                  ot(i, i.return, T);
                }
              if (i === a) {
                we = null;
                break e;
              }
              var v = i.sibling;
              if (v !== null) {
                (v.return = i.return), (we = v);
                break e;
              }
              we = i.return;
            }
        }
        if (
          ((Fe = o), qn(), un && typeof un.onPostCommitFiberRoot == "function")
        )
          try {
            un.onPostCommitFiberRoot(Bo, e);
          } catch {}
        s = !0;
      }
      return s;
    } finally {
      (qe = n), (Wt.transition = t);
    }
  }
  return !1;
}
function Ic(e, t, n) {
  (t = Or(n, t)),
    (t = Nu(e, t, 1)),
    (e = Un(e, t, 1)),
    (t = Dt()),
    e !== null && (Rs(e, 1, t), At(e, t));
}
function ot(e, t, n) {
  if (e.tag === 3) Ic(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ic(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof s.componentDidCatch == "function" &&
            (Ln === null || !Ln.has(s)))
        ) {
          (e = Or(n, e)),
            (e = ju(t, e, 1)),
            (t = Un(t, e, 1)),
            (e = Dt()),
            t !== null && (Rs(t, 1, e), At(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function zm(e, t, n) {
  var s = e.pingCache;
  s !== null && s.delete(t),
    (t = Dt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    mt === e &&
      (yt & n) === n &&
      (ut === 4 || (ut === 3 && (yt & 130023424) === yt && 500 > it() - mi)
        ? Zn(e, 0)
        : (pi |= n)),
    At(e, t);
}
function Fu(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Fs), (Fs <<= 1), !(Fs & 130023424) && (Fs = 4194304))
      : (t = 1));
  var n = Dt();
  (e = wn(e, t)), e !== null && (Rs(e, t, n), At(e, n));
}
function Bm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Fu(e, n);
}
function Fm(e, t) {
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
      throw Error(de(314));
  }
  s !== null && s.delete(t), Fu(e, n);
}
var Hu;
Hu = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Rt.current) It = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (It = !1), Em(e, t, n);
      It = !!(e.flags & 131072);
    }
  else (It = !1), et && t.flags & 1048576 && Yd(t, _o, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var s = t.type;
      uo(e, t), (e = t.pendingProps);
      var o = Tr(t, jt.current);
      Er(t, n), (o = ai(null, t, s, e, o, n));
      var l = ii();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            $t(s) ? ((l = !0), Do(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            ni(t),
            (o.updater = Xo),
            (t.stateNode = o),
            (o._reactInternals = t),
            pa(t, s, e, n),
            (t = ga(null, t, s, !0, l, n)))
          : ((t.tag = 0), et && l && Xa(t), Ct(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      s = t.elementType;
      e: {
        switch (
          (uo(e, t),
          (e = t.pendingProps),
          (o = s._init),
          (s = o(s._payload)),
          (t.type = s),
          (o = t.tag = Vm(s)),
          (e = en(s, e)),
          o)
        ) {
          case 0:
            t = ha(null, t, s, e, n);
            break e;
          case 1:
            t = wc(null, t, s, e, n);
            break e;
          case 11:
            t = vc(null, t, s, e, n);
            break e;
          case 14:
            t = bc(null, t, s, en(s.type, e), n);
            break e;
        }
        throw Error(de(306, s, ""));
      }
      return t;
    case 0:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : en(s, o)),
        ha(e, t, s, o, n)
      );
    case 1:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : en(s, o)),
        wc(e, t, s, o, n)
      );
    case 3:
      e: {
        if ((ku(t), e === null)) throw Error(de(387));
        (s = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          eu(e, t),
          Io(t, s, null, n);
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
            (o = Or(Error(de(423)), t)), (t = Nc(e, t, s, n, o));
            break e;
          } else if (s !== o) {
            (o = Or(Error(de(424)), t)), (t = Nc(e, t, s, n, o));
            break e;
          } else
            for (
              Lt = On(t.stateNode.containerInfo.firstChild),
                Gt = t,
                et = !0,
                nn = null,
                n = Jd(t, null, s, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Rr(), s === o)) {
            t = Nn(e, t, n);
            break e;
          }
          Ct(e, t, s, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        tu(t),
        e === null && da(t),
        (s = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (a = o.children),
        oa(s, o) ? (a = null) : l !== null && oa(s, l) && (t.flags |= 32),
        Du(e, t),
        Ct(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && da(t), null;
    case 13:
      return _u(e, t, n);
    case 4:
      return (
        ri(t, t.stateNode.containerInfo),
        (s = t.pendingProps),
        e === null ? (t.child = $r(t, null, s, n)) : Ct(e, t, s, n),
        t.child
      );
    case 11:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : en(s, o)),
        vc(e, t, s, o, n)
      );
    case 7:
      return Ct(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ct(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ct(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((s = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (a = o.value),
          Ye(Mo, s._currentValue),
          (s._currentValue = a),
          l !== null)
        )
          if (on(l.value, a)) {
            if (l.children === o.children && !Rt.current) {
              t = Nn(e, t, n);
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
                      (c = yn(-1, n & -n)), (c.tag = 2);
                      var h = l.updateQueue;
                      if (h !== null) {
                        h = h.shared;
                        var g = h.pending;
                        g === null
                          ? (c.next = c)
                          : ((c.next = g.next), (g.next = c)),
                          (h.pending = c);
                      }
                    }
                    (l.lanes |= n),
                      (c = l.alternate),
                      c !== null && (c.lanes |= n),
                      ua(l.return, n, t),
                      (i.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (l.tag === 10) a = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((a = l.return), a === null)) throw Error(de(341));
                (a.lanes |= n),
                  (i = a.alternate),
                  i !== null && (i.lanes |= n),
                  ua(a, n, t),
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
        Ct(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (s = t.pendingProps.children),
        Er(t, n),
        (o = Yt(o)),
        (s = s(o)),
        (t.flags |= 1),
        Ct(e, t, s, n),
        t.child
      );
    case 14:
      return (
        (s = t.type),
        (o = en(s, t.pendingProps)),
        (o = en(s.type, o)),
        bc(e, t, s, o, n)
      );
    case 15:
      return Su(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : en(s, o)),
        uo(e, t),
        (t.tag = 1),
        $t(s) ? ((e = !0), Do(t)) : (e = !1),
        Er(t, n),
        wu(t, s, o),
        pa(t, s, o, n),
        ga(null, t, s, !0, e, n)
      );
    case 19:
      return Mu(e, t, n);
    case 22:
      return Cu(e, t, n);
  }
  throw Error(de(156, t.tag));
};
function Vu(e, t) {
  return yd(e, t);
}
function Hm(e, t, n, s) {
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
function qt(e, t, n, s) {
  return new Hm(e, t, n, s);
}
function yi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Vm(e) {
  if (typeof e == "function") return yi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Oa)) return 11;
    if (e === Ua) return 14;
  }
  return 2;
}
function zn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = qt(e.tag, t, e.key, e.mode)),
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
function mo(e, t, n, s, o, l) {
  var a = 2;
  if (((s = e), typeof e == "function")) yi(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case pr:
        return er(n.children, o, l, t);
      case Aa:
        (a = 8), (o |= 8);
        break;
      case Ol:
        return (
          (e = qt(12, n, t, o | 2)), (e.elementType = Ol), (e.lanes = l), e
        );
      case Ul:
        return (e = qt(13, n, t, o)), (e.elementType = Ul), (e.lanes = l), e;
      case Ll:
        return (e = qt(19, n, t, o)), (e.elementType = Ll), (e.lanes = l), e;
      case td:
        return Jo(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Zc:
              a = 10;
              break e;
            case ed:
              a = 9;
              break e;
            case Oa:
              a = 11;
              break e;
            case Ua:
              a = 14;
              break e;
            case kn:
              (a = 16), (s = null);
              break e;
          }
        throw Error(de(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = qt(a, n, t, o)), (t.elementType = e), (t.type = s), (t.lanes = l), t
  );
}
function er(e, t, n, s) {
  return (e = qt(7, e, s, t)), (e.lanes = n), e;
}
function Jo(e, t, n, s) {
  return (
    (e = qt(22, e, s, t)),
    (e.elementType = td),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Rl(e, t, n) {
  return (e = qt(6, e, null, t)), (e.lanes = n), e;
}
function $l(e, t, n) {
  return (
    (t = qt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function qm(e, t, n, s, o) {
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
    (this.eventTimes = hl(0)),
    (this.expirationTimes = hl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = hl(0)),
    (this.identifierPrefix = s),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function vi(e, t, n, s, o, l, a, i, c) {
  return (
    (e = new qm(e, t, n, i, c)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = qt(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: s,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ni(l),
    e
  );
}
function Wm(e, t, n) {
  var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: fr,
    key: s == null ? null : "" + s,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function qu(e) {
  if (!e) return Fn;
  e = e._reactInternals;
  e: {
    if (ar(e) !== e || e.tag !== 1) throw Error(de(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if ($t(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(de(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if ($t(n)) return qd(e, n, t);
  }
  return t;
}
function Wu(e, t, n, s, o, l, a, i, c) {
  return (
    (e = vi(n, s, !0, e, o, l, a, i, c)),
    (e.context = qu(null)),
    (n = e.current),
    (s = Dt()),
    (o = Gn(n)),
    (l = yn(s, o)),
    (l.callback = t ?? null),
    Un(n, l, o),
    (e.current.lanes = o),
    Rs(e, o, s),
    At(e, s),
    e
  );
}
function Zo(e, t, n, s) {
  var o = t.current,
    l = Dt(),
    a = Gn(o);
  return (
    (n = qu(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = yn(l, a)),
    (t.payload = { element: e }),
    (s = s === void 0 ? null : s),
    s !== null && (t.callback = s),
    (e = Un(o, t, a)),
    e !== null && (sn(e, o, a, l), ao(e, o, a)),
    a
  );
}
function Lo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Pc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function bi(e, t) {
  Pc(e, t), (e = e.alternate) && Pc(e, t);
}
function Ym() {
  return null;
}
var Yu =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function wi(e) {
  this._internalRoot = e;
}
el.prototype.render = wi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(de(409));
  Zo(e, t, null, null);
};
el.prototype.unmount = wi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    or(function () {
      Zo(null, e, null, null);
    }),
      (t[bn] = null);
  }
};
function el(e) {
  this._internalRoot = e;
}
el.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Cd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Mn.length && t !== 0 && t < Mn[n].priority; n++);
    Mn.splice(n, 0, e), n === 0 && kd(e);
  }
};
function Ni(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function tl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Tc() {}
function Xm(e, t, n, s, o) {
  if (o) {
    if (typeof s == "function") {
      var l = s;
      s = function () {
        var h = Lo(a);
        l.call(h);
      };
    }
    var a = Wu(t, s, e, 0, null, !1, !1, "", Tc);
    return (
      (e._reactRootContainer = a),
      (e[bn] = a.current),
      Ss(e.nodeType === 8 ? e.parentNode : e),
      or(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof s == "function") {
    var i = s;
    s = function () {
      var h = Lo(c);
      i.call(h);
    };
  }
  var c = vi(e, 0, !1, null, null, !1, !1, "", Tc);
  return (
    (e._reactRootContainer = c),
    (e[bn] = c.current),
    Ss(e.nodeType === 8 ? e.parentNode : e),
    or(function () {
      Zo(t, c, n, s);
    }),
    c
  );
}
function nl(e, t, n, s, o) {
  var l = n._reactRootContainer;
  if (l) {
    var a = l;
    if (typeof o == "function") {
      var i = o;
      o = function () {
        var c = Lo(a);
        i.call(c);
      };
    }
    Zo(t, a, e, o);
  } else a = Xm(n, t, e, o, s);
  return Lo(a);
}
jd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ss(t.pendingLanes);
        n !== 0 &&
          (za(t, n | 1), At(t, it()), !(Fe & 6) && ((Ur = it() + 500), qn()));
      }
      break;
    case 13:
      or(function () {
        var s = wn(e, 1);
        if (s !== null) {
          var o = Dt();
          sn(s, e, 1, o);
        }
      }),
        bi(e, 1);
  }
};
Ba = function (e) {
  if (e.tag === 13) {
    var t = wn(e, 134217728);
    if (t !== null) {
      var n = Dt();
      sn(t, e, 134217728, n);
    }
    bi(e, 134217728);
  }
};
Sd = function (e) {
  if (e.tag === 13) {
    var t = Gn(e),
      n = wn(e, t);
    if (n !== null) {
      var s = Dt();
      sn(n, e, t, s);
    }
    bi(e, t);
  }
};
Cd = function () {
  return qe;
};
Dd = function (e, t) {
  var n = qe;
  try {
    return (qe = e), t();
  } finally {
    qe = n;
  }
};
Xl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Bl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = qo(s);
            if (!o) throw Error(de(90));
            rd(s), Bl(s, o);
          }
        }
      }
      break;
    case "textarea":
      od(e, n);
      break;
    case "select":
      (t = n.value), t != null && Dr(e, !!n.multiple, t, !1);
  }
};
fd = hi;
pd = or;
var Qm = { usingClientEntryPoint: !1, Events: [As, xr, qo, dd, ud, hi] },
  es = {
    findFiberByHostInstance: Qn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Km = {
    bundleType: es.bundleType,
    version: es.version,
    rendererPackageName: es.rendererPackageName,
    rendererConfig: es.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: jn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = gd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: es.findFiberByHostInstance || Ym,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var eo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!eo.isDisabled && eo.supportsFiber)
    try {
      (Bo = eo.inject(Km)), (un = eo);
    } catch {}
}
Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qm;
Bt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ni(t)) throw Error(de(200));
  return Wm(e, t, null, n);
};
Bt.createRoot = function (e, t) {
  if (!Ni(e)) throw Error(de(299));
  var n = !1,
    s = "",
    o = Yu;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = vi(e, 1, !1, null, null, n, !1, s, o)),
    (e[bn] = t.current),
    Ss(e.nodeType === 8 ? e.parentNode : e),
    new wi(t)
  );
};
Bt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(de(188))
      : ((e = Object.keys(e).join(",")), Error(de(268, e)));
  return (e = gd(t)), (e = e === null ? null : e.stateNode), e;
};
Bt.flushSync = function (e) {
  return or(e);
};
Bt.hydrate = function (e, t, n) {
  if (!tl(t)) throw Error(de(200));
  return nl(null, e, t, !0, n);
};
Bt.hydrateRoot = function (e, t, n) {
  if (!Ni(e)) throw Error(de(405));
  var s = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    a = Yu;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Wu(t, null, e, 1, n ?? null, o, !1, l, a)),
    (e[bn] = t.current),
    Ss(e),
    s)
  )
    for (e = 0; e < s.length; e++)
      (n = s[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new el(t);
};
Bt.render = function (e, t, n) {
  if (!tl(t)) throw Error(de(200));
  return nl(null, e, t, !1, n);
};
Bt.unmountComponentAtNode = function (e) {
  if (!tl(e)) throw Error(de(40));
  return e._reactRootContainer
    ? (or(function () {
        nl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[bn] = null);
        });
      }),
      !0)
    : !1;
};
Bt.unstable_batchedUpdates = hi;
Bt.unstable_renderSubtreeIntoContainer = function (e, t, n, s) {
  if (!tl(n)) throw Error(de(200));
  if (e == null || e._reactInternals === void 0) throw Error(de(38));
  return nl(e, t, n, !1, s);
};
Bt.version = "18.3.1-next-f1338f8080-20240426";
function Xu() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xu);
    } catch (e) {
      console.error(e);
    }
}
Xu(), (Xc.exports = Bt);
var Jm = Xc.exports,
  Qu,
  Rc = Jm;
(Qu = Rc.createRoot), Rc.hydrateRoot;
class Zm {
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
  async addMedMapSection(t, n, s, o) {
    const l = { ValueAry: [t, n], ServerName: s, ServerType: o };
    return this.request("/api/medMap/add_medMap_section", {
      method: "POST",
      body: JSON.stringify(l),
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
    return this.request("/api/medmap/barcode", {
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
  async deleteParentContainer(t) {
    const n = { Data: [{ GUID: t }] };
    return this.request("/api/medMap/delete_section", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async deleteSubContainer(t) {
    const n = { Data: [{ GUID: t }] };
    return this.request("/api/medMap/delete_sub_section", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async deleteShelfContainer(t) {
    const n = { Data: [{ GUID: t }] };
    return this.request("/api/medMap/delete_shelf", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
}
const De = new Zm();
class eh {
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
                reverse: l.reverse,
                contents: [],
                med_list: [],
              }),
              Array.isArray(l.sub_section) &&
                l.sub_section.forEach((c, h) => {
                  let g = {
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
                  o.contents[a].contents[h] = g;
                  let m = 0;
                  Array.isArray(c.shelf) &&
                    c.shelf.forEach((p, j) => {
                      let b = {
                        GUID: p.GUID,
                        Master_GUID: p.Master_GUID,
                        name: p.name,
                        class: 3,
                        gird_position: p.position,
                        serverName: p.serverName || "",
                        serverType: p.serverType || "",
                        device_type: p.device_type || "",
                        type: p.type,
                        contents: [],
                        ip: p.ip_light,
                        width: p.width,
                        height: p.height,
                      };
                      if (
                        (b.serverName &&
                          (b.serverName = t.sys_ServerSetting.name),
                        b.serverType &&
                          (b.serverType = t.sys_ServerSetting.type),
                        p.type == "dispensing_shelves" || p.type == "shelf")
                      )
                        p.type == "shelf" && (b.type = "dispensing_shelves"),
                          Array.isArray(p.medMapBox) &&
                            p.medMapBox.forEach((_, u) => {
                              let d = {
                                  GUID: _.GUID,
                                  Master_GUID: _.Master_GUID,
                                  name: "藥盒",
                                  class: 4,
                                  gird_position: _.position,
                                  ip: _.ip_box,
                                  box_type: "",
                                  width: _.width,
                                  height: _.height,
                                  serverType: _.serverType,
                                  serverName: _.serverName,
                                  med_info: [],
                                  type: "med_box",
                                },
                                x = {},
                                v = p.position.split(","),
                                T = _.position.split(",");
                              if (_.storage) {
                                switch (
                                  ((d.device_type = _.storage.DeviceType),
                                  (d.storage = _.storage),
                                  +d.device_type)
                                ) {
                                  case 10:
                                    d.box_type = "2.9";
                                    break;
                                  case 118:
                                    d.box_type = "2.13";
                                    break;
                                  case 13:
                                    d.box_type = "4.2";
                                    break;
                                }
                                (x.name = _.storage.Name),
                                  (x.code = _.storage.Code),
                                  (x.cht_name = _.storage.ChineseName),
                                  (x.SKDIACODE = _.storage.SKDIACODE),
                                  (x.device_type = _.storage.device_type),
                                  (x.qty = _.storage.StorageName),
                                  (x.stockCol = `${+v[0] + 1}`),
                                  (x.stockRow = ""),
                                  (x.stock = `${+T[1] + 1}`);
                              } else
                                (d.device_type = 10),
                                  (d.box_type = "2.9"),
                                  (x.name = ""),
                                  (x.code = ""),
                                  (x.cht_name = ""),
                                  (x.stockCol = `${+v[0] + 1}`),
                                  (x.stockRow = ""),
                                  (x.stock = `${+T[1] + 1}`);
                              o.contents[a].med_list.push(x),
                                (d.med_info[0] = x),
                                b.contents.push(d);
                            });
                      else {
                        b.type = "store_shelves";
                        const _ = p.medMapStock.sort((T, S) => {
                          const [R] = T.location.split(",").map(Number),
                            [V] = S.location.split(",").map(Number);
                          return R - V;
                        });
                        (b.medMapStock = _), (b.name = p.name);
                        let u = Math.max(
                            ..._.map((T) => T.location.split(",")[0])
                          ),
                          d = Math.max(
                            ...l.sub_section.map(
                              (T) => T.position.split(",")[1]
                            )
                          );
                        +u <= 0 && (u = 0);
                        let x = p.position.split(","),
                          v = c.position.split(",");
                        _.forEach((T, S) => {
                          if (T.code) {
                            let R = {};
                            (R.name = T.name),
                              (R.code = T.code),
                              (R.cht_name = ""),
                              (R.SKDIACODE = T.material_no),
                              (R.qty = T.qty),
                              (R.stockCol = `${+x[0] + 1}`),
                              (R.stockRow = `${+v[1] + 1}`),
                              l.reverse == "True" &&
                                (R.stockRow = d + 1 - `${+v[1]}`),
                              (R.stock = `${+T.location.split(",")[0] + 1}`),
                              l.reverse == "True" &&
                                (R.stock = u + 1 - +T.location.split(",")[0]),
                              o.contents[a].med_list.push(R);
                          }
                        });
                      }
                      let k = p.position.split(",")[1];
                      m < +k &&
                        ((m = +k), (o.contents[a].contents[h].oriMaxCol = +m)),
                        o.contents[a].contents[h].contents.push(b);
                    }),
                    Array.isArray(c.drawer) &&
                      c.drawer.forEach((p, j) => {
                        let b = {
                          GUID: p.GUID,
                          Master_GUID: p.Master_GUID,
                          name: `抽屜 ${j}`,
                          class: 3,
                          gird_position: p.position,
                          ip: p.ip_drawer,
                          serverName: p.serverName,
                          serverType: p.serverType,
                        };
                        b.serverName &&
                          (b.serverName = t.sys_ServerSetting.name),
                          b.serverType &&
                            (b.serverType = t.sys_ServerSetting.type),
                          p.drawer
                            ? ((b.drawer = p.drawer),
                              p.drawer.Boxes &&
                                ((b.type = "grid_draw"),
                                (b.name = p.drawer.Name),
                                (b.Boxes = []),
                                Array.isArray(p.drawer.Boxes)
                                  ? p.drawer.Boxes.forEach((u, d) => {
                                      let x = [];
                                      Array.isArray(u) &&
                                        u.forEach((v, T) => {
                                          let S = {
                                            Row: v.Row,
                                            Column: v.Column,
                                            Width: 1,
                                            Height: 1,
                                            Slave: v.Slave,
                                            SlaveBox_Row: v.SlaveBox_Row,
                                            SlaveBox_Column: v.SlaveBox_Column,
                                            MasterBox_Column:
                                              v.MasterBox_Column,
                                            MasterBox_Row: v.MasterBox_Row,
                                            Name: v.Name,
                                            Code: v.Code,
                                            ChineseName: v.ChineseName,
                                            GUID: v.GUID,
                                          };
                                          x.push(S),
                                            v.Code &&
                                              o.contents[a].med_list.push(
                                                v.Code
                                              );
                                        }),
                                        b.Boxes.push(x);
                                    })
                                  : (b.Boxes = p.drawer.Boxes)))
                            : ((b.type = "list_draw"),
                              (b.name = `清單抽屜 ${j}`));
                        let k = p.position.split(",")[1];
                        m < +k &&
                          ((m = +k),
                          (o.contents[a].contents[h].oriMaxCol = +m)),
                          o.contents[a].contents[h].contents.push(b);
                      });
                });
          }),
        o
      );
    } else return {};
  }
  convertSingleComponent(t, n, s) {
    var l, a, i, c, h;
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
        depth: ((h = t.dimensions) == null ? void 0 : h.depth) || t.depth || 30,
      },
      med_box: t.med_box || t.medBox || t.medicine_boxes || [],
      Master_GUID: s,
    };
    return (
      t.components &&
        Array.isArray(t.components) &&
        (o.components = t.components.map((g, m) =>
          this.convertSingleComponent(g, m, o.GUID)
        )),
      Object.keys(t).forEach((g) => {
        [
          "GUID",
          "type",
          "name",
          "position",
          "dimensions",
          "med_box",
          "components",
        ].includes(g) || (o[g] = t[g]);
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
const Pt = new eh(),
  th = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Pt },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ku = f.createContext(void 0),
  nh = ({ children: e }) => {
    const [t, n] = f.useState(!1),
      [s, o] = f.useState(null),
      [l, a] = f.useState(!1),
      [i, c] = f.useState(null),
      [h, g] = f.useState(null),
      [m, p] = f.useState("medicine"),
      [j, b] = f.useState(!1),
      [k, _] = f.useState(0),
      [u, d] = f.useState({ message: "", type: "success", isVisible: !1 }),
      [x, v] = f.useState(!1),
      [T, S] = f.useState(null),
      [R, V] = f.useState("edit"),
      [P, A] = f.useState(!1),
      [oe, ue] = f.useState(null),
      [M, N] = f.useState(!1),
      [F, w] = f.useState(null),
      [U, C] = f.useState(!1),
      [J, E] = f.useState(!1),
      [H, $] = f.useState(null),
      [me, fe] = f.useState(!1),
      [z, ge] = f.useState(null),
      [ne, je] = f.useState(!1),
      [Ie, he] = f.useState(null),
      [Ge, q] = f.useState(!1),
      [I, D] = f.useState(null),
      [ee, L] = f.useState(null),
      [se, le] = f.useState("add"),
      [ve, ye] = f.useState(!1),
      [be, Se] = f.useState([]),
      [O, te] = f.useState([]),
      [G, K] = f.useState(!1),
      [ae, xe] = f.useState(!1),
      [Le, Me] = f.useState(""),
      [We, Ve] = f.useState(!1),
      [ht, St] = f.useState(""),
      [Qt, Kt] = f.useState(!1),
      [sl, Fr] = f.useState(null),
      [Hr, pn] = f.useState(null),
      [ol, Wn] = f.useState(!1),
      [ll, Vr] = f.useState(null),
      [al, y] = f.useState(!1),
      [re, X] = f.useState(null),
      [B, ce] = f.useState(null),
      W = () => {
        sessionStorage.removeItem("user_session"), n(!1), o(null);
      },
      Q = f.useCallback(() => {
        _((Te) => Te + 1);
      }, []),
      Z = f.useCallback((Te, Je) => {
        d({ message: Te, type: Je, isVisible: !0 });
      }, []),
      ie = f.useCallback(() => {
        d((Te) => ({ ...Te, isVisible: !1 }));
      }, []),
      Y = (Te) => {
        S(Te), V("edit"), v(!0);
      },
      pe = () => {
        const Te = {
          GUID: `new_medbox_${Date.now()}`,
          name: "",
          box_type: "",
          width: [],
          width_index: 0,
          med_info: [],
          parentShelf: null,
        };
        S(Te), V("add"), v(!0);
      },
      Ne = () => {
        v(!1), S(null), V("edit");
      },
      Re = (Te) => {
        ue(Te), A(!0);
      },
      ke = () => {
        A(!1), ue(null);
      },
      Ee = (Te) => {
        w(Te), N(!0);
      },
      Be = () => {
        N(!1), w(null);
      },
      $e = (Te) => {
        $(Te), E(!0);
      },
      Ae = () => {
        E(!1), $(null);
      },
      Oe = (Te) => {
        ge(Te), fe(!0);
      },
      Ce = () => {
        fe(!1), ge(null);
      },
      Pe = (Te) => {
        he(Te), je(!0);
      },
      Ue = () => {
        je(!1), he(null);
      },
      _e = (Te) => {
        D(Te), L(null), le("add"), q(!0);
      },
      tt = (Te, Je) => {
        D(Te), L(Je), le("edit"), q(!0);
      },
      qr = () => {
        q(!1), D(null), L(null), le("add");
      },
      il = () => {
        ye(!0);
      },
      af = () => {
        ye(!1);
      },
      cf = (Te = "") => {
        Me(Te), xe(!0);
      },
      df = () => {
        xe(!1);
      },
      uf = (Te) => {
        St(Te), Ve(!0);
      },
      ff = () => {
        Ve(!1), St("");
      },
      pf = (Te, Je) => {
        Fr(Te), pn(Je || null), Kt(!0);
      },
      mf = () => {
        Kt(!1), Fr(null), pn(null);
      },
      hf = (Te) => {
        Vr(Te), Wn(!0);
      },
      gf = () => {
        Wn(!1), Vr(null);
      },
      xf = (Te) => {
        X(Te), y(!0);
      },
      yf = () => {
        y(!1), X(null);
      },
      vf = f.useCallback(async () => {
        if (!i) {
          console.warn("沒有選擇部門分類，無法重新載入資料");
          return;
        }
        console.log("🔄 重新載入藥品地圖資料，部門類型:", i), C(!0);
        try {
          const Te = await De.getMedMapByDepartment(i);
          if (Te.Code === 200 && Te.Data) {
            console.log("📡 重新載入成功:", Te.Data);
            const Je = Pt.convertMedMapApiToFakeData(Te.Data);
            if (!Pt.validateConvertedData(Je)) {
              console.error("❌ 轉換後的資料驗證失敗"), g(null);
              return;
            }
            g(Je), console.log("✅ 地圖資料已重新載入");
          } else console.error("❌ API 回傳錯誤:", Te), g(null);
        } catch (Te) {
          console.error("💥 重新載入藥品地圖資料失敗:", Te), g(null);
        } finally {
          C(!1);
        }
      }, [i, C, g]),
      bf = f.useCallback((Te, Je) => {
        g(
          (at) =>
            at &&
            at.map((gt) => {
              const Ze = { ...gt };
              return (
                Ze.contents &&
                  (Ze.contents = Ze.contents.map((Sn) => {
                    const ir = { ...Sn };
                    return (
                      ir.contents &&
                        (ir.contents = ir.contents.map((cr) => {
                          const dr = { ...cr };
                          return (
                            dr.contents &&
                              (dr.contents = dr.contents.map((Cn) => {
                                if (Cn.GUID === Te) {
                                  const Jt = { ...Cn };
                                  return (
                                    Jt.medMapStock || (Jt.medMapStock = []),
                                    (Jt.medMapStock = [...Jt.medMapStock, Je]),
                                    Jt
                                  );
                                }
                                return Cn;
                              })),
                            dr
                          );
                        })),
                      ir
                    );
                  })),
                Ze
              );
            })
        );
      }, []),
      wf = f.useCallback((Te, Je, at) => {
        g(
          (ft) =>
            ft &&
            ft.map((Ze) => {
              const Sn = { ...Ze };
              return (
                Sn.contents &&
                  (Sn.contents = Sn.contents.map((ir) => {
                    const cr = { ...ir };
                    return (
                      cr.contents &&
                        (cr.contents = cr.contents.map((dr) => {
                          const Cn = { ...dr };
                          return (
                            Cn.contents &&
                              (Cn.contents = Cn.contents.map((Jt) => {
                                if (Jt.GUID === Te && Jt.medMapStock) {
                                  const Ci = { ...Jt };
                                  return (
                                    (Ci.medMapStock = Jt.medMapStock.map((cl) =>
                                      cl.GUID === Je ? { ...cl, ...at } : cl
                                    )),
                                    Ci
                                  );
                                }
                                return Jt;
                              })),
                            Cn
                          );
                        })),
                      cr
                    );
                  })),
                Sn
              );
            })
        );
      }, []),
      Nf = f.useCallback((Te, Je) => {
        g((at) => {
          if (!at) return at;
          const ft = (gt) =>
            gt.map((Ze) =>
              Ze.GUID === Te
                ? { ...Ze, ...Je }
                : Ze.contents && Array.isArray(Ze.contents)
                ? { ...Ze, contents: ft(Ze.contents) }
                : Ze
            );
          return ft(at);
        });
      }, []),
      jf = f.useCallback((Te) => {
        g((Je) => {
          if (!Je) return Je;
          const at = (ft) =>
            ft
              .filter((gt) => gt.GUID !== Te)
              .map((gt) =>
                gt.contents && Array.isArray(gt.contents)
                  ? { ...gt, contents: at(gt.contents) }
                  : gt
              );
          return at(Je);
        });
      }, []),
      Sf = f.useCallback((Te, Je) => {
        g(
          (at) =>
            at &&
            at.map((ft) => {
              if (ft.GUID === Te) {
                const gt = ft.contents ? [...ft.contents, Je] : [Je];
                return { ...ft, contents: gt, medMap_Section: gt };
              }
              return ft;
            })
        );
      }, []),
      Cf = f.useCallback((Te, Je) => {
        g((at) => {
          if (!at) return at;
          const ft = (gt) =>
            gt.map((Ze) => {
              if (Ze.GUID === Te) {
                const Sn = Ze.contents ? [...Ze.contents, Je] : [Je];
                return { ...Ze, contents: Sn };
              }
              return Ze.contents && Array.isArray(Ze.contents)
                ? { ...Ze, contents: ft(Ze.contents) }
                : Ze;
            });
          return ft(at);
        });
      }, []);
    return r.jsx(Ku.Provider, {
      value: {
        isAuthenticated: t,
        setIsAuthenticated: n,
        currentUser: s,
        setCurrentUser: o,
        logout: W,
        sidebarOpen: l,
        setSidebarOpen: a,
        selectedDepartmentType: i,
        setSelectedDepartmentType: c,
        isAdminMode: j,
        setIsAdminMode: b,
        apiDepartmentData: h,
        setApiDepartmentData: g,
        viewMode: m,
        setViewMode: p,
        refreshTrigger: k,
        triggerRefresh: Q,
        addStockToShelf: bf,
        notification: u,
        showNotification: Z,
        hideNotification: ie,
        medBoxModalOpen: x,
        setMedBoxModalOpen: v,
        selectedMedBox: T,
        setSelectedMedBox: S,
        openMedBoxModal: Y,
        closeMedBoxModal: Ne,
        modalMode: R,
        setModalMode: V,
        openAddMedBoxModal: pe,
        listDrawModalOpen: P,
        setListDrawModalOpen: A,
        selectedListDraw: oe,
        setSelectedListDraw: ue,
        openListDrawModal: Re,
        closeListDrawModal: ke,
        gridDrawModalOpen: M,
        setGridDrawModalOpen: N,
        selectedGridDraw: F,
        setSelectedGridDraw: w,
        openGridDrawModal: Ee,
        closeGridDrawModal: Be,
        isLoadingMedMap: U,
        setIsLoadingMedMap: C,
        addParentContainerModalOpen: J,
        setAddParentContainerModalOpen: E,
        selectedDepartmentForAdd: H,
        setSelectedDepartmentForAdd: $,
        openAddParentContainerModal: $e,
        closeAddParentContainerModal: Ae,
        addShelfDrawContainerModalOpen: me,
        setAddShelfDrawContainerModalOpen: fe,
        selectedSubContainerForAdd: z,
        setSelectedSubContainerForAdd: ge,
        openAddShelfDrawContainerModal: Oe,
        closeAddShelfDrawContainerModal: Ce,
        addSubContainerModalOpen: ne,
        setAddSubContainerModalOpen: je,
        selectedParentContainerForAdd: Ie,
        setSelectedParentContainerForAdd: he,
        openAddSubContainerModal: Pe,
        closeAddSubContainerModal: Ue,
        addStoreItemModalOpen: Ge,
        setAddStoreItemModalOpen: q,
        selectedStoreShelfForAdd: I,
        setSelectedStoreShelfForAdd: D,
        selectedStockItemForEdit: ee,
        setSelectedStockItemForEdit: L,
        storeItemModalMode: se,
        setStoreItemModalMode: le,
        openAddStoreItemModal: _e,
        openEditStoreItemModal: tt,
        closeAddStoreItemModal: qr,
        updateStockInShelf: wf,
        updateContainerInLocalData: Nf,
        removeContainerFromLocalData: jf,
        addParentContainerToLocalData: Sf,
        addSubContainerToLocalData: Cf,
        addDepartmentModalOpen: ve,
        setAddDepartmentModalOpen: ye,
        allDepartmentsList: be,
        setAllDepartmentsList: Se,
        openAddDepartmentModal: il,
        closeAddDepartmentModal: af,
        reloadMedMapData: vf,
        qrCodeScannerModalOpen: ae,
        qrCodeScannerMode: Le,
        setQRCodeScannerModalOpen: xe,
        openQRCodeScannerModal: cf,
        closeQRCodeScannerModal: df,
        addBarcodeModalOpen: We,
        setAddBarcodeModalOpen: Ve,
        openAddBarcodeModal: uf,
        closeAddBarcodeModal: ff,
        initialBarcodeValue: ht,
        containerDetailModalOpen: Qt,
        setContainerDetailModalOpen: Kt,
        selectedContainerForDetail: sl,
        setSelectedContainerForDetail: Fr,
        highlightedMedicineCode: Hr,
        setHighlightedMedicineCode: pn,
        openContainerDetailModal: pf,
        closeContainerDetailModal: mf,
        editStoreShelfModalOpen: ol,
        setEditStoreShelfModalOpen: Wn,
        selectedStoreShelfForEdit: ll,
        setSelectedStoreShelfForEdit: Vr,
        openEditStoreShelfModal: hf,
        closeEditStoreShelfModal: gf,
        activeCanvas: B,
        setActiveCanvas: ce,
        editParentContainerModalOpen: al,
        setEditParentContainerModalOpen: y,
        selectedParentContainerForEdit: re,
        setSelectedParentContainerForEdit: X,
        openEditParentContainerModal: xf,
        closeEditParentContainerModal: yf,
        medicineList: O,
        setMedicineList: te,
        isLoadingMedicines: G,
        setIsLoadingMedicines: K,
      },
      children: e,
    });
  },
  lt = () => {
    const e = f.useContext(Ku);
    if (e === void 0)
      throw new Error("useDrugMap must be used within a DrugMapProvider");
    return e;
  },
  rh = {
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
  Ju = f.createContext(void 0),
  sh = ({ children: e }) => {
    const [t, n] = f.useState("zh-TW"),
      s = (o) => rh[t][o] || o;
    return r.jsx(Ju.Provider, {
      value: { language: t, setLanguage: n, t: s },
      children: e,
    });
  },
  Mt = () => {
    const e = f.useContext(Ju);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var oh = {
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
 */ const lh = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  He = (e, t) => {
    const n = f.forwardRef(
      (
        {
          color: s = "currentColor",
          size: o = 24,
          strokeWidth: l = 2,
          absoluteStrokeWidth: a,
          className: i = "",
          children: c,
          ...h
        },
        g
      ) =>
        f.createElement(
          "svg",
          {
            ref: g,
            ...oh,
            width: o,
            height: o,
            stroke: s,
            strokeWidth: a ? (Number(l) * 24) / Number(o) : l,
            className: ["lucide", `lucide-${lh(e)}`, i].join(" "),
            ...h,
          },
          [
            ...t.map(([m, p]) => f.createElement(m, p)),
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
 */ const ah = He("Archive", [
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
 */ const $c = He("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zu = He("Building2", [
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
 */ const Lr = He("Camera", [
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
 */ const ih = He("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const to = He("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ef = He("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ch = He("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dh = He("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tf = He("EyeOff", [
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
 */ const nf = He("Eye", [
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
 */ const uh = He("Globe", [
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
 */ const rf = He("Grid3x3", [
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
 */ const ji = He("Layers", [
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
 */ const fh = He("Lightbulb", [
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
 */ const ph = He("ListX", [
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
 */ const _a = He("List", [
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
 */ const Ot = He("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Si = He("Lock", [
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
 */ const mh = He("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hh = He("Package", [
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
 */ const Sr = He("Pen", [
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
 */ const gh = He("Pill", [
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
 */ const Tt = He("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Go = He("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tn = He("Settings", [
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
 */ const Cr = He("Trash2", [
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
 */ const sf = He("Unlock", [
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
 */ const xh = He("Warehouse", [
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
 */ const yh = He("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ke = He("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  vh = () => {
    const { sidebarOpen: e, setSidebarOpen: t } = lt(),
      { t: n } = Mt();
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
              children: r.jsx(ji, { className: "w-5 h-5" }),
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
                ? r.jsx(_a, { className: "w-6 h-6" })
                : r.jsx(_a, { className: "w-6 h-6" }),
            }),
          ],
        }),
      }),
    });
  },
  bh = () => {
    const {
        viewMode: e,
        setViewMode: t,
        logout: n,
        currentUser: s,
        selectedDepartmentType: o,
        openAddDepartmentModal: l,
        apiDepartmentData: a,
        allDepartmentsList: i,
      } = lt(),
      { language: c, setLanguage: h, t: g } = Mt(),
      [m, p] = ho.useState(!1),
      j = () => {
        h(c === "zh-TW" ? "en" : "zh-TW");
      },
      b = ho.useMemo(() => {
        if (!o || !i || !a) return !1;
        const k = a.map((d) => d.name);
        return (
          i
            .filter((d) => d["department_type "] === o)
            .filter((d) => !k.includes(d.name)).length > 0
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
                        r.jsx(gh, { className: "w-4 h-4" }),
                        r.jsx("span", {
                          className: "text-sm font-medium",
                          children: g("topbar.medicine"),
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
                        r.jsx(Zu, { className: "w-4 h-4" }),
                        r.jsx("span", {
                          className: "text-sm font-medium",
                          children: g("topbar.department"),
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsx("button", {
                  onClick: () => p(!m),
                  className:
                    "lg:hidden flex items-center justify-center p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                  children: m
                    ? r.jsx(dh, { className: "w-4 h-4" })
                    : r.jsx(ef, { className: "w-4 h-4" }),
                }),
              ],
            }),
            r.jsxs("div", {
              className: `
            flex items-center gap-2 lg:gap-0 lg:space-x-2 flex-col lg:flex-row
            lg:flex lg:opacity-100 lg:max-h-none
            transition-all duration-300 ease-in-out overflow-hidden
            ${
              m
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
                          r.jsx(Tt, { className: "w-4 h-4" }),
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
                  onClick: j,
                  className:
                    "w-full lg:w-auto flex justify-center items-center space-x-2 px-3 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors border",
                  children: [
                    r.jsx(uh, { className: "w-4 h-4" }),
                    r.jsx("span", {
                      className: "text-sm font-medium",
                      children: g("topbar.language"),
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
                    r.jsx(mh, { className: "w-4 h-4" }),
                    r.jsx("span", {
                      className: "text-sm font-medium",
                      children: g("topbar.logout"),
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
  wh = [
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
  Nh = ({ isOpen: e, onClose: t }) => {
    const [n, s] = f.useState("blue"),
      [o, l] = f.useState(1),
      [a, i] = f.useState(60),
      [c, h] = f.useState(""),
      [g, m] = f.useState(""),
      [p, j] = f.useState([]),
      [b, k] = f.useState([]),
      [_, u] = f.useState([]),
      [d, x] = f.useState(!1),
      [v, T] = f.useState(!1),
      S = f.useRef(null),
      R = f.useRef(null),
      V = f.useRef(null),
      P = f.useRef(null);
    f.useEffect(() => {
      if (e) {
        const w = localStorage.getItem("medMap_setting");
        if (w)
          try {
            const U = JSON.parse(w);
            s(U.light_color || "blue"),
              l(U.brightness !== void 0 ? U.brightness : 1),
              i(U.light_sec !== void 0 ? U.light_sec : 60),
              h(U.default_person || ""),
              m(U.default_person_id || "");
          } catch (U) {
            console.error("讀取設定失敗:", U),
              s("blue"),
              l(1),
              i(60),
              h(""),
              m("");
          }
        else s("blue"), l(1), i(60), h(""), m("");
        A();
      }
    }, [e]),
      f.useEffect(() => {
        const w = (U) => {
          V.current &&
            !V.current.contains(U.target) &&
            S.current &&
            !S.current.contains(U.target) &&
            x(!1),
            P.current &&
              !P.current.contains(U.target) &&
              R.current &&
              !R.current.contains(U.target) &&
              T(!1);
        };
        return (
          document.addEventListener("mousedown", w),
          () => document.removeEventListener("mousedown", w)
        );
      }, []);
    const A = async () => {
        try {
          const w = await De.getAllStaffInfo();
          w.Code === 200 && w.Data && j(w.Data);
        } catch (w) {
          console.error("獲取人員資料失敗:", w);
        }
      },
      oe = (w) => {
        if ((h(w), w.trim() === "")) {
          k([]), x(!1);
          return;
        }
        const U = p.filter(
          (C) => C.name && C.name.toLowerCase().includes(w.toLowerCase())
        );
        k(U), x(U.length > 0);
      },
      ue = (w) => {
        if ((m(w), w.trim() === "")) {
          u([]), T(!1);
          return;
        }
        const U = p.filter(
          (C) => C.ID && C.ID.toLowerCase().includes(w.toLowerCase())
        );
        u(U), T(U.length > 0);
      },
      M = (w) => {
        h(w.name), m(w.ID), x(!1);
      },
      N = (w) => {
        h(w.name), m(w.ID), T(!1);
      },
      F = () => {
        const w = {
          light_color: n,
          brightness: o,
          light_sec: a,
          default_person: c,
          default_person_id: g,
        };
        localStorage.setItem("medMap_setting", JSON.stringify(w)),
          console.log("設定已儲存:", w),
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
                      children: r.jsx(Ke, { className: "w-5 h-5" }),
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
                                  ref: S,
                                  type: "text",
                                  value: c,
                                  onChange: (w) => oe(w.target.value),
                                  onFocus: () => {
                                    c.trim() && oe(c);
                                  },
                                  placeholder: "請輸入人員名稱",
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                }),
                                d &&
                                  r.jsx("div", {
                                    ref: V,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: b.map((w, U) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          onClick: () => M(w),
                                          className:
                                            "px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                          children: [
                                            r.jsx("div", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: w.name,
                                            }),
                                            r.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: w.ID,
                                            }),
                                          ],
                                        },
                                        U
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
                                  value: g,
                                  onChange: (w) => ue(w.target.value),
                                  onFocus: () => {
                                    g.trim() && ue(g);
                                  },
                                  placeholder: "請輸入人員 ID",
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                }),
                                v &&
                                  r.jsx("div", {
                                    ref: P,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: _.map((w, U) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          onClick: () => N(w),
                                          className:
                                            "px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                          children: [
                                            r.jsx("div", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: w.ID,
                                            }),
                                            r.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: w.name,
                                            }),
                                          ],
                                        },
                                        U
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
                          children: wh.map((w) =>
                            r.jsxs(
                              "button",
                              {
                                onClick: () => s(w.value),
                                className: `
                    relative p-3 rounded-lg border-2 transition-all
                    ${w.bgColor} ${w.textColor}
                    ${
                      n === w.value
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
                                        children: w.name,
                                      }),
                                      r.jsx("div", {
                                        className: "text-xs opacity-90",
                                        children: w.bgr,
                                      }),
                                    ],
                                  }),
                                  n === w.value &&
                                    r.jsx("div", {
                                      className:
                                        "absolute top-1 right-1 w-3 h-3 bg-white rounded-full border-2 border-gray-900",
                                    }),
                                ],
                              },
                              w.value
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
                              onChange: (w) => l(parseFloat(w.target.value)),
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
                              onChange: (w) => i(parseInt(w.target.value)),
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
                      onClick: F,
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
  jh = ({ isOpen: e, onClose: t, onConfirm: n }) => {
    const [s, o] = f.useState(""),
      [l, a] = f.useState(!1);
    f.useEffect(() => {
      e && (o(""), a(!1));
    }, [e]);
    const i = (h) => {
        h.preventDefault(), s.trim() && n(s);
      },
      c = (h) => {
        h.key === "Escape" && t();
      };
    return e
      ? r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: t,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200 w-[400px]",
              onClick: (h) => h.stopPropagation(),
              onKeyDown: c,
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx("div", {
                          className: "p-2 bg-blue-100 rounded-lg",
                          children: r.jsx(Si, {
                            className: "w-5 h-5 text-blue-600",
                          }),
                        }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "後台模式驗證",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      type: "button",
                      onClick: t,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ke, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("form", {
                  onSubmit: i,
                  className: "flex-1 px-6 py-6",
                  children: r.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      r.jsx("p", {
                        className: "text-sm text-gray-600",
                        children: "請輸入後台密碼以開啟管理員功能",
                      }),
                      r.jsxs("div", {
                        className: "relative",
                        children: [
                          r.jsx("input", {
                            type: "text",
                            value: s,
                            onChange: (h) => o(h.target.value),
                            className:
                              "w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                            placeholder: "請輸入密碼",
                            autoFocus: !0,
                          }),
                          r.jsx("button", {
                            type: "button",
                            onClick: () => a(!l),
                            className:
                              "absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors",
                            children: l
                              ? r.jsx(tf, { className: "w-5 h-5" })
                              : r.jsx(nf, { className: "w-5 h-5" }),
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
                      type: "button",
                      onClick: t,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      type: "button",
                      onClick: i,
                      disabled: !s.trim(),
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                      children: "確認",
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : null;
  },
  Sh = () => {
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
        setIsAdminMode: h,
      } = lt(),
      { t: g } = Mt(),
      [m, p] = f.useState(new Set()),
      [j, b] = f.useState([]),
      [k, _] = f.useState(!0),
      [u, d] = f.useState([]),
      [x, v] = f.useState(!1),
      [T, S] = f.useState(!1),
      R = () => {
        c ? h(!1) : S(!0);
      },
      V = (M) => {
        M === "66437068" ? (h(!0), S(!1)) : alert("密碼錯誤，無法開啟後台模式");
      };
    f.useEffect(() => {
      (async () => {
        _(!0);
        try {
          const N = await De.getDepartments();
          N.Code === 200 && N.Data
            ? (console.log(N.Data), b(N.Data), i(N.Data))
            : (console.error("API returned error:", N), b([]), i([]));
        } catch (N) {
          console.error("Failed to fetch department data:", N), b([]), i([]);
        } finally {
          _(!1);
        }
      })();
    }, []);
    const P = j.reduce((M, N) => {
        const F = N["department_type "];
        return M[F] || (M[F] = []), M[F].push(N), M;
      }, {}),
      A = (M) => {
        const N = new Set(m);
        N.has(M) ? N.delete(M) : N.add(M), p(N);
      },
      oe = async (M) => {
        console.log("🏢 選擇部門:", M), s(M), await ue(M), t(!1);
      },
      ue = async (M) => {
        console.log("🚀 開始取得藥品地圖資料，部門類型:", M), a(!0);
        try {
          const N = await De.getMedMapByDepartment(M);
          if (N.Code === 200 && N.Data) {
            console.log("📡 API 回傳成功:", N.Data);
            const F = Pt.convertMedMapApiToFakeData(N.Data);
            if (!Pt.validateConvertedData(F)) {
              console.error("❌ 轉換後的資料驗證失敗"), d([]);
              return;
            }
            const U = Pt.generateConversionReport(N.Data, F);
            d(F),
              o(F),
              console.log("💾 已暫存轉換後的資料到狀態中"),
              console.log("📊 最終轉換結果:", F),
              console.log("📋 轉換報告:", U);
          } else console.error("❌ API 回傳錯誤:", N), d([]), o(null);
        } catch (N) {
          console.error("💥 取得藥品地圖資料失敗:", N), d([]), o(null);
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
                          title: g("nav.home"),
                          children: r.jsx(ji, { className: "w-5 h-5" }),
                        }),
                        r.jsx("h1", {
                          className: "text-lg font-semibold text-gray-900",
                          children: g("sidebar.drugMap"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      type: "button",
                      onClick: () => t(!e),
                      className:
                        "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                      title: g("sidebar.closeSidebar"),
                      children: r.jsx(ph, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
              }),
              r.jsx("div", {
                className: "flex-1 overflow-y-auto p-4",
                children: k
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
                          children: g("sidebar.departmentCategories"),
                        }),
                        Object.entries(P).map(([M, N]) =>
                          r.jsxs(
                            "div",
                            {
                              className: "space-y-1",
                              children: [
                                r.jsxs("button", {
                                  type: "button",
                                  onClick: () => oe(M),
                                  disabled: l,
                                  className: `w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 border ${
                                    n === M
                                      ? "bg-blue-50 text-blue-700 border-blue-200 shadow-sm"
                                      : "text-gray-700 hover:bg-gray-50 hover:shadow-sm border-transparent"
                                  } ${
                                    l ? "opacity-50 cursor-not-allowed" : ""
                                  }`,
                                  children: [
                                    r.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        M === "B1F"
                                          ? r.jsx(Zu, { className: "w-4 h-4" })
                                          : r.jsx(xh, { className: "w-4 h-4" }),
                                        r.jsxs("div", {
                                          className: "text-left",
                                          children: [
                                            r.jsx("div", {
                                              className: "font-medium",
                                              children: M,
                                            }),
                                            r.jsxs("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: [
                                                N.length,
                                                " ",
                                                g("sidebar.departments"),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    r.jsx("div", {
                                      onClick: (F) => {
                                        F.stopPropagation(), A(M);
                                      },
                                      className:
                                        "p-1 hover:bg-gray-200/50 rounded transition-colors",
                                      children: m.has(M)
                                        ? r.jsx(ef, { className: "w-4 h-4" })
                                        : r.jsx(ch, { className: "w-4 h-4" }),
                                    }),
                                  ],
                                }),
                                m.has(M) &&
                                  r.jsx("div", {
                                    className: "ml-6 space-y-2",
                                    children: N.map((F) =>
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
                                                children: F.name,
                                              }),
                                              r.jsx("span", {
                                                className: `text-xs px-2 py-1 rounded-full ${
                                                  F.type === "調劑台"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-blue-100 text-blue-800"
                                                }`,
                                                children: F.type,
                                              }),
                                            ],
                                          }),
                                        },
                                        F.GUID
                                      )
                                    ),
                                  }),
                              ],
                            },
                            M
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
                          type: "button",
                          id: "admin-mode-toggle",
                          role: "switch",
                          "aria-checked": c,
                          onClick: R,
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
                      type: "button",
                      onClick: () => v(!0),
                      className:
                        "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                      title: "設定",
                      children: r.jsx(Tn, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        r.jsx(Nh, { isOpen: x, onClose: () => v(!1) }),
        r.jsx(jh, { isOpen: T, onClose: () => S(!1), onConfirm: V }),
      ],
    });
  },
  Ch = () => {
    const { t: e } = Mt();
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
  Dh = ({
    component: e,
    scale: t,
    isLocked: n,
    isHighlighted: s = !1,
    onContainerClick: o,
  }) => {
    const l = f.useRef(null),
      { t: a } = Mt(),
      {
        apiDepartmentData: i,
        setApiDepartmentData: c,
        showNotification: h,
      } = lt(),
      [g, m] = f.useState(!1),
      [p, j] = f.useState({ x: 0, y: 0 }),
      [b, k] = f.useState(e.position),
      [_, u] = f.useState(!1),
      [d, x] = f.useState(null),
      [v, T] = f.useState({ x: 0, y: 0 }),
      [S, R] = f.useState({ x: 0, y: 0 });
    f.useEffect(() => {
      console.log("🔄 CanvasComponent: position prop changed", {
        GUID: e.GUID,
        newPosition: e.position,
        currentPosition: b,
      }),
        k(e.position);
    }, [e.position]);
    const V = () => {
        try {
          const ne = localStorage.getItem("medMap_setting");
          if (ne) return JSON.parse(ne).light_color || "red";
        } catch (ne) {
          console.error("讀取高亮顏色設定失敗:", ne);
        }
        return "red";
      },
      P = f.useCallback(
        async (ne, je) => {
          if (!i) return;
          console.log("🔄 更新組件位置:", ne, je);
          const Ie = JSON.parse(JSON.stringify(i)),
            he = (q) => {
              for (const I of q) {
                if (I.GUID === ne)
                  return (
                    (I.position = { x: je.x.toFixed(3), y: je.y.toFixed(3) }),
                    console.log(
                      "✅ 組件位置已更新:",
                      I.name,
                      je.x.toFixed(3),
                      je.y.toFixed(3)
                    ),
                    !0
                  );
                if (
                  (I.components &&
                    Array.isArray(I.components) &&
                    he(I.components)) ||
                  (I.contents && Array.isArray(I.contents) && he(I.contents))
                )
                  return !0;
              }
              return !1;
            };
          if (he(Ie)) {
            c(Ie), console.log("💾 全域資料已更新");
            try {
              console.log("📡 開始同步後端位置資料...");
              const q = await De.updateContainerPosition({
                GUID: ne,
                absolute_position: `${je.x.toFixed(3)},${je.y.toFixed(3)}`,
              });
              q.Code === 200
                ? (console.log("✅ 後端位置同步成功", q),
                  h("位置更新成功", "success"))
                : (console.error("❌ 後端位置同步失敗:", q),
                  h(`位置更新失敗: ${q.Result || "未知錯誤"}`, "error"));
            } catch (q) {
              console.error("💥 後端位置同步發生錯誤:", q),
                h("位置更新失敗: 網路錯誤", "error");
            }
          } else console.warn("⚠️ 未找到要更新的組件:", ne);
        },
        [i, c, h]
      ),
      { position: A, dimensions: oe, name: ue, type: M } = e,
      N = f.useCallback(
        (ne) => {
          const je = l.current;
          if (je)
            if ((R({ x: ne.clientX, y: ne.clientY }), n)) {
              ne.preventDefault(),
                ne.stopPropagation(),
                je.setPointerCapture(ne.pointerId);
              const Ie = je.getBoundingClientRect(),
                he = ne.clientX - Ie.left,
                Ge = ne.clientY - Ie.top;
              j({ x: he, y: Ge }), m(!0), u(!1);
            } else u(!1);
        },
        [n]
      ),
      F = f.useCallback(() => {
        if (!i) return [];
        const ne = [],
          je = (Ie) => {
            for (const he of Ie)
              he.GUID !== e.GUID &&
                he.position &&
                ne.push({
                  GUID: he.GUID,
                  position: he.position,
                  dimensions: he.dimensions,
                }),
                he.components &&
                  Array.isArray(he.components) &&
                  je(he.components),
                he.contents && Array.isArray(he.contents) && je(he.contents);
          };
        return je(i), ne;
      }, [i, e.GUID]),
      w = f.useCallback(
        (ne, je) => {
          const he = F();
          let Ge = ne,
            q = je;
          for (const I of he) {
            const D = parseFloat(I.position.x),
              ee = parseFloat(I.position.y);
            if (
              (Math.abs(ne - D) < 20 && (Ge = D),
              Math.abs(je - ee) < 20 && (q = ee),
              I.dimensions && e.dimensions)
            ) {
              const L = D + parseFloat(I.dimensions.width),
                se = ne + parseFloat(e.dimensions.width);
              Math.abs(se - L) < 20 &&
                (Ge = L - parseFloat(e.dimensions.width));
              const le = ee + parseFloat(I.dimensions.depth),
                ve = je + parseFloat(e.dimensions.depth);
              Math.abs(ve - le) < 20 &&
                (q = le - parseFloat(e.dimensions.depth));
            }
          }
          return { x: Ge, y: q };
        },
        [F, e.dimensions]
      ),
      U = f.useCallback(
        (ne) => {
          const je = Math.abs(ne.clientX - S.x),
            Ie = Math.abs(ne.clientY - S.y);
          if (((je > 5 || Ie > 5) && u(!0), !g || !n)) return;
          ne.preventDefault(), ne.stopPropagation();
          const he = l.current;
          if (!he) return;
          const Ge = he.closest("[data-canvas-content]");
          if (!Ge) return;
          const q = Ge.getBoundingClientRect(),
            I = (ne.clientX - q.left - p.x) / t,
            D = (ne.clientY - q.top - p.y) / t,
            ee = w(I, D);
          k(ee);
        },
        [g, p, t, n, w, S]
      ),
      C = f.useCallback(
        (ne) => {
          const je = Math.abs(ne.clientX - S.x),
            Ie = Math.abs(ne.clientY - S.y),
            he = je > 5 || Ie > 5;
          if (n) {
            if (!g) return;
            ne.preventDefault(), ne.stopPropagation();
            const Ge = l.current;
            Ge && Ge.releasePointerCapture(ne.pointerId),
              m(!1),
              he ? P(e.GUID, b) : o && o(e),
              u(!1);
          } else
            !he && o && (ne.preventDefault(), ne.stopPropagation(), o(e)),
              u(!1);
        },
        [g, n, o, e, P, b, S]
      ),
      J = f.useCallback(
        (ne) => {
          const je = l.current;
          if (!je) return;
          const Ie = ne.touches[0];
          if (Ie && (T({ x: Ie.clientX, y: Ie.clientY }), n)) {
            ne.preventDefault(), ne.stopPropagation(), x(Ie.identifier);
            const he = je.getBoundingClientRect(),
              Ge = Ie.clientX - he.left,
              q = Ie.clientY - he.top;
            j({ x: Ge, y: q }), m(!0);
          }
        },
        [n]
      ),
      E = f.useCallback(
        (ne) => {
          if (!g || !n || d === null) return;
          ne.preventDefault(), ne.stopPropagation();
          const je = l.current;
          if (!je) return;
          const Ie = Array.from(ne.touches).find((ee) => ee.identifier === d);
          if (!Ie) return;
          const he = je.closest("[data-canvas-content]");
          if (!he) return;
          const Ge = he.getBoundingClientRect(),
            q = (Ie.clientX - Ge.left - p.x) / t,
            I = (Ie.clientY - Ge.top - p.y) / t,
            D = w(q, I);
          k(D);
        },
        [g, p, t, n, d, w]
      ),
      H = f.useCallback(
        (ne) => {
          const je = Array.from(ne.changedTouches)[0];
          if (!je) return;
          const Ie = Math.abs(je.clientX - v.x),
            he = Math.abs(je.clientY - v.y),
            Ge = Ie > 10 || he > 10;
          if (n) {
            if (
              !g ||
              d === null ||
              !Array.from(ne.changedTouches).some((I) => I.identifier === d)
            )
              return;
            ne.preventDefault(),
              ne.stopPropagation(),
              m(!1),
              x(null),
              T({ x: 0, y: 0 }),
              Ge ? P(e.GUID, b) : o && o(e);
          } else
            !Ge && o && (ne.preventDefault(), ne.stopPropagation(), o(e)),
              T({ x: 0, y: 0 });
        },
        [g, n, d, P, e, b, v, o]
      ),
      $ = f.useCallback(
        (ne) => {
          !g ||
            !n ||
            d === null ||
            !Array.from(ne.changedTouches).some((Ie) => Ie.identifier === d) ||
            (ne.preventDefault(),
            ne.stopPropagation(),
            k(e.position),
            m(!1),
            x(null),
            T({ x: 0, y: 0 }));
        },
        [g, n, d, e.position]
      ),
      me = (ne) => {
        if (s) return `highlight-breathe-${V()}`;
        switch (ne) {
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
      fe = (ne) => {
        if (s) return `highlight-breathe-${V()}`;
        switch (ne) {
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
      z = (ne) => {
        if (s) return `highlight-tag-${V()}`;
        switch (ne) {
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
      ge = (ne) => {
        const je =
          ne === "調劑台"
            ? "type.dispensingStation"
            : ne === "藥庫"
            ? "type.warehouse"
            : ne === "parent_container"
            ? "櫃體"
            : "type." + ne;
        return a(je) || ne;
      };
    return r.jsx("div", {
      ref: l,
      className: `flex flex-col absolute border-2 rounded-lg shadow-lg hover:shadow-xl ${me(
        M
      )} overflow-hidden ${n ? "cursor-move" : "cursor-default"} ${
        g ? "shadow-2xl z-50" : ""
      }`,
      style: {
        left: `${b.x}px`,
        top: `${b.y}px`,
        minWidth: M === "調劑台" || M === "藥庫" ? "120px" : "180px",
        minHeight: M === "調劑台" || M === "藥庫" ? "60px" : "120px",
        userSelect: "none",
        touchAction: "none",
        transition: g
          ? "none"
          : "transform 0.2s ease-out, box-shadow 0.2s ease-out",
      },
      onPointerDown: N,
      onPointerMove: U,
      onPointerUp: C,
      onTouchStart: J,
      onTouchMove: E,
      onTouchEnd: H,
      onTouchCancel: $,
      children: r.jsx("div", {
        className: `w-full min-w-[400px] h-auto flex items-start flex-1 justify-between p-2 border-gray-600 ${fe(
          M
        )}`,
        children: r.jsx("div", {
          className: "flex space-x-2 flex-1 min-w-0",
          children: r.jsxs("div", {
            className: "min-w-0 flex gap-4",
            children: [
              r.jsx("div", {
                className: "font-semibold text-[48px] truncate",
                children: ue,
              }),
              r.jsx("div", {
                className: `flex items-center text-[28px] truncate py-2 px-4 text-white rounded-2xl ${z(
                  M
                )}`,
                children: ge(M),
              }),
            ],
          }),
        }),
      }),
    });
  },
  rl = ({ isOpen: e, onClose: t, onScanSuccess: n, mode: s }) => {
    const { showNotification: o, openAddBarcodeModal: l } = lt();
    console.log("🔍 QRCodeScannerModal props:", {
      isOpen: e,
      mode: s,
      hasOnScanSuccess: !!n,
    });
    const a = f.useRef(null),
      i = f.useRef(null),
      c = f.useRef(null),
      h = f.useRef(null),
      g = f.useRef(!1),
      [m, p] = f.useState(!1),
      [j, b] = f.useState(""),
      [k, _] = f.useState(null),
      [u, d] = f.useState(!1);
    f.useEffect(() => {
      const P = () => {
        const A = window.innerWidth < 680;
        d(A);
      };
      return (
        P(),
        window.addEventListener("resize", P),
        () => window.removeEventListener("resize", P)
      );
    }, []);
    const x = async () => {
        try {
          b("");
          const P = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: "environment",
              width: { ideal: 9999 },
              height: { ideal: 9999 },
            },
          });
          (c.current = P),
            a.current &&
              ((a.current.srcObject = P),
              await a.current.play(),
              console.log("✅ Camera started, setting isScanning to true"),
              p(!0));
        } catch (P) {
          console.error("無法開啟相機:", P),
            b("無法開啟相機，請確認相機權限已開啟");
        }
      },
      v = () => {
        console.log("🛑 停止相機和掃描"),
          (g.current = !1),
          p(!1),
          c.current &&
            (c.current.getTracks().forEach((P) => P.stop()),
            (c.current = null)),
          a.current && (a.current.srcObject = null);
      },
      T = async () => {
        if (
          (console.log("🔄 captureAndScan called"),
          !a.current || !i.current || !m)
        ) {
          console.log("❌ Early return: missing refs or not scanning");
          return;
        }
        if (g.current) {
          console.log("⏱️ Scan already in progress, skipping");
          return;
        }
        g.current = !0;
        const P = a.current,
          A = i.current,
          oe = A.getContext("2d");
        if (!oe || P.readyState !== P.HAVE_ENOUGH_DATA) {
          console.log("❌ Video not ready or no context"),
            (g.current = !1),
            setTimeout(() => {
              m && T();
            }, 100);
          return;
        }
        (A.width = P.videoWidth),
          (A.height = P.videoHeight),
          oe.drawImage(P, 0, 0, A.width, A.height),
          A.toBlob(
            async (ue) => {
              if (!ue) return;
              const M = new File([ue], "scan.jpg", { type: "image/jpeg" }),
                N = performance.now();
              try {
                console.log("📸 [相機掃描] 截取圖片並掃描...");
                const F = performance.now(),
                  w = await De.scanBarcode(M),
                  U = performance.now();
                if (
                  (console.log(
                    `⏱️ [相機掃描] 掃描條碼API用時: ${(U - F).toFixed(2)}ms`
                  ),
                  !w.results || w.results.length === 0)
                ) {
                  console.log("⚠️ 未辨識到條碼，立即進行下一輪掃描"),
                    (g.current = !1),
                    m && T();
                  return;
                }
                const C = w.results[0];
                if (!C.code) {
                  console.log(
                    "⚠️ 辨識到條碼但無法讀取內容，立即進行下一輪掃描"
                  ),
                    (g.current = !1),
                    m && T();
                  return;
                }
                console.log("✅ 成功辨識條碼:", C.code),
                  console.log("📋 條碼類型:", C.type),
                  console.log("📊 信心度:", C.conf),
                  (g.current = !1),
                  v(),
                  t();
                try {
                  const J = performance.now(),
                    E = await De.searchByBarCode(C.code);
                  console.log("AI掃描回傳:", E);
                  const H = performance.now();
                  if (
                    (console.log(
                      `⏱️ [相機掃描] 搜尋藥品資料API用時: ${(H - J).toFixed(
                        2
                      )}ms`
                    ),
                    console.log("🔍 條碼搜尋結果:", E),
                    E.Code === 200)
                  )
                    if (
                      (console.log("✅ 找到藥品資料:", E.Data),
                      console.log("🎯 準備調用 onScanSuccess, mode:", s),
                      o("找到藥品資料", "success"),
                      n)
                    ) {
                      console.log("✅ onScanSuccess 存在，開始調用");
                      const $ = performance.now();
                      n(C.code, E.Data);
                      const me = performance.now();
                      console.log(
                        `⏱️ [相機掃描] 定位藥品用時: ${(me - $).toFixed(2)}ms`
                      );
                      const fe = performance.now();
                      console.log(
                        `⏱️ [相機掃描] 總用時: ${(fe - N).toFixed(2)}ms`
                      ),
                        console.log("✅ onScanSuccess 調用完成");
                    } else console.warn("⚠️ onScanSuccess 不存在");
                  else
                    E.Code === -200 && E.Result === "查無資料"
                      ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                        o("查無條碼資料，請建立條碼", "warning"),
                        l(C.code))
                      : (console.log("❌ 搜尋失敗:", E.Result),
                        o(E.Result || "搜尋失敗", "error"));
                } catch (J) {
                  console.error("條碼搜尋錯誤:", J),
                    o("搜尋失敗，請稍後再試", "error");
                }
              } catch (F) {
                console.error("掃描錯誤:", F),
                  (g.current = !1),
                  setTimeout(() => {
                    m && T();
                  }, 500);
              }
            },
            "image/jpeg",
            1
          );
      },
      S = () => {
        console.log("🚀 開始連續掃描模式"), (g.current = !1), T();
      };
    f.useEffect(
      () => (
        e ? x() : v(),
        () => {
          v();
        }
      ),
      [e]
    ),
      f.useEffect(() => {
        m
          ? (console.log("🚀 isScanning became true, starting continuous scan"),
            S())
          : (console.log("🛑 isScanning became false"), (g.current = !1));
      }, [m]);
    const R = () => {
        v(), t();
      },
      V = async (P) => {
        if (!c.current || !h.current) return;
        const A = h.current.getBoundingClientRect(),
          oe = (P.clientX - A.left) / A.width,
          ue = (P.clientY - A.top) / A.height;
        console.log("🎯 點擊聚焦位置:", { x: oe, y: ue }),
          _({ x: P.clientX - A.left, y: P.clientY - A.top }),
          setTimeout(() => _(null), 1e3);
        try {
          const M = c.current.getVideoTracks()[0],
            N = M.getCapabilities();
          if (
            (console.log("📹 相機能力:", N),
            !N.focusMode || !N.focusMode.includes("manual"))
          ) {
            console.log("⚠️ 此相機不支援手動聚焦");
            return;
          }
          const F = {
            advanced: [
              {
                focusMode: "manual",
                focusDistance: 0,
                pointsOfInterest: [{ x: oe, y: ue }],
              },
            ],
          };
          await M.applyConstraints(F), console.log("✅ 聚焦成功");
        } catch (M) {
          console.log("⚠️ 聚焦失敗 (可能不支援):", M);
        }
      };
    return e
      ? u
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
                      r.jsx(Lr, { className: "w-6 h-6 text-white" }),
                      r.jsx("h2", {
                        className: "text-lg font-semibold text-white",
                        children: "條碼掃描",
                      }),
                    ],
                  }),
                  r.jsx("button", {
                    onClick: R,
                    className:
                      "p-2 hover:bg-gray-700 rounded-lg transition-colors",
                    children: r.jsx(Ke, { className: "w-6 h-6 text-white" }),
                  }),
                ],
              }),
              r.jsxs("div", {
                className: "flex-1 relative",
                children: [
                  r.jsxs("div", {
                    ref: h,
                    className: "absolute inset-0 bg-black cursor-crosshair",
                    onClick: V,
                    children: [
                      r.jsx("video", {
                        ref: a,
                        className: "w-full h-full object-cover",
                        playsInline: !0,
                        muted: !0,
                      }),
                      k &&
                        r.jsxs("div", {
                          className: "absolute pointer-events-none",
                          style: {
                            left: k.x,
                            top: k.y,
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
                  j &&
                    r.jsx("div", {
                      className:
                        "bg-red-500 bg-opacity-20 border border-red-500 rounded-lg px-3 py-2 mb-3",
                      children: r.jsx("p", {
                        className: "text-red-200 text-sm",
                        children: j,
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
                          children: r.jsx(Lr, {
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
                      onClick: R,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ke, {
                        className: "w-6 h-6 text-gray-600",
                      }),
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "flex-1 overflow-y-auto p-4",
                  children: [
                    j &&
                      r.jsx("div", {
                        className:
                          "bg-red-50 border border-red-200 rounded-lg px-3 py-2 mb-4",
                        children: r.jsx("p", {
                          className: "text-red-600 text-sm",
                          children: j,
                        }),
                      }),
                    r.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        r.jsx("div", {
                          ref: h,
                          className:
                            "relative bg-black rounded-xl overflow-hidden cursor-crosshair",
                          style: { aspectRatio: "16/9" },
                          onClick: V,
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
  },
  of = ({ isOpen: e, onClose: t, medicineList: n, onSelectMedicine: s }) => {
    const [o, l] = f.useState(""),
      [a, i] = f.useState([]),
      c = f.useRef(null);
    f.useEffect(() => {
      e &&
        (l(""),
        i([]),
        setTimeout(() => {
          var g;
          (g = c.current) == null || g.focus();
        }, 100));
    }, [e]),
      f.useEffect(() => {
        if (!o.trim()) {
          i([]);
          return;
        }
        const g = o.toLowerCase().trim(),
          m = n.filter((p) => {
            const j = (p.CODE || "").toLowerCase(),
              b = (p.NAME || "").toLowerCase(),
              k = (p.CHT_NAME || "").toLowerCase(),
              _ = (p.SKDIACODE || "").toLowerCase();
            return (
              j.includes(g) || b.includes(g) || k.includes(g) || _.includes(g)
            );
          });
        i(m.slice(0, 50));
      }, [o, n]);
    const h = (g) => {
      s && s(g), t();
    };
    return e
      ? r.jsx("div", {
          className:
            "fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 p-4",
          children: r.jsxs("div", {
            className:
              "bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col",
            onClick: (g) => g.stopPropagation(),
            children: [
              r.jsxs("div", {
                className:
                  "flex items-center justify-between p-6 border-b border-gray-200",
                children: [
                  r.jsx("h2", {
                    className: "text-2xl font-bold text-gray-800",
                    children: "藥品搜尋",
                  }),
                  r.jsx("button", {
                    onClick: t,
                    className:
                      "p-2 hover:bg-gray-100 rounded-full transition-colors",
                    title: "關閉",
                    children: r.jsx(Ke, { className: "w-6 h-6 text-gray-600" }),
                  }),
                ],
              }),
              r.jsxs("div", {
                className: "p-6 border-b border-gray-200",
                children: [
                  r.jsxs("div", {
                    className: "relative",
                    children: [
                      r.jsx(Go, {
                        className:
                          "absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400",
                      }),
                      r.jsx("input", {
                        ref: c,
                        type: "text",
                        value: o,
                        onChange: (g) => l(g.target.value),
                        placeholder: "搜尋藥碼、藥名、料號或中文名...",
                        className:
                          "w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700",
                      }),
                    ],
                  }),
                  o.trim() &&
                    r.jsxs("p", {
                      className: "mt-2 text-sm text-gray-500",
                      children: [
                        "找到 ",
                        a.length,
                        " 筆結果",
                        a.length >= 50 && " (僅顯示前 50 筆)",
                      ],
                    }),
                ],
              }),
              r.jsx("div", {
                className: "flex-1 overflow-y-auto p-6",
                children: o.trim()
                  ? a.length === 0
                    ? r.jsxs("div", {
                        className: "text-center py-12 text-gray-500",
                        children: [
                          r.jsx("p", {
                            className: "text-lg",
                            children: "找不到符合的藥品",
                          }),
                          r.jsx("p", {
                            className: "text-sm mt-2",
                            children: "請嘗試其他關鍵字",
                          }),
                        ],
                      })
                    : r.jsx("div", {
                        className: "space-y-2",
                        children: a.map((g) =>
                          r.jsxs(
                            "button",
                            {
                              onClick: () => h(g),
                              className:
                                "w-full text-left p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors",
                              children: [
                                r.jsx("div", {
                                  className:
                                    "flex justify-between items-start mb-2",
                                  children: r.jsxs("div", {
                                    className: "flex-1",
                                    children: [
                                      r.jsxs("div", {
                                        className:
                                          "flex items-center gap-2 mb-1",
                                        children: [
                                          r.jsx("span", {
                                            className:
                                              "font-semibold text-gray-800",
                                            children: g.CODE,
                                          }),
                                          g.DRUGKIND &&
                                            g.DRUGKIND !== "N" &&
                                            r.jsxs("span", {
                                              className:
                                                "px-2 py-0.5 text-xs font-medium bg-red-100 text-red-700 rounded",
                                              children: ["管制 ", g.DRUGKIND],
                                            }),
                                        ],
                                      }),
                                      r.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: g.NAME,
                                      }),
                                      r.jsx("p", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: g.CHT_NAME,
                                      }),
                                    ],
                                  }),
                                }),
                                g.SKDIACODE &&
                                  r.jsxs("p", {
                                    className: "text-xs text-gray-400 mt-2",
                                    children: ["料號: ", g.SKDIACODE],
                                  }),
                              ],
                            },
                            g.GUID
                          )
                        ),
                      })
                  : r.jsxs("div", {
                      className: "text-center py-12 text-gray-500",
                      children: [
                        r.jsx(Go, {
                          className: "w-16 h-16 mx-auto mb-4 text-gray-300",
                        }),
                        r.jsx("p", {
                          className: "text-lg",
                          children: "請輸入搜尋關鍵字",
                        }),
                        r.jsx("p", {
                          className: "text-sm mt-2",
                          children: "支援藥碼、藥名、料號、中文名搜尋",
                        }),
                      ],
                    }),
              }),
            ],
          }),
        })
      : null;
  };
class kh {
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
          await De.lightByCodeNameType(
            i.serverName,
            i.serverType,
            i.medicineCode,
            n,
            s,
            i.deviceType
          );
          const h = performance.now();
          console.log(
            `⏱️ 亮燈API用時 (${i.serverName}/${i.medicineCode}): ${(
              h - c
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
        await De.lightByCodeNameType(
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
const hs = new kh(),
  _h = ({ children: e }) => {
    const t = f.useRef(null),
      {
        selectedDepartmentType: n,
        apiDepartmentData: s,
        setApiDepartmentData: o,
        showNotification: l,
        openAddBarcodeModal: a,
        openContainerDetailModal: i,
        highlightedMedicineCode: c,
        setHighlightedMedicineCode: h,
        activeCanvas: g,
        setActiveCanvas: m,
        medicineList: p,
      } = lt(),
      { t: j } = Mt(),
      [b, k] = f.useState({ x: 0, y: 0, scale: 1 }),
      [_, u] = f.useState(!1),
      [d, x] = f.useState(!1),
      [v, T] = f.useState({ x: 0, y: 0 }),
      [S, R] = f.useState(!1),
      [V, P] = f.useState(!1),
      [A, oe] = f.useState(!1),
      [ue, M] = f.useState(""),
      [N, F] = f.useState([]),
      [w, U] = f.useState(null),
      C = {
        blue: "255,0,0",
        green: "0,255,0",
        red: "0,0,255",
        yellow: "0,255,255",
        purple: "255,0,255",
        cyan: "255,255,0",
      },
      J = () => {
        try {
          const O = localStorage.getItem("med_map_anchor");
          return O ? JSON.parse(O) : [];
        } catch (O) {
          return (
            console.error("Error reading canvas states from localStorage:", O),
            []
          );
        }
      },
      E = (O, te, G, K) => {
        try {
          const ae = J(),
            xe = ae.findIndex(
              (Me) => Me.department === O && Me.canvasType === te
            ),
            Le = { department: O, canvasType: te, scale: G, position: K };
          xe >= 0 ? (ae[xe] = Le) : ae.push(Le),
            localStorage.setItem("med_map_anchor", JSON.stringify(ae));
        } catch (ae) {
          console.error("Error saving canvas state to localStorage:", ae);
        }
      },
      H = (O, te) =>
        J().find((K) => K.department === O && K.canvasType === te) || null;
    f.useEffect(
      () => (
        m("infinite"),
        () => {
          m(null);
        }
      ),
      [m]
    ),
      f.useEffect(() => {
        if (g !== "infinite" || !n) return;
        const te = setInterval(async () => {
          try {
            console.log("🔄 Auto-refreshing data for InfiniteCanvas...");
            const G = await De.getMedMapByDepartment(n);
            if (G.Code === 200 && G.Data) {
              console.log("📡 API 回傳成功，開始轉換資料");
              const K = Pt.convertMedMapApiToFakeData(G.Data);
              if (!Pt.validateConvertedData(K)) {
                console.error("❌ 轉換後的資料驗證失敗");
                return;
              }
              console.log(
                "✅ Data refreshed and converted successfully, updating state..."
              ),
                console.log("📊 Converted data to set:", K),
                o(K);
            }
          } catch (G) {
            console.error("❌ Failed to auto-refresh data:", G);
          }
        }, 2 * 60 * 1e3);
        return () => {
          clearInterval(te);
        };
      }, [g, n, o]),
      f.useEffect(() => {
        if (n) {
          const O = H(n, "InfiniteCanvas");
          if (O) k({ x: O.position.x, y: O.position.y, scale: O.scale });
          else {
            const te = { x: 0, y: 0, scale: 1 };
            k(te), E(n, "InfiniteCanvas", te.scale, te);
          }
        }
      }, [n]),
      f.useEffect(() => {
        if (!n) return;
        const O = setTimeout(() => {
          E(n, "InfiniteCanvas", b.scale, { x: b.x, y: b.y });
        }, 500);
        return () => clearTimeout(O);
      }, [b, n]),
      f.useEffect(() => {
        console.log("🔄 InfiniteCanvas: apiDepartmentData changed", {
          hasData: !!s,
          length: (s == null ? void 0 : s.length) || 0,
          data: s,
        });
      }, [s]);
    const $ = f.useMemo(() => {
      if (
        (console.log(
          "🔄 useMemo: Re-calculating components due to apiDepartmentData change"
        ),
        !s || s.length === 0)
      )
        return console.log("⚠️ No apiDepartmentData available"), [];
      const O = s,
        te = [];
      console.log("🔍 Processing departments for InfiniteCanvas:", O);
      for (const G of O)
        if (
          (console.log("📦 Processing department:", G.name, "Type:", G.type),
          G.type === "調劑台" || G.type === "藥庫")
        ) {
          if (G.contents && Array.isArray(G.contents)) {
            console.log("  └─ Found", G.contents.length, "parent containers");
            for (const K of G.contents)
              console.log("    📌 Parent container:", {
                GUID: K.GUID,
                name: K.name,
                type: K.type,
                position: K.position,
                hasDimensions: !!K.dimensions,
                dimensions: K.dimensions,
              }),
                te.push({
                  GUID: K.GUID,
                  type: K.type,
                  name: `${K.name}`,
                  position: K.position,
                  dimensions: K.dimensions || {
                    width: 200,
                    height: 200,
                    depth: 200,
                  },
                  med_list: K.med_list || [],
                  serverName: K.serverName,
                  serverType: K.serverType,
                  Master_GUID: G.GUID,
                  contents: K.contents || [],
                });
          }
        } else
          G.contents &&
            Array.isArray(G.contents) &&
            G.contents.length > 0 &&
            (console.log("  └─ Found", G.contents.length, "contents"),
            te.push(...G.contents));
      return (
        console.log("✅ Total components for InfiniteCanvas:", te.length), te
      );
    }, [s]);
    f.useEffect(() => {
      console.log("🎨 InfiniteCanvas: components changed", {
        count: $.length,
        components: $.map((O) => ({
          GUID: O.GUID,
          name: O.name,
          type: O.type,
          position: O.position,
        })),
      });
    }, [$]),
      f.useEffect(() => {
        const O = (G) => {
            G.code === "Space" && !G.repeat && (G.preventDefault(), R(!0));
          },
          te = (G) => {
            G.code === "Space" && (G.preventDefault(), R(!1), u(!1));
          };
        return (
          window.addEventListener("keydown", O),
          window.addEventListener("keyup", te),
          () => {
            window.removeEventListener("keydown", O),
              window.removeEventListener("keyup", te);
          }
        );
      }, []);
    const me = f.useCallback(
        (O) => {
          var G;
          if (d) return;
          if (
            (O.ctrlKey && !navigator.userAgent.includes("Mac")) ||
            (O.metaKey && navigator.userAgent.includes("Mac"))
          ) {
            O.preventDefault(), O.stopPropagation();
            const K =
              (G = t.current) == null ? void 0 : G.getBoundingClientRect();
            if (!K) return;
            const ae = O.clientX - K.left,
              xe = O.clientY - K.top,
              Le = O.deltaY > 0 ? 0.9 : 1.1,
              Me = Math.max(0.1, Math.min(5, b.scale * Le)),
              We = Me / b.scale,
              Ve = ae - (ae - b.x) * We,
              ht = xe - (xe - b.y) * We;
            k({ x: Ve, y: ht, scale: Me });
          }
        },
        [b, d]
      ),
      fe = f.useCallback(
        (O) => {
          d ||
            !S ||
            (u(!0), T({ x: O.clientX, y: O.clientY }), O.preventDefault());
        },
        [d, S]
      ),
      z = f.useCallback(
        (O) => {
          if (!_ || d) return;
          const te = O.clientX - v.x,
            G = O.clientY - v.y;
          k((K) => ({ ...K, x: K.x + te, y: K.y + G })),
            T({ x: O.clientX, y: O.clientY });
        },
        [_, v, d]
      ),
      ge = f.useCallback(() => {
        u(!1);
      }, []),
      ne = f.useCallback(
        (O) => {
          if (!s) return [];
          const te = [],
            G = (K) => {
              for (const ae of K)
                ae.med_list &&
                  Array.isArray(ae.med_list) &&
                  ae.med_list.some((Le) => Le.code == O) &&
                  (console.log("✅ 找到藥品所在櫃體:", ae.name, ae.GUID),
                  te.push(ae)),
                  ae.components &&
                    Array.isArray(ae.components) &&
                    G(ae.components),
                  ae.contents && Array.isArray(ae.contents) && G(ae.contents);
            };
          return G(s), te;
        },
        [s]
      ),
      je = f.useCallback(() => {
        try {
          const te = localStorage.getItem("medMap_setting");
          if (te) {
            const K = JSON.parse(te).light_sec;
            if (K != null && K !== "") {
              const ae = Number(K);
              if (!isNaN(ae) && ae > 0) return ae * 1e3;
            }
          }
        } catch (te) {
          console.error("讀取亮燈設定失敗:", te);
        }
        return 6e4;
      }, []),
      Ie = f.useCallback(() => {
        const O = { rgb_color: "255,0,0", brightness: "100" };
        try {
          const te = localStorage.getItem("medMap_setting");
          if (te) {
            const G = JSON.parse(te),
              K = G.light_color || "red";
            return {
              rgb_color: C[K] || C.red,
              brightness: String(G.brightness !== void 0 ? G.brightness : 100),
            };
          }
        } catch (te) {
          console.error("讀取亮燈設定失敗:", te);
        }
        return O;
      }, []),
      he = f.useCallback(
        async (O) => {
          if (!O.trim()) return;
          console.log("🔍 搜尋藥碼:", O);
          const te = ne(O);
          if (te.length > 0) {
            const G = je(),
              K = Ie();
            console.log(`🎯 高亮 ${te.length} 個櫃體:`, te),
              console.log(`⏱️ 亮燈時長: ${G}ms (${G / 1e3}秒)`),
              console.log("💡 亮燈設定:", K),
              l("找到藥品，開始亮燈", "success");
            const ae = te.map((Le) => Le.GUID);
            F(ae), U(O), h(O);
            const xe = te
              .filter((Le) => Le.serverName && Le.serverType)
              .map((Le) => ({
                serverName: Le.serverName,
                serverType: Le.serverType,
                medicineCode: O,
                deviceType: Le.device_type,
              }));
            xe.length > 0 &&
              (await hs.startLighting(xe, K.rgb_color, K.brightness, G),
              setTimeout(() => {
                F([]), U(null), h(null);
              }, G));
          } else
            console.log("❌ 未找到包含此藥品的櫃體"), F([]), U(null), h(null);
        },
        [ne, je, Ie, h]
      ),
      Ge = (O, te) => {
        var xe, Le;
        console.log("📍 [相機掃描-部門視圖] 藥品定位模式 - 掃描到藥品:", {
          barcode: O,
          medicineData: te,
        });
        const G =
          ((xe = te[0]) == null ? void 0 : xe.CODE) ||
          ((Le = te[0]) == null ? void 0 : Le.code);
        P(!1);
        const K = performance.now();
        he(G);
        const ae = performance.now();
        console.log(
          `⏱️ [相機掃描-部門視圖] 亮燈用時: ${(ae - K).toFixed(2)}ms`
        );
      },
      q = (O) => {
        console.log("📍 [藥品搜尋-部門視圖] 選擇藥品:", O);
        const te = O.CODE;
        oe(!1), l(`選擇藥品: ${O.NAME}`, "success");
        const G = performance.now();
        he(te);
        const K = performance.now();
        console.log(`⏱️ [藥品搜尋-部門視圖] 亮燈用時: ${(K - G).toFixed(2)}ms`);
      },
      I = async (O) => {
        var te, G;
        if (O.key === "Enter") {
          if ((O.preventDefault(), !ue.trim())) {
            l("請輸入條碼", "warning");
            return;
          }
          const K = performance.now();
          try {
            console.log("🔍 [手動輸入-部門視圖] 搜尋條碼:", ue);
            const ae = performance.now(),
              xe = await De.searchByBarCode(ue),
              Le = performance.now();
            if (
              (console.log(
                `⏱️ [手動輸入-部門視圖] API搜尋藥品資料用時: ${(
                  Le - ae
                ).toFixed(2)}ms`
              ),
              console.log("📋 條碼搜尋回應:", xe),
              xe.Code === 200 && xe.Data && xe.Data.length > 0)
            ) {
              const Me =
                ((te = xe.Data[0]) == null ? void 0 : te.CODE) ||
                ((G = xe.Data[0]) == null ? void 0 : G.code);
              console.log("✅ 找到藥品資料:", xe.Data);
              const We = performance.now();
              he(Me);
              const Ve = performance.now();
              console.log(
                `⏱️ [手動輸入-部門視圖] 亮燈用時: ${(Ve - We).toFixed(2)}ms`
              ),
                M("");
              const ht = performance.now();
              console.log(
                `⏱️ [手動輸入-部門視圖] 總用時: ${(ht - K).toFixed(2)}ms`
              );
            } else
              xe.Code === -200 && xe.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  l("查無條碼資料，請建立條碼", "warning"),
                  a(ue),
                  M(""))
                : (console.log("❌ 搜尋失敗:", xe.Result),
                  l(xe.Result || "搜尋失敗", "error"));
          } catch (ae) {
            console.error("條碼搜尋錯誤:", ae),
              l("搜尋失敗，請稍後再試", "error");
          }
        }
      };
    f.useEffect(
      () => () => {
        hs.cleanup();
      },
      []
    ),
      f.useEffect(() => {
        if (c) {
          console.log("🔔 Context highlightedMedicineCode 變化:", c);
          const O = ne(c);
          if (O.length > 0) {
            const te = O.map((G) => G.GUID);
            F(te), U(c), console.log("✨ UI 高亮已更新:", te);
          }
        } else F([]), U(null);
      }, [c, ne]);
    const [D, ee] = f.useState(null),
      [L, se] = f.useState({ x: 0, y: 0 }),
      le = (O) => {
        if (O.length < 2) return null;
        const te = O[0],
          G = O[1];
        return Math.sqrt(
          Math.pow(G.clientX - te.clientX, 2) +
            Math.pow(G.clientY - te.clientY, 2)
        );
      },
      ve = (O) => {
        if (O.length === 1) return { x: O[0].clientX, y: O[0].clientY };
        const te = O[0],
          G = O[1];
        return {
          x: (te.clientX + G.clientX) / 2,
          y: (te.clientY + G.clientY) / 2,
        };
      },
      ye = f.useCallback(
        (O) => {
          if (!d) {
            if (O.touches.length === 2) {
              const te = le(O.touches),
                G = ve(O.touches);
              ee(te), se(G);
            } else if (O.touches.length === 1) {
              const te = O.touches[0];
              T({ x: te.clientX, y: te.clientY }), u(!0);
            }
          }
        },
        [d]
      ),
      be = f.useCallback(
        (O) => {
          var te;
          if (!d) {
            if ((O.preventDefault(), O.touches.length === 2 && D !== null)) {
              const G = le(O.touches),
                K = ve(O.touches);
              if (G && D) {
                const ae =
                  (te = t.current) == null
                    ? void 0
                    : te.getBoundingClientRect();
                if (!ae) return;
                const xe = G / D,
                  Le = Math.max(0.1, Math.min(5, b.scale * xe)),
                  Me = K.x - ae.left,
                  We = K.y - ae.top,
                  Ve = Le / b.scale,
                  ht = Me - (Me - b.x) * Ve,
                  St = We - (We - b.y) * Ve;
                k({ x: ht, y: St, scale: Le }), ee(G), se(K);
              }
            } else if (O.touches.length === 1 && _) {
              const G = O.touches[0],
                K = G.clientX - v.x,
                ae = G.clientY - v.y;
              k((xe) => ({ ...xe, x: xe.x + K, y: xe.y + ae })),
                T({ x: G.clientX, y: G.clientY });
            }
          }
        },
        [b, D, _, v, d]
      ),
      Se = f.useCallback(() => {
        ee(null), u(!1);
      }, []);
    return (
      f.useEffect(() => {
        const O = t.current;
        if (O)
          return (
            O.addEventListener("wheel", me, { passive: !1 }),
            () => O.removeEventListener("wheel", me)
          );
      }, [me]),
      f.useCallback(() => {
        k({ x: 0, y: 0, scale: 1 });
      }, []),
      r.jsxs("div", {
        className: "relative w-full h-full overflow-hidden bg-gray-50",
        children: [
          r.jsx("div", {
            className:
              "absolute md:bottom-4 md:left-4 bottom-16 left-[50%] md:translate-x-[0%] translate-x-[-50%] z-10",
            children: r.jsxs("div", {
              className:
                "bg-white rounded-lg shadow-lg flex items-center overflow-hidden border border-gray-200",
              children: [
                r.jsx("button", {
                  onClick: () => oe(!0),
                  className: "p-2 hover:bg-gray-50 transition-colors",
                  title: "搜尋藥品",
                  children: r.jsx(Go, { className: "w-6 h-6 text-blue-600" }),
                }),
                r.jsx("div", { className: "w-px h-6 bg-gray-200" }),
                r.jsx("input", {
                  type: "text",
                  value: ue,
                  onChange: (O) => M(O.target.value),
                  onKeyPress: I,
                  placeholder: "輸入條碼或掃描...",
                  className:
                    "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
                }),
                r.jsx("button", {
                  onClick: () => P(!0),
                  className: "p-2 hover:bg-gray-50 transition-colors",
                  title: "掃描條碼",
                  children: r.jsx(Lr, { className: "w-6 h-6 text-blue-600" }),
                }),
              ],
            }),
          }),
          r.jsx("div", {
            className: "absolute bottom-4 right-4 z-10 flex gap-2",
            children: r.jsx("button", {
              onClick: () => x(!d),
              className: `p-3 rounded-lg shadow-lg transition-colors ${
                d
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`,
              title: j(d ? "canvas.unlockCanvas" : "canvas.lockCanvas"),
              children: d
                ? r.jsx(Si, { className: "w-6 h-6" })
                : r.jsx(sf, { className: "w-6 h-6" }),
            }),
          }),
          r.jsx("div", {
            ref: t,
            className: `w-full h-full relative ${
              S && !d ? "cursor-grab" : "cursor-default"
            } ${_ ? "cursor-grabbing" : ""}`,
            onMouseDown: fe,
            onMouseMove: z,
            onMouseUp: ge,
            onMouseLeave: ge,
            onTouchStart: ye,
            onTouchMove: be,
            onTouchEnd: Se,
            children: r.jsxs("div", {
              className: "absolute inset-0 origin-top-left",
              style: {
                transform: `translate(${b.x}px, ${b.y}px) scale(${b.scale})`,
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
                    $.map((O) =>
                      r.jsx(
                        Dh,
                        {
                          component: O,
                          scale: b.scale,
                          isLocked: d,
                          isHighlighted: N.includes(O.GUID),
                          onContainerClick: (te) => {
                            console.log("🖱️ 點擊櫃體，傳遞亮燈藥品代碼:", w),
                              i(te, w);
                          },
                        },
                        O.GUID
                      )
                    ),
                    e,
                  ],
                }),
              ],
            }),
          }),
          r.jsx(rl, {
            isOpen: V,
            onClose: () => P(!1),
            onScanSuccess: Ge,
            mode: "med_light_location_mode",
          }),
          r.jsx(of, {
            isOpen: A,
            onClose: () => oe(!1),
            medicineList: p,
            onSelectMedicine: q,
          }),
        ],
      })
    );
  },
  ts = ({ content: e, isAdminMode: t }) => {
    const {
        openMedBoxModal: n,
        openAddMedBoxModal: s,
        openListDrawModal: o,
        openGridDrawModal: l,
        openAddShelfDrawContainerModal: a,
        openAddSubContainerModal: i,
        openAddStoreItemModal: c,
        setSelectedMedBox: h,
        setModalMode: g,
        setMedBoxModalOpen: m,
        showNotification: p,
        triggerRefresh: j,
        openEditStoreShelfModal: b,
        openEditParentContainerModal: k,
        updateContainerInLocalData: _,
        removeContainerFromLocalData: u,
      } = lt(),
      { t: d } = Mt(),
      [x, v] = f.useState(!1),
      [T, S] = f.useState(""),
      [R, V] = f.useState(!1),
      [P, A] = f.useState(e.name),
      [oe, ue] = f.useState(!1),
      [M, N] = f.useState(!1);
    f.useEffect(() => {
      A(e.name);
    }, [e.name]);
    const F = (z) => {
        z.stopPropagation(), S(e.name || ""), v(!0);
      },
      w = (z) => {
        z.stopPropagation(), v(!1), S("");
      },
      U = (z) => {
        z.stopPropagation(), N(!0);
      },
      C = (z) => {
        z.stopPropagation(), N(!1);
      },
      J = async (z) => {
        z.stopPropagation(), ue(!0);
        try {
          let ge;
          if (e.type === "parent_container")
            ge = await De.deleteParentContainer(e.GUID);
          else if (e.type === "sub_container")
            ge = await De.deleteSubContainer(e.GUID);
          else if (
            e.type === "store_shelves" ||
            e.type === "dispensing_shelves"
          )
            ge = await De.deleteShelfContainer(e.GUID);
          else {
            p("不支援的容器類型", "error"), ue(!1), N(!1);
            return;
          }
          ge.Code === 200
            ? (p("刪除成功", "success"), u(e.GUID), N(!1))
            : p(ge.Result || "刪除失敗", "error");
        } catch (ge) {
          console.error("刪除容器失敗:", ge),
            p("刪除失敗，請稍後再試", "error");
        } finally {
          ue(!1), N(!1);
        }
      },
      E = async (z) => {
        if ((z.stopPropagation(), !T.trim())) {
          p("名稱不能為空", "error");
          return;
        }
        if (T === e.name) {
          v(!1);
          return;
        }
        V(!0);
        try {
          const ge = [
            {
              GUID: e.GUID,
              name: T.trim(),
              Master_GUID: e.Master_GUID,
              position: e.gird_position,
              serverName: e.serverName,
              serverType: e.serverType,
            },
          ];
          let ne;
          if (e.type === "store_shelves" || e.type === "dispensing_shelves")
            ne = await De.updateMedMapShelf(ge);
          else if (e.type === "sub_container")
            ne = await De.updateSubSection(ge);
          else if (e.type === "parent_container")
            ne = await De.updateMedMapSection(ge);
          else {
            p("不支援的容器類型", "error"), V(!1);
            return;
          }
          ne.Code === 200
            ? (p("名稱更新成功", "success"),
              v(!1),
              A(T.trim()),
              _(e.GUID, { name: T.trim() }))
            : p(ne.Result || "更新失敗", "error");
        } catch (ge) {
          console.error("更新名稱失敗:", ge),
            p("更新失敗，請稍後再試", "error");
        } finally {
          V(!1);
        }
      },
      H = (z) => {
        switch (z) {
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
      $ = (z) => {
        switch (z) {
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
      me = (z) => {
        switch (z) {
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
      fe = (z) => {
        switch (z) {
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
            return z;
        }
      };
    switch (e.type) {
      case "sub_container":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${H(
            e.type || 0
          )} ${$(e.type || 0)}`,
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                x
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: T,
                          onChange: (z) => S(z.target.value),
                          onClick: (z) => z.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: R,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: E,
                          disabled: R,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(to, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: w,
                          disabled: R,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Ke, {
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
                          children: P,
                        }),
                        r.jsx("button", {
                          onClick: F,
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(Sr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !x &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${me(
                      e.type
                    )}`,
                    children: fe(e.type),
                  }),
              ],
            }),
            e.type !== "none" &&
              !x &&
              r.jsxs("div", {
                className: "flex items-center space-x-1",
                children: [
                  t &&
                    r.jsx("button", {
                      className:
                        "p-1 hover:bg-red-100 rounded transition-colors",
                      onClick: U,
                      title: "刪除容器",
                      children: r.jsx(Cr, {
                        className: "w-5 h-5 text-red-600",
                      }),
                    }),
                  r.jsx("button", {
                    className:
                      "p-1 hover:bg-black/10 rounded transition-colors",
                    onClick: (z) => {
                      z.stopPropagation(), a(e);
                    },
                    title: d("modal.add"),
                    children: r.jsx(Tt, {
                      className: "w-6 h-6 text-green-700",
                    }),
                  }),
                ],
              }),
            M &&
              r.jsx("div", {
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4",
                  onClick: (z) => z.stopPropagation(),
                  children: [
                    r.jsx("h3", {
                      className: "text-lg font-semibold text-gray-900 mb-2",
                      children: "確認刪除",
                    }),
                    r.jsxs("p", {
                      className: "text-gray-600 mb-4",
                      children: [
                        "確定要刪除「",
                        e.name,
                        "」嗎？此操作無法復原。",
                      ],
                    }),
                    r.jsxs("div", {
                      className: "flex justify-end space-x-3",
                      children: [
                        r.jsx("button", {
                          onClick: C,
                          disabled: oe,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: J,
                          disabled: oe,
                          className:
                            "px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: oe ? "刪除中..." : "確認刪除",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        });
      case "parent_container":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${H(
            e.type || 0
          )} ${$(
            e.type || 0
          )} cursor-pointer hover:bg-black/5 transition-colors`,
          onClick: (z) => {
            x || k(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                x
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: T,
                          onChange: (z) => S(z.target.value),
                          onClick: (z) => z.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: R,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (z) => {
                            z.stopPropagation(), E(z);
                          },
                          disabled: R,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(to, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: (z) => {
                            z.stopPropagation(), w(z);
                          },
                          disabled: R,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Ke, {
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
                          children: P,
                        }),
                        r.jsx("button", {
                          onClick: (z) => {
                            z.stopPropagation(), F(z);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(Sr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" && !x
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${me(
                        e.type
                      )}`,
                      children: fe(e.type),
                    })
                  : null,
              ],
            }),
            e.type !== "none" &&
              !x &&
              r.jsxs("div", {
                className: "flex items-center space-x-1",
                children: [
                  t &&
                    r.jsx("button", {
                      className:
                        "p-1 hover:bg-red-100 rounded transition-colors",
                      onClick: U,
                      title: "刪除容器",
                      children: r.jsx(Cr, {
                        className: "w-5 h-5 text-red-600",
                      }),
                    }),
                  r.jsx("button", {
                    className:
                      "p-1 hover:bg-black/10 rounded transition-colors",
                    onClick: (z) => {
                      z.stopPropagation(), i(e);
                    },
                    title: d("modal.add"),
                    children: r.jsx(Tt, {
                      className: "w-6 h-6 text-green-700",
                    }),
                  }),
                ],
              }),
            M &&
              r.jsx("div", {
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4",
                  onClick: (z) => z.stopPropagation(),
                  children: [
                    r.jsx("h3", {
                      className: "text-lg font-semibold text-gray-900 mb-2",
                      children: "確認刪除",
                    }),
                    r.jsxs("p", {
                      className: "text-gray-600 mb-4",
                      children: [
                        "確定要刪除「",
                        e.name,
                        "」嗎？此操作無法復原。",
                      ],
                    }),
                    r.jsxs("div", {
                      className: "flex justify-end space-x-3",
                      children: [
                        r.jsx("button", {
                          onClick: C,
                          disabled: oe,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: J,
                          disabled: oe,
                          className:
                            "px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: oe ? "刪除中..." : "確認刪除",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        });
      case "med_box":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${H(
            e.type || 0
          )} ${$(e.type || 0)}`,
          children: [
            r.jsx("div", {
              className: "flex items-center mr-4",
              children:
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${me(
                        e.type
                      )}`,
                      children: fe(e.type),
                    })
                  : null,
            }),
            r.jsx("div", {
              className: "flex items-center space-x-1",
              children: r.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                onClick: (z) => {
                  z.stopPropagation(), n(e);
                },
                title: d("modal.settings"),
                children: r.jsx(Tn, { className: "w-6 h-6 text-gray-600" }),
              }),
            }),
          ],
        });
      case "dispensing_shelves":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${H(
            e.type || 0
          )} ${$(e.type || 0)}`,
          onClick: (z) => {
            x || b(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                x
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: T,
                          onChange: (z) => S(z.target.value),
                          onClick: (z) => z.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: R,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: E,
                          disabled: R,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(to, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: w,
                          disabled: R,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Ke, {
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
                          children: P,
                        }),
                        r.jsx("button", {
                          onClick: (z) => {
                            z.stopPropagation(), F(z);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(Sr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !x &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${me(
                      e.type
                    )}`,
                    children: fe(e.type),
                  }),
              ],
            }),
            r.jsxs("div", {
              className: "flex items-center space-x-1",
              children: [
                t &&
                  !x &&
                  r.jsx("button", {
                    className: "p-1 hover:bg-red-100 rounded transition-colors",
                    onClick: U,
                    title: "刪除容器",
                    children: r.jsx(Cr, { className: "w-5 h-5 text-red-600" }),
                  }),
                r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (z) => {
                    z.stopPropagation();
                    const ge = {
                      GUID: `new_medbox_${Date.now()}`,
                      name: "",
                      box_type: "",
                      width: [],
                      width_index: 0,
                      med_info: [],
                      parentShelf: e,
                    };
                    h(ge), g("add"), m(!0);
                  },
                  title: d("modal.add"),
                  children: r.jsx(Tt, { className: "w-6 h-6 text-green-700" }),
                }),
              ],
            }),
            M &&
              r.jsx("div", {
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4",
                  onClick: (z) => z.stopPropagation(),
                  children: [
                    r.jsx("h3", {
                      className: "text-lg font-semibold text-gray-900 mb-2",
                      children: "確認刪除",
                    }),
                    r.jsxs("p", {
                      className: "text-gray-600 mb-4",
                      children: [
                        "確定要刪除「",
                        e.name,
                        "」嗎？此操作無法復原。",
                      ],
                    }),
                    r.jsxs("div", {
                      className: "flex justify-end space-x-3",
                      children: [
                        r.jsx("button", {
                          onClick: C,
                          disabled: oe,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: J,
                          disabled: oe,
                          className:
                            "px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: oe ? "刪除中..." : "確認刪除",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        });
      case "store_shelves":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${H(
            e.type || 0
          )} ${$(
            e.type || 0
          )} cursor-pointer hover:bg-black/5 transition-colors`,
          onClick: (z) => {
            x || b(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                x
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: T,
                          onChange: (z) => S(z.target.value),
                          onClick: (z) => z.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: R,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (z) => {
                            z.stopPropagation(), E(z);
                          },
                          disabled: R,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(to, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: (z) => {
                            z.stopPropagation(), w(z);
                          },
                          disabled: R,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Ke, {
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
                          children: P,
                        }),
                        r.jsx("button", {
                          onClick: (z) => {
                            z.stopPropagation(), F(z);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(Sr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !x &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${me(
                      e.type
                    )}`,
                    children: fe(e.type),
                  }),
              ],
            }),
            r.jsxs("div", {
              className: "flex items-center space-x-1",
              children: [
                t &&
                  !x &&
                  r.jsx("button", {
                    className: "p-1 hover:bg-red-100 rounded transition-colors",
                    onClick: U,
                    title: "刪除容器",
                    children: r.jsx(Cr, { className: "w-5 h-5 text-red-600" }),
                  }),
                r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (z) => {
                    z.stopPropagation(), c(e);
                  },
                  title: d("modal.add"),
                  children: r.jsx(Tt, { className: "w-6 h-6 text-green-700" }),
                }),
              ],
            }),
            M &&
              r.jsx("div", {
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4",
                  onClick: (z) => z.stopPropagation(),
                  children: [
                    r.jsx("h3", {
                      className: "text-lg font-semibold text-gray-900 mb-2",
                      children: "確認刪除",
                    }),
                    r.jsxs("p", {
                      className: "text-gray-600 mb-4",
                      children: [
                        "確定要刪除「",
                        e.name,
                        "」嗎？此操作無法復原。",
                      ],
                    }),
                    r.jsxs("div", {
                      className: "flex justify-end space-x-3",
                      children: [
                        r.jsx("button", {
                          onClick: C,
                          disabled: oe,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: J,
                          disabled: oe,
                          className:
                            "px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: oe ? "刪除中..." : "確認刪除",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        });
      case "list_draw":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${H(
            e.type || 0
          )} ${$(e.type || 0)}`,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${me(
                        e.type
                      )}`,
                      children: fe(e.type),
                    })
                  : null,
              ],
            }),
            r.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (z) => {
                z.stopPropagation(), o(e);
              },
              title: d("modal.settings"),
              children: r.jsx(Tn, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      case "grid_draw":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${H(
            e.type || 0
          )} ${$(e.type || 0)}`,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${me(
                        e.type
                      )}`,
                      children: fe(e.type),
                    })
                  : null,
              ],
            }),
            r.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (z) => {
                z.stopPropagation(), l(e);
              },
              title: d("modal.settings"),
              children: r.jsx(Tn, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      default:
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${H(
            e.type || 0
          )} ${$(e.type || 0)}`,
          children: [
            r.jsx("div", {
              className: "flex items-center space-x-2 mr-6",
              children:
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${me(
                        e.type
                      )}`,
                      children: fe(e.type),
                    })
                  : null,
            }),
            e.type !== "none" &&
              r.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                title: d("modal.settings"),
                children: r.jsx(Tn, { className: "w-6 h-6 text-gray-600" }),
              }),
          ],
        });
    }
  },
  lf = f.forwardRef(({ children: e }, t) => {
    const n = f.useRef(null),
      {
        selectedDepartmentType: s,
        apiDepartmentData: o,
        setApiDepartmentData: l,
        setSidebarOpen: a,
        openAddParentContainerModal: i,
        openEditStoreItemModal: c,
        openQRCodeScannerModal: h,
        openAddBarcodeModal: g,
        showNotification: m,
        isAdminMode: p,
        activeCanvas: j,
        setActiveCanvas: b,
        medicineList: k,
      } = lt(),
      [_, u] = f.useState({ x: 0, y: 0, scale: 1 }),
      [d, x] = f.useState(!1),
      [v, T] = f.useState(!1),
      [S, R] = f.useState({ x: 0, y: 0 }),
      [V, P] = f.useState(!1),
      [A, oe] = f.useState(""),
      [ue, M] = f.useState(!1),
      [N, F] = f.useState(!1),
      [w, U] = f.useState(null),
      [C, J] = f.useState(!1),
      [E, H] = f.useState({
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
      [$, me] = f.useState(null),
      fe = f.useRef({}),
      z = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0,
      ge = 8,
      ne = () => {
        try {
          const y = localStorage.getItem("med_map_anchor");
          return y ? JSON.parse(y) : [];
        } catch (y) {
          return (
            console.error("Error reading canvas states from localStorage:", y),
            []
          );
        }
      },
      je = (y, re, X, B) => {
        try {
          const ce = ne(),
            W = ce.findIndex((Z) => Z.department === y && Z.canvasType === re),
            Q = { department: y, canvasType: re, scale: X, position: B };
          W >= 0 ? (ce[W] = Q) : ce.push(Q),
            localStorage.setItem("med_map_anchor", JSON.stringify(ce));
        } catch (ce) {
          console.error("Error saving canvas state to localStorage:", ce);
        }
      },
      Ie = (y, re) =>
        ne().find((B) => B.department === y && B.canvasType === re) || null;
    f.useEffect(
      () => (
        b("drug"),
        () => {
          b(null);
        }
      ),
      [b]
    ),
      f.useEffect(() => {
        if (j !== "drug" || !s) return;
        const re = setInterval(async () => {
          try {
            console.log("🔄 Auto-refreshing data for DrugCanvas...");
            const X = await De.getMedMapByDepartment(s);
            if (X.Code === 200 && X.Data) {
              console.log("📡 API 回傳成功，開始轉換資料");
              const B = Pt.convertMedMapApiToFakeData(X.Data);
              if (!Pt.validateConvertedData(B)) {
                console.error("❌ 轉換後的資料驗證失敗");
                return;
              }
              console.log(
                "✅ Data refreshed and converted successfully, updating state..."
              ),
                l(B);
            }
          } catch (X) {
            console.error("❌ Failed to auto-refresh data:", X);
          }
        }, 2 * 60 * 1e3);
        return () => {
          clearInterval(re);
        };
      }, [j, s, l]),
      f.useEffect(() => {
        if (s) {
          const y = Ie(s, "drugCanvas");
          if (y) u({ x: y.position.x, y: y.position.y, scale: y.scale });
          else {
            const re = { x: 0, y: 0, scale: 1 };
            u(re), je(s, "drugCanvas", re.scale, re);
          }
        }
      }, [s]),
      f.useEffect(() => {
        if (!s) return;
        const y = setTimeout(() => {
          je(s, "drugCanvas", _.scale, { x: _.x, y: _.y });
        }, 500);
        return () => clearTimeout(y);
      }, [_, s]);
    const he = (y) =>
        [
          "parent_container",
          "sub_container",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
          "med_box",
        ].includes(y),
      Ge = (y) =>
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
        }[y] || []),
      q = (y) => {
        const [re, X] = y.split(",").map(Number);
        return { row: re || 0, col: X || 0 };
      },
      I = (y, re) => {
        const X = (ce, W = null) => {
            if (ce.GUID === y) return { container: ce, parent: W };
            if (ce.contents)
              for (const Q of ce.contents) {
                const Z = X(Q, ce);
                if (Z) return Z;
              }
            return null;
          },
          B = St();
        for (const ce of B) {
          const W = X(ce);
          if (W) return W;
        }
        return null;
      },
      D = (y, re) => {
        if (!y.contents) return [];
        const X = re;
        if (!X) return y.contents;
        const B = q(X.gird_position);
        console.log("📤 移除容器位置:", B);
        for (const ce of y.contents) {
          const W = q(ce.gird_position);
          if (W.row === B.row && W.col > B.col) {
            const Q = W.col - 1;
            (ce.gird_position = `${W.row},${Q}`),
              console.log(
                `  ← 容器 ${ce.GUID}: (${W.row},${W.col}) → (${W.row},${Q})`
              ),
              (fe.current[ce.GUID] = {
                GUID: ce.GUID,
                Master_GUID: y.GUID,
                position: `${W.row},${Q}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: ce.type,
                containerData: ce,
              });
          }
        }
        return console.log("✓ 重新計算完成"), y.contents;
      },
      ee = (y, re, X, B, ce) => {
        if (
          (y.contents || (y.contents = []),
          console.log("📥 插入容器到位置:", `(${X},${B})`),
          console.log("   插入方向:", ce),
          console.log("   目標父容器:", y.GUID),
          console.log("   插入前容器數量:", y.contents.length),
          y.contents.length === 0)
        )
          (X = 0), (B = 0), console.log("   父容器為空，放置在 (0,0)");
        else {
          const W = y.contents
            .filter((Q) => {
              const Z = q(Q.gird_position || "0,0");
              return Z.row === X && Z.col >= B;
            })
            .sort((Q, Z) => {
              const ie = q(Q.gird_position || "0,0");
              return q(Z.gird_position || "0,0").col - ie.col;
            });
          console.log(`   同 row ${X} 需要移動的容器數量:`, W.length);
          for (const Q of W) {
            const Z = q(Q.gird_position || "0,0"),
              ie = Z.col + 1;
            (Q.gird_position = `${Z.row},${ie}`),
              console.log(
                `  → 容器 ${Q.GUID}: (${Z.row},${Z.col}) → (${Z.row},${ie})`
              ),
              (fe.current[Q.GUID] = {
                GUID: Q.GUID,
                Master_GUID: y.GUID,
                position: `${Z.row},${ie}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: Q.type,
                containerData: Q,
              });
          }
        }
        (re.gird_position = `${X},${B}`),
          (re.Master_GUID = y.GUID),
          console.log(`Inserted container ${re.GUID} at position ${X},${B}`),
          y.contents.push(re),
          (fe.current[re.GUID] = {
            GUID: re.GUID,
            Master_GUID: y.GUID,
            position: `${X},${B}`,
            serverName: y.serverName,
            serverType: y.serverType,
            type: re.type,
            containerData: re,
          }),
          re.type === "dispensing_shelves" &&
            re.contents &&
            re.contents.forEach((W) => {
              W.type === "med_box" &&
                (fe.current[W.GUID] = {
                  GUID: W.GUID,
                  Master_GUID: W.Master_GUID,
                  position: W.gird_position,
                  serverName: y.serverName,
                  serverType: y.serverType,
                  type: W.type,
                  containerData: W,
                });
            });
      },
      L = (y, re, X) => {
        const B = y.getBoundingClientRect(),
          ce = B.left + B.width / 2,
          W = B.top + B.height / 2,
          Q = re - ce,
          Z = X - W;
        return Math.abs(Q) > Math.abs(Z)
          ? Q > 0
            ? "right"
            : "left"
          : Z > 0
          ? "bottom"
          : "top";
      },
      se = (y, re, X, B) => {
        if (!v) return;
        if ((B.preventDefault(), B.stopPropagation(), E.floatingElement))
          try {
            E.floatingElement.parentNode &&
              E.floatingElement.parentNode.removeChild(E.floatingElement);
          } catch (pe) {
            console.error("清除舊浮動元素失敗:", pe);
          }
        const ce = z(),
          W =
            "touches" in B
              ? B.touches[0].clientX
              : ("pointerId" in B, B.clientX),
          Q =
            "touches" in B
              ? B.touches[0].clientY
              : ("pointerId" in B, B.clientY),
          Z = X.getBoundingClientRect(),
          ie = { x: W - Z.left, y: Q - Z.top },
          Y = X.cloneNode(!0);
        (Y.style.position = "fixed"),
          (Y.style.left = `${W - ie.x}px`),
          (Y.style.top = `${Q - ie.y}px`),
          (Y.style.width = `${Z.width}px`),
          (Y.style.height = `${Z.height}px`),
          (Y.style.zIndex = "9999"),
          (Y.style.opacity = "0.8"),
          (Y.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (Y.style.pointerEvents = "none"),
          document.body.appendChild(Y),
          console.log("開始拖曳 stockItem:", y),
          console.log("來源 shelf:", re),
          H({
            isDragging: !0,
            draggedContainer: null,
            draggedElement: X,
            floatingElement: Y,
            originalParent: null,
            originalPosition: "",
            originalIndex: -1,
            mouseOffset: ie,
            isMobileDrag: ce,
            originalData: null,
            draggedStockItem: y,
            draggedStockShelf: re,
          });
      },
      le = (y, re, X) => {
        if (!v || !he(y.type)) return;
        if (y.type === "sub_container" && !p) {
          m("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (y.type === "grid_draw" && !p) {
          m("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (y.type === "list_draw" && !p) {
          m("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (y.type === "parent_container" && !p) {
          m("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (y.type === "dispensing_shelves" && !p) {
          m("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (y.type === "store_shelves" && !p) {
          m("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (
          ((fe.current = {}),
          X.preventDefault(),
          X.stopPropagation(),
          E.floatingElement)
        )
          try {
            E.floatingElement.parentNode &&
              E.floatingElement.parentNode.removeChild(E.floatingElement);
          } catch (Ee) {
            console.error("清除舊浮動元素失敗:", Ee);
          }
        const B = z(),
          ce =
            "touches" in X
              ? X.touches[0].clientX
              : ("pointerId" in X, X.clientX),
          W =
            "touches" in X
              ? X.touches[0].clientY
              : ("pointerId" in X, X.clientY),
          Q = re.getBoundingClientRect(),
          Z = { x: ce - Q.left, y: W - Q.top },
          ie = I(y.GUID);
        if (!ie) return;
        console.log("拖曳目標", y), console.log("拖曳目標", ie);
        const Y = re.cloneNode(!0);
        (Y.style.position = "fixed"),
          (Y.style.left = `${ce - Z.x}px`),
          (Y.style.top = `${W - Z.y}px`),
          (Y.style.width = `${Q.width}px`),
          (Y.style.height = `${Q.height}px`),
          (Y.style.zIndex = "9999"),
          (Y.style.opacity = "0.8"),
          (Y.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (Y.style.pointerEvents = "none"),
          document.body.appendChild(Y);
        const pe = ie.parent.contents.findIndex((Ee) => Ee.GUID === y.GUID),
          Ne = JSON.parse(JSON.stringify(ie.parent.contents));
        ie.parent.contents.splice(pe, 1), console.log(pe);
        const Re = ie.parent,
          ke = D(ie.parent, y);
        (ie.parent.contents = ke),
          console.log(ie.parent),
          H({
            isDragging: !0,
            draggedContainer: y,
            draggedElement: re,
            floatingElement: Y,
            originalParent: Re,
            originalPosition: y.gird_position,
            originalIndex: pe,
            mouseOffset: Z,
            isMobileDrag: B,
            originalData: Ne,
          });
      },
      ve = (y) => {
        if (!E.isDragging || !E.floatingElement) return;
        const re = "touches" in y ? y.touches[0].clientX : y.clientX,
          X = "touches" in y ? y.touches[0].clientY : y.clientY;
        if (
          ((E.floatingElement.style.left = `${re - E.mouseOffset.x}px`),
          (E.floatingElement.style.top = `${X - E.mouseOffset.y}px`),
          E.draggedStockItem)
        ) {
          const W = document.elementFromPoint(re, X),
            Q = W == null ? void 0 : W.closest("[data-stock-guid]");
          if (Q) {
            const ie = Q.getAttribute("data-stock-guid"),
              Y = (Ne) => {
                for (const Re of Ne) {
                  if (Re.type === "store_shelves" && Re.medMapStock) {
                    const ke = Re.medMapStock.find((Ee) => Ee.GUID === ie);
                    if (ke) return { stockItem: ke, shelf: Re };
                  }
                  if (Re.contents) {
                    const ke = Y(Re.contents);
                    if (ke) return ke;
                  }
                }
                return null;
              },
              pe = Y(o);
            if (pe && pe.stockItem.GUID !== E.draggedStockItem.GUID) {
              const Ne = Q.getBoundingClientRect(),
                Re = Ne.left + Ne.width / 2,
                ke = Ne.top + Ne.height / 2,
                Ee = Math.abs(re - Re),
                Be = Math.abs(X - ke);
              let $e;
              Ee > Be
                ? ($e = re < Re ? "left" : "right")
                : ($e = X < ke ? "top" : "bottom"),
                me({
                  container: pe.shelf,
                  direction: null,
                  element: Q,
                  stockItem: pe.stockItem,
                  stockItemDirection: $e,
                });
              return;
            }
          }
          const Z = W == null ? void 0 : W.closest("[data-container-guid]");
          if (Z) {
            const ie = Z.getAttribute("data-container-guid"),
              Y = I(ie);
            if (Y && Y.container.type === "store_shelves") {
              me({ container: Y.container, direction: null, element: Z });
              return;
            }
          }
          me(null);
          return;
        }
        const B = document.elementFromPoint(re, X),
          ce = B == null ? void 0 : B.closest("[data-container-guid]");
        if (ce) {
          const W = ce.getAttribute("data-container-guid"),
            Q = I(W);
          if (Q) {
            const Z = Ge(E.draggedContainer.type),
              ie = E.draggedContainer.type,
              Y = Q.container.type;
            if (Q.container.GUID === E.draggedContainer.GUID) {
              me(null);
              return;
            }
            if (Z.includes(Y)) {
              const pe = L(ce, re, X);
              if (ie === "med_box" && !["left", "right"].includes(pe)) {
                me(null);
                return;
              }
              Q.container.gird_position ||
                console.warn(
                  `⚠️ 目標容器 ${Q.container.GUID} 缺少 gird_position`
                ),
                me({ container: Q.container, direction: pe, element: ce });
              return;
            }
            if (ie === "parent_container" || ie === "sub_container") {
              let pe = ce.parentElement;
              for (; pe; ) {
                if (pe.hasAttribute("data-container-guid")) {
                  const Ne = pe.getAttribute("data-container-guid"),
                    Re = I(Ne);
                  if (Re && Z.includes(Re.container.type)) {
                    if (Re.container.GUID === E.draggedContainer.GUID) {
                      pe = pe.parentElement;
                      continue;
                    }
                    const ke = L(pe, re, X);
                    console.log(
                      `🔼 向上找到有效目標: ${Re.container.type} (${Re.container.name})`
                    ),
                      Re.container.gird_position ||
                        console.warn(
                          `⚠️ 父容器 ${Re.container.GUID} 缺少 gird_position`
                        ),
                      me({
                        container: Re.container,
                        direction: ke,
                        element: pe,
                      });
                    return;
                  }
                }
                pe = pe.parentElement;
              }
            }
          }
        }
        me(null);
      },
      ye = async (y) => {
        var ce, W;
        if (!E.isDragging) return;
        if (E.floatingElement)
          try {
            E.floatingElement.parentNode &&
              E.floatingElement.parentNode.removeChild(E.floatingElement);
          } catch (Q) {
            console.error("清除浮動元素失敗:", Q);
          }
        if (E.draggedStockItem && E.draggedStockShelf) {
          if (
            (console.log("StockItem 拖曳結束"),
            console.log("Drop Target:", $),
            $)
          ) {
            const Q = [];
            if ($.stockItem && $.stockItemDirection) {
              console.log(
                `拖曳到 stockItem ${$.stockItem.GUID} 的 ${$.stockItemDirection} 邊`
              );
              const Z = $.container,
                ie = E.draggedStockShelf,
                Y = E.draggedStockItem,
                pe = ($.stockItem.location || "0,0").split(","),
                Ne = Number(pe[0] || "0"),
                Re = (Y.location || "0,0").split(","),
                ke = Number(Re[0] || "0"),
                Ee = Number(Re[1] || "0");
              if (Z.GUID === ie.GUID) {
                console.log("同一層架內移動");
                const $e = Number(pe[1] || "0");
                if (
                  $.stockItemDirection === "top" ||
                  $.stockItemDirection === "bottom"
                ) {
                  console.log("垂直移動（上下）");
                  let Ae;
                  if (
                    ($.stockItemDirection === "top" ? (Ae = $e) : (Ae = $e + 1),
                    ke === Ne)
                  ) {
                    console.log("同一列內的深度移動"),
                      ie.medMapStock.forEach((Ce) => {
                        const Pe = (Ce.location || "0,0").split(","),
                          Ue = Number(Pe[0] || "0"),
                          _e = Number(Pe[1] || "0");
                        if (Ue === ke && Ce.GUID !== Y.GUID) {
                          if (_e > Ee) {
                            const tt = _e - 1;
                            tt >= Ae
                              ? (Ce.location = `${Ue},${tt + 1}`)
                              : (Ce.location = `${Ue},${tt}`),
                              Q.push({ ...Ce });
                          } else if (_e < Ee) {
                            const tt = Ae > Ee ? Ae - 1 : Ae;
                            _e >= tt &&
                              ((Ce.location = `${Ue},${_e + 1}`),
                              Q.push({ ...Ce }));
                          }
                        }
                      });
                    const Oe = Ae > Ee ? Ae - 1 : Ae;
                    (Y.location = `${Ne},${Oe}`), Q.push({ ...Y });
                  } else
                    console.log("跨列移動到目標列"),
                      ie.medMapStock.forEach((Oe) => {
                        const Ce = (Oe.location || "0,0").split(","),
                          Pe = Number(Ce[0] || "0"),
                          Ue = Number(Ce[1] || "0");
                        Pe === ke &&
                          Oe.GUID !== Y.GUID &&
                          Ue > Ee &&
                          ((Oe.location = `${Pe},${Ue - 1}`),
                          Q.push({ ...Oe }));
                      }),
                      ie.medMapStock.forEach((Oe) => {
                        const Ce = (Oe.location || "0,0").split(","),
                          Pe = Number(Ce[0] || "0"),
                          Ue = Number(Ce[1] || "0");
                        Pe === Ne &&
                          Oe.GUID !== Y.GUID &&
                          Ue >= Ae &&
                          ((Oe.location = `${Pe},${Ue + 1}`),
                          Q.push({ ...Oe }));
                      }),
                      (Y.location = `${Ne},${Ae}`),
                      Q.push({ ...Y });
                } else {
                  console.log("水平移動（左右）");
                  const Ae = ie.medMapStock.findIndex(
                    (Pe) => Pe.GUID === Y.GUID
                  );
                  Ae !== -1 && ie.medMapStock.splice(Ae, 1),
                    ie.medMapStock.forEach((Pe) => {
                      const Ue = (Pe.location || "0,0").split(","),
                        _e = Number(Ue[0] || "0"),
                        tt = Number(Ue[1] || "0");
                      _e > ke &&
                        ((Pe.location = `${_e - 1},${tt}`), Q.push({ ...Pe }));
                    });
                  let Oe;
                  const Ce = Ne > ke ? Ne - 1 : Ne;
                  $.stockItemDirection === "left" ? (Oe = Ce) : (Oe = Ce + 1),
                    ie.medMapStock.forEach((Pe) => {
                      const Ue = (Pe.location || "0,0").split(","),
                        _e = Number(Ue[0] || "0"),
                        tt = Number(Ue[1] || "0");
                      _e >= Oe &&
                        ((Pe.location = `${_e + 1},${tt}`), Q.push({ ...Pe }));
                    }),
                    (Y.location = `${Oe},${Ee}`),
                    ie.medMapStock.push(Y),
                    ie.medMapStock.sort((Pe, Ue) => {
                      const _e = (Pe.location || "0,0").split(","),
                        tt = (Ue.location || "0,0").split(",");
                      return Number(_e[0] || "0") - Number(tt[0] || "0");
                    }),
                    Q.push({ ...Y });
                }
              } else {
                console.log("不同層架間移動");
                const $e = Number(pe[1] || "0"),
                  Ae = ie.medMapStock.findIndex((Oe) => Oe.GUID === Y.GUID);
                if (
                  (Ae !== -1 && ie.medMapStock.splice(Ae, 1),
                  $.stockItemDirection === "top" ||
                    $.stockItemDirection === "bottom")
                ) {
                  console.log("跨層架垂直移動到目標列"),
                    ie.medMapStock.forEach((Ce) => {
                      const Pe = (Ce.location || "0,0").split(","),
                        Ue = Number(Pe[0] || "0"),
                        _e = Number(Pe[1] || "0");
                      Ue === ke &&
                        _e > Ee &&
                        ((Ce.location = `${Ue},${_e - 1}`), Q.push({ ...Ce }));
                    });
                  let Oe;
                  $.stockItemDirection === "top" ? (Oe = $e) : (Oe = $e + 1),
                    Z.medMapStock.forEach((Ce) => {
                      const Pe = (Ce.location || "0,0").split(","),
                        Ue = Number(Pe[0] || "0"),
                        _e = Number(Pe[1] || "0");
                      Ue === Ne &&
                        _e >= Oe &&
                        ((Ce.location = `${Ue},${_e + 1}`), Q.push({ ...Ce }));
                    }),
                    (Y.location = `${Ne},${Oe}`),
                    (Y.shelf_guid = Z.GUID),
                    Z.medMapStock.push(Y),
                    Z.medMapStock.sort((Ce, Pe) => {
                      const Ue = (Ce.location || "0,0").split(","),
                        _e = (Pe.location || "0,0").split(",");
                      return Number(Ue[0] || "0") - Number(_e[0] || "0");
                    }),
                    Q.push({ ...Y });
                } else {
                  console.log("跨層架水平移動"),
                    ie.medMapStock.forEach((Ce) => {
                      const Pe = (Ce.location || "0,0").split(","),
                        Ue = Number(Pe[0] || "0"),
                        _e = Number(Pe[1] || "0");
                      Ue > ke &&
                        ((Ce.location = `${Ue - 1},${_e}`), Q.push({ ...Ce }));
                    });
                  let Oe;
                  $.stockItemDirection === "left" ? (Oe = Ne) : (Oe = Ne + 1),
                    Z.medMapStock.forEach((Ce) => {
                      const Pe = (Ce.location || "0,0").split(","),
                        Ue = Number(Pe[0] || "0"),
                        _e = Number(Pe[1] || "0");
                      Ue >= Oe &&
                        ((Ce.location = `${Ue + 1},${_e}`), Q.push({ ...Ce }));
                    }),
                    (Y.location = `${Oe},${Ee}`),
                    (Y.shelf_guid = Z.GUID),
                    Z.medMapStock.push(Y),
                    Z.medMapStock.sort((Ce, Pe) => {
                      const Ue = (Ce.location || "0,0").split(","),
                        _e = (Pe.location || "0,0").split(",");
                      return Number(Ue[0] || "0") - Number(_e[0] || "0");
                    }),
                    Q.push({ ...Y });
                }
              }
            } else if ($.container.type === "store_shelves") {
              console.log("拖曳到 store_shelves 容器");
              const Z = $.container,
                ie = E.draggedStockShelf,
                Y = E.draggedStockItem,
                pe = (Y.location || "0,0").split(","),
                Ne = Number(pe[0] || "0"),
                Re = ie.medMapStock.findIndex((ke) => ke.GUID === Y.GUID);
              Re !== -1 &&
                (ie.medMapStock.splice(Re, 1),
                ie.medMapStock.forEach((ke) => {
                  const Ee = (ke.location || "0,0").split(","),
                    Be = Number(Ee[0] || "0"),
                    $e = Number(Ee[1] || "0");
                  Be > Ne &&
                    ((ke.location = `${Be - 1},${$e}`), Q.push({ ...ke }));
                })),
                (Y.location = "0,0"),
                (Y.shelf_guid = Z.GUID),
                Z.medMapStock || (Z.medMapStock = []),
                Z.medMapStock.forEach((ke) => {
                  const Ee = (ke.location || "0,0").split(","),
                    Be = Number(Ee[0] || "0"),
                    $e = Number(Ee[1] || "0");
                  (ke.location = `${Be + 1},${$e}`), Q.push({ ...ke });
                }),
                Z.medMapStock.push(Y),
                Z.medMapStock.sort((ke, Ee) => {
                  const Be = (ke.location || "0,0").split(","),
                    $e = (Ee.location || "0,0").split(",");
                  return Number(Be[0] || "0") - Number($e[0] || "0");
                }),
                Q.push({ ...Y });
            }
            if (Q.length > 0) {
              console.log("準備更新的 stockItems:", Q);
              try {
                const Z = await De.updateStock(Q);
                if (Z.Code === 200) {
                  m("藥品位置更新成功", "success");
                  try {
                    const ie = await De.getMedMapByDepartment(s);
                    if (ie.Code === 200 && ie.Data) {
                      const Y = Pt.convertMedMapApiToFakeData(ie.Data);
                      Pt.validateConvertedData(Y) && l(Y);
                    }
                  } catch (ie) {
                    console.error("刷新數據失敗:", ie);
                  }
                } else m(Z.Result || "更新失敗", "error");
              } catch (Z) {
                console.error("更新 stockItem 失敗:", Z),
                  m("更新失敗，請稍後再試", "error");
              }
            }
          }
          H({
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
            me(null);
          return;
        }
        let re = null,
          X = null,
          B = null;
        if (
          (console.log("Drop Target:", $),
          console.log("Is Mobile Drag:", E.isMobileDrag),
          E.isMobileDrag)
        )
          if ($) {
            (re = $.direction), (B = $.container);
            const Q = $.container.gird_position;
            console.log("目標容器原始位置:", Q);
            const Z = I($.container.Master_GUID || $.container.GUID);
            console.log("🔍 移除前查找目標父容器:"),
              console.log(
                "  - 查找 GUID:",
                $.container.Master_GUID || $.container.GUID
              ),
              console.log(
                "  - 找到的父容器:",
                (ce = Z == null ? void 0 : Z.container) == null
                  ? void 0
                  : ce.GUID
              ),
              console.log(
                "  - 父容器類型:",
                (W = Z == null ? void 0 : Z.container) == null ? void 0 : W.type
              );
            const ie = I(E.draggedContainer.GUID);
            let Y = null;
            if (ie) {
              Y = ie.parent.GUID;
              const Ae = ie.parent.contents.findIndex(
                (Ce) => Ce.GUID === E.draggedContainer.GUID
              );
              ie.parent.contents.splice(Ae, 1);
              const Oe = D(ie.parent, E.draggedContainer);
              ie.parent.contents = Oe;
            }
            let pe = Z;
            if (!pe) {
              console.warn(
                "⚠️ 透過 Master_GUID 找不到父容器，嘗試透過目標容器 GUID 查找"
              );
              const Ae = I($.container.GUID);
              Ae && Ae.parent
                ? ((pe = { container: Ae.parent, parent: null }),
                  console.log(
                    "✓ 透過目標容器 GUID 找到父容器:",
                    Ae.parent.GUID
                  ))
                : console.error("❌ 完全找不到目標父容器");
            }
            let Ne = $.container;
            if (Y && pe && pe.container.GUID === Y) {
              const Ae = pe.container.contents.find(
                (Oe) => Oe.GUID === $.container.GUID
              );
              Ae
                ? ((Ne = Ae),
                  console.log(
                    "同一父容器內移動，更新後的目標容器位置:",
                    Ae.gird_position
                  ))
                : (console.log("找不到更新後的目標容器，使用原始位置:", Q),
                  (Ne = { ...$.container, gird_position: Q }));
            }
            const Re = Ne.gird_position || Q;
            console.log("最終使用的目標位置:", Re),
              (!Re || Re === "0,0") &&
                (console.error("❌ 警告：目標位置無效或為 0,0"),
                console.error(
                  "  - targetContainer.gird_position:",
                  Ne.gird_position
                ),
                console.error("  - originalTargetPosition:", Q),
                console.error("  - dropTarget.container:", $.container));
            const ke = q(Re || "0,0");
            let Ee = ke.row,
              Be = ke.col;
            switch (
              (console.log("計算後的新位置 (插入前):", { row: Ee, col: Be }),
              $.direction)
            ) {
              case "top":
                Ee = Math.max(0, ke.row);
                break;
              case "bottom":
                Ee = ke.row + 1;
                break;
              case "left":
                Be = Math.max(0, ke.col);
                break;
              case "right":
                Be = ke.col + 1;
                break;
            }
            let $e = (pe == null ? void 0 : pe.container) || $.container;
            if (
              (console.log("📦 目標父容器決定:"),
              console.log("  - targetParentData 存在:", !!pe),
              console.log(
                "  - 使用的父容器 GUID:",
                $e == null ? void 0 : $e.GUID
              ),
              console.log(
                "  - 使用的父容器類型:",
                $e == null ? void 0 : $e.type
              ),
              console.log("  - dropTarget.container.class:", $.container.class),
              console.log(
                "  - dragState.draggedContainer.class:",
                E.draggedContainer.class
              ),
              E.draggedContainer.class != $.container.class &&
                (($e = $.container),
                console.log(
                  "  → class 不同，改用 dropTarget.container 作為父容器"
                )),
              E.draggedContainer.type === "med_box" &&
                $.container.type !== "med_box")
            )
              if (
                (console.log("藥盒移動目標到層架上"),
                ($e = $.container),
                $e.contents.length > 0)
              ) {
                let Ae = 0,
                  Oe = 0;
                $e.contents.forEach((Ce) => {
                  const Pe = q(Ce.gird_position || "0,0").row,
                    Ue = q(Ce.gird_position || "0,0").col;
                  Ae > Pe && (Ae = Pe), Oe > Ue && (Oe = Ue);
                });
                for (let Ce = 0; Ce <= Oe; Ce++)
                  for (let Pe = 0; Pe <= Ae; Pe++) {
                    const Ue = `${Ce},${Pe}`;
                    $e.contents.filter((tt) => tt.grid_position === Ue)
                      .length === 0 && ((Ee = Ce), (Be = Pe));
                  }
              } else (Ee = 0), (Be = 0);
            (X = $e), ee($e, E.draggedContainer, Ee, Be, $.direction);
          } else
            console.log("無效拖放，復原所有容器位置"),
              E.originalData &&
                E.originalParent &&
                (E.originalParent.contents = JSON.parse(
                  JSON.stringify(E.originalData)
                )),
              (re = null),
              (B = null),
              (X = E.originalParent);
        else if ($) {
          (re = $.direction), (B = $.container);
          const Q = I(E.draggedContainer.GUID);
          let Z = null;
          if (
            (console.log("=== 開始處理容器拖曳 ==="),
            console.log("拖曳容器 GUID:", E.draggedContainer.GUID),
            console.log("拖曳容器原始位置:", E.draggedContainer.gird_position),
            Q)
          ) {
            (Z = Q.parent.GUID),
              console.log("原始父容器 GUID:", Z),
              console.log(
                "移除前父容器的 contents 數量:",
                Q.parent.contents.length
              );
            const Ee = Q.parent.contents.findIndex(
              ($e) => $e.GUID === E.draggedContainer.GUID
            );
            Q.parent.contents.splice(Ee, 1),
              console.log(
                "移除後父容器的 contents 數量:",
                Q.parent.contents.length
              );
            const Be = D(Q.parent, E.draggedContainer);
            (Q.parent.contents = Be),
              console.log("重新計算後的容器列表:"),
              Q.parent.contents.forEach(($e) => {
                console.log(`  - ${$e.GUID}: ${$e.gird_position}`);
              });
          }
          const ie = I($.container.Master_GUID || $.container.GUID);
          let Y = $.container;
          if (
            (console.log("目標容器原始位置:", $.container.gird_position),
            Z && ie && ie.container.GUID === Z)
          ) {
            console.log("✓ 在同一個父容器內移動");
            const Ee = ie.container.contents.find(
              (Be) => Be.GUID === $.container.GUID
            );
            Ee &&
              ((Y = Ee),
              console.log(
                "同一父容器內移動，更新後的目標容器位置:",
                Ee.gird_position
              ));
          } else console.log("✗ 跨父容器移動或父容器不同");
          const pe = q(Y.gird_position || "0,0");
          let Ne = pe.row,
            Re = pe.col;
          switch ($.direction) {
            case "top":
              Ne = Math.max(0, pe.row);
              break;
            case "bottom":
              Ne = pe.row + 1;
              break;
            case "left":
              Re = Math.max(0, pe.col);
              break;
            case "right":
              Re = pe.col + 1;
              break;
          }
          console.log("------目標容器", $),
            console.log("------拖曳容器", E.draggedContainer);
          let ke = (ie == null ? void 0 : ie.container) || $.container;
          if (
            (console.log(E.draggedContainer.class),
            console.log($.container.class),
            console.log(E.draggedContainer.class != $.container.class),
            E.draggedContainer.class != $.container.class &&
              ((ke = $.container),
              console.log("------這邊顯示放到上層容器現象"),
              console.log("------目標容器", $),
              console.log("------拖曳容器", E.draggedContainer),
              console.log("------目標父容器", ke)),
            E.draggedContainer.type === "med_box" &&
              $.container.type !== "med_box")
          )
            if (
              (console.log("藥盒移動目標到層架上"),
              (ke = $.container),
              ke.contents.length > 0)
            ) {
              let Ee = 0,
                Be = 0;
              ke.contents.forEach(($e) => {
                const Ae = q($e.gird_position || "0,0").row,
                  Oe = q($e.gird_position || "0,0").col;
                Ee > Ae && (Ee = Ae), Be > Oe && (Be = Oe);
              });
              for (let $e = 0; $e <= Be; $e++)
                for (let Ae = 0; Ae <= Ee; Ae++) {
                  const Oe = `${$e},${Ae}`;
                  ke.contents.filter((Pe) => Pe.grid_position === Oe).length ===
                    0 && ((Ne = $e), (Re = Ae));
                }
            } else (Ne = 0), (Re = 0);
          (X = ke), ee(ke, E.draggedContainer, Ne, Re, $.direction);
        } else
          console.log("無效拖放，復原所有容器位置"),
            E.originalData &&
              E.originalParent &&
              (E.originalParent.contents = JSON.parse(
                JSON.stringify(E.originalData)
              )),
            (re = null),
            (B = null),
            (X = E.originalParent);
        H({
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
          me(null),
          console.log("Drop Direction:", re),
          console.log("Parent Object:", X),
          console.log("Target Object:", B),
          console.log("API更新資料：", fe),
          await Mh(fe);
      };
    f.useEffect(() => {
      if (E.isDragging)
        if (z()) {
          const re = (ce) => {
              ce.preventDefault(), ve(ce);
            },
            X = (ce) => ye(),
            B = (ce) => ye();
          return (
            document.addEventListener("pointermove", re, { passive: !1 }),
            document.addEventListener("pointerup", X),
            document.addEventListener("pointercancel", B),
            () => {
              document.removeEventListener("pointermove", re),
                document.removeEventListener("pointerup", X),
                document.removeEventListener("pointercancel", B);
            }
          );
        } else {
          const re = (W) => ve(W),
            X = (W) => ye(),
            B = (W) => {
              W.preventDefault(), ve(W);
            },
            ce = (W) => ye();
          return (
            document.addEventListener("mousemove", re),
            document.addEventListener("mouseup", X),
            document.addEventListener("touchmove", B, { passive: !1 }),
            document.addEventListener("touchend", ce),
            () => {
              document.removeEventListener("mousemove", re),
                document.removeEventListener("mouseup", X),
                document.removeEventListener("touchmove", B),
                document.removeEventListener("touchend", ce);
            }
          );
        }
    }, [E.isDragging, $]),
      f.useEffect(
        () => () => {
          if (E.floatingElement)
            try {
              E.floatingElement.parentNode &&
                E.floatingElement.parentNode.removeChild(E.floatingElement);
            } catch (y) {
              console.error("組件卸載時清除浮動元素失敗:", y);
            }
        },
        [E.floatingElement]
      ),
      f.useEffect(() => {
        const y = (X) => {
            X.code === "Space" && !X.repeat && (X.preventDefault(), P(!0));
          },
          re = (X) => {
            X.code === "Space" && (X.preventDefault(), P(!1), x(!1));
          };
        return (
          window.addEventListener("keydown", y),
          window.addEventListener("keyup", re),
          () => {
            window.removeEventListener("keydown", y),
              window.removeEventListener("keyup", re);
          }
        );
      }, []);
    const be = f.useCallback(
        (y) => {
          var X;
          if (v) return;
          if (y.ctrlKey || y.metaKey) {
            y.preventDefault(), y.stopPropagation();
            const B =
              (X = n.current) == null ? void 0 : X.getBoundingClientRect();
            if (!B) return;
            const ce = y.clientX - B.left,
              W = y.clientY - B.top,
              Q = y.deltaY > 0 ? 0.9 : 1.1,
              Z = Math.max(0.1, Math.min(5, _.scale * Q)),
              ie = Z / _.scale,
              Y = ce - (ce - _.x) * ie,
              pe = W - (W - _.y) * ie;
            u({ x: Y, y: pe, scale: Z });
          }
        },
        [_, v]
      ),
      Se = f.useCallback(
        (y) => {
          v ||
            !V ||
            (x(!0),
            R({ x: y.clientX, y: y.clientY }),
            U({ x: y.clientX, y: y.clientY }),
            J(!1),
            y.preventDefault());
        },
        [v, V]
      ),
      O = f.useCallback(
        (y) => {
          if (!d || v) return;
          const re = y.clientX - S.x,
            X = y.clientY - S.y;
          if (w) {
            const B = Math.abs(y.clientX - w.x),
              ce = Math.abs(y.clientY - w.y);
            (B > 5 || ce > 5) && J(!0);
          }
          u((B) => ({ ...B, x: B.x + re, y: B.y + X })),
            R({ x: y.clientX, y: y.clientY });
        },
        [d, S, v, w]
      ),
      te = f.useCallback(() => {
        x(!1), U(null);
      }, []),
      [G, K] = f.useState(null),
      [ae, xe] = f.useState({ x: 0, y: 0 }),
      Le = (y) => {
        if (y.length < 2) return null;
        const re = y[0],
          X = y[1];
        return Math.sqrt(
          Math.pow(X.clientX - re.clientX, 2) +
            Math.pow(X.clientY - re.clientY, 2)
        );
      },
      Me = (y) => {
        if (y.length === 1) return { x: y[0].clientX, y: y[0].clientY };
        const re = y[0],
          X = y[1];
        return {
          x: (re.clientX + X.clientX) / 2,
          y: (re.clientY + X.clientY) / 2,
        };
      },
      We = f.useCallback(
        (y) => {
          if (!v) {
            if (y.touches.length === 2) {
              const re = Le(y.touches),
                X = Me(y.touches);
              K(re), xe(X);
            } else if (y.touches.length === 1) {
              const re = y.touches[0];
              R({ x: re.clientX, y: re.clientY }), x(!0);
            }
          }
        },
        [v]
      ),
      Ve = f.useCallback(
        (y) => {
          var re;
          if (!v) {
            if ((y.preventDefault(), y.touches.length === 2 && G !== null)) {
              const X = Le(y.touches),
                B = Me(y.touches);
              if (X && G) {
                const ce =
                  (re = n.current) == null
                    ? void 0
                    : re.getBoundingClientRect();
                if (!ce) return;
                const W = X / G,
                  Q = Math.max(0.1, Math.min(5, _.scale * W)),
                  Z = B.x - ce.left,
                  ie = B.y - ce.top,
                  Y = Q / _.scale,
                  pe = Z - (Z - _.x) * Y,
                  Ne = ie - (ie - _.y) * Y;
                u({ x: pe, y: Ne, scale: Q }), K(X), xe(B);
              }
            } else if (y.touches.length === 1 && d) {
              const X = y.touches[0],
                B = X.clientX - S.x,
                ce = X.clientY - S.y;
              u((W) => ({ ...W, x: W.x + B, y: W.y + ce })),
                R({ x: X.clientX, y: X.clientY });
            }
          }
        },
        [_, G, d, S, v]
      ),
      ht = f.useCallback(() => {
        K(null), x(!1);
      }, []);
    f.useEffect(() => {
      const y = n.current;
      if (y)
        return (
          y.addEventListener("wheel", be, { passive: !1 }),
          () => y.removeEventListener("wheel", be)
        );
    }, [be]);
    const St = () => (!o || o.length === 0 ? [] : o),
      Qt = (y) => {
        if (!y || y.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const re = y.map((W) => ({
            ...W,
            gridPos: q(W.gird_position || "0,0"),
          })),
          X = Math.max(...re.map((W) => W.gridPos.row), 0),
          B = Math.max(...re.map((W) => W.gridPos.col), 0);
        return {
          sortedContents: re.sort((W, Q) =>
            W.gridPos.row !== Q.gridPos.row
              ? W.gridPos.row - Q.gridPos.row
              : W.gridPos.col - Q.gridPos.col
          ),
          maxRow: X,
          maxCol: B,
        };
      },
      Kt = St(),
      sl = Math.max(...Kt.map((y) => q(y.gird_position || "0,0").row), 0),
      Fr = Math.max(...Kt.map((y) => q(y.gird_position || "0,0").col), 0),
      Hr = (y) => {
        const re = (B) => {
            if (
              B.width &&
              Array.isArray(B.width) &&
              typeof B.width_index == "number" &&
              B.width_index >= 0 &&
              B.width_index < B.width.length
            ) {
              const W = parseFloat(B.width[B.width_index]);
              if (!isNaN(W)) {
                const Q = W * 20;
                return Math.max(200, Q);
              }
            }
            return 200;
          },
          X = (B) => {
            switch (B) {
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
        switch (y.type) {
          case "med_box":
            return (
              re(y),
              r.jsxs(
                "div",
                {
                  "data-container-guid": y.GUID,
                  className: `${
                    y.type !== "sub_container"
                      ? "border-2 rounded-lg shadow-sm"
                      : ""
                  } ${X(
                    y.type || 0
                  )} min-h-[80px] flex flex-col flex-shrink-0 h-full overflow-hidden`,
                  children: [
                    r.jsx("div", {
                      onMouseDown:
                        v && he(y.type) && !z()
                          ? (B) =>
                              le(
                                y,
                                B.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                B
                              )
                          : void 0,
                      onPointerDown:
                        v && he(y.type) && z()
                          ? (B) =>
                              le(
                                y,
                                B.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                B
                              )
                          : void 0,
                      className: v && he(y.type) ? "cursor-move" : "",
                      children: r.jsx(ts, { content: y, isAdminMode: p }),
                    }),
                    r.jsx("div", { className: "flex-1 p-1", children: pn(y) }),
                  ],
                },
                y.GUID
              )
            );
          case "sub_container":
          case "parent_container":
            return r.jsxs(
              "div",
              {
                "data-container-guid": y.GUID,
                className: `${X(
                  y.type || 0
                )} border-2 overflow-hidden rounded-lg shadow-sm min-h-[80px] flex flex-col h-full`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      v && he(y.type) && !z()
                        ? (B) =>
                            le(
                              y,
                              B.currentTarget.closest("[data-container-guid]"),
                              B
                            )
                        : void 0,
                    onPointerDown:
                      v && he(y.type) && z()
                        ? (B) =>
                            le(
                              y,
                              B.currentTarget.closest("[data-container-guid]"),
                              B
                            )
                        : void 0,
                    className: v && he(y.type) ? "cursor-move" : "",
                    children: r.jsx(ts, { content: y, isAdminMode: p }),
                  }),
                  r.jsx("div", { className: "flex-1  p-1", children: pn(y) }),
                ],
              },
              y.GUID
            );
          case "grid_draw":
            return r.jsxs(
              "div",
              {
                "data-container-guid": y.GUID,
                className: `${
                  y.type !== "sub_container"
                    ? "border-2 rounded-lg shadow-sm"
                    : ""
                } ${X(
                  y.type || 0
                )} min-h-[80px] flex flex-col h-full overflow-hidden`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      v && he(y.type) && !z()
                        ? (B) =>
                            le(
                              y,
                              B.currentTarget.closest("[data-container-guid]"),
                              B
                            )
                        : void 0,
                    onPointerDown:
                      v && he(y.type) && z()
                        ? (B) =>
                            le(
                              y,
                              B.currentTarget.closest("[data-container-guid]"),
                              B
                            )
                        : void 0,
                    className: v && he(y.type) ? "cursor-move" : "",
                    children: r.jsx(ts, { content: y, isAdminMode: p }),
                  }),
                  r.jsx("div", {
                    className: "flex-1 p-1 flex items-center",
                    children: pn(y),
                  }),
                ],
              },
              y.GUID
            );
          case "dispensing_shelves":
          case "store_shelves":
            return r.jsxs(
              "div",
              {
                "data-container-guid": y.GUID,
                className: `${
                  y.type !== "sub_container"
                    ? "border-2 rounded-lg shadow-sm"
                    : ""
                } ${X(
                  y.type || 0
                )} min-h-[80px] flex flex-col h-full overflow-hidden`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      v && he(y.type) && !z()
                        ? (B) =>
                            le(
                              y,
                              B.currentTarget.closest("[data-container-guid]"),
                              B
                            )
                        : void 0,
                    onPointerDown:
                      v && he(y.type) && z()
                        ? (B) =>
                            le(
                              y,
                              B.currentTarget.closest("[data-container-guid]"),
                              B
                            )
                        : void 0,
                    className: v && he(y.type) ? "cursor-move" : "",
                    children: r.jsx(ts, { content: y, isAdminMode: p }),
                  }),
                  r.jsx("div", {
                    className: "flex-1 p-1 h-full overflow-hidden",
                    children: pn(y),
                  }),
                ],
              },
              y.GUID
            );
          default:
            return r.jsxs(
              "div",
              {
                "data-container-guid": y.GUID,
                className: `${
                  y.type !== "sub_container"
                    ? "border-2 rounded-lg shadow-sm"
                    : ""
                } ${X(
                  y.type || 0
                )} min-h-[80px] flex flex-col h-full overflow-hidden ${
                  y.type == "none" ? "opacity-0" : ""
                }`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      v && he(y.type) && !z()
                        ? (B) =>
                            le(
                              y,
                              B.currentTarget.closest("[data-container-guid]"),
                              B
                            )
                        : void 0,
                    onPointerDown:
                      v && he(y.type) && z()
                        ? (B) =>
                            le(
                              y,
                              B.currentTarget.closest("[data-container-guid]"),
                              B
                            )
                        : void 0,
                    className: v && he(y.type) ? "cursor-move" : "",
                    children: r.jsx(ts, { content: y, isAdminMode: p }),
                  }),
                  r.jsx("div", { className: "flex-1 p-1", children: pn(y) }),
                ],
              },
              y.GUID
            );
        }
      },
      pn = (y) => {
        const re = (X, B, ce) => {
          const W = Array(B + 1)
              .fill(null)
              .map(() => Array(ce + 1).fill(!1)),
            Q = {};
          return (
            X.forEach((Z) => {
              const ie = q(Z.gird_position || "0,0");
              (Q[`${ie.row},${ie.col}`] = Z), (W[ie.row][ie.col] = !0);
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: B + 1 }, (Z, ie) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      style: { height: `${100 / (B + 1)}%`, minHeight: "80px" },
                      children: Array.from({ length: ce + 1 }, (Y, pe) => {
                        const Ne = `${ie},${pe}`,
                          Re = Q[Ne];
                        return Re
                          ? r.jsxs(
                              "td",
                              {
                                className: "align-top bg-transparent",
                                style: {
                                  width: `${100 / (ce + 1)}%`,
                                  height: `${100 / (B + 1)}%`,
                                  minHeight: "80px",
                                  border: "none",
                                  position: "relative",
                                },
                                children: [
                                  Hr(Re),
                                  ($ == null ? void 0 : $.container.GUID) ===
                                    Re.GUID &&
                                    r.jsx("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none",
                                      children: r.jsx("div", {
                                        className: `absolute bg-blue-400 opacity-50 ${
                                          $.direction === "top"
                                            ? "top-0 left-0 right-0 h-1"
                                            : $.direction === "bottom"
                                            ? "bottom-0 left-0 right-0 h-1"
                                            : $.direction === "left"
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
                                  width: `${100 / (ce + 1)}%`,
                                  height: `${100 / (B + 1)}%`,
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
                    ie
                  )
                ),
              }),
            })
          );
        };
        switch (y.type) {
          case "parent_container":
          case "sub_container":
            if (y.contents && y.contents.length > 0) {
              const {
                sortedContents: Y,
                maxRow: pe,
                maxCol: Ne,
              } = Qt(y.contents);
              return re(Y, pe, Ne);
            } else
              return r.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "1px" },
                children: r.jsx("tbody", { children: r.jsx("tr", {}) }),
              });
          case "dispensing_shelves":
            if (y.contents && y.contents.length > 0) {
              const {
                sortedContents: Y,
                maxRow: pe,
                maxCol: Ne,
              } = Qt(y.contents);
              return re(Y, pe, Ne);
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
            if (y.medMapStock && y.medMapStock.length > 0) {
              const Y = y.medMapStock,
                pe = {};
              Y.forEach((Ee) => {
                const Be = (Ee.location || "0,0").split(","),
                  $e = Number(Be[0] || "0"),
                  Ae = Number(Be[1] || "0");
                pe[$e] || (pe[$e] = []),
                  pe[$e].push({ ...Ee, _position: $e, _depth: Ae });
              });
              const Ne = Object.keys(pe)
                  .map(Number)
                  .sort((Ee, Be) => Ee - Be),
                Re = Ne.length;
              Math.max(...Ne.map((Ee) => pe[Ee].length));
              const ke = y.width ? y.width * 5 : 500;
              return r.jsx("div", {
                className: "flex h-full",
                style: { minWidth: `${ke}px` },
                children: Ne.map((Ee) => {
                  const Be = pe[Ee].sort((Ce, Pe) => Pe._depth - Ce._depth),
                    $e = Re > 0 ? 100 / Re : 100,
                    Ae = Be.length,
                    Oe = Ae > 0 ? 100 / Ae : 100;
                  return r.jsx(
                    "div",
                    {
                      className: "flex flex-shrink-0 flex-col m-1",
                      style: { width: `calc(${$e}% - 8px)`, minWidth: "160px" },
                      children: Be.map((Ce, Pe) => {
                        const Ue = Pe === Ae - 1;
                        return r.jsx(
                          "div",
                          {
                            className: `relative ${Ue ? "" : "mb-1"}`,
                            style: {
                              height: `calc(${Oe}% - ${
                                Ue ? "0px" : "0.25rem"
                              })`,
                            },
                            "data-stock-guid": Ce.GUID,
                            children: r.jsxs("div", {
                              className: `border-2 bg-yellow-50 border-yellow-400 rounded-lg p-2 h-full flex flex-col justify-center items-center cursor-pointer bg-white hover:bg-yellow-100 hover:border-yellow-500 hover:shadow-md transition-all ${
                                v ? "cursor-move" : ""
                              }`,
                              onMouseDown: (_e) => {
                                v
                                  ? se(
                                      Ce,
                                      y,
                                      _e.currentTarget.closest(
                                        "[data-stock-guid]"
                                      ),
                                      _e
                                    )
                                  : !d &&
                                    !V &&
                                    (U({ x: _e.clientX, y: _e.clientY }),
                                    J(!1));
                              },
                              onMouseUp: (_e) => {
                                if (!d && !V && !C && w && !v) {
                                  const tt = Math.abs(_e.clientX - w.x),
                                    qr = Math.abs(_e.clientY - w.y);
                                  tt <= 5 &&
                                    qr <= 5 &&
                                    (_e.stopPropagation(), c(y, Ce));
                                }
                                v || (U(null), J(!1));
                              },
                              onTouchStart: (_e) => {
                                if (v && z())
                                  se(
                                    Ce,
                                    y,
                                    _e.currentTarget.closest(
                                      "[data-stock-guid]"
                                    ),
                                    _e
                                  );
                                else if (!d && !v) {
                                  const tt = _e.touches[0];
                                  U({ x: tt.clientX, y: tt.clientY }), J(!1);
                                }
                              },
                              onTouchEnd: (_e) => {
                                if (!d && !C && w && !v) {
                                  const tt = _e.changedTouches[0],
                                    qr = Math.abs(tt.clientX - w.x),
                                    il = Math.abs(tt.clientY - w.y);
                                  qr <= 5 &&
                                    il <= 5 &&
                                    (_e.stopPropagation(), c(y, Ce));
                                }
                                v || (U(null), J(!1));
                              },
                              onPointerDown: (_e) => {
                                v &&
                                  z() &&
                                  se(
                                    Ce,
                                    y,
                                    _e.currentTarget.closest(
                                      "[data-stock-guid]"
                                    ),
                                    _e
                                  );
                              },
                              children: [
                                r.jsx("div", {
                                  className:
                                    "py-1 text-base font-semibold text-gray-800 flex text-center text-ellipsis whitespace-normal items-center flex-1",
                                  children: Ce.name || Ce.material_no,
                                }),
                                r.jsxs("div", {
                                  className:
                                    "w-full flex justify-between items-end",
                                  children: [
                                    r.jsx("div", {
                                      className: "",
                                      children: r.jsxs("div", {
                                        className: "mt-1",
                                        children: ["[ ", +Ce.qty || 0, " ]"],
                                      }),
                                    }),
                                    r.jsx("div", {
                                      className:
                                        "flex justify-end items-end mt-2",
                                      children: r.jsx("button", {
                                        onMouseDown: (_e) => {
                                          _e.stopPropagation();
                                        },
                                        onMouseUp: (_e) => {
                                          _e.stopPropagation();
                                        },
                                        onTouchStart: (_e) => {
                                          _e.stopPropagation();
                                        },
                                        onTouchEnd: (_e) => {
                                          _e.stopPropagation();
                                        },
                                        onClick: (_e) => ll(Ce, y, _e),
                                        className:
                                          "text-red-500 hover:text-red-600 rounded-full p-2 transition-all z-10",
                                        title: "刪除",
                                        children: r.jsx(Cr, {
                                          className: "w-6 h-6",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          Ce.GUID || Pe
                        );
                      }),
                    },
                    Ee
                  );
                }),
              });
            } else if (y.contents && y.contents.length > 0) {
              const {
                sortedContents: Y,
                maxRow: pe,
                maxCol: Ne,
              } = Qt(y.contents);
              return re(Y, pe, Ne);
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
            if (y.contents && y.contents.length > 0) {
              const {
                sortedContents: Y,
                maxRow: pe,
                maxCol: Ne,
              } = Qt(y.contents);
              return re(Y, pe, Ne);
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
            const X = Math.max(
                ...y.Boxes.flat().map((Y) => +Y.Row + +Y.Height - 1)
              ),
              B = Math.max(
                ...y.Boxes.flat().map((Y) => +Y.Column + +Y.Width - 1)
              ),
              ce = X + 1,
              W = B + 1,
              Q = y.Boxes.flat(),
              Z = Array(ce)
                .fill(null)
                .map(() => Array(W).fill(!1)),
              ie = {};
            return (
              Q.forEach((Y) => {
                Y.Slave || (ie[`${Y.Row},${Y.Column}`] = Y);
              }),
              Q.forEach((Y) => {
                if (!Y.Slave && (Y.Width > 1 || Y.Height > 1))
                  for (let pe = Y.Row; pe < Y.Row + Y.Height; pe++)
                    for (let Ne = Y.Column; Ne < Y.Column + Y.Width; Ne++)
                      (pe !== Y.Row || Ne !== Y.Column) && (Z[pe][Ne] = !0);
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
            return y.med_info && y.med_info.length > 0
              ? r.jsxs("div", {
                  className:
                    "text-base text-left h-full min-h-[40px] max-w-[200px] min-w-[200px] p-1 flex items-center justify-between flex-col",
                  children: [
                    r.jsx("div", {
                      className: "text-gray-700 font-bold truncate w-full",
                      children: y.med_info[0].name,
                    }),
                    r.jsxs("div", {
                      className:
                        "text-gray-700 w-full flex justify-between px-1",
                      children: [
                        r.jsxs("div", { children: [y.box_type, "吋"] }),
                        r.jsxs("div", {
                          children: [y.width[y.width_index], "cm"],
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
            return y.contents && y.contents.length > 0
              ? r.jsx("div", {
                  className: "space-y-2",
                  children: y.contents.map((Y) => Hr(Y)),
                })
              : r.jsx("div", {
                  className:
                    "h-full flex items-center justify-center text-gray-500",
                  children: r.jsxs("div", {
                    className: "text-base",
                    children: ["未知類型: ", y.type],
                  }),
                });
        }
      },
      ol = (y) => {
        if (
          (q(y.gird_position || "0,0"),
          y.type !== "調劑台" && y.type !== "藥庫")
        )
          return null;
        const re = (X) => {
          if (!X || X.length === 0)
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
          const { sortedContents: B, maxRow: ce, maxCol: W } = Qt(X),
            Q = Array(ce + 1)
              .fill(null)
              .map(() => Array(W + 1).fill(!1)),
            Z = {};
          return (
            B.forEach((ie) => {
              const Y = q(ie.gird_position || "0,0");
              (Z[`${Y.row},${Y.col}`] = ie), (Q[Y.row][Y.col] = !0);
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: ce + 1 }, (ie, Y) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      children: Array.from({ length: W + 1 }, (pe, Ne) => {
                        const Re = `${Y},${Ne}`,
                          ke = Z[Re];
                        return ke
                          ? r.jsxs(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (W + 1)}%`,
                                  height: `${100 / (ce + 1)}%`,
                                  minHeight: "120px",
                                  border: "none",
                                  position: "relative",
                                },
                                children: [
                                  Hr(ke),
                                  ($ == null ? void 0 : $.container.GUID) ===
                                    ke.GUID &&
                                    r.jsx("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none",
                                      children: r.jsx("div", {
                                        className: `absolute bg-blue-400 opacity-50 ${
                                          $.direction === "top"
                                            ? "top-0 left-0 right-0 h-1"
                                            : $.direction === "bottom"
                                            ? "bottom-0 left-0 right-0 h-1"
                                            : $.direction === "left"
                                            ? "left-0 top-0 bottom-0 w-1"
                                            : "right-0 top-0 bottom-0 w-1"
                                        }`,
                                      }),
                                    }),
                                ],
                              },
                              Ne
                            )
                          : r.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (W + 1)}%`,
                                  height: `${100 / (ce + 1)}%`,
                                  minHeight: "120px",
                                  border: "1px dashed #e5e7eb",
                                },
                                children: r.jsx("div", {
                                  className:
                                    "w-full h-full flex items-center justify-center text-gray-400 text-sm",
                                  children: "空位",
                                }),
                              },
                              Ne
                            );
                      }),
                    },
                    Y
                  )
                ),
              }),
            })
          );
        };
        return r.jsxs(
          "div",
          {
            "data-container-guid": y.GUID,
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
                      children: y.name,
                    }),
                  }),
                  r.jsx("div", {
                    className: "flex items-center space-x-1",
                    children: r.jsx("button", {
                      className:
                        "p-1 hover:bg-black/10 rounded transition-colors",
                      onClick: (X) => {
                        X.stopPropagation(),
                          console.log("🔘 點擊新增父容器按鈕"),
                          console.log("📋 找到的部門資料:", y),
                          y
                            ? (console.log(
                                "✅ 呼叫 openAddParentContainerModal"
                              ),
                              i(y))
                            : console.warn("⚠️ 未找到對應的部門資料");
                      },
                      title: "新增",
                      children: r.jsx(Tt, {
                        className: "w-6 h-6 text-green-700",
                      }),
                    }),
                  }),
                ],
              }),
              r.jsx("div", {
                className: `flex-1 bg-orange-50 ${
                  ($ == null ? void 0 : $.container.GUID) === y.GUID
                    ? "ring-2 ring-blue-400 ring-inset"
                    : ""
                }`,
                children: re(y.contents || []),
              }),
            ],
          },
          y.GUID
        );
      },
      Wn = f.useCallback(
        (y) => {
          if (
            (console.log("🎯 locateDrugOnCanvas 被調用，藥品資料:", y),
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
          const re = y[0].CODE || y[0].code;
          if ((console.log("🎯 提取的藥碼:", re), !re)) {
            console.warn("⚠️ 無法定位藥品：缺少藥碼");
            return;
          }
          console.log("🎯 開始定位藥品:", re);
          const X = (ce) => {
              for (const W of ce) {
                if (W.type === "grid_draw" && W.Boxes) {
                  for (const Q of W.Boxes)
                    for (const Z of Q)
                      if (Z.Code === re) {
                        const ie = document.querySelector(
                          `[data-container-guid="${W.GUID}"]`
                        );
                        if (ie)
                          return (
                            console.log("✅ 找到藥品容器 (grid_draw):", W),
                            { element: ie, bounds: ie.getBoundingClientRect() }
                          );
                      }
                }
                if (
                  W.type === "list_draw" &&
                  W.drugs &&
                  W.drugs.some((Z) => Z.code === re)
                ) {
                  const Z = document.querySelector(
                    `[data-container-guid="${W.GUID}"]`
                  );
                  if (Z)
                    return (
                      console.log("✅ 找到藥品容器 (list_draw):", W),
                      { element: Z, bounds: Z.getBoundingClientRect() }
                    );
                }
                if (
                  (W.type === "store_shelves" ||
                    W.type === "dispensing_shelves") &&
                  W.medMapStock &&
                  W.medMapStock.some(
                    (Z) => Z.code === re || Z.material_no === re
                  )
                ) {
                  const Z = document.querySelector(
                    `[data-container-guid="${W.GUID}"]`
                  );
                  if (Z)
                    return (
                      console.log("✅ 找到藥品容器 (store_shelves):", W),
                      { element: Z, bounds: Z.getBoundingClientRect() }
                    );
                }
                if (
                  W.type === "med_box" &&
                  W.med_info &&
                  W.med_info.length > 0 &&
                  W.med_info.some((Z) => Z.code === re)
                ) {
                  const Z = document.querySelector(
                    `[data-container-guid="${W.GUID}"]`
                  );
                  if (Z)
                    return (
                      console.log("✅ 找到藥品容器 (med_box):", W),
                      { element: Z, bounds: Z.getBoundingClientRect() }
                    );
                }
                if (W.contents && W.contents.length > 0) {
                  const Q = X(W.contents);
                  if (Q) return Q;
                }
              }
              return null;
            },
            B = X(o);
          if (B) {
            const ce = n.current.getBoundingClientRect(),
              W = B.bounds,
              Q = (W.left + W.right) / 2,
              Z = (W.top + W.bottom) / 2,
              ie = (Q - ce.left - _.x) / _.scale,
              Y = (Z - ce.top - _.y) / _.scale,
              pe = ce.width / 2,
              Ne = ce.height / 2,
              Re = pe - ie * _.scale,
              ke = Ne - Y * _.scale;
            u((Ee) => ({ ...Ee, x: Re, y: ke })),
              console.log("✅ 定位完成", {
                elementScreenCenter: { x: Q, y: Z },
                elementCanvasPos: { x: ie, y: Y },
                screenCenter: { x: pe, y: Ne },
                newTransform: { x: Re, y: ke },
              }),
              m(`已定位到藥品：${y.CHT_NAME || y.NAME || re}`, "success");
          } else
            console.warn("❌ 未找到藥品容器"),
              m("未找到該藥品的儲存位置", "error");
        },
        [o, _, m]
      );
    f.useImperativeHandle(
      t,
      () => (
        console.log("🔧 useImperativeHandle 設置 ref 方法"), { locateDrug: Wn }
      )
    );
    const ll = async (y, re, X) => {
        if (
          (X.stopPropagation(),
          X.preventDefault(),
          !!window.confirm(`確定要刪除 ${y.name || y.material_no} 嗎？`))
        )
          try {
            const ce = await De.deleteStockByGUID([y.GUID]);
            if (ce.Code === 200) {
              const W = re.medMapStock.findIndex((Q) => Q.GUID === y.GUID);
              W !== -1 &&
                (re.medMapStock.splice(W, 1),
                re.medMapStock.forEach((Q, Z) => {
                  Q.location = String(Z);
                })),
                m("刪除成功", "success");
            } else m(ce.Result || "刪除失敗", "error");
          } catch (ce) {
            console.error("刪除 stock 失敗:", ce),
              m("刪除失敗，請稍後再試", "error");
          }
      },
      Vr = async (y) => {
        if (y.key === "Enter" && A.trim() && !ue) {
          y.preventDefault(), M(!0);
          const re = performance.now();
          try {
            console.log("🔍 [手動輸入] 搜尋條碼:", A);
            const X = performance.now(),
              B = await De.searchByBarCode(A.trim()),
              ce = performance.now();
            if (
              (console.log(
                `⏱️ [手動輸入] API搜尋藥品資料用時: ${(ce - X).toFixed(2)}ms`
              ),
              console.log("📋 條碼搜尋回應:", B),
              B.Code === 200)
            ) {
              console.log("✅ 找到藥品資料:", B.Data);
              const W = performance.now();
              Wn(B.Data);
              const Q = performance.now();
              console.log(
                `⏱️ [手動輸入] 定位藥品用時: ${(Q - W).toFixed(2)}ms`
              ),
                oe("");
              const Z = performance.now();
              console.log(`⏱️ [手動輸入] 總用時: ${(Z - re).toFixed(2)}ms`);
            } else
              B.Code === -200 && B.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  m("查無資料，請建立條碼", "error"),
                  g(A.trim()),
                  oe(""))
                : (console.log("❌ 搜尋失敗:", B.Result),
                  m(B.Result || "搜尋失敗", "error"));
          } catch (X) {
            console.error("條碼搜尋錯誤:", X),
              m("搜尋失敗，請稍後再試", "error");
          } finally {
            M(!1);
          }
        }
      },
      al = (y) => {
        console.log("📍 [藥品搜尋-容器視圖] 選擇藥品:", y),
          F(!1),
          m(`選擇藥品: ${y.NAME}`, "success"),
          Wn([y]);
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
              r.jsx("button", {
                onClick: () => F(!0),
                className: "p-2 hover:bg-gray-50 transition-colors",
                title: "搜尋藥品",
                disabled: ue,
                children: r.jsx(Go, { className: "w-6 h-6 text-blue-600" }),
              }),
              r.jsx("div", { className: "w-px h-6 bg-gray-200" }),
              r.jsx("input", {
                type: "text",
                value: A,
                onChange: (y) => oe(y.target.value),
                onKeyDown: Vr,
                placeholder: "輸入條碼或掃描...",
                className:
                  "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
                disabled: ue,
              }),
              r.jsx("button", {
                onClick: () => h("track_Drug_mode"),
                className: "p-2 hover:bg-gray-50 transition-colors",
                title: "掃描條碼",
                disabled: ue,
                children: r.jsx(Lr, { className: "w-6 h-6 text-blue-600" }),
              }),
            ],
          }),
        }),
        r.jsx("div", {
          className: "absolute bottom-4 right-4 z-10 flex gap-2",
          children: r.jsx("button", {
            onClick: () => T(!v),
            className: `rounded-lg shadow-lg p-2 transition-colors ${
              v
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`,
            title: v ? "Unlock Canvas" : "Lock Canvas",
            children: v
              ? r.jsx(Si, { className: "w-6 h-6" })
              : r.jsx(sf, { className: "w-6 h-6" }),
          }),
        }),
        r.jsx("div", {
          ref: n,
          className: `w-full h-full relative ${
            V && !v ? "cursor-grab" : "cursor-default"
          } ${d ? "cursor-grabbing" : ""}`,
          onMouseDown: Se,
          onMouseMove: O,
          onMouseUp: te,
          onMouseLeave: te,
          onTouchStart: We,
          onTouchMove: Ve,
          onTouchEnd: ht,
          children: r.jsxs("div", {
            className: "absolute inset-0 origin-top-left",
            style: {
              transform: `translate(${_.x}px, ${_.y}px) scale(${_.scale})`,
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
                    borderSpacing: `${ge}px`,
                    minWidth: "fit-content",
                    minHeight: "fit-content",
                  },
                  children: r.jsx("tbody", {
                    children: Array.from({ length: sl + 1 }, (y, re) =>
                      r.jsx(
                        "tr",
                        {
                          children: Array.from({ length: Fr + 1 }, (X, B) => {
                            const ce = Kt.find((W) => {
                              const Q = q(W.gird_position || "0,0");
                              return Q.row === re && Q.col === B;
                            });
                            return ce
                              ? r.jsx(
                                  "td",
                                  {
                                    className: "align-top",
                                    style: {
                                      minWidth: "150px",
                                      minHeight: "120px",
                                      border: "none",
                                    },
                                    children: ol(ce),
                                  },
                                  B
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
                                  B
                                );
                          }),
                        },
                        re
                      )
                    ),
                  }),
                }),
              }),
              e,
            ],
          }),
        }),
        r.jsx(of, {
          isOpen: N,
          onClose: () => F(!1),
          medicineList: k,
          onSelectMedicine: al,
        }),
      ],
    });
  });
lf.displayName = "DrugCanvas";
const Mh = async (e) => {
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
      var h, g, m, p, j;
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
          const b = {
            ...c,
            absolute_position: `${
              (h = i.containerData) == null ? void 0 : h.position.x
            },${(g = i.containerData) == null ? void 0 : g.position.y}`,
            position:
              ((m = i.containerData) == null ? void 0 : m.gird_position) ||
              i.position,
            name: ((p = i.containerData) == null ? void 0 : p.name) || "",
            ip: ((j = i.containerData) == null ? void 0 : j.ip) || "",
          };
          o.push(b);
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
          De.updateMedMapBox(t)
            .then((i) => ({ type: "med_box", response: i, count: t.length }))
            .catch((i) => ({ type: "med_box", error: i, count: t.length }))
        )),
      n.length > 0 &&
        (console.log("🗂️ 更新抽屜資料:", n),
        a.push(
          De.updateMedMapDrawer(n)
            .then((i) => ({ type: "drawer", response: i, count: n.length }))
            .catch((i) => ({ type: "drawer", error: i, count: n.length }))
        )),
      s.length > 0 &&
        (console.log("🏪 更新層架資料:", s),
        a.push(
          De.updateMedMapShelf(s)
            .then((i) => ({ type: "shelf", response: i, count: s.length }))
            .catch((i) => ({ type: "shelf", error: i, count: s.length }))
        )),
      o.length > 0 &&
        (console.log("🏢 更新父容器資料:", o),
        o.forEach((i) => {
          a.push(
            De.updateContainerPosition(i)
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
          De.updateSubSection(l)
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
        h = 0;
      const g = [];
      i.forEach((m) => {
        var p, j;
        if (m.error)
          (h += m.count),
            g.push(`${m.type}: ${m.error.message || "網路錯誤"}`),
            console.error(`❌ ${m.type} API 失敗:`, m.error);
        else if (((p = m.response) == null ? void 0 : p.Code) === 200)
          (c += m.count), console.log(`✅ ${m.type} API 成功:`, m.response);
        else {
          h += m.count;
          const b =
            ((j = m.response) == null ? void 0 : j.Result) || "未知錯誤";
          g.push(`${m.type}: ${b}`),
            console.error(`❌ ${m.type} API 失敗:`, m.response);
        }
      });
    } catch (i) {
      console.error("💥 批次更新過程中發生錯誤:", i);
    } finally {
      console.log("完成更新");
    }
  },
  Eh = "modulepreload",
  Ih = function (e) {
    return "/" + e;
  },
  Ac = {},
  Ph = function (t, n, s) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const a = document.querySelector("meta[property=csp-nonce]"),
        i =
          (a == null ? void 0 : a.nonce) ||
          (a == null ? void 0 : a.getAttribute("nonce"));
      o = Promise.allSettled(
        n.map((c) => {
          if (((c = Ih(c)), c in Ac)) return;
          Ac[c] = !0;
          const h = c.endsWith(".css"),
            g = h ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${g}`)) return;
          const m = document.createElement("link");
          if (
            ((m.rel = h ? "stylesheet" : Eh),
            h || (m.as = "script"),
            (m.crossOrigin = ""),
            (m.href = c),
            i && m.setAttribute("nonce", i),
            document.head.appendChild(m),
            h)
          )
            return new Promise((p, j) => {
              m.addEventListener("load", p),
                m.addEventListener("error", () =>
                  j(new Error(`Unable to preload CSS for ${c}`))
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
  an = [
    { name: "2.13吋", box_type: "2.13", width: ["7.5"], unit: "cm" },
    { name: "2.9吋", type: "2.9", width: ["10", "15", "20"], unit: "cm" },
    { name: "4.2吋", type: "4.2", width: ["11", "16"], unit: "cm" },
  ],
  Th = () => {
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
        medicineList: h,
      } = lt(),
      { t: g } = Mt(),
      [m, p] = f.useState(0),
      [j, b] = f.useState({}),
      [k, _] = f.useState(""),
      [u, d] = f.useState(""),
      [x, v] = f.useState("N"),
      [T, S] = f.useState([]),
      [R, V] = f.useState(!1),
      [P, A] = f.useState(!1),
      [oe, ue] = f.useState(null),
      [M, N] = f.useState(null),
      [F, w] = f.useState(!1),
      [U, C] = f.useState(!1);
    f.useEffect(() => {
      if (n && e)
        if (c === "add") {
          p(0);
          const q = {};
          an.forEach((I, D) => {
            q[D] = 0;
          }),
            b(q),
            _(""),
            A(!1),
            J();
        } else {
          const q = an.findIndex(
            (I) => I.box_type === n.box_type || I.type === n.box_type
          );
          if ((console.log(n), q >= 0)) {
            p(q);
            const D = an[q].width.findIndex((L) => {
                var se;
                return (
                  L ===
                  ((se = n.width) == null ? void 0 : se[n.width_index || 0])
                );
              }),
              ee = {};
            an.forEach((L, se) => {
              se === q ? (ee[se] = D >= 0 ? D : 0) : (ee[se] = 0);
            }),
              b(ee);
          } else {
            p(0);
            const I = {};
            an.forEach((D, ee) => {
              I[ee] = 0;
            }),
              b(I);
          }
          _(n.ip || ""),
            N({
              box_type: n.box_type,
              width: n.width,
              width_index: n.width_index,
              ip: n.ip || "",
              storage: n.storage ? JSON.parse(JSON.stringify(n.storage)) : null,
            });
        }
    }, [n, e, c]);
    const J = () => {
        n && n.parentShelf && ue(n.parentShelf);
      },
      E = (q) => {
        if (!q || !q.contents || q.contents.length === 0) return "0,0";
        let I = -1,
          D = 0;
        return (
          q.contents.forEach((ee) => {
            if (ee.gird_position) {
              const [L, se] = ee.gird_position.split(",").map(Number);
              se > I && ((I = se), (D = L));
            }
          }),
          `${D},${I + 1}`
        );
      },
      H = () => {
        if (!M || c !== "edit") return !1;
        const q = an[m],
          I = j[m] || 0,
          D = q.box_type || q.type || q.name;
        return (
          M.box_type !== D ||
          M.width_index !== I ||
          M.ip !== k ||
          JSON.stringify(M.storage) !==
            JSON.stringify(n == null ? void 0 : n.storage)
        );
      },
      $ = (q) => {
        p(q);
      },
      me = (q, I) => {
        b((D) => ({ ...D, [q]: I }));
      },
      fe = () => {
        n && (c === "add" ? ge() : ne());
      },
      z = () => {
        t();
      },
      ge = async () => {
        if (!n || !oe) {
          a("缺少必要資料，無法新增藥盒", "error");
          return;
        }
        A(!0);
        try {
          const q = an[m],
            I = j[m] || 0,
            D = q.width[I],
            ee = E(oe),
            L = {
              Master_GUID: oe.GUID,
              position: ee,
              width: D.toString(),
              height: "60",
              ip_box: k,
              serverName: oe.serverName || "",
              serverType: oe.serverType || "",
            };
          console.log("🚀 發送新增藥盒 API 請求:", L);
          const se = await De.addMedMapBox(L);
          se.Code === 200
            ? (a("藥盒新增成功", "success"), t(), await je())
            : a(`藥盒新增失敗：${se.Result || "未知錯誤"}`, "error");
        } catch (q) {
          console.error("Add med box failed:", q),
            a("藥盒新增失敗：網路錯誤", "error");
        } finally {
          A(!1);
        }
      },
      ne = async () => {
        var q;
        if (!n || !H()) {
          a("沒有資料變更", "error");
          return;
        }
        w(!0);
        try {
          const I = an[m],
            D = j[m] || 0,
            ee = I.width[D],
            L = I.box_type || I.type || I.name,
            se = M.box_type !== L || M.width_index !== D || M.ip !== k,
            le =
              JSON.stringify(M.storage) !==
              JSON.stringify(n == null ? void 0 : n.storage),
            ve = [];
          if (se) {
            const Se = {
              GUID: n.GUID,
              Master_GUID: n.Master_GUID,
              position: n.gird_position,
              ip_light: k,
              serverName: n.serverName,
              serverType: n.serverType,
            };
            ve.push(De.updateMedMapBox([Se]));
          }
          le &&
            ve.push(
              De.updateEpd266Storages(n.serverName || "", n.serverType || "", [
                n.storage,
              ])
            );
          const ye = await Promise.all(ve);
          if (ye.every((Se) => Se.Code === 200))
            a("藥盒更新成功", "success"), t(), await je();
          else {
            const Se = ye.filter((O) => O.Code !== 200);
            a(
              `藥盒更新失敗：${
                ((q = Se[0]) == null ? void 0 : q.Result) || "未知錯誤"
              }`,
              "error"
            );
          }
        } catch (I) {
          console.error("Update med box failed:", I),
            a("藥盒更新失敗：網路錯誤", "error");
        } finally {
          w(!1);
        }
      },
      je = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const q = await De.getMedMapByDepartment(s);
          if (q.Code === 200 && q.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const I = await Ph(() => Promise.resolve().then(() => th), void 0),
              D = I.default.convertMedMapApiToFakeData(q.Data);
            if (!I.default.validateConvertedData(D)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(D), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", q),
              a("資料更新失敗：API 錯誤", "error");
        } catch (q) {
          console.error("💥 重新獲取藥品地圖資料失敗:", q),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      Ie = async () => {
        V(!0);
        try {
          const q = u.toLowerCase().trim();
          let I = h;
          q &&
            (I = I.filter((D) => {
              var ee, L, se;
              return (
                ((ee = D.CODE) == null
                  ? void 0
                  : ee.toLowerCase().includes(q)) ||
                ((L = D.NAME) == null ? void 0 : L.toLowerCase().includes(q)) ||
                ((se = D.CHT_NAME) == null
                  ? void 0
                  : se.toLowerCase().includes(q))
              );
            })),
            x !== "N" && (I = I.filter((D) => D.DRUGKIND === x)),
            S(I);
        } catch (q) {
          console.error("Search failed:", q), S([]);
        } finally {
          V(!1);
        }
      },
      he = (q, I) => {
        console.log("📸 掃描成功，藥品資料:", I), C(!1), Ge(I);
      },
      Ge = async (q) => {
        if (n)
          try {
            console.log("🚀 開始更新藥盒藥品代碼:", q.CODE);
            const I = await De.updateEpd266Medcode(
              n.serverName || "",
              n.serverType || "",
              q.CODE,
              n.storage || {}
            );
            I.Code === 200
              ? (console.log("✅ 藥品代碼更新成功:", I.Data),
                (n.storage = I.Data),
                (n.med_info = [
                  { name: q.NAME, cht_name: q.CHT_NAME, code: q.CODE },
                ]),
                a("藥品更新成功", "success"),
                i())
              : (console.error("❌ 藥品代碼更新失敗:", I),
                a(`藥品更新失敗：${I.Result || "未知錯誤"}`, "error"));
          } catch (I) {
            console.error("💥 藥品代碼更新發生錯誤:", I),
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
              onClick: z,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (q) => q.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(Tn, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: g(
                            c === "add"
                              ? "modal.addMedBox"
                              : "modal.medBoxSettings"
                          ),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: z,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ke, { className: "w-6 h-6" }),
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
                              children: g("form.ipAddress"),
                            }),
                            r.jsx("div", {
                              className: "flex items-center",
                              children: r.jsx("input", {
                                type: "text",
                                onChange: (q) => _(q.target.value),
                                placeholder:
                                  (n == null ? void 0 : n.ip) ||
                                  (n == null ? void 0 : n.name) ||
                                  g("placeholder.ipAddress"),
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
                                children: g("form.medBoxType"),
                              }),
                              r.jsx("div", {
                                className: "flex gap-4 justify-between",
                                children: an.map((q, I) =>
                                  r.jsxs(
                                    "label",
                                    {
                                      className: `flex items-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                        m === I
                                          ? "border-blue-500 bg-blue-50"
                                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                      }`,
                                      children: [
                                        r.jsx("input", {
                                          type: "radio",
                                          name: "boxType",
                                          value: I,
                                          checked: m === I,
                                          onChange: () => $(I),
                                          className:
                                            "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                        }),
                                        r.jsx("div", {
                                          children: r.jsx("div", {
                                            className:
                                              "text-sm font-medium text-gray-900",
                                            children: q.name,
                                          }),
                                        }),
                                      ],
                                    },
                                    I
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
                                children: g("form.widthSelection"),
                              }),
                              an.map((q, I) =>
                                r.jsx(
                                  "div",
                                  {
                                    className: `flex gap-4 ${
                                      m === I ? "block" : "hidden"
                                    }`,
                                    children: q.width.map((D, ee) =>
                                      r.jsxs(
                                        "label",
                                        {
                                          className: `flex items-center justify-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                            m === I && (j[I] || 0) === ee
                                              ? "border-green-500 bg-green-50"
                                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                          }`,
                                          children: [
                                            r.jsx("input", {
                                              type: "radio",
                                              name: `width-${I}`,
                                              value: ee,
                                              checked:
                                                m === I && (j[I] || 0) === ee,
                                              onChange: () => me(I, ee),
                                              className:
                                                "w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500 hidden",
                                            }),
                                            r.jsx("div", {
                                              className: "text-center",
                                              children: r.jsxs("div", {
                                                className:
                                                  "text-sm font-semibold text-gray-900",
                                                children: [D, " ", q.unit],
                                              }),
                                            }),
                                          ],
                                        },
                                        `${I}-${ee}`
                                      )
                                    ),
                                  },
                                  I
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
                                  children: g("form.drugInfo"),
                                }),
                                r.jsx("div", {
                                  children:
                                    n != null &&
                                    n.med_info &&
                                    n.med_info.length > 0
                                      ? r.jsx("div", {
                                          children: n.med_info.map((q, I) =>
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
                                                          g("form.drugCode"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          q.code ||
                                                          g("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    children: [
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-sm font-medium text-gray-600",
                                                        children: [
                                                          g("form.drugName"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          q.name ||
                                                          g("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    children: [
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-sm font-medium text-gray-600",
                                                        children: [
                                                          g("form.chineseName"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          q.cht_name ||
                                                          g("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              I
                                            )
                                          ),
                                        })
                                      : r.jsx("div", {
                                          className:
                                            "bg-gray-50 border border-gray-200 rounded-lg py-8 px-4 text-center space-y-4",
                                          children: r.jsx("div", {
                                            className:
                                              "text-gray-500 text-base",
                                            children: g("status.noDrugData"),
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
                                  children: g("form.drugInfo"),
                                }),
                                r.jsx("div", {
                                  className:
                                    "bg-gray-50 border border-gray-200 rounded-lg py-2 px-4 min-h-[262px] max-h-[262px]",
                                  children: r.jsx("div", {
                                    className: "text-center py-8 space-y-4",
                                    children: r.jsx("div", {
                                      className: "text-gray-500 text-base",
                                      children: g("status.newMedBoxNoDrug"),
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
                                    children: g("form.drugSearch"),
                                  }),
                                  r.jsx("button", {
                                    onClick: () => C(!0),
                                    className:
                                      "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                    title: "掃描條碼",
                                    children: r.jsx(Lr, {
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
                                    value: u,
                                    onChange: (q) => d(q.target.value),
                                    placeholder: g("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  r.jsxs("select", {
                                    value: x,
                                    onChange: (q) => v(q.target.value),
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
                                    onClick: Ie,
                                    disabled: R,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      R &&
                                        r.jsx(Ot, {
                                          className: "w-4 h-4 animate-spin",
                                        }),
                                      g("button.search"),
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
                                        r.jsx(Ot, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        g("status.searching"),
                                      ],
                                    })
                                  : T.length > 0
                                  ? r.jsx("div", {
                                      className: "space-y-1",
                                      children: T.map((q, I) =>
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
                                                    children: q.NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: q.CHT_NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: q.CODE,
                                                  }),
                                                ],
                                              }),
                                              r.jsx("button", {
                                                onClick: () => Ge(q),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: g("button.add"),
                                                children: r.jsx(Tt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          q.GUID || I
                                        )
                                      ),
                                    })
                                  : r.jsx("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: g(
                                        u || x !== "N"
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
                      onClick: z,
                      disabled: P || F,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: g("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: fe,
                      disabled: P || F,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        (P || F) &&
                          r.jsx(Ot, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", {
                          children: P
                            ? "新增中..."
                            : F
                            ? "更新中..."
                            : g(c === "add" ? "button.add" : "button.save"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            r.jsx(rl, {
              isOpen: U,
              onClose: () => C(!1),
              onScanSuccess: he,
              mode: "set_med_box_med_mode",
            }),
          ],
        });
  },
  Rh = () => {
    const {
        listDrawModalOpen: e,
        closeListDrawModal: t,
        selectedListDraw: n,
        triggerRefresh: s,
      } = lt(),
      { t: o } = Mt(),
      [l, a] = f.useState(""),
      [i, c] = f.useState([]),
      [h, g] = f.useState(""),
      [m, p] = f.useState("N"),
      [j, b] = f.useState([]),
      [k, _] = f.useState(!1);
    f.useEffect(() => {
      n && e && (a(n.name || ""), c(n.med_info || []));
    }, [n, e]);
    const u = (S) => {
        c((R) => R.filter((V) => V.code !== S));
      },
      d = async () => {
        _(!0);
        try {
          const S = await De.searchMedicine(h, m);
          b(S);
        } catch (S) {
          console.error("Search failed:", S), b([]);
        } finally {
          _(!1);
        }
      },
      x = (S) => {
        const R = {
          id: S.GUID || `${Date.now()}_${Math.random()}`,
          name: S.NAME,
          cht_name: S.CHT_NAME,
          code: S.CODE,
        };
        c((V) => (V.some((A) => A.code === R.code) ? V : [...V, R]));
      },
      v = () => {
        n && ((n.name = l), (n.med_info = i), s(), t());
      },
      T = () => {
        t();
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: T,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (S) => S.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(Tn, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: o("modal.listDrawSettings"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: T,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ke, { className: "w-6 h-6" }),
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
                            onChange: (S) => a(S.target.value),
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
                                    children: i.map((S) =>
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
                                                    S.code &&
                                                      r.jsx("div", {
                                                        children: r.jsx("div", {
                                                          className:
                                                            "text-sm text-gray-900 font-mono",
                                                          children: S.code,
                                                        }),
                                                      }),
                                                    r.jsx("div", {
                                                      children: r.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900 font-medium",
                                                        children:
                                                          S.name ||
                                                          o("status.notSet"),
                                                      }),
                                                    }),
                                                    r.jsx("div", {
                                                      children: r.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900",
                                                        children:
                                                          S.cht_name ||
                                                          o("status.notSet"),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              r.jsx("button", {
                                                onClick: () => u(S.code),
                                                className:
                                                  "ml-3 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0",
                                                title: o("button.remove"),
                                                children: r.jsx(Ke, {
                                                  className: "w-5 h-5",
                                                }),
                                              }),
                                            ],
                                          }),
                                        },
                                        S.id
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
                                    value: h,
                                    onChange: (S) => g(S.target.value),
                                    placeholder: o("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  r.jsxs("select", {
                                    value: m,
                                    onChange: (S) => p(S.target.value),
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
                                    onClick: d,
                                    disabled: k,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      k &&
                                        r.jsx(Ot, {
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
                                children: k
                                  ? r.jsxs("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: [
                                        r.jsx(Ot, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        o("status.searching"),
                                      ],
                                    })
                                  : j.length > 0
                                  ? r.jsx("div", {
                                      className: "space-y-1",
                                      children: j.map((S, R) =>
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
                                                    children: S.NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: S.CHT_NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: S.CODE,
                                                  }),
                                                ],
                                              }),
                                              r.jsx("button", {
                                                onClick: () => x(S),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: o("button.add"),
                                                children: r.jsx(Tt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          S.GUID || R
                                        )
                                      ),
                                    })
                                  : r.jsx("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: o(
                                        h || m !== "N"
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
                      onClick: T,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: o("button.cancel"),
                    }),
                    r.jsx("button", {
                      onClick: v,
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
  $h = () => {
    const {
        gridDrawModalOpen: e,
        closeGridDrawModal: t,
        selectedGridDraw: n,
        triggerRefresh: s,
        apiDepartmentData: o,
        setApiDepartmentData: l,
        showNotification: a,
        medicineList: i,
      } = lt(),
      { t: c } = Mt(),
      [h, g] = f.useState(""),
      [m, p] = f.useState(null),
      [j, b] = f.useState(!1),
      [k, _] = f.useState(!1),
      [u, d] = f.useState(null),
      [x, v] = f.useState(""),
      [T, S] = f.useState("N"),
      [R, V] = f.useState([]),
      [P, A] = f.useState(!1),
      [oe, ue] = f.useState(0),
      [M, N] = f.useState({ x: 0, y: 0 });
    f.useEffect(() => {
      if (n && e)
        if ((g(n.name || ""), n.drawer)) {
          if (!j) {
            console.log("🔄 備份原始 drawer 資料:", n);
            const L = JSON.parse(JSON.stringify(n.drawer));
            p(L), b(!0), console.log("✅ 備份完成，備份資料:", L);
          }
        } else console.log("⚠️ 沒有 drawer 資料可備份"), p(null), b(!1);
    }, [n, e, j]),
      f.useEffect(() => {
        e || (b(!1), p(null), d(null));
      }, [e]);
    const F = () => {
        n && D();
      },
      w = () => {
        if (
          (console.log("🔄 開始恢復原始資料..."),
          console.log("原始備份資料:", m),
          console.log("當前 selectedGridDraw:", n),
          n && m && j)
        ) {
          console.log("📦 恢復 drawer 資料...");
          const L = JSON.parse(JSON.stringify(m));
          if (((n.drawer = L), o)) {
            const se = (ve) => {
                ve.forEach((ye) => {
                  ye.GUID === n.GUID &&
                    (console.log("🎯 找到目標格線抽屜，更新資料"),
                    (ye.drawer = L)),
                    ye.contents &&
                      Array.isArray(ye.contents) &&
                      se(ye.contents),
                    ye.components &&
                      Array.isArray(ye.components) &&
                      se(ye.components);
                });
              },
              le = JSON.parse(JSON.stringify(o));
            se(le), l(le), console.log("🔄 已更新全域資料狀態");
          }
          console.log("✅ 資料已恢復:", n.drawer);
        } else
          console.log(
            "⚠️ 無法恢復資料 - selectedGridDraw、originalDrawerData 或 hasBackup 為空"
          ),
            console.log("selectedGridDraw:", !!n),
            console.log("originalDrawerData:", !!m),
            console.log("hasBackup:", j);
        d(null), b(!1), p(null), s(), t();
      },
      U = (L, se) => {
        if (!u) return !1;
        const le = Math.min(u.startRow, u.endRow),
          ve = Math.max(u.startRow, u.endRow),
          ye = Math.min(u.startCol, u.endCol),
          be = Math.max(u.startCol, u.endCol);
        return L >= le && L <= ve && se >= ye && se <= be;
      },
      C = (L) => {
        var te;
        if (
          !((te = n == null ? void 0 : n.drawer) != null && te.Boxes) ||
          L.Slave
        )
          return { width: 1, height: 1 };
        const le = n.drawer.Boxes.flat().filter(
          (G) =>
            G.Slave &&
            G.MasterBox_Row === L.Row &&
            G.MasterBox_Column === L.Column
        );
        if (le.length === 0) return { width: 1, height: 1 };
        const ve = [L, ...le],
          ye = Math.min(...ve.map((G) => G.Row)),
          be = Math.max(...ve.map((G) => G.Row)),
          Se = Math.min(...ve.map((G) => G.Column));
        return {
          width: Math.max(...ve.map((G) => G.Column)) - Se + 1,
          height: be - ye + 1,
        };
      },
      J = () => {
        var Se;
        if (!u || !((Se = n == null ? void 0 : n.drawer) != null && Se.Boxes))
          return [];
        const L = n.drawer.Boxes.flat(),
          se = Math.min(u.startRow, u.endRow),
          le = Math.max(u.startRow, u.endRow),
          ve = Math.min(u.startCol, u.endCol),
          ye = Math.max(u.startCol, u.endCol),
          be = [];
        return (
          L.forEach((O) => {
            if (!O.Slave) {
              const te = C(O),
                G = O.Row + te.height - 1,
                K = O.Column + te.width - 1;
              O.Row >= se && G <= le && O.Column >= ve && K <= ye && be.push(O);
            }
          }),
          be
        );
      },
      E = (L, se, le, ve) => {
        var K;
        if (!u || !((K = n == null ? void 0 : n.drawer) != null && K.Boxes))
          return !1;
        const ye = n.drawer.Boxes.flat();
        let be = !0,
          Se = L,
          O = se,
          te = le,
          G = ve;
        for (; be; )
          (be = !1),
            ye.forEach((ae) => {
              if (!ae.Slave) {
                const xe = C(ae),
                  Le = ae.Row + xe.height - 1,
                  Me = ae.Column + xe.width - 1;
                !(ae.Row > O || Le < Se || ae.Column > G || Me < te) &&
                  (ae.Row < Se && ((Se = ae.Row), (be = !0)),
                  Le > O && ((O = Le), (be = !0)),
                  ae.Column < te && ((te = ae.Column), (be = !0)),
                  Me > G && ((G = Me), (be = !0)));
              }
            });
        return { minRow: Se, maxRow: O, minCol: te, maxCol: G };
      },
      H = () => {
        var be;
        if (!u || !((be = n == null ? void 0 : n.drawer) != null && be.Boxes))
          return !1;
        const L = Math.min(u.startRow, u.endRow),
          se = Math.max(u.startRow, u.endRow),
          le = Math.min(u.startCol, u.endCol),
          ve = Math.max(u.startCol, u.endCol),
          ye = n.drawer.Boxes.flat();
        for (let Se = L; Se <= se; Se++)
          for (let O = le; O <= ve; O++) {
            let te = !1;
            for (const G of ye)
              if (!G.Slave) {
                const K = C(G),
                  ae = G.Row + K.height - 1,
                  xe = G.Column + K.width - 1;
                if (Se >= G.Row && Se <= ae && O >= G.Column && O <= xe) {
                  te = !0;
                  break;
                }
              }
            if (!te) return !1;
          }
        return !0;
      },
      $ = () => {
        var K, ae;
        const L = J();
        if (!u) return { canMerge: !1, canUnmerge: !1 };
        if (L.length === 0) return { canMerge: !1, canUnmerge: !1 };
        const se =
            ((ae =
              (K = n == null ? void 0 : n.drawer) == null ? void 0 : K.Boxes) ==
            null
              ? void 0
              : ae.flat()) || [],
          le = L.some(
            (xe) =>
              se.filter(
                (Me) =>
                  Me.Slave &&
                  Me.MasterBox_Row === xe.Row &&
                  Me.MasterBox_Column === xe.Column
              ).length > 0
          ),
          ve = Math.min(u.startRow, u.endRow),
          ye = Math.max(u.startRow, u.endRow),
          be = Math.min(u.startCol, u.endCol),
          Se = Math.max(u.startCol, u.endCol),
          O = se.some(
            (xe) =>
              xe.Slave &&
              xe.Row >= ve &&
              xe.Row <= ye &&
              xe.Column >= be &&
              xe.Column <= Se
          );
        return { canMerge: L.length > 1 && H(), canUnmerge: le || O };
      },
      { canMerge: me, canUnmerge: fe } = $(),
      z = async () => {
        A(!0);
        try {
          const L = x.toLowerCase().trim();
          let se = i;
          L &&
            (se = se.filter((le) => {
              var ve, ye, be;
              return (
                ((ve = le.CODE) == null
                  ? void 0
                  : ve.toLowerCase().includes(L)) ||
                ((ye = le.NAME) == null
                  ? void 0
                  : ye.toLowerCase().includes(L)) ||
                ((be = le.CHT_NAME) == null
                  ? void 0
                  : be.toLowerCase().includes(L))
              );
            })),
            T !== "N" && (se = se.filter((le) => le.DRUGKIND === T)),
            V(se);
        } catch (L) {
          console.error("Search failed:", L), V([]);
        } finally {
          A(!1);
        }
      },
      ge = async (L) => {
        var le;
        if (!u || !((le = n == null ? void 0 : n.drawer) != null && le.Boxes))
          return;
        const se = J();
        if (se.length !== 0)
          try {
            const ve = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [`guid=${se[0].GUID}`, `code=${L.CODE}`],
              Data: n.drawer,
            };
            console.log("🚀 發送更新藥品 API 請求:", ve);
            const ye = await De.request("/api/device/update_drawer_medcode", {
              method: "POST",
              body: JSON.stringify(ve),
            });
            if (
              (console.log("📡 更新藥品 API 回應:", ye),
              ye.Code === 200 && ye.Data)
            ) {
              if (
                ((n.drawer = ye.Data),
                ye.Data.Boxes && (n.Boxes = ye.Data.Boxes),
                console.log("✅ 藥品資料更新成功"),
                o)
              ) {
                const be = (O) => {
                    O.forEach((te) => {
                      te.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (te.drawer = n.drawer),
                        n.Boxes && (te.Boxes = n.Boxes)),
                        te.contents &&
                          Array.isArray(te.contents) &&
                          be(te.contents),
                        te.components &&
                          Array.isArray(te.components) &&
                          be(te.components);
                    });
                  },
                  Se = JSON.parse(JSON.stringify(o));
                be(Se), l(Se);
              }
              d(null), s();
            } else
              console.error("❌ 藥品更新失敗:", ye),
                a(`藥品更新失敗：${ye.Result || "未知錯誤"}`, "error");
          } catch (ve) {
            console.error("💥 藥品更新 API 調用失敗:", ve),
              a("藥品更新失敗：網路錯誤", "error");
          }
      },
      ne = (L, se, le) => {
        le.preventDefault(),
          le.stopPropagation(),
          "touches" in le &&
            (ue(Date.now()),
            N({ x: le.touches[0].clientX, y: le.touches[0].clientY })),
          _(!0),
          d({ startRow: L, startCol: se, endRow: L, endCol: se });
      },
      je = (L, se) => {
        if (!k || !u) return;
        const le = Math.min(u.startRow, L),
          ve = Math.max(u.startRow, L),
          ye = Math.min(u.startCol, se),
          be = Math.max(u.startCol, se),
          Se = E(le, ve, ye, be);
        Se &&
          d((O) =>
            O
              ? {
                  startRow: O.startRow,
                  startCol: O.startCol,
                  endRow: L >= O.startRow ? Se.maxRow : Se.minRow,
                  endCol: se >= O.startCol ? Se.maxCol : Se.minCol,
                }
              : null
          );
      },
      Ie = () => {
        if (k && (_(!1), u && n != null && n.Boxes)) {
          const L = Math.min(u.startRow, u.endRow),
            se = Math.max(u.startRow, u.endRow),
            le = Math.min(u.startCol, u.endCol),
            ve = Math.max(u.startCol, u.endCol),
            ye = E(L, se, le, ve);
          ye &&
            d({
              startRow: ye.minRow,
              startCol: ye.minCol,
              endRow: ye.maxRow,
              endCol: ye.maxCol,
            });
        }
      },
      he = () => {
        var L;
        !me ||
          !((L = n == null ? void 0 : n.drawer) != null && L.Boxes) ||
          !u ||
          I();
      },
      Ge = () => {
        var L;
        !fe ||
          !((L = n == null ? void 0 : n.drawer) != null && L.Boxes) ||
          !u ||
          (console.log(u), q());
      },
      q = async () => {
        var L;
        if (!(!u || !((L = n == null ? void 0 : n.drawer) != null && L.Boxes)))
          try {
            const se = Math.min(u.startRow, u.endRow),
              le = Math.max(u.startRow, u.endRow),
              ve = Math.min(u.startCol, u.endCol),
              ye = Math.max(u.startCol, u.endCol),
              Se = n.drawer.Boxes.flat().filter(
                (ae) =>
                  ae.Row >= se &&
                  ae.Row <= le &&
                  ae.Column >= ve &&
                  ae.Column <= ye
              ),
              O = [],
              te = [];
            Se.forEach((ae) => {
              O.push(ae.Column.toString()), te.push(ae.Row.toString());
            });
            const G = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${O.join(",")}`,
                `SelectRows=${te.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", G);
            const K = await De.request("/api/device/separate_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(G),
            });
            if ((console.log("📡 API 回應:", K), K.Code === 200 && K.Data)) {
              if (
                K.Data.Boxes &&
                Array.isArray(K.Data.Boxes) &&
                ((n.Boxes = K.Data.Boxes),
                (n.drawer = K.Data),
                console.log("✅ 資料已更新"),
                o)
              ) {
                const ae = (Le) => {
                    Le.forEach((Me) => {
                      Me.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (Me.drawer = n.drawer)),
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
            } else
              console.error("❌ API 回應錯誤:", K),
                a(`取消合併失敗：${K.Result || "未知錯誤"}`, "error");
          } catch (se) {
            console.error("💥 API 調用失敗:", se),
              a("取消合併失敗：網路錯誤", "error");
          } finally {
            console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              d(null),
              s();
          }
      },
      I = async () => {
        var L;
        if (!(!u || !((L = n == null ? void 0 : n.drawer) != null && L.Boxes)))
          try {
            const se = Math.min(u.startRow, u.endRow),
              le = Math.max(u.startRow, u.endRow),
              ve = Math.min(u.startCol, u.endCol),
              ye = Math.max(u.startCol, u.endCol),
              Se = n.drawer.Boxes.flat().filter(
                (ae) =>
                  ae.Row >= se &&
                  ae.Row <= le &&
                  ae.Column >= ve &&
                  ae.Column <= ye
              ),
              O = [],
              te = [];
            Se.forEach((ae) => {
              O.push(ae.Column.toString()), te.push(ae.Row.toString());
            });
            const G = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${O.join(",")}`,
                `SelectRows=${te.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", G);
            const K = await De.request("/api/device/combine_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(G),
            });
            if ((console.log("📡 API 回應:", K), K.Code === 200 && K.Data)) {
              if (
                K.Data.Boxes &&
                Array.isArray(K.Data.Boxes) &&
                ((n.Boxes = K.Data.Boxes),
                (n.drawer = K.Data),
                console.log("✅ 資料已更新"),
                o)
              ) {
                const ae = (Le) => {
                    Le.forEach((Me) => {
                      Me.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (Me.drawer = n.drawer)),
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
            } else
              console.error("❌ API 回應錯誤:", K),
                a(`取消合併失敗：${K.Result || "未知錯誤"}`, "error");
          } catch (se) {
            console.error("💥 API 調用失敗:", se),
              a("取消合併失敗：網路錯誤", "error");
          } finally {
            console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              d(null),
              s();
          }
      },
      D = async () => {
        if (n)
          try {
            n.name = h;
            const L = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              Data: [n.drawer],
            };
            console.log("🚀 發送確認更新 API 請求:", L);
            const se = await De.request("/api/device/update_epd583_drawers", {
              method: "POST",
              body: JSON.stringify(L),
            });
            if ((console.log("📡 確認更新 API 回應:", se), se.Code === 200)) {
              if (
                (console.log("✅ 抽屜資料更新成功"),
                a("抽屜資料更新成功", "success"),
                o)
              ) {
                const le = (ye) => {
                    ye.forEach((be) => {
                      be.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新名稱"),
                        (be.name = n.name)),
                        be.contents &&
                          Array.isArray(be.contents) &&
                          le(be.contents),
                        be.components &&
                          Array.isArray(be.components) &&
                          le(be.components);
                    });
                  },
                  ve = JSON.parse(JSON.stringify(o));
                le(ve), l(ve);
              }
              b(!1), p(null), s(), t();
            } else
              console.error("❌ 抽屜資料更新失敗:", se),
                a(`抽屜資料更新失敗：${se.Result || "未知錯誤"}`, "error");
          } catch (L) {
            console.error("💥 抽屜資料更新 API 調用失敗:", L),
              a("抽屜資料更新失敗：網路錯誤", "error");
          }
      },
      ee = () => {
        var te;
        if (
          !((te = n == null ? void 0 : n.drawer) != null && te.Boxes) ||
          n.drawer.Boxes.length === 0
        )
          return r.jsx("div", {
            className:
              "bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg py-12",
            children: r.jsxs("div", {
              className: "text-center",
              children: [
                r.jsx(rf, {
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
        const L = n.drawer.Boxes.flat(),
          se = (G) => {
            if (G.Slave) return { width: 1, height: 1 };
            const K = L.filter(
              (Ve) =>
                Ve.Slave &&
                Ve.MasterBox_Row === G.Row &&
                Ve.MasterBox_Column === G.Column
            );
            if (K.length === 0) return { width: 1, height: 1 };
            const ae = [G, ...K],
              xe = Math.min(...ae.map((Ve) => Ve.Row)),
              Le = Math.max(...ae.map((Ve) => Ve.Row)),
              Me = Math.min(...ae.map((Ve) => Ve.Column));
            return {
              width: Math.max(...ae.map((Ve) => Ve.Column)) - Me + 1,
              height: Le - xe + 1,
            };
          },
          le = Math.max(...L.map((G) => G.Row + 1 - 1)),
          ve = Math.max(...L.map((G) => G.Column + 1 - 1)),
          ye = le + 1,
          be = ve + 1,
          Se = Array(ye)
            .fill(null)
            .map(() => Array(be).fill(!1)),
          O = {};
        return (
          L.forEach((G) => {
            if (!G.Slave) {
              const K = se(G);
              (O[`${G.Row},${G.Column}`] = G),
                (G.calculatedWidth = K.width),
                (G.calculatedHeight = K.height);
            }
          }),
          L.forEach((G) => {
            if (!G.Slave && (G.calculatedWidth > 1 || G.calculatedHeight > 1))
              for (let K = G.Row; K < G.Row + G.calculatedHeight; K++)
                for (let ae = G.Column; ae < G.Column + G.calculatedWidth; ae++)
                  (K !== G.Row || ae !== G.Column) && (Se[K][ae] = !0);
          }),
          r.jsx("div", {
            className: "rounded-lg",
            children: r.jsx("table", {
              className: "w-full",
              children: r.jsx("tbody", {
                children: Array.from({ length: ye }, (G, K) =>
                  r.jsx(
                    "tr",
                    {
                      children: Array.from({ length: be }, (ae, xe) => {
                        if (Se[K][xe]) return null;
                        const Le = `${K},${xe}`,
                          Me = O[Le];
                        return Me
                          ? r.jsx(
                              "td",
                              {
                                className: `border border-gray-400 pt-1 pl-1 align-top cursor-pointer select-none ${
                                  U(K, xe)
                                    ? "bg-blue-200"
                                    : "bg-white hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / be}%`,
                                  minHeight: "40px",
                                  height: `${50 * Me.calculatedHeight}px`,
                                  maxHeight: `${50 * Me.calculatedHeight}px`,
                                },
                                colSpan: Me.calculatedWidth,
                                rowSpan: Me.calculatedHeight,
                                onMouseDown: (We) => ne(K, xe, We),
                                onMouseEnter: () => je(K, xe),
                                onMouseUp: Ie,
                                onTouchStart: (We) => ne(K, xe, We),
                                onTouchMove: (We) => {
                                  if ((We.preventDefault(), !k)) return;
                                  const Ve = We.touches[0],
                                    ht = document.elementFromPoint(
                                      Ve.clientX,
                                      Ve.clientY
                                    ),
                                    St = ht == null ? void 0 : ht.closest("td");
                                  if (St) {
                                    const Qt = parseInt(
                                        St.getAttribute("data-row") || "0"
                                      ),
                                      Kt = parseInt(
                                        St.getAttribute("data-col") || "0"
                                      );
                                    je(Qt, Kt);
                                  }
                                },
                                onTouchEnd: Ie,
                                "data-row": K,
                                "data-col": xe,
                                children: r.jsx("div", {
                                  className: "h-full flex flex-col",
                                  children:
                                    Me.Code || Me.Name || Me.ChineseName
                                      ? r.jsxs(r.Fragment, {
                                          children: [
                                            Me.Code &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs font-mono text-gray-600",
                                                children: Me.Code,
                                              }),
                                            Me.Name &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs font-medium text-gray-900",
                                                children: Me.Name,
                                              }),
                                            Me.ChineseName &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs text-gray-700",
                                                children: Me.ChineseName,
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
                              xe
                            )
                          : r.jsx(
                              "td",
                              {
                                className: `border border-gray-300 p-2 align-top cursor-pointer select-none ${
                                  U(K, xe)
                                    ? "border-1 border-blue-500 bg-blue-100"
                                    : "bg-gray-50 hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / be}%`,
                                  minWidth: "80px",
                                  minHeight: "80px",
                                },
                                onMouseDown: (We) => ne(K, xe, We),
                                onMouseEnter: () => je(K, xe),
                                onMouseUp: Ie,
                                onTouchStart: (We) => ne(K, xe, We),
                                onTouchMove: (We) => {
                                  if ((We.preventDefault(), !k)) return;
                                  const Ve = We.touches[0],
                                    ht = document.elementFromPoint(
                                      Ve.clientX,
                                      Ve.clientY
                                    ),
                                    St = ht == null ? void 0 : ht.closest("td");
                                  if (St) {
                                    const Qt = parseInt(
                                        St.getAttribute("data-row") || "0"
                                      ),
                                      Kt = parseInt(
                                        St.getAttribute("data-col") || "0"
                                      );
                                    je(Qt, Kt);
                                  }
                                },
                                onTouchEnd: Ie,
                                "data-row": K,
                                "data-col": xe,
                                children: r.jsx("div", {
                                  className:
                                    "h-full flex items-center justify-center text-gray-400 text-xs",
                                  children: c("status.notAdded"),
                                }),
                              },
                              xe
                            );
                      }),
                    },
                    K
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
              onClick: w,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (L) => L.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(Tn, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: c("modal.gridDrawSettings"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: w,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ke, { className: "w-6 h-6" }),
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
                              value: h,
                              onChange: (L) => g(L.target.value),
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
                          children: ee(),
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
                                onClick: he,
                                disabled: !me,
                                className: `px-4 py-2 rounded transition-colors ${
                                  me
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`,
                                children: c("button.merge"),
                              }),
                              r.jsx("button", {
                                onClick: Ge,
                                disabled: !fe,
                                className: `px-4 py-2 rounded transition-colors ${
                                  fe
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
                            const L = J(),
                              se = L.find((le) => !le.Slave);
                            return se && (se.Code || se.Name || se.ChineseName)
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
                                          children: se.Code || "-",
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
                                          children: se.Name || "-",
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
                                          children: se.ChineseName || "-",
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
                                      u && L.length > 0
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
                                  onChange: (L) => v(L.target.value),
                                  placeholder: c("placeholder.drugSearch"),
                                  className:
                                    "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                }),
                                r.jsxs("select", {
                                  value: T,
                                  onChange: (L) => S(L.target.value),
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
                                  onClick: z,
                                  disabled: P,
                                  className:
                                    "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                  children: [
                                    P &&
                                      r.jsx(Ot, {
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
                              children: P
                                ? r.jsxs("div", {
                                    className:
                                      "text-gray-500 text-center flex items-center justify-center h-full",
                                    children: [
                                      r.jsx(Ot, {
                                        className: "w-5 h-5 animate-spin mr-2",
                                      }),
                                      c("status.searching"),
                                    ],
                                  })
                                : R.length > 0
                                ? r.jsx("div", {
                                    className: "space-y-1",
                                    children: R.map((L, se) =>
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
                                                  children: L.NAME,
                                                }),
                                                r.jsx("div", {
                                                  className:
                                                    "text-xs text-gray-500 truncate",
                                                  children: L.CHT_NAME,
                                                }),
                                                r.jsx("div", {
                                                  className:
                                                    "text-xs text-gray-400 font-mono",
                                                  children: L.CODE,
                                                }),
                                              ],
                                            }),
                                            r.jsx("button", {
                                              onClick: () => ge(L),
                                              className:
                                                "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                              title: c("button.add"),
                                              children: r.jsx(Tt, {
                                                className: "w-4 h-4",
                                              }),
                                            }),
                                          ],
                                        },
                                        L.GUID || se
                                      )
                                    ),
                                  })
                                : r.jsx("div", {
                                    className:
                                      "text-gray-500 text-center flex items-center justify-center h-full",
                                    children: c(
                                      x || T !== "N"
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
                          onClick: w,
                          className:
                            "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                          children: c("button.cancel"),
                        }),
                        r.jsx("button", {
                          onClick: F,
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
                  onMouseUp: Ie,
                  onMouseLeave: Ie,
                  onTouchEnd: Ie,
                  onTouchCancel: Ie,
                }),
              ],
            }),
          ],
        });
  },
  Ah = () => {
    var V;
    const {
        addParentContainerModalOpen: e,
        closeAddParentContainerModal: t,
        selectedDepartmentForAdd: n,
        showNotification: s,
        setSidebarOpen: o,
        addParentContainerToLocalData: l,
      } = lt(),
      { t: a } = Mt(),
      [i, c] = f.useState(null),
      [h, g] = f.useState(0),
      [m, p] = f.useState(0),
      [j, b] = f.useState(!1);
    f.useEffect(() => {
      e && (c(null), g(0), p(0), b(!1));
    }, [e]),
      f.useEffect(() => {
        i && (g(i.row), p(i.col));
      }, [i]);
    const k = () => {
        const P = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((A) => {
              A.type === "parent_container" &&
                A.gird_position &&
                P.add(A.gird_position);
            }),
          P
        );
      },
      _ = () => {
        const P = k(),
          A = [];
        if (P.size === 0) return A.push({ row: 0, col: 0 }), A;
        const oe = [];
        P.forEach((M) => {
          const [N, F] = M.split(",").map(Number);
          oe.push({ row: N, col: F });
        });
        const ue = new Set();
        return (
          oe.forEach(({ row: M, col: N }) => {
            ue.add(`${M},${N + 1}`),
              ue.add(`${M + 1},${N}`),
              N > 0 && ue.add(`${M},${N - 1}`),
              M > 0 && ue.add(`${M - 1},${N}`);
          }),
          ue.forEach((M) => {
            if (!P.has(M)) {
              const [N, F] = M.split(",").map(Number);
              N >= 0 && F >= 0 && A.push({ row: N, col: F });
            }
          }),
          P.has("0,1") ||
            A.some((N) => N.row === 0 && N.col === 1) ||
            A.push({ row: 0, col: 1 }),
          P.has("1,0") ||
            A.some((N) => N.row === 1 && N.col === 0) ||
            A.push({ row: 1, col: 0 }),
          A.sort((M, N) => (M.row === N.row ? M.col - N.col : M.row - N.row))
        );
      },
      u = (P) => {
        c(P);
      },
      d = (P) => {
        g(P), c({ row: P, col: m });
      },
      x = (P) => {
        p(P), c({ row: h, col: P });
      },
      v = i && !k().has(`${i.row},${i.col}`) && i.row >= 0 && i.col >= 0,
      T = async () => {
        if (!(!i || !n || !v)) {
          b(!0);
          try {
            const P = `${i.row},${i.col}`;
            console.log(n);
            const A = await De.addMedMapSection(n.GUID, P, n.name, n.type);
            if (A.Code === 200) {
              const oe = {
                GUID: A.Data.GUID,
                Master_GUID: A.Data.Master_GUID,
                gird_position: A.Data.position,
                name: "",
                type: "parent_container",
                class: 1,
                position: { x: 0, y: 0 },
                serverName: n.name,
                serverType: n.type,
                ip_light: "",
                reverse: "False",
                contents: [],
                med_list: [],
              };
              l(n.GUID, oe), s("新增成功", "success"), t(), o(!1);
            } else s(`新增失敗：${A.Result || "未知錯誤"}`, "error");
          } catch (P) {
            console.error("Add parent container failed:", P),
              s("新增失敗：網路錯誤", "error");
          } finally {
            b(!1);
          }
        }
      },
      S = () => {
        t();
      },
      R = () => {
        const P = k(),
          A = _(),
          oe = [...P]
            .map((C) => {
              const [J, E] = C.split(",").map(Number);
              return { row: J, col: E };
            })
            .concat(A);
        oe.length === 0 && oe.push({ row: 0, col: 0 });
        const ue = Math.max(...oe.map((C) => C.row)),
          M = Math.max(...oe.map((C) => C.col)),
          N = Math.min(...oe.map((C) => C.row)),
          F = Math.min(...oe.map((C) => C.col)),
          w = ue - N + 1,
          U = M - F + 1;
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
                style: { gridTemplateColumns: `repeat(${U}, 1fr)` },
                children: Array.from({ length: w * U }, (C, J) => {
                  const E = Math.floor(J / U) + N,
                    H = (J % U) + F,
                    $ = `${E},${H}`,
                    me = P.has($),
                    fe = A.some((ge) => ge.row === E && ge.col === H),
                    z =
                      (i == null ? void 0 : i.row) === E &&
                      (i == null ? void 0 : i.col) === H;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => fe && u({ row: E, col: H }),
                      disabled: me || !fe,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      me
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : z
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : fe
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: me ? "已占用" : fe ? "可選擇" : "不可用",
                      children: me ? "占用" : `${E},${H}`,
                    },
                    $
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
              onClick: S,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "800px" },
              onClick: (P) => P.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(Tt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增櫃體",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: S,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ke, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      R(),
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
                                    value: h,
                                    onChange: (P) =>
                                      d(parseInt(P.target.value) || 0),
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
                                    value: m,
                                    onChange: (P) =>
                                      x(parseInt(P.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          i &&
                            r.jsx("div", {
                              className: `text-sm p-2 rounded ${
                                v
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: v
                                ? `已選擇位置：${i.row},${i.col}`
                                : `位置 ${i.row},${i.col} 已被占用或無效`,
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
                                  ((V = n == null ? void 0 : n.contents) == null
                                    ? void 0
                                    : V.filter(
                                        (P) => P.type === "parent_container"
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
                      onClick: S,
                      disabled: j,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: a("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: T,
                      disabled: !v || j,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        j && r.jsx(Ot, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: j ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  Oc = [
    {
      value: "dispensing_shelves",
      label: "藥盒層架",
      icon: r.jsx(hh, { className: "w-5 h-5" }),
      isShelf: !0,
    },
    {
      value: "store_shelves",
      label: "藥品層架",
      icon: r.jsx(ah, { className: "w-5 h-5" }),
      isShelf: !0,
    },
    {
      value: "list_draw",
      label: "清單抽屜",
      icon: r.jsx(_a, { className: "w-5 h-5" }),
      isShelf: !1,
    },
    {
      value: "grid_draw",
      label: "格線抽屜",
      icon: r.jsx(rf, { className: "w-5 h-5" }),
      isShelf: !1,
    },
  ],
  Oh = () => {
    var E;
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
      } = lt(),
      { t: h } = Mt(),
      [g, m] = f.useState("dispensing_shelves"),
      [p, j] = f.useState("1"),
      [b, k] = f.useState("1"),
      [_, u] = f.useState(""),
      [d, x] = f.useState(null),
      [v, T] = f.useState(0),
      [S, R] = f.useState(0),
      [V, P] = f.useState(!1);
    f.useEffect(() => {
      e &&
        (m("dispensing_shelves"),
        j("1"),
        k("1"),
        u(""),
        x(null),
        T(0),
        R(0),
        P(!1));
    }, [e]),
      f.useEffect(() => {
        d && (T(d.row), R(d.col));
      }, [d]);
    const A = () => {
        const H = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach(($) => {
              $.gird_position && H.add($.gird_position);
            }),
          H
        );
      },
      oe = () => {
        const H = A(),
          $ = [];
        if (H.size === 0) return $.push({ row: 0, col: 0 }), $;
        const me = [];
        H.forEach((z) => {
          const [ge, ne] = z.split(",").map(Number);
          me.push({ row: ge, col: ne });
        });
        const fe = new Set();
        return (
          me.forEach(({ row: z, col: ge }) => {
            fe.add(`${z},${ge + 1}`),
              fe.add(`${z + 1},${ge}`),
              ge > 0 && fe.add(`${z},${ge - 1}`),
              z > 0 && fe.add(`${z - 1},${ge}`);
          }),
          fe.forEach((z) => {
            if (!H.has(z)) {
              const [ge, ne] = z.split(",").map(Number);
              ge >= 0 && ne >= 0 && $.push({ row: ge, col: ne });
            }
          }),
          H.has("0,1") ||
            $.some((ge) => ge.row === 0 && ge.col === 1) ||
            $.push({ row: 0, col: 1 }),
          H.has("1,0") ||
            $.some((ge) => ge.row === 1 && ge.col === 0) ||
            $.push({ row: 1, col: 0 }),
          $.sort((z, ge) =>
            z.row === ge.row ? z.col - ge.col : z.row - ge.row
          )
        );
      },
      ue = (H) => {
        x(H);
      },
      M = (H) => {
        T(H), x({ row: H, col: S });
      },
      N = (H) => {
        R(H), x({ row: v, col: H });
      },
      F = d && !A().has(`${d.row},${d.col}`) && d.row >= 0 && d.col >= 0,
      w = async () => {
        if (!(!d || !n || !F)) {
          P(!0);
          try {
            const H = `${d.row},${d.col}`,
              $ = Oc.find((fe) => fe.value === g);
            let me;
            $ != null && $.isShelf
              ? (me = await De.addMedMapShelf({
                  Master_GUID: n.GUID,
                  position: H,
                  width: p,
                  height: b,
                  ip_light: _,
                  type: g,
                  serverName: n.name,
                  serverType: n.type,
                }))
              : (me = await De.addMedMapDrawer({
                  Master_GUID: n.GUID,
                  position: H,
                  width: p,
                  height: b,
                  ip_drawer: _,
                  type: g,
                  serverName: n.name,
                  serverType: n.type,
                })),
              me.Code === 200
                ? (a("新增成功", "success"), t(), c(!1), await U())
                : a(`新增失敗：${me.Result || "未知錯誤"}`, "error");
          } catch (H) {
            console.error("Add container failed:", H),
              a("新增失敗：網路錯誤", "error");
          } finally {
            P(!1);
          }
        }
      },
      U = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const H = await De.getMedMapByDepartment(s);
          if (H.Code === 200 && H.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const $ = Pt.convertMedMapApiToFakeData(H.Data);
            if (!Pt.validateConvertedData($)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o($), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", H),
              a("資料更新失敗：API 錯誤", "error");
        } catch (H) {
          console.error("💥 重新獲取藥品地圖資料失敗:", H),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      C = () => {
        t();
      },
      J = () => {
        const H = A(),
          $ = oe(),
          me = [...H]
            .map((he) => {
              const [Ge, q] = he.split(",").map(Number);
              return { row: Ge, col: q };
            })
            .concat($);
        me.length === 0 && me.push({ row: 0, col: 0 });
        const fe = Math.max(...me.map((he) => he.row)),
          z = Math.max(...me.map((he) => he.col)),
          ge = Math.min(...me.map((he) => he.row)),
          ne = Math.min(...me.map((he) => he.col)),
          je = fe - ge + 1,
          Ie = z - ne + 1;
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
                style: { gridTemplateColumns: `repeat(${Ie}, 1fr)` },
                children: Array.from({ length: je * Ie }, (he, Ge) => {
                  const q = Math.floor(Ge / Ie) + ge,
                    I = (Ge % Ie) + ne,
                    D = `${q},${I}`,
                    ee = H.has(D),
                    L = $.some((le) => le.row === q && le.col === I),
                    se =
                      (d == null ? void 0 : d.row) === q &&
                      (d == null ? void 0 : d.col) === I;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => L && ue({ row: q, col: I }),
                      disabled: ee || !L,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      ee
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : se
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : L
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: ee ? "已占用" : L ? "可選擇" : "不可用",
                      children: ee ? "占用" : `${q},${I}`,
                    },
                    D
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
              onClick: C,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "1000px" },
              onClick: (H) => H.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(Tt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增層架/抽屜",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: C,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ke, { className: "w-6 h-6" }),
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
                            children: Oc.map((H) =>
                              r.jsxs(
                                "label",
                                {
                                  className: `flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                    g === H.value
                                      ? "border-blue-500 bg-blue-50"
                                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                  }`,
                                  children: [
                                    r.jsx("input", {
                                      type: "radio",
                                      name: "containerType",
                                      value: H.value,
                                      checked: g === H.value,
                                      onChange: ($) => m($.target.value),
                                      className:
                                        "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                    }),
                                    r.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        H.icon,
                                        r.jsx("span", {
                                          className:
                                            "font-medium text-gray-900",
                                          children: H.label,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                H.value
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
                                value: p,
                                onChange: (H) => j(H.target.value),
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
                                onChange: (H) => k(H.target.value),
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
                            value: _,
                            onChange: (H) => u(H.target.value),
                            placeholder: "請輸入 IP 位址",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                          }),
                        ],
                      }),
                      J(),
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
                                    value: v,
                                    onChange: (H) =>
                                      M(parseInt(H.target.value) || 0),
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
                                    value: S,
                                    onChange: (H) =>
                                      N(parseInt(H.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          d &&
                            r.jsx("div", {
                              className: `text-sm p-2 rounded ${
                                F
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: F
                                ? `已選擇位置：${d.row},${d.col}`
                                : `位置 ${d.row},${d.col} 已被占用或無效`,
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
                                  ((E = n == null ? void 0 : n.contents) == null
                                    ? void 0
                                    : E.length) || 0,
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
                      onClick: C,
                      disabled: V,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: h("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: w,
                      disabled: !F || V,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        V && r.jsx(Ot, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: V ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  Uh = () => {
    var V;
    const {
        addSubContainerModalOpen: e,
        closeAddSubContainerModal: t,
        selectedParentContainerForAdd: n,
        showNotification: s,
        setSidebarOpen: o,
        addSubContainerToLocalData: l,
      } = lt(),
      { t: a } = Mt(),
      [i, c] = f.useState(null),
      [h, g] = f.useState(0),
      [m, p] = f.useState(0),
      [j, b] = f.useState(!1);
    f.useEffect(() => {
      e && (c(null), g(0), p(0), b(!1));
    }, [e]),
      f.useEffect(() => {
        i && (g(i.row), p(i.col));
      }, [i]);
    const k = () => {
        const P = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((A) => {
              A.type === "sub_container" &&
                A.gird_position &&
                P.add(A.gird_position);
            }),
          P
        );
      },
      _ = () => {
        const P = k(),
          A = [];
        if (P.size === 0) return A.push({ row: 0, col: 0 }), A;
        const oe = [];
        P.forEach((M) => {
          const [N, F] = M.split(",").map(Number);
          oe.push({ row: N, col: F });
        });
        const ue = new Set();
        return (
          oe.forEach(({ row: M, col: N }) => {
            ue.add(`${M},${N + 1}`),
              ue.add(`${M + 1},${N}`),
              N > 0 && ue.add(`${M},${N - 1}`),
              M > 0 && ue.add(`${M - 1},${N}`);
          }),
          ue.forEach((M) => {
            if (!P.has(M)) {
              const [N, F] = M.split(",").map(Number);
              N >= 0 && F >= 0 && A.push({ row: N, col: F });
            }
          }),
          P.has("0,1") ||
            A.some((N) => N.row === 0 && N.col === 1) ||
            A.push({ row: 0, col: 1 }),
          P.has("1,0") ||
            A.some((N) => N.row === 1 && N.col === 0) ||
            A.push({ row: 1, col: 0 }),
          A.sort((M, N) => (M.row === N.row ? M.col - N.col : M.row - N.row))
        );
      },
      u = (P) => {
        c(P);
      },
      d = (P) => {
        g(P), c({ row: P, col: m });
      },
      x = (P) => {
        p(P), c({ row: h, col: P });
      },
      v = i && !k().has(`${i.row},${i.col}`) && i.row >= 0 && i.col >= 0,
      T = async () => {
        if (!(!i || !n || !v)) {
          b(!0);
          try {
            const P = `${i.row},${i.col}`,
              A = await De.addSubSection(n.GUID, P);
            if (A.Code === 200) {
              const oe = {
                GUID: A.Data.GUID,
                Master_GUID: A.Data.Master_GUID,
                name: "",
                type: "sub_container",
                class: 2,
                gird_position: A.Data.position,
                contents: [],
                serverName: n.serverName,
                serverType: n.serverType,
                oriMaxCol: 0,
              };
              l(n.GUID, oe), s("新增成功", "success"), t(), o(!1);
            } else s(`新增失敗：${A.Result || "未知錯誤"}`, "error");
          } catch (P) {
            console.error("Add sub container failed:", P),
              s("新增失敗：網路錯誤", "error");
          } finally {
            b(!1);
          }
        }
      },
      S = () => {
        t();
      },
      R = () => {
        const P = k(),
          A = _(),
          oe = [...P]
            .map((C) => {
              const [J, E] = C.split(",").map(Number);
              return { row: J, col: E };
            })
            .concat(A);
        oe.length === 0 && oe.push({ row: 0, col: 0 });
        const ue = Math.max(...oe.map((C) => C.row)),
          M = Math.max(...oe.map((C) => C.col)),
          N = Math.min(...oe.map((C) => C.row)),
          F = Math.min(...oe.map((C) => C.col)),
          w = ue - N + 1,
          U = M - F + 1;
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
                style: { gridTemplateColumns: `repeat(${U}, 1fr)` },
                children: Array.from({ length: w * U }, (C, J) => {
                  const E = Math.floor(J / U) + N,
                    H = (J % U) + F,
                    $ = `${E},${H}`,
                    me = P.has($),
                    fe = A.some((ge) => ge.row === E && ge.col === H),
                    z =
                      (i == null ? void 0 : i.row) === E &&
                      (i == null ? void 0 : i.col) === H;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => fe && u({ row: E, col: H }),
                      disabled: me || !fe,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      me
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : z
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : fe
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: me ? "已占用" : fe ? "可選擇" : "不可用",
                      children: me ? "占用" : `${E},${H}`,
                    },
                    $
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
              onClick: S,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "800px" },
              onClick: (P) => P.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(Tt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增虛擬容器",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: S,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ke, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      R(),
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
                                    value: h,
                                    onChange: (P) =>
                                      d(parseInt(P.target.value) || 0),
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
                                    value: m,
                                    onChange: (P) =>
                                      x(parseInt(P.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          i &&
                            r.jsx("div", {
                              className: `text-sm p-2 rounded ${
                                v
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: v
                                ? `已選擇位置：${i.row},${i.col}`
                                : `位置 ${i.row},${i.col} 已被占用或無效`,
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
                                  ((V = n == null ? void 0 : n.contents) == null
                                    ? void 0
                                    : V.filter(
                                        (P) => P.type === "sub_container"
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
                      onClick: S,
                      disabled: j,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: a("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: T,
                      disabled: !v || j,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        j && r.jsx(Ot, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: j ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  Lh = ({ isOpen: e, onClose: t, storeShelf: n }) => {
    const {
        showNotification: s,
        medicineList: o,
        isLoadingMedicines: l,
        addStockToShelf: a,
        selectedStockItemForEdit: i,
        storeItemModalMode: c,
        updateStockInShelf: h,
      } = lt(),
      [g, m] = f.useState(""),
      [p, j] = f.useState(""),
      [b, k] = f.useState(""),
      [_, u] = f.useState(""),
      [d, x] = f.useState([]),
      [v, T] = f.useState([]),
      [S, R] = f.useState(""),
      [V, P] = f.useState(""),
      [A, oe] = f.useState(""),
      [ue, M] = f.useState(""),
      [N, F] = f.useState("EPD290"),
      [w, U] = f.useState(null),
      [C, J] = f.useState([]),
      [E, H] = f.useState(""),
      [$, me] = f.useState(!1),
      fe = f.useRef(null);
    f.useEffect(() => {
      if (e && c === "edit" && i) {
        m(i.code || ""), j(i.name || ""), k(""), u(i.material_no || "");
        const D = i.lot || [],
          ee = i.expiry_date || [],
          L = i.qty || [],
          se = [];
        if (D.length > 0 || ee.length > 0 || L.length > 0) {
          const ye = Math.max(D.length, ee.length, L.length),
            be = [];
          for (let Se = 0; Se < ye; Se++) {
            const O = ee[Se] || "";
            let te = "";
            O && (te = O.split("T")[0]),
              (te = te.replace(/\//g, "-")),
              be.push({
                id: `batch_${Date.now()}_${Se}`,
                lot: D[Se] || "",
                expiryDate: te,
                qty: String(L[Se] || ""),
              }),
              te && se.push(te);
          }
          x(be), T(se), x([]);
        } else T([]);
        const ve = (i.location || "0,0").split(",");
        R(ve[0] || "0"),
          P(ve[1] || "0"),
          oe(i.led_index || ""),
          M(i.ip || ""),
          F(i.device_type || "EPD290");
      } else if (e && c === "add") {
        if (
          (m(""),
          j(""),
          k(""),
          u(""),
          x([]),
          T([]),
          oe(""),
          M(""),
          F("EPD290"),
          n && n.medMapStock && n.medMapStock.length > 0)
        ) {
          const D = n.medMapStock.map((L) => {
            const le = (L.location || "0,0").split(",");
            return Number(le[0] || "0");
          });
          let ee = 0;
          for (; D.includes(ee); ) ee++;
          R(String(ee));
        } else R("0");
        P("0");
      }
    }, [e, c, i, n]),
      f.useEffect(() => {
        const D = (ee) => {
          fe.current && !fe.current.contains(ee.target) && U(null);
        };
        return (
          document.addEventListener("mousedown", D),
          () => {
            document.removeEventListener("mousedown", D);
          }
        );
      }, []);
    const z = (D, ee) => {
        if (!ee.trim()) {
          J([]);
          return;
        }
        const L = ee.toLowerCase(),
          se = o.filter((le) => {
            var ve, ye, be, Se;
            switch (D) {
              case "code":
                return (ve = le.CODE) == null
                  ? void 0
                  : ve.toLowerCase().includes(L);
              case "name":
                return (ye = le.NAME) == null
                  ? void 0
                  : ye.toLowerCase().includes(L);
              case "chineseName":
                return (be = le.CHT_NAME) == null
                  ? void 0
                  : be.toLowerCase().includes(L);
              case "skdiacode":
                return (Se = le.SKDIACODE) == null
                  ? void 0
                  : Se.toLowerCase().includes(L);
              default:
                return !1;
            }
          });
        J(se.slice(0, 50));
      },
      ge = (D, ee) => {
        switch ((U(D), D)) {
          case "code":
            m(ee);
            break;
          case "name":
            j(ee);
            break;
          case "chineseName":
            k(ee);
            break;
          case "skdiacode":
            u(ee);
            break;
        }
        z(D, ee);
      },
      ne = (D, ee) => {
        switch (ee) {
          case "code":
            m(D.CODE || ""),
              j(D.NAME || ""),
              k(D.CHT_NAME || ""),
              u(D.SKDIACODE || "");
            break;
          case "name":
            m(D.CODE || ""),
              j(D.NAME || ""),
              k(D.CHT_NAME || ""),
              u(D.SKDIACODE || "");
            break;
          case "chineseName":
            m(D.CODE || ""),
              j(D.NAME || ""),
              k(D.CHT_NAME || ""),
              u(D.SKDIACODE || "");
            break;
          case "skdiacode":
            m(D.CODE || ""),
              j(D.NAME || ""),
              k(D.CHT_NAME || ""),
              u(D.SKDIACODE || "");
            break;
        }
        H(D.GUID), U(null), J([]);
      },
      je = () => {
        const D = {
          id: `batch_${Date.now()}`,
          lot: "",
          expiryDate: "",
          qty: "",
        };
        x([...d, D]);
      },
      Ie = (D) => {
        x(d.filter((ee) => ee.id !== D));
      },
      he = (D, ee, L) => {
        x(d.map((se) => (se.id === D ? { ...se, [ee]: L } : se)));
      },
      Ge = async () => {
        var se;
        if (!g || !p) {
          s("請選擇藥品", "error");
          return;
        }
        if (!n || !n.GUID) {
          s("層架資訊錯誤", "error");
          return;
        }
        const D = [],
          ee = [],
          L = [];
        d.forEach((le) => {
          D.push(le.lot || "");
          let ve = "";
          le.expiryDate && (ve = `${le.expiryDate}`),
            ee.push(ve),
            L.push(le.qty ? `${Number(le.qty)}` : "0");
        });
        try {
          if (c === "edit" && i) {
            const le = {
                GUID: i.GUID,
                code: g,
                device_type: N,
                expiry_date: ee,
                ip_light: ue || "",
                ip: ue || "",
                led_index: A || "",
                location: `${S || "0"},${V || "0"}`,
                lot: D,
                material_no: _ || "",
                name: p,
                qty: L,
                shelf_guid: n.GUID,
              },
              ve = await De.updateStock([le]);
            if (ve.Code === 200) {
              h(n.GUID, i.GUID, le), console.log("檢查有無貨物批次被刪除");
              const ye = v.filter((be) => !ee.includes(be));
              if ((console.log(ye), ye.length > 0)) {
                console.log("🗑️ 檢測到被刪除的批次效期:", ye);
                let be = "";
                try {
                  i.Value &&
                    ((be = JSON.parse(i.Value).GUID || ""),
                    console.log("📦 從 Value 欄位解析出的 GUID:", be));
                } catch (Se) {
                  console.error("❌ 解析 Value 欄位失敗:", Se);
                }
                if (be) {
                  for (const Se of ye)
                    try {
                      console.log(`🗑️ 正在刪除批次，GUID: ${be}, 效期: ${Se}`);
                      const O = await De.stockDeleteValidityPeriod(be, Se);
                      O.Code === 200
                        ? console.log(`✅ 成功刪除批次效期: ${Se}`)
                        : console.warn(
                            `⚠️ 刪除批次失敗 (效期: ${Se}):`,
                            O.Result
                          );
                    } catch (O) {
                      console.error(`❌ 刪除批次時發生錯誤 (效期: ${Se}):`, O);
                    }
                  s(`更新貨物成功，已刪除 ${ye.length} 個批次`, "success");
                } else
                  console.warn("⚠️ 無法取得 Value GUID，跳過批次刪除"),
                    s("更新貨物成功（但無法刪除批次）", "success");
              } else s("更新貨物成功", "success");
              I();
            } else s(ve.Result || "更新貨物失敗", "error");
          } else {
            const le = {
                code: g,
                device_type: N,
                expiry_date: ee,
                ip_light: ue || "",
                ip: ue || "",
                led_index: A || "",
                location: `${S || "0"},${V || "0"}`,
                lot: D,
                material_no: _ || "",
                name: p,
                qty: L,
                shelf_guid: n.GUID,
              },
              ve = await De.addStock([le]);
            ve.Code === 200
              ? (a(n.GUID, {
                  GUID:
                    ((se = ve.Data) == null ? void 0 : se.GUID) ||
                    `stock_${Date.now()}`,
                  ...le,
                }),
                s("新增貨物成功", "success"),
                I())
              : s(ve.Result || "新增貨物失敗", "error");
          }
        } catch (le) {
          console.error("貨物操作錯誤:", le),
            s(
              c === "edit"
                ? "更新貨物失敗，請稍後再試"
                : "新增貨物失敗，請稍後再試",
              "error"
            );
        }
      },
      q = (D, ee) => {
        console.log("📸 掃描成功，填入藥品資料:", ee),
          m(ee[0].CODE || ee[0].code || ""),
          j(ee[0].NAME || ee[0].name || ""),
          k(ee[0].CHT_NAME || ee[0].cht_name || ""),
          u(ee[0].SKDIACODE || ee[0].skdiacode || ee[0].material_no || ""),
          H(ee[0].GUID || ""),
          me(!1),
          s("已自動填入藥品資料", "success");
      },
      I = () => {
        m(""),
          j(""),
          k(""),
          u(""),
          x([]),
          T([]),
          R(""),
          P(""),
          oe(""),
          M(""),
          F("EPD290"),
          H(""),
          J([]),
          U(null),
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
                      onClick: I,
                      className:
                        "p-2 hover:bg-gray-100 rounded-full transition-colors",
                      children: r.jsx(Ke, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "p-4 space-y-2",
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
                            className: "space-y-2",
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
                                    onClick: () => me(!0),
                                    className:
                                      "hover:bg-gray-100 rounded-lg transition-colors p-2",
                                    title: "掃描條碼",
                                    children: r.jsx(Lr, {
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
                                    ref: w === "code" ? fe : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥碼",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: g,
                                        onChange: (D) =>
                                          ge("code", D.target.value),
                                        onFocus: () => U("code"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品代碼",
                                      }),
                                      w === "code" &&
                                        C.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: C.map((D) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () => ne(D, "code"),
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
                                                        children: D.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: D.NAME,
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
                                                        children: D.CHT_NAME,
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
                                                          D.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              D.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: w === "name" ? fe : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥名",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: p,
                                        onChange: (D) =>
                                          ge("name", D.target.value),
                                        onFocus: () => U("name"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品名稱",
                                      }),
                                      w === "name" &&
                                        C.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: C.map((D) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () => ne(D, "name"),
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
                                                        children: D.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: D.NAME,
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
                                                        children: D.CHT_NAME,
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
                                                          D.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              D.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: w === "chineseName" ? fe : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "中文名",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: b,
                                        onChange: (D) =>
                                          ge("chineseName", D.target.value),
                                        onFocus: () => U("chineseName"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入中文名稱",
                                      }),
                                      w === "chineseName" &&
                                        C.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: C.map((D) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  ne(D, "chineseName"),
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
                                                        children: D.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: D.NAME,
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
                                                        children: D.CHT_NAME,
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
                                                          D.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              D.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: w === "skdiacode" ? fe : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "料號",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: _,
                                        onChange: (D) =>
                                          ge("skdiacode", D.target.value),
                                        onFocus: () => U("skdiacode"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入料號",
                                      }),
                                      w === "skdiacode" &&
                                        C.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: C.map((D) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  ne(D, "skdiacode"),
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
                                                        children: D.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: D.NAME,
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
                                                        children: D.CHT_NAME,
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
                                                          D.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              D.GUID
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
                            className: "space-y-2",
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
                                    onClick: je,
                                    className:
                                      "flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
                                    title: "新增批次",
                                    children: [
                                      r.jsx(Tt, { className: "w-4 h-4" }),
                                      "新增批次",
                                    ],
                                  }),
                                ],
                              }),
                              d.length === 0
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
                                    children: d.map((D, ee) =>
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
                                                  children: ["批次 ", ee + 1],
                                                }),
                                                r.jsx("button", {
                                                  onClick: () => Ie(D.id),
                                                  className:
                                                    "p-1 text-red-600 hover:bg-red-50 rounded transition-colors",
                                                  title: "刪除批次",
                                                  children: r.jsx(Cr, {
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
                                                      value: D.lot,
                                                      onChange: (L) =>
                                                        he(
                                                          D.id,
                                                          "lot",
                                                          L.target.value
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
                                                      value: D.expiryDate,
                                                      onChange: (L) =>
                                                        he(
                                                          D.id,
                                                          "expiryDate",
                                                          L.target.value
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
                                                      value: D.qty,
                                                      onChange: (L) =>
                                                        he(
                                                          D.id,
                                                          "qty",
                                                          L.target.value
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
                                        D.id
                                      )
                                    ),
                                  }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "space-y-2",
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
                                        value: S,
                                        onChange: (D) => R(D.target.value),
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
                                        children: "深度",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: V,
                                        onChange: (D) => P(D.target.value),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入深度",
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
                                        value: A,
                                        onChange: (D) => oe(D.target.value),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入 LED 索引",
                                      }),
                                    ],
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
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "電子紙 IP",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: ue,
                                        onChange: (D) => M(D.target.value),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入電子紙 IP",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "設備類型",
                                      }),
                                      r.jsxs("select", {
                                        value: N,
                                        onChange: (D) => F(D.target.value),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white",
                                        children: [
                                          r.jsx("option", {
                                            value: "EPD290",
                                            children: "EPD290",
                                          }),
                                          r.jsx("option", {
                                            value: "RowsLED",
                                            children: "RowsLED",
                                          }),
                                          r.jsx("option", {
                                            value: "EPD730E",
                                            children: "EPD730E",
                                          }),
                                          r.jsx("option", {
                                            value: "EPD730F",
                                            children: "EPD730F",
                                          }),
                                          r.jsx("option", {
                                            value: "EPD730_7Color",
                                            children: "EPD730_7Color",
                                          }),
                                        ],
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
                      onClick: I,
                      className:
                        "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: Ge,
                      disabled: l || o.length === 0,
                      className:
                        "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400",
                      children: c === "edit" ? "修改" : "新增",
                    }),
                  ],
                }),
              ],
            }),
            r.jsx(rl, {
              isOpen: $,
              onClose: () => me(!1),
              onScanSuccess: q,
              mode: "set_store_med_mode",
            }),
          ],
        })
      : null;
  },
  Gh = ({ isOpen: e, onClose: t }) => {
    const {
        selectedDepartmentType: n,
        apiDepartmentData: s,
        allDepartmentsList: o,
        showNotification: l,
        triggerRefresh: a,
        reloadMedMapData: i,
      } = lt(),
      [c, h] = f.useState(null),
      [g, m] = f.useState(""),
      [p, j] = f.useState(!1),
      b = () => (s ? s.map((R) => R.name) : []),
      k = () => (!n || !o ? [] : o.filter((R) => R["department_type "] === n)),
      _ = () => {
        const R = b();
        return k().filter((P) => !R.includes(P.name));
      },
      u = () => (s ? s.map((R) => R.gird_position) : []),
      d = () => {
        const R = u(),
          V = [];
        for (let P = 0; P < 10; P++)
          for (let A = 0; A < 10; A++) {
            const oe = `${P},${A}`;
            R.includes(oe) || V.push(oe);
          }
        return V.slice(0, 20);
      };
    f.useEffect(() => {
      e && (h(null), m(""));
    }, [e]);
    const x = async () => {
        if (!c) {
          l("請選擇部門", "error");
          return;
        }
        if (!g) {
          l("請選擇位置", "error");
          return;
        }
        if (!n) {
          l("部門分類資訊錯誤", "error");
          return;
        }
        j(!0);
        try {
          const R = await De.addMedMap(c.name, c.type, g);
          R.Code === 200
            ? (l("新增部門成功", "success"), await i(), v())
            : l(R.Result || "新增部門失敗", "error");
        } catch (R) {
          console.error("新增部門錯誤:", R),
            l("新增部門失敗，請稍後再試", "error");
        } finally {
          j(!1);
        }
      },
      v = () => {
        h(null), m(""), t();
      };
    if (!e) return null;
    const T = _(),
      S = d();
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
                onClick: v,
                className:
                  "p-2 hover:bg-gray-100 rounded-full transition-colors",
                children: r.jsx(Ke, { className: "w-5 h-5" }),
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
                  T.length === 0
                    ? r.jsx("div", {
                        className: "text-center py-8",
                        children: r.jsx("p", {
                          className: "text-gray-600",
                          children: "所有部門都已新增",
                        }),
                      })
                    : r.jsx("div", {
                        className: "space-y-2",
                        children: T.map((R) =>
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
                                  onChange: () => h(R),
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
                    S.length === 0
                      ? r.jsx("div", {
                          className: "text-center py-8",
                          children: r.jsx("p", {
                            className: "text-gray-600",
                            children: "沒有可用的位置",
                          }),
                        })
                      : r.jsx("div", {
                          className: "grid grid-cols-5 gap-2",
                          children: S.map((R) => {
                            const [V, P] = R.split(",");
                            return r.jsxs(
                              "button",
                              {
                                onClick: () => m(R),
                                className: `p-3 border-2 rounded-lg text-sm font-medium transition-all ${
                                  g === R
                                    ? "border-blue-500 bg-blue-500 text-white"
                                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700"
                                }`,
                                children: ["(", V, ",", P, ")"],
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
                onClick: v,
                className:
                  "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                disabled: p,
                children: "取消",
              }),
              r.jsx("button", {
                onClick: x,
                disabled: !c || !g || p,
                className:
                  "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                children: p ? "新增中..." : "新增",
              }),
            ],
          }),
        ],
      }),
    });
  },
  zh = ({ isOpen: e, onClose: t, initialBarcode: n = "" }) => {
    const {
        showNotification: s,
        medicineList: o,
        isLoadingMedicines: l,
      } = lt(),
      [a, i] = f.useState(""),
      [c, h] = f.useState(""),
      [g, m] = f.useState(""),
      [p, j] = f.useState(""),
      [b, k] = f.useState(""),
      [_, u] = f.useState(null),
      [d, x] = f.useState([]),
      [v, T] = f.useState(""),
      [S, R] = f.useState(null),
      [V, P] = f.useState(!1),
      A = f.useRef(null);
    f.useEffect(() => {
      e && (i(n), h(""), m(""), j(""), k(""), T(""), R(null), u(null));
    }, [e, n]),
      f.useEffect(() => {
        const w = (U) => {
          A.current && !A.current.contains(U.target) && u(null);
        };
        return (
          document.addEventListener("mousedown", w),
          () => {
            document.removeEventListener("mousedown", w);
          }
        );
      }, []);
    const oe = (w, U) => {
        if (!U.trim() || l) {
          x([]);
          return;
        }
        const C = U.toLowerCase(),
          J = o.filter((E) => {
            var H, $, me, fe;
            switch (w) {
              case "code":
                return (H = E.CODE) == null
                  ? void 0
                  : H.toLowerCase().includes(C);
              case "name":
                return ($ = E.NAME) == null
                  ? void 0
                  : $.toLowerCase().includes(C);
              case "chineseName":
                return (me = E.CHT_NAME) == null
                  ? void 0
                  : me.toLowerCase().includes(C);
              case "skdiacode":
                return (fe = E.SKDIACODE) == null
                  ? void 0
                  : fe.toLowerCase().includes(C);
              default:
                return !1;
            }
          });
        x(J.slice(0, 10));
      },
      ue = (w, U) => {
        switch ((u(w), w)) {
          case "code":
            h(U);
            break;
          case "name":
            m(U);
            break;
          case "chineseName":
            j(U);
            break;
          case "skdiacode":
            k(U);
            break;
        }
        oe(w, U);
      },
      M = (w) => {
        T(w.GUID),
          R(w),
          h(w.CODE || ""),
          m(w.NAME || ""),
          j(w.CHT_NAME || ""),
          k(w.SKDIACODE || ""),
          u(null),
          x([]);
      },
      N = () => {
        i(""), h(""), m(""), j(""), k(""), T(""), R(null), u(null), x([]), t();
      },
      F = async () => {
        if (!c.trim()) {
          s("藥碼為必填欄位", "error");
          return;
        }
        if (!a.trim()) {
          s("條碼不能為空", "error");
          return;
        }
        P(!0);
        try {
          let w = [];
          if (S && S.BARCODE2)
            try {
              const C = JSON.parse(S.BARCODE2);
              Array.isArray(C)
                ? (w = [...C])
                : typeof C == "string" && (w = [C]);
            } catch {
              console.warn("解析 BARCODE2 失敗，使用原始值:", S.BARCODE2),
                S.BARCODE2 && (w = [S.BARCODE2]);
            }
          w.includes(a.trim()) || w.push(a.trim()),
            console.log("📋 處理後的 BARCODE2 陣列:", w);
          const U = await De.addMedClouds(
            a.trim(),
            c.trim(),
            JSON.stringify(w),
            S.BARCODE
          );
          U.Code === 200
            ? (s("條碼建立成功", "success"), N())
            : s(U.Result || "建立條碼失敗", "error");
        } catch (w) {
          console.error("建立條碼失敗:", w),
            s("建立條碼失敗，請稍後再試", "error");
        } finally {
          P(!1);
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
                        children: r.jsx(Tt, {
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
                    onClick: N,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                    disabled: V,
                    children: r.jsx(Ke, { className: "w-6 h-6 text-gray-600" }),
                  }),
                ],
              }),
              r.jsx("div", {
                className: "flex-1 overflow-y-auto p-6",
                children: r.jsxs("div", {
                  className: "space-y-4",
                  ref: A,
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
                          onChange: (w) => ue("code", w.target.value),
                          onFocus: () => u("code"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥碼搜尋...",
                          disabled: V,
                        }),
                        _ === "code" &&
                          d.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: d.map((w) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => M(w),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: w.CODE,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: w.NAME,
                                    }),
                                  ],
                                },
                                w.GUID
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
                          value: g,
                          onChange: (w) => ue("name", w.target.value),
                          onFocus: () => u("name"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥名搜尋...",
                          disabled: V,
                        }),
                        _ === "name" &&
                          d.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: d.map((w) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => M(w),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: w.NAME,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: w.CODE,
                                    }),
                                  ],
                                },
                                w.GUID
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
                          value: p,
                          onChange: (w) => ue("chineseName", w.target.value),
                          onFocus: () => u("chineseName"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入中文名搜尋...",
                          disabled: V,
                        }),
                        _ === "chineseName" &&
                          d.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: d.map((w) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => M(w),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: w.CHT_NAME,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: w.CODE,
                                    }),
                                  ],
                                },
                                w.GUID
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
                          onChange: (w) => ue("skdiacode", w.target.value),
                          onFocus: () => u("skdiacode"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入料號搜尋...",
                          disabled: V,
                        }),
                        _ === "skdiacode" &&
                          d.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: d.map((w) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => M(w),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: w.SKDIACODE,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: w.NAME,
                                    }),
                                  ],
                                },
                                w.GUID
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
                      onClick: N,
                      disabled: V,
                      className:
                        "px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: F,
                      disabled: V || !c.trim(),
                      className:
                        "px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: V ? "建立中..." : "確認建立",
                    }),
                  ],
                }),
              }),
            ],
          }),
        })
      : null;
  },
  Bh = ({
    container: e,
    highlightedMedicineCode: t,
    pendingRequisitionCodes: n = [],
    onMedicineClick: s,
  }) => {
    const o = () => {
        try {
          const m = localStorage.getItem("medMap_setting");
          if (m) return JSON.parse(m).light_color || "red";
        } catch (m) {
          console.error("讀取高亮顏色設定失敗:", m);
        }
        return "red";
      },
      l = (m) => {
        const [p, j] = m.split(",").map(Number);
        return { row: p || 0, col: j || 0 };
      },
      a = (m) => {
        if (!m || m.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const p = m.map((_) => ({
            ..._,
            gridPos: l(_.gird_position || "0,0"),
          })),
          j = Math.max(...p.map((_) => _.gridPos.row), 0),
          b = Math.max(...p.map((_) => _.gridPos.col), 0);
        return {
          sortedContents: p.sort((_, u) =>
            _.gridPos.row !== u.gridPos.row
              ? _.gridPos.row - u.gridPos.row
              : _.gridPos.col - u.gridPos.col
          ),
          maxRow: j,
          maxCol: b,
        };
      },
      i = (m) => {
        switch (m) {
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
      c = (m) => {
        const p = [
          "med_box",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
        ].includes(m.type);
        return r.jsx(
          "div",
          {
            className: `${p ? "shadow-sm border-2 p-1 rounded-lg" : ""} ${i(
              m.type
            )} flex flex-col max-w-full min-w-0 h-full overflow-hidden`,
            children: r.jsx("div", {
              className: "flex-1 min-w-0 overflow-hidden",
              children: g(m),
            }),
          },
          m.GUID
        );
      },
      h = (m, p, j) => {
        const b = {};
        return (
          m.forEach((k) => {
            const _ = l(k.gird_position || "0,0");
            b[`${_.row},${_.col}`] = k;
          }),
          r.jsx("table", {
            className: "w-full h-full max-w-full table-fixed",
            style: { borderCollapse: "separate", borderSpacing: "0px" },
            children: r.jsx("tbody", {
              children: Array.from({ length: p + 1 }, (k, _) =>
                r.jsx(
                  "tr",
                  {
                    children: Array.from({ length: j + 1 }, (u, d) => {
                      const x = `${_},${d}`,
                        v = b[x];
                      return v
                        ? r.jsx(
                            "td",
                            {
                              className:
                                "align-top bg-transparent overflow-hidden",
                              style: {
                                width: `${100 / (j + 1)}%`,
                                maxWidth: `${100 / (j + 1)}%`,
                              },
                              children: c(v),
                            },
                            d
                          )
                        : r.jsx(
                            "td",
                            {
                              className:
                                "align-top bg-transparent overflow-hidden",
                              style: {
                                width: `${100 / (j + 1)}%`,
                                maxWidth: `${100 / (j + 1)}%`,
                              },
                              children: r.jsx("div", {
                                className:
                                  "w-full h-full flex items-center justify-center text-gray-300 text-xs border border-dashed border-gray-200 rounded overflow-hidden",
                                children: "空位",
                              }),
                            },
                            d
                          );
                    }),
                  },
                  _
                )
              ),
            }),
          })
        );
      },
      g = (m) => {
        switch (m.type) {
          case "parent_container":
            if (m.contents && m.contents.length > 0) {
              const { sortedContents: p, maxRow: j, maxCol: b } = a(m.contents);
              return h(p, j, b);
            } else return r.jsx("div", { className: "" });
          case "sub_container":
            if (m.contents && m.contents.length > 0) {
              const { sortedContents: p, maxRow: j, maxCol: b } = a(m.contents);
              return h(p, j, b);
            } else return r.jsx("div", { className: "" });
          case "dispensing_shelves":
            if (m.contents && m.contents.length > 0) {
              const { sortedContents: p, maxRow: j, maxCol: b } = a(m.contents);
              return h(p, j, b);
            } else
              return r.jsx("div", {
                className:
                  "border-2 rounded-lg flex py-3 items-center justify-center h-full text-gray-400 text-sm",
                children: "無藥盒",
              });
          case "store_shelves":
            if (m.medMapStock && m.medMapStock.length > 0) {
              const p = m.medMapStock,
                j = {};
              p.forEach((_) => {
                const u = _.location || _.gird_position || "0,0",
                  [d, x] = u.split(",").map(Number);
                j[d] || (j[d] = []),
                  j[d].push({ ..._, _position: d, _depth: x });
              });
              const b = Object.keys(j)
                  .map(Number)
                  .sort((_, u) => _ - u),
                k = b.length;
              return (
                Math.max(...b.map((_) => j[_].length)),
                r.jsx("div", {
                  className: "flex h-full w-full overflow-hidden gap-1",
                  children: b.map((_) => {
                    const u = j[_].sort((T, S) => S._depth - T._depth),
                      d = k > 0 ? 100 / k : 100,
                      x = u.length,
                      v = x > 0 ? 100 / x : 100;
                    return r.jsx(
                      "div",
                      {
                        className: "flex flex-col h-full",
                        style: { width: `${d}%` },
                        children: u.map((T, S) => {
                          let R = 0;
                          T.qty &&
                            T.qty.forEach((ue) => {
                              R += +ue;
                            });
                          const V = t && (T.code == t || T.material_no == t),
                            P = n.includes(T.code) || n.includes(T.material_no),
                            A = o(),
                            oe = S === x - 1;
                          return r.jsxs(
                            "div",
                            {
                              className: `border-2 rounded-lg border-gray-300 p-2 flex flex-col text-gray-800 justify-center items-center transition-colors cursor-pointer min-w-0 overflow-hidden ${
                                oe ? "" : "mb-1"
                              } ${
                                P
                                  ? "highlight-breathe-red"
                                  : V
                                  ? `highlight-breathe-${A}`
                                  : ""
                              }`,
                              style: {
                                height: `calc(${v}% - ${
                                  oe ? "0px" : "0.25rem"
                                })`,
                              },
                              onClick: () =>
                                s &&
                                s({
                                  code: T.code || T.material_no,
                                  name: T.name,
                                }),
                              children: [
                                r.jsx("div", {
                                  className:
                                    "text-sm font-semibold truncate w-full text-center whitespace-normal overflow-hidden",
                                  children: T.name || T.material_no,
                                }),
                                r.jsxs("div", {
                                  className: "text-xs mt-1",
                                  children: ["數量: ", R || 0],
                                }),
                              ],
                            },
                            T.GUID || S
                          );
                        }),
                      },
                      _
                    );
                  }),
                })
              );
            } else if (m.contents && m.contents.length > 0) {
              const { sortedContents: p, maxRow: j, maxCol: b } = a(m.contents);
              return h(p, j, b);
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
            if (m.med_info && m.med_info.length > 0) {
              const p = t && m.med_info.some((k) => k.code == t),
                j = m.med_info.some((k) => n.includes(k.code)),
                b = o();
              return r.jsx("div", {
                className: `text-sm text-center h-full p-2 flex flex-col text-gray-800 justify-center transition-colors cursor-pointer overflow-hidden ${
                  j
                    ? "highlight-breathe-red"
                    : p
                    ? `highlight-breathe-${b}`
                    : ""
                }`,
                onClick: () => s && s(m.med_info[0]),
                children: r.jsx("div", {
                  className: "font-semibold truncate w-full overflow-hidden",
                  children: m.med_info[0].name || "-",
                }),
              });
            } else
              return r.jsx("div", {
                className:
                  "flex items-center justify-center h-full text-gray-400 text-xs",
                children: "空藥盒",
              });
          default:
            if (m.contents && m.contents.length > 0) {
              const { sortedContents: p, maxRow: j, maxCol: b } = a(m.contents);
              return h(p, j, b);
            } else
              return r.jsxs("div", {
                className:
                  "flex items-center justify-center h-full text-gray-400 text-sm",
                children: ["未知類型: ", m.type],
              });
        }
      };
    return e
      ? r.jsx("div", {
          className: "w-full h-full overflow-auto",
          children: r.jsx("div", {
            className: "max-w-full h-full",
            children: g(e),
          }),
        })
      : r.jsx("div", {
          className: "flex items-center justify-center h-full text-gray-400",
          children: r.jsx("p", { children: "無容器資料" }),
        });
  },
  Fh = ({ isOpen: e, onClose: t, type: n, data: s, onApprove: o }) => {
    const [l, a] = f.useState("0"),
      [i, c] = f.useState("0"),
      [h, g] = f.useState(null),
      [m, p] = f.useState(null),
      [j, b] = f.useState(!1),
      [k, _] = f.useState(!1),
      [u, d] = f.useState(""),
      [x, v] = f.useState(""),
      [T, S] = f.useState([]),
      [R, V] = f.useState([]),
      [P, A] = f.useState([]),
      [oe, ue] = f.useState(!1),
      [M, N] = f.useState(!1),
      F = f.useRef(null),
      w = f.useRef(null),
      U = f.useRef(null),
      C = f.useRef(null);
    f.useEffect(() => {
      if (e && s) {
        const I = s.issuedQuantity || s.requestedQuantity || "0";
        a(I), c(I), g(null), p(null), b(!1);
        const D = localStorage.getItem("medMap_setting");
        if (D)
          try {
            const ee = JSON.parse(D);
            d(ee.default_person || ""), v(ee.default_person_id || "");
          } catch (ee) {
            console.error("讀取設定失敗:", ee), d(""), v("");
          }
        else d(""), v("");
        J();
      }
    }, [e, s]),
      f.useEffect(() => {
        const I = (D) => {
          U.current &&
            !U.current.contains(D.target) &&
            F.current &&
            !F.current.contains(D.target) &&
            ue(!1),
            C.current &&
              !C.current.contains(D.target) &&
              w.current &&
              !w.current.contains(D.target) &&
              N(!1);
        };
        return (
          document.addEventListener("mousedown", I),
          () => document.removeEventListener("mousedown", I)
        );
      }, []);
    const J = async () => {
        try {
          const I = await De.getAllStaffInfo();
          I.Code === 200 && I.Data && S(I.Data);
        } catch (I) {
          console.error("獲取人員資料失敗:", I);
        }
      },
      E = (I) => {
        if ((d(I), I.trim() === "")) {
          V([]), ue(!1);
          return;
        }
        const D = T.filter(
          (ee) => ee.name && ee.name.toLowerCase().includes(I.toLowerCase())
        );
        V(D), ue(D.length > 0);
      },
      H = (I) => {
        if ((v(I), I.trim() === "")) {
          A([]), N(!1);
          return;
        }
        const D = T.filter(
          (ee) => ee.ID && ee.ID.toLowerCase().includes(I.toLowerCase())
        );
        A(D), N(D.length > 0);
      },
      $ = (I) => {
        d(I.name), v(I.ID), ue(!1);
      },
      me = (I) => {
        d(I.name), v(I.ID), N(!1);
      };
    if (!e || !s) return null;
    const fe = (I) => {
        if (j) a(I), c(I), b(!1);
        else {
          const D = l === "0" ? I : l + I;
          a(D), c(D);
        }
      },
      z = (I) => {
        h && m !== null && !j && ge(), p(i), g(I), b(!0);
      },
      ge = () => {
        if (h === null || m === null) return;
        const I = parseFloat(m),
          D = parseFloat(i);
        let ee = 0;
        switch (h) {
          case "+":
            ee = I + D;
            break;
          case "-":
            ee = I - D;
            break;
          case "×":
            ee = I * D;
            break;
          case "÷":
            ee = D !== 0 ? I / D : 0;
            break;
          default:
            return;
        }
        const L = ee.toString();
        a(L), c(L), g(null), p(null), b(!0);
      },
      ne = () => {
        ge();
      },
      je = () => {
        if (j) a("0."), c("0."), b(!1);
        else if (!l.includes(".")) {
          const I = l + ".";
          a(I), c(I);
        }
      },
      Ie = () => {
        a("0"), c("0"), g(null), p(null), b(!1);
      },
      he = () => {
        const I = new Date(),
          D = I.getFullYear(),
          ee = String(I.getMonth() + 1).padStart(2, "0"),
          L = String(I.getDate()).padStart(2, "0"),
          se = String(I.getHours()).padStart(2, "0"),
          le = String(I.getMinutes()).padStart(2, "0"),
          ve = String(I.getSeconds()).padStart(2, "0");
        return `${D}-${ee}-${L}T${se}:${le}:${ve}`;
      },
      Ge = async () => {
        if (!s) return;
        if (!u.trim()) {
          alert("請輸入核撥人員名稱");
          return;
        }
        const I = n === "requisition" ? "申領" : "撥補";
        if (
          window.confirm(`確認核撥資訊：

藥品名稱：${s.name}
實際撥發量：${l}
核撥人員：${u}${x ? ` (${x})` : ""}

是否確認${I}？`)
        ) {
          _(!0);
          try {
            const ee = he();
            if (n === "requisition") {
              const L = await De.updateRequisitionActualQuantity(s.GUID, l);
              if (L.Code !== 200) {
                alert(`更新實際撥發量失敗：${L.Message || "未知錯誤"}`), _(!1);
                return;
              }
              const se = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuingPerson: u,
                issueTime: ee,
              };
              console.log("申領request", se);
              const le = await De.updateRequisitionByGuid(se);
              if (le.Code !== 200) {
                alert(`申領過帳失敗：${le.Message || "未知錯誤"}`), _(!1);
                return;
              }
              console.log("✅ 申領核撥成功:", {
                GUID: s.GUID,
                name: s.name,
                actualQuantity: l,
                issuingPerson: u,
                issueTime: ee,
              });
            } else {
              const L = await De.updateDistributionActualQuantity(s.GUID, l);
              if (L.Code !== 200) {
                alert(`更新實際撥發量失敗：${L.Message || "未知錯誤"}`), _(!1);
                return;
              }
              const se = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuer: u,
                issuanceTime: ee,
              };
              console.log("撥補request", se);
              const le = await De.updateDistributionByGuid(se);
              if (le.Code !== 200) {
                alert(`撥補過帳失敗：${le.Message || "未知錯誤"}`), _(!1);
                return;
              }
              console.log("✅ 撥補核撥成功:", {
                GUID: s.GUID,
                name: s.name,
                actualQuantity: l,
                issuer: u,
                issuanceTime: ee,
              });
            }
            o && (await o()), alert(`${I}核撥成功！`), t();
          } catch (ee) {
            console.error(`${I}核撥失敗:`, ee),
              alert(`${I}核撥失敗，請稍後再試`);
          } finally {
            _(!1);
          }
        }
      },
      q = n === "requisition" ? s.requestedQuantity : s.issuedQuantity;
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
                  children: r.jsx(Ke, { className: "w-5 h-5 text-gray-700" }),
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
                                ref: F,
                                type: "text",
                                value: u,
                                onChange: (I) => E(I.target.value),
                                onFocus: () => {
                                  u.trim() && E(u);
                                },
                                placeholder: "人員名稱",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              oe &&
                                r.jsx("div", {
                                  ref: U,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: R.map((I, D) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => $(I),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          r.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: I.ID,
                                          }),
                                          r.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: I.name,
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
                            className: "relative",
                            children: [
                              r.jsx("input", {
                                ref: w,
                                type: "text",
                                value: x,
                                onChange: (I) => H(I.target.value),
                                onFocus: () => {
                                  x.trim() && H(x);
                                },
                                placeholder: "人員 ID",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              M &&
                                r.jsx("div", {
                                  ref: C,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: P.map((I, D) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => me(I),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          r.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: I.ID,
                                          }),
                                          r.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: I.name,
                                          }),
                                        ],
                                      },
                                      D
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
                            children: q || "-",
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
                        onClick: () => fe("7"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "7",
                      }),
                      r.jsx("button", {
                        onClick: () => fe("8"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "8",
                      }),
                      r.jsx("button", {
                        onClick: () => fe("9"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "9",
                      }),
                      r.jsx("button", {
                        onClick: () => z("÷"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "÷",
                      }),
                      r.jsx("button", {
                        onClick: () => fe("4"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "4",
                      }),
                      r.jsx("button", {
                        onClick: () => fe("5"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "5",
                      }),
                      r.jsx("button", {
                        onClick: () => fe("6"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "6",
                      }),
                      r.jsx("button", {
                        onClick: () => z("×"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "×",
                      }),
                      r.jsx("button", {
                        onClick: () => fe("1"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "1",
                      }),
                      r.jsx("button", {
                        onClick: () => fe("2"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "2",
                      }),
                      r.jsx("button", {
                        onClick: () => fe("3"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "3",
                      }),
                      r.jsx("button", {
                        onClick: () => z("-"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "-",
                      }),
                      r.jsx("button", {
                        onClick: () => fe("0"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "0",
                      }),
                      r.jsx("button", {
                        onClick: je,
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: ".",
                      }),
                      r.jsx("button", {
                        onClick: ne,
                        className:
                          "py-4 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors",
                        children: "=",
                      }),
                      r.jsx("button", {
                        onClick: () => z("+"),
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
                  onClick: Ie,
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
                  onClick: Ge,
                  disabled: k,
                  className:
                    "px-6 py-2.5 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                  children: k ? "處理中..." : "核撥",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Hh = ({
    isOpen: e,
    onClose: t,
    medicineInfo: n,
    requisitions: s,
    distributions: o,
    onNoticeUpdated: l,
  }) => {
    const { setHighlightedMedicineCode: a } = lt(),
      [i, c] = f.useState(s),
      [h, g] = f.useState(o),
      [m, p] = f.useState(null),
      [j, b] = f.useState(!1),
      [k, _] = f.useState(null),
      [u, d] = f.useState("requisition"),
      [x, v] = f.useState(!1),
      [T, S] = f.useState(!1);
    ho.useEffect(() => {
      c(s), g(o);
    }, [s, o]),
      f.useEffect(
        () => () => {
          hs.cleanup();
        },
        []
      );
    const R = async () => {
        var N;
        if (n && !T) {
          if (!n.serverName || !n.serverType) {
            alert("無法取得藥品位置資訊");
            return;
          }
          S(!0);
          try {
            const F = localStorage.getItem("medMap_setting");
            let w = "255,0,0",
              U = "1",
              C = 60;
            if (F)
              try {
                const J = JSON.parse(F);
                (w =
                  {
                    blue: "255,0,0",
                    green: "0,255,0",
                    red: "0,0,255",
                    yellow: "0,255,255",
                    purple: "255,0,255",
                    cyan: "255,255,0",
                  }[J.light_color] || "255,0,0"),
                  (U =
                    ((N = J.brightness) == null ? void 0 : N.toString()) ||
                    "1"),
                  (C = J.light_sec || 60);
              } catch (J) {
                console.error("讀取設定失敗:", J);
              }
            if (x) await hs.turnOffAllLights(), v(!1), a(null);
            else {
              const J = [
                {
                  serverName: n.serverName,
                  serverType: n.serverType,
                  medicineCode: n.code,
                },
              ];
              await hs.startLighting(J, w, U, C * 1e3, () => {
                v(!1), a(null);
              }),
                v(!0),
                a(n.code);
            }
          } catch (F) {
            console.error("亮燈操作失敗:", F);
          } finally {
            S(!1);
          }
        }
      },
      V = async (N) => {
        const F = N.notice === "True" ? "False" : "True";
        p(N.GUID);
        const w = [...i],
          U = w.findIndex((C) => C.GUID === N.GUID);
        if (U === -1) {
          p(null);
          return;
        }
        (w[U] = { ...N, notice: F }), c(w);
        try {
          const C = await De.updateRequisitionNotice(N.GUID, F);
          C.Code !== 200
            ? ((w[U] = { ...N, notice: N.notice }),
              c(w),
              console.error("更新申領通知狀態失敗:", C))
            : l && l();
        } catch (C) {
          (w[U] = { ...N, notice: N.notice }),
            c(w),
            console.error("更新申領通知狀態失敗:", C);
        } finally {
          p(null);
        }
      },
      P = async (N) => {
        const F = N.notice === "True" ? "False" : "True";
        p(N.GUID);
        const w = [...h],
          U = w.findIndex((C) => C.GUID === N.GUID);
        if (U === -1) {
          p(null);
          return;
        }
        (w[U] = { ...N, notice: F }), g(w);
        try {
          const C = await De.updateDistributionNotice(N.GUID, F);
          C.Code !== 200
            ? ((w[U] = { ...N, notice: N.notice }),
              g(w),
              console.error("更新撥補通知狀態失敗:", C))
            : l && l();
        } catch (C) {
          (w[U] = { ...N, notice: N.notice }),
            g(w),
            console.error("更新撥補通知狀態失敗:", C);
        } finally {
          p(null);
        }
      };
    if (!e || !n) return null;
    const A = i.filter((N) => N.state === "等待過帳"),
      oe = h.filter((N) => N.state === "等待過帳"),
      ue = A.length === 0 && oe.length === 0,
      M = (N) => {
        if (!N || N === "1/01/01 00:00:00" || N === "0001-01-01T00:00:00")
          return "-";
        try {
          const F = new Date(N);
          if (isNaN(F.getTime())) return N;
          const w = F.getFullYear(),
            U = String(F.getMonth() + 1).padStart(2, "0"),
            C = String(F.getDate()).padStart(2, "0"),
            J = String(F.getHours()).padStart(2, "0"),
            E = String(F.getMinutes()).padStart(2, "0");
          return `${w}/${U}/${C} ${J}:${E}`;
        } catch {
          return N;
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
                      disabled: T,
                      className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                        x
                          ? "bg-green-500 text-white hover:bg-green-600 shadow-lg"
                          : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                      }`,
                      title: x ? "點擊關燈" : "點擊亮燈",
                      children: r.jsx(fh, {
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
                    children: r.jsx(Ke, { className: "w-6 h-6 text-gray-700" }),
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
              children: ue
                ? r.jsx("div", {
                    className:
                      "flex items-center justify-center h-40 text-gray-400 text-lg",
                    children: "無藥品需求",
                  })
                : r.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      A.map((N, F) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-blue-200 rounded-lg p-3 bg-blue-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              d("requisition"), _(N), b(!0);
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
                                        onClick: (w) => {
                                          w.stopPropagation(), V(N);
                                        },
                                        disabled: m === N.GUID,
                                        className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${
                                          N.notice === "True"
                                            ? "bg-green-500 text-white hover:bg-green-600"
                                            : "bg-gray-300 text-gray-600 hover:bg-gray-400"
                                        }`,
                                        title:
                                          N.notice === "True"
                                            ? "點擊關閉通知"
                                            : "點擊開啟通知",
                                        children: r.jsx($c, {
                                          className: "w-5 h-5",
                                        }),
                                      }),
                                    ],
                                  }),
                                  r.jsx("span", {
                                    className: `px-3 text-sm py-2 text-white font-semibold rounded-full ${
                                      N.actionType.includes("緊急")
                                        ? "bg-green-600"
                                        : "bg-blue-600"
                                    }`,
                                    children: N.actionType,
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
                                        children: N.requestingUnit || "-",
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
                                        children: N.requestingPerson || "-",
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
                                        children: N.requestedQuantity || "-",
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
                                        children: M(N.requestTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          N.GUID
                        )
                      ),
                      oe.map((N, F) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-yellow-200 rounded-lg p-3 bg-yellow-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              d("distribution"), _(N), b(!0);
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
                                    onClick: (w) => {
                                      w.stopPropagation(), P(N);
                                    },
                                    disabled: m === N.GUID,
                                    className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${
                                      N.notice === "True"
                                        ? "bg-green-500 text-white hover:bg-green-600"
                                        : "bg-gray-300 text-gray-600 hover:bg-gray-400"
                                    }`,
                                    title:
                                      N.notice === "True"
                                        ? "點擊關閉通知"
                                        : "點擊開啟通知",
                                    children: r.jsx($c, {
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
                                        children: N.sourceStoreType || "-",
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
                                        children: N.destinationStoreType || "-",
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
                                        children: N.LOT || "-",
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
                                        children: N.VAL || "-",
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
                                        children: N.issuedQuantity || "-",
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
                                        children: N.reportName || "-",
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
                                        children: M(N.addedTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          N.GUID
                        )
                      ),
                    ],
                  }),
            }),
          ],
        }),
        r.jsx(Fh, {
          isOpen: j,
          onClose: () => b(!1),
          type: u,
          data: k,
          onApprove: l,
        }),
      ],
    });
  },
  Vh = ({ isOpen: e, onClose: t, container: n }) => {
    const [s, o] = f.useState("list_mode"),
      { highlightedMedicineCode: l, apiDepartmentData: a } = lt(),
      [i, c] = f.useState(!1),
      [h, g] = f.useState([]),
      [m, p] = f.useState([]),
      [j, b] = f.useState([]),
      [k, _] = f.useState(!1),
      [u, d] = f.useState(null),
      x = f.useRef(null),
      v = f.useRef(null),
      T = f.useCallback(
        (M) => {
          if (!a || !M) return null;
          const N = (F) => {
            for (const w of F) {
              if (w.GUID === M) return w;
              if (w.contents && Array.isArray(w.contents)) {
                const U = N(w.contents);
                if (U) return U;
              }
            }
            return null;
          };
          for (const F of a) {
            if (F.GUID === M) return F;
            if (F.contents && Array.isArray(F.contents)) {
              const w = N(F.contents);
              if (w) return w;
            }
          }
          return null;
        },
        [a]
      ),
      S = n ? T(n.GUID) || n : null,
      R = () => {
        try {
          const N = localStorage.getItem("medMap_setting");
          if (N) {
            const w = JSON.parse(N).light_sec;
            if (w != null && w !== "") {
              const U = Number(w);
              if (!isNaN(U) && U > 0) return U * 1e3;
            }
          }
        } catch (N) {
          console.error("讀取亮燈設定失敗:", N);
        }
        return 6e4;
      },
      V = () => {
        try {
          const M = localStorage.getItem("medMap_setting");
          if (M) return JSON.parse(M).light_color || "red";
        } catch (M) {
          console.error("讀取高亮顏色設定失敗:", M);
        }
        return "red";
      },
      P = f.useCallback(async () => {
        try {
          const M = new Date(),
            N = `${M.getFullYear()}-${String(M.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(M.getDate()).padStart(2, "0")} 00:00:00`,
            F = `${M.getFullYear()}-${String(M.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(M.getDate()).padStart(2, "0")} 23:59:59`,
            [w, U] = await Promise.all([
              De.getRequisitionByTime(N, F),
              De.getDistributionByTime(N, F),
            ]),
            C = [];
          if (w.Code === 200 && w.Data) {
            const J = w.Data.filter((H) => {
              var $;
              return ($ = S == null ? void 0 : S.med_list) == null
                ? void 0
                : $.some((me) => me.code === H.code);
            });
            p(J),
              J.filter(
                (H) => H.state === "等待過帳" && H.notice === "True"
              ).forEach((H) => {
                H.code && C.push(H.code);
              });
          }
          if (U.Code === 200 && U.Data) {
            const J = U.Data.filter((H) => {
              var $;
              return ($ = S == null ? void 0 : S.med_list) == null
                ? void 0
                : $.some((me) => me.code === H.code);
            });
            b(J),
              J.filter(
                (H) => H.state === "等待過帳" && H.notice === "True"
              ).forEach((H) => {
                H.code && (C.includes(H.code) || C.push(H.code));
              });
          }
          g(C);
        } catch (M) {
          console.error("檢查申領撥補資料失敗:", M);
        }
      }, [S]);
    f.useEffect(
      () => (
        e
          ? (P(),
            v.current && clearInterval(v.current),
            (v.current = setInterval(() => {
              P();
            }, 1e4)))
          : v.current && (clearInterval(v.current), (v.current = null)),
        () => {
          v.current && (clearInterval(v.current), (v.current = null));
        }
      ),
      [e, P]
    ),
      f.useEffect(() => {
        var M;
        S &&
          console.log("🔄 ContainerDetailModal: currentContainer updated", {
            GUID: S.GUID,
            name: S.name,
            medListCount: ((M = S.med_list) == null ? void 0 : M.length) || 0,
          });
      }, [S]),
      f.useEffect(() => {
        if (
          (console.log("容器資料：", S),
          console.log("🔍 ContainerDetailModal - 亮燈狀態檢查:", {
            isOpen: e,
            highlightedMedicineCode: l,
            containerName: S == null ? void 0 : S.name,
          }),
          e && l)
        ) {
          c(!0);
          const M = R();
          console.log("✅ ContainerDetailModal - 啟動亮燈:", {
            medicineCode: l,
            duration: M / 1e3 + "秒",
          }),
            x.current && clearTimeout(x.current),
            (x.current = setTimeout(() => {
              console.log("⏱️ ContainerDetailModal - 亮燈時間結束"),
                c(!1),
                (x.current = null);
            }, M));
        } else c(!1);
        return () => {
          x.current && clearTimeout(x.current);
        };
      }, [e, l]);
    const A = (M) => {
      var w, U;
      m.filter((C) => C.code === M.code), j.filter((C) => C.code === M.code);
      const N = (C) => {
          for (const J of C) {
            if (J.type === "store_shelves" && J.medMapStock) {
              const E = J.medMapStock.find((H) => H.code === M.code);
              if (E) return { stock: E, shelf: J };
            }
            if (J.contents && J.contents.length > 0) {
              const E = N(J.contents);
              if (E) return E;
            }
          }
          return null;
        },
        F = n ? N([n]) : null;
      d({
        code: M.code,
        name: M.name,
        cht_name: M.cht_name,
        skdiacode: M.SKDIACODE || M.skdiacode,
        serverName:
          (w = F == null ? void 0 : F.shelf) == null ? void 0 : w.serverName,
        serverType:
          (U = F == null ? void 0 : F.shelf) == null ? void 0 : U.serverType,
      }),
        _(!0);
    };
    if (!e) return null;
    const oe = () => {
        if (!(S != null && S.med_list) || S.med_list.length === 0)
          return r.jsx("div", {
            className: "flex items-center justify-center h-full text-gray-400",
            children: r.jsx("p", { children: "無藥品資料" }),
          });
        const M = [...S.med_list].sort((N, F) => N.code.localeCompare(F.code));
        return r.jsx("div", {
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
                children: M.map((N, F) => {
                  const w = i && l && N.code == l,
                    U = h.includes(N.code);
                  let C = 0;
                  N.qty.forEach((E) => {
                    C += +E;
                  }),
                    F === 0 &&
                      console.log("🧪 ContainerDetailModal - 第一筆藥品檢查:", {
                        medCode: N.code,
                        highlightedCode: l,
                        isHighlightActive: i,
                        isHighlighted: w,
                        isPendingRequisition: U,
                        comparison: `${N.code} == ${l} = ${N.code == l}`,
                      });
                  const J = V();
                  return r.jsxs(
                    "tr",
                    {
                      className: `transition-colors cursor-pointer ${
                        U
                          ? "highlight-breathe-red"
                          : w
                          ? `highlight-breathe-${J}`
                          : "hover:bg-gray-50"
                      }`,
                      onClick: () => A(N),
                      children: [
                        r.jsx("td", {
                          className: "border border-gray-300 px-1 py-2 text-sm",
                          children: N.code || "-",
                        }),
                        r.jsx("td", {
                          className: "border border-gray-300 px-1 py-2 text-sm",
                          children: N.SKDIACODE || "-",
                        }),
                        r.jsx("td", {
                          className: "border border-gray-300 px-1 py-2 text-sm",
                          children: N.name || "-",
                        }),
                        r.jsx("td", {
                          className:
                            "border border-gray-300 px-1 py-2 text-sm text-right",
                          children: C || "-",
                        }),
                        r.jsx("td", {
                          className:
                            "border border-gray-300 px-1 py-2 text-sm text-center",
                          children: N.stockCol || "-",
                        }),
                        r.jsx("td", {
                          className:
                            "border border-gray-300 px-1 py-2 text-sm text-center",
                          children: N.stockRow || "-",
                        }),
                        r.jsx("td", {
                          className:
                            "border border-gray-300 px-1 py-2 text-sm text-center",
                          children: N.stock || "-",
                        }),
                      ],
                    },
                    F
                  );
                }),
              }),
            ],
          }),
        });
      },
      ue = () =>
        n
          ? r.jsx(Bh, {
              container: S,
              highlightedMedicineCode: i ? l : null,
              pendingRequisitionCodes: h,
              onMedicineClick: A,
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
                      children: r.jsx(Ke, {
                        className: "w-6 h-6 text-gray-700",
                      }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 overflow-hidden p-3",
                  children: s === "list_mode" ? oe() : ue(),
                }),
              ],
            }),
          ],
        }),
        r.jsx(Hh, {
          isOpen: k,
          onClose: () => _(!1),
          medicineInfo: u,
          requisitions: u ? m.filter((M) => M.code === u.code) : [],
          distributions: u ? j.filter((M) => M.code === u.code) : [],
          onNoticeUpdated: P,
        }),
      ],
    });
  },
  qh = () => {
    const {
        editStoreShelfModalOpen: e,
        closeEditStoreShelfModal: t,
        selectedStoreShelfForEdit: n,
        showNotification: s,
        updateContainerInLocalData: o,
      } = lt(),
      [l, a] = f.useState({
        name: "",
        position: "",
        width: "85",
        height: "29",
        ip: "",
        serverName: "",
        serverType: "",
        deviceType: "",
      }),
      [i, c] = f.useState(!1);
    f.useEffect(() => {
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
    const h = (p, j) => {
        a((b) => ({ ...b, [p]: j }));
      },
      g = async () => {
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
            const p = {
                Data: [
                  {
                    Master_GUID: n.Master_GUID,
                    name: l.name.trim(),
                    position: l.position.trim(),
                    type: n.type,
                    width: l.width,
                    height: l.height,
                    ip_light: l.ip.trim(),
                    ip: l.ip.trim(),
                    device_type: l.deviceType,
                    serverName: l.serverName.trim(),
                    serverType: l.serverType.trim(),
                    GUID: n.GUID,
                  },
                ],
              },
              b = `${(await De.getConfig()).domain}/api/medmap/update_shelf`,
              _ = await (
                await fetch(b, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(p),
                })
              ).json();
            console.log(p),
              console.log(_),
              _.Code === 200
                ? (s("層架更新成功", "success"),
                  o(n.GUID, {
                    name: l.name.trim(),
                    gird_position: l.position.trim(),
                    width: l.width,
                    height: l.height,
                    ip: l.ip.trim(),
                    device_type: l.deviceType,
                    serverName: l.serverName.trim(),
                    serverType: l.serverType.trim(),
                  }),
                  t())
                : s(_.Result || "更新失敗", "error");
          } catch (p) {
            console.error("更新層架失敗:", p),
              s("更新失敗，請稍後再試", "error");
          } finally {
            c(!1);
          }
        }
      },
      m = () => {
        t();
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: m,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200 w-[600px]",
              onClick: (p) => p.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(Sr, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "編輯層架設定",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: m,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ke, { className: "w-6 h-6" }),
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
                            onChange: (p) => h("name", p.target.value),
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
                            onChange: (p) => h("position", p.target.value),
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
                                onChange: (p) => h("width", p.target.value),
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
                                onChange: (p) => h("height", p.target.value),
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
                            onChange: (p) => h("ip", p.target.value),
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
                            onChange: (p) => h("serverName", p.target.value),
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
                            onChange: (p) => h("serverType", p.target.value),
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
                            onChange: (p) => h("deviceType", p.target.value),
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
                      onClick: m,
                      disabled: i,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                      children: "取消",
                    }),
                    r.jsxs("button", {
                      onClick: g,
                      disabled: i,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        i && r.jsx(Ot, { className: "w-4 h-4 animate-spin" }),
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
  Wh = () => {
    const {
        editParentContainerModalOpen: e,
        closeEditParentContainerModal: t,
        selectedParentContainerForEdit: n,
        showNotification: s,
        updateContainerInLocalData: o,
      } = lt(),
      [l, a] = f.useState({
        name: "",
        position: "",
        ip_light: "",
        serverName: "",
        serverType: "",
        deviceType: "",
        reverse: "False",
      }),
      [i, c] = f.useState(!1);
    f.useEffect(() => {
      n &&
        e &&
        a({
          name: n.name || "",
          position: n.gird_position || "",
          ip_light: n.ip_light || "",
          serverName: n.serverName || "",
          serverType: n.serverType || "",
          deviceType: n.device_type || "",
          reverse: n.reverse || "False",
        });
    }, [n, e]);
    const h = (p, j) => {
        a((b) => ({ ...b, [p]: j }));
      },
      g = async () => {
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
            let p = `${n.position.x},${n.position.y}`;
            const j = [
              {
                GUID: n.GUID,
                name: l.name.trim(),
                position: l.position.trim(),
                absolute_position: p || "0,0",
                ip_light: l.ip_light.trim(),
                serverName: l.serverName.trim(),
                serverType: l.serverType.trim(),
                device_type: l.deviceType,
                reverse: l.reverse,
              },
            ];
            console.log("=========", j, "=========");
            const b = await De.updateMedMapSection(j);
            b.Code === 200
              ? (s("父容器更新成功", "success"),
                o(n.GUID, {
                  name: l.name.trim(),
                  gird_position: l.position.trim(),
                  ip_light: l.ip_light.trim(),
                  serverName: l.serverName.trim(),
                  serverType: l.serverType.trim(),
                  device_type: l.deviceType,
                  reverse: l.reverse,
                }),
                t())
              : s(b.Result || "更新失敗", "error");
          } catch (p) {
            console.error("更新父容器失敗:", p),
              s("更新失敗，請稍後再試", "error");
          } finally {
            c(!1);
          }
        }
      },
      m = () => {
        t();
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: m,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200 w-[600px]",
              onClick: (p) => p.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(Sr, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "編輯父容器設定",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: m,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ke, { className: "w-6 h-6" }),
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
                            onChange: (p) => h("name", p.target.value),
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
                            onChange: (p) => h("position", p.target.value),
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
                            onChange: (p) => h("ip_light", p.target.value),
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
                            onChange: (p) => h("serverName", p.target.value),
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
                            onChange: (p) => h("serverType", p.target.value),
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
                            onChange: (p) => h("deviceType", p.target.value),
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
                      r.jsxs("div", {
                        children: [
                          r.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: "貨品反轉",
                          }),
                          r.jsx("button", {
                            type: "button",
                            onClick: () =>
                              h(
                                "reverse",
                                l.reverse === "True" ? "False" : "True"
                              ),
                            className: `relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                              l.reverse === "True"
                                ? "bg-blue-600"
                                : "bg-gray-300"
                            }`,
                            children: r.jsx("span", {
                              className: `inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                                l.reverse === "True"
                                  ? "translate-x-7"
                                  : "translate-x-1"
                              }`,
                            }),
                          }),
                          r.jsx("span", {
                            className: "ml-3 text-sm text-gray-600",
                            children:
                              l.reverse === "True" ? "已啟用" : "未啟用",
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
                      onClick: m,
                      disabled: i,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                      children: "取消",
                    }),
                    r.jsxs("button", {
                      onClick: g,
                      disabled: i,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        i && r.jsx(Ot, { className: "w-4 h-4 animate-spin" }),
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
  Yh = ({ isOpen: e, onLoginSuccess: t }) => {
    const { t: n } = Mt(),
      [s, o] = f.useState(""),
      [l, a] = f.useState(""),
      [i, c] = f.useState(!1),
      [h, g] = f.useState(!1),
      [m, p] = f.useState(""),
      j = async (k) => {
        if ((k.preventDefault(), !s.trim() || !l.trim())) {
          p("Please enter both ID and password");
          return;
        }
        g(!0), p("");
        try {
          const _ = await De.login({ ID: s.trim(), Password: l });
          if (_.Code === 200 && _.Data) {
            const u = { ..._.Data, loginTime: new Date().toISOString() };
            sessionStorage.setItem("user_session", JSON.stringify(u)), t(u);
          } else p(_.Result || "Login failed");
        } catch (_) {
          console.error("Login failed:", _),
            p("Network error. Please try again.");
        } finally {
          g(!1);
        }
      },
      b = (k) => {
        k.key === "Enter" && !h && j(k);
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
                    m &&
                      r.jsx("div", {
                        className:
                          "mb-6 p-4 bg-red-50 border border-red-200 rounded-lg",
                        children: r.jsx("p", {
                          className: "text-red-600 text-sm",
                          children: m,
                        }),
                      }),
                    r.jsxs("form", {
                      onSubmit: j,
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
                              onChange: (k) => o(k.target.value),
                              onKeyPress: b,
                              placeholder: n("login.userIdPlaceholder"),
                              className:
                                "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              disabled: h,
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
                                  onChange: (k) => a(k.target.value),
                                  onKeyPress: b,
                                  placeholder: n("login.passwordPlaceholder"),
                                  className:
                                    "w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                  disabled: h,
                                  autoComplete: "current-password",
                                }),
                                r.jsx("button", {
                                  type: "button",
                                  onClick: () => c(!i),
                                  className:
                                    "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors",
                                  disabled: h,
                                  children: i
                                    ? r.jsx(tf, { className: "w-5 h-5" })
                                    : r.jsx(nf, { className: "w-5 h-5" }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        r.jsx("button", {
                          type: "submit",
                          disabled: h || !s.trim() || !l.trim(),
                          className:
                            "w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: h
                            ? r.jsxs(r.Fragment, {
                                children: [
                                  r.jsx(Ot, {
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
  Xh = ({ isVisible: e, message: t }) => {
    const { t: n } = Mt();
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
                        children: r.jsx(ji, {
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
                      r.jsx(Ot, {
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
  Qh = ({
    message: e,
    type: t,
    isVisible: n,
    onClose: s,
    duration: o = 3e3,
  }) => {
    const [l, a] = f.useState(!1);
    return (
      f.useEffect(() => {
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
                  ? r.jsx(ih, { className: "w-5 h-5 text-green-600" })
                  : r.jsx(yh, { className: "w-5 h-5 text-red-600" }),
                r.jsx("span", {
                  className: "text-sm font-medium",
                  children: e,
                }),
                r.jsx("button", {
                  onClick: s,
                  className: `p-1 rounded-full hover:bg-black/10 transition-colors ${
                    t === "success" ? "text-green-600" : "text-red-600"
                  }`,
                  children: r.jsx(Ke, { className: "w-4 h-4" }),
                }),
              ],
            }),
          })
        : null
    );
  };
function Kh() {
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
    closeAddParentContainerModal: h,
    selectedDepartmentForAdd: g,
    addStoreItemModalOpen: m,
    closeAddStoreItemModal: p,
    selectedStoreShelfForAdd: j,
    addDepartmentModalOpen: b,
    closeAddDepartmentModal: k,
    qrCodeScannerModalOpen: _,
    qrCodeScannerMode: u,
    closeQRCodeScannerModal: d,
    addBarcodeModalOpen: x,
    closeAddBarcodeModal: v,
    initialBarcodeValue: T,
    containerDetailModalOpen: S,
    closeContainerDetailModal: R,
    selectedContainerForDetail: V,
    setMedicineList: P,
    setIsLoadingMedicines: A,
    showNotification: oe,
  } = lt();
  f.useEffect(() => {
    (() => {
      try {
        const w = sessionStorage.getItem("user_session");
        if (w) {
          const U = JSON.parse(w);
          U.GUID && U.ID && U.Name
            ? (o(U), s(!0))
            : sessionStorage.removeItem("user_session");
        }
      } catch (w) {
        console.error("Error checking session:", w),
          sessionStorage.removeItem("user_session");
      }
    })();
  }, [s, o]),
    f.useEffect(() => {
      let F = !0;
      return (
        (async () => {
          if (n) {
            A(!0);
            try {
              console.log("開始載入藥品資料...");
              const U = await De.getMedicineCloud();
              if ((console.log("藥品資料 API 回應:", U), !F)) return;
              U.Code === 200 && U.Data
                ? (P(U.Data),
                  console.log(`✅ 成功載入 ${U.Data.length} 筆藥品資料`),
                  oe(`載入 ${U.Data.length} 筆藥品資料`, "success"))
                : (console.warn("API 回應異常:", U),
                  P([]),
                  oe("藥品資料載入異常，請稍後重試", "error"));
            } catch (U) {
              if (!F) return;
              console.error("載入藥品資料失敗:", U),
                P([]),
                oe("無法連線到藥品資料庫，部分功能可能無法使用", "error");
            } finally {
              F && A(!1);
            }
          }
        })(),
        () => {
          F = !1;
        }
      );
    }, [n]);
  const ue = (F) => {
      o(F), s(!0);
    },
    M = ho.useRef(null),
    N = (F, w) => {
      if (
        (console.log("📸 QR掃描成功 - handleQRScanSuccess 被調用:", {
          barcode: F,
          medicineData: w,
          mode: u,
        }),
        console.log("📸 當前 mode:", u),
        console.log("📸 當前 viewMode:", t),
        console.log("📸 drugCanvasRef.current:", M.current),
        u === "track_Drug_mode")
      ) {
        if ((console.log("✅ 進入 track_Drug_mode 分支"), t !== "medicine")) {
          console.warn("⚠️ 當前不在藥品地圖視圖，無法定位藥品"),
            oe("請切換到藥品地圖視圖後再使用此功能", "error");
          return;
        }
        M.current
          ? (console.log("✅ drugCanvasRef.current 存在"),
            console.log(
              "📸 drugCanvasRef.current.locateDrug 類型:",
              typeof M.current.locateDrug
            ),
            typeof M.current.locateDrug == "function"
              ? (console.log("✅ 呼叫 locateDrug 函數"),
                M.current.locateDrug(w))
              : console.warn("⚠️ locateDrug 不是函數"))
          : console.warn("⚠️ drugCanvasRef.current 不存在");
      } else console.log("⚠️ mode 不是 track_Drug_mode，當前 mode:", u);
    };
  return n
    ? r.jsxs("div", {
        className: "min-h-screen bg-gray-50",
        children: [
          r.jsx(vh, {}),
          r.jsx(bh, {}),
          r.jsx(Sh, {}),
          r.jsx("div", {
            className: "fixed inset-0",
            children: r.jsx("div", {
              className: "w-full h-full",
              children:
                t === "department" ? r.jsx(_h, {}) : r.jsx(lf, { ref: M }),
            }),
          }),
          r.jsx(Ch, {}),
          r.jsx(Th, {}),
          r.jsx(Rh, {}),
          r.jsx($h, {}),
          r.jsx(Ah, {}),
          r.jsx(Oh, {}),
          r.jsx(Uh, {}),
          r.jsx(Lh, { isOpen: m, onClose: p, storeShelf: j }),
          r.jsx(Gh, { isOpen: b, onClose: k }),
          r.jsx(rl, { isOpen: _, onClose: d, mode: u, onScanSuccess: N }),
          r.jsx(zh, { isOpen: x, onClose: v, initialBarcode: T }),
          r.jsx(Vh, { isOpen: S, onClose: R, container: V }),
          r.jsx(qh, {}),
          r.jsx(Wh, {}),
          r.jsx(Xh, { isVisible: l }),
          r.jsx(Qh, {
            message: a.message,
            type: a.type,
            isVisible: a.isVisible,
            onClose: i,
          }),
        ],
      })
    : r.jsx(Yh, { isOpen: !0, onLoginSuccess: ue });
}
function Jh() {
  return r.jsx(sh, { children: r.jsx(nh, { children: r.jsx(Kh, {}) }) });
}
Qu(document.getElementById("root")).render(
  r.jsx(f.StrictMode, { children: r.jsx(Jh, {}) })
);
