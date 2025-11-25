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
function gf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Nc = { exports: {} },
  _o = {},
  jc = { exports: {} },
  Re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vs = Symbol.for("react.element"),
  xf = Symbol.for("react.portal"),
  yf = Symbol.for("react.fragment"),
  vf = Symbol.for("react.strict_mode"),
  wf = Symbol.for("react.profiler"),
  bf = Symbol.for("react.provider"),
  Nf = Symbol.for("react.context"),
  jf = Symbol.for("react.forward_ref"),
  Sf = Symbol.for("react.suspense"),
  Cf = Symbol.for("react.memo"),
  kf = Symbol.for("react.lazy"),
  di = Symbol.iterator;
function Df(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (di && e[di]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Sc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Cc = Object.assign,
  kc = {};
function Er(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = kc),
    (this.updater = n || Sc);
}
Er.prototype.isReactComponent = {};
Er.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Er.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Dc() {}
Dc.prototype = Er.prototype;
function pa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = kc),
    (this.updater = n || Sc);
}
var ma = (pa.prototype = new Dc());
ma.constructor = pa;
Cc(ma, Er.prototype);
ma.isPureReactComponent = !0;
var ui = Array.isArray,
  _c = Object.prototype.hasOwnProperty,
  ha = { current: null },
  Mc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ec(e, t, n) {
  var s,
    o = {},
    l = null,
    a = null;
  if (t != null)
    for (s in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      _c.call(t, s) && !Mc.hasOwnProperty(s) && (o[s] = t[s]);
  var i = arguments.length - 2;
  if (i === 1) o.children = n;
  else if (1 < i) {
    for (var c = Array(i), g = 0; g < i; g++) c[g] = arguments[g + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (s in ((i = e.defaultProps), i)) o[s] === void 0 && (o[s] = i[s]);
  return {
    $$typeof: vs,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: ha.current,
  };
}
function _f(e, t) {
  return {
    $$typeof: vs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ga(e) {
  return typeof e == "object" && e !== null && e.$$typeof === vs;
}
function Mf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var fi = /\/+/g;
function Yo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Mf("" + e.key)
    : t.toString(36);
}
function Hs(e, t, n, s, o) {
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
          case vs:
          case xf:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = s === "" ? "." + Yo(a, 0) : s),
      ui(o)
        ? ((n = ""),
          e != null && (n = e.replace(fi, "$&/") + "/"),
          Hs(o, t, n, "", function (g) {
            return g;
          }))
        : o != null &&
          (ga(o) &&
            (o = _f(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(fi, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (s = s === "" ? "." : s + ":"), ui(e)))
    for (var i = 0; i < e.length; i++) {
      l = e[i];
      var c = s + Yo(l, i);
      a += Hs(l, t, n, c, o);
    }
  else if (((c = Df(e)), typeof c == "function"))
    for (e = c.call(e), i = 0; !(l = e.next()).done; )
      (l = l.value), (c = s + Yo(l, i++)), (a += Hs(l, t, n, c, o));
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
function Cs(e, t, n) {
  if (e == null) return e;
  var s = [],
    o = 0;
  return (
    Hs(e, s, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    s
  );
}
function Ef(e) {
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
var mt = { current: null },
  Vs = { transition: null },
  If = {
    ReactCurrentDispatcher: mt,
    ReactCurrentBatchConfig: Vs,
    ReactCurrentOwner: ha,
  };
function Ic() {
  throw Error("act(...) is not supported in production builds of React.");
}
Re.Children = {
  map: Cs,
  forEach: function (e, t, n) {
    Cs(
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
      Cs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Cs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ga(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Re.Component = Er;
Re.Fragment = yf;
Re.Profiler = wf;
Re.PureComponent = pa;
Re.StrictMode = vf;
Re.Suspense = Sf;
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = If;
Re.act = Ic;
Re.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var s = Cc({}, e.props),
    o = e.key,
    l = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (a = ha.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (c in t)
      _c.call(t, c) &&
        !Mc.hasOwnProperty(c) &&
        (s[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) s.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var g = 0; g < c; g++) i[g] = arguments[g + 2];
    s.children = i;
  }
  return { $$typeof: vs, type: e.type, key: o, ref: l, props: s, _owner: a };
};
Re.createContext = function (e) {
  return (
    (e = {
      $$typeof: Nf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: bf, _context: e }),
    (e.Consumer = e)
  );
};
Re.createElement = Ec;
Re.createFactory = function (e) {
  var t = Ec.bind(null, e);
  return (t.type = e), t;
};
Re.createRef = function () {
  return { current: null };
};
Re.forwardRef = function (e) {
  return { $$typeof: jf, render: e };
};
Re.isValidElement = ga;
Re.lazy = function (e) {
  return { $$typeof: kf, _payload: { _status: -1, _result: e }, _init: Ef };
};
Re.memo = function (e, t) {
  return { $$typeof: Cf, type: e, compare: t === void 0 ? null : t };
};
Re.startTransition = function (e) {
  var t = Vs.transition;
  Vs.transition = {};
  try {
    e();
  } finally {
    Vs.transition = t;
  }
};
Re.unstable_act = Ic;
Re.useCallback = function (e, t) {
  return mt.current.useCallback(e, t);
};
Re.useContext = function (e) {
  return mt.current.useContext(e);
};
Re.useDebugValue = function () {};
Re.useDeferredValue = function (e) {
  return mt.current.useDeferredValue(e);
};
Re.useEffect = function (e, t) {
  return mt.current.useEffect(e, t);
};
Re.useId = function () {
  return mt.current.useId();
};
Re.useImperativeHandle = function (e, t, n) {
  return mt.current.useImperativeHandle(e, t, n);
};
Re.useInsertionEffect = function (e, t) {
  return mt.current.useInsertionEffect(e, t);
};
Re.useLayoutEffect = function (e, t) {
  return mt.current.useLayoutEffect(e, t);
};
Re.useMemo = function (e, t) {
  return mt.current.useMemo(e, t);
};
Re.useReducer = function (e, t, n) {
  return mt.current.useReducer(e, t, n);
};
Re.useRef = function (e) {
  return mt.current.useRef(e);
};
Re.useState = function (e) {
  return mt.current.useState(e);
};
Re.useSyncExternalStore = function (e, t, n) {
  return mt.current.useSyncExternalStore(e, t, n);
};
Re.useTransition = function () {
  return mt.current.useTransition();
};
Re.version = "18.3.1";
jc.exports = Re;
var p = jc.exports;
const no = gf(p);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pf = p,
  Tf = Symbol.for("react.element"),
  Rf = Symbol.for("react.fragment"),
  Af = Object.prototype.hasOwnProperty,
  $f = Pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Of = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pc(e, t, n) {
  var s,
    o = {},
    l = null,
    a = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (s in t) Af.call(t, s) && !Of.hasOwnProperty(s) && (o[s] = t[s]);
  if (e && e.defaultProps)
    for (s in ((t = e.defaultProps), t)) o[s] === void 0 && (o[s] = t[s]);
  return {
    $$typeof: Tf,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: $f.current,
  };
}
_o.Fragment = Rf;
_o.jsx = Pc;
_o.jsxs = Pc;
Nc.exports = _o;
var r = Nc.exports,
  Tc = { exports: {} },
  Mt = {},
  Rc = { exports: {} },
  Ac = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, F) {
    var ae = j.length;
    j.push(F);
    e: for (; 0 < ae; ) {
      var X = (ae - 1) >>> 1,
        re = j[X];
      if (0 < o(re, F)) (j[X] = F), (j[ae] = re), (ae = X);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function s(j) {
    if (j.length === 0) return null;
    var F = j[0],
      ae = j.pop();
    if (ae !== F) {
      j[0] = ae;
      e: for (var X = 0, re = j.length, be = re >>> 1; X < be; ) {
        var de = 2 * (X + 1) - 1,
          ke = j[de],
          ue = de + 1,
          V = j[ue];
        if (0 > o(ke, ae))
          ue < re && 0 > o(V, ke)
            ? ((j[X] = V), (j[ue] = ae), (X = ue))
            : ((j[X] = ke), (j[de] = ae), (X = de));
        else if (ue < re && 0 > o(V, ae)) (j[X] = V), (j[ue] = ae), (X = ue);
        else break e;
      }
    }
    return F;
  }
  function o(j, F) {
    var ae = j.sortIndex - F.sortIndex;
    return ae !== 0 ? ae : j.id - F.id;
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
    f = 3,
    S = !1,
    b = !1,
    _ = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(j) {
    for (var F = n(g); F !== null; ) {
      if (F.callback === null) s(g);
      else if (F.startTime <= j)
        s(g), (F.sortIndex = F.expirationTime), t(c, F);
      else break;
      F = n(g);
    }
  }
  function D(j) {
    if (((_ = !1), y(j), !b))
      if (n(c) !== null) (b = !0), x($);
      else {
        var F = n(g);
        F !== null && N(D, F.startTime - j);
      }
  }
  function $(j, F) {
    (b = !1), _ && ((_ = !1), d(G), (G = -1)), (S = !0);
    var ae = f;
    try {
      for (
        y(F), h = n(c);
        h !== null && (!(h.expirationTime > F) || (j && !z()));

      ) {
        var X = h.callback;
        if (typeof X == "function") {
          (h.callback = null), (f = h.priorityLevel);
          var re = X(h.expirationTime <= F);
          (F = e.unstable_now()),
            typeof re == "function" ? (h.callback = re) : h === n(c) && s(c),
            y(F);
        } else s(c);
        h = n(c);
      }
      if (h !== null) var be = !0;
      else {
        var de = n(g);
        de !== null && N(D, de.startTime - F), (be = !1);
      }
      return be;
    } finally {
      (h = null), (f = ae), (S = !1);
    }
  }
  var I = !1,
    R = null,
    G = -1,
    oe = 5,
    P = -1;
  function z() {
    return !(e.unstable_now() - P < oe);
  }
  function Z() {
    if (R !== null) {
      var j = e.unstable_now();
      P = j;
      var F = !0;
      try {
        F = R(!0, j);
      } finally {
        F ? M() : ((I = !1), (R = null));
      }
    } else I = !1;
  }
  var M;
  if (typeof u == "function")
    M = function () {
      u(Z);
    };
  else if (typeof MessageChannel < "u") {
    var w = new MessageChannel(),
      H = w.port2;
    (w.port1.onmessage = Z),
      (M = function () {
        H.postMessage(null);
      });
  } else
    M = function () {
      k(Z, 0);
    };
  function x(j) {
    (R = j), I || ((I = !0), M());
  }
  function N(j, F) {
    G = k(function () {
      j(e.unstable_now());
    }, F);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      b || S || ((b = !0), x($));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (oe = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (j) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = f;
      }
      var ae = f;
      f = F;
      try {
        return j();
      } finally {
        f = ae;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, F) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var ae = f;
      f = j;
      try {
        return F();
      } finally {
        f = ae;
      }
    }),
    (e.unstable_scheduleCallback = function (j, F, ae) {
      var X = e.unstable_now();
      switch (
        (typeof ae == "object" && ae !== null
          ? ((ae = ae.delay),
            (ae = typeof ae == "number" && 0 < ae ? X + ae : X))
          : (ae = X),
        j)
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
        (re = ae + re),
        (j = {
          id: m++,
          callback: F,
          priorityLevel: j,
          startTime: ae,
          expirationTime: re,
          sortIndex: -1,
        }),
        ae > X
          ? ((j.sortIndex = ae),
            t(g, j),
            n(c) === null &&
              j === n(g) &&
              (_ ? (d(G), (G = -1)) : (_ = !0), N(D, ae - X)))
          : ((j.sortIndex = re), t(c, j), b || S || ((b = !0), x($))),
        j
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (j) {
      var F = f;
      return function () {
        var ae = f;
        f = F;
        try {
          return j.apply(this, arguments);
        } finally {
          f = ae;
        }
      };
    });
})(Ac);
Rc.exports = Ac;
var Lf = Rc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uf = p,
  _t = Lf;
function se(e) {
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
var $c = new Set(),
  ns = {};
function Yn(e, t) {
  Nr(e, t), Nr(e + "Capture", t);
}
function Nr(e, t) {
  for (ns[e] = t, e = 0; e < t.length; e++) $c.add(t[e]);
}
var cn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  wl = Object.prototype.hasOwnProperty,
  Bf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  pi = {},
  mi = {};
function zf(e) {
  return wl.call(mi, e)
    ? !0
    : wl.call(pi, e)
    ? !1
    : Bf.test(e)
    ? (mi[e] = !0)
    : ((pi[e] = !0), !1);
}
function Gf(e, t, n, s) {
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
function Ff(e, t, n, s) {
  if (t === null || typeof t > "u" || Gf(e, t, n, s)) return !0;
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
function ht(e, t, n, s, o, l, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = s),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = a);
}
var lt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    lt[e] = new ht(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  lt[t] = new ht(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  lt[e] = new ht(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  lt[e] = new ht(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    lt[e] = new ht(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  lt[e] = new ht(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  lt[e] = new ht(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  lt[e] = new ht(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  lt[e] = new ht(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var xa = /[\-:]([a-z])/g;
function ya(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(xa, ya);
    lt[t] = new ht(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(xa, ya);
    lt[t] = new ht(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(xa, ya);
  lt[t] = new ht(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  lt[e] = new ht(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
lt.xlinkHref = new ht(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  lt[e] = new ht(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function va(e, t, n, s) {
  var o = lt.hasOwnProperty(t) ? lt[t] : null;
  (o !== null
    ? o.type !== 0
    : s ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ff(t, n, o, s) && (n = null),
    s || o === null
      ? zf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var pn = Uf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ks = Symbol.for("react.element"),
  rr = Symbol.for("react.portal"),
  sr = Symbol.for("react.fragment"),
  wa = Symbol.for("react.strict_mode"),
  bl = Symbol.for("react.profiler"),
  Oc = Symbol.for("react.provider"),
  Lc = Symbol.for("react.context"),
  ba = Symbol.for("react.forward_ref"),
  Nl = Symbol.for("react.suspense"),
  jl = Symbol.for("react.suspense_list"),
  Na = Symbol.for("react.memo"),
  gn = Symbol.for("react.lazy"),
  Uc = Symbol.for("react.offscreen"),
  hi = Symbol.iterator;
function Rr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hi && e[hi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var qe = Object.assign,
  Xo;
function Gr(e) {
  if (Xo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Xo = (t && t[1]) || "";
    }
  return (
    `
` +
    Xo +
    e
  );
}
var Qo = !1;
function Ko(e, t) {
  if (!e || Qo) return "";
  Qo = !0;
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
    (Qo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Gr(e) : "";
}
function Hf(e) {
  switch (e.tag) {
    case 5:
      return Gr(e.type);
    case 16:
      return Gr("Lazy");
    case 13:
      return Gr("Suspense");
    case 19:
      return Gr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ko(e.type, !1)), e;
    case 11:
      return (e = Ko(e.type.render, !1)), e;
    case 1:
      return (e = Ko(e.type, !0)), e;
    default:
      return "";
  }
}
function Sl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case sr:
      return "Fragment";
    case rr:
      return "Portal";
    case bl:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Nl:
      return "Suspense";
    case jl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Lc:
        return (e.displayName || "Context") + ".Consumer";
      case Oc:
        return (e._context.displayName || "Context") + ".Provider";
      case ba:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Na:
        return (
          (t = e.displayName || null), t !== null ? t : Sl(e.type) || "Memo"
        );
      case gn:
        (t = e._payload), (e = e._init);
        try {
          return Sl(e(t));
        } catch {}
    }
  return null;
}
function Vf(e) {
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
      return Sl(t);
    case 8:
      return t === wa ? "StrictMode" : "Mode";
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
function En(e) {
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
function Bc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Wf(e) {
  var t = Bc(e) ? "checked" : "value",
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
function Ds(e) {
  e._valueTracker || (e._valueTracker = Wf(e));
}
function zc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    s = "";
  return (
    e && (s = Bc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = s),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ro(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Cl(e, t) {
  var n = t.checked;
  return qe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function gi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    s = t.checked != null ? t.checked : t.defaultChecked;
  (n = En(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: s,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Gc(e, t) {
  (t = t.checked), t != null && va(e, "checked", t, !1);
}
function kl(e, t) {
  Gc(e, t);
  var n = En(t.value),
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
    ? Dl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Dl(e, t.type, En(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function xi(e, t, n) {
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
function Dl(e, t, n) {
  (t !== "number" || ro(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Fr = Array.isArray;
function gr(e, t, n, s) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && s && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + En(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), s && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function _l(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(se(91));
  return qe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function yi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(se(92));
      if (Fr(n)) {
        if (1 < n.length) throw Error(se(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: En(n) };
}
function Fc(e, t) {
  var n = En(t.value),
    s = En(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    s != null && (e.defaultValue = "" + s);
}
function vi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Hc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ml(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Hc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var _s,
  Vc = (function (e) {
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
        _s = _s || document.createElement("div"),
          _s.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = _s.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function rs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Wr = {
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
  qf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Wr).forEach(function (e) {
  qf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Wr[t] = Wr[e]);
  });
});
function Wc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Wr.hasOwnProperty(e) && Wr[e])
    ? ("" + t).trim()
    : t + "px";
}
function qc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0,
        o = Wc(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Yf = qe(
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
function El(e, t) {
  if (t) {
    if (Yf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(se(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(se(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(se(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(se(62));
  }
}
function Il(e, t) {
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
var Pl = null;
function ja(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Tl = null,
  xr = null,
  yr = null;
function wi(e) {
  if ((e = Ns(e))) {
    if (typeof Tl != "function") throw Error(se(280));
    var t = e.stateNode;
    t && ((t = To(t)), Tl(e.stateNode, e.type, t));
  }
}
function Yc(e) {
  xr ? (yr ? yr.push(e) : (yr = [e])) : (xr = e);
}
function Xc() {
  if (xr) {
    var e = xr,
      t = yr;
    if (((yr = xr = null), wi(e), t)) for (e = 0; e < t.length; e++) wi(t[e]);
  }
}
function Qc(e, t) {
  return e(t);
}
function Kc() {}
var Jo = !1;
function Jc(e, t, n) {
  if (Jo) return e(t, n);
  Jo = !0;
  try {
    return Qc(e, t, n);
  } finally {
    (Jo = !1), (xr !== null || yr !== null) && (Kc(), Xc());
  }
}
function ss(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var s = To(n);
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
  if (n && typeof n != "function") throw Error(se(231, t, typeof n));
  return n;
}
var Rl = !1;
if (cn)
  try {
    var Ar = {};
    Object.defineProperty(Ar, "passive", {
      get: function () {
        Rl = !0;
      },
    }),
      window.addEventListener("test", Ar, Ar),
      window.removeEventListener("test", Ar, Ar);
  } catch {
    Rl = !1;
  }
function Xf(e, t, n, s, o, l, a, i, c) {
  var g = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, g);
  } catch (m) {
    this.onError(m);
  }
}
var qr = !1,
  so = null,
  oo = !1,
  Al = null,
  Qf = {
    onError: function (e) {
      (qr = !0), (so = e);
    },
  };
function Kf(e, t, n, s, o, l, a, i, c) {
  (qr = !1), (so = null), Xf.apply(Qf, arguments);
}
function Jf(e, t, n, s, o, l, a, i, c) {
  if ((Kf.apply(this, arguments), qr)) {
    if (qr) {
      var g = so;
      (qr = !1), (so = null);
    } else throw Error(se(198));
    oo || ((oo = !0), (Al = g));
  }
}
function Xn(e) {
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
function Zc(e) {
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
function bi(e) {
  if (Xn(e) !== e) throw Error(se(188));
}
function Zf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Xn(e)), t === null)) throw Error(se(188));
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
        if (l === n) return bi(o), e;
        if (l === s) return bi(o), t;
        l = l.sibling;
      }
      throw Error(se(188));
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
        if (!a) throw Error(se(189));
      }
    }
    if (n.alternate !== s) throw Error(se(190));
  }
  if (n.tag !== 3) throw Error(se(188));
  return n.stateNode.current === n ? e : t;
}
function ed(e) {
  return (e = Zf(e)), e !== null ? td(e) : null;
}
function td(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = td(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var nd = _t.unstable_scheduleCallback,
  Ni = _t.unstable_cancelCallback,
  ep = _t.unstable_shouldYield,
  tp = _t.unstable_requestPaint,
  Qe = _t.unstable_now,
  np = _t.unstable_getCurrentPriorityLevel,
  Sa = _t.unstable_ImmediatePriority,
  rd = _t.unstable_UserBlockingPriority,
  lo = _t.unstable_NormalPriority,
  rp = _t.unstable_LowPriority,
  sd = _t.unstable_IdlePriority,
  Mo = null,
  Zt = null;
function sp(e) {
  if (Zt && typeof Zt.onCommitFiberRoot == "function")
    try {
      Zt.onCommitFiberRoot(Mo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Vt = Math.clz32 ? Math.clz32 : ap,
  op = Math.log,
  lp = Math.LN2;
function ap(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((op(e) / lp) | 0)) | 0;
}
var Ms = 64,
  Es = 4194304;
function Hr(e) {
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
function ao(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var s = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var i = a & ~o;
    i !== 0 ? (s = Hr(i)) : ((l &= a), l !== 0 && (s = Hr(l)));
  } else (a = n & ~o), a !== 0 ? (s = Hr(a)) : l !== 0 && (s = Hr(l));
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
      (n = 31 - Vt(t)), (o = 1 << n), (s |= e[n]), (t &= ~o);
  return s;
}
function ip(e, t) {
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
function cp(e, t) {
  for (
    var n = e.suspendedLanes,
      s = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var a = 31 - Vt(l),
      i = 1 << a,
      c = o[a];
    c === -1
      ? (!(i & n) || i & s) && (o[a] = ip(i, t))
      : c <= t && (e.expiredLanes |= i),
      (l &= ~i);
  }
}
function $l(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function od() {
  var e = Ms;
  return (Ms <<= 1), !(Ms & 4194240) && (Ms = 64), e;
}
function Zo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ws(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Vt(t)),
    (e[t] = n);
}
function dp(e, t) {
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
    var o = 31 - Vt(n),
      l = 1 << o;
    (t[o] = 0), (s[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Ca(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var s = 31 - Vt(n),
      o = 1 << s;
    (o & t) | (e[s] & t) && (e[s] |= t), (n &= ~o);
  }
}
var Oe = 0;
function ld(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ad,
  ka,
  id,
  cd,
  dd,
  Ol = !1,
  Is = [],
  Nn = null,
  jn = null,
  Sn = null,
  os = new Map(),
  ls = new Map(),
  yn = [],
  up =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ji(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Nn = null;
      break;
    case "dragenter":
    case "dragleave":
      jn = null;
      break;
    case "mouseover":
    case "mouseout":
      Sn = null;
      break;
    case "pointerover":
    case "pointerout":
      os.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ls.delete(t.pointerId);
  }
}
function $r(e, t, n, s, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: s,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Ns(t)), t !== null && ka(t)),
      e)
    : ((e.eventSystemFlags |= s),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function fp(e, t, n, s, o) {
  switch (t) {
    case "focusin":
      return (Nn = $r(Nn, e, t, n, s, o)), !0;
    case "dragenter":
      return (jn = $r(jn, e, t, n, s, o)), !0;
    case "mouseover":
      return (Sn = $r(Sn, e, t, n, s, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return os.set(l, $r(os.get(l) || null, e, t, n, s, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), ls.set(l, $r(ls.get(l) || null, e, t, n, s, o)), !0
      );
  }
  return !1;
}
function ud(e) {
  var t = Ln(e.target);
  if (t !== null) {
    var n = Xn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Zc(n)), t !== null)) {
          (e.blockedOn = t),
            dd(e.priority, function () {
              id(n);
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
function Ws(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ll(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var s = new n.constructor(n.type, n);
      (Pl = s), n.target.dispatchEvent(s), (Pl = null);
    } else return (t = Ns(n)), t !== null && ka(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Si(e, t, n) {
  Ws(e) && n.delete(t);
}
function pp() {
  (Ol = !1),
    Nn !== null && Ws(Nn) && (Nn = null),
    jn !== null && Ws(jn) && (jn = null),
    Sn !== null && Ws(Sn) && (Sn = null),
    os.forEach(Si),
    ls.forEach(Si);
}
function Or(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ol ||
      ((Ol = !0),
      _t.unstable_scheduleCallback(_t.unstable_NormalPriority, pp)));
}
function as(e) {
  function t(o) {
    return Or(o, e);
  }
  if (0 < Is.length) {
    Or(Is[0], e);
    for (var n = 1; n < Is.length; n++) {
      var s = Is[n];
      s.blockedOn === e && (s.blockedOn = null);
    }
  }
  for (
    Nn !== null && Or(Nn, e),
      jn !== null && Or(jn, e),
      Sn !== null && Or(Sn, e),
      os.forEach(t),
      ls.forEach(t),
      n = 0;
    n < yn.length;
    n++
  )
    (s = yn[n]), s.blockedOn === e && (s.blockedOn = null);
  for (; 0 < yn.length && ((n = yn[0]), n.blockedOn === null); )
    ud(n), n.blockedOn === null && yn.shift();
}
var vr = pn.ReactCurrentBatchConfig,
  io = !0;
function mp(e, t, n, s) {
  var o = Oe,
    l = vr.transition;
  vr.transition = null;
  try {
    (Oe = 1), Da(e, t, n, s);
  } finally {
    (Oe = o), (vr.transition = l);
  }
}
function hp(e, t, n, s) {
  var o = Oe,
    l = vr.transition;
  vr.transition = null;
  try {
    (Oe = 4), Da(e, t, n, s);
  } finally {
    (Oe = o), (vr.transition = l);
  }
}
function Da(e, t, n, s) {
  if (io) {
    var o = Ll(e, t, n, s);
    if (o === null) cl(e, t, s, co, n), ji(e, s);
    else if (fp(o, e, t, n, s)) s.stopPropagation();
    else if ((ji(e, s), t & 4 && -1 < up.indexOf(e))) {
      for (; o !== null; ) {
        var l = Ns(o);
        if (
          (l !== null && ad(l),
          (l = Ll(e, t, n, s)),
          l === null && cl(e, t, s, co, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && s.stopPropagation();
    } else cl(e, t, s, null, n);
  }
}
var co = null;
function Ll(e, t, n, s) {
  if (((co = null), (e = ja(s)), (e = Ln(e)), e !== null))
    if (((t = Xn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Zc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (co = e), null;
}
function fd(e) {
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
      switch (np()) {
        case Sa:
          return 1;
        case rd:
          return 4;
        case lo:
        case rp:
          return 16;
        case sd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var wn = null,
  _a = null,
  qs = null;
function pd() {
  if (qs) return qs;
  var e,
    t = _a,
    n = t.length,
    s,
    o = "value" in wn ? wn.value : wn.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (s = 1; s <= a && t[n - s] === o[l - s]; s++);
  return (qs = o.slice(e, 1 < s ? 1 - s : void 0));
}
function Ys(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ps() {
  return !0;
}
function Ci() {
  return !1;
}
function Et(e) {
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
        ? Ps
        : Ci),
      (this.isPropagationStopped = Ci),
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
          (this.isDefaultPrevented = Ps));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ps));
      },
      persist: function () {},
      isPersistent: Ps,
    }),
    t
  );
}
var Ir = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ma = Et(Ir),
  bs = qe({}, Ir, { view: 0, detail: 0 }),
  gp = Et(bs),
  el,
  tl,
  Lr,
  Eo = qe({}, bs, {
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
    getModifierState: Ea,
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
        : (e !== Lr &&
            (Lr && e.type === "mousemove"
              ? ((el = e.screenX - Lr.screenX), (tl = e.screenY - Lr.screenY))
              : (tl = el = 0),
            (Lr = e)),
          el);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : tl;
    },
  }),
  ki = Et(Eo),
  xp = qe({}, Eo, { dataTransfer: 0 }),
  yp = Et(xp),
  vp = qe({}, bs, { relatedTarget: 0 }),
  nl = Et(vp),
  wp = qe({}, Ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bp = Et(wp),
  Np = qe({}, Ir, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  jp = Et(Np),
  Sp = qe({}, Ir, { data: 0 }),
  Di = Et(Sp),
  Cp = {
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
  kp = {
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
  Dp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function _p(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Dp[e]) ? !!t[e] : !1;
}
function Ea() {
  return _p;
}
var Mp = qe({}, bs, {
    key: function (e) {
      if (e.key) {
        var t = Cp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ys(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? kp[e.keyCode] || "Unidentified"
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
    getModifierState: Ea,
    charCode: function (e) {
      return e.type === "keypress" ? Ys(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ys(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ep = Et(Mp),
  Ip = qe({}, Eo, {
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
  _i = Et(Ip),
  Pp = qe({}, bs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ea,
  }),
  Tp = Et(Pp),
  Rp = qe({}, Ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ap = Et(Rp),
  $p = qe({}, Eo, {
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
  Op = Et($p),
  Lp = [9, 13, 27, 32],
  Ia = cn && "CompositionEvent" in window,
  Yr = null;
cn && "documentMode" in document && (Yr = document.documentMode);
var Up = cn && "TextEvent" in window && !Yr,
  md = cn && (!Ia || (Yr && 8 < Yr && 11 >= Yr)),
  Mi = " ",
  Ei = !1;
function hd(e, t) {
  switch (e) {
    case "keyup":
      return Lp.indexOf(t.keyCode) !== -1;
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
function gd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var or = !1;
function Bp(e, t) {
  switch (e) {
    case "compositionend":
      return gd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ei = !0), Mi);
    case "textInput":
      return (e = t.data), e === Mi && Ei ? null : e;
    default:
      return null;
  }
}
function zp(e, t) {
  if (or)
    return e === "compositionend" || (!Ia && hd(e, t))
      ? ((e = pd()), (qs = _a = wn = null), (or = !1), e)
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
      return md && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Gp = {
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
function Ii(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Gp[e.type] : t === "textarea";
}
function xd(e, t, n, s) {
  Yc(s),
    (t = uo(t, "onChange")),
    0 < t.length &&
      ((n = new Ma("onChange", "change", null, n, s)),
      e.push({ event: n, listeners: t }));
}
var Xr = null,
  is = null;
function Fp(e) {
  _d(e, 0);
}
function Io(e) {
  var t = ir(e);
  if (zc(t)) return e;
}
function Hp(e, t) {
  if (e === "change") return t;
}
var yd = !1;
if (cn) {
  var rl;
  if (cn) {
    var sl = "oninput" in document;
    if (!sl) {
      var Pi = document.createElement("div");
      Pi.setAttribute("oninput", "return;"),
        (sl = typeof Pi.oninput == "function");
    }
    rl = sl;
  } else rl = !1;
  yd = rl && (!document.documentMode || 9 < document.documentMode);
}
function Ti() {
  Xr && (Xr.detachEvent("onpropertychange", vd), (is = Xr = null));
}
function vd(e) {
  if (e.propertyName === "value" && Io(is)) {
    var t = [];
    xd(t, is, e, ja(e)), Jc(Fp, t);
  }
}
function Vp(e, t, n) {
  e === "focusin"
    ? (Ti(), (Xr = t), (is = n), Xr.attachEvent("onpropertychange", vd))
    : e === "focusout" && Ti();
}
function Wp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Io(is);
}
function qp(e, t) {
  if (e === "click") return Io(t);
}
function Yp(e, t) {
  if (e === "input" || e === "change") return Io(t);
}
function Xp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var qt = typeof Object.is == "function" ? Object.is : Xp;
function cs(e, t) {
  if (qt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    s = Object.keys(t);
  if (n.length !== s.length) return !1;
  for (s = 0; s < n.length; s++) {
    var o = n[s];
    if (!wl.call(t, o) || !qt(e[o], t[o])) return !1;
  }
  return !0;
}
function Ri(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ai(e, t) {
  var n = Ri(e);
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
    n = Ri(n);
  }
}
function wd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? wd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function bd() {
  for (var e = window, t = ro(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ro(e.document);
  }
  return t;
}
function Pa(e) {
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
function Qp(e) {
  var t = bd(),
    n = e.focusedElem,
    s = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    wd(n.ownerDocument.documentElement, n)
  ) {
    if (s !== null && Pa(n)) {
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
          (o = Ai(n, l));
        var a = Ai(n, s);
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
var Kp = cn && "documentMode" in document && 11 >= document.documentMode,
  lr = null,
  Ul = null,
  Qr = null,
  Bl = !1;
function $i(e, t, n) {
  var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bl ||
    lr == null ||
    lr !== ro(s) ||
    ((s = lr),
    "selectionStart" in s && Pa(s)
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
    (Qr && cs(Qr, s)) ||
      ((Qr = s),
      (s = uo(Ul, "onSelect")),
      0 < s.length &&
        ((t = new Ma("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: s }),
        (t.target = lr))));
}
function Ts(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ar = {
    animationend: Ts("Animation", "AnimationEnd"),
    animationiteration: Ts("Animation", "AnimationIteration"),
    animationstart: Ts("Animation", "AnimationStart"),
    transitionend: Ts("Transition", "TransitionEnd"),
  },
  ol = {},
  Nd = {};
cn &&
  ((Nd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ar.animationend.animation,
    delete ar.animationiteration.animation,
    delete ar.animationstart.animation),
  "TransitionEvent" in window || delete ar.transitionend.transition);
function Po(e) {
  if (ol[e]) return ol[e];
  if (!ar[e]) return e;
  var t = ar[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Nd) return (ol[e] = t[n]);
  return e;
}
var jd = Po("animationend"),
  Sd = Po("animationiteration"),
  Cd = Po("animationstart"),
  kd = Po("transitionend"),
  Dd = new Map(),
  Oi =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Pn(e, t) {
  Dd.set(e, t), Yn(t, [e]);
}
for (var ll = 0; ll < Oi.length; ll++) {
  var al = Oi[ll],
    Jp = al.toLowerCase(),
    Zp = al[0].toUpperCase() + al.slice(1);
  Pn(Jp, "on" + Zp);
}
Pn(jd, "onAnimationEnd");
Pn(Sd, "onAnimationIteration");
Pn(Cd, "onAnimationStart");
Pn("dblclick", "onDoubleClick");
Pn("focusin", "onFocus");
Pn("focusout", "onBlur");
Pn(kd, "onTransitionEnd");
Nr("onMouseEnter", ["mouseout", "mouseover"]);
Nr("onMouseLeave", ["mouseout", "mouseover"]);
Nr("onPointerEnter", ["pointerout", "pointerover"]);
Nr("onPointerLeave", ["pointerout", "pointerover"]);
Yn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Yn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Yn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Yn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Yn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Yn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Vr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  em = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));
function Li(e, t, n) {
  var s = e.type || "unknown-event";
  (e.currentTarget = n), Jf(s, t, void 0, e), (e.currentTarget = null);
}
function _d(e, t) {
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
          Li(o, i, g), (l = c);
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
          Li(o, i, g), (l = c);
        }
    }
  }
  if (oo) throw ((e = Al), (oo = !1), (Al = null), e);
}
function Be(e, t) {
  var n = t[Vl];
  n === void 0 && (n = t[Vl] = new Set());
  var s = e + "__bubble";
  n.has(s) || (Md(t, e, 2, !1), n.add(s));
}
function il(e, t, n) {
  var s = 0;
  t && (s |= 4), Md(n, e, s, t);
}
var Rs = "_reactListening" + Math.random().toString(36).slice(2);
function ds(e) {
  if (!e[Rs]) {
    (e[Rs] = !0),
      $c.forEach(function (n) {
        n !== "selectionchange" && (em.has(n) || il(n, !1, e), il(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Rs] || ((t[Rs] = !0), il("selectionchange", !1, t));
  }
}
function Md(e, t, n, s) {
  switch (fd(t)) {
    case 1:
      var o = mp;
      break;
    case 4:
      o = hp;
      break;
    default:
      o = Da;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Rl ||
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
function cl(e, t, n, s, o) {
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
          if (((a = Ln(i)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            s = l = a;
            continue e;
          }
          i = i.parentNode;
        }
      }
      s = s.return;
    }
  Jc(function () {
    var g = l,
      m = ja(n),
      h = [];
    e: {
      var f = Dd.get(e);
      if (f !== void 0) {
        var S = Ma,
          b = e;
        switch (e) {
          case "keypress":
            if (Ys(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = Ep;
            break;
          case "focusin":
            (b = "focus"), (S = nl);
            break;
          case "focusout":
            (b = "blur"), (S = nl);
            break;
          case "beforeblur":
          case "afterblur":
            S = nl;
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
            S = ki;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = yp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Tp;
            break;
          case jd:
          case Sd:
          case Cd:
            S = bp;
            break;
          case kd:
            S = Ap;
            break;
          case "scroll":
            S = gp;
            break;
          case "wheel":
            S = Op;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = jp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = _i;
        }
        var _ = (t & 4) !== 0,
          k = !_ && e === "scroll",
          d = _ ? (f !== null ? f + "Capture" : null) : f;
        _ = [];
        for (var u = g, y; u !== null; ) {
          y = u;
          var D = y.stateNode;
          if (
            (y.tag === 5 &&
              D !== null &&
              ((y = D),
              d !== null && ((D = ss(u, d)), D != null && _.push(us(u, D, y)))),
            k)
          )
            break;
          u = u.return;
        }
        0 < _.length &&
          ((f = new S(f, b, null, n, m)), h.push({ event: f, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Pl &&
            (b = n.relatedTarget || n.fromElement) &&
            (Ln(b) || b[dn]))
        )
          break e;
        if (
          (S || f) &&
          ((f =
            m.window === m
              ? m
              : (f = m.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          S
            ? ((b = n.relatedTarget || n.toElement),
              (S = g),
              (b = b ? Ln(b) : null),
              b !== null &&
                ((k = Xn(b)), b !== k || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
            : ((S = null), (b = g)),
          S !== b)
        ) {
          if (
            ((_ = ki),
            (D = "onMouseLeave"),
            (d = "onMouseEnter"),
            (u = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((_ = _i),
              (D = "onPointerLeave"),
              (d = "onPointerEnter"),
              (u = "pointer")),
            (k = S == null ? f : ir(S)),
            (y = b == null ? f : ir(b)),
            (f = new _(D, u + "leave", S, n, m)),
            (f.target = k),
            (f.relatedTarget = y),
            (D = null),
            Ln(m) === g &&
              ((_ = new _(d, u + "enter", b, n, m)),
              (_.target = y),
              (_.relatedTarget = k),
              (D = _)),
            (k = D),
            S && b)
          )
            t: {
              for (_ = S, d = b, u = 0, y = _; y; y = nr(y)) u++;
              for (y = 0, D = d; D; D = nr(D)) y++;
              for (; 0 < u - y; ) (_ = nr(_)), u--;
              for (; 0 < y - u; ) (d = nr(d)), y--;
              for (; u--; ) {
                if (_ === d || (d !== null && _ === d.alternate)) break t;
                (_ = nr(_)), (d = nr(d));
              }
              _ = null;
            }
          else _ = null;
          S !== null && Ui(h, f, S, _, !1),
            b !== null && k !== null && Ui(h, k, b, _, !0);
        }
      }
      e: {
        if (
          ((f = g ? ir(g) : window),
          (S = f.nodeName && f.nodeName.toLowerCase()),
          S === "select" || (S === "input" && f.type === "file"))
        )
          var $ = Hp;
        else if (Ii(f))
          if (yd) $ = Yp;
          else {
            $ = Wp;
            var I = Vp;
          }
        else
          (S = f.nodeName) &&
            S.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            ($ = qp);
        if ($ && ($ = $(e, g))) {
          xd(h, $, n, m);
          break e;
        }
        I && I(e, f, g),
          e === "focusout" &&
            (I = f._wrapperState) &&
            I.controlled &&
            f.type === "number" &&
            Dl(f, "number", f.value);
      }
      switch (((I = g ? ir(g) : window), e)) {
        case "focusin":
          (Ii(I) || I.contentEditable === "true") &&
            ((lr = I), (Ul = g), (Qr = null));
          break;
        case "focusout":
          Qr = Ul = lr = null;
          break;
        case "mousedown":
          Bl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Bl = !1), $i(h, n, m);
          break;
        case "selectionchange":
          if (Kp) break;
        case "keydown":
        case "keyup":
          $i(h, n, m);
      }
      var R;
      if (Ia)
        e: {
          switch (e) {
            case "compositionstart":
              var G = "onCompositionStart";
              break e;
            case "compositionend":
              G = "onCompositionEnd";
              break e;
            case "compositionupdate":
              G = "onCompositionUpdate";
              break e;
          }
          G = void 0;
        }
      else
        or
          ? hd(e, n) && (G = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (G = "onCompositionStart");
      G &&
        (md &&
          n.locale !== "ko" &&
          (or || G !== "onCompositionStart"
            ? G === "onCompositionEnd" && or && (R = pd())
            : ((wn = m),
              (_a = "value" in wn ? wn.value : wn.textContent),
              (or = !0))),
        (I = uo(g, G)),
        0 < I.length &&
          ((G = new Di(G, e, null, n, m)),
          h.push({ event: G, listeners: I }),
          R ? (G.data = R) : ((R = gd(n)), R !== null && (G.data = R)))),
        (R = Up ? Bp(e, n) : zp(e, n)) &&
          ((g = uo(g, "onBeforeInput")),
          0 < g.length &&
            ((m = new Di("onBeforeInput", "beforeinput", null, n, m)),
            h.push({ event: m, listeners: g }),
            (m.data = R)));
    }
    _d(h, t);
  });
}
function us(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function uo(e, t) {
  for (var n = t + "Capture", s = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = ss(e, n)),
      l != null && s.unshift(us(e, l, o)),
      (l = ss(e, t)),
      l != null && s.push(us(e, l, o))),
      (e = e.return);
  }
  return s;
}
function nr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ui(e, t, n, s, o) {
  for (var l = t._reactName, a = []; n !== null && n !== s; ) {
    var i = n,
      c = i.alternate,
      g = i.stateNode;
    if (c !== null && c === s) break;
    i.tag === 5 &&
      g !== null &&
      ((i = g),
      o
        ? ((c = ss(n, l)), c != null && a.unshift(us(n, c, i)))
        : o || ((c = ss(n, l)), c != null && a.push(us(n, c, i)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var tm = /\r\n?/g,
  nm = /\u0000|\uFFFD/g;
function Bi(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      tm,
      `
`
    )
    .replace(nm, "");
}
function As(e, t, n) {
  if (((t = Bi(t)), Bi(e) !== t && n)) throw Error(se(425));
}
function fo() {}
var zl = null,
  Gl = null;
function Fl(e, t) {
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
var Hl = typeof setTimeout == "function" ? setTimeout : void 0,
  rm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  zi = typeof Promise == "function" ? Promise : void 0,
  sm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof zi < "u"
      ? function (e) {
          return zi.resolve(null).then(e).catch(om);
        }
      : Hl;
function om(e) {
  setTimeout(function () {
    throw e;
  });
}
function dl(e, t) {
  var n = t,
    s = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (s === 0) {
          e.removeChild(o), as(t);
          return;
        }
        s--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || s++;
    n = o;
  } while (n);
  as(t);
}
function Cn(e) {
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
var Pr = Math.random().toString(36).slice(2),
  Jt = "__reactFiber$" + Pr,
  fs = "__reactProps$" + Pr,
  dn = "__reactContainer$" + Pr,
  Vl = "__reactEvents$" + Pr,
  lm = "__reactListeners$" + Pr,
  am = "__reactHandles$" + Pr;
function Ln(e) {
  var t = e[Jt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[dn] || n[Jt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Gi(e); e !== null; ) {
          if ((n = e[Jt])) return n;
          e = Gi(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ns(e) {
  return (
    (e = e[Jt] || e[dn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ir(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(se(33));
}
function To(e) {
  return e[fs] || null;
}
var Wl = [],
  cr = -1;
function Tn(e) {
  return { current: e };
}
function ze(e) {
  0 > cr || ((e.current = Wl[cr]), (Wl[cr] = null), cr--);
}
function Ue(e, t) {
  cr++, (Wl[cr] = e.current), (e.current = t);
}
var In = {},
  dt = Tn(In),
  wt = Tn(!1),
  Fn = In;
function jr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return In;
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
function bt(e) {
  return (e = e.childContextTypes), e != null;
}
function po() {
  ze(wt), ze(dt);
}
function Fi(e, t, n) {
  if (dt.current !== In) throw Error(se(168));
  Ue(dt, t), Ue(wt, n);
}
function Ed(e, t, n) {
  var s = e.stateNode;
  if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
    return n;
  s = s.getChildContext();
  for (var o in s) if (!(o in t)) throw Error(se(108, Vf(e) || "Unknown", o));
  return qe({}, n, s);
}
function mo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || In),
    (Fn = dt.current),
    Ue(dt, e),
    Ue(wt, wt.current),
    !0
  );
}
function Hi(e, t, n) {
  var s = e.stateNode;
  if (!s) throw Error(se(169));
  n
    ? ((e = Ed(e, t, Fn)),
      (s.__reactInternalMemoizedMergedChildContext = e),
      ze(wt),
      ze(dt),
      Ue(dt, e))
    : ze(wt),
    Ue(wt, n);
}
var rn = null,
  Ro = !1,
  ul = !1;
function Id(e) {
  rn === null ? (rn = [e]) : rn.push(e);
}
function im(e) {
  (Ro = !0), Id(e);
}
function Rn() {
  if (!ul && rn !== null) {
    ul = !0;
    var e = 0,
      t = Oe;
    try {
      var n = rn;
      for (Oe = 1; e < n.length; e++) {
        var s = n[e];
        do s = s(!0);
        while (s !== null);
      }
      (rn = null), (Ro = !1);
    } catch (o) {
      throw (rn !== null && (rn = rn.slice(e + 1)), nd(Sa, Rn), o);
    } finally {
      (Oe = t), (ul = !1);
    }
  }
  return null;
}
var dr = [],
  ur = 0,
  ho = null,
  go = 0,
  Pt = [],
  Tt = 0,
  Hn = null,
  on = 1,
  ln = "";
function $n(e, t) {
  (dr[ur++] = go), (dr[ur++] = ho), (ho = e), (go = t);
}
function Pd(e, t, n) {
  (Pt[Tt++] = on), (Pt[Tt++] = ln), (Pt[Tt++] = Hn), (Hn = e);
  var s = on;
  e = ln;
  var o = 32 - Vt(s) - 1;
  (s &= ~(1 << o)), (n += 1);
  var l = 32 - Vt(t) + o;
  if (30 < l) {
    var a = o - (o % 5);
    (l = (s & ((1 << a) - 1)).toString(32)),
      (s >>= a),
      (o -= a),
      (on = (1 << (32 - Vt(t) + o)) | (n << o) | s),
      (ln = l + e);
  } else (on = (1 << l) | (n << o) | s), (ln = e);
}
function Ta(e) {
  e.return !== null && ($n(e, 1), Pd(e, 1, 0));
}
function Ra(e) {
  for (; e === ho; )
    (ho = dr[--ur]), (dr[ur] = null), (go = dr[--ur]), (dr[ur] = null);
  for (; e === Hn; )
    (Hn = Pt[--Tt]),
      (Pt[Tt] = null),
      (ln = Pt[--Tt]),
      (Pt[Tt] = null),
      (on = Pt[--Tt]),
      (Pt[Tt] = null);
}
var Dt = null,
  kt = null,
  Ge = !1,
  Ht = null;
function Td(e, t) {
  var n = Rt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Vi(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Dt = e), (kt = Cn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Dt = e), (kt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Hn !== null ? { id: on, overflow: ln } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Dt = e),
            (kt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ql(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yl(e) {
  if (Ge) {
    var t = kt;
    if (t) {
      var n = t;
      if (!Vi(e, t)) {
        if (ql(e)) throw Error(se(418));
        t = Cn(n.nextSibling);
        var s = Dt;
        t && Vi(e, t)
          ? Td(s, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ge = !1), (Dt = e));
      }
    } else {
      if (ql(e)) throw Error(se(418));
      (e.flags = (e.flags & -4097) | 2), (Ge = !1), (Dt = e);
    }
  }
}
function Wi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Dt = e;
}
function $s(e) {
  if (e !== Dt) return !1;
  if (!Ge) return Wi(e), (Ge = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Fl(e.type, e.memoizedProps))),
    t && (t = kt))
  ) {
    if (ql(e)) throw (Rd(), Error(se(418)));
    for (; t; ) Td(e, t), (t = Cn(t.nextSibling));
  }
  if ((Wi(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(se(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              kt = Cn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      kt = null;
    }
  } else kt = Dt ? Cn(e.stateNode.nextSibling) : null;
  return !0;
}
function Rd() {
  for (var e = kt; e; ) e = Cn(e.nextSibling);
}
function Sr() {
  (kt = Dt = null), (Ge = !1);
}
function Aa(e) {
  Ht === null ? (Ht = [e]) : Ht.push(e);
}
var cm = pn.ReactCurrentBatchConfig;
function Ur(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(se(309));
        var s = n.stateNode;
      }
      if (!s) throw Error(se(147, e));
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
    if (typeof e != "string") throw Error(se(284));
    if (!n._owner) throw Error(se(290, e));
  }
  return e;
}
function Os(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      se(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function qi(e) {
  var t = e._init;
  return t(e._payload);
}
function Ad(e) {
  function t(d, u) {
    if (e) {
      var y = d.deletions;
      y === null ? ((d.deletions = [u]), (d.flags |= 16)) : y.push(u);
    }
  }
  function n(d, u) {
    if (!e) return null;
    for (; u !== null; ) t(d, u), (u = u.sibling);
    return null;
  }
  function s(d, u) {
    for (d = new Map(); u !== null; )
      u.key !== null ? d.set(u.key, u) : d.set(u.index, u), (u = u.sibling);
    return d;
  }
  function o(d, u) {
    return (d = Mn(d, u)), (d.index = 0), (d.sibling = null), d;
  }
  function l(d, u, y) {
    return (
      (d.index = y),
      e
        ? ((y = d.alternate),
          y !== null
            ? ((y = y.index), y < u ? ((d.flags |= 2), u) : y)
            : ((d.flags |= 2), u))
        : ((d.flags |= 1048576), u)
    );
  }
  function a(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function i(d, u, y, D) {
    return u === null || u.tag !== 6
      ? ((u = yl(y, d.mode, D)), (u.return = d), u)
      : ((u = o(u, y)), (u.return = d), u);
  }
  function c(d, u, y, D) {
    var $ = y.type;
    return $ === sr
      ? m(d, u, y.props.children, D, y.key)
      : u !== null &&
        (u.elementType === $ ||
          (typeof $ == "object" &&
            $ !== null &&
            $.$$typeof === gn &&
            qi($) === u.type))
      ? ((D = o(u, y.props)), (D.ref = Ur(d, u, y)), (D.return = d), D)
      : ((D = to(y.type, y.key, y.props, null, d.mode, D)),
        (D.ref = Ur(d, u, y)),
        (D.return = d),
        D);
  }
  function g(d, u, y, D) {
    return u === null ||
      u.tag !== 4 ||
      u.stateNode.containerInfo !== y.containerInfo ||
      u.stateNode.implementation !== y.implementation
      ? ((u = vl(y, d.mode, D)), (u.return = d), u)
      : ((u = o(u, y.children || [])), (u.return = d), u);
  }
  function m(d, u, y, D, $) {
    return u === null || u.tag !== 7
      ? ((u = Gn(y, d.mode, D, $)), (u.return = d), u)
      : ((u = o(u, y)), (u.return = d), u);
  }
  function h(d, u, y) {
    if ((typeof u == "string" && u !== "") || typeof u == "number")
      return (u = yl("" + u, d.mode, y)), (u.return = d), u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case ks:
          return (
            (y = to(u.type, u.key, u.props, null, d.mode, y)),
            (y.ref = Ur(d, null, u)),
            (y.return = d),
            y
          );
        case rr:
          return (u = vl(u, d.mode, y)), (u.return = d), u;
        case gn:
          var D = u._init;
          return h(d, D(u._payload), y);
      }
      if (Fr(u) || Rr(u))
        return (u = Gn(u, d.mode, y, null)), (u.return = d), u;
      Os(d, u);
    }
    return null;
  }
  function f(d, u, y, D) {
    var $ = u !== null ? u.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return $ !== null ? null : i(d, u, "" + y, D);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ks:
          return y.key === $ ? c(d, u, y, D) : null;
        case rr:
          return y.key === $ ? g(d, u, y, D) : null;
        case gn:
          return ($ = y._init), f(d, u, $(y._payload), D);
      }
      if (Fr(y) || Rr(y)) return $ !== null ? null : m(d, u, y, D, null);
      Os(d, y);
    }
    return null;
  }
  function S(d, u, y, D, $) {
    if ((typeof D == "string" && D !== "") || typeof D == "number")
      return (d = d.get(y) || null), i(u, d, "" + D, $);
    if (typeof D == "object" && D !== null) {
      switch (D.$$typeof) {
        case ks:
          return (d = d.get(D.key === null ? y : D.key) || null), c(u, d, D, $);
        case rr:
          return (d = d.get(D.key === null ? y : D.key) || null), g(u, d, D, $);
        case gn:
          var I = D._init;
          return S(d, u, y, I(D._payload), $);
      }
      if (Fr(D) || Rr(D)) return (d = d.get(y) || null), m(u, d, D, $, null);
      Os(u, D);
    }
    return null;
  }
  function b(d, u, y, D) {
    for (
      var $ = null, I = null, R = u, G = (u = 0), oe = null;
      R !== null && G < y.length;
      G++
    ) {
      R.index > G ? ((oe = R), (R = null)) : (oe = R.sibling);
      var P = f(d, R, y[G], D);
      if (P === null) {
        R === null && (R = oe);
        break;
      }
      e && R && P.alternate === null && t(d, R),
        (u = l(P, u, G)),
        I === null ? ($ = P) : (I.sibling = P),
        (I = P),
        (R = oe);
    }
    if (G === y.length) return n(d, R), Ge && $n(d, G), $;
    if (R === null) {
      for (; G < y.length; G++)
        (R = h(d, y[G], D)),
          R !== null &&
            ((u = l(R, u, G)), I === null ? ($ = R) : (I.sibling = R), (I = R));
      return Ge && $n(d, G), $;
    }
    for (R = s(d, R); G < y.length; G++)
      (oe = S(R, d, G, y[G], D)),
        oe !== null &&
          (e && oe.alternate !== null && R.delete(oe.key === null ? G : oe.key),
          (u = l(oe, u, G)),
          I === null ? ($ = oe) : (I.sibling = oe),
          (I = oe));
    return (
      e &&
        R.forEach(function (z) {
          return t(d, z);
        }),
      Ge && $n(d, G),
      $
    );
  }
  function _(d, u, y, D) {
    var $ = Rr(y);
    if (typeof $ != "function") throw Error(se(150));
    if (((y = $.call(y)), y == null)) throw Error(se(151));
    for (
      var I = ($ = null), R = u, G = (u = 0), oe = null, P = y.next();
      R !== null && !P.done;
      G++, P = y.next()
    ) {
      R.index > G ? ((oe = R), (R = null)) : (oe = R.sibling);
      var z = f(d, R, P.value, D);
      if (z === null) {
        R === null && (R = oe);
        break;
      }
      e && R && z.alternate === null && t(d, R),
        (u = l(z, u, G)),
        I === null ? ($ = z) : (I.sibling = z),
        (I = z),
        (R = oe);
    }
    if (P.done) return n(d, R), Ge && $n(d, G), $;
    if (R === null) {
      for (; !P.done; G++, P = y.next())
        (P = h(d, P.value, D)),
          P !== null &&
            ((u = l(P, u, G)), I === null ? ($ = P) : (I.sibling = P), (I = P));
      return Ge && $n(d, G), $;
    }
    for (R = s(d, R); !P.done; G++, P = y.next())
      (P = S(R, d, G, P.value, D)),
        P !== null &&
          (e && P.alternate !== null && R.delete(P.key === null ? G : P.key),
          (u = l(P, u, G)),
          I === null ? ($ = P) : (I.sibling = P),
          (I = P));
    return (
      e &&
        R.forEach(function (Z) {
          return t(d, Z);
        }),
      Ge && $n(d, G),
      $
    );
  }
  function k(d, u, y, D) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === sr &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case ks:
          e: {
            for (var $ = y.key, I = u; I !== null; ) {
              if (I.key === $) {
                if ((($ = y.type), $ === sr)) {
                  if (I.tag === 7) {
                    n(d, I.sibling),
                      (u = o(I, y.props.children)),
                      (u.return = d),
                      (d = u);
                    break e;
                  }
                } else if (
                  I.elementType === $ ||
                  (typeof $ == "object" &&
                    $ !== null &&
                    $.$$typeof === gn &&
                    qi($) === I.type)
                ) {
                  n(d, I.sibling),
                    (u = o(I, y.props)),
                    (u.ref = Ur(d, I, y)),
                    (u.return = d),
                    (d = u);
                  break e;
                }
                n(d, I);
                break;
              } else t(d, I);
              I = I.sibling;
            }
            y.type === sr
              ? ((u = Gn(y.props.children, d.mode, D, y.key)),
                (u.return = d),
                (d = u))
              : ((D = to(y.type, y.key, y.props, null, d.mode, D)),
                (D.ref = Ur(d, u, y)),
                (D.return = d),
                (d = D));
          }
          return a(d);
        case rr:
          e: {
            for (I = y.key; u !== null; ) {
              if (u.key === I)
                if (
                  u.tag === 4 &&
                  u.stateNode.containerInfo === y.containerInfo &&
                  u.stateNode.implementation === y.implementation
                ) {
                  n(d, u.sibling),
                    (u = o(u, y.children || [])),
                    (u.return = d),
                    (d = u);
                  break e;
                } else {
                  n(d, u);
                  break;
                }
              else t(d, u);
              u = u.sibling;
            }
            (u = vl(y, d.mode, D)), (u.return = d), (d = u);
          }
          return a(d);
        case gn:
          return (I = y._init), k(d, u, I(y._payload), D);
      }
      if (Fr(y)) return b(d, u, y, D);
      if (Rr(y)) return _(d, u, y, D);
      Os(d, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        u !== null && u.tag === 6
          ? (n(d, u.sibling), (u = o(u, y)), (u.return = d), (d = u))
          : (n(d, u), (u = yl(y, d.mode, D)), (u.return = d), (d = u)),
        a(d))
      : n(d, u);
  }
  return k;
}
var Cr = Ad(!0),
  $d = Ad(!1),
  xo = Tn(null),
  yo = null,
  fr = null,
  $a = null;
function Oa() {
  $a = fr = yo = null;
}
function La(e) {
  var t = xo.current;
  ze(xo), (e._currentValue = t);
}
function Xl(e, t, n) {
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
function wr(e, t) {
  (yo = e),
    ($a = fr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (yt = !0), (e.firstContext = null));
}
function Ot(e) {
  var t = e._currentValue;
  if ($a !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), fr === null)) {
      if (yo === null) throw Error(se(308));
      (fr = e), (yo.dependencies = { lanes: 0, firstContext: e });
    } else fr = fr.next = e;
  return t;
}
var Un = null;
function Ua(e) {
  Un === null ? (Un = [e]) : Un.push(e);
}
function Od(e, t, n, s) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Ua(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    un(e, s)
  );
}
function un(e, t) {
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
var xn = !1;
function Ba(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ld(e, t) {
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
function an(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function kn(e, t, n) {
  var s = e.updateQueue;
  if (s === null) return null;
  if (((s = s.shared), Ae & 2)) {
    var o = s.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (s.pending = t),
      un(e, n)
    );
  }
  return (
    (o = s.interleaved),
    o === null ? ((t.next = t), Ua(s)) : ((t.next = o.next), (o.next = t)),
    (s.interleaved = t),
    un(e, n)
  );
}
function Xs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var s = t.lanes;
    (s &= e.pendingLanes), (n |= s), (t.lanes = n), Ca(e, n);
  }
}
function Yi(e, t) {
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
function vo(e, t, n, s) {
  var o = e.updateQueue;
  xn = !1;
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
      var f = i.lane,
        S = i.eventTime;
      if ((s & f) === f) {
        m !== null &&
          (m = m.next =
            {
              eventTime: S,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var b = e,
            _ = i;
          switch (((f = t), (S = n), _.tag)) {
            case 1:
              if (((b = _.payload), typeof b == "function")) {
                h = b.call(S, h, f);
                break e;
              }
              h = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (
                ((b = _.payload),
                (f = typeof b == "function" ? b.call(S, h, f) : b),
                f == null)
              )
                break e;
              h = qe({}, h, f);
              break e;
            case 2:
              xn = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [i]) : f.push(i));
      } else
        (S = {
          eventTime: S,
          lane: f,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          m === null ? ((g = m = S), (c = h)) : (m = m.next = S),
          (a |= f);
      if (((i = i.next), i === null)) {
        if (((i = o.shared.pending), i === null)) break;
        (f = i),
          (i = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
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
    (Wn |= a), (e.lanes = a), (e.memoizedState = h);
  }
}
function Xi(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var s = e[t],
        o = s.callback;
      if (o !== null) {
        if (((s.callback = null), (s = n), typeof o != "function"))
          throw Error(se(191, o));
        o.call(s);
      }
    }
}
var js = {},
  en = Tn(js),
  ps = Tn(js),
  ms = Tn(js);
function Bn(e) {
  if (e === js) throw Error(se(174));
  return e;
}
function za(e, t) {
  switch ((Ue(ms, t), Ue(ps, e), Ue(en, js), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ml(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ml(t, e));
  }
  ze(en), Ue(en, t);
}
function kr() {
  ze(en), ze(ps), ze(ms);
}
function Ud(e) {
  Bn(ms.current);
  var t = Bn(en.current),
    n = Ml(t, e.type);
  t !== n && (Ue(ps, e), Ue(en, n));
}
function Ga(e) {
  ps.current === e && (ze(en), ze(ps));
}
var He = Tn(0);
function wo(e) {
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
var fl = [];
function Fa() {
  for (var e = 0; e < fl.length; e++)
    fl[e]._workInProgressVersionPrimary = null;
  fl.length = 0;
}
var Qs = pn.ReactCurrentDispatcher,
  pl = pn.ReactCurrentBatchConfig,
  Vn = 0,
  We = null,
  et = null,
  nt = null,
  bo = !1,
  Kr = !1,
  hs = 0,
  dm = 0;
function at() {
  throw Error(se(321));
}
function Ha(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!qt(e[n], t[n])) return !1;
  return !0;
}
function Va(e, t, n, s, o, l) {
  if (
    ((Vn = l),
    (We = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Qs.current = e === null || e.memoizedState === null ? mm : hm),
    (e = n(s, o)),
    Kr)
  ) {
    l = 0;
    do {
      if (((Kr = !1), (hs = 0), 25 <= l)) throw Error(se(301));
      (l += 1),
        (nt = et = null),
        (t.updateQueue = null),
        (Qs.current = gm),
        (e = n(s, o));
    } while (Kr);
  }
  if (
    ((Qs.current = No),
    (t = et !== null && et.next !== null),
    (Vn = 0),
    (nt = et = We = null),
    (bo = !1),
    t)
  )
    throw Error(se(300));
  return e;
}
function Wa() {
  var e = hs !== 0;
  return (hs = 0), e;
}
function Kt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return nt === null ? (We.memoizedState = nt = e) : (nt = nt.next = e), nt;
}
function Lt() {
  if (et === null) {
    var e = We.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = et.next;
  var t = nt === null ? We.memoizedState : nt.next;
  if (t !== null) (nt = t), (et = e);
  else {
    if (e === null) throw Error(se(310));
    (et = e),
      (e = {
        memoizedState: et.memoizedState,
        baseState: et.baseState,
        baseQueue: et.baseQueue,
        queue: et.queue,
        next: null,
      }),
      nt === null ? (We.memoizedState = nt = e) : (nt = nt.next = e);
  }
  return nt;
}
function gs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ml(e) {
  var t = Lt(),
    n = t.queue;
  if (n === null) throw Error(se(311));
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
      if ((Vn & m) === m)
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
          (We.lanes |= m),
          (Wn |= m);
      }
      g = g.next;
    } while (g !== null && g !== l);
    c === null ? (a = s) : (c.next = i),
      qt(s, t.memoizedState) || (yt = !0),
      (t.memoizedState = s),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = s);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (We.lanes |= l), (Wn |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function hl(e) {
  var t = Lt(),
    n = t.queue;
  if (n === null) throw Error(se(311));
  n.lastRenderedReducer = e;
  var s = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (l = e(l, a.action)), (a = a.next);
    while (a !== o);
    qt(l, t.memoizedState) || (yt = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, s];
}
function Bd() {}
function zd(e, t) {
  var n = We,
    s = Lt(),
    o = t(),
    l = !qt(s.memoizedState, o);
  if (
    (l && ((s.memoizedState = o), (yt = !0)),
    (s = s.queue),
    qa(Hd.bind(null, n, s, e), [e]),
    s.getSnapshot !== t || l || (nt !== null && nt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      xs(9, Fd.bind(null, n, s, o, t), void 0, null),
      rt === null)
    )
      throw Error(se(349));
    Vn & 30 || Gd(n, t, o);
  }
  return o;
}
function Gd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = We.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (We.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Fd(e, t, n, s) {
  (t.value = n), (t.getSnapshot = s), Vd(t) && Wd(e);
}
function Hd(e, t, n) {
  return n(function () {
    Vd(t) && Wd(e);
  });
}
function Vd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qt(e, n);
  } catch {
    return !0;
  }
}
function Wd(e) {
  var t = un(e, 1);
  t !== null && Wt(t, e, 1, -1);
}
function Qi(e) {
  var t = Kt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: gs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = pm.bind(null, We, e)),
    [t.memoizedState, e]
  );
}
function xs(e, t, n, s) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: s, next: null }),
    (t = We.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (We.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((s = n.next), (n.next = e), (e.next = s), (t.lastEffect = e))),
    e
  );
}
function qd() {
  return Lt().memoizedState;
}
function Ks(e, t, n, s) {
  var o = Kt();
  (We.flags |= e),
    (o.memoizedState = xs(1 | t, n, void 0, s === void 0 ? null : s));
}
function Ao(e, t, n, s) {
  var o = Lt();
  s = s === void 0 ? null : s;
  var l = void 0;
  if (et !== null) {
    var a = et.memoizedState;
    if (((l = a.destroy), s !== null && Ha(s, a.deps))) {
      o.memoizedState = xs(t, n, l, s);
      return;
    }
  }
  (We.flags |= e), (o.memoizedState = xs(1 | t, n, l, s));
}
function Ki(e, t) {
  return Ks(8390656, 8, e, t);
}
function qa(e, t) {
  return Ao(2048, 8, e, t);
}
function Yd(e, t) {
  return Ao(4, 2, e, t);
}
function Xd(e, t) {
  return Ao(4, 4, e, t);
}
function Qd(e, t) {
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
function Kd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ao(4, 4, Qd.bind(null, t, e), n)
  );
}
function Ya() {}
function Jd(e, t) {
  var n = Lt();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && Ha(t, s[1])
    ? s[0]
    : ((n.memoizedState = [e, t]), e);
}
function Zd(e, t) {
  var n = Lt();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && Ha(t, s[1])
    ? s[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function eu(e, t, n) {
  return Vn & 21
    ? (qt(n, t) || ((n = od()), (We.lanes |= n), (Wn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (yt = !0)), (e.memoizedState = n));
}
function um(e, t) {
  var n = Oe;
  (Oe = n !== 0 && 4 > n ? n : 4), e(!0);
  var s = pl.transition;
  pl.transition = {};
  try {
    e(!1), t();
  } finally {
    (Oe = n), (pl.transition = s);
  }
}
function tu() {
  return Lt().memoizedState;
}
function fm(e, t, n) {
  var s = _n(e);
  if (
    ((n = {
      lane: s,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    nu(e))
  )
    ru(t, n);
  else if (((n = Od(e, t, n, s)), n !== null)) {
    var o = pt();
    Wt(n, e, s, o), su(n, t, s);
  }
}
function pm(e, t, n) {
  var s = _n(e),
    o = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (nu(e)) ru(t, o);
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
        if (((o.hasEagerState = !0), (o.eagerState = i), qt(i, a))) {
          var c = t.interleaved;
          c === null
            ? ((o.next = o), Ua(t))
            : ((o.next = c.next), (c.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Od(e, t, o, s)),
      n !== null && ((o = pt()), Wt(n, e, s, o), su(n, t, s));
  }
}
function nu(e) {
  var t = e.alternate;
  return e === We || (t !== null && t === We);
}
function ru(e, t) {
  Kr = bo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function su(e, t, n) {
  if (n & 4194240) {
    var s = t.lanes;
    (s &= e.pendingLanes), (n |= s), (t.lanes = n), Ca(e, n);
  }
}
var No = {
    readContext: Ot,
    useCallback: at,
    useContext: at,
    useEffect: at,
    useImperativeHandle: at,
    useInsertionEffect: at,
    useLayoutEffect: at,
    useMemo: at,
    useReducer: at,
    useRef: at,
    useState: at,
    useDebugValue: at,
    useDeferredValue: at,
    useTransition: at,
    useMutableSource: at,
    useSyncExternalStore: at,
    useId: at,
    unstable_isNewReconciler: !1,
  },
  mm = {
    readContext: Ot,
    useCallback: function (e, t) {
      return (Kt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ot,
    useEffect: Ki,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ks(4194308, 4, Qd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ks(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ks(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Kt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var s = Kt();
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
        (e = e.dispatch = fm.bind(null, We, e)),
        [s.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Kt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Qi,
    useDebugValue: Ya,
    useDeferredValue: function (e) {
      return (Kt().memoizedState = e);
    },
    useTransition: function () {
      var e = Qi(!1),
        t = e[0];
      return (e = um.bind(null, e[1])), (Kt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var s = We,
        o = Kt();
      if (Ge) {
        if (n === void 0) throw Error(se(407));
        n = n();
      } else {
        if (((n = t()), rt === null)) throw Error(se(349));
        Vn & 30 || Gd(s, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Ki(Hd.bind(null, s, l, e), [e]),
        (s.flags |= 2048),
        xs(9, Fd.bind(null, s, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Kt(),
        t = rt.identifierPrefix;
      if (Ge) {
        var n = ln,
          s = on;
        (n = (s & ~(1 << (32 - Vt(s) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = hs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = dm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  hm = {
    readContext: Ot,
    useCallback: Jd,
    useContext: Ot,
    useEffect: qa,
    useImperativeHandle: Kd,
    useInsertionEffect: Yd,
    useLayoutEffect: Xd,
    useMemo: Zd,
    useReducer: ml,
    useRef: qd,
    useState: function () {
      return ml(gs);
    },
    useDebugValue: Ya,
    useDeferredValue: function (e) {
      var t = Lt();
      return eu(t, et.memoizedState, e);
    },
    useTransition: function () {
      var e = ml(gs)[0],
        t = Lt().memoizedState;
      return [e, t];
    },
    useMutableSource: Bd,
    useSyncExternalStore: zd,
    useId: tu,
    unstable_isNewReconciler: !1,
  },
  gm = {
    readContext: Ot,
    useCallback: Jd,
    useContext: Ot,
    useEffect: qa,
    useImperativeHandle: Kd,
    useInsertionEffect: Yd,
    useLayoutEffect: Xd,
    useMemo: Zd,
    useReducer: hl,
    useRef: qd,
    useState: function () {
      return hl(gs);
    },
    useDebugValue: Ya,
    useDeferredValue: function (e) {
      var t = Lt();
      return et === null ? (t.memoizedState = e) : eu(t, et.memoizedState, e);
    },
    useTransition: function () {
      var e = hl(gs)[0],
        t = Lt().memoizedState;
      return [e, t];
    },
    useMutableSource: Bd,
    useSyncExternalStore: zd,
    useId: tu,
    unstable_isNewReconciler: !1,
  };
function Gt(e, t) {
  if (e && e.defaultProps) {
    (t = qe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ql(e, t, n, s) {
  (t = e.memoizedState),
    (n = n(s, t)),
    (n = n == null ? t : qe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var $o = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Xn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var s = pt(),
      o = _n(e),
      l = an(s, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = kn(e, l, o)),
      t !== null && (Wt(t, e, o, s), Xs(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var s = pt(),
      o = _n(e),
      l = an(s, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = kn(e, l, o)),
      t !== null && (Wt(t, e, o, s), Xs(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = pt(),
      s = _n(e),
      o = an(n, s);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = kn(e, o, s)),
      t !== null && (Wt(t, e, s, n), Xs(t, e, s));
  },
};
function Ji(e, t, n, s, o, l, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(s, l, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !cs(n, s) || !cs(o, l)
      : !0
  );
}
function ou(e, t, n) {
  var s = !1,
    o = In,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Ot(l))
      : ((o = bt(t) ? Fn : dt.current),
        (s = t.contextTypes),
        (l = (s = s != null) ? jr(e, o) : In)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = $o),
    (e.stateNode = t),
    (t._reactInternals = e),
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Zi(e, t, n, s) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, s),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, s),
    t.state !== e && $o.enqueueReplaceState(t, t.state, null);
}
function Kl(e, t, n, s) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Ba(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = Ot(l))
    : ((l = bt(t) ? Fn : dt.current), (o.context = jr(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Ql(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && $o.enqueueReplaceState(o, o.state, null),
      vo(e, n, o, s),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Dr(e, t) {
  try {
    var n = "",
      s = t;
    do (n += Hf(s)), (s = s.return);
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
function gl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Jl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var xm = typeof WeakMap == "function" ? WeakMap : Map;
function lu(e, t, n) {
  (n = an(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var s = t.value;
  return (
    (n.callback = function () {
      So || ((So = !0), (ia = s)), Jl(e, t);
    }),
    n
  );
}
function au(e, t, n) {
  (n = an(-1, n)), (n.tag = 3);
  var s = e.type.getDerivedStateFromError;
  if (typeof s == "function") {
    var o = t.value;
    (n.payload = function () {
      return s(o);
    }),
      (n.callback = function () {
        Jl(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Jl(e, t),
          typeof s != "function" &&
            (Dn === null ? (Dn = new Set([this])) : Dn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function ec(e, t, n) {
  var s = e.pingCache;
  if (s === null) {
    s = e.pingCache = new xm();
    var o = new Set();
    s.set(t, o);
  } else (o = s.get(t)), o === void 0 && ((o = new Set()), s.set(t, o));
  o.has(n) || (o.add(n), (e = Im.bind(null, e, t, n)), t.then(e, e));
}
function tc(e) {
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
function nc(e, t, n, s, o) {
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
              : ((t = an(-1, 1)), (t.tag = 2), kn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ym = pn.ReactCurrentOwner,
  yt = !1;
function ft(e, t, n, s) {
  t.child = e === null ? $d(t, null, n, s) : Cr(t, e.child, n, s);
}
function rc(e, t, n, s, o) {
  n = n.render;
  var l = t.ref;
  return (
    wr(t, o),
    (s = Va(e, t, n, s, l, o)),
    (n = Wa()),
    e !== null && !yt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        fn(e, t, o))
      : (Ge && n && Ta(t), (t.flags |= 1), ft(e, t, s, o), t.child)
  );
}
function sc(e, t, n, s, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !ni(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), iu(e, t, l, s, o))
      : ((e = to(n.type, null, s, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var a = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : cs), n(a, s) && e.ref === t.ref)
    )
      return fn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Mn(l, s)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function iu(e, t, n, s, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (cs(l, s) && e.ref === t.ref)
      if (((yt = !1), (t.pendingProps = s = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (yt = !0);
      else return (t.lanes = e.lanes), fn(e, t, o);
  }
  return Zl(e, t, n, s, o);
}
function cu(e, t, n) {
  var s = t.pendingProps,
    o = s.children,
    l = e !== null ? e.memoizedState : null;
  if (s.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ue(mr, Ct),
        (Ct |= n);
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
          Ue(mr, Ct),
          (Ct |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (s = l !== null ? l.baseLanes : n),
        Ue(mr, Ct),
        (Ct |= s);
    }
  else
    l !== null ? ((s = l.baseLanes | n), (t.memoizedState = null)) : (s = n),
      Ue(mr, Ct),
      (Ct |= s);
  return ft(e, t, o, n), t.child;
}
function du(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Zl(e, t, n, s, o) {
  var l = bt(n) ? Fn : dt.current;
  return (
    (l = jr(t, l)),
    wr(t, o),
    (n = Va(e, t, n, s, l, o)),
    (s = Wa()),
    e !== null && !yt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        fn(e, t, o))
      : (Ge && s && Ta(t), (t.flags |= 1), ft(e, t, n, o), t.child)
  );
}
function oc(e, t, n, s, o) {
  if (bt(n)) {
    var l = !0;
    mo(t);
  } else l = !1;
  if ((wr(t, o), t.stateNode === null))
    Js(e, t), ou(t, n, s), Kl(t, n, s, o), (s = !0);
  else if (e === null) {
    var a = t.stateNode,
      i = t.memoizedProps;
    a.props = i;
    var c = a.context,
      g = n.contextType;
    typeof g == "object" && g !== null
      ? (g = Ot(g))
      : ((g = bt(n) ? Fn : dt.current), (g = jr(t, g)));
    var m = n.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== s || c !== g) && Zi(t, a, s, g)),
      (xn = !1);
    var f = t.memoizedState;
    (a.state = f),
      vo(t, s, a, o),
      (c = t.memoizedState),
      i !== s || f !== c || wt.current || xn
        ? (typeof m == "function" && (Ql(t, n, m, s), (c = t.memoizedState)),
          (i = xn || Ji(t, n, i, s, f, c, g))
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
      Ld(e, t),
      (i = t.memoizedProps),
      (g = t.type === t.elementType ? i : Gt(t.type, i)),
      (a.props = g),
      (h = t.pendingProps),
      (f = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = Ot(c))
        : ((c = bt(n) ? Fn : dt.current), (c = jr(t, c)));
    var S = n.getDerivedStateFromProps;
    (m =
      typeof S == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== h || f !== c) && Zi(t, a, s, c)),
      (xn = !1),
      (f = t.memoizedState),
      (a.state = f),
      vo(t, s, a, o);
    var b = t.memoizedState;
    i !== h || f !== b || wt.current || xn
      ? (typeof S == "function" && (Ql(t, n, S, s), (b = t.memoizedState)),
        (g = xn || Ji(t, n, g, s, f, b, c) || !1)
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
              (i === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = s),
            (t.memoizedState = b)),
        (a.props = s),
        (a.state = b),
        (a.context = c),
        (s = g))
      : (typeof a.componentDidUpdate != "function" ||
          (i === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (i === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (s = !1));
  }
  return ea(e, t, n, s, l, o);
}
function ea(e, t, n, s, o, l) {
  du(e, t);
  var a = (t.flags & 128) !== 0;
  if (!s && !a) return o && Hi(t, n, !1), fn(e, t, l);
  (s = t.stateNode), (ym.current = t);
  var i =
    a && typeof n.getDerivedStateFromError != "function" ? null : s.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Cr(t, e.child, null, l)), (t.child = Cr(t, null, i, l)))
      : ft(e, t, i, l),
    (t.memoizedState = s.state),
    o && Hi(t, n, !0),
    t.child
  );
}
function uu(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Fi(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Fi(e, t.context, !1),
    za(e, t.containerInfo);
}
function lc(e, t, n, s, o) {
  return Sr(), Aa(o), (t.flags |= 256), ft(e, t, n, s), t.child;
}
var ta = { dehydrated: null, treeContext: null, retryLane: 0 };
function na(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function fu(e, t, n) {
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
    Ue(He, o & 1),
    e === null)
  )
    return (
      Yl(t),
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
                : (l = Uo(a, s, 0, null)),
              (e = Gn(e, s, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = na(n)),
              (t.memoizedState = ta),
              e)
            : Xa(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((i = o.dehydrated), i !== null)))
    return vm(e, t, a, s, i, o, n);
  if (l) {
    (l = s.fallback), (a = t.mode), (o = e.child), (i = o.sibling);
    var c = { mode: "hidden", children: s.children };
    return (
      !(a & 1) && t.child !== o
        ? ((s = t.child),
          (s.childLanes = 0),
          (s.pendingProps = c),
          (t.deletions = null))
        : ((s = Mn(o, c)), (s.subtreeFlags = o.subtreeFlags & 14680064)),
      i !== null ? (l = Mn(i, l)) : ((l = Gn(l, a, n, null)), (l.flags |= 2)),
      (l.return = t),
      (s.return = t),
      (s.sibling = l),
      (t.child = s),
      (s = l),
      (l = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? na(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (l.memoizedState = a),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = ta),
      s
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (s = Mn(l, { mode: "visible", children: s.children })),
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
function Xa(e, t) {
  return (
    (t = Uo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ls(e, t, n, s) {
  return (
    s !== null && Aa(s),
    Cr(t, e.child, null, n),
    (e = Xa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function vm(e, t, n, s, o, l, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (s = gl(Error(se(422)))), Ls(e, t, a, s))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = s.fallback),
        (o = t.mode),
        (s = Uo({ mode: "visible", children: s.children }, o, 0, null)),
        (l = Gn(l, o, a, null)),
        (l.flags |= 2),
        (s.return = t),
        (l.return = t),
        (s.sibling = l),
        (t.child = s),
        t.mode & 1 && Cr(t, e.child, null, a),
        (t.child.memoizedState = na(a)),
        (t.memoizedState = ta),
        l);
  if (!(t.mode & 1)) return Ls(e, t, a, null);
  if (o.data === "$!") {
    if (((s = o.nextSibling && o.nextSibling.dataset), s)) var i = s.dgst;
    return (
      (s = i), (l = Error(se(419))), (s = gl(l, s, void 0)), Ls(e, t, a, s)
    );
  }
  if (((i = (a & e.childLanes) !== 0), yt || i)) {
    if (((s = rt), s !== null)) {
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
          ((l.retryLane = o), un(e, o), Wt(s, e, o, -1));
    }
    return ti(), (s = gl(Error(se(421)))), Ls(e, t, a, s);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Pm.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (kt = Cn(o.nextSibling)),
      (Dt = t),
      (Ge = !0),
      (Ht = null),
      e !== null &&
        ((Pt[Tt++] = on),
        (Pt[Tt++] = ln),
        (Pt[Tt++] = Hn),
        (on = e.id),
        (ln = e.overflow),
        (Hn = t)),
      (t = Xa(t, s.children)),
      (t.flags |= 4096),
      t);
}
function ac(e, t, n) {
  e.lanes |= t;
  var s = e.alternate;
  s !== null && (s.lanes |= t), Xl(e.return, t, n);
}
function xl(e, t, n, s, o) {
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
function pu(e, t, n) {
  var s = t.pendingProps,
    o = s.revealOrder,
    l = s.tail;
  if ((ft(e, t, s.children, n), (s = He.current), s & 2))
    (s = (s & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ac(e, n, t);
        else if (e.tag === 19) ac(e, n, t);
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
  if ((Ue(He, s), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && wo(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          xl(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && wo(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        xl(t, !0, n, null, l);
        break;
      case "together":
        xl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Js(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function fn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Wn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(se(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Mn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Mn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function wm(e, t, n) {
  switch (t.tag) {
    case 3:
      uu(t), Sr();
      break;
    case 5:
      Ud(t);
      break;
    case 1:
      bt(t.type) && mo(t);
      break;
    case 4:
      za(t, t.stateNode.containerInfo);
      break;
    case 10:
      var s = t.type._context,
        o = t.memoizedProps.value;
      Ue(xo, s._currentValue), (s._currentValue = o);
      break;
    case 13:
      if (((s = t.memoizedState), s !== null))
        return s.dehydrated !== null
          ? (Ue(He, He.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? fu(e, t, n)
          : (Ue(He, He.current & 1),
            (e = fn(e, t, n)),
            e !== null ? e.sibling : null);
      Ue(He, He.current & 1);
      break;
    case 19:
      if (((s = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (s) return pu(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Ue(He, He.current),
        s)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), cu(e, t, n);
  }
  return fn(e, t, n);
}
var mu, ra, hu, gu;
mu = function (e, t) {
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
ra = function () {};
hu = function (e, t, n, s) {
  var o = e.memoizedProps;
  if (o !== s) {
    (e = t.stateNode), Bn(en.current);
    var l = null;
    switch (n) {
      case "input":
        (o = Cl(e, o)), (s = Cl(e, s)), (l = []);
        break;
      case "select":
        (o = qe({}, o, { value: void 0 })),
          (s = qe({}, s, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = _l(e, o)), (s = _l(e, s)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof s.onClick == "function" &&
          (e.onclick = fo);
    }
    El(n, s);
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
            (ns.hasOwnProperty(g)
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
              (ns.hasOwnProperty(g)
                ? (c != null && g === "onScroll" && Be("scroll", e),
                  l || i === c || (l = []))
                : (l = l || []).push(g, c));
    }
    n && (l = l || []).push("style", n);
    var g = l;
    (t.updateQueue = g) && (t.flags |= 4);
  }
};
gu = function (e, t, n, s) {
  n !== s && (t.flags |= 4);
};
function Br(e, t) {
  if (!Ge)
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
function it(e) {
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
function bm(e, t, n) {
  var s = t.pendingProps;
  switch ((Ra(t), t.tag)) {
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
      return it(t), null;
    case 1:
      return bt(t.type) && po(), it(t), null;
    case 3:
      return (
        (s = t.stateNode),
        kr(),
        ze(wt),
        ze(dt),
        Fa(),
        s.pendingContext &&
          ((s.context = s.pendingContext), (s.pendingContext = null)),
        (e === null || e.child === null) &&
          ($s(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ht !== null && (ua(Ht), (Ht = null)))),
        ra(e, t),
        it(t),
        null
      );
    case 5:
      Ga(t);
      var o = Bn(ms.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        hu(e, t, n, s, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!s) {
          if (t.stateNode === null) throw Error(se(166));
          return it(t), null;
        }
        if (((e = Bn(en.current)), $s(t))) {
          (s = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((s[Jt] = t), (s[fs] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Be("cancel", s), Be("close", s);
              break;
            case "iframe":
            case "object":
            case "embed":
              Be("load", s);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Vr.length; o++) Be(Vr[o], s);
              break;
            case "source":
              Be("error", s);
              break;
            case "img":
            case "image":
            case "link":
              Be("error", s), Be("load", s);
              break;
            case "details":
              Be("toggle", s);
              break;
            case "input":
              gi(s, l), Be("invalid", s);
              break;
            case "select":
              (s._wrapperState = { wasMultiple: !!l.multiple }),
                Be("invalid", s);
              break;
            case "textarea":
              yi(s, l), Be("invalid", s);
          }
          El(n, l), (o = null);
          for (var a in l)
            if (l.hasOwnProperty(a)) {
              var i = l[a];
              a === "children"
                ? typeof i == "string"
                  ? s.textContent !== i &&
                    (l.suppressHydrationWarning !== !0 &&
                      As(s.textContent, i, e),
                    (o = ["children", i]))
                  : typeof i == "number" &&
                    s.textContent !== "" + i &&
                    (l.suppressHydrationWarning !== !0 &&
                      As(s.textContent, i, e),
                    (o = ["children", "" + i]))
                : ns.hasOwnProperty(a) &&
                  i != null &&
                  a === "onScroll" &&
                  Be("scroll", s);
            }
          switch (n) {
            case "input":
              Ds(s), xi(s, l, !0);
              break;
            case "textarea":
              Ds(s), vi(s);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (s.onclick = fo);
          }
          (s = o), (t.updateQueue = s), s !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Hc(n)),
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
            (e[Jt] = t),
            (e[fs] = s),
            mu(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Il(n, s)), n)) {
              case "dialog":
                Be("cancel", e), Be("close", e), (o = s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Be("load", e), (o = s);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Vr.length; o++) Be(Vr[o], e);
                o = s;
                break;
              case "source":
                Be("error", e), (o = s);
                break;
              case "img":
              case "image":
              case "link":
                Be("error", e), Be("load", e), (o = s);
                break;
              case "details":
                Be("toggle", e), (o = s);
                break;
              case "input":
                gi(e, s), (o = Cl(e, s)), Be("invalid", e);
                break;
              case "option":
                o = s;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!s.multiple }),
                  (o = qe({}, s, { value: void 0 })),
                  Be("invalid", e);
                break;
              case "textarea":
                yi(e, s), (o = _l(e, s)), Be("invalid", e);
                break;
              default:
                o = s;
            }
            El(n, o), (i = o);
            for (l in i)
              if (i.hasOwnProperty(l)) {
                var c = i[l];
                l === "style"
                  ? qc(e, c)
                  : l === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && Vc(e, c))
                  : l === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && rs(e, c)
                    : typeof c == "number" && rs(e, "" + c)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (ns.hasOwnProperty(l)
                      ? c != null && l === "onScroll" && Be("scroll", e)
                      : c != null && va(e, l, c, a));
              }
            switch (n) {
              case "input":
                Ds(e), xi(e, s, !1);
                break;
              case "textarea":
                Ds(e), vi(e);
                break;
              case "option":
                s.value != null && e.setAttribute("value", "" + En(s.value));
                break;
              case "select":
                (e.multiple = !!s.multiple),
                  (l = s.value),
                  l != null
                    ? gr(e, !!s.multiple, l, !1)
                    : s.defaultValue != null &&
                      gr(e, !!s.multiple, s.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = fo);
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
      return it(t), null;
    case 6:
      if (e && t.stateNode != null) gu(e, t, e.memoizedProps, s);
      else {
        if (typeof s != "string" && t.stateNode === null) throw Error(se(166));
        if (((n = Bn(ms.current)), Bn(en.current), $s(t))) {
          if (
            ((s = t.stateNode),
            (n = t.memoizedProps),
            (s[Jt] = t),
            (l = s.nodeValue !== n) && ((e = Dt), e !== null))
          )
            switch (e.tag) {
              case 3:
                As(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  As(s.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s)),
            (s[Jt] = t),
            (t.stateNode = s);
      }
      return it(t), null;
    case 13:
      if (
        (ze(He),
        (s = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ge && kt !== null && t.mode & 1 && !(t.flags & 128))
          Rd(), Sr(), (t.flags |= 98560), (l = !1);
        else if (((l = $s(t)), s !== null && s.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(se(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(se(317));
            l[Jt] = t;
          } else
            Sr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          it(t), (l = !1);
        } else Ht !== null && (ua(Ht), (Ht = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((s = s !== null),
          s !== (e !== null && e.memoizedState !== null) &&
            s &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || He.current & 1 ? tt === 0 && (tt = 3) : ti())),
          t.updateQueue !== null && (t.flags |= 4),
          it(t),
          null);
    case 4:
      return (
        kr(), ra(e, t), e === null && ds(t.stateNode.containerInfo), it(t), null
      );
    case 10:
      return La(t.type._context), it(t), null;
    case 17:
      return bt(t.type) && po(), it(t), null;
    case 19:
      if ((ze(He), (l = t.memoizedState), l === null)) return it(t), null;
      if (((s = (t.flags & 128) !== 0), (a = l.rendering), a === null))
        if (s) Br(l, !1);
        else {
          if (tt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = wo(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Br(l, !1),
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
                return Ue(He, (He.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Qe() > _r &&
            ((t.flags |= 128), (s = !0), Br(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!s)
          if (((e = wo(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (s = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Br(l, !0),
              l.tail === null && l.tailMode === "hidden" && !a.alternate && !Ge)
            )
              return it(t), null;
          } else
            2 * Qe() - l.renderingStartTime > _r &&
              n !== 1073741824 &&
              ((t.flags |= 128), (s = !0), Br(l, !1), (t.lanes = 4194304));
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
          (l.renderingStartTime = Qe()),
          (t.sibling = null),
          (n = He.current),
          Ue(He, s ? (n & 1) | 2 : n & 1),
          t)
        : (it(t), null);
    case 22:
    case 23:
      return (
        ei(),
        (s = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
        s && t.mode & 1
          ? Ct & 1073741824 && (it(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : it(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(se(156, t.tag));
}
function Nm(e, t) {
  switch ((Ra(t), t.tag)) {
    case 1:
      return (
        bt(t.type) && po(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        kr(),
        ze(wt),
        ze(dt),
        Fa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ga(t), null;
    case 13:
      if (
        (ze(He), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(se(340));
        Sr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ze(He), null;
    case 4:
      return kr(), null;
    case 10:
      return La(t.type._context), null;
    case 22:
    case 23:
      return ei(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Us = !1,
  ct = !1,
  jm = typeof WeakSet == "function" ? WeakSet : Set,
  we = null;
function pr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (s) {
        Ye(e, t, s);
      }
    else n.current = null;
}
function sa(e, t, n) {
  try {
    n();
  } catch (s) {
    Ye(e, t, s);
  }
}
var ic = !1;
function Sm(e, t) {
  if (((zl = io), (e = bd()), Pa(e))) {
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
            f = null;
          t: for (;;) {
            for (
              var S;
              h !== n || (o !== 0 && h.nodeType !== 3) || (i = a + o),
                h !== l || (s !== 0 && h.nodeType !== 3) || (c = a + s),
                h.nodeType === 3 && (a += h.nodeValue.length),
                (S = h.firstChild) !== null;

            )
              (f = h), (h = S);
            for (;;) {
              if (h === e) break t;
              if (
                (f === n && ++g === o && (i = a),
                f === l && ++m === s && (c = a),
                (S = h.nextSibling) !== null)
              )
                break;
              (h = f), (f = h.parentNode);
            }
            h = S;
          }
          n = i === -1 || c === -1 ? null : { start: i, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    Gl = { focusedElem: e, selectionRange: n }, io = !1, we = t;
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
                  var _ = b.memoizedProps,
                    k = b.memoizedState,
                    d = t.stateNode,
                    u = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? _ : Gt(t.type, _),
                      k
                    );
                  d.__reactInternalSnapshotBeforeUpdate = u;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(se(163));
            }
        } catch (D) {
          Ye(t, t.return, D);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (we = e);
          break;
        }
        we = t.return;
      }
  return (b = ic), (ic = !1), b;
}
function Jr(e, t, n) {
  var s = t.updateQueue;
  if (((s = s !== null ? s.lastEffect : null), s !== null)) {
    var o = (s = s.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && sa(t, n, l);
      }
      o = o.next;
    } while (o !== s);
  }
}
function Oo(e, t) {
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
function oa(e) {
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
function xu(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), xu(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Jt], delete t[fs], delete t[Vl], delete t[lm], delete t[am])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function yu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function cc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || yu(e.return)) return null;
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
function la(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = fo));
  else if (s !== 4 && ((e = e.child), e !== null))
    for (la(e, t, n), e = e.sibling; e !== null; ) la(e, t, n), (e = e.sibling);
}
function aa(e, t, n) {
  var s = e.tag;
  if (s === 5 || s === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (s !== 4 && ((e = e.child), e !== null))
    for (aa(e, t, n), e = e.sibling; e !== null; ) aa(e, t, n), (e = e.sibling);
}
var st = null,
  Ft = !1;
function hn(e, t, n) {
  for (n = n.child; n !== null; ) vu(e, t, n), (n = n.sibling);
}
function vu(e, t, n) {
  if (Zt && typeof Zt.onCommitFiberUnmount == "function")
    try {
      Zt.onCommitFiberUnmount(Mo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ct || pr(n, t);
    case 6:
      var s = st,
        o = Ft;
      (st = null),
        hn(e, t, n),
        (st = s),
        (Ft = o),
        st !== null &&
          (Ft
            ? ((e = st),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : st.removeChild(n.stateNode));
      break;
    case 18:
      st !== null &&
        (Ft
          ? ((e = st),
            (n = n.stateNode),
            e.nodeType === 8
              ? dl(e.parentNode, n)
              : e.nodeType === 1 && dl(e, n),
            as(e))
          : dl(st, n.stateNode));
      break;
    case 4:
      (s = st),
        (o = Ft),
        (st = n.stateNode.containerInfo),
        (Ft = !0),
        hn(e, t, n),
        (st = s),
        (Ft = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ct &&
        ((s = n.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
      ) {
        o = s = s.next;
        do {
          var l = o,
            a = l.destroy;
          (l = l.tag),
            a !== void 0 && (l & 2 || l & 4) && sa(n, t, a),
            (o = o.next);
        } while (o !== s);
      }
      hn(e, t, n);
      break;
    case 1:
      if (
        !ct &&
        (pr(n, t),
        (s = n.stateNode),
        typeof s.componentWillUnmount == "function")
      )
        try {
          (s.props = n.memoizedProps),
            (s.state = n.memoizedState),
            s.componentWillUnmount();
        } catch (i) {
          Ye(n, t, i);
        }
      hn(e, t, n);
      break;
    case 21:
      hn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ct = (s = ct) || n.memoizedState !== null), hn(e, t, n), (ct = s))
        : hn(e, t, n);
      break;
    default:
      hn(e, t, n);
  }
}
function dc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new jm()),
      t.forEach(function (s) {
        var o = Tm.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(o, o));
      });
  }
}
function zt(e, t) {
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
              (st = i.stateNode), (Ft = !1);
              break e;
            case 3:
              (st = i.stateNode.containerInfo), (Ft = !0);
              break e;
            case 4:
              (st = i.stateNode.containerInfo), (Ft = !0);
              break e;
          }
          i = i.return;
        }
        if (st === null) throw Error(se(160));
        vu(l, a, o), (st = null), (Ft = !1);
        var c = o.alternate;
        c !== null && (c.return = null), (o.return = null);
      } catch (g) {
        Ye(o, t, g);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) wu(t, e), (t = t.sibling);
}
function wu(e, t) {
  var n = e.alternate,
    s = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((zt(t, e), Xt(e), s & 4)) {
        try {
          Jr(3, e, e.return), Oo(3, e);
        } catch (_) {
          Ye(e, e.return, _);
        }
        try {
          Jr(5, e, e.return);
        } catch (_) {
          Ye(e, e.return, _);
        }
      }
      break;
    case 1:
      zt(t, e), Xt(e), s & 512 && n !== null && pr(n, n.return);
      break;
    case 5:
      if (
        (zt(t, e),
        Xt(e),
        s & 512 && n !== null && pr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          rs(o, "");
        } catch (_) {
          Ye(e, e.return, _);
        }
      }
      if (s & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          a = n !== null ? n.memoizedProps : l,
          i = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            i === "input" && l.type === "radio" && l.name != null && Gc(o, l),
              Il(i, a);
            var g = Il(i, l);
            for (a = 0; a < c.length; a += 2) {
              var m = c[a],
                h = c[a + 1];
              m === "style"
                ? qc(o, h)
                : m === "dangerouslySetInnerHTML"
                ? Vc(o, h)
                : m === "children"
                ? rs(o, h)
                : va(o, m, h, g);
            }
            switch (i) {
              case "input":
                kl(o, l);
                break;
              case "textarea":
                Fc(o, l);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var S = l.value;
                S != null
                  ? gr(o, !!l.multiple, S, !1)
                  : f !== !!l.multiple &&
                    (l.defaultValue != null
                      ? gr(o, !!l.multiple, l.defaultValue, !0)
                      : gr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[fs] = l;
          } catch (_) {
            Ye(e, e.return, _);
          }
      }
      break;
    case 6:
      if ((zt(t, e), Xt(e), s & 4)) {
        if (e.stateNode === null) throw Error(se(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (_) {
          Ye(e, e.return, _);
        }
      }
      break;
    case 3:
      if (
        (zt(t, e), Xt(e), s & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          as(t.containerInfo);
        } catch (_) {
          Ye(e, e.return, _);
        }
      break;
    case 4:
      zt(t, e), Xt(e);
      break;
    case 13:
      zt(t, e),
        Xt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ja = Qe())),
        s & 4 && dc(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ct = (g = ct) || m), zt(t, e), (ct = g)) : zt(t, e),
        Xt(e),
        s & 8192)
      ) {
        if (
          ((g = e.memoizedState !== null),
          (e.stateNode.isHidden = g) && !m && e.mode & 1)
        )
          for (we = e, m = e.child; m !== null; ) {
            for (h = we = m; we !== null; ) {
              switch (((f = we), (S = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Jr(4, f, f.return);
                  break;
                case 1:
                  pr(f, f.return);
                  var b = f.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    (s = f), (n = f.return);
                    try {
                      (t = s),
                        (b.props = t.memoizedProps),
                        (b.state = t.memoizedState),
                        b.componentWillUnmount();
                    } catch (_) {
                      Ye(s, n, _);
                    }
                  }
                  break;
                case 5:
                  pr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    fc(h);
                    continue;
                  }
              }
              S !== null ? ((S.return = f), (we = S)) : fc(h);
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
                Ye(e, e.return, _);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = g ? "" : h.memoizedProps;
              } catch (_) {
                Ye(e, e.return, _);
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
      zt(t, e), Xt(e), s & 4 && dc(e);
      break;
    case 21:
      break;
    default:
      zt(t, e), Xt(e);
  }
}
function Xt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (yu(n)) {
            var s = n;
            break e;
          }
          n = n.return;
        }
        throw Error(se(160));
      }
      switch (s.tag) {
        case 5:
          var o = s.stateNode;
          s.flags & 32 && (rs(o, ""), (s.flags &= -33));
          var l = cc(e);
          aa(e, l, o);
          break;
        case 3:
        case 4:
          var a = s.stateNode.containerInfo,
            i = cc(e);
          la(e, i, a);
          break;
        default:
          throw Error(se(161));
      }
    } catch (c) {
      Ye(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Cm(e, t, n) {
  (we = e), bu(e);
}
function bu(e, t, n) {
  for (var s = (e.mode & 1) !== 0; we !== null; ) {
    var o = we,
      l = o.child;
    if (o.tag === 22 && s) {
      var a = o.memoizedState !== null || Us;
      if (!a) {
        var i = o.alternate,
          c = (i !== null && i.memoizedState !== null) || ct;
        i = Us;
        var g = ct;
        if (((Us = a), (ct = c) && !g))
          for (we = o; we !== null; )
            (a = we),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? pc(o)
                : c !== null
                ? ((c.return = a), (we = c))
                : pc(o);
        for (; l !== null; ) (we = l), bu(l), (l = l.sibling);
        (we = o), (Us = i), (ct = g);
      }
      uc(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (we = l)) : uc(e);
  }
}
function uc(e) {
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
              ct || Oo(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !ct)
                if (n === null) s.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Gt(t.type, n.memoizedProps);
                  s.componentDidUpdate(
                    o,
                    n.memoizedState,
                    s.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Xi(t, l, s);
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
                Xi(t, a, n);
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
                    h !== null && as(h);
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
              throw Error(se(163));
          }
        ct || (t.flags & 512 && oa(t));
      } catch (f) {
        Ye(t, t.return, f);
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
function fc(e) {
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
function pc(e) {
  for (; we !== null; ) {
    var t = we;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Oo(4, t);
          } catch (c) {
            Ye(t, n, c);
          }
          break;
        case 1:
          var s = t.stateNode;
          if (typeof s.componentDidMount == "function") {
            var o = t.return;
            try {
              s.componentDidMount();
            } catch (c) {
              Ye(t, o, c);
            }
          }
          var l = t.return;
          try {
            oa(t);
          } catch (c) {
            Ye(t, l, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            oa(t);
          } catch (c) {
            Ye(t, a, c);
          }
      }
    } catch (c) {
      Ye(t, t.return, c);
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
var km = Math.ceil,
  jo = pn.ReactCurrentDispatcher,
  Qa = pn.ReactCurrentOwner,
  At = pn.ReactCurrentBatchConfig,
  Ae = 0,
  rt = null,
  Je = null,
  ot = 0,
  Ct = 0,
  mr = Tn(0),
  tt = 0,
  ys = null,
  Wn = 0,
  Lo = 0,
  Ka = 0,
  Zr = null,
  xt = null,
  Ja = 0,
  _r = 1 / 0,
  nn = null,
  So = !1,
  ia = null,
  Dn = null,
  Bs = !1,
  bn = null,
  Co = 0,
  es = 0,
  ca = null,
  Zs = -1,
  eo = 0;
function pt() {
  return Ae & 6 ? Qe() : Zs !== -1 ? Zs : (Zs = Qe());
}
function _n(e) {
  return e.mode & 1
    ? Ae & 2 && ot !== 0
      ? ot & -ot
      : cm.transition !== null
      ? (eo === 0 && (eo = od()), eo)
      : ((e = Oe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : fd(e.type))),
        e)
    : 1;
}
function Wt(e, t, n, s) {
  if (50 < es) throw ((es = 0), (ca = null), Error(se(185)));
  ws(e, n, s),
    (!(Ae & 2) || e !== rt) &&
      (e === rt && (!(Ae & 2) && (Lo |= n), tt === 4 && vn(e, ot)),
      Nt(e, s),
      n === 1 && Ae === 0 && !(t.mode & 1) && ((_r = Qe() + 500), Ro && Rn()));
}
function Nt(e, t) {
  var n = e.callbackNode;
  cp(e, t);
  var s = ao(e, e === rt ? ot : 0);
  if (s === 0)
    n !== null && Ni(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = s & -s), e.callbackPriority !== t)) {
    if ((n != null && Ni(n), t === 1))
      e.tag === 0 ? im(mc.bind(null, e)) : Id(mc.bind(null, e)),
        sm(function () {
          !(Ae & 6) && Rn();
        }),
        (n = null);
    else {
      switch (ld(s)) {
        case 1:
          n = Sa;
          break;
        case 4:
          n = rd;
          break;
        case 16:
          n = lo;
          break;
        case 536870912:
          n = sd;
          break;
        default:
          n = lo;
      }
      n = Mu(n, Nu.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Nu(e, t) {
  if (((Zs = -1), (eo = 0), Ae & 6)) throw Error(se(327));
  var n = e.callbackNode;
  if (br() && e.callbackNode !== n) return null;
  var s = ao(e, e === rt ? ot : 0);
  if (s === 0) return null;
  if (s & 30 || s & e.expiredLanes || t) t = ko(e, s);
  else {
    t = s;
    var o = Ae;
    Ae |= 2;
    var l = Su();
    (rt !== e || ot !== t) && ((nn = null), (_r = Qe() + 500), zn(e, t));
    do
      try {
        Mm();
        break;
      } catch (i) {
        ju(e, i);
      }
    while (!0);
    Oa(),
      (jo.current = l),
      (Ae = o),
      Je !== null ? (t = 0) : ((rt = null), (ot = 0), (t = tt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = $l(e)), o !== 0 && ((s = o), (t = da(e, o)))), t === 1)
    )
      throw ((n = ys), zn(e, 0), vn(e, s), Nt(e, Qe()), n);
    if (t === 6) vn(e, s);
    else {
      if (
        ((o = e.current.alternate),
        !(s & 30) &&
          !Dm(o) &&
          ((t = ko(e, s)),
          t === 2 && ((l = $l(e)), l !== 0 && ((s = l), (t = da(e, l)))),
          t === 1))
      )
        throw ((n = ys), zn(e, 0), vn(e, s), Nt(e, Qe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = s), t)) {
        case 0:
        case 1:
          throw Error(se(345));
        case 2:
          On(e, xt, nn);
          break;
        case 3:
          if (
            (vn(e, s), (s & 130023424) === s && ((t = Ja + 500 - Qe()), 10 < t))
          ) {
            if (ao(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & s) !== s)) {
              pt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Hl(On.bind(null, e, xt, nn), t);
            break;
          }
          On(e, xt, nn);
          break;
        case 4:
          if ((vn(e, s), (s & 4194240) === s)) break;
          for (t = e.eventTimes, o = -1; 0 < s; ) {
            var a = 31 - Vt(s);
            (l = 1 << a), (a = t[a]), a > o && (o = a), (s &= ~l);
          }
          if (
            ((s = o),
            (s = Qe() - s),
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
                : 1960 * km(s / 1960)) - s),
            10 < s)
          ) {
            e.timeoutHandle = Hl(On.bind(null, e, xt, nn), s);
            break;
          }
          On(e, xt, nn);
          break;
        case 5:
          On(e, xt, nn);
          break;
        default:
          throw Error(se(329));
      }
    }
  }
  return Nt(e, Qe()), e.callbackNode === n ? Nu.bind(null, e) : null;
}
function da(e, t) {
  var n = Zr;
  return (
    e.current.memoizedState.isDehydrated && (zn(e, t).flags |= 256),
    (e = ko(e, t)),
    e !== 2 && ((t = xt), (xt = n), t !== null && ua(t)),
    e
  );
}
function ua(e) {
  xt === null ? (xt = e) : xt.push.apply(xt, e);
}
function Dm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var s = 0; s < n.length; s++) {
          var o = n[s],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!qt(l(), o)) return !1;
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
function vn(e, t) {
  for (
    t &= ~Ka,
      t &= ~Lo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Vt(t),
      s = 1 << n;
    (e[n] = -1), (t &= ~s);
  }
}
function mc(e) {
  if (Ae & 6) throw Error(se(327));
  br();
  var t = ao(e, 0);
  if (!(t & 1)) return Nt(e, Qe()), null;
  var n = ko(e, t);
  if (e.tag !== 0 && n === 2) {
    var s = $l(e);
    s !== 0 && ((t = s), (n = da(e, s)));
  }
  if (n === 1) throw ((n = ys), zn(e, 0), vn(e, t), Nt(e, Qe()), n);
  if (n === 6) throw Error(se(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    On(e, xt, nn),
    Nt(e, Qe()),
    null
  );
}
function Za(e, t) {
  var n = Ae;
  Ae |= 1;
  try {
    return e(t);
  } finally {
    (Ae = n), Ae === 0 && ((_r = Qe() + 500), Ro && Rn());
  }
}
function qn(e) {
  bn !== null && bn.tag === 0 && !(Ae & 6) && br();
  var t = Ae;
  Ae |= 1;
  var n = At.transition,
    s = Oe;
  try {
    if (((At.transition = null), (Oe = 1), e)) return e();
  } finally {
    (Oe = s), (At.transition = n), (Ae = t), !(Ae & 6) && Rn();
  }
}
function ei() {
  (Ct = mr.current), ze(mr);
}
function zn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), rm(n)), Je !== null))
    for (n = Je.return; n !== null; ) {
      var s = n;
      switch ((Ra(s), s.tag)) {
        case 1:
          (s = s.type.childContextTypes), s != null && po();
          break;
        case 3:
          kr(), ze(wt), ze(dt), Fa();
          break;
        case 5:
          Ga(s);
          break;
        case 4:
          kr();
          break;
        case 13:
          ze(He);
          break;
        case 19:
          ze(He);
          break;
        case 10:
          La(s.type._context);
          break;
        case 22:
        case 23:
          ei();
      }
      n = n.return;
    }
  if (
    ((rt = e),
    (Je = e = Mn(e.current, null)),
    (ot = Ct = t),
    (tt = 0),
    (ys = null),
    (Ka = Lo = Wn = 0),
    (xt = Zr = null),
    Un !== null)
  ) {
    for (t = 0; t < Un.length; t++)
      if (((n = Un[t]), (s = n.interleaved), s !== null)) {
        n.interleaved = null;
        var o = s.next,
          l = n.pending;
        if (l !== null) {
          var a = l.next;
          (l.next = o), (s.next = a);
        }
        n.pending = s;
      }
    Un = null;
  }
  return e;
}
function ju(e, t) {
  do {
    var n = Je;
    try {
      if ((Oa(), (Qs.current = No), bo)) {
        for (var s = We.memoizedState; s !== null; ) {
          var o = s.queue;
          o !== null && (o.pending = null), (s = s.next);
        }
        bo = !1;
      }
      if (
        ((Vn = 0),
        (nt = et = We = null),
        (Kr = !1),
        (hs = 0),
        (Qa.current = null),
        n === null || n.return === null)
      ) {
        (tt = 1), (ys = t), (Je = null);
        break;
      }
      e: {
        var l = e,
          a = n.return,
          i = n,
          c = t;
        if (
          ((t = ot),
          (i.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var g = c,
            m = i,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var f = m.alternate;
            f
              ? ((m.updateQueue = f.updateQueue),
                (m.memoizedState = f.memoizedState),
                (m.lanes = f.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var S = tc(a);
          if (S !== null) {
            (S.flags &= -257),
              nc(S, a, i, l, t),
              S.mode & 1 && ec(l, g, t),
              (t = S),
              (c = g);
            var b = t.updateQueue;
            if (b === null) {
              var _ = new Set();
              _.add(c), (t.updateQueue = _);
            } else b.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              ec(l, g, t), ti();
              break e;
            }
            c = Error(se(426));
          }
        } else if (Ge && i.mode & 1) {
          var k = tc(a);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              nc(k, a, i, l, t),
              Aa(Dr(c, i));
            break e;
          }
        }
        (l = c = Dr(c, i)),
          tt !== 4 && (tt = 2),
          Zr === null ? (Zr = [l]) : Zr.push(l),
          (l = a);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var d = lu(l, c, t);
              Yi(l, d);
              break e;
            case 1:
              i = c;
              var u = l.type,
                y = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof u.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Dn === null || !Dn.has(y))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var D = au(l, i, t);
                Yi(l, D);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      ku(n);
    } catch ($) {
      (t = $), Je === n && n !== null && (Je = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Su() {
  var e = jo.current;
  return (jo.current = No), e === null ? No : e;
}
function ti() {
  (tt === 0 || tt === 3 || tt === 2) && (tt = 4),
    rt === null || (!(Wn & 268435455) && !(Lo & 268435455)) || vn(rt, ot);
}
function ko(e, t) {
  var n = Ae;
  Ae |= 2;
  var s = Su();
  (rt !== e || ot !== t) && ((nn = null), zn(e, t));
  do
    try {
      _m();
      break;
    } catch (o) {
      ju(e, o);
    }
  while (!0);
  if ((Oa(), (Ae = n), (jo.current = s), Je !== null)) throw Error(se(261));
  return (rt = null), (ot = 0), tt;
}
function _m() {
  for (; Je !== null; ) Cu(Je);
}
function Mm() {
  for (; Je !== null && !ep(); ) Cu(Je);
}
function Cu(e) {
  var t = _u(e.alternate, e, Ct);
  (e.memoizedProps = e.pendingProps),
    t === null ? ku(e) : (Je = t),
    (Qa.current = null);
}
function ku(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Nm(n, t)), n !== null)) {
        (n.flags &= 32767), (Je = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (tt = 6), (Je = null);
        return;
      }
    } else if (((n = bm(n, t, Ct)), n !== null)) {
      Je = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Je = t;
      return;
    }
    Je = t = e;
  } while (t !== null);
  tt === 0 && (tt = 5);
}
function On(e, t, n) {
  var s = Oe,
    o = At.transition;
  try {
    (At.transition = null), (Oe = 1), Em(e, t, n, s);
  } finally {
    (At.transition = o), (Oe = s);
  }
  return null;
}
function Em(e, t, n, s) {
  do br();
  while (bn !== null);
  if (Ae & 6) throw Error(se(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(se(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (dp(e, l),
    e === rt && ((Je = rt = null), (ot = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Bs ||
      ((Bs = !0),
      Mu(lo, function () {
        return br(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = At.transition), (At.transition = null);
    var a = Oe;
    Oe = 1;
    var i = Ae;
    (Ae |= 4),
      (Qa.current = null),
      Sm(e, n),
      wu(n, e),
      Qp(Gl),
      (io = !!zl),
      (Gl = zl = null),
      (e.current = n),
      Cm(n),
      tp(),
      (Ae = i),
      (Oe = a),
      (At.transition = l);
  } else e.current = n;
  if (
    (Bs && ((Bs = !1), (bn = e), (Co = o)),
    (l = e.pendingLanes),
    l === 0 && (Dn = null),
    sp(n.stateNode),
    Nt(e, Qe()),
    t !== null)
  )
    for (s = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), s(o.value, { componentStack: o.stack, digest: o.digest });
  if (So) throw ((So = !1), (e = ia), (ia = null), e);
  return (
    Co & 1 && e.tag !== 0 && br(),
    (l = e.pendingLanes),
    l & 1 ? (e === ca ? es++ : ((es = 0), (ca = e))) : (es = 0),
    Rn(),
    null
  );
}
function br() {
  if (bn !== null) {
    var e = ld(Co),
      t = At.transition,
      n = Oe;
    try {
      if (((At.transition = null), (Oe = 16 > e ? 16 : e), bn === null))
        var s = !1;
      else {
        if (((e = bn), (bn = null), (Co = 0), Ae & 6)) throw Error(se(331));
        var o = Ae;
        for (Ae |= 4, we = e.current; we !== null; ) {
          var l = we,
            a = l.child;
          if (we.flags & 16) {
            var i = l.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var g = i[c];
                for (we = g; we !== null; ) {
                  var m = we;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jr(8, m, l);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (we = h);
                  else
                    for (; we !== null; ) {
                      m = we;
                      var f = m.sibling,
                        S = m.return;
                      if ((xu(m), m === g)) {
                        we = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = S), (we = f);
                        break;
                      }
                      we = S;
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
                    Jr(9, l, l.return);
                }
              var d = l.sibling;
              if (d !== null) {
                (d.return = l.return), (we = d);
                break e;
              }
              we = l.return;
            }
        }
        var u = e.current;
        for (we = u; we !== null; ) {
          a = we;
          var y = a.child;
          if (a.subtreeFlags & 2064 && y !== null) (y.return = a), (we = y);
          else
            e: for (a = u; we !== null; ) {
              if (((i = we), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Oo(9, i);
                  }
                } catch ($) {
                  Ye(i, i.return, $);
                }
              if (i === a) {
                we = null;
                break e;
              }
              var D = i.sibling;
              if (D !== null) {
                (D.return = i.return), (we = D);
                break e;
              }
              we = i.return;
            }
        }
        if (
          ((Ae = o), Rn(), Zt && typeof Zt.onPostCommitFiberRoot == "function")
        )
          try {
            Zt.onPostCommitFiberRoot(Mo, e);
          } catch {}
        s = !0;
      }
      return s;
    } finally {
      (Oe = n), (At.transition = t);
    }
  }
  return !1;
}
function hc(e, t, n) {
  (t = Dr(n, t)),
    (t = lu(e, t, 1)),
    (e = kn(e, t, 1)),
    (t = pt()),
    e !== null && (ws(e, 1, t), Nt(e, t));
}
function Ye(e, t, n) {
  if (e.tag === 3) hc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        hc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof s.componentDidCatch == "function" &&
            (Dn === null || !Dn.has(s)))
        ) {
          (e = Dr(n, e)),
            (e = au(t, e, 1)),
            (t = kn(t, e, 1)),
            (e = pt()),
            t !== null && (ws(t, 1, e), Nt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Im(e, t, n) {
  var s = e.pingCache;
  s !== null && s.delete(t),
    (t = pt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    rt === e &&
      (ot & n) === n &&
      (tt === 4 || (tt === 3 && (ot & 130023424) === ot && 500 > Qe() - Ja)
        ? zn(e, 0)
        : (Ka |= n)),
    Nt(e, t);
}
function Du(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Es), (Es <<= 1), !(Es & 130023424) && (Es = 4194304))
      : (t = 1));
  var n = pt();
  (e = un(e, t)), e !== null && (ws(e, t, n), Nt(e, n));
}
function Pm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Du(e, n);
}
function Tm(e, t) {
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
      throw Error(se(314));
  }
  s !== null && s.delete(t), Du(e, n);
}
var _u;
_u = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || wt.current) yt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (yt = !1), wm(e, t, n);
      yt = !!(e.flags & 131072);
    }
  else (yt = !1), Ge && t.flags & 1048576 && Pd(t, go, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var s = t.type;
      Js(e, t), (e = t.pendingProps);
      var o = jr(t, dt.current);
      wr(t, n), (o = Va(null, t, s, e, o, n));
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
            bt(s) ? ((l = !0), mo(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ba(t),
            (o.updater = $o),
            (t.stateNode = o),
            (o._reactInternals = t),
            Kl(t, s, e, n),
            (t = ea(null, t, s, !0, l, n)))
          : ((t.tag = 0), Ge && l && Ta(t), ft(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      s = t.elementType;
      e: {
        switch (
          (Js(e, t),
          (e = t.pendingProps),
          (o = s._init),
          (s = o(s._payload)),
          (t.type = s),
          (o = t.tag = Am(s)),
          (e = Gt(s, e)),
          o)
        ) {
          case 0:
            t = Zl(null, t, s, e, n);
            break e;
          case 1:
            t = oc(null, t, s, e, n);
            break e;
          case 11:
            t = rc(null, t, s, e, n);
            break e;
          case 14:
            t = sc(null, t, s, Gt(s.type, e), n);
            break e;
        }
        throw Error(se(306, s, ""));
      }
      return t;
    case 0:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : Gt(s, o)),
        Zl(e, t, s, o, n)
      );
    case 1:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : Gt(s, o)),
        oc(e, t, s, o, n)
      );
    case 3:
      e: {
        if ((uu(t), e === null)) throw Error(se(387));
        (s = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Ld(e, t),
          vo(t, s, null, n);
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
            (o = Dr(Error(se(423)), t)), (t = lc(e, t, s, n, o));
            break e;
          } else if (s !== o) {
            (o = Dr(Error(se(424)), t)), (t = lc(e, t, s, n, o));
            break e;
          } else
            for (
              kt = Cn(t.stateNode.containerInfo.firstChild),
                Dt = t,
                Ge = !0,
                Ht = null,
                n = $d(t, null, s, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Sr(), s === o)) {
            t = fn(e, t, n);
            break e;
          }
          ft(e, t, s, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ud(t),
        e === null && Yl(t),
        (s = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Fl(s, o) ? (a = null) : l !== null && Fl(s, l) && (t.flags |= 32),
        du(e, t),
        ft(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Yl(t), null;
    case 13:
      return fu(e, t, n);
    case 4:
      return (
        za(t, t.stateNode.containerInfo),
        (s = t.pendingProps),
        e === null ? (t.child = Cr(t, null, s, n)) : ft(e, t, s, n),
        t.child
      );
    case 11:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : Gt(s, o)),
        rc(e, t, s, o, n)
      );
    case 7:
      return ft(e, t, t.pendingProps, n), t.child;
    case 8:
      return ft(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ft(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((s = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (a = o.value),
          Ue(xo, s._currentValue),
          (s._currentValue = a),
          l !== null)
        )
          if (qt(l.value, a)) {
            if (l.children === o.children && !wt.current) {
              t = fn(e, t, n);
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
                      (c = an(-1, n & -n)), (c.tag = 2);
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
                      Xl(l.return, n, t),
                      (i.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (l.tag === 10) a = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((a = l.return), a === null)) throw Error(se(341));
                (a.lanes |= n),
                  (i = a.alternate),
                  i !== null && (i.lanes |= n),
                  Xl(a, n, t),
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
        ft(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (s = t.pendingProps.children),
        wr(t, n),
        (o = Ot(o)),
        (s = s(o)),
        (t.flags |= 1),
        ft(e, t, s, n),
        t.child
      );
    case 14:
      return (
        (s = t.type),
        (o = Gt(s, t.pendingProps)),
        (o = Gt(s.type, o)),
        sc(e, t, s, o, n)
      );
    case 15:
      return iu(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : Gt(s, o)),
        Js(e, t),
        (t.tag = 1),
        bt(s) ? ((e = !0), mo(t)) : (e = !1),
        wr(t, n),
        ou(t, s, o),
        Kl(t, s, o, n),
        ea(null, t, s, !0, e, n)
      );
    case 19:
      return pu(e, t, n);
    case 22:
      return cu(e, t, n);
  }
  throw Error(se(156, t.tag));
};
function Mu(e, t) {
  return nd(e, t);
}
function Rm(e, t, n, s) {
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
function Rt(e, t, n, s) {
  return new Rm(e, t, n, s);
}
function ni(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Am(e) {
  if (typeof e == "function") return ni(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ba)) return 11;
    if (e === Na) return 14;
  }
  return 2;
}
function Mn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Rt(e.tag, t, e.key, e.mode)),
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
function to(e, t, n, s, o, l) {
  var a = 2;
  if (((s = e), typeof e == "function")) ni(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case sr:
        return Gn(n.children, o, l, t);
      case wa:
        (a = 8), (o |= 8);
        break;
      case bl:
        return (
          (e = Rt(12, n, t, o | 2)), (e.elementType = bl), (e.lanes = l), e
        );
      case Nl:
        return (e = Rt(13, n, t, o)), (e.elementType = Nl), (e.lanes = l), e;
      case jl:
        return (e = Rt(19, n, t, o)), (e.elementType = jl), (e.lanes = l), e;
      case Uc:
        return Uo(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Oc:
              a = 10;
              break e;
            case Lc:
              a = 9;
              break e;
            case ba:
              a = 11;
              break e;
            case Na:
              a = 14;
              break e;
            case gn:
              (a = 16), (s = null);
              break e;
          }
        throw Error(se(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Rt(a, n, t, o)), (t.elementType = e), (t.type = s), (t.lanes = l), t
  );
}
function Gn(e, t, n, s) {
  return (e = Rt(7, e, s, t)), (e.lanes = n), e;
}
function Uo(e, t, n, s) {
  return (
    (e = Rt(22, e, s, t)),
    (e.elementType = Uc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function yl(e, t, n) {
  return (e = Rt(6, e, null, t)), (e.lanes = n), e;
}
function vl(e, t, n) {
  return (
    (t = Rt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function $m(e, t, n, s, o) {
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
    (this.eventTimes = Zo(0)),
    (this.expirationTimes = Zo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Zo(0)),
    (this.identifierPrefix = s),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ri(e, t, n, s, o, l, a, i, c) {
  return (
    (e = new $m(e, t, n, i, c)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Rt(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: s,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ba(l),
    e
  );
}
function Om(e, t, n) {
  var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: rr,
    key: s == null ? null : "" + s,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Eu(e) {
  if (!e) return In;
  e = e._reactInternals;
  e: {
    if (Xn(e) !== e || e.tag !== 1) throw Error(se(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (bt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(se(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (bt(n)) return Ed(e, n, t);
  }
  return t;
}
function Iu(e, t, n, s, o, l, a, i, c) {
  return (
    (e = ri(n, s, !0, e, o, l, a, i, c)),
    (e.context = Eu(null)),
    (n = e.current),
    (s = pt()),
    (o = _n(n)),
    (l = an(s, o)),
    (l.callback = t ?? null),
    kn(n, l, o),
    (e.current.lanes = o),
    ws(e, o, s),
    Nt(e, s),
    e
  );
}
function Bo(e, t, n, s) {
  var o = t.current,
    l = pt(),
    a = _n(o);
  return (
    (n = Eu(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = an(l, a)),
    (t.payload = { element: e }),
    (s = s === void 0 ? null : s),
    s !== null && (t.callback = s),
    (e = kn(o, t, a)),
    e !== null && (Wt(e, o, a, l), Xs(e, o, a)),
    a
  );
}
function Do(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function gc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function si(e, t) {
  gc(e, t), (e = e.alternate) && gc(e, t);
}
function Lm() {
  return null;
}
var Pu =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function oi(e) {
  this._internalRoot = e;
}
zo.prototype.render = oi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(se(409));
  Bo(e, t, null, null);
};
zo.prototype.unmount = oi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    qn(function () {
      Bo(null, e, null, null);
    }),
      (t[dn] = null);
  }
};
function zo(e) {
  this._internalRoot = e;
}
zo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = cd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < yn.length && t !== 0 && t < yn[n].priority; n++);
    yn.splice(n, 0, e), n === 0 && ud(e);
  }
};
function li(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Go(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function xc() {}
function Um(e, t, n, s, o) {
  if (o) {
    if (typeof s == "function") {
      var l = s;
      s = function () {
        var g = Do(a);
        l.call(g);
      };
    }
    var a = Iu(t, s, e, 0, null, !1, !1, "", xc);
    return (
      (e._reactRootContainer = a),
      (e[dn] = a.current),
      ds(e.nodeType === 8 ? e.parentNode : e),
      qn(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof s == "function") {
    var i = s;
    s = function () {
      var g = Do(c);
      i.call(g);
    };
  }
  var c = ri(e, 0, !1, null, null, !1, !1, "", xc);
  return (
    (e._reactRootContainer = c),
    (e[dn] = c.current),
    ds(e.nodeType === 8 ? e.parentNode : e),
    qn(function () {
      Bo(t, c, n, s);
    }),
    c
  );
}
function Fo(e, t, n, s, o) {
  var l = n._reactRootContainer;
  if (l) {
    var a = l;
    if (typeof o == "function") {
      var i = o;
      o = function () {
        var c = Do(a);
        i.call(c);
      };
    }
    Bo(t, a, e, o);
  } else a = Um(n, t, e, o, s);
  return Do(a);
}
ad = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Hr(t.pendingLanes);
        n !== 0 &&
          (Ca(t, n | 1), Nt(t, Qe()), !(Ae & 6) && ((_r = Qe() + 500), Rn()));
      }
      break;
    case 13:
      qn(function () {
        var s = un(e, 1);
        if (s !== null) {
          var o = pt();
          Wt(s, e, 1, o);
        }
      }),
        si(e, 1);
  }
};
ka = function (e) {
  if (e.tag === 13) {
    var t = un(e, 134217728);
    if (t !== null) {
      var n = pt();
      Wt(t, e, 134217728, n);
    }
    si(e, 134217728);
  }
};
id = function (e) {
  if (e.tag === 13) {
    var t = _n(e),
      n = un(e, t);
    if (n !== null) {
      var s = pt();
      Wt(n, e, t, s);
    }
    si(e, t);
  }
};
cd = function () {
  return Oe;
};
dd = function (e, t) {
  var n = Oe;
  try {
    return (Oe = e), t();
  } finally {
    Oe = n;
  }
};
Tl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((kl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = To(s);
            if (!o) throw Error(se(90));
            zc(s), kl(s, o);
          }
        }
      }
      break;
    case "textarea":
      Fc(e, n);
      break;
    case "select":
      (t = n.value), t != null && gr(e, !!n.multiple, t, !1);
  }
};
Qc = Za;
Kc = qn;
var Bm = { usingClientEntryPoint: !1, Events: [Ns, ir, To, Yc, Xc, Za] },
  zr = {
    findFiberByHostInstance: Ln,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  zm = {
    bundleType: zr.bundleType,
    version: zr.version,
    rendererPackageName: zr.rendererPackageName,
    rendererConfig: zr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: pn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ed(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: zr.findFiberByHostInstance || Lm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zs.isDisabled && zs.supportsFiber)
    try {
      (Mo = zs.inject(zm)), (Zt = zs);
    } catch {}
}
Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bm;
Mt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!li(t)) throw Error(se(200));
  return Om(e, t, null, n);
};
Mt.createRoot = function (e, t) {
  if (!li(e)) throw Error(se(299));
  var n = !1,
    s = "",
    o = Pu;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ri(e, 1, !1, null, null, n, !1, s, o)),
    (e[dn] = t.current),
    ds(e.nodeType === 8 ? e.parentNode : e),
    new oi(t)
  );
};
Mt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(se(188))
      : ((e = Object.keys(e).join(",")), Error(se(268, e)));
  return (e = ed(t)), (e = e === null ? null : e.stateNode), e;
};
Mt.flushSync = function (e) {
  return qn(e);
};
Mt.hydrate = function (e, t, n) {
  if (!Go(t)) throw Error(se(200));
  return Fo(null, e, t, !0, n);
};
Mt.hydrateRoot = function (e, t, n) {
  if (!li(e)) throw Error(se(405));
  var s = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    a = Pu;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Iu(t, null, e, 1, n ?? null, o, !1, l, a)),
    (e[dn] = t.current),
    ds(e),
    s)
  )
    for (e = 0; e < s.length; e++)
      (n = s[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new zo(t);
};
Mt.render = function (e, t, n) {
  if (!Go(t)) throw Error(se(200));
  return Fo(null, e, t, !1, n);
};
Mt.unmountComponentAtNode = function (e) {
  if (!Go(e)) throw Error(se(40));
  return e._reactRootContainer
    ? (qn(function () {
        Fo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[dn] = null);
        });
      }),
      !0)
    : !1;
};
Mt.unstable_batchedUpdates = Za;
Mt.unstable_renderSubtreeIntoContainer = function (e, t, n, s) {
  if (!Go(n)) throw Error(se(200));
  if (e == null || e._reactInternals === void 0) throw Error(se(38));
  return Fo(e, t, n, !1, s);
};
Mt.version = "18.3.1-next-f1338f8080-20240426";
function Tu() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tu);
    } catch (e) {
      console.error(e);
    }
}
Tu(), (Tc.exports = Mt);
var Gm = Tc.exports,
  Ru,
  yc = Gm;
(Ru = yc.createRoot), yc.hydrateRoot;
class Fm {
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
}
const De = new Fm();
class Hm {
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
                    c.shelf.forEach((f, S) => {
                      let b = {
                        GUID: f.GUID,
                        Master_GUID: f.Master_GUID,
                        name: `層架_${S}`,
                        class: 3,
                        gird_position: f.position,
                        serverName: f.serverName || "",
                        serverType: f.serverType || "",
                        device_type: f.device_type || "",
                        type: f.type,
                        contents: [],
                      };
                      if (
                        (b.serverName &&
                          (b.serverName = t.sys_ServerSetting.name),
                        b.serverType &&
                          (b.serverType = t.sys_ServerSetting.type),
                        f.type == "dispensing_shelves" || f.type == "shelf")
                      )
                        f.type == "shelf" && (b.type = "dispensing_shelves"),
                          Array.isArray(f.medMapBox) &&
                            f.medMapBox.forEach((k, d) => {
                              let u = {
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
                                y = {},
                                D = f.position.split(","),
                                $ = k.position.split(",");
                              if (k.storage) {
                                switch (
                                  ((u.device_type = k.storage.DeviceType),
                                  (u.storage = k.storage),
                                  +u.device_type)
                                ) {
                                  case 10:
                                    u.box_type = "2.9";
                                    break;
                                  case 118:
                                    u.box_type = "2.13";
                                    break;
                                  case 13:
                                    u.box_type = "4.2";
                                    break;
                                }
                                (y.name = k.storage.Name),
                                  (y.code = k.storage.Code),
                                  (y.cht_name = k.storage.ChineseName),
                                  (y.SKDIACODE = k.storage.SKDIACODE),
                                  (y.device_type = k.storage.device_type),
                                  (y.qty = k.storage.StorageName),
                                  (y.stockCol = `${+D[0] + 1}`),
                                  (y.stockRow = ""),
                                  (y.stock = `${+$[1] + 1}`);
                              } else
                                (u.device_type = 10),
                                  (u.box_type = "2.9"),
                                  (y.name = ""),
                                  (y.code = ""),
                                  (y.cht_name = ""),
                                  (y.stockCol = `${+D[0] + 1}`),
                                  (y.stockRow = ""),
                                  (y.stock = `${+$[1] + 1}`);
                              o.contents[a].med_list.push(y),
                                (u.med_info[0] = y),
                                b.contents.push(u);
                            });
                      else {
                        (b.type = "store_shelves"),
                          (b.ip = f.ip_light),
                          (b.width = f.width),
                          (b.height = f.height);
                        const k = f.medMapStock.sort((d, u) => {
                          const [y] = d.location.split(",").map(Number),
                            [D] = u.location.split(",").map(Number);
                          return y - D;
                        });
                        (b.medMapStock = k),
                          (b.name = f.name),
                          k.forEach((d, u) => {
                            let y = f.position.split(","),
                              D = c.position.split(",");
                            if (d.code) {
                              let $ = {};
                              ($.name = d.name),
                                ($.code = d.code),
                                ($.cht_name = ""),
                                ($.SKDIACODE = d.material_no),
                                ($.qty = d.qty),
                                ($.stockCol = `${+y[0] + 1}`),
                                ($.stockRow = `${+D[1] + 1}`),
                                ($.stock = `${u + 1}`),
                                o.contents[a].med_list.push($);
                            }
                          });
                      }
                      let _ = f.position.split(",")[1];
                      h < +_ &&
                        ((h = +_), (o.contents[a].contents[g].oriMaxCol = +h)),
                        o.contents[a].contents[g].contents.push(b);
                    }),
                    Array.isArray(c.drawer) &&
                      c.drawer.forEach((f, S) => {
                        let b = {
                          GUID: f.GUID,
                          Master_GUID: f.Master_GUID,
                          name: `抽屜 ${S}`,
                          class: 3,
                          gird_position: f.position,
                          ip: f.ip_drawer,
                          serverName: f.serverName,
                          serverType: f.serverType,
                        };
                        b.serverName &&
                          (b.serverName = t.sys_ServerSetting.name),
                          b.serverType &&
                            (b.serverType = t.sys_ServerSetting.type),
                          f.drawer
                            ? ((b.drawer = f.drawer),
                              f.drawer.Boxes &&
                                ((b.type = "grid_draw"),
                                (b.name = f.drawer.Name),
                                (b.Boxes = []),
                                Array.isArray(f.drawer.Boxes)
                                  ? f.drawer.Boxes.forEach((d, u) => {
                                      let y = [];
                                      Array.isArray(d) &&
                                        d.forEach((D, $) => {
                                          let I = {
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
                                          y.push(I),
                                            D.Code &&
                                              o.contents[a].med_list.push(
                                                D.Code
                                              );
                                        }),
                                        b.Boxes.push(y);
                                    })
                                  : (b.Boxes = f.drawer.Boxes)))
                            : ((b.type = "list_draw"),
                              (b.name = `清單抽屜 ${S}`));
                        let _ = f.position.split(",")[1];
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
const $t = new Hm(),
  Vm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: $t },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Au = p.createContext(void 0),
  Wm = ({ children: e }) => {
    const [t, n] = p.useState(!1),
      [s, o] = p.useState(null),
      [l, a] = p.useState(!1),
      [i, c] = p.useState(null),
      [g, m] = p.useState(null),
      [h, f] = p.useState("medicine"),
      [S, b] = p.useState(!1),
      [_, k] = p.useState(0),
      [d, u] = p.useState({ message: "", type: "success", isVisible: !1 }),
      [y, D] = p.useState(!1),
      [$, I] = p.useState(null),
      [R, G] = p.useState("edit"),
      [oe, P] = p.useState(!1),
      [z, Z] = p.useState(null),
      [M, w] = p.useState(!1),
      [H, x] = p.useState(null),
      [N, j] = p.useState(!1),
      [F, ae] = p.useState(!1),
      [X, re] = p.useState(null),
      [be, de] = p.useState(!1),
      [ke, ue] = p.useState(null),
      [V, ge] = p.useState(!1),
      [je, T] = p.useState(null),
      [ie, U] = p.useState(!1),
      [E, ne] = p.useState(null),
      [ce, B] = p.useState(null),
      [C, A] = p.useState("add"),
      [q, te] = p.useState(!1),
      [le, me] = p.useState([]),
      [xe, Me] = p.useState([]),
      [he, ye] = p.useState(!1),
      [Se, Ie] = p.useState(!1),
      [Ke, Ee] = p.useState(""),
      [Ze, Fe] = p.useState(!1),
      [St, ut] = p.useState(""),
      [An, Yt] = p.useState(!1),
      [Vo, Tr] = p.useState(null),
      [v, Q] = p.useState(null),
      [Y, L] = p.useState(!1),
      [W, O] = p.useState(null),
      [K, ee] = p.useState(!1),
      [fe, J] = p.useState(null),
      pe = () => {
        sessionStorage.removeItem("user_session"), n(!1), o(null);
      },
      ve = p.useCallback(() => {
        k((Pe) => Pe + 1);
      }, []),
      Ce = p.useCallback((Pe, It) => {
        u({ message: Pe, type: It, isVisible: !0 });
      }, []),
      Ne = p.useCallback(() => {
        u((Pe) => ({ ...Pe, isVisible: !1 }));
      }, []),
      _e = (Pe) => {
        I(Pe), G("edit"), D(!0);
      },
      Le = () => {
        const Pe = {
          GUID: `new_medbox_${Date.now()}`,
          name: "",
          box_type: "",
          width: [],
          width_index: 0,
          med_info: [],
          parentShelf: null,
        };
        I(Pe), G("add"), D(!0);
      },
      Te = () => {
        D(!1), I(null), G("edit");
      },
      Ut = (Pe) => {
        Z(Pe), P(!0);
      },
      tn = () => {
        P(!1), Z(null);
      },
      Wo = (Pe) => {
        x(Pe), w(!0);
      },
      Hu = () => {
        w(!1), x(null);
      },
      Vu = (Pe) => {
        re(Pe), ae(!0);
      },
      Wu = () => {
        ae(!1), re(null);
      },
      qu = (Pe) => {
        ue(Pe), de(!0);
      },
      Yu = () => {
        de(!1), ue(null);
      },
      Xu = (Pe) => {
        T(Pe), ge(!0);
      },
      Qu = () => {
        ge(!1), T(null);
      },
      Ku = (Pe) => {
        ne(Pe), B(null), A("add"), U(!0);
      },
      Ju = (Pe, It) => {
        ne(Pe), B(It), A("edit"), U(!0);
      },
      Zu = () => {
        U(!1), ne(null), B(null), A("add");
      },
      ef = () => {
        te(!0);
      },
      tf = () => {
        te(!1);
      },
      nf = (Pe = "") => {
        Ee(Pe), Ie(!0);
      },
      rf = () => {
        Ie(!1);
      },
      sf = (Pe) => {
        ut(Pe), Fe(!0);
      },
      of = () => {
        Fe(!1), ut("");
      },
      lf = (Pe, It) => {
        Tr(Pe), Q(It || null), Yt(!0);
      },
      af = () => {
        Yt(!1), Tr(null), Q(null);
      },
      cf = (Pe) => {
        O(Pe), L(!0);
      },
      df = () => {
        L(!1), O(null);
      },
      uf = (Pe) => {
        J(Pe), ee(!0);
      },
      ff = () => {
        ee(!1), J(null);
      },
      pf = p.useCallback(async () => {
        if (!i) {
          console.warn("沒有選擇部門分類，無法重新載入資料");
          return;
        }
        console.log("🔄 重新載入藥品地圖資料，部門類型:", i), j(!0);
        try {
          const Pe = await De.getMedMapByDepartment(i);
          if (Pe.Code === 200 && Pe.Data) {
            console.log("📡 重新載入成功:", Pe.Data);
            const It = $t.convertMedMapApiToFakeData(Pe.Data);
            if (!$t.validateConvertedData(It)) {
              console.error("❌ 轉換後的資料驗證失敗"), m(null);
              return;
            }
            m(It), console.log("✅ 地圖資料已重新載入");
          } else console.error("❌ API 回傳錯誤:", Pe), m(null);
        } catch (Pe) {
          console.error("💥 重新載入藥品地圖資料失敗:", Pe), m(null);
        } finally {
          j(!1);
        }
      }, [i, j, m]),
      mf = p.useCallback((Pe, It) => {
        m(
          (Qn) =>
            Qn &&
            Qn.map((ii) => {
              const Kn = { ...ii };
              return (
                Kn.contents &&
                  (Kn.contents = Kn.contents.map((Jn) => {
                    const Zn = { ...Jn };
                    return (
                      Zn.contents &&
                        (Zn.contents = Zn.contents.map((er) => {
                          const tr = { ...er };
                          return (
                            tr.contents &&
                              (tr.contents = tr.contents.map((mn) => {
                                if (mn.GUID === Pe) {
                                  const Bt = { ...mn };
                                  return (
                                    Bt.medMapStock || (Bt.medMapStock = []),
                                    (Bt.medMapStock = [...Bt.medMapStock, It]),
                                    Bt
                                  );
                                }
                                return mn;
                              })),
                            tr
                          );
                        })),
                      Zn
                    );
                  })),
                Kn
              );
            })
        );
      }, []),
      hf = p.useCallback((Pe, It, Qn) => {
        m(
          (Ss) =>
            Ss &&
            Ss.map((Kn) => {
              const Jn = { ...Kn };
              return (
                Jn.contents &&
                  (Jn.contents = Jn.contents.map((Zn) => {
                    const er = { ...Zn };
                    return (
                      er.contents &&
                        (er.contents = er.contents.map((tr) => {
                          const mn = { ...tr };
                          return (
                            mn.contents &&
                              (mn.contents = mn.contents.map((Bt) => {
                                if (Bt.GUID === Pe && Bt.medMapStock) {
                                  const ci = { ...Bt };
                                  return (
                                    (ci.medMapStock = Bt.medMapStock.map((qo) =>
                                      qo.GUID === It ? { ...qo, ...Qn } : qo
                                    )),
                                    ci
                                  );
                                }
                                return Bt;
                              })),
                            mn
                          );
                        })),
                      er
                    );
                  })),
                Jn
              );
            })
        );
      }, []);
    return r.jsx(Au.Provider, {
      value: {
        isAuthenticated: t,
        setIsAuthenticated: n,
        currentUser: s,
        setCurrentUser: o,
        logout: pe,
        sidebarOpen: l,
        setSidebarOpen: a,
        selectedDepartmentType: i,
        setSelectedDepartmentType: c,
        isAdminMode: S,
        setIsAdminMode: b,
        apiDepartmentData: g,
        setApiDepartmentData: m,
        viewMode: h,
        setViewMode: f,
        refreshTrigger: _,
        triggerRefresh: ve,
        addStockToShelf: mf,
        notification: d,
        showNotification: Ce,
        hideNotification: Ne,
        medBoxModalOpen: y,
        setMedBoxModalOpen: D,
        selectedMedBox: $,
        setSelectedMedBox: I,
        openMedBoxModal: _e,
        closeMedBoxModal: Te,
        modalMode: R,
        setModalMode: G,
        openAddMedBoxModal: Le,
        listDrawModalOpen: oe,
        setListDrawModalOpen: P,
        selectedListDraw: z,
        setSelectedListDraw: Z,
        openListDrawModal: Ut,
        closeListDrawModal: tn,
        gridDrawModalOpen: M,
        setGridDrawModalOpen: w,
        selectedGridDraw: H,
        setSelectedGridDraw: x,
        openGridDrawModal: Wo,
        closeGridDrawModal: Hu,
        isLoadingMedMap: N,
        setIsLoadingMedMap: j,
        addParentContainerModalOpen: F,
        setAddParentContainerModalOpen: ae,
        selectedDepartmentForAdd: X,
        setSelectedDepartmentForAdd: re,
        openAddParentContainerModal: Vu,
        closeAddParentContainerModal: Wu,
        addShelfDrawContainerModalOpen: be,
        setAddShelfDrawContainerModalOpen: de,
        selectedSubContainerForAdd: ke,
        setSelectedSubContainerForAdd: ue,
        openAddShelfDrawContainerModal: qu,
        closeAddShelfDrawContainerModal: Yu,
        addSubContainerModalOpen: V,
        setAddSubContainerModalOpen: ge,
        selectedParentContainerForAdd: je,
        setSelectedParentContainerForAdd: T,
        openAddSubContainerModal: Xu,
        closeAddSubContainerModal: Qu,
        addStoreItemModalOpen: ie,
        setAddStoreItemModalOpen: U,
        selectedStoreShelfForAdd: E,
        setSelectedStoreShelfForAdd: ne,
        selectedStockItemForEdit: ce,
        setSelectedStockItemForEdit: B,
        storeItemModalMode: C,
        setStoreItemModalMode: A,
        openAddStoreItemModal: Ku,
        openEditStoreItemModal: Ju,
        closeAddStoreItemModal: Zu,
        updateStockInShelf: hf,
        addDepartmentModalOpen: q,
        setAddDepartmentModalOpen: te,
        allDepartmentsList: le,
        setAllDepartmentsList: me,
        openAddDepartmentModal: ef,
        closeAddDepartmentModal: tf,
        reloadMedMapData: pf,
        qrCodeScannerModalOpen: Se,
        qrCodeScannerMode: Ke,
        setQRCodeScannerModalOpen: Ie,
        openQRCodeScannerModal: nf,
        closeQRCodeScannerModal: rf,
        addBarcodeModalOpen: Ze,
        setAddBarcodeModalOpen: Fe,
        openAddBarcodeModal: sf,
        closeAddBarcodeModal: of,
        initialBarcodeValue: St,
        containerDetailModalOpen: An,
        setContainerDetailModalOpen: Yt,
        selectedContainerForDetail: Vo,
        setSelectedContainerForDetail: Tr,
        highlightedMedicineCode: v,
        setHighlightedMedicineCode: Q,
        openContainerDetailModal: lf,
        closeContainerDetailModal: af,
        editStoreShelfModalOpen: Y,
        setEditStoreShelfModalOpen: L,
        selectedStoreShelfForEdit: W,
        setSelectedStoreShelfForEdit: O,
        openEditStoreShelfModal: cf,
        closeEditStoreShelfModal: df,
        editParentContainerModalOpen: K,
        setEditParentContainerModalOpen: ee,
        selectedParentContainerForEdit: fe,
        setSelectedParentContainerForEdit: J,
        openEditParentContainerModal: uf,
        closeEditParentContainerModal: ff,
        medicineList: xe,
        setMedicineList: Me,
        isLoadingMedicines: he,
        setIsLoadingMedicines: ye,
      },
      children: e,
    });
  },
  Xe = () => {
    const e = p.useContext(Au);
    if (e === void 0)
      throw new Error("useDrugMap must be used within a DrugMapProvider");
    return e;
  },
  qm = {
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
  $u = p.createContext(void 0),
  Ym = ({ children: e }) => {
    const [t, n] = p.useState("zh-TW"),
      s = (o) => qm[t][o] || o;
    return r.jsx($u.Provider, {
      value: { language: t, setLanguage: n, t: s },
      children: e,
    });
  },
  gt = () => {
    const e = p.useContext($u);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Xm = {
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
 */ const Qm = (e) =>
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
            ...Xm,
            width: o,
            height: o,
            stroke: s,
            strokeWidth: a ? (Number(l) * 24) / Number(o) : l,
            className: ["lucide", `lucide-${Qm(e)}`, i].join(" "),
            ...g,
          },
          [
            ...t.map(([h, f]) => p.createElement(h, f)),
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
 */ const Km = $e("Archive", [
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
 */ const vc = $e("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ou = $e("Building2", [
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
 */ const Mr = $e("Camera", [
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
 */ const Jm = $e("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gs = $e("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lu = $e("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zm = $e("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eh = $e("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const th = $e("EyeOff", [
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
 */ const nh = $e("Eye", [
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
 */ const rh = $e("Globe", [
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
 */ const Uu = $e("Grid3x3", [
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
 */ const ai = $e("Layers", [
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
 */ const sh = $e("Lightbulb", [
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
 */ const oh = $e("ListX", [
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
 */ const fa = $e("List", [
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
 */ const jt = $e("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bu = $e("Lock", [
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
 */ const lh = $e("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ah = $e("Package", [
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
 */ const hr = $e("Pen", [
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
 */ const ih = $e("Pill", [
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
 */ const vt = $e("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sn = $e("Settings", [
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
 */ const zu = $e("Trash2", [
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
 */ const Gu = $e("Unlock", [
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
 */ const ch = $e("Warehouse", [
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
 */ const dh = $e("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ve = $e("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  uh = () => {
    const { sidebarOpen: e, setSidebarOpen: t } = Xe(),
      { t: n } = gt();
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
              children: r.jsx(ai, { className: "w-5 h-5" }),
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
                ? r.jsx(fa, { className: "w-6 h-6" })
                : r.jsx(fa, { className: "w-6 h-6" }),
            }),
          ],
        }),
      }),
    });
  },
  fh = () => {
    const {
        viewMode: e,
        setViewMode: t,
        logout: n,
        currentUser: s,
        selectedDepartmentType: o,
        openAddDepartmentModal: l,
        apiDepartmentData: a,
        allDepartmentsList: i,
      } = Xe(),
      { language: c, setLanguage: g, t: m } = gt(),
      [h, f] = no.useState(!1),
      S = () => {
        g(c === "zh-TW" ? "en" : "zh-TW");
      },
      b = no.useMemo(() => {
        if (!o || !i || !a) return !1;
        const _ = a.map((u) => u.name);
        return (
          i
            .filter((u) => u["department_type "] === o)
            .filter((u) => !_.includes(u.name)).length > 0
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
                        r.jsx(ih, { className: "w-4 h-4" }),
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
                        r.jsx(Ou, { className: "w-4 h-4" }),
                        r.jsx("span", {
                          className: "text-sm font-medium",
                          children: m("topbar.department"),
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsx("button", {
                  onClick: () => f(!h),
                  className:
                    "lg:hidden flex items-center justify-center p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                  children: h
                    ? r.jsx(eh, { className: "w-4 h-4" })
                    : r.jsx(Lu, { className: "w-4 h-4" }),
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
                          r.jsx(vt, { className: "w-4 h-4" }),
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
                  onClick: S,
                  className:
                    "w-full lg:w-auto flex justify-center items-center space-x-2 px-3 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors border",
                  children: [
                    r.jsx(rh, { className: "w-4 h-4" }),
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
                    r.jsx(lh, { className: "w-4 h-4" }),
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
  ph = [
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
  mh = ({ isOpen: e, onClose: t }) => {
    const [n, s] = p.useState("blue"),
      [o, l] = p.useState(1),
      [a, i] = p.useState(60),
      [c, g] = p.useState(""),
      [m, h] = p.useState(""),
      [f, S] = p.useState([]),
      [b, _] = p.useState([]),
      [k, d] = p.useState([]),
      [u, y] = p.useState(!1),
      [D, $] = p.useState(!1),
      I = p.useRef(null),
      R = p.useRef(null),
      G = p.useRef(null),
      oe = p.useRef(null);
    p.useEffect(() => {
      if (e) {
        const x = localStorage.getItem("medMap_setting");
        if (x)
          try {
            const N = JSON.parse(x);
            s(N.light_color || "blue"),
              l(N.brightness !== void 0 ? N.brightness : 1),
              i(N.light_sec !== void 0 ? N.light_sec : 60),
              g(N.default_person || ""),
              h(N.default_person_id || "");
          } catch (N) {
            console.error("讀取設定失敗:", N),
              s("blue"),
              l(1),
              i(60),
              g(""),
              h("");
          }
        else s("blue"), l(1), i(60), g(""), h("");
        P();
      }
    }, [e]),
      p.useEffect(() => {
        const x = (N) => {
          G.current &&
            !G.current.contains(N.target) &&
            I.current &&
            !I.current.contains(N.target) &&
            y(!1),
            oe.current &&
              !oe.current.contains(N.target) &&
              R.current &&
              !R.current.contains(N.target) &&
              $(!1);
        };
        return (
          document.addEventListener("mousedown", x),
          () => document.removeEventListener("mousedown", x)
        );
      }, []);
    const P = async () => {
        try {
          const x = await De.getAllStaffInfo();
          x.Code === 200 && x.Data && S(x.Data);
        } catch (x) {
          console.error("獲取人員資料失敗:", x);
        }
      },
      z = (x) => {
        if ((g(x), x.trim() === "")) {
          _([]), y(!1);
          return;
        }
        const N = f.filter(
          (j) => j.name && j.name.toLowerCase().includes(x.toLowerCase())
        );
        _(N), y(N.length > 0);
      },
      Z = (x) => {
        if ((h(x), x.trim() === "")) {
          d([]), $(!1);
          return;
        }
        const N = f.filter(
          (j) => j.ID && j.ID.toLowerCase().includes(x.toLowerCase())
        );
        d(N), $(N.length > 0);
      },
      M = (x) => {
        g(x.name), h(x.ID), y(!1);
      },
      w = (x) => {
        g(x.name), h(x.ID), $(!1);
      },
      H = () => {
        const x = {
          light_color: n,
          brightness: o,
          light_sec: a,
          default_person: c,
          default_person_id: m,
        };
        localStorage.setItem("medMap_setting", JSON.stringify(x)),
          console.log("設定已儲存:", x),
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
                      children: r.jsx(Ve, { className: "w-5 h-5" }),
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
                                  ref: I,
                                  type: "text",
                                  value: c,
                                  onChange: (x) => z(x.target.value),
                                  onFocus: () => {
                                    c.trim() && z(c);
                                  },
                                  placeholder: "請輸入人員名稱",
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                }),
                                u &&
                                  r.jsx("div", {
                                    ref: G,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: b.map((x, N) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          onClick: () => M(x),
                                          className:
                                            "px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                          children: [
                                            r.jsx("div", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: x.name,
                                            }),
                                            r.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: x.ID,
                                            }),
                                          ],
                                        },
                                        N
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
                                  value: m,
                                  onChange: (x) => Z(x.target.value),
                                  onFocus: () => {
                                    m.trim() && Z(m);
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
                                    children: k.map((x, N) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          onClick: () => w(x),
                                          className:
                                            "px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                          children: [
                                            r.jsx("div", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: x.ID,
                                            }),
                                            r.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: x.name,
                                            }),
                                          ],
                                        },
                                        N
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
                          children: ph.map((x) =>
                            r.jsxs(
                              "button",
                              {
                                onClick: () => s(x.value),
                                className: `
                    relative p-3 rounded-lg border-2 transition-all
                    ${x.bgColor} ${x.textColor}
                    ${
                      n === x.value
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
                                        children: x.name,
                                      }),
                                      r.jsx("div", {
                                        className: "text-xs opacity-90",
                                        children: x.bgr,
                                      }),
                                    ],
                                  }),
                                  n === x.value &&
                                    r.jsx("div", {
                                      className:
                                        "absolute top-1 right-1 w-3 h-3 bg-white rounded-full border-2 border-gray-900",
                                    }),
                                ],
                              },
                              x.value
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
                              onChange: (x) => l(parseFloat(x.target.value)),
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
                              onChange: (x) => i(parseInt(x.target.value)),
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
                      onClick: H,
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
  hh = () => {
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
      } = Xe(),
      { t: m } = gt(),
      [h, f] = p.useState(new Set()),
      [S, b] = p.useState([]),
      [_, k] = p.useState(!0),
      [d, u] = p.useState([]),
      [y, D] = p.useState(!1),
      $ = () => {
        c
          ? g(!1)
          : prompt("請輸入後台密碼：") === "66437068"
          ? g(!0)
          : alert("密碼錯誤，無法開啟後台模式");
      };
    p.useEffect(() => {
      (async () => {
        k(!0);
        try {
          const z = await De.getDepartments();
          z.Code === 200 && z.Data
            ? (console.log(z.Data), b(z.Data), i(z.Data))
            : (console.error("API returned error:", z), b([]), i([]));
        } catch (z) {
          console.error("Failed to fetch department data:", z), b([]), i([]);
        } finally {
          k(!1);
        }
      })();
    }, []);
    const I = S.reduce((P, z) => {
        const Z = z["department_type "];
        return P[Z] || (P[Z] = []), P[Z].push(z), P;
      }, {}),
      R = (P) => {
        const z = new Set(h);
        z.has(P) ? z.delete(P) : z.add(P), f(z);
      },
      G = async (P) => {
        console.log("🏢 選擇部門:", P), s(P), await oe(P), t(!1);
      },
      oe = async (P) => {
        console.log("🚀 開始取得藥品地圖資料，部門類型:", P), a(!0);
        try {
          const z = await De.getMedMapByDepartment(P);
          if (z.Code === 200 && z.Data) {
            console.log("📡 API 回傳成功:", z.Data);
            const Z = $t.convertMedMapApiToFakeData(z.Data);
            if (!$t.validateConvertedData(Z)) {
              console.error("❌ 轉換後的資料驗證失敗"), u([]);
              return;
            }
            const w = $t.generateConversionReport(z.Data, Z);
            u(Z),
              o(Z),
              console.log("💾 已暫存轉換後的資料到狀態中"),
              console.log("📊 最終轉換結果:", Z),
              console.log("📋 轉換報告:", w);
          } else console.error("❌ API 回傳錯誤:", z), u([]), o(null);
        } catch (z) {
          console.error("💥 取得藥品地圖資料失敗:", z), u([]), o(null);
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
                          children: r.jsx(ai, { className: "w-5 h-5" }),
                        }),
                        r.jsx("h1", {
                          className: "text-lg font-semibold text-gray-900",
                          children: m("sidebar.drugMap"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: () => t(!e),
                      className:
                        "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                      title: m("sidebar.closeSidebar"),
                      children: r.jsx(oh, { className: "w-6 h-6" }),
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
                        Object.entries(I).map(([P, z]) =>
                          r.jsxs(
                            "div",
                            {
                              className: "space-y-1",
                              children: [
                                r.jsxs("button", {
                                  onClick: () => G(P),
                                  disabled: l,
                                  className: `w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 border ${
                                    n === P
                                      ? "bg-blue-50 text-blue-700 border-blue-200 shadow-sm"
                                      : "text-gray-700 hover:bg-gray-50 hover:shadow-sm border-transparent"
                                  } ${
                                    l ? "opacity-50 cursor-not-allowed" : ""
                                  }`,
                                  children: [
                                    r.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        P === "B1F"
                                          ? r.jsx(Ou, { className: "w-4 h-4" })
                                          : r.jsx(ch, { className: "w-4 h-4" }),
                                        r.jsxs("div", {
                                          className: "text-left",
                                          children: [
                                            r.jsx("div", {
                                              className: "font-medium",
                                              children: P,
                                            }),
                                            r.jsxs("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: [
                                                z.length,
                                                " ",
                                                m("sidebar.departments"),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    r.jsx("div", {
                                      onClick: (Z) => {
                                        Z.stopPropagation(), R(P);
                                      },
                                      className:
                                        "p-1 hover:bg-gray-200/50 rounded transition-colors",
                                      children: h.has(P)
                                        ? r.jsx(Lu, { className: "w-4 h-4" })
                                        : r.jsx(Zm, { className: "w-4 h-4" }),
                                    }),
                                  ],
                                }),
                                h.has(P) &&
                                  r.jsx("div", {
                                    className: "ml-6 space-y-2",
                                    children: z.map((Z) =>
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
                                                children: Z.name,
                                              }),
                                              r.jsx("span", {
                                                className: `text-xs px-2 py-1 rounded-full ${
                                                  Z.type === "調劑台"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-blue-100 text-blue-800"
                                                }`,
                                                children: Z.type,
                                              }),
                                            ],
                                          }),
                                        },
                                        Z.GUID
                                      )
                                    ),
                                  }),
                              ],
                            },
                            P
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
                          id: "admin-mode-toggle",
                          role: "switch",
                          "aria-checked": c,
                          onClick: $,
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
                      onClick: () => D(!0),
                      className:
                        "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                      title: "設定",
                      children: r.jsx(sn, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        r.jsx(mh, { isOpen: y, onClose: () => D(!1) }),
      ],
    });
  },
  gh = () => {
    const { t: e } = gt();
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
  xh = ({
    component: e,
    scale: t,
    isLocked: n,
    isHighlighted: s = !1,
    onContainerClick: o,
  }) => {
    const l = p.useRef(null),
      { t: a } = gt(),
      {
        apiDepartmentData: i,
        setApiDepartmentData: c,
        showNotification: g,
      } = Xe(),
      [m, h] = p.useState(!1),
      [f, S] = p.useState({ x: 0, y: 0 }),
      [b, _] = p.useState(e.position),
      [k, d] = p.useState(!1),
      [u, y] = p.useState(null),
      [D, $] = p.useState({ x: 0, y: 0 }),
      [I, R] = p.useState({ x: 0, y: 0 }),
      G = () => {
        try {
          const V = localStorage.getItem("medMap_setting");
          if (V) return JSON.parse(V).light_color || "red";
        } catch (V) {
          console.error("讀取高亮顏色設定失敗:", V);
        }
        return "red";
      },
      oe = p.useCallback(
        async (V, ge) => {
          if (!i) return;
          console.log("🔄 更新組件位置:", V, ge);
          const je = JSON.parse(JSON.stringify(i)),
            T = (U) => {
              for (const E of U) {
                if (E.GUID === V)
                  return (
                    (E.position = { x: ge.x.toFixed(3), y: ge.y.toFixed(3) }),
                    console.log(
                      "✅ 組件位置已更新:",
                      E.name,
                      ge.x.toFixed(3),
                      ge.y.toFixed(3)
                    ),
                    !0
                  );
                if (
                  (E.components &&
                    Array.isArray(E.components) &&
                    T(E.components)) ||
                  (E.contents && Array.isArray(E.contents) && T(E.contents))
                )
                  return !0;
              }
              return !1;
            };
          if (T(je)) {
            c(je), console.log("💾 全域資料已更新");
            try {
              console.log("📡 開始同步後端位置資料...");
              const U = await De.updateContainerPosition({
                GUID: V,
                absolute_position: `${ge.x.toFixed(3)},${ge.y.toFixed(3)}`,
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
          } else console.warn("⚠️ 未找到要更新的組件:", V);
        },
        [i, c, g]
      ),
      { position: P, dimensions: z, name: Z, type: M } = e,
      w = p.useCallback(
        (V) => {
          const ge = l.current;
          if (ge)
            if ((R({ x: V.clientX, y: V.clientY }), n)) {
              V.preventDefault(),
                V.stopPropagation(),
                ge.setPointerCapture(V.pointerId);
              const je = ge.getBoundingClientRect(),
                T = V.clientX - je.left,
                ie = V.clientY - je.top;
              S({ x: T, y: ie }), h(!0), d(!1);
            } else d(!1);
        },
        [n]
      ),
      H = p.useCallback(() => {
        if (!i) return [];
        const V = [],
          ge = (je) => {
            for (const T of je)
              T.GUID !== e.GUID &&
                T.position &&
                V.push({
                  GUID: T.GUID,
                  position: T.position,
                  dimensions: T.dimensions,
                }),
                T.components && Array.isArray(T.components) && ge(T.components),
                T.contents && Array.isArray(T.contents) && ge(T.contents);
          };
        return ge(i), V;
      }, [i, e.GUID]),
      x = p.useCallback(
        (V, ge) => {
          const T = H();
          let ie = V,
            U = ge;
          for (const E of T) {
            const ne = parseFloat(E.position.x),
              ce = parseFloat(E.position.y);
            if (
              (Math.abs(V - ne) < 20 && (ie = ne),
              Math.abs(ge - ce) < 20 && (U = ce),
              E.dimensions && e.dimensions)
            ) {
              const B = ne + parseFloat(E.dimensions.width),
                C = V + parseFloat(e.dimensions.width);
              Math.abs(C - B) < 20 && (ie = B - parseFloat(e.dimensions.width));
              const A = ce + parseFloat(E.dimensions.depth),
                q = ge + parseFloat(e.dimensions.depth);
              Math.abs(q - A) < 20 && (U = A - parseFloat(e.dimensions.depth));
            }
          }
          return { x: ie, y: U };
        },
        [H, e.dimensions]
      ),
      N = p.useCallback(
        (V) => {
          const ge = Math.abs(V.clientX - I.x),
            je = Math.abs(V.clientY - I.y);
          if (((ge > 5 || je > 5) && d(!0), !m || !n)) return;
          V.preventDefault(), V.stopPropagation();
          const T = l.current;
          if (!T) return;
          const ie = T.closest("[data-canvas-content]");
          if (!ie) return;
          const U = ie.getBoundingClientRect(),
            E = (V.clientX - U.left - f.x) / t,
            ne = (V.clientY - U.top - f.y) / t,
            ce = x(E, ne);
          _(ce);
        },
        [m, f, t, n, x, I]
      ),
      j = p.useCallback(
        (V) => {
          const ge = Math.abs(V.clientX - I.x),
            je = Math.abs(V.clientY - I.y),
            T = ge > 5 || je > 5;
          if (n) {
            if (!m) return;
            V.preventDefault(), V.stopPropagation();
            const ie = l.current;
            ie && ie.releasePointerCapture(V.pointerId),
              h(!1),
              T ? oe(e.GUID, b) : o && o(e),
              d(!1);
          } else
            !T && o && (V.preventDefault(), V.stopPropagation(), o(e)), d(!1);
        },
        [m, n, o, e, oe, b, I]
      ),
      F = p.useCallback(
        (V) => {
          const ge = l.current;
          if (!ge) return;
          const je = V.touches[0];
          if (je && ($({ x: je.clientX, y: je.clientY }), n)) {
            V.preventDefault(), V.stopPropagation(), y(je.identifier);
            const T = ge.getBoundingClientRect(),
              ie = je.clientX - T.left,
              U = je.clientY - T.top;
            S({ x: ie, y: U }), h(!0);
          }
        },
        [n]
      ),
      ae = p.useCallback(
        (V) => {
          if (!m || !n || u === null) return;
          V.preventDefault(), V.stopPropagation();
          const ge = l.current;
          if (!ge) return;
          const je = Array.from(V.touches).find((ce) => ce.identifier === u);
          if (!je) return;
          const T = ge.closest("[data-canvas-content]");
          if (!T) return;
          const ie = T.getBoundingClientRect(),
            U = (je.clientX - ie.left - f.x) / t,
            E = (je.clientY - ie.top - f.y) / t,
            ne = x(U, E);
          _(ne);
        },
        [m, f, t, n, u, x]
      ),
      X = p.useCallback(
        (V) => {
          const ge = Array.from(V.changedTouches)[0];
          if (!ge) return;
          const je = Math.abs(ge.clientX - D.x),
            T = Math.abs(ge.clientY - D.y),
            ie = je > 10 || T > 10;
          if (n) {
            if (
              !m ||
              u === null ||
              !Array.from(V.changedTouches).some((E) => E.identifier === u)
            )
              return;
            V.preventDefault(),
              V.stopPropagation(),
              h(!1),
              y(null),
              $({ x: 0, y: 0 }),
              ie ? oe(e.GUID, b) : o && o(e);
          } else
            !ie && o && (V.preventDefault(), V.stopPropagation(), o(e)),
              $({ x: 0, y: 0 });
        },
        [m, n, u, oe, e, b, D, o]
      ),
      re = p.useCallback(
        (V) => {
          !m ||
            !n ||
            u === null ||
            !Array.from(V.changedTouches).some((je) => je.identifier === u) ||
            (V.preventDefault(),
            V.stopPropagation(),
            _(e.position),
            h(!1),
            y(null),
            $({ x: 0, y: 0 }));
        },
        [m, n, u, e.position]
      ),
      be = (V) => {
        if (s) return `highlight-breathe-${G()}`;
        switch (V) {
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
      de = (V) => {
        if (s) return `highlight-breathe-${G()}`;
        switch (V) {
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
      ke = (V) => {
        if (s) return `highlight-tag-${G()}`;
        switch (V) {
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
      ue = (V) => {
        const ge =
          V === "調劑台"
            ? "type.dispensingStation"
            : V === "藥庫"
            ? "type.warehouse"
            : V === "parent_container"
            ? "櫃體"
            : "type." + V;
        return a(ge) || V;
      };
    return r.jsx("div", {
      ref: l,
      className: `flex flex-col absolute border-2 rounded-lg shadow-lg hover:shadow-xl ${be(
        M
      )} overflow-hidden ${n ? "cursor-move" : "cursor-default"} ${
        m ? "shadow-2xl z-50" : ""
      }`,
      style: {
        left: `${b.x}px`,
        top: `${b.y}px`,
        minWidth: M === "調劑台" || M === "藥庫" ? "120px" : "180px",
        minHeight: M === "調劑台" || M === "藥庫" ? "60px" : "120px",
        userSelect: "none",
        touchAction: "none",
        transition: m
          ? "none"
          : "transform 0.2s ease-out, box-shadow 0.2s ease-out",
      },
      onPointerDown: w,
      onPointerMove: N,
      onPointerUp: j,
      onTouchStart: F,
      onTouchMove: ae,
      onTouchEnd: X,
      onTouchCancel: re,
      children: r.jsx("div", {
        className: `w-full min-w-[400px] h-auto flex items-start flex-1 justify-between p-2 border-gray-600 ${de(
          M
        )}`,
        children: r.jsx("div", {
          className: "flex space-x-2 flex-1 min-w-0",
          children: r.jsxs("div", {
            className: "min-w-0 flex gap-4",
            children: [
              r.jsx("div", {
                className: "font-semibold text-lg truncate",
                children: Z,
              }),
              r.jsx("div", {
                className: `text-sm truncate py-1 px-3 text-white rounded-2xl ${ke(
                  M
                )}`,
                children: ue(M),
              }),
            ],
          }),
        }),
      }),
    });
  },
  Ho = ({ isOpen: e, onClose: t, onScanSuccess: n, mode: s }) => {
    const { showNotification: o, openAddBarcodeModal: l } = Xe();
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
      [h, f] = p.useState(!1),
      [S, b] = p.useState(""),
      [_, k] = p.useState(0),
      [d, u] = p.useState(null),
      [y, D] = p.useState(!1);
    p.useEffect(() => {
      const z = () => {
        const Z = window.innerWidth < 680;
        D(Z);
      };
      return (
        z(),
        window.addEventListener("resize", z),
        () => window.removeEventListener("resize", z)
      );
    }, []);
    const $ = async () => {
        try {
          b("");
          const z = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: "environment",
              width: { ideal: 1920 },
              height: { ideal: 1080 },
            },
          });
          (c.current = z),
            a.current &&
              ((a.current.srcObject = z),
              await a.current.play(),
              console.log("✅ Camera started, setting isScanning to true"),
              f(!0));
        } catch (z) {
          console.error("無法開啟相機:", z),
            b("無法開啟相機，請確認相機權限已開啟");
        }
      },
      I = () => {
        g.current && (clearInterval(g.current), (g.current = null)),
          c.current &&
            (c.current.getTracks().forEach((z) => z.stop()),
            (c.current = null)),
          a.current && (a.current.srcObject = null),
          f(!1);
      },
      R = async () => {
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
        const z = Date.now();
        if (z - _ < 1e3) {
          console.log("⏱️ Throttled: too soon since last scan");
          return;
        }
        k(z);
        const Z = a.current,
          M = i.current,
          w = M.getContext("2d");
        if (
          (console.log("🎥 video.readyState:", Z.readyState),
          console.log("🎥 HAVE_ENOUGH_DATA:", Z.HAVE_ENOUGH_DATA),
          !w || Z.readyState !== Z.HAVE_ENOUGH_DATA)
        ) {
          console.log("❌ Video not ready or no context");
          return;
        }
        (M.width = Z.videoWidth),
          (M.height = Z.videoHeight),
          w.drawImage(Z, 0, 0, M.width, M.height),
          M.toBlob(
            async (H) => {
              if (!H) return;
              const x = new File([H], "scan.jpg", { type: "image/jpeg" }),
                N = performance.now();
              try {
                console.log("📸 [相機掃描] 截取圖片並掃描...");
                const j = performance.now(),
                  F = await De.scanBarcode(x),
                  ae = performance.now();
                if (
                  (console.log(
                    `⏱️ [相機掃描] 掃描條碼API用時: ${(ae - j).toFixed(2)}ms`
                  ),
                  !F.results || F.results.length === 0)
                ) {
                  console.log("⚠️ 未辨識到條碼");
                  return;
                }
                const X = F.results[0];
                if (!X.code) {
                  console.log("⚠️ 辨識到條碼但無法讀取內容");
                  return;
                }
                console.log("✅ 成功辨識條碼:", X.code),
                  console.log("📋 條碼類型:", X.type),
                  console.log("📊 信心度:", X.conf),
                  I(),
                  t();
                try {
                  const re = performance.now(),
                    be = await De.searchByBarCode(X.code),
                    de = performance.now();
                  if (
                    (console.log(
                      `⏱️ [相機掃描] 搜尋藥品資料API用時: ${(de - re).toFixed(
                        2
                      )}ms`
                    ),
                    console.log("🔍 條碼搜尋結果:", be),
                    be.Code === 200)
                  )
                    if (
                      (console.log("✅ 找到藥品資料:", be.Data),
                      console.log("🎯 準備調用 onScanSuccess, mode:", s),
                      o("找到藥品資料", "success"),
                      n)
                    ) {
                      console.log("✅ onScanSuccess 存在，開始調用");
                      const ke = performance.now();
                      n(X.code, be.Data);
                      const ue = performance.now();
                      console.log(
                        `⏱️ [相機掃描] 定位藥品用時: ${(ue - ke).toFixed(2)}ms`
                      );
                      const V = performance.now();
                      console.log(
                        `⏱️ [相機掃描] 總用時: ${(V - N).toFixed(2)}ms`
                      ),
                        console.log("✅ onScanSuccess 調用完成");
                    } else console.warn("⚠️ onScanSuccess 不存在");
                  else
                    be.Code === -200 && be.Result === "查無資料"
                      ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                        o("查無條碼資料，請建立條碼", "warning"),
                        l(X.code))
                      : (console.log("❌ 搜尋失敗:", be.Result),
                        o(be.Result || "搜尋失敗", "error"));
                } catch (re) {
                  console.error("條碼搜尋錯誤:", re),
                    o("搜尋失敗，請稍後再試", "error");
                }
              } catch (j) {
                console.error("掃描錯誤:", j);
              }
            },
            "image/jpeg",
            1
          );
      },
      G = () => {
        g.current && clearInterval(g.current),
          (g.current = setInterval(() => {
            R();
          }, 1e3));
      };
    p.useEffect(
      () => (
        e ? $() : I(),
        () => {
          I();
        }
      ),
      [e]
    ),
      p.useEffect(() => {
        h && !g.current
          ? (console.log("🚀 isScanning became true, starting interval"), G())
          : !h &&
            g.current &&
            (console.log("🛑 isScanning became false, stopping interval"),
            g.current && (clearInterval(g.current), (g.current = null)));
      }, [h]);
    const oe = () => {
        I(), t();
      },
      P = async (z) => {
        if (!c.current || !m.current) return;
        const Z = m.current.getBoundingClientRect(),
          M = (z.clientX - Z.left) / Z.width,
          w = (z.clientY - Z.top) / Z.height;
        console.log("🎯 點擊聚焦位置:", { x: M, y: w }),
          u({ x: z.clientX - Z.left, y: z.clientY - Z.top }),
          setTimeout(() => u(null), 1e3);
        try {
          const H = c.current.getVideoTracks()[0],
            x = H.getCapabilities();
          if (
            (console.log("📹 相機能力:", x),
            !x.focusMode || !x.focusMode.includes("manual"))
          ) {
            console.log("⚠️ 此相機不支援手動聚焦");
            return;
          }
          const N = {
            advanced: [
              {
                focusMode: "manual",
                focusDistance: 0,
                pointsOfInterest: [{ x: M, y: w }],
              },
            ],
          };
          await H.applyConstraints(N), console.log("✅ 聚焦成功");
        } catch (H) {
          console.log("⚠️ 聚焦失敗 (可能不支援):", H);
        }
      };
    return e
      ? y
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
                      r.jsx(Mr, { className: "w-6 h-6 text-white" }),
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
                    children: r.jsx(Ve, { className: "w-6 h-6 text-white" }),
                  }),
                ],
              }),
              r.jsxs("div", {
                className: "flex-1 relative",
                children: [
                  r.jsxs("div", {
                    ref: m,
                    className: "absolute inset-0 bg-black cursor-crosshair",
                    onClick: P,
                    children: [
                      r.jsx("video", {
                        ref: a,
                        className: "w-full h-full object-cover",
                        playsInline: !0,
                        muted: !0,
                      }),
                      d &&
                        r.jsxs("div", {
                          className: "absolute pointer-events-none",
                          style: {
                            left: d.x,
                            top: d.y,
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
                  S &&
                    r.jsx("div", {
                      className:
                        "bg-red-500 bg-opacity-20 border border-red-500 rounded-lg px-3 py-2 mb-3",
                      children: r.jsx("p", {
                        className: "text-red-200 text-sm",
                        children: S,
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
                          children: r.jsx(Mr, {
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
                      children: r.jsx(Ve, {
                        className: "w-6 h-6 text-gray-600",
                      }),
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "flex-1 overflow-y-auto p-4",
                  children: [
                    S &&
                      r.jsx("div", {
                        className:
                          "bg-red-50 border border-red-200 rounded-lg px-3 py-2 mb-4",
                        children: r.jsx("p", {
                          className: "text-red-600 text-sm",
                          children: S,
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
                          onClick: P,
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
class yh {
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
const ts = new yh(),
  vh = ({ children: e }) => {
    const t = p.useRef(null),
      {
        selectedDepartmentType: n,
        apiDepartmentData: s,
        showNotification: o,
        openAddBarcodeModal: l,
        openContainerDetailModal: a,
        highlightedMedicineCode: i,
        setHighlightedMedicineCode: c,
      } = Xe(),
      { t: g } = gt(),
      [m, h] = p.useState({ x: 0, y: 0, scale: 1 }),
      [f, S] = p.useState(!1),
      [b, _] = p.useState(!1),
      [k, d] = p.useState({ x: 0, y: 0 }),
      [u, y] = p.useState(!1),
      [D, $] = p.useState(!1),
      [I, R] = p.useState(""),
      [G, oe] = p.useState([]),
      [P, z] = p.useState(null),
      Z = {
        blue: "255,0,0",
        green: "0,255,0",
        red: "0,0,255",
        yellow: "0,255,255",
        purple: "255,0,255",
        cyan: "255,255,0",
      },
      M = () => {
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
      w = (C, A, q, te) => {
        try {
          const le = M(),
            me = le.findIndex(
              (Me) => Me.department === C && Me.canvasType === A
            ),
            xe = { department: C, canvasType: A, scale: q, position: te };
          me >= 0 ? (le[me] = xe) : le.push(xe),
            localStorage.setItem("med_map_anchor", JSON.stringify(le));
        } catch (le) {
          console.error("Error saving canvas state to localStorage:", le);
        }
      },
      H = (C, A) =>
        M().find((te) => te.department === C && te.canvasType === A) || null;
    p.useEffect(() => {
      if (n) {
        const C = H(n, "InfiniteCanvas");
        if (C) h({ x: C.position.x, y: C.position.y, scale: C.scale });
        else {
          const A = { x: 0, y: 0, scale: 1 };
          h(A), w(n, "InfiniteCanvas", A.scale, A);
        }
      }
    }, [n]),
      p.useEffect(() => {
        if (!n) return;
        const C = setTimeout(() => {
          w(n, "InfiniteCanvas", m.scale, { x: m.x, y: m.y });
        }, 500);
        return () => clearTimeout(C);
      }, [m, n]),
      p.useEffect(() => {
        const C = (q) => {
            q.code === "Space" && !q.repeat && (q.preventDefault(), y(!0));
          },
          A = (q) => {
            q.code === "Space" && (q.preventDefault(), y(!1), S(!1));
          };
        return (
          window.addEventListener("keydown", C),
          window.addEventListener("keyup", A),
          () => {
            window.removeEventListener("keydown", C),
              window.removeEventListener("keyup", A);
          }
        );
      }, []);
    const x = p.useCallback(
        (C) => {
          var q;
          if (b) return;
          if (
            (C.ctrlKey && !navigator.userAgent.includes("Mac")) ||
            (C.metaKey && navigator.userAgent.includes("Mac"))
          ) {
            C.preventDefault(), C.stopPropagation();
            const te =
              (q = t.current) == null ? void 0 : q.getBoundingClientRect();
            if (!te) return;
            const le = C.clientX - te.left,
              me = C.clientY - te.top,
              xe = C.deltaY > 0 ? 0.9 : 1.1,
              Me = Math.max(0.1, Math.min(5, m.scale * xe)),
              he = Me / m.scale,
              ye = le - (le - m.x) * he,
              Se = me - (me - m.y) * he;
            h({ x: ye, y: Se, scale: Me });
          }
        },
        [m, b]
      ),
      N = p.useCallback(
        (C) => {
          b ||
            !u ||
            (S(!0), d({ x: C.clientX, y: C.clientY }), C.preventDefault());
        },
        [b, u]
      ),
      j = p.useCallback(
        (C) => {
          if (!f || b) return;
          const A = C.clientX - k.x,
            q = C.clientY - k.y;
          h((te) => ({ ...te, x: te.x + A, y: te.y + q })),
            d({ x: C.clientX, y: C.clientY });
        },
        [f, k, b]
      ),
      F = p.useCallback(() => {
        S(!1);
      }, []),
      ae = p.useCallback(
        (C) => {
          if (!s) return [];
          const A = [],
            q = (te) => {
              for (const le of te)
                le.med_list &&
                  Array.isArray(le.med_list) &&
                  le.med_list.some((xe) => xe.code == C) &&
                  (console.log("✅ 找到藥品所在櫃體:", le.name, le.GUID),
                  A.push(le)),
                  le.components &&
                    Array.isArray(le.components) &&
                    q(le.components),
                  le.contents && Array.isArray(le.contents) && q(le.contents);
            };
          return q(s), A;
        },
        [s]
      ),
      X = p.useCallback(() => {
        try {
          const A = localStorage.getItem("medMap_setting");
          if (A) {
            const te = JSON.parse(A).light_sec;
            if (te != null && te !== "") {
              const le = Number(te);
              if (!isNaN(le) && le > 0) return le * 1e3;
            }
          }
        } catch (A) {
          console.error("讀取亮燈設定失敗:", A);
        }
        return 6e4;
      }, []),
      re = p.useCallback(() => {
        const C = { rgb_color: "255,0,0", brightness: "100" };
        try {
          const A = localStorage.getItem("medMap_setting");
          if (A) {
            const q = JSON.parse(A),
              te = q.light_color || "red";
            return {
              rgb_color: Z[te] || Z.red,
              brightness: String(q.brightness !== void 0 ? q.brightness : 100),
            };
          }
        } catch (A) {
          console.error("讀取亮燈設定失敗:", A);
        }
        return C;
      }, []),
      be = p.useCallback(
        async (C) => {
          if (!C.trim()) return;
          console.log("🔍 搜尋藥碼:", C);
          const A = ae(C);
          if (A.length > 0) {
            const q = X(),
              te = re();
            console.log(`🎯 高亮 ${A.length} 個櫃體:`, A),
              console.log(`⏱️ 亮燈時長: ${q}ms (${q / 1e3}秒)`),
              console.log("💡 亮燈設定:", te);
            const le = A.map((xe) => xe.GUID);
            oe(le), z(C), c(C);
            const me = A.filter((xe) => xe.serverName && xe.serverType).map(
              (xe) => ({
                serverName: xe.serverName,
                serverType: xe.serverType,
                medicineCode: C,
                deviceType: xe.device_type,
              })
            );
            me.length > 0 &&
              (await ts.startLighting(me, te.rgb_color, te.brightness, q),
              setTimeout(() => {
                oe([]), z(null), c(null);
              }, q));
          } else
            console.log("❌ 未找到包含此藥品的櫃體"), oe([]), z(null), c(null);
        },
        [ae, X, re, c]
      ),
      de = (C, A) => {
        var me, xe;
        console.log("📍 [相機掃描-部門視圖] 藥品定位模式 - 掃描到藥品:", {
          barcode: C,
          medicineData: A,
        });
        const q =
          ((me = A[0]) == null ? void 0 : me.CODE) ||
          ((xe = A[0]) == null ? void 0 : xe.code);
        $(!1);
        const te = performance.now();
        be(q);
        const le = performance.now();
        console.log(
          `⏱️ [相機掃描-部門視圖] 亮燈用時: ${(le - te).toFixed(2)}ms`
        );
      },
      ke = async (C) => {
        var A, q;
        if (C.key === "Enter") {
          if ((C.preventDefault(), !I.trim())) {
            o("請輸入條碼", "warning");
            return;
          }
          const te = performance.now();
          try {
            console.log("🔍 [手動輸入-部門視圖] 搜尋條碼:", I);
            const le = performance.now(),
              me = await De.searchByBarCode(I),
              xe = performance.now();
            if (
              (console.log(
                `⏱️ [手動輸入-部門視圖] API搜尋藥品資料用時: ${(
                  xe - le
                ).toFixed(2)}ms`
              ),
              console.log("📋 條碼搜尋回應:", me),
              me.Code === 200 && me.Data && me.Data.length > 0)
            ) {
              const Me =
                ((A = me.Data[0]) == null ? void 0 : A.CODE) ||
                ((q = me.Data[0]) == null ? void 0 : q.code);
              console.log("✅ 找到藥品資料:", me.Data),
                o("找到藥品，開始亮燈", "success");
              const he = performance.now();
              be(Me);
              const ye = performance.now();
              console.log(
                `⏱️ [手動輸入-部門視圖] 亮燈用時: ${(ye - he).toFixed(2)}ms`
              ),
                R("");
              const Se = performance.now();
              console.log(
                `⏱️ [手動輸入-部門視圖] 總用時: ${(Se - te).toFixed(2)}ms`
              );
            } else
              me.Code === -200 && me.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  o("查無條碼資料，請建立條碼", "warning"),
                  l(I),
                  R(""))
                : (console.log("❌ 搜尋失敗:", me.Result),
                  o(me.Result || "搜尋失敗", "error"));
          } catch (le) {
            console.error("條碼搜尋錯誤:", le),
              o("搜尋失敗，請稍後再試", "error");
          }
        }
      };
    p.useEffect(
      () => () => {
        ts.cleanup();
      },
      []
    ),
      p.useEffect(() => {
        if (i) {
          console.log("🔔 Context highlightedMedicineCode 變化:", i);
          const C = ae(i);
          if (C.length > 0) {
            const A = C.map((q) => q.GUID);
            oe(A), z(i), console.log("✨ UI 高亮已更新:", A);
          }
        } else oe([]), z(null);
      }, [i, ae]);
    const [ue, V] = p.useState(null),
      [ge, je] = p.useState({ x: 0, y: 0 }),
      T = (C) => {
        if (C.length < 2) return null;
        const A = C[0],
          q = C[1];
        return Math.sqrt(
          Math.pow(q.clientX - A.clientX, 2) +
            Math.pow(q.clientY - A.clientY, 2)
        );
      },
      ie = (C) => {
        if (C.length === 1) return { x: C[0].clientX, y: C[0].clientY };
        const A = C[0],
          q = C[1];
        return {
          x: (A.clientX + q.clientX) / 2,
          y: (A.clientY + q.clientY) / 2,
        };
      },
      U = p.useCallback(
        (C) => {
          if (!b) {
            if (C.touches.length === 2) {
              const A = T(C.touches),
                q = ie(C.touches);
              V(A), je(q);
            } else if (C.touches.length === 1) {
              const A = C.touches[0];
              d({ x: A.clientX, y: A.clientY }), S(!0);
            }
          }
        },
        [b]
      ),
      E = p.useCallback(
        (C) => {
          var A;
          if (!b) {
            if ((C.preventDefault(), C.touches.length === 2 && ue !== null)) {
              const q = T(C.touches),
                te = ie(C.touches);
              if (q && ue) {
                const le =
                  (A = t.current) == null ? void 0 : A.getBoundingClientRect();
                if (!le) return;
                const me = q / ue,
                  xe = Math.max(0.1, Math.min(5, m.scale * me)),
                  Me = te.x - le.left,
                  he = te.y - le.top,
                  ye = xe / m.scale,
                  Se = Me - (Me - m.x) * ye,
                  Ie = he - (he - m.y) * ye;
                h({ x: Se, y: Ie, scale: xe }), V(q), je(te);
              }
            } else if (C.touches.length === 1 && f) {
              const q = C.touches[0],
                te = q.clientX - k.x,
                le = q.clientY - k.y;
              h((me) => ({ ...me, x: me.x + te, y: me.y + le })),
                d({ x: q.clientX, y: q.clientY });
            }
          }
        },
        [m, ue, f, k, b]
      ),
      ne = p.useCallback(() => {
        V(null), S(!1);
      }, []);
    p.useEffect(() => {
      const C = t.current;
      if (C)
        return (
          C.addEventListener("wheel", x, { passive: !1 }),
          () => C.removeEventListener("wheel", x)
        );
    }, [x]),
      p.useCallback(() => {
        h({ x: 0, y: 0, scale: 1 });
      }, []);
    const B = (() => {
      if (!s || s.length === 0) return [];
      const C = s,
        A = [];
      for (const q of C)
        if (q.type === "調劑台" || q.type === "藥庫")
          for (const te of q.contents)
            A.push({
              GUID: te.GUID,
              type: te.type,
              name: `${te.name}`,
              position: te.position,
              dimensions: te.dimensions,
              med_list: te.med_list,
              serverName: te.serverName,
              serverType: te.serverType,
              Master_GUID: q.GUID,
              contents: te.contents || [],
            });
        else q.componets && q.componets.length > 0 && A.push(...q.componets);
      return A;
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
                value: I,
                onChange: (C) => R(C.target.value),
                onKeyPress: ke,
                placeholder: "輸入條碼或掃描...",
                className:
                  "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
              }),
              r.jsx("button", {
                onClick: () => $(!0),
                className: "p-2",
                title: "掃描條碼",
                children: r.jsx(Mr, { className: "w-6 h-6 text-blue-600" }),
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
              ? r.jsx(Bu, { className: "w-6 h-6" })
              : r.jsx(Gu, { className: "w-6 h-6" }),
          }),
        }),
        r.jsx("div", {
          ref: t,
          className: `w-full h-full relative ${
            u && !b ? "cursor-grab" : "cursor-default"
          } ${f ? "cursor-grabbing" : ""}`,
          onMouseDown: N,
          onMouseMove: j,
          onMouseUp: F,
          onMouseLeave: F,
          onTouchStart: U,
          onTouchMove: E,
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
                  B.map((C) =>
                    r.jsx(
                      xh,
                      {
                        component: C,
                        scale: m.scale,
                        isLocked: b,
                        isHighlighted: G.includes(C.GUID),
                        onContainerClick: (A) => {
                          console.log("🖱️ 點擊櫃體，傳遞亮燈藥品代碼:", P),
                            a(A, P);
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
        r.jsx(Ho, {
          isOpen: D,
          onClose: () => $(!1),
          onScanSuccess: de,
          mode: "med_light_location_mode",
        }),
      ],
    });
  },
  Fs = ({ content: e, isAdminMode: t }) => {
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
        showNotification: f,
        triggerRefresh: S,
        openEditStoreShelfModal: b,
        openEditParentContainerModal: _,
        reloadMedMapData: k,
      } = Xe(),
      { t: d } = gt(),
      [u, y] = p.useState(!1),
      [D, $] = p.useState(""),
      [I, R] = p.useState(!1),
      [G, oe] = p.useState(e.name);
    p.useEffect(() => {
      oe(e.name);
    }, [e.name]);
    const P = (N) => {
        N.stopPropagation(), $(e.name || ""), y(!0);
      },
      z = (N) => {
        N.stopPropagation(), y(!1), $("");
      },
      Z = async (N) => {
        if ((N.stopPropagation(), !D.trim())) {
          f("名稱不能為空", "error");
          return;
        }
        if (D === e.name) {
          y(!1);
          return;
        }
        R(!0);
        try {
          const j = [
            {
              GUID: e.GUID,
              name: D.trim(),
              Master_GUID: e.Master_GUID,
              position: e.gird_position,
              serverName: e.serverName,
              serverType: e.serverType,
            },
          ];
          let F;
          if (e.type === "store_shelves" || e.type === "dispensing_shelves")
            F = await De.updateMedMapShelf(j);
          else if (e.type === "sub_container") F = await De.updateSubSection(j);
          else if (e.type === "parent_container")
            F = await De.updateMedMapSection(j);
          else {
            f("不支援的容器類型", "error"), R(!1);
            return;
          }
          F.Code === 200
            ? (f("名稱更新成功", "success"), y(!1), await k())
            : f(F.Result || "更新失敗", "error");
        } catch (j) {
          console.error("更新名稱失敗:", j), f("更新失敗，請稍後再試", "error");
        } finally {
          R(!1);
        }
      },
      M = (N) => {
        switch (N) {
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
      w = (N) => {
        switch (N) {
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
      H = (N) => {
        switch (N) {
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
      x = (N) => {
        switch (N) {
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
            return N;
        }
      };
    switch (e.type) {
      case "sub_container":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${M(
            e.type || 0
          )} ${w(e.type || 0)}`,
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                u
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: D,
                          onChange: (N) => $(N.target.value),
                          onClick: (N) => N.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: Z,
                          disabled: I,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(Gs, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: z,
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Ve, {
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
                          children: G,
                        }),
                        r.jsx("button", {
                          onClick: P,
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(hr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !u &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${H(
                      e.type
                    )}`,
                    children: x(e.type),
                  }),
              ],
            }),
            e.type !== "none" &&
              !u &&
              r.jsx("div", {
                className: "flex items-center space-x-1",
                children: r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (N) => {
                    N.stopPropagation(), a(e);
                  },
                  title: d("modal.add"),
                  children: r.jsx(vt, { className: "w-6 h-6 text-green-700" }),
                }),
              }),
          ],
        });
      case "parent_container":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${M(
            e.type || 0
          )} ${w(
            e.type || 0
          )} cursor-pointer hover:bg-black/5 transition-colors`,
          onClick: (N) => {
            u || _(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                u
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: D,
                          onChange: (N) => $(N.target.value),
                          onClick: (N) => N.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (N) => {
                            N.stopPropagation(), Z(N);
                          },
                          disabled: I,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(Gs, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: (N) => {
                            N.stopPropagation(), z(N);
                          },
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Ve, {
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
                          children: G,
                        }),
                        r.jsx("button", {
                          onClick: (N) => {
                            N.stopPropagation(), P(N);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(hr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" && !u
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${H(
                        e.type
                      )}`,
                      children: x(e.type),
                    })
                  : null,
              ],
            }),
            e.type !== "none" &&
              !u &&
              r.jsx("div", {
                className: "flex items-center space-x-1",
                children: r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (N) => {
                    N.stopPropagation(), i(e);
                  },
                  title: d("modal.add"),
                  children: r.jsx(vt, { className: "w-6 h-6 text-green-700" }),
                }),
              }),
          ],
        });
      case "med_box":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${M(
            e.type || 0
          )} ${w(e.type || 0)}`,
          children: [
            r.jsx("div", {
              className: "flex items-center mr-4",
              children:
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${H(
                        e.type
                      )}`,
                      children: x(e.type),
                    })
                  : null,
            }),
            r.jsx("div", {
              className: "flex items-center space-x-1",
              children: r.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                onClick: (N) => {
                  N.stopPropagation(), n(e);
                },
                title: d("modal.settings"),
                children: r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
              }),
            }),
          ],
        });
      case "dispensing_shelves":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${M(
            e.type || 0
          )} ${w(e.type || 0)}`,
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                u
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: D,
                          onChange: (N) => $(N.target.value),
                          onClick: (N) => N.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: Z,
                          disabled: I,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(Gs, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: z,
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Ve, {
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
                          children: G,
                        }),
                        r.jsx("button", {
                          onClick: P,
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(hr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !u &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${H(
                      e.type
                    )}`,
                    children: x(e.type),
                  }),
              ],
            }),
            r.jsxs("div", {
              className: "flex items-center space-x-1",
              children: [
                r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (N) => {
                    N.stopPropagation();
                    const j = {
                      GUID: `new_medbox_${Date.now()}`,
                      name: "",
                      box_type: "",
                      width: [],
                      width_index: 0,
                      med_info: [],
                      parentShelf: e,
                    };
                    g(j), m("add"), h(!0);
                  },
                  title: d("modal.add"),
                  children: r.jsx(vt, { className: "w-6 h-6 text-green-700" }),
                }),
                r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (N) => {},
                  title: d("modal.settings"),
                  children: r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
                }),
              ],
            }),
          ],
        });
      case "store_shelves":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${M(
            e.type || 0
          )} ${w(
            e.type || 0
          )} cursor-pointer hover:bg-black/5 transition-colors`,
          onClick: (N) => {
            u || b(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                u
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: D,
                          onChange: (N) => $(N.target.value),
                          onClick: (N) => N.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (N) => {
                            N.stopPropagation(), Z(N);
                          },
                          disabled: I,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(Gs, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: (N) => {
                            N.stopPropagation(), z(N);
                          },
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Ve, {
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
                          children: G,
                        }),
                        r.jsx("button", {
                          onClick: (N) => {
                            N.stopPropagation(), P(N);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(hr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !u &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${H(
                      e.type
                    )}`,
                    children: x(e.type),
                  }),
              ],
            }),
            r.jsx("div", {
              className: "flex items-center space-x-1",
              children: r.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                onClick: (N) => {
                  N.stopPropagation(), c(e);
                },
                title: d("modal.add"),
                children: r.jsx(vt, { className: "w-6 h-6 text-green-700" }),
              }),
            }),
          ],
        });
      case "list_draw":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${M(
            e.type || 0
          )} ${w(e.type || 0)}`,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${H(
                        e.type
                      )}`,
                      children: x(e.type),
                    })
                  : null,
              ],
            }),
            r.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (N) => {
                N.stopPropagation(), o(e);
              },
              title: d("modal.settings"),
              children: r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      case "grid_draw":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${M(
            e.type || 0
          )} ${w(e.type || 0)}`,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${H(
                        e.type
                      )}`,
                      children: x(e.type),
                    })
                  : null,
              ],
            }),
            r.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (N) => {
                N.stopPropagation(), l(e);
              },
              title: d("modal.settings"),
              children: r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      default:
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${M(
            e.type || 0
          )} ${w(e.type || 0)}`,
          children: [
            r.jsx("div", {
              className: "flex items-center space-x-2 mr-6",
              children:
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${H(
                        e.type
                      )}`,
                      children: x(e.type),
                    })
                  : null,
            }),
            e.type !== "none" &&
              r.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                title: d("modal.settings"),
                children: r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
              }),
          ],
        });
    }
  },
  Fu = p.forwardRef(({ children: e }, t) => {
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
      } = Xe(),
      [f, S] = p.useState({ x: 0, y: 0, scale: 1 }),
      [b, _] = p.useState(!1),
      [k, d] = p.useState(!1),
      [u, y] = p.useState({ x: 0, y: 0 }),
      [D, $] = p.useState(!1),
      [I, R] = p.useState(""),
      [G, oe] = p.useState(!1),
      [P, z] = p.useState(null),
      [Z, M] = p.useState(!1),
      [w, H] = p.useState({
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
      [x, N] = p.useState(null),
      j = p.useRef({}),
      F = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0,
      ae = 8,
      X = () => {
        try {
          const v = localStorage.getItem("med_map_anchor");
          return v ? JSON.parse(v) : [];
        } catch (v) {
          return (
            console.error("Error reading canvas states from localStorage:", v),
            []
          );
        }
      },
      re = (v, Q, Y, L) => {
        try {
          const W = X(),
            O = W.findIndex((ee) => ee.department === v && ee.canvasType === Q),
            K = { department: v, canvasType: Q, scale: Y, position: L };
          O >= 0 ? (W[O] = K) : W.push(K),
            localStorage.setItem("med_map_anchor", JSON.stringify(W));
        } catch (W) {
          console.error("Error saving canvas state to localStorage:", W);
        }
      },
      be = (v, Q) =>
        X().find((L) => L.department === v && L.canvasType === Q) || null;
    p.useEffect(() => {
      if (s) {
        const v = be(s, "drugCanvas");
        if (v) S({ x: v.position.x, y: v.position.y, scale: v.scale });
        else {
          const Q = { x: 0, y: 0, scale: 1 };
          S(Q), re(s, "drugCanvas", Q.scale, Q);
        }
      }
    }, [s]),
      p.useEffect(() => {
        if (!s) return;
        const v = setTimeout(() => {
          re(s, "drugCanvas", f.scale, { x: f.x, y: f.y });
        }, 500);
        return () => clearTimeout(v);
      }, [f, s]);
    const de = (v) =>
        [
          "parent_container",
          "sub_container",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
          "med_box",
        ].includes(v),
      ke = (v) =>
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
        }[v] || []),
      ue = (v) => {
        const [Q, Y] = v.split(",").map(Number);
        return { row: Q || 0, col: Y || 0 };
      },
      V = (v, Q) => {
        const Y = (W, O = null) => {
            if (W.GUID === v) return { container: W, parent: O };
            if (W.contents)
              for (const K of W.contents) {
                const ee = Y(K, W);
                if (ee) return ee;
              }
            return null;
          },
          L = Ie();
        for (const W of L) {
          const O = Y(W);
          if (O) return O;
        }
        return null;
      },
      ge = (v, Q) => {
        if (!v.contents) return [];
        const Y = Q;
        if (!Y) return v.contents;
        const L = ue(Y.gird_position);
        console.log("📤 移除容器位置:", L);
        for (const W of v.contents) {
          const O = ue(W.gird_position);
          if (O.row === L.row && O.col > L.col) {
            const K = O.col - 1;
            (W.gird_position = `${O.row},${K}`),
              console.log(
                `  ← 容器 ${W.GUID}: (${O.row},${O.col}) → (${O.row},${K})`
              ),
              (j.current[W.GUID] = {
                GUID: W.GUID,
                Master_GUID: v.GUID,
                position: `${O.row},${K}`,
                serverName: v.serverName,
                serverType: v.serverType,
                type: W.type,
                containerData: W,
              });
          }
        }
        return console.log("✓ 重新計算完成"), v.contents;
      },
      je = (v, Q, Y, L, W) => {
        if (
          (v.contents || (v.contents = []),
          console.log("📥 插入容器到位置:", `(${Y},${L})`),
          console.log("   插入方向:", W),
          console.log("   目標父容器:", v.GUID),
          console.log("   插入前容器數量:", v.contents.length),
          v.contents.length === 0)
        )
          (Y = 0), (L = 0), console.log("   父容器為空，放置在 (0,0)");
        else {
          const O = v.contents
            .filter((K) => {
              const ee = ue(K.gird_position || "0,0");
              return ee.row === Y && ee.col >= L;
            })
            .sort((K, ee) => {
              const fe = ue(K.gird_position || "0,0");
              return ue(ee.gird_position || "0,0").col - fe.col;
            });
          console.log(`   同 row ${Y} 需要移動的容器數量:`, O.length);
          for (const K of O) {
            const ee = ue(K.gird_position || "0,0"),
              fe = ee.col + 1;
            (K.gird_position = `${ee.row},${fe}`),
              console.log(
                `  → 容器 ${K.GUID}: (${ee.row},${ee.col}) → (${ee.row},${fe})`
              ),
              (j.current[K.GUID] = {
                GUID: K.GUID,
                Master_GUID: v.GUID,
                position: `${ee.row},${fe}`,
                serverName: v.serverName,
                serverType: v.serverType,
                type: K.type,
                containerData: K,
              });
          }
        }
        (Q.gird_position = `${Y},${L}`),
          (Q.Master_GUID = v.GUID),
          console.log(`Inserted container ${Q.GUID} at position ${Y},${L}`),
          v.contents.push(Q),
          (j.current[Q.GUID] = {
            GUID: Q.GUID,
            Master_GUID: v.GUID,
            position: `${Y},${L}`,
            serverName: v.serverName,
            serverType: v.serverType,
            type: Q.type,
            containerData: Q,
          }),
          Q.type === "dispensing_shelves" &&
            Q.contents &&
            Q.contents.forEach((O) => {
              O.type === "med_box" &&
                (j.current[O.GUID] = {
                  GUID: O.GUID,
                  Master_GUID: O.Master_GUID,
                  position: O.gird_position,
                  serverName: v.serverName,
                  serverType: v.serverType,
                  type: O.type,
                  containerData: O,
                });
            });
      },
      T = (v, Q, Y) => {
        const L = v.getBoundingClientRect(),
          W = L.left + L.width / 2,
          O = L.top + L.height / 2,
          K = Q - W,
          ee = Y - O;
        return Math.abs(K) > Math.abs(ee)
          ? K > 0
            ? "right"
            : "left"
          : ee > 0
          ? "bottom"
          : "top";
      },
      ie = (v, Q, Y, L) => {
        if (!k) return;
        if ((L.preventDefault(), L.stopPropagation(), w.floatingElement))
          try {
            w.floatingElement.parentNode &&
              w.floatingElement.parentNode.removeChild(w.floatingElement);
          } catch (pe) {
            console.error("清除舊浮動元素失敗:", pe);
          }
        const W = F(),
          O =
            "touches" in L
              ? L.touches[0].clientX
              : ("pointerId" in L, L.clientX),
          K =
            "touches" in L
              ? L.touches[0].clientY
              : ("pointerId" in L, L.clientY),
          ee = Y.getBoundingClientRect(),
          fe = { x: O - ee.left, y: K - ee.top },
          J = Y.cloneNode(!0);
        (J.style.position = "fixed"),
          (J.style.left = `${O - fe.x}px`),
          (J.style.top = `${K - fe.y}px`),
          (J.style.width = `${ee.width}px`),
          (J.style.height = `${ee.height}px`),
          (J.style.zIndex = "9999"),
          (J.style.opacity = "0.8"),
          (J.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (J.style.pointerEvents = "none"),
          document.body.appendChild(J),
          console.log("開始拖曳 stockItem:", v),
          console.log("來源 shelf:", Q),
          H({
            isDragging: !0,
            draggedContainer: null,
            draggedElement: Y,
            floatingElement: J,
            originalParent: null,
            originalPosition: "",
            originalIndex: -1,
            mouseOffset: fe,
            isMobileDrag: W,
            originalData: null,
            draggedStockItem: v,
            draggedStockShelf: Q,
          });
      },
      U = (v, Q, Y) => {
        if (!k || !de(v.type)) return;
        if (
          ((j.current = {}),
          Y.preventDefault(),
          Y.stopPropagation(),
          w.floatingElement)
        )
          try {
            w.floatingElement.parentNode &&
              w.floatingElement.parentNode.removeChild(w.floatingElement);
          } catch (_e) {
            console.error("清除舊浮動元素失敗:", _e);
          }
        const L = F(),
          W =
            "touches" in Y
              ? Y.touches[0].clientX
              : ("pointerId" in Y, Y.clientX),
          O =
            "touches" in Y
              ? Y.touches[0].clientY
              : ("pointerId" in Y, Y.clientY),
          K = Q.getBoundingClientRect(),
          ee = { x: W - K.left, y: O - K.top },
          fe = V(v.GUID);
        if (!fe) return;
        console.log("拖曳目標", v), console.log("拖曳目標", fe);
        const J = Q.cloneNode(!0);
        (J.style.position = "fixed"),
          (J.style.left = `${W - ee.x}px`),
          (J.style.top = `${O - ee.y}px`),
          (J.style.width = `${K.width}px`),
          (J.style.height = `${K.height}px`),
          (J.style.zIndex = "9999"),
          (J.style.opacity = "0.8"),
          (J.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (J.style.pointerEvents = "none"),
          document.body.appendChild(J);
        const pe = fe.parent.contents.findIndex((_e) => _e.GUID === v.GUID),
          ve = JSON.parse(JSON.stringify(fe.parent.contents));
        fe.parent.contents.splice(pe, 1), console.log(pe);
        const Ce = fe.parent,
          Ne = ge(fe.parent, v);
        (fe.parent.contents = Ne),
          console.log(fe.parent),
          H({
            isDragging: !0,
            draggedContainer: v,
            draggedElement: Q,
            floatingElement: J,
            originalParent: Ce,
            originalPosition: v.gird_position,
            originalIndex: pe,
            mouseOffset: ee,
            isMobileDrag: L,
            originalData: ve,
          });
      },
      E = (v) => {
        if (!w.isDragging || !w.floatingElement) return;
        const Q = "touches" in v ? v.touches[0].clientX : v.clientX,
          Y = "touches" in v ? v.touches[0].clientY : v.clientY;
        if (
          ((w.floatingElement.style.left = `${Q - w.mouseOffset.x}px`),
          (w.floatingElement.style.top = `${Y - w.mouseOffset.y}px`),
          w.draggedStockItem)
        ) {
          const O = document.elementFromPoint(Q, Y),
            K = O == null ? void 0 : O.closest("[data-stock-guid]");
          if (K) {
            const fe = K.getAttribute("data-stock-guid"),
              J = (ve) => {
                for (const Ce of ve) {
                  if (Ce.type === "store_shelves" && Ce.medMapStock) {
                    const Ne = Ce.medMapStock.find((_e) => _e.GUID === fe);
                    if (Ne) return { stockItem: Ne, shelf: Ce };
                  }
                  if (Ce.contents) {
                    const Ne = J(Ce.contents);
                    if (Ne) return Ne;
                  }
                }
                return null;
              },
              pe = J(o);
            if (pe && pe.stockItem.GUID !== w.draggedStockItem.GUID) {
              const ve = K.getBoundingClientRect(),
                Ce = ve.left + ve.width / 2,
                Ne = Q < Ce ? "left" : "right";
              N({
                container: pe.shelf,
                direction: null,
                element: K,
                stockItem: pe.stockItem,
                stockItemDirection: Ne,
              });
              return;
            }
          }
          const ee = O == null ? void 0 : O.closest("[data-container-guid]");
          if (ee) {
            const fe = ee.getAttribute("data-container-guid"),
              J = V(fe);
            if (J && J.container.type === "store_shelves") {
              N({ container: J.container, direction: null, element: ee });
              return;
            }
          }
          N(null);
          return;
        }
        const L = document.elementFromPoint(Q, Y),
          W = L == null ? void 0 : L.closest("[data-container-guid]");
        if (W) {
          const O = W.getAttribute("data-container-guid"),
            K = V(O);
          if (K) {
            const ee = ke(w.draggedContainer.type),
              fe = w.draggedContainer.type,
              J = K.container.type;
            if (ee.includes(J)) {
              const pe = T(W, Q, Y);
              if (fe === "med_box" && !["left", "right"].includes(pe)) {
                N(null);
                return;
              }
              N({ container: K.container, direction: pe, element: W });
              return;
            }
            if (fe === "parent_container" || fe === "sub_container") {
              let pe = W.parentElement;
              for (; pe; ) {
                if (pe.hasAttribute("data-container-guid")) {
                  const ve = pe.getAttribute("data-container-guid"),
                    Ce = V(ve);
                  if (Ce && ee.includes(Ce.container.type)) {
                    const Ne = T(pe, Q, Y);
                    console.log(
                      `🔼 向上找到有效目標: ${Ce.container.type} (${Ce.container.name})`
                    ),
                      N({
                        container: Ce.container,
                        direction: Ne,
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
        N(null);
      },
      ne = async (v) => {
        if (!w.isDragging) return;
        if (w.floatingElement)
          try {
            w.floatingElement.parentNode &&
              w.floatingElement.parentNode.removeChild(w.floatingElement);
          } catch (W) {
            console.error("清除浮動元素失敗:", W);
          }
        if (w.draggedStockItem && w.draggedStockShelf) {
          if (
            (console.log("StockItem 拖曳結束"),
            console.log("Drop Target:", x),
            x)
          ) {
            const W = [];
            if (x.stockItem && x.stockItemDirection) {
              console.log(
                `拖曳到 stockItem ${x.stockItem.GUID} 的 ${x.stockItemDirection} 邊`
              );
              const O = x.container,
                K = w.draggedStockShelf,
                ee = w.draggedStockItem,
                fe = Number(x.stockItem.location),
                J = Number(ee.location);
              if (O.GUID === K.GUID) {
                console.log("同一層架內移動");
                const ve = K.medMapStock.findIndex((_e) => _e.GUID === ee.GUID);
                ve !== -1 && K.medMapStock.splice(ve, 1),
                  K.medMapStock.forEach((_e) => {
                    const Le = Number(_e.location);
                    Le > J &&
                      ((_e.location = String(Le - 1)), W.push({ ..._e }));
                  });
                let Ce;
                const Ne = fe > J ? fe - 1 : fe;
                x.stockItemDirection === "left" ? (Ce = Ne) : (Ce = Ne + 1),
                  K.medMapStock.forEach((_e) => {
                    const Le = Number(_e.location);
                    Le >= Ce &&
                      ((_e.location = String(Le + 1)), W.push({ ..._e }));
                  }),
                  (ee.location = String(Ce)),
                  K.medMapStock.push(ee),
                  K.medMapStock.sort(
                    (_e, Le) => Number(_e.location) - Number(Le.location)
                  ),
                  W.push({ ...ee });
              } else {
                console.log("不同層架間移動");
                const ve = K.medMapStock.findIndex((Ne) => Ne.GUID === ee.GUID);
                ve !== -1 && K.medMapStock.splice(ve, 1),
                  K.medMapStock.forEach((Ne) => {
                    const _e = Number(Ne.location);
                    _e > J &&
                      ((Ne.location = String(_e - 1)), W.push({ ...Ne }));
                  });
                let Ce;
                x.stockItemDirection === "left" ? (Ce = fe) : (Ce = fe + 1),
                  O.medMapStock.forEach((Ne) => {
                    const _e = Number(Ne.location);
                    _e >= Ce &&
                      ((Ne.location = String(_e + 1)), W.push({ ...Ne }));
                  }),
                  (ee.location = String(Ce)),
                  (ee.shelf_guid = O.GUID),
                  O.medMapStock.push(ee),
                  O.medMapStock.sort(
                    (Ne, _e) => Number(Ne.location) - Number(_e.location)
                  ),
                  W.push({ ...ee });
              }
            } else if (x.container.type === "store_shelves") {
              console.log("拖曳到 store_shelves 容器");
              const O = x.container,
                K = w.draggedStockShelf,
                ee = w.draggedStockItem,
                fe = Number(ee.location),
                J = K.medMapStock.findIndex((pe) => pe.GUID === ee.GUID);
              J !== -1 &&
                (K.medMapStock.splice(J, 1),
                K.medMapStock.forEach((pe) => {
                  const ve = Number(pe.location);
                  ve > fe &&
                    ((pe.location = String(ve - 1)), W.push({ ...pe }));
                })),
                (ee.location = "0"),
                (ee.shelf_guid = O.GUID),
                O.medMapStock || (O.medMapStock = []),
                O.medMapStock.forEach((pe) => {
                  const ve = Number(pe.location);
                  (pe.location = String(ve + 1)), W.push({ ...pe });
                }),
                O.medMapStock.push(ee),
                O.medMapStock.sort(
                  (pe, ve) => Number(pe.location) - Number(ve.location)
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
            N(null);
          return;
        }
        let Q = null,
          Y = null,
          L = null;
        if (
          (console.log("Drop Target:", x),
          console.log("Is Mobile Drag:", w.isMobileDrag),
          w.isMobileDrag)
        )
          if (x) {
            (Q = x.direction), (L = x.container);
            const W = V(w.draggedContainer.GUID);
            let O = null;
            if (W) {
              O = W.parent.GUID;
              const Ce = W.parent.contents.findIndex(
                (_e) => _e.GUID === w.draggedContainer.GUID
              );
              W.parent.contents.splice(Ce, 1);
              const Ne = ge(W.parent, w.draggedContainer);
              W.parent.contents = Ne;
            }
            const K = V(x.container.Master_GUID || x.container.GUID);
            let ee = x.container;
            if (O && K && K.container.GUID === O) {
              const Ce = K.container.contents.find(
                (Ne) => Ne.GUID === x.container.GUID
              );
              Ce &&
                ((ee = Ce),
                console.log(
                  "同一父容器內移動，更新後的目標容器位置:",
                  Ce.gird_position
                ));
            }
            const fe = ue(ee.gird_position || "0,0");
            let J = fe.row,
              pe = fe.col;
            switch (x.direction) {
              case "top":
                J = Math.max(0, fe.row);
                break;
              case "bottom":
                J = fe.row + 1;
                break;
              case "left":
                pe = Math.max(0, fe.col);
                break;
              case "right":
                pe = fe.col + 1;
                break;
            }
            let ve = (K == null ? void 0 : K.container) || x.container;
            if (
              (w.draggedContainer.class != x.class && (ve = x),
              w.draggedContainer.type === "med_box" &&
                x.container.type !== "med_box")
            )
              if (
                (console.log("藥盒移動目標到層架上"),
                (ve = x.container),
                ve.contents.length > 0)
              ) {
                let Ce = 0,
                  Ne = 0;
                ve.contents.forEach((_e) => {
                  const Le = ue(_e.gird_position || "0,0").row,
                    Te = ue(_e.gird_position || "0,0").col;
                  Ce > Le && (Ce = Le), Ne > Te && (Ne = Te);
                });
                for (let _e = 0; _e <= Ne; _e++)
                  for (let Le = 0; Le <= Ce; Le++) {
                    const Te = `${_e},${Le}`;
                    ve.contents.filter((tn) => tn.grid_position === Te)
                      .length === 0 && ((J = _e), (pe = Le));
                  }
              } else (J = 0), (pe = 0);
            (Y = ve), je(ve, w.draggedContainer, J, pe, x.direction);
          } else
            console.log("無效拖放，復原所有容器位置"),
              w.originalData &&
                w.originalParent &&
                (w.originalParent.contents = JSON.parse(
                  JSON.stringify(w.originalData)
                )),
              (Q = null),
              (L = null),
              (Y = w.originalParent);
        else if (x) {
          (Q = x.direction), (L = x.container);
          const W = V(w.draggedContainer.GUID);
          let O = null;
          if (
            (console.log("=== 開始處理容器拖曳 ==="),
            console.log("拖曳容器 GUID:", w.draggedContainer.GUID),
            console.log("拖曳容器原始位置:", w.draggedContainer.gird_position),
            W)
          ) {
            (O = W.parent.GUID),
              console.log("原始父容器 GUID:", O),
              console.log(
                "移除前父容器的 contents 數量:",
                W.parent.contents.length
              );
            const Ce = W.parent.contents.findIndex(
              (_e) => _e.GUID === w.draggedContainer.GUID
            );
            W.parent.contents.splice(Ce, 1),
              console.log(
                "移除後父容器的 contents 數量:",
                W.parent.contents.length
              );
            const Ne = ge(W.parent, w.draggedContainer);
            (W.parent.contents = Ne),
              console.log("重新計算後的容器列表:"),
              W.parent.contents.forEach((_e) => {
                console.log(`  - ${_e.GUID}: ${_e.gird_position}`);
              });
          }
          const K = V(x.container.Master_GUID || x.container.GUID);
          let ee = x.container;
          if (
            (console.log("目標容器原始位置:", x.container.gird_position),
            O && K && K.container.GUID === O)
          ) {
            console.log("✓ 在同一個父容器內移動");
            const Ce = K.container.contents.find(
              (Ne) => Ne.GUID === x.container.GUID
            );
            Ce &&
              ((ee = Ce),
              console.log(
                "同一父容器內移動，更新後的目標容器位置:",
                Ce.gird_position
              ));
          } else console.log("✗ 跨父容器移動或父容器不同");
          const fe = ue(ee.gird_position || "0,0");
          let J = fe.row,
            pe = fe.col;
          switch (x.direction) {
            case "top":
              J = Math.max(0, fe.row);
              break;
            case "bottom":
              J = fe.row + 1;
              break;
            case "left":
              pe = Math.max(0, fe.col);
              break;
            case "right":
              pe = fe.col + 1;
              break;
          }
          console.log("------目標容器", x),
            console.log("------拖曳容器", w.draggedContainer);
          let ve = (K == null ? void 0 : K.container) || x.container;
          if (
            (console.log(w.draggedContainer.class),
            console.log(x.container.class),
            console.log(w.draggedContainer.class != x.container.class),
            w.draggedContainer.class != x.container.class &&
              ((ve = x.container),
              console.log("------這邊顯示放到上層容器現象"),
              console.log("------目標容器", x),
              console.log("------拖曳容器", w.draggedContainer),
              console.log("------目標父容器", ve)),
            w.draggedContainer.type === "med_box" &&
              x.container.type !== "med_box")
          )
            if (
              (console.log("藥盒移動目標到層架上"),
              (ve = x.container),
              ve.contents.length > 0)
            ) {
              let Ce = 0,
                Ne = 0;
              ve.contents.forEach((_e) => {
                const Le = ue(_e.gird_position || "0,0").row,
                  Te = ue(_e.gird_position || "0,0").col;
                Ce > Le && (Ce = Le), Ne > Te && (Ne = Te);
              });
              for (let _e = 0; _e <= Ne; _e++)
                for (let Le = 0; Le <= Ce; Le++) {
                  const Te = `${_e},${Le}`;
                  ve.contents.filter((tn) => tn.grid_position === Te).length ===
                    0 && ((J = _e), (pe = Le));
                }
            } else (J = 0), (pe = 0);
          (Y = ve), je(ve, w.draggedContainer, J, pe, x.direction);
        } else
          console.log("無效拖放，復原所有容器位置"),
            w.originalData &&
              w.originalParent &&
              (w.originalParent.contents = JSON.parse(
                JSON.stringify(w.originalData)
              )),
            (Q = null),
            (L = null),
            (Y = w.originalParent);
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
          N(null),
          console.log("Drop Direction:", Q),
          console.log("Parent Object:", Y),
          console.log("Target Object:", L),
          console.log("API更新資料：", j),
          await wh(j);
      };
    p.useEffect(() => {
      if (w.isDragging)
        if (F()) {
          const Q = (W) => {
              W.preventDefault(), E(W);
            },
            Y = (W) => ne(),
            L = (W) => ne();
          return (
            document.addEventListener("pointermove", Q, { passive: !1 }),
            document.addEventListener("pointerup", Y),
            document.addEventListener("pointercancel", L),
            () => {
              document.removeEventListener("pointermove", Q),
                document.removeEventListener("pointerup", Y),
                document.removeEventListener("pointercancel", L);
            }
          );
        } else {
          const Q = (O) => E(O),
            Y = (O) => ne(),
            L = (O) => {
              O.preventDefault(), E(O);
            },
            W = (O) => ne();
          return (
            document.addEventListener("mousemove", Q),
            document.addEventListener("mouseup", Y),
            document.addEventListener("touchmove", L, { passive: !1 }),
            document.addEventListener("touchend", W),
            () => {
              document.removeEventListener("mousemove", Q),
                document.removeEventListener("mouseup", Y),
                document.removeEventListener("touchmove", L),
                document.removeEventListener("touchend", W);
            }
          );
        }
    }, [w.isDragging, x]),
      p.useEffect(
        () => () => {
          if (w.floatingElement)
            try {
              w.floatingElement.parentNode &&
                w.floatingElement.parentNode.removeChild(w.floatingElement);
            } catch (v) {
              console.error("組件卸載時清除浮動元素失敗:", v);
            }
        },
        [w.floatingElement]
      ),
      p.useEffect(() => {
        const v = (Y) => {
            Y.code === "Space" && !Y.repeat && (Y.preventDefault(), $(!0));
          },
          Q = (Y) => {
            Y.code === "Space" && (Y.preventDefault(), $(!1), _(!1));
          };
        return (
          window.addEventListener("keydown", v),
          window.addEventListener("keyup", Q),
          () => {
            window.removeEventListener("keydown", v),
              window.removeEventListener("keyup", Q);
          }
        );
      }, []);
    const ce = p.useCallback(
        (v) => {
          var Y;
          if (k) return;
          if (v.ctrlKey || v.metaKey) {
            v.preventDefault(), v.stopPropagation();
            const L =
              (Y = n.current) == null ? void 0 : Y.getBoundingClientRect();
            if (!L) return;
            const W = v.clientX - L.left,
              O = v.clientY - L.top,
              K = v.deltaY > 0 ? 0.9 : 1.1,
              ee = Math.max(0.1, Math.min(5, f.scale * K)),
              fe = ee / f.scale,
              J = W - (W - f.x) * fe,
              pe = O - (O - f.y) * fe;
            S({ x: J, y: pe, scale: ee });
          }
        },
        [f, k]
      ),
      B = p.useCallback(
        (v) => {
          k ||
            !D ||
            (_(!0),
            y({ x: v.clientX, y: v.clientY }),
            z({ x: v.clientX, y: v.clientY }),
            M(!1),
            v.preventDefault());
        },
        [k, D]
      ),
      C = p.useCallback(
        (v) => {
          if (!b || k) return;
          const Q = v.clientX - u.x,
            Y = v.clientY - u.y;
          if (P) {
            const L = Math.abs(v.clientX - P.x),
              W = Math.abs(v.clientY - P.y);
            (L > 5 || W > 5) && M(!0);
          }
          S((L) => ({ ...L, x: L.x + Q, y: L.y + Y })),
            y({ x: v.clientX, y: v.clientY });
        },
        [b, u, k, P]
      ),
      A = p.useCallback(() => {
        _(!1), z(null);
      }, []),
      [q, te] = p.useState(null),
      [le, me] = p.useState({ x: 0, y: 0 }),
      xe = (v) => {
        if (v.length < 2) return null;
        const Q = v[0],
          Y = v[1];
        return Math.sqrt(
          Math.pow(Y.clientX - Q.clientX, 2) +
            Math.pow(Y.clientY - Q.clientY, 2)
        );
      },
      Me = (v) => {
        if (v.length === 1) return { x: v[0].clientX, y: v[0].clientY };
        const Q = v[0],
          Y = v[1];
        return {
          x: (Q.clientX + Y.clientX) / 2,
          y: (Q.clientY + Y.clientY) / 2,
        };
      },
      he = p.useCallback(
        (v) => {
          if (!k) {
            if (v.touches.length === 2) {
              const Q = xe(v.touches),
                Y = Me(v.touches);
              te(Q), me(Y);
            } else if (v.touches.length === 1) {
              const Q = v.touches[0];
              y({ x: Q.clientX, y: Q.clientY }), _(!0);
            }
          }
        },
        [k]
      ),
      ye = p.useCallback(
        (v) => {
          var Q;
          if (!k) {
            if ((v.preventDefault(), v.touches.length === 2 && q !== null)) {
              const Y = xe(v.touches),
                L = Me(v.touches);
              if (Y && q) {
                const W =
                  (Q = n.current) == null ? void 0 : Q.getBoundingClientRect();
                if (!W) return;
                const O = Y / q,
                  K = Math.max(0.1, Math.min(5, f.scale * O)),
                  ee = L.x - W.left,
                  fe = L.y - W.top,
                  J = K / f.scale,
                  pe = ee - (ee - f.x) * J,
                  ve = fe - (fe - f.y) * J;
                S({ x: pe, y: ve, scale: K }), te(Y), me(L);
              }
            } else if (v.touches.length === 1 && b) {
              const Y = v.touches[0],
                L = Y.clientX - u.x,
                W = Y.clientY - u.y;
              S((O) => ({ ...O, x: O.x + L, y: O.y + W })),
                y({ x: Y.clientX, y: Y.clientY });
            }
          }
        },
        [f, q, b, u, k]
      ),
      Se = p.useCallback(() => {
        te(null), _(!1);
      }, []);
    p.useEffect(() => {
      const v = n.current;
      if (v)
        return (
          v.addEventListener("wheel", ce, { passive: !1 }),
          () => v.removeEventListener("wheel", ce)
        );
    }, [ce]);
    const Ie = () => (!o || o.length === 0 ? [] : o),
      Ke = (v) => {
        if (!v || v.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const Q = v.map((O) => ({
            ...O,
            gridPos: ue(O.gird_position || "0,0"),
          })),
          Y = Math.max(...Q.map((O) => O.gridPos.row), 0),
          L = Math.max(...Q.map((O) => O.gridPos.col), 0);
        return {
          sortedContents: Q.sort((O, K) =>
            O.gridPos.row !== K.gridPos.row
              ? O.gridPos.row - K.gridPos.row
              : O.gridPos.col - K.gridPos.col
          ),
          maxRow: Y,
          maxCol: L,
        };
      },
      Ee = Ie(),
      Ze = Math.max(...Ee.map((v) => ue(v.gird_position || "0,0").row), 0),
      Fe = Math.max(...Ee.map((v) => ue(v.gird_position || "0,0").col), 0),
      St = (v) => {
        const Q = (L) => {
            if (
              L.width &&
              Array.isArray(L.width) &&
              typeof L.width_index == "number" &&
              L.width_index >= 0 &&
              L.width_index < L.width.length
            ) {
              const O = parseFloat(L.width[L.width_index]);
              if (!isNaN(O)) {
                const K = O * 20;
                return Math.max(200, K);
              }
            }
            return 200;
          },
          Y = (L) => {
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
        switch (v.type) {
          case "med_box":
            return (
              Q(v),
              r.jsxs(
                "div",
                {
                  "data-container-guid": v.GUID,
                  className: `${
                    v.type !== "sub_container"
                      ? "border-2 rounded-lg shadow-sm"
                      : ""
                  } ${Y(
                    v.type || 0
                  )} min-h-[80px] flex flex-col flex-shrink-0 h-full overflow-hidden`,
                  children: [
                    r.jsx("div", {
                      onMouseDown:
                        k && de(v.type) && !F()
                          ? (L) =>
                              U(
                                v,
                                L.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                L
                              )
                          : void 0,
                      onTouchStart:
                        k && de(v.type) && !F()
                          ? (L) =>
                              U(
                                v,
                                L.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                L
                              )
                          : void 0,
                      onPointerDown:
                        k && de(v.type) && F()
                          ? (L) =>
                              U(
                                v,
                                L.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                L
                              )
                          : void 0,
                      className: k && de(v.type) ? "cursor-move" : "",
                      children: r.jsx(Fs, { content: v, isAdminMode: h }),
                    }),
                    r.jsx("div", { className: "flex-1 p-1", children: ut(v) }),
                  ],
                },
                v.GUID
              )
            );
          case "sub_container":
          case "parent_container":
            return r.jsxs(
              "div",
              {
                "data-container-guid": v.GUID,
                className: `${Y(
                  v.type || 0
                )} border-2 overflow-hidden rounded-lg shadow-sm min-h-[80px] flex flex-col h-full`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      k && de(v.type) && !F()
                        ? (L) =>
                            U(
                              v,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    onTouchStart:
                      k && de(v.type) && !F()
                        ? (L) =>
                            U(
                              v,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    onPointerDown:
                      k && de(v.type) && F()
                        ? (L) =>
                            U(
                              v,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    className: k && de(v.type) ? "cursor-move" : "",
                    children: r.jsx(Fs, { content: v, isAdminMode: h }),
                  }),
                  r.jsx("div", { className: "flex-1  p-1", children: ut(v) }),
                ],
              },
              v.GUID
            );
          case "grid_draw":
            return r.jsxs(
              "div",
              {
                "data-container-guid": v.GUID,
                className: `${
                  v.type !== "sub_container"
                    ? "border-2 rounded-lg shadow-sm"
                    : ""
                } ${Y(
                  v.type || 0
                )} min-h-[80px] flex flex-col h-full overflow-hidden`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      k && de(v.type) && !F()
                        ? (L) =>
                            U(
                              v,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    onTouchStart:
                      k && de(v.type) && !F()
                        ? (L) =>
                            U(
                              v,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    onPointerDown:
                      k && de(v.type) && F()
                        ? (L) =>
                            U(
                              v,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    className: k && de(v.type) ? "cursor-move" : "",
                    children: r.jsx(Fs, { content: v, isAdminMode: h }),
                  }),
                  r.jsx("div", {
                    className: "flex-1 p-1 flex items-center",
                    children: ut(v),
                  }),
                ],
              },
              v.GUID
            );
          default:
            return r.jsxs(
              "div",
              {
                "data-container-guid": v.GUID,
                className: `${
                  v.type !== "sub_container"
                    ? "border-2 rounded-lg shadow-sm"
                    : ""
                } ${Y(
                  v.type || 0
                )} min-h-[80px] flex flex-col h-full overflow-hidden ${
                  v.type == "none" ? "opacity-0" : ""
                }`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      k && de(v.type) && !F()
                        ? (L) =>
                            U(
                              v,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    onTouchStart:
                      k && de(v.type) && !F()
                        ? (L) =>
                            U(
                              v,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    onPointerDown:
                      k && de(v.type) && F()
                        ? (L) =>
                            U(
                              v,
                              L.currentTarget.closest("[data-container-guid]"),
                              L
                            )
                        : void 0,
                    className: k && de(v.type) ? "cursor-move" : "",
                    children: r.jsx(Fs, { content: v, isAdminMode: h }),
                  }),
                  r.jsx("div", { className: "flex-1 p-1", children: ut(v) }),
                ],
              },
              v.GUID
            );
        }
      },
      ut = (v) => {
        const Q = (Y, L, W) => {
          const O = Array(L + 1)
              .fill(null)
              .map(() => Array(W + 1).fill(!1)),
            K = {};
          return (
            Y.forEach((ee) => {
              const fe = ue(ee.gird_position || "0,0");
              (K[`${fe.row},${fe.col}`] = ee), (O[fe.row][fe.col] = !0);
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: L + 1 }, (ee, fe) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      style: { height: `${100 / (L + 1)}%`, minHeight: "80px" },
                      children: Array.from({ length: W + 1 }, (J, pe) => {
                        const ve = `${fe},${pe}`,
                          Ce = K[ve];
                        return Ce
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
                                  St(Ce),
                                  (x == null ? void 0 : x.container.GUID) ===
                                    Ce.GUID &&
                                    r.jsx("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none",
                                      children: r.jsx("div", {
                                        className: `absolute bg-blue-400 opacity-50 ${
                                          x.direction === "top"
                                            ? "top-0 left-0 right-0 h-1"
                                            : x.direction === "bottom"
                                            ? "bottom-0 left-0 right-0 h-1"
                                            : x.direction === "left"
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
                              pe
                            );
                      }),
                    },
                    fe
                  )
                ),
              }),
            })
          );
        };
        switch (v.type) {
          case "parent_container":
          case "sub_container":
            if (v.contents && v.contents.length > 0) {
              const {
                sortedContents: J,
                maxRow: pe,
                maxCol: ve,
              } = Ke(v.contents);
              return Q(J, pe, ve);
            } else
              return r.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "1px" },
                children: r.jsx("tbody", { children: r.jsx("tr", {}) }),
              });
          case "dispensing_shelves":
            if (v.contents && v.contents.length > 0) {
              const {
                sortedContents: J,
                maxRow: pe,
                maxCol: ve,
              } = Ke(v.contents);
              return Q(J, pe, ve);
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
            if (v.medMapStock && v.medMapStock.length > 0) {
              const J = v.medMapStock,
                pe = J.length,
                ve = pe > 0 ? 100 / pe : 100,
                Ce = v.width ? v.width * 5 : 500;
              return r.jsx("div", {
                className: "flex h-full",
                style: { minWidth: `${Ce}px` },
                children: J.map((Ne, _e) => {
                  const Le = Number(Ne.location);
                  return r.jsx(
                    "div",
                    {
                      className: "m-1 flex-shrink-0 relative",
                      style: { width: `calc(${ve}% - 8px)` },
                      "data-stock-guid": Ne.GUID,
                      children: r.jsxs("div", {
                        className: `border-2 bg-yellow-50 border-yellow-400 rounded-lg p-2 h-full flex flex-col justify-center items-center cursor-pointer bg-white hover:bg-yellow-100 hover:border-yellow-500 hover:shadow-md transition-all ${
                          k ? "cursor-move" : ""
                        }`,
                        onMouseDown: (Te) => {
                          k
                            ? ie(
                                Ne,
                                v,
                                Te.currentTarget.closest("[data-stock-guid]"),
                                Te
                              )
                            : !b &&
                              !D &&
                              (z({ x: Te.clientX, y: Te.clientY }), M(!1));
                        },
                        onMouseUp: (Te) => {
                          if (!b && !D && !Z && P && !k) {
                            const Ut = Math.abs(Te.clientX - P.x),
                              tn = Math.abs(Te.clientY - P.y);
                            Ut <= 5 &&
                              tn <= 5 &&
                              (Te.stopPropagation(), i(v, Ne));
                          }
                          k || (z(null), M(!1));
                        },
                        onTouchStart: (Te) => {
                          if (k && F())
                            ie(
                              Ne,
                              v,
                              Te.currentTarget.closest("[data-stock-guid]"),
                              Te
                            );
                          else if (!b && !k) {
                            const Ut = Te.touches[0];
                            z({ x: Ut.clientX, y: Ut.clientY }), M(!1);
                          }
                        },
                        onTouchEnd: (Te) => {
                          if (!b && !Z && P && !k) {
                            const Ut = Te.changedTouches[0],
                              tn = Math.abs(Ut.clientX - P.x),
                              Wo = Math.abs(Ut.clientY - P.y);
                            tn <= 5 &&
                              Wo <= 5 &&
                              (Te.stopPropagation(), i(v, Ne));
                          }
                          k || (z(null), M(!1));
                        },
                        onPointerDown: (Te) => {
                          k &&
                            F() &&
                            ie(
                              Ne,
                              v,
                              Te.currentTarget.closest("[data-stock-guid]"),
                              Te
                            );
                        },
                        children: [
                          r.jsx("div", {
                            className:
                              "text-base font-semibold text-gray-800 flex truncate w-full items-center flex-1",
                            children: r.jsx("div", {
                              className:
                                "w-full text-center truncate whitespace-normal",
                              children: Ne.name || Ne.material_no,
                            }),
                          }),
                          r.jsxs("div", {
                            className: "w-full flex justify-between items-end",
                            children: [
                              r.jsxs("div", {
                                className: "",
                                children: [
                                  r.jsxs("div", {
                                    className: "text-sm text-gray-600 mt-1",
                                    children: ["數量: ", +Ne.qty || 0],
                                  }),
                                  r.jsxs("div", {
                                    className: "text-sm text-gray-500 mt-1",
                                    children: ["位置: ", Le],
                                  }),
                                ],
                              }),
                              r.jsx("div", {
                                className: "flex justify-end items-end mt-2",
                                children: r.jsx("button", {
                                  onMouseDown: (Te) => {
                                    Te.stopPropagation();
                                  },
                                  onMouseUp: (Te) => {
                                    Te.stopPropagation();
                                  },
                                  onTouchStart: (Te) => {
                                    Te.stopPropagation();
                                  },
                                  onTouchEnd: (Te) => {
                                    Te.stopPropagation();
                                  },
                                  onClick: (Te) => Vo(Ne, v, Te),
                                  className:
                                    "text-red-500 hover:text-red-600 rounded-full p-2 transition-all z-10",
                                  title: "刪除",
                                  children: r.jsx(zu, { className: "w-6 h-6" }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    Ne.GUID || _e
                  );
                }),
              });
            } else if (v.contents && v.contents.length > 0) {
              const {
                sortedContents: J,
                maxRow: pe,
                maxCol: ve,
              } = Ke(v.contents);
              return Q(J, pe, ve);
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
            if (v.contents && v.contents.length > 0) {
              const {
                sortedContents: J,
                maxRow: pe,
                maxCol: ve,
              } = Ke(v.contents);
              return Q(J, pe, ve);
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
            const Y = Math.max(
                ...v.Boxes.flat().map((J) => +J.Row + +J.Height - 1)
              ),
              L = Math.max(
                ...v.Boxes.flat().map((J) => +J.Column + +J.Width - 1)
              ),
              W = Y + 1,
              O = L + 1,
              K = v.Boxes.flat(),
              ee = Array(W)
                .fill(null)
                .map(() => Array(O).fill(!1)),
              fe = {};
            return (
              K.forEach((J) => {
                J.Slave || (fe[`${J.Row},${J.Column}`] = J);
              }),
              K.forEach((J) => {
                if (!J.Slave && (J.Width > 1 || J.Height > 1))
                  for (let pe = J.Row; pe < J.Row + J.Height; pe++)
                    for (let ve = J.Column; ve < J.Column + J.Width; ve++)
                      (pe !== J.Row || ve !== J.Column) && (ee[pe][ve] = !0);
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
            return v.med_info && v.med_info.length > 0
              ? r.jsxs("div", {
                  className:
                    "text-base text-left h-full min-h-[40px] max-w-[200px] min-w-[200px] p-1 flex items-center justify-between flex-col",
                  children: [
                    r.jsx("div", {
                      className: "text-gray-700 font-bold truncate w-full",
                      children: v.med_info[0].name,
                    }),
                    r.jsxs("div", {
                      className:
                        "text-gray-700 w-full flex justify-between px-1",
                      children: [
                        r.jsxs("div", { children: [v.box_type, "吋"] }),
                        r.jsxs("div", {
                          children: [v.width[v.width_index], "cm"],
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
            return v.contents && v.contents.length > 0
              ? r.jsx("div", {
                  className: "space-y-2",
                  children: v.contents.map((J) => St(J)),
                })
              : r.jsx("div", {
                  className:
                    "h-full flex items-center justify-center text-gray-500",
                  children: r.jsxs("div", {
                    className: "text-base",
                    children: ["未知類型: ", v.type],
                  }),
                });
        }
      },
      An = (v) => {
        if (
          (ue(v.gird_position || "0,0"),
          v.type !== "調劑台" && v.type !== "藥庫")
        )
          return null;
        const Q = (Y) => {
          if (!Y || Y.length === 0)
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
          const { sortedContents: L, maxRow: W, maxCol: O } = Ke(Y),
            K = Array(W + 1)
              .fill(null)
              .map(() => Array(O + 1).fill(!1)),
            ee = {};
          return (
            L.forEach((fe) => {
              const J = ue(fe.gird_position || "0,0");
              (ee[`${J.row},${J.col}`] = fe), (K[J.row][J.col] = !0);
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: W + 1 }, (fe, J) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      children: Array.from({ length: O + 1 }, (pe, ve) => {
                        const Ce = `${J},${ve}`,
                          Ne = ee[Ce];
                        return Ne
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
                                  St(Ne),
                                  (x == null ? void 0 : x.container.GUID) ===
                                    Ne.GUID &&
                                    r.jsx("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none",
                                      children: r.jsx("div", {
                                        className: `absolute bg-blue-400 opacity-50 ${
                                          x.direction === "top"
                                            ? "top-0 left-0 right-0 h-1"
                                            : x.direction === "bottom"
                                            ? "bottom-0 left-0 right-0 h-1"
                                            : x.direction === "left"
                                            ? "left-0 top-0 bottom-0 w-1"
                                            : "right-0 top-0 bottom-0 w-1"
                                        }`,
                                      }),
                                    }),
                                ],
                              },
                              ve
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
                              ve
                            );
                      }),
                    },
                    J
                  )
                ),
              }),
            })
          );
        };
        return r.jsxs(
          "div",
          {
            "data-container-guid": v.GUID,
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
                      children: v.name,
                    }),
                  }),
                  r.jsx("div", {
                    className: "flex items-center space-x-1",
                    children: r.jsx("button", {
                      className:
                        "p-1 hover:bg-black/10 rounded transition-colors",
                      onClick: (Y) => {
                        Y.stopPropagation(),
                          console.log("🔘 點擊新增父容器按鈕"),
                          console.log("📋 找到的部門資料:", v),
                          v
                            ? (console.log(
                                "✅ 呼叫 openAddParentContainerModal"
                              ),
                              a(v))
                            : console.warn("⚠️ 未找到對應的部門資料");
                      },
                      title: "新增",
                      children: r.jsx(vt, {
                        className: "w-6 h-6 text-green-700",
                      }),
                    }),
                  }),
                ],
              }),
              r.jsx("div", {
                className: `flex-1 bg-orange-50 ${
                  (x == null ? void 0 : x.container.GUID) === v.GUID
                    ? "ring-2 ring-blue-400 ring-inset"
                    : ""
                }`,
                children: Q(v.contents || []),
              }),
            ],
          },
          v.GUID
        );
      },
      Yt = p.useCallback(
        (v) => {
          if (
            (console.log("🎯 locateDrugOnCanvas 被調用，藥品資料:", v),
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
          const Q = v[0].CODE || v[0].code;
          if ((console.log("🎯 提取的藥碼:", Q), !Q)) {
            console.warn("⚠️ 無法定位藥品：缺少藥碼");
            return;
          }
          console.log("🎯 開始定位藥品:", Q);
          const Y = (W) => {
              for (const O of W) {
                if (O.type === "grid_draw" && O.Boxes) {
                  for (const K of O.Boxes)
                    for (const ee of K)
                      if (ee.Code === Q) {
                        const fe = document.querySelector(
                          `[data-container-guid="${O.GUID}"]`
                        );
                        if (fe)
                          return (
                            console.log("✅ 找到藥品容器 (grid_draw):", O),
                            { element: fe, bounds: fe.getBoundingClientRect() }
                          );
                      }
                }
                if (
                  O.type === "list_draw" &&
                  O.drugs &&
                  O.drugs.some((ee) => ee.code === Q)
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
                    (ee) => ee.code === Q || ee.material_no === Q
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
                  O.med_info.some((ee) => ee.code === Q)
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
                  const K = Y(O.contents);
                  if (K) return K;
                }
              }
              return null;
            },
            L = Y(o);
          if (L) {
            const W = n.current.getBoundingClientRect(),
              O = L.bounds,
              K = (O.left + O.right) / 2,
              ee = (O.top + O.bottom) / 2,
              fe = (K - W.left - f.x) / f.scale,
              J = (ee - W.top - f.y) / f.scale,
              pe = W.width / 2,
              ve = W.height / 2,
              Ce = pe - fe * f.scale,
              Ne = ve - J * f.scale;
            S((_e) => ({ ..._e, x: Ce, y: Ne })),
              console.log("✅ 定位完成", {
                elementScreenCenter: { x: K, y: ee },
                elementCanvasPos: { x: fe, y: J },
                screenCenter: { x: pe, y: ve },
                newTransform: { x: Ce, y: Ne },
              }),
              m(`已定位到藥品：${v.CHT_NAME || v.NAME || Q}`, "success");
          } else
            console.warn("❌ 未找到藥品容器"),
              m("未找到該藥品的儲存位置", "error");
        },
        [o, f, m]
      );
    p.useImperativeHandle(
      t,
      () => (
        console.log("🔧 useImperativeHandle 設置 ref 方法"), { locateDrug: Yt }
      )
    );
    const Vo = async (v, Q, Y) => {
        if (
          (Y.stopPropagation(),
          Y.preventDefault(),
          !!window.confirm(`確定要刪除 ${v.name || v.material_no} 嗎？`))
        )
          try {
            const W = await De.deleteStockByGUID([v.GUID]);
            if (W.Code === 200) {
              const O = Q.medMapStock.findIndex((K) => K.GUID === v.GUID);
              O !== -1 &&
                (Q.medMapStock.splice(O, 1),
                Q.medMapStock.forEach((K, ee) => {
                  K.location = String(ee);
                })),
                m("刪除成功", "success");
            } else m(W.Result || "刪除失敗", "error");
          } catch (W) {
            console.error("刪除 stock 失敗:", W),
              m("刪除失敗，請稍後再試", "error");
          }
      },
      Tr = async (v) => {
        if (v.key === "Enter" && I.trim() && !G) {
          v.preventDefault(), oe(!0);
          const Q = performance.now();
          try {
            console.log("🔍 [手動輸入] 搜尋條碼:", I);
            const Y = performance.now(),
              L = await De.searchByBarCode(I.trim()),
              W = performance.now();
            if (
              (console.log(
                `⏱️ [手動輸入] API搜尋藥品資料用時: ${(W - Y).toFixed(2)}ms`
              ),
              console.log("📋 條碼搜尋回應:", L),
              L.Code === 200)
            ) {
              console.log("✅ 找到藥品資料:", L.Data),
                m("找到藥品資料", "success");
              const O = performance.now();
              Yt(L.Data);
              const K = performance.now();
              console.log(
                `⏱️ [手動輸入] 定位藥品用時: ${(K - O).toFixed(2)}ms`
              ),
                R("");
              const ee = performance.now();
              console.log(`⏱️ [手動輸入] 總用時: ${(ee - Q).toFixed(2)}ms`);
            } else
              L.Code === -200 && L.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  m("查無資料，請建立條碼", "error"),
                  g(I.trim()),
                  R(""))
                : (console.log("❌ 搜尋失敗:", L.Result),
                  m(L.Result || "搜尋失敗", "error"));
          } catch (Y) {
            console.error("條碼搜尋錯誤:", Y),
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
                value: I,
                onChange: (v) => R(v.target.value),
                onKeyDown: Tr,
                placeholder: "輸入條碼或掃描...",
                className:
                  "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
                disabled: G,
              }),
              r.jsx("button", {
                onClick: () => c("track_Drug_mode"),
                className: "p-2",
                title: "掃描條碼",
                disabled: G,
                children: r.jsx(Mr, { className: "w-6 h-6 text-blue-600" }),
              }),
            ],
          }),
        }),
        r.jsx("div", {
          className: "absolute bottom-4 right-4 z-10 flex gap-2",
          children: r.jsx("button", {
            onClick: () => d(!k),
            className: `rounded-lg shadow-lg p-2 transition-colors ${
              k
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`,
            title: k ? "Unlock Canvas" : "Lock Canvas",
            children: k
              ? r.jsx(Bu, { className: "w-6 h-6" })
              : r.jsx(Gu, { className: "w-6 h-6" }),
          }),
        }),
        r.jsx("div", {
          ref: n,
          className: `w-full h-full relative ${
            D && !k ? "cursor-grab" : "cursor-default"
          } ${b ? "cursor-grabbing" : ""}`,
          onMouseDown: B,
          onMouseMove: C,
          onMouseUp: A,
          onMouseLeave: A,
          onTouchStart: he,
          onTouchMove: ye,
          onTouchEnd: Se,
          children: r.jsxs("div", {
            className: "absolute inset-0 origin-top-left",
            style: {
              transform: `translate(${f.x}px, ${f.y}px) scale(${f.scale})`,
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
                    borderSpacing: `${ae}px`,
                    minWidth: "fit-content",
                    minHeight: "fit-content",
                  },
                  children: r.jsx("tbody", {
                    children: Array.from({ length: Ze + 1 }, (v, Q) =>
                      r.jsx(
                        "tr",
                        {
                          children: Array.from({ length: Fe + 1 }, (Y, L) => {
                            const W = Ee.find((O) => {
                              const K = ue(O.gird_position || "0,0");
                              return K.row === Q && K.col === L;
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
                                    children: An(W),
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
                        Q
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
Fu.displayName = "DrugCanvas";
const wh = async (e) => {
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
          const f = {
            ...c,
            absolute_position:
              ((g = i.containerData) == null ? void 0 : g.absolute_position) ||
              i.position,
            name: ((m = i.containerData) == null ? void 0 : m.name) || "",
            ip: ((h = i.containerData) == null ? void 0 : h.ip) || "",
          };
          o.push(f);
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
        var f, S;
        if (h.error)
          (g += h.count),
            m.push(`${h.type}: ${h.error.message || "網路錯誤"}`),
            console.error(`❌ ${h.type} API 失敗:`, h.error);
        else if (((f = h.response) == null ? void 0 : f.Code) === 200)
          (c += h.count), console.log(`✅ ${h.type} API 成功:`, h.response);
        else {
          g += h.count;
          const b =
            ((S = h.response) == null ? void 0 : S.Result) || "未知錯誤";
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
  bh = "modulepreload",
  Nh = function (e) {
    return "/" + e;
  },
  wc = {},
  jh = function (t, n, s) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const a = document.querySelector("meta[property=csp-nonce]"),
        i =
          (a == null ? void 0 : a.nonce) ||
          (a == null ? void 0 : a.getAttribute("nonce"));
      o = Promise.allSettled(
        n.map((c) => {
          if (((c = Nh(c)), c in wc)) return;
          wc[c] = !0;
          const g = c.endsWith(".css"),
            m = g ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${m}`)) return;
          const h = document.createElement("link");
          if (
            ((h.rel = g ? "stylesheet" : bh),
            g || (h.as = "script"),
            (h.crossOrigin = ""),
            (h.href = c),
            i && h.setAttribute("nonce", i),
            document.head.appendChild(h),
            g)
          )
            return new Promise((f, S) => {
              h.addEventListener("load", f),
                h.addEventListener("error", () =>
                  S(new Error(`Unable to preload CSS for ${c}`))
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
  Qt = [
    { name: "2.13吋", box_type: "2.13", width: ["7.5"], unit: "cm" },
    { name: "2.9吋", type: "2.9", width: ["10", "15", "20"], unit: "cm" },
    { name: "4.2吋", type: "4.2", width: ["11", "16"], unit: "cm" },
  ],
  Sh = () => {
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
      } = Xe(),
      { t: m } = gt(),
      [h, f] = p.useState(0),
      [S, b] = p.useState({}),
      [_, k] = p.useState(""),
      [d, u] = p.useState(""),
      [y, D] = p.useState("N"),
      [$, I] = p.useState([]),
      [R, G] = p.useState(!1),
      [oe, P] = p.useState(!1),
      [z, Z] = p.useState(null),
      [M, w] = p.useState(null),
      [H, x] = p.useState(!1),
      [N, j] = p.useState(!1);
    p.useEffect(() => {
      if (n && e)
        if (c === "add") {
          f(0);
          const U = {};
          Qt.forEach((E, ne) => {
            U[ne] = 0;
          }),
            b(U),
            k(""),
            P(!1),
            F();
        } else {
          const U = Qt.findIndex(
            (E) => E.box_type === n.box_type || E.type === n.box_type
          );
          if ((console.log(n), U >= 0)) {
            f(U);
            const ne = Qt[U].width.findIndex((B) => {
                var C;
                return (
                  B === ((C = n.width) == null ? void 0 : C[n.width_index || 0])
                );
              }),
              ce = {};
            Qt.forEach((B, C) => {
              C === U ? (ce[C] = ne >= 0 ? ne : 0) : (ce[C] = 0);
            }),
              b(ce);
          } else {
            f(0);
            const E = {};
            Qt.forEach((ne, ce) => {
              E[ce] = 0;
            }),
              b(E);
          }
          k(n.ip || ""),
            w({
              box_type: n.box_type,
              width: n.width,
              width_index: n.width_index,
              ip: n.ip || "",
              storage: n.storage ? JSON.parse(JSON.stringify(n.storage)) : null,
            });
        }
    }, [n, e, c]);
    const F = () => {
        n && n.parentShelf && Z(n.parentShelf);
      },
      ae = (U) => {
        if (!U || !U.contents || U.contents.length === 0) return "0,0";
        let E = -1,
          ne = 0;
        return (
          U.contents.forEach((ce) => {
            if (ce.gird_position) {
              const [B, C] = ce.gird_position.split(",").map(Number);
              C > E && ((E = C), (ne = B));
            }
          }),
          `${ne},${E + 1}`
        );
      },
      X = () => {
        if (!M || c !== "edit") return !1;
        const U = Qt[h],
          E = S[h] || 0,
          ne = U.box_type || U.type || U.name;
        return (
          M.box_type !== ne ||
          M.width_index !== E ||
          M.ip !== _ ||
          JSON.stringify(M.storage) !==
            JSON.stringify(n == null ? void 0 : n.storage)
        );
      },
      re = (U) => {
        f(U);
      },
      be = (U, E) => {
        b((ne) => ({ ...ne, [U]: E }));
      },
      de = () => {
        n && (c === "add" ? ue() : V());
      },
      ke = () => {
        t();
      },
      ue = async () => {
        if (!n || !z) {
          a("缺少必要資料，無法新增藥盒", "error");
          return;
        }
        P(!0);
        try {
          const U = Qt[h],
            E = S[h] || 0,
            ne = U.width[E],
            ce = ae(z),
            B = {
              Master_GUID: z.GUID,
              position: ce,
              width: ne.toString(),
              height: "60",
              ip_box: _,
              serverName: z.serverName || "",
              serverType: z.serverType || "",
            };
          console.log("🚀 發送新增藥盒 API 請求:", B);
          const C = await De.addMedMapBox(B);
          C.Code === 200
            ? (a("藥盒新增成功", "success"), t(), await ge())
            : a(`藥盒新增失敗：${C.Result || "未知錯誤"}`, "error");
        } catch (U) {
          console.error("Add med box failed:", U),
            a("藥盒新增失敗：網路錯誤", "error");
        } finally {
          P(!1);
        }
      },
      V = async () => {
        var U;
        if (!n || !X()) {
          a("沒有資料變更", "error");
          return;
        }
        x(!0);
        try {
          const E = Qt[h],
            ne = S[h] || 0,
            ce = E.width[ne],
            B = E.box_type || E.type || E.name,
            C = M.box_type !== B || M.width_index !== ne || M.ip !== _,
            A =
              JSON.stringify(M.storage) !==
              JSON.stringify(n == null ? void 0 : n.storage),
            q = [];
          if (C) {
            const me = {
              GUID: n.GUID,
              Master_GUID: n.Master_GUID,
              position: n.gird_position,
              ip_light: _,
              serverName: n.serverName,
              serverType: n.serverType,
            };
            q.push(De.updateMedMapBox([me]));
          }
          A &&
            q.push(
              De.updateEpd266Storages(n.serverName || "", n.serverType || "", [
                n.storage,
              ])
            );
          const te = await Promise.all(q);
          if (te.every((me) => me.Code === 200))
            a("藥盒更新成功", "success"), t(), await ge();
          else {
            const me = te.filter((xe) => xe.Code !== 200);
            a(
              `藥盒更新失敗：${
                ((U = me[0]) == null ? void 0 : U.Result) || "未知錯誤"
              }`,
              "error"
            );
          }
        } catch (E) {
          console.error("Update med box failed:", E),
            a("藥盒更新失敗：網路錯誤", "error");
        } finally {
          x(!1);
        }
      },
      ge = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const U = await De.getMedMapByDepartment(s);
          if (U.Code === 200 && U.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const E = await jh(() => Promise.resolve().then(() => Vm), void 0),
              ne = E.default.convertMedMapApiToFakeData(U.Data);
            if (!E.default.validateConvertedData(ne)) {
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
      je = async () => {
        G(!0);
        try {
          const U = d.toLowerCase().trim();
          let E = g;
          U &&
            (E = E.filter((ne) => {
              var ce, B, C;
              return (
                ((ce = ne.CODE) == null
                  ? void 0
                  : ce.toLowerCase().includes(U)) ||
                ((B = ne.NAME) == null
                  ? void 0
                  : B.toLowerCase().includes(U)) ||
                ((C = ne.CHT_NAME) == null
                  ? void 0
                  : C.toLowerCase().includes(U))
              );
            })),
            y !== "N" && (E = E.filter((ne) => ne.DRUGKIND === y)),
            I(E);
        } catch (U) {
          console.error("Search failed:", U), I([]);
        } finally {
          G(!1);
        }
      },
      T = (U, E) => {
        console.log("📸 掃描成功，藥品資料:", E), j(!1), ie(E);
      },
      ie = async (U) => {
        if (n)
          try {
            console.log("🚀 開始更新藥盒藥品代碼:", U.CODE);
            const E = await De.updateEpd266Medcode(
              n.serverName || "",
              n.serverType || "",
              U.CODE,
              n.storage || {}
            );
            E.Code === 200
              ? (console.log("✅ 藥品代碼更新成功:", E.Data),
                (n.storage = E.Data),
                (n.med_info = [
                  { name: U.NAME, cht_name: U.CHT_NAME, code: U.CODE },
                ]),
                a("藥品更新成功", "success"),
                i())
              : (console.error("❌ 藥品代碼更新失敗:", E),
                a(`藥品更新失敗：${E.Result || "未知錯誤"}`, "error"));
          } catch (E) {
            console.error("💥 藥品代碼更新發生錯誤:", E),
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
              onClick: ke,
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
                        r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
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
                      onClick: ke,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ve, { className: "w-6 h-6" }),
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
                                children: Qt.map((U, E) =>
                                  r.jsxs(
                                    "label",
                                    {
                                      className: `flex items-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                        h === E
                                          ? "border-blue-500 bg-blue-50"
                                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                      }`,
                                      children: [
                                        r.jsx("input", {
                                          type: "radio",
                                          name: "boxType",
                                          value: E,
                                          checked: h === E,
                                          onChange: () => re(E),
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
                                    E
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
                              Qt.map((U, E) =>
                                r.jsx(
                                  "div",
                                  {
                                    className: `flex gap-4 ${
                                      h === E ? "block" : "hidden"
                                    }`,
                                    children: U.width.map((ne, ce) =>
                                      r.jsxs(
                                        "label",
                                        {
                                          className: `flex items-center justify-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                            h === E && (S[E] || 0) === ce
                                              ? "border-green-500 bg-green-50"
                                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                          }`,
                                          children: [
                                            r.jsx("input", {
                                              type: "radio",
                                              name: `width-${E}`,
                                              value: ce,
                                              checked:
                                                h === E && (S[E] || 0) === ce,
                                              onChange: () => be(E, ce),
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
                                        `${E}-${ce}`
                                      )
                                    ),
                                  },
                                  E
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
                                          children: n.med_info.map((U, E) =>
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
                                              E
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
                                    onClick: () => j(!0),
                                    className:
                                      "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                    title: "掃描條碼",
                                    children: r.jsx(Mr, {
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
                                    value: d,
                                    onChange: (U) => u(U.target.value),
                                    placeholder: m("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  r.jsxs("select", {
                                    value: y,
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
                                    onClick: je,
                                    disabled: R,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      R &&
                                        r.jsx(jt, {
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
                                children: R
                                  ? r.jsxs("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: [
                                        r.jsx(jt, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        m("status.searching"),
                                      ],
                                    })
                                  : $.length > 0
                                  ? r.jsx("div", {
                                      className: "space-y-1",
                                      children: $.map((U, E) =>
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
                                                onClick: () => ie(U),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: m("button.add"),
                                                children: r.jsx(vt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          U.GUID || E
                                        )
                                      ),
                                    })
                                  : r.jsx("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: m(
                                        d || y !== "N"
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
                      onClick: ke,
                      disabled: oe || H,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: m("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: de,
                      disabled: oe || H,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        (oe || H) &&
                          r.jsx(jt, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", {
                          children: oe
                            ? "新增中..."
                            : H
                            ? "更新中..."
                            : m(c === "add" ? "button.add" : "button.save"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            r.jsx(Ho, {
              isOpen: N,
              onClose: () => j(!1),
              onScanSuccess: T,
              mode: "set_med_box_med_mode",
            }),
          ],
        });
  },
  Ch = () => {
    const {
        listDrawModalOpen: e,
        closeListDrawModal: t,
        selectedListDraw: n,
        triggerRefresh: s,
      } = Xe(),
      { t: o } = gt(),
      [l, a] = p.useState(""),
      [i, c] = p.useState([]),
      [g, m] = p.useState(""),
      [h, f] = p.useState("N"),
      [S, b] = p.useState([]),
      [_, k] = p.useState(!1);
    p.useEffect(() => {
      n && e && (a(n.name || ""), c(n.med_info || []));
    }, [n, e]);
    const d = (I) => {
        c((R) => R.filter((G) => G.code !== I));
      },
      u = async () => {
        k(!0);
        try {
          const I = await De.searchMedicine(g, h);
          b(I);
        } catch (I) {
          console.error("Search failed:", I), b([]);
        } finally {
          k(!1);
        }
      },
      y = (I) => {
        const R = {
          id: I.GUID || `${Date.now()}_${Math.random()}`,
          name: I.NAME,
          cht_name: I.CHT_NAME,
          code: I.CODE,
        };
        c((G) => (G.some((P) => P.code === R.code) ? G : [...G, R]));
      },
      D = () => {
        n && ((n.name = l), (n.med_info = i), s(), t());
      },
      $ = () => {
        t();
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: $,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (I) => I.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: o("modal.listDrawSettings"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: $,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ve, { className: "w-6 h-6" }),
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
                            onChange: (I) => a(I.target.value),
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
                                    children: i.map((I) =>
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
                                                    I.code &&
                                                      r.jsx("div", {
                                                        children: r.jsx("div", {
                                                          className:
                                                            "text-sm text-gray-900 font-mono",
                                                          children: I.code,
                                                        }),
                                                      }),
                                                    r.jsx("div", {
                                                      children: r.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900 font-medium",
                                                        children:
                                                          I.name ||
                                                          o("status.notSet"),
                                                      }),
                                                    }),
                                                    r.jsx("div", {
                                                      children: r.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900",
                                                        children:
                                                          I.cht_name ||
                                                          o("status.notSet"),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              r.jsx("button", {
                                                onClick: () => d(I.code),
                                                className:
                                                  "ml-3 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0",
                                                title: o("button.remove"),
                                                children: r.jsx(Ve, {
                                                  className: "w-5 h-5",
                                                }),
                                              }),
                                            ],
                                          }),
                                        },
                                        I.id
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
                                    onChange: (I) => m(I.target.value),
                                    placeholder: o("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  r.jsxs("select", {
                                    value: h,
                                    onChange: (I) => f(I.target.value),
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
                                    onClick: u,
                                    disabled: _,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      _ &&
                                        r.jsx(jt, {
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
                                        r.jsx(jt, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        o("status.searching"),
                                      ],
                                    })
                                  : S.length > 0
                                  ? r.jsx("div", {
                                      className: "space-y-1",
                                      children: S.map((I, R) =>
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
                                                    children: I.NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: I.CHT_NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: I.CODE,
                                                  }),
                                                ],
                                              }),
                                              r.jsx("button", {
                                                onClick: () => y(I),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: o("button.add"),
                                                children: r.jsx(vt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          I.GUID || R
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
                      onClick: $,
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
  kh = () => {
    const {
        gridDrawModalOpen: e,
        closeGridDrawModal: t,
        selectedGridDraw: n,
        triggerRefresh: s,
        apiDepartmentData: o,
        setApiDepartmentData: l,
        showNotification: a,
        medicineList: i,
      } = Xe(),
      { t: c } = gt(),
      [g, m] = p.useState(""),
      [h, f] = p.useState(null),
      [S, b] = p.useState(!1),
      [_, k] = p.useState(!1),
      [d, u] = p.useState(null),
      [y, D] = p.useState(""),
      [$, I] = p.useState("N"),
      [R, G] = p.useState([]),
      [oe, P] = p.useState(!1),
      [z, Z] = p.useState(0),
      [M, w] = p.useState({ x: 0, y: 0 });
    p.useEffect(() => {
      if (n && e)
        if ((m(n.name || ""), n.drawer)) {
          if (!S) {
            console.log("🔄 備份原始 drawer 資料:", n);
            const B = JSON.parse(JSON.stringify(n.drawer));
            f(B), b(!0), console.log("✅ 備份完成，備份資料:", B);
          }
        } else console.log("⚠️ 沒有 drawer 資料可備份"), f(null), b(!1);
    }, [n, e, S]),
      p.useEffect(() => {
        e || (b(!1), f(null), u(null));
      }, [e]);
    const H = () => {
        n && ne();
      },
      x = () => {
        if (
          (console.log("🔄 開始恢復原始資料..."),
          console.log("原始備份資料:", h),
          console.log("當前 selectedGridDraw:", n),
          n && h && S)
        ) {
          console.log("📦 恢復 drawer 資料...");
          const B = JSON.parse(JSON.stringify(h));
          if (((n.drawer = B), o)) {
            const C = (q) => {
                q.forEach((te) => {
                  te.GUID === n.GUID &&
                    (console.log("🎯 找到目標格線抽屜，更新資料"),
                    (te.drawer = B)),
                    te.contents && Array.isArray(te.contents) && C(te.contents),
                    te.components &&
                      Array.isArray(te.components) &&
                      C(te.components);
                });
              },
              A = JSON.parse(JSON.stringify(o));
            C(A), l(A), console.log("🔄 已更新全域資料狀態");
          }
          console.log("✅ 資料已恢復:", n.drawer);
        } else
          console.log(
            "⚠️ 無法恢復資料 - selectedGridDraw、originalDrawerData 或 hasBackup 為空"
          ),
            console.log("selectedGridDraw:", !!n),
            console.log("originalDrawerData:", !!h),
            console.log("hasBackup:", S);
        u(null), b(!1), f(null), s(), t();
      },
      N = (B, C) => {
        if (!d) return !1;
        const A = Math.min(d.startRow, d.endRow),
          q = Math.max(d.startRow, d.endRow),
          te = Math.min(d.startCol, d.endCol),
          le = Math.max(d.startCol, d.endCol);
        return B >= A && B <= q && C >= te && C <= le;
      },
      j = (B) => {
        var Me;
        if (
          !((Me = n == null ? void 0 : n.drawer) != null && Me.Boxes) ||
          B.Slave
        )
          return { width: 1, height: 1 };
        const A = n.drawer.Boxes.flat().filter(
          (he) =>
            he.Slave &&
            he.MasterBox_Row === B.Row &&
            he.MasterBox_Column === B.Column
        );
        if (A.length === 0) return { width: 1, height: 1 };
        const q = [B, ...A],
          te = Math.min(...q.map((he) => he.Row)),
          le = Math.max(...q.map((he) => he.Row)),
          me = Math.min(...q.map((he) => he.Column));
        return {
          width: Math.max(...q.map((he) => he.Column)) - me + 1,
          height: le - te + 1,
        };
      },
      F = () => {
        var me;
        if (!d || !((me = n == null ? void 0 : n.drawer) != null && me.Boxes))
          return [];
        const B = n.drawer.Boxes.flat(),
          C = Math.min(d.startRow, d.endRow),
          A = Math.max(d.startRow, d.endRow),
          q = Math.min(d.startCol, d.endCol),
          te = Math.max(d.startCol, d.endCol),
          le = [];
        return (
          B.forEach((xe) => {
            if (!xe.Slave) {
              const Me = j(xe),
                he = xe.Row + Me.height - 1,
                ye = xe.Column + Me.width - 1;
              xe.Row >= C &&
                he <= A &&
                xe.Column >= q &&
                ye <= te &&
                le.push(xe);
            }
          }),
          le
        );
      },
      ae = (B, C, A, q) => {
        var ye;
        if (!d || !((ye = n == null ? void 0 : n.drawer) != null && ye.Boxes))
          return !1;
        const te = n.drawer.Boxes.flat();
        let le = !0,
          me = B,
          xe = C,
          Me = A,
          he = q;
        for (; le; )
          (le = !1),
            te.forEach((Se) => {
              if (!Se.Slave) {
                const Ie = j(Se),
                  Ke = Se.Row + Ie.height - 1,
                  Ee = Se.Column + Ie.width - 1;
                !(Se.Row > xe || Ke < me || Se.Column > he || Ee < Me) &&
                  (Se.Row < me && ((me = Se.Row), (le = !0)),
                  Ke > xe && ((xe = Ke), (le = !0)),
                  Se.Column < Me && ((Me = Se.Column), (le = !0)),
                  Ee > he && ((he = Ee), (le = !0)));
              }
            });
        return { minRow: me, maxRow: xe, minCol: Me, maxCol: he };
      },
      X = () => {
        var le;
        if (!d || !((le = n == null ? void 0 : n.drawer) != null && le.Boxes))
          return !1;
        const B = Math.min(d.startRow, d.endRow),
          C = Math.max(d.startRow, d.endRow),
          A = Math.min(d.startCol, d.endCol),
          q = Math.max(d.startCol, d.endCol),
          te = n.drawer.Boxes.flat();
        for (let me = B; me <= C; me++)
          for (let xe = A; xe <= q; xe++) {
            let Me = !1;
            for (const he of te)
              if (!he.Slave) {
                const ye = j(he),
                  Se = he.Row + ye.height - 1,
                  Ie = he.Column + ye.width - 1;
                if (me >= he.Row && me <= Se && xe >= he.Column && xe <= Ie) {
                  Me = !0;
                  break;
                }
              }
            if (!Me) return !1;
          }
        return !0;
      },
      re = () => {
        var ye, Se;
        const B = F();
        if (!d) return { canMerge: !1, canUnmerge: !1 };
        if (B.length === 0) return { canMerge: !1, canUnmerge: !1 };
        const C =
            ((Se =
              (ye = n == null ? void 0 : n.drawer) == null
                ? void 0
                : ye.Boxes) == null
              ? void 0
              : Se.flat()) || [],
          A = B.some(
            (Ie) =>
              C.filter(
                (Ee) =>
                  Ee.Slave &&
                  Ee.MasterBox_Row === Ie.Row &&
                  Ee.MasterBox_Column === Ie.Column
              ).length > 0
          ),
          q = Math.min(d.startRow, d.endRow),
          te = Math.max(d.startRow, d.endRow),
          le = Math.min(d.startCol, d.endCol),
          me = Math.max(d.startCol, d.endCol),
          xe = C.some(
            (Ie) =>
              Ie.Slave &&
              Ie.Row >= q &&
              Ie.Row <= te &&
              Ie.Column >= le &&
              Ie.Column <= me
          );
        return { canMerge: B.length > 1 && X(), canUnmerge: A || xe };
      },
      { canMerge: be, canUnmerge: de } = re(),
      ke = async () => {
        P(!0);
        try {
          const B = y.toLowerCase().trim();
          let C = i;
          B &&
            (C = C.filter((A) => {
              var q, te, le;
              return (
                ((q = A.CODE) == null ? void 0 : q.toLowerCase().includes(B)) ||
                ((te = A.NAME) == null
                  ? void 0
                  : te.toLowerCase().includes(B)) ||
                ((le = A.CHT_NAME) == null
                  ? void 0
                  : le.toLowerCase().includes(B))
              );
            })),
            $ !== "N" && (C = C.filter((A) => A.DRUGKIND === $)),
            G(C);
        } catch (B) {
          console.error("Search failed:", B), G([]);
        } finally {
          P(!1);
        }
      },
      ue = async (B) => {
        var A;
        if (!d || !((A = n == null ? void 0 : n.drawer) != null && A.Boxes))
          return;
        const C = F();
        if (C.length !== 0)
          try {
            const q = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [`guid=${C[0].GUID}`, `code=${B.CODE}`],
              Data: n.drawer,
            };
            console.log("🚀 發送更新藥品 API 請求:", q);
            const te = await De.request("/api/device/update_drawer_medcode", {
              method: "POST",
              body: JSON.stringify(q),
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
                const le = (xe) => {
                    xe.forEach((Me) => {
                      Me.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (Me.drawer = n.drawer),
                        n.Boxes && (Me.Boxes = n.Boxes)),
                        Me.contents &&
                          Array.isArray(Me.contents) &&
                          le(Me.contents),
                        Me.components &&
                          Array.isArray(Me.components) &&
                          le(Me.components);
                    });
                  },
                  me = JSON.parse(JSON.stringify(o));
                le(me), l(me);
              }
              u(null), s();
            } else
              console.error("❌ 藥品更新失敗:", te),
                a(`藥品更新失敗：${te.Result || "未知錯誤"}`, "error");
          } catch (q) {
            console.error("💥 藥品更新 API 調用失敗:", q),
              a("藥品更新失敗：網路錯誤", "error");
          }
      },
      V = (B, C, A) => {
        A.preventDefault(),
          A.stopPropagation(),
          "touches" in A &&
            (Z(Date.now()),
            w({ x: A.touches[0].clientX, y: A.touches[0].clientY })),
          k(!0),
          u({ startRow: B, startCol: C, endRow: B, endCol: C });
      },
      ge = (B, C) => {
        if (!_ || !d) return;
        const A = Math.min(d.startRow, B),
          q = Math.max(d.startRow, B),
          te = Math.min(d.startCol, C),
          le = Math.max(d.startCol, C),
          me = ae(A, q, te, le);
        me &&
          u((xe) =>
            xe
              ? {
                  startRow: xe.startRow,
                  startCol: xe.startCol,
                  endRow: B >= xe.startRow ? me.maxRow : me.minRow,
                  endCol: C >= xe.startCol ? me.maxCol : me.minCol,
                }
              : null
          );
      },
      je = () => {
        if (_ && (k(!1), d && n != null && n.Boxes)) {
          const B = Math.min(d.startRow, d.endRow),
            C = Math.max(d.startRow, d.endRow),
            A = Math.min(d.startCol, d.endCol),
            q = Math.max(d.startCol, d.endCol),
            te = ae(B, C, A, q);
          te &&
            u({
              startRow: te.minRow,
              startCol: te.minCol,
              endRow: te.maxRow,
              endCol: te.maxCol,
            });
        }
      },
      T = () => {
        var B;
        !be ||
          !((B = n == null ? void 0 : n.drawer) != null && B.Boxes) ||
          !d ||
          E();
      },
      ie = () => {
        var B;
        !de ||
          !((B = n == null ? void 0 : n.drawer) != null && B.Boxes) ||
          !d ||
          (console.log(d), U());
      },
      U = async () => {
        var B;
        if (!(!d || !((B = n == null ? void 0 : n.drawer) != null && B.Boxes)))
          try {
            const C = Math.min(d.startRow, d.endRow),
              A = Math.max(d.startRow, d.endRow),
              q = Math.min(d.startCol, d.endCol),
              te = Math.max(d.startCol, d.endCol),
              me = n.drawer.Boxes.flat().filter(
                (Se) =>
                  Se.Row >= C &&
                  Se.Row <= A &&
                  Se.Column >= q &&
                  Se.Column <= te
              ),
              xe = [],
              Me = [];
            me.forEach((Se) => {
              xe.push(Se.Column.toString()), Me.push(Se.Row.toString());
            });
            const he = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${xe.join(",")}`,
                `SelectRows=${Me.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", he);
            const ye = await De.request("/api/device/separate_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(he),
            });
            if ((console.log("📡 API 回應:", ye), ye.Code === 200 && ye.Data)) {
              if (
                ye.Data.Boxes &&
                Array.isArray(ye.Data.Boxes) &&
                ((n.Boxes = ye.Data.Boxes),
                (n.drawer = ye.Data),
                console.log("✅ 資料已更新"),
                o)
              ) {
                const Se = (Ke) => {
                    Ke.forEach((Ee) => {
                      Ee.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (Ee.drawer = n.drawer)),
                        Ee.contents &&
                          Array.isArray(Ee.contents) &&
                          Se(Ee.contents),
                        Ee.components &&
                          Array.isArray(Ee.components) &&
                          Se(Ee.components);
                    });
                  },
                  Ie = JSON.parse(JSON.stringify(o));
                Se(Ie), l(Ie);
              }
            } else
              console.error("❌ API 回應錯誤:", ye),
                a(`取消合併失敗：${ye.Result || "未知錯誤"}`, "error");
          } catch (C) {
            console.error("💥 API 調用失敗:", C),
              a("取消合併失敗：網路錯誤", "error");
          } finally {
            console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              u(null),
              s();
          }
      },
      E = async () => {
        var B;
        if (!(!d || !((B = n == null ? void 0 : n.drawer) != null && B.Boxes)))
          try {
            const C = Math.min(d.startRow, d.endRow),
              A = Math.max(d.startRow, d.endRow),
              q = Math.min(d.startCol, d.endCol),
              te = Math.max(d.startCol, d.endCol),
              me = n.drawer.Boxes.flat().filter(
                (Se) =>
                  Se.Row >= C &&
                  Se.Row <= A &&
                  Se.Column >= q &&
                  Se.Column <= te
              ),
              xe = [],
              Me = [];
            me.forEach((Se) => {
              xe.push(Se.Column.toString()), Me.push(Se.Row.toString());
            });
            const he = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${xe.join(",")}`,
                `SelectRows=${Me.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", he);
            const ye = await De.request("/api/device/combine_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(he),
            });
            if ((console.log("📡 API 回應:", ye), ye.Code === 200 && ye.Data)) {
              if (
                ye.Data.Boxes &&
                Array.isArray(ye.Data.Boxes) &&
                ((n.Boxes = ye.Data.Boxes),
                (n.drawer = ye.Data),
                console.log("✅ 資料已更新"),
                o)
              ) {
                const Se = (Ke) => {
                    Ke.forEach((Ee) => {
                      Ee.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (Ee.drawer = n.drawer)),
                        Ee.contents &&
                          Array.isArray(Ee.contents) &&
                          Se(Ee.contents),
                        Ee.components &&
                          Array.isArray(Ee.components) &&
                          Se(Ee.components);
                    });
                  },
                  Ie = JSON.parse(JSON.stringify(o));
                Se(Ie), l(Ie);
              }
            } else
              console.error("❌ API 回應錯誤:", ye),
                a(`取消合併失敗：${ye.Result || "未知錯誤"}`, "error");
          } catch (C) {
            console.error("💥 API 調用失敗:", C),
              a("取消合併失敗：網路錯誤", "error");
          } finally {
            console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              u(null),
              s();
          }
      },
      ne = async () => {
        if (n)
          try {
            n.name = g;
            const B = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              Data: [n.drawer],
            };
            console.log("🚀 發送確認更新 API 請求:", B);
            const C = await De.request("/api/device/update_epd583_drawers", {
              method: "POST",
              body: JSON.stringify(B),
            });
            if ((console.log("📡 確認更新 API 回應:", C), C.Code === 200)) {
              if (
                (console.log("✅ 抽屜資料更新成功"),
                a("抽屜資料更新成功", "success"),
                o)
              ) {
                const A = (te) => {
                    te.forEach((le) => {
                      le.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新名稱"),
                        (le.name = n.name)),
                        le.contents &&
                          Array.isArray(le.contents) &&
                          A(le.contents),
                        le.components &&
                          Array.isArray(le.components) &&
                          A(le.components);
                    });
                  },
                  q = JSON.parse(JSON.stringify(o));
                A(q), l(q);
              }
              b(!1), f(null), s(), t();
            } else
              console.error("❌ 抽屜資料更新失敗:", C),
                a(`抽屜資料更新失敗：${C.Result || "未知錯誤"}`, "error");
          } catch (B) {
            console.error("💥 抽屜資料更新 API 調用失敗:", B),
              a("抽屜資料更新失敗：網路錯誤", "error");
          }
      },
      ce = () => {
        var Me;
        if (
          !((Me = n == null ? void 0 : n.drawer) != null && Me.Boxes) ||
          n.drawer.Boxes.length === 0
        )
          return r.jsx("div", {
            className:
              "bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg py-12",
            children: r.jsxs("div", {
              className: "text-center",
              children: [
                r.jsx(Uu, {
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
        const B = n.drawer.Boxes.flat(),
          C = (he) => {
            if (he.Slave) return { width: 1, height: 1 };
            const ye = B.filter(
              (Fe) =>
                Fe.Slave &&
                Fe.MasterBox_Row === he.Row &&
                Fe.MasterBox_Column === he.Column
            );
            if (ye.length === 0) return { width: 1, height: 1 };
            const Se = [he, ...ye],
              Ie = Math.min(...Se.map((Fe) => Fe.Row)),
              Ke = Math.max(...Se.map((Fe) => Fe.Row)),
              Ee = Math.min(...Se.map((Fe) => Fe.Column));
            return {
              width: Math.max(...Se.map((Fe) => Fe.Column)) - Ee + 1,
              height: Ke - Ie + 1,
            };
          },
          A = Math.max(...B.map((he) => he.Row + 1 - 1)),
          q = Math.max(...B.map((he) => he.Column + 1 - 1)),
          te = A + 1,
          le = q + 1,
          me = Array(te)
            .fill(null)
            .map(() => Array(le).fill(!1)),
          xe = {};
        return (
          B.forEach((he) => {
            if (!he.Slave) {
              const ye = C(he);
              (xe[`${he.Row},${he.Column}`] = he),
                (he.calculatedWidth = ye.width),
                (he.calculatedHeight = ye.height);
            }
          }),
          B.forEach((he) => {
            if (
              !he.Slave &&
              (he.calculatedWidth > 1 || he.calculatedHeight > 1)
            )
              for (let ye = he.Row; ye < he.Row + he.calculatedHeight; ye++)
                for (
                  let Se = he.Column;
                  Se < he.Column + he.calculatedWidth;
                  Se++
                )
                  (ye !== he.Row || Se !== he.Column) && (me[ye][Se] = !0);
          }),
          r.jsx("div", {
            className: "rounded-lg",
            children: r.jsx("table", {
              className: "w-full",
              children: r.jsx("tbody", {
                children: Array.from({ length: te }, (he, ye) =>
                  r.jsx(
                    "tr",
                    {
                      children: Array.from({ length: le }, (Se, Ie) => {
                        if (me[ye][Ie]) return null;
                        const Ke = `${ye},${Ie}`,
                          Ee = xe[Ke];
                        return Ee
                          ? r.jsx(
                              "td",
                              {
                                className: `border border-gray-400 pt-1 pl-1 align-top cursor-pointer select-none ${
                                  N(ye, Ie)
                                    ? "bg-blue-200"
                                    : "bg-white hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / le}%`,
                                  minHeight: "40px",
                                  height: `${50 * Ee.calculatedHeight}px`,
                                  maxHeight: `${50 * Ee.calculatedHeight}px`,
                                },
                                colSpan: Ee.calculatedWidth,
                                rowSpan: Ee.calculatedHeight,
                                onMouseDown: (Ze) => V(ye, Ie, Ze),
                                onMouseEnter: () => ge(ye, Ie),
                                onMouseUp: je,
                                onTouchStart: (Ze) => V(ye, Ie, Ze),
                                onTouchMove: (Ze) => {
                                  if ((Ze.preventDefault(), !_)) return;
                                  const Fe = Ze.touches[0],
                                    St = document.elementFromPoint(
                                      Fe.clientX,
                                      Fe.clientY
                                    ),
                                    ut = St == null ? void 0 : St.closest("td");
                                  if (ut) {
                                    const An = parseInt(
                                        ut.getAttribute("data-row") || "0"
                                      ),
                                      Yt = parseInt(
                                        ut.getAttribute("data-col") || "0"
                                      );
                                    ge(An, Yt);
                                  }
                                },
                                onTouchEnd: je,
                                "data-row": ye,
                                "data-col": Ie,
                                children: r.jsx("div", {
                                  className: "h-full flex flex-col",
                                  children:
                                    Ee.Code || Ee.Name || Ee.ChineseName
                                      ? r.jsxs(r.Fragment, {
                                          children: [
                                            Ee.Code &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs font-mono text-gray-600",
                                                children: Ee.Code,
                                              }),
                                            Ee.Name &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs font-medium text-gray-900",
                                                children: Ee.Name,
                                              }),
                                            Ee.ChineseName &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs text-gray-700",
                                                children: Ee.ChineseName,
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
                              Ie
                            )
                          : r.jsx(
                              "td",
                              {
                                className: `border border-gray-300 p-2 align-top cursor-pointer select-none ${
                                  N(ye, Ie)
                                    ? "border-1 border-blue-500 bg-blue-100"
                                    : "bg-gray-50 hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / le}%`,
                                  minWidth: "80px",
                                  minHeight: "80px",
                                },
                                onMouseDown: (Ze) => V(ye, Ie, Ze),
                                onMouseEnter: () => ge(ye, Ie),
                                onMouseUp: je,
                                onTouchStart: (Ze) => V(ye, Ie, Ze),
                                onTouchMove: (Ze) => {
                                  if ((Ze.preventDefault(), !_)) return;
                                  const Fe = Ze.touches[0],
                                    St = document.elementFromPoint(
                                      Fe.clientX,
                                      Fe.clientY
                                    ),
                                    ut = St == null ? void 0 : St.closest("td");
                                  if (ut) {
                                    const An = parseInt(
                                        ut.getAttribute("data-row") || "0"
                                      ),
                                      Yt = parseInt(
                                        ut.getAttribute("data-col") || "0"
                                      );
                                    ge(An, Yt);
                                  }
                                },
                                onTouchEnd: je,
                                "data-row": ye,
                                "data-col": Ie,
                                children: r.jsx("div", {
                                  className:
                                    "h-full flex items-center justify-center text-gray-400 text-xs",
                                  children: c("status.notAdded"),
                                }),
                              },
                              Ie
                            );
                      }),
                    },
                    ye
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
              onClick: x,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (B) => B.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: c("modal.gridDrawSettings"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: x,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ve, { className: "w-6 h-6" }),
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
                              onChange: (B) => m(B.target.value),
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
                          children: ce(),
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
                                onClick: T,
                                disabled: !be,
                                className: `px-4 py-2 rounded transition-colors ${
                                  be
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`,
                                children: c("button.merge"),
                              }),
                              r.jsx("button", {
                                onClick: ie,
                                disabled: !de,
                                className: `px-4 py-2 rounded transition-colors ${
                                  de
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
                            const B = F(),
                              C = B.find((A) => !A.Slave);
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
                                      d && B.length > 0
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
                                  value: y,
                                  onChange: (B) => D(B.target.value),
                                  placeholder: c("placeholder.drugSearch"),
                                  className:
                                    "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                }),
                                r.jsxs("select", {
                                  value: $,
                                  onChange: (B) => I(B.target.value),
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
                                  onClick: ke,
                                  disabled: oe,
                                  className:
                                    "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                  children: [
                                    oe &&
                                      r.jsx(jt, {
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
                                      r.jsx(jt, {
                                        className: "w-5 h-5 animate-spin mr-2",
                                      }),
                                      c("status.searching"),
                                    ],
                                  })
                                : R.length > 0
                                ? r.jsx("div", {
                                    className: "space-y-1",
                                    children: R.map((B, C) =>
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
                                                  children: B.NAME,
                                                }),
                                                r.jsx("div", {
                                                  className:
                                                    "text-xs text-gray-500 truncate",
                                                  children: B.CHT_NAME,
                                                }),
                                                r.jsx("div", {
                                                  className:
                                                    "text-xs text-gray-400 font-mono",
                                                  children: B.CODE,
                                                }),
                                              ],
                                            }),
                                            r.jsx("button", {
                                              onClick: () => ue(B),
                                              className:
                                                "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                              title: c("button.add"),
                                              children: r.jsx(vt, {
                                                className: "w-4 h-4",
                                              }),
                                            }),
                                          ],
                                        },
                                        B.GUID || C
                                      )
                                    ),
                                  })
                                : r.jsx("div", {
                                    className:
                                      "text-gray-500 text-center flex items-center justify-center h-full",
                                    children: c(
                                      y || $ !== "N"
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
                          onClick: x,
                          className:
                            "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                          children: c("button.cancel"),
                        }),
                        r.jsx("button", {
                          onClick: H,
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
                  onMouseUp: je,
                  onMouseLeave: je,
                  onTouchEnd: je,
                  onTouchCancel: je,
                }),
              ],
            }),
          ],
        });
  },
  Dh = () => {
    var Z;
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
      } = Xe(),
      { t: g } = gt(),
      [m, h] = p.useState(null),
      [f, S] = p.useState(0),
      [b, _] = p.useState(0),
      [k, d] = p.useState(!1);
    p.useEffect(() => {
      e && (h(null), S(0), _(0), d(!1));
    }, [e]),
      p.useEffect(() => {
        m && (S(m.row), _(m.col));
      }, [m]);
    const u = () => {
        const M = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((w) => {
              w.type === "parent_container" &&
                w.gird_position &&
                M.add(w.gird_position);
            }),
          M
        );
      },
      y = () => {
        const M = u(),
          w = [];
        if (M.size === 0) return w.push({ row: 0, col: 0 }), w;
        const H = [];
        M.forEach((N) => {
          const [j, F] = N.split(",").map(Number);
          H.push({ row: j, col: F });
        });
        const x = new Set();
        return (
          H.forEach(({ row: N, col: j }) => {
            x.add(`${N},${j + 1}`),
              x.add(`${N + 1},${j}`),
              j > 0 && x.add(`${N},${j - 1}`),
              N > 0 && x.add(`${N - 1},${j}`);
          }),
          x.forEach((N) => {
            if (!M.has(N)) {
              const [j, F] = N.split(",").map(Number);
              j >= 0 && F >= 0 && w.push({ row: j, col: F });
            }
          }),
          M.has("0,1") ||
            w.some((j) => j.row === 0 && j.col === 1) ||
            w.push({ row: 0, col: 1 }),
          M.has("1,0") ||
            w.some((j) => j.row === 1 && j.col === 0) ||
            w.push({ row: 1, col: 0 }),
          w.sort((N, j) => (N.row === j.row ? N.col - j.col : N.row - j.row))
        );
      },
      D = (M) => {
        h(M);
      },
      $ = (M) => {
        S(M), h({ row: M, col: b });
      },
      I = (M) => {
        _(M), h({ row: f, col: M });
      },
      R = m && !u().has(`${m.row},${m.col}`) && m.row >= 0 && m.col >= 0,
      G = async () => {
        if (!(!m || !n || !R)) {
          d(!0);
          try {
            const M = `${m.row},${m.col}`,
              w = await De.addMedMapSection(n.GUID, M);
            w.Code === 200
              ? (a("新增成功", "success"), t(), c(!1), await oe())
              : a(`新增失敗：${w.Result || "未知錯誤"}`, "error");
          } catch (M) {
            console.error("Add parent container failed:", M),
              a("新增失敗：網路錯誤", "error");
          } finally {
            d(!1);
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
          const M = await De.getMedMapByDepartment(s);
          if (M.Code === 200 && M.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const w = $t.convertMedMapApiToFakeData(M.Data);
            if (!$t.validateConvertedData(w)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(w), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", M),
              a("資料更新失敗：API 錯誤", "error");
        } catch (M) {
          console.error("💥 重新獲取藥品地圖資料失敗:", M),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      P = () => {
        t();
      },
      z = () => {
        const M = u(),
          w = y(),
          H = [...M]
            .map((re) => {
              const [be, de] = re.split(",").map(Number);
              return { row: be, col: de };
            })
            .concat(w);
        H.length === 0 && H.push({ row: 0, col: 0 });
        const x = Math.max(...H.map((re) => re.row)),
          N = Math.max(...H.map((re) => re.col)),
          j = Math.min(...H.map((re) => re.row)),
          F = Math.min(...H.map((re) => re.col)),
          ae = x - j + 1,
          X = N - F + 1;
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
                style: { gridTemplateColumns: `repeat(${X}, 1fr)` },
                children: Array.from({ length: ae * X }, (re, be) => {
                  const de = Math.floor(be / X) + j,
                    ke = (be % X) + F,
                    ue = `${de},${ke}`,
                    V = M.has(ue),
                    ge = w.some((T) => T.row === de && T.col === ke),
                    je =
                      (m == null ? void 0 : m.row) === de &&
                      (m == null ? void 0 : m.col) === ke;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => ge && D({ row: de, col: ke }),
                      disabled: V || !ge,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      V
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : je
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : ge
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: V ? "已占用" : ge ? "可選擇" : "不可用",
                      children: V ? "占用" : `${de},${ke}`,
                    },
                    ue
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
              onClick: P,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "800px" },
              onClick: (M) => M.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(vt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增櫃體",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: P,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ve, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      z(),
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
                                    value: f,
                                    onChange: (M) =>
                                      $(parseInt(M.target.value) || 0),
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
                                    onChange: (M) =>
                                      I(parseInt(M.target.value) || 0),
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
                                R
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: R
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
                                  ((Z = n == null ? void 0 : n.contents) == null
                                    ? void 0
                                    : Z.filter(
                                        (M) => M.type === "parent_container"
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
                      onClick: P,
                      disabled: k,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: g("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: G,
                      disabled: !R || k,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        k && r.jsx(jt, { className: "w-4 h-4 animate-spin" }),
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
  bc = [
    {
      value: "dispensing_shelves",
      label: "藥盒層架",
      icon: r.jsx(ah, { className: "w-5 h-5" }),
      isShelf: !0,
    },
    {
      value: "store_shelves",
      label: "藥品層架",
      icon: r.jsx(Km, { className: "w-5 h-5" }),
      isShelf: !0,
    },
    {
      value: "list_draw",
      label: "清單抽屜",
      icon: r.jsx(fa, { className: "w-5 h-5" }),
      isShelf: !1,
    },
    {
      value: "grid_draw",
      label: "格線抽屜",
      icon: r.jsx(Uu, { className: "w-5 h-5" }),
      isShelf: !1,
    },
  ],
  _h = () => {
    var ae;
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
      } = Xe(),
      { t: g } = gt(),
      [m, h] = p.useState("dispensing_shelves"),
      [f, S] = p.useState("1"),
      [b, _] = p.useState("1"),
      [k, d] = p.useState(""),
      [u, y] = p.useState(null),
      [D, $] = p.useState(0),
      [I, R] = p.useState(0),
      [G, oe] = p.useState(!1);
    p.useEffect(() => {
      e &&
        (h("dispensing_shelves"),
        S("1"),
        _("1"),
        d(""),
        y(null),
        $(0),
        R(0),
        oe(!1));
    }, [e]),
      p.useEffect(() => {
        u && ($(u.row), R(u.col));
      }, [u]);
    const P = () => {
        const X = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((re) => {
              re.gird_position && X.add(re.gird_position);
            }),
          X
        );
      },
      z = () => {
        const X = P(),
          re = [];
        if (X.size === 0) return re.push({ row: 0, col: 0 }), re;
        const be = [];
        X.forEach((ke) => {
          const [ue, V] = ke.split(",").map(Number);
          be.push({ row: ue, col: V });
        });
        const de = new Set();
        return (
          be.forEach(({ row: ke, col: ue }) => {
            de.add(`${ke},${ue + 1}`),
              de.add(`${ke + 1},${ue}`),
              ue > 0 && de.add(`${ke},${ue - 1}`),
              ke > 0 && de.add(`${ke - 1},${ue}`);
          }),
          de.forEach((ke) => {
            if (!X.has(ke)) {
              const [ue, V] = ke.split(",").map(Number);
              ue >= 0 && V >= 0 && re.push({ row: ue, col: V });
            }
          }),
          X.has("0,1") ||
            re.some((ue) => ue.row === 0 && ue.col === 1) ||
            re.push({ row: 0, col: 1 }),
          X.has("1,0") ||
            re.some((ue) => ue.row === 1 && ue.col === 0) ||
            re.push({ row: 1, col: 0 }),
          re.sort((ke, ue) =>
            ke.row === ue.row ? ke.col - ue.col : ke.row - ue.row
          )
        );
      },
      Z = (X) => {
        y(X);
      },
      M = (X) => {
        $(X), y({ row: X, col: I });
      },
      w = (X) => {
        R(X), y({ row: D, col: X });
      },
      H = u && !P().has(`${u.row},${u.col}`) && u.row >= 0 && u.col >= 0,
      x = async () => {
        if (!(!u || !n || !H)) {
          oe(!0);
          try {
            const X = `${u.row},${u.col}`,
              re = bc.find((de) => de.value === m);
            let be;
            re != null && re.isShelf
              ? (be = await De.addMedMapShelf({
                  Master_GUID: n.GUID,
                  position: X,
                  width: f,
                  height: b,
                  ip_light: k,
                  type: m,
                }))
              : (be = await De.addMedMapDrawer({
                  Master_GUID: n.GUID,
                  position: X,
                  width: f,
                  height: b,
                  ip_drawer: k,
                  type: m,
                })),
              be.Code === 200
                ? (a("新增成功", "success"), t(), c(!1), await N())
                : a(`新增失敗：${be.Result || "未知錯誤"}`, "error");
          } catch (X) {
            console.error("Add container failed:", X),
              a("新增失敗：網路錯誤", "error");
          } finally {
            oe(!1);
          }
        }
      },
      N = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const X = await De.getMedMapByDepartment(s);
          if (X.Code === 200 && X.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const re = $t.convertMedMapApiToFakeData(X.Data);
            if (!$t.validateConvertedData(re)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(re), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", X),
              a("資料更新失敗：API 錯誤", "error");
        } catch (X) {
          console.error("💥 重新獲取藥品地圖資料失敗:", X),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      j = () => {
        t();
      },
      F = () => {
        const X = P(),
          re = z(),
          be = [...X]
            .map((T) => {
              const [ie, U] = T.split(",").map(Number);
              return { row: ie, col: U };
            })
            .concat(re);
        be.length === 0 && be.push({ row: 0, col: 0 });
        const de = Math.max(...be.map((T) => T.row)),
          ke = Math.max(...be.map((T) => T.col)),
          ue = Math.min(...be.map((T) => T.row)),
          V = Math.min(...be.map((T) => T.col)),
          ge = de - ue + 1,
          je = ke - V + 1;
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
                style: { gridTemplateColumns: `repeat(${je}, 1fr)` },
                children: Array.from({ length: ge * je }, (T, ie) => {
                  const U = Math.floor(ie / je) + ue,
                    E = (ie % je) + V,
                    ne = `${U},${E}`,
                    ce = X.has(ne),
                    B = re.some((A) => A.row === U && A.col === E),
                    C =
                      (u == null ? void 0 : u.row) === U &&
                      (u == null ? void 0 : u.col) === E;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => B && Z({ row: U, col: E }),
                      disabled: ce || !B,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      ce
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : C
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : B
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: ce ? "已占用" : B ? "可選擇" : "不可用",
                      children: ce ? "占用" : `${U},${E}`,
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
              onClick: j,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "1000px" },
              onClick: (X) => X.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(vt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增層架/抽屜",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: j,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ve, { className: "w-6 h-6" }),
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
                            children: bc.map((X) =>
                              r.jsxs(
                                "label",
                                {
                                  className: `flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                    m === X.value
                                      ? "border-blue-500 bg-blue-50"
                                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                  }`,
                                  children: [
                                    r.jsx("input", {
                                      type: "radio",
                                      name: "containerType",
                                      value: X.value,
                                      checked: m === X.value,
                                      onChange: (re) => h(re.target.value),
                                      className:
                                        "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                    }),
                                    r.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        X.icon,
                                        r.jsx("span", {
                                          className:
                                            "font-medium text-gray-900",
                                          children: X.label,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                X.value
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
                                value: f,
                                onChange: (X) => S(X.target.value),
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
                                onChange: (X) => _(X.target.value),
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
                            onChange: (X) => d(X.target.value),
                            placeholder: "請輸入 IP 位址",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                          }),
                        ],
                      }),
                      F(),
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
                                    onChange: (X) =>
                                      M(parseInt(X.target.value) || 0),
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
                                    value: I,
                                    onChange: (X) =>
                                      w(parseInt(X.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u &&
                            r.jsx("div", {
                              className: `text-sm p-2 rounded ${
                                H
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: H
                                ? `已選擇位置：${u.row},${u.col}`
                                : `位置 ${u.row},${u.col} 已被占用或無效`,
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
                                  ((ae = n == null ? void 0 : n.contents) ==
                                  null
                                    ? void 0
                                    : ae.length) || 0,
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
                      onClick: j,
                      disabled: G,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: g("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: x,
                      disabled: !H || G,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        G && r.jsx(jt, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: G ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  Mh = () => {
    var Z;
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
      } = Xe(),
      { t: g } = gt(),
      [m, h] = p.useState(null),
      [f, S] = p.useState(0),
      [b, _] = p.useState(0),
      [k, d] = p.useState(!1);
    p.useEffect(() => {
      e && (h(null), S(0), _(0), d(!1));
    }, [e]),
      p.useEffect(() => {
        m && (S(m.row), _(m.col));
      }, [m]);
    const u = () => {
        const M = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((w) => {
              w.type === "sub_container" &&
                w.gird_position &&
                M.add(w.gird_position);
            }),
          M
        );
      },
      y = () => {
        const M = u(),
          w = [];
        if (M.size === 0) return w.push({ row: 0, col: 0 }), w;
        const H = [];
        M.forEach((N) => {
          const [j, F] = N.split(",").map(Number);
          H.push({ row: j, col: F });
        });
        const x = new Set();
        return (
          H.forEach(({ row: N, col: j }) => {
            x.add(`${N},${j + 1}`),
              x.add(`${N + 1},${j}`),
              j > 0 && x.add(`${N},${j - 1}`),
              N > 0 && x.add(`${N - 1},${j}`);
          }),
          x.forEach((N) => {
            if (!M.has(N)) {
              const [j, F] = N.split(",").map(Number);
              j >= 0 && F >= 0 && w.push({ row: j, col: F });
            }
          }),
          M.has("0,1") ||
            w.some((j) => j.row === 0 && j.col === 1) ||
            w.push({ row: 0, col: 1 }),
          M.has("1,0") ||
            w.some((j) => j.row === 1 && j.col === 0) ||
            w.push({ row: 1, col: 0 }),
          w.sort((N, j) => (N.row === j.row ? N.col - j.col : N.row - j.row))
        );
      },
      D = (M) => {
        h(M);
      },
      $ = (M) => {
        S(M), h({ row: M, col: b });
      },
      I = (M) => {
        _(M), h({ row: f, col: M });
      },
      R = m && !u().has(`${m.row},${m.col}`) && m.row >= 0 && m.col >= 0,
      G = async () => {
        if (!(!m || !n || !R)) {
          d(!0);
          try {
            const M = `${m.row},${m.col}`,
              w = await De.addSubSection(n.GUID, M);
            w.Code === 200
              ? (a("新增成功", "success"), t(), c(!1), await oe())
              : a(`新增失敗：${w.Result || "未知錯誤"}`, "error");
          } catch (M) {
            console.error("Add sub container failed:", M),
              a("新增失敗：網路錯誤", "error");
          } finally {
            d(!1);
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
          const M = await De.getMedMapByDepartment(s);
          if (M.Code === 200 && M.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const w = $t.convertMedMapApiToFakeData(M.Data);
            if (!$t.validateConvertedData(w)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(w), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", M),
              a("資料更新失敗：API 錯誤", "error");
        } catch (M) {
          console.error("💥 重新獲取藥品地圖資料失敗:", M),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      P = () => {
        t();
      },
      z = () => {
        const M = u(),
          w = y(),
          H = [...M]
            .map((re) => {
              const [be, de] = re.split(",").map(Number);
              return { row: be, col: de };
            })
            .concat(w);
        H.length === 0 && H.push({ row: 0, col: 0 });
        const x = Math.max(...H.map((re) => re.row)),
          N = Math.max(...H.map((re) => re.col)),
          j = Math.min(...H.map((re) => re.row)),
          F = Math.min(...H.map((re) => re.col)),
          ae = x - j + 1,
          X = N - F + 1;
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
                style: { gridTemplateColumns: `repeat(${X}, 1fr)` },
                children: Array.from({ length: ae * X }, (re, be) => {
                  const de = Math.floor(be / X) + j,
                    ke = (be % X) + F,
                    ue = `${de},${ke}`,
                    V = M.has(ue),
                    ge = w.some((T) => T.row === de && T.col === ke),
                    je =
                      (m == null ? void 0 : m.row) === de &&
                      (m == null ? void 0 : m.col) === ke;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => ge && D({ row: de, col: ke }),
                      disabled: V || !ge,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      V
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : je
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : ge
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: V ? "已占用" : ge ? "可選擇" : "不可用",
                      children: V ? "占用" : `${de},${ke}`,
                    },
                    ue
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
              onClick: P,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "800px" },
              onClick: (M) => M.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(vt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增虛擬容器",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: P,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ve, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      z(),
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
                                    value: f,
                                    onChange: (M) =>
                                      $(parseInt(M.target.value) || 0),
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
                                    onChange: (M) =>
                                      I(parseInt(M.target.value) || 0),
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
                                R
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: R
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
                                  ((Z = n == null ? void 0 : n.contents) == null
                                    ? void 0
                                    : Z.filter(
                                        (M) => M.type === "sub_container"
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
                      onClick: P,
                      disabled: k,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: g("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: G,
                      disabled: !R || k,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        k && r.jsx(jt, { className: "w-4 h-4 animate-spin" }),
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
  Eh = ({ isOpen: e, onClose: t, storeShelf: n }) => {
    const {
        showNotification: s,
        medicineList: o,
        isLoadingMedicines: l,
        addStockToShelf: a,
        selectedStockItemForEdit: i,
        storeItemModalMode: c,
        updateStockInShelf: g,
      } = Xe(),
      [m, h] = p.useState(""),
      [f, S] = p.useState(""),
      [b, _] = p.useState(""),
      [k, d] = p.useState(""),
      [u, y] = p.useState([]),
      [D, $] = p.useState([]),
      [I, R] = p.useState(""),
      [G, oe] = p.useState(""),
      [P, z] = p.useState(""),
      [Z, M] = p.useState(null),
      [w, H] = p.useState([]),
      [x, N] = p.useState(""),
      [j, F] = p.useState(!1),
      ae = p.useRef(null);
    p.useEffect(() => {
      if (e && c === "edit" && i) {
        h(i.code || ""), S(i.name || ""), _(""), d(i.material_no || "");
        const T = i.lot || [],
          ie = i.expiry_date || [],
          U = i.qty || [],
          E = [];
        if (T.length > 0 || ie.length > 0 || U.length > 0) {
          const ne = Math.max(T.length, ie.length, U.length),
            ce = [];
          for (let B = 0; B < ne; B++) {
            const C = ie[B] || "";
            let A = "";
            C && (A = C.split("T")[0]),
              (A = A.replace(/\//g, "-")),
              ce.push({
                id: `batch_${Date.now()}_${B}`,
                lot: T[B] || "",
                expiryDate: A,
                qty: String(U[B] || ""),
              }),
              A && E.push(A);
          }
          y(ce), $(E);
        } else y([]), $([]);
        R(i.location || ""), oe(i.led_index || ""), z(i.ip || "");
      } else if (e && c === "add")
        if (
          (h(""),
          S(""),
          _(""),
          d(""),
          y([]),
          $([]),
          oe(""),
          z(""),
          n && n.medMapStock && n.medMapStock.length > 0)
        ) {
          const T = n.medMapStock.map((U) => Number(U.location));
          let ie = 0;
          for (; T.includes(ie); ) ie++;
          R(String(ie));
        } else R("0");
    }, [e, c, i, n]),
      p.useEffect(() => {
        const T = (ie) => {
          ae.current && !ae.current.contains(ie.target) && M(null);
        };
        return (
          document.addEventListener("mousedown", T),
          () => {
            document.removeEventListener("mousedown", T);
          }
        );
      }, []);
    const X = (T, ie) => {
        if (!ie.trim()) {
          H([]);
          return;
        }
        const U = ie.toLowerCase(),
          E = o.filter((ne) => {
            var ce, B, C, A;
            switch (T) {
              case "code":
                return (ce = ne.CODE) == null
                  ? void 0
                  : ce.toLowerCase().includes(U);
              case "name":
                return (B = ne.NAME) == null
                  ? void 0
                  : B.toLowerCase().includes(U);
              case "chineseName":
                return (C = ne.CHT_NAME) == null
                  ? void 0
                  : C.toLowerCase().includes(U);
              case "skdiacode":
                return (A = ne.SKDIACODE) == null
                  ? void 0
                  : A.toLowerCase().includes(U);
              default:
                return !1;
            }
          });
        H(E.slice(0, 50));
      },
      re = (T, ie) => {
        switch ((M(T), T)) {
          case "code":
            h(ie);
            break;
          case "name":
            S(ie);
            break;
          case "chineseName":
            _(ie);
            break;
          case "skdiacode":
            d(ie);
            break;
        }
        X(T, ie);
      },
      be = (T, ie) => {
        switch (ie) {
          case "code":
            h(T.CODE || ""),
              S(T.NAME || ""),
              _(T.CHT_NAME || ""),
              d(T.SKDIACODE || "");
            break;
          case "name":
            h(T.CODE || ""),
              S(T.NAME || ""),
              _(T.CHT_NAME || ""),
              d(T.SKDIACODE || "");
            break;
          case "chineseName":
            h(T.CODE || ""),
              S(T.NAME || ""),
              _(T.CHT_NAME || ""),
              d(T.SKDIACODE || "");
            break;
          case "skdiacode":
            h(T.CODE || ""),
              S(T.NAME || ""),
              _(T.CHT_NAME || ""),
              d(T.SKDIACODE || "");
            break;
        }
        N(T.GUID), M(null), H([]);
      },
      de = () => {
        const T = {
          id: `batch_${Date.now()}`,
          lot: "",
          expiryDate: "",
          qty: "",
        };
        y([...u, T]);
      },
      ke = (T) => {
        y(u.filter((ie) => ie.id !== T));
      },
      ue = (T, ie, U) => {
        y(u.map((E) => (E.id === T ? { ...E, [ie]: U } : E)));
      },
      V = async () => {
        var E;
        if (!m || !f) {
          s("請選擇藥品", "error");
          return;
        }
        if (!n || !n.GUID) {
          s("層架資訊錯誤", "error");
          return;
        }
        const T = [],
          ie = [],
          U = [];
        u.forEach((ne) => {
          T.push(ne.lot || "");
          let ce = "";
          ne.expiryDate && (ce = `${ne.expiryDate}`),
            ie.push(ce),
            U.push(ne.qty ? `${Number(ne.qty)}` : "0");
        });
        try {
          if (c === "edit" && i) {
            const ne = {
                GUID: i.GUID,
                code: m,
                device_type: "EPD290",
                expiry_date: ie,
                ip_light: P || "",
                led_index: G || "",
                location: I || "",
                lot: T,
                material_no: k || "",
                name: f,
                qty: U,
                shelf_guid: n.GUID,
              },
              ce = await De.updateStock([ne]);
            if (ce.Code === 200) {
              g(n.GUID, i.GUID, ne), console.log("檢查有無貨物批次被刪除");
              const B = D.filter((C) => !ie.includes(C));
              if ((console.log(B), B.length > 0)) {
                console.log("🗑️ 檢測到被刪除的批次效期:", B);
                let C = "";
                try {
                  i.Value &&
                    ((C = JSON.parse(i.Value).GUID || ""),
                    console.log("📦 從 Value 欄位解析出的 GUID:", C));
                } catch (A) {
                  console.error("❌ 解析 Value 欄位失敗:", A);
                }
                if (C) {
                  for (const A of B)
                    try {
                      console.log(`🗑️ 正在刪除批次，GUID: ${C}, 效期: ${A}`);
                      const q = await De.stockDeleteValidityPeriod(C, A);
                      q.Code === 200
                        ? console.log(`✅ 成功刪除批次效期: ${A}`)
                        : console.warn(
                            `⚠️ 刪除批次失敗 (效期: ${A}):`,
                            q.Result
                          );
                    } catch (q) {
                      console.error(`❌ 刪除批次時發生錯誤 (效期: ${A}):`, q);
                    }
                  s(`更新貨物成功，已刪除 ${B.length} 個批次`, "success");
                } else
                  console.warn("⚠️ 無法取得 Value GUID，跳過批次刪除"),
                    s("更新貨物成功（但無法刪除批次）", "success");
              } else s("更新貨物成功", "success");
              je();
            } else s(ce.Result || "更新貨物失敗", "error");
          } else {
            const ne = {
                code: m,
                device_type: "EPD290",
                expiry_date: ie,
                ip_light: P || "",
                led_index: G || "",
                location: I || "",
                lot: T,
                material_no: k || "",
                name: f,
                qty: U,
                shelf_guid: n.GUID,
              },
              ce = await De.addStock([ne]);
            ce.Code === 200
              ? (a(n.GUID, {
                  GUID:
                    ((E = ce.Data) == null ? void 0 : E.GUID) ||
                    `stock_${Date.now()}`,
                  ...ne,
                }),
                s("新增貨物成功", "success"),
                je())
              : s(ce.Result || "新增貨物失敗", "error");
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
      ge = (T, ie) => {
        console.log("📸 掃描成功，填入藥品資料:", ie),
          h(ie[0].CODE || ie[0].code || ""),
          S(ie[0].NAME || ie[0].name || ""),
          _(ie[0].CHT_NAME || ie[0].cht_name || ""),
          d(ie[0].SKDIACODE || ie[0].skdiacode || ie[0].material_no || ""),
          N(ie[0].GUID || ""),
          F(!1),
          s("已自動填入藥品資料", "success");
      },
      je = () => {
        h(""),
          S(""),
          _(""),
          d(""),
          y([]),
          $([]),
          R(""),
          oe(""),
          z(""),
          N(""),
          H([]),
          M(null),
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
                      onClick: je,
                      className:
                        "p-2 hover:bg-gray-100 rounded-full transition-colors",
                      children: r.jsx(Ve, { className: "w-5 h-5" }),
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
                                    onClick: () => F(!0),
                                    className:
                                      "hover:bg-gray-100 rounded-lg transition-colors p-2",
                                    title: "掃描條碼",
                                    children: r.jsx(Mr, {
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
                                    ref: Z === "code" ? ae : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥碼",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: m,
                                        onChange: (T) =>
                                          re("code", T.target.value),
                                        onFocus: () => M("code"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品代碼",
                                      }),
                                      Z === "code" &&
                                        w.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: w.map((T) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () => be(T, "code"),
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
                                                        children: T.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: T.NAME,
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
                                                        children: T.CHT_NAME,
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
                                                          T.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              T.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: Z === "name" ? ae : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥名",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: f,
                                        onChange: (T) =>
                                          re("name", T.target.value),
                                        onFocus: () => M("name"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品名稱",
                                      }),
                                      Z === "name" &&
                                        w.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: w.map((T) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () => be(T, "name"),
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
                                                        children: T.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: T.NAME,
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
                                                        children: T.CHT_NAME,
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
                                                          T.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              T.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: Z === "chineseName" ? ae : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "中文名",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: b,
                                        onChange: (T) =>
                                          re("chineseName", T.target.value),
                                        onFocus: () => M("chineseName"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入中文名稱",
                                      }),
                                      Z === "chineseName" &&
                                        w.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: w.map((T) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  be(T, "chineseName"),
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
                                                        children: T.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: T.NAME,
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
                                                        children: T.CHT_NAME,
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
                                                          T.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              T.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: Z === "skdiacode" ? ae : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "料號",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: k,
                                        onChange: (T) =>
                                          re("skdiacode", T.target.value),
                                        onFocus: () => M("skdiacode"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入料號",
                                      }),
                                      Z === "skdiacode" &&
                                        w.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: w.map((T) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  be(T, "skdiacode"),
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
                                                        children: T.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: T.NAME,
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
                                                        children: T.CHT_NAME,
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
                                                          T.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              T.GUID
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
                                    onClick: de,
                                    className:
                                      "flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
                                    title: "新增批次",
                                    children: [
                                      r.jsx(vt, { className: "w-4 h-4" }),
                                      "新增批次",
                                    ],
                                  }),
                                ],
                              }),
                              u.length === 0
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
                                    children: u.map((T, ie) =>
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
                                                  children: ["批次 ", ie + 1],
                                                }),
                                                r.jsx("button", {
                                                  onClick: () => ke(T.id),
                                                  className:
                                                    "p-1 text-red-600 hover:bg-red-50 rounded transition-colors",
                                                  title: "刪除批次",
                                                  children: r.jsx(zu, {
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
                                                      value: T.lot,
                                                      onChange: (U) =>
                                                        ue(
                                                          T.id,
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
                                                      value: T.expiryDate,
                                                      onChange: (U) =>
                                                        ue(
                                                          T.id,
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
                                                      value: T.qty,
                                                      onChange: (U) =>
                                                        ue(
                                                          T.id,
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
                                        T.id
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
                                        value: I,
                                        onChange: (T) => R(T.target.value),
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
                                        value: G,
                                        onChange: (T) => oe(T.target.value),
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
                                        value: P,
                                        onChange: (T) => z(T.target.value),
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
                      onClick: je,
                      className:
                        "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: V,
                      disabled: l || o.length === 0,
                      className:
                        "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400",
                      children: c === "edit" ? "修改" : "新增",
                    }),
                  ],
                }),
              ],
            }),
            r.jsx(Ho, {
              isOpen: j,
              onClose: () => F(!1),
              onScanSuccess: ge,
              mode: "set_store_med_mode",
            }),
          ],
        })
      : null;
  },
  Ih = ({ isOpen: e, onClose: t }) => {
    const {
        selectedDepartmentType: n,
        apiDepartmentData: s,
        allDepartmentsList: o,
        showNotification: l,
        triggerRefresh: a,
        reloadMedMapData: i,
      } = Xe(),
      [c, g] = p.useState(null),
      [m, h] = p.useState(""),
      [f, S] = p.useState(!1),
      b = () => (s ? s.map((R) => R.name) : []),
      _ = () => (!n || !o ? [] : o.filter((R) => R["department_type "] === n)),
      k = () => {
        const R = b();
        return _().filter((oe) => !R.includes(oe.name));
      },
      d = () => (s ? s.map((R) => R.gird_position) : []),
      u = () => {
        const R = d(),
          G = [];
        for (let oe = 0; oe < 10; oe++)
          for (let P = 0; P < 10; P++) {
            const z = `${oe},${P}`;
            R.includes(z) || G.push(z);
          }
        return G.slice(0, 20);
      };
    p.useEffect(() => {
      e && (g(null), h(""));
    }, [e]);
    const y = async () => {
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
        S(!0);
        try {
          const R = await De.addMedMap(c.name, c.type, m);
          R.Code === 200
            ? (l("新增部門成功", "success"), await i(), D())
            : l(R.Result || "新增部門失敗", "error");
        } catch (R) {
          console.error("新增部門錯誤:", R),
            l("新增部門失敗，請稍後再試", "error");
        } finally {
          S(!1);
        }
      },
      D = () => {
        g(null), h(""), t();
      };
    if (!e) return null;
    const $ = k(),
      I = u();
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
                children: r.jsx(Ve, { className: "w-5 h-5" }),
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
                  $.length === 0
                    ? r.jsx("div", {
                        className: "text-center py-8",
                        children: r.jsx("p", {
                          className: "text-gray-600",
                          children: "所有部門都已新增",
                        }),
                      })
                    : r.jsx("div", {
                        className: "space-y-2",
                        children: $.map((R) =>
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
                                  onChange: () => g(R),
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
                    I.length === 0
                      ? r.jsx("div", {
                          className: "text-center py-8",
                          children: r.jsx("p", {
                            className: "text-gray-600",
                            children: "沒有可用的位置",
                          }),
                        })
                      : r.jsx("div", {
                          className: "grid grid-cols-5 gap-2",
                          children: I.map((R) => {
                            const [G, oe] = R.split(",");
                            return r.jsxs(
                              "button",
                              {
                                onClick: () => h(R),
                                className: `p-3 border-2 rounded-lg text-sm font-medium transition-all ${
                                  m === R
                                    ? "border-blue-500 bg-blue-500 text-white"
                                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700"
                                }`,
                                children: ["(", G, ",", oe, ")"],
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
                onClick: D,
                className:
                  "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                disabled: f,
                children: "取消",
              }),
              r.jsx("button", {
                onClick: y,
                disabled: !c || !m || f,
                className:
                  "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                children: f ? "新增中..." : "新增",
              }),
            ],
          }),
        ],
      }),
    });
  },
  Ph = ({ isOpen: e, onClose: t, initialBarcode: n = "" }) => {
    const {
        showNotification: s,
        medicineList: o,
        isLoadingMedicines: l,
      } = Xe(),
      [a, i] = p.useState(""),
      [c, g] = p.useState(""),
      [m, h] = p.useState(""),
      [f, S] = p.useState(""),
      [b, _] = p.useState(""),
      [k, d] = p.useState(null),
      [u, y] = p.useState([]),
      [D, $] = p.useState(""),
      [I, R] = p.useState(null),
      [G, oe] = p.useState(!1),
      P = p.useRef(null);
    p.useEffect(() => {
      e && (i(n), g(""), h(""), S(""), _(""), $(""), R(null), d(null));
    }, [e, n]),
      p.useEffect(() => {
        const x = (N) => {
          P.current && !P.current.contains(N.target) && d(null);
        };
        return (
          document.addEventListener("mousedown", x),
          () => {
            document.removeEventListener("mousedown", x);
          }
        );
      }, []);
    const z = (x, N) => {
        if (!N.trim() || l) {
          y([]);
          return;
        }
        const j = N.toLowerCase(),
          F = o.filter((ae) => {
            var X, re, be, de;
            switch (x) {
              case "code":
                return (X = ae.CODE) == null
                  ? void 0
                  : X.toLowerCase().includes(j);
              case "name":
                return (re = ae.NAME) == null
                  ? void 0
                  : re.toLowerCase().includes(j);
              case "chineseName":
                return (be = ae.CHT_NAME) == null
                  ? void 0
                  : be.toLowerCase().includes(j);
              case "skdiacode":
                return (de = ae.SKDIACODE) == null
                  ? void 0
                  : de.toLowerCase().includes(j);
              default:
                return !1;
            }
          });
        y(F.slice(0, 10));
      },
      Z = (x, N) => {
        switch ((d(x), x)) {
          case "code":
            g(N);
            break;
          case "name":
            h(N);
            break;
          case "chineseName":
            S(N);
            break;
          case "skdiacode":
            _(N);
            break;
        }
        z(x, N);
      },
      M = (x) => {
        $(x.GUID),
          R(x),
          g(x.CODE || ""),
          h(x.NAME || ""),
          S(x.CHT_NAME || ""),
          _(x.SKDIACODE || ""),
          d(null),
          y([]);
      },
      w = () => {
        i(""), g(""), h(""), S(""), _(""), $(""), R(null), d(null), y([]), t();
      },
      H = async () => {
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
          let x = [];
          if (I && I.BARCODE2)
            try {
              const j = JSON.parse(I.BARCODE2);
              Array.isArray(j)
                ? (x = [...j])
                : typeof j == "string" && (x = [j]);
            } catch {
              console.warn("解析 BARCODE2 失敗，使用原始值:", I.BARCODE2),
                I.BARCODE2 && (x = [I.BARCODE2]);
            }
          x.includes(a.trim()) || x.push(a.trim()),
            console.log("📋 處理後的 BARCODE2 陣列:", x);
          const N = await De.addMedClouds(
            a.trim(),
            c.trim(),
            JSON.stringify(x),
            I.BARCODE
          );
          N.Code === 200
            ? (s("條碼建立成功", "success"), w())
            : s(N.Result || "建立條碼失敗", "error");
        } catch (x) {
          console.error("建立條碼失敗:", x),
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
                        children: r.jsx(vt, {
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
                    onClick: w,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                    disabled: G,
                    children: r.jsx(Ve, { className: "w-6 h-6 text-gray-600" }),
                  }),
                ],
              }),
              r.jsx("div", {
                className: "flex-1 overflow-y-auto p-6",
                children: r.jsxs("div", {
                  className: "space-y-4",
                  ref: P,
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
                          onChange: (x) => Z("code", x.target.value),
                          onFocus: () => d("code"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥碼搜尋...",
                          disabled: G,
                        }),
                        k === "code" &&
                          u.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: u.map((x) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => M(x),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: x.CODE,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: x.NAME,
                                    }),
                                  ],
                                },
                                x.GUID
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
                          onChange: (x) => Z("name", x.target.value),
                          onFocus: () => d("name"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥名搜尋...",
                          disabled: G,
                        }),
                        k === "name" &&
                          u.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: u.map((x) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => M(x),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: x.NAME,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: x.CODE,
                                    }),
                                  ],
                                },
                                x.GUID
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
                          value: f,
                          onChange: (x) => Z("chineseName", x.target.value),
                          onFocus: () => d("chineseName"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入中文名搜尋...",
                          disabled: G,
                        }),
                        k === "chineseName" &&
                          u.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: u.map((x) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => M(x),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: x.CHT_NAME,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: x.CODE,
                                    }),
                                  ],
                                },
                                x.GUID
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
                          onChange: (x) => Z("skdiacode", x.target.value),
                          onFocus: () => d("skdiacode"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入料號搜尋...",
                          disabled: G,
                        }),
                        k === "skdiacode" &&
                          u.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: u.map((x) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => M(x),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: x.SKDIACODE,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: x.NAME,
                                    }),
                                  ],
                                },
                                x.GUID
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
                      onClick: w,
                      disabled: G,
                      className:
                        "px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: H,
                      disabled: G || !c.trim(),
                      className:
                        "px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: G ? "建立中..." : "確認建立",
                    }),
                  ],
                }),
              }),
            ],
          }),
        })
      : null;
  },
  Th = ({
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
        const [f, S] = h.split(",").map(Number);
        return { row: f || 0, col: S || 0 };
      },
      a = (h) => {
        if (!h || h.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const f = h.map((k) => ({
            ...k,
            gridPos: l(k.gird_position || "0,0"),
          })),
          S = Math.max(...f.map((k) => k.gridPos.row), 0),
          b = Math.max(...f.map((k) => k.gridPos.col), 0);
        return {
          sortedContents: f.sort((k, d) =>
            k.gridPos.row !== d.gridPos.row
              ? k.gridPos.row - d.gridPos.row
              : k.gridPos.col - d.gridPos.col
          ),
          maxRow: S,
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
        const f = [
          "med_box",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
        ].includes(h.type);
        return r.jsx(
          "div",
          {
            className: `${f ? "shadow-sm border-2 p-1 rounded-lg" : ""} ${i(
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
      g = (h, f, S) => {
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
              children: Array.from({ length: f + 1 }, (_, k) =>
                r.jsx(
                  "tr",
                  {
                    children: Array.from({ length: S + 1 }, (d, u) => {
                      const y = `${k},${u}`,
                        D = b[y];
                      return D
                        ? r.jsx(
                            "td",
                            {
                              className:
                                "align-top bg-transparent overflow-hidden",
                              style: {
                                width: `${100 / (S + 1)}%`,
                                maxWidth: `${100 / (S + 1)}%`,
                              },
                              children: c(D),
                            },
                            u
                          )
                        : r.jsx(
                            "td",
                            {
                              className:
                                "align-top bg-transparent overflow-hidden",
                              style: {
                                width: `${100 / (S + 1)}%`,
                                maxWidth: `${100 / (S + 1)}%`,
                              },
                              children: r.jsx("div", {
                                className:
                                  "w-full h-full flex items-center justify-center text-gray-300 text-xs border border-dashed border-gray-200 rounded overflow-hidden",
                                children: "空位",
                              }),
                            },
                            u
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
              const { sortedContents: f, maxRow: S, maxCol: b } = a(h.contents);
              return g(f, S, b);
            } else return r.jsx("div", { className: "" });
          case "sub_container":
            if (h.contents && h.contents.length > 0) {
              const { sortedContents: f, maxRow: S, maxCol: b } = a(h.contents);
              return g(f, S, b);
            } else return r.jsx("div", { className: "" });
          case "dispensing_shelves":
            if (h.contents && h.contents.length > 0) {
              const { sortedContents: f, maxRow: S, maxCol: b } = a(h.contents);
              return g(f, S, b);
            } else
              return r.jsx("div", {
                className:
                  "border-2 rounded-lg flex py-3 items-center justify-center h-full text-gray-400 text-sm",
                children: "無藥盒",
              });
          case "store_shelves":
            if (h.medMapStock && h.medMapStock.length > 0) {
              const f = h.medMapStock,
                S = f.length,
                b = S > 0 ? 100 / S : 100;
              return r.jsx("div", {
                className: "flex h-full w-full overflow-hidden",
                children: f.map((_, k) => {
                  let d = 0;
                  _.qty.forEach(($) => {
                    d += +$;
                  });
                  const u = t && (_.code == t || _.material_no == t),
                    y = n.includes(_.code) || n.includes(_.material_no),
                    D = o();
                  return r.jsxs(
                    "div",
                    {
                      className: `border-2 rounded-lg border-gray-300 p-2 flex flex-col text-gray-800 justify-center items-center transition-colors cursor-pointer min-w-0 overflow-hidden ${
                        y
                          ? "highlight-breathe-red"
                          : u
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
                          children: ["數量: ", d || 0],
                        }),
                      ],
                    },
                    _.GUID || k
                  );
                }),
              });
            } else if (h.contents && h.contents.length > 0) {
              const { sortedContents: f, maxRow: S, maxCol: b } = a(h.contents);
              return g(f, S, b);
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
              const f = t && h.med_info.some((_) => _.code == t),
                S = h.med_info.some((_) => n.includes(_.code)),
                b = o();
              return r.jsx("div", {
                className: `text-sm text-center h-full p-2 flex flex-col text-gray-800 justify-center transition-colors cursor-pointer overflow-hidden ${
                  S
                    ? "highlight-breathe-red"
                    : f
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
              const { sortedContents: f, maxRow: S, maxCol: b } = a(h.contents);
              return g(f, S, b);
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
  Rh = ({ isOpen: e, onClose: t, type: n, data: s, onApprove: o }) => {
    const [l, a] = p.useState("0"),
      [i, c] = p.useState("0"),
      [g, m] = p.useState(null),
      [h, f] = p.useState(null),
      [S, b] = p.useState(!1),
      [_, k] = p.useState(!1),
      [d, u] = p.useState(""),
      [y, D] = p.useState(""),
      [$, I] = p.useState([]),
      [R, G] = p.useState([]),
      [oe, P] = p.useState([]),
      [z, Z] = p.useState(!1),
      [M, w] = p.useState(!1),
      H = p.useRef(null),
      x = p.useRef(null),
      N = p.useRef(null),
      j = p.useRef(null);
    p.useEffect(() => {
      if (e && s) {
        const E = s.issuedQuantity || s.requestedQuantity || "0";
        a(E), c(E), m(null), f(null), b(!1);
        const ne = localStorage.getItem("medMap_setting");
        if (ne)
          try {
            const ce = JSON.parse(ne);
            u(ce.default_person || ""), D(ce.default_person_id || "");
          } catch (ce) {
            console.error("讀取設定失敗:", ce), u(""), D("");
          }
        else u(""), D("");
        F();
      }
    }, [e, s]),
      p.useEffect(() => {
        const E = (ne) => {
          N.current &&
            !N.current.contains(ne.target) &&
            H.current &&
            !H.current.contains(ne.target) &&
            Z(!1),
            j.current &&
              !j.current.contains(ne.target) &&
              x.current &&
              !x.current.contains(ne.target) &&
              w(!1);
        };
        return (
          document.addEventListener("mousedown", E),
          () => document.removeEventListener("mousedown", E)
        );
      }, []);
    const F = async () => {
        try {
          const E = await De.getAllStaffInfo();
          E.Code === 200 && E.Data && I(E.Data);
        } catch (E) {
          console.error("獲取人員資料失敗:", E);
        }
      },
      ae = (E) => {
        if ((u(E), E.trim() === "")) {
          G([]), Z(!1);
          return;
        }
        const ne = $.filter(
          (ce) => ce.name && ce.name.toLowerCase().includes(E.toLowerCase())
        );
        G(ne), Z(ne.length > 0);
      },
      X = (E) => {
        if ((D(E), E.trim() === "")) {
          P([]), w(!1);
          return;
        }
        const ne = $.filter(
          (ce) => ce.ID && ce.ID.toLowerCase().includes(E.toLowerCase())
        );
        P(ne), w(ne.length > 0);
      },
      re = (E) => {
        u(E.name), D(E.ID), Z(!1);
      },
      be = (E) => {
        u(E.name), D(E.ID), w(!1);
      };
    if (!e || !s) return null;
    const de = (E) => {
        if (S) a(E), c(E), b(!1);
        else {
          const ne = l === "0" ? E : l + E;
          a(ne), c(ne);
        }
      },
      ke = (E) => {
        g && h !== null && !S && ue(), f(i), m(E), b(!0);
      },
      ue = () => {
        if (g === null || h === null) return;
        const E = parseFloat(h),
          ne = parseFloat(i);
        let ce = 0;
        switch (g) {
          case "+":
            ce = E + ne;
            break;
          case "-":
            ce = E - ne;
            break;
          case "×":
            ce = E * ne;
            break;
          case "÷":
            ce = ne !== 0 ? E / ne : 0;
            break;
          default:
            return;
        }
        const B = ce.toString();
        a(B), c(B), m(null), f(null), b(!0);
      },
      V = () => {
        ue();
      },
      ge = () => {
        if (S) a("0."), c("0."), b(!1);
        else if (!l.includes(".")) {
          const E = l + ".";
          a(E), c(E);
        }
      },
      je = () => {
        a("0"), c("0"), m(null), f(null), b(!1);
      },
      T = () => {
        const E = new Date(),
          ne = E.getFullYear(),
          ce = String(E.getMonth() + 1).padStart(2, "0"),
          B = String(E.getDate()).padStart(2, "0"),
          C = String(E.getHours()).padStart(2, "0"),
          A = String(E.getMinutes()).padStart(2, "0"),
          q = String(E.getSeconds()).padStart(2, "0");
        return `${ne}-${ce}-${B}T${C}:${A}:${q}`;
      },
      ie = async () => {
        if (!s) return;
        if (!d.trim()) {
          alert("請輸入核撥人員名稱");
          return;
        }
        const E = n === "requisition" ? "申領" : "撥補";
        if (
          window.confirm(`確認核撥資訊：

藥品名稱：${s.name}
實際撥發量：${l}
核撥人員：${d}${y ? ` (${y})` : ""}

是否確認${E}？`)
        ) {
          k(!0);
          try {
            const ce = T();
            if (n === "requisition") {
              const B = await De.updateRequisitionActualQuantity(s.GUID, l);
              if (B.Code !== 200) {
                alert(`更新實際撥發量失敗：${B.Message || "未知錯誤"}`), k(!1);
                return;
              }
              const C = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuingPerson: d,
                issueTime: ce,
              };
              console.log("申領request", C);
              const A = await De.updateRequisitionByGuid(C);
              if (A.Code !== 200) {
                alert(`申領過帳失敗：${A.Message || "未知錯誤"}`), k(!1);
                return;
              }
              console.log("✅ 申領核撥成功:", {
                GUID: s.GUID,
                name: s.name,
                actualQuantity: l,
                issuingPerson: d,
                issueTime: ce,
              });
            } else {
              const B = await De.updateDistributionActualQuantity(s.GUID, l);
              if (B.Code !== 200) {
                alert(`更新實際撥發量失敗：${B.Message || "未知錯誤"}`), k(!1);
                return;
              }
              const C = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuer: d,
                issuanceTime: ce,
              };
              console.log("撥補request", C);
              const A = await De.updateDistributionByGuid(C);
              if (A.Code !== 200) {
                alert(`撥補過帳失敗：${A.Message || "未知錯誤"}`), k(!1);
                return;
              }
              console.log("✅ 撥補核撥成功:", {
                GUID: s.GUID,
                name: s.name,
                actualQuantity: l,
                issuer: d,
                issuanceTime: ce,
              });
            }
            o && (await o()), alert(`${E}核撥成功！`), t();
          } catch (ce) {
            console.error(`${E}核撥失敗:`, ce),
              alert(`${E}核撥失敗，請稍後再試`);
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
                  children: r.jsx(Ve, { className: "w-5 h-5 text-gray-700" }),
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
                                ref: H,
                                type: "text",
                                value: d,
                                onChange: (E) => ae(E.target.value),
                                onFocus: () => {
                                  d.trim() && ae(d);
                                },
                                placeholder: "人員名稱",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              z &&
                                r.jsx("div", {
                                  ref: N,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: R.map((E, ne) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => re(E),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          r.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: E.ID,
                                          }),
                                          r.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: E.name,
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
                                ref: x,
                                type: "text",
                                value: y,
                                onChange: (E) => X(E.target.value),
                                onFocus: () => {
                                  y.trim() && X(y);
                                },
                                placeholder: "人員 ID",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              M &&
                                r.jsx("div", {
                                  ref: j,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: oe.map((E, ne) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => be(E),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          r.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: E.ID,
                                          }),
                                          r.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: E.name,
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
                        onClick: () => de("7"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "7",
                      }),
                      r.jsx("button", {
                        onClick: () => de("8"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "8",
                      }),
                      r.jsx("button", {
                        onClick: () => de("9"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "9",
                      }),
                      r.jsx("button", {
                        onClick: () => ke("÷"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "÷",
                      }),
                      r.jsx("button", {
                        onClick: () => de("4"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "4",
                      }),
                      r.jsx("button", {
                        onClick: () => de("5"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "5",
                      }),
                      r.jsx("button", {
                        onClick: () => de("6"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "6",
                      }),
                      r.jsx("button", {
                        onClick: () => ke("×"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "×",
                      }),
                      r.jsx("button", {
                        onClick: () => de("1"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "1",
                      }),
                      r.jsx("button", {
                        onClick: () => de("2"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "2",
                      }),
                      r.jsx("button", {
                        onClick: () => de("3"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "3",
                      }),
                      r.jsx("button", {
                        onClick: () => ke("-"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "-",
                      }),
                      r.jsx("button", {
                        onClick: () => de("0"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "0",
                      }),
                      r.jsx("button", {
                        onClick: ge,
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: ".",
                      }),
                      r.jsx("button", {
                        onClick: V,
                        className:
                          "py-4 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors",
                        children: "=",
                      }),
                      r.jsx("button", {
                        onClick: () => ke("+"),
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
                  onClick: je,
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
                  onClick: ie,
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
  Ah = ({
    isOpen: e,
    onClose: t,
    medicineInfo: n,
    requisitions: s,
    distributions: o,
    onNoticeUpdated: l,
  }) => {
    const { setHighlightedMedicineCode: a } = Xe(),
      [i, c] = p.useState(s),
      [g, m] = p.useState(o),
      [h, f] = p.useState(null),
      [S, b] = p.useState(!1),
      [_, k] = p.useState(null),
      [d, u] = p.useState("requisition"),
      [y, D] = p.useState(!1),
      [$, I] = p.useState(!1);
    no.useEffect(() => {
      c(s), m(o);
    }, [s, o]),
      p.useEffect(
        () => () => {
          ts.cleanup();
        },
        []
      );
    const R = async () => {
        var w;
        if (n && !$) {
          if (!n.serverName || !n.serverType) {
            alert("無法取得藥品位置資訊");
            return;
          }
          I(!0);
          try {
            const H = localStorage.getItem("medMap_setting");
            let x = "255,0,0",
              N = "1",
              j = 60;
            if (H)
              try {
                const F = JSON.parse(H);
                (x =
                  {
                    blue: "255,0,0",
                    green: "0,255,0",
                    red: "0,0,255",
                    yellow: "0,255,255",
                    purple: "255,0,255",
                    cyan: "255,255,0",
                  }[F.light_color] || "255,0,0"),
                  (N =
                    ((w = F.brightness) == null ? void 0 : w.toString()) ||
                    "1"),
                  (j = F.light_sec || 60);
              } catch (F) {
                console.error("讀取設定失敗:", F);
              }
            if (y) await ts.turnOffAllLights(), D(!1), a(null);
            else {
              const F = [
                {
                  serverName: n.serverName,
                  serverType: n.serverType,
                  medicineCode: n.code,
                },
              ];
              await ts.startLighting(F, x, N, j * 1e3, () => {
                D(!1), a(null);
              }),
                D(!0),
                a(n.code);
            }
          } catch (H) {
            console.error("亮燈操作失敗:", H);
          } finally {
            I(!1);
          }
        }
      },
      G = async (w) => {
        const H = w.notice === "True" ? "False" : "True";
        f(w.GUID);
        const x = [...i],
          N = x.findIndex((j) => j.GUID === w.GUID);
        if (N === -1) {
          f(null);
          return;
        }
        (x[N] = { ...w, notice: H }), c(x);
        try {
          const j = await De.updateRequisitionNotice(w.GUID, H);
          j.Code !== 200
            ? ((x[N] = { ...w, notice: w.notice }),
              c(x),
              console.error("更新申領通知狀態失敗:", j))
            : l && l();
        } catch (j) {
          (x[N] = { ...w, notice: w.notice }),
            c(x),
            console.error("更新申領通知狀態失敗:", j);
        } finally {
          f(null);
        }
      },
      oe = async (w) => {
        const H = w.notice === "True" ? "False" : "True";
        f(w.GUID);
        const x = [...g],
          N = x.findIndex((j) => j.GUID === w.GUID);
        if (N === -1) {
          f(null);
          return;
        }
        (x[N] = { ...w, notice: H }), m(x);
        try {
          const j = await De.updateDistributionNotice(w.GUID, H);
          j.Code !== 200
            ? ((x[N] = { ...w, notice: w.notice }),
              m(x),
              console.error("更新撥補通知狀態失敗:", j))
            : l && l();
        } catch (j) {
          (x[N] = { ...w, notice: w.notice }),
            m(x),
            console.error("更新撥補通知狀態失敗:", j);
        } finally {
          f(null);
        }
      };
    if (!e || !n) return null;
    const P = i.filter((w) => w.state === "等待過帳"),
      z = g.filter((w) => w.state === "等待過帳"),
      Z = P.length === 0 && z.length === 0,
      M = (w) => {
        if (!w || w === "1/01/01 00:00:00" || w === "0001-01-01T00:00:00")
          return "-";
        try {
          const H = new Date(w);
          if (isNaN(H.getTime())) return w;
          const x = H.getFullYear(),
            N = String(H.getMonth() + 1).padStart(2, "0"),
            j = String(H.getDate()).padStart(2, "0"),
            F = String(H.getHours()).padStart(2, "0"),
            ae = String(H.getMinutes()).padStart(2, "0");
          return `${x}/${N}/${j} ${F}:${ae}`;
        } catch {
          return w;
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
                      disabled: $,
                      className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                        y
                          ? "bg-green-500 text-white hover:bg-green-600 shadow-lg"
                          : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                      }`,
                      title: y ? "點擊關燈" : "點擊亮燈",
                      children: r.jsx(sh, {
                        className: "w-6 h-6",
                        fill: y ? "currentColor" : "none",
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
                    children: r.jsx(Ve, { className: "w-6 h-6 text-gray-700" }),
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
              children: Z
                ? r.jsx("div", {
                    className:
                      "flex items-center justify-center h-40 text-gray-400 text-lg",
                    children: "無藥品需求",
                  })
                : r.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      P.map((w, H) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-blue-200 rounded-lg p-3 bg-blue-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              u("requisition"), k(w), b(!0);
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
                                        onClick: (x) => {
                                          x.stopPropagation(), G(w);
                                        },
                                        disabled: h === w.GUID,
                                        className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${
                                          w.notice === "True"
                                            ? "bg-green-500 text-white hover:bg-green-600"
                                            : "bg-gray-300 text-gray-600 hover:bg-gray-400"
                                        }`,
                                        title:
                                          w.notice === "True"
                                            ? "點擊關閉通知"
                                            : "點擊開啟通知",
                                        children: r.jsx(vc, {
                                          className: "w-5 h-5",
                                        }),
                                      }),
                                    ],
                                  }),
                                  r.jsx("span", {
                                    className: `px-3 text-sm py-2 text-white font-semibold rounded-full ${
                                      w.actionType.includes("緊急")
                                        ? "bg-green-600"
                                        : "bg-blue-600"
                                    }`,
                                    children: w.actionType,
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
                                        children: w.requestingUnit || "-",
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
                                        children: w.requestingPerson || "-",
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
                                        children: w.requestedQuantity || "-",
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
                                        children: M(w.requestTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          w.GUID
                        )
                      ),
                      z.map((w, H) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-yellow-200 rounded-lg p-3 bg-yellow-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              u("distribution"), k(w), b(!0);
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
                                    onClick: (x) => {
                                      x.stopPropagation(), oe(w);
                                    },
                                    disabled: h === w.GUID,
                                    className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${
                                      w.notice === "True"
                                        ? "bg-green-500 text-white hover:bg-green-600"
                                        : "bg-gray-300 text-gray-600 hover:bg-gray-400"
                                    }`,
                                    title:
                                      w.notice === "True"
                                        ? "點擊關閉通知"
                                        : "點擊開啟通知",
                                    children: r.jsx(vc, {
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
                                        children: w.sourceStoreType || "-",
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
                                        children: w.destinationStoreType || "-",
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
                                        children: w.LOT || "-",
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
                                        children: w.VAL || "-",
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
                                        children: w.issuedQuantity || "-",
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
                                        children: w.reportName || "-",
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
                                        children: M(w.addedTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          w.GUID
                        )
                      ),
                    ],
                  }),
            }),
          ],
        }),
        r.jsx(Rh, {
          isOpen: S,
          onClose: () => b(!1),
          type: d,
          data: _,
          onApprove: l,
        }),
      ],
    });
  },
  $h = ({ isOpen: e, onClose: t, container: n }) => {
    const [s, o] = p.useState("list_mode"),
      { highlightedMedicineCode: l } = Xe(),
      [a, i] = p.useState(!1),
      [c, g] = p.useState([]),
      [m, h] = p.useState([]),
      [f, S] = p.useState([]),
      [b, _] = p.useState(!1),
      [k, d] = p.useState(null),
      u = p.useRef(null),
      y = p.useRef(null),
      D = () => {
        try {
          const z = localStorage.getItem("medMap_setting");
          if (z) {
            const M = JSON.parse(z).light_sec;
            if (M != null && M !== "") {
              const w = Number(M);
              if (!isNaN(w) && w > 0) return w * 1e3;
            }
          }
        } catch (z) {
          console.error("讀取亮燈設定失敗:", z);
        }
        return 6e4;
      },
      $ = () => {
        try {
          const P = localStorage.getItem("medMap_setting");
          if (P) return JSON.parse(P).light_color || "red";
        } catch (P) {
          console.error("讀取高亮顏色設定失敗:", P);
        }
        return "red";
      },
      I = p.useCallback(async () => {
        try {
          const P = new Date(),
            z = `${P.getFullYear()}-${String(P.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(P.getDate()).padStart(2, "0")} 00:00:00`,
            Z = `${P.getFullYear()}-${String(P.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(P.getDate()).padStart(2, "0")} 23:59:59`,
            [M, w] = await Promise.all([
              De.getRequisitionByTime(z, Z),
              De.getDistributionByTime(z, Z),
            ]),
            H = [];
          if (M.Code === 200 && M.Data) {
            const x = M.Data.filter((j) => {
              var F;
              return (F = n == null ? void 0 : n.med_list) == null
                ? void 0
                : F.some((ae) => ae.code === j.code);
            });
            h(x),
              x
                .filter((j) => j.state === "等待過帳" && j.notice === "True")
                .forEach((j) => {
                  j.code && H.push(j.code);
                });
          }
          if (w.Code === 200 && w.Data) {
            const x = w.Data.filter((j) => {
              var F;
              return (F = n == null ? void 0 : n.med_list) == null
                ? void 0
                : F.some((ae) => ae.code === j.code);
            });
            S(x),
              x
                .filter((j) => j.state === "等待過帳" && j.notice === "True")
                .forEach((j) => {
                  j.code && (H.includes(j.code) || H.push(j.code));
                });
          }
          g(H);
        } catch (P) {
          console.error("檢查申領撥補資料失敗:", P);
        }
      }, [n]);
    p.useEffect(
      () => (
        e
          ? (I(),
            y.current && clearInterval(y.current),
            (y.current = setInterval(() => {
              I();
            }, 1e4)))
          : y.current && (clearInterval(y.current), (y.current = null)),
        () => {
          y.current && (clearInterval(y.current), (y.current = null));
        }
      ),
      [e, I]
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
          const P = D();
          console.log("✅ ContainerDetailModal - 啟動亮燈:", {
            medicineCode: l,
            duration: P / 1e3 + "秒",
          }),
            u.current && clearTimeout(u.current),
            (u.current = setTimeout(() => {
              console.log("⏱️ ContainerDetailModal - 亮燈時間結束"),
                i(!1),
                (u.current = null);
            }, P));
        } else i(!1);
        return () => {
          u.current && clearTimeout(u.current);
        };
      }, [e, l]);
    const R = (P) => {
      var M, w;
      m.filter((H) => H.code === P.code), f.filter((H) => H.code === P.code);
      const z = (H) => {
          for (const x of H) {
            if (x.type === "store_shelves" && x.medMapStock) {
              const N = x.medMapStock.find((j) => j.code === P.code);
              if (N) return { stock: N, shelf: x };
            }
            if (x.contents && x.contents.length > 0) {
              const N = z(x.contents);
              if (N) return N;
            }
          }
          return null;
        },
        Z = n ? z([n]) : null;
      d({
        code: P.code,
        name: P.name,
        cht_name: P.cht_name,
        skdiacode: P.SKDIACODE || P.skdiacode,
        serverName:
          (M = Z == null ? void 0 : Z.shelf) == null ? void 0 : M.serverName,
        serverType:
          (w = Z == null ? void 0 : Z.shelf) == null ? void 0 : w.serverType,
      }),
        _(!0);
    };
    if (!e) return null;
    const G = () =>
        !(n != null && n.med_list) || n.med_list.length === 0
          ? r.jsx("div", {
              className:
                "flex items-center justify-center h-full text-gray-400",
              children: r.jsx("p", { children: "無藥品資料" }),
            })
          : r.jsx("div", {
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
                    children: n.med_list.map((P, z) => {
                      const Z = a && l && P.code == l,
                        M = c.includes(P.code);
                      let w = 0;
                      P.qty.forEach((x) => {
                        w += +x;
                      }),
                        z === 0 &&
                          console.log(
                            "🧪 ContainerDetailModal - 第一筆藥品檢查:",
                            {
                              medCode: P.code,
                              highlightedCode: l,
                              isHighlightActive: a,
                              isHighlighted: Z,
                              isPendingRequisition: M,
                              comparison: `${P.code} == ${l} = ${P.code == l}`,
                            }
                          );
                      const H = $();
                      return r.jsxs(
                        "tr",
                        {
                          className: `transition-colors cursor-pointer ${
                            M
                              ? "highlight-breathe-red"
                              : Z
                              ? `highlight-breathe-${H}`
                              : "hover:bg-gray-50"
                          }`,
                          onClick: () => R(P),
                          children: [
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm",
                              children: P.code || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm",
                              children: P.SKDIACODE || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm",
                              children: P.name || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm text-right",
                              children: w || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm text-center",
                              children: P.stockCol || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm text-center",
                              children: P.stockRow || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm text-center",
                              children: P.stock || "-",
                            }),
                          ],
                        },
                        z
                      );
                    }),
                  }),
                ],
              }),
            }),
      oe = () =>
        n
          ? r.jsx(Th, {
              container: n,
              highlightedMedicineCode: a ? l : null,
              pendingRequisitionCodes: c,
              onMedicineClick: R,
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
                      children: r.jsx(Ve, {
                        className: "w-6 h-6 text-gray-700",
                      }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 overflow-hidden p-3",
                  children: s === "list_mode" ? G() : oe(),
                }),
              ],
            }),
          ],
        }),
        r.jsx(Ah, {
          isOpen: b,
          onClose: () => _(!1),
          medicineInfo: k,
          requisitions: k ? m.filter((P) => P.code === k.code) : [],
          distributions: k ? f.filter((P) => P.code === k.code) : [],
          onNoticeUpdated: I,
        }),
      ],
    });
  },
  Oh = () => {
    const {
        editStoreShelfModalOpen: e,
        closeEditStoreShelfModal: t,
        selectedStoreShelfForEdit: n,
        showNotification: s,
        reloadMedMapData: o,
      } = Xe(),
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
    const g = (f, S) => {
        a((b) => ({ ...b, [f]: S }));
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
            const f = {
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
                  body: JSON.stringify(f),
                })
              ).json();
            console.log(f),
              console.log(k),
              k.Code === 200
                ? (s("層架更新成功", "success"), t(), await o())
                : s(k.Result || "更新失敗", "error");
          } catch (f) {
            console.error("更新層架失敗:", f),
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
              onClick: (f) => f.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(hr, { className: "w-6 h-6 text-gray-600" }),
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
                      children: r.jsx(Ve, { className: "w-6 h-6" }),
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
                            onChange: (f) => g("name", f.target.value),
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
                            onChange: (f) => g("position", f.target.value),
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
                                onChange: (f) => g("width", f.target.value),
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
                                onChange: (f) => g("height", f.target.value),
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
                            onChange: (f) => g("ip", f.target.value),
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
                            onChange: (f) => g("serverName", f.target.value),
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
                            onChange: (f) => g("serverType", f.target.value),
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
                            onChange: (f) => g("deviceType", f.target.value),
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
                        i && r.jsx(jt, { className: "w-4 h-4 animate-spin" }),
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
  Lh = () => {
    const {
        editParentContainerModalOpen: e,
        closeEditParentContainerModal: t,
        selectedParentContainerForEdit: n,
        showNotification: s,
        reloadMedMapData: o,
      } = Xe(),
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
    const g = (f, S) => {
        a((b) => ({ ...b, [f]: S }));
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
            let f = `${n.position.x},${n.position.y}`;
            const S = [
              {
                GUID: n.GUID,
                name: l.name.trim(),
                position: l.position.trim(),
                absolute_position: f || "0,0",
                ip_light: l.ip_light.trim(),
                serverName: l.serverName.trim(),
                serverType: l.serverType.trim(),
                device_type: l.deviceType,
              },
            ];
            console.log("=========", S, "=========");
            const b = await De.updateMedMapSection(S);
            b.Code === 200
              ? (s("父容器更新成功", "success"), t(), await o())
              : s(b.Result || "更新失敗", "error");
          } catch (f) {
            console.error("更新父容器失敗:", f),
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
              onClick: (f) => f.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(hr, { className: "w-6 h-6 text-gray-600" }),
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
                      children: r.jsx(Ve, { className: "w-6 h-6" }),
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
                            onChange: (f) => g("name", f.target.value),
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
                            onChange: (f) => g("position", f.target.value),
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
                            onChange: (f) => g("ip_light", f.target.value),
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
                            onChange: (f) => g("serverName", f.target.value),
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
                            onChange: (f) => g("serverType", f.target.value),
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
                            onChange: (f) => g("deviceType", f.target.value),
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
                        i && r.jsx(jt, { className: "w-4 h-4 animate-spin" }),
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
  Uh = ({ isOpen: e, onLoginSuccess: t }) => {
    const { t: n } = gt(),
      [s, o] = p.useState(""),
      [l, a] = p.useState(""),
      [i, c] = p.useState(!1),
      [g, m] = p.useState(!1),
      [h, f] = p.useState(""),
      S = async (_) => {
        if ((_.preventDefault(), !s.trim() || !l.trim())) {
          f("Please enter both ID and password");
          return;
        }
        m(!0), f("");
        try {
          const k = await De.login({ ID: s.trim(), Password: l });
          if (k.Code === 200 && k.Data) {
            const d = { ...k.Data, loginTime: new Date().toISOString() };
            sessionStorage.setItem("user_session", JSON.stringify(d)), t(d);
          } else f(k.Result || "Login failed");
        } catch (k) {
          console.error("Login failed:", k),
            f("Network error. Please try again.");
        } finally {
          m(!1);
        }
      },
      b = (_) => {
        _.key === "Enter" && !g && S(_);
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
                      onSubmit: S,
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
                                    ? r.jsx(th, { className: "w-5 h-5" })
                                    : r.jsx(nh, { className: "w-5 h-5" }),
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
                                  r.jsx(jt, {
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
  Bh = ({ isVisible: e, message: t }) => {
    const { t: n } = gt();
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
                        children: r.jsx(ai, {
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
                      r.jsx(jt, {
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
  zh = ({
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
                  ? r.jsx(Jm, { className: "w-5 h-5 text-green-600" })
                  : r.jsx(dh, { className: "w-5 h-5 text-red-600" }),
                r.jsx("span", {
                  className: "text-sm font-medium",
                  children: e,
                }),
                r.jsx("button", {
                  onClick: s,
                  className: `p-1 rounded-full hover:bg-black/10 transition-colors ${
                    t === "success" ? "text-green-600" : "text-red-600"
                  }`,
                  children: r.jsx(Ve, { className: "w-4 h-4" }),
                }),
              ],
            }),
          })
        : null
    );
  };
function Gh() {
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
    closeAddStoreItemModal: f,
    selectedStoreShelfForAdd: S,
    addDepartmentModalOpen: b,
    closeAddDepartmentModal: _,
    qrCodeScannerModalOpen: k,
    qrCodeScannerMode: d,
    closeQRCodeScannerModal: u,
    addBarcodeModalOpen: y,
    closeAddBarcodeModal: D,
    initialBarcodeValue: $,
    containerDetailModalOpen: I,
    closeContainerDetailModal: R,
    selectedContainerForDetail: G,
    setMedicineList: oe,
    setIsLoadingMedicines: P,
    showNotification: z,
  } = Xe();
  p.useEffect(() => {
    (() => {
      try {
        const x = sessionStorage.getItem("user_session");
        if (x) {
          const N = JSON.parse(x);
          N.GUID && N.ID && N.Name
            ? (o(N), s(!0))
            : sessionStorage.removeItem("user_session");
        }
      } catch (x) {
        console.error("Error checking session:", x),
          sessionStorage.removeItem("user_session");
      }
    })();
  }, [s, o]),
    p.useEffect(() => {
      let H = !0;
      return (
        (async () => {
          if (n) {
            P(!0);
            try {
              console.log("開始載入藥品資料...");
              const N = await De.getMedicineCloud();
              if ((console.log("藥品資料 API 回應:", N), !H)) return;
              N.Code === 200 && N.Data
                ? (oe(N.Data),
                  console.log(`✅ 成功載入 ${N.Data.length} 筆藥品資料`),
                  z(`載入 ${N.Data.length} 筆藥品資料`, "success"))
                : (console.warn("API 回應異常:", N),
                  oe([]),
                  z("藥品資料載入異常，請稍後重試", "error"));
            } catch (N) {
              if (!H) return;
              console.error("載入藥品資料失敗:", N),
                oe([]),
                z("無法連線到藥品資料庫，部分功能可能無法使用", "error");
            } finally {
              H && P(!1);
            }
          }
        })(),
        () => {
          H = !1;
        }
      );
    }, [n]);
  const Z = (H) => {
      o(H), s(!0);
    },
    M = no.useRef(null),
    w = (H, x) => {
      if (
        (console.log("📸 QR掃描成功 - handleQRScanSuccess 被調用:", {
          barcode: H,
          medicineData: x,
          mode: d,
        }),
        console.log("📸 當前 mode:", d),
        console.log("📸 當前 viewMode:", t),
        console.log("📸 drugCanvasRef.current:", M.current),
        d === "track_Drug_mode")
      ) {
        if ((console.log("✅ 進入 track_Drug_mode 分支"), t !== "medicine")) {
          console.warn("⚠️ 當前不在藥品地圖視圖，無法定位藥品"),
            z("請切換到藥品地圖視圖後再使用此功能", "error");
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
                M.current.locateDrug(x))
              : console.warn("⚠️ locateDrug 不是函數"))
          : console.warn("⚠️ drugCanvasRef.current 不存在");
      } else console.log("⚠️ mode 不是 track_Drug_mode，當前 mode:", d);
    };
  return n
    ? r.jsxs("div", {
        className: "min-h-screen bg-gray-50",
        children: [
          r.jsx(uh, {}),
          r.jsx(fh, {}),
          r.jsx(hh, {}),
          r.jsx("div", {
            className: "fixed inset-0",
            children: r.jsx("div", {
              className: "w-full h-full",
              children:
                t === "department" ? r.jsx(vh, {}) : r.jsx(Fu, { ref: M }),
            }),
          }),
          r.jsx(gh, {}),
          r.jsx(Sh, {}),
          r.jsx(Ch, {}),
          r.jsx(kh, {}),
          r.jsx(Dh, {}),
          r.jsx(_h, {}),
          r.jsx(Mh, {}),
          r.jsx(Eh, { isOpen: h, onClose: f, storeShelf: S }),
          r.jsx(Ih, { isOpen: b, onClose: _ }),
          r.jsx(Ho, { isOpen: k, onClose: u, mode: d, onScanSuccess: w }),
          r.jsx(Ph, { isOpen: y, onClose: D, initialBarcode: $ }),
          r.jsx($h, { isOpen: I, onClose: R, container: G }),
          r.jsx(Oh, {}),
          r.jsx(Lh, {}),
          r.jsx(Bh, { isVisible: l }),
          r.jsx(zh, {
            message: a.message,
            type: a.type,
            isVisible: a.isVisible,
            onClose: i,
          }),
        ],
      })
    : r.jsx(Uh, { isOpen: !0, onLoginSuccess: Z });
}
function Fh() {
  return r.jsx(Ym, { children: r.jsx(Wm, { children: r.jsx(Gh, {}) }) });
}
Ru(document.getElementById("root")).render(
  r.jsx(p.StrictMode, { children: r.jsx(Fh, {}) })
);
