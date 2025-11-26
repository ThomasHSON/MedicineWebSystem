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
function wf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var jc = { exports: {} },
  Eo = {},
  Sc = { exports: {} },
  Re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ns = Symbol.for("react.element"),
  bf = Symbol.for("react.portal"),
  Nf = Symbol.for("react.fragment"),
  jf = Symbol.for("react.strict_mode"),
  Sf = Symbol.for("react.profiler"),
  Cf = Symbol.for("react.provider"),
  kf = Symbol.for("react.context"),
  Df = Symbol.for("react.forward_ref"),
  _f = Symbol.for("react.suspense"),
  Mf = Symbol.for("react.memo"),
  Ef = Symbol.for("react.lazy"),
  ui = Symbol.iterator;
function If(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ui && e[ui]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Cc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  kc = Object.assign,
  Dc = {};
function Tr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Dc),
    (this.updater = n || Cc);
}
Tr.prototype.isReactComponent = {};
Tr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Tr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function _c() {}
_c.prototype = Tr.prototype;
function ma(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Dc),
    (this.updater = n || Cc);
}
var ha = (ma.prototype = new _c());
ha.constructor = ma;
kc(ha, Tr.prototype);
ha.isPureReactComponent = !0;
var fi = Array.isArray,
  Mc = Object.prototype.hasOwnProperty,
  ga = { current: null },
  Ec = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ic(e, t, n) {
  var s,
    o = {},
    l = null,
    a = null;
  if (t != null)
    for (s in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Mc.call(t, s) && !Ec.hasOwnProperty(s) && (o[s] = t[s]);
  var i = arguments.length - 2;
  if (i === 1) o.children = n;
  else if (1 < i) {
    for (var c = Array(i), g = 0; g < i; g++) c[g] = arguments[g + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (s in ((i = e.defaultProps), i)) o[s] === void 0 && (o[s] = i[s]);
  return {
    $$typeof: Ns,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: ga.current,
  };
}
function Pf(e, t) {
  return {
    $$typeof: Ns,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function xa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ns;
}
function Tf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var pi = /\/+/g;
function Xo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Tf("" + e.key)
    : t.toString(36);
}
function qs(e, t, n, s, o) {
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
          case Ns:
          case bf:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = s === "" ? "." + Xo(a, 0) : s),
      fi(o)
        ? ((n = ""),
          e != null && (n = e.replace(pi, "$&/") + "/"),
          qs(o, t, n, "", function (g) {
            return g;
          }))
        : o != null &&
          (xa(o) &&
            (o = Pf(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(pi, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (s = s === "" ? "." : s + ":"), fi(e)))
    for (var i = 0; i < e.length; i++) {
      l = e[i];
      var c = s + Xo(l, i);
      a += qs(l, t, n, c, o);
    }
  else if (((c = If(e)), typeof c == "function"))
    for (e = c.call(e), i = 0; !(l = e.next()).done; )
      (l = l.value), (c = s + Xo(l, i++)), (a += qs(l, t, n, c, o));
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
function Ds(e, t, n) {
  if (e == null) return e;
  var s = [],
    o = 0;
  return (
    qs(e, s, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    s
  );
}
function Rf(e) {
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
var ht = { current: null },
  Ws = { transition: null },
  Af = {
    ReactCurrentDispatcher: ht,
    ReactCurrentBatchConfig: Ws,
    ReactCurrentOwner: ga,
  };
function Pc() {
  throw Error("act(...) is not supported in production builds of React.");
}
Re.Children = {
  map: Ds,
  forEach: function (e, t, n) {
    Ds(
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
      Ds(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ds(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!xa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Re.Component = Tr;
Re.Fragment = Nf;
Re.Profiler = Sf;
Re.PureComponent = ma;
Re.StrictMode = jf;
Re.Suspense = _f;
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Af;
Re.act = Pc;
Re.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var s = kc({}, e.props),
    o = e.key,
    l = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (a = ga.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (c in t)
      Mc.call(t, c) &&
        !Ec.hasOwnProperty(c) &&
        (s[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) s.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var g = 0; g < c; g++) i[g] = arguments[g + 2];
    s.children = i;
  }
  return { $$typeof: Ns, type: e.type, key: o, ref: l, props: s, _owner: a };
};
Re.createContext = function (e) {
  return (
    (e = {
      $$typeof: kf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Cf, _context: e }),
    (e.Consumer = e)
  );
};
Re.createElement = Ic;
Re.createFactory = function (e) {
  var t = Ic.bind(null, e);
  return (t.type = e), t;
};
Re.createRef = function () {
  return { current: null };
};
Re.forwardRef = function (e) {
  return { $$typeof: Df, render: e };
};
Re.isValidElement = xa;
Re.lazy = function (e) {
  return { $$typeof: Ef, _payload: { _status: -1, _result: e }, _init: Rf };
};
Re.memo = function (e, t) {
  return { $$typeof: Mf, type: e, compare: t === void 0 ? null : t };
};
Re.startTransition = function (e) {
  var t = Ws.transition;
  Ws.transition = {};
  try {
    e();
  } finally {
    Ws.transition = t;
  }
};
Re.unstable_act = Pc;
Re.useCallback = function (e, t) {
  return ht.current.useCallback(e, t);
};
Re.useContext = function (e) {
  return ht.current.useContext(e);
};
Re.useDebugValue = function () {};
Re.useDeferredValue = function (e) {
  return ht.current.useDeferredValue(e);
};
Re.useEffect = function (e, t) {
  return ht.current.useEffect(e, t);
};
Re.useId = function () {
  return ht.current.useId();
};
Re.useImperativeHandle = function (e, t, n) {
  return ht.current.useImperativeHandle(e, t, n);
};
Re.useInsertionEffect = function (e, t) {
  return ht.current.useInsertionEffect(e, t);
};
Re.useLayoutEffect = function (e, t) {
  return ht.current.useLayoutEffect(e, t);
};
Re.useMemo = function (e, t) {
  return ht.current.useMemo(e, t);
};
Re.useReducer = function (e, t, n) {
  return ht.current.useReducer(e, t, n);
};
Re.useRef = function (e) {
  return ht.current.useRef(e);
};
Re.useState = function (e) {
  return ht.current.useState(e);
};
Re.useSyncExternalStore = function (e, t, n) {
  return ht.current.useSyncExternalStore(e, t, n);
};
Re.useTransition = function () {
  return ht.current.useTransition();
};
Re.version = "18.3.1";
Sc.exports = Re;
var p = Sc.exports;
const so = wf(p);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $f = p,
  Of = Symbol.for("react.element"),
  Lf = Symbol.for("react.fragment"),
  Uf = Object.prototype.hasOwnProperty,
  Bf = $f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  zf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tc(e, t, n) {
  var s,
    o = {},
    l = null,
    a = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (s in t) Uf.call(t, s) && !zf.hasOwnProperty(s) && (o[s] = t[s]);
  if (e && e.defaultProps)
    for (s in ((t = e.defaultProps), t)) o[s] === void 0 && (o[s] = t[s]);
  return {
    $$typeof: Of,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: Bf.current,
  };
}
Eo.Fragment = Lf;
Eo.jsx = Tc;
Eo.jsxs = Tc;
jc.exports = Eo;
var r = jc.exports,
  Rc = { exports: {} },
  Pt = {},
  Ac = { exports: {} },
  $c = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, V) {
    var ie = N.length;
    N.push(V);
    e: for (; 0 < ie; ) {
      var q = (ie - 1) >>> 1,
        re = N[q];
      if (0 < o(re, V)) (N[q] = V), (N[ie] = re), (ie = q);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function s(N) {
    if (N.length === 0) return null;
    var V = N[0],
      ie = N.pop();
    if (ie !== V) {
      N[0] = ie;
      e: for (var q = 0, re = N.length, xe = re >>> 1; q < xe; ) {
        var ce = 2 * (q + 1) - 1,
          B = N[ce],
          se = ce + 1,
          H = N[se];
        if (0 > o(B, ie))
          se < re && 0 > o(H, B)
            ? ((N[q] = H), (N[se] = ie), (q = se))
            : ((N[q] = B), (N[ce] = ie), (q = ce));
        else if (se < re && 0 > o(H, ie)) (N[q] = H), (N[se] = ie), (q = se);
        else break e;
      }
    }
    return V;
  }
  function o(N, V) {
    var ie = N.sortIndex - V.sortIndex;
    return ie !== 0 ? ie : N.id - V.id;
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
    g = [],
    m = 1,
    h = null,
    u = 3,
    j = !1,
    b = !1,
    _ = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(N) {
    for (var V = n(g); V !== null; ) {
      if (V.callback === null) s(g);
      else if (V.startTime <= N)
        s(g), (V.sortIndex = V.expirationTime), t(c, V);
      else break;
      V = n(g);
    }
  }
  function D(N) {
    if (((_ = !1), x(N), !b))
      if (n(c) !== null) (b = !0), y(R);
      else {
        var V = n(g);
        V !== null && T(D, V.startTime - N);
      }
  }
  function R(N, V) {
    (b = !1), _ && ((_ = !1), f(F), (F = -1)), (j = !0);
    var ie = u;
    try {
      for (
        x(V), h = n(c);
        h !== null && (!(h.expirationTime > V) || (N && !X()));

      ) {
        var q = h.callback;
        if (typeof q == "function") {
          (h.callback = null), (u = h.priorityLevel);
          var re = q(h.expirationTime <= V);
          (V = e.unstable_now()),
            typeof re == "function" ? (h.callback = re) : h === n(c) && s(c),
            x(V);
        } else s(c);
        h = n(c);
      }
      if (h !== null) var xe = !0;
      else {
        var ce = n(g);
        ce !== null && T(D, ce.startTime - V), (xe = !1);
      }
      return xe;
    } finally {
      (h = null), (u = ie), (j = !1);
    }
  }
  var E = !1,
    I = null,
    F = -1,
    oe = 5,
    A = -1;
  function X() {
    return !(e.unstable_now() - A < oe);
  }
  function ae() {
    if (I !== null) {
      var N = e.unstable_now();
      A = N;
      var V = !0;
      try {
        V = I(!0, N);
      } finally {
        V ? S() : ((E = !1), (I = null));
      }
    } else E = !1;
  }
  var S;
  if (typeof d == "function")
    S = function () {
      d(ae);
    };
  else if (typeof MessageChannel < "u") {
    var v = new MessageChannel(),
      G = v.port2;
    (v.port1.onmessage = ae),
      (S = function () {
        G.postMessage(null);
      });
  } else
    S = function () {
      k(ae, 0);
    };
  function y(N) {
    (I = N), E || ((E = !0), S());
  }
  function T(N, V) {
    F = k(function () {
      N(e.unstable_now());
    }, V);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      b || j || ((b = !0), y(R));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (oe = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return u;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (N) {
      switch (u) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = u;
      }
      var ie = u;
      u = V;
      try {
        return N();
      } finally {
        u = ie;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, V) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var ie = u;
      u = N;
      try {
        return V();
      } finally {
        u = ie;
      }
    }),
    (e.unstable_scheduleCallback = function (N, V, ie) {
      var q = e.unstable_now();
      switch (
        (typeof ie == "object" && ie !== null
          ? ((ie = ie.delay),
            (ie = typeof ie == "number" && 0 < ie ? q + ie : q))
          : (ie = q),
        N)
      ) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return (
        (re = ie + re),
        (N = {
          id: m++,
          callback: V,
          priorityLevel: N,
          startTime: ie,
          expirationTime: re,
          sortIndex: -1,
        }),
        ie > q
          ? ((N.sortIndex = ie),
            t(g, N),
            n(c) === null &&
              N === n(g) &&
              (_ ? (f(F), (F = -1)) : (_ = !0), T(D, ie - q)))
          : ((N.sortIndex = re), t(c, N), b || j || ((b = !0), y(R))),
        N
      );
    }),
    (e.unstable_shouldYield = X),
    (e.unstable_wrapCallback = function (N) {
      var V = u;
      return function () {
        var ie = u;
        u = V;
        try {
          return N.apply(this, arguments);
        } finally {
          u = ie;
        }
      };
    });
})($c);
Ac.exports = $c;
var Gf = Ac.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ff = p,
  It = Gf;
function le(e) {
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
var Oc = new Set(),
  os = {};
function Jn(e, t) {
  Cr(e, t), Cr(e + "Capture", t);
}
function Cr(e, t) {
  for (os[e] = t, e = 0; e < t.length; e++) Oc.add(t[e]);
}
var dn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  bl = Object.prototype.hasOwnProperty,
  Hf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  mi = {},
  hi = {};
function Vf(e) {
  return bl.call(hi, e)
    ? !0
    : bl.call(mi, e)
    ? !1
    : Hf.test(e)
    ? (hi[e] = !0)
    : ((mi[e] = !0), !1);
}
function qf(e, t, n, s) {
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
function Wf(e, t, n, s) {
  if (t === null || typeof t > "u" || qf(e, t, n, s)) return !0;
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
function gt(e, t, n, s, o, l, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = s),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = a);
}
var at = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    at[e] = new gt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  at[t] = new gt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  at[e] = new gt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  at[e] = new gt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    at[e] = new gt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  at[e] = new gt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  at[e] = new gt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  at[e] = new gt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  at[e] = new gt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ya = /[\-:]([a-z])/g;
function va(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ya, va);
    at[t] = new gt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ya, va);
    at[t] = new gt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ya, va);
  at[t] = new gt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  at[e] = new gt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
at.xlinkHref = new gt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  at[e] = new gt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function wa(e, t, n, s) {
  var o = at.hasOwnProperty(t) ? at[t] : null;
  (o !== null
    ? o.type !== 0
    : s ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Wf(t, n, o, s) && (n = null),
    s || o === null
      ? Vf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var mn = Ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  _s = Symbol.for("react.element"),
  or = Symbol.for("react.portal"),
  lr = Symbol.for("react.fragment"),
  ba = Symbol.for("react.strict_mode"),
  Nl = Symbol.for("react.profiler"),
  Lc = Symbol.for("react.provider"),
  Uc = Symbol.for("react.context"),
  Na = Symbol.for("react.forward_ref"),
  jl = Symbol.for("react.suspense"),
  Sl = Symbol.for("react.suspense_list"),
  ja = Symbol.for("react.memo"),
  xn = Symbol.for("react.lazy"),
  Bc = Symbol.for("react.offscreen"),
  gi = Symbol.iterator;
function Or(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (gi && e[gi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var qe = Object.assign,
  Qo;
function Vr(e) {
  if (Qo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Qo = (t && t[1]) || "";
    }
  return (
    `
` +
    Qo +
    e
  );
}
var Ko = !1;
function Jo(e, t) {
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
        } catch (g) {
          var s = g;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (g) {
          s = g;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (g) {
        s = g;
      }
      e();
    }
  } catch (g) {
    if (g && s && typeof g.stack == "string") {
      for (
        var o = g.stack.split(`
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
    (Ko = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Vr(e) : "";
}
function Yf(e) {
  switch (e.tag) {
    case 5:
      return Vr(e.type);
    case 16:
      return Vr("Lazy");
    case 13:
      return Vr("Suspense");
    case 19:
      return Vr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Jo(e.type, !1)), e;
    case 11:
      return (e = Jo(e.type.render, !1)), e;
    case 1:
      return (e = Jo(e.type, !0)), e;
    default:
      return "";
  }
}
function Cl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case lr:
      return "Fragment";
    case or:
      return "Portal";
    case Nl:
      return "Profiler";
    case ba:
      return "StrictMode";
    case jl:
      return "Suspense";
    case Sl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Uc:
        return (e.displayName || "Context") + ".Consumer";
      case Lc:
        return (e._context.displayName || "Context") + ".Provider";
      case Na:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ja:
        return (
          (t = e.displayName || null), t !== null ? t : Cl(e.type) || "Memo"
        );
      case xn:
        (t = e._payload), (e = e._init);
        try {
          return Cl(e(t));
        } catch {}
    }
  return null;
}
function Xf(e) {
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
      return Cl(t);
    case 8:
      return t === ba ? "StrictMode" : "Mode";
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
function Pn(e) {
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
function zc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Qf(e) {
  var t = zc(e) ? "checked" : "value",
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
function Ms(e) {
  e._valueTracker || (e._valueTracker = Qf(e));
}
function Gc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    s = "";
  return (
    e && (s = zc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = s),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function oo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function kl(e, t) {
  var n = t.checked;
  return qe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function xi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    s = t.checked != null ? t.checked : t.defaultChecked;
  (n = Pn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: s,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Fc(e, t) {
  (t = t.checked), t != null && wa(e, "checked", t, !1);
}
function Dl(e, t) {
  Fc(e, t);
  var n = Pn(t.value),
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
    ? _l(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && _l(e, t.type, Pn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function yi(e, t, n) {
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
function _l(e, t, n) {
  (t !== "number" || oo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var qr = Array.isArray;
function vr(e, t, n, s) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && s && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Pn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), s && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ml(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(le(91));
  return qe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function vi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(le(92));
      if (qr(n)) {
        if (1 < n.length) throw Error(le(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Pn(n) };
}
function Hc(e, t) {
  var n = Pn(t.value),
    s = Pn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    s != null && (e.defaultValue = "" + s);
}
function wi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function El(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Vc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Es,
  qc = (function (e) {
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
        Es = Es || document.createElement("div"),
          Es.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Es.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ls(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Xr = {
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
  Kf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Xr).forEach(function (e) {
  Kf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xr[t] = Xr[e]);
  });
});
function Wc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Xr.hasOwnProperty(e) && Xr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Yc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0,
        o = Wc(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Jf = qe(
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
function Il(e, t) {
  if (t) {
    if (Jf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(le(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(le(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(le(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(le(62));
  }
}
function Pl(e, t) {
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
var Tl = null;
function Sa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Rl = null,
  wr = null,
  br = null;
function bi(e) {
  if ((e = Cs(e))) {
    if (typeof Rl != "function") throw Error(le(280));
    var t = e.stateNode;
    t && ((t = Ao(t)), Rl(e.stateNode, e.type, t));
  }
}
function Xc(e) {
  wr ? (br ? br.push(e) : (br = [e])) : (wr = e);
}
function Qc() {
  if (wr) {
    var e = wr,
      t = br;
    if (((br = wr = null), bi(e), t)) for (e = 0; e < t.length; e++) bi(t[e]);
  }
}
function Kc(e, t) {
  return e(t);
}
function Jc() {}
var Zo = !1;
function Zc(e, t, n) {
  if (Zo) return e(t, n);
  Zo = !0;
  try {
    return Kc(e, t, n);
  } finally {
    (Zo = !1), (wr !== null || br !== null) && (Jc(), Qc());
  }
}
function as(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var s = Ao(n);
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
  if (n && typeof n != "function") throw Error(le(231, t, typeof n));
  return n;
}
var Al = !1;
if (dn)
  try {
    var Lr = {};
    Object.defineProperty(Lr, "passive", {
      get: function () {
        Al = !0;
      },
    }),
      window.addEventListener("test", Lr, Lr),
      window.removeEventListener("test", Lr, Lr);
  } catch {
    Al = !1;
  }
function Zf(e, t, n, s, o, l, a, i, c) {
  var g = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, g);
  } catch (m) {
    this.onError(m);
  }
}
var Qr = !1,
  lo = null,
  ao = !1,
  $l = null,
  ep = {
    onError: function (e) {
      (Qr = !0), (lo = e);
    },
  };
function tp(e, t, n, s, o, l, a, i, c) {
  (Qr = !1), (lo = null), Zf.apply(ep, arguments);
}
function np(e, t, n, s, o, l, a, i, c) {
  if ((tp.apply(this, arguments), Qr)) {
    if (Qr) {
      var g = lo;
      (Qr = !1), (lo = null);
    } else throw Error(le(198));
    ao || ((ao = !0), ($l = g));
  }
}
function Zn(e) {
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
function ed(e) {
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
function Ni(e) {
  if (Zn(e) !== e) throw Error(le(188));
}
function rp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Zn(e)), t === null)) throw Error(le(188));
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
        if (l === n) return Ni(o), e;
        if (l === s) return Ni(o), t;
        l = l.sibling;
      }
      throw Error(le(188));
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
        if (!a) throw Error(le(189));
      }
    }
    if (n.alternate !== s) throw Error(le(190));
  }
  if (n.tag !== 3) throw Error(le(188));
  return n.stateNode.current === n ? e : t;
}
function td(e) {
  return (e = rp(e)), e !== null ? nd(e) : null;
}
function nd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = nd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var rd = It.unstable_scheduleCallback,
  ji = It.unstable_cancelCallback,
  sp = It.unstable_shouldYield,
  op = It.unstable_requestPaint,
  Xe = It.unstable_now,
  lp = It.unstable_getCurrentPriorityLevel,
  Ca = It.unstable_ImmediatePriority,
  sd = It.unstable_UserBlockingPriority,
  io = It.unstable_NormalPriority,
  ap = It.unstable_LowPriority,
  od = It.unstable_IdlePriority,
  Io = null,
  tn = null;
function ip(e) {
  if (tn && typeof tn.onCommitFiberRoot == "function")
    try {
      tn.onCommitFiberRoot(Io, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Wt = Math.clz32 ? Math.clz32 : up,
  cp = Math.log,
  dp = Math.LN2;
function up(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((cp(e) / dp) | 0)) | 0;
}
var Is = 64,
  Ps = 4194304;
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
function co(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var s = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var i = a & ~o;
    i !== 0 ? (s = Wr(i)) : ((l &= a), l !== 0 && (s = Wr(l)));
  } else (a = n & ~o), a !== 0 ? (s = Wr(a)) : l !== 0 && (s = Wr(l));
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
      (n = 31 - Wt(t)), (o = 1 << n), (s |= e[n]), (t &= ~o);
  return s;
}
function fp(e, t) {
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
function pp(e, t) {
  for (
    var n = e.suspendedLanes,
      s = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var a = 31 - Wt(l),
      i = 1 << a,
      c = o[a];
    c === -1
      ? (!(i & n) || i & s) && (o[a] = fp(i, t))
      : c <= t && (e.expiredLanes |= i),
      (l &= ~i);
  }
}
function Ol(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ld() {
  var e = Is;
  return (Is <<= 1), !(Is & 4194240) && (Is = 64), e;
}
function el(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function js(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Wt(t)),
    (e[t] = n);
}
function mp(e, t) {
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
    var o = 31 - Wt(n),
      l = 1 << o;
    (t[o] = 0), (s[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function ka(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var s = 31 - Wt(n),
      o = 1 << s;
    (o & t) | (e[s] & t) && (e[s] |= t), (n &= ~o);
  }
}
var Oe = 0;
function ad(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var id,
  Da,
  cd,
  dd,
  ud,
  Ll = !1,
  Ts = [],
  Sn = null,
  Cn = null,
  kn = null,
  is = new Map(),
  cs = new Map(),
  vn = [],
  hp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Si(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Sn = null;
      break;
    case "dragenter":
    case "dragleave":
      Cn = null;
      break;
    case "mouseover":
    case "mouseout":
      kn = null;
      break;
    case "pointerover":
    case "pointerout":
      is.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      cs.delete(t.pointerId);
  }
}
function Ur(e, t, n, s, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: s,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Cs(t)), t !== null && Da(t)),
      e)
    : ((e.eventSystemFlags |= s),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function gp(e, t, n, s, o) {
  switch (t) {
    case "focusin":
      return (Sn = Ur(Sn, e, t, n, s, o)), !0;
    case "dragenter":
      return (Cn = Ur(Cn, e, t, n, s, o)), !0;
    case "mouseover":
      return (kn = Ur(kn, e, t, n, s, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return is.set(l, Ur(is.get(l) || null, e, t, n, s, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), cs.set(l, Ur(cs.get(l) || null, e, t, n, s, o)), !0
      );
  }
  return !1;
}
function fd(e) {
  var t = Gn(e.target);
  if (t !== null) {
    var n = Zn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ed(n)), t !== null)) {
          (e.blockedOn = t),
            ud(e.priority, function () {
              cd(n);
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
function Ys(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ul(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var s = new n.constructor(n.type, n);
      (Tl = s), n.target.dispatchEvent(s), (Tl = null);
    } else return (t = Cs(n)), t !== null && Da(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ci(e, t, n) {
  Ys(e) && n.delete(t);
}
function xp() {
  (Ll = !1),
    Sn !== null && Ys(Sn) && (Sn = null),
    Cn !== null && Ys(Cn) && (Cn = null),
    kn !== null && Ys(kn) && (kn = null),
    is.forEach(Ci),
    cs.forEach(Ci);
}
function Br(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ll ||
      ((Ll = !0),
      It.unstable_scheduleCallback(It.unstable_NormalPriority, xp)));
}
function ds(e) {
  function t(o) {
    return Br(o, e);
  }
  if (0 < Ts.length) {
    Br(Ts[0], e);
    for (var n = 1; n < Ts.length; n++) {
      var s = Ts[n];
      s.blockedOn === e && (s.blockedOn = null);
    }
  }
  for (
    Sn !== null && Br(Sn, e),
      Cn !== null && Br(Cn, e),
      kn !== null && Br(kn, e),
      is.forEach(t),
      cs.forEach(t),
      n = 0;
    n < vn.length;
    n++
  )
    (s = vn[n]), s.blockedOn === e && (s.blockedOn = null);
  for (; 0 < vn.length && ((n = vn[0]), n.blockedOn === null); )
    fd(n), n.blockedOn === null && vn.shift();
}
var Nr = mn.ReactCurrentBatchConfig,
  uo = !0;
function yp(e, t, n, s) {
  var o = Oe,
    l = Nr.transition;
  Nr.transition = null;
  try {
    (Oe = 1), _a(e, t, n, s);
  } finally {
    (Oe = o), (Nr.transition = l);
  }
}
function vp(e, t, n, s) {
  var o = Oe,
    l = Nr.transition;
  Nr.transition = null;
  try {
    (Oe = 4), _a(e, t, n, s);
  } finally {
    (Oe = o), (Nr.transition = l);
  }
}
function _a(e, t, n, s) {
  if (uo) {
    var o = Ul(e, t, n, s);
    if (o === null) dl(e, t, s, fo, n), Si(e, s);
    else if (gp(o, e, t, n, s)) s.stopPropagation();
    else if ((Si(e, s), t & 4 && -1 < hp.indexOf(e))) {
      for (; o !== null; ) {
        var l = Cs(o);
        if (
          (l !== null && id(l),
          (l = Ul(e, t, n, s)),
          l === null && dl(e, t, s, fo, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && s.stopPropagation();
    } else dl(e, t, s, null, n);
  }
}
var fo = null;
function Ul(e, t, n, s) {
  if (((fo = null), (e = Sa(s)), (e = Gn(e)), e !== null))
    if (((t = Zn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ed(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (fo = e), null;
}
function pd(e) {
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
      switch (lp()) {
        case Ca:
          return 1;
        case sd:
          return 4;
        case io:
        case ap:
          return 16;
        case od:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var bn = null,
  Ma = null,
  Xs = null;
function md() {
  if (Xs) return Xs;
  var e,
    t = Ma,
    n = t.length,
    s,
    o = "value" in bn ? bn.value : bn.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (s = 1; s <= a && t[n - s] === o[l - s]; s++);
  return (Xs = o.slice(e, 1 < s ? 1 - s : void 0));
}
function Qs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Rs() {
  return !0;
}
function ki() {
  return !1;
}
function Tt(e) {
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
        ? Rs
        : ki),
      (this.isPropagationStopped = ki),
      this
    );
  }
  return (
    qe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Rs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Rs));
      },
      persist: function () {},
      isPersistent: Rs,
    }),
    t
  );
}
var Rr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ea = Tt(Rr),
  Ss = qe({}, Rr, { view: 0, detail: 0 }),
  wp = Tt(Ss),
  tl,
  nl,
  zr,
  Po = qe({}, Ss, {
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
    getModifierState: Ia,
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
        : (e !== zr &&
            (zr && e.type === "mousemove"
              ? ((tl = e.screenX - zr.screenX), (nl = e.screenY - zr.screenY))
              : (nl = tl = 0),
            (zr = e)),
          tl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : nl;
    },
  }),
  Di = Tt(Po),
  bp = qe({}, Po, { dataTransfer: 0 }),
  Np = Tt(bp),
  jp = qe({}, Ss, { relatedTarget: 0 }),
  rl = Tt(jp),
  Sp = qe({}, Rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cp = Tt(Sp),
  kp = qe({}, Rr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Dp = Tt(kp),
  _p = qe({}, Rr, { data: 0 }),
  _i = Tt(_p),
  Mp = {
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
  Ep = {
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
  Ip = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Pp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ip[e]) ? !!t[e] : !1;
}
function Ia() {
  return Pp;
}
var Tp = qe({}, Ss, {
    key: function (e) {
      if (e.key) {
        var t = Mp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Qs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Ep[e.keyCode] || "Unidentified"
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
    getModifierState: Ia,
    charCode: function (e) {
      return e.type === "keypress" ? Qs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Qs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Rp = Tt(Tp),
  Ap = qe({}, Po, {
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
  Mi = Tt(Ap),
  $p = qe({}, Ss, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ia,
  }),
  Op = Tt($p),
  Lp = qe({}, Rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Up = Tt(Lp),
  Bp = qe({}, Po, {
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
  zp = Tt(Bp),
  Gp = [9, 13, 27, 32],
  Pa = dn && "CompositionEvent" in window,
  Kr = null;
dn && "documentMode" in document && (Kr = document.documentMode);
var Fp = dn && "TextEvent" in window && !Kr,
  hd = dn && (!Pa || (Kr && 8 < Kr && 11 >= Kr)),
  Ei = " ",
  Ii = !1;
function gd(e, t) {
  switch (e) {
    case "keyup":
      return Gp.indexOf(t.keyCode) !== -1;
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
function xd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ar = !1;
function Hp(e, t) {
  switch (e) {
    case "compositionend":
      return xd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ii = !0), Ei);
    case "textInput":
      return (e = t.data), e === Ei && Ii ? null : e;
    default:
      return null;
  }
}
function Vp(e, t) {
  if (ar)
    return e === "compositionend" || (!Pa && gd(e, t))
      ? ((e = md()), (Xs = Ma = bn = null), (ar = !1), e)
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
      return hd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var qp = {
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
function Pi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!qp[e.type] : t === "textarea";
}
function yd(e, t, n, s) {
  Xc(s),
    (t = po(t, "onChange")),
    0 < t.length &&
      ((n = new Ea("onChange", "change", null, n, s)),
      e.push({ event: n, listeners: t }));
}
var Jr = null,
  us = null;
function Wp(e) {
  Md(e, 0);
}
function To(e) {
  var t = dr(e);
  if (Gc(t)) return e;
}
function Yp(e, t) {
  if (e === "change") return t;
}
var vd = !1;
if (dn) {
  var sl;
  if (dn) {
    var ol = "oninput" in document;
    if (!ol) {
      var Ti = document.createElement("div");
      Ti.setAttribute("oninput", "return;"),
        (ol = typeof Ti.oninput == "function");
    }
    sl = ol;
  } else sl = !1;
  vd = sl && (!document.documentMode || 9 < document.documentMode);
}
function Ri() {
  Jr && (Jr.detachEvent("onpropertychange", wd), (us = Jr = null));
}
function wd(e) {
  if (e.propertyName === "value" && To(us)) {
    var t = [];
    yd(t, us, e, Sa(e)), Zc(Wp, t);
  }
}
function Xp(e, t, n) {
  e === "focusin"
    ? (Ri(), (Jr = t), (us = n), Jr.attachEvent("onpropertychange", wd))
    : e === "focusout" && Ri();
}
function Qp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return To(us);
}
function Kp(e, t) {
  if (e === "click") return To(t);
}
function Jp(e, t) {
  if (e === "input" || e === "change") return To(t);
}
function Zp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Xt = typeof Object.is == "function" ? Object.is : Zp;
function fs(e, t) {
  if (Xt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    s = Object.keys(t);
  if (n.length !== s.length) return !1;
  for (s = 0; s < n.length; s++) {
    var o = n[s];
    if (!bl.call(t, o) || !Xt(e[o], t[o])) return !1;
  }
  return !0;
}
function Ai(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $i(e, t) {
  var n = Ai(e);
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
    n = Ai(n);
  }
}
function bd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? bd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Nd() {
  for (var e = window, t = oo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = oo(e.document);
  }
  return t;
}
function Ta(e) {
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
function em(e) {
  var t = Nd(),
    n = e.focusedElem,
    s = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    bd(n.ownerDocument.documentElement, n)
  ) {
    if (s !== null && Ta(n)) {
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
          (o = $i(n, l));
        var a = $i(n, s);
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
var tm = dn && "documentMode" in document && 11 >= document.documentMode,
  ir = null,
  Bl = null,
  Zr = null,
  zl = !1;
function Oi(e, t, n) {
  var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zl ||
    ir == null ||
    ir !== oo(s) ||
    ((s = ir),
    "selectionStart" in s && Ta(s)
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
    (Zr && fs(Zr, s)) ||
      ((Zr = s),
      (s = po(Bl, "onSelect")),
      0 < s.length &&
        ((t = new Ea("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: s }),
        (t.target = ir))));
}
function As(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var cr = {
    animationend: As("Animation", "AnimationEnd"),
    animationiteration: As("Animation", "AnimationIteration"),
    animationstart: As("Animation", "AnimationStart"),
    transitionend: As("Transition", "TransitionEnd"),
  },
  ll = {},
  jd = {};
dn &&
  ((jd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete cr.animationend.animation,
    delete cr.animationiteration.animation,
    delete cr.animationstart.animation),
  "TransitionEvent" in window || delete cr.transitionend.transition);
function Ro(e) {
  if (ll[e]) return ll[e];
  if (!cr[e]) return e;
  var t = cr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in jd) return (ll[e] = t[n]);
  return e;
}
var Sd = Ro("animationend"),
  Cd = Ro("animationiteration"),
  kd = Ro("animationstart"),
  Dd = Ro("transitionend"),
  _d = new Map(),
  Li =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Rn(e, t) {
  _d.set(e, t), Jn(t, [e]);
}
for (var al = 0; al < Li.length; al++) {
  var il = Li[al],
    nm = il.toLowerCase(),
    rm = il[0].toUpperCase() + il.slice(1);
  Rn(nm, "on" + rm);
}
Rn(Sd, "onAnimationEnd");
Rn(Cd, "onAnimationIteration");
Rn(kd, "onAnimationStart");
Rn("dblclick", "onDoubleClick");
Rn("focusin", "onFocus");
Rn("focusout", "onBlur");
Rn(Dd, "onTransitionEnd");
Cr("onMouseEnter", ["mouseout", "mouseover"]);
Cr("onMouseLeave", ["mouseout", "mouseover"]);
Cr("onPointerEnter", ["pointerout", "pointerover"]);
Cr("onPointerLeave", ["pointerout", "pointerover"]);
Jn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Jn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Jn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Jn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Yr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  sm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));
function Ui(e, t, n) {
  var s = e.type || "unknown-event";
  (e.currentTarget = n), np(s, t, void 0, e), (e.currentTarget = null);
}
function Md(e, t) {
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
            g = i.currentTarget;
          if (((i = i.listener), c !== l && o.isPropagationStopped())) break e;
          Ui(o, i, g), (l = c);
        }
      else
        for (a = 0; a < s.length; a++) {
          if (
            ((i = s[a]),
            (c = i.instance),
            (g = i.currentTarget),
            (i = i.listener),
            c !== l && o.isPropagationStopped())
          )
            break e;
          Ui(o, i, g), (l = c);
        }
    }
  }
  if (ao) throw ((e = $l), (ao = !1), ($l = null), e);
}
function Ue(e, t) {
  var n = t[ql];
  n === void 0 && (n = t[ql] = new Set());
  var s = e + "__bubble";
  n.has(s) || (Ed(t, e, 2, !1), n.add(s));
}
function cl(e, t, n) {
  var s = 0;
  t && (s |= 4), Ed(n, e, s, t);
}
var $s = "_reactListening" + Math.random().toString(36).slice(2);
function ps(e) {
  if (!e[$s]) {
    (e[$s] = !0),
      Oc.forEach(function (n) {
        n !== "selectionchange" && (sm.has(n) || cl(n, !1, e), cl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[$s] || ((t[$s] = !0), cl("selectionchange", !1, t));
  }
}
function Ed(e, t, n, s) {
  switch (pd(t)) {
    case 1:
      var o = yp;
      break;
    case 4:
      o = vp;
      break;
    default:
      o = _a;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Al ||
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
function dl(e, t, n, s, o) {
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
          if (((a = Gn(i)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            s = l = a;
            continue e;
          }
          i = i.parentNode;
        }
      }
      s = s.return;
    }
  Zc(function () {
    var g = l,
      m = Sa(n),
      h = [];
    e: {
      var u = _d.get(e);
      if (u !== void 0) {
        var j = Ea,
          b = e;
        switch (e) {
          case "keypress":
            if (Qs(n) === 0) break e;
          case "keydown":
          case "keyup":
            j = Rp;
            break;
          case "focusin":
            (b = "focus"), (j = rl);
            break;
          case "focusout":
            (b = "blur"), (j = rl);
            break;
          case "beforeblur":
          case "afterblur":
            j = rl;
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
            j = Di;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            j = Np;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            j = Op;
            break;
          case Sd:
          case Cd:
          case kd:
            j = Cp;
            break;
          case Dd:
            j = Up;
            break;
          case "scroll":
            j = wp;
            break;
          case "wheel":
            j = zp;
            break;
          case "copy":
          case "cut":
          case "paste":
            j = Dp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            j = Mi;
        }
        var _ = (t & 4) !== 0,
          k = !_ && e === "scroll",
          f = _ ? (u !== null ? u + "Capture" : null) : u;
        _ = [];
        for (var d = g, x; d !== null; ) {
          x = d;
          var D = x.stateNode;
          if (
            (x.tag === 5 &&
              D !== null &&
              ((x = D),
              f !== null && ((D = as(d, f)), D != null && _.push(ms(d, D, x)))),
            k)
          )
            break;
          d = d.return;
        }
        0 < _.length &&
          ((u = new j(u, b, null, n, m)), h.push({ event: u, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((u = e === "mouseover" || e === "pointerover"),
          (j = e === "mouseout" || e === "pointerout"),
          u &&
            n !== Tl &&
            (b = n.relatedTarget || n.fromElement) &&
            (Gn(b) || b[un]))
        )
          break e;
        if (
          (j || u) &&
          ((u =
            m.window === m
              ? m
              : (u = m.ownerDocument)
              ? u.defaultView || u.parentWindow
              : window),
          j
            ? ((b = n.relatedTarget || n.toElement),
              (j = g),
              (b = b ? Gn(b) : null),
              b !== null &&
                ((k = Zn(b)), b !== k || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
            : ((j = null), (b = g)),
          j !== b)
        ) {
          if (
            ((_ = Di),
            (D = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((_ = Mi),
              (D = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (k = j == null ? u : dr(j)),
            (x = b == null ? u : dr(b)),
            (u = new _(D, d + "leave", j, n, m)),
            (u.target = k),
            (u.relatedTarget = x),
            (D = null),
            Gn(m) === g &&
              ((_ = new _(f, d + "enter", b, n, m)),
              (_.target = x),
              (_.relatedTarget = k),
              (D = _)),
            (k = D),
            j && b)
          )
            t: {
              for (_ = j, f = b, d = 0, x = _; x; x = sr(x)) d++;
              for (x = 0, D = f; D; D = sr(D)) x++;
              for (; 0 < d - x; ) (_ = sr(_)), d--;
              for (; 0 < x - d; ) (f = sr(f)), x--;
              for (; d--; ) {
                if (_ === f || (f !== null && _ === f.alternate)) break t;
                (_ = sr(_)), (f = sr(f));
              }
              _ = null;
            }
          else _ = null;
          j !== null && Bi(h, u, j, _, !1),
            b !== null && k !== null && Bi(h, k, b, _, !0);
        }
      }
      e: {
        if (
          ((u = g ? dr(g) : window),
          (j = u.nodeName && u.nodeName.toLowerCase()),
          j === "select" || (j === "input" && u.type === "file"))
        )
          var R = Yp;
        else if (Pi(u))
          if (vd) R = Jp;
          else {
            R = Qp;
            var E = Xp;
          }
        else
          (j = u.nodeName) &&
            j.toLowerCase() === "input" &&
            (u.type === "checkbox" || u.type === "radio") &&
            (R = Kp);
        if (R && (R = R(e, g))) {
          yd(h, R, n, m);
          break e;
        }
        E && E(e, u, g),
          e === "focusout" &&
            (E = u._wrapperState) &&
            E.controlled &&
            u.type === "number" &&
            _l(u, "number", u.value);
      }
      switch (((E = g ? dr(g) : window), e)) {
        case "focusin":
          (Pi(E) || E.contentEditable === "true") &&
            ((ir = E), (Bl = g), (Zr = null));
          break;
        case "focusout":
          Zr = Bl = ir = null;
          break;
        case "mousedown":
          zl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (zl = !1), Oi(h, n, m);
          break;
        case "selectionchange":
          if (tm) break;
        case "keydown":
        case "keyup":
          Oi(h, n, m);
      }
      var I;
      if (Pa)
        e: {
          switch (e) {
            case "compositionstart":
              var F = "onCompositionStart";
              break e;
            case "compositionend":
              F = "onCompositionEnd";
              break e;
            case "compositionupdate":
              F = "onCompositionUpdate";
              break e;
          }
          F = void 0;
        }
      else
        ar
          ? gd(e, n) && (F = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (F = "onCompositionStart");
      F &&
        (hd &&
          n.locale !== "ko" &&
          (ar || F !== "onCompositionStart"
            ? F === "onCompositionEnd" && ar && (I = md())
            : ((bn = m),
              (Ma = "value" in bn ? bn.value : bn.textContent),
              (ar = !0))),
        (E = po(g, F)),
        0 < E.length &&
          ((F = new _i(F, e, null, n, m)),
          h.push({ event: F, listeners: E }),
          I ? (F.data = I) : ((I = xd(n)), I !== null && (F.data = I)))),
        (I = Fp ? Hp(e, n) : Vp(e, n)) &&
          ((g = po(g, "onBeforeInput")),
          0 < g.length &&
            ((m = new _i("onBeforeInput", "beforeinput", null, n, m)),
            h.push({ event: m, listeners: g }),
            (m.data = I)));
    }
    Md(h, t);
  });
}
function ms(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function po(e, t) {
  for (var n = t + "Capture", s = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = as(e, n)),
      l != null && s.unshift(ms(e, l, o)),
      (l = as(e, t)),
      l != null && s.push(ms(e, l, o))),
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
function Bi(e, t, n, s, o) {
  for (var l = t._reactName, a = []; n !== null && n !== s; ) {
    var i = n,
      c = i.alternate,
      g = i.stateNode;
    if (c !== null && c === s) break;
    i.tag === 5 &&
      g !== null &&
      ((i = g),
      o
        ? ((c = as(n, l)), c != null && a.unshift(ms(n, c, i)))
        : o || ((c = as(n, l)), c != null && a.push(ms(n, c, i)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var om = /\r\n?/g,
  lm = /\u0000|\uFFFD/g;
function zi(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      om,
      `
`
    )
    .replace(lm, "");
}
function Os(e, t, n) {
  if (((t = zi(t)), zi(e) !== t && n)) throw Error(le(425));
}
function mo() {}
var Gl = null,
  Fl = null;
function Hl(e, t) {
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
var Vl = typeof setTimeout == "function" ? setTimeout : void 0,
  am = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Gi = typeof Promise == "function" ? Promise : void 0,
  im =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Gi < "u"
      ? function (e) {
          return Gi.resolve(null).then(e).catch(cm);
        }
      : Vl;
function cm(e) {
  setTimeout(function () {
    throw e;
  });
}
function ul(e, t) {
  var n = t,
    s = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (s === 0) {
          e.removeChild(o), ds(t);
          return;
        }
        s--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || s++;
    n = o;
  } while (n);
  ds(t);
}
function Dn(e) {
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
function Fi(e) {
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
var Ar = Math.random().toString(36).slice(2),
  en = "__reactFiber$" + Ar,
  hs = "__reactProps$" + Ar,
  un = "__reactContainer$" + Ar,
  ql = "__reactEvents$" + Ar,
  dm = "__reactListeners$" + Ar,
  um = "__reactHandles$" + Ar;
function Gn(e) {
  var t = e[en];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[un] || n[en])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Fi(e); e !== null; ) {
          if ((n = e[en])) return n;
          e = Fi(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Cs(e) {
  return (
    (e = e[en] || e[un]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function dr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(le(33));
}
function Ao(e) {
  return e[hs] || null;
}
var Wl = [],
  ur = -1;
function An(e) {
  return { current: e };
}
function Be(e) {
  0 > ur || ((e.current = Wl[ur]), (Wl[ur] = null), ur--);
}
function Le(e, t) {
  ur++, (Wl[ur] = e.current), (e.current = t);
}
var Tn = {},
  ut = An(Tn),
  Nt = An(!1),
  Wn = Tn;
function kr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Tn;
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
function jt(e) {
  return (e = e.childContextTypes), e != null;
}
function ho() {
  Be(Nt), Be(ut);
}
function Hi(e, t, n) {
  if (ut.current !== Tn) throw Error(le(168));
  Le(ut, t), Le(Nt, n);
}
function Id(e, t, n) {
  var s = e.stateNode;
  if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
    return n;
  s = s.getChildContext();
  for (var o in s) if (!(o in t)) throw Error(le(108, Xf(e) || "Unknown", o));
  return qe({}, n, s);
}
function go(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Tn),
    (Wn = ut.current),
    Le(ut, e),
    Le(Nt, Nt.current),
    !0
  );
}
function Vi(e, t, n) {
  var s = e.stateNode;
  if (!s) throw Error(le(169));
  n
    ? ((e = Id(e, t, Wn)),
      (s.__reactInternalMemoizedMergedChildContext = e),
      Be(Nt),
      Be(ut),
      Le(ut, e))
    : Be(Nt),
    Le(Nt, n);
}
var on = null,
  $o = !1,
  fl = !1;
function Pd(e) {
  on === null ? (on = [e]) : on.push(e);
}
function fm(e) {
  ($o = !0), Pd(e);
}
function $n() {
  if (!fl && on !== null) {
    fl = !0;
    var e = 0,
      t = Oe;
    try {
      var n = on;
      for (Oe = 1; e < n.length; e++) {
        var s = n[e];
        do s = s(!0);
        while (s !== null);
      }
      (on = null), ($o = !1);
    } catch (o) {
      throw (on !== null && (on = on.slice(e + 1)), rd(Ca, $n), o);
    } finally {
      (Oe = t), (fl = !1);
    }
  }
  return null;
}
var fr = [],
  pr = 0,
  xo = null,
  yo = 0,
  At = [],
  $t = 0,
  Yn = null,
  ln = 1,
  an = "";
function Bn(e, t) {
  (fr[pr++] = yo), (fr[pr++] = xo), (xo = e), (yo = t);
}
function Td(e, t, n) {
  (At[$t++] = ln), (At[$t++] = an), (At[$t++] = Yn), (Yn = e);
  var s = ln;
  e = an;
  var o = 32 - Wt(s) - 1;
  (s &= ~(1 << o)), (n += 1);
  var l = 32 - Wt(t) + o;
  if (30 < l) {
    var a = o - (o % 5);
    (l = (s & ((1 << a) - 1)).toString(32)),
      (s >>= a),
      (o -= a),
      (ln = (1 << (32 - Wt(t) + o)) | (n << o) | s),
      (an = l + e);
  } else (ln = (1 << l) | (n << o) | s), (an = e);
}
function Ra(e) {
  e.return !== null && (Bn(e, 1), Td(e, 1, 0));
}
function Aa(e) {
  for (; e === xo; )
    (xo = fr[--pr]), (fr[pr] = null), (yo = fr[--pr]), (fr[pr] = null);
  for (; e === Yn; )
    (Yn = At[--$t]),
      (At[$t] = null),
      (an = At[--$t]),
      (At[$t] = null),
      (ln = At[--$t]),
      (At[$t] = null);
}
var Et = null,
  Mt = null,
  ze = !1,
  qt = null;
function Rd(e, t) {
  var n = Ot(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function qi(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Et = e), (Mt = Dn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Et = e), (Mt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Yn !== null ? { id: ln, overflow: an } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ot(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Et = e),
            (Mt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Yl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xl(e) {
  if (ze) {
    var t = Mt;
    if (t) {
      var n = t;
      if (!qi(e, t)) {
        if (Yl(e)) throw Error(le(418));
        t = Dn(n.nextSibling);
        var s = Et;
        t && qi(e, t)
          ? Rd(s, n)
          : ((e.flags = (e.flags & -4097) | 2), (ze = !1), (Et = e));
      }
    } else {
      if (Yl(e)) throw Error(le(418));
      (e.flags = (e.flags & -4097) | 2), (ze = !1), (Et = e);
    }
  }
}
function Wi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Et = e;
}
function Ls(e) {
  if (e !== Et) return !1;
  if (!ze) return Wi(e), (ze = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Hl(e.type, e.memoizedProps))),
    t && (t = Mt))
  ) {
    if (Yl(e)) throw (Ad(), Error(le(418)));
    for (; t; ) Rd(e, t), (t = Dn(t.nextSibling));
  }
  if ((Wi(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(le(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Mt = Dn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Mt = null;
    }
  } else Mt = Et ? Dn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ad() {
  for (var e = Mt; e; ) e = Dn(e.nextSibling);
}
function Dr() {
  (Mt = Et = null), (ze = !1);
}
function $a(e) {
  qt === null ? (qt = [e]) : qt.push(e);
}
var pm = mn.ReactCurrentBatchConfig;
function Gr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(le(309));
        var s = n.stateNode;
      }
      if (!s) throw Error(le(147, e));
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
    if (typeof e != "string") throw Error(le(284));
    if (!n._owner) throw Error(le(290, e));
  }
  return e;
}
function Us(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      le(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Yi(e) {
  var t = e._init;
  return t(e._payload);
}
function $d(e) {
  function t(f, d) {
    if (e) {
      var x = f.deletions;
      x === null ? ((f.deletions = [d]), (f.flags |= 16)) : x.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), (d = d.sibling);
    return null;
  }
  function s(f, d) {
    for (f = new Map(); d !== null; )
      d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling);
    return f;
  }
  function o(f, d) {
    return (f = In(f, d)), (f.index = 0), (f.sibling = null), f;
  }
  function l(f, d, x) {
    return (
      (f.index = x),
      e
        ? ((x = f.alternate),
          x !== null
            ? ((x = x.index), x < d ? ((f.flags |= 2), d) : x)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function a(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, d, x, D) {
    return d === null || d.tag !== 6
      ? ((d = vl(x, f.mode, D)), (d.return = f), d)
      : ((d = o(d, x)), (d.return = f), d);
  }
  function c(f, d, x, D) {
    var R = x.type;
    return R === lr
      ? m(f, d, x.props.children, D, x.key)
      : d !== null &&
        (d.elementType === R ||
          (typeof R == "object" &&
            R !== null &&
            R.$$typeof === xn &&
            Yi(R) === d.type))
      ? ((D = o(d, x.props)), (D.ref = Gr(f, d, x)), (D.return = f), D)
      : ((D = ro(x.type, x.key, x.props, null, f.mode, D)),
        (D.ref = Gr(f, d, x)),
        (D.return = f),
        D);
  }
  function g(f, d, x, D) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== x.containerInfo ||
      d.stateNode.implementation !== x.implementation
      ? ((d = wl(x, f.mode, D)), (d.return = f), d)
      : ((d = o(d, x.children || [])), (d.return = f), d);
  }
  function m(f, d, x, D, R) {
    return d === null || d.tag !== 7
      ? ((d = qn(x, f.mode, D, R)), (d.return = f), d)
      : ((d = o(d, x)), (d.return = f), d);
  }
  function h(f, d, x) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = vl("" + d, f.mode, x)), (d.return = f), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case _s:
          return (
            (x = ro(d.type, d.key, d.props, null, f.mode, x)),
            (x.ref = Gr(f, null, d)),
            (x.return = f),
            x
          );
        case or:
          return (d = wl(d, f.mode, x)), (d.return = f), d;
        case xn:
          var D = d._init;
          return h(f, D(d._payload), x);
      }
      if (qr(d) || Or(d))
        return (d = qn(d, f.mode, x, null)), (d.return = f), d;
      Us(f, d);
    }
    return null;
  }
  function u(f, d, x, D) {
    var R = d !== null ? d.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return R !== null ? null : i(f, d, "" + x, D);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case _s:
          return x.key === R ? c(f, d, x, D) : null;
        case or:
          return x.key === R ? g(f, d, x, D) : null;
        case xn:
          return (R = x._init), u(f, d, R(x._payload), D);
      }
      if (qr(x) || Or(x)) return R !== null ? null : m(f, d, x, D, null);
      Us(f, x);
    }
    return null;
  }
  function j(f, d, x, D, R) {
    if ((typeof D == "string" && D !== "") || typeof D == "number")
      return (f = f.get(x) || null), i(d, f, "" + D, R);
    if (typeof D == "object" && D !== null) {
      switch (D.$$typeof) {
        case _s:
          return (f = f.get(D.key === null ? x : D.key) || null), c(d, f, D, R);
        case or:
          return (f = f.get(D.key === null ? x : D.key) || null), g(d, f, D, R);
        case xn:
          var E = D._init;
          return j(f, d, x, E(D._payload), R);
      }
      if (qr(D) || Or(D)) return (f = f.get(x) || null), m(d, f, D, R, null);
      Us(d, D);
    }
    return null;
  }
  function b(f, d, x, D) {
    for (
      var R = null, E = null, I = d, F = (d = 0), oe = null;
      I !== null && F < x.length;
      F++
    ) {
      I.index > F ? ((oe = I), (I = null)) : (oe = I.sibling);
      var A = u(f, I, x[F], D);
      if (A === null) {
        I === null && (I = oe);
        break;
      }
      e && I && A.alternate === null && t(f, I),
        (d = l(A, d, F)),
        E === null ? (R = A) : (E.sibling = A),
        (E = A),
        (I = oe);
    }
    if (F === x.length) return n(f, I), ze && Bn(f, F), R;
    if (I === null) {
      for (; F < x.length; F++)
        (I = h(f, x[F], D)),
          I !== null &&
            ((d = l(I, d, F)), E === null ? (R = I) : (E.sibling = I), (E = I));
      return ze && Bn(f, F), R;
    }
    for (I = s(f, I); F < x.length; F++)
      (oe = j(I, f, F, x[F], D)),
        oe !== null &&
          (e && oe.alternate !== null && I.delete(oe.key === null ? F : oe.key),
          (d = l(oe, d, F)),
          E === null ? (R = oe) : (E.sibling = oe),
          (E = oe));
    return (
      e &&
        I.forEach(function (X) {
          return t(f, X);
        }),
      ze && Bn(f, F),
      R
    );
  }
  function _(f, d, x, D) {
    var R = Or(x);
    if (typeof R != "function") throw Error(le(150));
    if (((x = R.call(x)), x == null)) throw Error(le(151));
    for (
      var E = (R = null), I = d, F = (d = 0), oe = null, A = x.next();
      I !== null && !A.done;
      F++, A = x.next()
    ) {
      I.index > F ? ((oe = I), (I = null)) : (oe = I.sibling);
      var X = u(f, I, A.value, D);
      if (X === null) {
        I === null && (I = oe);
        break;
      }
      e && I && X.alternate === null && t(f, I),
        (d = l(X, d, F)),
        E === null ? (R = X) : (E.sibling = X),
        (E = X),
        (I = oe);
    }
    if (A.done) return n(f, I), ze && Bn(f, F), R;
    if (I === null) {
      for (; !A.done; F++, A = x.next())
        (A = h(f, A.value, D)),
          A !== null &&
            ((d = l(A, d, F)), E === null ? (R = A) : (E.sibling = A), (E = A));
      return ze && Bn(f, F), R;
    }
    for (I = s(f, I); !A.done; F++, A = x.next())
      (A = j(I, f, F, A.value, D)),
        A !== null &&
          (e && A.alternate !== null && I.delete(A.key === null ? F : A.key),
          (d = l(A, d, F)),
          E === null ? (R = A) : (E.sibling = A),
          (E = A));
    return (
      e &&
        I.forEach(function (ae) {
          return t(f, ae);
        }),
      ze && Bn(f, F),
      R
    );
  }
  function k(f, d, x, D) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === lr &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case _s:
          e: {
            for (var R = x.key, E = d; E !== null; ) {
              if (E.key === R) {
                if (((R = x.type), R === lr)) {
                  if (E.tag === 7) {
                    n(f, E.sibling),
                      (d = o(E, x.props.children)),
                      (d.return = f),
                      (f = d);
                    break e;
                  }
                } else if (
                  E.elementType === R ||
                  (typeof R == "object" &&
                    R !== null &&
                    R.$$typeof === xn &&
                    Yi(R) === E.type)
                ) {
                  n(f, E.sibling),
                    (d = o(E, x.props)),
                    (d.ref = Gr(f, E, x)),
                    (d.return = f),
                    (f = d);
                  break e;
                }
                n(f, E);
                break;
              } else t(f, E);
              E = E.sibling;
            }
            x.type === lr
              ? ((d = qn(x.props.children, f.mode, D, x.key)),
                (d.return = f),
                (f = d))
              : ((D = ro(x.type, x.key, x.props, null, f.mode, D)),
                (D.ref = Gr(f, d, x)),
                (D.return = f),
                (f = D));
          }
          return a(f);
        case or:
          e: {
            for (E = x.key; d !== null; ) {
              if (d.key === E)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === x.containerInfo &&
                  d.stateNode.implementation === x.implementation
                ) {
                  n(f, d.sibling),
                    (d = o(d, x.children || [])),
                    (d.return = f),
                    (f = d);
                  break e;
                } else {
                  n(f, d);
                  break;
                }
              else t(f, d);
              d = d.sibling;
            }
            (d = wl(x, f.mode, D)), (d.return = f), (f = d);
          }
          return a(f);
        case xn:
          return (E = x._init), k(f, d, E(x._payload), D);
      }
      if (qr(x)) return b(f, d, x, D);
      if (Or(x)) return _(f, d, x, D);
      Us(f, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = o(d, x)), (d.return = f), (f = d))
          : (n(f, d), (d = vl(x, f.mode, D)), (d.return = f), (f = d)),
        a(f))
      : n(f, d);
  }
  return k;
}
var _r = $d(!0),
  Od = $d(!1),
  vo = An(null),
  wo = null,
  mr = null,
  Oa = null;
function La() {
  Oa = mr = wo = null;
}
function Ua(e) {
  var t = vo.current;
  Be(vo), (e._currentValue = t);
}
function Ql(e, t, n) {
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
function jr(e, t) {
  (wo = e),
    (Oa = mr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (wt = !0), (e.firstContext = null));
}
function Bt(e) {
  var t = e._currentValue;
  if (Oa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), mr === null)) {
      if (wo === null) throw Error(le(308));
      (mr = e), (wo.dependencies = { lanes: 0, firstContext: e });
    } else mr = mr.next = e;
  return t;
}
var Fn = null;
function Ba(e) {
  Fn === null ? (Fn = [e]) : Fn.push(e);
}
function Ld(e, t, n, s) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Ba(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    fn(e, s)
  );
}
function fn(e, t) {
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
var yn = !1;
function za(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ud(e, t) {
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
function cn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function _n(e, t, n) {
  var s = e.updateQueue;
  if (s === null) return null;
  if (((s = s.shared), Ae & 2)) {
    var o = s.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (s.pending = t),
      fn(e, n)
    );
  }
  return (
    (o = s.interleaved),
    o === null ? ((t.next = t), Ba(s)) : ((t.next = o.next), (o.next = t)),
    (s.interleaved = t),
    fn(e, n)
  );
}
function Ks(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var s = t.lanes;
    (s &= e.pendingLanes), (n |= s), (t.lanes = n), ka(e, n);
  }
}
function Xi(e, t) {
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
function bo(e, t, n, s) {
  var o = e.updateQueue;
  yn = !1;
  var l = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    i = o.shared.pending;
  if (i !== null) {
    o.shared.pending = null;
    var c = i,
      g = c.next;
    (c.next = null), a === null ? (l = g) : (a.next = g), (a = c);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (i = m.lastBaseUpdate),
      i !== a &&
        (i === null ? (m.firstBaseUpdate = g) : (i.next = g),
        (m.lastBaseUpdate = c)));
  }
  if (l !== null) {
    var h = o.baseState;
    (a = 0), (m = g = c = null), (i = l);
    do {
      var u = i.lane,
        j = i.eventTime;
      if ((s & u) === u) {
        m !== null &&
          (m = m.next =
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
            _ = i;
          switch (((u = t), (j = n), _.tag)) {
            case 1:
              if (((b = _.payload), typeof b == "function")) {
                h = b.call(j, h, u);
                break e;
              }
              h = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (
                ((b = _.payload),
                (u = typeof b == "function" ? b.call(j, h, u) : b),
                u == null)
              )
                break e;
              h = qe({}, h, u);
              break e;
            case 2:
              yn = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64),
          (u = o.effects),
          u === null ? (o.effects = [i]) : u.push(i));
      } else
        (j = {
          eventTime: j,
          lane: u,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          m === null ? ((g = m = j), (c = h)) : (m = m.next = j),
          (a |= u);
      if (((i = i.next), i === null)) {
        if (((i = o.shared.pending), i === null)) break;
        (u = i),
          (i = u.next),
          (u.next = null),
          (o.lastBaseUpdate = u),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (c = h),
      (o.baseState = c),
      (o.firstBaseUpdate = g),
      (o.lastBaseUpdate = m),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (Qn |= a), (e.lanes = a), (e.memoizedState = h);
  }
}
function Qi(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var s = e[t],
        o = s.callback;
      if (o !== null) {
        if (((s.callback = null), (s = n), typeof o != "function"))
          throw Error(le(191, o));
        o.call(s);
      }
    }
}
var ks = {},
  nn = An(ks),
  gs = An(ks),
  xs = An(ks);
function Hn(e) {
  if (e === ks) throw Error(le(174));
  return e;
}
function Ga(e, t) {
  switch ((Le(xs, t), Le(gs, e), Le(nn, ks), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : El(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = El(t, e));
  }
  Be(nn), Le(nn, t);
}
function Mr() {
  Be(nn), Be(gs), Be(xs);
}
function Bd(e) {
  Hn(xs.current);
  var t = Hn(nn.current),
    n = El(t, e.type);
  t !== n && (Le(gs, e), Le(nn, n));
}
function Fa(e) {
  gs.current === e && (Be(nn), Be(gs));
}
var He = An(0);
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
var pl = [];
function Ha() {
  for (var e = 0; e < pl.length; e++)
    pl[e]._workInProgressVersionPrimary = null;
  pl.length = 0;
}
var Js = mn.ReactCurrentDispatcher,
  ml = mn.ReactCurrentBatchConfig,
  Xn = 0,
  Ve = null,
  et = null,
  rt = null,
  jo = !1,
  es = !1,
  ys = 0,
  mm = 0;
function it() {
  throw Error(le(321));
}
function Va(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Xt(e[n], t[n])) return !1;
  return !0;
}
function qa(e, t, n, s, o, l) {
  if (
    ((Xn = l),
    (Ve = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Js.current = e === null || e.memoizedState === null ? ym : vm),
    (e = n(s, o)),
    es)
  ) {
    l = 0;
    do {
      if (((es = !1), (ys = 0), 25 <= l)) throw Error(le(301));
      (l += 1),
        (rt = et = null),
        (t.updateQueue = null),
        (Js.current = wm),
        (e = n(s, o));
    } while (es);
  }
  if (
    ((Js.current = So),
    (t = et !== null && et.next !== null),
    (Xn = 0),
    (rt = et = Ve = null),
    (jo = !1),
    t)
  )
    throw Error(le(300));
  return e;
}
function Wa() {
  var e = ys !== 0;
  return (ys = 0), e;
}
function Zt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return rt === null ? (Ve.memoizedState = rt = e) : (rt = rt.next = e), rt;
}
function zt() {
  if (et === null) {
    var e = Ve.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = et.next;
  var t = rt === null ? Ve.memoizedState : rt.next;
  if (t !== null) (rt = t), (et = e);
  else {
    if (e === null) throw Error(le(310));
    (et = e),
      (e = {
        memoizedState: et.memoizedState,
        baseState: et.baseState,
        baseQueue: et.baseQueue,
        queue: et.queue,
        next: null,
      }),
      rt === null ? (Ve.memoizedState = rt = e) : (rt = rt.next = e);
  }
  return rt;
}
function vs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function hl(e) {
  var t = zt(),
    n = t.queue;
  if (n === null) throw Error(le(311));
  n.lastRenderedReducer = e;
  var s = et,
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
      g = l;
    do {
      var m = g.lane;
      if ((Xn & m) === m)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null,
            }),
          (s = g.hasEagerState ? g.eagerState : e(s, g.action));
      else {
        var h = {
          lane: m,
          action: g.action,
          hasEagerState: g.hasEagerState,
          eagerState: g.eagerState,
          next: null,
        };
        c === null ? ((i = c = h), (a = s)) : (c = c.next = h),
          (Ve.lanes |= m),
          (Qn |= m);
      }
      g = g.next;
    } while (g !== null && g !== l);
    c === null ? (a = s) : (c.next = i),
      Xt(s, t.memoizedState) || (wt = !0),
      (t.memoizedState = s),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = s);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (Ve.lanes |= l), (Qn |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function gl(e) {
  var t = zt(),
    n = t.queue;
  if (n === null) throw Error(le(311));
  n.lastRenderedReducer = e;
  var s = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (l = e(l, a.action)), (a = a.next);
    while (a !== o);
    Xt(l, t.memoizedState) || (wt = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, s];
}
function zd() {}
function Gd(e, t) {
  var n = Ve,
    s = zt(),
    o = t(),
    l = !Xt(s.memoizedState, o);
  if (
    (l && ((s.memoizedState = o), (wt = !0)),
    (s = s.queue),
    Ya(Vd.bind(null, n, s, e), [e]),
    s.getSnapshot !== t || l || (rt !== null && rt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ws(9, Hd.bind(null, n, s, o, t), void 0, null),
      st === null)
    )
      throw Error(le(349));
    Xn & 30 || Fd(n, t, o);
  }
  return o;
}
function Fd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ve.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Hd(e, t, n, s) {
  (t.value = n), (t.getSnapshot = s), qd(t) && Wd(e);
}
function Vd(e, t, n) {
  return n(function () {
    qd(t) && Wd(e);
  });
}
function qd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Xt(e, n);
  } catch {
    return !0;
  }
}
function Wd(e) {
  var t = fn(e, 1);
  t !== null && Yt(t, e, 1, -1);
}
function Ki(e) {
  var t = Zt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: vs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = xm.bind(null, Ve, e)),
    [t.memoizedState, e]
  );
}
function ws(e, t, n, s) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: s, next: null }),
    (t = Ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ve.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((s = n.next), (n.next = e), (e.next = s), (t.lastEffect = e))),
    e
  );
}
function Yd() {
  return zt().memoizedState;
}
function Zs(e, t, n, s) {
  var o = Zt();
  (Ve.flags |= e),
    (o.memoizedState = ws(1 | t, n, void 0, s === void 0 ? null : s));
}
function Oo(e, t, n, s) {
  var o = zt();
  s = s === void 0 ? null : s;
  var l = void 0;
  if (et !== null) {
    var a = et.memoizedState;
    if (((l = a.destroy), s !== null && Va(s, a.deps))) {
      o.memoizedState = ws(t, n, l, s);
      return;
    }
  }
  (Ve.flags |= e), (o.memoizedState = ws(1 | t, n, l, s));
}
function Ji(e, t) {
  return Zs(8390656, 8, e, t);
}
function Ya(e, t) {
  return Oo(2048, 8, e, t);
}
function Xd(e, t) {
  return Oo(4, 2, e, t);
}
function Qd(e, t) {
  return Oo(4, 4, e, t);
}
function Kd(e, t) {
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
function Jd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Oo(4, 4, Kd.bind(null, t, e), n)
  );
}
function Xa() {}
function Zd(e, t) {
  var n = zt();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && Va(t, s[1])
    ? s[0]
    : ((n.memoizedState = [e, t]), e);
}
function eu(e, t) {
  var n = zt();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && Va(t, s[1])
    ? s[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function tu(e, t, n) {
  return Xn & 21
    ? (Xt(n, t) || ((n = ld()), (Ve.lanes |= n), (Qn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (wt = !0)), (e.memoizedState = n));
}
function hm(e, t) {
  var n = Oe;
  (Oe = n !== 0 && 4 > n ? n : 4), e(!0);
  var s = ml.transition;
  ml.transition = {};
  try {
    e(!1), t();
  } finally {
    (Oe = n), (ml.transition = s);
  }
}
function nu() {
  return zt().memoizedState;
}
function gm(e, t, n) {
  var s = En(e);
  if (
    ((n = {
      lane: s,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ru(e))
  )
    su(t, n);
  else if (((n = Ld(e, t, n, s)), n !== null)) {
    var o = mt();
    Yt(n, e, s, o), ou(n, t, s);
  }
}
function xm(e, t, n) {
  var s = En(e),
    o = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ru(e)) su(t, o);
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
        if (((o.hasEagerState = !0), (o.eagerState = i), Xt(i, a))) {
          var c = t.interleaved;
          c === null
            ? ((o.next = o), Ba(t))
            : ((o.next = c.next), (c.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ld(e, t, o, s)),
      n !== null && ((o = mt()), Yt(n, e, s, o), ou(n, t, s));
  }
}
function ru(e) {
  var t = e.alternate;
  return e === Ve || (t !== null && t === Ve);
}
function su(e, t) {
  es = jo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ou(e, t, n) {
  if (n & 4194240) {
    var s = t.lanes;
    (s &= e.pendingLanes), (n |= s), (t.lanes = n), ka(e, n);
  }
}
var So = {
    readContext: Bt,
    useCallback: it,
    useContext: it,
    useEffect: it,
    useImperativeHandle: it,
    useInsertionEffect: it,
    useLayoutEffect: it,
    useMemo: it,
    useReducer: it,
    useRef: it,
    useState: it,
    useDebugValue: it,
    useDeferredValue: it,
    useTransition: it,
    useMutableSource: it,
    useSyncExternalStore: it,
    useId: it,
    unstable_isNewReconciler: !1,
  },
  ym = {
    readContext: Bt,
    useCallback: function (e, t) {
      return (Zt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Bt,
    useEffect: Ji,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Zs(4194308, 4, Kd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Zs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Zs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Zt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var s = Zt();
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
        (e = e.dispatch = gm.bind(null, Ve, e)),
        [s.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Zt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ki,
    useDebugValue: Xa,
    useDeferredValue: function (e) {
      return (Zt().memoizedState = e);
    },
    useTransition: function () {
      var e = Ki(!1),
        t = e[0];
      return (e = hm.bind(null, e[1])), (Zt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var s = Ve,
        o = Zt();
      if (ze) {
        if (n === void 0) throw Error(le(407));
        n = n();
      } else {
        if (((n = t()), st === null)) throw Error(le(349));
        Xn & 30 || Fd(s, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Ji(Vd.bind(null, s, l, e), [e]),
        (s.flags |= 2048),
        ws(9, Hd.bind(null, s, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Zt(),
        t = st.identifierPrefix;
      if (ze) {
        var n = an,
          s = ln;
        (n = (s & ~(1 << (32 - Wt(s) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ys++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = mm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  vm = {
    readContext: Bt,
    useCallback: Zd,
    useContext: Bt,
    useEffect: Ya,
    useImperativeHandle: Jd,
    useInsertionEffect: Xd,
    useLayoutEffect: Qd,
    useMemo: eu,
    useReducer: hl,
    useRef: Yd,
    useState: function () {
      return hl(vs);
    },
    useDebugValue: Xa,
    useDeferredValue: function (e) {
      var t = zt();
      return tu(t, et.memoizedState, e);
    },
    useTransition: function () {
      var e = hl(vs)[0],
        t = zt().memoizedState;
      return [e, t];
    },
    useMutableSource: zd,
    useSyncExternalStore: Gd,
    useId: nu,
    unstable_isNewReconciler: !1,
  },
  wm = {
    readContext: Bt,
    useCallback: Zd,
    useContext: Bt,
    useEffect: Ya,
    useImperativeHandle: Jd,
    useInsertionEffect: Xd,
    useLayoutEffect: Qd,
    useMemo: eu,
    useReducer: gl,
    useRef: Yd,
    useState: function () {
      return gl(vs);
    },
    useDebugValue: Xa,
    useDeferredValue: function (e) {
      var t = zt();
      return et === null ? (t.memoizedState = e) : tu(t, et.memoizedState, e);
    },
    useTransition: function () {
      var e = gl(vs)[0],
        t = zt().memoizedState;
      return [e, t];
    },
    useMutableSource: zd,
    useSyncExternalStore: Gd,
    useId: nu,
    unstable_isNewReconciler: !1,
  };
function Ht(e, t) {
  if (e && e.defaultProps) {
    (t = qe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Kl(e, t, n, s) {
  (t = e.memoizedState),
    (n = n(s, t)),
    (n = n == null ? t : qe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Lo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Zn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var s = mt(),
      o = En(e),
      l = cn(s, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = _n(e, l, o)),
      t !== null && (Yt(t, e, o, s), Ks(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var s = mt(),
      o = En(e),
      l = cn(s, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = _n(e, l, o)),
      t !== null && (Yt(t, e, o, s), Ks(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = mt(),
      s = En(e),
      o = cn(n, s);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = _n(e, o, s)),
      t !== null && (Yt(t, e, s, n), Ks(t, e, s));
  },
};
function Zi(e, t, n, s, o, l, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(s, l, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !fs(n, s) || !fs(o, l)
      : !0
  );
}
function lu(e, t, n) {
  var s = !1,
    o = Tn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Bt(l))
      : ((o = jt(t) ? Wn : ut.current),
        (s = t.contextTypes),
        (l = (s = s != null) ? kr(e, o) : Tn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Lo),
    (e.stateNode = t),
    (t._reactInternals = e),
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function ec(e, t, n, s) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, s),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, s),
    t.state !== e && Lo.enqueueReplaceState(t, t.state, null);
}
function Jl(e, t, n, s) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), za(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = Bt(l))
    : ((l = jt(t) ? Wn : ut.current), (o.context = kr(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Kl(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Lo.enqueueReplaceState(o, o.state, null),
      bo(e, n, o, s),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Er(e, t) {
  try {
    var n = "",
      s = t;
    do (n += Yf(s)), (s = s.return);
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
function xl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Zl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var bm = typeof WeakMap == "function" ? WeakMap : Map;
function au(e, t, n) {
  (n = cn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var s = t.value;
  return (
    (n.callback = function () {
      ko || ((ko = !0), (ca = s)), Zl(e, t);
    }),
    n
  );
}
function iu(e, t, n) {
  (n = cn(-1, n)), (n.tag = 3);
  var s = e.type.getDerivedStateFromError;
  if (typeof s == "function") {
    var o = t.value;
    (n.payload = function () {
      return s(o);
    }),
      (n.callback = function () {
        Zl(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Zl(e, t),
          typeof s != "function" &&
            (Mn === null ? (Mn = new Set([this])) : Mn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function tc(e, t, n) {
  var s = e.pingCache;
  if (s === null) {
    s = e.pingCache = new bm();
    var o = new Set();
    s.set(t, o);
  } else (o = s.get(t)), o === void 0 && ((o = new Set()), s.set(t, o));
  o.has(n) || (o.add(n), (e = Am.bind(null, e, t, n)), t.then(e, e));
}
function nc(e) {
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
function rc(e, t, n, s, o) {
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
              : ((t = cn(-1, 1)), (t.tag = 2), _n(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Nm = mn.ReactCurrentOwner,
  wt = !1;
function pt(e, t, n, s) {
  t.child = e === null ? Od(t, null, n, s) : _r(t, e.child, n, s);
}
function sc(e, t, n, s, o) {
  n = n.render;
  var l = t.ref;
  return (
    jr(t, o),
    (s = qa(e, t, n, s, l, o)),
    (n = Wa()),
    e !== null && !wt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        pn(e, t, o))
      : (ze && n && Ra(t), (t.flags |= 1), pt(e, t, s, o), t.child)
  );
}
function oc(e, t, n, s, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !ri(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), cu(e, t, l, s, o))
      : ((e = ro(n.type, null, s, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var a = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : fs), n(a, s) && e.ref === t.ref)
    )
      return pn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = In(l, s)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function cu(e, t, n, s, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (fs(l, s) && e.ref === t.ref)
      if (((wt = !1), (t.pendingProps = s = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (wt = !0);
      else return (t.lanes = e.lanes), pn(e, t, o);
  }
  return ea(e, t, n, s, o);
}
function du(e, t, n) {
  var s = t.pendingProps,
    o = s.children,
    l = e !== null ? e.memoizedState : null;
  if (s.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Le(gr, _t),
        (_t |= n);
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
          Le(gr, _t),
          (_t |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (s = l !== null ? l.baseLanes : n),
        Le(gr, _t),
        (_t |= s);
    }
  else
    l !== null ? ((s = l.baseLanes | n), (t.memoizedState = null)) : (s = n),
      Le(gr, _t),
      (_t |= s);
  return pt(e, t, o, n), t.child;
}
function uu(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ea(e, t, n, s, o) {
  var l = jt(n) ? Wn : ut.current;
  return (
    (l = kr(t, l)),
    jr(t, o),
    (n = qa(e, t, n, s, l, o)),
    (s = Wa()),
    e !== null && !wt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        pn(e, t, o))
      : (ze && s && Ra(t), (t.flags |= 1), pt(e, t, n, o), t.child)
  );
}
function lc(e, t, n, s, o) {
  if (jt(n)) {
    var l = !0;
    go(t);
  } else l = !1;
  if ((jr(t, o), t.stateNode === null))
    eo(e, t), lu(t, n, s), Jl(t, n, s, o), (s = !0);
  else if (e === null) {
    var a = t.stateNode,
      i = t.memoizedProps;
    a.props = i;
    var c = a.context,
      g = n.contextType;
    typeof g == "object" && g !== null
      ? (g = Bt(g))
      : ((g = jt(n) ? Wn : ut.current), (g = kr(t, g)));
    var m = n.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== s || c !== g) && ec(t, a, s, g)),
      (yn = !1);
    var u = t.memoizedState;
    (a.state = u),
      bo(t, s, a, o),
      (c = t.memoizedState),
      i !== s || u !== c || Nt.current || yn
        ? (typeof m == "function" && (Kl(t, n, m, s), (c = t.memoizedState)),
          (i = yn || Zi(t, n, i, s, u, c, g))
            ? (h ||
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
          (a.context = g),
          (s = i))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (s = !1));
  } else {
    (a = t.stateNode),
      Ud(e, t),
      (i = t.memoizedProps),
      (g = t.type === t.elementType ? i : Ht(t.type, i)),
      (a.props = g),
      (h = t.pendingProps),
      (u = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = Bt(c))
        : ((c = jt(n) ? Wn : ut.current), (c = kr(t, c)));
    var j = n.getDerivedStateFromProps;
    (m =
      typeof j == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== h || u !== c) && ec(t, a, s, c)),
      (yn = !1),
      (u = t.memoizedState),
      (a.state = u),
      bo(t, s, a, o);
    var b = t.memoizedState;
    i !== h || u !== b || Nt.current || yn
      ? (typeof j == "function" && (Kl(t, n, j, s), (b = t.memoizedState)),
        (g = yn || Zi(t, n, g, s, u, b, c) || !1)
          ? (m ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(s, b, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(s, b, c)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (i === e.memoizedProps && u === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && u === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = s),
            (t.memoizedState = b)),
        (a.props = s),
        (a.state = b),
        (a.context = c),
        (s = g))
      : (typeof a.componentDidUpdate != "function" ||
          (i === e.memoizedProps && u === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (i === e.memoizedProps && u === e.memoizedState) ||
          (t.flags |= 1024),
        (s = !1));
  }
  return ta(e, t, n, s, l, o);
}
function ta(e, t, n, s, o, l) {
  uu(e, t);
  var a = (t.flags & 128) !== 0;
  if (!s && !a) return o && Vi(t, n, !1), pn(e, t, l);
  (s = t.stateNode), (Nm.current = t);
  var i =
    a && typeof n.getDerivedStateFromError != "function" ? null : s.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = _r(t, e.child, null, l)), (t.child = _r(t, null, i, l)))
      : pt(e, t, i, l),
    (t.memoizedState = s.state),
    o && Vi(t, n, !0),
    t.child
  );
}
function fu(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Hi(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Hi(e, t.context, !1),
    Ga(e, t.containerInfo);
}
function ac(e, t, n, s, o) {
  return Dr(), $a(o), (t.flags |= 256), pt(e, t, n, s), t.child;
}
var na = { dehydrated: null, treeContext: null, retryLane: 0 };
function ra(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function pu(e, t, n) {
  var s = t.pendingProps,
    o = He.current,
    l = !1,
    a = (t.flags & 128) !== 0,
    i;
  if (
    ((i = a) ||
      (i = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    i
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Le(He, o & 1),
    e === null)
  )
    return (
      Xl(t),
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
                : (l = zo(a, s, 0, null)),
              (e = qn(e, s, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = ra(n)),
              (t.memoizedState = na),
              e)
            : Qa(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((i = o.dehydrated), i !== null)))
    return jm(e, t, a, s, i, o, n);
  if (l) {
    (l = s.fallback), (a = t.mode), (o = e.child), (i = o.sibling);
    var c = { mode: "hidden", children: s.children };
    return (
      !(a & 1) && t.child !== o
        ? ((s = t.child),
          (s.childLanes = 0),
          (s.pendingProps = c),
          (t.deletions = null))
        : ((s = In(o, c)), (s.subtreeFlags = o.subtreeFlags & 14680064)),
      i !== null ? (l = In(i, l)) : ((l = qn(l, a, n, null)), (l.flags |= 2)),
      (l.return = t),
      (s.return = t),
      (s.sibling = l),
      (t.child = s),
      (s = l),
      (l = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? ra(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (l.memoizedState = a),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = na),
      s
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (s = In(l, { mode: "visible", children: s.children })),
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
function Qa(e, t) {
  return (
    (t = zo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Bs(e, t, n, s) {
  return (
    s !== null && $a(s),
    _r(t, e.child, null, n),
    (e = Qa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function jm(e, t, n, s, o, l, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (s = xl(Error(le(422)))), Bs(e, t, a, s))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = s.fallback),
        (o = t.mode),
        (s = zo({ mode: "visible", children: s.children }, o, 0, null)),
        (l = qn(l, o, a, null)),
        (l.flags |= 2),
        (s.return = t),
        (l.return = t),
        (s.sibling = l),
        (t.child = s),
        t.mode & 1 && _r(t, e.child, null, a),
        (t.child.memoizedState = ra(a)),
        (t.memoizedState = na),
        l);
  if (!(t.mode & 1)) return Bs(e, t, a, null);
  if (o.data === "$!") {
    if (((s = o.nextSibling && o.nextSibling.dataset), s)) var i = s.dgst;
    return (
      (s = i), (l = Error(le(419))), (s = xl(l, s, void 0)), Bs(e, t, a, s)
    );
  }
  if (((i = (a & e.childLanes) !== 0), wt || i)) {
    if (((s = st), s !== null)) {
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
          ((l.retryLane = o), fn(e, o), Yt(s, e, o, -1));
    }
    return ni(), (s = xl(Error(le(421)))), Bs(e, t, a, s);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = $m.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Mt = Dn(o.nextSibling)),
      (Et = t),
      (ze = !0),
      (qt = null),
      e !== null &&
        ((At[$t++] = ln),
        (At[$t++] = an),
        (At[$t++] = Yn),
        (ln = e.id),
        (an = e.overflow),
        (Yn = t)),
      (t = Qa(t, s.children)),
      (t.flags |= 4096),
      t);
}
function ic(e, t, n) {
  e.lanes |= t;
  var s = e.alternate;
  s !== null && (s.lanes |= t), Ql(e.return, t, n);
}
function yl(e, t, n, s, o) {
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
function mu(e, t, n) {
  var s = t.pendingProps,
    o = s.revealOrder,
    l = s.tail;
  if ((pt(e, t, s.children, n), (s = He.current), s & 2))
    (s = (s & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ic(e, n, t);
        else if (e.tag === 19) ic(e, n, t);
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
  if ((Le(He, s), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && No(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          yl(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && No(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        yl(t, !0, n, null, l);
        break;
      case "together":
        yl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function eo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function pn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Qn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(le(153));
  if (t.child !== null) {
    for (
      e = t.child, n = In(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = In(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Sm(e, t, n) {
  switch (t.tag) {
    case 3:
      fu(t), Dr();
      break;
    case 5:
      Bd(t);
      break;
    case 1:
      jt(t.type) && go(t);
      break;
    case 4:
      Ga(t, t.stateNode.containerInfo);
      break;
    case 10:
      var s = t.type._context,
        o = t.memoizedProps.value;
      Le(vo, s._currentValue), (s._currentValue = o);
      break;
    case 13:
      if (((s = t.memoizedState), s !== null))
        return s.dehydrated !== null
          ? (Le(He, He.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? pu(e, t, n)
          : (Le(He, He.current & 1),
            (e = pn(e, t, n)),
            e !== null ? e.sibling : null);
      Le(He, He.current & 1);
      break;
    case 19:
      if (((s = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (s) return mu(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Le(He, He.current),
        s)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), du(e, t, n);
  }
  return pn(e, t, n);
}
var hu, sa, gu, xu;
hu = function (e, t) {
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
sa = function () {};
gu = function (e, t, n, s) {
  var o = e.memoizedProps;
  if (o !== s) {
    (e = t.stateNode), Hn(nn.current);
    var l = null;
    switch (n) {
      case "input":
        (o = kl(e, o)), (s = kl(e, s)), (l = []);
        break;
      case "select":
        (o = qe({}, o, { value: void 0 })),
          (s = qe({}, s, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = Ml(e, o)), (s = Ml(e, s)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof s.onClick == "function" &&
          (e.onclick = mo);
    }
    Il(n, s);
    var a;
    n = null;
    for (g in o)
      if (!s.hasOwnProperty(g) && o.hasOwnProperty(g) && o[g] != null)
        if (g === "style") {
          var i = o[g];
          for (a in i) i.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          g !== "dangerouslySetInnerHTML" &&
            g !== "children" &&
            g !== "suppressContentEditableWarning" &&
            g !== "suppressHydrationWarning" &&
            g !== "autoFocus" &&
            (os.hasOwnProperty(g)
              ? l || (l = [])
              : (l = l || []).push(g, null));
    for (g in s) {
      var c = s[g];
      if (
        ((i = o != null ? o[g] : void 0),
        s.hasOwnProperty(g) && c !== i && (c != null || i != null))
      )
        if (g === "style")
          if (i) {
            for (a in i)
              !i.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in c)
              c.hasOwnProperty(a) &&
                i[a] !== c[a] &&
                (n || (n = {}), (n[a] = c[a]));
          } else n || (l || (l = []), l.push(g, n)), (n = c);
        else
          g === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (i = i ? i.__html : void 0),
              c != null && i !== c && (l = l || []).push(g, c))
            : g === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (l = l || []).push(g, "" + c)
            : g !== "suppressContentEditableWarning" &&
              g !== "suppressHydrationWarning" &&
              (os.hasOwnProperty(g)
                ? (c != null && g === "onScroll" && Ue("scroll", e),
                  l || i === c || (l = []))
                : (l = l || []).push(g, c));
    }
    n && (l = l || []).push("style", n);
    var g = l;
    (t.updateQueue = g) && (t.flags |= 4);
  }
};
xu = function (e, t, n, s) {
  n !== s && (t.flags |= 4);
};
function Fr(e, t) {
  if (!ze)
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
function ct(e) {
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
function Cm(e, t, n) {
  var s = t.pendingProps;
  switch ((Aa(t), t.tag)) {
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
      return ct(t), null;
    case 1:
      return jt(t.type) && ho(), ct(t), null;
    case 3:
      return (
        (s = t.stateNode),
        Mr(),
        Be(Nt),
        Be(ut),
        Ha(),
        s.pendingContext &&
          ((s.context = s.pendingContext), (s.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ls(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), qt !== null && (fa(qt), (qt = null)))),
        sa(e, t),
        ct(t),
        null
      );
    case 5:
      Fa(t);
      var o = Hn(xs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        gu(e, t, n, s, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!s) {
          if (t.stateNode === null) throw Error(le(166));
          return ct(t), null;
        }
        if (((e = Hn(nn.current)), Ls(t))) {
          (s = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((s[en] = t), (s[hs] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Ue("cancel", s), Ue("close", s);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ue("load", s);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Yr.length; o++) Ue(Yr[o], s);
              break;
            case "source":
              Ue("error", s);
              break;
            case "img":
            case "image":
            case "link":
              Ue("error", s), Ue("load", s);
              break;
            case "details":
              Ue("toggle", s);
              break;
            case "input":
              xi(s, l), Ue("invalid", s);
              break;
            case "select":
              (s._wrapperState = { wasMultiple: !!l.multiple }),
                Ue("invalid", s);
              break;
            case "textarea":
              vi(s, l), Ue("invalid", s);
          }
          Il(n, l), (o = null);
          for (var a in l)
            if (l.hasOwnProperty(a)) {
              var i = l[a];
              a === "children"
                ? typeof i == "string"
                  ? s.textContent !== i &&
                    (l.suppressHydrationWarning !== !0 &&
                      Os(s.textContent, i, e),
                    (o = ["children", i]))
                  : typeof i == "number" &&
                    s.textContent !== "" + i &&
                    (l.suppressHydrationWarning !== !0 &&
                      Os(s.textContent, i, e),
                    (o = ["children", "" + i]))
                : os.hasOwnProperty(a) &&
                  i != null &&
                  a === "onScroll" &&
                  Ue("scroll", s);
            }
          switch (n) {
            case "input":
              Ms(s), yi(s, l, !0);
              break;
            case "textarea":
              Ms(s), wi(s);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (s.onclick = mo);
          }
          (s = o), (t.updateQueue = s), s !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Vc(n)),
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
            (e[en] = t),
            (e[hs] = s),
            hu(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Pl(n, s)), n)) {
              case "dialog":
                Ue("cancel", e), Ue("close", e), (o = s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ue("load", e), (o = s);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Yr.length; o++) Ue(Yr[o], e);
                o = s;
                break;
              case "source":
                Ue("error", e), (o = s);
                break;
              case "img":
              case "image":
              case "link":
                Ue("error", e), Ue("load", e), (o = s);
                break;
              case "details":
                Ue("toggle", e), (o = s);
                break;
              case "input":
                xi(e, s), (o = kl(e, s)), Ue("invalid", e);
                break;
              case "option":
                o = s;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!s.multiple }),
                  (o = qe({}, s, { value: void 0 })),
                  Ue("invalid", e);
                break;
              case "textarea":
                vi(e, s), (o = Ml(e, s)), Ue("invalid", e);
                break;
              default:
                o = s;
            }
            Il(n, o), (i = o);
            for (l in i)
              if (i.hasOwnProperty(l)) {
                var c = i[l];
                l === "style"
                  ? Yc(e, c)
                  : l === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && qc(e, c))
                  : l === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && ls(e, c)
                    : typeof c == "number" && ls(e, "" + c)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (os.hasOwnProperty(l)
                      ? c != null && l === "onScroll" && Ue("scroll", e)
                      : c != null && wa(e, l, c, a));
              }
            switch (n) {
              case "input":
                Ms(e), yi(e, s, !1);
                break;
              case "textarea":
                Ms(e), wi(e);
                break;
              case "option":
                s.value != null && e.setAttribute("value", "" + Pn(s.value));
                break;
              case "select":
                (e.multiple = !!s.multiple),
                  (l = s.value),
                  l != null
                    ? vr(e, !!s.multiple, l, !1)
                    : s.defaultValue != null &&
                      vr(e, !!s.multiple, s.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = mo);
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
      return ct(t), null;
    case 6:
      if (e && t.stateNode != null) xu(e, t, e.memoizedProps, s);
      else {
        if (typeof s != "string" && t.stateNode === null) throw Error(le(166));
        if (((n = Hn(xs.current)), Hn(nn.current), Ls(t))) {
          if (
            ((s = t.stateNode),
            (n = t.memoizedProps),
            (s[en] = t),
            (l = s.nodeValue !== n) && ((e = Et), e !== null))
          )
            switch (e.tag) {
              case 3:
                Os(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Os(s.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s)),
            (s[en] = t),
            (t.stateNode = s);
      }
      return ct(t), null;
    case 13:
      if (
        (Be(He),
        (s = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ze && Mt !== null && t.mode & 1 && !(t.flags & 128))
          Ad(), Dr(), (t.flags |= 98560), (l = !1);
        else if (((l = Ls(t)), s !== null && s.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(le(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(le(317));
            l[en] = t;
          } else
            Dr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ct(t), (l = !1);
        } else qt !== null && (fa(qt), (qt = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((s = s !== null),
          s !== (e !== null && e.memoizedState !== null) &&
            s &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || He.current & 1 ? tt === 0 && (tt = 3) : ni())),
          t.updateQueue !== null && (t.flags |= 4),
          ct(t),
          null);
    case 4:
      return (
        Mr(), sa(e, t), e === null && ps(t.stateNode.containerInfo), ct(t), null
      );
    case 10:
      return Ua(t.type._context), ct(t), null;
    case 17:
      return jt(t.type) && ho(), ct(t), null;
    case 19:
      if ((Be(He), (l = t.memoizedState), l === null)) return ct(t), null;
      if (((s = (t.flags & 128) !== 0), (a = l.rendering), a === null))
        if (s) Fr(l, !1);
        else {
          if (tt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = No(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Fr(l, !1),
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
                return Le(He, (He.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Xe() > Ir &&
            ((t.flags |= 128), (s = !0), Fr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!s)
          if (((e = No(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (s = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Fr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !a.alternate && !ze)
            )
              return ct(t), null;
          } else
            2 * Xe() - l.renderingStartTime > Ir &&
              n !== 1073741824 &&
              ((t.flags |= 128), (s = !0), Fr(l, !1), (t.lanes = 4194304));
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
          (l.renderingStartTime = Xe()),
          (t.sibling = null),
          (n = He.current),
          Le(He, s ? (n & 1) | 2 : n & 1),
          t)
        : (ct(t), null);
    case 22:
    case 23:
      return (
        ti(),
        (s = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
        s && t.mode & 1
          ? _t & 1073741824 && (ct(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ct(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(le(156, t.tag));
}
function km(e, t) {
  switch ((Aa(t), t.tag)) {
    case 1:
      return (
        jt(t.type) && ho(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Mr(),
        Be(Nt),
        Be(ut),
        Ha(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Fa(t), null;
    case 13:
      if (
        (Be(He), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(le(340));
        Dr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Be(He), null;
    case 4:
      return Mr(), null;
    case 10:
      return Ua(t.type._context), null;
    case 22:
    case 23:
      return ti(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zs = !1,
  dt = !1,
  Dm = typeof WeakSet == "function" ? WeakSet : Set,
  Ne = null;
function hr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (s) {
        We(e, t, s);
      }
    else n.current = null;
}
function oa(e, t, n) {
  try {
    n();
  } catch (s) {
    We(e, t, s);
  }
}
var cc = !1;
function _m(e, t) {
  if (((Gl = uo), (e = Nd()), Ta(e))) {
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
            g = 0,
            m = 0,
            h = e,
            u = null;
          t: for (;;) {
            for (
              var j;
              h !== n || (o !== 0 && h.nodeType !== 3) || (i = a + o),
                h !== l || (s !== 0 && h.nodeType !== 3) || (c = a + s),
                h.nodeType === 3 && (a += h.nodeValue.length),
                (j = h.firstChild) !== null;

            )
              (u = h), (h = j);
            for (;;) {
              if (h === e) break t;
              if (
                (u === n && ++g === o && (i = a),
                u === l && ++m === s && (c = a),
                (j = h.nextSibling) !== null)
              )
                break;
              (h = u), (u = h.parentNode);
            }
            h = j;
          }
          n = i === -1 || c === -1 ? null : { start: i, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    Fl = { focusedElem: e, selectionRange: n }, uo = !1, Ne = t;
    Ne !== null;

  )
    if (((t = Ne), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (Ne = e);
    else
      for (; Ne !== null; ) {
        t = Ne;
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
                  var _ = b.memoizedProps,
                    k = b.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? _ : Ht(t.type, _),
                      k
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
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
                throw Error(le(163));
            }
        } catch (D) {
          We(t, t.return, D);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (Ne = e);
          break;
        }
        Ne = t.return;
      }
  return (b = cc), (cc = !1), b;
}
function ts(e, t, n) {
  var s = t.updateQueue;
  if (((s = s !== null ? s.lastEffect : null), s !== null)) {
    var o = (s = s.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && oa(t, n, l);
      }
      o = o.next;
    } while (o !== s);
  }
}
function Uo(e, t) {
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
function la(e) {
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
function yu(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), yu(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[en], delete t[hs], delete t[ql], delete t[dm], delete t[um])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function vu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function dc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || vu(e.return)) return null;
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
function aa(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = mo));
  else if (s !== 4 && ((e = e.child), e !== null))
    for (aa(e, t, n), e = e.sibling; e !== null; ) aa(e, t, n), (e = e.sibling);
}
function ia(e, t, n) {
  var s = e.tag;
  if (s === 5 || s === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (s !== 4 && ((e = e.child), e !== null))
    for (ia(e, t, n), e = e.sibling; e !== null; ) ia(e, t, n), (e = e.sibling);
}
var ot = null,
  Vt = !1;
function gn(e, t, n) {
  for (n = n.child; n !== null; ) wu(e, t, n), (n = n.sibling);
}
function wu(e, t, n) {
  if (tn && typeof tn.onCommitFiberUnmount == "function")
    try {
      tn.onCommitFiberUnmount(Io, n);
    } catch {}
  switch (n.tag) {
    case 5:
      dt || hr(n, t);
    case 6:
      var s = ot,
        o = Vt;
      (ot = null),
        gn(e, t, n),
        (ot = s),
        (Vt = o),
        ot !== null &&
          (Vt
            ? ((e = ot),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ot.removeChild(n.stateNode));
      break;
    case 18:
      ot !== null &&
        (Vt
          ? ((e = ot),
            (n = n.stateNode),
            e.nodeType === 8
              ? ul(e.parentNode, n)
              : e.nodeType === 1 && ul(e, n),
            ds(e))
          : ul(ot, n.stateNode));
      break;
    case 4:
      (s = ot),
        (o = Vt),
        (ot = n.stateNode.containerInfo),
        (Vt = !0),
        gn(e, t, n),
        (ot = s),
        (Vt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !dt &&
        ((s = n.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
      ) {
        o = s = s.next;
        do {
          var l = o,
            a = l.destroy;
          (l = l.tag),
            a !== void 0 && (l & 2 || l & 4) && oa(n, t, a),
            (o = o.next);
        } while (o !== s);
      }
      gn(e, t, n);
      break;
    case 1:
      if (
        !dt &&
        (hr(n, t),
        (s = n.stateNode),
        typeof s.componentWillUnmount == "function")
      )
        try {
          (s.props = n.memoizedProps),
            (s.state = n.memoizedState),
            s.componentWillUnmount();
        } catch (i) {
          We(n, t, i);
        }
      gn(e, t, n);
      break;
    case 21:
      gn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((dt = (s = dt) || n.memoizedState !== null), gn(e, t, n), (dt = s))
        : gn(e, t, n);
      break;
    default:
      gn(e, t, n);
  }
}
function uc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Dm()),
      t.forEach(function (s) {
        var o = Om.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(o, o));
      });
  }
}
function Ft(e, t) {
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
              (ot = i.stateNode), (Vt = !1);
              break e;
            case 3:
              (ot = i.stateNode.containerInfo), (Vt = !0);
              break e;
            case 4:
              (ot = i.stateNode.containerInfo), (Vt = !0);
              break e;
          }
          i = i.return;
        }
        if (ot === null) throw Error(le(160));
        wu(l, a, o), (ot = null), (Vt = !1);
        var c = o.alternate;
        c !== null && (c.return = null), (o.return = null);
      } catch (g) {
        We(o, t, g);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) bu(t, e), (t = t.sibling);
}
function bu(e, t) {
  var n = e.alternate,
    s = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ft(t, e), Kt(e), s & 4)) {
        try {
          ts(3, e, e.return), Uo(3, e);
        } catch (_) {
          We(e, e.return, _);
        }
        try {
          ts(5, e, e.return);
        } catch (_) {
          We(e, e.return, _);
        }
      }
      break;
    case 1:
      Ft(t, e), Kt(e), s & 512 && n !== null && hr(n, n.return);
      break;
    case 5:
      if (
        (Ft(t, e),
        Kt(e),
        s & 512 && n !== null && hr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ls(o, "");
        } catch (_) {
          We(e, e.return, _);
        }
      }
      if (s & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          a = n !== null ? n.memoizedProps : l,
          i = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            i === "input" && l.type === "radio" && l.name != null && Fc(o, l),
              Pl(i, a);
            var g = Pl(i, l);
            for (a = 0; a < c.length; a += 2) {
              var m = c[a],
                h = c[a + 1];
              m === "style"
                ? Yc(o, h)
                : m === "dangerouslySetInnerHTML"
                ? qc(o, h)
                : m === "children"
                ? ls(o, h)
                : wa(o, m, h, g);
            }
            switch (i) {
              case "input":
                Dl(o, l);
                break;
              case "textarea":
                Hc(o, l);
                break;
              case "select":
                var u = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var j = l.value;
                j != null
                  ? vr(o, !!l.multiple, j, !1)
                  : u !== !!l.multiple &&
                    (l.defaultValue != null
                      ? vr(o, !!l.multiple, l.defaultValue, !0)
                      : vr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[hs] = l;
          } catch (_) {
            We(e, e.return, _);
          }
      }
      break;
    case 6:
      if ((Ft(t, e), Kt(e), s & 4)) {
        if (e.stateNode === null) throw Error(le(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (_) {
          We(e, e.return, _);
        }
      }
      break;
    case 3:
      if (
        (Ft(t, e), Kt(e), s & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ds(t.containerInfo);
        } catch (_) {
          We(e, e.return, _);
        }
      break;
    case 4:
      Ft(t, e), Kt(e);
      break;
    case 13:
      Ft(t, e),
        Kt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Za = Xe())),
        s & 4 && uc(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((dt = (g = dt) || m), Ft(t, e), (dt = g)) : Ft(t, e),
        Kt(e),
        s & 8192)
      ) {
        if (
          ((g = e.memoizedState !== null),
          (e.stateNode.isHidden = g) && !m && e.mode & 1)
        )
          for (Ne = e, m = e.child; m !== null; ) {
            for (h = Ne = m; Ne !== null; ) {
              switch (((u = Ne), (j = u.child), u.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ts(4, u, u.return);
                  break;
                case 1:
                  hr(u, u.return);
                  var b = u.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    (s = u), (n = u.return);
                    try {
                      (t = s),
                        (b.props = t.memoizedProps),
                        (b.state = t.memoizedState),
                        b.componentWillUnmount();
                    } catch (_) {
                      We(s, n, _);
                    }
                  }
                  break;
                case 5:
                  hr(u, u.return);
                  break;
                case 22:
                  if (u.memoizedState !== null) {
                    pc(h);
                    continue;
                  }
              }
              j !== null ? ((j.return = u), (Ne = j)) : pc(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                (o = h.stateNode),
                  g
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((i = h.stateNode),
                      (c = h.memoizedProps.style),
                      (a =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (i.style.display = Wc("display", a)));
              } catch (_) {
                We(e, e.return, _);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = g ? "" : h.memoizedProps;
              } catch (_) {
                We(e, e.return, _);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), (h = h.return);
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Ft(t, e), Kt(e), s & 4 && uc(e);
      break;
    case 21:
      break;
    default:
      Ft(t, e), Kt(e);
  }
}
function Kt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (vu(n)) {
            var s = n;
            break e;
          }
          n = n.return;
        }
        throw Error(le(160));
      }
      switch (s.tag) {
        case 5:
          var o = s.stateNode;
          s.flags & 32 && (ls(o, ""), (s.flags &= -33));
          var l = dc(e);
          ia(e, l, o);
          break;
        case 3:
        case 4:
          var a = s.stateNode.containerInfo,
            i = dc(e);
          aa(e, i, a);
          break;
        default:
          throw Error(le(161));
      }
    } catch (c) {
      We(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Mm(e, t, n) {
  (Ne = e), Nu(e);
}
function Nu(e, t, n) {
  for (var s = (e.mode & 1) !== 0; Ne !== null; ) {
    var o = Ne,
      l = o.child;
    if (o.tag === 22 && s) {
      var a = o.memoizedState !== null || zs;
      if (!a) {
        var i = o.alternate,
          c = (i !== null && i.memoizedState !== null) || dt;
        i = zs;
        var g = dt;
        if (((zs = a), (dt = c) && !g))
          for (Ne = o; Ne !== null; )
            (a = Ne),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? mc(o)
                : c !== null
                ? ((c.return = a), (Ne = c))
                : mc(o);
        for (; l !== null; ) (Ne = l), Nu(l), (l = l.sibling);
        (Ne = o), (zs = i), (dt = g);
      }
      fc(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (Ne = l)) : fc(e);
  }
}
function fc(e) {
  for (; Ne !== null; ) {
    var t = Ne;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              dt || Uo(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !dt)
                if (n === null) s.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ht(t.type, n.memoizedProps);
                  s.componentDidUpdate(
                    o,
                    n.memoizedState,
                    s.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Qi(t, l, s);
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
                Qi(t, a, n);
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
                var g = t.alternate;
                if (g !== null) {
                  var m = g.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && ds(h);
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
              throw Error(le(163));
          }
        dt || (t.flags & 512 && la(t));
      } catch (u) {
        We(t, t.return, u);
      }
    }
    if (t === e) {
      Ne = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (Ne = n);
      break;
    }
    Ne = t.return;
  }
}
function pc(e) {
  for (; Ne !== null; ) {
    var t = Ne;
    if (t === e) {
      Ne = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (Ne = n);
      break;
    }
    Ne = t.return;
  }
}
function mc(e) {
  for (; Ne !== null; ) {
    var t = Ne;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Uo(4, t);
          } catch (c) {
            We(t, n, c);
          }
          break;
        case 1:
          var s = t.stateNode;
          if (typeof s.componentDidMount == "function") {
            var o = t.return;
            try {
              s.componentDidMount();
            } catch (c) {
              We(t, o, c);
            }
          }
          var l = t.return;
          try {
            la(t);
          } catch (c) {
            We(t, l, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            la(t);
          } catch (c) {
            We(t, a, c);
          }
      }
    } catch (c) {
      We(t, t.return, c);
    }
    if (t === e) {
      Ne = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      (i.return = t.return), (Ne = i);
      break;
    }
    Ne = t.return;
  }
}
var Em = Math.ceil,
  Co = mn.ReactCurrentDispatcher,
  Ka = mn.ReactCurrentOwner,
  Lt = mn.ReactCurrentBatchConfig,
  Ae = 0,
  st = null,
  Ke = null,
  lt = 0,
  _t = 0,
  gr = An(0),
  tt = 0,
  bs = null,
  Qn = 0,
  Bo = 0,
  Ja = 0,
  ns = null,
  vt = null,
  Za = 0,
  Ir = 1 / 0,
  sn = null,
  ko = !1,
  ca = null,
  Mn = null,
  Gs = !1,
  Nn = null,
  Do = 0,
  rs = 0,
  da = null,
  to = -1,
  no = 0;
function mt() {
  return Ae & 6 ? Xe() : to !== -1 ? to : (to = Xe());
}
function En(e) {
  return e.mode & 1
    ? Ae & 2 && lt !== 0
      ? lt & -lt
      : pm.transition !== null
      ? (no === 0 && (no = ld()), no)
      : ((e = Oe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : pd(e.type))),
        e)
    : 1;
}
function Yt(e, t, n, s) {
  if (50 < rs) throw ((rs = 0), (da = null), Error(le(185)));
  js(e, n, s),
    (!(Ae & 2) || e !== st) &&
      (e === st && (!(Ae & 2) && (Bo |= n), tt === 4 && wn(e, lt)),
      St(e, s),
      n === 1 && Ae === 0 && !(t.mode & 1) && ((Ir = Xe() + 500), $o && $n()));
}
function St(e, t) {
  var n = e.callbackNode;
  pp(e, t);
  var s = co(e, e === st ? lt : 0);
  if (s === 0)
    n !== null && ji(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = s & -s), e.callbackPriority !== t)) {
    if ((n != null && ji(n), t === 1))
      e.tag === 0 ? fm(hc.bind(null, e)) : Pd(hc.bind(null, e)),
        im(function () {
          !(Ae & 6) && $n();
        }),
        (n = null);
    else {
      switch (ad(s)) {
        case 1:
          n = Ca;
          break;
        case 4:
          n = sd;
          break;
        case 16:
          n = io;
          break;
        case 536870912:
          n = od;
          break;
        default:
          n = io;
      }
      n = Eu(n, ju.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ju(e, t) {
  if (((to = -1), (no = 0), Ae & 6)) throw Error(le(327));
  var n = e.callbackNode;
  if (Sr() && e.callbackNode !== n) return null;
  var s = co(e, e === st ? lt : 0);
  if (s === 0) return null;
  if (s & 30 || s & e.expiredLanes || t) t = _o(e, s);
  else {
    t = s;
    var o = Ae;
    Ae |= 2;
    var l = Cu();
    (st !== e || lt !== t) && ((sn = null), (Ir = Xe() + 500), Vn(e, t));
    do
      try {
        Tm();
        break;
      } catch (i) {
        Su(e, i);
      }
    while (!0);
    La(),
      (Co.current = l),
      (Ae = o),
      Ke !== null ? (t = 0) : ((st = null), (lt = 0), (t = tt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Ol(e)), o !== 0 && ((s = o), (t = ua(e, o)))), t === 1)
    )
      throw ((n = bs), Vn(e, 0), wn(e, s), St(e, Xe()), n);
    if (t === 6) wn(e, s);
    else {
      if (
        ((o = e.current.alternate),
        !(s & 30) &&
          !Im(o) &&
          ((t = _o(e, s)),
          t === 2 && ((l = Ol(e)), l !== 0 && ((s = l), (t = ua(e, l)))),
          t === 1))
      )
        throw ((n = bs), Vn(e, 0), wn(e, s), St(e, Xe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = s), t)) {
        case 0:
        case 1:
          throw Error(le(345));
        case 2:
          zn(e, vt, sn);
          break;
        case 3:
          if (
            (wn(e, s), (s & 130023424) === s && ((t = Za + 500 - Xe()), 10 < t))
          ) {
            if (co(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & s) !== s)) {
              mt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Vl(zn.bind(null, e, vt, sn), t);
            break;
          }
          zn(e, vt, sn);
          break;
        case 4:
          if ((wn(e, s), (s & 4194240) === s)) break;
          for (t = e.eventTimes, o = -1; 0 < s; ) {
            var a = 31 - Wt(s);
            (l = 1 << a), (a = t[a]), a > o && (o = a), (s &= ~l);
          }
          if (
            ((s = o),
            (s = Xe() - s),
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
                : 1960 * Em(s / 1960)) - s),
            10 < s)
          ) {
            e.timeoutHandle = Vl(zn.bind(null, e, vt, sn), s);
            break;
          }
          zn(e, vt, sn);
          break;
        case 5:
          zn(e, vt, sn);
          break;
        default:
          throw Error(le(329));
      }
    }
  }
  return St(e, Xe()), e.callbackNode === n ? ju.bind(null, e) : null;
}
function ua(e, t) {
  var n = ns;
  return (
    e.current.memoizedState.isDehydrated && (Vn(e, t).flags |= 256),
    (e = _o(e, t)),
    e !== 2 && ((t = vt), (vt = n), t !== null && fa(t)),
    e
  );
}
function fa(e) {
  vt === null ? (vt = e) : vt.push.apply(vt, e);
}
function Im(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var s = 0; s < n.length; s++) {
          var o = n[s],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!Xt(l(), o)) return !1;
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
function wn(e, t) {
  for (
    t &= ~Ja,
      t &= ~Bo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Wt(t),
      s = 1 << n;
    (e[n] = -1), (t &= ~s);
  }
}
function hc(e) {
  if (Ae & 6) throw Error(le(327));
  Sr();
  var t = co(e, 0);
  if (!(t & 1)) return St(e, Xe()), null;
  var n = _o(e, t);
  if (e.tag !== 0 && n === 2) {
    var s = Ol(e);
    s !== 0 && ((t = s), (n = ua(e, s)));
  }
  if (n === 1) throw ((n = bs), Vn(e, 0), wn(e, t), St(e, Xe()), n);
  if (n === 6) throw Error(le(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zn(e, vt, sn),
    St(e, Xe()),
    null
  );
}
function ei(e, t) {
  var n = Ae;
  Ae |= 1;
  try {
    return e(t);
  } finally {
    (Ae = n), Ae === 0 && ((Ir = Xe() + 500), $o && $n());
  }
}
function Kn(e) {
  Nn !== null && Nn.tag === 0 && !(Ae & 6) && Sr();
  var t = Ae;
  Ae |= 1;
  var n = Lt.transition,
    s = Oe;
  try {
    if (((Lt.transition = null), (Oe = 1), e)) return e();
  } finally {
    (Oe = s), (Lt.transition = n), (Ae = t), !(Ae & 6) && $n();
  }
}
function ti() {
  (_t = gr.current), Be(gr);
}
function Vn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), am(n)), Ke !== null))
    for (n = Ke.return; n !== null; ) {
      var s = n;
      switch ((Aa(s), s.tag)) {
        case 1:
          (s = s.type.childContextTypes), s != null && ho();
          break;
        case 3:
          Mr(), Be(Nt), Be(ut), Ha();
          break;
        case 5:
          Fa(s);
          break;
        case 4:
          Mr();
          break;
        case 13:
          Be(He);
          break;
        case 19:
          Be(He);
          break;
        case 10:
          Ua(s.type._context);
          break;
        case 22:
        case 23:
          ti();
      }
      n = n.return;
    }
  if (
    ((st = e),
    (Ke = e = In(e.current, null)),
    (lt = _t = t),
    (tt = 0),
    (bs = null),
    (Ja = Bo = Qn = 0),
    (vt = ns = null),
    Fn !== null)
  ) {
    for (t = 0; t < Fn.length; t++)
      if (((n = Fn[t]), (s = n.interleaved), s !== null)) {
        n.interleaved = null;
        var o = s.next,
          l = n.pending;
        if (l !== null) {
          var a = l.next;
          (l.next = o), (s.next = a);
        }
        n.pending = s;
      }
    Fn = null;
  }
  return e;
}
function Su(e, t) {
  do {
    var n = Ke;
    try {
      if ((La(), (Js.current = So), jo)) {
        for (var s = Ve.memoizedState; s !== null; ) {
          var o = s.queue;
          o !== null && (o.pending = null), (s = s.next);
        }
        jo = !1;
      }
      if (
        ((Xn = 0),
        (rt = et = Ve = null),
        (es = !1),
        (ys = 0),
        (Ka.current = null),
        n === null || n.return === null)
      ) {
        (tt = 1), (bs = t), (Ke = null);
        break;
      }
      e: {
        var l = e,
          a = n.return,
          i = n,
          c = t;
        if (
          ((t = lt),
          (i.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var g = c,
            m = i,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var u = m.alternate;
            u
              ? ((m.updateQueue = u.updateQueue),
                (m.memoizedState = u.memoizedState),
                (m.lanes = u.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var j = nc(a);
          if (j !== null) {
            (j.flags &= -257),
              rc(j, a, i, l, t),
              j.mode & 1 && tc(l, g, t),
              (t = j),
              (c = g);
            var b = t.updateQueue;
            if (b === null) {
              var _ = new Set();
              _.add(c), (t.updateQueue = _);
            } else b.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              tc(l, g, t), ni();
              break e;
            }
            c = Error(le(426));
          }
        } else if (ze && i.mode & 1) {
          var k = nc(a);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              rc(k, a, i, l, t),
              $a(Er(c, i));
            break e;
          }
        }
        (l = c = Er(c, i)),
          tt !== 4 && (tt = 2),
          ns === null ? (ns = [l]) : ns.push(l),
          (l = a);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var f = au(l, c, t);
              Xi(l, f);
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
                    (Mn === null || !Mn.has(x))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var D = iu(l, i, t);
                Xi(l, D);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Du(n);
    } catch (R) {
      (t = R), Ke === n && n !== null && (Ke = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Cu() {
  var e = Co.current;
  return (Co.current = So), e === null ? So : e;
}
function ni() {
  (tt === 0 || tt === 3 || tt === 2) && (tt = 4),
    st === null || (!(Qn & 268435455) && !(Bo & 268435455)) || wn(st, lt);
}
function _o(e, t) {
  var n = Ae;
  Ae |= 2;
  var s = Cu();
  (st !== e || lt !== t) && ((sn = null), Vn(e, t));
  do
    try {
      Pm();
      break;
    } catch (o) {
      Su(e, o);
    }
  while (!0);
  if ((La(), (Ae = n), (Co.current = s), Ke !== null)) throw Error(le(261));
  return (st = null), (lt = 0), tt;
}
function Pm() {
  for (; Ke !== null; ) ku(Ke);
}
function Tm() {
  for (; Ke !== null && !sp(); ) ku(Ke);
}
function ku(e) {
  var t = Mu(e.alternate, e, _t);
  (e.memoizedProps = e.pendingProps),
    t === null ? Du(e) : (Ke = t),
    (Ka.current = null);
}
function Du(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = km(n, t)), n !== null)) {
        (n.flags &= 32767), (Ke = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (tt = 6), (Ke = null);
        return;
      }
    } else if (((n = Cm(n, t, _t)), n !== null)) {
      Ke = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ke = t;
      return;
    }
    Ke = t = e;
  } while (t !== null);
  tt === 0 && (tt = 5);
}
function zn(e, t, n) {
  var s = Oe,
    o = Lt.transition;
  try {
    (Lt.transition = null), (Oe = 1), Rm(e, t, n, s);
  } finally {
    (Lt.transition = o), (Oe = s);
  }
  return null;
}
function Rm(e, t, n, s) {
  do Sr();
  while (Nn !== null);
  if (Ae & 6) throw Error(le(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(le(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (mp(e, l),
    e === st && ((Ke = st = null), (lt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Gs ||
      ((Gs = !0),
      Eu(io, function () {
        return Sr(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Lt.transition), (Lt.transition = null);
    var a = Oe;
    Oe = 1;
    var i = Ae;
    (Ae |= 4),
      (Ka.current = null),
      _m(e, n),
      bu(n, e),
      em(Fl),
      (uo = !!Gl),
      (Fl = Gl = null),
      (e.current = n),
      Mm(n),
      op(),
      (Ae = i),
      (Oe = a),
      (Lt.transition = l);
  } else e.current = n;
  if (
    (Gs && ((Gs = !1), (Nn = e), (Do = o)),
    (l = e.pendingLanes),
    l === 0 && (Mn = null),
    ip(n.stateNode),
    St(e, Xe()),
    t !== null)
  )
    for (s = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), s(o.value, { componentStack: o.stack, digest: o.digest });
  if (ko) throw ((ko = !1), (e = ca), (ca = null), e);
  return (
    Do & 1 && e.tag !== 0 && Sr(),
    (l = e.pendingLanes),
    l & 1 ? (e === da ? rs++ : ((rs = 0), (da = e))) : (rs = 0),
    $n(),
    null
  );
}
function Sr() {
  if (Nn !== null) {
    var e = ad(Do),
      t = Lt.transition,
      n = Oe;
    try {
      if (((Lt.transition = null), (Oe = 16 > e ? 16 : e), Nn === null))
        var s = !1;
      else {
        if (((e = Nn), (Nn = null), (Do = 0), Ae & 6)) throw Error(le(331));
        var o = Ae;
        for (Ae |= 4, Ne = e.current; Ne !== null; ) {
          var l = Ne,
            a = l.child;
          if (Ne.flags & 16) {
            var i = l.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var g = i[c];
                for (Ne = g; Ne !== null; ) {
                  var m = Ne;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ts(8, m, l);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (Ne = h);
                  else
                    for (; Ne !== null; ) {
                      m = Ne;
                      var u = m.sibling,
                        j = m.return;
                      if ((yu(m), m === g)) {
                        Ne = null;
                        break;
                      }
                      if (u !== null) {
                        (u.return = j), (Ne = u);
                        break;
                      }
                      Ne = j;
                    }
                }
              }
              var b = l.alternate;
              if (b !== null) {
                var _ = b.child;
                if (_ !== null) {
                  b.child = null;
                  do {
                    var k = _.sibling;
                    (_.sibling = null), (_ = k);
                  } while (_ !== null);
                }
              }
              Ne = l;
            }
          }
          if (l.subtreeFlags & 2064 && a !== null) (a.return = l), (Ne = a);
          else
            e: for (; Ne !== null; ) {
              if (((l = Ne), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ts(9, l, l.return);
                }
              var f = l.sibling;
              if (f !== null) {
                (f.return = l.return), (Ne = f);
                break e;
              }
              Ne = l.return;
            }
        }
        var d = e.current;
        for (Ne = d; Ne !== null; ) {
          a = Ne;
          var x = a.child;
          if (a.subtreeFlags & 2064 && x !== null) (x.return = a), (Ne = x);
          else
            e: for (a = d; Ne !== null; ) {
              if (((i = Ne), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Uo(9, i);
                  }
                } catch (R) {
                  We(i, i.return, R);
                }
              if (i === a) {
                Ne = null;
                break e;
              }
              var D = i.sibling;
              if (D !== null) {
                (D.return = i.return), (Ne = D);
                break e;
              }
              Ne = i.return;
            }
        }
        if (
          ((Ae = o), $n(), tn && typeof tn.onPostCommitFiberRoot == "function")
        )
          try {
            tn.onPostCommitFiberRoot(Io, e);
          } catch {}
        s = !0;
      }
      return s;
    } finally {
      (Oe = n), (Lt.transition = t);
    }
  }
  return !1;
}
function gc(e, t, n) {
  (t = Er(n, t)),
    (t = au(e, t, 1)),
    (e = _n(e, t, 1)),
    (t = mt()),
    e !== null && (js(e, 1, t), St(e, t));
}
function We(e, t, n) {
  if (e.tag === 3) gc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        gc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof s.componentDidCatch == "function" &&
            (Mn === null || !Mn.has(s)))
        ) {
          (e = Er(n, e)),
            (e = iu(t, e, 1)),
            (t = _n(t, e, 1)),
            (e = mt()),
            t !== null && (js(t, 1, e), St(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Am(e, t, n) {
  var s = e.pingCache;
  s !== null && s.delete(t),
    (t = mt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    st === e &&
      (lt & n) === n &&
      (tt === 4 || (tt === 3 && (lt & 130023424) === lt && 500 > Xe() - Za)
        ? Vn(e, 0)
        : (Ja |= n)),
    St(e, t);
}
function _u(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ps), (Ps <<= 1), !(Ps & 130023424) && (Ps = 4194304))
      : (t = 1));
  var n = mt();
  (e = fn(e, t)), e !== null && (js(e, t, n), St(e, n));
}
function $m(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), _u(e, n);
}
function Om(e, t) {
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
      throw Error(le(314));
  }
  s !== null && s.delete(t), _u(e, n);
}
var Mu;
Mu = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Nt.current) wt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (wt = !1), Sm(e, t, n);
      wt = !!(e.flags & 131072);
    }
  else (wt = !1), ze && t.flags & 1048576 && Td(t, yo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var s = t.type;
      eo(e, t), (e = t.pendingProps);
      var o = kr(t, ut.current);
      jr(t, n), (o = qa(null, t, s, e, o, n));
      var l = Wa();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            jt(s) ? ((l = !0), go(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            za(t),
            (o.updater = Lo),
            (t.stateNode = o),
            (o._reactInternals = t),
            Jl(t, s, e, n),
            (t = ta(null, t, s, !0, l, n)))
          : ((t.tag = 0), ze && l && Ra(t), pt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      s = t.elementType;
      e: {
        switch (
          (eo(e, t),
          (e = t.pendingProps),
          (o = s._init),
          (s = o(s._payload)),
          (t.type = s),
          (o = t.tag = Um(s)),
          (e = Ht(s, e)),
          o)
        ) {
          case 0:
            t = ea(null, t, s, e, n);
            break e;
          case 1:
            t = lc(null, t, s, e, n);
            break e;
          case 11:
            t = sc(null, t, s, e, n);
            break e;
          case 14:
            t = oc(null, t, s, Ht(s.type, e), n);
            break e;
        }
        throw Error(le(306, s, ""));
      }
      return t;
    case 0:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : Ht(s, o)),
        ea(e, t, s, o, n)
      );
    case 1:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : Ht(s, o)),
        lc(e, t, s, o, n)
      );
    case 3:
      e: {
        if ((fu(t), e === null)) throw Error(le(387));
        (s = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Ud(e, t),
          bo(t, s, null, n);
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
            (o = Er(Error(le(423)), t)), (t = ac(e, t, s, n, o));
            break e;
          } else if (s !== o) {
            (o = Er(Error(le(424)), t)), (t = ac(e, t, s, n, o));
            break e;
          } else
            for (
              Mt = Dn(t.stateNode.containerInfo.firstChild),
                Et = t,
                ze = !0,
                qt = null,
                n = Od(t, null, s, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Dr(), s === o)) {
            t = pn(e, t, n);
            break e;
          }
          pt(e, t, s, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Bd(t),
        e === null && Xl(t),
        (s = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Hl(s, o) ? (a = null) : l !== null && Hl(s, l) && (t.flags |= 32),
        uu(e, t),
        pt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Xl(t), null;
    case 13:
      return pu(e, t, n);
    case 4:
      return (
        Ga(t, t.stateNode.containerInfo),
        (s = t.pendingProps),
        e === null ? (t.child = _r(t, null, s, n)) : pt(e, t, s, n),
        t.child
      );
    case 11:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : Ht(s, o)),
        sc(e, t, s, o, n)
      );
    case 7:
      return pt(e, t, t.pendingProps, n), t.child;
    case 8:
      return pt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((s = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (a = o.value),
          Le(vo, s._currentValue),
          (s._currentValue = a),
          l !== null)
        )
          if (Xt(l.value, a)) {
            if (l.children === o.children && !Nt.current) {
              t = pn(e, t, n);
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
                      (c = cn(-1, n & -n)), (c.tag = 2);
                      var g = l.updateQueue;
                      if (g !== null) {
                        g = g.shared;
                        var m = g.pending;
                        m === null
                          ? (c.next = c)
                          : ((c.next = m.next), (m.next = c)),
                          (g.pending = c);
                      }
                    }
                    (l.lanes |= n),
                      (c = l.alternate),
                      c !== null && (c.lanes |= n),
                      Ql(l.return, n, t),
                      (i.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (l.tag === 10) a = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((a = l.return), a === null)) throw Error(le(341));
                (a.lanes |= n),
                  (i = a.alternate),
                  i !== null && (i.lanes |= n),
                  Ql(a, n, t),
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
        pt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (s = t.pendingProps.children),
        jr(t, n),
        (o = Bt(o)),
        (s = s(o)),
        (t.flags |= 1),
        pt(e, t, s, n),
        t.child
      );
    case 14:
      return (
        (s = t.type),
        (o = Ht(s, t.pendingProps)),
        (o = Ht(s.type, o)),
        oc(e, t, s, o, n)
      );
    case 15:
      return cu(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : Ht(s, o)),
        eo(e, t),
        (t.tag = 1),
        jt(s) ? ((e = !0), go(t)) : (e = !1),
        jr(t, n),
        lu(t, s, o),
        Jl(t, s, o, n),
        ta(null, t, s, !0, e, n)
      );
    case 19:
      return mu(e, t, n);
    case 22:
      return du(e, t, n);
  }
  throw Error(le(156, t.tag));
};
function Eu(e, t) {
  return rd(e, t);
}
function Lm(e, t, n, s) {
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
function Ot(e, t, n, s) {
  return new Lm(e, t, n, s);
}
function ri(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Um(e) {
  if (typeof e == "function") return ri(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Na)) return 11;
    if (e === ja) return 14;
  }
  return 2;
}
function In(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ot(e.tag, t, e.key, e.mode)),
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
function ro(e, t, n, s, o, l) {
  var a = 2;
  if (((s = e), typeof e == "function")) ri(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case lr:
        return qn(n.children, o, l, t);
      case ba:
        (a = 8), (o |= 8);
        break;
      case Nl:
        return (
          (e = Ot(12, n, t, o | 2)), (e.elementType = Nl), (e.lanes = l), e
        );
      case jl:
        return (e = Ot(13, n, t, o)), (e.elementType = jl), (e.lanes = l), e;
      case Sl:
        return (e = Ot(19, n, t, o)), (e.elementType = Sl), (e.lanes = l), e;
      case Bc:
        return zo(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Lc:
              a = 10;
              break e;
            case Uc:
              a = 9;
              break e;
            case Na:
              a = 11;
              break e;
            case ja:
              a = 14;
              break e;
            case xn:
              (a = 16), (s = null);
              break e;
          }
        throw Error(le(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ot(a, n, t, o)), (t.elementType = e), (t.type = s), (t.lanes = l), t
  );
}
function qn(e, t, n, s) {
  return (e = Ot(7, e, s, t)), (e.lanes = n), e;
}
function zo(e, t, n, s) {
  return (
    (e = Ot(22, e, s, t)),
    (e.elementType = Bc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function vl(e, t, n) {
  return (e = Ot(6, e, null, t)), (e.lanes = n), e;
}
function wl(e, t, n) {
  return (
    (t = Ot(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Bm(e, t, n, s, o) {
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
    (this.eventTimes = el(0)),
    (this.expirationTimes = el(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = el(0)),
    (this.identifierPrefix = s),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function si(e, t, n, s, o, l, a, i, c) {
  return (
    (e = new Bm(e, t, n, i, c)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Ot(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: s,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    za(l),
    e
  );
}
function zm(e, t, n) {
  var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: or,
    key: s == null ? null : "" + s,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Iu(e) {
  if (!e) return Tn;
  e = e._reactInternals;
  e: {
    if (Zn(e) !== e || e.tag !== 1) throw Error(le(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (jt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(le(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (jt(n)) return Id(e, n, t);
  }
  return t;
}
function Pu(e, t, n, s, o, l, a, i, c) {
  return (
    (e = si(n, s, !0, e, o, l, a, i, c)),
    (e.context = Iu(null)),
    (n = e.current),
    (s = mt()),
    (o = En(n)),
    (l = cn(s, o)),
    (l.callback = t ?? null),
    _n(n, l, o),
    (e.current.lanes = o),
    js(e, o, s),
    St(e, s),
    e
  );
}
function Go(e, t, n, s) {
  var o = t.current,
    l = mt(),
    a = En(o);
  return (
    (n = Iu(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = cn(l, a)),
    (t.payload = { element: e }),
    (s = s === void 0 ? null : s),
    s !== null && (t.callback = s),
    (e = _n(o, t, a)),
    e !== null && (Yt(e, o, a, l), Ks(e, o, a)),
    a
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
function xc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function oi(e, t) {
  xc(e, t), (e = e.alternate) && xc(e, t);
}
function Gm() {
  return null;
}
var Tu =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function li(e) {
  this._internalRoot = e;
}
Fo.prototype.render = li.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(le(409));
  Go(e, t, null, null);
};
Fo.prototype.unmount = li.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Kn(function () {
      Go(null, e, null, null);
    }),
      (t[un] = null);
  }
};
function Fo(e) {
  this._internalRoot = e;
}
Fo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = dd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < vn.length && t !== 0 && t < vn[n].priority; n++);
    vn.splice(n, 0, e), n === 0 && fd(e);
  }
};
function ai(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ho(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function yc() {}
function Fm(e, t, n, s, o) {
  if (o) {
    if (typeof s == "function") {
      var l = s;
      s = function () {
        var g = Mo(a);
        l.call(g);
      };
    }
    var a = Pu(t, s, e, 0, null, !1, !1, "", yc);
    return (
      (e._reactRootContainer = a),
      (e[un] = a.current),
      ps(e.nodeType === 8 ? e.parentNode : e),
      Kn(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof s == "function") {
    var i = s;
    s = function () {
      var g = Mo(c);
      i.call(g);
    };
  }
  var c = si(e, 0, !1, null, null, !1, !1, "", yc);
  return (
    (e._reactRootContainer = c),
    (e[un] = c.current),
    ps(e.nodeType === 8 ? e.parentNode : e),
    Kn(function () {
      Go(t, c, n, s);
    }),
    c
  );
}
function Vo(e, t, n, s, o) {
  var l = n._reactRootContainer;
  if (l) {
    var a = l;
    if (typeof o == "function") {
      var i = o;
      o = function () {
        var c = Mo(a);
        i.call(c);
      };
    }
    Go(t, a, e, o);
  } else a = Fm(n, t, e, o, s);
  return Mo(a);
}
id = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Wr(t.pendingLanes);
        n !== 0 &&
          (ka(t, n | 1), St(t, Xe()), !(Ae & 6) && ((Ir = Xe() + 500), $n()));
      }
      break;
    case 13:
      Kn(function () {
        var s = fn(e, 1);
        if (s !== null) {
          var o = mt();
          Yt(s, e, 1, o);
        }
      }),
        oi(e, 1);
  }
};
Da = function (e) {
  if (e.tag === 13) {
    var t = fn(e, 134217728);
    if (t !== null) {
      var n = mt();
      Yt(t, e, 134217728, n);
    }
    oi(e, 134217728);
  }
};
cd = function (e) {
  if (e.tag === 13) {
    var t = En(e),
      n = fn(e, t);
    if (n !== null) {
      var s = mt();
      Yt(n, e, t, s);
    }
    oi(e, t);
  }
};
dd = function () {
  return Oe;
};
ud = function (e, t) {
  var n = Oe;
  try {
    return (Oe = e), t();
  } finally {
    Oe = n;
  }
};
Rl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Dl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = Ao(s);
            if (!o) throw Error(le(90));
            Gc(s), Dl(s, o);
          }
        }
      }
      break;
    case "textarea":
      Hc(e, n);
      break;
    case "select":
      (t = n.value), t != null && vr(e, !!n.multiple, t, !1);
  }
};
Kc = ei;
Jc = Kn;
var Hm = { usingClientEntryPoint: !1, Events: [Cs, dr, Ao, Xc, Qc, ei] },
  Hr = {
    findFiberByHostInstance: Gn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Vm = {
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
    currentDispatcherRef: mn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = td(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Hr.findFiberByHostInstance || Gm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fs.isDisabled && Fs.supportsFiber)
    try {
      (Io = Fs.inject(Vm)), (tn = Fs);
    } catch {}
}
Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hm;
Pt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ai(t)) throw Error(le(200));
  return zm(e, t, null, n);
};
Pt.createRoot = function (e, t) {
  if (!ai(e)) throw Error(le(299));
  var n = !1,
    s = "",
    o = Tu;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = si(e, 1, !1, null, null, n, !1, s, o)),
    (e[un] = t.current),
    ps(e.nodeType === 8 ? e.parentNode : e),
    new li(t)
  );
};
Pt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(le(188))
      : ((e = Object.keys(e).join(",")), Error(le(268, e)));
  return (e = td(t)), (e = e === null ? null : e.stateNode), e;
};
Pt.flushSync = function (e) {
  return Kn(e);
};
Pt.hydrate = function (e, t, n) {
  if (!Ho(t)) throw Error(le(200));
  return Vo(null, e, t, !0, n);
};
Pt.hydrateRoot = function (e, t, n) {
  if (!ai(e)) throw Error(le(405));
  var s = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    a = Tu;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Pu(t, null, e, 1, n ?? null, o, !1, l, a)),
    (e[un] = t.current),
    ps(e),
    s)
  )
    for (e = 0; e < s.length; e++)
      (n = s[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Fo(t);
};
Pt.render = function (e, t, n) {
  if (!Ho(t)) throw Error(le(200));
  return Vo(null, e, t, !1, n);
};
Pt.unmountComponentAtNode = function (e) {
  if (!Ho(e)) throw Error(le(40));
  return e._reactRootContainer
    ? (Kn(function () {
        Vo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[un] = null);
        });
      }),
      !0)
    : !1;
};
Pt.unstable_batchedUpdates = ei;
Pt.unstable_renderSubtreeIntoContainer = function (e, t, n, s) {
  if (!Ho(n)) throw Error(le(200));
  if (e == null || e._reactInternals === void 0) throw Error(le(38));
  return Vo(e, t, n, !1, s);
};
Pt.version = "18.3.1-next-f1338f8080-20240426";
function Ru() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ru);
    } catch (e) {
      console.error(e);
    }
}
Ru(), (Rc.exports = Pt);
var qm = Rc.exports,
  Au,
  vc = qm;
(Au = vc.createRoot), vc.hydrateRoot;
class Wm {
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
  async addMedMapSection(t, n) {
    const s = { ValueAry: [t, n] };
    return this.request("/api/medMap/add_medMap_section", {
      method: "POST",
      body: JSON.stringify(s),
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
    return this.request("/api/MED_page/serch_by_BarCode", {
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
const De = new Wm();
class Ym {
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
                contents: [],
                med_list: [],
              }),
              Array.isArray(l.sub_section) &&
                l.sub_section.forEach((c, g) => {
                  let m = {
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
                  o.contents[a].contents[g] = m;
                  let h = 0;
                  Array.isArray(c.shelf) &&
                    c.shelf.forEach((u, j) => {
                      let b = {
                        GUID: u.GUID,
                        Master_GUID: u.Master_GUID,
                        name: u.name,
                        class: 3,
                        gird_position: u.position,
                        serverName: u.serverName || "",
                        serverType: u.serverType || "",
                        device_type: u.device_type || "",
                        type: u.type,
                        contents: [],
                        ip: u.ip_light,
                        width: u.width,
                        height: u.height,
                      };
                      if (
                        (b.serverName &&
                          (b.serverName = t.sys_ServerSetting.name),
                        b.serverType &&
                          (b.serverType = t.sys_ServerSetting.type),
                        u.type == "dispensing_shelves" || u.type == "shelf")
                      )
                        u.type == "shelf" && (b.type = "dispensing_shelves"),
                          Array.isArray(u.medMapBox) &&
                            u.medMapBox.forEach((k, f) => {
                              let d = {
                                  GUID: k.GUID,
                                  Master_GUID: k.Master_GUID,
                                  name: "藥盒",
                                  class: 4,
                                  gird_position: k.position,
                                  ip: k.ip_box,
                                  box_type: "",
                                  width: k.width,
                                  height: k.height,
                                  serverType: k.serverType,
                                  serverName: k.serverName,
                                  med_info: [],
                                  type: "med_box",
                                },
                                x = {},
                                D = u.position.split(","),
                                R = k.position.split(",");
                              if (k.storage) {
                                switch (
                                  ((d.device_type = k.storage.DeviceType),
                                  (d.storage = k.storage),
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
                                (x.name = k.storage.Name),
                                  (x.code = k.storage.Code),
                                  (x.cht_name = k.storage.ChineseName),
                                  (x.SKDIACODE = k.storage.SKDIACODE),
                                  (x.device_type = k.storage.device_type),
                                  (x.qty = k.storage.StorageName),
                                  (x.stockCol = `${+D[0] + 1}`),
                                  (x.stockRow = ""),
                                  (x.stock = `${+R[1] + 1}`);
                              } else
                                (d.device_type = 10),
                                  (d.box_type = "2.9"),
                                  (x.name = ""),
                                  (x.code = ""),
                                  (x.cht_name = ""),
                                  (x.stockCol = `${+D[0] + 1}`),
                                  (x.stockRow = ""),
                                  (x.stock = `${+R[1] + 1}`);
                              o.contents[a].med_list.push(x),
                                (d.med_info[0] = x),
                                b.contents.push(d);
                            });
                      else {
                        b.type = "store_shelves";
                        const k = u.medMapStock.sort((f, d) => {
                          const [x] = f.location.split(",").map(Number),
                            [D] = d.location.split(",").map(Number);
                          return x - D;
                        });
                        (b.medMapStock = k),
                          (b.name = u.name),
                          k.forEach((f, d) => {
                            let x = u.position.split(","),
                              D = c.position.split(",");
                            if (f.code) {
                              let R = {};
                              (R.name = f.name),
                                (R.code = f.code),
                                (R.cht_name = ""),
                                (R.SKDIACODE = f.material_no),
                                (R.qty = f.qty),
                                (R.stockCol = `${+x[0] + 1}`),
                                (R.stockRow = `${+D[1] + 1}`),
                                (R.stock = `${d + 1}`),
                                o.contents[a].med_list.push(R);
                            }
                          });
                      }
                      let _ = u.position.split(",")[1];
                      h < +_ &&
                        ((h = +_), (o.contents[a].contents[g].oriMaxCol = +h)),
                        o.contents[a].contents[g].contents.push(b);
                    }),
                    Array.isArray(c.drawer) &&
                      c.drawer.forEach((u, j) => {
                        let b = {
                          GUID: u.GUID,
                          Master_GUID: u.Master_GUID,
                          name: `抽屜 ${j}`,
                          class: 3,
                          gird_position: u.position,
                          ip: u.ip_drawer,
                          serverName: u.serverName,
                          serverType: u.serverType,
                        };
                        b.serverName &&
                          (b.serverName = t.sys_ServerSetting.name),
                          b.serverType &&
                            (b.serverType = t.sys_ServerSetting.type),
                          u.drawer
                            ? ((b.drawer = u.drawer),
                              u.drawer.Boxes &&
                                ((b.type = "grid_draw"),
                                (b.name = u.drawer.Name),
                                (b.Boxes = []),
                                Array.isArray(u.drawer.Boxes)
                                  ? u.drawer.Boxes.forEach((f, d) => {
                                      let x = [];
                                      Array.isArray(f) &&
                                        f.forEach((D, R) => {
                                          let E = {
                                            Row: D.Row,
                                            Column: D.Column,
                                            Width: 1,
                                            Height: 1,
                                            Slave: D.Slave,
                                            SlaveBox_Row: D.SlaveBox_Row,
                                            SlaveBox_Column: D.SlaveBox_Column,
                                            MasterBox_Column:
                                              D.MasterBox_Column,
                                            MasterBox_Row: D.MasterBox_Row,
                                            Name: D.Name,
                                            Code: D.Code,
                                            ChineseName: D.ChineseName,
                                            GUID: D.GUID,
                                          };
                                          x.push(E),
                                            D.Code &&
                                              o.contents[a].med_list.push(
                                                D.Code
                                              );
                                        }),
                                        b.Boxes.push(x);
                                    })
                                  : (b.Boxes = u.drawer.Boxes)))
                            : ((b.type = "list_draw"),
                              (b.name = `清單抽屜 ${j}`));
                        let _ = u.position.split(",")[1];
                        h < +_ &&
                          ((h = +_),
                          (o.contents[a].contents[g].oriMaxCol = +h)),
                          o.contents[a].contents[g].contents.push(b);
                      });
                });
          }),
        o
      );
    } else return {};
  }
  convertSingleComponent(t, n, s) {
    var l, a, i, c, g;
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
        depth: ((g = t.dimensions) == null ? void 0 : g.depth) || t.depth || 30,
      },
      med_box: t.med_box || t.medBox || t.medicine_boxes || [],
      Master_GUID: s,
    };
    return (
      t.components &&
        Array.isArray(t.components) &&
        (o.components = t.components.map((m, h) =>
          this.convertSingleComponent(m, h, o.GUID)
        )),
      Object.keys(t).forEach((m) => {
        [
          "GUID",
          "type",
          "name",
          "position",
          "dimensions",
          "med_box",
          "components",
        ].includes(m) || (o[m] = t[m]);
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
const Ut = new Ym(),
  Xm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ut },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  $u = p.createContext(void 0),
  Qm = ({ children: e }) => {
    const [t, n] = p.useState(!1),
      [s, o] = p.useState(null),
      [l, a] = p.useState(!1),
      [i, c] = p.useState(null),
      [g, m] = p.useState(null),
      [h, u] = p.useState("medicine"),
      [j, b] = p.useState(!1),
      [_, k] = p.useState(0),
      [f, d] = p.useState({ message: "", type: "success", isVisible: !1 }),
      [x, D] = p.useState(!1),
      [R, E] = p.useState(null),
      [I, F] = p.useState("edit"),
      [oe, A] = p.useState(!1),
      [X, ae] = p.useState(null),
      [S, v] = p.useState(!1),
      [G, y] = p.useState(null),
      [T, N] = p.useState(!1),
      [V, ie] = p.useState(!1),
      [q, re] = p.useState(null),
      [xe, ce] = p.useState(!1),
      [B, se] = p.useState(null),
      [H, ye] = p.useState(!1),
      [Se, P] = p.useState(null),
      [ue, U] = p.useState(!1),
      [M, ne] = p.useState(null),
      [fe, z] = p.useState(null),
      [C, $] = p.useState("add"),
      [Y, te] = p.useState(!1),
      [de, he] = p.useState([]),
      [ve, Ee] = p.useState([]),
      [ge, we] = p.useState(!1),
      [Ce, Te] = p.useState(!1),
      [Qe, Pe] = p.useState(""),
      [Je, Fe] = p.useState(!1),
      [kt, ft] = p.useState(""),
      [On, Qt] = p.useState(!1),
      [Wo, $r] = p.useState(null),
      [w, K] = p.useState(null),
      [Q, L] = p.useState(!1),
      [W, O] = p.useState(null),
      [J, ee] = p.useState(!1),
      [pe, Z] = p.useState(null),
      me = () => {
        sessionStorage.removeItem("user_session"), n(!1), o(null);
      },
      be = p.useCallback(() => {
        k((Ie) => Ie + 1);
      }, []),
      ke = p.useCallback((Ie, nt) => {
        d({ message: Ie, type: nt, isVisible: !0 });
      }, []),
      je = p.useCallback(() => {
        d((Ie) => ({ ...Ie, isVisible: !1 }));
      }, []),
      _e = (Ie) => {
        E(Ie), F("edit"), D(!0);
      },
      Me = () => {
        const Ie = {
          GUID: `new_medbox_${Date.now()}`,
          name: "",
          box_type: "",
          width: [],
          width_index: 0,
          med_info: [],
          parentShelf: null,
        };
        E(Ie), F("add"), D(!0);
      },
      Ze = () => {
        D(!1), E(null), F("edit");
      },
      Ln = (Ie) => {
        ae(Ie), A(!0);
      },
      Un = () => {
        A(!1), ae(null);
      },
      Vu = (Ie) => {
        y(Ie), v(!0);
      },
      qu = () => {
        v(!1), y(null);
      },
      Wu = (Ie) => {
        re(Ie), ie(!0);
      },
      Yu = () => {
        ie(!1), re(null);
      },
      Xu = (Ie) => {
        se(Ie), ce(!0);
      },
      Qu = () => {
        ce(!1), se(null);
      },
      Ku = (Ie) => {
        P(Ie), ye(!0);
      },
      Ju = () => {
        ye(!1), P(null);
      },
      Zu = (Ie) => {
        ne(Ie), z(null), $("add"), U(!0);
      },
      ef = (Ie, nt) => {
        ne(Ie), z(nt), $("edit"), U(!0);
      },
      tf = () => {
        U(!1), ne(null), z(null), $("add");
      },
      nf = () => {
        te(!0);
      },
      rf = () => {
        te(!1);
      },
      sf = (Ie = "") => {
        Pe(Ie), Te(!0);
      },
      of = () => {
        Te(!1);
      },
      lf = (Ie) => {
        ft(Ie), Fe(!0);
      },
      af = () => {
        Fe(!1), ft("");
      },
      cf = (Ie, nt) => {
        $r(Ie), K(nt || null), Qt(!0);
      },
      df = () => {
        Qt(!1), $r(null), K(null);
      },
      uf = (Ie) => {
        O(Ie), L(!0);
      },
      ff = () => {
        L(!1), O(null);
      },
      pf = (Ie) => {
        Z(Ie), ee(!0);
      },
      mf = () => {
        ee(!1), Z(null);
      },
      hf = p.useCallback(async () => {
        if (!i) {
          console.warn("沒有選擇部門分類，無法重新載入資料");
          return;
        }
        console.log("🔄 重新載入藥品地圖資料，部門類型:", i), N(!0);
        try {
          const Ie = await De.getMedMapByDepartment(i);
          if (Ie.Code === 200 && Ie.Data) {
            console.log("📡 重新載入成功:", Ie.Data);
            const nt = Ut.convertMedMapApiToFakeData(Ie.Data);
            if (!Ut.validateConvertedData(nt)) {
              console.error("❌ 轉換後的資料驗證失敗"), m(null);
              return;
            }
            m(nt), console.log("✅ 地圖資料已重新載入");
          } else console.error("❌ API 回傳錯誤:", Ie), m(null);
        } catch (Ie) {
          console.error("💥 重新載入藥品地圖資料失敗:", Ie), m(null);
        } finally {
          N(!1);
        }
      }, [i, N, m]),
      gf = p.useCallback((Ie, nt) => {
        m(
          (Dt) =>
            Dt &&
            Dt.map((Rt) => {
              const yt = { ...Rt };
              return (
                yt.contents &&
                  (yt.contents = yt.contents.map((er) => {
                    const tr = { ...er };
                    return (
                      tr.contents &&
                        (tr.contents = tr.contents.map((nr) => {
                          const rr = { ...nr };
                          return (
                            rr.contents &&
                              (rr.contents = rr.contents.map((hn) => {
                                if (hn.GUID === Ie) {
                                  const Gt = { ...hn };
                                  return (
                                    Gt.medMapStock || (Gt.medMapStock = []),
                                    (Gt.medMapStock = [...Gt.medMapStock, nt]),
                                    Gt
                                  );
                                }
                                return hn;
                              })),
                            rr
                          );
                        })),
                      tr
                    );
                  })),
                yt
              );
            })
        );
      }, []),
      xf = p.useCallback((Ie, nt, Dt) => {
        m(
          (rn) =>
            rn &&
            rn.map((yt) => {
              const er = { ...yt };
              return (
                er.contents &&
                  (er.contents = er.contents.map((tr) => {
                    const nr = { ...tr };
                    return (
                      nr.contents &&
                        (nr.contents = nr.contents.map((rr) => {
                          const hn = { ...rr };
                          return (
                            hn.contents &&
                              (hn.contents = hn.contents.map((Gt) => {
                                if (Gt.GUID === Ie && Gt.medMapStock) {
                                  const di = { ...Gt };
                                  return (
                                    (di.medMapStock = Gt.medMapStock.map((Yo) =>
                                      Yo.GUID === nt ? { ...Yo, ...Dt } : Yo
                                    )),
                                    di
                                  );
                                }
                                return Gt;
                              })),
                            hn
                          );
                        })),
                      nr
                    );
                  })),
                er
              );
            })
        );
      }, []),
      yf = p.useCallback((Ie, nt) => {
        m((Dt) => {
          if (!Dt) return Dt;
          const rn = (Rt) =>
            Rt.map((yt) =>
              yt.GUID === Ie
                ? { ...yt, ...nt }
                : yt.contents && Array.isArray(yt.contents)
                ? { ...yt, contents: rn(yt.contents) }
                : yt
            );
          return rn(Dt);
        });
      }, []),
      vf = p.useCallback((Ie) => {
        m((nt) => {
          if (!nt) return nt;
          const Dt = (rn) =>
            rn
              .filter((Rt) => Rt.GUID !== Ie)
              .map((Rt) =>
                Rt.contents && Array.isArray(Rt.contents)
                  ? { ...Rt, contents: Dt(Rt.contents) }
                  : Rt
              );
          return Dt(nt);
        });
      }, []);
    return r.jsx($u.Provider, {
      value: {
        isAuthenticated: t,
        setIsAuthenticated: n,
        currentUser: s,
        setCurrentUser: o,
        logout: me,
        sidebarOpen: l,
        setSidebarOpen: a,
        selectedDepartmentType: i,
        setSelectedDepartmentType: c,
        isAdminMode: j,
        setIsAdminMode: b,
        apiDepartmentData: g,
        setApiDepartmentData: m,
        viewMode: h,
        setViewMode: u,
        refreshTrigger: _,
        triggerRefresh: be,
        addStockToShelf: gf,
        notification: f,
        showNotification: ke,
        hideNotification: je,
        medBoxModalOpen: x,
        setMedBoxModalOpen: D,
        selectedMedBox: R,
        setSelectedMedBox: E,
        openMedBoxModal: _e,
        closeMedBoxModal: Ze,
        modalMode: I,
        setModalMode: F,
        openAddMedBoxModal: Me,
        listDrawModalOpen: oe,
        setListDrawModalOpen: A,
        selectedListDraw: X,
        setSelectedListDraw: ae,
        openListDrawModal: Ln,
        closeListDrawModal: Un,
        gridDrawModalOpen: S,
        setGridDrawModalOpen: v,
        selectedGridDraw: G,
        setSelectedGridDraw: y,
        openGridDrawModal: Vu,
        closeGridDrawModal: qu,
        isLoadingMedMap: T,
        setIsLoadingMedMap: N,
        addParentContainerModalOpen: V,
        setAddParentContainerModalOpen: ie,
        selectedDepartmentForAdd: q,
        setSelectedDepartmentForAdd: re,
        openAddParentContainerModal: Wu,
        closeAddParentContainerModal: Yu,
        addShelfDrawContainerModalOpen: xe,
        setAddShelfDrawContainerModalOpen: ce,
        selectedSubContainerForAdd: B,
        setSelectedSubContainerForAdd: se,
        openAddShelfDrawContainerModal: Xu,
        closeAddShelfDrawContainerModal: Qu,
        addSubContainerModalOpen: H,
        setAddSubContainerModalOpen: ye,
        selectedParentContainerForAdd: Se,
        setSelectedParentContainerForAdd: P,
        openAddSubContainerModal: Ku,
        closeAddSubContainerModal: Ju,
        addStoreItemModalOpen: ue,
        setAddStoreItemModalOpen: U,
        selectedStoreShelfForAdd: M,
        setSelectedStoreShelfForAdd: ne,
        selectedStockItemForEdit: fe,
        setSelectedStockItemForEdit: z,
        storeItemModalMode: C,
        setStoreItemModalMode: $,
        openAddStoreItemModal: Zu,
        openEditStoreItemModal: ef,
        closeAddStoreItemModal: tf,
        updateStockInShelf: xf,
        updateContainerInLocalData: yf,
        removeContainerFromLocalData: vf,
        addDepartmentModalOpen: Y,
        setAddDepartmentModalOpen: te,
        allDepartmentsList: de,
        setAllDepartmentsList: he,
        openAddDepartmentModal: nf,
        closeAddDepartmentModal: rf,
        reloadMedMapData: hf,
        qrCodeScannerModalOpen: Ce,
        qrCodeScannerMode: Qe,
        setQRCodeScannerModalOpen: Te,
        openQRCodeScannerModal: sf,
        closeQRCodeScannerModal: of,
        addBarcodeModalOpen: Je,
        setAddBarcodeModalOpen: Fe,
        openAddBarcodeModal: lf,
        closeAddBarcodeModal: af,
        initialBarcodeValue: kt,
        containerDetailModalOpen: On,
        setContainerDetailModalOpen: Qt,
        selectedContainerForDetail: Wo,
        setSelectedContainerForDetail: $r,
        highlightedMedicineCode: w,
        setHighlightedMedicineCode: K,
        openContainerDetailModal: cf,
        closeContainerDetailModal: df,
        editStoreShelfModalOpen: Q,
        setEditStoreShelfModalOpen: L,
        selectedStoreShelfForEdit: W,
        setSelectedStoreShelfForEdit: O,
        openEditStoreShelfModal: uf,
        closeEditStoreShelfModal: ff,
        editParentContainerModalOpen: J,
        setEditParentContainerModalOpen: ee,
        selectedParentContainerForEdit: pe,
        setSelectedParentContainerForEdit: Z,
        openEditParentContainerModal: pf,
        closeEditParentContainerModal: mf,
        medicineList: ve,
        setMedicineList: Ee,
        isLoadingMedicines: ge,
        setIsLoadingMedicines: we,
      },
      children: e,
    });
  },
  Ye = () => {
    const e = p.useContext($u);
    if (e === void 0)
      throw new Error("useDrugMap must be used within a DrugMapProvider");
    return e;
  },
  Km = {
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
  Ou = p.createContext(void 0),
  Jm = ({ children: e }) => {
    const [t, n] = p.useState("zh-TW"),
      s = (o) => Km[t][o] || o;
    return r.jsx(Ou.Provider, {
      value: { language: t, setLanguage: n, t: s },
      children: e,
    });
  },
  xt = () => {
    const e = p.useContext(Ou);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Zm = {
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
 */ const eh = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  $e = (e, t) => {
    const n = p.forwardRef(
      (
        {
          color: s = "currentColor",
          size: o = 24,
          strokeWidth: l = 2,
          absoluteStrokeWidth: a,
          className: i = "",
          children: c,
          ...g
        },
        m
      ) =>
        p.createElement(
          "svg",
          {
            ref: m,
            ...Zm,
            width: o,
            height: o,
            stroke: s,
            strokeWidth: a ? (Number(l) * 24) / Number(o) : l,
            className: ["lucide", `lucide-${eh(e)}`, i].join(" "),
            ...g,
          },
          [
            ...t.map(([h, u]) => p.createElement(h, u)),
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
 */ const th = $e("Archive", [
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
 */ const wc = $e("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lu = $e("Building2", [
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
 */ const Pr = $e("Camera", [
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
 */ const nh = $e("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hs = $e("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uu = $e("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rh = $e("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sh = $e("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bu = $e("EyeOff", [
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
 */ const zu = $e("Eye", [
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
 */ const oh = $e("Globe", [
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
 */ const Gu = $e("Grid3x3", [
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
 */ const ii = $e("Layers", [
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
 */ const lh = $e("Lightbulb", [
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
 */ const ah = $e("ListX", [
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
 */ const pa = $e("List", [
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
 */ const Ct = $e("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ci = $e("Lock", [
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
 */ const ih = $e("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ch = $e("Package", [
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
 */ const xr = $e("Pen", [
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
 */ const dh = $e("Pill", [
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
 */ const bt = $e("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jn = $e("Settings", [
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
 */ const yr = $e("Trash2", [
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
 */ const Fu = $e("Unlock", [
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
 */ const uh = $e("Warehouse", [
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
 */ const fh = $e("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ge = $e("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  ph = () => {
    const { sidebarOpen: e, setSidebarOpen: t } = Ye(),
      { t: n } = xt();
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
              children: r.jsx(ii, { className: "w-5 h-5" }),
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
                ? r.jsx(pa, { className: "w-6 h-6" })
                : r.jsx(pa, { className: "w-6 h-6" }),
            }),
          ],
        }),
      }),
    });
  },
  mh = () => {
    const {
        viewMode: e,
        setViewMode: t,
        logout: n,
        currentUser: s,
        selectedDepartmentType: o,
        openAddDepartmentModal: l,
        apiDepartmentData: a,
        allDepartmentsList: i,
      } = Ye(),
      { language: c, setLanguage: g, t: m } = xt(),
      [h, u] = so.useState(!1),
      j = () => {
        g(c === "zh-TW" ? "en" : "zh-TW");
      },
      b = so.useMemo(() => {
        if (!o || !i || !a) return !1;
        const _ = a.map((d) => d.name);
        return (
          i
            .filter((d) => d["department_type "] === o)
            .filter((d) => !_.includes(d.name)).length > 0
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
                        r.jsx(dh, { className: "w-4 h-4" }),
                        r.jsx("span", {
                          className: "text-sm font-medium",
                          children: m("topbar.medicine"),
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
                        r.jsx(Lu, { className: "w-4 h-4" }),
                        r.jsx("span", {
                          className: "text-sm font-medium",
                          children: m("topbar.department"),
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsx("button", {
                  onClick: () => u(!h),
                  className:
                    "lg:hidden flex items-center justify-center p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                  children: h
                    ? r.jsx(sh, { className: "w-4 h-4" })
                    : r.jsx(Uu, { className: "w-4 h-4" }),
                }),
              ],
            }),
            r.jsxs("div", {
              className: `
            flex items-center gap-2 lg:gap-0 lg:space-x-2 flex-col lg:flex-row
            lg:flex lg:opacity-100 lg:max-h-none
            transition-all duration-300 ease-in-out overflow-hidden
            ${
              h
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
                          r.jsx(bt, { className: "w-4 h-4" }),
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
                    r.jsx(oh, { className: "w-4 h-4" }),
                    r.jsx("span", {
                      className: "text-sm font-medium",
                      children: m("topbar.language"),
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
                    r.jsx(ih, { className: "w-4 h-4" }),
                    r.jsx("span", {
                      className: "text-sm font-medium",
                      children: m("topbar.logout"),
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
  hh = [
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
  gh = ({ isOpen: e, onClose: t }) => {
    const [n, s] = p.useState("blue"),
      [o, l] = p.useState(1),
      [a, i] = p.useState(60),
      [c, g] = p.useState(""),
      [m, h] = p.useState(""),
      [u, j] = p.useState([]),
      [b, _] = p.useState([]),
      [k, f] = p.useState([]),
      [d, x] = p.useState(!1),
      [D, R] = p.useState(!1),
      E = p.useRef(null),
      I = p.useRef(null),
      F = p.useRef(null),
      oe = p.useRef(null);
    p.useEffect(() => {
      if (e) {
        const y = localStorage.getItem("medMap_setting");
        if (y)
          try {
            const T = JSON.parse(y);
            s(T.light_color || "blue"),
              l(T.brightness !== void 0 ? T.brightness : 1),
              i(T.light_sec !== void 0 ? T.light_sec : 60),
              g(T.default_person || ""),
              h(T.default_person_id || "");
          } catch (T) {
            console.error("讀取設定失敗:", T),
              s("blue"),
              l(1),
              i(60),
              g(""),
              h("");
          }
        else s("blue"), l(1), i(60), g(""), h("");
        A();
      }
    }, [e]),
      p.useEffect(() => {
        const y = (T) => {
          F.current &&
            !F.current.contains(T.target) &&
            E.current &&
            !E.current.contains(T.target) &&
            x(!1),
            oe.current &&
              !oe.current.contains(T.target) &&
              I.current &&
              !I.current.contains(T.target) &&
              R(!1);
        };
        return (
          document.addEventListener("mousedown", y),
          () => document.removeEventListener("mousedown", y)
        );
      }, []);
    const A = async () => {
        try {
          const y = await De.getAllStaffInfo();
          y.Code === 200 && y.Data && j(y.Data);
        } catch (y) {
          console.error("獲取人員資料失敗:", y);
        }
      },
      X = (y) => {
        if ((g(y), y.trim() === "")) {
          _([]), x(!1);
          return;
        }
        const T = u.filter(
          (N) => N.name && N.name.toLowerCase().includes(y.toLowerCase())
        );
        _(T), x(T.length > 0);
      },
      ae = (y) => {
        if ((h(y), y.trim() === "")) {
          f([]), R(!1);
          return;
        }
        const T = u.filter(
          (N) => N.ID && N.ID.toLowerCase().includes(y.toLowerCase())
        );
        f(T), R(T.length > 0);
      },
      S = (y) => {
        g(y.name), h(y.ID), x(!1);
      },
      v = (y) => {
        g(y.name), h(y.ID), R(!1);
      },
      G = () => {
        const y = {
          light_color: n,
          brightness: o,
          light_sec: a,
          default_person: c,
          default_person_id: m,
        };
        localStorage.setItem("medMap_setting", JSON.stringify(y)),
          console.log("設定已儲存:", y),
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
                      children: r.jsx(Ge, { className: "w-5 h-5" }),
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
                                  ref: E,
                                  type: "text",
                                  value: c,
                                  onChange: (y) => X(y.target.value),
                                  onFocus: () => {
                                    c.trim() && X(c);
                                  },
                                  placeholder: "請輸入人員名稱",
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                }),
                                d &&
                                  r.jsx("div", {
                                    ref: F,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: b.map((y, T) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          onClick: () => S(y),
                                          className:
                                            "px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                          children: [
                                            r.jsx("div", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: y.name,
                                            }),
                                            r.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: y.ID,
                                            }),
                                          ],
                                        },
                                        T
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
                                  ref: I,
                                  type: "text",
                                  value: m,
                                  onChange: (y) => ae(y.target.value),
                                  onFocus: () => {
                                    m.trim() && ae(m);
                                  },
                                  placeholder: "請輸入人員 ID",
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                }),
                                D &&
                                  r.jsx("div", {
                                    ref: oe,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: k.map((y, T) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          onClick: () => v(y),
                                          className:
                                            "px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                          children: [
                                            r.jsx("div", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: y.ID,
                                            }),
                                            r.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: y.name,
                                            }),
                                          ],
                                        },
                                        T
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
                          children: hh.map((y) =>
                            r.jsxs(
                              "button",
                              {
                                onClick: () => s(y.value),
                                className: `
                    relative p-3 rounded-lg border-2 transition-all
                    ${y.bgColor} ${y.textColor}
                    ${
                      n === y.value
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
                                        children: y.name,
                                      }),
                                      r.jsx("div", {
                                        className: "text-xs opacity-90",
                                        children: y.bgr,
                                      }),
                                    ],
                                  }),
                                  n === y.value &&
                                    r.jsx("div", {
                                      className:
                                        "absolute top-1 right-1 w-3 h-3 bg-white rounded-full border-2 border-gray-900",
                                    }),
                                ],
                              },
                              y.value
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
                              onChange: (y) => l(parseFloat(y.target.value)),
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
                              onChange: (y) => i(parseInt(y.target.value)),
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
                      onClick: G,
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
  xh = ({ isOpen: e, onClose: t, onConfirm: n }) => {
    const [s, o] = p.useState(""),
      [l, a] = p.useState(!1);
    p.useEffect(() => {
      e && (o(""), a(!1));
    }, [e]);
    const i = (g) => {
        g.preventDefault(), s.trim() && n(s);
      },
      c = (g) => {
        g.key === "Escape" && t();
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
              onClick: (g) => g.stopPropagation(),
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
                          children: r.jsx(ci, {
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
                      children: r.jsx(Ge, { className: "w-6 h-6" }),
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
                            onChange: (g) => o(g.target.value),
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
                              ? r.jsx(Bu, { className: "w-5 h-5" })
                              : r.jsx(zu, { className: "w-5 h-5" }),
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
  yh = () => {
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
        setIsAdminMode: g,
      } = Ye(),
      { t: m } = xt(),
      [h, u] = p.useState(new Set()),
      [j, b] = p.useState([]),
      [_, k] = p.useState(!0),
      [f, d] = p.useState([]),
      [x, D] = p.useState(!1),
      [R, E] = p.useState(!1),
      I = () => {
        c ? g(!1) : E(!0);
      },
      F = (S) => {
        S === "66437068" ? (g(!0), E(!1)) : alert("密碼錯誤，無法開啟後台模式");
      };
    p.useEffect(() => {
      (async () => {
        k(!0);
        try {
          const v = await De.getDepartments();
          v.Code === 200 && v.Data
            ? (console.log(v.Data), b(v.Data), i(v.Data))
            : (console.error("API returned error:", v), b([]), i([]));
        } catch (v) {
          console.error("Failed to fetch department data:", v), b([]), i([]);
        } finally {
          k(!1);
        }
      })();
    }, []);
    const oe = j.reduce((S, v) => {
        const G = v["department_type "];
        return S[G] || (S[G] = []), S[G].push(v), S;
      }, {}),
      A = (S) => {
        const v = new Set(h);
        v.has(S) ? v.delete(S) : v.add(S), u(v);
      },
      X = async (S) => {
        console.log("🏢 選擇部門:", S), s(S), await ae(S), t(!1);
      },
      ae = async (S) => {
        console.log("🚀 開始取得藥品地圖資料，部門類型:", S), a(!0);
        try {
          const v = await De.getMedMapByDepartment(S);
          if (v.Code === 200 && v.Data) {
            console.log("📡 API 回傳成功:", v.Data);
            const G = Ut.convertMedMapApiToFakeData(v.Data);
            if (!Ut.validateConvertedData(G)) {
              console.error("❌ 轉換後的資料驗證失敗"), d([]);
              return;
            }
            const T = Ut.generateConversionReport(v.Data, G);
            d(G),
              o(G),
              console.log("💾 已暫存轉換後的資料到狀態中"),
              console.log("📊 最終轉換結果:", G),
              console.log("📋 轉換報告:", T);
          } else console.error("❌ API 回傳錯誤:", v), d([]), o(null);
        } catch (v) {
          console.error("💥 取得藥品地圖資料失敗:", v), d([]), o(null);
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
                          title: m("nav.home"),
                          children: r.jsx(ii, { className: "w-5 h-5" }),
                        }),
                        r.jsx("h1", {
                          className: "text-lg font-semibold text-gray-900",
                          children: m("sidebar.drugMap"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      type: "button",
                      onClick: () => t(!e),
                      className:
                        "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                      title: m("sidebar.closeSidebar"),
                      children: r.jsx(ah, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
              }),
              r.jsx("div", {
                className: "flex-1 overflow-y-auto p-4",
                children: _
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
                          children: m("sidebar.departmentCategories"),
                        }),
                        Object.entries(oe).map(([S, v]) =>
                          r.jsxs(
                            "div",
                            {
                              className: "space-y-1",
                              children: [
                                r.jsxs("button", {
                                  type: "button",
                                  onClick: () => X(S),
                                  disabled: l,
                                  className: `w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 border ${
                                    n === S
                                      ? "bg-blue-50 text-blue-700 border-blue-200 shadow-sm"
                                      : "text-gray-700 hover:bg-gray-50 hover:shadow-sm border-transparent"
                                  } ${
                                    l ? "opacity-50 cursor-not-allowed" : ""
                                  }`,
                                  children: [
                                    r.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        S === "B1F"
                                          ? r.jsx(Lu, { className: "w-4 h-4" })
                                          : r.jsx(uh, { className: "w-4 h-4" }),
                                        r.jsxs("div", {
                                          className: "text-left",
                                          children: [
                                            r.jsx("div", {
                                              className: "font-medium",
                                              children: S,
                                            }),
                                            r.jsxs("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: [
                                                v.length,
                                                " ",
                                                m("sidebar.departments"),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    r.jsx("div", {
                                      onClick: (G) => {
                                        G.stopPropagation(), A(S);
                                      },
                                      className:
                                        "p-1 hover:bg-gray-200/50 rounded transition-colors",
                                      children: h.has(S)
                                        ? r.jsx(Uu, { className: "w-4 h-4" })
                                        : r.jsx(rh, { className: "w-4 h-4" }),
                                    }),
                                  ],
                                }),
                                h.has(S) &&
                                  r.jsx("div", {
                                    className: "ml-6 space-y-2",
                                    children: v.map((G) =>
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
                                                children: G.name,
                                              }),
                                              r.jsx("span", {
                                                className: `text-xs px-2 py-1 rounded-full ${
                                                  G.type === "調劑台"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-blue-100 text-blue-800"
                                                }`,
                                                children: G.type,
                                              }),
                                            ],
                                          }),
                                        },
                                        G.GUID
                                      )
                                    ),
                                  }),
                              ],
                            },
                            S
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
                          onClick: I,
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
                      onClick: () => D(!0),
                      className:
                        "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                      title: "設定",
                      children: r.jsx(jn, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        r.jsx(gh, { isOpen: x, onClose: () => D(!1) }),
        r.jsx(xh, { isOpen: R, onClose: () => E(!1), onConfirm: F }),
      ],
    });
  },
  vh = () => {
    const { t: e } = xt();
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
  wh = ({
    component: e,
    scale: t,
    isLocked: n,
    isHighlighted: s = !1,
    onContainerClick: o,
  }) => {
    const l = p.useRef(null),
      { t: a } = xt(),
      {
        apiDepartmentData: i,
        setApiDepartmentData: c,
        showNotification: g,
      } = Ye(),
      [m, h] = p.useState(!1),
      [u, j] = p.useState({ x: 0, y: 0 }),
      [b, _] = p.useState(e.position),
      [k, f] = p.useState(!1),
      [d, x] = p.useState(null),
      [D, R] = p.useState({ x: 0, y: 0 }),
      [E, I] = p.useState({ x: 0, y: 0 }),
      F = () => {
        try {
          const H = localStorage.getItem("medMap_setting");
          if (H) return JSON.parse(H).light_color || "red";
        } catch (H) {
          console.error("讀取高亮顏色設定失敗:", H);
        }
        return "red";
      },
      oe = p.useCallback(
        async (H, ye) => {
          if (!i) return;
          console.log("🔄 更新組件位置:", H, ye);
          const Se = JSON.parse(JSON.stringify(i)),
            P = (U) => {
              for (const M of U) {
                if (M.GUID === H)
                  return (
                    (M.position = { x: ye.x.toFixed(3), y: ye.y.toFixed(3) }),
                    console.log(
                      "✅ 組件位置已更新:",
                      M.name,
                      ye.x.toFixed(3),
                      ye.y.toFixed(3)
                    ),
                    !0
                  );
                if (
                  (M.components &&
                    Array.isArray(M.components) &&
                    P(M.components)) ||
                  (M.contents && Array.isArray(M.contents) && P(M.contents))
                )
                  return !0;
              }
              return !1;
            };
          if (P(Se)) {
            c(Se), console.log("💾 全域資料已更新");
            try {
              console.log("📡 開始同步後端位置資料...");
              const U = await De.updateContainerPosition({
                GUID: H,
                absolute_position: `${ye.x.toFixed(3)},${ye.y.toFixed(3)}`,
              });
              U.Code === 200
                ? (console.log("✅ 後端位置同步成功", U),
                  g("位置更新成功", "success"))
                : (console.error("❌ 後端位置同步失敗:", U),
                  g(`位置更新失敗: ${U.Result || "未知錯誤"}`, "error"));
            } catch (U) {
              console.error("💥 後端位置同步發生錯誤:", U),
                g("位置更新失敗: 網路錯誤", "error");
            }
          } else console.warn("⚠️ 未找到要更新的組件:", H);
        },
        [i, c, g]
      ),
      { position: A, dimensions: X, name: ae, type: S } = e,
      v = p.useCallback(
        (H) => {
          const ye = l.current;
          if (ye)
            if ((I({ x: H.clientX, y: H.clientY }), n)) {
              H.preventDefault(),
                H.stopPropagation(),
                ye.setPointerCapture(H.pointerId);
              const Se = ye.getBoundingClientRect(),
                P = H.clientX - Se.left,
                ue = H.clientY - Se.top;
              j({ x: P, y: ue }), h(!0), f(!1);
            } else f(!1);
        },
        [n]
      ),
      G = p.useCallback(() => {
        if (!i) return [];
        const H = [],
          ye = (Se) => {
            for (const P of Se)
              P.GUID !== e.GUID &&
                P.position &&
                H.push({
                  GUID: P.GUID,
                  position: P.position,
                  dimensions: P.dimensions,
                }),
                P.components && Array.isArray(P.components) && ye(P.components),
                P.contents && Array.isArray(P.contents) && ye(P.contents);
          };
        return ye(i), H;
      }, [i, e.GUID]),
      y = p.useCallback(
        (H, ye) => {
          const P = G();
          let ue = H,
            U = ye;
          for (const M of P) {
            const ne = parseFloat(M.position.x),
              fe = parseFloat(M.position.y);
            if (
              (Math.abs(H - ne) < 20 && (ue = ne),
              Math.abs(ye - fe) < 20 && (U = fe),
              M.dimensions && e.dimensions)
            ) {
              const z = ne + parseFloat(M.dimensions.width),
                C = H + parseFloat(e.dimensions.width);
              Math.abs(C - z) < 20 && (ue = z - parseFloat(e.dimensions.width));
              const $ = fe + parseFloat(M.dimensions.depth),
                Y = ye + parseFloat(e.dimensions.depth);
              Math.abs(Y - $) < 20 && (U = $ - parseFloat(e.dimensions.depth));
            }
          }
          return { x: ue, y: U };
        },
        [G, e.dimensions]
      ),
      T = p.useCallback(
        (H) => {
          const ye = Math.abs(H.clientX - E.x),
            Se = Math.abs(H.clientY - E.y);
          if (((ye > 5 || Se > 5) && f(!0), !m || !n)) return;
          H.preventDefault(), H.stopPropagation();
          const P = l.current;
          if (!P) return;
          const ue = P.closest("[data-canvas-content]");
          if (!ue) return;
          const U = ue.getBoundingClientRect(),
            M = (H.clientX - U.left - u.x) / t,
            ne = (H.clientY - U.top - u.y) / t,
            fe = y(M, ne);
          _(fe);
        },
        [m, u, t, n, y, E]
      ),
      N = p.useCallback(
        (H) => {
          const ye = Math.abs(H.clientX - E.x),
            Se = Math.abs(H.clientY - E.y),
            P = ye > 5 || Se > 5;
          if (n) {
            if (!m) return;
            H.preventDefault(), H.stopPropagation();
            const ue = l.current;
            ue && ue.releasePointerCapture(H.pointerId),
              h(!1),
              P ? oe(e.GUID, b) : o && o(e),
              f(!1);
          } else
            !P && o && (H.preventDefault(), H.stopPropagation(), o(e)), f(!1);
        },
        [m, n, o, e, oe, b, E]
      ),
      V = p.useCallback(
        (H) => {
          const ye = l.current;
          if (!ye) return;
          const Se = H.touches[0];
          if (Se && (R({ x: Se.clientX, y: Se.clientY }), n)) {
            H.preventDefault(), H.stopPropagation(), x(Se.identifier);
            const P = ye.getBoundingClientRect(),
              ue = Se.clientX - P.left,
              U = Se.clientY - P.top;
            j({ x: ue, y: U }), h(!0);
          }
        },
        [n]
      ),
      ie = p.useCallback(
        (H) => {
          if (!m || !n || d === null) return;
          H.preventDefault(), H.stopPropagation();
          const ye = l.current;
          if (!ye) return;
          const Se = Array.from(H.touches).find((fe) => fe.identifier === d);
          if (!Se) return;
          const P = ye.closest("[data-canvas-content]");
          if (!P) return;
          const ue = P.getBoundingClientRect(),
            U = (Se.clientX - ue.left - u.x) / t,
            M = (Se.clientY - ue.top - u.y) / t,
            ne = y(U, M);
          _(ne);
        },
        [m, u, t, n, d, y]
      ),
      q = p.useCallback(
        (H) => {
          const ye = Array.from(H.changedTouches)[0];
          if (!ye) return;
          const Se = Math.abs(ye.clientX - D.x),
            P = Math.abs(ye.clientY - D.y),
            ue = Se > 10 || P > 10;
          if (n) {
            if (
              !m ||
              d === null ||
              !Array.from(H.changedTouches).some((M) => M.identifier === d)
            )
              return;
            H.preventDefault(),
              H.stopPropagation(),
              h(!1),
              x(null),
              R({ x: 0, y: 0 }),
              ue ? oe(e.GUID, b) : o && o(e);
          } else
            !ue && o && (H.preventDefault(), H.stopPropagation(), o(e)),
              R({ x: 0, y: 0 });
        },
        [m, n, d, oe, e, b, D, o]
      ),
      re = p.useCallback(
        (H) => {
          !m ||
            !n ||
            d === null ||
            !Array.from(H.changedTouches).some((Se) => Se.identifier === d) ||
            (H.preventDefault(),
            H.stopPropagation(),
            _(e.position),
            h(!1),
            x(null),
            R({ x: 0, y: 0 }));
        },
        [m, n, d, e.position]
      ),
      xe = (H) => {
        if (s) return `highlight-breathe-${F()}`;
        switch (H) {
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
      ce = (H) => {
        if (s) return `highlight-breathe-${F()}`;
        switch (H) {
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
      B = (H) => {
        if (s) return `highlight-tag-${F()}`;
        switch (H) {
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
      se = (H) => {
        const ye =
          H === "調劑台"
            ? "type.dispensingStation"
            : H === "藥庫"
            ? "type.warehouse"
            : H === "parent_container"
            ? "櫃體"
            : "type." + H;
        return a(ye) || H;
      };
    return r.jsx("div", {
      ref: l,
      className: `flex flex-col absolute border-2 rounded-lg shadow-lg hover:shadow-xl ${xe(
        S
      )} overflow-hidden ${n ? "cursor-move" : "cursor-default"} ${
        m ? "shadow-2xl z-50" : ""
      }`,
      style: {
        left: `${b.x}px`,
        top: `${b.y}px`,
        minWidth: S === "調劑台" || S === "藥庫" ? "120px" : "180px",
        minHeight: S === "調劑台" || S === "藥庫" ? "60px" : "120px",
        userSelect: "none",
        touchAction: "none",
        transition: m
          ? "none"
          : "transform 0.2s ease-out, box-shadow 0.2s ease-out",
      },
      onPointerDown: v,
      onPointerMove: T,
      onPointerUp: N,
      onTouchStart: V,
      onTouchMove: ie,
      onTouchEnd: q,
      onTouchCancel: re,
      children: r.jsx("div", {
        className: `w-full min-w-[400px] h-auto flex items-start flex-1 justify-between p-2 border-gray-600 ${ce(
          S
        )}`,
        children: r.jsx("div", {
          className: "flex space-x-2 flex-1 min-w-0",
          children: r.jsxs("div", {
            className: "min-w-0 flex gap-4",
            children: [
              r.jsx("div", {
                className: "font-semibold text-lg truncate",
                children: ae,
              }),
              r.jsx("div", {
                className: `text-sm truncate py-1 px-3 text-white rounded-2xl ${B(
                  S
                )}`,
                children: se(S),
              }),
            ],
          }),
        }),
      }),
    });
  },
  qo = ({ isOpen: e, onClose: t, onScanSuccess: n, mode: s }) => {
    const { showNotification: o, openAddBarcodeModal: l } = Ye();
    console.log("🔍 QRCodeScannerModal props:", {
      isOpen: e,
      mode: s,
      hasOnScanSuccess: !!n,
    });
    const a = p.useRef(null),
      i = p.useRef(null),
      c = p.useRef(null),
      g = p.useRef(null),
      m = p.useRef(null),
      [h, u] = p.useState(!1),
      [j, b] = p.useState(""),
      [_, k] = p.useState(0),
      [f, d] = p.useState(null),
      [x, D] = p.useState(!1);
    p.useEffect(() => {
      const X = () => {
        const ae = window.innerWidth < 680;
        D(ae);
      };
      return (
        X(),
        window.addEventListener("resize", X),
        () => window.removeEventListener("resize", X)
      );
    }, []);
    const R = async () => {
        try {
          b("");
          const X = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: "environment",
              width: { ideal: 1920 },
              height: { ideal: 1080 },
            },
          });
          (c.current = X),
            a.current &&
              ((a.current.srcObject = X),
              await a.current.play(),
              console.log("✅ Camera started, setting isScanning to true"),
              u(!0));
        } catch (X) {
          console.error("無法開啟相機:", X),
            b("無法開啟相機，請確認相機權限已開啟");
        }
      },
      E = () => {
        g.current && (clearInterval(g.current), (g.current = null)),
          c.current &&
            (c.current.getTracks().forEach((X) => X.stop()),
            (c.current = null)),
          a.current && (a.current.srcObject = null),
          u(!1);
      },
      I = async () => {
        if (
          (console.log("🔄 captureAndScan called"),
          console.log("📹 videoRef.current:", !!a.current),
          console.log("🖼️ canvasRef.current:", !!i.current),
          console.log("▶️ isScanning:", h),
          !a.current || !i.current || !h)
        ) {
          console.log("❌ Early return: missing refs or not scanning");
          return;
        }
        const X = Date.now();
        if (X - _ < 1e3) {
          console.log("⏱️ Throttled: too soon since last scan");
          return;
        }
        k(X);
        const ae = a.current,
          S = i.current,
          v = S.getContext("2d");
        if (
          (console.log("🎥 video.readyState:", ae.readyState),
          console.log("🎥 HAVE_ENOUGH_DATA:", ae.HAVE_ENOUGH_DATA),
          !v || ae.readyState !== ae.HAVE_ENOUGH_DATA)
        ) {
          console.log("❌ Video not ready or no context");
          return;
        }
        (S.width = ae.videoWidth),
          (S.height = ae.videoHeight),
          v.drawImage(ae, 0, 0, S.width, S.height),
          S.toBlob(
            async (G) => {
              if (!G) return;
              const y = new File([G], "scan.jpg", { type: "image/jpeg" }),
                T = performance.now();
              try {
                console.log("📸 [相機掃描] 截取圖片並掃描...");
                const N = performance.now(),
                  V = await De.scanBarcode(y),
                  ie = performance.now();
                if (
                  (console.log(
                    `⏱️ [相機掃描] 掃描條碼API用時: ${(ie - N).toFixed(2)}ms`
                  ),
                  !V.results || V.results.length === 0)
                ) {
                  console.log("⚠️ 未辨識到條碼");
                  return;
                }
                const q = V.results[0];
                if (!q.code) {
                  console.log("⚠️ 辨識到條碼但無法讀取內容");
                  return;
                }
                console.log("✅ 成功辨識條碼:", q.code),
                  console.log("📋 條碼類型:", q.type),
                  console.log("📊 信心度:", q.conf),
                  E(),
                  t();
                try {
                  const re = performance.now(),
                    xe = await De.searchByBarCode(q.code),
                    ce = performance.now();
                  if (
                    (console.log(
                      `⏱️ [相機掃描] 搜尋藥品資料API用時: ${(ce - re).toFixed(
                        2
                      )}ms`
                    ),
                    console.log("🔍 條碼搜尋結果:", xe),
                    xe.Code === 200)
                  )
                    if (
                      (console.log("✅ 找到藥品資料:", xe.Data),
                      console.log("🎯 準備調用 onScanSuccess, mode:", s),
                      o("找到藥品資料", "success"),
                      n)
                    ) {
                      console.log("✅ onScanSuccess 存在，開始調用");
                      const B = performance.now();
                      n(q.code, xe.Data);
                      const se = performance.now();
                      console.log(
                        `⏱️ [相機掃描] 定位藥品用時: ${(se - B).toFixed(2)}ms`
                      );
                      const H = performance.now();
                      console.log(
                        `⏱️ [相機掃描] 總用時: ${(H - T).toFixed(2)}ms`
                      ),
                        console.log("✅ onScanSuccess 調用完成");
                    } else console.warn("⚠️ onScanSuccess 不存在");
                  else
                    xe.Code === -200 && xe.Result === "查無資料"
                      ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                        o("查無條碼資料，請建立條碼", "warning"),
                        l(q.code))
                      : (console.log("❌ 搜尋失敗:", xe.Result),
                        o(xe.Result || "搜尋失敗", "error"));
                } catch (re) {
                  console.error("條碼搜尋錯誤:", re),
                    o("搜尋失敗，請稍後再試", "error");
                }
              } catch (N) {
                console.error("掃描錯誤:", N);
              }
            },
            "image/jpeg",
            1
          );
      },
      F = () => {
        g.current && clearInterval(g.current),
          (g.current = setInterval(() => {
            I();
          }, 1e3));
      };
    p.useEffect(
      () => (
        e ? R() : E(),
        () => {
          E();
        }
      ),
      [e]
    ),
      p.useEffect(() => {
        h && !g.current
          ? (console.log("🚀 isScanning became true, starting interval"), F())
          : !h &&
            g.current &&
            (console.log("🛑 isScanning became false, stopping interval"),
            g.current && (clearInterval(g.current), (g.current = null)));
      }, [h]);
    const oe = () => {
        E(), t();
      },
      A = async (X) => {
        if (!c.current || !m.current) return;
        const ae = m.current.getBoundingClientRect(),
          S = (X.clientX - ae.left) / ae.width,
          v = (X.clientY - ae.top) / ae.height;
        console.log("🎯 點擊聚焦位置:", { x: S, y: v }),
          d({ x: X.clientX - ae.left, y: X.clientY - ae.top }),
          setTimeout(() => d(null), 1e3);
        try {
          const G = c.current.getVideoTracks()[0],
            y = G.getCapabilities();
          if (
            (console.log("📹 相機能力:", y),
            !y.focusMode || !y.focusMode.includes("manual"))
          ) {
            console.log("⚠️ 此相機不支援手動聚焦");
            return;
          }
          const T = {
            advanced: [
              {
                focusMode: "manual",
                focusDistance: 0,
                pointsOfInterest: [{ x: S, y: v }],
              },
            ],
          };
          await G.applyConstraints(T), console.log("✅ 聚焦成功");
        } catch (G) {
          console.log("⚠️ 聚焦失敗 (可能不支援):", G);
        }
      };
    return e
      ? x
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
                      r.jsx(Pr, { className: "w-6 h-6 text-white" }),
                      r.jsx("h2", {
                        className: "text-lg font-semibold text-white",
                        children: "條碼掃描",
                      }),
                    ],
                  }),
                  r.jsx("button", {
                    onClick: oe,
                    className:
                      "p-2 hover:bg-gray-700 rounded-lg transition-colors",
                    children: r.jsx(Ge, { className: "w-6 h-6 text-white" }),
                  }),
                ],
              }),
              r.jsxs("div", {
                className: "flex-1 relative",
                children: [
                  r.jsxs("div", {
                    ref: m,
                    className: "absolute inset-0 bg-black cursor-crosshair",
                    onClick: A,
                    children: [
                      r.jsx("video", {
                        ref: a,
                        className: "w-full h-full object-cover",
                        playsInline: !0,
                        muted: !0,
                      }),
                      f &&
                        r.jsxs("div", {
                          className: "absolute pointer-events-none",
                          style: {
                            left: f.x,
                            top: f.y,
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
                          children: r.jsx(Pr, {
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
                      onClick: oe,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ge, {
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
                          ref: m,
                          className:
                            "relative bg-black rounded-xl overflow-hidden cursor-crosshair",
                          style: { aspectRatio: "16/9" },
                          onClick: A,
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
  };
class bh {
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
          const g = performance.now();
          console.log(
            `⏱️ 亮燈API用時 (${i.serverName}/${i.medicineCode}): ${(
              g - c
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
const ss = new bh(),
  Nh = ({ children: e }) => {
    const t = p.useRef(null),
      {
        selectedDepartmentType: n,
        apiDepartmentData: s,
        showNotification: o,
        openAddBarcodeModal: l,
        openContainerDetailModal: a,
        highlightedMedicineCode: i,
        setHighlightedMedicineCode: c,
      } = Ye(),
      { t: g } = xt(),
      [m, h] = p.useState({ x: 0, y: 0, scale: 1 }),
      [u, j] = p.useState(!1),
      [b, _] = p.useState(!1),
      [k, f] = p.useState({ x: 0, y: 0 }),
      [d, x] = p.useState(!1),
      [D, R] = p.useState(!1),
      [E, I] = p.useState(""),
      [F, oe] = p.useState([]),
      [A, X] = p.useState(null),
      ae = {
        blue: "255,0,0",
        green: "0,255,0",
        red: "0,0,255",
        yellow: "0,255,255",
        purple: "255,0,255",
        cyan: "255,255,0",
      },
      S = () => {
        try {
          const C = localStorage.getItem("med_map_anchor");
          return C ? JSON.parse(C) : [];
        } catch (C) {
          return (
            console.error("Error reading canvas states from localStorage:", C),
            []
          );
        }
      },
      v = (C, $, Y, te) => {
        try {
          const de = S(),
            he = de.findIndex(
              (Ee) => Ee.department === C && Ee.canvasType === $
            ),
            ve = { department: C, canvasType: $, scale: Y, position: te };
          he >= 0 ? (de[he] = ve) : de.push(ve),
            localStorage.setItem("med_map_anchor", JSON.stringify(de));
        } catch (de) {
          console.error("Error saving canvas state to localStorage:", de);
        }
      },
      G = (C, $) =>
        S().find((te) => te.department === C && te.canvasType === $) || null;
    p.useEffect(() => {
      if (n) {
        const C = G(n, "InfiniteCanvas");
        if (C) h({ x: C.position.x, y: C.position.y, scale: C.scale });
        else {
          const $ = { x: 0, y: 0, scale: 1 };
          h($), v(n, "InfiniteCanvas", $.scale, $);
        }
      }
    }, [n]),
      p.useEffect(() => {
        if (!n) return;
        const C = setTimeout(() => {
          v(n, "InfiniteCanvas", m.scale, { x: m.x, y: m.y });
        }, 500);
        return () => clearTimeout(C);
      }, [m, n]),
      p.useEffect(() => {
        const C = (Y) => {
            Y.code === "Space" && !Y.repeat && (Y.preventDefault(), x(!0));
          },
          $ = (Y) => {
            Y.code === "Space" && (Y.preventDefault(), x(!1), j(!1));
          };
        return (
          window.addEventListener("keydown", C),
          window.addEventListener("keyup", $),
          () => {
            window.removeEventListener("keydown", C),
              window.removeEventListener("keyup", $);
          }
        );
      }, []);
    const y = p.useCallback(
        (C) => {
          var Y;
          if (b) return;
          if (
            (C.ctrlKey && !navigator.userAgent.includes("Mac")) ||
            (C.metaKey && navigator.userAgent.includes("Mac"))
          ) {
            C.preventDefault(), C.stopPropagation();
            const te =
              (Y = t.current) == null ? void 0 : Y.getBoundingClientRect();
            if (!te) return;
            const de = C.clientX - te.left,
              he = C.clientY - te.top,
              ve = C.deltaY > 0 ? 0.9 : 1.1,
              Ee = Math.max(0.1, Math.min(5, m.scale * ve)),
              ge = Ee / m.scale,
              we = de - (de - m.x) * ge,
              Ce = he - (he - m.y) * ge;
            h({ x: we, y: Ce, scale: Ee });
          }
        },
        [m, b]
      ),
      T = p.useCallback(
        (C) => {
          b ||
            !d ||
            (j(!0), f({ x: C.clientX, y: C.clientY }), C.preventDefault());
        },
        [b, d]
      ),
      N = p.useCallback(
        (C) => {
          if (!u || b) return;
          const $ = C.clientX - k.x,
            Y = C.clientY - k.y;
          h((te) => ({ ...te, x: te.x + $, y: te.y + Y })),
            f({ x: C.clientX, y: C.clientY });
        },
        [u, k, b]
      ),
      V = p.useCallback(() => {
        j(!1);
      }, []),
      ie = p.useCallback(
        (C) => {
          if (!s) return [];
          const $ = [],
            Y = (te) => {
              for (const de of te)
                de.med_list &&
                  Array.isArray(de.med_list) &&
                  de.med_list.some((ve) => ve.code == C) &&
                  (console.log("✅ 找到藥品所在櫃體:", de.name, de.GUID),
                  $.push(de)),
                  de.components &&
                    Array.isArray(de.components) &&
                    Y(de.components),
                  de.contents && Array.isArray(de.contents) && Y(de.contents);
            };
          return Y(s), $;
        },
        [s]
      ),
      q = p.useCallback(() => {
        try {
          const $ = localStorage.getItem("medMap_setting");
          if ($) {
            const te = JSON.parse($).light_sec;
            if (te != null && te !== "") {
              const de = Number(te);
              if (!isNaN(de) && de > 0) return de * 1e3;
            }
          }
        } catch ($) {
          console.error("讀取亮燈設定失敗:", $);
        }
        return 6e4;
      }, []),
      re = p.useCallback(() => {
        const C = { rgb_color: "255,0,0", brightness: "100" };
        try {
          const $ = localStorage.getItem("medMap_setting");
          if ($) {
            const Y = JSON.parse($),
              te = Y.light_color || "red";
            return {
              rgb_color: ae[te] || ae.red,
              brightness: String(Y.brightness !== void 0 ? Y.brightness : 100),
            };
          }
        } catch ($) {
          console.error("讀取亮燈設定失敗:", $);
        }
        return C;
      }, []),
      xe = p.useCallback(
        async (C) => {
          if (!C.trim()) return;
          console.log("🔍 搜尋藥碼:", C);
          const $ = ie(C);
          if ($.length > 0) {
            const Y = q(),
              te = re();
            console.log(`🎯 高亮 ${$.length} 個櫃體:`, $),
              console.log(`⏱️ 亮燈時長: ${Y}ms (${Y / 1e3}秒)`),
              console.log("💡 亮燈設定:", te);
            const de = $.map((ve) => ve.GUID);
            oe(de), X(C), c(C);
            const he = $.filter((ve) => ve.serverName && ve.serverType).map(
              (ve) => ({
                serverName: ve.serverName,
                serverType: ve.serverType,
                medicineCode: C,
                deviceType: ve.device_type,
              })
            );
            he.length > 0 &&
              (await ss.startLighting(he, te.rgb_color, te.brightness, Y),
              setTimeout(() => {
                oe([]), X(null), c(null);
              }, Y));
          } else
            console.log("❌ 未找到包含此藥品的櫃體"), oe([]), X(null), c(null);
        },
        [ie, q, re, c]
      ),
      ce = (C, $) => {
        var he, ve;
        console.log("📍 [相機掃描-部門視圖] 藥品定位模式 - 掃描到藥品:", {
          barcode: C,
          medicineData: $,
        });
        const Y =
          ((he = $[0]) == null ? void 0 : he.CODE) ||
          ((ve = $[0]) == null ? void 0 : ve.code);
        R(!1);
        const te = performance.now();
        xe(Y);
        const de = performance.now();
        console.log(
          `⏱️ [相機掃描-部門視圖] 亮燈用時: ${(de - te).toFixed(2)}ms`
        );
      },
      B = async (C) => {
        var $, Y;
        if (C.key === "Enter") {
          if ((C.preventDefault(), !E.trim())) {
            o("請輸入條碼", "warning");
            return;
          }
          const te = performance.now();
          try {
            console.log("🔍 [手動輸入-部門視圖] 搜尋條碼:", E);
            const de = performance.now(),
              he = await De.searchByBarCode(E),
              ve = performance.now();
            if (
              (console.log(
                `⏱️ [手動輸入-部門視圖] API搜尋藥品資料用時: ${(
                  ve - de
                ).toFixed(2)}ms`
              ),
              console.log("📋 條碼搜尋回應:", he),
              he.Code === 200 && he.Data && he.Data.length > 0)
            ) {
              const Ee =
                (($ = he.Data[0]) == null ? void 0 : $.CODE) ||
                ((Y = he.Data[0]) == null ? void 0 : Y.code);
              console.log("✅ 找到藥品資料:", he.Data),
                o("找到藥品，開始亮燈", "success");
              const ge = performance.now();
              xe(Ee);
              const we = performance.now();
              console.log(
                `⏱️ [手動輸入-部門視圖] 亮燈用時: ${(we - ge).toFixed(2)}ms`
              ),
                I("");
              const Ce = performance.now();
              console.log(
                `⏱️ [手動輸入-部門視圖] 總用時: ${(Ce - te).toFixed(2)}ms`
              );
            } else
              he.Code === -200 && he.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  o("查無條碼資料，請建立條碼", "warning"),
                  l(E),
                  I(""))
                : (console.log("❌ 搜尋失敗:", he.Result),
                  o(he.Result || "搜尋失敗", "error"));
          } catch (de) {
            console.error("條碼搜尋錯誤:", de),
              o("搜尋失敗，請稍後再試", "error");
          }
        }
      };
    p.useEffect(
      () => () => {
        ss.cleanup();
      },
      []
    ),
      p.useEffect(() => {
        if (i) {
          console.log("🔔 Context highlightedMedicineCode 變化:", i);
          const C = ie(i);
          if (C.length > 0) {
            const $ = C.map((Y) => Y.GUID);
            oe($), X(i), console.log("✨ UI 高亮已更新:", $);
          }
        } else oe([]), X(null);
      }, [i, ie]);
    const [se, H] = p.useState(null),
      [ye, Se] = p.useState({ x: 0, y: 0 }),
      P = (C) => {
        if (C.length < 2) return null;
        const $ = C[0],
          Y = C[1];
        return Math.sqrt(
          Math.pow(Y.clientX - $.clientX, 2) +
            Math.pow(Y.clientY - $.clientY, 2)
        );
      },
      ue = (C) => {
        if (C.length === 1) return { x: C[0].clientX, y: C[0].clientY };
        const $ = C[0],
          Y = C[1];
        return {
          x: ($.clientX + Y.clientX) / 2,
          y: ($.clientY + Y.clientY) / 2,
        };
      },
      U = p.useCallback(
        (C) => {
          if (!b) {
            if (C.touches.length === 2) {
              const $ = P(C.touches),
                Y = ue(C.touches);
              H($), Se(Y);
            } else if (C.touches.length === 1) {
              const $ = C.touches[0];
              f({ x: $.clientX, y: $.clientY }), j(!0);
            }
          }
        },
        [b]
      ),
      M = p.useCallback(
        (C) => {
          var $;
          if (!b) {
            if ((C.preventDefault(), C.touches.length === 2 && se !== null)) {
              const Y = P(C.touches),
                te = ue(C.touches);
              if (Y && se) {
                const de =
                  ($ = t.current) == null ? void 0 : $.getBoundingClientRect();
                if (!de) return;
                const he = Y / se,
                  ve = Math.max(0.1, Math.min(5, m.scale * he)),
                  Ee = te.x - de.left,
                  ge = te.y - de.top,
                  we = ve / m.scale,
                  Ce = Ee - (Ee - m.x) * we,
                  Te = ge - (ge - m.y) * we;
                h({ x: Ce, y: Te, scale: ve }), H(Y), Se(te);
              }
            } else if (C.touches.length === 1 && u) {
              const Y = C.touches[0],
                te = Y.clientX - k.x,
                de = Y.clientY - k.y;
              h((he) => ({ ...he, x: he.x + te, y: he.y + de })),
                f({ x: Y.clientX, y: Y.clientY });
            }
          }
        },
        [m, se, u, k, b]
      ),
      ne = p.useCallback(() => {
        H(null), j(!1);
      }, []);
    p.useEffect(() => {
      const C = t.current;
      if (C)
        return (
          C.addEventListener("wheel", y, { passive: !1 }),
          () => C.removeEventListener("wheel", y)
        );
    }, [y]),
      p.useCallback(() => {
        h({ x: 0, y: 0, scale: 1 });
      }, []);
    const z = (() => {
      if (!s || s.length === 0) return [];
      const C = s,
        $ = [];
      for (const Y of C)
        if (Y.type === "調劑台" || Y.type === "藥庫")
          for (const te of Y.contents)
            $.push({
              GUID: te.GUID,
              type: te.type,
              name: `${te.name}`,
              position: te.position,
              dimensions: te.dimensions,
              med_list: te.med_list,
              serverName: te.serverName,
              serverType: te.serverType,
              Master_GUID: Y.GUID,
              contents: te.contents || [],
            });
        else Y.componets && Y.componets.length > 0 && $.push(...Y.componets);
      return $;
    })();
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
              r.jsx("input", {
                type: "text",
                value: E,
                onChange: (C) => I(C.target.value),
                onKeyPress: B,
                placeholder: "輸入條碼或掃描...",
                className:
                  "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
              }),
              r.jsx("button", {
                onClick: () => R(!0),
                className: "p-2",
                title: "掃描條碼",
                children: r.jsx(Pr, { className: "w-6 h-6 text-blue-600" }),
              }),
            ],
          }),
        }),
        r.jsx("div", {
          className: "absolute bottom-4 right-4 z-10 flex gap-2",
          children: r.jsx("button", {
            onClick: () => _(!b),
            className: `p-3 rounded-lg shadow-lg transition-colors ${
              b
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`,
            title: g(b ? "canvas.unlockCanvas" : "canvas.lockCanvas"),
            children: b
              ? r.jsx(ci, { className: "w-6 h-6" })
              : r.jsx(Fu, { className: "w-6 h-6" }),
          }),
        }),
        r.jsx("div", {
          ref: t,
          className: `w-full h-full relative ${
            d && !b ? "cursor-grab" : "cursor-default"
          } ${u ? "cursor-grabbing" : ""}`,
          onMouseDown: T,
          onMouseMove: N,
          onMouseUp: V,
          onMouseLeave: V,
          onTouchStart: U,
          onTouchMove: M,
          onTouchEnd: ne,
          children: r.jsxs("div", {
            className: "absolute inset-0 origin-top-left",
            style: {
              transform: `translate(${m.x}px, ${m.y}px) scale(${m.scale})`,
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
                  z.map((C) =>
                    r.jsx(
                      wh,
                      {
                        component: C,
                        scale: m.scale,
                        isLocked: b,
                        isHighlighted: F.includes(C.GUID),
                        onContainerClick: ($) => {
                          console.log("🖱️ 點擊櫃體，傳遞亮燈藥品代碼:", A),
                            a($, A);
                        },
                      },
                      C.GUID
                    )
                  ),
                  e,
                ],
              }),
            ],
          }),
        }),
        r.jsx(qo, {
          isOpen: D,
          onClose: () => R(!1),
          onScanSuccess: ce,
          mode: "med_light_location_mode",
        }),
      ],
    });
  },
  Vs = ({ content: e, isAdminMode: t }) => {
    const {
        openMedBoxModal: n,
        openAddMedBoxModal: s,
        openListDrawModal: o,
        openGridDrawModal: l,
        openAddShelfDrawContainerModal: a,
        openAddSubContainerModal: i,
        openAddStoreItemModal: c,
        setSelectedMedBox: g,
        setModalMode: m,
        setMedBoxModalOpen: h,
        showNotification: u,
        triggerRefresh: j,
        openEditStoreShelfModal: b,
        openEditParentContainerModal: _,
        updateContainerInLocalData: k,
        removeContainerFromLocalData: f,
      } = Ye(),
      { t: d } = xt(),
      [x, D] = p.useState(!1),
      [R, E] = p.useState(""),
      [I, F] = p.useState(!1),
      [oe, A] = p.useState(e.name),
      [X, ae] = p.useState(!1),
      [S, v] = p.useState(!1);
    p.useEffect(() => {
      A(e.name);
    }, [e.name]);
    const G = (B) => {
        B.stopPropagation(), E(e.name || ""), D(!0);
      },
      y = (B) => {
        B.stopPropagation(), D(!1), E("");
      },
      T = (B) => {
        B.stopPropagation(), v(!0);
      },
      N = (B) => {
        B.stopPropagation(), v(!1);
      },
      V = async (B) => {
        B.stopPropagation(), ae(!0);
        try {
          let se;
          if (e.type === "parent_container")
            se = await De.deleteParentContainer(e.GUID);
          else if (e.type === "sub_container")
            se = await De.deleteSubContainer(e.GUID);
          else if (
            e.type === "store_shelves" ||
            e.type === "dispensing_shelves"
          )
            se = await De.deleteShelfContainer(e.GUID);
          else {
            u("不支援的容器類型", "error"), ae(!1), v(!1);
            return;
          }
          se.Code === 200
            ? (u("刪除成功", "success"), f(e.GUID), v(!1))
            : u(se.Result || "刪除失敗", "error");
        } catch (se) {
          console.error("刪除容器失敗:", se),
            u("刪除失敗，請稍後再試", "error");
        } finally {
          ae(!1), v(!1);
        }
      },
      ie = async (B) => {
        if ((B.stopPropagation(), !R.trim())) {
          u("名稱不能為空", "error");
          return;
        }
        if (R === e.name) {
          D(!1);
          return;
        }
        F(!0);
        try {
          const se = [
            {
              GUID: e.GUID,
              name: R.trim(),
              Master_GUID: e.Master_GUID,
              position: e.gird_position,
              serverName: e.serverName,
              serverType: e.serverType,
            },
          ];
          let H;
          if (e.type === "store_shelves" || e.type === "dispensing_shelves")
            H = await De.updateMedMapShelf(se);
          else if (e.type === "sub_container")
            H = await De.updateSubSection(se);
          else if (e.type === "parent_container")
            H = await De.updateMedMapSection(se);
          else {
            u("不支援的容器類型", "error"), F(!1);
            return;
          }
          H.Code === 200
            ? (u("名稱更新成功", "success"),
              D(!1),
              A(R.trim()),
              k(e.GUID, { name: R.trim() }))
            : u(H.Result || "更新失敗", "error");
        } catch (se) {
          console.error("更新名稱失敗:", se),
            u("更新失敗，請稍後再試", "error");
        } finally {
          F(!1);
        }
      },
      q = (B) => {
        switch (B) {
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
      re = (B) => {
        switch (B) {
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
      xe = (B) => {
        switch (B) {
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
      ce = (B) => {
        switch (B) {
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
            return B;
        }
      };
    switch (e.type) {
      case "sub_container":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${q(
            e.type || 0
          )} ${re(e.type || 0)}`,
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
                          value: R,
                          onChange: (B) => E(B.target.value),
                          onClick: (B) => B.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: ie,
                          disabled: I,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(Hs, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: y,
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Ge, {
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
                          children: oe,
                        }),
                        r.jsx("button", {
                          onClick: G,
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(xr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !x &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${xe(
                      e.type
                    )}`,
                    children: ce(e.type),
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
                      onClick: T,
                      title: "刪除容器",
                      children: r.jsx(yr, {
                        className: "w-5 h-5 text-red-600",
                      }),
                    }),
                  r.jsx("button", {
                    className:
                      "p-1 hover:bg-black/10 rounded transition-colors",
                    onClick: (B) => {
                      B.stopPropagation(), a(e);
                    },
                    title: d("modal.add"),
                    children: r.jsx(bt, {
                      className: "w-6 h-6 text-green-700",
                    }),
                  }),
                ],
              }),
            S &&
              r.jsx("div", {
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4",
                  onClick: (B) => B.stopPropagation(),
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
                          onClick: N,
                          disabled: X,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: V,
                          disabled: X,
                          className:
                            "px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: X ? "刪除中..." : "確認刪除",
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${q(
            e.type || 0
          )} ${re(
            e.type || 0
          )} cursor-pointer hover:bg-black/5 transition-colors`,
          onClick: (B) => {
            x || _(e);
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
                          value: R,
                          onChange: (B) => E(B.target.value),
                          onClick: (B) => B.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (B) => {
                            B.stopPropagation(), ie(B);
                          },
                          disabled: I,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(Hs, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: (B) => {
                            B.stopPropagation(), y(B);
                          },
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Ge, {
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
                          children: oe,
                        }),
                        r.jsx("button", {
                          onClick: (B) => {
                            B.stopPropagation(), G(B);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(xr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" && !x
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${xe(
                        e.type
                      )}`,
                      children: ce(e.type),
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
                      onClick: T,
                      title: "刪除容器",
                      children: r.jsx(yr, {
                        className: "w-5 h-5 text-red-600",
                      }),
                    }),
                  r.jsx("button", {
                    className:
                      "p-1 hover:bg-black/10 rounded transition-colors",
                    onClick: (B) => {
                      B.stopPropagation(), i(e);
                    },
                    title: d("modal.add"),
                    children: r.jsx(bt, {
                      className: "w-6 h-6 text-green-700",
                    }),
                  }),
                ],
              }),
            S &&
              r.jsx("div", {
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4",
                  onClick: (B) => B.stopPropagation(),
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
                          onClick: N,
                          disabled: X,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: V,
                          disabled: X,
                          className:
                            "px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: X ? "刪除中..." : "確認刪除",
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${q(
            e.type || 0
          )} ${re(e.type || 0)}`,
          children: [
            r.jsx("div", {
              className: "flex items-center mr-4",
              children:
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${xe(
                        e.type
                      )}`,
                      children: ce(e.type),
                    })
                  : null,
            }),
            r.jsx("div", {
              className: "flex items-center space-x-1",
              children: r.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                onClick: (B) => {
                  B.stopPropagation(), n(e);
                },
                title: d("modal.settings"),
                children: r.jsx(jn, { className: "w-6 h-6 text-gray-600" }),
              }),
            }),
          ],
        });
      case "dispensing_shelves":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${q(
            e.type || 0
          )} ${re(e.type || 0)}`,
          onClick: (B) => {
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
                          value: R,
                          onChange: (B) => E(B.target.value),
                          onClick: (B) => B.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: ie,
                          disabled: I,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(Hs, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: y,
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Ge, {
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
                          children: oe,
                        }),
                        r.jsx("button", {
                          onClick: (B) => {
                            B.stopPropagation(), G(B);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(xr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !x &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${xe(
                      e.type
                    )}`,
                    children: ce(e.type),
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
                    onClick: T,
                    title: "刪除容器",
                    children: r.jsx(yr, { className: "w-5 h-5 text-red-600" }),
                  }),
                r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (B) => {
                    B.stopPropagation();
                    const se = {
                      GUID: `new_medbox_${Date.now()}`,
                      name: "",
                      box_type: "",
                      width: [],
                      width_index: 0,
                      med_info: [],
                      parentShelf: e,
                    };
                    g(se), m("add"), h(!0);
                  },
                  title: d("modal.add"),
                  children: r.jsx(bt, { className: "w-6 h-6 text-green-700" }),
                }),
              ],
            }),
            S &&
              r.jsx("div", {
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4",
                  onClick: (B) => B.stopPropagation(),
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
                          onClick: N,
                          disabled: X,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: V,
                          disabled: X,
                          className:
                            "px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: X ? "刪除中..." : "確認刪除",
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${q(
            e.type || 0
          )} ${re(
            e.type || 0
          )} cursor-pointer hover:bg-black/5 transition-colors`,
          onClick: (B) => {
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
                          value: R,
                          onChange: (B) => E(B.target.value),
                          onClick: (B) => B.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (B) => {
                            B.stopPropagation(), ie(B);
                          },
                          disabled: I,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(Hs, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: (B) => {
                            B.stopPropagation(), y(B);
                          },
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Ge, {
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
                          children: oe,
                        }),
                        r.jsx("button", {
                          onClick: (B) => {
                            B.stopPropagation(), G(B);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(xr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !x &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${xe(
                      e.type
                    )}`,
                    children: ce(e.type),
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
                    onClick: T,
                    title: "刪除容器",
                    children: r.jsx(yr, { className: "w-5 h-5 text-red-600" }),
                  }),
                r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (B) => {
                    B.stopPropagation(), c(e);
                  },
                  title: d("modal.add"),
                  children: r.jsx(bt, { className: "w-6 h-6 text-green-700" }),
                }),
              ],
            }),
            S &&
              r.jsx("div", {
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4",
                  onClick: (B) => B.stopPropagation(),
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
                          onClick: N,
                          disabled: X,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: V,
                          disabled: X,
                          className:
                            "px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: X ? "刪除中..." : "確認刪除",
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${q(
            e.type || 0
          )} ${re(e.type || 0)}`,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${xe(
                        e.type
                      )}`,
                      children: ce(e.type),
                    })
                  : null,
              ],
            }),
            r.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (B) => {
                B.stopPropagation(), o(e);
              },
              title: d("modal.settings"),
              children: r.jsx(jn, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      case "grid_draw":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${q(
            e.type || 0
          )} ${re(e.type || 0)}`,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${xe(
                        e.type
                      )}`,
                      children: ce(e.type),
                    })
                  : null,
              ],
            }),
            r.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (B) => {
                B.stopPropagation(), l(e);
              },
              title: d("modal.settings"),
              children: r.jsx(jn, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      default:
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${q(
            e.type || 0
          )} ${re(e.type || 0)}`,
          children: [
            r.jsx("div", {
              className: "flex items-center space-x-2 mr-6",
              children:
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${xe(
                        e.type
                      )}`,
                      children: ce(e.type),
                    })
                  : null,
            }),
            e.type !== "none" &&
              r.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                title: d("modal.settings"),
                children: r.jsx(jn, { className: "w-6 h-6 text-gray-600" }),
              }),
          ],
        });
    }
  },
  Hu = p.forwardRef(({ children: e }, t) => {
    const n = p.useRef(null),
      {
        selectedDepartmentType: s,
        apiDepartmentData: o,
        setSidebarOpen: l,
        openAddParentContainerModal: a,
        openEditStoreItemModal: i,
        openQRCodeScannerModal: c,
        openAddBarcodeModal: g,
        showNotification: m,
        isAdminMode: h,
      } = Ye(),
      [u, j] = p.useState({ x: 0, y: 0, scale: 1 }),
      [b, _] = p.useState(!1),
      [k, f] = p.useState(!1),
      [d, x] = p.useState({ x: 0, y: 0 }),
      [D, R] = p.useState(!1),
      [E, I] = p.useState(""),
      [F, oe] = p.useState(!1),
      [A, X] = p.useState(null),
      [ae, S] = p.useState(!1),
      [v, G] = p.useState({
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
      [y, T] = p.useState(null),
      N = p.useRef({}),
      V = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0,
      ie = 8,
      q = () => {
        try {
          const w = localStorage.getItem("med_map_anchor");
          return w ? JSON.parse(w) : [];
        } catch (w) {
          return (
            console.error("Error reading canvas states from localStorage:", w),
            []
          );
        }
      },
      re = (w, K, Q, L) => {
        try {
          const W = q(),
            O = W.findIndex((ee) => ee.department === w && ee.canvasType === K),
            J = { department: w, canvasType: K, scale: Q, position: L };
          O >= 0 ? (W[O] = J) : W.push(J),
            localStorage.setItem("med_map_anchor", JSON.stringify(W));
        } catch (W) {
          console.error("Error saving canvas state to localStorage:", W);
        }
      },
      xe = (w, K) =>
        q().find((L) => L.department === w && L.canvasType === K) || null;
    p.useEffect(() => {
      if (s) {
        const w = xe(s, "drugCanvas");
        if (w) j({ x: w.position.x, y: w.position.y, scale: w.scale });
        else {
          const K = { x: 0, y: 0, scale: 1 };
          j(K), re(s, "drugCanvas", K.scale, K);
        }
      }
    }, [s]),
      p.useEffect(() => {
        if (!s) return;
        const w = setTimeout(() => {
          re(s, "drugCanvas", u.scale, { x: u.x, y: u.y });
        }, 500);
        return () => clearTimeout(w);
      }, [u, s]);
    const ce = (w) =>
        [
          "parent_container",
          "sub_container",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
          "med_box",
        ].includes(w),
      B = (w) =>
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
        }[w] || []),
      se = (w) => {
        const [K, Q] = w.split(",").map(Number);
        return { row: K || 0, col: Q || 0 };
      },
      H = (w, K) => {
        const Q = (W, O = null) => {
            if (W.GUID === w) return { container: W, parent: O };
            if (W.contents)
              for (const J of W.contents) {
                const ee = Q(J, W);
                if (ee) return ee;
              }
            return null;
          },
          L = Te();
        for (const W of L) {
          const O = Q(W);
          if (O) return O;
        }
        return null;
      },
      ye = (w, K) => {
        if (!w.contents) return [];
        const Q = K;
        if (!Q) return w.contents;
        const L = se(Q.gird_position);
        console.log("📤 移除容器位置:", L);
        for (const W of w.contents) {
          const O = se(W.gird_position);
          if (O.row === L.row && O.col > L.col) {
            const J = O.col - 1;
            (W.gird_position = `${O.row},${J}`),
              console.log(
                `  ← 容器 ${W.GUID}: (${O.row},${O.col}) → (${O.row},${J})`
              ),
              (N.current[W.GUID] = {
                GUID: W.GUID,
                Master_GUID: w.GUID,
                position: `${O.row},${J}`,
                serverName: w.serverName,
                serverType: w.serverType,
                type: W.type,
                containerData: W,
              });
          }
        }
        return console.log("✓ 重新計算完成"), w.contents;
      },
      Se = (w, K, Q, L, W) => {
        if (
          (w.contents || (w.contents = []),
          console.log("📥 插入容器到位置:", `(${Q},${L})`),
          console.log("   插入方向:", W),
          console.log("   目標父容器:", w.GUID),
          console.log("   插入前容器數量:", w.contents.length),
          w.contents.length === 0)
        )
          (Q = 0), (L = 0), console.log("   父容器為空，放置在 (0,0)");
        else {
          const O = w.contents
            .filter((J) => {
              const ee = se(J.gird_position || "0,0");
              return ee.row === Q && ee.col >= L;
            })
            .sort((J, ee) => {
              const pe = se(J.gird_position || "0,0");
              return se(ee.gird_position || "0,0").col - pe.col;
            });
          console.log(`   同 row ${Q} 需要移動的容器數量:`, O.length);
          for (const J of O) {
            const ee = se(J.gird_position || "0,0"),
              pe = ee.col + 1;
            (J.gird_position = `${ee.row},${pe}`),
              console.log(
                `  → 容器 ${J.GUID}: (${ee.row},${ee.col}) → (${ee.row},${pe})`
              ),
              (N.current[J.GUID] = {
                GUID: J.GUID,
                Master_GUID: w.GUID,
                position: `${ee.row},${pe}`,
                serverName: w.serverName,
                serverType: w.serverType,
                type: J.type,
                containerData: J,
              });
          }
        }
        (K.gird_position = `${Q},${L}`),
          (K.Master_GUID = w.GUID),
          console.log(`Inserted container ${K.GUID} at position ${Q},${L}`),
          w.contents.push(K),
          (N.current[K.GUID] = {
            GUID: K.GUID,
            Master_GUID: w.GUID,
            position: `${Q},${L}`,
            serverName: w.serverName,
            serverType: w.serverType,
            type: K.type,
            containerData: K,
          }),
          K.type === "dispensing_shelves" &&
            K.contents &&
            K.contents.forEach((O) => {
              O.type === "med_box" &&
                (N.current[O.GUID] = {
                  GUID: O.GUID,
                  Master_GUID: O.Master_GUID,
                  position: O.gird_position,
                  serverName: w.serverName,
                  serverType: w.serverType,
                  type: O.type,
                  containerData: O,
                });
            });
      },
      P = (w, K, Q) => {
        const L = w.getBoundingClientRect(),
          W = L.left + L.width / 2,
          O = L.top + L.height / 2,
          J = K - W,
          ee = Q - O;
        return Math.abs(J) > Math.abs(ee)
          ? J > 0
            ? "right"
            : "left"
          : ee > 0
          ? "bottom"
          : "top";
      },
      ue = (w, K, Q, L) => {
        if (!k) return;
        if ((L.preventDefault(), L.stopPropagation(), v.floatingElement))
          try {
            v.floatingElement.parentNode &&
              v.floatingElement.parentNode.removeChild(v.floatingElement);
          } catch (me) {
            console.error("清除舊浮動元素失敗:", me);
          }
        const W = V(),
          O =
            "touches" in L
              ? L.touches[0].clientX
              : ("pointerId" in L, L.clientX),
          J =
            "touches" in L
              ? L.touches[0].clientY
              : ("pointerId" in L, L.clientY),
          ee = Q.getBoundingClientRect(),
          pe = { x: O - ee.left, y: J - ee.top },
          Z = Q.cloneNode(!0);
        (Z.style.position = "fixed"),
          (Z.style.left = `${O - pe.x}px`),
          (Z.style.top = `${J - pe.y}px`),
          (Z.style.width = `${ee.width}px`),
          (Z.style.height = `${ee.height}px`),
          (Z.style.zIndex = "9999"),
          (Z.style.opacity = "0.8"),
          (Z.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (Z.style.pointerEvents = "none"),
          document.body.appendChild(Z),
          console.log("開始拖曳 stockItem:", w),
          console.log("來源 shelf:", K),
          G({
            isDragging: !0,
            draggedContainer: null,
            draggedElement: Q,
            floatingElement: Z,
            originalParent: null,
            originalPosition: "",
            originalIndex: -1,
            mouseOffset: pe,
            isMobileDrag: W,
            originalData: null,
            draggedStockItem: w,
            draggedStockShelf: K,
          });
      },
      U = (w, K, Q) => {
        if (!k || !ce(w.type)) return;
        if (w.type === "sub_container" && !h) {
          m("需要開啟後台模式才能移動子容器", "error");
          return;
        }
        if (
          ((N.current = {}),
          Q.preventDefault(),
          Q.stopPropagation(),
          v.floatingElement)
        )
          try {
            v.floatingElement.parentNode &&
              v.floatingElement.parentNode.removeChild(v.floatingElement);
          } catch (_e) {
            console.error("清除舊浮動元素失敗:", _e);
          }
        const L = V(),
          W =
            "touches" in Q
              ? Q.touches[0].clientX
              : ("pointerId" in Q, Q.clientX),
          O =
            "touches" in Q
              ? Q.touches[0].clientY
              : ("pointerId" in Q, Q.clientY),
          J = K.getBoundingClientRect(),
          ee = { x: W - J.left, y: O - J.top },
          pe = H(w.GUID);
        if (!pe) return;
        console.log("拖曳目標", w), console.log("拖曳目標", pe);
        const Z = K.cloneNode(!0);
        (Z.style.position = "fixed"),
          (Z.style.left = `${W - ee.x}px`),
          (Z.style.top = `${O - ee.y}px`),
          (Z.style.width = `${J.width}px`),
          (Z.style.height = `${J.height}px`),
          (Z.style.zIndex = "9999"),
          (Z.style.opacity = "0.8"),
          (Z.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (Z.style.pointerEvents = "none"),
          document.body.appendChild(Z);
        const me = pe.parent.contents.findIndex((_e) => _e.GUID === w.GUID),
          be = JSON.parse(JSON.stringify(pe.parent.contents));
        pe.parent.contents.splice(me, 1), console.log(me);
        const ke = pe.parent,
          je = ye(pe.parent, w);
        (pe.parent.contents = je),
          console.log(pe.parent),
          G({
            isDragging: !0,
            draggedContainer: w,
            draggedElement: K,
            floatingElement: Z,
            originalParent: ke,
            originalPosition: w.gird_position,
            originalIndex: me,
            mouseOffset: ee,
            isMobileDrag: L,
            originalData: be,
          });
      },
      M = (w) => {
        if (!v.isDragging || !v.floatingElement) return;
        const K = "touches" in w ? w.touches[0].clientX : w.clientX,
          Q = "touches" in w ? w.touches[0].clientY : w.clientY;
        if (
          ((v.floatingElement.style.left = `${K - v.mouseOffset.x}px`),
          (v.floatingElement.style.top = `${Q - v.mouseOffset.y}px`),
          v.draggedStockItem)
        ) {
          const O = document.elementFromPoint(K, Q),
            J = O == null ? void 0 : O.closest("[data-stock-guid]");
          if (J) {
            const pe = J.getAttribute("data-stock-guid"),
              Z = (be) => {
                for (const ke of be) {
                  if (ke.type === "store_shelves" && ke.medMapStock) {
                    const je = ke.medMapStock.find((_e) => _e.GUID === pe);
                    if (je) return { stockItem: je, shelf: ke };
                  }
                  if (ke.contents) {
                    const je = Z(ke.contents);
                    if (je) return je;
                  }
                }
                return null;
              },
              me = Z(o);
            if (me && me.stockItem.GUID !== v.draggedStockItem.GUID) {
              const be = J.getBoundingClientRect(),
                ke = be.left + be.width / 2,
                je = K < ke ? "left" : "right";
              T({
                container: me.shelf,
                direction: null,
                element: J,
                stockItem: me.stockItem,
                stockItemDirection: je,
              });
              return;
            }
          }
          const ee = O == null ? void 0 : O.closest("[data-container-guid]");
          if (ee) {
            const pe = ee.getAttribute("data-container-guid"),
              Z = H(pe);
            if (Z && Z.container.type === "store_shelves") {
              T({ container: Z.container, direction: null, element: ee });
              return;
            }
          }
          T(null);
          return;
        }
        const L = document.elementFromPoint(K, Q),
          W = L == null ? void 0 : L.closest("[data-container-guid]");
        if (W) {
          const O = W.getAttribute("data-container-guid"),
            J = H(O);
          if (J) {
            const ee = B(v.draggedContainer.type),
              pe = v.draggedContainer.type,
              Z = J.container.type;
            if (ee.includes(Z)) {
              const me = P(W, K, Q);
              if (pe === "med_box" && !["left", "right"].includes(me)) {
                T(null);
                return;
              }
              T({ container: J.container, direction: me, element: W });
              return;
            }
            if (pe === "parent_container" || pe === "sub_container") {
              let me = W.parentElement;
              for (; me; ) {
                if (me.hasAttribute("data-container-guid")) {
                  const be = me.getAttribute("data-container-guid"),
                    ke = H(be);
                  if (ke && ee.includes(ke.container.type)) {
                    const je = P(me, K, Q);
                    console.log(
                      `🔼 向上找到有效目標: ${ke.container.type} (${ke.container.name})`
                    ),
                      T({
                        container: ke.container,
                        direction: je,
                        element: me,
                      });
                    return;
                  }
                }
                me = me.parentElement;
              }
            }
          }
        }
        T(null);
      },
      ne = async (w) => {
        if (!v.isDragging) return;
        if (v.floatingElement)
          try {
            v.floatingElement.parentNode &&
              v.floatingElement.parentNode.removeChild(v.floatingElement);
          } catch (W) {
            console.error("清除浮動元素失敗:", W);
          }
        if (v.draggedStockItem && v.draggedStockShelf) {
          if (
            (console.log("StockItem 拖曳結束"),
            console.log("Drop Target:", y),
            y)
          ) {
            const W = [];
            if (y.stockItem && y.stockItemDirection) {
              console.log(
                `拖曳到 stockItem ${y.stockItem.GUID} 的 ${y.stockItemDirection} 邊`
              );
              const O = y.container,
                J = v.draggedStockShelf,
                ee = v.draggedStockItem,
                pe = Number(y.stockItem.location),
                Z = Number(ee.location);
              if (O.GUID === J.GUID) {
                console.log("同一層架內移動");
                const be = J.medMapStock.findIndex((_e) => _e.GUID === ee.GUID);
                be !== -1 && J.medMapStock.splice(be, 1),
                  J.medMapStock.forEach((_e) => {
                    const Me = Number(_e.location);
                    Me > Z &&
                      ((_e.location = String(Me - 1)), W.push({ ..._e }));
                  });
                let ke;
                const je = pe > Z ? pe - 1 : pe;
                y.stockItemDirection === "left" ? (ke = je) : (ke = je + 1),
                  J.medMapStock.forEach((_e) => {
                    const Me = Number(_e.location);
                    Me >= ke &&
                      ((_e.location = String(Me + 1)), W.push({ ..._e }));
                  }),
                  (ee.location = String(ke)),
                  J.medMapStock.push(ee),
                  J.medMapStock.sort(
                    (_e, Me) => Number(_e.location) - Number(Me.location)
                  ),
                  W.push({ ...ee });
              } else {
                console.log("不同層架間移動");
                const be = J.medMapStock.findIndex((je) => je.GUID === ee.GUID);
                be !== -1 && J.medMapStock.splice(be, 1),
                  J.medMapStock.forEach((je) => {
                    const _e = Number(je.location);
                    _e > Z &&
                      ((je.location = String(_e - 1)), W.push({ ...je }));
                  });
                let ke;
                y.stockItemDirection === "left" ? (ke = pe) : (ke = pe + 1),
                  O.medMapStock.forEach((je) => {
                    const _e = Number(je.location);
                    _e >= ke &&
                      ((je.location = String(_e + 1)), W.push({ ...je }));
                  }),
                  (ee.location = String(ke)),
                  (ee.shelf_guid = O.GUID),
                  O.medMapStock.push(ee),
                  O.medMapStock.sort(
                    (je, _e) => Number(je.location) - Number(_e.location)
                  ),
                  W.push({ ...ee });
              }
            } else if (y.container.type === "store_shelves") {
              console.log("拖曳到 store_shelves 容器");
              const O = y.container,
                J = v.draggedStockShelf,
                ee = v.draggedStockItem,
                pe = Number(ee.location),
                Z = J.medMapStock.findIndex((me) => me.GUID === ee.GUID);
              Z !== -1 &&
                (J.medMapStock.splice(Z, 1),
                J.medMapStock.forEach((me) => {
                  const be = Number(me.location);
                  be > pe &&
                    ((me.location = String(be - 1)), W.push({ ...me }));
                })),
                (ee.location = "0"),
                (ee.shelf_guid = O.GUID),
                O.medMapStock || (O.medMapStock = []),
                O.medMapStock.forEach((me) => {
                  const be = Number(me.location);
                  (me.location = String(be + 1)), W.push({ ...me });
                }),
                O.medMapStock.push(ee),
                O.medMapStock.sort(
                  (me, be) => Number(me.location) - Number(be.location)
                ),
                W.push({ ...ee });
            }
            if (W.length > 0) {
              console.log("準備更新的 stockItems:", W);
              try {
                const O = await De.updateStock(W);
                O.Code === 200
                  ? m("藥品位置更新成功", "success")
                  : m(O.Result || "更新失敗", "error");
              } catch (O) {
                console.error("更新 stockItem 失敗:", O),
                  m("更新失敗，請稍後再試", "error");
              }
            }
          }
          G({
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
            T(null);
          return;
        }
        let K = null,
          Q = null,
          L = null;
        if (
          (console.log("Drop Target:", y),
          console.log("Is Mobile Drag:", v.isMobileDrag),
          v.isMobileDrag)
        )
          if (y) {
            (K = y.direction), (L = y.container);
            const W = H(v.draggedContainer.GUID);
            let O = null;
            if (W) {
              O = W.parent.GUID;
              const ke = W.parent.contents.findIndex(
                (_e) => _e.GUID === v.draggedContainer.GUID
              );
              W.parent.contents.splice(ke, 1);
              const je = ye(W.parent, v.draggedContainer);
              W.parent.contents = je;
            }
            const J = H(y.container.Master_GUID || y.container.GUID);
            let ee = y.container;
            if (O && J && J.container.GUID === O) {
              const ke = J.container.contents.find(
                (je) => je.GUID === y.container.GUID
              );
              ke &&
                ((ee = ke),
                console.log(
                  "同一父容器內移動，更新後的目標容器位置:",
                  ke.gird_position
                ));
            }
            const pe = se(ee.gird_position || "0,0");
            let Z = pe.row,
              me = pe.col;
            switch (y.direction) {
              case "top":
                Z = Math.max(0, pe.row);
                break;
              case "bottom":
                Z = pe.row + 1;
                break;
              case "left":
                me = Math.max(0, pe.col);
                break;
              case "right":
                me = pe.col + 1;
                break;
            }
            let be = (J == null ? void 0 : J.container) || y.container;
            if (
              (v.draggedContainer.class != y.class && (be = y),
              v.draggedContainer.type === "med_box" &&
                y.container.type !== "med_box")
            )
              if (
                (console.log("藥盒移動目標到層架上"),
                (be = y.container),
                be.contents.length > 0)
              ) {
                let ke = 0,
                  je = 0;
                be.contents.forEach((_e) => {
                  const Me = se(_e.gird_position || "0,0").row,
                    Ze = se(_e.gird_position || "0,0").col;
                  ke > Me && (ke = Me), je > Ze && (je = Ze);
                });
                for (let _e = 0; _e <= je; _e++)
                  for (let Me = 0; Me <= ke; Me++) {
                    const Ze = `${_e},${Me}`;
                    be.contents.filter((Un) => Un.grid_position === Ze)
                      .length === 0 && ((Z = _e), (me = Me));
                  }
              } else (Z = 0), (me = 0);
            (Q = be), Se(be, v.draggedContainer, Z, me, y.direction);
          } else
            console.log("無效拖放，復原所有容器位置"),
              v.originalData &&
                v.originalParent &&
                (v.originalParent.contents = JSON.parse(
                  JSON.stringify(v.originalData)
                )),
              (K = null),
              (L = null),
              (Q = v.originalParent);
        else if (y) {
          (K = y.direction), (L = y.container);
          const W = H(v.draggedContainer.GUID);
          let O = null;
          if (
            (console.log("=== 開始處理容器拖曳 ==="),
            console.log("拖曳容器 GUID:", v.draggedContainer.GUID),
            console.log("拖曳容器原始位置:", v.draggedContainer.gird_position),
            W)
          ) {
            (O = W.parent.GUID),
              console.log("原始父容器 GUID:", O),
              console.log(
                "移除前父容器的 contents 數量:",
                W.parent.contents.length
              );
            const ke = W.parent.contents.findIndex(
              (_e) => _e.GUID === v.draggedContainer.GUID
            );
            W.parent.contents.splice(ke, 1),
              console.log(
                "移除後父容器的 contents 數量:",
                W.parent.contents.length
              );
            const je = ye(W.parent, v.draggedContainer);
            (W.parent.contents = je),
              console.log("重新計算後的容器列表:"),
              W.parent.contents.forEach((_e) => {
                console.log(`  - ${_e.GUID}: ${_e.gird_position}`);
              });
          }
          const J = H(y.container.Master_GUID || y.container.GUID);
          let ee = y.container;
          if (
            (console.log("目標容器原始位置:", y.container.gird_position),
            O && J && J.container.GUID === O)
          ) {
            console.log("✓ 在同一個父容器內移動");
            const ke = J.container.contents.find(
              (je) => je.GUID === y.container.GUID
            );
            ke &&
              ((ee = ke),
              console.log(
                "同一父容器內移動，更新後的目標容器位置:",
                ke.gird_position
              ));
          } else console.log("✗ 跨父容器移動或父容器不同");
          const pe = se(ee.gird_position || "0,0");
          let Z = pe.row,
            me = pe.col;
          switch (y.direction) {
            case "top":
              Z = Math.max(0, pe.row);
              break;
            case "bottom":
              Z = pe.row + 1;
              break;
            case "left":
              me = Math.max(0, pe.col);
              break;
            case "right":
              me = pe.col + 1;
              break;
          }
          console.log("------目標容器", y),
            console.log("------拖曳容器", v.draggedContainer);
          let be = (J == null ? void 0 : J.container) || y.container;
          if (
            (console.log(v.draggedContainer.class),
            console.log(y.container.class),
            console.log(v.draggedContainer.class != y.container.class),
            v.draggedContainer.class != y.container.class &&
              ((be = y.container),
              console.log("------這邊顯示放到上層容器現象"),
              console.log("------目標容器", y),
              console.log("------拖曳容器", v.draggedContainer),
              console.log("------目標父容器", be)),
            v.draggedContainer.type === "med_box" &&
              y.container.type !== "med_box")
          )
            if (
              (console.log("藥盒移動目標到層架上"),
              (be = y.container),
              be.contents.length > 0)
            ) {
              let ke = 0,
                je = 0;
              be.contents.forEach((_e) => {
                const Me = se(_e.gird_position || "0,0").row,
                  Ze = se(_e.gird_position || "0,0").col;
                ke > Me && (ke = Me), je > Ze && (je = Ze);
              });
              for (let _e = 0; _e <= je; _e++)
                for (let Me = 0; Me <= ke; Me++) {
                  const Ze = `${_e},${Me}`;
                  be.contents.filter((Un) => Un.grid_position === Ze).length ===
                    0 && ((Z = _e), (me = Me));
                }
            } else (Z = 0), (me = 0);
          (Q = be), Se(be, v.draggedContainer, Z, me, y.direction);
        } else
          console.log("無效拖放，復原所有容器位置"),
            v.originalData &&
              v.originalParent &&
              (v.originalParent.contents = JSON.parse(
                JSON.stringify(v.originalData)
              )),
            (K = null),
            (L = null),
            (Q = v.originalParent);
        G({
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
          T(null),
          console.log("Drop Direction:", K),
          console.log("Parent Object:", Q),
          console.log("Target Object:", L),
          console.log("API更新資料：", N),
          await jh(N);
      };
    p.useEffect(() => {
      if (v.isDragging)
        if (V()) {
          const K = (W) => {
              W.preventDefault(), M(W);
            },
            Q = (W) => ne(),
            L = (W) => ne();
          return (
            document.addEventListener("pointermove", K, { passive: !1 }),
            document.addEventListener("pointerup", Q),
            document.addEventListener("pointercancel", L),
            () => {
              document.removeEventListener("pointermove", K),
                document.removeEventListener("pointerup", Q),
                document.removeEventListener("pointercancel", L);
            }
          );
        } else {
          const K = (O) => M(O),
            Q = (O) => ne(),
            L = (O) => {
              O.preventDefault(), M(O);
            },
            W = (O) => ne();
          return (
            document.addEventListener("mousemove", K),
            document.addEventListener("mouseup", Q),
            document.addEventListener("touchmove", L, { passive: !1 }),
            document.addEventListener("touchend", W),
            () => {
              document.removeEventListener("mousemove", K),
                document.removeEventListener("mouseup", Q),
                document.removeEventListener("touchmove", L),
                document.removeEventListener("touchend", W);
            }
          );
        }
    }, [v.isDragging, y]),
      p.useEffect(
        () => () => {
          if (v.floatingElement)
            try {
              v.floatingElement.parentNode &&
                v.floatingElement.parentNode.removeChild(v.floatingElement);
            } catch (w) {
              console.error("組件卸載時清除浮動元素失敗:", w);
            }
        },
        [v.floatingElement]
      ),
      p.useEffect(() => {
        const w = (Q) => {
            Q.code === "Space" && !Q.repeat && (Q.preventDefault(), R(!0));
          },
          K = (Q) => {
            Q.code === "Space" && (Q.preventDefault(), R(!1), _(!1));
          };
        return (
          window.addEventListener("keydown", w),
          window.addEventListener("keyup", K),
          () => {
            window.removeEventListener("keydown", w),
              window.removeEventListener("keyup", K);
          }
        );
      }, []);
    const fe = p.useCallback(
        (w) => {
          var Q;
          if (k) return;
          if (w.ctrlKey || w.metaKey) {
            w.preventDefault(), w.stopPropagation();
            const L =
              (Q = n.current) == null ? void 0 : Q.getBoundingClientRect();
            if (!L) return;
            const W = w.clientX - L.left,
              O = w.clientY - L.top,
              J = w.deltaY > 0 ? 0.9 : 1.1,
              ee = Math.max(0.1, Math.min(5, u.scale * J)),
              pe = ee / u.scale,
              Z = W - (W - u.x) * pe,
              me = O - (O - u.y) * pe;
            j({ x: Z, y: me, scale: ee });
          }
        },
        [u, k]
      ),
      z = p.useCallback(
        (w) => {
          k ||
            !D ||
            (_(!0),
            x({ x: w.clientX, y: w.clientY }),
            X({ x: w.clientX, y: w.clientY }),
            S(!1),
            w.preventDefault());
        },
        [k, D]
      ),
      C = p.useCallback(
        (w) => {
          if (!b || k) return;
          const K = w.clientX - d.x,
            Q = w.clientY - d.y;
          if (A) {
            const L = Math.abs(w.clientX - A.x),
              W = Math.abs(w.clientY - A.y);
            (L > 5 || W > 5) && S(!0);
          }
          j((L) => ({ ...L, x: L.x + K, y: L.y + Q })),
            x({ x: w.clientX, y: w.clientY });
        },
        [b, d, k, A]
      ),
      $ = p.useCallback(() => {
        _(!1), X(null);
      }, []),
      [Y, te] = p.useState(null),
      [de, he] = p.useState({ x: 0, y: 0 }),
      ve = (w) => {
        if (w.length < 2) return null;
        const K = w[0],
          Q = w[1];
        return Math.sqrt(
          Math.pow(Q.clientX - K.clientX, 2) +
            Math.pow(Q.clientY - K.clientY, 2)
        );
      },
      Ee = (w) => {
        if (w.length === 1) return { x: w[0].clientX, y: w[0].clientY };
        const K = w[0],
          Q = w[1];
        return {
          x: (K.clientX + Q.clientX) / 2,
          y: (K.clientY + Q.clientY) / 2,
        };
      },
      ge = p.useCallback(
        (w) => {
          if (!k) {
            if (w.touches.length === 2) {
              const K = ve(w.touches),
                Q = Ee(w.touches);
              te(K), he(Q);
            } else if (w.touches.length === 1) {
              const K = w.touches[0];
              x({ x: K.clientX, y: K.clientY }), _(!0);
            }
          }
        },
        [k]
      ),
      we = p.useCallback(
        (w) => {
          var K;
          if (!k) {
            if ((w.preventDefault(), w.touches.length === 2 && Y !== null)) {
              const Q = ve(w.touches),
                L = Ee(w.touches);
              if (Q && Y) {
                const W =
                  (K = n.current) == null ? void 0 : K.getBoundingClientRect();
                if (!W) return;
                const O = Q / Y,
                  J = Math.max(0.1, Math.min(5, u.scale * O)),
                  ee = L.x - W.left,
                  pe = L.y - W.top,
                  Z = J / u.scale,
                  me = ee - (ee - u.x) * Z,
                  be = pe - (pe - u.y) * Z;
                j({ x: me, y: be, scale: J }), te(Q), he(L);
              }
            } else if (w.touches.length === 1 && b) {
              const Q = w.touches[0],
                L = Q.clientX - d.x,
                W = Q.clientY - d.y;
              j((O) => ({ ...O, x: O.x + L, y: O.y + W })),
                x({ x: Q.clientX, y: Q.clientY });
            }
          }
        },
        [u, Y, b, d, k]
      ),
      Ce = p.useCallback(() => {
        te(null), _(!1);
      }, []);
    p.useEffect(() => {
      const w = n.current;
      if (w)
        return (
          w.addEventListener("wheel", fe, { passive: !1 }),
          () => w.removeEventListener("wheel", fe)
        );
    }, [fe]);
    const Te = () => (!o || o.length === 0 ? [] : o),
      Qe = (w) => {
        if (!w || w.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const K = w.map((O) => ({
            ...O,
            gridPos: se(O.gird_position || "0,0"),
          })),
          Q = Math.max(...K.map((O) => O.gridPos.row), 0),
          L = Math.max(...K.map((O) => O.gridPos.col), 0);
        return {
          sortedContents: K.sort((O, J) =>
            O.gridPos.row !== J.gridPos.row
              ? O.gridPos.row - J.gridPos.row
              : O.gridPos.col - J.gridPos.col
          ),
          maxRow: Q,
          maxCol: L,
        };
      },
      Pe = Te(),
      Je = Math.max(...Pe.map((w) => se(w.gird_position || "0,0").row), 0),
      Fe = Math.max(...Pe.map((w) => se(w.gird_position || "0,0").col), 0),
      kt = (w) => {
        const K = (L) => {
            if (
              L.width &&
              Array.isArray(L.width) &&
              typeof L.width_index == "number" &&
              L.width_index >= 0 &&
              L.width_index < L.width.length
            ) {
              const O = parseFloat(L.width[L.width_index]);
              if (!isNaN(O)) {
                const J = O * 20;
                return Math.max(200, J);
              }
            }
            return 200;
          },
          Q = (L) => {
            switch (L) {
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
        switch (w.type) {
          case "med_box":
            return (
              K(w),
              r.jsxs(
                "div",
                {
                  "data-container-guid": w.GUID,
                  className: `${
                    w.type !== "sub_container"
                      ? "border-2 rounded-lg shadow-sm"
                      : ""
                  } ${Q(
                    w.type || 0
                  )} min-h-[80px] flex flex-col flex-shrink-0 h-full overflow-hidden`,
                  children: [
                    r.jsx("div", {
                      onMouseDown:
                        k && ce(w.type) && !V()
                          ? (L) =>
                              U(
                                w,
                                L.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                L
                              )
                          : void 0,
                      onTouchStart:
                        k && ce(w.type) && !V()
                          ? (L) =>
                              U(
                                w,
                                L.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                L
                              )
                          : void 0,
                      onPointerDown:
                        k && ce(w.type) && V()
                          ? (L) =>
                              U(
                                w,
                                L.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                L
                              )
                          : void 0,
                      className: k && ce(w.type) ? "cursor-move" : "",
                      children: r.jsx(Vs, { content: w, isAdminMode: h }),
                    }),
                    r.jsx("div", { className: "flex-1 p-1", children: ft(w) }),
                  ],
                },
                w.GUID
              )
            );
          case "sub_container":
          case "parent_container":
            return r.jsxs(
              "div",
              {
                "data-container-guid": w.GUID,
                className: `${Q(
                  w.type || 0
                )} border-2 overflow-hidden rounded-lg shadow-sm min-h-[80px] flex flex-col h-full`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      k && ce(w.type) && !V()
                        ? (L) =>
                            U(
                              w,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    onTouchStart:
                      k && ce(w.type) && !V()
                        ? (L) =>
                            U(
                              w,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    onPointerDown:
                      k && ce(w.type) && V()
                        ? (L) =>
                            U(
                              w,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    className: k && ce(w.type) ? "cursor-move" : "",
                    children: r.jsx(Vs, { content: w, isAdminMode: h }),
                  }),
                  r.jsx("div", { className: "flex-1  p-1", children: ft(w) }),
                ],
              },
              w.GUID
            );
          case "grid_draw":
            return r.jsxs(
              "div",
              {
                "data-container-guid": w.GUID,
                className: `${
                  w.type !== "sub_container"
                    ? "border-2 rounded-lg shadow-sm"
                    : ""
                } ${Q(
                  w.type || 0
                )} min-h-[80px] flex flex-col h-full overflow-hidden`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      k && ce(w.type) && !V()
                        ? (L) =>
                            U(
                              w,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    onTouchStart:
                      k && ce(w.type) && !V()
                        ? (L) =>
                            U(
                              w,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    onPointerDown:
                      k && ce(w.type) && V()
                        ? (L) =>
                            U(
                              w,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    className: k && ce(w.type) ? "cursor-move" : "",
                    children: r.jsx(Vs, { content: w, isAdminMode: h }),
                  }),
                  r.jsx("div", {
                    className: "flex-1 p-1 flex items-center",
                    children: ft(w),
                  }),
                ],
              },
              w.GUID
            );
          default:
            return r.jsxs(
              "div",
              {
                "data-container-guid": w.GUID,
                className: `${
                  w.type !== "sub_container"
                    ? "border-2 rounded-lg shadow-sm"
                    : ""
                } ${Q(
                  w.type || 0
                )} min-h-[80px] flex flex-col h-full overflow-hidden ${
                  w.type == "none" ? "opacity-0" : ""
                }`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      k && ce(w.type) && !V()
                        ? (L) =>
                            U(
                              w,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    onTouchStart:
                      k && ce(w.type) && !V()
                        ? (L) =>
                            U(
                              w,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    onPointerDown:
                      k && ce(w.type) && V()
                        ? (L) =>
                            U(
                              w,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    className: k && ce(w.type) ? "cursor-move" : "",
                    children: r.jsx(Vs, { content: w, isAdminMode: h }),
                  }),
                  r.jsx("div", { className: "flex-1 p-1", children: ft(w) }),
                ],
              },
              w.GUID
            );
        }
      },
      ft = (w) => {
        const K = (Q, L, W) => {
          const O = Array(L + 1)
              .fill(null)
              .map(() => Array(W + 1).fill(!1)),
            J = {};
          return (
            Q.forEach((ee) => {
              const pe = se(ee.gird_position || "0,0");
              (J[`${pe.row},${pe.col}`] = ee), (O[pe.row][pe.col] = !0);
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: L + 1 }, (ee, pe) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      style: { height: `${100 / (L + 1)}%`, minHeight: "80px" },
                      children: Array.from({ length: W + 1 }, (Z, me) => {
                        const be = `${pe},${me}`,
                          ke = J[be];
                        return ke
                          ? r.jsxs(
                              "td",
                              {
                                className: "align-top bg-transparent",
                                style: {
                                  width: `${100 / (W + 1)}%`,
                                  height: `${100 / (L + 1)}%`,
                                  minHeight: "80px",
                                  border: "none",
                                  position: "relative",
                                },
                                children: [
                                  kt(ke),
                                  (y == null ? void 0 : y.container.GUID) ===
                                    ke.GUID &&
                                    r.jsx("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none",
                                      children: r.jsx("div", {
                                        className: `absolute bg-blue-400 opacity-50 ${
                                          y.direction === "top"
                                            ? "top-0 left-0 right-0 h-1"
                                            : y.direction === "bottom"
                                            ? "bottom-0 left-0 right-0 h-1"
                                            : y.direction === "left"
                                            ? "left-0 top-0 bottom-0 w-1"
                                            : "right-0 top-0 bottom-0 w-1"
                                        }`,
                                      }),
                                    }),
                                ],
                              },
                              me
                            )
                          : r.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (W + 1)}%`,
                                  height: `${100 / (L + 1)}%`,
                                  minHeight: "80px",
                                  border: "none",
                                },
                                children: r.jsx("div", {
                                  className:
                                    "w-full h-full flex items-center justify-center text-gray-400 text-sm",
                                  children: "空位",
                                }),
                              },
                              me
                            );
                      }),
                    },
                    pe
                  )
                ),
              }),
            })
          );
        };
        switch (w.type) {
          case "parent_container":
          case "sub_container":
            if (w.contents && w.contents.length > 0) {
              const {
                sortedContents: Z,
                maxRow: me,
                maxCol: be,
              } = Qe(w.contents);
              return K(Z, me, be);
            } else
              return r.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "1px" },
                children: r.jsx("tbody", { children: r.jsx("tr", {}) }),
              });
          case "dispensing_shelves":
            if (w.contents && w.contents.length > 0) {
              const {
                sortedContents: Z,
                maxRow: me,
                maxCol: be,
              } = Qe(w.contents);
              return K(Z, me, be);
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
            if (w.medMapStock && w.medMapStock.length > 0) {
              const Z = w.medMapStock,
                me = Z.length,
                be = me > 0 ? 100 / me : 100,
                ke = w.width ? w.width * 5 : 500;
              return r.jsx("div", {
                className: "flex h-full",
                style: { minWidth: `${ke}px` },
                children: Z.map(
                  (je, _e) => (
                    Number(je.location),
                    r.jsx(
                      "div",
                      {
                        className: "m-1 flex-shrink-0 relative",
                        style: { width: `calc(${be}% - 8px)` },
                        "data-stock-guid": je.GUID,
                        children: r.jsxs("div", {
                          className: `border-2 bg-yellow-50 border-yellow-400 rounded-lg p-2 h-full flex flex-col justify-center items-center cursor-pointer bg-white hover:bg-yellow-100 hover:border-yellow-500 hover:shadow-md transition-all ${
                            k ? "cursor-move" : ""
                          }`,
                          onMouseDown: (Me) => {
                            k
                              ? ue(
                                  je,
                                  w,
                                  Me.currentTarget.closest("[data-stock-guid]"),
                                  Me
                                )
                              : !b &&
                                !D &&
                                (X({ x: Me.clientX, y: Me.clientY }), S(!1));
                          },
                          onMouseUp: (Me) => {
                            if (!b && !D && !ae && A && !k) {
                              const Ze = Math.abs(Me.clientX - A.x),
                                Ln = Math.abs(Me.clientY - A.y);
                              Ze <= 5 &&
                                Ln <= 5 &&
                                (Me.stopPropagation(), i(w, je));
                            }
                            k || (X(null), S(!1));
                          },
                          onTouchStart: (Me) => {
                            if (k && V())
                              ue(
                                je,
                                w,
                                Me.currentTarget.closest("[data-stock-guid]"),
                                Me
                              );
                            else if (!b && !k) {
                              const Ze = Me.touches[0];
                              X({ x: Ze.clientX, y: Ze.clientY }), S(!1);
                            }
                          },
                          onTouchEnd: (Me) => {
                            if (!b && !ae && A && !k) {
                              const Ze = Me.changedTouches[0],
                                Ln = Math.abs(Ze.clientX - A.x),
                                Un = Math.abs(Ze.clientY - A.y);
                              Ln <= 5 &&
                                Un <= 5 &&
                                (Me.stopPropagation(), i(w, je));
                            }
                            k || (X(null), S(!1));
                          },
                          onPointerDown: (Me) => {
                            k &&
                              V() &&
                              ue(
                                je,
                                w,
                                Me.currentTarget.closest("[data-stock-guid]"),
                                Me
                              );
                          },
                          children: [
                            r.jsx("div", {
                              className:
                                "text-base font-semibold text-gray-800 flex truncate w-full items-center flex-1",
                              children: r.jsx("div", {
                                className:
                                  "w-full text-center truncate whitespace-normal",
                                children: je.name || je.material_no,
                              }),
                            }),
                            r.jsxs("div", {
                              className:
                                "w-full flex justify-between items-end",
                              children: [
                                r.jsx("div", {
                                  className: "",
                                  children: r.jsxs("div", {
                                    className: "mt-1",
                                    children: ["[ ", +je.qty || 0, " ]"],
                                  }),
                                }),
                                r.jsx("div", {
                                  className: "flex justify-end items-end mt-2",
                                  children: r.jsx("button", {
                                    onMouseDown: (Me) => {
                                      Me.stopPropagation();
                                    },
                                    onMouseUp: (Me) => {
                                      Me.stopPropagation();
                                    },
                                    onTouchStart: (Me) => {
                                      Me.stopPropagation();
                                    },
                                    onTouchEnd: (Me) => {
                                      Me.stopPropagation();
                                    },
                                    onClick: (Me) => Wo(je, w, Me),
                                    className:
                                      "text-red-500 hover:text-red-600 rounded-full p-2 transition-all z-10",
                                    title: "刪除",
                                    children: r.jsx(yr, {
                                      className: "w-6 h-6",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      je.GUID || _e
                    )
                  )
                ),
              });
            } else if (w.contents && w.contents.length > 0) {
              const {
                sortedContents: Z,
                maxRow: me,
                maxCol: be,
              } = Qe(w.contents);
              return K(Z, me, be);
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
            if (w.contents && w.contents.length > 0) {
              const {
                sortedContents: Z,
                maxRow: me,
                maxCol: be,
              } = Qe(w.contents);
              return K(Z, me, be);
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
            const Q = Math.max(
                ...w.Boxes.flat().map((Z) => +Z.Row + +Z.Height - 1)
              ),
              L = Math.max(
                ...w.Boxes.flat().map((Z) => +Z.Column + +Z.Width - 1)
              ),
              W = Q + 1,
              O = L + 1,
              J = w.Boxes.flat(),
              ee = Array(W)
                .fill(null)
                .map(() => Array(O).fill(!1)),
              pe = {};
            return (
              J.forEach((Z) => {
                Z.Slave || (pe[`${Z.Row},${Z.Column}`] = Z);
              }),
              J.forEach((Z) => {
                if (!Z.Slave && (Z.Width > 1 || Z.Height > 1))
                  for (let me = Z.Row; me < Z.Row + Z.Height; me++)
                    for (let be = Z.Column; be < Z.Column + Z.Width; be++)
                      (me !== Z.Row || be !== Z.Column) && (ee[me][be] = !0);
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
            return w.med_info && w.med_info.length > 0
              ? r.jsxs("div", {
                  className:
                    "text-base text-left h-full min-h-[40px] max-w-[200px] min-w-[200px] p-1 flex items-center justify-between flex-col",
                  children: [
                    r.jsx("div", {
                      className: "text-gray-700 font-bold truncate w-full",
                      children: w.med_info[0].name,
                    }),
                    r.jsxs("div", {
                      className:
                        "text-gray-700 w-full flex justify-between px-1",
                      children: [
                        r.jsxs("div", { children: [w.box_type, "吋"] }),
                        r.jsxs("div", {
                          children: [w.width[w.width_index], "cm"],
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
            return w.contents && w.contents.length > 0
              ? r.jsx("div", {
                  className: "space-y-2",
                  children: w.contents.map((Z) => kt(Z)),
                })
              : r.jsx("div", {
                  className:
                    "h-full flex items-center justify-center text-gray-500",
                  children: r.jsxs("div", {
                    className: "text-base",
                    children: ["未知類型: ", w.type],
                  }),
                });
        }
      },
      On = (w) => {
        if (
          (se(w.gird_position || "0,0"),
          w.type !== "調劑台" && w.type !== "藥庫")
        )
          return null;
        const K = (Q) => {
          if (!Q || Q.length === 0)
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
          const { sortedContents: L, maxRow: W, maxCol: O } = Qe(Q),
            J = Array(W + 1)
              .fill(null)
              .map(() => Array(O + 1).fill(!1)),
            ee = {};
          return (
            L.forEach((pe) => {
              const Z = se(pe.gird_position || "0,0");
              (ee[`${Z.row},${Z.col}`] = pe), (J[Z.row][Z.col] = !0);
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: W + 1 }, (pe, Z) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      children: Array.from({ length: O + 1 }, (me, be) => {
                        const ke = `${Z},${be}`,
                          je = ee[ke];
                        return je
                          ? r.jsxs(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (O + 1)}%`,
                                  height: `${100 / (W + 1)}%`,
                                  minHeight: "120px",
                                  border: "none",
                                  position: "relative",
                                },
                                children: [
                                  kt(je),
                                  (y == null ? void 0 : y.container.GUID) ===
                                    je.GUID &&
                                    r.jsx("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none",
                                      children: r.jsx("div", {
                                        className: `absolute bg-blue-400 opacity-50 ${
                                          y.direction === "top"
                                            ? "top-0 left-0 right-0 h-1"
                                            : y.direction === "bottom"
                                            ? "bottom-0 left-0 right-0 h-1"
                                            : y.direction === "left"
                                            ? "left-0 top-0 bottom-0 w-1"
                                            : "right-0 top-0 bottom-0 w-1"
                                        }`,
                                      }),
                                    }),
                                ],
                              },
                              be
                            )
                          : r.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (O + 1)}%`,
                                  height: `${100 / (W + 1)}%`,
                                  minHeight: "120px",
                                  border: "1px dashed #e5e7eb",
                                },
                                children: r.jsx("div", {
                                  className:
                                    "w-full h-full flex items-center justify-center text-gray-400 text-sm",
                                  children: "空位",
                                }),
                              },
                              be
                            );
                      }),
                    },
                    Z
                  )
                ),
              }),
            })
          );
        };
        return r.jsxs(
          "div",
          {
            "data-container-guid": w.GUID,
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
                      children: w.name,
                    }),
                  }),
                  r.jsx("div", {
                    className: "flex items-center space-x-1",
                    children: r.jsx("button", {
                      className:
                        "p-1 hover:bg-black/10 rounded transition-colors",
                      onClick: (Q) => {
                        Q.stopPropagation(),
                          console.log("🔘 點擊新增父容器按鈕"),
                          console.log("📋 找到的部門資料:", w),
                          w
                            ? (console.log(
                                "✅ 呼叫 openAddParentContainerModal"
                              ),
                              a(w))
                            : console.warn("⚠️ 未找到對應的部門資料");
                      },
                      title: "新增",
                      children: r.jsx(bt, {
                        className: "w-6 h-6 text-green-700",
                      }),
                    }),
                  }),
                ],
              }),
              r.jsx("div", {
                className: `flex-1 bg-orange-50 ${
                  (y == null ? void 0 : y.container.GUID) === w.GUID
                    ? "ring-2 ring-blue-400 ring-inset"
                    : ""
                }`,
                children: K(w.contents || []),
              }),
            ],
          },
          w.GUID
        );
      },
      Qt = p.useCallback(
        (w) => {
          if (
            (console.log("🎯 locateDrugOnCanvas 被調用，藥品資料:", w),
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
          const K = w[0].CODE || w[0].code;
          if ((console.log("🎯 提取的藥碼:", K), !K)) {
            console.warn("⚠️ 無法定位藥品：缺少藥碼");
            return;
          }
          console.log("🎯 開始定位藥品:", K);
          const Q = (W) => {
              for (const O of W) {
                if (O.type === "grid_draw" && O.Boxes) {
                  for (const J of O.Boxes)
                    for (const ee of J)
                      if (ee.Code === K) {
                        const pe = document.querySelector(
                          `[data-container-guid="${O.GUID}"]`
                        );
                        if (pe)
                          return (
                            console.log("✅ 找到藥品容器 (grid_draw):", O),
                            { element: pe, bounds: pe.getBoundingClientRect() }
                          );
                      }
                }
                if (
                  O.type === "list_draw" &&
                  O.drugs &&
                  O.drugs.some((ee) => ee.code === K)
                ) {
                  const ee = document.querySelector(
                    `[data-container-guid="${O.GUID}"]`
                  );
                  if (ee)
                    return (
                      console.log("✅ 找到藥品容器 (list_draw):", O),
                      { element: ee, bounds: ee.getBoundingClientRect() }
                    );
                }
                if (
                  (O.type === "store_shelves" ||
                    O.type === "dispensing_shelves") &&
                  O.medMapStock &&
                  O.medMapStock.some(
                    (ee) => ee.code === K || ee.material_no === K
                  )
                ) {
                  const ee = document.querySelector(
                    `[data-container-guid="${O.GUID}"]`
                  );
                  if (ee)
                    return (
                      console.log("✅ 找到藥品容器 (store_shelves):", O),
                      { element: ee, bounds: ee.getBoundingClientRect() }
                    );
                }
                if (
                  O.type === "med_box" &&
                  O.med_info &&
                  O.med_info.length > 0 &&
                  O.med_info.some((ee) => ee.code === K)
                ) {
                  const ee = document.querySelector(
                    `[data-container-guid="${O.GUID}"]`
                  );
                  if (ee)
                    return (
                      console.log("✅ 找到藥品容器 (med_box):", O),
                      { element: ee, bounds: ee.getBoundingClientRect() }
                    );
                }
                if (O.contents && O.contents.length > 0) {
                  const J = Q(O.contents);
                  if (J) return J;
                }
              }
              return null;
            },
            L = Q(o);
          if (L) {
            const W = n.current.getBoundingClientRect(),
              O = L.bounds,
              J = (O.left + O.right) / 2,
              ee = (O.top + O.bottom) / 2,
              pe = (J - W.left - u.x) / u.scale,
              Z = (ee - W.top - u.y) / u.scale,
              me = W.width / 2,
              be = W.height / 2,
              ke = me - pe * u.scale,
              je = be - Z * u.scale;
            j((_e) => ({ ..._e, x: ke, y: je })),
              console.log("✅ 定位完成", {
                elementScreenCenter: { x: J, y: ee },
                elementCanvasPos: { x: pe, y: Z },
                screenCenter: { x: me, y: be },
                newTransform: { x: ke, y: je },
              }),
              m(`已定位到藥品：${w.CHT_NAME || w.NAME || K}`, "success");
          } else
            console.warn("❌ 未找到藥品容器"),
              m("未找到該藥品的儲存位置", "error");
        },
        [o, u, m]
      );
    p.useImperativeHandle(
      t,
      () => (
        console.log("🔧 useImperativeHandle 設置 ref 方法"), { locateDrug: Qt }
      )
    );
    const Wo = async (w, K, Q) => {
        if (
          (Q.stopPropagation(),
          Q.preventDefault(),
          !!window.confirm(`確定要刪除 ${w.name || w.material_no} 嗎？`))
        )
          try {
            const W = await De.deleteStockByGUID([w.GUID]);
            if (W.Code === 200) {
              const O = K.medMapStock.findIndex((J) => J.GUID === w.GUID);
              O !== -1 &&
                (K.medMapStock.splice(O, 1),
                K.medMapStock.forEach((J, ee) => {
                  J.location = String(ee);
                })),
                m("刪除成功", "success");
            } else m(W.Result || "刪除失敗", "error");
          } catch (W) {
            console.error("刪除 stock 失敗:", W),
              m("刪除失敗，請稍後再試", "error");
          }
      },
      $r = async (w) => {
        if (w.key === "Enter" && E.trim() && !F) {
          w.preventDefault(), oe(!0);
          const K = performance.now();
          try {
            console.log("🔍 [手動輸入] 搜尋條碼:", E);
            const Q = performance.now(),
              L = await De.searchByBarCode(E.trim()),
              W = performance.now();
            if (
              (console.log(
                `⏱️ [手動輸入] API搜尋藥品資料用時: ${(W - Q).toFixed(2)}ms`
              ),
              console.log("📋 條碼搜尋回應:", L),
              L.Code === 200)
            ) {
              console.log("✅ 找到藥品資料:", L.Data),
                m("找到藥品資料", "success");
              const O = performance.now();
              Qt(L.Data);
              const J = performance.now();
              console.log(
                `⏱️ [手動輸入] 定位藥品用時: ${(J - O).toFixed(2)}ms`
              ),
                I("");
              const ee = performance.now();
              console.log(`⏱️ [手動輸入] 總用時: ${(ee - K).toFixed(2)}ms`);
            } else
              L.Code === -200 && L.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  m("查無資料，請建立條碼", "error"),
                  g(E.trim()),
                  I(""))
                : (console.log("❌ 搜尋失敗:", L.Result),
                  m(L.Result || "搜尋失敗", "error"));
          } catch (Q) {
            console.error("條碼搜尋錯誤:", Q),
              m("搜尋失敗，請稍後再試", "error");
          } finally {
            oe(!1);
          }
        }
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
              r.jsx("input", {
                type: "text",
                value: E,
                onChange: (w) => I(w.target.value),
                onKeyDown: $r,
                placeholder: "輸入條碼或掃描...",
                className:
                  "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
                disabled: F,
              }),
              r.jsx("button", {
                onClick: () => c("track_Drug_mode"),
                className: "p-2",
                title: "掃描條碼",
                disabled: F,
                children: r.jsx(Pr, { className: "w-6 h-6 text-blue-600" }),
              }),
            ],
          }),
        }),
        r.jsx("div", {
          className: "absolute bottom-4 right-4 z-10 flex gap-2",
          children: r.jsx("button", {
            onClick: () => f(!k),
            className: `rounded-lg shadow-lg p-2 transition-colors ${
              k
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`,
            title: k ? "Unlock Canvas" : "Lock Canvas",
            children: k
              ? r.jsx(ci, { className: "w-6 h-6" })
              : r.jsx(Fu, { className: "w-6 h-6" }),
          }),
        }),
        r.jsx("div", {
          ref: n,
          className: `w-full h-full relative ${
            D && !k ? "cursor-grab" : "cursor-default"
          } ${b ? "cursor-grabbing" : ""}`,
          onMouseDown: z,
          onMouseMove: C,
          onMouseUp: $,
          onMouseLeave: $,
          onTouchStart: ge,
          onTouchMove: we,
          onTouchEnd: Ce,
          children: r.jsxs("div", {
            className: "absolute inset-0 origin-top-left",
            style: {
              transform: `translate(${u.x}px, ${u.y}px) scale(${u.scale})`,
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
                    borderSpacing: `${ie}px`,
                    minWidth: "fit-content",
                    minHeight: "fit-content",
                  },
                  children: r.jsx("tbody", {
                    children: Array.from({ length: Je + 1 }, (w, K) =>
                      r.jsx(
                        "tr",
                        {
                          children: Array.from({ length: Fe + 1 }, (Q, L) => {
                            const W = Pe.find((O) => {
                              const J = se(O.gird_position || "0,0");
                              return J.row === K && J.col === L;
                            });
                            return W
                              ? r.jsx(
                                  "td",
                                  {
                                    className: "align-top",
                                    style: {
                                      minWidth: "150px",
                                      minHeight: "120px",
                                      border: "none",
                                    },
                                    children: On(W),
                                  },
                                  L
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
                                  L
                                );
                          }),
                        },
                        K
                      )
                    ),
                  }),
                }),
              }),
              e,
            ],
          }),
        }),
      ],
    });
  });
Hu.displayName = "DrugCanvas";
const jh = async (e) => {
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
      var g, m, h;
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
          const u = {
            ...c,
            absolute_position:
              ((g = i.containerData) == null ? void 0 : g.absolute_position) ||
              i.position,
            name: ((m = i.containerData) == null ? void 0 : m.name) || "",
            ip: ((h = i.containerData) == null ? void 0 : h.ip) || "",
          };
          o.push(u);
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
        g = 0;
      const m = [];
      i.forEach((h) => {
        var u, j;
        if (h.error)
          (g += h.count),
            m.push(`${h.type}: ${h.error.message || "網路錯誤"}`),
            console.error(`❌ ${h.type} API 失敗:`, h.error);
        else if (((u = h.response) == null ? void 0 : u.Code) === 200)
          (c += h.count), console.log(`✅ ${h.type} API 成功:`, h.response);
        else {
          g += h.count;
          const b =
            ((j = h.response) == null ? void 0 : j.Result) || "未知錯誤";
          m.push(`${h.type}: ${b}`),
            console.error(`❌ ${h.type} API 失敗:`, h.response);
        }
      });
    } catch (i) {
      console.error("💥 批次更新過程中發生錯誤:", i);
    } finally {
      console.log("完成更新");
    }
  },
  Sh = "modulepreload",
  Ch = function (e) {
    return "/" + e;
  },
  bc = {},
  kh = function (t, n, s) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const a = document.querySelector("meta[property=csp-nonce]"),
        i =
          (a == null ? void 0 : a.nonce) ||
          (a == null ? void 0 : a.getAttribute("nonce"));
      o = Promise.allSettled(
        n.map((c) => {
          if (((c = Ch(c)), c in bc)) return;
          bc[c] = !0;
          const g = c.endsWith(".css"),
            m = g ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${m}`)) return;
          const h = document.createElement("link");
          if (
            ((h.rel = g ? "stylesheet" : Sh),
            g || (h.as = "script"),
            (h.crossOrigin = ""),
            (h.href = c),
            i && h.setAttribute("nonce", i),
            document.head.appendChild(h),
            g)
          )
            return new Promise((u, j) => {
              h.addEventListener("load", u),
                h.addEventListener("error", () =>
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
  Jt = [
    { name: "2.13吋", box_type: "2.13", width: ["7.5"], unit: "cm" },
    { name: "2.9吋", type: "2.9", width: ["10", "15", "20"], unit: "cm" },
    { name: "4.2吋", type: "4.2", width: ["11", "16"], unit: "cm" },
  ],
  Dh = () => {
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
        medicineList: g,
      } = Ye(),
      { t: m } = xt(),
      [h, u] = p.useState(0),
      [j, b] = p.useState({}),
      [_, k] = p.useState(""),
      [f, d] = p.useState(""),
      [x, D] = p.useState("N"),
      [R, E] = p.useState([]),
      [I, F] = p.useState(!1),
      [oe, A] = p.useState(!1),
      [X, ae] = p.useState(null),
      [S, v] = p.useState(null),
      [G, y] = p.useState(!1),
      [T, N] = p.useState(!1);
    p.useEffect(() => {
      if (n && e)
        if (c === "add") {
          u(0);
          const U = {};
          Jt.forEach((M, ne) => {
            U[ne] = 0;
          }),
            b(U),
            k(""),
            A(!1),
            V();
        } else {
          const U = Jt.findIndex(
            (M) => M.box_type === n.box_type || M.type === n.box_type
          );
          if ((console.log(n), U >= 0)) {
            u(U);
            const ne = Jt[U].width.findIndex((z) => {
                var C;
                return (
                  z === ((C = n.width) == null ? void 0 : C[n.width_index || 0])
                );
              }),
              fe = {};
            Jt.forEach((z, C) => {
              C === U ? (fe[C] = ne >= 0 ? ne : 0) : (fe[C] = 0);
            }),
              b(fe);
          } else {
            u(0);
            const M = {};
            Jt.forEach((ne, fe) => {
              M[fe] = 0;
            }),
              b(M);
          }
          k(n.ip || ""),
            v({
              box_type: n.box_type,
              width: n.width,
              width_index: n.width_index,
              ip: n.ip || "",
              storage: n.storage ? JSON.parse(JSON.stringify(n.storage)) : null,
            });
        }
    }, [n, e, c]);
    const V = () => {
        n && n.parentShelf && ae(n.parentShelf);
      },
      ie = (U) => {
        if (!U || !U.contents || U.contents.length === 0) return "0,0";
        let M = -1,
          ne = 0;
        return (
          U.contents.forEach((fe) => {
            if (fe.gird_position) {
              const [z, C] = fe.gird_position.split(",").map(Number);
              C > M && ((M = C), (ne = z));
            }
          }),
          `${ne},${M + 1}`
        );
      },
      q = () => {
        if (!S || c !== "edit") return !1;
        const U = Jt[h],
          M = j[h] || 0,
          ne = U.box_type || U.type || U.name;
        return (
          S.box_type !== ne ||
          S.width_index !== M ||
          S.ip !== _ ||
          JSON.stringify(S.storage) !==
            JSON.stringify(n == null ? void 0 : n.storage)
        );
      },
      re = (U) => {
        u(U);
      },
      xe = (U, M) => {
        b((ne) => ({ ...ne, [U]: M }));
      },
      ce = () => {
        n && (c === "add" ? se() : H());
      },
      B = () => {
        t();
      },
      se = async () => {
        if (!n || !X) {
          a("缺少必要資料，無法新增藥盒", "error");
          return;
        }
        A(!0);
        try {
          const U = Jt[h],
            M = j[h] || 0,
            ne = U.width[M],
            fe = ie(X),
            z = {
              Master_GUID: X.GUID,
              position: fe,
              width: ne.toString(),
              height: "60",
              ip_box: _,
              serverName: X.serverName || "",
              serverType: X.serverType || "",
            };
          console.log("🚀 發送新增藥盒 API 請求:", z);
          const C = await De.addMedMapBox(z);
          C.Code === 200
            ? (a("藥盒新增成功", "success"), t(), await ye())
            : a(`藥盒新增失敗：${C.Result || "未知錯誤"}`, "error");
        } catch (U) {
          console.error("Add med box failed:", U),
            a("藥盒新增失敗：網路錯誤", "error");
        } finally {
          A(!1);
        }
      },
      H = async () => {
        var U;
        if (!n || !q()) {
          a("沒有資料變更", "error");
          return;
        }
        y(!0);
        try {
          const M = Jt[h],
            ne = j[h] || 0,
            fe = M.width[ne],
            z = M.box_type || M.type || M.name,
            C = S.box_type !== z || S.width_index !== ne || S.ip !== _,
            $ =
              JSON.stringify(S.storage) !==
              JSON.stringify(n == null ? void 0 : n.storage),
            Y = [];
          if (C) {
            const he = {
              GUID: n.GUID,
              Master_GUID: n.Master_GUID,
              position: n.gird_position,
              ip_light: _,
              serverName: n.serverName,
              serverType: n.serverType,
            };
            Y.push(De.updateMedMapBox([he]));
          }
          $ &&
            Y.push(
              De.updateEpd266Storages(n.serverName || "", n.serverType || "", [
                n.storage,
              ])
            );
          const te = await Promise.all(Y);
          if (te.every((he) => he.Code === 200))
            a("藥盒更新成功", "success"), t(), await ye();
          else {
            const he = te.filter((ve) => ve.Code !== 200);
            a(
              `藥盒更新失敗：${
                ((U = he[0]) == null ? void 0 : U.Result) || "未知錯誤"
              }`,
              "error"
            );
          }
        } catch (M) {
          console.error("Update med box failed:", M),
            a("藥盒更新失敗：網路錯誤", "error");
        } finally {
          y(!1);
        }
      },
      ye = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const U = await De.getMedMapByDepartment(s);
          if (U.Code === 200 && U.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const M = await kh(() => Promise.resolve().then(() => Xm), void 0),
              ne = M.default.convertMedMapApiToFakeData(U.Data);
            if (!M.default.validateConvertedData(ne)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(ne), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", U),
              a("資料更新失敗：API 錯誤", "error");
        } catch (U) {
          console.error("💥 重新獲取藥品地圖資料失敗:", U),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      Se = async () => {
        F(!0);
        try {
          const U = f.toLowerCase().trim();
          let M = g;
          U &&
            (M = M.filter((ne) => {
              var fe, z, C;
              return (
                ((fe = ne.CODE) == null
                  ? void 0
                  : fe.toLowerCase().includes(U)) ||
                ((z = ne.NAME) == null
                  ? void 0
                  : z.toLowerCase().includes(U)) ||
                ((C = ne.CHT_NAME) == null
                  ? void 0
                  : C.toLowerCase().includes(U))
              );
            })),
            x !== "N" && (M = M.filter((ne) => ne.DRUGKIND === x)),
            E(M);
        } catch (U) {
          console.error("Search failed:", U), E([]);
        } finally {
          F(!1);
        }
      },
      P = (U, M) => {
        console.log("📸 掃描成功，藥品資料:", M), N(!1), ue(M);
      },
      ue = async (U) => {
        if (n)
          try {
            console.log("🚀 開始更新藥盒藥品代碼:", U.CODE);
            const M = await De.updateEpd266Medcode(
              n.serverName || "",
              n.serverType || "",
              U.CODE,
              n.storage || {}
            );
            M.Code === 200
              ? (console.log("✅ 藥品代碼更新成功:", M.Data),
                (n.storage = M.Data),
                (n.med_info = [
                  { name: U.NAME, cht_name: U.CHT_NAME, code: U.CODE },
                ]),
                a("藥品更新成功", "success"),
                i())
              : (console.error("❌ 藥品代碼更新失敗:", M),
                a(`藥品更新失敗：${M.Result || "未知錯誤"}`, "error"));
          } catch (M) {
            console.error("💥 藥品代碼更新發生錯誤:", M),
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
              onClick: B,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (U) => U.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(jn, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: m(
                            c === "add"
                              ? "modal.addMedBox"
                              : "modal.medBoxSettings"
                          ),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: B,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ge, { className: "w-6 h-6" }),
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
                              children: m("form.ipAddress"),
                            }),
                            r.jsx("div", {
                              className: "flex items-center",
                              children: r.jsx("input", {
                                type: "text",
                                onChange: (U) => k(U.target.value),
                                placeholder:
                                  (n == null ? void 0 : n.ip) ||
                                  (n == null ? void 0 : n.name) ||
                                  m("placeholder.ipAddress"),
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
                                children: m("form.medBoxType"),
                              }),
                              r.jsx("div", {
                                className: "flex gap-4 justify-between",
                                children: Jt.map((U, M) =>
                                  r.jsxs(
                                    "label",
                                    {
                                      className: `flex items-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                        h === M
                                          ? "border-blue-500 bg-blue-50"
                                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                      }`,
                                      children: [
                                        r.jsx("input", {
                                          type: "radio",
                                          name: "boxType",
                                          value: M,
                                          checked: h === M,
                                          onChange: () => re(M),
                                          className:
                                            "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                        }),
                                        r.jsx("div", {
                                          children: r.jsx("div", {
                                            className:
                                              "text-sm font-medium text-gray-900",
                                            children: U.name,
                                          }),
                                        }),
                                      ],
                                    },
                                    M
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
                                children: m("form.widthSelection"),
                              }),
                              Jt.map((U, M) =>
                                r.jsx(
                                  "div",
                                  {
                                    className: `flex gap-4 ${
                                      h === M ? "block" : "hidden"
                                    }`,
                                    children: U.width.map((ne, fe) =>
                                      r.jsxs(
                                        "label",
                                        {
                                          className: `flex items-center justify-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                            h === M && (j[M] || 0) === fe
                                              ? "border-green-500 bg-green-50"
                                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                          }`,
                                          children: [
                                            r.jsx("input", {
                                              type: "radio",
                                              name: `width-${M}`,
                                              value: fe,
                                              checked:
                                                h === M && (j[M] || 0) === fe,
                                              onChange: () => xe(M, fe),
                                              className:
                                                "w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500 hidden",
                                            }),
                                            r.jsx("div", {
                                              className: "text-center",
                                              children: r.jsxs("div", {
                                                className:
                                                  "text-sm font-semibold text-gray-900",
                                                children: [ne, " ", U.unit],
                                              }),
                                            }),
                                          ],
                                        },
                                        `${M}-${fe}`
                                      )
                                    ),
                                  },
                                  M
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
                                  children: m("form.drugInfo"),
                                }),
                                r.jsx("div", {
                                  children:
                                    n != null &&
                                    n.med_info &&
                                    n.med_info.length > 0
                                      ? r.jsx("div", {
                                          children: n.med_info.map((U, M) =>
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
                                                          m("form.drugCode"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          U.code ||
                                                          m("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    children: [
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-sm font-medium text-gray-600",
                                                        children: [
                                                          m("form.drugName"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          U.name ||
                                                          m("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    children: [
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-sm font-medium text-gray-600",
                                                        children: [
                                                          m("form.chineseName"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          U.cht_name ||
                                                          m("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              M
                                            )
                                          ),
                                        })
                                      : r.jsx("div", {
                                          className:
                                            "bg-gray-50 border border-gray-200 rounded-lg py-8 px-4 text-center space-y-4",
                                          children: r.jsx("div", {
                                            className:
                                              "text-gray-500 text-base",
                                            children: m("status.noDrugData"),
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
                                  children: m("form.drugInfo"),
                                }),
                                r.jsx("div", {
                                  className:
                                    "bg-gray-50 border border-gray-200 rounded-lg py-2 px-4 min-h-[262px] max-h-[262px]",
                                  children: r.jsx("div", {
                                    className: "text-center py-8 space-y-4",
                                    children: r.jsx("div", {
                                      className: "text-gray-500 text-base",
                                      children: m("status.newMedBoxNoDrug"),
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
                                    children: m("form.drugSearch"),
                                  }),
                                  r.jsx("button", {
                                    onClick: () => N(!0),
                                    className:
                                      "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                    title: "掃描條碼",
                                    children: r.jsx(Pr, {
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
                                    value: f,
                                    onChange: (U) => d(U.target.value),
                                    placeholder: m("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  r.jsxs("select", {
                                    value: x,
                                    onChange: (U) => D(U.target.value),
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
                                    onClick: Se,
                                    disabled: I,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      I &&
                                        r.jsx(Ct, {
                                          className: "w-4 h-4 animate-spin",
                                        }),
                                      m("button.search"),
                                    ],
                                  }),
                                ],
                              }),
                              r.jsx("div", {
                                className:
                                  "bg-white border rounded p-3 min-h-[220px] max-h-[220px] overflow-y-auto",
                                children: I
                                  ? r.jsxs("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: [
                                        r.jsx(Ct, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        m("status.searching"),
                                      ],
                                    })
                                  : R.length > 0
                                  ? r.jsx("div", {
                                      className: "space-y-1",
                                      children: R.map((U, M) =>
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
                                                    children: U.NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: U.CHT_NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: U.CODE,
                                                  }),
                                                ],
                                              }),
                                              r.jsx("button", {
                                                onClick: () => ue(U),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: m("button.add"),
                                                children: r.jsx(bt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          U.GUID || M
                                        )
                                      ),
                                    })
                                  : r.jsx("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: m(
                                        f || x !== "N"
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
                      onClick: B,
                      disabled: oe || G,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: m("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: ce,
                      disabled: oe || G,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        (oe || G) &&
                          r.jsx(Ct, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", {
                          children: oe
                            ? "新增中..."
                            : G
                            ? "更新中..."
                            : m(c === "add" ? "button.add" : "button.save"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            r.jsx(qo, {
              isOpen: T,
              onClose: () => N(!1),
              onScanSuccess: P,
              mode: "set_med_box_med_mode",
            }),
          ],
        });
  },
  _h = () => {
    const {
        listDrawModalOpen: e,
        closeListDrawModal: t,
        selectedListDraw: n,
        triggerRefresh: s,
      } = Ye(),
      { t: o } = xt(),
      [l, a] = p.useState(""),
      [i, c] = p.useState([]),
      [g, m] = p.useState(""),
      [h, u] = p.useState("N"),
      [j, b] = p.useState([]),
      [_, k] = p.useState(!1);
    p.useEffect(() => {
      n && e && (a(n.name || ""), c(n.med_info || []));
    }, [n, e]);
    const f = (E) => {
        c((I) => I.filter((F) => F.code !== E));
      },
      d = async () => {
        k(!0);
        try {
          const E = await De.searchMedicine(g, h);
          b(E);
        } catch (E) {
          console.error("Search failed:", E), b([]);
        } finally {
          k(!1);
        }
      },
      x = (E) => {
        const I = {
          id: E.GUID || `${Date.now()}_${Math.random()}`,
          name: E.NAME,
          cht_name: E.CHT_NAME,
          code: E.CODE,
        };
        c((F) => (F.some((A) => A.code === I.code) ? F : [...F, I]));
      },
      D = () => {
        n && ((n.name = l), (n.med_info = i), s(), t());
      },
      R = () => {
        t();
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: R,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (E) => E.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(jn, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: o("modal.listDrawSettings"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: R,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ge, { className: "w-6 h-6" }),
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
                            onChange: (E) => a(E.target.value),
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
                                    children: i.map((E) =>
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
                                                    E.code &&
                                                      r.jsx("div", {
                                                        children: r.jsx("div", {
                                                          className:
                                                            "text-sm text-gray-900 font-mono",
                                                          children: E.code,
                                                        }),
                                                      }),
                                                    r.jsx("div", {
                                                      children: r.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900 font-medium",
                                                        children:
                                                          E.name ||
                                                          o("status.notSet"),
                                                      }),
                                                    }),
                                                    r.jsx("div", {
                                                      children: r.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900",
                                                        children:
                                                          E.cht_name ||
                                                          o("status.notSet"),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              r.jsx("button", {
                                                onClick: () => f(E.code),
                                                className:
                                                  "ml-3 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0",
                                                title: o("button.remove"),
                                                children: r.jsx(Ge, {
                                                  className: "w-5 h-5",
                                                }),
                                              }),
                                            ],
                                          }),
                                        },
                                        E.id
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
                                    value: g,
                                    onChange: (E) => m(E.target.value),
                                    placeholder: o("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  r.jsxs("select", {
                                    value: h,
                                    onChange: (E) => u(E.target.value),
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
                                    disabled: _,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      _ &&
                                        r.jsx(Ct, {
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
                                children: _
                                  ? r.jsxs("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: [
                                        r.jsx(Ct, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        o("status.searching"),
                                      ],
                                    })
                                  : j.length > 0
                                  ? r.jsx("div", {
                                      className: "space-y-1",
                                      children: j.map((E, I) =>
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
                                                    children: E.NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: E.CHT_NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: E.CODE,
                                                  }),
                                                ],
                                              }),
                                              r.jsx("button", {
                                                onClick: () => x(E),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: o("button.add"),
                                                children: r.jsx(bt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          E.GUID || I
                                        )
                                      ),
                                    })
                                  : r.jsx("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: o(
                                        g || h !== "N"
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
                      onClick: R,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: o("button.cancel"),
                    }),
                    r.jsx("button", {
                      onClick: D,
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
  Mh = () => {
    const {
        gridDrawModalOpen: e,
        closeGridDrawModal: t,
        selectedGridDraw: n,
        triggerRefresh: s,
        apiDepartmentData: o,
        setApiDepartmentData: l,
        showNotification: a,
        medicineList: i,
      } = Ye(),
      { t: c } = xt(),
      [g, m] = p.useState(""),
      [h, u] = p.useState(null),
      [j, b] = p.useState(!1),
      [_, k] = p.useState(!1),
      [f, d] = p.useState(null),
      [x, D] = p.useState(""),
      [R, E] = p.useState("N"),
      [I, F] = p.useState([]),
      [oe, A] = p.useState(!1),
      [X, ae] = p.useState(0),
      [S, v] = p.useState({ x: 0, y: 0 });
    p.useEffect(() => {
      if (n && e)
        if ((m(n.name || ""), n.drawer)) {
          if (!j) {
            console.log("🔄 備份原始 drawer 資料:", n);
            const z = JSON.parse(JSON.stringify(n.drawer));
            u(z), b(!0), console.log("✅ 備份完成，備份資料:", z);
          }
        } else console.log("⚠️ 沒有 drawer 資料可備份"), u(null), b(!1);
    }, [n, e, j]),
      p.useEffect(() => {
        e || (b(!1), u(null), d(null));
      }, [e]);
    const G = () => {
        n && ne();
      },
      y = () => {
        if (
          (console.log("🔄 開始恢復原始資料..."),
          console.log("原始備份資料:", h),
          console.log("當前 selectedGridDraw:", n),
          n && h && j)
        ) {
          console.log("📦 恢復 drawer 資料...");
          const z = JSON.parse(JSON.stringify(h));
          if (((n.drawer = z), o)) {
            const C = (Y) => {
                Y.forEach((te) => {
                  te.GUID === n.GUID &&
                    (console.log("🎯 找到目標格線抽屜，更新資料"),
                    (te.drawer = z)),
                    te.contents && Array.isArray(te.contents) && C(te.contents),
                    te.components &&
                      Array.isArray(te.components) &&
                      C(te.components);
                });
              },
              $ = JSON.parse(JSON.stringify(o));
            C($), l($), console.log("🔄 已更新全域資料狀態");
          }
          console.log("✅ 資料已恢復:", n.drawer);
        } else
          console.log(
            "⚠️ 無法恢復資料 - selectedGridDraw、originalDrawerData 或 hasBackup 為空"
          ),
            console.log("selectedGridDraw:", !!n),
            console.log("originalDrawerData:", !!h),
            console.log("hasBackup:", j);
        d(null), b(!1), u(null), s(), t();
      },
      T = (z, C) => {
        if (!f) return !1;
        const $ = Math.min(f.startRow, f.endRow),
          Y = Math.max(f.startRow, f.endRow),
          te = Math.min(f.startCol, f.endCol),
          de = Math.max(f.startCol, f.endCol);
        return z >= $ && z <= Y && C >= te && C <= de;
      },
      N = (z) => {
        var Ee;
        if (
          !((Ee = n == null ? void 0 : n.drawer) != null && Ee.Boxes) ||
          z.Slave
        )
          return { width: 1, height: 1 };
        const $ = n.drawer.Boxes.flat().filter(
          (ge) =>
            ge.Slave &&
            ge.MasterBox_Row === z.Row &&
            ge.MasterBox_Column === z.Column
        );
        if ($.length === 0) return { width: 1, height: 1 };
        const Y = [z, ...$],
          te = Math.min(...Y.map((ge) => ge.Row)),
          de = Math.max(...Y.map((ge) => ge.Row)),
          he = Math.min(...Y.map((ge) => ge.Column));
        return {
          width: Math.max(...Y.map((ge) => ge.Column)) - he + 1,
          height: de - te + 1,
        };
      },
      V = () => {
        var he;
        if (!f || !((he = n == null ? void 0 : n.drawer) != null && he.Boxes))
          return [];
        const z = n.drawer.Boxes.flat(),
          C = Math.min(f.startRow, f.endRow),
          $ = Math.max(f.startRow, f.endRow),
          Y = Math.min(f.startCol, f.endCol),
          te = Math.max(f.startCol, f.endCol),
          de = [];
        return (
          z.forEach((ve) => {
            if (!ve.Slave) {
              const Ee = N(ve),
                ge = ve.Row + Ee.height - 1,
                we = ve.Column + Ee.width - 1;
              ve.Row >= C &&
                ge <= $ &&
                ve.Column >= Y &&
                we <= te &&
                de.push(ve);
            }
          }),
          de
        );
      },
      ie = (z, C, $, Y) => {
        var we;
        if (!f || !((we = n == null ? void 0 : n.drawer) != null && we.Boxes))
          return !1;
        const te = n.drawer.Boxes.flat();
        let de = !0,
          he = z,
          ve = C,
          Ee = $,
          ge = Y;
        for (; de; )
          (de = !1),
            te.forEach((Ce) => {
              if (!Ce.Slave) {
                const Te = N(Ce),
                  Qe = Ce.Row + Te.height - 1,
                  Pe = Ce.Column + Te.width - 1;
                !(Ce.Row > ve || Qe < he || Ce.Column > ge || Pe < Ee) &&
                  (Ce.Row < he && ((he = Ce.Row), (de = !0)),
                  Qe > ve && ((ve = Qe), (de = !0)),
                  Ce.Column < Ee && ((Ee = Ce.Column), (de = !0)),
                  Pe > ge && ((ge = Pe), (de = !0)));
              }
            });
        return { minRow: he, maxRow: ve, minCol: Ee, maxCol: ge };
      },
      q = () => {
        var de;
        if (!f || !((de = n == null ? void 0 : n.drawer) != null && de.Boxes))
          return !1;
        const z = Math.min(f.startRow, f.endRow),
          C = Math.max(f.startRow, f.endRow),
          $ = Math.min(f.startCol, f.endCol),
          Y = Math.max(f.startCol, f.endCol),
          te = n.drawer.Boxes.flat();
        for (let he = z; he <= C; he++)
          for (let ve = $; ve <= Y; ve++) {
            let Ee = !1;
            for (const ge of te)
              if (!ge.Slave) {
                const we = N(ge),
                  Ce = ge.Row + we.height - 1,
                  Te = ge.Column + we.width - 1;
                if (he >= ge.Row && he <= Ce && ve >= ge.Column && ve <= Te) {
                  Ee = !0;
                  break;
                }
              }
            if (!Ee) return !1;
          }
        return !0;
      },
      re = () => {
        var we, Ce;
        const z = V();
        if (!f) return { canMerge: !1, canUnmerge: !1 };
        if (z.length === 0) return { canMerge: !1, canUnmerge: !1 };
        const C =
            ((Ce =
              (we = n == null ? void 0 : n.drawer) == null
                ? void 0
                : we.Boxes) == null
              ? void 0
              : Ce.flat()) || [],
          $ = z.some(
            (Te) =>
              C.filter(
                (Pe) =>
                  Pe.Slave &&
                  Pe.MasterBox_Row === Te.Row &&
                  Pe.MasterBox_Column === Te.Column
              ).length > 0
          ),
          Y = Math.min(f.startRow, f.endRow),
          te = Math.max(f.startRow, f.endRow),
          de = Math.min(f.startCol, f.endCol),
          he = Math.max(f.startCol, f.endCol),
          ve = C.some(
            (Te) =>
              Te.Slave &&
              Te.Row >= Y &&
              Te.Row <= te &&
              Te.Column >= de &&
              Te.Column <= he
          );
        return { canMerge: z.length > 1 && q(), canUnmerge: $ || ve };
      },
      { canMerge: xe, canUnmerge: ce } = re(),
      B = async () => {
        A(!0);
        try {
          const z = x.toLowerCase().trim();
          let C = i;
          z &&
            (C = C.filter(($) => {
              var Y, te, de;
              return (
                ((Y = $.CODE) == null ? void 0 : Y.toLowerCase().includes(z)) ||
                ((te = $.NAME) == null
                  ? void 0
                  : te.toLowerCase().includes(z)) ||
                ((de = $.CHT_NAME) == null
                  ? void 0
                  : de.toLowerCase().includes(z))
              );
            })),
            R !== "N" && (C = C.filter(($) => $.DRUGKIND === R)),
            F(C);
        } catch (z) {
          console.error("Search failed:", z), F([]);
        } finally {
          A(!1);
        }
      },
      se = async (z) => {
        var $;
        if (!f || !(($ = n == null ? void 0 : n.drawer) != null && $.Boxes))
          return;
        const C = V();
        if (C.length !== 0)
          try {
            const Y = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [`guid=${C[0].GUID}`, `code=${z.CODE}`],
              Data: n.drawer,
            };
            console.log("🚀 發送更新藥品 API 請求:", Y);
            const te = await De.request("/api/device/update_drawer_medcode", {
              method: "POST",
              body: JSON.stringify(Y),
            });
            if (
              (console.log("📡 更新藥品 API 回應:", te),
              te.Code === 200 && te.Data)
            ) {
              if (
                ((n.drawer = te.Data),
                te.Data.Boxes && (n.Boxes = te.Data.Boxes),
                console.log("✅ 藥品資料更新成功"),
                o)
              ) {
                const de = (ve) => {
                    ve.forEach((Ee) => {
                      Ee.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (Ee.drawer = n.drawer),
                        n.Boxes && (Ee.Boxes = n.Boxes)),
                        Ee.contents &&
                          Array.isArray(Ee.contents) &&
                          de(Ee.contents),
                        Ee.components &&
                          Array.isArray(Ee.components) &&
                          de(Ee.components);
                    });
                  },
                  he = JSON.parse(JSON.stringify(o));
                de(he), l(he);
              }
              d(null), s();
            } else
              console.error("❌ 藥品更新失敗:", te),
                a(`藥品更新失敗：${te.Result || "未知錯誤"}`, "error");
          } catch (Y) {
            console.error("💥 藥品更新 API 調用失敗:", Y),
              a("藥品更新失敗：網路錯誤", "error");
          }
      },
      H = (z, C, $) => {
        $.preventDefault(),
          $.stopPropagation(),
          "touches" in $ &&
            (ae(Date.now()),
            v({ x: $.touches[0].clientX, y: $.touches[0].clientY })),
          k(!0),
          d({ startRow: z, startCol: C, endRow: z, endCol: C });
      },
      ye = (z, C) => {
        if (!_ || !f) return;
        const $ = Math.min(f.startRow, z),
          Y = Math.max(f.startRow, z),
          te = Math.min(f.startCol, C),
          de = Math.max(f.startCol, C),
          he = ie($, Y, te, de);
        he &&
          d((ve) =>
            ve
              ? {
                  startRow: ve.startRow,
                  startCol: ve.startCol,
                  endRow: z >= ve.startRow ? he.maxRow : he.minRow,
                  endCol: C >= ve.startCol ? he.maxCol : he.minCol,
                }
              : null
          );
      },
      Se = () => {
        if (_ && (k(!1), f && n != null && n.Boxes)) {
          const z = Math.min(f.startRow, f.endRow),
            C = Math.max(f.startRow, f.endRow),
            $ = Math.min(f.startCol, f.endCol),
            Y = Math.max(f.startCol, f.endCol),
            te = ie(z, C, $, Y);
          te &&
            d({
              startRow: te.minRow,
              startCol: te.minCol,
              endRow: te.maxRow,
              endCol: te.maxCol,
            });
        }
      },
      P = () => {
        var z;
        !xe ||
          !((z = n == null ? void 0 : n.drawer) != null && z.Boxes) ||
          !f ||
          M();
      },
      ue = () => {
        var z;
        !ce ||
          !((z = n == null ? void 0 : n.drawer) != null && z.Boxes) ||
          !f ||
          (console.log(f), U());
      },
      U = async () => {
        var z;
        if (!(!f || !((z = n == null ? void 0 : n.drawer) != null && z.Boxes)))
          try {
            const C = Math.min(f.startRow, f.endRow),
              $ = Math.max(f.startRow, f.endRow),
              Y = Math.min(f.startCol, f.endCol),
              te = Math.max(f.startCol, f.endCol),
              he = n.drawer.Boxes.flat().filter(
                (Ce) =>
                  Ce.Row >= C &&
                  Ce.Row <= $ &&
                  Ce.Column >= Y &&
                  Ce.Column <= te
              ),
              ve = [],
              Ee = [];
            he.forEach((Ce) => {
              ve.push(Ce.Column.toString()), Ee.push(Ce.Row.toString());
            });
            const ge = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${ve.join(",")}`,
                `SelectRows=${Ee.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", ge);
            const we = await De.request("/api/device/separate_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(ge),
            });
            if ((console.log("📡 API 回應:", we), we.Code === 200 && we.Data)) {
              if (
                we.Data.Boxes &&
                Array.isArray(we.Data.Boxes) &&
                ((n.Boxes = we.Data.Boxes),
                (n.drawer = we.Data),
                console.log("✅ 資料已更新"),
                o)
              ) {
                const Ce = (Qe) => {
                    Qe.forEach((Pe) => {
                      Pe.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (Pe.drawer = n.drawer)),
                        Pe.contents &&
                          Array.isArray(Pe.contents) &&
                          Ce(Pe.contents),
                        Pe.components &&
                          Array.isArray(Pe.components) &&
                          Ce(Pe.components);
                    });
                  },
                  Te = JSON.parse(JSON.stringify(o));
                Ce(Te), l(Te);
              }
            } else
              console.error("❌ API 回應錯誤:", we),
                a(`取消合併失敗：${we.Result || "未知錯誤"}`, "error");
          } catch (C) {
            console.error("💥 API 調用失敗:", C),
              a("取消合併失敗：網路錯誤", "error");
          } finally {
            console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              d(null),
              s();
          }
      },
      M = async () => {
        var z;
        if (!(!f || !((z = n == null ? void 0 : n.drawer) != null && z.Boxes)))
          try {
            const C = Math.min(f.startRow, f.endRow),
              $ = Math.max(f.startRow, f.endRow),
              Y = Math.min(f.startCol, f.endCol),
              te = Math.max(f.startCol, f.endCol),
              he = n.drawer.Boxes.flat().filter(
                (Ce) =>
                  Ce.Row >= C &&
                  Ce.Row <= $ &&
                  Ce.Column >= Y &&
                  Ce.Column <= te
              ),
              ve = [],
              Ee = [];
            he.forEach((Ce) => {
              ve.push(Ce.Column.toString()), Ee.push(Ce.Row.toString());
            });
            const ge = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${ve.join(",")}`,
                `SelectRows=${Ee.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", ge);
            const we = await De.request("/api/device/combine_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(ge),
            });
            if ((console.log("📡 API 回應:", we), we.Code === 200 && we.Data)) {
              if (
                we.Data.Boxes &&
                Array.isArray(we.Data.Boxes) &&
                ((n.Boxes = we.Data.Boxes),
                (n.drawer = we.Data),
                console.log("✅ 資料已更新"),
                o)
              ) {
                const Ce = (Qe) => {
                    Qe.forEach((Pe) => {
                      Pe.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (Pe.drawer = n.drawer)),
                        Pe.contents &&
                          Array.isArray(Pe.contents) &&
                          Ce(Pe.contents),
                        Pe.components &&
                          Array.isArray(Pe.components) &&
                          Ce(Pe.components);
                    });
                  },
                  Te = JSON.parse(JSON.stringify(o));
                Ce(Te), l(Te);
              }
            } else
              console.error("❌ API 回應錯誤:", we),
                a(`取消合併失敗：${we.Result || "未知錯誤"}`, "error");
          } catch (C) {
            console.error("💥 API 調用失敗:", C),
              a("取消合併失敗：網路錯誤", "error");
          } finally {
            console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              d(null),
              s();
          }
      },
      ne = async () => {
        if (n)
          try {
            n.name = g;
            const z = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              Data: [n.drawer],
            };
            console.log("🚀 發送確認更新 API 請求:", z);
            const C = await De.request("/api/device/update_epd583_drawers", {
              method: "POST",
              body: JSON.stringify(z),
            });
            if ((console.log("📡 確認更新 API 回應:", C), C.Code === 200)) {
              if (
                (console.log("✅ 抽屜資料更新成功"),
                a("抽屜資料更新成功", "success"),
                o)
              ) {
                const $ = (te) => {
                    te.forEach((de) => {
                      de.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新名稱"),
                        (de.name = n.name)),
                        de.contents &&
                          Array.isArray(de.contents) &&
                          $(de.contents),
                        de.components &&
                          Array.isArray(de.components) &&
                          $(de.components);
                    });
                  },
                  Y = JSON.parse(JSON.stringify(o));
                $(Y), l(Y);
              }
              b(!1), u(null), s(), t();
            } else
              console.error("❌ 抽屜資料更新失敗:", C),
                a(`抽屜資料更新失敗：${C.Result || "未知錯誤"}`, "error");
          } catch (z) {
            console.error("💥 抽屜資料更新 API 調用失敗:", z),
              a("抽屜資料更新失敗：網路錯誤", "error");
          }
      },
      fe = () => {
        var Ee;
        if (
          !((Ee = n == null ? void 0 : n.drawer) != null && Ee.Boxes) ||
          n.drawer.Boxes.length === 0
        )
          return r.jsx("div", {
            className:
              "bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg py-12",
            children: r.jsxs("div", {
              className: "text-center",
              children: [
                r.jsx(Gu, {
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
        const z = n.drawer.Boxes.flat(),
          C = (ge) => {
            if (ge.Slave) return { width: 1, height: 1 };
            const we = z.filter(
              (Fe) =>
                Fe.Slave &&
                Fe.MasterBox_Row === ge.Row &&
                Fe.MasterBox_Column === ge.Column
            );
            if (we.length === 0) return { width: 1, height: 1 };
            const Ce = [ge, ...we],
              Te = Math.min(...Ce.map((Fe) => Fe.Row)),
              Qe = Math.max(...Ce.map((Fe) => Fe.Row)),
              Pe = Math.min(...Ce.map((Fe) => Fe.Column));
            return {
              width: Math.max(...Ce.map((Fe) => Fe.Column)) - Pe + 1,
              height: Qe - Te + 1,
            };
          },
          $ = Math.max(...z.map((ge) => ge.Row + 1 - 1)),
          Y = Math.max(...z.map((ge) => ge.Column + 1 - 1)),
          te = $ + 1,
          de = Y + 1,
          he = Array(te)
            .fill(null)
            .map(() => Array(de).fill(!1)),
          ve = {};
        return (
          z.forEach((ge) => {
            if (!ge.Slave) {
              const we = C(ge);
              (ve[`${ge.Row},${ge.Column}`] = ge),
                (ge.calculatedWidth = we.width),
                (ge.calculatedHeight = we.height);
            }
          }),
          z.forEach((ge) => {
            if (
              !ge.Slave &&
              (ge.calculatedWidth > 1 || ge.calculatedHeight > 1)
            )
              for (let we = ge.Row; we < ge.Row + ge.calculatedHeight; we++)
                for (
                  let Ce = ge.Column;
                  Ce < ge.Column + ge.calculatedWidth;
                  Ce++
                )
                  (we !== ge.Row || Ce !== ge.Column) && (he[we][Ce] = !0);
          }),
          r.jsx("div", {
            className: "rounded-lg",
            children: r.jsx("table", {
              className: "w-full",
              children: r.jsx("tbody", {
                children: Array.from({ length: te }, (ge, we) =>
                  r.jsx(
                    "tr",
                    {
                      children: Array.from({ length: de }, (Ce, Te) => {
                        if (he[we][Te]) return null;
                        const Qe = `${we},${Te}`,
                          Pe = ve[Qe];
                        return Pe
                          ? r.jsx(
                              "td",
                              {
                                className: `border border-gray-400 pt-1 pl-1 align-top cursor-pointer select-none ${
                                  T(we, Te)
                                    ? "bg-blue-200"
                                    : "bg-white hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / de}%`,
                                  minHeight: "40px",
                                  height: `${50 * Pe.calculatedHeight}px`,
                                  maxHeight: `${50 * Pe.calculatedHeight}px`,
                                },
                                colSpan: Pe.calculatedWidth,
                                rowSpan: Pe.calculatedHeight,
                                onMouseDown: (Je) => H(we, Te, Je),
                                onMouseEnter: () => ye(we, Te),
                                onMouseUp: Se,
                                onTouchStart: (Je) => H(we, Te, Je),
                                onTouchMove: (Je) => {
                                  if ((Je.preventDefault(), !_)) return;
                                  const Fe = Je.touches[0],
                                    kt = document.elementFromPoint(
                                      Fe.clientX,
                                      Fe.clientY
                                    ),
                                    ft = kt == null ? void 0 : kt.closest("td");
                                  if (ft) {
                                    const On = parseInt(
                                        ft.getAttribute("data-row") || "0"
                                      ),
                                      Qt = parseInt(
                                        ft.getAttribute("data-col") || "0"
                                      );
                                    ye(On, Qt);
                                  }
                                },
                                onTouchEnd: Se,
                                "data-row": we,
                                "data-col": Te,
                                children: r.jsx("div", {
                                  className: "h-full flex flex-col",
                                  children:
                                    Pe.Code || Pe.Name || Pe.ChineseName
                                      ? r.jsxs(r.Fragment, {
                                          children: [
                                            Pe.Code &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs font-mono text-gray-600",
                                                children: Pe.Code,
                                              }),
                                            Pe.Name &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs font-medium text-gray-900",
                                                children: Pe.Name,
                                              }),
                                            Pe.ChineseName &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs text-gray-700",
                                                children: Pe.ChineseName,
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
                              Te
                            )
                          : r.jsx(
                              "td",
                              {
                                className: `border border-gray-300 p-2 align-top cursor-pointer select-none ${
                                  T(we, Te)
                                    ? "border-1 border-blue-500 bg-blue-100"
                                    : "bg-gray-50 hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / de}%`,
                                  minWidth: "80px",
                                  minHeight: "80px",
                                },
                                onMouseDown: (Je) => H(we, Te, Je),
                                onMouseEnter: () => ye(we, Te),
                                onMouseUp: Se,
                                onTouchStart: (Je) => H(we, Te, Je),
                                onTouchMove: (Je) => {
                                  if ((Je.preventDefault(), !_)) return;
                                  const Fe = Je.touches[0],
                                    kt = document.elementFromPoint(
                                      Fe.clientX,
                                      Fe.clientY
                                    ),
                                    ft = kt == null ? void 0 : kt.closest("td");
                                  if (ft) {
                                    const On = parseInt(
                                        ft.getAttribute("data-row") || "0"
                                      ),
                                      Qt = parseInt(
                                        ft.getAttribute("data-col") || "0"
                                      );
                                    ye(On, Qt);
                                  }
                                },
                                onTouchEnd: Se,
                                "data-row": we,
                                "data-col": Te,
                                children: r.jsx("div", {
                                  className:
                                    "h-full flex items-center justify-center text-gray-400 text-xs",
                                  children: c("status.notAdded"),
                                }),
                              },
                              Te
                            );
                      }),
                    },
                    we
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
              onClick: y,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (z) => z.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(jn, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: c("modal.gridDrawSettings"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: y,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ge, { className: "w-6 h-6" }),
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
                              value: g,
                              onChange: (z) => m(z.target.value),
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
                          children: fe(),
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
                                onClick: P,
                                disabled: !xe,
                                className: `px-4 py-2 rounded transition-colors ${
                                  xe
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`,
                                children: c("button.merge"),
                              }),
                              r.jsx("button", {
                                onClick: ue,
                                disabled: !ce,
                                className: `px-4 py-2 rounded transition-colors ${
                                  ce
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
                            const z = V(),
                              C = z.find(($) => !$.Slave);
                            return C && (C.Code || C.Name || C.ChineseName)
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
                                          children: C.Code || "-",
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
                                          children: C.Name || "-",
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
                                          children: C.ChineseName || "-",
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
                                      f && z.length > 0
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
                                  onChange: (z) => D(z.target.value),
                                  placeholder: c("placeholder.drugSearch"),
                                  className:
                                    "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                }),
                                r.jsxs("select", {
                                  value: R,
                                  onChange: (z) => E(z.target.value),
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
                                  onClick: B,
                                  disabled: oe,
                                  className:
                                    "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                  children: [
                                    oe &&
                                      r.jsx(Ct, {
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
                              children: oe
                                ? r.jsxs("div", {
                                    className:
                                      "text-gray-500 text-center flex items-center justify-center h-full",
                                    children: [
                                      r.jsx(Ct, {
                                        className: "w-5 h-5 animate-spin mr-2",
                                      }),
                                      c("status.searching"),
                                    ],
                                  })
                                : I.length > 0
                                ? r.jsx("div", {
                                    className: "space-y-1",
                                    children: I.map((z, C) =>
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
                                                  children: z.NAME,
                                                }),
                                                r.jsx("div", {
                                                  className:
                                                    "text-xs text-gray-500 truncate",
                                                  children: z.CHT_NAME,
                                                }),
                                                r.jsx("div", {
                                                  className:
                                                    "text-xs text-gray-400 font-mono",
                                                  children: z.CODE,
                                                }),
                                              ],
                                            }),
                                            r.jsx("button", {
                                              onClick: () => se(z),
                                              className:
                                                "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                              title: c("button.add"),
                                              children: r.jsx(bt, {
                                                className: "w-4 h-4",
                                              }),
                                            }),
                                          ],
                                        },
                                        z.GUID || C
                                      )
                                    ),
                                  })
                                : r.jsx("div", {
                                    className:
                                      "text-gray-500 text-center flex items-center justify-center h-full",
                                    children: c(
                                      x || R !== "N"
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
                          onClick: y,
                          className:
                            "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                          children: c("button.cancel"),
                        }),
                        r.jsx("button", {
                          onClick: G,
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
                  onMouseUp: Se,
                  onMouseLeave: Se,
                  onTouchEnd: Se,
                  onTouchCancel: Se,
                }),
              ],
            }),
          ],
        });
  },
  Eh = () => {
    var ae;
    const {
        addParentContainerModalOpen: e,
        closeAddParentContainerModal: t,
        selectedDepartmentForAdd: n,
        selectedDepartmentType: s,
        setApiDepartmentData: o,
        setIsLoadingMedMap: l,
        showNotification: a,
        triggerRefresh: i,
        setSidebarOpen: c,
      } = Ye(),
      { t: g } = xt(),
      [m, h] = p.useState(null),
      [u, j] = p.useState(0),
      [b, _] = p.useState(0),
      [k, f] = p.useState(!1);
    p.useEffect(() => {
      e && (h(null), j(0), _(0), f(!1));
    }, [e]),
      p.useEffect(() => {
        m && (j(m.row), _(m.col));
      }, [m]);
    const d = () => {
        const S = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((v) => {
              v.type === "parent_container" &&
                v.gird_position &&
                S.add(v.gird_position);
            }),
          S
        );
      },
      x = () => {
        const S = d(),
          v = [];
        if (S.size === 0) return v.push({ row: 0, col: 0 }), v;
        const G = [];
        S.forEach((T) => {
          const [N, V] = T.split(",").map(Number);
          G.push({ row: N, col: V });
        });
        const y = new Set();
        return (
          G.forEach(({ row: T, col: N }) => {
            y.add(`${T},${N + 1}`),
              y.add(`${T + 1},${N}`),
              N > 0 && y.add(`${T},${N - 1}`),
              T > 0 && y.add(`${T - 1},${N}`);
          }),
          y.forEach((T) => {
            if (!S.has(T)) {
              const [N, V] = T.split(",").map(Number);
              N >= 0 && V >= 0 && v.push({ row: N, col: V });
            }
          }),
          S.has("0,1") ||
            v.some((N) => N.row === 0 && N.col === 1) ||
            v.push({ row: 0, col: 1 }),
          S.has("1,0") ||
            v.some((N) => N.row === 1 && N.col === 0) ||
            v.push({ row: 1, col: 0 }),
          v.sort((T, N) => (T.row === N.row ? T.col - N.col : T.row - N.row))
        );
      },
      D = (S) => {
        h(S);
      },
      R = (S) => {
        j(S), h({ row: S, col: b });
      },
      E = (S) => {
        _(S), h({ row: u, col: S });
      },
      I = m && !d().has(`${m.row},${m.col}`) && m.row >= 0 && m.col >= 0,
      F = async () => {
        if (!(!m || !n || !I)) {
          f(!0);
          try {
            const S = `${m.row},${m.col}`,
              v = await De.addMedMapSection(n.GUID, S);
            v.Code === 200
              ? (a("新增成功", "success"), t(), c(!1), await oe())
              : a(`新增失敗：${v.Result || "未知錯誤"}`, "error");
          } catch (S) {
            console.error("Add parent container failed:", S),
              a("新增失敗：網路錯誤", "error");
          } finally {
            f(!1);
          }
        }
      },
      oe = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const S = await De.getMedMapByDepartment(s);
          if (S.Code === 200 && S.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const v = Ut.convertMedMapApiToFakeData(S.Data);
            if (!Ut.validateConvertedData(v)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(v), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", S),
              a("資料更新失敗：API 錯誤", "error");
        } catch (S) {
          console.error("💥 重新獲取藥品地圖資料失敗:", S),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      A = () => {
        t();
      },
      X = () => {
        const S = d(),
          v = x(),
          G = [...S]
            .map((re) => {
              const [xe, ce] = re.split(",").map(Number);
              return { row: xe, col: ce };
            })
            .concat(v);
        G.length === 0 && G.push({ row: 0, col: 0 });
        const y = Math.max(...G.map((re) => re.row)),
          T = Math.max(...G.map((re) => re.col)),
          N = Math.min(...G.map((re) => re.row)),
          V = Math.min(...G.map((re) => re.col)),
          ie = y - N + 1,
          q = T - V + 1;
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
                style: { gridTemplateColumns: `repeat(${q}, 1fr)` },
                children: Array.from({ length: ie * q }, (re, xe) => {
                  const ce = Math.floor(xe / q) + N,
                    B = (xe % q) + V,
                    se = `${ce},${B}`,
                    H = S.has(se),
                    ye = v.some((P) => P.row === ce && P.col === B),
                    Se =
                      (m == null ? void 0 : m.row) === ce &&
                      (m == null ? void 0 : m.col) === B;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => ye && D({ row: ce, col: B }),
                      disabled: H || !ye,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      H
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : Se
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : ye
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: H ? "已占用" : ye ? "可選擇" : "不可用",
                      children: H ? "占用" : `${ce},${B}`,
                    },
                    se
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
              onClick: A,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "800px" },
              onClick: (S) => S.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(bt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增櫃體",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: A,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ge, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      X(),
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
                                    value: u,
                                    onChange: (S) =>
                                      R(parseInt(S.target.value) || 0),
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
                                    value: b,
                                    onChange: (S) =>
                                      E(parseInt(S.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          m &&
                            r.jsx("div", {
                              className: `text-sm p-2 rounded ${
                                I
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: I
                                ? `已選擇位置：${m.row},${m.col}`
                                : `位置 ${m.row},${m.col} 已被占用或無效`,
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
                                  ((ae = n == null ? void 0 : n.contents) ==
                                  null
                                    ? void 0
                                    : ae.filter(
                                        (S) => S.type === "parent_container"
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
                      onClick: A,
                      disabled: k,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: g("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: F,
                      disabled: !I || k,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        k && r.jsx(Ct, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: k ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  Nc = [
    {
      value: "dispensing_shelves",
      label: "藥盒層架",
      icon: r.jsx(ch, { className: "w-5 h-5" }),
      isShelf: !0,
    },
    {
      value: "store_shelves",
      label: "藥品層架",
      icon: r.jsx(th, { className: "w-5 h-5" }),
      isShelf: !0,
    },
    {
      value: "list_draw",
      label: "清單抽屜",
      icon: r.jsx(pa, { className: "w-5 h-5" }),
      isShelf: !1,
    },
    {
      value: "grid_draw",
      label: "格線抽屜",
      icon: r.jsx(Gu, { className: "w-5 h-5" }),
      isShelf: !1,
    },
  ],
  Ih = () => {
    var ie;
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
      } = Ye(),
      { t: g } = xt(),
      [m, h] = p.useState("dispensing_shelves"),
      [u, j] = p.useState("1"),
      [b, _] = p.useState("1"),
      [k, f] = p.useState(""),
      [d, x] = p.useState(null),
      [D, R] = p.useState(0),
      [E, I] = p.useState(0),
      [F, oe] = p.useState(!1);
    p.useEffect(() => {
      e &&
        (h("dispensing_shelves"),
        j("1"),
        _("1"),
        f(""),
        x(null),
        R(0),
        I(0),
        oe(!1));
    }, [e]),
      p.useEffect(() => {
        d && (R(d.row), I(d.col));
      }, [d]);
    const A = () => {
        const q = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((re) => {
              re.gird_position && q.add(re.gird_position);
            }),
          q
        );
      },
      X = () => {
        const q = A(),
          re = [];
        if (q.size === 0) return re.push({ row: 0, col: 0 }), re;
        const xe = [];
        q.forEach((B) => {
          const [se, H] = B.split(",").map(Number);
          xe.push({ row: se, col: H });
        });
        const ce = new Set();
        return (
          xe.forEach(({ row: B, col: se }) => {
            ce.add(`${B},${se + 1}`),
              ce.add(`${B + 1},${se}`),
              se > 0 && ce.add(`${B},${se - 1}`),
              B > 0 && ce.add(`${B - 1},${se}`);
          }),
          ce.forEach((B) => {
            if (!q.has(B)) {
              const [se, H] = B.split(",").map(Number);
              se >= 0 && H >= 0 && re.push({ row: se, col: H });
            }
          }),
          q.has("0,1") ||
            re.some((se) => se.row === 0 && se.col === 1) ||
            re.push({ row: 0, col: 1 }),
          q.has("1,0") ||
            re.some((se) => se.row === 1 && se.col === 0) ||
            re.push({ row: 1, col: 0 }),
          re.sort((B, se) =>
            B.row === se.row ? B.col - se.col : B.row - se.row
          )
        );
      },
      ae = (q) => {
        x(q);
      },
      S = (q) => {
        R(q), x({ row: q, col: E });
      },
      v = (q) => {
        I(q), x({ row: D, col: q });
      },
      G = d && !A().has(`${d.row},${d.col}`) && d.row >= 0 && d.col >= 0,
      y = async () => {
        if (!(!d || !n || !G)) {
          oe(!0);
          try {
            const q = `${d.row},${d.col}`,
              re = Nc.find((ce) => ce.value === m);
            let xe;
            re != null && re.isShelf
              ? (xe = await De.addMedMapShelf({
                  Master_GUID: n.GUID,
                  position: q,
                  width: u,
                  height: b,
                  ip_light: k,
                  type: m,
                }))
              : (xe = await De.addMedMapDrawer({
                  Master_GUID: n.GUID,
                  position: q,
                  width: u,
                  height: b,
                  ip_drawer: k,
                  type: m,
                })),
              xe.Code === 200
                ? (a("新增成功", "success"), t(), c(!1), await T())
                : a(`新增失敗：${xe.Result || "未知錯誤"}`, "error");
          } catch (q) {
            console.error("Add container failed:", q),
              a("新增失敗：網路錯誤", "error");
          } finally {
            oe(!1);
          }
        }
      },
      T = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const q = await De.getMedMapByDepartment(s);
          if (q.Code === 200 && q.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const re = Ut.convertMedMapApiToFakeData(q.Data);
            if (!Ut.validateConvertedData(re)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(re), console.log("✅ 藥品地圖資料已更新");
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
      N = () => {
        t();
      },
      V = () => {
        const q = A(),
          re = X(),
          xe = [...q]
            .map((P) => {
              const [ue, U] = P.split(",").map(Number);
              return { row: ue, col: U };
            })
            .concat(re);
        xe.length === 0 && xe.push({ row: 0, col: 0 });
        const ce = Math.max(...xe.map((P) => P.row)),
          B = Math.max(...xe.map((P) => P.col)),
          se = Math.min(...xe.map((P) => P.row)),
          H = Math.min(...xe.map((P) => P.col)),
          ye = ce - se + 1,
          Se = B - H + 1;
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
                style: { gridTemplateColumns: `repeat(${Se}, 1fr)` },
                children: Array.from({ length: ye * Se }, (P, ue) => {
                  const U = Math.floor(ue / Se) + se,
                    M = (ue % Se) + H,
                    ne = `${U},${M}`,
                    fe = q.has(ne),
                    z = re.some(($) => $.row === U && $.col === M),
                    C =
                      (d == null ? void 0 : d.row) === U &&
                      (d == null ? void 0 : d.col) === M;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => z && ae({ row: U, col: M }),
                      disabled: fe || !z,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      fe
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : C
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : z
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: fe ? "已占用" : z ? "可選擇" : "不可用",
                      children: fe ? "占用" : `${U},${M}`,
                    },
                    ne
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
              onClick: N,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "1000px" },
              onClick: (q) => q.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(bt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增層架/抽屜",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: N,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ge, { className: "w-6 h-6" }),
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
                            children: Nc.map((q) =>
                              r.jsxs(
                                "label",
                                {
                                  className: `flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                    m === q.value
                                      ? "border-blue-500 bg-blue-50"
                                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                  }`,
                                  children: [
                                    r.jsx("input", {
                                      type: "radio",
                                      name: "containerType",
                                      value: q.value,
                                      checked: m === q.value,
                                      onChange: (re) => h(re.target.value),
                                      className:
                                        "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                    }),
                                    r.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        q.icon,
                                        r.jsx("span", {
                                          className:
                                            "font-medium text-gray-900",
                                          children: q.label,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                q.value
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
                                value: u,
                                onChange: (q) => j(q.target.value),
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
                                onChange: (q) => _(q.target.value),
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
                            value: k,
                            onChange: (q) => f(q.target.value),
                            placeholder: "請輸入 IP 位址",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                          }),
                        ],
                      }),
                      V(),
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
                                    value: D,
                                    onChange: (q) =>
                                      S(parseInt(q.target.value) || 0),
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
                                    value: E,
                                    onChange: (q) =>
                                      v(parseInt(q.target.value) || 0),
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
                                G
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: G
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
                                  ((ie = n == null ? void 0 : n.contents) ==
                                  null
                                    ? void 0
                                    : ie.length) || 0,
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
                      onClick: N,
                      disabled: F,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: g("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: y,
                      disabled: !G || F,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        F && r.jsx(Ct, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: F ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  Ph = () => {
    var ae;
    const {
        addSubContainerModalOpen: e,
        closeAddSubContainerModal: t,
        selectedParentContainerForAdd: n,
        selectedDepartmentType: s,
        setApiDepartmentData: o,
        setIsLoadingMedMap: l,
        showNotification: a,
        triggerRefresh: i,
        setSidebarOpen: c,
      } = Ye(),
      { t: g } = xt(),
      [m, h] = p.useState(null),
      [u, j] = p.useState(0),
      [b, _] = p.useState(0),
      [k, f] = p.useState(!1);
    p.useEffect(() => {
      e && (h(null), j(0), _(0), f(!1));
    }, [e]),
      p.useEffect(() => {
        m && (j(m.row), _(m.col));
      }, [m]);
    const d = () => {
        const S = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((v) => {
              v.type === "sub_container" &&
                v.gird_position &&
                S.add(v.gird_position);
            }),
          S
        );
      },
      x = () => {
        const S = d(),
          v = [];
        if (S.size === 0) return v.push({ row: 0, col: 0 }), v;
        const G = [];
        S.forEach((T) => {
          const [N, V] = T.split(",").map(Number);
          G.push({ row: N, col: V });
        });
        const y = new Set();
        return (
          G.forEach(({ row: T, col: N }) => {
            y.add(`${T},${N + 1}`),
              y.add(`${T + 1},${N}`),
              N > 0 && y.add(`${T},${N - 1}`),
              T > 0 && y.add(`${T - 1},${N}`);
          }),
          y.forEach((T) => {
            if (!S.has(T)) {
              const [N, V] = T.split(",").map(Number);
              N >= 0 && V >= 0 && v.push({ row: N, col: V });
            }
          }),
          S.has("0,1") ||
            v.some((N) => N.row === 0 && N.col === 1) ||
            v.push({ row: 0, col: 1 }),
          S.has("1,0") ||
            v.some((N) => N.row === 1 && N.col === 0) ||
            v.push({ row: 1, col: 0 }),
          v.sort((T, N) => (T.row === N.row ? T.col - N.col : T.row - N.row))
        );
      },
      D = (S) => {
        h(S);
      },
      R = (S) => {
        j(S), h({ row: S, col: b });
      },
      E = (S) => {
        _(S), h({ row: u, col: S });
      },
      I = m && !d().has(`${m.row},${m.col}`) && m.row >= 0 && m.col >= 0,
      F = async () => {
        if (!(!m || !n || !I)) {
          f(!0);
          try {
            const S = `${m.row},${m.col}`,
              v = await De.addSubSection(n.GUID, S);
            v.Code === 200
              ? (a("新增成功", "success"), t(), c(!1), await oe())
              : a(`新增失敗：${v.Result || "未知錯誤"}`, "error");
          } catch (S) {
            console.error("Add sub container failed:", S),
              a("新增失敗：網路錯誤", "error");
          } finally {
            f(!1);
          }
        }
      },
      oe = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const S = await De.getMedMapByDepartment(s);
          if (S.Code === 200 && S.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const v = Ut.convertMedMapApiToFakeData(S.Data);
            if (!Ut.validateConvertedData(v)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(v), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", S),
              a("資料更新失敗：API 錯誤", "error");
        } catch (S) {
          console.error("💥 重新獲取藥品地圖資料失敗:", S),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      A = () => {
        t();
      },
      X = () => {
        const S = d(),
          v = x(),
          G = [...S]
            .map((re) => {
              const [xe, ce] = re.split(",").map(Number);
              return { row: xe, col: ce };
            })
            .concat(v);
        G.length === 0 && G.push({ row: 0, col: 0 });
        const y = Math.max(...G.map((re) => re.row)),
          T = Math.max(...G.map((re) => re.col)),
          N = Math.min(...G.map((re) => re.row)),
          V = Math.min(...G.map((re) => re.col)),
          ie = y - N + 1,
          q = T - V + 1;
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
                style: { gridTemplateColumns: `repeat(${q}, 1fr)` },
                children: Array.from({ length: ie * q }, (re, xe) => {
                  const ce = Math.floor(xe / q) + N,
                    B = (xe % q) + V,
                    se = `${ce},${B}`,
                    H = S.has(se),
                    ye = v.some((P) => P.row === ce && P.col === B),
                    Se =
                      (m == null ? void 0 : m.row) === ce &&
                      (m == null ? void 0 : m.col) === B;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => ye && D({ row: ce, col: B }),
                      disabled: H || !ye,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      H
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : Se
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : ye
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: H ? "已占用" : ye ? "可選擇" : "不可用",
                      children: H ? "占用" : `${ce},${B}`,
                    },
                    se
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
              onClick: A,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "800px" },
              onClick: (S) => S.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(bt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增虛擬容器",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: A,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ge, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      X(),
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
                                    value: u,
                                    onChange: (S) =>
                                      R(parseInt(S.target.value) || 0),
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
                                    value: b,
                                    onChange: (S) =>
                                      E(parseInt(S.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          m &&
                            r.jsx("div", {
                              className: `text-sm p-2 rounded ${
                                I
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: I
                                ? `已選擇位置：${m.row},${m.col}`
                                : `位置 ${m.row},${m.col} 已被占用或無效`,
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
                                  ((ae = n == null ? void 0 : n.contents) ==
                                  null
                                    ? void 0
                                    : ae.filter(
                                        (S) => S.type === "sub_container"
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
                      onClick: A,
                      disabled: k,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: g("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: F,
                      disabled: !I || k,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        k && r.jsx(Ct, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: k ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  Th = ({ isOpen: e, onClose: t, storeShelf: n }) => {
    const {
        showNotification: s,
        medicineList: o,
        isLoadingMedicines: l,
        addStockToShelf: a,
        selectedStockItemForEdit: i,
        storeItemModalMode: c,
        updateStockInShelf: g,
      } = Ye(),
      [m, h] = p.useState(""),
      [u, j] = p.useState(""),
      [b, _] = p.useState(""),
      [k, f] = p.useState(""),
      [d, x] = p.useState([]),
      [D, R] = p.useState([]),
      [E, I] = p.useState(""),
      [F, oe] = p.useState(""),
      [A, X] = p.useState(""),
      [ae, S] = p.useState(null),
      [v, G] = p.useState([]),
      [y, T] = p.useState(""),
      [N, V] = p.useState(!1),
      ie = p.useRef(null);
    p.useEffect(() => {
      if (e && c === "edit" && i) {
        h(i.code || ""), j(i.name || ""), _(""), f(i.material_no || "");
        const P = i.lot || [],
          ue = i.expiry_date || [],
          U = i.qty || [],
          M = [];
        if (P.length > 0 || ue.length > 0 || U.length > 0) {
          const ne = Math.max(P.length, ue.length, U.length),
            fe = [];
          for (let z = 0; z < ne; z++) {
            const C = ue[z] || "";
            let $ = "";
            C && ($ = C.split("T")[0]),
              ($ = $.replace(/\//g, "-")),
              fe.push({
                id: `batch_${Date.now()}_${z}`,
                lot: P[z] || "",
                expiryDate: $,
                qty: String(U[z] || ""),
              }),
              $ && M.push($);
          }
          x(fe), R(M);
        } else x([]), R([]);
        I(i.location || ""), oe(i.led_index || ""), X(i.ip || "");
      } else if (e && c === "add")
        if (
          (h(""),
          j(""),
          _(""),
          f(""),
          x([]),
          R([]),
          oe(""),
          X(""),
          n && n.medMapStock && n.medMapStock.length > 0)
        ) {
          const P = n.medMapStock.map((U) => Number(U.location));
          let ue = 0;
          for (; P.includes(ue); ) ue++;
          I(String(ue));
        } else I("0");
    }, [e, c, i, n]),
      p.useEffect(() => {
        const P = (ue) => {
          ie.current && !ie.current.contains(ue.target) && S(null);
        };
        return (
          document.addEventListener("mousedown", P),
          () => {
            document.removeEventListener("mousedown", P);
          }
        );
      }, []);
    const q = (P, ue) => {
        if (!ue.trim()) {
          G([]);
          return;
        }
        const U = ue.toLowerCase(),
          M = o.filter((ne) => {
            var fe, z, C, $;
            switch (P) {
              case "code":
                return (fe = ne.CODE) == null
                  ? void 0
                  : fe.toLowerCase().includes(U);
              case "name":
                return (z = ne.NAME) == null
                  ? void 0
                  : z.toLowerCase().includes(U);
              case "chineseName":
                return (C = ne.CHT_NAME) == null
                  ? void 0
                  : C.toLowerCase().includes(U);
              case "skdiacode":
                return ($ = ne.SKDIACODE) == null
                  ? void 0
                  : $.toLowerCase().includes(U);
              default:
                return !1;
            }
          });
        G(M.slice(0, 50));
      },
      re = (P, ue) => {
        switch ((S(P), P)) {
          case "code":
            h(ue);
            break;
          case "name":
            j(ue);
            break;
          case "chineseName":
            _(ue);
            break;
          case "skdiacode":
            f(ue);
            break;
        }
        q(P, ue);
      },
      xe = (P, ue) => {
        switch (ue) {
          case "code":
            h(P.CODE || ""),
              j(P.NAME || ""),
              _(P.CHT_NAME || ""),
              f(P.SKDIACODE || "");
            break;
          case "name":
            h(P.CODE || ""),
              j(P.NAME || ""),
              _(P.CHT_NAME || ""),
              f(P.SKDIACODE || "");
            break;
          case "chineseName":
            h(P.CODE || ""),
              j(P.NAME || ""),
              _(P.CHT_NAME || ""),
              f(P.SKDIACODE || "");
            break;
          case "skdiacode":
            h(P.CODE || ""),
              j(P.NAME || ""),
              _(P.CHT_NAME || ""),
              f(P.SKDIACODE || "");
            break;
        }
        T(P.GUID), S(null), G([]);
      },
      ce = () => {
        const P = {
          id: `batch_${Date.now()}`,
          lot: "",
          expiryDate: "",
          qty: "",
        };
        x([...d, P]);
      },
      B = (P) => {
        x(d.filter((ue) => ue.id !== P));
      },
      se = (P, ue, U) => {
        x(d.map((M) => (M.id === P ? { ...M, [ue]: U } : M)));
      },
      H = async () => {
        var M;
        if (!m || !u) {
          s("請選擇藥品", "error");
          return;
        }
        if (!n || !n.GUID) {
          s("層架資訊錯誤", "error");
          return;
        }
        const P = [],
          ue = [],
          U = [];
        d.forEach((ne) => {
          P.push(ne.lot || "");
          let fe = "";
          ne.expiryDate && (fe = `${ne.expiryDate}`),
            ue.push(fe),
            U.push(ne.qty ? `${Number(ne.qty)}` : "0");
        });
        try {
          if (c === "edit" && i) {
            const ne = {
                GUID: i.GUID,
                code: m,
                device_type: "EPD290",
                expiry_date: ue,
                ip_light: A || "",
                led_index: F || "",
                location: E || "",
                lot: P,
                material_no: k || "",
                name: u,
                qty: U,
                shelf_guid: n.GUID,
              },
              fe = await De.updateStock([ne]);
            if (fe.Code === 200) {
              g(n.GUID, i.GUID, ne), console.log("檢查有無貨物批次被刪除");
              const z = D.filter((C) => !ue.includes(C));
              if ((console.log(z), z.length > 0)) {
                console.log("🗑️ 檢測到被刪除的批次效期:", z);
                let C = "";
                try {
                  i.Value &&
                    ((C = JSON.parse(i.Value).GUID || ""),
                    console.log("📦 從 Value 欄位解析出的 GUID:", C));
                } catch ($) {
                  console.error("❌ 解析 Value 欄位失敗:", $);
                }
                if (C) {
                  for (const $ of z)
                    try {
                      console.log(`🗑️ 正在刪除批次，GUID: ${C}, 效期: ${$}`);
                      const Y = await De.stockDeleteValidityPeriod(C, $);
                      Y.Code === 200
                        ? console.log(`✅ 成功刪除批次效期: ${$}`)
                        : console.warn(
                            `⚠️ 刪除批次失敗 (效期: ${$}):`,
                            Y.Result
                          );
                    } catch (Y) {
                      console.error(`❌ 刪除批次時發生錯誤 (效期: ${$}):`, Y);
                    }
                  s(`更新貨物成功，已刪除 ${z.length} 個批次`, "success");
                } else
                  console.warn("⚠️ 無法取得 Value GUID，跳過批次刪除"),
                    s("更新貨物成功（但無法刪除批次）", "success");
              } else s("更新貨物成功", "success");
              Se();
            } else s(fe.Result || "更新貨物失敗", "error");
          } else {
            const ne = {
                code: m,
                device_type: "EPD290",
                expiry_date: ue,
                ip_light: A || "",
                led_index: F || "",
                location: E || "",
                lot: P,
                material_no: k || "",
                name: u,
                qty: U,
                shelf_guid: n.GUID,
              },
              fe = await De.addStock([ne]);
            fe.Code === 200
              ? (a(n.GUID, {
                  GUID:
                    ((M = fe.Data) == null ? void 0 : M.GUID) ||
                    `stock_${Date.now()}`,
                  ...ne,
                }),
                s("新增貨物成功", "success"),
                Se())
              : s(fe.Result || "新增貨物失敗", "error");
          }
        } catch (ne) {
          console.error("貨物操作錯誤:", ne),
            s(
              c === "edit"
                ? "更新貨物失敗，請稍後再試"
                : "新增貨物失敗，請稍後再試",
              "error"
            );
        }
      },
      ye = (P, ue) => {
        console.log("📸 掃描成功，填入藥品資料:", ue),
          h(ue[0].CODE || ue[0].code || ""),
          j(ue[0].NAME || ue[0].name || ""),
          _(ue[0].CHT_NAME || ue[0].cht_name || ""),
          f(ue[0].SKDIACODE || ue[0].skdiacode || ue[0].material_no || ""),
          T(ue[0].GUID || ""),
          V(!1),
          s("已自動填入藥品資料", "success");
      },
      Se = () => {
        h(""),
          j(""),
          _(""),
          f(""),
          x([]),
          R([]),
          I(""),
          oe(""),
          X(""),
          T(""),
          G([]),
          S(null),
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
                      onClick: Se,
                      className:
                        "p-2 hover:bg-gray-100 rounded-full transition-colors",
                      children: r.jsx(Ge, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "p-6 space-y-6",
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
                            className: "space-y-4",
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
                                    onClick: () => V(!0),
                                    className:
                                      "hover:bg-gray-100 rounded-lg transition-colors p-2",
                                    title: "掃描條碼",
                                    children: r.jsx(Pr, {
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
                                    ref: ae === "code" ? ie : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥碼",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: m,
                                        onChange: (P) =>
                                          re("code", P.target.value),
                                        onFocus: () => S("code"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品代碼",
                                      }),
                                      ae === "code" &&
                                        v.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: v.map((P) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () => xe(P, "code"),
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
                                                        children: P.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: P.NAME,
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
                                                        children: P.CHT_NAME,
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
                                                          P.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              P.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: ae === "name" ? ie : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥名",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: u,
                                        onChange: (P) =>
                                          re("name", P.target.value),
                                        onFocus: () => S("name"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品名稱",
                                      }),
                                      ae === "name" &&
                                        v.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: v.map((P) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () => xe(P, "name"),
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
                                                        children: P.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: P.NAME,
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
                                                        children: P.CHT_NAME,
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
                                                          P.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              P.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: ae === "chineseName" ? ie : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "中文名",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: b,
                                        onChange: (P) =>
                                          re("chineseName", P.target.value),
                                        onFocus: () => S("chineseName"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入中文名稱",
                                      }),
                                      ae === "chineseName" &&
                                        v.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: v.map((P) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  xe(P, "chineseName"),
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
                                                        children: P.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: P.NAME,
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
                                                        children: P.CHT_NAME,
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
                                                          P.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              P.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: ae === "skdiacode" ? ie : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "料號",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: k,
                                        onChange: (P) =>
                                          re("skdiacode", P.target.value),
                                        onFocus: () => S("skdiacode"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入料號",
                                      }),
                                      ae === "skdiacode" &&
                                        v.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: v.map((P) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  xe(P, "skdiacode"),
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
                                                        children: P.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: P.NAME,
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
                                                        children: P.CHT_NAME,
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
                                                          P.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              P.GUID
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
                            className: "space-y-4",
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
                                    onClick: ce,
                                    className:
                                      "flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
                                    title: "新增批次",
                                    children: [
                                      r.jsx(bt, { className: "w-4 h-4" }),
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
                                    children: d.map((P, ue) =>
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
                                                  children: ["批次 ", ue + 1],
                                                }),
                                                r.jsx("button", {
                                                  onClick: () => B(P.id),
                                                  className:
                                                    "p-1 text-red-600 hover:bg-red-50 rounded transition-colors",
                                                  title: "刪除批次",
                                                  children: r.jsx(yr, {
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
                                                      value: P.lot,
                                                      onChange: (U) =>
                                                        se(
                                                          P.id,
                                                          "lot",
                                                          U.target.value
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
                                                      value: P.expiryDate,
                                                      onChange: (U) =>
                                                        se(
                                                          P.id,
                                                          "expiryDate",
                                                          U.target.value
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
                                                      value: P.qty,
                                                      onChange: (U) =>
                                                        se(
                                                          P.id,
                                                          "qty",
                                                          U.target.value
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
                                        P.id
                                      )
                                    ),
                                  }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "space-y-4",
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
                                        value: E,
                                        onChange: (P) => I(P.target.value),
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
                                        children: "LED 索引",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: F,
                                        onChange: (P) => oe(P.target.value),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入 LED 索引",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "電子紙 IP",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: A,
                                        onChange: (P) => X(P.target.value),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入電子紙 IP",
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
                      onClick: Se,
                      className:
                        "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: H,
                      disabled: l || o.length === 0,
                      className:
                        "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400",
                      children: c === "edit" ? "修改" : "新增",
                    }),
                  ],
                }),
              ],
            }),
            r.jsx(qo, {
              isOpen: N,
              onClose: () => V(!1),
              onScanSuccess: ye,
              mode: "set_store_med_mode",
            }),
          ],
        })
      : null;
  },
  Rh = ({ isOpen: e, onClose: t }) => {
    const {
        selectedDepartmentType: n,
        apiDepartmentData: s,
        allDepartmentsList: o,
        showNotification: l,
        triggerRefresh: a,
        reloadMedMapData: i,
      } = Ye(),
      [c, g] = p.useState(null),
      [m, h] = p.useState(""),
      [u, j] = p.useState(!1),
      b = () => (s ? s.map((I) => I.name) : []),
      _ = () => (!n || !o ? [] : o.filter((I) => I["department_type "] === n)),
      k = () => {
        const I = b();
        return _().filter((oe) => !I.includes(oe.name));
      },
      f = () => (s ? s.map((I) => I.gird_position) : []),
      d = () => {
        const I = f(),
          F = [];
        for (let oe = 0; oe < 10; oe++)
          for (let A = 0; A < 10; A++) {
            const X = `${oe},${A}`;
            I.includes(X) || F.push(X);
          }
        return F.slice(0, 20);
      };
    p.useEffect(() => {
      e && (g(null), h(""));
    }, [e]);
    const x = async () => {
        if (!c) {
          l("請選擇部門", "error");
          return;
        }
        if (!m) {
          l("請選擇位置", "error");
          return;
        }
        if (!n) {
          l("部門分類資訊錯誤", "error");
          return;
        }
        j(!0);
        try {
          const I = await De.addMedMap(c.name, c.type, m);
          I.Code === 200
            ? (l("新增部門成功", "success"), await i(), D())
            : l(I.Result || "新增部門失敗", "error");
        } catch (I) {
          console.error("新增部門錯誤:", I),
            l("新增部門失敗，請稍後再試", "error");
        } finally {
          j(!1);
        }
      },
      D = () => {
        g(null), h(""), t();
      };
    if (!e) return null;
    const R = k(),
      E = d();
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
                onClick: D,
                className:
                  "p-2 hover:bg-gray-100 rounded-full transition-colors",
                children: r.jsx(Ge, { className: "w-5 h-5" }),
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
                  R.length === 0
                    ? r.jsx("div", {
                        className: "text-center py-8",
                        children: r.jsx("p", {
                          className: "text-gray-600",
                          children: "所有部門都已新增",
                        }),
                      })
                    : r.jsx("div", {
                        className: "space-y-2",
                        children: R.map((I) =>
                          r.jsxs(
                            "label",
                            {
                              className: `flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                (c == null ? void 0 : c.name) === I.name
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                              }`,
                              children: [
                                r.jsx("input", {
                                  type: "radio",
                                  name: "department",
                                  value: I.name,
                                  checked:
                                    (c == null ? void 0 : c.name) === I.name,
                                  onChange: () => g(I),
                                  className:
                                    "w-4 h-4 text-blue-600 focus:ring-blue-500",
                                }),
                                r.jsxs("div", {
                                  className: "ml-3",
                                  children: [
                                    r.jsx("div", {
                                      className:
                                        "text-sm font-medium text-gray-900",
                                      children: I.name,
                                    }),
                                    r.jsx("div", {
                                      className: "text-xs text-gray-500",
                                      children: I.type,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            I.name
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
                    E.length === 0
                      ? r.jsx("div", {
                          className: "text-center py-8",
                          children: r.jsx("p", {
                            className: "text-gray-600",
                            children: "沒有可用的位置",
                          }),
                        })
                      : r.jsx("div", {
                          className: "grid grid-cols-5 gap-2",
                          children: E.map((I) => {
                            const [F, oe] = I.split(",");
                            return r.jsxs(
                              "button",
                              {
                                onClick: () => h(I),
                                className: `p-3 border-2 rounded-lg text-sm font-medium transition-all ${
                                  m === I
                                    ? "border-blue-500 bg-blue-500 text-white"
                                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700"
                                }`,
                                children: ["(", F, ",", oe, ")"],
                              },
                              I
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
                onClick: D,
                className:
                  "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                disabled: u,
                children: "取消",
              }),
              r.jsx("button", {
                onClick: x,
                disabled: !c || !m || u,
                className:
                  "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                children: u ? "新增中..." : "新增",
              }),
            ],
          }),
        ],
      }),
    });
  },
  Ah = ({ isOpen: e, onClose: t, initialBarcode: n = "" }) => {
    const {
        showNotification: s,
        medicineList: o,
        isLoadingMedicines: l,
      } = Ye(),
      [a, i] = p.useState(""),
      [c, g] = p.useState(""),
      [m, h] = p.useState(""),
      [u, j] = p.useState(""),
      [b, _] = p.useState(""),
      [k, f] = p.useState(null),
      [d, x] = p.useState([]),
      [D, R] = p.useState(""),
      [E, I] = p.useState(null),
      [F, oe] = p.useState(!1),
      A = p.useRef(null);
    p.useEffect(() => {
      e && (i(n), g(""), h(""), j(""), _(""), R(""), I(null), f(null));
    }, [e, n]),
      p.useEffect(() => {
        const y = (T) => {
          A.current && !A.current.contains(T.target) && f(null);
        };
        return (
          document.addEventListener("mousedown", y),
          () => {
            document.removeEventListener("mousedown", y);
          }
        );
      }, []);
    const X = (y, T) => {
        if (!T.trim() || l) {
          x([]);
          return;
        }
        const N = T.toLowerCase(),
          V = o.filter((ie) => {
            var q, re, xe, ce;
            switch (y) {
              case "code":
                return (q = ie.CODE) == null
                  ? void 0
                  : q.toLowerCase().includes(N);
              case "name":
                return (re = ie.NAME) == null
                  ? void 0
                  : re.toLowerCase().includes(N);
              case "chineseName":
                return (xe = ie.CHT_NAME) == null
                  ? void 0
                  : xe.toLowerCase().includes(N);
              case "skdiacode":
                return (ce = ie.SKDIACODE) == null
                  ? void 0
                  : ce.toLowerCase().includes(N);
              default:
                return !1;
            }
          });
        x(V.slice(0, 10));
      },
      ae = (y, T) => {
        switch ((f(y), y)) {
          case "code":
            g(T);
            break;
          case "name":
            h(T);
            break;
          case "chineseName":
            j(T);
            break;
          case "skdiacode":
            _(T);
            break;
        }
        X(y, T);
      },
      S = (y) => {
        R(y.GUID),
          I(y),
          g(y.CODE || ""),
          h(y.NAME || ""),
          j(y.CHT_NAME || ""),
          _(y.SKDIACODE || ""),
          f(null),
          x([]);
      },
      v = () => {
        i(""), g(""), h(""), j(""), _(""), R(""), I(null), f(null), x([]), t();
      },
      G = async () => {
        if (!c.trim()) {
          s("藥碼為必填欄位", "error");
          return;
        }
        if (!a.trim()) {
          s("條碼不能為空", "error");
          return;
        }
        oe(!0);
        try {
          let y = [];
          if (E && E.BARCODE2)
            try {
              const N = JSON.parse(E.BARCODE2);
              Array.isArray(N)
                ? (y = [...N])
                : typeof N == "string" && (y = [N]);
            } catch {
              console.warn("解析 BARCODE2 失敗，使用原始值:", E.BARCODE2),
                E.BARCODE2 && (y = [E.BARCODE2]);
            }
          y.includes(a.trim()) || y.push(a.trim()),
            console.log("📋 處理後的 BARCODE2 陣列:", y);
          const T = await De.addMedClouds(
            a.trim(),
            c.trim(),
            JSON.stringify(y),
            E.BARCODE
          );
          T.Code === 200
            ? (s("條碼建立成功", "success"), v())
            : s(T.Result || "建立條碼失敗", "error");
        } catch (y) {
          console.error("建立條碼失敗:", y),
            s("建立條碼失敗，請稍後再試", "error");
        } finally {
          oe(!1);
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
                        children: r.jsx(bt, {
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
                    onClick: v,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                    disabled: F,
                    children: r.jsx(Ge, { className: "w-6 h-6 text-gray-600" }),
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
                          onChange: (y) => ae("code", y.target.value),
                          onFocus: () => f("code"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥碼搜尋...",
                          disabled: F,
                        }),
                        k === "code" &&
                          d.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: d.map((y) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => S(y),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: y.CODE,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: y.NAME,
                                    }),
                                  ],
                                },
                                y.GUID
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
                          value: m,
                          onChange: (y) => ae("name", y.target.value),
                          onFocus: () => f("name"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥名搜尋...",
                          disabled: F,
                        }),
                        k === "name" &&
                          d.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: d.map((y) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => S(y),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: y.NAME,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: y.CODE,
                                    }),
                                  ],
                                },
                                y.GUID
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
                          value: u,
                          onChange: (y) => ae("chineseName", y.target.value),
                          onFocus: () => f("chineseName"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入中文名搜尋...",
                          disabled: F,
                        }),
                        k === "chineseName" &&
                          d.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: d.map((y) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => S(y),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: y.CHT_NAME,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: y.CODE,
                                    }),
                                  ],
                                },
                                y.GUID
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
                          onChange: (y) => ae("skdiacode", y.target.value),
                          onFocus: () => f("skdiacode"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入料號搜尋...",
                          disabled: F,
                        }),
                        k === "skdiacode" &&
                          d.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: d.map((y) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => S(y),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: y.SKDIACODE,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: y.NAME,
                                    }),
                                  ],
                                },
                                y.GUID
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
                      onClick: v,
                      disabled: F,
                      className:
                        "px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: G,
                      disabled: F || !c.trim(),
                      className:
                        "px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: F ? "建立中..." : "確認建立",
                    }),
                  ],
                }),
              }),
            ],
          }),
        })
      : null;
  },
  $h = ({
    container: e,
    highlightedMedicineCode: t,
    pendingRequisitionCodes: n = [],
    onMedicineClick: s,
  }) => {
    const o = () => {
        try {
          const h = localStorage.getItem("medMap_setting");
          if (h) return JSON.parse(h).light_color || "red";
        } catch (h) {
          console.error("讀取高亮顏色設定失敗:", h);
        }
        return "red";
      },
      l = (h) => {
        const [u, j] = h.split(",").map(Number);
        return { row: u || 0, col: j || 0 };
      },
      a = (h) => {
        if (!h || h.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const u = h.map((k) => ({
            ...k,
            gridPos: l(k.gird_position || "0,0"),
          })),
          j = Math.max(...u.map((k) => k.gridPos.row), 0),
          b = Math.max(...u.map((k) => k.gridPos.col), 0);
        return {
          sortedContents: u.sort((k, f) =>
            k.gridPos.row !== f.gridPos.row
              ? k.gridPos.row - f.gridPos.row
              : k.gridPos.col - f.gridPos.col
          ),
          maxRow: j,
          maxCol: b,
        };
      },
      i = (h) => {
        switch (h) {
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
      c = (h) => {
        const u = [
          "med_box",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
        ].includes(h.type);
        return r.jsx(
          "div",
          {
            className: `${u ? "shadow-sm border-2 p-1 rounded-lg" : ""} ${i(
              h.type
            )} flex flex-col max-w-full min-w-0 h-full overflow-hidden`,
            children: r.jsx("div", {
              className: "flex-1 min-w-0 overflow-hidden",
              children: m(h),
            }),
          },
          h.GUID
        );
      },
      g = (h, u, j) => {
        const b = {};
        return (
          h.forEach((_) => {
            const k = l(_.gird_position || "0,0");
            b[`${k.row},${k.col}`] = _;
          }),
          r.jsx("table", {
            className: "w-full h-full max-w-full table-fixed",
            style: { borderCollapse: "separate", borderSpacing: "0px" },
            children: r.jsx("tbody", {
              children: Array.from({ length: u + 1 }, (_, k) =>
                r.jsx(
                  "tr",
                  {
                    children: Array.from({ length: j + 1 }, (f, d) => {
                      const x = `${k},${d}`,
                        D = b[x];
                      return D
                        ? r.jsx(
                            "td",
                            {
                              className:
                                "align-top bg-transparent overflow-hidden",
                              style: {
                                width: `${100 / (j + 1)}%`,
                                maxWidth: `${100 / (j + 1)}%`,
                              },
                              children: c(D),
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
                  k
                )
              ),
            }),
          })
        );
      },
      m = (h) => {
        switch (h.type) {
          case "parent_container":
            if (h.contents && h.contents.length > 0) {
              const { sortedContents: u, maxRow: j, maxCol: b } = a(h.contents);
              return g(u, j, b);
            } else return r.jsx("div", { className: "" });
          case "sub_container":
            if (h.contents && h.contents.length > 0) {
              const { sortedContents: u, maxRow: j, maxCol: b } = a(h.contents);
              return g(u, j, b);
            } else return r.jsx("div", { className: "" });
          case "dispensing_shelves":
            if (h.contents && h.contents.length > 0) {
              const { sortedContents: u, maxRow: j, maxCol: b } = a(h.contents);
              return g(u, j, b);
            } else
              return r.jsx("div", {
                className:
                  "border-2 rounded-lg flex py-3 items-center justify-center h-full text-gray-400 text-sm",
                children: "無藥盒",
              });
          case "store_shelves":
            if (h.medMapStock && h.medMapStock.length > 0) {
              const u = h.medMapStock,
                j = u.length,
                b = j > 0 ? 100 / j : 100;
              return r.jsx("div", {
                className: "flex h-full w-full overflow-hidden",
                children: u.map((_, k) => {
                  let f = 0;
                  _.qty.forEach((R) => {
                    f += +R;
                  });
                  const d = t && (_.code == t || _.material_no == t),
                    x = n.includes(_.code) || n.includes(_.material_no),
                    D = o();
                  return r.jsxs(
                    "div",
                    {
                      className: `border-2 rounded-lg border-gray-300 p-2 flex flex-col text-gray-800 justify-center items-center transition-colors cursor-pointer min-w-0 overflow-hidden ${
                        x
                          ? "highlight-breathe-red"
                          : d
                          ? `highlight-breathe-${D}`
                          : ""
                      }`,
                      style: {
                        width: `${b}%`,
                        maxWidth: `${b}%`,
                        flexShrink: 0,
                      },
                      onClick: () =>
                        s && s({ code: _.code || _.material_no, name: _.name }),
                      children: [
                        r.jsx("div", {
                          className:
                            "text-sm font-semibold truncate w-full text-center whitespace-normal overflow-hidden",
                          children: _.name || _.material_no,
                        }),
                        r.jsxs("div", {
                          className: "text-xs mt-1",
                          children: ["數量: ", f || 0],
                        }),
                      ],
                    },
                    _.GUID || k
                  );
                }),
              });
            } else if (h.contents && h.contents.length > 0) {
              const { sortedContents: u, maxRow: j, maxCol: b } = a(h.contents);
              return g(u, j, b);
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
            if (h.med_info && h.med_info.length > 0) {
              const u = t && h.med_info.some((_) => _.code == t),
                j = h.med_info.some((_) => n.includes(_.code)),
                b = o();
              return r.jsx("div", {
                className: `text-sm text-center h-full p-2 flex flex-col text-gray-800 justify-center transition-colors cursor-pointer overflow-hidden ${
                  j
                    ? "highlight-breathe-red"
                    : u
                    ? `highlight-breathe-${b}`
                    : ""
                }`,
                onClick: () => s && s(h.med_info[0]),
                children: r.jsx("div", {
                  className: "font-semibold truncate w-full overflow-hidden",
                  children: h.med_info[0].name || "-",
                }),
              });
            } else
              return r.jsx("div", {
                className:
                  "flex items-center justify-center h-full text-gray-400 text-xs",
                children: "空藥盒",
              });
          default:
            if (h.contents && h.contents.length > 0) {
              const { sortedContents: u, maxRow: j, maxCol: b } = a(h.contents);
              return g(u, j, b);
            } else
              return r.jsxs("div", {
                className:
                  "flex items-center justify-center h-full text-gray-400 text-sm",
                children: ["未知類型: ", h.type],
              });
        }
      };
    return e
      ? r.jsx("div", {
          className: "w-full h-full overflow-auto",
          children: r.jsx("div", {
            className: "max-w-full h-full",
            children: m(e),
          }),
        })
      : r.jsx("div", {
          className: "flex items-center justify-center h-full text-gray-400",
          children: r.jsx("p", { children: "無容器資料" }),
        });
  },
  Oh = ({ isOpen: e, onClose: t, type: n, data: s, onApprove: o }) => {
    const [l, a] = p.useState("0"),
      [i, c] = p.useState("0"),
      [g, m] = p.useState(null),
      [h, u] = p.useState(null),
      [j, b] = p.useState(!1),
      [_, k] = p.useState(!1),
      [f, d] = p.useState(""),
      [x, D] = p.useState(""),
      [R, E] = p.useState([]),
      [I, F] = p.useState([]),
      [oe, A] = p.useState([]),
      [X, ae] = p.useState(!1),
      [S, v] = p.useState(!1),
      G = p.useRef(null),
      y = p.useRef(null),
      T = p.useRef(null),
      N = p.useRef(null);
    p.useEffect(() => {
      if (e && s) {
        const M = s.issuedQuantity || s.requestedQuantity || "0";
        a(M), c(M), m(null), u(null), b(!1);
        const ne = localStorage.getItem("medMap_setting");
        if (ne)
          try {
            const fe = JSON.parse(ne);
            d(fe.default_person || ""), D(fe.default_person_id || "");
          } catch (fe) {
            console.error("讀取設定失敗:", fe), d(""), D("");
          }
        else d(""), D("");
        V();
      }
    }, [e, s]),
      p.useEffect(() => {
        const M = (ne) => {
          T.current &&
            !T.current.contains(ne.target) &&
            G.current &&
            !G.current.contains(ne.target) &&
            ae(!1),
            N.current &&
              !N.current.contains(ne.target) &&
              y.current &&
              !y.current.contains(ne.target) &&
              v(!1);
        };
        return (
          document.addEventListener("mousedown", M),
          () => document.removeEventListener("mousedown", M)
        );
      }, []);
    const V = async () => {
        try {
          const M = await De.getAllStaffInfo();
          M.Code === 200 && M.Data && E(M.Data);
        } catch (M) {
          console.error("獲取人員資料失敗:", M);
        }
      },
      ie = (M) => {
        if ((d(M), M.trim() === "")) {
          F([]), ae(!1);
          return;
        }
        const ne = R.filter(
          (fe) => fe.name && fe.name.toLowerCase().includes(M.toLowerCase())
        );
        F(ne), ae(ne.length > 0);
      },
      q = (M) => {
        if ((D(M), M.trim() === "")) {
          A([]), v(!1);
          return;
        }
        const ne = R.filter(
          (fe) => fe.ID && fe.ID.toLowerCase().includes(M.toLowerCase())
        );
        A(ne), v(ne.length > 0);
      },
      re = (M) => {
        d(M.name), D(M.ID), ae(!1);
      },
      xe = (M) => {
        d(M.name), D(M.ID), v(!1);
      };
    if (!e || !s) return null;
    const ce = (M) => {
        if (j) a(M), c(M), b(!1);
        else {
          const ne = l === "0" ? M : l + M;
          a(ne), c(ne);
        }
      },
      B = (M) => {
        g && h !== null && !j && se(), u(i), m(M), b(!0);
      },
      se = () => {
        if (g === null || h === null) return;
        const M = parseFloat(h),
          ne = parseFloat(i);
        let fe = 0;
        switch (g) {
          case "+":
            fe = M + ne;
            break;
          case "-":
            fe = M - ne;
            break;
          case "×":
            fe = M * ne;
            break;
          case "÷":
            fe = ne !== 0 ? M / ne : 0;
            break;
          default:
            return;
        }
        const z = fe.toString();
        a(z), c(z), m(null), u(null), b(!0);
      },
      H = () => {
        se();
      },
      ye = () => {
        if (j) a("0."), c("0."), b(!1);
        else if (!l.includes(".")) {
          const M = l + ".";
          a(M), c(M);
        }
      },
      Se = () => {
        a("0"), c("0"), m(null), u(null), b(!1);
      },
      P = () => {
        const M = new Date(),
          ne = M.getFullYear(),
          fe = String(M.getMonth() + 1).padStart(2, "0"),
          z = String(M.getDate()).padStart(2, "0"),
          C = String(M.getHours()).padStart(2, "0"),
          $ = String(M.getMinutes()).padStart(2, "0"),
          Y = String(M.getSeconds()).padStart(2, "0");
        return `${ne}-${fe}-${z}T${C}:${$}:${Y}`;
      },
      ue = async () => {
        if (!s) return;
        if (!f.trim()) {
          alert("請輸入核撥人員名稱");
          return;
        }
        const M = n === "requisition" ? "申領" : "撥補";
        if (
          window.confirm(`確認核撥資訊：

藥品名稱：${s.name}
實際撥發量：${l}
核撥人員：${f}${x ? ` (${x})` : ""}

是否確認${M}？`)
        ) {
          k(!0);
          try {
            const fe = P();
            if (n === "requisition") {
              const z = await De.updateRequisitionActualQuantity(s.GUID, l);
              if (z.Code !== 200) {
                alert(`更新實際撥發量失敗：${z.Message || "未知錯誤"}`), k(!1);
                return;
              }
              const C = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuingPerson: f,
                issueTime: fe,
              };
              console.log("申領request", C);
              const $ = await De.updateRequisitionByGuid(C);
              if ($.Code !== 200) {
                alert(`申領過帳失敗：${$.Message || "未知錯誤"}`), k(!1);
                return;
              }
              console.log("✅ 申領核撥成功:", {
                GUID: s.GUID,
                name: s.name,
                actualQuantity: l,
                issuingPerson: f,
                issueTime: fe,
              });
            } else {
              const z = await De.updateDistributionActualQuantity(s.GUID, l);
              if (z.Code !== 200) {
                alert(`更新實際撥發量失敗：${z.Message || "未知錯誤"}`), k(!1);
                return;
              }
              const C = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuer: f,
                issuanceTime: fe,
              };
              console.log("撥補request", C);
              const $ = await De.updateDistributionByGuid(C);
              if ($.Code !== 200) {
                alert(`撥補過帳失敗：${$.Message || "未知錯誤"}`), k(!1);
                return;
              }
              console.log("✅ 撥補核撥成功:", {
                GUID: s.GUID,
                name: s.name,
                actualQuantity: l,
                issuer: f,
                issuanceTime: fe,
              });
            }
            o && (await o()), alert(`${M}核撥成功！`), t();
          } catch (fe) {
            console.error(`${M}核撥失敗:`, fe),
              alert(`${M}核撥失敗，請稍後再試`);
          } finally {
            k(!1);
          }
        }
      },
      U = n === "requisition" ? s.requestedQuantity : s.issuedQuantity;
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
                  children: r.jsx(Ge, { className: "w-5 h-5 text-gray-700" }),
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
                                ref: G,
                                type: "text",
                                value: f,
                                onChange: (M) => ie(M.target.value),
                                onFocus: () => {
                                  f.trim() && ie(f);
                                },
                                placeholder: "人員名稱",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              X &&
                                r.jsx("div", {
                                  ref: T,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: I.map((M, ne) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => re(M),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          r.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: M.ID,
                                          }),
                                          r.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: M.name,
                                          }),
                                        ],
                                      },
                                      ne
                                    )
                                  ),
                                }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "relative",
                            children: [
                              r.jsx("input", {
                                ref: y,
                                type: "text",
                                value: x,
                                onChange: (M) => q(M.target.value),
                                onFocus: () => {
                                  x.trim() && q(x);
                                },
                                placeholder: "人員 ID",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              S &&
                                r.jsx("div", {
                                  ref: N,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: oe.map((M, ne) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => xe(M),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          r.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: M.ID,
                                          }),
                                          r.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: M.name,
                                          }),
                                        ],
                                      },
                                      ne
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
                            children: U || "-",
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
                        onClick: () => ce("7"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "7",
                      }),
                      r.jsx("button", {
                        onClick: () => ce("8"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "8",
                      }),
                      r.jsx("button", {
                        onClick: () => ce("9"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "9",
                      }),
                      r.jsx("button", {
                        onClick: () => B("÷"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "÷",
                      }),
                      r.jsx("button", {
                        onClick: () => ce("4"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "4",
                      }),
                      r.jsx("button", {
                        onClick: () => ce("5"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "5",
                      }),
                      r.jsx("button", {
                        onClick: () => ce("6"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "6",
                      }),
                      r.jsx("button", {
                        onClick: () => B("×"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "×",
                      }),
                      r.jsx("button", {
                        onClick: () => ce("1"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "1",
                      }),
                      r.jsx("button", {
                        onClick: () => ce("2"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "2",
                      }),
                      r.jsx("button", {
                        onClick: () => ce("3"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "3",
                      }),
                      r.jsx("button", {
                        onClick: () => B("-"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "-",
                      }),
                      r.jsx("button", {
                        onClick: () => ce("0"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "0",
                      }),
                      r.jsx("button", {
                        onClick: ye,
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: ".",
                      }),
                      r.jsx("button", {
                        onClick: H,
                        className:
                          "py-4 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors",
                        children: "=",
                      }),
                      r.jsx("button", {
                        onClick: () => B("+"),
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
                  onClick: Se,
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
                  onClick: ue,
                  disabled: _,
                  className:
                    "px-6 py-2.5 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                  children: _ ? "處理中..." : "核撥",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Lh = ({
    isOpen: e,
    onClose: t,
    medicineInfo: n,
    requisitions: s,
    distributions: o,
    onNoticeUpdated: l,
  }) => {
    const { setHighlightedMedicineCode: a } = Ye(),
      [i, c] = p.useState(s),
      [g, m] = p.useState(o),
      [h, u] = p.useState(null),
      [j, b] = p.useState(!1),
      [_, k] = p.useState(null),
      [f, d] = p.useState("requisition"),
      [x, D] = p.useState(!1),
      [R, E] = p.useState(!1);
    so.useEffect(() => {
      c(s), m(o);
    }, [s, o]),
      p.useEffect(
        () => () => {
          ss.cleanup();
        },
        []
      );
    const I = async () => {
        var v;
        if (n && !R) {
          if (!n.serverName || !n.serverType) {
            alert("無法取得藥品位置資訊");
            return;
          }
          E(!0);
          try {
            const G = localStorage.getItem("medMap_setting");
            let y = "255,0,0",
              T = "1",
              N = 60;
            if (G)
              try {
                const V = JSON.parse(G);
                (y =
                  {
                    blue: "255,0,0",
                    green: "0,255,0",
                    red: "0,0,255",
                    yellow: "0,255,255",
                    purple: "255,0,255",
                    cyan: "255,255,0",
                  }[V.light_color] || "255,0,0"),
                  (T =
                    ((v = V.brightness) == null ? void 0 : v.toString()) ||
                    "1"),
                  (N = V.light_sec || 60);
              } catch (V) {
                console.error("讀取設定失敗:", V);
              }
            if (x) await ss.turnOffAllLights(), D(!1), a(null);
            else {
              const V = [
                {
                  serverName: n.serverName,
                  serverType: n.serverType,
                  medicineCode: n.code,
                },
              ];
              await ss.startLighting(V, y, T, N * 1e3, () => {
                D(!1), a(null);
              }),
                D(!0),
                a(n.code);
            }
          } catch (G) {
            console.error("亮燈操作失敗:", G);
          } finally {
            E(!1);
          }
        }
      },
      F = async (v) => {
        const G = v.notice === "True" ? "False" : "True";
        u(v.GUID);
        const y = [...i],
          T = y.findIndex((N) => N.GUID === v.GUID);
        if (T === -1) {
          u(null);
          return;
        }
        (y[T] = { ...v, notice: G }), c(y);
        try {
          const N = await De.updateRequisitionNotice(v.GUID, G);
          N.Code !== 200
            ? ((y[T] = { ...v, notice: v.notice }),
              c(y),
              console.error("更新申領通知狀態失敗:", N))
            : l && l();
        } catch (N) {
          (y[T] = { ...v, notice: v.notice }),
            c(y),
            console.error("更新申領通知狀態失敗:", N);
        } finally {
          u(null);
        }
      },
      oe = async (v) => {
        const G = v.notice === "True" ? "False" : "True";
        u(v.GUID);
        const y = [...g],
          T = y.findIndex((N) => N.GUID === v.GUID);
        if (T === -1) {
          u(null);
          return;
        }
        (y[T] = { ...v, notice: G }), m(y);
        try {
          const N = await De.updateDistributionNotice(v.GUID, G);
          N.Code !== 200
            ? ((y[T] = { ...v, notice: v.notice }),
              m(y),
              console.error("更新撥補通知狀態失敗:", N))
            : l && l();
        } catch (N) {
          (y[T] = { ...v, notice: v.notice }),
            m(y),
            console.error("更新撥補通知狀態失敗:", N);
        } finally {
          u(null);
        }
      };
    if (!e || !n) return null;
    const A = i.filter((v) => v.state === "等待過帳"),
      X = g.filter((v) => v.state === "等待過帳"),
      ae = A.length === 0 && X.length === 0,
      S = (v) => {
        if (!v || v === "1/01/01 00:00:00" || v === "0001-01-01T00:00:00")
          return "-";
        try {
          const G = new Date(v);
          if (isNaN(G.getTime())) return v;
          const y = G.getFullYear(),
            T = String(G.getMonth() + 1).padStart(2, "0"),
            N = String(G.getDate()).padStart(2, "0"),
            V = String(G.getHours()).padStart(2, "0"),
            ie = String(G.getMinutes()).padStart(2, "0");
          return `${y}/${T}/${N} ${V}:${ie}`;
        } catch {
          return v;
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
                      onClick: I,
                      disabled: R,
                      className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                        x
                          ? "bg-green-500 text-white hover:bg-green-600 shadow-lg"
                          : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                      }`,
                      title: x ? "點擊關燈" : "點擊亮燈",
                      children: r.jsx(lh, {
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
                    children: r.jsx(Ge, { className: "w-6 h-6 text-gray-700" }),
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
              children: ae
                ? r.jsx("div", {
                    className:
                      "flex items-center justify-center h-40 text-gray-400 text-lg",
                    children: "無藥品需求",
                  })
                : r.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      A.map((v, G) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-blue-200 rounded-lg p-3 bg-blue-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              d("requisition"), k(v), b(!0);
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
                                        onClick: (y) => {
                                          y.stopPropagation(), F(v);
                                        },
                                        disabled: h === v.GUID,
                                        className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${
                                          v.notice === "True"
                                            ? "bg-green-500 text-white hover:bg-green-600"
                                            : "bg-gray-300 text-gray-600 hover:bg-gray-400"
                                        }`,
                                        title:
                                          v.notice === "True"
                                            ? "點擊關閉通知"
                                            : "點擊開啟通知",
                                        children: r.jsx(wc, {
                                          className: "w-5 h-5",
                                        }),
                                      }),
                                    ],
                                  }),
                                  r.jsx("span", {
                                    className: `px-3 text-sm py-2 text-white font-semibold rounded-full ${
                                      v.actionType.includes("緊急")
                                        ? "bg-green-600"
                                        : "bg-blue-600"
                                    }`,
                                    children: v.actionType,
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
                                        children: v.requestingUnit || "-",
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
                                        children: v.requestingPerson || "-",
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
                                        children: v.requestedQuantity || "-",
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
                                        children: S(v.requestTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          v.GUID
                        )
                      ),
                      X.map((v, G) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-yellow-200 rounded-lg p-3 bg-yellow-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              d("distribution"), k(v), b(!0);
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
                                    onClick: (y) => {
                                      y.stopPropagation(), oe(v);
                                    },
                                    disabled: h === v.GUID,
                                    className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${
                                      v.notice === "True"
                                        ? "bg-green-500 text-white hover:bg-green-600"
                                        : "bg-gray-300 text-gray-600 hover:bg-gray-400"
                                    }`,
                                    title:
                                      v.notice === "True"
                                        ? "點擊關閉通知"
                                        : "點擊開啟通知",
                                    children: r.jsx(wc, {
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
                                        children: v.sourceStoreType || "-",
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
                                        children: v.destinationStoreType || "-",
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
                                        children: v.LOT || "-",
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
                                        children: v.VAL || "-",
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
                                        children: v.issuedQuantity || "-",
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
                                        children: v.reportName || "-",
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
                                        children: S(v.addedTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          v.GUID
                        )
                      ),
                    ],
                  }),
            }),
          ],
        }),
        r.jsx(Oh, {
          isOpen: j,
          onClose: () => b(!1),
          type: f,
          data: _,
          onApprove: l,
        }),
      ],
    });
  },
  Uh = ({ isOpen: e, onClose: t, container: n }) => {
    const [s, o] = p.useState("list_mode"),
      { highlightedMedicineCode: l } = Ye(),
      [a, i] = p.useState(!1),
      [c, g] = p.useState([]),
      [m, h] = p.useState([]),
      [u, j] = p.useState([]),
      [b, _] = p.useState(!1),
      [k, f] = p.useState(null),
      d = p.useRef(null),
      x = p.useRef(null),
      D = () => {
        try {
          const X = localStorage.getItem("medMap_setting");
          if (X) {
            const S = JSON.parse(X).light_sec;
            if (S != null && S !== "") {
              const v = Number(S);
              if (!isNaN(v) && v > 0) return v * 1e3;
            }
          }
        } catch (X) {
          console.error("讀取亮燈設定失敗:", X);
        }
        return 6e4;
      },
      R = () => {
        try {
          const A = localStorage.getItem("medMap_setting");
          if (A) return JSON.parse(A).light_color || "red";
        } catch (A) {
          console.error("讀取高亮顏色設定失敗:", A);
        }
        return "red";
      },
      E = p.useCallback(async () => {
        try {
          const A = new Date(),
            X = `${A.getFullYear()}-${String(A.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(A.getDate()).padStart(2, "0")} 00:00:00`,
            ae = `${A.getFullYear()}-${String(A.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(A.getDate()).padStart(2, "0")} 23:59:59`,
            [S, v] = await Promise.all([
              De.getRequisitionByTime(X, ae),
              De.getDistributionByTime(X, ae),
            ]),
            G = [];
          if (S.Code === 200 && S.Data) {
            const y = S.Data.filter((N) => {
              var V;
              return (V = n == null ? void 0 : n.med_list) == null
                ? void 0
                : V.some((ie) => ie.code === N.code);
            });
            h(y),
              y
                .filter((N) => N.state === "等待過帳" && N.notice === "True")
                .forEach((N) => {
                  N.code && G.push(N.code);
                });
          }
          if (v.Code === 200 && v.Data) {
            const y = v.Data.filter((N) => {
              var V;
              return (V = n == null ? void 0 : n.med_list) == null
                ? void 0
                : V.some((ie) => ie.code === N.code);
            });
            j(y),
              y
                .filter((N) => N.state === "等待過帳" && N.notice === "True")
                .forEach((N) => {
                  N.code && (G.includes(N.code) || G.push(N.code));
                });
          }
          g(G);
        } catch (A) {
          console.error("檢查申領撥補資料失敗:", A);
        }
      }, [n]);
    p.useEffect(
      () => (
        e
          ? (E(),
            x.current && clearInterval(x.current),
            (x.current = setInterval(() => {
              E();
            }, 1e4)))
          : x.current && (clearInterval(x.current), (x.current = null)),
        () => {
          x.current && (clearInterval(x.current), (x.current = null));
        }
      ),
      [e, E]
    ),
      p.useEffect(() => {
        if (
          (console.log("容器資料：", n),
          console.log("🔍 ContainerDetailModal - 亮燈狀態檢查:", {
            isOpen: e,
            highlightedMedicineCode: l,
            containerName: n == null ? void 0 : n.name,
          }),
          e && l)
        ) {
          i(!0);
          const A = D();
          console.log("✅ ContainerDetailModal - 啟動亮燈:", {
            medicineCode: l,
            duration: A / 1e3 + "秒",
          }),
            d.current && clearTimeout(d.current),
            (d.current = setTimeout(() => {
              console.log("⏱️ ContainerDetailModal - 亮燈時間結束"),
                i(!1),
                (d.current = null);
            }, A));
        } else i(!1);
        return () => {
          d.current && clearTimeout(d.current);
        };
      }, [e, l]);
    const I = (A) => {
      var S, v;
      m.filter((G) => G.code === A.code), u.filter((G) => G.code === A.code);
      const X = (G) => {
          for (const y of G) {
            if (y.type === "store_shelves" && y.medMapStock) {
              const T = y.medMapStock.find((N) => N.code === A.code);
              if (T) return { stock: T, shelf: y };
            }
            if (y.contents && y.contents.length > 0) {
              const T = X(y.contents);
              if (T) return T;
            }
          }
          return null;
        },
        ae = n ? X([n]) : null;
      f({
        code: A.code,
        name: A.name,
        cht_name: A.cht_name,
        skdiacode: A.SKDIACODE || A.skdiacode,
        serverName:
          (S = ae == null ? void 0 : ae.shelf) == null ? void 0 : S.serverName,
        serverType:
          (v = ae == null ? void 0 : ae.shelf) == null ? void 0 : v.serverType,
      }),
        _(!0);
    };
    if (!e) return null;
    const F = () =>
        !(n != null && n.med_list) || n.med_list.length === 0
          ? r.jsx("div", {
              className:
                "flex items-center justify-center h-full text-gray-400",
              children: r.jsx("p", { children: "無藥品資料" }),
            })
          : (n.med_list.sort((A, X) => A.code.localeCompare(X.code)),
            r.jsx("div", {
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
                    children: n.med_list.map((A, X) => {
                      const ae = a && l && A.code == l,
                        S = c.includes(A.code);
                      let v = 0;
                      A.qty.forEach((y) => {
                        v += +y;
                      }),
                        X === 0 &&
                          console.log(
                            "🧪 ContainerDetailModal - 第一筆藥品檢查:",
                            {
                              medCode: A.code,
                              highlightedCode: l,
                              isHighlightActive: a,
                              isHighlighted: ae,
                              isPendingRequisition: S,
                              comparison: `${A.code} == ${l} = ${A.code == l}`,
                            }
                          );
                      const G = R();
                      return r.jsxs(
                        "tr",
                        {
                          className: `transition-colors cursor-pointer ${
                            S
                              ? "highlight-breathe-red"
                              : ae
                              ? `highlight-breathe-${G}`
                              : "hover:bg-gray-50"
                          }`,
                          onClick: () => I(A),
                          children: [
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm",
                              children: A.code || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm",
                              children: A.SKDIACODE || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm",
                              children: A.name || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm text-right",
                              children: v || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm text-center",
                              children: A.stockCol || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm text-center",
                              children: A.stockRow || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm text-center",
                              children: A.stock || "-",
                            }),
                          ],
                        },
                        X
                      );
                    }),
                  }),
                ],
              }),
            })),
      oe = () =>
        n
          ? r.jsx($h, {
              container: n,
              highlightedMedicineCode: a ? l : null,
              pendingRequisitionCodes: c,
              onMedicineClick: I,
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
                      children: r.jsx(Ge, {
                        className: "w-6 h-6 text-gray-700",
                      }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 overflow-hidden p-3",
                  children: s === "list_mode" ? F() : oe(),
                }),
              ],
            }),
          ],
        }),
        r.jsx(Lh, {
          isOpen: b,
          onClose: () => _(!1),
          medicineInfo: k,
          requisitions: k ? m.filter((A) => A.code === k.code) : [],
          distributions: k ? u.filter((A) => A.code === k.code) : [],
          onNoticeUpdated: E,
        }),
      ],
    });
  },
  Bh = () => {
    const {
        editStoreShelfModalOpen: e,
        closeEditStoreShelfModal: t,
        selectedStoreShelfForEdit: n,
        showNotification: s,
        updateContainerInLocalData: o,
      } = Ye(),
      [l, a] = p.useState({
        name: "",
        position: "",
        width: "85",
        height: "29",
        ip: "",
        serverName: "",
        serverType: "",
        deviceType: "",
      }),
      [i, c] = p.useState(!1);
    p.useEffect(() => {
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
    const g = (u, j) => {
        a((b) => ({ ...b, [u]: j }));
      },
      m = async () => {
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
            const u = {
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
              k = await (
                await fetch(b, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(u),
                })
              ).json();
            console.log(u),
              console.log(k),
              k.Code === 200
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
                : s(k.Result || "更新失敗", "error");
          } catch (u) {
            console.error("更新層架失敗:", u),
              s("更新失敗，請稍後再試", "error");
          } finally {
            c(!1);
          }
        }
      },
      h = () => {
        t();
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: h,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200 w-[600px]",
              onClick: (u) => u.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(xr, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "編輯層架設定",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: h,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ge, { className: "w-6 h-6" }),
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
                            onChange: (u) => g("name", u.target.value),
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
                            onChange: (u) => g("position", u.target.value),
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
                                onChange: (u) => g("width", u.target.value),
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
                                onChange: (u) => g("height", u.target.value),
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
                            onChange: (u) => g("ip", u.target.value),
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
                            onChange: (u) => g("serverName", u.target.value),
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
                            onChange: (u) => g("serverType", u.target.value),
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
                            onChange: (u) => g("deviceType", u.target.value),
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
                      onClick: h,
                      disabled: i,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                      children: "取消",
                    }),
                    r.jsxs("button", {
                      onClick: m,
                      disabled: i,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        i && r.jsx(Ct, { className: "w-4 h-4 animate-spin" }),
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
  zh = () => {
    const {
        editParentContainerModalOpen: e,
        closeEditParentContainerModal: t,
        selectedParentContainerForEdit: n,
        showNotification: s,
        updateContainerInLocalData: o,
      } = Ye(),
      [l, a] = p.useState({
        name: "",
        position: "",
        ip_light: "",
        serverName: "",
        serverType: "",
        deviceType: "",
      }),
      [i, c] = p.useState(!1);
    p.useEffect(() => {
      n &&
        e &&
        a({
          name: n.name || "",
          position: n.gird_position || "",
          ip_light: n.ip_light || "",
          serverName: n.serverName || "",
          serverType: n.serverType || "",
          deviceType: n.device_type || "",
        });
    }, [n, e]);
    const g = (u, j) => {
        a((b) => ({ ...b, [u]: j }));
      },
      m = async () => {
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
            let u = `${n.position.x},${n.position.y}`;
            const j = [
              {
                GUID: n.GUID,
                name: l.name.trim(),
                position: l.position.trim(),
                absolute_position: u || "0,0",
                ip_light: l.ip_light.trim(),
                serverName: l.serverName.trim(),
                serverType: l.serverType.trim(),
                device_type: l.deviceType,
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
                }),
                t())
              : s(b.Result || "更新失敗", "error");
          } catch (u) {
            console.error("更新父容器失敗:", u),
              s("更新失敗，請稍後再試", "error");
          } finally {
            c(!1);
          }
        }
      },
      h = () => {
        t();
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: h,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200 w-[600px]",
              onClick: (u) => u.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(xr, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "編輯父容器設定",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: h,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ge, { className: "w-6 h-6" }),
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
                            onChange: (u) => g("name", u.target.value),
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
                            onChange: (u) => g("position", u.target.value),
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
                            onChange: (u) => g("ip_light", u.target.value),
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
                            onChange: (u) => g("serverName", u.target.value),
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
                            onChange: (u) => g("serverType", u.target.value),
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
                            onChange: (u) => g("deviceType", u.target.value),
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
                      onClick: h,
                      disabled: i,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                      children: "取消",
                    }),
                    r.jsxs("button", {
                      onClick: m,
                      disabled: i,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        i && r.jsx(Ct, { className: "w-4 h-4 animate-spin" }),
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
  Gh = ({ isOpen: e, onLoginSuccess: t }) => {
    const { t: n } = xt(),
      [s, o] = p.useState(""),
      [l, a] = p.useState(""),
      [i, c] = p.useState(!1),
      [g, m] = p.useState(!1),
      [h, u] = p.useState(""),
      j = async (_) => {
        if ((_.preventDefault(), !s.trim() || !l.trim())) {
          u("Please enter both ID and password");
          return;
        }
        m(!0), u("");
        try {
          const k = await De.login({ ID: s.trim(), Password: l });
          if (k.Code === 200 && k.Data) {
            const f = { ...k.Data, loginTime: new Date().toISOString() };
            sessionStorage.setItem("user_session", JSON.stringify(f)), t(f);
          } else u(k.Result || "Login failed");
        } catch (k) {
          console.error("Login failed:", k),
            u("Network error. Please try again.");
        } finally {
          m(!1);
        }
      },
      b = (_) => {
        _.key === "Enter" && !g && j(_);
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
                    h &&
                      r.jsx("div", {
                        className:
                          "mb-6 p-4 bg-red-50 border border-red-200 rounded-lg",
                        children: r.jsx("p", {
                          className: "text-red-600 text-sm",
                          children: h,
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
                              onChange: (_) => o(_.target.value),
                              onKeyPress: b,
                              placeholder: n("login.userIdPlaceholder"),
                              className:
                                "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              disabled: g,
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
                                  onChange: (_) => a(_.target.value),
                                  onKeyPress: b,
                                  placeholder: n("login.passwordPlaceholder"),
                                  className:
                                    "w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                  disabled: g,
                                  autoComplete: "current-password",
                                }),
                                r.jsx("button", {
                                  type: "button",
                                  onClick: () => c(!i),
                                  className:
                                    "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors",
                                  disabled: g,
                                  children: i
                                    ? r.jsx(Bu, { className: "w-5 h-5" })
                                    : r.jsx(zu, { className: "w-5 h-5" }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        r.jsx("button", {
                          type: "submit",
                          disabled: g || !s.trim() || !l.trim(),
                          className:
                            "w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: g
                            ? r.jsxs(r.Fragment, {
                                children: [
                                  r.jsx(Ct, {
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
  Fh = ({ isVisible: e, message: t }) => {
    const { t: n } = xt();
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
                        children: r.jsx(ii, {
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
                      r.jsx(Ct, {
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
  Hh = ({
    message: e,
    type: t,
    isVisible: n,
    onClose: s,
    duration: o = 3e3,
  }) => {
    const [l, a] = p.useState(!1);
    return (
      p.useEffect(() => {
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
                  ? r.jsx(nh, { className: "w-5 h-5 text-green-600" })
                  : r.jsx(fh, { className: "w-5 h-5 text-red-600" }),
                r.jsx("span", {
                  className: "text-sm font-medium",
                  children: e,
                }),
                r.jsx("button", {
                  onClick: s,
                  className: `p-1 rounded-full hover:bg-black/10 transition-colors ${
                    t === "success" ? "text-green-600" : "text-red-600"
                  }`,
                  children: r.jsx(Ge, { className: "w-4 h-4" }),
                }),
              ],
            }),
          })
        : null
    );
  };
function Vh() {
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
    closeAddParentContainerModal: g,
    selectedDepartmentForAdd: m,
    addStoreItemModalOpen: h,
    closeAddStoreItemModal: u,
    selectedStoreShelfForAdd: j,
    addDepartmentModalOpen: b,
    closeAddDepartmentModal: _,
    qrCodeScannerModalOpen: k,
    qrCodeScannerMode: f,
    closeQRCodeScannerModal: d,
    addBarcodeModalOpen: x,
    closeAddBarcodeModal: D,
    initialBarcodeValue: R,
    containerDetailModalOpen: E,
    closeContainerDetailModal: I,
    selectedContainerForDetail: F,
    setMedicineList: oe,
    setIsLoadingMedicines: A,
    showNotification: X,
  } = Ye();
  p.useEffect(() => {
    (() => {
      try {
        const y = sessionStorage.getItem("user_session");
        if (y) {
          const T = JSON.parse(y);
          T.GUID && T.ID && T.Name
            ? (o(T), s(!0))
            : sessionStorage.removeItem("user_session");
        }
      } catch (y) {
        console.error("Error checking session:", y),
          sessionStorage.removeItem("user_session");
      }
    })();
  }, [s, o]),
    p.useEffect(() => {
      let G = !0;
      return (
        (async () => {
          if (n) {
            A(!0);
            try {
              console.log("開始載入藥品資料...");
              const T = await De.getMedicineCloud();
              if ((console.log("藥品資料 API 回應:", T), !G)) return;
              T.Code === 200 && T.Data
                ? (oe(T.Data),
                  console.log(`✅ 成功載入 ${T.Data.length} 筆藥品資料`),
                  X(`載入 ${T.Data.length} 筆藥品資料`, "success"))
                : (console.warn("API 回應異常:", T),
                  oe([]),
                  X("藥品資料載入異常，請稍後重試", "error"));
            } catch (T) {
              if (!G) return;
              console.error("載入藥品資料失敗:", T),
                oe([]),
                X("無法連線到藥品資料庫，部分功能可能無法使用", "error");
            } finally {
              G && A(!1);
            }
          }
        })(),
        () => {
          G = !1;
        }
      );
    }, [n]);
  const ae = (G) => {
      o(G), s(!0);
    },
    S = so.useRef(null),
    v = (G, y) => {
      if (
        (console.log("📸 QR掃描成功 - handleQRScanSuccess 被調用:", {
          barcode: G,
          medicineData: y,
          mode: f,
        }),
        console.log("📸 當前 mode:", f),
        console.log("📸 當前 viewMode:", t),
        console.log("📸 drugCanvasRef.current:", S.current),
        f === "track_Drug_mode")
      ) {
        if ((console.log("✅ 進入 track_Drug_mode 分支"), t !== "medicine")) {
          console.warn("⚠️ 當前不在藥品地圖視圖，無法定位藥品"),
            X("請切換到藥品地圖視圖後再使用此功能", "error");
          return;
        }
        S.current
          ? (console.log("✅ drugCanvasRef.current 存在"),
            console.log(
              "📸 drugCanvasRef.current.locateDrug 類型:",
              typeof S.current.locateDrug
            ),
            typeof S.current.locateDrug == "function"
              ? (console.log("✅ 呼叫 locateDrug 函數"),
                S.current.locateDrug(y))
              : console.warn("⚠️ locateDrug 不是函數"))
          : console.warn("⚠️ drugCanvasRef.current 不存在");
      } else console.log("⚠️ mode 不是 track_Drug_mode，當前 mode:", f);
    };
  return n
    ? r.jsxs("div", {
        className: "min-h-screen bg-gray-50",
        children: [
          r.jsx(ph, {}),
          r.jsx(mh, {}),
          r.jsx(yh, {}),
          r.jsx("div", {
            className: "fixed inset-0",
            children: r.jsx("div", {
              className: "w-full h-full",
              children:
                t === "department" ? r.jsx(Nh, {}) : r.jsx(Hu, { ref: S }),
            }),
          }),
          r.jsx(vh, {}),
          r.jsx(Dh, {}),
          r.jsx(_h, {}),
          r.jsx(Mh, {}),
          r.jsx(Eh, {}),
          r.jsx(Ih, {}),
          r.jsx(Ph, {}),
          r.jsx(Th, { isOpen: h, onClose: u, storeShelf: j }),
          r.jsx(Rh, { isOpen: b, onClose: _ }),
          r.jsx(qo, { isOpen: k, onClose: d, mode: f, onScanSuccess: v }),
          r.jsx(Ah, { isOpen: x, onClose: D, initialBarcode: R }),
          r.jsx(Uh, { isOpen: E, onClose: I, container: F }),
          r.jsx(Bh, {}),
          r.jsx(zh, {}),
          r.jsx(Fh, { isVisible: l }),
          r.jsx(Hh, {
            message: a.message,
            type: a.type,
            isVisible: a.isVisible,
            onClose: i,
          }),
        ],
      })
    : r.jsx(Gh, { isOpen: !0, onLoginSuccess: ae });
}
function qh() {
  return r.jsx(Jm, { children: r.jsx(Qm, { children: r.jsx(Vh, {}) }) });
}
Au(document.getElementById("root")).render(
  r.jsx(p.StrictMode, { children: r.jsx(qh, {}) })
);
