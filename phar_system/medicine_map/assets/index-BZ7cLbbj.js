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
function hf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Nc = { exports: {} },
  _o = {},
  jc = { exports: {} },
  Pe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ys = Symbol.for("react.element"),
  gf = Symbol.for("react.portal"),
  xf = Symbol.for("react.fragment"),
  yf = Symbol.for("react.strict_mode"),
  vf = Symbol.for("react.profiler"),
  wf = Symbol.for("react.provider"),
  bf = Symbol.for("react.context"),
  Nf = Symbol.for("react.forward_ref"),
  jf = Symbol.for("react.suspense"),
  Sf = Symbol.for("react.memo"),
  Cf = Symbol.for("react.lazy"),
  ui = Symbol.iterator;
function kf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ui && e[ui]) || e["@@iterator"]),
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
function Mr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = kc),
    (this.updater = n || Sc);
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
function Dc() {}
Dc.prototype = Mr.prototype;
function pa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = kc),
    (this.updater = n || Sc);
}
var ma = (pa.prototype = new Dc());
ma.constructor = pa;
Cc(ma, Mr.prototype);
ma.isPureReactComponent = !0;
var di = Array.isArray,
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
    $$typeof: ys,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: ha.current,
  };
}
function Df(e, t) {
  return {
    $$typeof: ys,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ga(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ys;
}
function _f(e) {
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
    ? _f("" + e.key)
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
          case ys:
          case gf:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = s === "" ? "." + Yo(a, 0) : s),
      di(o)
        ? ((n = ""),
          e != null && (n = e.replace(fi, "$&/") + "/"),
          Hs(o, t, n, "", function (g) {
            return g;
          }))
        : o != null &&
          (ga(o) &&
            (o = Df(
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
  if (((a = 0), (s = s === "" ? "." : s + ":"), di(e)))
    for (var i = 0; i < e.length; i++) {
      l = e[i];
      var c = s + Yo(l, i);
      a += Hs(l, t, n, c, o);
    }
  else if (((c = kf(e)), typeof c == "function"))
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
function Mf(e) {
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
var ft = { current: null },
  Vs = { transition: null },
  Ef = {
    ReactCurrentDispatcher: ft,
    ReactCurrentBatchConfig: Vs,
    ReactCurrentOwner: ha,
  };
function Ic() {
  throw Error("act(...) is not supported in production builds of React.");
}
Pe.Children = {
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
Pe.Component = Mr;
Pe.Fragment = xf;
Pe.Profiler = vf;
Pe.PureComponent = pa;
Pe.StrictMode = yf;
Pe.Suspense = jf;
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ef;
Pe.act = Ic;
Pe.cloneElement = function (e, t, n) {
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
  return { $$typeof: ys, type: e.type, key: o, ref: l, props: s, _owner: a };
};
Pe.createContext = function (e) {
  return (
    (e = {
      $$typeof: bf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: wf, _context: e }),
    (e.Consumer = e)
  );
};
Pe.createElement = Ec;
Pe.createFactory = function (e) {
  var t = Ec.bind(null, e);
  return (t.type = e), t;
};
Pe.createRef = function () {
  return { current: null };
};
Pe.forwardRef = function (e) {
  return { $$typeof: Nf, render: e };
};
Pe.isValidElement = ga;
Pe.lazy = function (e) {
  return { $$typeof: Cf, _payload: { _status: -1, _result: e }, _init: Mf };
};
Pe.memo = function (e, t) {
  return { $$typeof: Sf, type: e, compare: t === void 0 ? null : t };
};
Pe.startTransition = function (e) {
  var t = Vs.transition;
  Vs.transition = {};
  try {
    e();
  } finally {
    Vs.transition = t;
  }
};
Pe.unstable_act = Ic;
Pe.useCallback = function (e, t) {
  return ft.current.useCallback(e, t);
};
Pe.useContext = function (e) {
  return ft.current.useContext(e);
};
Pe.useDebugValue = function () {};
Pe.useDeferredValue = function (e) {
  return ft.current.useDeferredValue(e);
};
Pe.useEffect = function (e, t) {
  return ft.current.useEffect(e, t);
};
Pe.useId = function () {
  return ft.current.useId();
};
Pe.useImperativeHandle = function (e, t, n) {
  return ft.current.useImperativeHandle(e, t, n);
};
Pe.useInsertionEffect = function (e, t) {
  return ft.current.useInsertionEffect(e, t);
};
Pe.useLayoutEffect = function (e, t) {
  return ft.current.useLayoutEffect(e, t);
};
Pe.useMemo = function (e, t) {
  return ft.current.useMemo(e, t);
};
Pe.useReducer = function (e, t, n) {
  return ft.current.useReducer(e, t, n);
};
Pe.useRef = function (e) {
  return ft.current.useRef(e);
};
Pe.useState = function (e) {
  return ft.current.useState(e);
};
Pe.useSyncExternalStore = function (e, t, n) {
  return ft.current.useSyncExternalStore(e, t, n);
};
Pe.useTransition = function () {
  return ft.current.useTransition();
};
Pe.version = "18.3.1";
jc.exports = Pe;
var h = jc.exports;
const no = hf(h);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var If = h,
  Pf = Symbol.for("react.element"),
  Rf = Symbol.for("react.fragment"),
  Tf = Object.prototype.hasOwnProperty,
  Af = If.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  $f = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pc(e, t, n) {
  var s,
    o = {},
    l = null,
    a = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (s in t) Tf.call(t, s) && !$f.hasOwnProperty(s) && (o[s] = t[s]);
  if (e && e.defaultProps)
    for (s in ((t = e.defaultProps), t)) o[s] === void 0 && (o[s] = t[s]);
  return {
    $$typeof: Pf,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: Af.current,
  };
}
_o.Fragment = Rf;
_o.jsx = Pc;
_o.jsxs = Pc;
Nc.exports = _o;
var r = Nc.exports,
  Rc = { exports: {} },
  _t = {},
  Tc = { exports: {} },
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
  function t(j, H) {
    var de = j.length;
    j.push(H);
    e: for (; 0 < de; ) {
      var ee = (de - 1) >>> 1,
        ae = j[ee];
      if (0 < o(ae, H)) (j[ee] = H), (j[de] = ae), (de = ee);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function s(j) {
    if (j.length === 0) return null;
    var H = j[0],
      de = j.pop();
    if (de !== H) {
      j[0] = de;
      e: for (var ee = 0, ae = j.length, Ce = ae >>> 1; ee < Ce; ) {
        var ue = 2 * (ee + 1) - 1,
          ke = j[ue],
          ce = ue + 1,
          Q = j[ce];
        if (0 > o(ke, de))
          ce < ae && 0 > o(Q, ke)
            ? ((j[ee] = Q), (j[ce] = de), (ee = ce))
            : ((j[ee] = ke), (j[ue] = de), (ee = ue));
        else if (ce < ae && 0 > o(Q, de)) (j[ee] = Q), (j[ce] = de), (ee = ce);
        else break e;
      }
    }
    return H;
  }
  function o(j, H) {
    var de = j.sortIndex - H.sortIndex;
    return de !== 0 ? de : j.id - H.id;
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
    p = 1,
    m = null,
    f = 3,
    b = !1,
    w = !1,
    E = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    u = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(j) {
    for (var H = n(g); H !== null; ) {
      if (H.callback === null) s(g);
      else if (H.startTime <= j)
        s(g), (H.sortIndex = H.expirationTime), t(c, H);
      else break;
      H = n(g);
    }
  }
  function D(j) {
    if (((E = !1), x(j), !w))
      if (n(c) !== null) (w = !0), v(L);
      else {
        var H = n(g);
        H !== null && N(D, H.startTime - j);
      }
  }
  function L(j, H) {
    (w = !1), E && ((E = !1), u(M), (M = -1)), (b = !0);
    var de = f;
    try {
      for (
        x(H), m = n(c);
        m !== null && (!(m.expirationTime > H) || (j && !B()));

      ) {
        var ee = m.callback;
        if (typeof ee == "function") {
          (m.callback = null), (f = m.priorityLevel);
          var ae = ee(m.expirationTime <= H);
          (H = e.unstable_now()),
            typeof ae == "function" ? (m.callback = ae) : m === n(c) && s(c),
            x(H);
        } else s(c);
        m = n(c);
      }
      if (m !== null) var Ce = !0;
      else {
        var ue = n(g);
        ue !== null && N(D, ue.startTime - H), (Ce = !1);
      }
      return Ce;
    } finally {
      (m = null), (f = de), (b = !1);
    }
  }
  var I = !1,
    A = null,
    M = -1,
    Z = 5,
    C = -1;
  function B() {
    return !(e.unstable_now() - C < Z);
  }
  function X() {
    if (A !== null) {
      var j = e.unstable_now();
      C = j;
      var H = !0;
      try {
        H = A(!0, j);
      } finally {
        H ? P() : ((I = !1), (A = null));
      }
    } else I = !1;
  }
  var P;
  if (typeof d == "function")
    P = function () {
      d(X);
    };
  else if (typeof MessageChannel < "u") {
    var T = new MessageChannel(),
      se = T.port2;
    (T.port1.onmessage = X),
      (P = function () {
        se.postMessage(null);
      });
  } else
    P = function () {
      k(X, 0);
    };
  function v(j) {
    (A = j), I || ((I = !0), P());
  }
  function N(j, H) {
    M = k(function () {
      j(e.unstable_now());
    }, H);
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
      w || b || ((w = !0), v(L));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Z = 0 < j ? Math.floor(1e3 / j) : 5);
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
          var H = 3;
          break;
        default:
          H = f;
      }
      var de = f;
      f = H;
      try {
        return j();
      } finally {
        f = de;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, H) {
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
      var de = f;
      f = j;
      try {
        return H();
      } finally {
        f = de;
      }
    }),
    (e.unstable_scheduleCallback = function (j, H, de) {
      var ee = e.unstable_now();
      switch (
        (typeof de == "object" && de !== null
          ? ((de = de.delay),
            (de = typeof de == "number" && 0 < de ? ee + de : ee))
          : (de = ee),
        j)
      ) {
        case 1:
          var ae = -1;
          break;
        case 2:
          ae = 250;
          break;
        case 5:
          ae = 1073741823;
          break;
        case 4:
          ae = 1e4;
          break;
        default:
          ae = 5e3;
      }
      return (
        (ae = de + ae),
        (j = {
          id: p++,
          callback: H,
          priorityLevel: j,
          startTime: de,
          expirationTime: ae,
          sortIndex: -1,
        }),
        de > ee
          ? ((j.sortIndex = de),
            t(g, j),
            n(c) === null &&
              j === n(g) &&
              (E ? (u(M), (M = -1)) : (E = !0), N(D, de - ee)))
          : ((j.sortIndex = ae), t(c, j), w || b || ((w = !0), v(L))),
        j
      );
    }),
    (e.unstable_shouldYield = B),
    (e.unstable_wrapCallback = function (j) {
      var H = f;
      return function () {
        var de = f;
        f = H;
        try {
          return j.apply(this, arguments);
        } finally {
          f = de;
        }
      };
    });
})(Ac);
Tc.exports = Ac;
var Of = Tc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lf = h,
  Dt = Of;
function oe(e) {
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
  ts = {};
function qn(e, t) {
  br(e, t), br(e + "Capture", t);
}
function br(e, t) {
  for (ts[e] = t, e = 0; e < t.length; e++) $c.add(t[e]);
}
var cn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  wl = Object.prototype.hasOwnProperty,
  Uf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  pi = {},
  mi = {};
function Bf(e) {
  return wl.call(mi, e)
    ? !0
    : wl.call(pi, e)
    ? !1
    : Uf.test(e)
    ? (mi[e] = !0)
    : ((pi[e] = !0), !1);
}
function zf(e, t, n, s) {
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
function Gf(e, t, n, s) {
  if (t === null || typeof t > "u" || zf(e, t, n, s)) return !0;
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
function pt(e, t, n, s, o, l, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = s),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = a);
}
var ot = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ot[e] = new pt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ot[t] = new pt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ot[e] = new pt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ot[e] = new pt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ot[e] = new pt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ot[e] = new pt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ot[e] = new pt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ot[e] = new pt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ot[e] = new pt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var xa = /[\-:]([a-z])/g;
function ya(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(xa, ya);
    ot[t] = new pt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(xa, ya);
    ot[t] = new pt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(xa, ya);
  ot[t] = new pt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ot[e] = new pt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ot.xlinkHref = new pt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ot[e] = new pt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function va(e, t, n, s) {
  var o = ot.hasOwnProperty(t) ? ot[t] : null;
  (o !== null
    ? o.type !== 0
    : s ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Gf(t, n, o, s) && (n = null),
    s || o === null
      ? Bf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var pn = Lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ks = Symbol.for("react.element"),
  nr = Symbol.for("react.portal"),
  rr = Symbol.for("react.fragment"),
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
function Tr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hi && e[hi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var We = Object.assign,
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
function Ff(e) {
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
    case rr:
      return "Fragment";
    case nr:
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
function Hf(e) {
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
function Vf(e) {
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
  e._valueTracker || (e._valueTracker = Vf(e));
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
  return We({}, t, {
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
function hr(e, t, n, s) {
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
  if (t.dangerouslySetInnerHTML != null) throw Error(oe(91));
  return We({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function yi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(oe(92));
      if (Fr(n)) {
        if (1 < n.length) throw Error(oe(93));
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
function ns(e, t) {
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
  Wf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Wr).forEach(function (e) {
  Wf.forEach(function (t) {
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
var qf = We(
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
    if (qf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(oe(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(oe(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(oe(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(oe(62));
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
var Rl = null,
  gr = null,
  xr = null;
function wi(e) {
  if ((e = bs(e))) {
    if (typeof Rl != "function") throw Error(oe(280));
    var t = e.stateNode;
    t && ((t = Ro(t)), Rl(e.stateNode, e.type, t));
  }
}
function Yc(e) {
  gr ? (xr ? xr.push(e) : (xr = [e])) : (gr = e);
}
function Xc() {
  if (gr) {
    var e = gr,
      t = xr;
    if (((xr = gr = null), wi(e), t)) for (e = 0; e < t.length; e++) wi(t[e]);
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
    (Jo = !1), (gr !== null || xr !== null) && (Kc(), Xc());
  }
}
function rs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var s = Ro(n);
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
  if (n && typeof n != "function") throw Error(oe(231, t, typeof n));
  return n;
}
var Tl = !1;
if (cn)
  try {
    var Ar = {};
    Object.defineProperty(Ar, "passive", {
      get: function () {
        Tl = !0;
      },
    }),
      window.addEventListener("test", Ar, Ar),
      window.removeEventListener("test", Ar, Ar);
  } catch {
    Tl = !1;
  }
function Yf(e, t, n, s, o, l, a, i, c) {
  var g = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, g);
  } catch (p) {
    this.onError(p);
  }
}
var qr = !1,
  so = null,
  oo = !1,
  Al = null,
  Xf = {
    onError: function (e) {
      (qr = !0), (so = e);
    },
  };
function Qf(e, t, n, s, o, l, a, i, c) {
  (qr = !1), (so = null), Yf.apply(Xf, arguments);
}
function Kf(e, t, n, s, o, l, a, i, c) {
  if ((Qf.apply(this, arguments), qr)) {
    if (qr) {
      var g = so;
      (qr = !1), (so = null);
    } else throw Error(oe(198));
    oo || ((oo = !0), (Al = g));
  }
}
function Yn(e) {
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
  if (Yn(e) !== e) throw Error(oe(188));
}
function Jf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Yn(e)), t === null)) throw Error(oe(188));
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
      throw Error(oe(188));
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
        if (!a) throw Error(oe(189));
      }
    }
    if (n.alternate !== s) throw Error(oe(190));
  }
  if (n.tag !== 3) throw Error(oe(188));
  return n.stateNode.current === n ? e : t;
}
function eu(e) {
  return (e = Jf(e)), e !== null ? tu(e) : null;
}
function tu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = tu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var nu = Dt.unstable_scheduleCallback,
  Ni = Dt.unstable_cancelCallback,
  Zf = Dt.unstable_shouldYield,
  ep = Dt.unstable_requestPaint,
  Xe = Dt.unstable_now,
  tp = Dt.unstable_getCurrentPriorityLevel,
  Sa = Dt.unstable_ImmediatePriority,
  ru = Dt.unstable_UserBlockingPriority,
  lo = Dt.unstable_NormalPriority,
  np = Dt.unstable_LowPriority,
  su = Dt.unstable_IdlePriority,
  Mo = null,
  Jt = null;
function rp(e) {
  if (Jt && typeof Jt.onCommitFiberRoot == "function")
    try {
      Jt.onCommitFiberRoot(Mo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ht = Math.clz32 ? Math.clz32 : lp,
  sp = Math.log,
  op = Math.LN2;
function lp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((sp(e) / op) | 0)) | 0;
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
      (n = 31 - Ht(t)), (o = 1 << n), (s |= e[n]), (t &= ~o);
  return s;
}
function ap(e, t) {
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
function ip(e, t) {
  for (
    var n = e.suspendedLanes,
      s = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var a = 31 - Ht(l),
      i = 1 << a,
      c = o[a];
    c === -1
      ? (!(i & n) || i & s) && (o[a] = ap(i, t))
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
function ou() {
  var e = Ms;
  return (Ms <<= 1), !(Ms & 4194240) && (Ms = 64), e;
}
function Zo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function vs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ht(t)),
    (e[t] = n);
}
function cp(e, t) {
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
    var o = 31 - Ht(n),
      l = 1 << o;
    (t[o] = 0), (s[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Ca(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var s = 31 - Ht(n),
      o = 1 << s;
    (o & t) | (e[s] & t) && (e[s] |= t), (n &= ~o);
  }
}
var Ae = 0;
function lu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var au,
  ka,
  iu,
  cu,
  uu,
  Ol = !1,
  Is = [],
  Nn = null,
  jn = null,
  Sn = null,
  ss = new Map(),
  os = new Map(),
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
      ss.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      os.delete(t.pointerId);
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
      t !== null && ((t = bs(t)), t !== null && ka(t)),
      e)
    : ((e.eventSystemFlags |= s),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function dp(e, t, n, s, o) {
  switch (t) {
    case "focusin":
      return (Nn = $r(Nn, e, t, n, s, o)), !0;
    case "dragenter":
      return (jn = $r(jn, e, t, n, s, o)), !0;
    case "mouseover":
      return (Sn = $r(Sn, e, t, n, s, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return ss.set(l, $r(ss.get(l) || null, e, t, n, s, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), os.set(l, $r(os.get(l) || null, e, t, n, s, o)), !0
      );
  }
  return !1;
}
function du(e) {
  var t = On(e.target);
  if (t !== null) {
    var n = Yn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Zc(n)), t !== null)) {
          (e.blockedOn = t),
            uu(e.priority, function () {
              iu(n);
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
    } else return (t = bs(n)), t !== null && ka(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Si(e, t, n) {
  Ws(e) && n.delete(t);
}
function fp() {
  (Ol = !1),
    Nn !== null && Ws(Nn) && (Nn = null),
    jn !== null && Ws(jn) && (jn = null),
    Sn !== null && Ws(Sn) && (Sn = null),
    ss.forEach(Si),
    os.forEach(Si);
}
function Or(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ol ||
      ((Ol = !0),
      Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority, fp)));
}
function ls(e) {
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
      ss.forEach(t),
      os.forEach(t),
      n = 0;
    n < yn.length;
    n++
  )
    (s = yn[n]), s.blockedOn === e && (s.blockedOn = null);
  for (; 0 < yn.length && ((n = yn[0]), n.blockedOn === null); )
    du(n), n.blockedOn === null && yn.shift();
}
var yr = pn.ReactCurrentBatchConfig,
  io = !0;
function pp(e, t, n, s) {
  var o = Ae,
    l = yr.transition;
  yr.transition = null;
  try {
    (Ae = 1), Da(e, t, n, s);
  } finally {
    (Ae = o), (yr.transition = l);
  }
}
function mp(e, t, n, s) {
  var o = Ae,
    l = yr.transition;
  yr.transition = null;
  try {
    (Ae = 4), Da(e, t, n, s);
  } finally {
    (Ae = o), (yr.transition = l);
  }
}
function Da(e, t, n, s) {
  if (io) {
    var o = Ll(e, t, n, s);
    if (o === null) cl(e, t, s, co, n), ji(e, s);
    else if (dp(o, e, t, n, s)) s.stopPropagation();
    else if ((ji(e, s), t & 4 && -1 < up.indexOf(e))) {
      for (; o !== null; ) {
        var l = bs(o);
        if (
          (l !== null && au(l),
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
  if (((co = null), (e = ja(s)), (e = On(e)), e !== null))
    if (((t = Yn(e)), t === null)) e = null;
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
function fu(e) {
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
      switch (tp()) {
        case Sa:
          return 1;
        case ru:
          return 4;
        case lo:
        case np:
          return 16;
        case su:
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
function pu() {
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
function Mt(e) {
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
    We(t.prototype, {
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
var Er = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ma = Mt(Er),
  ws = We({}, Er, { view: 0, detail: 0 }),
  hp = Mt(ws),
  el,
  tl,
  Lr,
  Eo = We({}, ws, {
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
  ki = Mt(Eo),
  gp = We({}, Eo, { dataTransfer: 0 }),
  xp = Mt(gp),
  yp = We({}, ws, { relatedTarget: 0 }),
  nl = Mt(yp),
  vp = We({}, Er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wp = Mt(vp),
  bp = We({}, Er, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Np = Mt(bp),
  jp = We({}, Er, { data: 0 }),
  Di = Mt(jp),
  Sp = {
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
  Cp = {
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
  kp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Dp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = kp[e]) ? !!t[e] : !1;
}
function Ea() {
  return Dp;
}
var _p = We({}, ws, {
    key: function (e) {
      if (e.key) {
        var t = Sp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ys(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Cp[e.keyCode] || "Unidentified"
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
  Mp = Mt(_p),
  Ep = We({}, Eo, {
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
  _i = Mt(Ep),
  Ip = We({}, ws, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ea,
  }),
  Pp = Mt(Ip),
  Rp = We({}, Er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Tp = Mt(Rp),
  Ap = We({}, Eo, {
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
  $p = Mt(Ap),
  Op = [9, 13, 27, 32],
  Ia = cn && "CompositionEvent" in window,
  Yr = null;
cn && "documentMode" in document && (Yr = document.documentMode);
var Lp = cn && "TextEvent" in window && !Yr,
  mu = cn && (!Ia || (Yr && 8 < Yr && 11 >= Yr)),
  Mi = " ",
  Ei = !1;
function hu(e, t) {
  switch (e) {
    case "keyup":
      return Op.indexOf(t.keyCode) !== -1;
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
function gu(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var sr = !1;
function Up(e, t) {
  switch (e) {
    case "compositionend":
      return gu(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ei = !0), Mi);
    case "textInput":
      return (e = t.data), e === Mi && Ei ? null : e;
    default:
      return null;
  }
}
function Bp(e, t) {
  if (sr)
    return e === "compositionend" || (!Ia && hu(e, t))
      ? ((e = pu()), (qs = _a = wn = null), (sr = !1), e)
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
var zp = {
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
  return t === "input" ? !!zp[e.type] : t === "textarea";
}
function xu(e, t, n, s) {
  Yc(s),
    (t = uo(t, "onChange")),
    0 < t.length &&
      ((n = new Ma("onChange", "change", null, n, s)),
      e.push({ event: n, listeners: t }));
}
var Xr = null,
  as = null;
function Gp(e) {
  _u(e, 0);
}
function Io(e) {
  var t = ar(e);
  if (zc(t)) return e;
}
function Fp(e, t) {
  if (e === "change") return t;
}
var yu = !1;
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
  yu = rl && (!document.documentMode || 9 < document.documentMode);
}
function Ri() {
  Xr && (Xr.detachEvent("onpropertychange", vu), (as = Xr = null));
}
function vu(e) {
  if (e.propertyName === "value" && Io(as)) {
    var t = [];
    xu(t, as, e, ja(e)), Jc(Gp, t);
  }
}
function Hp(e, t, n) {
  e === "focusin"
    ? (Ri(), (Xr = t), (as = n), Xr.attachEvent("onpropertychange", vu))
    : e === "focusout" && Ri();
}
function Vp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Io(as);
}
function Wp(e, t) {
  if (e === "click") return Io(t);
}
function qp(e, t) {
  if (e === "input" || e === "change") return Io(t);
}
function Yp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Wt = typeof Object.is == "function" ? Object.is : Yp;
function is(e, t) {
  if (Wt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    s = Object.keys(t);
  if (n.length !== s.length) return !1;
  for (s = 0; s < n.length; s++) {
    var o = n[s];
    if (!wl.call(t, o) || !Wt(e[o], t[o])) return !1;
  }
  return !0;
}
function Ti(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ai(e, t) {
  var n = Ti(e);
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
    n = Ti(n);
  }
}
function wu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? wu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function bu() {
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
function Xp(e) {
  var t = bu(),
    n = e.focusedElem,
    s = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    wu(n.ownerDocument.documentElement, n)
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
var Qp = cn && "documentMode" in document && 11 >= document.documentMode,
  or = null,
  Ul = null,
  Qr = null,
  Bl = !1;
function $i(e, t, n) {
  var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bl ||
    or == null ||
    or !== ro(s) ||
    ((s = or),
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
    (Qr && is(Qr, s)) ||
      ((Qr = s),
      (s = uo(Ul, "onSelect")),
      0 < s.length &&
        ((t = new Ma("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: s }),
        (t.target = or))));
}
function Rs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var lr = {
    animationend: Rs("Animation", "AnimationEnd"),
    animationiteration: Rs("Animation", "AnimationIteration"),
    animationstart: Rs("Animation", "AnimationStart"),
    transitionend: Rs("Transition", "TransitionEnd"),
  },
  ol = {},
  Nu = {};
cn &&
  ((Nu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete lr.animationend.animation,
    delete lr.animationiteration.animation,
    delete lr.animationstart.animation),
  "TransitionEvent" in window || delete lr.transitionend.transition);
function Po(e) {
  if (ol[e]) return ol[e];
  if (!lr[e]) return e;
  var t = lr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Nu) return (ol[e] = t[n]);
  return e;
}
var ju = Po("animationend"),
  Su = Po("animationiteration"),
  Cu = Po("animationstart"),
  ku = Po("transitionend"),
  Du = new Map(),
  Oi =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Pn(e, t) {
  Du.set(e, t), qn(t, [e]);
}
for (var ll = 0; ll < Oi.length; ll++) {
  var al = Oi[ll],
    Kp = al.toLowerCase(),
    Jp = al[0].toUpperCase() + al.slice(1);
  Pn(Kp, "on" + Jp);
}
Pn(ju, "onAnimationEnd");
Pn(Su, "onAnimationIteration");
Pn(Cu, "onAnimationStart");
Pn("dblclick", "onDoubleClick");
Pn("focusin", "onFocus");
Pn("focusout", "onBlur");
Pn(ku, "onTransitionEnd");
br("onMouseEnter", ["mouseout", "mouseover"]);
br("onMouseLeave", ["mouseout", "mouseover"]);
br("onPointerEnter", ["pointerout", "pointerover"]);
br("onPointerLeave", ["pointerout", "pointerover"]);
qn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
qn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
qn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
qn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Vr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Zp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));
function Li(e, t, n) {
  var s = e.type || "unknown-event";
  (e.currentTarget = n), Kf(s, t, void 0, e), (e.currentTarget = null);
}
function _u(e, t) {
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
function Le(e, t) {
  var n = t[Vl];
  n === void 0 && (n = t[Vl] = new Set());
  var s = e + "__bubble";
  n.has(s) || (Mu(t, e, 2, !1), n.add(s));
}
function il(e, t, n) {
  var s = 0;
  t && (s |= 4), Mu(n, e, s, t);
}
var Ts = "_reactListening" + Math.random().toString(36).slice(2);
function cs(e) {
  if (!e[Ts]) {
    (e[Ts] = !0),
      $c.forEach(function (n) {
        n !== "selectionchange" && (Zp.has(n) || il(n, !1, e), il(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ts] || ((t[Ts] = !0), il("selectionchange", !1, t));
  }
}
function Mu(e, t, n, s) {
  switch (fu(t)) {
    case 1:
      var o = pp;
      break;
    case 4:
      o = mp;
      break;
    default:
      o = Da;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Tl ||
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
          if (((a = On(i)), a === null)) return;
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
      p = ja(n),
      m = [];
    e: {
      var f = Du.get(e);
      if (f !== void 0) {
        var b = Ma,
          w = e;
        switch (e) {
          case "keypress":
            if (Ys(n) === 0) break e;
          case "keydown":
          case "keyup":
            b = Mp;
            break;
          case "focusin":
            (w = "focus"), (b = nl);
            break;
          case "focusout":
            (w = "blur"), (b = nl);
            break;
          case "beforeblur":
          case "afterblur":
            b = nl;
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
            b = ki;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = xp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = Pp;
            break;
          case ju:
          case Su:
          case Cu:
            b = wp;
            break;
          case ku:
            b = Tp;
            break;
          case "scroll":
            b = hp;
            break;
          case "wheel":
            b = $p;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = Np;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = _i;
        }
        var E = (t & 4) !== 0,
          k = !E && e === "scroll",
          u = E ? (f !== null ? f + "Capture" : null) : f;
        E = [];
        for (var d = g, x; d !== null; ) {
          x = d;
          var D = x.stateNode;
          if (
            (x.tag === 5 &&
              D !== null &&
              ((x = D),
              u !== null && ((D = rs(d, u)), D != null && E.push(us(d, D, x)))),
            k)
          )
            break;
          d = d.return;
        }
        0 < E.length &&
          ((f = new b(f, w, null, n, p)), m.push({ event: f, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (b = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Pl &&
            (w = n.relatedTarget || n.fromElement) &&
            (On(w) || w[un]))
        )
          break e;
        if (
          (b || f) &&
          ((f =
            p.window === p
              ? p
              : (f = p.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          b
            ? ((w = n.relatedTarget || n.toElement),
              (b = g),
              (w = w ? On(w) : null),
              w !== null &&
                ((k = Yn(w)), w !== k || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((b = null), (w = g)),
          b !== w)
        ) {
          if (
            ((E = ki),
            (D = "onMouseLeave"),
            (u = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((E = _i),
              (D = "onPointerLeave"),
              (u = "onPointerEnter"),
              (d = "pointer")),
            (k = b == null ? f : ar(b)),
            (x = w == null ? f : ar(w)),
            (f = new E(D, d + "leave", b, n, p)),
            (f.target = k),
            (f.relatedTarget = x),
            (D = null),
            On(p) === g &&
              ((E = new E(u, d + "enter", w, n, p)),
              (E.target = x),
              (E.relatedTarget = k),
              (D = E)),
            (k = D),
            b && w)
          )
            t: {
              for (E = b, u = w, d = 0, x = E; x; x = tr(x)) d++;
              for (x = 0, D = u; D; D = tr(D)) x++;
              for (; 0 < d - x; ) (E = tr(E)), d--;
              for (; 0 < x - d; ) (u = tr(u)), x--;
              for (; d--; ) {
                if (E === u || (u !== null && E === u.alternate)) break t;
                (E = tr(E)), (u = tr(u));
              }
              E = null;
            }
          else E = null;
          b !== null && Ui(m, f, b, E, !1),
            w !== null && k !== null && Ui(m, k, w, E, !0);
        }
      }
      e: {
        if (
          ((f = g ? ar(g) : window),
          (b = f.nodeName && f.nodeName.toLowerCase()),
          b === "select" || (b === "input" && f.type === "file"))
        )
          var L = Fp;
        else if (Ii(f))
          if (yu) L = qp;
          else {
            L = Vp;
            var I = Hp;
          }
        else
          (b = f.nodeName) &&
            b.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (L = Wp);
        if (L && (L = L(e, g))) {
          xu(m, L, n, p);
          break e;
        }
        I && I(e, f, g),
          e === "focusout" &&
            (I = f._wrapperState) &&
            I.controlled &&
            f.type === "number" &&
            Dl(f, "number", f.value);
      }
      switch (((I = g ? ar(g) : window), e)) {
        case "focusin":
          (Ii(I) || I.contentEditable === "true") &&
            ((or = I), (Ul = g), (Qr = null));
          break;
        case "focusout":
          Qr = Ul = or = null;
          break;
        case "mousedown":
          Bl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Bl = !1), $i(m, n, p);
          break;
        case "selectionchange":
          if (Qp) break;
        case "keydown":
        case "keyup":
          $i(m, n, p);
      }
      var A;
      if (Ia)
        e: {
          switch (e) {
            case "compositionstart":
              var M = "onCompositionStart";
              break e;
            case "compositionend":
              M = "onCompositionEnd";
              break e;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break e;
          }
          M = void 0;
        }
      else
        sr
          ? hu(e, n) && (M = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M &&
        (mu &&
          n.locale !== "ko" &&
          (sr || M !== "onCompositionStart"
            ? M === "onCompositionEnd" && sr && (A = pu())
            : ((wn = p),
              (_a = "value" in wn ? wn.value : wn.textContent),
              (sr = !0))),
        (I = uo(g, M)),
        0 < I.length &&
          ((M = new Di(M, e, null, n, p)),
          m.push({ event: M, listeners: I }),
          A ? (M.data = A) : ((A = gu(n)), A !== null && (M.data = A)))),
        (A = Lp ? Up(e, n) : Bp(e, n)) &&
          ((g = uo(g, "onBeforeInput")),
          0 < g.length &&
            ((p = new Di("onBeforeInput", "beforeinput", null, n, p)),
            m.push({ event: p, listeners: g }),
            (p.data = A)));
    }
    _u(m, t);
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
      (l = rs(e, n)),
      l != null && s.unshift(us(e, l, o)),
      (l = rs(e, t)),
      l != null && s.push(us(e, l, o))),
      (e = e.return);
  }
  return s;
}
function tr(e) {
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
        ? ((c = rs(n, l)), c != null && a.unshift(us(n, c, i)))
        : o || ((c = rs(n, l)), c != null && a.push(us(n, c, i)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var em = /\r\n?/g,
  tm = /\u0000|\uFFFD/g;
function Bi(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      em,
      `
`
    )
    .replace(tm, "");
}
function As(e, t, n) {
  if (((t = Bi(t)), Bi(e) !== t && n)) throw Error(oe(425));
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
  nm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  zi = typeof Promise == "function" ? Promise : void 0,
  rm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof zi < "u"
      ? function (e) {
          return zi.resolve(null).then(e).catch(sm);
        }
      : Hl;
function sm(e) {
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
          e.removeChild(o), ls(t);
          return;
        }
        s--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || s++;
    n = o;
  } while (n);
  ls(t);
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
var Ir = Math.random().toString(36).slice(2),
  Kt = "__reactFiber$" + Ir,
  ds = "__reactProps$" + Ir,
  un = "__reactContainer$" + Ir,
  Vl = "__reactEvents$" + Ir,
  om = "__reactListeners$" + Ir,
  lm = "__reactHandles$" + Ir;
function On(e) {
  var t = e[Kt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[un] || n[Kt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Gi(e); e !== null; ) {
          if ((n = e[Kt])) return n;
          e = Gi(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function bs(e) {
  return (
    (e = e[Kt] || e[un]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ar(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(oe(33));
}
function Ro(e) {
  return e[ds] || null;
}
var Wl = [],
  ir = -1;
function Rn(e) {
  return { current: e };
}
function Ue(e) {
  0 > ir || ((e.current = Wl[ir]), (Wl[ir] = null), ir--);
}
function Oe(e, t) {
  ir++, (Wl[ir] = e.current), (e.current = t);
}
var In = {},
  ct = Rn(In),
  wt = Rn(!1),
  Gn = In;
function Nr(e, t) {
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
  Ue(wt), Ue(ct);
}
function Fi(e, t, n) {
  if (ct.current !== In) throw Error(oe(168));
  Oe(ct, t), Oe(wt, n);
}
function Eu(e, t, n) {
  var s = e.stateNode;
  if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
    return n;
  s = s.getChildContext();
  for (var o in s) if (!(o in t)) throw Error(oe(108, Hf(e) || "Unknown", o));
  return We({}, n, s);
}
function mo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || In),
    (Gn = ct.current),
    Oe(ct, e),
    Oe(wt, wt.current),
    !0
  );
}
function Hi(e, t, n) {
  var s = e.stateNode;
  if (!s) throw Error(oe(169));
  n
    ? ((e = Eu(e, t, Gn)),
      (s.__reactInternalMemoizedMergedChildContext = e),
      Ue(wt),
      Ue(ct),
      Oe(ct, e))
    : Ue(wt),
    Oe(wt, n);
}
var rn = null,
  To = !1,
  dl = !1;
function Iu(e) {
  rn === null ? (rn = [e]) : rn.push(e);
}
function am(e) {
  (To = !0), Iu(e);
}
function Tn() {
  if (!dl && rn !== null) {
    dl = !0;
    var e = 0,
      t = Ae;
    try {
      var n = rn;
      for (Ae = 1; e < n.length; e++) {
        var s = n[e];
        do s = s(!0);
        while (s !== null);
      }
      (rn = null), (To = !1);
    } catch (o) {
      throw (rn !== null && (rn = rn.slice(e + 1)), nu(Sa, Tn), o);
    } finally {
      (Ae = t), (dl = !1);
    }
  }
  return null;
}
var cr = [],
  ur = 0,
  ho = null,
  go = 0,
  It = [],
  Pt = 0,
  Fn = null,
  on = 1,
  ln = "";
function An(e, t) {
  (cr[ur++] = go), (cr[ur++] = ho), (ho = e), (go = t);
}
function Pu(e, t, n) {
  (It[Pt++] = on), (It[Pt++] = ln), (It[Pt++] = Fn), (Fn = e);
  var s = on;
  e = ln;
  var o = 32 - Ht(s) - 1;
  (s &= ~(1 << o)), (n += 1);
  var l = 32 - Ht(t) + o;
  if (30 < l) {
    var a = o - (o % 5);
    (l = (s & ((1 << a) - 1)).toString(32)),
      (s >>= a),
      (o -= a),
      (on = (1 << (32 - Ht(t) + o)) | (n << o) | s),
      (ln = l + e);
  } else (on = (1 << l) | (n << o) | s), (ln = e);
}
function Ra(e) {
  e.return !== null && (An(e, 1), Pu(e, 1, 0));
}
function Ta(e) {
  for (; e === ho; )
    (ho = cr[--ur]), (cr[ur] = null), (go = cr[--ur]), (cr[ur] = null);
  for (; e === Fn; )
    (Fn = It[--Pt]),
      (It[Pt] = null),
      (ln = It[--Pt]),
      (It[Pt] = null),
      (on = It[--Pt]),
      (It[Pt] = null);
}
var kt = null,
  Ct = null,
  ze = !1,
  Ft = null;
function Ru(e, t) {
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
          ? ((e.stateNode = t), (kt = e), (Ct = Cn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (kt = e), (Ct = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Fn !== null ? { id: on, overflow: ln } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (kt = e),
            (Ct = null),
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
  if (ze) {
    var t = Ct;
    if (t) {
      var n = t;
      if (!Vi(e, t)) {
        if (ql(e)) throw Error(oe(418));
        t = Cn(n.nextSibling);
        var s = kt;
        t && Vi(e, t)
          ? Ru(s, n)
          : ((e.flags = (e.flags & -4097) | 2), (ze = !1), (kt = e));
      }
    } else {
      if (ql(e)) throw Error(oe(418));
      (e.flags = (e.flags & -4097) | 2), (ze = !1), (kt = e);
    }
  }
}
function Wi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  kt = e;
}
function $s(e) {
  if (e !== kt) return !1;
  if (!ze) return Wi(e), (ze = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Fl(e.type, e.memoizedProps))),
    t && (t = Ct))
  ) {
    if (ql(e)) throw (Tu(), Error(oe(418)));
    for (; t; ) Ru(e, t), (t = Cn(t.nextSibling));
  }
  if ((Wi(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(oe(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ct = Cn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ct = null;
    }
  } else Ct = kt ? Cn(e.stateNode.nextSibling) : null;
  return !0;
}
function Tu() {
  for (var e = Ct; e; ) e = Cn(e.nextSibling);
}
function jr() {
  (Ct = kt = null), (ze = !1);
}
function Aa(e) {
  Ft === null ? (Ft = [e]) : Ft.push(e);
}
var im = pn.ReactCurrentBatchConfig;
function Ur(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(oe(309));
        var s = n.stateNode;
      }
      if (!s) throw Error(oe(147, e));
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
    if (typeof e != "string") throw Error(oe(284));
    if (!n._owner) throw Error(oe(290, e));
  }
  return e;
}
function Os(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      oe(
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
function Au(e) {
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
    return (u = Mn(u, d)), (u.index = 0), (u.sibling = null), u;
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
  function i(u, d, x, D) {
    return d === null || d.tag !== 6
      ? ((d = yl(x, u.mode, D)), (d.return = u), d)
      : ((d = o(d, x)), (d.return = u), d);
  }
  function c(u, d, x, D) {
    var L = x.type;
    return L === rr
      ? p(u, d, x.props.children, D, x.key)
      : d !== null &&
        (d.elementType === L ||
          (typeof L == "object" &&
            L !== null &&
            L.$$typeof === gn &&
            qi(L) === d.type))
      ? ((D = o(d, x.props)), (D.ref = Ur(u, d, x)), (D.return = u), D)
      : ((D = to(x.type, x.key, x.props, null, u.mode, D)),
        (D.ref = Ur(u, d, x)),
        (D.return = u),
        D);
  }
  function g(u, d, x, D) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== x.containerInfo ||
      d.stateNode.implementation !== x.implementation
      ? ((d = vl(x, u.mode, D)), (d.return = u), d)
      : ((d = o(d, x.children || [])), (d.return = u), d);
  }
  function p(u, d, x, D, L) {
    return d === null || d.tag !== 7
      ? ((d = zn(x, u.mode, D, L)), (d.return = u), d)
      : ((d = o(d, x)), (d.return = u), d);
  }
  function m(u, d, x) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = yl("" + d, u.mode, x)), (d.return = u), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ks:
          return (
            (x = to(d.type, d.key, d.props, null, u.mode, x)),
            (x.ref = Ur(u, null, d)),
            (x.return = u),
            x
          );
        case nr:
          return (d = vl(d, u.mode, x)), (d.return = u), d;
        case gn:
          var D = d._init;
          return m(u, D(d._payload), x);
      }
      if (Fr(d) || Tr(d))
        return (d = zn(d, u.mode, x, null)), (d.return = u), d;
      Os(u, d);
    }
    return null;
  }
  function f(u, d, x, D) {
    var L = d !== null ? d.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return L !== null ? null : i(u, d, "" + x, D);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ks:
          return x.key === L ? c(u, d, x, D) : null;
        case nr:
          return x.key === L ? g(u, d, x, D) : null;
        case gn:
          return (L = x._init), f(u, d, L(x._payload), D);
      }
      if (Fr(x) || Tr(x)) return L !== null ? null : p(u, d, x, D, null);
      Os(u, x);
    }
    return null;
  }
  function b(u, d, x, D, L) {
    if ((typeof D == "string" && D !== "") || typeof D == "number")
      return (u = u.get(x) || null), i(d, u, "" + D, L);
    if (typeof D == "object" && D !== null) {
      switch (D.$$typeof) {
        case ks:
          return (u = u.get(D.key === null ? x : D.key) || null), c(d, u, D, L);
        case nr:
          return (u = u.get(D.key === null ? x : D.key) || null), g(d, u, D, L);
        case gn:
          var I = D._init;
          return b(u, d, x, I(D._payload), L);
      }
      if (Fr(D) || Tr(D)) return (u = u.get(x) || null), p(d, u, D, L, null);
      Os(d, D);
    }
    return null;
  }
  function w(u, d, x, D) {
    for (
      var L = null, I = null, A = d, M = (d = 0), Z = null;
      A !== null && M < x.length;
      M++
    ) {
      A.index > M ? ((Z = A), (A = null)) : (Z = A.sibling);
      var C = f(u, A, x[M], D);
      if (C === null) {
        A === null && (A = Z);
        break;
      }
      e && A && C.alternate === null && t(u, A),
        (d = l(C, d, M)),
        I === null ? (L = C) : (I.sibling = C),
        (I = C),
        (A = Z);
    }
    if (M === x.length) return n(u, A), ze && An(u, M), L;
    if (A === null) {
      for (; M < x.length; M++)
        (A = m(u, x[M], D)),
          A !== null &&
            ((d = l(A, d, M)), I === null ? (L = A) : (I.sibling = A), (I = A));
      return ze && An(u, M), L;
    }
    for (A = s(u, A); M < x.length; M++)
      (Z = b(A, u, M, x[M], D)),
        Z !== null &&
          (e && Z.alternate !== null && A.delete(Z.key === null ? M : Z.key),
          (d = l(Z, d, M)),
          I === null ? (L = Z) : (I.sibling = Z),
          (I = Z));
    return (
      e &&
        A.forEach(function (B) {
          return t(u, B);
        }),
      ze && An(u, M),
      L
    );
  }
  function E(u, d, x, D) {
    var L = Tr(x);
    if (typeof L != "function") throw Error(oe(150));
    if (((x = L.call(x)), x == null)) throw Error(oe(151));
    for (
      var I = (L = null), A = d, M = (d = 0), Z = null, C = x.next();
      A !== null && !C.done;
      M++, C = x.next()
    ) {
      A.index > M ? ((Z = A), (A = null)) : (Z = A.sibling);
      var B = f(u, A, C.value, D);
      if (B === null) {
        A === null && (A = Z);
        break;
      }
      e && A && B.alternate === null && t(u, A),
        (d = l(B, d, M)),
        I === null ? (L = B) : (I.sibling = B),
        (I = B),
        (A = Z);
    }
    if (C.done) return n(u, A), ze && An(u, M), L;
    if (A === null) {
      for (; !C.done; M++, C = x.next())
        (C = m(u, C.value, D)),
          C !== null &&
            ((d = l(C, d, M)), I === null ? (L = C) : (I.sibling = C), (I = C));
      return ze && An(u, M), L;
    }
    for (A = s(u, A); !C.done; M++, C = x.next())
      (C = b(A, u, M, C.value, D)),
        C !== null &&
          (e && C.alternate !== null && A.delete(C.key === null ? M : C.key),
          (d = l(C, d, M)),
          I === null ? (L = C) : (I.sibling = C),
          (I = C));
    return (
      e &&
        A.forEach(function (X) {
          return t(u, X);
        }),
      ze && An(u, M),
      L
    );
  }
  function k(u, d, x, D) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === rr &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case ks:
          e: {
            for (var L = x.key, I = d; I !== null; ) {
              if (I.key === L) {
                if (((L = x.type), L === rr)) {
                  if (I.tag === 7) {
                    n(u, I.sibling),
                      (d = o(I, x.props.children)),
                      (d.return = u),
                      (u = d);
                    break e;
                  }
                } else if (
                  I.elementType === L ||
                  (typeof L == "object" &&
                    L !== null &&
                    L.$$typeof === gn &&
                    qi(L) === I.type)
                ) {
                  n(u, I.sibling),
                    (d = o(I, x.props)),
                    (d.ref = Ur(u, I, x)),
                    (d.return = u),
                    (u = d);
                  break e;
                }
                n(u, I);
                break;
              } else t(u, I);
              I = I.sibling;
            }
            x.type === rr
              ? ((d = zn(x.props.children, u.mode, D, x.key)),
                (d.return = u),
                (u = d))
              : ((D = to(x.type, x.key, x.props, null, u.mode, D)),
                (D.ref = Ur(u, d, x)),
                (D.return = u),
                (u = D));
          }
          return a(u);
        case nr:
          e: {
            for (I = x.key; d !== null; ) {
              if (d.key === I)
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
            (d = vl(x, u.mode, D)), (d.return = u), (u = d);
          }
          return a(u);
        case gn:
          return (I = x._init), k(u, d, I(x._payload), D);
      }
      if (Fr(x)) return w(u, d, x, D);
      if (Tr(x)) return E(u, d, x, D);
      Os(u, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        d !== null && d.tag === 6
          ? (n(u, d.sibling), (d = o(d, x)), (d.return = u), (u = d))
          : (n(u, d), (d = yl(x, u.mode, D)), (d.return = u), (u = d)),
        a(u))
      : n(u, d);
  }
  return k;
}
var Sr = Au(!0),
  $u = Au(!1),
  xo = Rn(null),
  yo = null,
  dr = null,
  $a = null;
function Oa() {
  $a = dr = yo = null;
}
function La(e) {
  var t = xo.current;
  Ue(xo), (e._currentValue = t);
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
function vr(e, t) {
  (yo = e),
    ($a = dr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (yt = !0), (e.firstContext = null));
}
function $t(e) {
  var t = e._currentValue;
  if ($a !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), dr === null)) {
      if (yo === null) throw Error(oe(308));
      (dr = e), (yo.dependencies = { lanes: 0, firstContext: e });
    } else dr = dr.next = e;
  return t;
}
var Ln = null;
function Ua(e) {
  Ln === null ? (Ln = [e]) : Ln.push(e);
}
function Ou(e, t, n, s) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Ua(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    dn(e, s)
  );
}
function dn(e, t) {
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
function Lu(e, t) {
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
  if (((s = s.shared), Te & 2)) {
    var o = s.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (s.pending = t),
      dn(e, n)
    );
  }
  return (
    (o = s.interleaved),
    o === null ? ((t.next = t), Ua(s)) : ((t.next = o.next), (o.next = t)),
    (s.interleaved = t),
    dn(e, n)
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
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (i = p.lastBaseUpdate),
      i !== a &&
        (i === null ? (p.firstBaseUpdate = g) : (i.next = g),
        (p.lastBaseUpdate = c)));
  }
  if (l !== null) {
    var m = o.baseState;
    (a = 0), (p = g = c = null), (i = l);
    do {
      var f = i.lane,
        b = i.eventTime;
      if ((s & f) === f) {
        p !== null &&
          (p = p.next =
            {
              eventTime: b,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var w = e,
            E = i;
          switch (((f = t), (b = n), E.tag)) {
            case 1:
              if (((w = E.payload), typeof w == "function")) {
                m = w.call(b, m, f);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = E.payload),
                (f = typeof w == "function" ? w.call(b, m, f) : w),
                f == null)
              )
                break e;
              m = We({}, m, f);
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
        (b = {
          eventTime: b,
          lane: f,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          p === null ? ((g = p = b), (c = m)) : (p = p.next = b),
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
      (p === null && (c = m),
      (o.baseState = c),
      (o.firstBaseUpdate = g),
      (o.lastBaseUpdate = p),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (Vn |= a), (e.lanes = a), (e.memoizedState = m);
  }
}
function Xi(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var s = e[t],
        o = s.callback;
      if (o !== null) {
        if (((s.callback = null), (s = n), typeof o != "function"))
          throw Error(oe(191, o));
        o.call(s);
      }
    }
}
var Ns = {},
  Zt = Rn(Ns),
  fs = Rn(Ns),
  ps = Rn(Ns);
function Un(e) {
  if (e === Ns) throw Error(oe(174));
  return e;
}
function za(e, t) {
  switch ((Oe(ps, t), Oe(fs, e), Oe(Zt, Ns), (e = t.nodeType), e)) {
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
  Ue(Zt), Oe(Zt, t);
}
function Cr() {
  Ue(Zt), Ue(fs), Ue(ps);
}
function Uu(e) {
  Un(ps.current);
  var t = Un(Zt.current),
    n = Ml(t, e.type);
  t !== n && (Oe(fs, e), Oe(Zt, n));
}
function Ga(e) {
  fs.current === e && (Ue(Zt), Ue(fs));
}
var Fe = Rn(0);
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
  Hn = 0,
  Ve = null,
  Je = null,
  et = null,
  bo = !1,
  Kr = !1,
  ms = 0,
  cm = 0;
function lt() {
  throw Error(oe(321));
}
function Ha(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Wt(e[n], t[n])) return !1;
  return !0;
}
function Va(e, t, n, s, o, l) {
  if (
    ((Hn = l),
    (Ve = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Qs.current = e === null || e.memoizedState === null ? pm : mm),
    (e = n(s, o)),
    Kr)
  ) {
    l = 0;
    do {
      if (((Kr = !1), (ms = 0), 25 <= l)) throw Error(oe(301));
      (l += 1),
        (et = Je = null),
        (t.updateQueue = null),
        (Qs.current = hm),
        (e = n(s, o));
    } while (Kr);
  }
  if (
    ((Qs.current = No),
    (t = Je !== null && Je.next !== null),
    (Hn = 0),
    (et = Je = Ve = null),
    (bo = !1),
    t)
  )
    throw Error(oe(300));
  return e;
}
function Wa() {
  var e = ms !== 0;
  return (ms = 0), e;
}
function Qt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return et === null ? (Ve.memoizedState = et = e) : (et = et.next = e), et;
}
function Ot() {
  if (Je === null) {
    var e = Ve.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Je.next;
  var t = et === null ? Ve.memoizedState : et.next;
  if (t !== null) (et = t), (Je = e);
  else {
    if (e === null) throw Error(oe(310));
    (Je = e),
      (e = {
        memoizedState: Je.memoizedState,
        baseState: Je.baseState,
        baseQueue: Je.baseQueue,
        queue: Je.queue,
        next: null,
      }),
      et === null ? (Ve.memoizedState = et = e) : (et = et.next = e);
  }
  return et;
}
function hs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ml(e) {
  var t = Ot(),
    n = t.queue;
  if (n === null) throw Error(oe(311));
  n.lastRenderedReducer = e;
  var s = Je,
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
      var p = g.lane;
      if ((Hn & p) === p)
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
        var m = {
          lane: p,
          action: g.action,
          hasEagerState: g.hasEagerState,
          eagerState: g.eagerState,
          next: null,
        };
        c === null ? ((i = c = m), (a = s)) : (c = c.next = m),
          (Ve.lanes |= p),
          (Vn |= p);
      }
      g = g.next;
    } while (g !== null && g !== l);
    c === null ? (a = s) : (c.next = i),
      Wt(s, t.memoizedState) || (yt = !0),
      (t.memoizedState = s),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = s);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (Ve.lanes |= l), (Vn |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function hl(e) {
  var t = Ot(),
    n = t.queue;
  if (n === null) throw Error(oe(311));
  n.lastRenderedReducer = e;
  var s = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (l = e(l, a.action)), (a = a.next);
    while (a !== o);
    Wt(l, t.memoizedState) || (yt = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, s];
}
function Bu() {}
function zu(e, t) {
  var n = Ve,
    s = Ot(),
    o = t(),
    l = !Wt(s.memoizedState, o);
  if (
    (l && ((s.memoizedState = o), (yt = !0)),
    (s = s.queue),
    qa(Hu.bind(null, n, s, e), [e]),
    s.getSnapshot !== t || l || (et !== null && et.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      gs(9, Fu.bind(null, n, s, o, t), void 0, null),
      tt === null)
    )
      throw Error(oe(349));
    Hn & 30 || Gu(n, t, o);
  }
  return o;
}
function Gu(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ve.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Fu(e, t, n, s) {
  (t.value = n), (t.getSnapshot = s), Vu(t) && Wu(e);
}
function Hu(e, t, n) {
  return n(function () {
    Vu(t) && Wu(e);
  });
}
function Vu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Wt(e, n);
  } catch {
    return !0;
  }
}
function Wu(e) {
  var t = dn(e, 1);
  t !== null && Vt(t, e, 1, -1);
}
function Qi(e) {
  var t = Qt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: hs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = fm.bind(null, Ve, e)),
    [t.memoizedState, e]
  );
}
function gs(e, t, n, s) {
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
function qu() {
  return Ot().memoizedState;
}
function Ks(e, t, n, s) {
  var o = Qt();
  (Ve.flags |= e),
    (o.memoizedState = gs(1 | t, n, void 0, s === void 0 ? null : s));
}
function Ao(e, t, n, s) {
  var o = Ot();
  s = s === void 0 ? null : s;
  var l = void 0;
  if (Je !== null) {
    var a = Je.memoizedState;
    if (((l = a.destroy), s !== null && Ha(s, a.deps))) {
      o.memoizedState = gs(t, n, l, s);
      return;
    }
  }
  (Ve.flags |= e), (o.memoizedState = gs(1 | t, n, l, s));
}
function Ki(e, t) {
  return Ks(8390656, 8, e, t);
}
function qa(e, t) {
  return Ao(2048, 8, e, t);
}
function Yu(e, t) {
  return Ao(4, 2, e, t);
}
function Xu(e, t) {
  return Ao(4, 4, e, t);
}
function Qu(e, t) {
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
function Ku(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ao(4, 4, Qu.bind(null, t, e), n)
  );
}
function Ya() {}
function Ju(e, t) {
  var n = Ot();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && Ha(t, s[1])
    ? s[0]
    : ((n.memoizedState = [e, t]), e);
}
function Zu(e, t) {
  var n = Ot();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && Ha(t, s[1])
    ? s[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ed(e, t, n) {
  return Hn & 21
    ? (Wt(n, t) || ((n = ou()), (Ve.lanes |= n), (Vn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (yt = !0)), (e.memoizedState = n));
}
function um(e, t) {
  var n = Ae;
  (Ae = n !== 0 && 4 > n ? n : 4), e(!0);
  var s = pl.transition;
  pl.transition = {};
  try {
    e(!1), t();
  } finally {
    (Ae = n), (pl.transition = s);
  }
}
function td() {
  return Ot().memoizedState;
}
function dm(e, t, n) {
  var s = _n(e);
  if (
    ((n = {
      lane: s,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    nd(e))
  )
    rd(t, n);
  else if (((n = Ou(e, t, n, s)), n !== null)) {
    var o = dt();
    Vt(n, e, s, o), sd(n, t, s);
  }
}
function fm(e, t, n) {
  var s = _n(e),
    o = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (nd(e)) rd(t, o);
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
        if (((o.hasEagerState = !0), (o.eagerState = i), Wt(i, a))) {
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
    (n = Ou(e, t, o, s)),
      n !== null && ((o = dt()), Vt(n, e, s, o), sd(n, t, s));
  }
}
function nd(e) {
  var t = e.alternate;
  return e === Ve || (t !== null && t === Ve);
}
function rd(e, t) {
  Kr = bo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function sd(e, t, n) {
  if (n & 4194240) {
    var s = t.lanes;
    (s &= e.pendingLanes), (n |= s), (t.lanes = n), Ca(e, n);
  }
}
var No = {
    readContext: $t,
    useCallback: lt,
    useContext: lt,
    useEffect: lt,
    useImperativeHandle: lt,
    useInsertionEffect: lt,
    useLayoutEffect: lt,
    useMemo: lt,
    useReducer: lt,
    useRef: lt,
    useState: lt,
    useDebugValue: lt,
    useDeferredValue: lt,
    useTransition: lt,
    useMutableSource: lt,
    useSyncExternalStore: lt,
    useId: lt,
    unstable_isNewReconciler: !1,
  },
  pm = {
    readContext: $t,
    useCallback: function (e, t) {
      return (Qt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: $t,
    useEffect: Ki,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ks(4194308, 4, Qu.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ks(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ks(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Qt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var s = Qt();
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
        (e = e.dispatch = dm.bind(null, Ve, e)),
        [s.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Qt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Qi,
    useDebugValue: Ya,
    useDeferredValue: function (e) {
      return (Qt().memoizedState = e);
    },
    useTransition: function () {
      var e = Qi(!1),
        t = e[0];
      return (e = um.bind(null, e[1])), (Qt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var s = Ve,
        o = Qt();
      if (ze) {
        if (n === void 0) throw Error(oe(407));
        n = n();
      } else {
        if (((n = t()), tt === null)) throw Error(oe(349));
        Hn & 30 || Gu(s, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Ki(Hu.bind(null, s, l, e), [e]),
        (s.flags |= 2048),
        gs(9, Fu.bind(null, s, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Qt(),
        t = tt.identifierPrefix;
      if (ze) {
        var n = ln,
          s = on;
        (n = (s & ~(1 << (32 - Ht(s) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ms++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = cm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  mm = {
    readContext: $t,
    useCallback: Ju,
    useContext: $t,
    useEffect: qa,
    useImperativeHandle: Ku,
    useInsertionEffect: Yu,
    useLayoutEffect: Xu,
    useMemo: Zu,
    useReducer: ml,
    useRef: qu,
    useState: function () {
      return ml(hs);
    },
    useDebugValue: Ya,
    useDeferredValue: function (e) {
      var t = Ot();
      return ed(t, Je.memoizedState, e);
    },
    useTransition: function () {
      var e = ml(hs)[0],
        t = Ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Bu,
    useSyncExternalStore: zu,
    useId: td,
    unstable_isNewReconciler: !1,
  },
  hm = {
    readContext: $t,
    useCallback: Ju,
    useContext: $t,
    useEffect: qa,
    useImperativeHandle: Ku,
    useInsertionEffect: Yu,
    useLayoutEffect: Xu,
    useMemo: Zu,
    useReducer: hl,
    useRef: qu,
    useState: function () {
      return hl(hs);
    },
    useDebugValue: Ya,
    useDeferredValue: function (e) {
      var t = Ot();
      return Je === null ? (t.memoizedState = e) : ed(t, Je.memoizedState, e);
    },
    useTransition: function () {
      var e = hl(hs)[0],
        t = Ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Bu,
    useSyncExternalStore: zu,
    useId: td,
    unstable_isNewReconciler: !1,
  };
function zt(e, t) {
  if (e && e.defaultProps) {
    (t = We({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ql(e, t, n, s) {
  (t = e.memoizedState),
    (n = n(s, t)),
    (n = n == null ? t : We({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var $o = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Yn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var s = dt(),
      o = _n(e),
      l = an(s, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = kn(e, l, o)),
      t !== null && (Vt(t, e, o, s), Xs(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var s = dt(),
      o = _n(e),
      l = an(s, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = kn(e, l, o)),
      t !== null && (Vt(t, e, o, s), Xs(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = dt(),
      s = _n(e),
      o = an(n, s);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = kn(e, o, s)),
      t !== null && (Vt(t, e, s, n), Xs(t, e, s));
  },
};
function Ji(e, t, n, s, o, l, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(s, l, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !is(n, s) || !is(o, l)
      : !0
  );
}
function od(e, t, n) {
  var s = !1,
    o = In,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = $t(l))
      : ((o = bt(t) ? Gn : ct.current),
        (s = t.contextTypes),
        (l = (s = s != null) ? Nr(e, o) : In)),
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
    ? (o.context = $t(l))
    : ((l = bt(t) ? Gn : ct.current), (o.context = Nr(e, l))),
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
function kr(e, t) {
  try {
    var n = "",
      s = t;
    do (n += Ff(s)), (s = s.return);
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
var gm = typeof WeakMap == "function" ? WeakMap : Map;
function ld(e, t, n) {
  (n = an(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var s = t.value;
  return (
    (n.callback = function () {
      So || ((So = !0), (ia = s)), Jl(e, t);
    }),
    n
  );
}
function ad(e, t, n) {
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
    s = e.pingCache = new gm();
    var o = new Set();
    s.set(t, o);
  } else (o = s.get(t)), o === void 0 && ((o = new Set()), s.set(t, o));
  o.has(n) || (o.add(n), (e = Em.bind(null, e, t, n)), t.then(e, e));
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
var xm = pn.ReactCurrentOwner,
  yt = !1;
function ut(e, t, n, s) {
  t.child = e === null ? $u(t, null, n, s) : Sr(t, e.child, n, s);
}
function rc(e, t, n, s, o) {
  n = n.render;
  var l = t.ref;
  return (
    vr(t, o),
    (s = Va(e, t, n, s, l, o)),
    (n = Wa()),
    e !== null && !yt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        fn(e, t, o))
      : (ze && n && Ra(t), (t.flags |= 1), ut(e, t, s, o), t.child)
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
      ? ((t.tag = 15), (t.type = l), id(e, t, l, s, o))
      : ((e = to(n.type, null, s, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var a = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : is), n(a, s) && e.ref === t.ref)
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
function id(e, t, n, s, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (is(l, s) && e.ref === t.ref)
      if (((yt = !1), (t.pendingProps = s = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (yt = !0);
      else return (t.lanes = e.lanes), fn(e, t, o);
  }
  return Zl(e, t, n, s, o);
}
function cd(e, t, n) {
  var s = t.pendingProps,
    o = s.children,
    l = e !== null ? e.memoizedState : null;
  if (s.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Oe(pr, St),
        (St |= n);
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
          Oe(pr, St),
          (St |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (s = l !== null ? l.baseLanes : n),
        Oe(pr, St),
        (St |= s);
    }
  else
    l !== null ? ((s = l.baseLanes | n), (t.memoizedState = null)) : (s = n),
      Oe(pr, St),
      (St |= s);
  return ut(e, t, o, n), t.child;
}
function ud(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Zl(e, t, n, s, o) {
  var l = bt(n) ? Gn : ct.current;
  return (
    (l = Nr(t, l)),
    vr(t, o),
    (n = Va(e, t, n, s, l, o)),
    (s = Wa()),
    e !== null && !yt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        fn(e, t, o))
      : (ze && s && Ra(t), (t.flags |= 1), ut(e, t, n, o), t.child)
  );
}
function oc(e, t, n, s, o) {
  if (bt(n)) {
    var l = !0;
    mo(t);
  } else l = !1;
  if ((vr(t, o), t.stateNode === null))
    Js(e, t), od(t, n, s), Kl(t, n, s, o), (s = !0);
  else if (e === null) {
    var a = t.stateNode,
      i = t.memoizedProps;
    a.props = i;
    var c = a.context,
      g = n.contextType;
    typeof g == "object" && g !== null
      ? (g = $t(g))
      : ((g = bt(n) ? Gn : ct.current), (g = Nr(t, g)));
    var p = n.getDerivedStateFromProps,
      m =
        typeof p == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== s || c !== g) && Zi(t, a, s, g)),
      (xn = !1);
    var f = t.memoizedState;
    (a.state = f),
      vo(t, s, a, o),
      (c = t.memoizedState),
      i !== s || f !== c || wt.current || xn
        ? (typeof p == "function" && (Ql(t, n, p, s), (c = t.memoizedState)),
          (i = xn || Ji(t, n, i, s, f, c, g))
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
          (a.context = g),
          (s = i))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (s = !1));
  } else {
    (a = t.stateNode),
      Lu(e, t),
      (i = t.memoizedProps),
      (g = t.type === t.elementType ? i : zt(t.type, i)),
      (a.props = g),
      (m = t.pendingProps),
      (f = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = $t(c))
        : ((c = bt(n) ? Gn : ct.current), (c = Nr(t, c)));
    var b = n.getDerivedStateFromProps;
    (p =
      typeof b == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== m || f !== c) && Zi(t, a, s, c)),
      (xn = !1),
      (f = t.memoizedState),
      (a.state = f),
      vo(t, s, a, o);
    var w = t.memoizedState;
    i !== m || f !== w || wt.current || xn
      ? (typeof b == "function" && (Ql(t, n, b, s), (w = t.memoizedState)),
        (g = xn || Ji(t, n, g, s, f, w, c) || !1)
          ? (p ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(s, w, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(s, w, c)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (i === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = s),
            (t.memoizedState = w)),
        (a.props = s),
        (a.state = w),
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
  ud(e, t);
  var a = (t.flags & 128) !== 0;
  if (!s && !a) return o && Hi(t, n, !1), fn(e, t, l);
  (s = t.stateNode), (xm.current = t);
  var i =
    a && typeof n.getDerivedStateFromError != "function" ? null : s.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Sr(t, e.child, null, l)), (t.child = Sr(t, null, i, l)))
      : ut(e, t, i, l),
    (t.memoizedState = s.state),
    o && Hi(t, n, !0),
    t.child
  );
}
function dd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Fi(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Fi(e, t.context, !1),
    za(e, t.containerInfo);
}
function lc(e, t, n, s, o) {
  return jr(), Aa(o), (t.flags |= 256), ut(e, t, n, s), t.child;
}
var ta = { dehydrated: null, treeContext: null, retryLane: 0 };
function na(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function fd(e, t, n) {
  var s = t.pendingProps,
    o = Fe.current,
    l = !1,
    a = (t.flags & 128) !== 0,
    i;
  if (
    ((i = a) ||
      (i = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    i
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Oe(Fe, o & 1),
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
              (e = zn(e, s, n, null)),
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
    return ym(e, t, a, s, i, o, n);
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
      i !== null ? (l = Mn(i, l)) : ((l = zn(l, a, n, null)), (l.flags |= 2)),
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
    Sr(t, e.child, null, n),
    (e = Xa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ym(e, t, n, s, o, l, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (s = gl(Error(oe(422)))), Ls(e, t, a, s))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = s.fallback),
        (o = t.mode),
        (s = Uo({ mode: "visible", children: s.children }, o, 0, null)),
        (l = zn(l, o, a, null)),
        (l.flags |= 2),
        (s.return = t),
        (l.return = t),
        (s.sibling = l),
        (t.child = s),
        t.mode & 1 && Sr(t, e.child, null, a),
        (t.child.memoizedState = na(a)),
        (t.memoizedState = ta),
        l);
  if (!(t.mode & 1)) return Ls(e, t, a, null);
  if (o.data === "$!") {
    if (((s = o.nextSibling && o.nextSibling.dataset), s)) var i = s.dgst;
    return (
      (s = i), (l = Error(oe(419))), (s = gl(l, s, void 0)), Ls(e, t, a, s)
    );
  }
  if (((i = (a & e.childLanes) !== 0), yt || i)) {
    if (((s = tt), s !== null)) {
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
          ((l.retryLane = o), dn(e, o), Vt(s, e, o, -1));
    }
    return ti(), (s = gl(Error(oe(421)))), Ls(e, t, a, s);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Im.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Ct = Cn(o.nextSibling)),
      (kt = t),
      (ze = !0),
      (Ft = null),
      e !== null &&
        ((It[Pt++] = on),
        (It[Pt++] = ln),
        (It[Pt++] = Fn),
        (on = e.id),
        (ln = e.overflow),
        (Fn = t)),
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
function pd(e, t, n) {
  var s = t.pendingProps,
    o = s.revealOrder,
    l = s.tail;
  if ((ut(e, t, s.children, n), (s = Fe.current), s & 2))
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
  if ((Oe(Fe, s), !(t.mode & 1))) t.memoizedState = null;
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
    (Vn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(oe(153));
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
function vm(e, t, n) {
  switch (t.tag) {
    case 3:
      dd(t), jr();
      break;
    case 5:
      Uu(t);
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
      Oe(xo, s._currentValue), (s._currentValue = o);
      break;
    case 13:
      if (((s = t.memoizedState), s !== null))
        return s.dehydrated !== null
          ? (Oe(Fe, Fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? fd(e, t, n)
          : (Oe(Fe, Fe.current & 1),
            (e = fn(e, t, n)),
            e !== null ? e.sibling : null);
      Oe(Fe, Fe.current & 1);
      break;
    case 19:
      if (((s = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (s) return pd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Oe(Fe, Fe.current),
        s)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), cd(e, t, n);
  }
  return fn(e, t, n);
}
var md, ra, hd, gd;
md = function (e, t) {
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
hd = function (e, t, n, s) {
  var o = e.memoizedProps;
  if (o !== s) {
    (e = t.stateNode), Un(Zt.current);
    var l = null;
    switch (n) {
      case "input":
        (o = Cl(e, o)), (s = Cl(e, s)), (l = []);
        break;
      case "select":
        (o = We({}, o, { value: void 0 })),
          (s = We({}, s, { value: void 0 })),
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
            (ts.hasOwnProperty(g)
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
              (ts.hasOwnProperty(g)
                ? (c != null && g === "onScroll" && Le("scroll", e),
                  l || i === c || (l = []))
                : (l = l || []).push(g, c));
    }
    n && (l = l || []).push("style", n);
    var g = l;
    (t.updateQueue = g) && (t.flags |= 4);
  }
};
gd = function (e, t, n, s) {
  n !== s && (t.flags |= 4);
};
function Br(e, t) {
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
function at(e) {
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
function wm(e, t, n) {
  var s = t.pendingProps;
  switch ((Ta(t), t.tag)) {
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
      return at(t), null;
    case 1:
      return bt(t.type) && po(), at(t), null;
    case 3:
      return (
        (s = t.stateNode),
        Cr(),
        Ue(wt),
        Ue(ct),
        Fa(),
        s.pendingContext &&
          ((s.context = s.pendingContext), (s.pendingContext = null)),
        (e === null || e.child === null) &&
          ($s(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ft !== null && (da(Ft), (Ft = null)))),
        ra(e, t),
        at(t),
        null
      );
    case 5:
      Ga(t);
      var o = Un(ps.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        hd(e, t, n, s, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!s) {
          if (t.stateNode === null) throw Error(oe(166));
          return at(t), null;
        }
        if (((e = Un(Zt.current)), $s(t))) {
          (s = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((s[Kt] = t), (s[ds] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Le("cancel", s), Le("close", s);
              break;
            case "iframe":
            case "object":
            case "embed":
              Le("load", s);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Vr.length; o++) Le(Vr[o], s);
              break;
            case "source":
              Le("error", s);
              break;
            case "img":
            case "image":
            case "link":
              Le("error", s), Le("load", s);
              break;
            case "details":
              Le("toggle", s);
              break;
            case "input":
              gi(s, l), Le("invalid", s);
              break;
            case "select":
              (s._wrapperState = { wasMultiple: !!l.multiple }),
                Le("invalid", s);
              break;
            case "textarea":
              yi(s, l), Le("invalid", s);
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
                : ts.hasOwnProperty(a) &&
                  i != null &&
                  a === "onScroll" &&
                  Le("scroll", s);
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
            (e[Kt] = t),
            (e[ds] = s),
            md(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Il(n, s)), n)) {
              case "dialog":
                Le("cancel", e), Le("close", e), (o = s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Le("load", e), (o = s);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Vr.length; o++) Le(Vr[o], e);
                o = s;
                break;
              case "source":
                Le("error", e), (o = s);
                break;
              case "img":
              case "image":
              case "link":
                Le("error", e), Le("load", e), (o = s);
                break;
              case "details":
                Le("toggle", e), (o = s);
                break;
              case "input":
                gi(e, s), (o = Cl(e, s)), Le("invalid", e);
                break;
              case "option":
                o = s;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!s.multiple }),
                  (o = We({}, s, { value: void 0 })),
                  Le("invalid", e);
                break;
              case "textarea":
                yi(e, s), (o = _l(e, s)), Le("invalid", e);
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
                    ? (n !== "textarea" || c !== "") && ns(e, c)
                    : typeof c == "number" && ns(e, "" + c)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (ts.hasOwnProperty(l)
                      ? c != null && l === "onScroll" && Le("scroll", e)
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
                    ? hr(e, !!s.multiple, l, !1)
                    : s.defaultValue != null &&
                      hr(e, !!s.multiple, s.defaultValue, !0);
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
      return at(t), null;
    case 6:
      if (e && t.stateNode != null) gd(e, t, e.memoizedProps, s);
      else {
        if (typeof s != "string" && t.stateNode === null) throw Error(oe(166));
        if (((n = Un(ps.current)), Un(Zt.current), $s(t))) {
          if (
            ((s = t.stateNode),
            (n = t.memoizedProps),
            (s[Kt] = t),
            (l = s.nodeValue !== n) && ((e = kt), e !== null))
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
            (s[Kt] = t),
            (t.stateNode = s);
      }
      return at(t), null;
    case 13:
      if (
        (Ue(Fe),
        (s = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ze && Ct !== null && t.mode & 1 && !(t.flags & 128))
          Tu(), jr(), (t.flags |= 98560), (l = !1);
        else if (((l = $s(t)), s !== null && s.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(oe(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(oe(317));
            l[Kt] = t;
          } else
            jr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          at(t), (l = !1);
        } else Ft !== null && (da(Ft), (Ft = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((s = s !== null),
          s !== (e !== null && e.memoizedState !== null) &&
            s &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Fe.current & 1 ? Ze === 0 && (Ze = 3) : ti())),
          t.updateQueue !== null && (t.flags |= 4),
          at(t),
          null);
    case 4:
      return (
        Cr(), ra(e, t), e === null && cs(t.stateNode.containerInfo), at(t), null
      );
    case 10:
      return La(t.type._context), at(t), null;
    case 17:
      return bt(t.type) && po(), at(t), null;
    case 19:
      if ((Ue(Fe), (l = t.memoizedState), l === null)) return at(t), null;
      if (((s = (t.flags & 128) !== 0), (a = l.rendering), a === null))
        if (s) Br(l, !1);
        else {
          if (Ze !== 0 || (e !== null && e.flags & 128))
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
                return Oe(Fe, (Fe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Xe() > Dr &&
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
              l.tail === null && l.tailMode === "hidden" && !a.alternate && !ze)
            )
              return at(t), null;
          } else
            2 * Xe() - l.renderingStartTime > Dr &&
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
          (l.renderingStartTime = Xe()),
          (t.sibling = null),
          (n = Fe.current),
          Oe(Fe, s ? (n & 1) | 2 : n & 1),
          t)
        : (at(t), null);
    case 22:
    case 23:
      return (
        ei(),
        (s = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
        s && t.mode & 1
          ? St & 1073741824 && (at(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : at(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(oe(156, t.tag));
}
function bm(e, t) {
  switch ((Ta(t), t.tag)) {
    case 1:
      return (
        bt(t.type) && po(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Cr(),
        Ue(wt),
        Ue(ct),
        Fa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ga(t), null;
    case 13:
      if (
        (Ue(Fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(oe(340));
        jr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ue(Fe), null;
    case 4:
      return Cr(), null;
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
  it = !1,
  Nm = typeof WeakSet == "function" ? WeakSet : Set,
  ye = null;
function fr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (s) {
        qe(e, t, s);
      }
    else n.current = null;
}
function sa(e, t, n) {
  try {
    n();
  } catch (s) {
    qe(e, t, s);
  }
}
var ic = !1;
function jm(e, t) {
  if (((zl = io), (e = bu()), Pa(e))) {
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
            p = 0,
            m = e,
            f = null;
          t: for (;;) {
            for (
              var b;
              m !== n || (o !== 0 && m.nodeType !== 3) || (i = a + o),
                m !== l || (s !== 0 && m.nodeType !== 3) || (c = a + s),
                m.nodeType === 3 && (a += m.nodeValue.length),
                (b = m.firstChild) !== null;

            )
              (f = m), (m = b);
            for (;;) {
              if (m === e) break t;
              if (
                (f === n && ++g === o && (i = a),
                f === l && ++p === s && (c = a),
                (b = m.nextSibling) !== null)
              )
                break;
              (m = f), (f = m.parentNode);
            }
            m = b;
          }
          n = i === -1 || c === -1 ? null : { start: i, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    Gl = { focusedElem: e, selectionRange: n }, io = !1, ye = t;
    ye !== null;

  )
    if (((t = ye), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (ye = e);
    else
      for (; ye !== null; ) {
        t = ye;
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
                  var E = w.memoizedProps,
                    k = w.memoizedState,
                    u = t.stateNode,
                    d = u.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? E : zt(t.type, E),
                      k
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
                throw Error(oe(163));
            }
        } catch (D) {
          qe(t, t.return, D);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (ye = e);
          break;
        }
        ye = t.return;
      }
  return (w = ic), (ic = !1), w;
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
function xd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), xd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Kt], delete t[ds], delete t[Vl], delete t[om], delete t[lm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function yd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function cc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || yd(e.return)) return null;
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
var rt = null,
  Gt = !1;
function hn(e, t, n) {
  for (n = n.child; n !== null; ) vd(e, t, n), (n = n.sibling);
}
function vd(e, t, n) {
  if (Jt && typeof Jt.onCommitFiberUnmount == "function")
    try {
      Jt.onCommitFiberUnmount(Mo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      it || fr(n, t);
    case 6:
      var s = rt,
        o = Gt;
      (rt = null),
        hn(e, t, n),
        (rt = s),
        (Gt = o),
        rt !== null &&
          (Gt
            ? ((e = rt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : rt.removeChild(n.stateNode));
      break;
    case 18:
      rt !== null &&
        (Gt
          ? ((e = rt),
            (n = n.stateNode),
            e.nodeType === 8
              ? ul(e.parentNode, n)
              : e.nodeType === 1 && ul(e, n),
            ls(e))
          : ul(rt, n.stateNode));
      break;
    case 4:
      (s = rt),
        (o = Gt),
        (rt = n.stateNode.containerInfo),
        (Gt = !0),
        hn(e, t, n),
        (rt = s),
        (Gt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !it &&
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
        !it &&
        (fr(n, t),
        (s = n.stateNode),
        typeof s.componentWillUnmount == "function")
      )
        try {
          (s.props = n.memoizedProps),
            (s.state = n.memoizedState),
            s.componentWillUnmount();
        } catch (i) {
          qe(n, t, i);
        }
      hn(e, t, n);
      break;
    case 21:
      hn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((it = (s = it) || n.memoizedState !== null), hn(e, t, n), (it = s))
        : hn(e, t, n);
      break;
    default:
      hn(e, t, n);
  }
}
function uc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Nm()),
      t.forEach(function (s) {
        var o = Pm.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(o, o));
      });
  }
}
function Bt(e, t) {
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
              (rt = i.stateNode), (Gt = !1);
              break e;
            case 3:
              (rt = i.stateNode.containerInfo), (Gt = !0);
              break e;
            case 4:
              (rt = i.stateNode.containerInfo), (Gt = !0);
              break e;
          }
          i = i.return;
        }
        if (rt === null) throw Error(oe(160));
        vd(l, a, o), (rt = null), (Gt = !1);
        var c = o.alternate;
        c !== null && (c.return = null), (o.return = null);
      } catch (g) {
        qe(o, t, g);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) wd(t, e), (t = t.sibling);
}
function wd(e, t) {
  var n = e.alternate,
    s = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Bt(t, e), Yt(e), s & 4)) {
        try {
          Jr(3, e, e.return), Oo(3, e);
        } catch (E) {
          qe(e, e.return, E);
        }
        try {
          Jr(5, e, e.return);
        } catch (E) {
          qe(e, e.return, E);
        }
      }
      break;
    case 1:
      Bt(t, e), Yt(e), s & 512 && n !== null && fr(n, n.return);
      break;
    case 5:
      if (
        (Bt(t, e),
        Yt(e),
        s & 512 && n !== null && fr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ns(o, "");
        } catch (E) {
          qe(e, e.return, E);
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
              var p = c[a],
                m = c[a + 1];
              p === "style"
                ? qc(o, m)
                : p === "dangerouslySetInnerHTML"
                ? Vc(o, m)
                : p === "children"
                ? ns(o, m)
                : va(o, p, m, g);
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
                var b = l.value;
                b != null
                  ? hr(o, !!l.multiple, b, !1)
                  : f !== !!l.multiple &&
                    (l.defaultValue != null
                      ? hr(o, !!l.multiple, l.defaultValue, !0)
                      : hr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[ds] = l;
          } catch (E) {
            qe(e, e.return, E);
          }
      }
      break;
    case 6:
      if ((Bt(t, e), Yt(e), s & 4)) {
        if (e.stateNode === null) throw Error(oe(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (E) {
          qe(e, e.return, E);
        }
      }
      break;
    case 3:
      if (
        (Bt(t, e), Yt(e), s & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ls(t.containerInfo);
        } catch (E) {
          qe(e, e.return, E);
        }
      break;
    case 4:
      Bt(t, e), Yt(e);
      break;
    case 13:
      Bt(t, e),
        Yt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ja = Xe())),
        s & 4 && uc(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((it = (g = it) || p), Bt(t, e), (it = g)) : Bt(t, e),
        Yt(e),
        s & 8192)
      ) {
        if (
          ((g = e.memoizedState !== null),
          (e.stateNode.isHidden = g) && !p && e.mode & 1)
        )
          for (ye = e, p = e.child; p !== null; ) {
            for (m = ye = p; ye !== null; ) {
              switch (((f = ye), (b = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Jr(4, f, f.return);
                  break;
                case 1:
                  fr(f, f.return);
                  var w = f.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (s = f), (n = f.return);
                    try {
                      (t = s),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (E) {
                      qe(s, n, E);
                    }
                  }
                  break;
                case 5:
                  fr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    fc(m);
                    continue;
                  }
              }
              b !== null ? ((b.return = f), (ye = b)) : fc(m);
            }
            p = p.sibling;
          }
        e: for (p = null, m = e; ; ) {
          if (m.tag === 5) {
            if (p === null) {
              p = m;
              try {
                (o = m.stateNode),
                  g
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
                      (i.style.display = Wc("display", a)));
              } catch (E) {
                qe(e, e.return, E);
              }
            }
          } else if (m.tag === 6) {
            if (p === null)
              try {
                m.stateNode.nodeValue = g ? "" : m.memoizedProps;
              } catch (E) {
                qe(e, e.return, E);
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
            p === m && (p = null), (m = m.return);
          }
          p === m && (p = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Bt(t, e), Yt(e), s & 4 && uc(e);
      break;
    case 21:
      break;
    default:
      Bt(t, e), Yt(e);
  }
}
function Yt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (yd(n)) {
            var s = n;
            break e;
          }
          n = n.return;
        }
        throw Error(oe(160));
      }
      switch (s.tag) {
        case 5:
          var o = s.stateNode;
          s.flags & 32 && (ns(o, ""), (s.flags &= -33));
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
          throw Error(oe(161));
      }
    } catch (c) {
      qe(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Sm(e, t, n) {
  (ye = e), bd(e);
}
function bd(e, t, n) {
  for (var s = (e.mode & 1) !== 0; ye !== null; ) {
    var o = ye,
      l = o.child;
    if (o.tag === 22 && s) {
      var a = o.memoizedState !== null || Us;
      if (!a) {
        var i = o.alternate,
          c = (i !== null && i.memoizedState !== null) || it;
        i = Us;
        var g = it;
        if (((Us = a), (it = c) && !g))
          for (ye = o; ye !== null; )
            (a = ye),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? pc(o)
                : c !== null
                ? ((c.return = a), (ye = c))
                : pc(o);
        for (; l !== null; ) (ye = l), bd(l), (l = l.sibling);
        (ye = o), (Us = i), (it = g);
      }
      dc(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (ye = l)) : dc(e);
  }
}
function dc(e) {
  for (; ye !== null; ) {
    var t = ye;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              it || Oo(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !it)
                if (n === null) s.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : zt(t.type, n.memoizedProps);
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
                  var p = g.memoizedState;
                  if (p !== null) {
                    var m = p.dehydrated;
                    m !== null && ls(m);
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
              throw Error(oe(163));
          }
        it || (t.flags & 512 && oa(t));
      } catch (f) {
        qe(t, t.return, f);
      }
    }
    if (t === e) {
      ye = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (ye = n);
      break;
    }
    ye = t.return;
  }
}
function fc(e) {
  for (; ye !== null; ) {
    var t = ye;
    if (t === e) {
      ye = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (ye = n);
      break;
    }
    ye = t.return;
  }
}
function pc(e) {
  for (; ye !== null; ) {
    var t = ye;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Oo(4, t);
          } catch (c) {
            qe(t, n, c);
          }
          break;
        case 1:
          var s = t.stateNode;
          if (typeof s.componentDidMount == "function") {
            var o = t.return;
            try {
              s.componentDidMount();
            } catch (c) {
              qe(t, o, c);
            }
          }
          var l = t.return;
          try {
            oa(t);
          } catch (c) {
            qe(t, l, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            oa(t);
          } catch (c) {
            qe(t, a, c);
          }
      }
    } catch (c) {
      qe(t, t.return, c);
    }
    if (t === e) {
      ye = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      (i.return = t.return), (ye = i);
      break;
    }
    ye = t.return;
  }
}
var Cm = Math.ceil,
  jo = pn.ReactCurrentDispatcher,
  Qa = pn.ReactCurrentOwner,
  Tt = pn.ReactCurrentBatchConfig,
  Te = 0,
  tt = null,
  Ke = null,
  st = 0,
  St = 0,
  pr = Rn(0),
  Ze = 0,
  xs = null,
  Vn = 0,
  Lo = 0,
  Ka = 0,
  Zr = null,
  xt = null,
  Ja = 0,
  Dr = 1 / 0,
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
function dt() {
  return Te & 6 ? Xe() : Zs !== -1 ? Zs : (Zs = Xe());
}
function _n(e) {
  return e.mode & 1
    ? Te & 2 && st !== 0
      ? st & -st
      : im.transition !== null
      ? (eo === 0 && (eo = ou()), eo)
      : ((e = Ae),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : fu(e.type))),
        e)
    : 1;
}
function Vt(e, t, n, s) {
  if (50 < es) throw ((es = 0), (ca = null), Error(oe(185)));
  vs(e, n, s),
    (!(Te & 2) || e !== tt) &&
      (e === tt && (!(Te & 2) && (Lo |= n), Ze === 4 && vn(e, st)),
      Nt(e, s),
      n === 1 && Te === 0 && !(t.mode & 1) && ((Dr = Xe() + 500), To && Tn()));
}
function Nt(e, t) {
  var n = e.callbackNode;
  ip(e, t);
  var s = ao(e, e === tt ? st : 0);
  if (s === 0)
    n !== null && Ni(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = s & -s), e.callbackPriority !== t)) {
    if ((n != null && Ni(n), t === 1))
      e.tag === 0 ? am(mc.bind(null, e)) : Iu(mc.bind(null, e)),
        rm(function () {
          !(Te & 6) && Tn();
        }),
        (n = null);
    else {
      switch (lu(s)) {
        case 1:
          n = Sa;
          break;
        case 4:
          n = ru;
          break;
        case 16:
          n = lo;
          break;
        case 536870912:
          n = su;
          break;
        default:
          n = lo;
      }
      n = Md(n, Nd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Nd(e, t) {
  if (((Zs = -1), (eo = 0), Te & 6)) throw Error(oe(327));
  var n = e.callbackNode;
  if (wr() && e.callbackNode !== n) return null;
  var s = ao(e, e === tt ? st : 0);
  if (s === 0) return null;
  if (s & 30 || s & e.expiredLanes || t) t = ko(e, s);
  else {
    t = s;
    var o = Te;
    Te |= 2;
    var l = Sd();
    (tt !== e || st !== t) && ((nn = null), (Dr = Xe() + 500), Bn(e, t));
    do
      try {
        _m();
        break;
      } catch (i) {
        jd(e, i);
      }
    while (!0);
    Oa(),
      (jo.current = l),
      (Te = o),
      Ke !== null ? (t = 0) : ((tt = null), (st = 0), (t = Ze));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = $l(e)), o !== 0 && ((s = o), (t = ua(e, o)))), t === 1)
    )
      throw ((n = xs), Bn(e, 0), vn(e, s), Nt(e, Xe()), n);
    if (t === 6) vn(e, s);
    else {
      if (
        ((o = e.current.alternate),
        !(s & 30) &&
          !km(o) &&
          ((t = ko(e, s)),
          t === 2 && ((l = $l(e)), l !== 0 && ((s = l), (t = ua(e, l)))),
          t === 1))
      )
        throw ((n = xs), Bn(e, 0), vn(e, s), Nt(e, Xe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = s), t)) {
        case 0:
        case 1:
          throw Error(oe(345));
        case 2:
          $n(e, xt, nn);
          break;
        case 3:
          if (
            (vn(e, s), (s & 130023424) === s && ((t = Ja + 500 - Xe()), 10 < t))
          ) {
            if (ao(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & s) !== s)) {
              dt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Hl($n.bind(null, e, xt, nn), t);
            break;
          }
          $n(e, xt, nn);
          break;
        case 4:
          if ((vn(e, s), (s & 4194240) === s)) break;
          for (t = e.eventTimes, o = -1; 0 < s; ) {
            var a = 31 - Ht(s);
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
                : 1960 * Cm(s / 1960)) - s),
            10 < s)
          ) {
            e.timeoutHandle = Hl($n.bind(null, e, xt, nn), s);
            break;
          }
          $n(e, xt, nn);
          break;
        case 5:
          $n(e, xt, nn);
          break;
        default:
          throw Error(oe(329));
      }
    }
  }
  return Nt(e, Xe()), e.callbackNode === n ? Nd.bind(null, e) : null;
}
function ua(e, t) {
  var n = Zr;
  return (
    e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256),
    (e = ko(e, t)),
    e !== 2 && ((t = xt), (xt = n), t !== null && da(t)),
    e
  );
}
function da(e) {
  xt === null ? (xt = e) : xt.push.apply(xt, e);
}
function km(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var s = 0; s < n.length; s++) {
          var o = n[s],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!Wt(l(), o)) return !1;
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
    var n = 31 - Ht(t),
      s = 1 << n;
    (e[n] = -1), (t &= ~s);
  }
}
function mc(e) {
  if (Te & 6) throw Error(oe(327));
  wr();
  var t = ao(e, 0);
  if (!(t & 1)) return Nt(e, Xe()), null;
  var n = ko(e, t);
  if (e.tag !== 0 && n === 2) {
    var s = $l(e);
    s !== 0 && ((t = s), (n = ua(e, s)));
  }
  if (n === 1) throw ((n = xs), Bn(e, 0), vn(e, t), Nt(e, Xe()), n);
  if (n === 6) throw Error(oe(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    $n(e, xt, nn),
    Nt(e, Xe()),
    null
  );
}
function Za(e, t) {
  var n = Te;
  Te |= 1;
  try {
    return e(t);
  } finally {
    (Te = n), Te === 0 && ((Dr = Xe() + 500), To && Tn());
  }
}
function Wn(e) {
  bn !== null && bn.tag === 0 && !(Te & 6) && wr();
  var t = Te;
  Te |= 1;
  var n = Tt.transition,
    s = Ae;
  try {
    if (((Tt.transition = null), (Ae = 1), e)) return e();
  } finally {
    (Ae = s), (Tt.transition = n), (Te = t), !(Te & 6) && Tn();
  }
}
function ei() {
  (St = pr.current), Ue(pr);
}
function Bn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), nm(n)), Ke !== null))
    for (n = Ke.return; n !== null; ) {
      var s = n;
      switch ((Ta(s), s.tag)) {
        case 1:
          (s = s.type.childContextTypes), s != null && po();
          break;
        case 3:
          Cr(), Ue(wt), Ue(ct), Fa();
          break;
        case 5:
          Ga(s);
          break;
        case 4:
          Cr();
          break;
        case 13:
          Ue(Fe);
          break;
        case 19:
          Ue(Fe);
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
    ((tt = e),
    (Ke = e = Mn(e.current, null)),
    (st = St = t),
    (Ze = 0),
    (xs = null),
    (Ka = Lo = Vn = 0),
    (xt = Zr = null),
    Ln !== null)
  ) {
    for (t = 0; t < Ln.length; t++)
      if (((n = Ln[t]), (s = n.interleaved), s !== null)) {
        n.interleaved = null;
        var o = s.next,
          l = n.pending;
        if (l !== null) {
          var a = l.next;
          (l.next = o), (s.next = a);
        }
        n.pending = s;
      }
    Ln = null;
  }
  return e;
}
function jd(e, t) {
  do {
    var n = Ke;
    try {
      if ((Oa(), (Qs.current = No), bo)) {
        for (var s = Ve.memoizedState; s !== null; ) {
          var o = s.queue;
          o !== null && (o.pending = null), (s = s.next);
        }
        bo = !1;
      }
      if (
        ((Hn = 0),
        (et = Je = Ve = null),
        (Kr = !1),
        (ms = 0),
        (Qa.current = null),
        n === null || n.return === null)
      ) {
        (Ze = 1), (xs = t), (Ke = null);
        break;
      }
      e: {
        var l = e,
          a = n.return,
          i = n,
          c = t;
        if (
          ((t = st),
          (i.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var g = c,
            p = i,
            m = p.tag;
          if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var f = p.alternate;
            f
              ? ((p.updateQueue = f.updateQueue),
                (p.memoizedState = f.memoizedState),
                (p.lanes = f.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var b = tc(a);
          if (b !== null) {
            (b.flags &= -257),
              nc(b, a, i, l, t),
              b.mode & 1 && ec(l, g, t),
              (t = b),
              (c = g);
            var w = t.updateQueue;
            if (w === null) {
              var E = new Set();
              E.add(c), (t.updateQueue = E);
            } else w.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              ec(l, g, t), ti();
              break e;
            }
            c = Error(oe(426));
          }
        } else if (ze && i.mode & 1) {
          var k = tc(a);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              nc(k, a, i, l, t),
              Aa(kr(c, i));
            break e;
          }
        }
        (l = c = kr(c, i)),
          Ze !== 4 && (Ze = 2),
          Zr === null ? (Zr = [l]) : Zr.push(l),
          (l = a);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var u = ld(l, c, t);
              Yi(l, u);
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
                    (Dn === null || !Dn.has(x))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var D = ad(l, i, t);
                Yi(l, D);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      kd(n);
    } catch (L) {
      (t = L), Ke === n && n !== null && (Ke = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Sd() {
  var e = jo.current;
  return (jo.current = No), e === null ? No : e;
}
function ti() {
  (Ze === 0 || Ze === 3 || Ze === 2) && (Ze = 4),
    tt === null || (!(Vn & 268435455) && !(Lo & 268435455)) || vn(tt, st);
}
function ko(e, t) {
  var n = Te;
  Te |= 2;
  var s = Sd();
  (tt !== e || st !== t) && ((nn = null), Bn(e, t));
  do
    try {
      Dm();
      break;
    } catch (o) {
      jd(e, o);
    }
  while (!0);
  if ((Oa(), (Te = n), (jo.current = s), Ke !== null)) throw Error(oe(261));
  return (tt = null), (st = 0), Ze;
}
function Dm() {
  for (; Ke !== null; ) Cd(Ke);
}
function _m() {
  for (; Ke !== null && !Zf(); ) Cd(Ke);
}
function Cd(e) {
  var t = _d(e.alternate, e, St);
  (e.memoizedProps = e.pendingProps),
    t === null ? kd(e) : (Ke = t),
    (Qa.current = null);
}
function kd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = bm(n, t)), n !== null)) {
        (n.flags &= 32767), (Ke = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ze = 6), (Ke = null);
        return;
      }
    } else if (((n = wm(n, t, St)), n !== null)) {
      Ke = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ke = t;
      return;
    }
    Ke = t = e;
  } while (t !== null);
  Ze === 0 && (Ze = 5);
}
function $n(e, t, n) {
  var s = Ae,
    o = Tt.transition;
  try {
    (Tt.transition = null), (Ae = 1), Mm(e, t, n, s);
  } finally {
    (Tt.transition = o), (Ae = s);
  }
  return null;
}
function Mm(e, t, n, s) {
  do wr();
  while (bn !== null);
  if (Te & 6) throw Error(oe(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(oe(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (cp(e, l),
    e === tt && ((Ke = tt = null), (st = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Bs ||
      ((Bs = !0),
      Md(lo, function () {
        return wr(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Tt.transition), (Tt.transition = null);
    var a = Ae;
    Ae = 1;
    var i = Te;
    (Te |= 4),
      (Qa.current = null),
      jm(e, n),
      wd(n, e),
      Xp(Gl),
      (io = !!zl),
      (Gl = zl = null),
      (e.current = n),
      Sm(n),
      ep(),
      (Te = i),
      (Ae = a),
      (Tt.transition = l);
  } else e.current = n;
  if (
    (Bs && ((Bs = !1), (bn = e), (Co = o)),
    (l = e.pendingLanes),
    l === 0 && (Dn = null),
    rp(n.stateNode),
    Nt(e, Xe()),
    t !== null)
  )
    for (s = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), s(o.value, { componentStack: o.stack, digest: o.digest });
  if (So) throw ((So = !1), (e = ia), (ia = null), e);
  return (
    Co & 1 && e.tag !== 0 && wr(),
    (l = e.pendingLanes),
    l & 1 ? (e === ca ? es++ : ((es = 0), (ca = e))) : (es = 0),
    Tn(),
    null
  );
}
function wr() {
  if (bn !== null) {
    var e = lu(Co),
      t = Tt.transition,
      n = Ae;
    try {
      if (((Tt.transition = null), (Ae = 16 > e ? 16 : e), bn === null))
        var s = !1;
      else {
        if (((e = bn), (bn = null), (Co = 0), Te & 6)) throw Error(oe(331));
        var o = Te;
        for (Te |= 4, ye = e.current; ye !== null; ) {
          var l = ye,
            a = l.child;
          if (ye.flags & 16) {
            var i = l.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var g = i[c];
                for (ye = g; ye !== null; ) {
                  var p = ye;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jr(8, p, l);
                  }
                  var m = p.child;
                  if (m !== null) (m.return = p), (ye = m);
                  else
                    for (; ye !== null; ) {
                      p = ye;
                      var f = p.sibling,
                        b = p.return;
                      if ((xd(p), p === g)) {
                        ye = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = b), (ye = f);
                        break;
                      }
                      ye = b;
                    }
                }
              }
              var w = l.alternate;
              if (w !== null) {
                var E = w.child;
                if (E !== null) {
                  w.child = null;
                  do {
                    var k = E.sibling;
                    (E.sibling = null), (E = k);
                  } while (E !== null);
                }
              }
              ye = l;
            }
          }
          if (l.subtreeFlags & 2064 && a !== null) (a.return = l), (ye = a);
          else
            e: for (; ye !== null; ) {
              if (((l = ye), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Jr(9, l, l.return);
                }
              var u = l.sibling;
              if (u !== null) {
                (u.return = l.return), (ye = u);
                break e;
              }
              ye = l.return;
            }
        }
        var d = e.current;
        for (ye = d; ye !== null; ) {
          a = ye;
          var x = a.child;
          if (a.subtreeFlags & 2064 && x !== null) (x.return = a), (ye = x);
          else
            e: for (a = d; ye !== null; ) {
              if (((i = ye), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Oo(9, i);
                  }
                } catch (L) {
                  qe(i, i.return, L);
                }
              if (i === a) {
                ye = null;
                break e;
              }
              var D = i.sibling;
              if (D !== null) {
                (D.return = i.return), (ye = D);
                break e;
              }
              ye = i.return;
            }
        }
        if (
          ((Te = o), Tn(), Jt && typeof Jt.onPostCommitFiberRoot == "function")
        )
          try {
            Jt.onPostCommitFiberRoot(Mo, e);
          } catch {}
        s = !0;
      }
      return s;
    } finally {
      (Ae = n), (Tt.transition = t);
    }
  }
  return !1;
}
function hc(e, t, n) {
  (t = kr(n, t)),
    (t = ld(e, t, 1)),
    (e = kn(e, t, 1)),
    (t = dt()),
    e !== null && (vs(e, 1, t), Nt(e, t));
}
function qe(e, t, n) {
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
          (e = kr(n, e)),
            (e = ad(t, e, 1)),
            (t = kn(t, e, 1)),
            (e = dt()),
            t !== null && (vs(t, 1, e), Nt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Em(e, t, n) {
  var s = e.pingCache;
  s !== null && s.delete(t),
    (t = dt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    tt === e &&
      (st & n) === n &&
      (Ze === 4 || (Ze === 3 && (st & 130023424) === st && 500 > Xe() - Ja)
        ? Bn(e, 0)
        : (Ka |= n)),
    Nt(e, t);
}
function Dd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Es), (Es <<= 1), !(Es & 130023424) && (Es = 4194304))
      : (t = 1));
  var n = dt();
  (e = dn(e, t)), e !== null && (vs(e, t, n), Nt(e, n));
}
function Im(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Dd(e, n);
}
function Pm(e, t) {
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
      throw Error(oe(314));
  }
  s !== null && s.delete(t), Dd(e, n);
}
var _d;
_d = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || wt.current) yt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (yt = !1), vm(e, t, n);
      yt = !!(e.flags & 131072);
    }
  else (yt = !1), ze && t.flags & 1048576 && Pu(t, go, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var s = t.type;
      Js(e, t), (e = t.pendingProps);
      var o = Nr(t, ct.current);
      vr(t, n), (o = Va(null, t, s, e, o, n));
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
          : ((t.tag = 0), ze && l && Ra(t), ut(null, t, o, n), (t = t.child)),
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
          (o = t.tag = Tm(s)),
          (e = zt(s, e)),
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
            t = sc(null, t, s, zt(s.type, e), n);
            break e;
        }
        throw Error(oe(306, s, ""));
      }
      return t;
    case 0:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : zt(s, o)),
        Zl(e, t, s, o, n)
      );
    case 1:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : zt(s, o)),
        oc(e, t, s, o, n)
      );
    case 3:
      e: {
        if ((dd(t), e === null)) throw Error(oe(387));
        (s = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Lu(e, t),
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
            (o = kr(Error(oe(423)), t)), (t = lc(e, t, s, n, o));
            break e;
          } else if (s !== o) {
            (o = kr(Error(oe(424)), t)), (t = lc(e, t, s, n, o));
            break e;
          } else
            for (
              Ct = Cn(t.stateNode.containerInfo.firstChild),
                kt = t,
                ze = !0,
                Ft = null,
                n = $u(t, null, s, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((jr(), s === o)) {
            t = fn(e, t, n);
            break e;
          }
          ut(e, t, s, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Uu(t),
        e === null && Yl(t),
        (s = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Fl(s, o) ? (a = null) : l !== null && Fl(s, l) && (t.flags |= 32),
        ud(e, t),
        ut(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Yl(t), null;
    case 13:
      return fd(e, t, n);
    case 4:
      return (
        za(t, t.stateNode.containerInfo),
        (s = t.pendingProps),
        e === null ? (t.child = Sr(t, null, s, n)) : ut(e, t, s, n),
        t.child
      );
    case 11:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : zt(s, o)),
        rc(e, t, s, o, n)
      );
    case 7:
      return ut(e, t, t.pendingProps, n), t.child;
    case 8:
      return ut(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ut(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((s = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (a = o.value),
          Oe(xo, s._currentValue),
          (s._currentValue = a),
          l !== null)
        )
          if (Wt(l.value, a)) {
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
                        var p = g.pending;
                        p === null
                          ? (c.next = c)
                          : ((c.next = p.next), (p.next = c)),
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
                if (((a = l.return), a === null)) throw Error(oe(341));
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
        ut(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (s = t.pendingProps.children),
        vr(t, n),
        (o = $t(o)),
        (s = s(o)),
        (t.flags |= 1),
        ut(e, t, s, n),
        t.child
      );
    case 14:
      return (
        (s = t.type),
        (o = zt(s, t.pendingProps)),
        (o = zt(s.type, o)),
        sc(e, t, s, o, n)
      );
    case 15:
      return id(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : zt(s, o)),
        Js(e, t),
        (t.tag = 1),
        bt(s) ? ((e = !0), mo(t)) : (e = !1),
        vr(t, n),
        od(t, s, o),
        Kl(t, s, o, n),
        ea(null, t, s, !0, e, n)
      );
    case 19:
      return pd(e, t, n);
    case 22:
      return cd(e, t, n);
  }
  throw Error(oe(156, t.tag));
};
function Md(e, t) {
  return nu(e, t);
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
function Tm(e) {
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
      case rr:
        return zn(n.children, o, l, t);
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
        throw Error(oe(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Rt(a, n, t, o)), (t.elementType = e), (t.type = s), (t.lanes = l), t
  );
}
function zn(e, t, n, s) {
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
function Am(e, t, n, s, o) {
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
    (e = new Am(e, t, n, i, c)),
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
function $m(e, t, n) {
  var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: nr,
    key: s == null ? null : "" + s,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ed(e) {
  if (!e) return In;
  e = e._reactInternals;
  e: {
    if (Yn(e) !== e || e.tag !== 1) throw Error(oe(170));
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
    throw Error(oe(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (bt(n)) return Eu(e, n, t);
  }
  return t;
}
function Id(e, t, n, s, o, l, a, i, c) {
  return (
    (e = ri(n, s, !0, e, o, l, a, i, c)),
    (e.context = Ed(null)),
    (n = e.current),
    (s = dt()),
    (o = _n(n)),
    (l = an(s, o)),
    (l.callback = t ?? null),
    kn(n, l, o),
    (e.current.lanes = o),
    vs(e, o, s),
    Nt(e, s),
    e
  );
}
function Bo(e, t, n, s) {
  var o = t.current,
    l = dt(),
    a = _n(o);
  return (
    (n = Ed(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = an(l, a)),
    (t.payload = { element: e }),
    (s = s === void 0 ? null : s),
    s !== null && (t.callback = s),
    (e = kn(o, t, a)),
    e !== null && (Vt(e, o, a, l), Xs(e, o, a)),
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
function Om() {
  return null;
}
var Pd =
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
  if (t === null) throw Error(oe(409));
  Bo(e, t, null, null);
};
zo.prototype.unmount = oi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Wn(function () {
      Bo(null, e, null, null);
    }),
      (t[un] = null);
  }
};
function zo(e) {
  this._internalRoot = e;
}
zo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = cu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < yn.length && t !== 0 && t < yn[n].priority; n++);
    yn.splice(n, 0, e), n === 0 && du(e);
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
function Lm(e, t, n, s, o) {
  if (o) {
    if (typeof s == "function") {
      var l = s;
      s = function () {
        var g = Do(a);
        l.call(g);
      };
    }
    var a = Id(t, s, e, 0, null, !1, !1, "", xc);
    return (
      (e._reactRootContainer = a),
      (e[un] = a.current),
      cs(e.nodeType === 8 ? e.parentNode : e),
      Wn(),
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
    (e[un] = c.current),
    cs(e.nodeType === 8 ? e.parentNode : e),
    Wn(function () {
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
  } else a = Lm(n, t, e, o, s);
  return Do(a);
}
au = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Hr(t.pendingLanes);
        n !== 0 &&
          (Ca(t, n | 1), Nt(t, Xe()), !(Te & 6) && ((Dr = Xe() + 500), Tn()));
      }
      break;
    case 13:
      Wn(function () {
        var s = dn(e, 1);
        if (s !== null) {
          var o = dt();
          Vt(s, e, 1, o);
        }
      }),
        si(e, 1);
  }
};
ka = function (e) {
  if (e.tag === 13) {
    var t = dn(e, 134217728);
    if (t !== null) {
      var n = dt();
      Vt(t, e, 134217728, n);
    }
    si(e, 134217728);
  }
};
iu = function (e) {
  if (e.tag === 13) {
    var t = _n(e),
      n = dn(e, t);
    if (n !== null) {
      var s = dt();
      Vt(n, e, t, s);
    }
    si(e, t);
  }
};
cu = function () {
  return Ae;
};
uu = function (e, t) {
  var n = Ae;
  try {
    return (Ae = e), t();
  } finally {
    Ae = n;
  }
};
Rl = function (e, t, n) {
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
            var o = Ro(s);
            if (!o) throw Error(oe(90));
            zc(s), kl(s, o);
          }
        }
      }
      break;
    case "textarea":
      Fc(e, n);
      break;
    case "select":
      (t = n.value), t != null && hr(e, !!n.multiple, t, !1);
  }
};
Qc = Za;
Kc = Wn;
var Um = { usingClientEntryPoint: !1, Events: [bs, ar, Ro, Yc, Xc, Za] },
  zr = {
    findFiberByHostInstance: On,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Bm = {
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
      return (e = eu(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: zr.findFiberByHostInstance || Om,
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
      (Mo = zs.inject(Bm)), (Jt = zs);
    } catch {}
}
_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Um;
_t.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!li(t)) throw Error(oe(200));
  return $m(e, t, null, n);
};
_t.createRoot = function (e, t) {
  if (!li(e)) throw Error(oe(299));
  var n = !1,
    s = "",
    o = Pd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ri(e, 1, !1, null, null, n, !1, s, o)),
    (e[un] = t.current),
    cs(e.nodeType === 8 ? e.parentNode : e),
    new oi(t)
  );
};
_t.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(oe(188))
      : ((e = Object.keys(e).join(",")), Error(oe(268, e)));
  return (e = eu(t)), (e = e === null ? null : e.stateNode), e;
};
_t.flushSync = function (e) {
  return Wn(e);
};
_t.hydrate = function (e, t, n) {
  if (!Go(t)) throw Error(oe(200));
  return Fo(null, e, t, !0, n);
};
_t.hydrateRoot = function (e, t, n) {
  if (!li(e)) throw Error(oe(405));
  var s = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    a = Pd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Id(t, null, e, 1, n ?? null, o, !1, l, a)),
    (e[un] = t.current),
    cs(e),
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
_t.render = function (e, t, n) {
  if (!Go(t)) throw Error(oe(200));
  return Fo(null, e, t, !1, n);
};
_t.unmountComponentAtNode = function (e) {
  if (!Go(e)) throw Error(oe(40));
  return e._reactRootContainer
    ? (Wn(function () {
        Fo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[un] = null);
        });
      }),
      !0)
    : !1;
};
_t.unstable_batchedUpdates = Za;
_t.unstable_renderSubtreeIntoContainer = function (e, t, n, s) {
  if (!Go(n)) throw Error(oe(200));
  if (e == null || e._reactInternals === void 0) throw Error(oe(38));
  return Fo(e, t, n, !1, s);
};
_t.version = "18.3.1-next-f1338f8080-20240426";
function Rd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rd);
    } catch (e) {
      console.error(e);
    }
}
Rd(), (Rc.exports = _t);
var zm = Rc.exports,
  Td,
  yc = zm;
(Td = yc.createRoot), yc.hydrateRoot;
class Gm {
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
const Se = new Gm();
class Fm {
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
                contents: [],
                med_list: [],
              }),
              Array.isArray(l.sub_section) &&
                l.sub_section.forEach((c, g) => {
                  let p = {
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
                  o.contents[a].contents[g] = p;
                  let m = 0;
                  Array.isArray(c.shelf) &&
                    c.shelf.forEach((f, b) => {
                      let w = {
                        GUID: f.GUID,
                        Master_GUID: f.Master_GUID,
                        name: `層架_${b}`,
                        class: 3,
                        gird_position: f.position,
                        serverName: f.serverName || "",
                        serverType: f.serverType || "",
                        device_type: f.device_type || "",
                        type: f.type,
                        contents: [],
                      };
                      if (
                        (w.serverName &&
                          (w.serverName = t.sys_ServerSetting.name),
                        w.serverType &&
                          (w.serverType = t.sys_ServerSetting.type),
                        f.type == "dispensing_shelves" || f.type == "shelf")
                      )
                        f.type == "shelf" && (w.type = "dispensing_shelves"),
                          Array.isArray(f.medMapBox) &&
                            f.medMapBox.forEach((k, u) => {
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
                                D = f.position.split(","),
                                L = k.position.split(",");
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
                                  (x.stock = `${+L[1] + 1}`);
                              } else
                                (d.device_type = 10),
                                  (d.box_type = "2.9"),
                                  (x.name = ""),
                                  (x.code = ""),
                                  (x.cht_name = ""),
                                  (x.stockCol = `${+D[0] + 1}`),
                                  (x.stockRow = ""),
                                  (x.stock = `${+L[1] + 1}`);
                              o.contents[a].med_list.push(x),
                                (d.med_info[0] = x),
                                w.contents.push(d);
                            });
                      else {
                        (w.type = "store_shelves"),
                          (w.ip = f.ip_light),
                          (w.width = f.width),
                          (w.height = f.height);
                        const k = f.medMapStock.sort((u, d) => {
                          const [x] = u.location.split(",").map(Number),
                            [D] = d.location.split(",").map(Number);
                          return x - D;
                        });
                        (w.medMapStock = k),
                          (w.name = f.name),
                          k.forEach((u, d) => {
                            let x = f.position.split(",");
                            if (u.code) {
                              let D = {};
                              (D.name = u.name),
                                (D.code = u.code),
                                (D.cht_name = ""),
                                (D.SKDIACODE = u.material_no),
                                (D.qty = u.qty),
                                (D.stockCol = `${+x[0] + 1}`),
                                (D.stockRow = `${+x[1] + 1}`),
                                (D.stock = `${d + 1}`),
                                o.contents[a].med_list.push(D);
                            }
                          });
                      }
                      let E = f.position.split(",")[1];
                      m < +E &&
                        ((m = +E), (o.contents[a].contents[g].oriMaxCol = +m)),
                        o.contents[a].contents[g].contents.push(w);
                    }),
                    Array.isArray(c.drawer) &&
                      c.drawer.forEach((f, b) => {
                        let w = {
                          GUID: f.GUID,
                          Master_GUID: f.Master_GUID,
                          name: `抽屜 ${b}`,
                          class: 3,
                          gird_position: f.position,
                          ip: f.ip_drawer,
                          serverName: f.serverName,
                          serverType: f.serverType,
                        };
                        w.serverName &&
                          (w.serverName = t.sys_ServerSetting.name),
                          w.serverType &&
                            (w.serverType = t.sys_ServerSetting.type),
                          f.drawer
                            ? ((w.drawer = f.drawer),
                              f.drawer.Boxes &&
                                ((w.type = "grid_draw"),
                                (w.name = f.drawer.Name),
                                (w.Boxes = []),
                                Array.isArray(f.drawer.Boxes)
                                  ? f.drawer.Boxes.forEach((u, d) => {
                                      let x = [];
                                      Array.isArray(u) &&
                                        u.forEach((D, L) => {
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
                                          x.push(I),
                                            D.Code &&
                                              o.contents[a].med_list.push(
                                                D.Code
                                              );
                                        }),
                                        w.Boxes.push(x);
                                    })
                                  : (w.Boxes = f.drawer.Boxes)))
                            : ((w.type = "list_draw"),
                              (w.name = `清單抽屜 ${b}`));
                        let E = f.position.split(",")[1];
                        m < +E &&
                          ((m = +E),
                          (o.contents[a].contents[g].oriMaxCol = +m)),
                          o.contents[a].contents[g].contents.push(w);
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
        (o.components = t.components.map((p, m) =>
          this.convertSingleComponent(p, m, o.GUID)
        )),
      Object.keys(t).forEach((p) => {
        [
          "GUID",
          "type",
          "name",
          "position",
          "dimensions",
          "med_box",
          "components",
        ].includes(p) || (o[p] = t[p]);
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
const At = new Fm(),
  Hm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: At },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ad = h.createContext(void 0),
  Vm = ({ children: e }) => {
    const [t, n] = h.useState(!1),
      [s, o] = h.useState(null),
      [l, a] = h.useState(!1),
      [i, c] = h.useState(null),
      [g, p] = h.useState(null),
      [m, f] = h.useState("medicine"),
      [b, w] = h.useState(!1),
      [E, k] = h.useState(0),
      [u, d] = h.useState({ message: "", type: "success", isVisible: !1 }),
      [x, D] = h.useState(!1),
      [L, I] = h.useState(null),
      [A, M] = h.useState("edit"),
      [Z, C] = h.useState(!1),
      [B, X] = h.useState(null),
      [P, T] = h.useState(!1),
      [se, v] = h.useState(null),
      [N, j] = h.useState(!1),
      [H, de] = h.useState(!1),
      [ee, ae] = h.useState(null),
      [Ce, ue] = h.useState(!1),
      [ke, ce] = h.useState(null),
      [Q, he] = h.useState(!1),
      [we, R] = h.useState(null),
      [fe, G] = h.useState(!1),
      [_, te] = h.useState(null),
      [ie, U] = h.useState(null),
      [S, $] = h.useState("add"),
      [K, V] = h.useState(!1),
      [le, ge] = h.useState([]),
      [be, Me] = h.useState([]),
      [xe, ve] = h.useState(!1),
      [Ne, Ie] = h.useState(!1),
      [nt, _e] = h.useState(""),
      [Ye, Ge] = h.useState(!1),
      [Lt, ht] = h.useState(""),
      [qt, en] = h.useState(!1),
      [js, Pr] = h.useState(null),
      [Vo, y] = h.useState(null),
      [W, q] = h.useState(!1),
      [z, J] = h.useState(null),
      [O, re] = h.useState(!1),
      [ne, Y] = h.useState(null),
      F = () => {
        sessionStorage.removeItem("user_session"), n(!1), o(null);
      },
      me = h.useCallback(() => {
        k((Ee) => Ee + 1);
      }, []),
      pe = h.useCallback((Ee, Et) => {
        d({ message: Ee, type: Et, isVisible: !0 });
      }, []),
      De = h.useCallback(() => {
        d((Ee) => ({ ...Ee, isVisible: !1 }));
      }, []),
      je = (Ee) => {
        I(Ee), M("edit"), D(!0);
      },
      Re = () => {
        const Ee = {
          GUID: `new_medbox_${Date.now()}`,
          name: "",
          box_type: "",
          width: [],
          width_index: 0,
          med_info: [],
          parentShelf: null,
        };
        I(Ee), M("add"), D(!0);
      },
      gt = () => {
        D(!1), I(null), M("edit");
      },
      Be = (Ee) => {
        X(Ee), C(!0);
      },
      tn = () => {
        C(!1), X(null);
      },
      Rr = (Ee) => {
        v(Ee), T(!0);
      },
      Wo = () => {
        T(!1), v(null);
      },
      Hd = (Ee) => {
        ae(Ee), de(!0);
      },
      Vd = () => {
        de(!1), ae(null);
      },
      Wd = (Ee) => {
        ce(Ee), ue(!0);
      },
      qd = () => {
        ue(!1), ce(null);
      },
      Yd = (Ee) => {
        R(Ee), he(!0);
      },
      Xd = () => {
        he(!1), R(null);
      },
      Qd = (Ee) => {
        te(Ee), U(null), $("add"), G(!0);
      },
      Kd = (Ee, Et) => {
        te(Ee), U(Et), $("edit"), G(!0);
      },
      Jd = () => {
        G(!1), te(null), U(null), $("add");
      },
      Zd = () => {
        V(!0);
      },
      ef = () => {
        V(!1);
      },
      tf = (Ee = "") => {
        _e(Ee), Ie(!0);
      },
      nf = () => {
        Ie(!1);
      },
      rf = (Ee) => {
        ht(Ee), Ge(!0);
      },
      sf = () => {
        Ge(!1), ht("");
      },
      of = (Ee, Et) => {
        Pr(Ee), y(Et || null), en(!0);
      },
      lf = () => {
        en(!1), Pr(null), y(null);
      },
      af = (Ee) => {
        J(Ee), q(!0);
      },
      cf = () => {
        q(!1), J(null);
      },
      uf = (Ee) => {
        Y(Ee), re(!0);
      },
      df = () => {
        re(!1), Y(null);
      },
      ff = h.useCallback(async () => {
        if (!i) {
          console.warn("沒有選擇部門分類，無法重新載入資料");
          return;
        }
        console.log("🔄 重新載入藥品地圖資料，部門類型:", i), j(!0);
        try {
          const Ee = await Se.getMedMapByDepartment(i);
          if (Ee.Code === 200 && Ee.Data) {
            console.log("📡 重新載入成功:", Ee.Data);
            const Et = At.convertMedMapApiToFakeData(Ee.Data);
            if (!At.validateConvertedData(Et)) {
              console.error("❌ 轉換後的資料驗證失敗"), p(null);
              return;
            }
            p(Et), console.log("✅ 地圖資料已重新載入");
          } else console.error("❌ API 回傳錯誤:", Ee), p(null);
        } catch (Ee) {
          console.error("💥 重新載入藥品地圖資料失敗:", Ee), p(null);
        } finally {
          j(!1);
        }
      }, [i, j, p]),
      pf = h.useCallback((Ee, Et) => {
        p(
          (Xn) =>
            Xn &&
            Xn.map((ii) => {
              const Qn = { ...ii };
              return (
                Qn.contents &&
                  (Qn.contents = Qn.contents.map((Kn) => {
                    const Jn = { ...Kn };
                    return (
                      Jn.contents &&
                        (Jn.contents = Jn.contents.map((Zn) => {
                          const er = { ...Zn };
                          return (
                            er.contents &&
                              (er.contents = er.contents.map((mn) => {
                                if (mn.GUID === Ee) {
                                  const Ut = { ...mn };
                                  return (
                                    Ut.medMapStock || (Ut.medMapStock = []),
                                    (Ut.medMapStock = [...Ut.medMapStock, Et]),
                                    Ut
                                  );
                                }
                                return mn;
                              })),
                            er
                          );
                        })),
                      Jn
                    );
                  })),
                Qn
              );
            })
        );
      }, []),
      mf = h.useCallback((Ee, Et, Xn) => {
        p(
          (Ss) =>
            Ss &&
            Ss.map((Qn) => {
              const Kn = { ...Qn };
              return (
                Kn.contents &&
                  (Kn.contents = Kn.contents.map((Jn) => {
                    const Zn = { ...Jn };
                    return (
                      Zn.contents &&
                        (Zn.contents = Zn.contents.map((er) => {
                          const mn = { ...er };
                          return (
                            mn.contents &&
                              (mn.contents = mn.contents.map((Ut) => {
                                if (Ut.GUID === Ee && Ut.medMapStock) {
                                  const ci = { ...Ut };
                                  return (
                                    (ci.medMapStock = Ut.medMapStock.map((qo) =>
                                      qo.GUID === Et ? { ...qo, ...Xn } : qo
                                    )),
                                    ci
                                  );
                                }
                                return Ut;
                              })),
                            mn
                          );
                        })),
                      Zn
                    );
                  })),
                Kn
              );
            })
        );
      }, []);
    return r.jsx(Ad.Provider, {
      value: {
        isAuthenticated: t,
        setIsAuthenticated: n,
        currentUser: s,
        setCurrentUser: o,
        logout: F,
        sidebarOpen: l,
        setSidebarOpen: a,
        selectedDepartmentType: i,
        setSelectedDepartmentType: c,
        isAdminMode: b,
        setIsAdminMode: w,
        apiDepartmentData: g,
        setApiDepartmentData: p,
        viewMode: m,
        setViewMode: f,
        refreshTrigger: E,
        triggerRefresh: me,
        addStockToShelf: pf,
        notification: u,
        showNotification: pe,
        hideNotification: De,
        medBoxModalOpen: x,
        setMedBoxModalOpen: D,
        selectedMedBox: L,
        setSelectedMedBox: I,
        openMedBoxModal: je,
        closeMedBoxModal: gt,
        modalMode: A,
        setModalMode: M,
        openAddMedBoxModal: Re,
        listDrawModalOpen: Z,
        setListDrawModalOpen: C,
        selectedListDraw: B,
        setSelectedListDraw: X,
        openListDrawModal: Be,
        closeListDrawModal: tn,
        gridDrawModalOpen: P,
        setGridDrawModalOpen: T,
        selectedGridDraw: se,
        setSelectedGridDraw: v,
        openGridDrawModal: Rr,
        closeGridDrawModal: Wo,
        isLoadingMedMap: N,
        setIsLoadingMedMap: j,
        addParentContainerModalOpen: H,
        setAddParentContainerModalOpen: de,
        selectedDepartmentForAdd: ee,
        setSelectedDepartmentForAdd: ae,
        openAddParentContainerModal: Hd,
        closeAddParentContainerModal: Vd,
        addShelfDrawContainerModalOpen: Ce,
        setAddShelfDrawContainerModalOpen: ue,
        selectedSubContainerForAdd: ke,
        setSelectedSubContainerForAdd: ce,
        openAddShelfDrawContainerModal: Wd,
        closeAddShelfDrawContainerModal: qd,
        addSubContainerModalOpen: Q,
        setAddSubContainerModalOpen: he,
        selectedParentContainerForAdd: we,
        setSelectedParentContainerForAdd: R,
        openAddSubContainerModal: Yd,
        closeAddSubContainerModal: Xd,
        addStoreItemModalOpen: fe,
        setAddStoreItemModalOpen: G,
        selectedStoreShelfForAdd: _,
        setSelectedStoreShelfForAdd: te,
        selectedStockItemForEdit: ie,
        setSelectedStockItemForEdit: U,
        storeItemModalMode: S,
        setStoreItemModalMode: $,
        openAddStoreItemModal: Qd,
        openEditStoreItemModal: Kd,
        closeAddStoreItemModal: Jd,
        updateStockInShelf: mf,
        addDepartmentModalOpen: K,
        setAddDepartmentModalOpen: V,
        allDepartmentsList: le,
        setAllDepartmentsList: ge,
        openAddDepartmentModal: Zd,
        closeAddDepartmentModal: ef,
        reloadMedMapData: ff,
        qrCodeScannerModalOpen: Ne,
        qrCodeScannerMode: nt,
        setQRCodeScannerModalOpen: Ie,
        openQRCodeScannerModal: tf,
        closeQRCodeScannerModal: nf,
        addBarcodeModalOpen: Ye,
        setAddBarcodeModalOpen: Ge,
        openAddBarcodeModal: rf,
        closeAddBarcodeModal: sf,
        initialBarcodeValue: Lt,
        containerDetailModalOpen: qt,
        setContainerDetailModalOpen: en,
        selectedContainerForDetail: js,
        setSelectedContainerForDetail: Pr,
        highlightedMedicineCode: Vo,
        setHighlightedMedicineCode: y,
        openContainerDetailModal: of,
        closeContainerDetailModal: lf,
        editStoreShelfModalOpen: W,
        setEditStoreShelfModalOpen: q,
        selectedStoreShelfForEdit: z,
        setSelectedStoreShelfForEdit: J,
        openEditStoreShelfModal: af,
        closeEditStoreShelfModal: cf,
        editParentContainerModalOpen: O,
        setEditParentContainerModalOpen: re,
        selectedParentContainerForEdit: ne,
        setSelectedParentContainerForEdit: Y,
        openEditParentContainerModal: uf,
        closeEditParentContainerModal: df,
        medicineList: be,
        setMedicineList: Me,
        isLoadingMedicines: xe,
        setIsLoadingMedicines: ve,
      },
      children: e,
    });
  },
  Qe = () => {
    const e = h.useContext(Ad);
    if (e === void 0)
      throw new Error("useDrugMap must be used within a DrugMapProvider");
    return e;
  },
  Wm = {
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
  $d = h.createContext(void 0),
  qm = ({ children: e }) => {
    const [t, n] = h.useState("zh-TW"),
      s = (o) => Wm[t][o] || o;
    return r.jsx($d.Provider, {
      value: { language: t, setLanguage: n, t: s },
      children: e,
    });
  },
  mt = () => {
    const e = h.useContext($d);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Ym = {
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
 */ const Xm = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  $e = (e, t) => {
    const n = h.forwardRef(
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
        p
      ) =>
        h.createElement(
          "svg",
          {
            ref: p,
            ...Ym,
            width: o,
            height: o,
            stroke: s,
            strokeWidth: a ? (Number(l) * 24) / Number(o) : l,
            className: ["lucide", `lucide-${Xm(e)}`, i].join(" "),
            ...g,
          },
          [
            ...t.map(([m, f]) => h.createElement(m, f)),
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
 */ const Qm = $e("Archive", [
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
 */ const Od = $e("Building2", [
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
 */ const _r = $e("Camera", [
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
 */ const Km = $e("CheckCircle", [
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
 */ const Ld = $e("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jm = $e("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zm = $e("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eh = $e("EyeOff", [
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
 */ const th = $e("Eye", [
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
 */ const nh = $e("Globe", [
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
 */ const Ud = $e("Grid3x3", [
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
 */ const rh = $e("ListX", [
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
 */ const Bd = $e("Lock", [
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
 */ const sh = $e("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oh = $e("Package", [
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
 */ const mr = $e("Pen", [
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
 */ const lh = $e("Pill", [
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
 */ const zd = $e("Trash2", [
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
 */ const Gd = $e("Unlock", [
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
 */ const ah = $e("Warehouse", [
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
 */ const ih = $e("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const He = $e("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  ch = () => {
    const { sidebarOpen: e, setSidebarOpen: t } = Qe(),
      { t: n } = mt();
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
  uh = () => {
    const {
        viewMode: e,
        setViewMode: t,
        logout: n,
        currentUser: s,
        selectedDepartmentType: o,
        openAddDepartmentModal: l,
        apiDepartmentData: a,
        allDepartmentsList: i,
      } = Qe(),
      { language: c, setLanguage: g, t: p } = mt(),
      [m, f] = no.useState(!1),
      b = () => {
        g(c === "zh-TW" ? "en" : "zh-TW");
      },
      w = no.useMemo(() => {
        if (!o || !i || !a) return !1;
        const E = a.map((d) => d.name);
        return (
          i
            .filter((d) => d["department_type "] === o)
            .filter((d) => !E.includes(d.name)).length > 0
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
                        r.jsx(lh, { className: "w-4 h-4" }),
                        r.jsx("span", {
                          className: "text-sm font-medium",
                          children: p("topbar.medicine"),
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
                        r.jsx(Od, { className: "w-4 h-4" }),
                        r.jsx("span", {
                          className: "text-sm font-medium",
                          children: p("topbar.department"),
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsx("button", {
                  onClick: () => f(!m),
                  className:
                    "lg:hidden flex items-center justify-center p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                  children: m
                    ? r.jsx(Zm, { className: "w-4 h-4" })
                    : r.jsx(Ld, { className: "w-4 h-4" }),
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
                  w &&
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
                  onClick: b,
                  className:
                    "w-full lg:w-auto flex justify-center items-center space-x-2 px-3 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors border",
                  children: [
                    r.jsx(nh, { className: "w-4 h-4" }),
                    r.jsx("span", {
                      className: "text-sm font-medium",
                      children: p("topbar.language"),
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
                    r.jsx(sh, { className: "w-4 h-4" }),
                    r.jsx("span", {
                      className: "text-sm font-medium",
                      children: p("topbar.logout"),
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
  dh = [
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
  fh = ({ isOpen: e, onClose: t }) => {
    const [n, s] = h.useState("blue"),
      [o, l] = h.useState(1),
      [a, i] = h.useState(60),
      [c, g] = h.useState(""),
      [p, m] = h.useState(""),
      [f, b] = h.useState([]),
      [w, E] = h.useState([]),
      [k, u] = h.useState([]),
      [d, x] = h.useState(!1),
      [D, L] = h.useState(!1),
      I = h.useRef(null),
      A = h.useRef(null),
      M = h.useRef(null),
      Z = h.useRef(null);
    h.useEffect(() => {
      if (e) {
        const v = localStorage.getItem("medMap_setting");
        if (v)
          try {
            const N = JSON.parse(v);
            s(N.light_color || "blue"),
              l(N.brightness !== void 0 ? N.brightness : 1),
              i(N.light_sec !== void 0 ? N.light_sec : 60),
              g(N.default_person || ""),
              m(N.default_person_id || "");
          } catch (N) {
            console.error("讀取設定失敗:", N),
              s("blue"),
              l(1),
              i(60),
              g(""),
              m("");
          }
        else s("blue"), l(1), i(60), g(""), m("");
        C();
      }
    }, [e]),
      h.useEffect(() => {
        const v = (N) => {
          M.current &&
            !M.current.contains(N.target) &&
            I.current &&
            !I.current.contains(N.target) &&
            x(!1),
            Z.current &&
              !Z.current.contains(N.target) &&
              A.current &&
              !A.current.contains(N.target) &&
              L(!1);
        };
        return (
          document.addEventListener("mousedown", v),
          () => document.removeEventListener("mousedown", v)
        );
      }, []);
    const C = async () => {
        try {
          const v = await Se.getAllStaffInfo();
          v.Code === 200 && v.Data && b(v.Data);
        } catch (v) {
          console.error("獲取人員資料失敗:", v);
        }
      },
      B = (v) => {
        if ((g(v), v.trim() === "")) {
          E([]), x(!1);
          return;
        }
        const N = f.filter(
          (j) => j.name && j.name.toLowerCase().includes(v.toLowerCase())
        );
        E(N), x(N.length > 0);
      },
      X = (v) => {
        if ((m(v), v.trim() === "")) {
          u([]), L(!1);
          return;
        }
        const N = f.filter(
          (j) => j.ID && j.ID.toLowerCase().includes(v.toLowerCase())
        );
        u(N), L(N.length > 0);
      },
      P = (v) => {
        g(v.name), m(v.ID), x(!1);
      },
      T = (v) => {
        g(v.name), m(v.ID), L(!1);
      },
      se = () => {
        const v = {
          light_color: n,
          brightness: o,
          light_sec: a,
          default_person: c,
          default_person_id: p,
        };
        localStorage.setItem("medMap_setting", JSON.stringify(v)),
          console.log("設定已儲存:", v),
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
                      children: r.jsx(He, { className: "w-5 h-5" }),
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
                                  onChange: (v) => B(v.target.value),
                                  onFocus: () => {
                                    c.trim() && B(c);
                                  },
                                  placeholder: "請輸入人員名稱",
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                }),
                                d &&
                                  r.jsx("div", {
                                    ref: M,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: w.map((v, N) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          onClick: () => P(v),
                                          className:
                                            "px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                          children: [
                                            r.jsx("div", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: v.name,
                                            }),
                                            r.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: v.ID,
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
                                  ref: A,
                                  type: "text",
                                  value: p,
                                  onChange: (v) => X(v.target.value),
                                  onFocus: () => {
                                    p.trim() && X(p);
                                  },
                                  placeholder: "請輸入人員 ID",
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                }),
                                D &&
                                  r.jsx("div", {
                                    ref: Z,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: k.map((v, N) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          onClick: () => T(v),
                                          className:
                                            "px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                          children: [
                                            r.jsx("div", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: v.ID,
                                            }),
                                            r.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: v.name,
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
                          children: dh.map((v) =>
                            r.jsxs(
                              "button",
                              {
                                onClick: () => s(v.value),
                                className: `
                    relative p-3 rounded-lg border-2 transition-all
                    ${v.bgColor} ${v.textColor}
                    ${
                      n === v.value
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
                                        children: v.name,
                                      }),
                                      r.jsx("div", {
                                        className: "text-xs opacity-90",
                                        children: v.bgr,
                                      }),
                                    ],
                                  }),
                                  n === v.value &&
                                    r.jsx("div", {
                                      className:
                                        "absolute top-1 right-1 w-3 h-3 bg-white rounded-full border-2 border-gray-900",
                                    }),
                                ],
                              },
                              v.value
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
                              onChange: (v) => l(parseFloat(v.target.value)),
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
                              onChange: (v) => i(parseInt(v.target.value)),
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
                      onClick: se,
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
  ph = () => {
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
      } = Qe(),
      { t: p } = mt(),
      [m, f] = h.useState(new Set()),
      [b, w] = h.useState([]),
      [E, k] = h.useState(!0),
      [u, d] = h.useState([]),
      [x, D] = h.useState(!1),
      L = () => {
        c
          ? g(!1)
          : prompt("請輸入後台密碼：") === "66437068"
          ? g(!0)
          : alert("密碼錯誤，無法開啟後台模式");
      };
    h.useEffect(() => {
      (async () => {
        k(!0);
        try {
          const B = await Se.getDepartments();
          B.Code === 200 && B.Data
            ? (console.log(B.Data), w(B.Data), i(B.Data))
            : (console.error("API returned error:", B), w([]), i([]));
        } catch (B) {
          console.error("Failed to fetch department data:", B), w([]), i([]);
        } finally {
          k(!1);
        }
      })();
    }, []);
    const I = b.reduce((C, B) => {
        const X = B["department_type "];
        return C[X] || (C[X] = []), C[X].push(B), C;
      }, {}),
      A = (C) => {
        const B = new Set(m);
        B.has(C) ? B.delete(C) : B.add(C), f(B);
      },
      M = async (C) => {
        console.log("🏢 選擇部門:", C), s(C), await Z(C), t(!1);
      },
      Z = async (C) => {
        console.log("🚀 開始取得藥品地圖資料，部門類型:", C), a(!0);
        try {
          const B = await Se.getMedMapByDepartment(C);
          if (B.Code === 200 && B.Data) {
            console.log("📡 API 回傳成功:", B.Data);
            const X = At.convertMedMapApiToFakeData(B.Data);
            if (!At.validateConvertedData(X)) {
              console.error("❌ 轉換後的資料驗證失敗"), d([]);
              return;
            }
            const T = At.generateConversionReport(B.Data, X);
            d(X),
              o(X),
              console.log("💾 已暫存轉換後的資料到狀態中"),
              console.log("📊 最終轉換結果:", X),
              console.log("📋 轉換報告:", T);
          } else console.error("❌ API 回傳錯誤:", B), d([]), o(null);
        } catch (B) {
          console.error("💥 取得藥品地圖資料失敗:", B), d([]), o(null);
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
                          title: p("nav.home"),
                          children: r.jsx(ai, { className: "w-5 h-5" }),
                        }),
                        r.jsx("h1", {
                          className: "text-lg font-semibold text-gray-900",
                          children: p("sidebar.drugMap"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: () => t(!e),
                      className:
                        "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                      title: p("sidebar.closeSidebar"),
                      children: r.jsx(rh, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
              }),
              r.jsx("div", {
                className: "flex-1 overflow-y-auto p-4",
                children: E
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
                          children: p("sidebar.departmentCategories"),
                        }),
                        Object.entries(I).map(([C, B]) =>
                          r.jsxs(
                            "div",
                            {
                              className: "space-y-1",
                              children: [
                                r.jsxs("button", {
                                  onClick: () => M(C),
                                  disabled: l,
                                  className: `w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 border ${
                                    n === C
                                      ? "bg-blue-50 text-blue-700 border-blue-200 shadow-sm"
                                      : "text-gray-700 hover:bg-gray-50 hover:shadow-sm border-transparent"
                                  } ${
                                    l ? "opacity-50 cursor-not-allowed" : ""
                                  }`,
                                  children: [
                                    r.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        C === "B1F"
                                          ? r.jsx(Od, { className: "w-4 h-4" })
                                          : r.jsx(ah, { className: "w-4 h-4" }),
                                        r.jsxs("div", {
                                          className: "text-left",
                                          children: [
                                            r.jsx("div", {
                                              className: "font-medium",
                                              children: C,
                                            }),
                                            r.jsxs("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: [
                                                B.length,
                                                " ",
                                                p("sidebar.departments"),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    r.jsx("div", {
                                      onClick: (X) => {
                                        X.stopPropagation(), A(C);
                                      },
                                      className:
                                        "p-1 hover:bg-gray-200/50 rounded transition-colors",
                                      children: m.has(C)
                                        ? r.jsx(Ld, { className: "w-4 h-4" })
                                        : r.jsx(Jm, { className: "w-4 h-4" }),
                                    }),
                                  ],
                                }),
                                m.has(C) &&
                                  r.jsx("div", {
                                    className: "ml-6 space-y-2",
                                    children: B.map((X) =>
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
                                                children: X.name,
                                              }),
                                              r.jsx("span", {
                                                className: `text-xs px-2 py-1 rounded-full ${
                                                  X.type === "調劑台"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-blue-100 text-blue-800"
                                                }`,
                                                children: X.type,
                                              }),
                                            ],
                                          }),
                                        },
                                        X.GUID
                                      )
                                    ),
                                  }),
                              ],
                            },
                            C
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
                          onClick: L,
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
        r.jsx(fh, { isOpen: x, onClose: () => D(!1) }),
      ],
    });
  },
  mh = () => {
    const { t: e } = mt();
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
  hh = ({
    component: e,
    scale: t,
    isLocked: n,
    isHighlighted: s = !1,
    onContainerClick: o,
  }) => {
    const l = h.useRef(null),
      { t: a } = mt(),
      {
        apiDepartmentData: i,
        setApiDepartmentData: c,
        showNotification: g,
      } = Qe(),
      [p, m] = h.useState(!1),
      [f, b] = h.useState({ x: 0, y: 0 }),
      [w, E] = h.useState(e.position),
      [k, u] = h.useState(!1),
      [d, x] = h.useState(null),
      [D, L] = h.useState({ x: 0, y: 0 }),
      [I, A] = h.useState({ x: 0, y: 0 }),
      M = () => {
        try {
          const Q = localStorage.getItem("medMap_setting");
          if (Q) return JSON.parse(Q).light_color || "red";
        } catch (Q) {
          console.error("讀取高亮顏色設定失敗:", Q);
        }
        return "red";
      },
      Z = h.useCallback(
        async (Q, he) => {
          if (!i) return;
          console.log("🔄 更新組件位置:", Q, he);
          const we = JSON.parse(JSON.stringify(i)),
            R = (G) => {
              for (const _ of G) {
                if (_.GUID === Q)
                  return (
                    (_.position = { x: he.x.toFixed(3), y: he.y.toFixed(3) }),
                    console.log(
                      "✅ 組件位置已更新:",
                      _.name,
                      he.x.toFixed(3),
                      he.y.toFixed(3)
                    ),
                    !0
                  );
                if (
                  (_.components &&
                    Array.isArray(_.components) &&
                    R(_.components)) ||
                  (_.contents && Array.isArray(_.contents) && R(_.contents))
                )
                  return !0;
              }
              return !1;
            };
          if (R(we)) {
            c(we), console.log("💾 全域資料已更新");
            try {
              console.log("📡 開始同步後端位置資料...");
              const G = await Se.updateContainerPosition({
                GUID: Q,
                absolute_position: `${he.x.toFixed(3)},${he.y.toFixed(3)}`,
              });
              G.Code === 200
                ? (console.log("✅ 後端位置同步成功", G),
                  g("位置更新成功", "success"))
                : (console.error("❌ 後端位置同步失敗:", G),
                  g(`位置更新失敗: ${G.Result || "未知錯誤"}`, "error"));
            } catch (G) {
              console.error("💥 後端位置同步發生錯誤:", G),
                g("位置更新失敗: 網路錯誤", "error");
            }
          } else console.warn("⚠️ 未找到要更新的組件:", Q);
        },
        [i, c, g]
      ),
      { position: C, dimensions: B, name: X, type: P } = e,
      T = h.useCallback(
        (Q) => {
          const he = l.current;
          if (he)
            if ((A({ x: Q.clientX, y: Q.clientY }), n)) {
              Q.preventDefault(),
                Q.stopPropagation(),
                he.setPointerCapture(Q.pointerId);
              const we = he.getBoundingClientRect(),
                R = Q.clientX - we.left,
                fe = Q.clientY - we.top;
              b({ x: R, y: fe }), m(!0), u(!1);
            } else u(!1);
        },
        [n]
      ),
      se = h.useCallback(() => {
        if (!i) return [];
        const Q = [],
          he = (we) => {
            for (const R of we)
              R.GUID !== e.GUID &&
                R.position &&
                Q.push({
                  GUID: R.GUID,
                  position: R.position,
                  dimensions: R.dimensions,
                }),
                R.components && Array.isArray(R.components) && he(R.components),
                R.contents && Array.isArray(R.contents) && he(R.contents);
          };
        return he(i), Q;
      }, [i, e.GUID]),
      v = h.useCallback(
        (Q, he) => {
          const R = se();
          let fe = Q,
            G = he;
          for (const _ of R) {
            const te = parseFloat(_.position.x),
              ie = parseFloat(_.position.y);
            if (
              (Math.abs(Q - te) < 20 && (fe = te),
              Math.abs(he - ie) < 20 && (G = ie),
              _.dimensions && e.dimensions)
            ) {
              const U = te + parseFloat(_.dimensions.width),
                S = Q + parseFloat(e.dimensions.width);
              Math.abs(S - U) < 20 && (fe = U - parseFloat(e.dimensions.width));
              const $ = ie + parseFloat(_.dimensions.depth),
                K = he + parseFloat(e.dimensions.depth);
              Math.abs(K - $) < 20 && (G = $ - parseFloat(e.dimensions.depth));
            }
          }
          return { x: fe, y: G };
        },
        [se, e.dimensions]
      ),
      N = h.useCallback(
        (Q) => {
          const he = Math.abs(Q.clientX - I.x),
            we = Math.abs(Q.clientY - I.y);
          if (((he > 5 || we > 5) && u(!0), !p || !n)) return;
          Q.preventDefault(), Q.stopPropagation();
          const R = l.current;
          if (!R) return;
          const fe = R.closest("[data-canvas-content]");
          if (!fe) return;
          const G = fe.getBoundingClientRect(),
            _ = (Q.clientX - G.left - f.x) / t,
            te = (Q.clientY - G.top - f.y) / t,
            ie = v(_, te);
          E(ie);
        },
        [p, f, t, n, v, I]
      ),
      j = h.useCallback(
        (Q) => {
          const he = Math.abs(Q.clientX - I.x),
            we = Math.abs(Q.clientY - I.y),
            R = he > 5 || we > 5;
          if (n) {
            if (!p) return;
            Q.preventDefault(), Q.stopPropagation();
            const fe = l.current;
            fe && fe.releasePointerCapture(Q.pointerId),
              m(!1),
              R ? Z(e.GUID, w) : o && o(e),
              u(!1);
          } else
            !R && o && (Q.preventDefault(), Q.stopPropagation(), o(e)), u(!1);
        },
        [p, n, o, e, Z, w, I]
      ),
      H = h.useCallback(
        (Q) => {
          const he = l.current;
          if (!he) return;
          const we = Q.touches[0];
          if (we && (L({ x: we.clientX, y: we.clientY }), n)) {
            Q.preventDefault(), Q.stopPropagation(), x(we.identifier);
            const R = he.getBoundingClientRect(),
              fe = we.clientX - R.left,
              G = we.clientY - R.top;
            b({ x: fe, y: G }), m(!0);
          }
        },
        [n]
      ),
      de = h.useCallback(
        (Q) => {
          if (!p || !n || d === null) return;
          Q.preventDefault(), Q.stopPropagation();
          const he = l.current;
          if (!he) return;
          const we = Array.from(Q.touches).find((ie) => ie.identifier === d);
          if (!we) return;
          const R = he.closest("[data-canvas-content]");
          if (!R) return;
          const fe = R.getBoundingClientRect(),
            G = (we.clientX - fe.left - f.x) / t,
            _ = (we.clientY - fe.top - f.y) / t,
            te = v(G, _);
          E(te);
        },
        [p, f, t, n, d, v]
      ),
      ee = h.useCallback(
        (Q) => {
          const he = Array.from(Q.changedTouches)[0];
          if (!he) return;
          const we = Math.abs(he.clientX - D.x),
            R = Math.abs(he.clientY - D.y),
            fe = we > 10 || R > 10;
          if (n) {
            if (
              !p ||
              d === null ||
              !Array.from(Q.changedTouches).some((_) => _.identifier === d)
            )
              return;
            Q.preventDefault(),
              Q.stopPropagation(),
              m(!1),
              x(null),
              L({ x: 0, y: 0 }),
              fe ? Z(e.GUID, w) : o && o(e);
          } else
            !fe && o && (Q.preventDefault(), Q.stopPropagation(), o(e)),
              L({ x: 0, y: 0 });
        },
        [p, n, d, Z, e, w, D, o]
      ),
      ae = h.useCallback(
        (Q) => {
          !p ||
            !n ||
            d === null ||
            !Array.from(Q.changedTouches).some((we) => we.identifier === d) ||
            (Q.preventDefault(),
            Q.stopPropagation(),
            E(e.position),
            m(!1),
            x(null),
            L({ x: 0, y: 0 }));
        },
        [p, n, d, e.position]
      ),
      Ce = (Q) => {
        if (s) return `highlight-breathe-${M()}`;
        switch (Q) {
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
      ue = (Q) => {
        if (s) return `highlight-breathe-${M()}`;
        switch (Q) {
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
      ke = (Q) => {
        if (s) return `highlight-tag-${M()}`;
        switch (Q) {
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
      ce = (Q) => {
        const he =
          Q === "調劑台"
            ? "type.dispensingStation"
            : Q === "藥庫"
            ? "type.warehouse"
            : Q === "parent_container"
            ? "櫃體"
            : "type." + Q;
        return a(he) || Q;
      };
    return r.jsx("div", {
      ref: l,
      className: `flex flex-col absolute border-2 rounded-lg shadow-lg hover:shadow-xl ${Ce(
        P
      )} overflow-hidden ${n ? "cursor-move" : "cursor-default"} ${
        p ? "shadow-2xl z-50" : ""
      }`,
      style: {
        left: `${w.x}px`,
        top: `${w.y}px`,
        minWidth: P === "調劑台" || P === "藥庫" ? "120px" : "180px",
        minHeight: P === "調劑台" || P === "藥庫" ? "60px" : "120px",
        userSelect: "none",
        touchAction: "none",
        transition: p
          ? "none"
          : "transform 0.2s ease-out, box-shadow 0.2s ease-out",
      },
      onPointerDown: T,
      onPointerMove: N,
      onPointerUp: j,
      onTouchStart: H,
      onTouchMove: de,
      onTouchEnd: ee,
      onTouchCancel: ae,
      children: r.jsx("div", {
        className: `w-full min-w-[400px] h-auto flex items-start flex-1 justify-between p-2 border-gray-600 ${ue(
          P
        )}`,
        children: r.jsx("div", {
          className: "flex space-x-2 flex-1 min-w-0",
          children: r.jsxs("div", {
            className: "min-w-0 flex gap-4",
            children: [
              r.jsx("div", {
                className: "font-semibold text-lg truncate",
                children: X,
              }),
              r.jsx("div", {
                className: `text-sm truncate py-1 px-3 text-white rounded-2xl ${ke(
                  P
                )}`,
                children: ce(P),
              }),
            ],
          }),
        }),
      }),
    });
  },
  Ho = ({ isOpen: e, onClose: t, onScanSuccess: n, mode: s }) => {
    const { showNotification: o, openAddBarcodeModal: l } = Qe();
    console.log("🔍 QRCodeScannerModal props:", {
      isOpen: e,
      mode: s,
      hasOnScanSuccess: !!n,
    });
    const a = h.useRef(null),
      i = h.useRef(null),
      c = h.useRef(null),
      g = h.useRef(null),
      p = h.useRef(null),
      [m, f] = h.useState(!1),
      [b, w] = h.useState(""),
      [E, k] = h.useState(0),
      [u, d] = h.useState(null),
      [x, D] = h.useState(!1);
    h.useEffect(() => {
      const B = () => {
        const X = window.innerWidth < 680;
        D(X);
      };
      return (
        B(),
        window.addEventListener("resize", B),
        () => window.removeEventListener("resize", B)
      );
    }, []);
    const L = async () => {
        try {
          w("");
          const B = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: "environment",
              width: { ideal: 1920 },
              height: { ideal: 1080 },
            },
          });
          (c.current = B),
            a.current &&
              ((a.current.srcObject = B),
              await a.current.play(),
              console.log("✅ Camera started, setting isScanning to true"),
              f(!0));
        } catch (B) {
          console.error("無法開啟相機:", B),
            w("無法開啟相機，請確認相機權限已開啟");
        }
      },
      I = () => {
        g.current && (clearInterval(g.current), (g.current = null)),
          c.current &&
            (c.current.getTracks().forEach((B) => B.stop()),
            (c.current = null)),
          a.current && (a.current.srcObject = null),
          f(!1);
      },
      A = async () => {
        if (
          (console.log("🔄 captureAndScan called"),
          console.log("📹 videoRef.current:", !!a.current),
          console.log("🖼️ canvasRef.current:", !!i.current),
          console.log("▶️ isScanning:", m),
          !a.current || !i.current || !m)
        ) {
          console.log("❌ Early return: missing refs or not scanning");
          return;
        }
        const B = Date.now();
        if (B - E < 1e3) {
          console.log("⏱️ Throttled: too soon since last scan");
          return;
        }
        k(B);
        const X = a.current,
          P = i.current,
          T = P.getContext("2d");
        if (
          (console.log("🎥 video.readyState:", X.readyState),
          console.log("🎥 HAVE_ENOUGH_DATA:", X.HAVE_ENOUGH_DATA),
          !T || X.readyState !== X.HAVE_ENOUGH_DATA)
        ) {
          console.log("❌ Video not ready or no context");
          return;
        }
        (P.width = X.videoWidth),
          (P.height = X.videoHeight),
          T.drawImage(X, 0, 0, P.width, P.height),
          P.toBlob(
            async (se) => {
              if (!se) return;
              const v = new File([se], "scan.jpg", { type: "image/jpeg" });
              try {
                console.log("📸 截取圖片並掃描...");
                const N = await Se.scanBarcode(v);
                if (!N.results || N.results.length === 0) {
                  console.log("⚠️ 未辨識到條碼");
                  return;
                }
                const j = N.results[0];
                if (!j.code) {
                  console.log("⚠️ 辨識到條碼但無法讀取內容");
                  return;
                }
                console.log("✅ 成功辨識條碼:", j.code),
                  console.log("📋 條碼類型:", j.type),
                  console.log("📊 信心度:", j.conf),
                  I(),
                  t();
                try {
                  const H = await Se.searchByBarCode(j.code);
                  console.log("🔍 條碼搜尋結果:", H),
                    H.Code === 200
                      ? (console.log("✅ 找到藥品資料:", H.Data),
                        console.log("🎯 準備調用 onScanSuccess, mode:", s),
                        o("找到藥品資料", "success"),
                        n
                          ? (console.log("✅ onScanSuccess 存在，開始調用"),
                            n(j.code, H.Data),
                            console.log("✅ onScanSuccess 調用完成"))
                          : console.warn("⚠️ onScanSuccess 不存在"))
                      : H.Code === -200 && H.Result === "查無資料"
                      ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                        o("查無條碼資料，請建立條碼", "warning"),
                        l(j.code))
                      : (console.log("❌ 搜尋失敗:", H.Result),
                        o(H.Result || "搜尋失敗", "error"));
                } catch (H) {
                  console.error("條碼搜尋錯誤:", H),
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
      M = () => {
        g.current && clearInterval(g.current),
          (g.current = setInterval(() => {
            A();
          }, 1e3));
      };
    h.useEffect(
      () => (
        e ? L() : I(),
        () => {
          I();
        }
      ),
      [e]
    ),
      h.useEffect(() => {
        m && !g.current
          ? (console.log("🚀 isScanning became true, starting interval"), M())
          : !m &&
            g.current &&
            (console.log("🛑 isScanning became false, stopping interval"),
            g.current && (clearInterval(g.current), (g.current = null)));
      }, [m]);
    const Z = () => {
        I(), t();
      },
      C = async (B) => {
        if (!c.current || !p.current) return;
        const X = p.current.getBoundingClientRect(),
          P = (B.clientX - X.left) / X.width,
          T = (B.clientY - X.top) / X.height;
        console.log("🎯 點擊聚焦位置:", { x: P, y: T }),
          d({ x: B.clientX - X.left, y: B.clientY - X.top }),
          setTimeout(() => d(null), 1e3);
        try {
          const se = c.current.getVideoTracks()[0],
            v = se.getCapabilities();
          if (
            (console.log("📹 相機能力:", v),
            !v.focusMode || !v.focusMode.includes("manual"))
          ) {
            console.log("⚠️ 此相機不支援手動聚焦");
            return;
          }
          const N = {
            advanced: [
              {
                focusMode: "manual",
                focusDistance: 0,
                pointsOfInterest: [{ x: P, y: T }],
              },
            ],
          };
          await se.applyConstraints(N), console.log("✅ 聚焦成功");
        } catch (se) {
          console.log("⚠️ 聚焦失敗 (可能不支援):", se);
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
                      r.jsx(_r, { className: "w-6 h-6 text-white" }),
                      r.jsx("h2", {
                        className: "text-lg font-semibold text-white",
                        children: "條碼掃描",
                      }),
                    ],
                  }),
                  r.jsx("button", {
                    onClick: Z,
                    className:
                      "p-2 hover:bg-gray-700 rounded-lg transition-colors",
                    children: r.jsx(He, { className: "w-6 h-6 text-white" }),
                  }),
                ],
              }),
              r.jsxs("div", {
                className: "flex-1 relative",
                children: [
                  r.jsxs("div", {
                    ref: p,
                    className: "absolute inset-0 bg-black cursor-crosshair",
                    onClick: C,
                    children: [
                      r.jsx("video", {
                        ref: a,
                        className: "w-full h-full object-cover",
                        playsInline: !0,
                        muted: !0,
                      }),
                      u &&
                        r.jsxs("div", {
                          className: "absolute pointer-events-none",
                          style: {
                            left: u.x,
                            top: u.y,
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
                  b &&
                    r.jsx("div", {
                      className:
                        "bg-red-500 bg-opacity-20 border border-red-500 rounded-lg px-3 py-2 mb-3",
                      children: r.jsx("p", {
                        className: "text-red-200 text-sm",
                        children: b,
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
                          children: r.jsx(_r, {
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
                      onClick: Z,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(He, {
                        className: "w-6 h-6 text-gray-600",
                      }),
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "flex-1 overflow-y-auto p-4",
                  children: [
                    b &&
                      r.jsx("div", {
                        className:
                          "bg-red-50 border border-red-200 rounded-lg px-3 py-2 mb-4",
                        children: r.jsx("p", {
                          className: "text-red-600 text-sm",
                          children: b,
                        }),
                      }),
                    r.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        r.jsx("div", {
                          ref: p,
                          className:
                            "relative bg-black rounded-xl overflow-hidden cursor-crosshair",
                          style: { aspectRatio: "16/9" },
                          onClick: C,
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
  gh = ({ children: e }) => {
    const t = h.useRef(null),
      n = h.useRef(null),
      {
        selectedDepartmentType: s,
        apiDepartmentData: o,
        showNotification: l,
        openAddBarcodeModal: a,
        openContainerDetailModal: i,
        setHighlightedMedicineCode: c,
      } = Qe(),
      { t: g } = mt(),
      [p, m] = h.useState({ x: 0, y: 0, scale: 1 }),
      [f, b] = h.useState(!1),
      [w, E] = h.useState(!1),
      [k, u] = h.useState({ x: 0, y: 0 }),
      [d, x] = h.useState(!1),
      [D, L] = h.useState(!1),
      [I, A] = h.useState(""),
      [M, Z] = h.useState([]),
      [C, B] = h.useState(null),
      X = {
        blue: "255,0,0",
        green: "0,255,0",
        red: "0,0,255",
        yellow: "0,255,255",
        purple: "255,0,255",
        cyan: "255,255,0",
      },
      P = () => {
        try {
          const S = localStorage.getItem("med_map_anchor");
          return S ? JSON.parse(S) : [];
        } catch (S) {
          return (
            console.error("Error reading canvas states from localStorage:", S),
            []
          );
        }
      },
      T = (S, $, K, V) => {
        try {
          const le = P(),
            ge = le.findIndex(
              (Me) => Me.department === S && Me.canvasType === $
            ),
            be = { department: S, canvasType: $, scale: K, position: V };
          ge >= 0 ? (le[ge] = be) : le.push(be),
            localStorage.setItem("med_map_anchor", JSON.stringify(le));
        } catch (le) {
          console.error("Error saving canvas state to localStorage:", le);
        }
      },
      se = (S, $) =>
        P().find((V) => V.department === S && V.canvasType === $) || null;
    h.useEffect(() => {
      if (s) {
        const S = se(s, "InfiniteCanvas");
        if (S) m({ x: S.position.x, y: S.position.y, scale: S.scale });
        else {
          const $ = { x: 0, y: 0, scale: 1 };
          m($), T(s, "InfiniteCanvas", $.scale, $);
        }
      }
    }, [s]),
      h.useEffect(() => {
        if (!s) return;
        const S = setTimeout(() => {
          T(s, "InfiniteCanvas", p.scale, { x: p.x, y: p.y });
        }, 500);
        return () => clearTimeout(S);
      }, [p, s]),
      h.useEffect(() => {
        const S = (K) => {
            K.code === "Space" && !K.repeat && (K.preventDefault(), x(!0));
          },
          $ = (K) => {
            K.code === "Space" && (K.preventDefault(), x(!1), b(!1));
          };
        return (
          window.addEventListener("keydown", S),
          window.addEventListener("keyup", $),
          () => {
            window.removeEventListener("keydown", S),
              window.removeEventListener("keyup", $);
          }
        );
      }, []);
    const v = h.useCallback(
        (S) => {
          var K;
          if (w) return;
          if (
            (S.ctrlKey && !navigator.userAgent.includes("Mac")) ||
            (S.metaKey && navigator.userAgent.includes("Mac"))
          ) {
            S.preventDefault(), S.stopPropagation();
            const V =
              (K = t.current) == null ? void 0 : K.getBoundingClientRect();
            if (!V) return;
            const le = S.clientX - V.left,
              ge = S.clientY - V.top,
              be = S.deltaY > 0 ? 0.9 : 1.1,
              Me = Math.max(0.1, Math.min(5, p.scale * be)),
              xe = Me / p.scale,
              ve = le - (le - p.x) * xe,
              Ne = ge - (ge - p.y) * xe;
            m({ x: ve, y: Ne, scale: Me });
          }
        },
        [p, w]
      ),
      N = h.useCallback(
        (S) => {
          w ||
            !d ||
            (b(!0), u({ x: S.clientX, y: S.clientY }), S.preventDefault());
        },
        [w, d]
      ),
      j = h.useCallback(
        (S) => {
          if (!f || w) return;
          const $ = S.clientX - k.x,
            K = S.clientY - k.y;
          m((V) => ({ ...V, x: V.x + $, y: V.y + K })),
            u({ x: S.clientX, y: S.clientY });
        },
        [f, k, w]
      ),
      H = h.useCallback(() => {
        b(!1);
      }, []),
      de = h.useCallback(
        (S) => {
          if (!o) return [];
          const $ = [],
            K = (V) => {
              for (const le of V)
                le.med_list &&
                  Array.isArray(le.med_list) &&
                  le.med_list.some((be) => be.code == S) &&
                  (console.log("✅ 找到藥品所在櫃體:", le.name, le.GUID),
                  $.push(le)),
                  le.components &&
                    Array.isArray(le.components) &&
                    K(le.components),
                  le.contents && Array.isArray(le.contents) && K(le.contents);
            };
          return K(o), $;
        },
        [o]
      ),
      ee = h.useCallback(() => {
        try {
          const $ = localStorage.getItem("medMap_setting");
          if ($) {
            const V = JSON.parse($).light_sec;
            if (V != null && V !== "") {
              const le = Number(V);
              if (!isNaN(le) && le > 0) return le * 1e3;
            }
          }
        } catch ($) {
          console.error("讀取亮燈設定失敗:", $);
        }
        return 6e4;
      }, []),
      ae = h.useCallback(() => {
        const S = { rgb_color: "255,0,0", brightness: "100" };
        try {
          const $ = localStorage.getItem("medMap_setting");
          if ($) {
            const K = JSON.parse($),
              V = K.light_color || "red";
            return {
              rgb_color: X[V] || X.red,
              brightness: String(K.brightness !== void 0 ? K.brightness : 100),
            };
          }
        } catch ($) {
          console.error("讀取亮燈設定失敗:", $);
        }
        return S;
      }, []),
      Ce = h.useCallback(
        async (S) => {
          if (!S.trim()) return;
          n.current && (clearTimeout(n.current), (n.current = null)),
            console.log("🔍 搜尋藥碼:", S);
          const $ = de(S);
          if ($.length > 0) {
            const K = ee(),
              V = ae();
            console.log(`🎯 高亮 ${$.length} 個櫃體:`, $),
              console.log(`⏱️ 亮燈時長: ${K}ms (${K / 1e3}秒)`),
              console.log("💡 亮燈設定:", V);
            const le = $.map((ge) => ge.GUID);
            Z(le), B(S), c(S);
            for (const ge of $)
              if (ge.serverName && ge.serverType)
                try {
                  console.log(
                    `💡 呼叫亮燈 API - 櫃體: ${ge.name}, ServerName: ${ge.serverName}, ServerType: ${ge.serverType}`
                  ),
                    await Se.lightByCodeNameType(
                      ge.serverName,
                      ge.serverType,
                      S,
                      V.rgb_color,
                      V.brightness,
                      ge.device_type
                    );
                } catch (be) {
                  console.error(`❌ 亮燈 API 失敗 - 櫃體: ${ge.name}:`, be);
                }
              else
                console.warn(
                  `⚠️ 櫃體 ${ge.name} 缺少 serverName 或 serverType，無法亮燈`
                );
            n.current = setTimeout(async () => {
              console.log("⏱️ 恢復原本顏色，呼叫滅燈 API"),
                Z([]),
                B(null),
                c(null);
              for (const ge of $)
                if (ge.serverName && ge.serverType)
                  try {
                    console.log(`🌑 呼叫滅燈 API - 櫃體: ${ge.name}`),
                      await Se.lightByCodeNameType(
                        ge.serverName,
                        ge.serverType,
                        S,
                        "0,0,0",
                        V.brightness,
                        ge.device_type
                      );
                  } catch (be) {
                    console.error(`❌ 滅燈 API 失敗 - 櫃體: ${ge.name}:`, be);
                  }
              n.current = null;
            }, K);
          } else
            console.log("❌ 未找到包含此藥品的櫃體"), Z([]), B(null), c(null);
        },
        [de, ee, ae, c]
      ),
      ue = (S, $) => {
        var V, le;
        console.log("📍 藥品定位模式 - 掃描到藥品:", {
          barcode: S,
          medicineData: $,
        });
        const K =
          ((V = $[0]) == null ? void 0 : V.CODE) ||
          ((le = $[0]) == null ? void 0 : le.code);
        L(!1), Ce(K);
      },
      ke = async (S) => {
        var $, K;
        if (S.key === "Enter") {
          if ((S.preventDefault(), !I.trim())) {
            l("請輸入條碼", "warning");
            return;
          }
          try {
            console.log("🔍 搜尋條碼:", I);
            const V = await Se.searchByBarCode(I);
            if (
              (console.log("📋 條碼搜尋回應:", V),
              V.Code === 200 && V.Data && V.Data.length > 0)
            ) {
              const le =
                (($ = V.Data[0]) == null ? void 0 : $.CODE) ||
                ((K = V.Data[0]) == null ? void 0 : K.code);
              console.log("✅ 找到藥品資料:", V.Data),
                l("找到藥品，開始亮燈", "success"),
                Ce(le),
                A("");
            } else
              V.Code === -200 && V.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  l("查無條碼資料，請建立條碼", "warning"),
                  a(I),
                  A(""))
                : (console.log("❌ 搜尋失敗:", V.Result),
                  l(V.Result || "搜尋失敗", "error"));
          } catch (V) {
            console.error("條碼搜尋錯誤:", V),
              l("搜尋失敗，請稍後再試", "error");
          }
        }
      };
    h.useEffect(
      () => () => {
        n.current && clearTimeout(n.current);
      },
      []
    );
    const [ce, Q] = h.useState(null),
      [he, we] = h.useState({ x: 0, y: 0 }),
      R = (S) => {
        if (S.length < 2) return null;
        const $ = S[0],
          K = S[1];
        return Math.sqrt(
          Math.pow(K.clientX - $.clientX, 2) +
            Math.pow(K.clientY - $.clientY, 2)
        );
      },
      fe = (S) => {
        if (S.length === 1) return { x: S[0].clientX, y: S[0].clientY };
        const $ = S[0],
          K = S[1];
        return {
          x: ($.clientX + K.clientX) / 2,
          y: ($.clientY + K.clientY) / 2,
        };
      },
      G = h.useCallback(
        (S) => {
          if (!w) {
            if (S.touches.length === 2) {
              const $ = R(S.touches),
                K = fe(S.touches);
              Q($), we(K);
            } else if (S.touches.length === 1) {
              const $ = S.touches[0];
              u({ x: $.clientX, y: $.clientY }), b(!0);
            }
          }
        },
        [w]
      ),
      _ = h.useCallback(
        (S) => {
          var $;
          if (!w) {
            if ((S.preventDefault(), S.touches.length === 2 && ce !== null)) {
              const K = R(S.touches),
                V = fe(S.touches);
              if (K && ce) {
                const le =
                  ($ = t.current) == null ? void 0 : $.getBoundingClientRect();
                if (!le) return;
                const ge = K / ce,
                  be = Math.max(0.1, Math.min(5, p.scale * ge)),
                  Me = V.x - le.left,
                  xe = V.y - le.top,
                  ve = be / p.scale,
                  Ne = Me - (Me - p.x) * ve,
                  Ie = xe - (xe - p.y) * ve;
                m({ x: Ne, y: Ie, scale: be }), Q(K), we(V);
              }
            } else if (S.touches.length === 1 && f) {
              const K = S.touches[0],
                V = K.clientX - k.x,
                le = K.clientY - k.y;
              m((ge) => ({ ...ge, x: ge.x + V, y: ge.y + le })),
                u({ x: K.clientX, y: K.clientY });
            }
          }
        },
        [p, ce, f, k, w]
      ),
      te = h.useCallback(() => {
        Q(null), b(!1);
      }, []);
    h.useEffect(() => {
      const S = t.current;
      if (S)
        return (
          S.addEventListener("wheel", v, { passive: !1 }),
          () => S.removeEventListener("wheel", v)
        );
    }, [v]),
      h.useCallback(() => {
        m({ x: 0, y: 0, scale: 1 });
      }, []);
    const U = (() => {
      if (!o || o.length === 0) return [];
      const S = o,
        $ = [];
      for (const K of S)
        if (K.type === "調劑台" || K.type === "藥庫")
          for (const V of K.contents)
            $.push({
              GUID: V.GUID,
              type: V.type,
              name: `${V.name}`,
              position: V.position,
              dimensions: V.dimensions,
              med_list: V.med_list,
              serverName: V.serverName,
              serverType: V.serverType,
              Master_GUID: K.GUID,
              contents: V.contents || [],
            });
        else K.componets && K.componets.length > 0 && $.push(...K.componets);
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
                value: I,
                onChange: (S) => A(S.target.value),
                onKeyPress: ke,
                placeholder: "輸入條碼或掃描...",
                className:
                  "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
              }),
              r.jsx("button", {
                onClick: () => L(!0),
                className: "p-2",
                title: "掃描條碼",
                children: r.jsx(_r, { className: "w-6 h-6 text-blue-600" }),
              }),
            ],
          }),
        }),
        r.jsx("div", {
          className: "absolute bottom-4 right-4 z-10 flex gap-2",
          children: r.jsx("button", {
            onClick: () => E(!w),
            className: `p-3 rounded-lg shadow-lg transition-colors ${
              w
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`,
            title: g(w ? "canvas.unlockCanvas" : "canvas.lockCanvas"),
            children: w
              ? r.jsx(Bd, { className: "w-6 h-6" })
              : r.jsx(Gd, { className: "w-6 h-6" }),
          }),
        }),
        r.jsx("div", {
          ref: t,
          className: `w-full h-full relative ${
            d && !w ? "cursor-grab" : "cursor-default"
          } ${f ? "cursor-grabbing" : ""}`,
          onMouseDown: N,
          onMouseMove: j,
          onMouseUp: H,
          onMouseLeave: H,
          onTouchStart: G,
          onTouchMove: _,
          onTouchEnd: te,
          children: r.jsxs("div", {
            className: "absolute inset-0 origin-top-left",
            style: {
              transform: `translate(${p.x}px, ${p.y}px) scale(${p.scale})`,
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
                  U.map((S) =>
                    r.jsx(
                      hh,
                      {
                        component: S,
                        scale: p.scale,
                        isLocked: w,
                        isHighlighted: M.includes(S.GUID),
                        onContainerClick: ($) => {
                          console.log("🖱️ 點擊櫃體，傳遞亮燈藥品代碼:", C),
                            i($, C);
                        },
                      },
                      S.GUID
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
          onClose: () => L(!1),
          onScanSuccess: ue,
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
        setModalMode: p,
        setMedBoxModalOpen: m,
        showNotification: f,
        triggerRefresh: b,
        openEditStoreShelfModal: w,
        openEditParentContainerModal: E,
        reloadMedMapData: k,
      } = Qe(),
      { t: u } = mt(),
      [d, x] = h.useState(!1),
      [D, L] = h.useState(""),
      [I, A] = h.useState(!1),
      [M, Z] = h.useState(e.name);
    h.useEffect(() => {
      Z(e.name);
    }, [e.name]);
    const C = (N) => {
        N.stopPropagation(), L(e.name || ""), x(!0);
      },
      B = (N) => {
        N.stopPropagation(), x(!1), L("");
      },
      X = async (N) => {
        if ((N.stopPropagation(), !D.trim())) {
          f("名稱不能為空", "error");
          return;
        }
        if (D === e.name) {
          x(!1);
          return;
        }
        A(!0);
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
          let H;
          if (e.type === "store_shelves" || e.type === "dispensing_shelves")
            H = await Se.updateMedMapShelf(j);
          else if (e.type === "sub_container") H = await Se.updateSubSection(j);
          else if (e.type === "parent_container")
            H = await Se.updateMedMapSection(j);
          else {
            f("不支援的容器類型", "error"), A(!1);
            return;
          }
          H.Code === 200
            ? (f("名稱更新成功", "success"), x(!1), await k())
            : f(H.Result || "更新失敗", "error");
        } catch (j) {
          console.error("更新名稱失敗:", j), f("更新失敗，請稍後再試", "error");
        } finally {
          A(!1);
        }
      },
      P = (N) => {
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
      T = (N) => {
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
      se = (N) => {
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
      v = (N) => {
        switch (N) {
          case "parent_container":
            return u("type.parentContainer");
          case "sub_container":
            return u("type.subContainer");
          case "dispensing_shelves":
            return u("type.medBoxShelf");
          case "store_shelves":
            return u("type.storeShelf");
          case "grid_draw":
            return u("type.gridDraw");
          case "list_draw":
            return u("type.listDraw");
          case "med_box":
            return u("type.medBox");
          default:
            return N;
        }
      };
    switch (e.type) {
      case "sub_container":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${P(
            e.type || 0
          )} ${T(e.type || 0)}`,
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                d
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: D,
                          onChange: (N) => L(N.target.value),
                          onClick: (N) => N.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: X,
                          disabled: I,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(Gs, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: B,
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(He, {
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
                          children: M,
                        }),
                        r.jsx("button", {
                          onClick: C,
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(mr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !d &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${se(
                      e.type
                    )}`,
                    children: v(e.type),
                  }),
              ],
            }),
            e.type !== "none" &&
              !d &&
              r.jsx("div", {
                className: "flex items-center space-x-1",
                children: r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (N) => {
                    N.stopPropagation(), a(e);
                  },
                  title: u("modal.add"),
                  children: r.jsx(vt, { className: "w-6 h-6 text-green-700" }),
                }),
              }),
          ],
        });
      case "parent_container":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${P(
            e.type || 0
          )} ${T(
            e.type || 0
          )} cursor-pointer hover:bg-black/5 transition-colors`,
          onClick: (N) => {
            d || E(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                d
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: D,
                          onChange: (N) => L(N.target.value),
                          onClick: (N) => N.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (N) => {
                            N.stopPropagation(), X(N);
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
                            N.stopPropagation(), B(N);
                          },
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(He, {
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
                          children: M,
                        }),
                        r.jsx("button", {
                          onClick: (N) => {
                            N.stopPropagation(), C(N);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(mr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" && !d
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${se(
                        e.type
                      )}`,
                      children: v(e.type),
                    })
                  : null,
              ],
            }),
            e.type !== "none" &&
              !d &&
              r.jsx("div", {
                className: "flex items-center space-x-1",
                children: r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (N) => {
                    N.stopPropagation(), i(e);
                  },
                  title: u("modal.add"),
                  children: r.jsx(vt, { className: "w-6 h-6 text-green-700" }),
                }),
              }),
          ],
        });
      case "med_box":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${P(
            e.type || 0
          )} ${T(e.type || 0)}`,
          children: [
            r.jsx("div", {
              className: "flex items-center mr-4",
              children:
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${se(
                        e.type
                      )}`,
                      children: v(e.type),
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
                title: u("modal.settings"),
                children: r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
              }),
            }),
          ],
        });
      case "dispensing_shelves":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${P(
            e.type || 0
          )} ${T(e.type || 0)}`,
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                d
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: D,
                          onChange: (N) => L(N.target.value),
                          onClick: (N) => N.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: X,
                          disabled: I,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(Gs, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: B,
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(He, {
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
                          children: M,
                        }),
                        r.jsx("button", {
                          onClick: C,
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(mr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !d &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${se(
                      e.type
                    )}`,
                    children: v(e.type),
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
                    g(j), p("add"), m(!0);
                  },
                  title: u("modal.add"),
                  children: r.jsx(vt, { className: "w-6 h-6 text-green-700" }),
                }),
                r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (N) => {},
                  title: u("modal.settings"),
                  children: r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
                }),
              ],
            }),
          ],
        });
      case "store_shelves":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${P(
            e.type || 0
          )} ${T(
            e.type || 0
          )} cursor-pointer hover:bg-black/5 transition-colors`,
          onClick: (N) => {
            d || w(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                d
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: D,
                          onChange: (N) => L(N.target.value),
                          onClick: (N) => N.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (N) => {
                            N.stopPropagation(), X(N);
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
                            N.stopPropagation(), B(N);
                          },
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(He, {
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
                          children: M,
                        }),
                        r.jsx("button", {
                          onClick: (N) => {
                            N.stopPropagation(), C(N);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(mr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !d &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${se(
                      e.type
                    )}`,
                    children: v(e.type),
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
                title: u("modal.add"),
                children: r.jsx(vt, { className: "w-6 h-6 text-green-700" }),
              }),
            }),
          ],
        });
      case "list_draw":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${P(
            e.type || 0
          )} ${T(e.type || 0)}`,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${se(
                        e.type
                      )}`,
                      children: v(e.type),
                    })
                  : null,
              ],
            }),
            r.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (N) => {
                N.stopPropagation(), o(e);
              },
              title: u("modal.settings"),
              children: r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      case "grid_draw":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${P(
            e.type || 0
          )} ${T(e.type || 0)}`,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${se(
                        e.type
                      )}`,
                      children: v(e.type),
                    })
                  : null,
              ],
            }),
            r.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (N) => {
                N.stopPropagation(), l(e);
              },
              title: u("modal.settings"),
              children: r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      default:
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${P(
            e.type || 0
          )} ${T(e.type || 0)}`,
          children: [
            r.jsx("div", {
              className: "flex items-center space-x-2 mr-6",
              children:
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${se(
                        e.type
                      )}`,
                      children: v(e.type),
                    })
                  : null,
            }),
            e.type !== "none" &&
              r.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                title: u("modal.settings"),
                children: r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
              }),
          ],
        });
    }
  },
  Fd = h.forwardRef(({ children: e }, t) => {
    const n = h.useRef(null),
      {
        selectedDepartmentType: s,
        apiDepartmentData: o,
        setSidebarOpen: l,
        openAddParentContainerModal: a,
        openEditStoreItemModal: i,
        openQRCodeScannerModal: c,
        openAddBarcodeModal: g,
        showNotification: p,
        isAdminMode: m,
      } = Qe(),
      [f, b] = h.useState({ x: 0, y: 0, scale: 1 }),
      [w, E] = h.useState(!1),
      [k, u] = h.useState(!1),
      [d, x] = h.useState({ x: 0, y: 0 }),
      [D, L] = h.useState(!1),
      [I, A] = h.useState(""),
      [M, Z] = h.useState(!1),
      [C, B] = h.useState(null),
      [X, P] = h.useState(!1),
      [T, se] = h.useState({
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
      [v, N] = h.useState(null),
      j = h.useRef({}),
      H = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0,
      de = 8,
      ee = () => {
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
      ae = (y, W, q, z) => {
        try {
          const J = ee(),
            O = J.findIndex((ne) => ne.department === y && ne.canvasType === W),
            re = { department: y, canvasType: W, scale: q, position: z };
          O >= 0 ? (J[O] = re) : J.push(re),
            localStorage.setItem("med_map_anchor", JSON.stringify(J));
        } catch (J) {
          console.error("Error saving canvas state to localStorage:", J);
        }
      },
      Ce = (y, W) =>
        ee().find((z) => z.department === y && z.canvasType === W) || null;
    h.useEffect(() => {
      if (s) {
        const y = Ce(s, "drugCanvas");
        if (y) b({ x: y.position.x, y: y.position.y, scale: y.scale });
        else {
          const W = { x: 0, y: 0, scale: 1 };
          b(W), ae(s, "drugCanvas", W.scale, W);
        }
      }
    }, [s]),
      h.useEffect(() => {
        if (!s) return;
        const y = setTimeout(() => {
          ae(s, "drugCanvas", f.scale, { x: f.x, y: f.y });
        }, 500);
        return () => clearTimeout(y);
      }, [f, s]);
    const ue = (y) =>
        [
          "parent_container",
          "sub_container",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
          "med_box",
        ].includes(y),
      ke = (y) =>
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
      ce = (y) => {
        const [W, q] = y.split(",").map(Number);
        return { row: W || 0, col: q || 0 };
      },
      Q = (y, W) => `${y},${W}`,
      he = (y, W) => {
        const q = (J, O = null) => {
            if (J.GUID === y) return { container: J, parent: O };
            if (J.contents)
              for (const re of J.contents) {
                const ne = q(re, J);
                if (ne) return ne;
              }
            return null;
          },
          z = nt();
        for (const J of z) {
          const O = q(J);
          if (O) return O;
        }
        return null;
      },
      we = (y, W) => {
        if (!y.contents) return;
        const { sortedContents: q, maxRow: z, maxCol: J } = _e(y.contents),
          O = W;
        if (!O) return;
        const re = ce(O.gird_position);
        console.log(z), console.log(J), console.log(O), console.log(re);
        for (let ne = 0; ne < q.length; ne++) {
          const Y = q[ne],
            F = ce(Y.gird_position);
          if (F.row === re.row && F.col > re.col)
            (Y.gird_position = Q(F.row, F.col - 1)),
              (j.current[Y.GUID] = {
                GUID: Y.GUID,
                Master_GUID: y.GUID,
                position: `${F.row},${F.col - 1}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: Y.type,
                containerData: Y,
              });
          else if (F.row > re.row) {
            const me = F.col === 0 ? J : F.col - 1,
              pe = F.col === 0 ? F.row - 1 : F.row;
            (Y.gird_position = Q(pe, me)),
              (j.current[Y.GUID] = {
                GUID: Y.GUID,
                Master_GUID: y.GUID,
                position: `${pe},${me}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: Y.type,
                containerData: Y,
              });
          }
        }
        return console.log("移除更新其餘容器", q), q;
      },
      R = (y, W, q, z, J) => {
        y.contents || (y.contents = []);
        let O = Math.max(
            1,
            ...y.contents.map((Y) => ce(Y.gird_position || "0,0").col + 1)
          ),
          re = Math.max(
            1,
            ...y.contents.map((Y) => ce(Y.gird_position || "0,0").row + 1)
          );
        console.log("--------", y),
          console.log("目標容器最大列", O),
          console.log("目標容器最大行", re),
          (y.type == "sub_container" ||
            y.type == "parent_container" ||
            y.type == "調劑台" ||
            y.type == "藥庫") &&
            (O = +y.oriMaxCol + 1),
          J != null &&
            J === "right" &&
            W.type !== "med_box" &&
            z == O &&
            ((q = q + 1),
            y.contents.filter((F) => `${q},0` == F.gird_position).length > 0
              ? (z = O - 1)
              : (z = 0)),
          console.log(q),
          console.log(z);
        const ne = y.contents.filter((Y) => {
          const F = ce(Y.gird_position || "0,0");
          return F.row > q || (F.row === q && F.col >= z);
        });
        ne.sort((Y, F) => {
          const me = ce(Y.gird_position || "0,0"),
            pe = ce(F.gird_position || "0,0");
          return me.row !== pe.row ? pe.row - me.row : pe.col - me.col;
        }),
          console.log("會做變更的目標容器", ne),
          ne.forEach((Y) => {
            const F = ce(Y.gird_position || "0,0");
            let me = F.row,
              pe = F.col;
            Y.type === "med_box" || pe < O - 1
              ? (pe += 1)
              : ((me += 1), (pe = 0)),
              (Y.gird_position = `${me},${pe}`),
              (j.current[Y.GUID] = {
                GUID: Y.GUID,
                Master_GUID: y.GUID,
                position: `${me},${pe}`,
                serverName: y.serverName,
                serverType: y.serverType,
                type: Y.type,
                containerData: Y,
              }),
              console.log(
                `Shifted container ${Y.GUID} from ${F.row},${F.col} to ${me},${pe}`
              );
          }),
          y.contents.length == 0 && ((q = 0), (z = 0)),
          (W.gird_position = `${q},${z}`),
          (W.Master_GUID = y.GUID),
          console.log(`Inserted container ${W.GUID} at position ${q},${z}`),
          y.contents.push(W),
          (j.current[W.GUID] = {
            GUID: W.GUID,
            Master_GUID: y.GUID,
            position: `${q},${z}`,
            serverName: y.serverName,
            serverType: y.serverType,
            type: W.type,
            containerData: W,
          }),
          W.type === "dispensing_shelves" &&
            W.contents &&
            W.contents.forEach((Y) => {
              Y.type === "med_box" &&
                (j.current[Y.GUID] = {
                  GUID: Y.GUID,
                  Master_GUID: Y.Master_GUID,
                  position: Y.gird_position,
                  serverName: y.serverName,
                  serverType: y.serverType,
                  type: Y.type,
                  containerData: Y,
                });
            });
      },
      fe = (y, W, q) => {
        const z = y.getBoundingClientRect(),
          J = z.left + z.width / 2,
          O = z.top + z.height / 2,
          re = W - J,
          ne = q - O;
        return Math.abs(re) > Math.abs(ne)
          ? re > 0
            ? "right"
            : "left"
          : ne > 0
          ? "bottom"
          : "top";
      },
      G = (y, W, q, z) => {
        if (!k) return;
        z.preventDefault(), z.stopPropagation();
        const J = H(),
          O =
            "touches" in z
              ? z.touches[0].clientX
              : ("pointerId" in z, z.clientX),
          re =
            "touches" in z
              ? z.touches[0].clientY
              : ("pointerId" in z, z.clientY),
          ne = q.getBoundingClientRect(),
          Y = { x: O - ne.left, y: re - ne.top },
          F = q.cloneNode(!0);
        (F.style.position = "fixed"),
          (F.style.left = `${O - Y.x}px`),
          (F.style.top = `${re - Y.y}px`),
          (F.style.width = `${ne.width}px`),
          (F.style.height = `${ne.height}px`),
          (F.style.zIndex = "9999"),
          (F.style.opacity = "0.8"),
          (F.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (F.style.pointerEvents = "none"),
          document.body.appendChild(F),
          console.log("開始拖曳 stockItem:", y),
          console.log("來源 shelf:", W),
          se({
            isDragging: !0,
            draggedContainer: null,
            draggedElement: q,
            floatingElement: F,
            originalParent: null,
            originalPosition: "",
            originalIndex: -1,
            mouseOffset: Y,
            isMobileDrag: J,
            originalData: null,
            draggedStockItem: y,
            draggedStockShelf: W,
          });
      },
      _ = (y, W, q) => {
        if (!k || !ue(y.type)) return;
        (j.current = {}), q.preventDefault(), q.stopPropagation();
        const z = H(),
          J =
            "touches" in q
              ? q.touches[0].clientX
              : ("pointerId" in q, q.clientX),
          O =
            "touches" in q
              ? q.touches[0].clientY
              : ("pointerId" in q, q.clientY),
          re = W.getBoundingClientRect(),
          ne = { x: J - re.left, y: O - re.top },
          Y = he(y.GUID);
        if (!Y) return;
        console.log("拖曳目標", y), console.log("拖曳目標", Y);
        const F = W.cloneNode(!0);
        if (
          ((F.style.position = "fixed"),
          (F.style.left = `${J - ne.x}px`),
          (F.style.top = `${O - ne.y}px`),
          (F.style.width = `${re.width}px`),
          (F.style.height = `${re.height}px`),
          (F.style.zIndex = "9999"),
          (F.style.opacity = "0.8"),
          (F.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (F.style.pointerEvents = "none"),
          document.body.appendChild(F),
          z)
        ) {
          const me = Y.parent.contents.findIndex((De) => De.GUID === y.GUID);
          Y.parent.contents.splice(me, 1), console.log(me), Y.parent;
          const pe = we(Y.parent, y);
          (Y.parent.contents = pe),
            console.log(Y.parent),
            se({
              isDragging: !0,
              draggedContainer: y,
              draggedElement: W,
              floatingElement: F,
              originalParent: Y.parent,
              originalPosition: y.gird_position,
              originalIndex: me,
              mouseOffset: ne,
              isMobileDrag: !1,
              originalData: null,
            });
        } else {
          const me = Y.parent.contents.findIndex((je) => je.GUID === y.GUID);
          Y.parent.contents.splice(me, 1), console.log(me);
          const pe = Y.parent,
            De = we(Y.parent, y);
          (Y.parent.contents = De),
            console.log(Y.parent),
            se({
              isDragging: !0,
              draggedContainer: y,
              draggedElement: W,
              floatingElement: F,
              originalParent: pe,
              originalPosition: y.gird_position,
              originalIndex: me,
              mouseOffset: ne,
              isMobileDrag: !1,
              originalData: null,
            });
        }
      },
      te = (y) => {
        if (!T.isDragging || !T.floatingElement) return;
        const W = "touches" in y ? y.touches[0].clientX : y.clientX,
          q = "touches" in y ? y.touches[0].clientY : y.clientY;
        if (
          ((T.floatingElement.style.left = `${W - T.mouseOffset.x}px`),
          (T.floatingElement.style.top = `${q - T.mouseOffset.y}px`),
          T.draggedStockItem)
        ) {
          const O = document.elementFromPoint(W, q),
            re = O == null ? void 0 : O.closest("[data-stock-guid]");
          if (re) {
            const Y = re.getAttribute("data-stock-guid"),
              F = (pe) => {
                for (const De of pe) {
                  if (De.type === "store_shelves" && De.medMapStock) {
                    const je = De.medMapStock.find((Re) => Re.GUID === Y);
                    if (je) return { stockItem: je, shelf: De };
                  }
                  if (De.contents) {
                    const je = F(De.contents);
                    if (je) return je;
                  }
                }
                return null;
              },
              me = F(o);
            if (me && me.stockItem.GUID !== T.draggedStockItem.GUID) {
              const pe = re.getBoundingClientRect(),
                De = pe.left + pe.width / 2,
                je = W < De ? "left" : "right";
              N({
                container: me.shelf,
                direction: null,
                element: re,
                stockItem: me.stockItem,
                stockItemDirection: je,
              });
              return;
            }
          }
          const ne = O == null ? void 0 : O.closest("[data-container-guid]");
          if (ne) {
            const Y = ne.getAttribute("data-container-guid"),
              F = he(Y);
            if (F && F.container.type === "store_shelves") {
              N({ container: F.container, direction: null, element: ne });
              return;
            }
          }
          N(null);
          return;
        }
        const z = document.elementFromPoint(W, q),
          J = z == null ? void 0 : z.closest("[data-container-guid]");
        if (J) {
          const O = J.getAttribute("data-container-guid"),
            re = he(O);
          if (re && ke(T.draggedContainer.type).includes(re.container.type)) {
            const Y = fe(J, W, q);
            if (
              T.draggedContainer.type === "med_box" &&
              !["left", "right"].includes(Y)
            ) {
              N(null);
              return;
            }
            N({ container: re.container, direction: Y, element: J });
            return;
          }
        }
        N(null);
      },
      ie = async (y) => {
        if (!T.isDragging) return;
        if (
          (T.floatingElement && document.body.removeChild(T.floatingElement),
          T.draggedStockItem && T.draggedStockShelf)
        ) {
          if (
            (console.log("StockItem 拖曳結束"),
            console.log("Drop Target:", v),
            v)
          ) {
            const J = [];
            if (v.stockItem && v.stockItemDirection) {
              console.log(
                `拖曳到 stockItem ${v.stockItem.GUID} 的 ${v.stockItemDirection} 邊`
              );
              const O = v.container,
                re = T.draggedStockShelf,
                ne = T.draggedStockItem,
                Y = Number(v.stockItem.location),
                F = Number(ne.location);
              if (O.GUID === re.GUID) {
                console.log("同一層架內移動");
                const pe = re.medMapStock.findIndex(
                  (Re) => Re.GUID === ne.GUID
                );
                pe !== -1 && re.medMapStock.splice(pe, 1),
                  re.medMapStock.forEach((Re) => {
                    const gt = Number(Re.location);
                    gt > F &&
                      ((Re.location = String(gt - 1)), J.push({ ...Re }));
                  });
                let De;
                const je = Y > F ? Y - 1 : Y;
                v.stockItemDirection === "left" ? (De = je) : (De = je + 1),
                  re.medMapStock.forEach((Re) => {
                    const gt = Number(Re.location);
                    gt >= De &&
                      ((Re.location = String(gt + 1)), J.push({ ...Re }));
                  }),
                  (ne.location = String(De)),
                  re.medMapStock.push(ne),
                  re.medMapStock.sort(
                    (Re, gt) => Number(Re.location) - Number(gt.location)
                  ),
                  J.push({ ...ne });
              } else {
                console.log("不同層架間移動");
                const pe = re.medMapStock.findIndex(
                  (je) => je.GUID === ne.GUID
                );
                pe !== -1 && re.medMapStock.splice(pe, 1),
                  re.medMapStock.forEach((je) => {
                    const Re = Number(je.location);
                    Re > F &&
                      ((je.location = String(Re - 1)), J.push({ ...je }));
                  });
                let De;
                v.stockItemDirection === "left" ? (De = Y) : (De = Y + 1),
                  O.medMapStock.forEach((je) => {
                    const Re = Number(je.location);
                    Re >= De &&
                      ((je.location = String(Re + 1)), J.push({ ...je }));
                  }),
                  (ne.location = String(De)),
                  (ne.shelf_guid = O.GUID),
                  O.medMapStock.push(ne),
                  O.medMapStock.sort(
                    (je, Re) => Number(je.location) - Number(Re.location)
                  ),
                  J.push({ ...ne });
              }
            } else if (v.container.type === "store_shelves") {
              console.log("拖曳到 store_shelves 容器");
              const O = v.container,
                re = T.draggedStockShelf,
                ne = T.draggedStockItem,
                Y = Number(ne.location),
                F = re.medMapStock.findIndex((me) => me.GUID === ne.GUID);
              F !== -1 &&
                (re.medMapStock.splice(F, 1),
                re.medMapStock.forEach((me) => {
                  const pe = Number(me.location);
                  pe > Y && ((me.location = String(pe - 1)), J.push({ ...me }));
                })),
                (ne.location = "0"),
                (ne.shelf_guid = O.GUID),
                O.medMapStock || (O.medMapStock = []),
                O.medMapStock.forEach((me) => {
                  const pe = Number(me.location);
                  (me.location = String(pe + 1)), J.push({ ...me });
                }),
                O.medMapStock.push(ne),
                O.medMapStock.sort(
                  (me, pe) => Number(me.location) - Number(pe.location)
                ),
                J.push({ ...ne });
            }
            if (J.length > 0) {
              console.log("準備更新的 stockItems:", J);
              try {
                const O = await Se.updateStock(J);
                O.Code === 200
                  ? p("藥品位置更新成功", "success")
                  : p(O.Result || "更新失敗", "error");
              } catch (O) {
                console.error("更新 stockItem 失敗:", O),
                  p("更新失敗，請稍後再試", "error");
              }
            }
          }
          se({
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
        let W = null,
          q = null,
          z = null;
        if (
          (console.log("Drop Target:", v),
          console.log("Is Mobile Drag:", T.isMobileDrag),
          T.isMobileDrag)
        )
          if (v) {
            (W = v.direction), (z = v.container);
            const J = he(T.draggedContainer.GUID);
            if (J) {
              const me = J.parent.contents.findIndex(
                (De) => De.GUID === T.draggedContainer.GUID
              );
              J.parent.contents.splice(me, 1);
              const pe = we(J.parent, T.draggedContainer);
              J.parent.contents = pe;
            }
            const O = ce(v.container.gird_position || "0,0");
            let re = O.row,
              ne = O.col;
            switch (v.direction) {
              case "top":
                re = Math.max(0, O.row);
                break;
              case "bottom":
                re = O.row + 1;
                break;
              case "left":
                ne = Math.max(0, O.col);
                break;
              case "right":
                ne = O.col + 1;
                break;
            }
            const Y = he(v.container.Master_GUID || v.container.GUID);
            let F = (Y == null ? void 0 : Y.container) || v.container;
            if (
              (T.draggedContainer.class != v.class && (F = v),
              T.draggedContainer.type === "med_box" &&
                v.container.type !== "med_box")
            )
              if (
                (console.log("藥盒移動目標到層架上"),
                (F = v.container),
                F.contents.length > 0)
              ) {
                let me = 0,
                  pe = 0;
                F.contents.forEach((De) => {
                  const je = ce(De.gird_position || "0,0").row,
                    Re = ce(De.gird_position || "0,0").col;
                  me > je && (me = je), pe > Re && (pe = Re);
                });
                for (let De = 0; De <= pe; De++)
                  for (let je = 0; je <= me; je++) {
                    const Re = `${De},${je}`;
                    F.contents.filter((Be) => Be.grid_position === Re)
                      .length === 0 && ((re = De), (ne = je));
                  }
              } else (re = 0), (ne = 0);
            (q = F), R(F, T.draggedContainer, re, ne, v.direction);
          } else (W = null), (z = null), (q = T.originalParent);
        else if (v) {
          (W = v.direction), (z = v.container);
          const J = ce(v.container.gird_position || "0,0");
          let O = J.row,
            re = J.col;
          switch (v.direction) {
            case "top":
              O = Math.max(0, J.row);
              break;
            case "bottom":
              O = J.row + 1;
              break;
            case "left":
              re = Math.max(0, J.col);
              break;
            case "right":
              re = J.col + 1;
              break;
          }
          const ne = he(v.container.Master_GUID || v.container.GUID);
          console.log("------目標容器", v),
            console.log("------拖曳容器", T.draggedContainer);
          let Y = (ne == null ? void 0 : ne.container) || v.container;
          if (
            (console.log(T.draggedContainer.class),
            console.log(v.container.class),
            console.log(T.draggedContainer.class != v.container.class),
            T.draggedContainer.class != v.container.class &&
              ((Y = v.container),
              console.log("------這邊顯示放到上層容器現象"),
              console.log("------目標容器", v),
              console.log("------拖曳容器", T.draggedContainer),
              console.log("------目標父容器", Y)),
            T.draggedContainer.type === "med_box" &&
              v.container.type !== "med_box")
          )
            if (
              (console.log("藥盒移動目標到層架上"),
              (Y = v.container),
              Y.contents.length > 0)
            ) {
              let F = 0,
                me = 0;
              Y.contents.forEach((pe) => {
                const De = ce(pe.gird_position || "0,0").row,
                  je = ce(pe.gird_position || "0,0").col;
                F > De && (F = De), me > je && (me = je);
              });
              for (let pe = 0; pe <= me; pe++)
                for (let De = 0; De <= F; De++) {
                  const je = `${pe},${De}`;
                  Y.contents.filter((gt) => gt.grid_position === je).length ===
                    0 && ((O = pe), (re = De));
                }
            } else (O = 0), (re = 0);
          (q = Y), R(Y, T.draggedContainer, O, re, v.direction);
        } else {
          (W = null),
            (z = null),
            (q = T.originalParent),
            (T.draggedContainer.gird_position = T.originalPosition);
          const J = ce(T.originalPosition || "0,0").row,
            O = ce(T.originalPosition || "0,0").col;
          R(T.originalParent, T.draggedContainer, J, O, null);
        }
        se({
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
          console.log("Drop Direction:", W),
          console.log("Parent Object:", q),
          console.log("Target Object:", z),
          console.log("API更新資料：", j),
          await xh(j);
      };
    h.useEffect(() => {
      if (T.isDragging)
        if (H()) {
          const W = (J) => {
              J.preventDefault(), te(J);
            },
            q = (J) => ie(),
            z = (J) => ie();
          return (
            document.addEventListener("pointermove", W, { passive: !1 }),
            document.addEventListener("pointerup", q),
            document.addEventListener("pointercancel", z),
            () => {
              document.removeEventListener("pointermove", W),
                document.removeEventListener("pointerup", q),
                document.removeEventListener("pointercancel", z);
            }
          );
        } else {
          const W = (O) => te(O),
            q = (O) => ie(),
            z = (O) => {
              O.preventDefault(), te(O);
            },
            J = (O) => ie();
          return (
            document.addEventListener("mousemove", W),
            document.addEventListener("mouseup", q),
            document.addEventListener("touchmove", z, { passive: !1 }),
            document.addEventListener("touchend", J),
            () => {
              document.removeEventListener("mousemove", W),
                document.removeEventListener("mouseup", q),
                document.removeEventListener("touchmove", z),
                document.removeEventListener("touchend", J);
            }
          );
        }
    }, [T.isDragging, v]),
      h.useEffect(() => {
        const y = (q) => {
            q.code === "Space" && !q.repeat && (q.preventDefault(), L(!0));
          },
          W = (q) => {
            q.code === "Space" && (q.preventDefault(), L(!1), E(!1));
          };
        return (
          window.addEventListener("keydown", y),
          window.addEventListener("keyup", W),
          () => {
            window.removeEventListener("keydown", y),
              window.removeEventListener("keyup", W);
          }
        );
      }, []);
    const U = h.useCallback(
        (y) => {
          var q;
          if (k) return;
          if (y.ctrlKey || y.metaKey) {
            y.preventDefault(), y.stopPropagation();
            const z =
              (q = n.current) == null ? void 0 : q.getBoundingClientRect();
            if (!z) return;
            const J = y.clientX - z.left,
              O = y.clientY - z.top,
              re = y.deltaY > 0 ? 0.9 : 1.1,
              ne = Math.max(0.1, Math.min(5, f.scale * re)),
              Y = ne / f.scale,
              F = J - (J - f.x) * Y,
              me = O - (O - f.y) * Y;
            b({ x: F, y: me, scale: ne });
          }
        },
        [f, k]
      ),
      S = h.useCallback(
        (y) => {
          k ||
            !D ||
            (E(!0),
            x({ x: y.clientX, y: y.clientY }),
            B({ x: y.clientX, y: y.clientY }),
            P(!1),
            y.preventDefault());
        },
        [k, D]
      ),
      $ = h.useCallback(
        (y) => {
          if (!w || k) return;
          const W = y.clientX - d.x,
            q = y.clientY - d.y;
          if (C) {
            const z = Math.abs(y.clientX - C.x),
              J = Math.abs(y.clientY - C.y);
            (z > 5 || J > 5) && P(!0);
          }
          b((z) => ({ ...z, x: z.x + W, y: z.y + q })),
            x({ x: y.clientX, y: y.clientY });
        },
        [w, d, k, C]
      ),
      K = h.useCallback(() => {
        E(!1), B(null);
      }, []),
      [V, le] = h.useState(null),
      [ge, be] = h.useState({ x: 0, y: 0 }),
      Me = (y) => {
        if (y.length < 2) return null;
        const W = y[0],
          q = y[1];
        return Math.sqrt(
          Math.pow(q.clientX - W.clientX, 2) +
            Math.pow(q.clientY - W.clientY, 2)
        );
      },
      xe = (y) => {
        if (y.length === 1) return { x: y[0].clientX, y: y[0].clientY };
        const W = y[0],
          q = y[1];
        return {
          x: (W.clientX + q.clientX) / 2,
          y: (W.clientY + q.clientY) / 2,
        };
      },
      ve = h.useCallback(
        (y) => {
          if (!k) {
            if (y.touches.length === 2) {
              const W = Me(y.touches),
                q = xe(y.touches);
              le(W), be(q);
            } else if (y.touches.length === 1) {
              const W = y.touches[0];
              x({ x: W.clientX, y: W.clientY }), E(!0);
            }
          }
        },
        [k]
      ),
      Ne = h.useCallback(
        (y) => {
          var W;
          if (!k) {
            if ((y.preventDefault(), y.touches.length === 2 && V !== null)) {
              const q = Me(y.touches),
                z = xe(y.touches);
              if (q && V) {
                const J =
                  (W = n.current) == null ? void 0 : W.getBoundingClientRect();
                if (!J) return;
                const O = q / V,
                  re = Math.max(0.1, Math.min(5, f.scale * O)),
                  ne = z.x - J.left,
                  Y = z.y - J.top,
                  F = re / f.scale,
                  me = ne - (ne - f.x) * F,
                  pe = Y - (Y - f.y) * F;
                b({ x: me, y: pe, scale: re }), le(q), be(z);
              }
            } else if (y.touches.length === 1 && w) {
              const q = y.touches[0],
                z = q.clientX - d.x,
                J = q.clientY - d.y;
              b((O) => ({ ...O, x: O.x + z, y: O.y + J })),
                x({ x: q.clientX, y: q.clientY });
            }
          }
        },
        [f, V, w, d, k]
      ),
      Ie = h.useCallback(() => {
        le(null), E(!1);
      }, []);
    h.useEffect(() => {
      const y = n.current;
      if (y)
        return (
          y.addEventListener("wheel", U, { passive: !1 }),
          () => y.removeEventListener("wheel", U)
        );
    }, [U]);
    const nt = () => (!o || o.length === 0 ? [] : o),
      _e = (y) => {
        if (!y || y.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const W = y.map((O) => ({
            ...O,
            gridPos: ce(O.gird_position || "0,0"),
          })),
          q = Math.max(...W.map((O) => O.gridPos.row), 0),
          z = Math.max(...W.map((O) => O.gridPos.col), 0);
        return {
          sortedContents: W.sort((O, re) =>
            O.gridPos.row !== re.gridPos.row
              ? O.gridPos.row - re.gridPos.row
              : O.gridPos.col - re.gridPos.col
          ),
          maxRow: q,
          maxCol: z,
        };
      },
      Ye = nt(),
      Ge = Math.max(...Ye.map((y) => ce(y.gird_position || "0,0").row), 0),
      Lt = Math.max(...Ye.map((y) => ce(y.gird_position || "0,0").col), 0),
      ht = (y) => {
        const W = (z) => {
            if (
              z.width &&
              Array.isArray(z.width) &&
              typeof z.width_index == "number" &&
              z.width_index >= 0 &&
              z.width_index < z.width.length
            ) {
              const O = parseFloat(z.width[z.width_index]);
              if (!isNaN(O)) {
                const re = O * 20;
                return Math.max(200, re);
              }
            }
            return 200;
          },
          q = (z) => {
            switch (z) {
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
              W(y),
              r.jsxs(
                "div",
                {
                  "data-container-guid": y.GUID,
                  className: `${
                    y.type !== "sub_container"
                      ? "border-2 rounded-lg shadow-sm"
                      : ""
                  } ${q(
                    y.type || 0
                  )} min-h-[80px] flex flex-col flex-shrink-0 h-full overflow-hidden`,
                  children: [
                    r.jsx("div", {
                      onMouseDown:
                        k && ue(y.type) && !H()
                          ? (z) =>
                              _(
                                y,
                                z.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                z
                              )
                          : void 0,
                      onTouchStart:
                        k && ue(y.type) && !H()
                          ? (z) =>
                              _(
                                y,
                                z.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                z
                              )
                          : void 0,
                      onPointerDown:
                        k && ue(y.type) && H()
                          ? (z) =>
                              _(
                                y,
                                z.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                z
                              )
                          : void 0,
                      className: k && ue(y.type) ? "cursor-move" : "",
                      children: r.jsx(Fs, { content: y, isAdminMode: m }),
                    }),
                    r.jsx("div", { className: "flex-1 p-1", children: qt(y) }),
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
                className: `${q(
                  y.type || 0
                )} border-2 overflow-hidden rounded-lg shadow-sm min-h-[80px] flex flex-col h-full`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      k && ue(y.type) && !H()
                        ? (z) =>
                            _(
                              y,
                              z.currentTarget.closest("[data-container-guid]"),
                              z
                            )
                        : void 0,
                    onTouchStart:
                      k && ue(y.type) && !H()
                        ? (z) =>
                            _(
                              y,
                              z.currentTarget.closest("[data-container-guid]"),
                              z
                            )
                        : void 0,
                    onPointerDown:
                      k && ue(y.type) && H()
                        ? (z) =>
                            _(
                              y,
                              z.currentTarget.closest("[data-container-guid]"),
                              z
                            )
                        : void 0,
                    className: k && ue(y.type) ? "cursor-move" : "",
                    children: r.jsx(Fs, { content: y, isAdminMode: m }),
                  }),
                  r.jsx("div", { className: "flex-1  p-1", children: qt(y) }),
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
                } ${q(
                  y.type || 0
                )} min-h-[80px] flex flex-col h-full overflow-hidden`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      k && ue(y.type) && !H()
                        ? (z) =>
                            _(
                              y,
                              z.currentTarget.closest("[data-container-guid]"),
                              z
                            )
                        : void 0,
                    onTouchStart:
                      k && ue(y.type) && !H()
                        ? (z) =>
                            _(
                              y,
                              z.currentTarget.closest("[data-container-guid]"),
                              z
                            )
                        : void 0,
                    onPointerDown:
                      k && ue(y.type) && H()
                        ? (z) =>
                            _(
                              y,
                              z.currentTarget.closest("[data-container-guid]"),
                              z
                            )
                        : void 0,
                    className: k && ue(y.type) ? "cursor-move" : "",
                    children: r.jsx(Fs, { content: y, isAdminMode: m }),
                  }),
                  r.jsx("div", {
                    className: "flex-1 p-1 flex items-center",
                    children: qt(y),
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
                } ${q(
                  y.type || 0
                )} min-h-[80px] flex flex-col h-full overflow-hidden ${
                  y.type == "none" ? "opacity-0" : ""
                }`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      k && ue(y.type) && !H()
                        ? (z) =>
                            _(
                              y,
                              z.currentTarget.closest("[data-container-guid]"),
                              z
                            )
                        : void 0,
                    onTouchStart:
                      k && ue(y.type) && !H()
                        ? (z) =>
                            _(
                              y,
                              z.currentTarget.closest("[data-container-guid]"),
                              z
                            )
                        : void 0,
                    onPointerDown:
                      k && ue(y.type) && H()
                        ? (z) =>
                            _(
                              y,
                              z.currentTarget.closest("[data-container-guid]"),
                              z
                            )
                        : void 0,
                    className: k && ue(y.type) ? "cursor-move" : "",
                    children: r.jsx(Fs, { content: y, isAdminMode: m }),
                  }),
                  r.jsx("div", { className: "flex-1 p-1", children: qt(y) }),
                ],
              },
              y.GUID
            );
        }
      },
      qt = (y) => {
        const W = (q, z, J) => {
          const O = Array(z + 1)
              .fill(null)
              .map(() => Array(J + 1).fill(!1)),
            re = {};
          return (
            q.forEach((ne) => {
              const Y = ce(ne.gird_position || "0,0");
              (re[`${Y.row},${Y.col}`] = ne), (O[Y.row][Y.col] = !0);
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: z + 1 }, (ne, Y) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      style: { height: `${100 / (z + 1)}%`, minHeight: "80px" },
                      children: Array.from({ length: J + 1 }, (F, me) => {
                        const pe = `${Y},${me}`,
                          De = re[pe];
                        return De
                          ? r.jsxs(
                              "td",
                              {
                                className: "align-top bg-transparent",
                                style: {
                                  width: `${100 / (J + 1)}%`,
                                  height: `${100 / (z + 1)}%`,
                                  minHeight: "80px",
                                  border: "none",
                                  position: "relative",
                                },
                                children: [
                                  ht(De),
                                  (v == null ? void 0 : v.container.GUID) ===
                                    De.GUID &&
                                    r.jsx("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none",
                                      children: r.jsx("div", {
                                        className: `absolute bg-blue-400 opacity-50 ${
                                          v.direction === "top"
                                            ? "top-0 left-0 right-0 h-1"
                                            : v.direction === "bottom"
                                            ? "bottom-0 left-0 right-0 h-1"
                                            : v.direction === "left"
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
                                  width: `${100 / (J + 1)}%`,
                                  height: `${100 / (z + 1)}%`,
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
                    Y
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
                sortedContents: F,
                maxRow: me,
                maxCol: pe,
              } = _e(y.contents);
              return W(F, me, pe);
            } else
              return r.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "1px" },
                children: r.jsx("tbody", { children: r.jsx("tr", {}) }),
              });
          case "dispensing_shelves":
            if (y.contents && y.contents.length > 0) {
              const {
                sortedContents: F,
                maxRow: me,
                maxCol: pe,
              } = _e(y.contents);
              return W(F, me, pe);
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
              const F = y.medMapStock,
                me = F.length,
                pe = me > 0 ? 100 / me : 100,
                De = y.width ? y.width * 5 : 500;
              return r.jsx("div", {
                className: "flex h-full",
                style: { minWidth: `${De}px` },
                children: F.map((je, Re) => {
                  const gt = Number(je.location);
                  return r.jsx(
                    "div",
                    {
                      className: "m-1 flex-shrink-0 relative",
                      style: { width: `calc(${pe}% - 8px)` },
                      "data-stock-guid": je.GUID,
                      children: r.jsxs("div", {
                        className: `border-2 bg-yellow-50 border-yellow-400 rounded-lg p-2 h-full flex flex-col justify-center items-center cursor-pointer bg-white hover:bg-yellow-100 hover:border-yellow-500 hover:shadow-md transition-all ${
                          k ? "cursor-move" : ""
                        }`,
                        onMouseDown: (Be) => {
                          k
                            ? G(
                                je,
                                y,
                                Be.currentTarget.closest("[data-stock-guid]"),
                                Be
                              )
                            : !w &&
                              !D &&
                              (B({ x: Be.clientX, y: Be.clientY }), P(!1));
                        },
                        onMouseUp: (Be) => {
                          if (!w && !D && !X && C && !k) {
                            const tn = Math.abs(Be.clientX - C.x),
                              Rr = Math.abs(Be.clientY - C.y);
                            tn <= 5 &&
                              Rr <= 5 &&
                              (Be.stopPropagation(), i(y, je));
                          }
                          k || (B(null), P(!1));
                        },
                        onTouchStart: (Be) => {
                          if (k && H())
                            G(
                              je,
                              y,
                              Be.currentTarget.closest("[data-stock-guid]"),
                              Be
                            );
                          else if (!w && !k) {
                            const tn = Be.touches[0];
                            B({ x: tn.clientX, y: tn.clientY }), P(!1);
                          }
                        },
                        onTouchEnd: (Be) => {
                          if (!w && !X && C && !k) {
                            const tn = Be.changedTouches[0],
                              Rr = Math.abs(tn.clientX - C.x),
                              Wo = Math.abs(tn.clientY - C.y);
                            Rr <= 5 &&
                              Wo <= 5 &&
                              (Be.stopPropagation(), i(y, je));
                          }
                          k || (B(null), P(!1));
                        },
                        onPointerDown: (Be) => {
                          k &&
                            H() &&
                            G(
                              je,
                              y,
                              Be.currentTarget.closest("[data-stock-guid]"),
                              Be
                            );
                        },
                        children: [
                          r.jsx("div", {
                            className:
                              "text-base font-semibold text-gray-800 flex truncate w-full items-center flex-1",
                            children: r.jsx("div", {
                              className: "w-full text-center truncate",
                              children: je.name || je.material_no,
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
                                    children: ["數量: ", +je.qty || 0],
                                  }),
                                  r.jsxs("div", {
                                    className: "text-sm text-gray-500 mt-1",
                                    children: ["位置: ", gt],
                                  }),
                                ],
                              }),
                              r.jsx("div", {
                                className: "flex justify-end items-end mt-2",
                                children: r.jsx("button", {
                                  onClick: (Be) => Pr(je, y, Be),
                                  className:
                                    "text-red-500 hover:text-red-600 rounded-full p-2 transition-all z-10",
                                  title: "刪除",
                                  children: r.jsx(zd, { className: "w-6 h-6" }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    je.GUID || Re
                  );
                }),
              });
            } else if (y.contents && y.contents.length > 0) {
              const {
                sortedContents: F,
                maxRow: me,
                maxCol: pe,
              } = _e(y.contents);
              return W(F, me, pe);
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
                sortedContents: F,
                maxRow: me,
                maxCol: pe,
              } = _e(y.contents);
              return W(F, me, pe);
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
            const q = Math.max(
                ...y.Boxes.flat().map((F) => +F.Row + +F.Height - 1)
              ),
              z = Math.max(
                ...y.Boxes.flat().map((F) => +F.Column + +F.Width - 1)
              ),
              J = q + 1,
              O = z + 1,
              re = y.Boxes.flat(),
              ne = Array(J)
                .fill(null)
                .map(() => Array(O).fill(!1)),
              Y = {};
            return (
              re.forEach((F) => {
                F.Slave || (Y[`${F.Row},${F.Column}`] = F);
              }),
              re.forEach((F) => {
                if (!F.Slave && (F.Width > 1 || F.Height > 1))
                  for (let me = F.Row; me < F.Row + F.Height; me++)
                    for (let pe = F.Column; pe < F.Column + F.Width; pe++)
                      (me !== F.Row || pe !== F.Column) && (ne[me][pe] = !0);
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
                  children: y.contents.map((F) => ht(F)),
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
      en = (y) => {
        if (
          (ce(y.gird_position || "0,0"),
          y.type !== "調劑台" && y.type !== "藥庫")
        )
          return null;
        const W = (q) => {
          if (!q || q.length === 0)
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
          const { sortedContents: z, maxRow: J, maxCol: O } = _e(q),
            re = Array(J + 1)
              .fill(null)
              .map(() => Array(O + 1).fill(!1)),
            ne = {};
          return (
            z.forEach((Y) => {
              const F = ce(Y.gird_position || "0,0");
              (ne[`${F.row},${F.col}`] = Y), (re[F.row][F.col] = !0);
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: J + 1 }, (Y, F) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      children: Array.from({ length: O + 1 }, (me, pe) => {
                        const De = `${F},${pe}`,
                          je = ne[De];
                        return je
                          ? r.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (O + 1)}%`,
                                  height: `${100 / (J + 1)}%`,
                                  minHeight: "120px",
                                  border: "none",
                                },
                                children: ht(je),
                              },
                              pe
                            )
                          : r.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (O + 1)}%`,
                                  height: `${100 / (J + 1)}%`,
                                  minHeight: "120px",
                                  border: "1px dashed #e5e7eb",
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
                    F
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
                      onClick: (q) => {
                        q.stopPropagation(),
                          console.log("🔘 點擊新增父容器按鈕"),
                          console.log("📋 找到的部門資料:", y),
                          y
                            ? (console.log(
                                "✅ 呼叫 openAddParentContainerModal"
                              ),
                              a(y))
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
                  (v == null ? void 0 : v.container.GUID) === y.GUID
                    ? "ring-2 ring-blue-400 ring-inset"
                    : ""
                }`,
                children: W(y.contents || []),
              }),
            ],
          },
          y.GUID
        );
      },
      js = h.useCallback(
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
          const W = y[0].CODE || y[0].code;
          if ((console.log("🎯 提取的藥碼:", W), !W)) {
            console.warn("⚠️ 無法定位藥品：缺少藥碼");
            return;
          }
          console.log("🎯 開始定位藥品:", W);
          const q = (J) => {
              for (const O of J) {
                if (O.type === "grid_draw" && O.Boxes) {
                  for (const re of O.Boxes)
                    for (const ne of re)
                      if (ne.Code === W) {
                        const Y = document.querySelector(
                          `[data-container-guid="${O.GUID}"]`
                        );
                        if (Y)
                          return (
                            console.log("✅ 找到藥品容器 (grid_draw):", O),
                            { element: Y, bounds: Y.getBoundingClientRect() }
                          );
                      }
                }
                if (
                  O.type === "list_draw" &&
                  O.drugs &&
                  O.drugs.some((ne) => ne.code === W)
                ) {
                  const ne = document.querySelector(
                    `[data-container-guid="${O.GUID}"]`
                  );
                  if (ne)
                    return (
                      console.log("✅ 找到藥品容器 (list_draw):", O),
                      { element: ne, bounds: ne.getBoundingClientRect() }
                    );
                }
                if (
                  (O.type === "store_shelves" ||
                    O.type === "dispensing_shelves") &&
                  O.medMapStock &&
                  O.medMapStock.some(
                    (ne) => ne.code === W || ne.material_no === W
                  )
                ) {
                  const ne = document.querySelector(
                    `[data-container-guid="${O.GUID}"]`
                  );
                  if (ne)
                    return (
                      console.log("✅ 找到藥品容器 (store_shelves):", O),
                      { element: ne, bounds: ne.getBoundingClientRect() }
                    );
                }
                if (
                  O.type === "med_box" &&
                  O.med_info &&
                  O.med_info.length > 0 &&
                  O.med_info.some((ne) => ne.code === W)
                ) {
                  const ne = document.querySelector(
                    `[data-container-guid="${O.GUID}"]`
                  );
                  if (ne)
                    return (
                      console.log("✅ 找到藥品容器 (med_box):", O),
                      { element: ne, bounds: ne.getBoundingClientRect() }
                    );
                }
                if (O.contents && O.contents.length > 0) {
                  const re = q(O.contents);
                  if (re) return re;
                }
              }
              return null;
            },
            z = q(o);
          if (z) {
            const J = n.current.getBoundingClientRect(),
              O = z.bounds,
              re = (O.left + O.right) / 2,
              ne = (O.top + O.bottom) / 2,
              Y = (re - J.left - f.x) / f.scale,
              F = (ne - J.top - f.y) / f.scale,
              me = J.width / 2,
              pe = J.height / 2,
              De = me - Y * f.scale,
              je = pe - F * f.scale;
            b((Re) => ({ ...Re, x: De, y: je })),
              console.log("✅ 定位完成", {
                elementScreenCenter: { x: re, y: ne },
                elementCanvasPos: { x: Y, y: F },
                screenCenter: { x: me, y: pe },
                newTransform: { x: De, y: je },
              }),
              p(`已定位到藥品：${y.CHT_NAME || y.NAME || W}`, "success");
          } else
            console.warn("❌ 未找到藥品容器"),
              p("未找到該藥品的儲存位置", "error");
        },
        [o, f, p]
      );
    h.useImperativeHandle(
      t,
      () => (
        console.log("🔧 useImperativeHandle 設置 ref 方法"), { locateDrug: js }
      )
    );
    const Pr = async (y, W, q) => {
        if (
          (q.stopPropagation(),
          q.preventDefault(),
          !!window.confirm(`確定要刪除 ${y.name || y.material_no} 嗎？`))
        )
          try {
            const J = await Se.deleteStockByGUID([y.GUID]);
            if (J.Code === 200) {
              const O = W.medMapStock.findIndex((re) => re.GUID === y.GUID);
              O !== -1 &&
                (W.medMapStock.splice(O, 1),
                W.medMapStock.forEach((re, ne) => {
                  re.location = String(ne);
                })),
                p("刪除成功", "success");
            } else p(J.Result || "刪除失敗", "error");
          } catch (J) {
            console.error("刪除 stock 失敗:", J),
              p("刪除失敗，請稍後再試", "error");
          }
      },
      Vo = async (y) => {
        if (y.key === "Enter" && I.trim() && !M) {
          y.preventDefault(), Z(!0);
          try {
            console.log("🔍 搜尋條碼:", I);
            const W = await Se.searchByBarCode(I.trim());
            console.log("📋 條碼搜尋回應:", W),
              W.Code === 200
                ? (console.log("✅ 找到藥品資料:", W.Data),
                  p("找到藥品資料", "success"),
                  js(W.Data),
                  A(""))
                : W.Code === -200 && W.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  p("查無資料，請建立條碼", "error"),
                  g(I.trim()),
                  A(""))
                : (console.log("❌ 搜尋失敗:", W.Result),
                  p(W.Result || "搜尋失敗", "error"));
          } catch (W) {
            console.error("條碼搜尋錯誤:", W),
              p("搜尋失敗，請稍後再試", "error");
          } finally {
            Z(!1);
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
                onChange: (y) => A(y.target.value),
                onKeyDown: Vo,
                placeholder: "輸入條碼或掃描...",
                className:
                  "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
                disabled: M,
              }),
              r.jsx("button", {
                onClick: () => c("track_Drug_mode"),
                className: "p-2",
                title: "掃描條碼",
                disabled: M,
                children: r.jsx(_r, { className: "w-6 h-6 text-blue-600" }),
              }),
            ],
          }),
        }),
        r.jsx("div", {
          className: "absolute bottom-4 right-4 z-10 flex gap-2",
          children: r.jsx("button", {
            onClick: () => u(!k),
            className: `rounded-lg shadow-lg p-2 transition-colors ${
              k
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`,
            title: k ? "Unlock Canvas" : "Lock Canvas",
            children: k
              ? r.jsx(Bd, { className: "w-6 h-6" })
              : r.jsx(Gd, { className: "w-6 h-6" }),
          }),
        }),
        r.jsx("div", {
          ref: n,
          className: `w-full h-full relative ${
            D && !k ? "cursor-grab" : "cursor-default"
          } ${w ? "cursor-grabbing" : ""}`,
          onMouseDown: S,
          onMouseMove: $,
          onMouseUp: K,
          onMouseLeave: K,
          onTouchStart: ve,
          onTouchMove: Ne,
          onTouchEnd: Ie,
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
                    borderSpacing: `${de}px`,
                    minWidth: "fit-content",
                    minHeight: "fit-content",
                  },
                  children: r.jsx("tbody", {
                    children: Array.from({ length: Ge + 1 }, (y, W) =>
                      r.jsx(
                        "tr",
                        {
                          children: Array.from({ length: Lt + 1 }, (q, z) => {
                            const J = Ye.find((O) => {
                              const re = ce(O.gird_position || "0,0");
                              return re.row === W && re.col === z;
                            });
                            return J
                              ? r.jsx(
                                  "td",
                                  {
                                    className: "align-top",
                                    style: {
                                      minWidth: "150px",
                                      minHeight: "120px",
                                      border: "none",
                                    },
                                    children: en(J),
                                  },
                                  z
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
                                  z
                                );
                          }),
                        },
                        W
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
Fd.displayName = "DrugCanvas";
const xh = async (e) => {
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
      var g, p, m;
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
            name: ((p = i.containerData) == null ? void 0 : p.name) || "",
            ip: ((m = i.containerData) == null ? void 0 : m.ip) || "",
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
          Se.updateMedMapBox(t)
            .then((i) => ({ type: "med_box", response: i, count: t.length }))
            .catch((i) => ({ type: "med_box", error: i, count: t.length }))
        )),
      n.length > 0 &&
        (console.log("🗂️ 更新抽屜資料:", n),
        a.push(
          Se.updateMedMapDrawer(n)
            .then((i) => ({ type: "drawer", response: i, count: n.length }))
            .catch((i) => ({ type: "drawer", error: i, count: n.length }))
        )),
      s.length > 0 &&
        (console.log("🏪 更新層架資料:", s),
        a.push(
          Se.updateMedMapShelf(s)
            .then((i) => ({ type: "shelf", response: i, count: s.length }))
            .catch((i) => ({ type: "shelf", error: i, count: s.length }))
        )),
      o.length > 0 &&
        (console.log("🏢 更新父容器資料:", o),
        o.forEach((i) => {
          a.push(
            Se.updateContainerPosition(i)
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
          Se.updateSubSection(l)
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
      const p = [];
      i.forEach((m) => {
        var f, b;
        if (m.error)
          (g += m.count),
            p.push(`${m.type}: ${m.error.message || "網路錯誤"}`),
            console.error(`❌ ${m.type} API 失敗:`, m.error);
        else if (((f = m.response) == null ? void 0 : f.Code) === 200)
          (c += m.count), console.log(`✅ ${m.type} API 成功:`, m.response);
        else {
          g += m.count;
          const w =
            ((b = m.response) == null ? void 0 : b.Result) || "未知錯誤";
          p.push(`${m.type}: ${w}`),
            console.error(`❌ ${m.type} API 失敗:`, m.response);
        }
      });
    } catch (i) {
      console.error("💥 批次更新過程中發生錯誤:", i);
    } finally {
      console.log("完成更新");
    }
  },
  yh = "modulepreload",
  vh = function (e) {
    return "/" + e;
  },
  wc = {},
  wh = function (t, n, s) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const a = document.querySelector("meta[property=csp-nonce]"),
        i =
          (a == null ? void 0 : a.nonce) ||
          (a == null ? void 0 : a.getAttribute("nonce"));
      o = Promise.allSettled(
        n.map((c) => {
          if (((c = vh(c)), c in wc)) return;
          wc[c] = !0;
          const g = c.endsWith(".css"),
            p = g ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${p}`)) return;
          const m = document.createElement("link");
          if (
            ((m.rel = g ? "stylesheet" : yh),
            g || (m.as = "script"),
            (m.crossOrigin = ""),
            (m.href = c),
            i && m.setAttribute("nonce", i),
            document.head.appendChild(m),
            g)
          )
            return new Promise((f, b) => {
              m.addEventListener("load", f),
                m.addEventListener("error", () =>
                  b(new Error(`Unable to preload CSS for ${c}`))
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
  Xt = [
    { name: "2.13吋", box_type: "2.13", width: ["7.5"], unit: "cm" },
    { name: "2.9吋", type: "2.9", width: ["10", "15", "20"], unit: "cm" },
    { name: "4.2吋", type: "4.2", width: ["11", "16"], unit: "cm" },
  ],
  bh = () => {
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
      } = Qe(),
      { t: p } = mt(),
      [m, f] = h.useState(0),
      [b, w] = h.useState({}),
      [E, k] = h.useState(""),
      [u, d] = h.useState(""),
      [x, D] = h.useState("N"),
      [L, I] = h.useState([]),
      [A, M] = h.useState(!1),
      [Z, C] = h.useState(!1),
      [B, X] = h.useState(null),
      [P, T] = h.useState(null),
      [se, v] = h.useState(!1),
      [N, j] = h.useState(!1);
    h.useEffect(() => {
      if (n && e)
        if (c === "add") {
          f(0);
          const G = {};
          Xt.forEach((_, te) => {
            G[te] = 0;
          }),
            w(G),
            k(""),
            C(!1),
            H();
        } else {
          const G = Xt.findIndex(
            (_) => _.box_type === n.box_type || _.type === n.box_type
          );
          if ((console.log(n), G >= 0)) {
            f(G);
            const te = Xt[G].width.findIndex((U) => {
                var S;
                return (
                  U === ((S = n.width) == null ? void 0 : S[n.width_index || 0])
                );
              }),
              ie = {};
            Xt.forEach((U, S) => {
              S === G ? (ie[S] = te >= 0 ? te : 0) : (ie[S] = 0);
            }),
              w(ie);
          } else {
            f(0);
            const _ = {};
            Xt.forEach((te, ie) => {
              _[ie] = 0;
            }),
              w(_);
          }
          k(n.ip || ""),
            T({
              box_type: n.box_type,
              width: n.width,
              width_index: n.width_index,
              ip: n.ip || "",
              storage: n.storage ? JSON.parse(JSON.stringify(n.storage)) : null,
            });
        }
    }, [n, e, c]);
    const H = () => {
        n && n.parentShelf && X(n.parentShelf);
      },
      de = (G) => {
        if (!G || !G.contents || G.contents.length === 0) return "0,0";
        let _ = -1,
          te = 0;
        return (
          G.contents.forEach((ie) => {
            if (ie.gird_position) {
              const [U, S] = ie.gird_position.split(",").map(Number);
              S > _ && ((_ = S), (te = U));
            }
          }),
          `${te},${_ + 1}`
        );
      },
      ee = () => {
        if (!P || c !== "edit") return !1;
        const G = Xt[m],
          _ = b[m] || 0,
          te = G.box_type || G.type || G.name;
        return (
          P.box_type !== te ||
          P.width_index !== _ ||
          P.ip !== E ||
          JSON.stringify(P.storage) !==
            JSON.stringify(n == null ? void 0 : n.storage)
        );
      },
      ae = (G) => {
        f(G);
      },
      Ce = (G, _) => {
        w((te) => ({ ...te, [G]: _ }));
      },
      ue = () => {
        n && (c === "add" ? ce() : Q());
      },
      ke = () => {
        t();
      },
      ce = async () => {
        if (!n || !B) {
          a("缺少必要資料，無法新增藥盒", "error");
          return;
        }
        C(!0);
        try {
          const G = Xt[m],
            _ = b[m] || 0,
            te = G.width[_],
            ie = de(B),
            U = {
              Master_GUID: B.GUID,
              position: ie,
              width: te.toString(),
              height: "60",
              ip_box: E,
              serverName: B.serverName || "",
              serverType: B.serverType || "",
            };
          console.log("🚀 發送新增藥盒 API 請求:", U);
          const S = await Se.addMedMapBox(U);
          S.Code === 200
            ? (a("藥盒新增成功", "success"), t(), await he())
            : a(`藥盒新增失敗：${S.Result || "未知錯誤"}`, "error");
        } catch (G) {
          console.error("Add med box failed:", G),
            a("藥盒新增失敗：網路錯誤", "error");
        } finally {
          C(!1);
        }
      },
      Q = async () => {
        var G;
        if (!n || !ee()) {
          a("沒有資料變更", "error");
          return;
        }
        v(!0);
        try {
          const _ = Xt[m],
            te = b[m] || 0,
            ie = _.width[te],
            U = _.box_type || _.type || _.name,
            S = P.box_type !== U || P.width_index !== te || P.ip !== E,
            $ =
              JSON.stringify(P.storage) !==
              JSON.stringify(n == null ? void 0 : n.storage),
            K = [];
          if (S) {
            const ge = {
              GUID: n.GUID,
              Master_GUID: n.Master_GUID,
              position: n.gird_position,
              ip_light: E,
              serverName: n.serverName,
              serverType: n.serverType,
            };
            K.push(Se.updateMedMapBox([ge]));
          }
          $ &&
            K.push(
              Se.updateEpd266Storages(n.serverName || "", n.serverType || "", [
                n.storage,
              ])
            );
          const V = await Promise.all(K);
          if (V.every((ge) => ge.Code === 200))
            a("藥盒更新成功", "success"), t(), await he();
          else {
            const ge = V.filter((be) => be.Code !== 200);
            a(
              `藥盒更新失敗：${
                ((G = ge[0]) == null ? void 0 : G.Result) || "未知錯誤"
              }`,
              "error"
            );
          }
        } catch (_) {
          console.error("Update med box failed:", _),
            a("藥盒更新失敗：網路錯誤", "error");
        } finally {
          v(!1);
        }
      },
      he = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const G = await Se.getMedMapByDepartment(s);
          if (G.Code === 200 && G.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const _ = await wh(() => Promise.resolve().then(() => Hm), void 0),
              te = _.default.convertMedMapApiToFakeData(G.Data);
            if (!_.default.validateConvertedData(te)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(te), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", G),
              a("資料更新失敗：API 錯誤", "error");
        } catch (G) {
          console.error("💥 重新獲取藥品地圖資料失敗:", G),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      we = async () => {
        M(!0);
        try {
          const G = u.toLowerCase().trim();
          let _ = g;
          G &&
            (_ = _.filter((te) => {
              var ie, U, S;
              return (
                ((ie = te.CODE) == null
                  ? void 0
                  : ie.toLowerCase().includes(G)) ||
                ((U = te.NAME) == null
                  ? void 0
                  : U.toLowerCase().includes(G)) ||
                ((S = te.CHT_NAME) == null
                  ? void 0
                  : S.toLowerCase().includes(G))
              );
            })),
            x !== "N" && (_ = _.filter((te) => te.DRUGKIND === x)),
            I(_);
        } catch (G) {
          console.error("Search failed:", G), I([]);
        } finally {
          M(!1);
        }
      },
      R = (G, _) => {
        console.log("📸 掃描成功，藥品資料:", _), j(!1), fe(_);
      },
      fe = async (G) => {
        if (n)
          try {
            console.log("🚀 開始更新藥盒藥品代碼:", G.CODE);
            const _ = await Se.updateEpd266Medcode(
              n.serverName || "",
              n.serverType || "",
              G.CODE,
              n.storage || {}
            );
            _.Code === 200
              ? (console.log("✅ 藥品代碼更新成功:", _.Data),
                (n.storage = _.Data),
                (n.med_info = [
                  { name: G.NAME, cht_name: G.CHT_NAME, code: G.CODE },
                ]),
                a("藥品更新成功", "success"),
                i())
              : (console.error("❌ 藥品代碼更新失敗:", _),
                a(`藥品更新失敗：${_.Result || "未知錯誤"}`, "error"));
          } catch (_) {
            console.error("💥 藥品代碼更新發生錯誤:", _),
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
              onClick: (G) => G.stopPropagation(),
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
                          children: p(
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
                      children: r.jsx(He, { className: "w-6 h-6" }),
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
                              children: p("form.ipAddress"),
                            }),
                            r.jsx("div", {
                              className: "flex items-center",
                              children: r.jsx("input", {
                                type: "text",
                                onChange: (G) => k(G.target.value),
                                placeholder:
                                  (n == null ? void 0 : n.ip) ||
                                  (n == null ? void 0 : n.name) ||
                                  p("placeholder.ipAddress"),
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
                                children: p("form.medBoxType"),
                              }),
                              r.jsx("div", {
                                className: "flex gap-4 justify-between",
                                children: Xt.map((G, _) =>
                                  r.jsxs(
                                    "label",
                                    {
                                      className: `flex items-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                        m === _
                                          ? "border-blue-500 bg-blue-50"
                                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                      }`,
                                      children: [
                                        r.jsx("input", {
                                          type: "radio",
                                          name: "boxType",
                                          value: _,
                                          checked: m === _,
                                          onChange: () => ae(_),
                                          className:
                                            "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                        }),
                                        r.jsx("div", {
                                          children: r.jsx("div", {
                                            className:
                                              "text-sm font-medium text-gray-900",
                                            children: G.name,
                                          }),
                                        }),
                                      ],
                                    },
                                    _
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
                                children: p("form.widthSelection"),
                              }),
                              Xt.map((G, _) =>
                                r.jsx(
                                  "div",
                                  {
                                    className: `flex gap-4 ${
                                      m === _ ? "block" : "hidden"
                                    }`,
                                    children: G.width.map((te, ie) =>
                                      r.jsxs(
                                        "label",
                                        {
                                          className: `flex items-center justify-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                            m === _ && (b[_] || 0) === ie
                                              ? "border-green-500 bg-green-50"
                                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                          }`,
                                          children: [
                                            r.jsx("input", {
                                              type: "radio",
                                              name: `width-${_}`,
                                              value: ie,
                                              checked:
                                                m === _ && (b[_] || 0) === ie,
                                              onChange: () => Ce(_, ie),
                                              className:
                                                "w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500 hidden",
                                            }),
                                            r.jsx("div", {
                                              className: "text-center",
                                              children: r.jsxs("div", {
                                                className:
                                                  "text-sm font-semibold text-gray-900",
                                                children: [te, " ", G.unit],
                                              }),
                                            }),
                                          ],
                                        },
                                        `${_}-${ie}`
                                      )
                                    ),
                                  },
                                  _
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
                                  children: p("form.drugInfo"),
                                }),
                                r.jsx("div", {
                                  children:
                                    n != null &&
                                    n.med_info &&
                                    n.med_info.length > 0
                                      ? r.jsx("div", {
                                          children: n.med_info.map((G, _) =>
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
                                                          p("form.drugCode"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          G.code ||
                                                          p("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    children: [
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-sm font-medium text-gray-600",
                                                        children: [
                                                          p("form.drugName"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          G.name ||
                                                          p("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    children: [
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-sm font-medium text-gray-600",
                                                        children: [
                                                          p("form.chineseName"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          G.cht_name ||
                                                          p("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              _
                                            )
                                          ),
                                        })
                                      : r.jsx("div", {
                                          className:
                                            "bg-gray-50 border border-gray-200 rounded-lg py-8 px-4 text-center space-y-4",
                                          children: r.jsx("div", {
                                            className:
                                              "text-gray-500 text-base",
                                            children: p("status.noDrugData"),
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
                                  children: p("form.drugInfo"),
                                }),
                                r.jsx("div", {
                                  className:
                                    "bg-gray-50 border border-gray-200 rounded-lg py-2 px-4 min-h-[262px] max-h-[262px]",
                                  children: r.jsx("div", {
                                    className: "text-center py-8 space-y-4",
                                    children: r.jsx("div", {
                                      className: "text-gray-500 text-base",
                                      children: p("status.newMedBoxNoDrug"),
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
                                    children: p("form.drugSearch"),
                                  }),
                                  r.jsx("button", {
                                    onClick: () => j(!0),
                                    className:
                                      "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                    title: "掃描條碼",
                                    children: r.jsx(_r, {
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
                                    onChange: (G) => d(G.target.value),
                                    placeholder: p("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  r.jsxs("select", {
                                    value: x,
                                    onChange: (G) => D(G.target.value),
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
                                    onClick: we,
                                    disabled: A,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      A &&
                                        r.jsx(jt, {
                                          className: "w-4 h-4 animate-spin",
                                        }),
                                      p("button.search"),
                                    ],
                                  }),
                                ],
                              }),
                              r.jsx("div", {
                                className:
                                  "bg-white border rounded p-3 min-h-[220px] max-h-[220px] overflow-y-auto",
                                children: A
                                  ? r.jsxs("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: [
                                        r.jsx(jt, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        p("status.searching"),
                                      ],
                                    })
                                  : L.length > 0
                                  ? r.jsx("div", {
                                      className: "space-y-1",
                                      children: L.map((G, _) =>
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
                                                    children: G.NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: G.CHT_NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: G.CODE,
                                                  }),
                                                ],
                                              }),
                                              r.jsx("button", {
                                                onClick: () => fe(G),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: p("button.add"),
                                                children: r.jsx(vt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          G.GUID || _
                                        )
                                      ),
                                    })
                                  : r.jsx("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: p(
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
                      onClick: ke,
                      disabled: Z || se,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: p("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: ue,
                      disabled: Z || se,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        (Z || se) &&
                          r.jsx(jt, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", {
                          children: Z
                            ? "新增中..."
                            : se
                            ? "更新中..."
                            : p(c === "add" ? "button.add" : "button.save"),
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
              onScanSuccess: R,
              mode: "set_med_box_med_mode",
            }),
          ],
        });
  },
  Nh = () => {
    const {
        listDrawModalOpen: e,
        closeListDrawModal: t,
        selectedListDraw: n,
        triggerRefresh: s,
      } = Qe(),
      { t: o } = mt(),
      [l, a] = h.useState(""),
      [i, c] = h.useState([]),
      [g, p] = h.useState(""),
      [m, f] = h.useState("N"),
      [b, w] = h.useState([]),
      [E, k] = h.useState(!1);
    h.useEffect(() => {
      n && e && (a(n.name || ""), c(n.med_info || []));
    }, [n, e]);
    const u = (I) => {
        c((A) => A.filter((M) => M.code !== I));
      },
      d = async () => {
        k(!0);
        try {
          const I = await Se.searchMedicine(g, m);
          w(I);
        } catch (I) {
          console.error("Search failed:", I), w([]);
        } finally {
          k(!1);
        }
      },
      x = (I) => {
        const A = {
          id: I.GUID || `${Date.now()}_${Math.random()}`,
          name: I.NAME,
          cht_name: I.CHT_NAME,
          code: I.CODE,
        };
        c((M) => (M.some((C) => C.code === A.code) ? M : [...M, A]));
      },
      D = () => {
        n && ((n.name = l), (n.med_info = i), s(), t());
      },
      L = () => {
        t();
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: L,
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
                      onClick: L,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(He, { className: "w-6 h-6" }),
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
                                                onClick: () => u(I.code),
                                                className:
                                                  "ml-3 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0",
                                                title: o("button.remove"),
                                                children: r.jsx(He, {
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
                                    onChange: (I) => p(I.target.value),
                                    placeholder: o("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  r.jsxs("select", {
                                    value: m,
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
                                    onClick: d,
                                    disabled: E,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      E &&
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
                                children: E
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
                                  : b.length > 0
                                  ? r.jsx("div", {
                                      className: "space-y-1",
                                      children: b.map((I, A) =>
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
                                                onClick: () => x(I),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: o("button.add"),
                                                children: r.jsx(vt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          I.GUID || A
                                        )
                                      ),
                                    })
                                  : r.jsx("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: o(
                                        g || m !== "N"
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
                      onClick: L,
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
  jh = () => {
    const {
        gridDrawModalOpen: e,
        closeGridDrawModal: t,
        selectedGridDraw: n,
        triggerRefresh: s,
        apiDepartmentData: o,
        setApiDepartmentData: l,
        showNotification: a,
        medicineList: i,
      } = Qe(),
      { t: c } = mt(),
      [g, p] = h.useState(""),
      [m, f] = h.useState(null),
      [b, w] = h.useState(!1),
      [E, k] = h.useState(!1),
      [u, d] = h.useState(null),
      [x, D] = h.useState(""),
      [L, I] = h.useState("N"),
      [A, M] = h.useState([]),
      [Z, C] = h.useState(!1),
      [B, X] = h.useState(0),
      [P, T] = h.useState({ x: 0, y: 0 });
    h.useEffect(() => {
      if (n && e)
        if ((p(n.name || ""), n.drawer)) {
          if (!b) {
            console.log("🔄 備份原始 drawer 資料:", n);
            const U = JSON.parse(JSON.stringify(n.drawer));
            f(U), w(!0), console.log("✅ 備份完成，備份資料:", U);
          }
        } else console.log("⚠️ 沒有 drawer 資料可備份"), f(null), w(!1);
    }, [n, e, b]),
      h.useEffect(() => {
        e || (w(!1), f(null), d(null));
      }, [e]);
    const se = () => {
        n && te();
      },
      v = () => {
        if (
          (console.log("🔄 開始恢復原始資料..."),
          console.log("原始備份資料:", m),
          console.log("當前 selectedGridDraw:", n),
          n && m && b)
        ) {
          console.log("📦 恢復 drawer 資料...");
          const U = JSON.parse(JSON.stringify(m));
          if (((n.drawer = U), o)) {
            const S = (K) => {
                K.forEach((V) => {
                  V.GUID === n.GUID &&
                    (console.log("🎯 找到目標格線抽屜，更新資料"),
                    (V.drawer = U)),
                    V.contents && Array.isArray(V.contents) && S(V.contents),
                    V.components &&
                      Array.isArray(V.components) &&
                      S(V.components);
                });
              },
              $ = JSON.parse(JSON.stringify(o));
            S($), l($), console.log("🔄 已更新全域資料狀態");
          }
          console.log("✅ 資料已恢復:", n.drawer);
        } else
          console.log(
            "⚠️ 無法恢復資料 - selectedGridDraw、originalDrawerData 或 hasBackup 為空"
          ),
            console.log("selectedGridDraw:", !!n),
            console.log("originalDrawerData:", !!m),
            console.log("hasBackup:", b);
        d(null), w(!1), f(null), s(), t();
      },
      N = (U, S) => {
        if (!u) return !1;
        const $ = Math.min(u.startRow, u.endRow),
          K = Math.max(u.startRow, u.endRow),
          V = Math.min(u.startCol, u.endCol),
          le = Math.max(u.startCol, u.endCol);
        return U >= $ && U <= K && S >= V && S <= le;
      },
      j = (U) => {
        var Me;
        if (
          !((Me = n == null ? void 0 : n.drawer) != null && Me.Boxes) ||
          U.Slave
        )
          return { width: 1, height: 1 };
        const $ = n.drawer.Boxes.flat().filter(
          (xe) =>
            xe.Slave &&
            xe.MasterBox_Row === U.Row &&
            xe.MasterBox_Column === U.Column
        );
        if ($.length === 0) return { width: 1, height: 1 };
        const K = [U, ...$],
          V = Math.min(...K.map((xe) => xe.Row)),
          le = Math.max(...K.map((xe) => xe.Row)),
          ge = Math.min(...K.map((xe) => xe.Column));
        return {
          width: Math.max(...K.map((xe) => xe.Column)) - ge + 1,
          height: le - V + 1,
        };
      },
      H = () => {
        var ge;
        if (!u || !((ge = n == null ? void 0 : n.drawer) != null && ge.Boxes))
          return [];
        const U = n.drawer.Boxes.flat(),
          S = Math.min(u.startRow, u.endRow),
          $ = Math.max(u.startRow, u.endRow),
          K = Math.min(u.startCol, u.endCol),
          V = Math.max(u.startCol, u.endCol),
          le = [];
        return (
          U.forEach((be) => {
            if (!be.Slave) {
              const Me = j(be),
                xe = be.Row + Me.height - 1,
                ve = be.Column + Me.width - 1;
              be.Row >= S &&
                xe <= $ &&
                be.Column >= K &&
                ve <= V &&
                le.push(be);
            }
          }),
          le
        );
      },
      de = (U, S, $, K) => {
        var ve;
        if (!u || !((ve = n == null ? void 0 : n.drawer) != null && ve.Boxes))
          return !1;
        const V = n.drawer.Boxes.flat();
        let le = !0,
          ge = U,
          be = S,
          Me = $,
          xe = K;
        for (; le; )
          (le = !1),
            V.forEach((Ne) => {
              if (!Ne.Slave) {
                const Ie = j(Ne),
                  nt = Ne.Row + Ie.height - 1,
                  _e = Ne.Column + Ie.width - 1;
                !(Ne.Row > be || nt < ge || Ne.Column > xe || _e < Me) &&
                  (Ne.Row < ge && ((ge = Ne.Row), (le = !0)),
                  nt > be && ((be = nt), (le = !0)),
                  Ne.Column < Me && ((Me = Ne.Column), (le = !0)),
                  _e > xe && ((xe = _e), (le = !0)));
              }
            });
        return { minRow: ge, maxRow: be, minCol: Me, maxCol: xe };
      },
      ee = () => {
        var le;
        if (!u || !((le = n == null ? void 0 : n.drawer) != null && le.Boxes))
          return !1;
        const U = Math.min(u.startRow, u.endRow),
          S = Math.max(u.startRow, u.endRow),
          $ = Math.min(u.startCol, u.endCol),
          K = Math.max(u.startCol, u.endCol),
          V = n.drawer.Boxes.flat();
        for (let ge = U; ge <= S; ge++)
          for (let be = $; be <= K; be++) {
            let Me = !1;
            for (const xe of V)
              if (!xe.Slave) {
                const ve = j(xe),
                  Ne = xe.Row + ve.height - 1,
                  Ie = xe.Column + ve.width - 1;
                if (ge >= xe.Row && ge <= Ne && be >= xe.Column && be <= Ie) {
                  Me = !0;
                  break;
                }
              }
            if (!Me) return !1;
          }
        return !0;
      },
      ae = () => {
        var ve, Ne;
        const U = H();
        if (!u) return { canMerge: !1, canUnmerge: !1 };
        if (U.length === 0) return { canMerge: !1, canUnmerge: !1 };
        const S =
            ((Ne =
              (ve = n == null ? void 0 : n.drawer) == null
                ? void 0
                : ve.Boxes) == null
              ? void 0
              : Ne.flat()) || [],
          $ = U.some(
            (Ie) =>
              S.filter(
                (_e) =>
                  _e.Slave &&
                  _e.MasterBox_Row === Ie.Row &&
                  _e.MasterBox_Column === Ie.Column
              ).length > 0
          ),
          K = Math.min(u.startRow, u.endRow),
          V = Math.max(u.startRow, u.endRow),
          le = Math.min(u.startCol, u.endCol),
          ge = Math.max(u.startCol, u.endCol),
          be = S.some(
            (Ie) =>
              Ie.Slave &&
              Ie.Row >= K &&
              Ie.Row <= V &&
              Ie.Column >= le &&
              Ie.Column <= ge
          );
        return { canMerge: U.length > 1 && ee(), canUnmerge: $ || be };
      },
      { canMerge: Ce, canUnmerge: ue } = ae(),
      ke = async () => {
        C(!0);
        try {
          const U = x.toLowerCase().trim();
          let S = i;
          U &&
            (S = S.filter(($) => {
              var K, V, le;
              return (
                ((K = $.CODE) == null ? void 0 : K.toLowerCase().includes(U)) ||
                ((V = $.NAME) == null ? void 0 : V.toLowerCase().includes(U)) ||
                ((le = $.CHT_NAME) == null
                  ? void 0
                  : le.toLowerCase().includes(U))
              );
            })),
            L !== "N" && (S = S.filter(($) => $.DRUGKIND === L)),
            M(S);
        } catch (U) {
          console.error("Search failed:", U), M([]);
        } finally {
          C(!1);
        }
      },
      ce = async (U) => {
        var $;
        if (!u || !(($ = n == null ? void 0 : n.drawer) != null && $.Boxes))
          return;
        const S = H();
        if (S.length !== 0)
          try {
            const K = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [`guid=${S[0].GUID}`, `code=${U.CODE}`],
              Data: n.drawer,
            };
            console.log("🚀 發送更新藥品 API 請求:", K);
            const V = await Se.request("/api/device/update_drawer_medcode", {
              method: "POST",
              body: JSON.stringify(K),
            });
            if (
              (console.log("📡 更新藥品 API 回應:", V),
              V.Code === 200 && V.Data)
            ) {
              if (
                ((n.drawer = V.Data),
                V.Data.Boxes && (n.Boxes = V.Data.Boxes),
                console.log("✅ 藥品資料更新成功"),
                o)
              ) {
                const le = (be) => {
                    be.forEach((Me) => {
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
                  ge = JSON.parse(JSON.stringify(o));
                le(ge), l(ge);
              }
              d(null), s();
            } else
              console.error("❌ 藥品更新失敗:", V),
                a(`藥品更新失敗：${V.Result || "未知錯誤"}`, "error");
          } catch (K) {
            console.error("💥 藥品更新 API 調用失敗:", K),
              a("藥品更新失敗：網路錯誤", "error");
          }
      },
      Q = (U, S, $) => {
        $.preventDefault(),
          $.stopPropagation(),
          "touches" in $ &&
            (X(Date.now()),
            T({ x: $.touches[0].clientX, y: $.touches[0].clientY })),
          k(!0),
          d({ startRow: U, startCol: S, endRow: U, endCol: S });
      },
      he = (U, S) => {
        if (!E || !u) return;
        const $ = Math.min(u.startRow, U),
          K = Math.max(u.startRow, U),
          V = Math.min(u.startCol, S),
          le = Math.max(u.startCol, S),
          ge = de($, K, V, le);
        ge &&
          d((be) =>
            be
              ? {
                  startRow: be.startRow,
                  startCol: be.startCol,
                  endRow: U >= be.startRow ? ge.maxRow : ge.minRow,
                  endCol: S >= be.startCol ? ge.maxCol : ge.minCol,
                }
              : null
          );
      },
      we = () => {
        if (E && (k(!1), u && n != null && n.Boxes)) {
          const U = Math.min(u.startRow, u.endRow),
            S = Math.max(u.startRow, u.endRow),
            $ = Math.min(u.startCol, u.endCol),
            K = Math.max(u.startCol, u.endCol),
            V = de(U, S, $, K);
          V &&
            d({
              startRow: V.minRow,
              startCol: V.minCol,
              endRow: V.maxRow,
              endCol: V.maxCol,
            });
        }
      },
      R = () => {
        var U;
        !Ce ||
          !((U = n == null ? void 0 : n.drawer) != null && U.Boxes) ||
          !u ||
          _();
      },
      fe = () => {
        var U;
        !ue ||
          !((U = n == null ? void 0 : n.drawer) != null && U.Boxes) ||
          !u ||
          (console.log(u), G());
      },
      G = async () => {
        var U;
        if (!(!u || !((U = n == null ? void 0 : n.drawer) != null && U.Boxes)))
          try {
            const S = Math.min(u.startRow, u.endRow),
              $ = Math.max(u.startRow, u.endRow),
              K = Math.min(u.startCol, u.endCol),
              V = Math.max(u.startCol, u.endCol),
              ge = n.drawer.Boxes.flat().filter(
                (Ne) =>
                  Ne.Row >= S && Ne.Row <= $ && Ne.Column >= K && Ne.Column <= V
              ),
              be = [],
              Me = [];
            ge.forEach((Ne) => {
              be.push(Ne.Column.toString()), Me.push(Ne.Row.toString());
            });
            const xe = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${be.join(",")}`,
                `SelectRows=${Me.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", xe);
            const ve = await Se.request("/api/device/separate_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(xe),
            });
            if ((console.log("📡 API 回應:", ve), ve.Code === 200 && ve.Data)) {
              if (
                ve.Data.Boxes &&
                Array.isArray(ve.Data.Boxes) &&
                ((n.Boxes = ve.Data.Boxes),
                (n.drawer = ve.Data),
                console.log("✅ 資料已更新"),
                o)
              ) {
                const Ne = (nt) => {
                    nt.forEach((_e) => {
                      _e.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (_e.drawer = n.drawer)),
                        _e.contents &&
                          Array.isArray(_e.contents) &&
                          Ne(_e.contents),
                        _e.components &&
                          Array.isArray(_e.components) &&
                          Ne(_e.components);
                    });
                  },
                  Ie = JSON.parse(JSON.stringify(o));
                Ne(Ie), l(Ie);
              }
            } else
              console.error("❌ API 回應錯誤:", ve),
                a(`取消合併失敗：${ve.Result || "未知錯誤"}`, "error");
          } catch (S) {
            console.error("💥 API 調用失敗:", S),
              a("取消合併失敗：網路錯誤", "error");
          } finally {
            console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              d(null),
              s();
          }
      },
      _ = async () => {
        var U;
        if (!(!u || !((U = n == null ? void 0 : n.drawer) != null && U.Boxes)))
          try {
            const S = Math.min(u.startRow, u.endRow),
              $ = Math.max(u.startRow, u.endRow),
              K = Math.min(u.startCol, u.endCol),
              V = Math.max(u.startCol, u.endCol),
              ge = n.drawer.Boxes.flat().filter(
                (Ne) =>
                  Ne.Row >= S && Ne.Row <= $ && Ne.Column >= K && Ne.Column <= V
              ),
              be = [],
              Me = [];
            ge.forEach((Ne) => {
              be.push(Ne.Column.toString()), Me.push(Ne.Row.toString());
            });
            const xe = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${be.join(",")}`,
                `SelectRows=${Me.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", xe);
            const ve = await Se.request("/api/device/combine_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(xe),
            });
            if ((console.log("📡 API 回應:", ve), ve.Code === 200 && ve.Data)) {
              if (
                ve.Data.Boxes &&
                Array.isArray(ve.Data.Boxes) &&
                ((n.Boxes = ve.Data.Boxes),
                (n.drawer = ve.Data),
                console.log("✅ 資料已更新"),
                o)
              ) {
                const Ne = (nt) => {
                    nt.forEach((_e) => {
                      _e.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (_e.drawer = n.drawer)),
                        _e.contents &&
                          Array.isArray(_e.contents) &&
                          Ne(_e.contents),
                        _e.components &&
                          Array.isArray(_e.components) &&
                          Ne(_e.components);
                    });
                  },
                  Ie = JSON.parse(JSON.stringify(o));
                Ne(Ie), l(Ie);
              }
            } else
              console.error("❌ API 回應錯誤:", ve),
                a(`取消合併失敗：${ve.Result || "未知錯誤"}`, "error");
          } catch (S) {
            console.error("💥 API 調用失敗:", S),
              a("取消合併失敗：網路錯誤", "error");
          } finally {
            console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              d(null),
              s();
          }
      },
      te = async () => {
        if (n)
          try {
            n.name = g;
            const U = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              Data: [n.drawer],
            };
            console.log("🚀 發送確認更新 API 請求:", U);
            const S = await Se.request("/api/device/update_epd583_drawers", {
              method: "POST",
              body: JSON.stringify(U),
            });
            if ((console.log("📡 確認更新 API 回應:", S), S.Code === 200)) {
              if (
                (console.log("✅ 抽屜資料更新成功"),
                a("抽屜資料更新成功", "success"),
                o)
              ) {
                const $ = (V) => {
                    V.forEach((le) => {
                      le.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新名稱"),
                        (le.name = n.name)),
                        le.contents &&
                          Array.isArray(le.contents) &&
                          $(le.contents),
                        le.components &&
                          Array.isArray(le.components) &&
                          $(le.components);
                    });
                  },
                  K = JSON.parse(JSON.stringify(o));
                $(K), l(K);
              }
              w(!1), f(null), s(), t();
            } else
              console.error("❌ 抽屜資料更新失敗:", S),
                a(`抽屜資料更新失敗：${S.Result || "未知錯誤"}`, "error");
          } catch (U) {
            console.error("💥 抽屜資料更新 API 調用失敗:", U),
              a("抽屜資料更新失敗：網路錯誤", "error");
          }
      },
      ie = () => {
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
                r.jsx(Ud, {
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
        const U = n.drawer.Boxes.flat(),
          S = (xe) => {
            if (xe.Slave) return { width: 1, height: 1 };
            const ve = U.filter(
              (Ge) =>
                Ge.Slave &&
                Ge.MasterBox_Row === xe.Row &&
                Ge.MasterBox_Column === xe.Column
            );
            if (ve.length === 0) return { width: 1, height: 1 };
            const Ne = [xe, ...ve],
              Ie = Math.min(...Ne.map((Ge) => Ge.Row)),
              nt = Math.max(...Ne.map((Ge) => Ge.Row)),
              _e = Math.min(...Ne.map((Ge) => Ge.Column));
            return {
              width: Math.max(...Ne.map((Ge) => Ge.Column)) - _e + 1,
              height: nt - Ie + 1,
            };
          },
          $ = Math.max(...U.map((xe) => xe.Row + 1 - 1)),
          K = Math.max(...U.map((xe) => xe.Column + 1 - 1)),
          V = $ + 1,
          le = K + 1,
          ge = Array(V)
            .fill(null)
            .map(() => Array(le).fill(!1)),
          be = {};
        return (
          U.forEach((xe) => {
            if (!xe.Slave) {
              const ve = S(xe);
              (be[`${xe.Row},${xe.Column}`] = xe),
                (xe.calculatedWidth = ve.width),
                (xe.calculatedHeight = ve.height);
            }
          }),
          U.forEach((xe) => {
            if (
              !xe.Slave &&
              (xe.calculatedWidth > 1 || xe.calculatedHeight > 1)
            )
              for (let ve = xe.Row; ve < xe.Row + xe.calculatedHeight; ve++)
                for (
                  let Ne = xe.Column;
                  Ne < xe.Column + xe.calculatedWidth;
                  Ne++
                )
                  (ve !== xe.Row || Ne !== xe.Column) && (ge[ve][Ne] = !0);
          }),
          r.jsx("div", {
            className: "rounded-lg",
            children: r.jsx("table", {
              className: "w-full",
              children: r.jsx("tbody", {
                children: Array.from({ length: V }, (xe, ve) =>
                  r.jsx(
                    "tr",
                    {
                      children: Array.from({ length: le }, (Ne, Ie) => {
                        if (ge[ve][Ie]) return null;
                        const nt = `${ve},${Ie}`,
                          _e = be[nt];
                        return _e
                          ? r.jsx(
                              "td",
                              {
                                className: `border border-gray-400 pt-1 pl-1 align-top cursor-pointer select-none ${
                                  N(ve, Ie)
                                    ? "bg-blue-200"
                                    : "bg-white hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / le}%`,
                                  minHeight: "40px",
                                  height: `${50 * _e.calculatedHeight}px`,
                                  maxHeight: `${50 * _e.calculatedHeight}px`,
                                },
                                colSpan: _e.calculatedWidth,
                                rowSpan: _e.calculatedHeight,
                                onMouseDown: (Ye) => Q(ve, Ie, Ye),
                                onMouseEnter: () => he(ve, Ie),
                                onMouseUp: we,
                                onTouchStart: (Ye) => Q(ve, Ie, Ye),
                                onTouchMove: (Ye) => {
                                  if ((Ye.preventDefault(), !E)) return;
                                  const Ge = Ye.touches[0],
                                    Lt = document.elementFromPoint(
                                      Ge.clientX,
                                      Ge.clientY
                                    ),
                                    ht = Lt == null ? void 0 : Lt.closest("td");
                                  if (ht) {
                                    const qt = parseInt(
                                        ht.getAttribute("data-row") || "0"
                                      ),
                                      en = parseInt(
                                        ht.getAttribute("data-col") || "0"
                                      );
                                    he(qt, en);
                                  }
                                },
                                onTouchEnd: we,
                                "data-row": ve,
                                "data-col": Ie,
                                children: r.jsx("div", {
                                  className: "h-full flex flex-col",
                                  children:
                                    _e.Code || _e.Name || _e.ChineseName
                                      ? r.jsxs(r.Fragment, {
                                          children: [
                                            _e.Code &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs font-mono text-gray-600",
                                                children: _e.Code,
                                              }),
                                            _e.Name &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs font-medium text-gray-900",
                                                children: _e.Name,
                                              }),
                                            _e.ChineseName &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs text-gray-700",
                                                children: _e.ChineseName,
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
                                  N(ve, Ie)
                                    ? "border-1 border-blue-500 bg-blue-100"
                                    : "bg-gray-50 hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / le}%`,
                                  minWidth: "80px",
                                  minHeight: "80px",
                                },
                                onMouseDown: (Ye) => Q(ve, Ie, Ye),
                                onMouseEnter: () => he(ve, Ie),
                                onMouseUp: we,
                                onTouchStart: (Ye) => Q(ve, Ie, Ye),
                                onTouchMove: (Ye) => {
                                  if ((Ye.preventDefault(), !E)) return;
                                  const Ge = Ye.touches[0],
                                    Lt = document.elementFromPoint(
                                      Ge.clientX,
                                      Ge.clientY
                                    ),
                                    ht = Lt == null ? void 0 : Lt.closest("td");
                                  if (ht) {
                                    const qt = parseInt(
                                        ht.getAttribute("data-row") || "0"
                                      ),
                                      en = parseInt(
                                        ht.getAttribute("data-col") || "0"
                                      );
                                    he(qt, en);
                                  }
                                },
                                onTouchEnd: we,
                                "data-row": ve,
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
                    ve
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
              onClick: v,
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
                          children: c("modal.gridDrawSettings"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: v,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(He, { className: "w-6 h-6" }),
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
                              onChange: (U) => p(U.target.value),
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
                          children: ie(),
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
                                onClick: R,
                                disabled: !Ce,
                                className: `px-4 py-2 rounded transition-colors ${
                                  Ce
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`,
                                children: c("button.merge"),
                              }),
                              r.jsx("button", {
                                onClick: fe,
                                disabled: !ue,
                                className: `px-4 py-2 rounded transition-colors ${
                                  ue
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
                            const U = H(),
                              S = U.find(($) => !$.Slave);
                            return S && (S.Code || S.Name || S.ChineseName)
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
                                          children: S.Code || "-",
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
                                          children: S.Name || "-",
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
                                          children: S.ChineseName || "-",
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
                                      u && U.length > 0
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
                                  onChange: (U) => D(U.target.value),
                                  placeholder: c("placeholder.drugSearch"),
                                  className:
                                    "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                }),
                                r.jsxs("select", {
                                  value: L,
                                  onChange: (U) => I(U.target.value),
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
                                  disabled: Z,
                                  className:
                                    "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                  children: [
                                    Z &&
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
                              children: Z
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
                                : A.length > 0
                                ? r.jsx("div", {
                                    className: "space-y-1",
                                    children: A.map((U, S) =>
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
                                              onClick: () => ce(U),
                                              className:
                                                "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                              title: c("button.add"),
                                              children: r.jsx(vt, {
                                                className: "w-4 h-4",
                                              }),
                                            }),
                                          ],
                                        },
                                        U.GUID || S
                                      )
                                    ),
                                  })
                                : r.jsx("div", {
                                    className:
                                      "text-gray-500 text-center flex items-center justify-center h-full",
                                    children: c(
                                      x || L !== "N"
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
                          onClick: v,
                          className:
                            "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                          children: c("button.cancel"),
                        }),
                        r.jsx("button", {
                          onClick: se,
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
                  onMouseUp: we,
                  onMouseLeave: we,
                  onTouchEnd: we,
                  onTouchCancel: we,
                }),
              ],
            }),
          ],
        });
  },
  Sh = () => {
    var X;
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
      } = Qe(),
      { t: g } = mt(),
      [p, m] = h.useState(null),
      [f, b] = h.useState(0),
      [w, E] = h.useState(0),
      [k, u] = h.useState(!1);
    h.useEffect(() => {
      e && (m(null), b(0), E(0), u(!1));
    }, [e]),
      h.useEffect(() => {
        p && (b(p.row), E(p.col));
      }, [p]);
    const d = () => {
        const P = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((T) => {
              T.type === "parent_container" &&
                T.gird_position &&
                P.add(T.gird_position);
            }),
          P
        );
      },
      x = () => {
        const P = d(),
          T = [];
        if (P.size === 0) return T.push({ row: 0, col: 0 }), T;
        const se = [];
        P.forEach((N) => {
          const [j, H] = N.split(",").map(Number);
          se.push({ row: j, col: H });
        });
        const v = new Set();
        return (
          se.forEach(({ row: N, col: j }) => {
            v.add(`${N},${j + 1}`),
              v.add(`${N + 1},${j}`),
              j > 0 && v.add(`${N},${j - 1}`),
              N > 0 && v.add(`${N - 1},${j}`);
          }),
          v.forEach((N) => {
            if (!P.has(N)) {
              const [j, H] = N.split(",").map(Number);
              j >= 0 && H >= 0 && T.push({ row: j, col: H });
            }
          }),
          P.has("0,1") ||
            T.some((j) => j.row === 0 && j.col === 1) ||
            T.push({ row: 0, col: 1 }),
          P.has("1,0") ||
            T.some((j) => j.row === 1 && j.col === 0) ||
            T.push({ row: 1, col: 0 }),
          T.sort((N, j) => (N.row === j.row ? N.col - j.col : N.row - j.row))
        );
      },
      D = (P) => {
        m(P);
      },
      L = (P) => {
        b(P), m({ row: P, col: w });
      },
      I = (P) => {
        E(P), m({ row: f, col: P });
      },
      A = p && !d().has(`${p.row},${p.col}`) && p.row >= 0 && p.col >= 0,
      M = async () => {
        if (!(!p || !n || !A)) {
          u(!0);
          try {
            const P = `${p.row},${p.col}`,
              T = await Se.addMedMapSection(n.GUID, P);
            T.Code === 200
              ? (a("新增成功", "success"), t(), c(!1), await Z())
              : a(`新增失敗：${T.Result || "未知錯誤"}`, "error");
          } catch (P) {
            console.error("Add parent container failed:", P),
              a("新增失敗：網路錯誤", "error");
          } finally {
            u(!1);
          }
        }
      },
      Z = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const P = await Se.getMedMapByDepartment(s);
          if (P.Code === 200 && P.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const T = At.convertMedMapApiToFakeData(P.Data);
            if (!At.validateConvertedData(T)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(T), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", P),
              a("資料更新失敗：API 錯誤", "error");
        } catch (P) {
          console.error("💥 重新獲取藥品地圖資料失敗:", P),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      C = () => {
        t();
      },
      B = () => {
        const P = d(),
          T = x(),
          se = [...P]
            .map((ae) => {
              const [Ce, ue] = ae.split(",").map(Number);
              return { row: Ce, col: ue };
            })
            .concat(T);
        se.length === 0 && se.push({ row: 0, col: 0 });
        const v = Math.max(...se.map((ae) => ae.row)),
          N = Math.max(...se.map((ae) => ae.col)),
          j = Math.min(...se.map((ae) => ae.row)),
          H = Math.min(...se.map((ae) => ae.col)),
          de = v - j + 1,
          ee = N - H + 1;
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
                style: { gridTemplateColumns: `repeat(${ee}, 1fr)` },
                children: Array.from({ length: de * ee }, (ae, Ce) => {
                  const ue = Math.floor(Ce / ee) + j,
                    ke = (Ce % ee) + H,
                    ce = `${ue},${ke}`,
                    Q = P.has(ce),
                    he = T.some((R) => R.row === ue && R.col === ke),
                    we =
                      (p == null ? void 0 : p.row) === ue &&
                      (p == null ? void 0 : p.col) === ke;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => he && D({ row: ue, col: ke }),
                      disabled: Q || !he,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      Q
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : we
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : he
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: Q ? "已占用" : he ? "可選擇" : "不可用",
                      children: Q ? "占用" : `${ue},${ke}`,
                    },
                    ce
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
                        r.jsx(vt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增櫃體",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: C,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(He, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      B(),
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
                                    onChange: (P) =>
                                      L(parseInt(P.target.value) || 0),
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
                                    value: w,
                                    onChange: (P) =>
                                      I(parseInt(P.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          p &&
                            r.jsx("div", {
                              className: `text-sm p-2 rounded ${
                                A
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: A
                                ? `已選擇位置：${p.row},${p.col}`
                                : `位置 ${p.row},${p.col} 已被占用或無效`,
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
                                  ((X = n == null ? void 0 : n.contents) == null
                                    ? void 0
                                    : X.filter(
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
                      onClick: C,
                      disabled: k,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: g("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: M,
                      disabled: !A || k,
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
      icon: r.jsx(oh, { className: "w-5 h-5" }),
      isShelf: !0,
    },
    {
      value: "store_shelves",
      label: "藥品層架",
      icon: r.jsx(Qm, { className: "w-5 h-5" }),
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
      icon: r.jsx(Ud, { className: "w-5 h-5" }),
      isShelf: !1,
    },
  ],
  Ch = () => {
    var de;
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
      } = Qe(),
      { t: g } = mt(),
      [p, m] = h.useState("dispensing_shelves"),
      [f, b] = h.useState("1"),
      [w, E] = h.useState("1"),
      [k, u] = h.useState(""),
      [d, x] = h.useState(null),
      [D, L] = h.useState(0),
      [I, A] = h.useState(0),
      [M, Z] = h.useState(!1);
    h.useEffect(() => {
      e &&
        (m("dispensing_shelves"),
        b("1"),
        E("1"),
        u(""),
        x(null),
        L(0),
        A(0),
        Z(!1));
    }, [e]),
      h.useEffect(() => {
        d && (L(d.row), A(d.col));
      }, [d]);
    const C = () => {
        const ee = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((ae) => {
              ae.gird_position && ee.add(ae.gird_position);
            }),
          ee
        );
      },
      B = () => {
        const ee = C(),
          ae = [];
        if (ee.size === 0) return ae.push({ row: 0, col: 0 }), ae;
        const Ce = [];
        ee.forEach((ke) => {
          const [ce, Q] = ke.split(",").map(Number);
          Ce.push({ row: ce, col: Q });
        });
        const ue = new Set();
        return (
          Ce.forEach(({ row: ke, col: ce }) => {
            ue.add(`${ke},${ce + 1}`),
              ue.add(`${ke + 1},${ce}`),
              ce > 0 && ue.add(`${ke},${ce - 1}`),
              ke > 0 && ue.add(`${ke - 1},${ce}`);
          }),
          ue.forEach((ke) => {
            if (!ee.has(ke)) {
              const [ce, Q] = ke.split(",").map(Number);
              ce >= 0 && Q >= 0 && ae.push({ row: ce, col: Q });
            }
          }),
          ee.has("0,1") ||
            ae.some((ce) => ce.row === 0 && ce.col === 1) ||
            ae.push({ row: 0, col: 1 }),
          ee.has("1,0") ||
            ae.some((ce) => ce.row === 1 && ce.col === 0) ||
            ae.push({ row: 1, col: 0 }),
          ae.sort((ke, ce) =>
            ke.row === ce.row ? ke.col - ce.col : ke.row - ce.row
          )
        );
      },
      X = (ee) => {
        x(ee);
      },
      P = (ee) => {
        L(ee), x({ row: ee, col: I });
      },
      T = (ee) => {
        A(ee), x({ row: D, col: ee });
      },
      se = d && !C().has(`${d.row},${d.col}`) && d.row >= 0 && d.col >= 0,
      v = async () => {
        if (!(!d || !n || !se)) {
          Z(!0);
          try {
            const ee = `${d.row},${d.col}`,
              ae = bc.find((ue) => ue.value === p);
            let Ce;
            ae != null && ae.isShelf
              ? (Ce = await Se.addMedMapShelf({
                  Master_GUID: n.GUID,
                  position: ee,
                  width: f,
                  height: w,
                  ip_light: k,
                  type: p,
                }))
              : (Ce = await Se.addMedMapDrawer({
                  Master_GUID: n.GUID,
                  position: ee,
                  width: f,
                  height: w,
                  ip_drawer: k,
                  type: p,
                })),
              Ce.Code === 200
                ? (a("新增成功", "success"), t(), c(!1), await N())
                : a(`新增失敗：${Ce.Result || "未知錯誤"}`, "error");
          } catch (ee) {
            console.error("Add container failed:", ee),
              a("新增失敗：網路錯誤", "error");
          } finally {
            Z(!1);
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
          const ee = await Se.getMedMapByDepartment(s);
          if (ee.Code === 200 && ee.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const ae = At.convertMedMapApiToFakeData(ee.Data);
            if (!At.validateConvertedData(ae)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(ae), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", ee),
              a("資料更新失敗：API 錯誤", "error");
        } catch (ee) {
          console.error("💥 重新獲取藥品地圖資料失敗:", ee),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      j = () => {
        t();
      },
      H = () => {
        const ee = C(),
          ae = B(),
          Ce = [...ee]
            .map((R) => {
              const [fe, G] = R.split(",").map(Number);
              return { row: fe, col: G };
            })
            .concat(ae);
        Ce.length === 0 && Ce.push({ row: 0, col: 0 });
        const ue = Math.max(...Ce.map((R) => R.row)),
          ke = Math.max(...Ce.map((R) => R.col)),
          ce = Math.min(...Ce.map((R) => R.row)),
          Q = Math.min(...Ce.map((R) => R.col)),
          he = ue - ce + 1,
          we = ke - Q + 1;
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
                style: { gridTemplateColumns: `repeat(${we}, 1fr)` },
                children: Array.from({ length: he * we }, (R, fe) => {
                  const G = Math.floor(fe / we) + ce,
                    _ = (fe % we) + Q,
                    te = `${G},${_}`,
                    ie = ee.has(te),
                    U = ae.some(($) => $.row === G && $.col === _),
                    S =
                      (d == null ? void 0 : d.row) === G &&
                      (d == null ? void 0 : d.col) === _;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => U && X({ row: G, col: _ }),
                      disabled: ie || !U,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      ie
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : S
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : U
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: ie ? "已占用" : U ? "可選擇" : "不可用",
                      children: ie ? "占用" : `${G},${_}`,
                    },
                    te
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
              onClick: (ee) => ee.stopPropagation(),
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
                      children: r.jsx(He, { className: "w-6 h-6" }),
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
                            children: bc.map((ee) =>
                              r.jsxs(
                                "label",
                                {
                                  className: `flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                    p === ee.value
                                      ? "border-blue-500 bg-blue-50"
                                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                  }`,
                                  children: [
                                    r.jsx("input", {
                                      type: "radio",
                                      name: "containerType",
                                      value: ee.value,
                                      checked: p === ee.value,
                                      onChange: (ae) => m(ae.target.value),
                                      className:
                                        "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                    }),
                                    r.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        ee.icon,
                                        r.jsx("span", {
                                          className:
                                            "font-medium text-gray-900",
                                          children: ee.label,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                ee.value
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
                                onChange: (ee) => b(ee.target.value),
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
                                value: w,
                                onChange: (ee) => E(ee.target.value),
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
                            onChange: (ee) => u(ee.target.value),
                            placeholder: "請輸入 IP 位址",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                          }),
                        ],
                      }),
                      H(),
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
                                    onChange: (ee) =>
                                      P(parseInt(ee.target.value) || 0),
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
                                    onChange: (ee) =>
                                      T(parseInt(ee.target.value) || 0),
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
                                se
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: se
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
                                  ((de = n == null ? void 0 : n.contents) ==
                                  null
                                    ? void 0
                                    : de.length) || 0,
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
                      disabled: M,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: g("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: v,
                      disabled: !se || M,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        M && r.jsx(jt, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: M ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  kh = () => {
    var X;
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
      } = Qe(),
      { t: g } = mt(),
      [p, m] = h.useState(null),
      [f, b] = h.useState(0),
      [w, E] = h.useState(0),
      [k, u] = h.useState(!1);
    h.useEffect(() => {
      e && (m(null), b(0), E(0), u(!1));
    }, [e]),
      h.useEffect(() => {
        p && (b(p.row), E(p.col));
      }, [p]);
    const d = () => {
        const P = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((T) => {
              T.type === "sub_container" &&
                T.gird_position &&
                P.add(T.gird_position);
            }),
          P
        );
      },
      x = () => {
        const P = d(),
          T = [];
        if (P.size === 0) return T.push({ row: 0, col: 0 }), T;
        const se = [];
        P.forEach((N) => {
          const [j, H] = N.split(",").map(Number);
          se.push({ row: j, col: H });
        });
        const v = new Set();
        return (
          se.forEach(({ row: N, col: j }) => {
            v.add(`${N},${j + 1}`),
              v.add(`${N + 1},${j}`),
              j > 0 && v.add(`${N},${j - 1}`),
              N > 0 && v.add(`${N - 1},${j}`);
          }),
          v.forEach((N) => {
            if (!P.has(N)) {
              const [j, H] = N.split(",").map(Number);
              j >= 0 && H >= 0 && T.push({ row: j, col: H });
            }
          }),
          P.has("0,1") ||
            T.some((j) => j.row === 0 && j.col === 1) ||
            T.push({ row: 0, col: 1 }),
          P.has("1,0") ||
            T.some((j) => j.row === 1 && j.col === 0) ||
            T.push({ row: 1, col: 0 }),
          T.sort((N, j) => (N.row === j.row ? N.col - j.col : N.row - j.row))
        );
      },
      D = (P) => {
        m(P);
      },
      L = (P) => {
        b(P), m({ row: P, col: w });
      },
      I = (P) => {
        E(P), m({ row: f, col: P });
      },
      A = p && !d().has(`${p.row},${p.col}`) && p.row >= 0 && p.col >= 0,
      M = async () => {
        if (!(!p || !n || !A)) {
          u(!0);
          try {
            const P = `${p.row},${p.col}`,
              T = await Se.addSubSection(n.GUID, P);
            T.Code === 200
              ? (a("新增成功", "success"), t(), c(!1), await Z())
              : a(`新增失敗：${T.Result || "未知錯誤"}`, "error");
          } catch (P) {
            console.error("Add sub container failed:", P),
              a("新增失敗：網路錯誤", "error");
          } finally {
            u(!1);
          }
        }
      },
      Z = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const P = await Se.getMedMapByDepartment(s);
          if (P.Code === 200 && P.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const T = At.convertMedMapApiToFakeData(P.Data);
            if (!At.validateConvertedData(T)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(T), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", P),
              a("資料更新失敗：API 錯誤", "error");
        } catch (P) {
          console.error("💥 重新獲取藥品地圖資料失敗:", P),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      C = () => {
        t();
      },
      B = () => {
        const P = d(),
          T = x(),
          se = [...P]
            .map((ae) => {
              const [Ce, ue] = ae.split(",").map(Number);
              return { row: Ce, col: ue };
            })
            .concat(T);
        se.length === 0 && se.push({ row: 0, col: 0 });
        const v = Math.max(...se.map((ae) => ae.row)),
          N = Math.max(...se.map((ae) => ae.col)),
          j = Math.min(...se.map((ae) => ae.row)),
          H = Math.min(...se.map((ae) => ae.col)),
          de = v - j + 1,
          ee = N - H + 1;
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
                style: { gridTemplateColumns: `repeat(${ee}, 1fr)` },
                children: Array.from({ length: de * ee }, (ae, Ce) => {
                  const ue = Math.floor(Ce / ee) + j,
                    ke = (Ce % ee) + H,
                    ce = `${ue},${ke}`,
                    Q = P.has(ce),
                    he = T.some((R) => R.row === ue && R.col === ke),
                    we =
                      (p == null ? void 0 : p.row) === ue &&
                      (p == null ? void 0 : p.col) === ke;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => he && D({ row: ue, col: ke }),
                      disabled: Q || !he,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      Q
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : we
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : he
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: Q ? "已占用" : he ? "可選擇" : "不可用",
                      children: Q ? "占用" : `${ue},${ke}`,
                    },
                    ce
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
                        r.jsx(vt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增虛擬容器",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: C,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(He, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      B(),
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
                                    onChange: (P) =>
                                      L(parseInt(P.target.value) || 0),
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
                                    value: w,
                                    onChange: (P) =>
                                      I(parseInt(P.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          p &&
                            r.jsx("div", {
                              className: `text-sm p-2 rounded ${
                                A
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: A
                                ? `已選擇位置：${p.row},${p.col}`
                                : `位置 ${p.row},${p.col} 已被占用或無效`,
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
                                  ((X = n == null ? void 0 : n.contents) == null
                                    ? void 0
                                    : X.filter(
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
                      onClick: C,
                      disabled: k,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: g("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: M,
                      disabled: !A || k,
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
  Dh = ({ isOpen: e, onClose: t, storeShelf: n }) => {
    const {
        showNotification: s,
        medicineList: o,
        isLoadingMedicines: l,
        addStockToShelf: a,
        selectedStockItemForEdit: i,
        storeItemModalMode: c,
        updateStockInShelf: g,
      } = Qe(),
      [p, m] = h.useState(""),
      [f, b] = h.useState(""),
      [w, E] = h.useState(""),
      [k, u] = h.useState(""),
      [d, x] = h.useState([]),
      [D, L] = h.useState([]),
      [I, A] = h.useState(""),
      [M, Z] = h.useState(""),
      [C, B] = h.useState(""),
      [X, P] = h.useState(null),
      [T, se] = h.useState([]),
      [v, N] = h.useState(""),
      [j, H] = h.useState(!1),
      de = h.useRef(null);
    h.useEffect(() => {
      if (e && c === "edit" && i) {
        m(i.code || ""), b(i.name || ""), E(""), u(i.material_no || "");
        const R = i.lot || [],
          fe = i.expiry_date || [],
          G = i.qty || [],
          _ = [];
        if (R.length > 0 || fe.length > 0 || G.length > 0) {
          const te = Math.max(R.length, fe.length, G.length),
            ie = [];
          for (let U = 0; U < te; U++) {
            const S = fe[U] || "";
            let $ = "";
            S && ($ = S.split("T")[0]),
              ($ = $.replace(/\//g, "-")),
              ie.push({
                id: `batch_${Date.now()}_${U}`,
                lot: R[U] || "",
                expiryDate: $,
                qty: String(G[U] || ""),
              }),
              $ && _.push($);
          }
          x(ie), L(_);
        } else x([]), L([]);
        A(i.location || ""), Z(i.led_index || ""), B(i.ip || "");
      } else
        e &&
          c === "add" &&
          (m(""), b(""), E(""), u(""), x([]), L([]), A(""), Z(""), B(""));
    }, [e, c, i]),
      h.useEffect(() => {
        const R = (fe) => {
          de.current && !de.current.contains(fe.target) && P(null);
        };
        return (
          document.addEventListener("mousedown", R),
          () => {
            document.removeEventListener("mousedown", R);
          }
        );
      }, []);
    const ee = (R, fe) => {
        if (!fe.trim()) {
          se([]);
          return;
        }
        const G = fe.toLowerCase(),
          _ = o.filter((te) => {
            var ie, U, S, $;
            switch (R) {
              case "code":
                return (ie = te.CODE) == null
                  ? void 0
                  : ie.toLowerCase().includes(G);
              case "name":
                return (U = te.NAME) == null
                  ? void 0
                  : U.toLowerCase().includes(G);
              case "chineseName":
                return (S = te.CHT_NAME) == null
                  ? void 0
                  : S.toLowerCase().includes(G);
              case "skdiacode":
                return ($ = te.SKDIACODE) == null
                  ? void 0
                  : $.toLowerCase().includes(G);
              default:
                return !1;
            }
          });
        se(_.slice(0, 50));
      },
      ae = (R, fe) => {
        switch ((P(R), R)) {
          case "code":
            m(fe);
            break;
          case "name":
            b(fe);
            break;
          case "chineseName":
            E(fe);
            break;
          case "skdiacode":
            u(fe);
            break;
        }
        ee(R, fe);
      },
      Ce = (R, fe) => {
        switch (fe) {
          case "code":
            m(R.CODE || ""),
              b(R.NAME || ""),
              E(R.CHT_NAME || ""),
              u(R.SKDIACODE || "");
            break;
          case "name":
            m(R.CODE || ""),
              b(R.NAME || ""),
              E(R.CHT_NAME || ""),
              u(R.SKDIACODE || "");
            break;
          case "chineseName":
            m(R.CODE || ""),
              b(R.NAME || ""),
              E(R.CHT_NAME || ""),
              u(R.SKDIACODE || "");
            break;
          case "skdiacode":
            m(R.CODE || ""),
              b(R.NAME || ""),
              E(R.CHT_NAME || ""),
              u(R.SKDIACODE || "");
            break;
        }
        N(R.GUID), P(null), se([]);
      },
      ue = () => {
        const R = {
          id: `batch_${Date.now()}`,
          lot: "",
          expiryDate: "",
          qty: "",
        };
        x([...d, R]);
      },
      ke = (R) => {
        x(d.filter((fe) => fe.id !== R));
      },
      ce = (R, fe, G) => {
        x(d.map((_) => (_.id === R ? { ..._, [fe]: G } : _)));
      },
      Q = async () => {
        var _;
        if (!p || !f) {
          s("請選擇藥品", "error");
          return;
        }
        if (!n || !n.GUID) {
          s("層架資訊錯誤", "error");
          return;
        }
        const R = [],
          fe = [],
          G = [];
        d.forEach((te) => {
          R.push(te.lot || "");
          let ie = "";
          te.expiryDate && (ie = `${te.expiryDate}`),
            fe.push(ie),
            G.push(te.qty ? `${Number(te.qty)}` : "0");
        });
        try {
          if (c === "edit" && i) {
            const te = {
                GUID: i.GUID,
                code: p,
                device_type: "EPD290",
                expiry_date: fe,
                ip: C || "",
                led_index: M || "",
                location: I || "",
                lot: R,
                material_no: k || "",
                name: f,
                qty: G,
                shelf_guid: n.GUID,
              },
              ie = await Se.updateStock([te]);
            if (ie.Code === 200) {
              g(n.GUID, i.GUID, te), console.log("檢查有無貨物批次被刪除");
              const U = D.filter((S) => !fe.includes(S));
              if ((console.log(U), U.length > 0)) {
                console.log("🗑️ 檢測到被刪除的批次效期:", U);
                let S = "";
                try {
                  i.Value &&
                    ((S = JSON.parse(i.Value).GUID || ""),
                    console.log("📦 從 Value 欄位解析出的 GUID:", S));
                } catch ($) {
                  console.error("❌ 解析 Value 欄位失敗:", $);
                }
                if (S) {
                  for (const $ of U)
                    try {
                      console.log(`🗑️ 正在刪除批次，GUID: ${S}, 效期: ${$}`);
                      const K = await Se.stockDeleteValidityPeriod(S, $);
                      K.Code === 200
                        ? console.log(`✅ 成功刪除批次效期: ${$}`)
                        : console.warn(
                            `⚠️ 刪除批次失敗 (效期: ${$}):`,
                            K.Result
                          );
                    } catch (K) {
                      console.error(`❌ 刪除批次時發生錯誤 (效期: ${$}):`, K);
                    }
                  s(`更新貨物成功，已刪除 ${U.length} 個批次`, "success");
                } else
                  console.warn("⚠️ 無法取得 Value GUID，跳過批次刪除"),
                    s("更新貨物成功（但無法刪除批次）", "success");
              } else s("更新貨物成功", "success");
              we();
            } else s(ie.Result || "更新貨物失敗", "error");
          } else {
            const te = {
                code: p,
                device_type: "EPD290",
                expiry_date: fe,
                ip: C || "",
                led_index: M || "",
                location: I || "",
                lot: R,
                material_no: k || "",
                name: f,
                qty: G,
                shelf_guid: n.GUID,
              },
              ie = await Se.addStock([te]);
            ie.Code === 200
              ? (a(n.GUID, {
                  GUID:
                    ((_ = ie.Data) == null ? void 0 : _.GUID) ||
                    `stock_${Date.now()}`,
                  ...te,
                }),
                s("新增貨物成功", "success"),
                we())
              : s(ie.Result || "新增貨物失敗", "error");
          }
        } catch (te) {
          console.error("貨物操作錯誤:", te),
            s(
              c === "edit"
                ? "更新貨物失敗，請稍後再試"
                : "新增貨物失敗，請稍後再試",
              "error"
            );
        }
      },
      he = (R, fe) => {
        console.log("📸 掃描成功，填入藥品資料:", fe),
          m(fe[0].CODE || fe[0].code || ""),
          b(fe[0].NAME || fe[0].name || ""),
          E(fe[0].CHT_NAME || fe[0].cht_name || ""),
          u(fe[0].SKDIACODE || fe[0].skdiacode || fe[0].material_no || ""),
          N(fe[0].GUID || ""),
          H(!1),
          s("已自動填入藥品資料", "success");
      },
      we = () => {
        m(""),
          b(""),
          E(""),
          u(""),
          x([]),
          L([]),
          A(""),
          Z(""),
          B(""),
          N(""),
          se([]),
          P(null),
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
                      onClick: we,
                      className:
                        "p-2 hover:bg-gray-100 rounded-full transition-colors",
                      children: r.jsx(He, { className: "w-5 h-5" }),
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
                                    onClick: () => H(!0),
                                    className:
                                      "hover:bg-gray-100 rounded-lg transition-colors p-2",
                                    title: "掃描條碼",
                                    children: r.jsx(_r, {
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
                                    ref: X === "code" ? de : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥碼",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: p,
                                        onChange: (R) =>
                                          ae("code", R.target.value),
                                        onFocus: () => P("code"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品代碼",
                                      }),
                                      X === "code" &&
                                        T.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: T.map((R) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () => Ce(R, "code"),
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
                                                        children: R.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: R.NAME,
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
                                                        children: R.CHT_NAME,
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
                                                          R.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              R.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: X === "name" ? de : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥名",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: f,
                                        onChange: (R) =>
                                          ae("name", R.target.value),
                                        onFocus: () => P("name"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品名稱",
                                      }),
                                      X === "name" &&
                                        T.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: T.map((R) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () => Ce(R, "name"),
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
                                                        children: R.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: R.NAME,
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
                                                        children: R.CHT_NAME,
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
                                                          R.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              R.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: X === "chineseName" ? de : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "中文名",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: w,
                                        onChange: (R) =>
                                          ae("chineseName", R.target.value),
                                        onFocus: () => P("chineseName"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入中文名稱",
                                      }),
                                      X === "chineseName" &&
                                        T.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: T.map((R) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  Ce(R, "chineseName"),
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
                                                        children: R.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: R.NAME,
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
                                                        children: R.CHT_NAME,
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
                                                          R.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              R.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: X === "skdiacode" ? de : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "料號",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: k,
                                        onChange: (R) =>
                                          ae("skdiacode", R.target.value),
                                        onFocus: () => P("skdiacode"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入料號",
                                      }),
                                      X === "skdiacode" &&
                                        T.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: T.map((R) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  Ce(R, "skdiacode"),
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
                                                        children: R.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: R.NAME,
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
                                                        children: R.CHT_NAME,
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
                                                          R.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              R.GUID
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
                                    onClick: ue,
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
                                    children: d.map((R, fe) =>
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
                                                  children: ["批次 ", fe + 1],
                                                }),
                                                r.jsx("button", {
                                                  onClick: () => ke(R.id),
                                                  className:
                                                    "p-1 text-red-600 hover:bg-red-50 rounded transition-colors",
                                                  title: "刪除批次",
                                                  children: r.jsx(zd, {
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
                                                      value: R.lot,
                                                      onChange: (G) =>
                                                        ce(
                                                          R.id,
                                                          "lot",
                                                          G.target.value
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
                                                      value: R.expiryDate,
                                                      onChange: (G) =>
                                                        ce(
                                                          R.id,
                                                          "expiryDate",
                                                          G.target.value
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
                                                      value: R.qty,
                                                      onChange: (G) =>
                                                        ce(
                                                          R.id,
                                                          "qty",
                                                          G.target.value
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
                                        R.id
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
                                        onChange: (R) => A(R.target.value),
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
                                        value: M,
                                        onChange: (R) => Z(R.target.value),
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
                                        value: C,
                                        onChange: (R) => B(R.target.value),
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
                      onClick: we,
                      className:
                        "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: Q,
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
              onClose: () => H(!1),
              onScanSuccess: he,
              mode: "set_store_med_mode",
            }),
          ],
        })
      : null;
  },
  _h = ({ isOpen: e, onClose: t }) => {
    const {
        selectedDepartmentType: n,
        apiDepartmentData: s,
        allDepartmentsList: o,
        showNotification: l,
        triggerRefresh: a,
        reloadMedMapData: i,
      } = Qe(),
      [c, g] = h.useState(null),
      [p, m] = h.useState(""),
      [f, b] = h.useState(!1),
      w = () => (s ? s.map((A) => A.name) : []),
      E = () => (!n || !o ? [] : o.filter((A) => A["department_type "] === n)),
      k = () => {
        const A = w();
        return E().filter((Z) => !A.includes(Z.name));
      },
      u = () => (s ? s.map((A) => A.gird_position) : []),
      d = () => {
        const A = u(),
          M = [];
        for (let Z = 0; Z < 10; Z++)
          for (let C = 0; C < 10; C++) {
            const B = `${Z},${C}`;
            A.includes(B) || M.push(B);
          }
        return M.slice(0, 20);
      };
    h.useEffect(() => {
      e && (g(null), m(""));
    }, [e]);
    const x = async () => {
        if (!c) {
          l("請選擇部門", "error");
          return;
        }
        if (!p) {
          l("請選擇位置", "error");
          return;
        }
        if (!n) {
          l("部門分類資訊錯誤", "error");
          return;
        }
        b(!0);
        try {
          const A = await Se.addMedMap(c.name, c.type, p);
          A.Code === 200
            ? (l("新增部門成功", "success"), await i(), D())
            : l(A.Result || "新增部門失敗", "error");
        } catch (A) {
          console.error("新增部門錯誤:", A),
            l("新增部門失敗，請稍後再試", "error");
        } finally {
          b(!1);
        }
      },
      D = () => {
        g(null), m(""), t();
      };
    if (!e) return null;
    const L = k(),
      I = d();
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
                children: r.jsx(He, { className: "w-5 h-5" }),
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
                  L.length === 0
                    ? r.jsx("div", {
                        className: "text-center py-8",
                        children: r.jsx("p", {
                          className: "text-gray-600",
                          children: "所有部門都已新增",
                        }),
                      })
                    : r.jsx("div", {
                        className: "space-y-2",
                        children: L.map((A) =>
                          r.jsxs(
                            "label",
                            {
                              className: `flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                (c == null ? void 0 : c.name) === A.name
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                              }`,
                              children: [
                                r.jsx("input", {
                                  type: "radio",
                                  name: "department",
                                  value: A.name,
                                  checked:
                                    (c == null ? void 0 : c.name) === A.name,
                                  onChange: () => g(A),
                                  className:
                                    "w-4 h-4 text-blue-600 focus:ring-blue-500",
                                }),
                                r.jsxs("div", {
                                  className: "ml-3",
                                  children: [
                                    r.jsx("div", {
                                      className:
                                        "text-sm font-medium text-gray-900",
                                      children: A.name,
                                    }),
                                    r.jsx("div", {
                                      className: "text-xs text-gray-500",
                                      children: A.type,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            A.name
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
                          children: I.map((A) => {
                            const [M, Z] = A.split(",");
                            return r.jsxs(
                              "button",
                              {
                                onClick: () => m(A),
                                className: `p-3 border-2 rounded-lg text-sm font-medium transition-all ${
                                  p === A
                                    ? "border-blue-500 bg-blue-500 text-white"
                                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700"
                                }`,
                                children: ["(", M, ",", Z, ")"],
                              },
                              A
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
                onClick: x,
                disabled: !c || !p || f,
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
  Mh = ({ isOpen: e, onClose: t, initialBarcode: n = "" }) => {
    const {
        showNotification: s,
        medicineList: o,
        isLoadingMedicines: l,
      } = Qe(),
      [a, i] = h.useState(""),
      [c, g] = h.useState(""),
      [p, m] = h.useState(""),
      [f, b] = h.useState(""),
      [w, E] = h.useState(""),
      [k, u] = h.useState(null),
      [d, x] = h.useState([]),
      [D, L] = h.useState(""),
      [I, A] = h.useState(null),
      [M, Z] = h.useState(!1),
      C = h.useRef(null);
    h.useEffect(() => {
      e && (i(n), g(""), m(""), b(""), E(""), L(""), A(null), u(null));
    }, [e, n]),
      h.useEffect(() => {
        const v = (N) => {
          C.current && !C.current.contains(N.target) && u(null);
        };
        return (
          document.addEventListener("mousedown", v),
          () => {
            document.removeEventListener("mousedown", v);
          }
        );
      }, []);
    const B = (v, N) => {
        if (!N.trim() || l) {
          x([]);
          return;
        }
        const j = N.toLowerCase(),
          H = o.filter((de) => {
            var ee, ae, Ce, ue;
            switch (v) {
              case "code":
                return (ee = de.CODE) == null
                  ? void 0
                  : ee.toLowerCase().includes(j);
              case "name":
                return (ae = de.NAME) == null
                  ? void 0
                  : ae.toLowerCase().includes(j);
              case "chineseName":
                return (Ce = de.CHT_NAME) == null
                  ? void 0
                  : Ce.toLowerCase().includes(j);
              case "skdiacode":
                return (ue = de.SKDIACODE) == null
                  ? void 0
                  : ue.toLowerCase().includes(j);
              default:
                return !1;
            }
          });
        x(H.slice(0, 10));
      },
      X = (v, N) => {
        switch ((u(v), v)) {
          case "code":
            g(N);
            break;
          case "name":
            m(N);
            break;
          case "chineseName":
            b(N);
            break;
          case "skdiacode":
            E(N);
            break;
        }
        B(v, N);
      },
      P = (v) => {
        L(v.GUID),
          A(v),
          g(v.CODE || ""),
          m(v.NAME || ""),
          b(v.CHT_NAME || ""),
          E(v.SKDIACODE || ""),
          u(null),
          x([]);
      },
      T = () => {
        i(""), g(""), m(""), b(""), E(""), L(""), A(null), u(null), x([]), t();
      },
      se = async () => {
        if (!c.trim()) {
          s("藥碼為必填欄位", "error");
          return;
        }
        if (!a.trim()) {
          s("條碼不能為空", "error");
          return;
        }
        Z(!0);
        try {
          let v = [];
          if (I && I.BARCODE2)
            try {
              const j = JSON.parse(I.BARCODE2);
              Array.isArray(j)
                ? (v = [...j])
                : typeof j == "string" && (v = [j]);
            } catch {
              console.warn("解析 BARCODE2 失敗，使用原始值:", I.BARCODE2),
                I.BARCODE2 && (v = [I.BARCODE2]);
            }
          v.includes(a.trim()) || v.push(a.trim()),
            console.log("📋 處理後的 BARCODE2 陣列:", v);
          const N = await Se.addMedClouds(
            a.trim(),
            c.trim(),
            JSON.stringify(v),
            I.BARCODE
          );
          N.Code === 200
            ? (s("條碼建立成功", "success"), T())
            : s(N.Result || "建立條碼失敗", "error");
        } catch (v) {
          console.error("建立條碼失敗:", v),
            s("建立條碼失敗，請稍後再試", "error");
        } finally {
          Z(!1);
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
                    onClick: T,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                    disabled: M,
                    children: r.jsx(He, { className: "w-6 h-6 text-gray-600" }),
                  }),
                ],
              }),
              r.jsx("div", {
                className: "flex-1 overflow-y-auto p-6",
                children: r.jsxs("div", {
                  className: "space-y-4",
                  ref: C,
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
                          onChange: (v) => X("code", v.target.value),
                          onFocus: () => u("code"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥碼搜尋...",
                          disabled: M,
                        }),
                        k === "code" &&
                          d.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: d.map((v) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => P(v),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: v.CODE,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: v.NAME,
                                    }),
                                  ],
                                },
                                v.GUID
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
                          value: p,
                          onChange: (v) => X("name", v.target.value),
                          onFocus: () => u("name"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥名搜尋...",
                          disabled: M,
                        }),
                        k === "name" &&
                          d.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: d.map((v) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => P(v),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: v.NAME,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: v.CODE,
                                    }),
                                  ],
                                },
                                v.GUID
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
                          onChange: (v) => X("chineseName", v.target.value),
                          onFocus: () => u("chineseName"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入中文名搜尋...",
                          disabled: M,
                        }),
                        k === "chineseName" &&
                          d.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: d.map((v) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => P(v),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: v.CHT_NAME,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: v.CODE,
                                    }),
                                  ],
                                },
                                v.GUID
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
                          value: w,
                          onChange: (v) => X("skdiacode", v.target.value),
                          onFocus: () => u("skdiacode"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入料號搜尋...",
                          disabled: M,
                        }),
                        k === "skdiacode" &&
                          d.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: d.map((v) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => P(v),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: v.SKDIACODE,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: v.NAME,
                                    }),
                                  ],
                                },
                                v.GUID
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
                      onClick: T,
                      disabled: M,
                      className:
                        "px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: se,
                      disabled: M || !c.trim(),
                      className:
                        "px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: M ? "建立中..." : "確認建立",
                    }),
                  ],
                }),
              }),
            ],
          }),
        })
      : null;
  },
  Eh = ({
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
        const [f, b] = m.split(",").map(Number);
        return { row: f || 0, col: b || 0 };
      },
      a = (m) => {
        if (!m || m.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const f = m.map((k) => ({
            ...k,
            gridPos: l(k.gird_position || "0,0"),
          })),
          b = Math.max(...f.map((k) => k.gridPos.row), 0),
          w = Math.max(...f.map((k) => k.gridPos.col), 0);
        return {
          sortedContents: f.sort((k, u) =>
            k.gridPos.row !== u.gridPos.row
              ? k.gridPos.row - u.gridPos.row
              : k.gridPos.col - u.gridPos.col
          ),
          maxRow: b,
          maxCol: w,
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
        const f = [
          "med_box",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
        ].includes(m.type);
        return r.jsx(
          "div",
          {
            className: `${f ? "shadow-sm border-2 p-1 rounded-lg" : ""} ${i(
              m.type
            )} flex flex-col max-w-full min-w-0 h-full overflow-hidden`,
            children: r.jsx("div", {
              className: "flex-1 min-w-0 overflow-hidden",
              children: p(m),
            }),
          },
          m.GUID
        );
      },
      g = (m, f, b) => {
        const w = {};
        return (
          m.forEach((E) => {
            const k = l(E.gird_position || "0,0");
            w[`${k.row},${k.col}`] = E;
          }),
          r.jsx("table", {
            className: "w-full h-full max-w-full table-fixed",
            style: { borderCollapse: "separate", borderSpacing: "0px" },
            children: r.jsx("tbody", {
              children: Array.from({ length: f + 1 }, (E, k) =>
                r.jsx(
                  "tr",
                  {
                    children: Array.from({ length: b + 1 }, (u, d) => {
                      const x = `${k},${d}`,
                        D = w[x];
                      return D
                        ? r.jsx(
                            "td",
                            {
                              className:
                                "align-top bg-transparent overflow-hidden",
                              style: {
                                width: `${100 / (b + 1)}%`,
                                maxWidth: `${100 / (b + 1)}%`,
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
                                width: `${100 / (b + 1)}%`,
                                maxWidth: `${100 / (b + 1)}%`,
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
      p = (m) => {
        switch (m.type) {
          case "parent_container":
            if (m.contents && m.contents.length > 0) {
              const { sortedContents: f, maxRow: b, maxCol: w } = a(m.contents);
              return g(f, b, w);
            } else return r.jsx("div", { className: "" });
          case "sub_container":
            if (m.contents && m.contents.length > 0) {
              const { sortedContents: f, maxRow: b, maxCol: w } = a(m.contents);
              return g(f, b, w);
            } else return r.jsx("div", { className: "" });
          case "dispensing_shelves":
            if (m.contents && m.contents.length > 0) {
              const { sortedContents: f, maxRow: b, maxCol: w } = a(m.contents);
              return g(f, b, w);
            } else
              return r.jsx("div", {
                className:
                  "border-2 rounded-lg flex py-3 items-center justify-center h-full text-gray-400 text-sm",
                children: "無藥盒",
              });
          case "store_shelves":
            if (m.medMapStock && m.medMapStock.length > 0) {
              const f = m.medMapStock,
                b = f.length,
                w = b > 0 ? 100 / b : 100;
              return r.jsx("div", {
                className: "flex h-full w-full overflow-hidden",
                children: f.map((E, k) => {
                  const u = t && (E.code == t || E.material_no == t),
                    d = n.includes(E.code) || n.includes(E.material_no),
                    x = o();
                  return r.jsxs(
                    "div",
                    {
                      className: `border-2 rounded-lg border-gray-300 p-2 flex flex-col text-gray-800 justify-center items-center transition-colors cursor-pointer min-w-0 overflow-hidden ${
                        d
                          ? "highlight-breathe-red"
                          : u
                          ? `highlight-breathe-${x}`
                          : ""
                      }`,
                      style: {
                        width: `${w}%`,
                        maxWidth: `${w}%`,
                        flexShrink: 0,
                      },
                      onClick: () =>
                        s && s({ code: E.code || E.material_no, name: E.name }),
                      children: [
                        r.jsx("div", {
                          className:
                            "text-sm font-semibold truncate w-full text-center overflow-hidden",
                          children: E.name || E.material_no,
                        }),
                        r.jsxs("div", {
                          className: "text-xs mt-1",
                          children: ["數量: ", E.qty || 0],
                        }),
                      ],
                    },
                    E.GUID || k
                  );
                }),
              });
            } else if (m.contents && m.contents.length > 0) {
              const { sortedContents: f, maxRow: b, maxCol: w } = a(m.contents);
              return g(f, b, w);
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
              const f = t && m.med_info.some((E) => E.code == t),
                b = m.med_info.some((E) => n.includes(E.code)),
                w = o();
              return r.jsx("div", {
                className: `text-sm text-center h-full p-2 flex flex-col text-gray-800 justify-center transition-colors cursor-pointer overflow-hidden ${
                  b
                    ? "highlight-breathe-red"
                    : f
                    ? `highlight-breathe-${w}`
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
              const { sortedContents: f, maxRow: b, maxCol: w } = a(m.contents);
              return g(f, b, w);
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
            children: p(e),
          }),
        })
      : r.jsx("div", {
          className: "flex items-center justify-center h-full text-gray-400",
          children: r.jsx("p", { children: "無容器資料" }),
        });
  },
  Ih = ({ isOpen: e, onClose: t, type: n, data: s, onApprove: o }) => {
    const [l, a] = h.useState("0"),
      [i, c] = h.useState("0"),
      [g, p] = h.useState(null),
      [m, f] = h.useState(null),
      [b, w] = h.useState(!1),
      [E, k] = h.useState(!1),
      [u, d] = h.useState(""),
      [x, D] = h.useState(""),
      [L, I] = h.useState([]),
      [A, M] = h.useState([]),
      [Z, C] = h.useState([]),
      [B, X] = h.useState(!1),
      [P, T] = h.useState(!1),
      se = h.useRef(null),
      v = h.useRef(null),
      N = h.useRef(null),
      j = h.useRef(null);
    h.useEffect(() => {
      if (e && s) {
        const _ = s.issuedQuantity || s.requestedQuantity || "0";
        a(_), c(_), p(null), f(null), w(!1);
        const te = localStorage.getItem("medMap_setting");
        if (te)
          try {
            const ie = JSON.parse(te);
            d(ie.default_person || ""), D(ie.default_person_id || "");
          } catch (ie) {
            console.error("讀取設定失敗:", ie), d(""), D("");
          }
        else d(""), D("");
        H();
      }
    }, [e, s]),
      h.useEffect(() => {
        const _ = (te) => {
          N.current &&
            !N.current.contains(te.target) &&
            se.current &&
            !se.current.contains(te.target) &&
            X(!1),
            j.current &&
              !j.current.contains(te.target) &&
              v.current &&
              !v.current.contains(te.target) &&
              T(!1);
        };
        return (
          document.addEventListener("mousedown", _),
          () => document.removeEventListener("mousedown", _)
        );
      }, []);
    const H = async () => {
        try {
          const _ = await Se.getAllStaffInfo();
          _.Code === 200 && _.Data && I(_.Data);
        } catch (_) {
          console.error("獲取人員資料失敗:", _);
        }
      },
      de = (_) => {
        if ((d(_), _.trim() === "")) {
          M([]), X(!1);
          return;
        }
        const te = L.filter(
          (ie) => ie.name && ie.name.toLowerCase().includes(_.toLowerCase())
        );
        M(te), X(te.length > 0);
      },
      ee = (_) => {
        if ((D(_), _.trim() === "")) {
          C([]), T(!1);
          return;
        }
        const te = L.filter(
          (ie) => ie.ID && ie.ID.toLowerCase().includes(_.toLowerCase())
        );
        C(te), T(te.length > 0);
      },
      ae = (_) => {
        d(_.name), D(_.ID), X(!1);
      },
      Ce = (_) => {
        d(_.name), D(_.ID), T(!1);
      };
    if (!e || !s) return null;
    const ue = (_) => {
        if (b) a(_), c(_), w(!1);
        else {
          const te = l === "0" ? _ : l + _;
          a(te), c(te);
        }
      },
      ke = (_) => {
        g && m !== null && !b && ce(), f(i), p(_), w(!0);
      },
      ce = () => {
        if (g === null || m === null) return;
        const _ = parseFloat(m),
          te = parseFloat(i);
        let ie = 0;
        switch (g) {
          case "+":
            ie = _ + te;
            break;
          case "-":
            ie = _ - te;
            break;
          case "×":
            ie = _ * te;
            break;
          case "÷":
            ie = te !== 0 ? _ / te : 0;
            break;
          default:
            return;
        }
        const U = ie.toString();
        a(U), c(U), p(null), f(null), w(!0);
      },
      Q = () => {
        ce();
      },
      he = () => {
        if (b) a("0."), c("0."), w(!1);
        else if (!l.includes(".")) {
          const _ = l + ".";
          a(_), c(_);
        }
      },
      we = () => {
        a("0"), c("0"), p(null), f(null), w(!1);
      },
      R = () => {
        const _ = new Date(),
          te = _.getFullYear(),
          ie = String(_.getMonth() + 1).padStart(2, "0"),
          U = String(_.getDate()).padStart(2, "0"),
          S = String(_.getHours()).padStart(2, "0"),
          $ = String(_.getMinutes()).padStart(2, "0"),
          K = String(_.getSeconds()).padStart(2, "0");
        return `${te}-${ie}-${U}T${S}:${$}:${K}`;
      },
      fe = async () => {
        if (!s) return;
        if (!u.trim()) {
          alert("請輸入核撥人員名稱");
          return;
        }
        const _ = n === "requisition" ? "申領" : "撥補";
        if (
          window.confirm(`確認核撥資訊：

藥品名稱：${s.name}
實際撥發量：${l}
核撥人員：${u}${x ? ` (${x})` : ""}

是否確認${_}？`)
        ) {
          k(!0);
          try {
            const ie = R();
            if (n === "requisition") {
              const U = await Se.updateRequisitionActualQuantity(s.GUID, l);
              if (U.Code !== 200) {
                alert(`更新實際撥發量失敗：${U.Message || "未知錯誤"}`), k(!1);
                return;
              }
              const S = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuingPerson: u,
                issueTime: ie,
              };
              console.log("申領request", S);
              const $ = await Se.updateRequisitionByGuid(S);
              if ($.Code !== 200) {
                alert(`申領過帳失敗：${$.Message || "未知錯誤"}`), k(!1);
                return;
              }
              console.log("✅ 申領核撥成功:", {
                GUID: s.GUID,
                name: s.name,
                actualQuantity: l,
                issuingPerson: u,
                issueTime: ie,
              });
            } else {
              const U = await Se.updateDistributionActualQuantity(s.GUID, l);
              if (U.Code !== 200) {
                alert(`更新實際撥發量失敗：${U.Message || "未知錯誤"}`), k(!1);
                return;
              }
              const S = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuer: u,
                issuanceTime: ie,
              };
              console.log("撥補request", S);
              const $ = await Se.updateDistributionByGuid(S);
              if ($.Code !== 200) {
                alert(`撥補過帳失敗：${$.Message || "未知錯誤"}`), k(!1);
                return;
              }
              console.log("✅ 撥補核撥成功:", {
                GUID: s.GUID,
                name: s.name,
                actualQuantity: l,
                issuer: u,
                issuanceTime: ie,
              });
            }
            o && (await o()), alert(`${_}核撥成功！`), t();
          } catch (ie) {
            console.error(`${_}核撥失敗:`, ie),
              alert(`${_}核撥失敗，請稍後再試`);
          } finally {
            k(!1);
          }
        }
      },
      G = n === "requisition" ? s.requestedQuantity : s.issuedQuantity;
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
                  children: r.jsx(He, { className: "w-5 h-5 text-gray-700" }),
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
                                ref: se,
                                type: "text",
                                value: u,
                                onChange: (_) => de(_.target.value),
                                onFocus: () => {
                                  u.trim() && de(u);
                                },
                                placeholder: "人員名稱",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              B &&
                                r.jsx("div", {
                                  ref: N,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: A.map((_, te) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => ae(_),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          r.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: _.ID,
                                          }),
                                          r.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: _.name,
                                          }),
                                        ],
                                      },
                                      te
                                    )
                                  ),
                                }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "relative",
                            children: [
                              r.jsx("input", {
                                ref: v,
                                type: "text",
                                value: x,
                                onChange: (_) => ee(_.target.value),
                                onFocus: () => {
                                  x.trim() && ee(x);
                                },
                                placeholder: "人員 ID",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              P &&
                                r.jsx("div", {
                                  ref: j,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: Z.map((_, te) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => Ce(_),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          r.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: _.ID,
                                          }),
                                          r.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: _.name,
                                          }),
                                        ],
                                      },
                                      te
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
                            children: G || "-",
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
                        onClick: () => ue("7"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "7",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("8"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "8",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("9"),
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
                        onClick: () => ue("4"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "4",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("5"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "5",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("6"),
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
                        onClick: () => ue("1"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "1",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("2"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "2",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("3"),
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
                        onClick: () => ue("0"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "0",
                      }),
                      r.jsx("button", {
                        onClick: he,
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: ".",
                      }),
                      r.jsx("button", {
                        onClick: Q,
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
                  onClick: we,
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
                  onClick: fe,
                  disabled: E,
                  className:
                    "px-6 py-2.5 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                  children: E ? "處理中..." : "核撥",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Ph = ({
    isOpen: e,
    onClose: t,
    medicineInfo: n,
    requisitions: s,
    distributions: o,
    onNoticeUpdated: l,
  }) => {
    const [a, i] = h.useState(s),
      [c, g] = h.useState(o),
      [p, m] = h.useState(null),
      [f, b] = h.useState(!1),
      [w, E] = h.useState(null),
      [k, u] = h.useState("requisition");
    no.useEffect(() => {
      i(s), g(o);
    }, [s, o]);
    const d = async (M) => {
        const Z = M.notice === "True" ? "False" : "True";
        m(M.GUID);
        const C = [...a],
          B = C.findIndex((X) => X.GUID === M.GUID);
        if (B === -1) {
          m(null);
          return;
        }
        (C[B] = { ...M, notice: Z }), i(C);
        try {
          const X = await Se.updateRequisitionNotice(M.GUID, Z);
          X.Code !== 200
            ? ((C[B] = { ...M, notice: M.notice }),
              i(C),
              console.error("更新申領通知狀態失敗:", X))
            : l && l();
        } catch (X) {
          (C[B] = { ...M, notice: M.notice }),
            i(C),
            console.error("更新申領通知狀態失敗:", X);
        } finally {
          m(null);
        }
      },
      x = async (M) => {
        const Z = M.notice === "True" ? "False" : "True";
        m(M.GUID);
        const C = [...c],
          B = C.findIndex((X) => X.GUID === M.GUID);
        if (B === -1) {
          m(null);
          return;
        }
        (C[B] = { ...M, notice: Z }), g(C);
        try {
          const X = await Se.updateDistributionNotice(M.GUID, Z);
          X.Code !== 200
            ? ((C[B] = { ...M, notice: M.notice }),
              g(C),
              console.error("更新撥補通知狀態失敗:", X))
            : l && l();
        } catch (X) {
          (C[B] = { ...M, notice: M.notice }),
            g(C),
            console.error("更新撥補通知狀態失敗:", X);
        } finally {
          m(null);
        }
      };
    if (!e || !n) return null;
    const D = a.filter((M) => M.state === "等待過帳"),
      L = c.filter((M) => M.state === "等待過帳"),
      I = D.length === 0 && L.length === 0,
      A = (M) => {
        if (!M || M === "1/01/01 00:00:00" || M === "0001-01-01T00:00:00")
          return "-";
        try {
          const Z = new Date(M);
          if (isNaN(Z.getTime())) return M;
          const C = Z.getFullYear(),
            B = String(Z.getMonth() + 1).padStart(2, "0"),
            X = String(Z.getDate()).padStart(2, "0"),
            P = String(Z.getHours()).padStart(2, "0"),
            T = String(Z.getMinutes()).padStart(2, "0");
          return `${C}/${B}/${X} ${P}:${T}`;
        } catch {
          return M;
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
                "flex items-center justify-between px-3 py-2 border-b border-gray-200",
              children: [
                r.jsx("h2", {
                  className: "text-xl font-bold text-gray-800",
                  children: "藥品核撥",
                }),
                r.jsx("button", {
                  onClick: t,
                  className:
                    "p-2 hover:bg-white/50 rounded-full transition-colors",
                  title: "關閉",
                  children: r.jsx(He, { className: "w-6 h-6 text-gray-700" }),
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
              children: I
                ? r.jsx("div", {
                    className:
                      "flex items-center justify-center h-40 text-gray-400 text-lg",
                    children: "無藥品需求",
                  })
                : r.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      D.map((M, Z) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-blue-200 rounded-lg p-3 bg-blue-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              u("requisition"), E(M), b(!0);
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
                                        onClick: (C) => {
                                          C.stopPropagation(), d(M);
                                        },
                                        disabled: p === M.GUID,
                                        className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${
                                          M.notice === "True"
                                            ? "bg-green-500 text-white hover:bg-green-600"
                                            : "bg-gray-300 text-gray-600 hover:bg-gray-400"
                                        }`,
                                        title:
                                          M.notice === "True"
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
                                      M.actionType.includes("緊急")
                                        ? "bg-green-600"
                                        : "bg-blue-600"
                                    }`,
                                    children: M.actionType,
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
                                        children: M.requestingUnit || "-",
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
                                        children: M.requestingPerson || "-",
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
                                        children: M.requestedQuantity || "-",
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
                                        children: A(M.requestTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          M.GUID
                        )
                      ),
                      L.map((M, Z) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-yellow-200 rounded-lg p-3 bg-yellow-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              u("distribution"), E(M), b(!0);
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
                                    onClick: (C) => {
                                      C.stopPropagation(), x(M);
                                    },
                                    disabled: p === M.GUID,
                                    className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${
                                      M.notice === "True"
                                        ? "bg-green-500 text-white hover:bg-green-600"
                                        : "bg-gray-300 text-gray-600 hover:bg-gray-400"
                                    }`,
                                    title:
                                      M.notice === "True"
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
                                        children: M.sourceStoreType || "-",
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
                                        children: M.destinationStoreType || "-",
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
                                        children: M.LOT || "-",
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
                                        children: M.VAL || "-",
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
                                        children: M.issuedQuantity || "-",
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
                                        children: M.reportName || "-",
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
                                        children: A(M.addedTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          M.GUID
                        )
                      ),
                    ],
                  }),
            }),
          ],
        }),
        r.jsx(Ih, {
          isOpen: f,
          onClose: () => b(!1),
          type: k,
          data: w,
          onApprove: l,
        }),
      ],
    });
  },
  Rh = ({ isOpen: e, onClose: t, container: n }) => {
    const [s, o] = h.useState("list_mode"),
      { highlightedMedicineCode: l } = Qe(),
      [a, i] = h.useState(!1),
      [c, g] = h.useState([]),
      [p, m] = h.useState([]),
      [f, b] = h.useState([]),
      [w, E] = h.useState(!1),
      [k, u] = h.useState(null),
      d = h.useRef(null),
      x = h.useRef(null),
      D = () => {
        try {
          const B = localStorage.getItem("medMap_setting");
          if (B) {
            const P = JSON.parse(B).light_sec;
            if (P != null && P !== "") {
              const T = Number(P);
              if (!isNaN(T) && T > 0) return T * 1e3;
            }
          }
        } catch (B) {
          console.error("讀取亮燈設定失敗:", B);
        }
        return 6e4;
      },
      L = () => {
        try {
          const C = localStorage.getItem("medMap_setting");
          if (C) return JSON.parse(C).light_color || "red";
        } catch (C) {
          console.error("讀取高亮顏色設定失敗:", C);
        }
        return "red";
      },
      I = h.useCallback(async () => {
        try {
          const C = new Date(),
            B = `${C.getFullYear()}-${String(C.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(C.getDate()).padStart(2, "0")} 00:00:00`,
            X = `${C.getFullYear()}-${String(C.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(C.getDate()).padStart(2, "0")} 23:59:59`,
            [P, T] = await Promise.all([
              Se.getRequisitionByTime(B, X),
              Se.getDistributionByTime(B, X),
            ]),
            se = [];
          if (P.Code === 200 && P.Data) {
            const v = P.Data.filter((j) => {
              var H;
              return (H = n == null ? void 0 : n.med_list) == null
                ? void 0
                : H.some((de) => de.code === j.code);
            });
            m(v),
              v
                .filter((j) => j.state === "等待過帳" && j.notice === "True")
                .forEach((j) => {
                  j.code && se.push(j.code);
                });
          }
          if (T.Code === 200 && T.Data) {
            const v = T.Data.filter((j) => {
              var H;
              return (H = n == null ? void 0 : n.med_list) == null
                ? void 0
                : H.some((de) => de.code === j.code);
            });
            b(v),
              v
                .filter((j) => j.state === "等待過帳" && j.notice === "True")
                .forEach((j) => {
                  j.code && (se.includes(j.code) || se.push(j.code));
                });
          }
          g(se);
        } catch (C) {
          console.error("檢查申領撥補資料失敗:", C);
        }
      }, [n]);
    h.useEffect(
      () => (
        e
          ? (I(),
            x.current && clearInterval(x.current),
            (x.current = setInterval(() => {
              I();
            }, 1e4)))
          : x.current && (clearInterval(x.current), (x.current = null)),
        () => {
          x.current && (clearInterval(x.current), (x.current = null));
        }
      ),
      [e, I]
    ),
      h.useEffect(() => {
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
          const C = D();
          console.log("✅ ContainerDetailModal - 啟動亮燈:", {
            medicineCode: l,
            duration: C / 1e3 + "秒",
          }),
            d.current && clearTimeout(d.current),
            (d.current = setTimeout(() => {
              console.log("⏱️ ContainerDetailModal - 亮燈時間結束"),
                i(!1),
                (d.current = null);
            }, C));
        } else i(!1);
        return () => {
          d.current && clearTimeout(d.current);
        };
      }, [e, l]);
    const A = (C) => {
      p.filter((B) => B.code === C.code),
        f.filter((B) => B.code === C.code),
        u({
          code: C.code,
          name: C.name,
          cht_name: C.cht_name,
          skdiacode: C.SKDIACODE || C.skdiacode,
        }),
        E(!0);
    };
    if (!e) return null;
    const M = () =>
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
                    children: n.med_list.map((C, B) => {
                      const X = a && l && C.code == l,
                        P = c.includes(C.code);
                      B === 0 &&
                        console.log(
                          "🧪 ContainerDetailModal - 第一筆藥品檢查:",
                          {
                            medCode: C.code,
                            highlightedCode: l,
                            isHighlightActive: a,
                            isHighlighted: X,
                            isPendingRequisition: P,
                            comparison: `${C.code} == ${l} = ${C.code == l}`,
                          }
                        );
                      const T = L();
                      return r.jsxs(
                        "tr",
                        {
                          className: `transition-colors cursor-pointer ${
                            P
                              ? "highlight-breathe-red"
                              : X
                              ? `highlight-breathe-${T}`
                              : "hover:bg-gray-50"
                          }`,
                          onClick: () => A(C),
                          children: [
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm",
                              children: C.code || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm",
                              children: C.SKDIACODE || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm",
                              children: C.name || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm text-right",
                              children: C.qty || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm text-center",
                              children: C.stockCol || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm text-center",
                              children: C.stockRow || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm text-center",
                              children: C.stock || "-",
                            }),
                          ],
                        },
                        B
                      );
                    }),
                  }),
                ],
              }),
            }),
      Z = () =>
        n
          ? r.jsx(Eh, {
              container: n,
              highlightedMedicineCode: a ? l : null,
              pendingRequisitionCodes: c,
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
                      children: r.jsx(He, {
                        className: "w-6 h-6 text-gray-700",
                      }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 overflow-hidden p-3",
                  children: s === "list_mode" ? M() : Z(),
                }),
              ],
            }),
          ],
        }),
        r.jsx(Ph, {
          isOpen: w,
          onClose: () => E(!1),
          medicineInfo: k,
          requisitions: k ? p.filter((C) => C.code === k.code) : [],
          distributions: k ? f.filter((C) => C.code === k.code) : [],
          onNoticeUpdated: I,
        }),
      ],
    });
  },
  Th = () => {
    const {
        editStoreShelfModalOpen: e,
        closeEditStoreShelfModal: t,
        selectedStoreShelfForEdit: n,
        showNotification: s,
        reloadMedMapData: o,
      } = Qe(),
      [l, a] = h.useState({
        name: "",
        position: "",
        width: "85",
        height: "29",
        ip: "",
        serverName: "",
        serverType: "",
        deviceType: "",
      }),
      [i, c] = h.useState(!1);
    h.useEffect(() => {
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
    const g = (f, b) => {
        a((w) => ({ ...w, [f]: b }));
      },
      p = async () => {
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
                    device_type: l.deviceType,
                    serverName: l.serverName.trim(),
                    serverType: l.serverType.trim(),
                    GUID: n.GUID,
                  },
                ],
              },
              w = `${(await Se.getConfig()).domain}/api/medmap/update_shelf`,
              k = await (
                await fetch(w, {
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
              onClick: (f) => f.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(mr, { className: "w-6 h-6 text-gray-600" }),
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
                      children: r.jsx(He, { className: "w-6 h-6" }),
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
                      onClick: m,
                      disabled: i,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                      children: "取消",
                    }),
                    r.jsxs("button", {
                      onClick: p,
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
  Ah = () => {
    const {
        editParentContainerModalOpen: e,
        closeEditParentContainerModal: t,
        selectedParentContainerForEdit: n,
        showNotification: s,
        reloadMedMapData: o,
      } = Qe(),
      [l, a] = h.useState({
        name: "",
        position: "",
        ip: "",
        serverName: "",
        serverType: "",
        deviceType: "",
      }),
      [i, c] = h.useState(!1);
    h.useEffect(() => {
      n &&
        e &&
        a({
          name: n.name || "",
          position: n.gird_position || "",
          ip: n.ip || "",
          serverName: n.serverName || "",
          serverType: n.serverType || "",
          deviceType: n.device_type || "",
        });
    }, [n, e]);
    const g = (f, b) => {
        a((w) => ({ ...w, [f]: b }));
      },
      p = async () => {
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
            const f = [
                {
                  GUID: n.GUID,
                  name: l.name.trim(),
                  position: l.position.trim(),
                  absolute_position: n.absolute_position || "0,0",
                  ip: l.ip.trim(),
                  serverName: l.serverName.trim(),
                  serverType: l.serverType.trim(),
                  device_type: l.deviceType,
                },
              ],
              b = await Se.updateMedMapSection(f);
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
              onClick: (f) => f.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(mr, { className: "w-6 h-6 text-gray-600" }),
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
                      children: r.jsx(He, { className: "w-6 h-6" }),
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
                            value: l.ip,
                            onChange: (f) => g("ip", f.target.value),
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
                      onClick: m,
                      disabled: i,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                      children: "取消",
                    }),
                    r.jsxs("button", {
                      onClick: p,
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
  $h = ({ isOpen: e, onLoginSuccess: t }) => {
    const { t: n } = mt(),
      [s, o] = h.useState(""),
      [l, a] = h.useState(""),
      [i, c] = h.useState(!1),
      [g, p] = h.useState(!1),
      [m, f] = h.useState(""),
      b = async (E) => {
        if ((E.preventDefault(), !s.trim() || !l.trim())) {
          f("Please enter both ID and password");
          return;
        }
        p(!0), f("");
        try {
          const k = await Se.login({ ID: s.trim(), Password: l });
          if (k.Code === 200 && k.Data) {
            const u = { ...k.Data, loginTime: new Date().toISOString() };
            sessionStorage.setItem("user_session", JSON.stringify(u)), t(u);
          } else f(k.Result || "Login failed");
        } catch (k) {
          console.error("Login failed:", k),
            f("Network error. Please try again.");
        } finally {
          p(!1);
        }
      },
      w = (E) => {
        E.key === "Enter" && !g && b(E);
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
                      onSubmit: b,
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
                              onChange: (E) => o(E.target.value),
                              onKeyPress: w,
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
                                  onChange: (E) => a(E.target.value),
                                  onKeyPress: w,
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
                                    ? r.jsx(eh, { className: "w-5 h-5" })
                                    : r.jsx(th, { className: "w-5 h-5" }),
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
  Oh = ({ isVisible: e, message: t }) => {
    const { t: n } = mt();
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
  Lh = ({
    message: e,
    type: t,
    isVisible: n,
    onClose: s,
    duration: o = 3e3,
  }) => {
    const [l, a] = h.useState(!1);
    return (
      h.useEffect(() => {
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
                  ? r.jsx(Km, { className: "w-5 h-5 text-green-600" })
                  : r.jsx(ih, { className: "w-5 h-5 text-red-600" }),
                r.jsx("span", {
                  className: "text-sm font-medium",
                  children: e,
                }),
                r.jsx("button", {
                  onClick: s,
                  className: `p-1 rounded-full hover:bg-black/10 transition-colors ${
                    t === "success" ? "text-green-600" : "text-red-600"
                  }`,
                  children: r.jsx(He, { className: "w-4 h-4" }),
                }),
              ],
            }),
          })
        : null
    );
  };
function Uh() {
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
    selectedDepartmentForAdd: p,
    addStoreItemModalOpen: m,
    closeAddStoreItemModal: f,
    selectedStoreShelfForAdd: b,
    addDepartmentModalOpen: w,
    closeAddDepartmentModal: E,
    qrCodeScannerModalOpen: k,
    qrCodeScannerMode: u,
    closeQRCodeScannerModal: d,
    addBarcodeModalOpen: x,
    closeAddBarcodeModal: D,
    initialBarcodeValue: L,
    containerDetailModalOpen: I,
    closeContainerDetailModal: A,
    selectedContainerForDetail: M,
    setMedicineList: Z,
    setIsLoadingMedicines: C,
    showNotification: B,
  } = Qe();
  h.useEffect(() => {
    (() => {
      try {
        const v = sessionStorage.getItem("user_session");
        if (v) {
          const N = JSON.parse(v);
          N.GUID && N.ID && N.Name
            ? (o(N), s(!0))
            : sessionStorage.removeItem("user_session");
        }
      } catch (v) {
        console.error("Error checking session:", v),
          sessionStorage.removeItem("user_session");
      }
    })();
  }, [s, o]),
    h.useEffect(() => {
      let se = !0;
      return (
        (async () => {
          if (n) {
            C(!0);
            try {
              console.log("開始載入藥品資料...");
              const N = await Se.getMedicineCloud();
              if ((console.log("藥品資料 API 回應:", N), !se)) return;
              N.Code === 200 && N.Data
                ? (Z(N.Data),
                  console.log(`✅ 成功載入 ${N.Data.length} 筆藥品資料`),
                  B(`載入 ${N.Data.length} 筆藥品資料`, "success"))
                : (console.warn("API 回應異常:", N),
                  Z([]),
                  B("藥品資料載入異常，請稍後重試", "error"));
            } catch (N) {
              if (!se) return;
              console.error("載入藥品資料失敗:", N),
                Z([]),
                B("無法連線到藥品資料庫，部分功能可能無法使用", "error");
            } finally {
              se && C(!1);
            }
          }
        })(),
        () => {
          se = !1;
        }
      );
    }, [n]);
  const X = (se) => {
      o(se), s(!0);
    },
    P = no.useRef(null),
    T = (se, v) => {
      if (
        (console.log("📸 QR掃描成功 - handleQRScanSuccess 被調用:", {
          barcode: se,
          medicineData: v,
          mode: u,
        }),
        console.log("📸 當前 mode:", u),
        console.log("📸 當前 viewMode:", t),
        console.log("📸 drugCanvasRef.current:", P.current),
        u === "track_Drug_mode")
      ) {
        if ((console.log("✅ 進入 track_Drug_mode 分支"), t !== "medicine")) {
          console.warn("⚠️ 當前不在藥品地圖視圖，無法定位藥品"),
            B("請切換到藥品地圖視圖後再使用此功能", "error");
          return;
        }
        P.current
          ? (console.log("✅ drugCanvasRef.current 存在"),
            console.log(
              "📸 drugCanvasRef.current.locateDrug 類型:",
              typeof P.current.locateDrug
            ),
            typeof P.current.locateDrug == "function"
              ? (console.log("✅ 呼叫 locateDrug 函數"),
                P.current.locateDrug(v))
              : console.warn("⚠️ locateDrug 不是函數"))
          : console.warn("⚠️ drugCanvasRef.current 不存在");
      } else console.log("⚠️ mode 不是 track_Drug_mode，當前 mode:", u);
    };
  return n
    ? r.jsxs("div", {
        className: "min-h-screen bg-gray-50",
        children: [
          r.jsx(ch, {}),
          r.jsx(uh, {}),
          r.jsx(ph, {}),
          r.jsx("div", {
            className: "fixed inset-0",
            children: r.jsx("div", {
              className: "w-full h-full",
              children:
                t === "department" ? r.jsx(gh, {}) : r.jsx(Fd, { ref: P }),
            }),
          }),
          r.jsx(mh, {}),
          r.jsx(bh, {}),
          r.jsx(Nh, {}),
          r.jsx(jh, {}),
          r.jsx(Sh, {}),
          r.jsx(Ch, {}),
          r.jsx(kh, {}),
          r.jsx(Dh, { isOpen: m, onClose: f, storeShelf: b }),
          r.jsx(_h, { isOpen: w, onClose: E }),
          r.jsx(Ho, { isOpen: k, onClose: d, mode: u, onScanSuccess: T }),
          r.jsx(Mh, { isOpen: x, onClose: D, initialBarcode: L }),
          r.jsx(Rh, { isOpen: I, onClose: A, container: M }),
          r.jsx(Th, {}),
          r.jsx(Ah, {}),
          r.jsx(Oh, { isVisible: l }),
          r.jsx(Lh, {
            message: a.message,
            type: a.type,
            isVisible: a.isVisible,
            onClose: i,
          }),
        ],
      })
    : r.jsx($h, { isOpen: !0, onLoginSuccess: X });
}
function Bh() {
  return r.jsx(qm, { children: r.jsx(Vm, { children: r.jsx(Uh, {}) }) });
}
Td(document.getElementById("root")).render(
  r.jsx(h.StrictMode, { children: r.jsx(Bh, {}) })
);
