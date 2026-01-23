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
function Mf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Bc = { exports: {} },
  qo = {},
  zc = { exports: {} },
  Fe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Us = Symbol.for("react.element"),
  Ef = Symbol.for("react.portal"),
  If = Symbol.for("react.fragment"),
  Pf = Symbol.for("react.strict_mode"),
  Tf = Symbol.for("react.profiler"),
  Rf = Symbol.for("react.provider"),
  $f = Symbol.for("react.context"),
  Af = Symbol.for("react.forward_ref"),
  Of = Symbol.for("react.suspense"),
  Uf = Symbol.for("react.memo"),
  Lf = Symbol.for("react.lazy"),
  Mi = Symbol.iterator;
function Gf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Mi && e[Mi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Fc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Hc = Object.assign,
  Vc = {};
function zr(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Vc),
    (this.updater = n || Fc));
}
zr.prototype.isReactComponent = {};
zr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
zr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qc() {}
qc.prototype = zr.prototype;
function Pa(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Vc),
    (this.updater = n || Fc));
}
var Ta = (Pa.prototype = new qc());
Ta.constructor = Pa;
Hc(Ta, zr.prototype);
Ta.isPureReactComponent = !0;
var Ei = Array.isArray,
  Wc = Object.prototype.hasOwnProperty,
  Ra = { current: null },
  Yc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qc(e, t, n) {
  var s,
    o = {},
    l = null,
    a = null;
  if (t != null)
    for (s in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Wc.call(t, s) && !Yc.hasOwnProperty(s) && (o[s] = t[s]);
  var i = arguments.length - 2;
  if (i === 1) o.children = n;
  else if (1 < i) {
    for (var c = Array(i), h = 0; h < i; h++) c[h] = arguments[h + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (s in ((i = e.defaultProps), i)) o[s] === void 0 && (o[s] = i[s]);
  return {
    $$typeof: Us,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: Ra.current,
  };
}
function Bf(e, t) {
  return {
    $$typeof: Us,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function $a(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Us;
}
function zf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ii = /\/+/g;
function pl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? zf("" + e.key)
    : t.toString(36);
}
function ao(e, t, n, s, o) {
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
          case Us:
          case Ef:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = s === "" ? "." + pl(a, 0) : s),
      Ei(o)
        ? ((n = ""),
          e != null && (n = e.replace(Ii, "$&/") + "/"),
          ao(o, t, n, "", function (h) {
            return h;
          }))
        : o != null &&
          ($a(o) &&
            (o = Bf(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Ii, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (s = s === "" ? "." : s + ":"), Ei(e)))
    for (var i = 0; i < e.length; i++) {
      l = e[i];
      var c = s + pl(l, i);
      a += ao(l, t, n, c, o);
    }
  else if (((c = Gf(e)), typeof c == "function"))
    for (e = c.call(e), i = 0; !(l = e.next()).done; )
      ((l = l.value), (c = s + pl(l, i++)), (a += ao(l, t, n, c, o)));
  else if (l === "object")
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
  return a;
}
function Fs(e, t, n) {
  if (e == null) return e;
  var s = [],
    o = 0;
  return (
    ao(e, s, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    s
  );
}
function Ff(e) {
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
var kt = { current: null },
  io = { transition: null },
  Hf = {
    ReactCurrentDispatcher: kt,
    ReactCurrentBatchConfig: io,
    ReactCurrentOwner: Ra,
  };
function Xc() {
  throw Error("act(...) is not supported in production builds of React.");
}
Fe.Children = {
  map: Fs,
  forEach: function (e, t, n) {
    Fs(
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
      Fs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Fs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!$a(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
Fe.Component = zr;
Fe.Fragment = If;
Fe.Profiler = Tf;
Fe.PureComponent = Pa;
Fe.StrictMode = Pf;
Fe.Suspense = Of;
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hf;
Fe.act = Xc;
Fe.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var s = Hc({}, e.props),
    o = e.key,
    l = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (a = Ra.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (c in t)
      Wc.call(t, c) &&
        !Yc.hasOwnProperty(c) &&
        (s[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) s.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var h = 0; h < c; h++) i[h] = arguments[h + 2];
    s.children = i;
  }
  return { $$typeof: Us, type: e.type, key: o, ref: l, props: s, _owner: a };
};
Fe.createContext = function (e) {
  return (
    (e = {
      $$typeof: $f,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Rf, _context: e }),
    (e.Consumer = e)
  );
};
Fe.createElement = Qc;
Fe.createFactory = function (e) {
  var t = Qc.bind(null, e);
  return ((t.type = e), t);
};
Fe.createRef = function () {
  return { current: null };
};
Fe.forwardRef = function (e) {
  return { $$typeof: Af, render: e };
};
Fe.isValidElement = $a;
Fe.lazy = function (e) {
  return { $$typeof: Lf, _payload: { _status: -1, _result: e }, _init: Ff };
};
Fe.memo = function (e, t) {
  return { $$typeof: Uf, type: e, compare: t === void 0 ? null : t };
};
Fe.startTransition = function (e) {
  var t = io.transition;
  io.transition = {};
  try {
    e();
  } finally {
    io.transition = t;
  }
};
Fe.unstable_act = Xc;
Fe.useCallback = function (e, t) {
  return kt.current.useCallback(e, t);
};
Fe.useContext = function (e) {
  return kt.current.useContext(e);
};
Fe.useDebugValue = function () {};
Fe.useDeferredValue = function (e) {
  return kt.current.useDeferredValue(e);
};
Fe.useEffect = function (e, t) {
  return kt.current.useEffect(e, t);
};
Fe.useId = function () {
  return kt.current.useId();
};
Fe.useImperativeHandle = function (e, t, n) {
  return kt.current.useImperativeHandle(e, t, n);
};
Fe.useInsertionEffect = function (e, t) {
  return kt.current.useInsertionEffect(e, t);
};
Fe.useLayoutEffect = function (e, t) {
  return kt.current.useLayoutEffect(e, t);
};
Fe.useMemo = function (e, t) {
  return kt.current.useMemo(e, t);
};
Fe.useReducer = function (e, t, n) {
  return kt.current.useReducer(e, t, n);
};
Fe.useRef = function (e) {
  return kt.current.useRef(e);
};
Fe.useState = function (e) {
  return kt.current.useState(e);
};
Fe.useSyncExternalStore = function (e, t, n) {
  return kt.current.useSyncExternalStore(e, t, n);
};
Fe.useTransition = function () {
  return kt.current.useTransition();
};
Fe.version = "18.3.1";
zc.exports = Fe;
var u = zc.exports;
const bo = Mf(u);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vf = u,
  qf = Symbol.for("react.element"),
  Wf = Symbol.for("react.fragment"),
  Yf = Object.prototype.hasOwnProperty,
  Qf = Vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Xf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kc(e, t, n) {
  var s,
    o = {},
    l = null,
    a = null;
  (n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (a = t.ref));
  for (s in t) Yf.call(t, s) && !Xf.hasOwnProperty(s) && (o[s] = t[s]);
  if (e && e.defaultProps)
    for (s in ((t = e.defaultProps), t)) o[s] === void 0 && (o[s] = t[s]);
  return {
    $$typeof: qf,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: Qf.current,
  };
}
qo.Fragment = Wf;
qo.jsx = Kc;
qo.jsxs = Kc;
Bc.exports = qo;
var r = Bc.exports,
  Jc = { exports: {} },
  Ht = {},
  Zc = { exports: {} },
  ed = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(w, B) {
    var ee = w.length;
    w.push(B);
    e: for (; 0 < ee; ) {
      var H = (ee - 1) >>> 1,
        A = w[H];
      if (0 < o(A, B)) ((w[H] = B), (w[ee] = A), (ee = H));
      else break e;
    }
  }
  function n(w) {
    return w.length === 0 ? null : w[0];
  }
  function s(w) {
    if (w.length === 0) return null;
    var B = w[0],
      ee = w.pop();
    if (ee !== B) {
      w[0] = ee;
      e: for (var H = 0, A = w.length, Ne = A >>> 1; H < Ne; ) {
        var U = 2 * (H + 1) - 1,
          G = w[U],
          he = U + 1,
          J = w[he];
        if (0 > o(G, ee))
          he < A && 0 > o(J, G)
            ? ((w[H] = J), (w[he] = ee), (H = he))
            : ((w[H] = G), (w[U] = ee), (H = U));
        else if (he < A && 0 > o(J, ee)) ((w[H] = J), (w[he] = ee), (H = he));
        else break e;
      }
    }
    return B;
  }
  function o(w, B) {
    var ee = w.sortIndex - B.sortIndex;
    return ee !== 0 ? ee : w.id - B.id;
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
    T = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(w) {
    for (var B = n(h); B !== null; ) {
      if (B.callback === null) s(h);
      else if (B.startTime <= w)
        (s(h), (B.sortIndex = B.expirationTime), t(c, B));
      else break;
      B = n(h);
    }
  }
  function v(w) {
    if (((T = !1), y(w), !b))
      if (n(c) !== null) ((b = !0), P(E));
      else {
        var B = n(h);
        B !== null && K(v, B.startTime - w);
      }
  }
  function E(w, B) {
    ((b = !1), T && ((T = !1), f(F), (F = -1)), (j = !0));
    var ee = p;
    try {
      for (
        y(B), m = n(c);
        m !== null && (!(m.expirationTime > B) || (w && !se()));
      ) {
        var H = m.callback;
        if (typeof H == "function") {
          ((m.callback = null), (p = m.priorityLevel));
          var A = H(m.expirationTime <= B);
          ((B = e.unstable_now()),
            typeof A == "function" ? (m.callback = A) : m === n(c) && s(c),
            y(B));
        } else s(c);
        m = n(c);
      }
      if (m !== null) var Ne = !0;
      else {
        var U = n(h);
        (U !== null && K(v, U.startTime - B), (Ne = !1));
      }
      return Ne;
    } finally {
      ((m = null), (p = ee), (j = !1));
    }
  }
  var S = !1,
    I = null,
    F = -1,
    M = 5,
    $ = -1;
  function se() {
    return !(e.unstable_now() - $ < M);
  }
  function ye() {
    if (I !== null) {
      var w = e.unstable_now();
      $ = w;
      var B = !0;
      try {
        B = I(!0, w);
      } finally {
        B ? _() : ((S = !1), (I = null));
      }
    } else S = !1;
  }
  var _;
  if (typeof d == "function")
    _ = function () {
      d(ye);
    };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(),
      L = N.port2;
    ((N.port1.onmessage = ye),
      (_ = function () {
        L.postMessage(null);
      }));
  } else
    _ = function () {
      k(ye, 0);
    };
  function P(w) {
    ((I = w), S || ((S = !0), _()));
  }
  function K(w, B) {
    F = k(function () {
      w(e.unstable_now());
    }, B);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (w) {
      w.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      b || j || ((b = !0), P(E));
    }),
    (e.unstable_forceFrameRate = function (w) {
      0 > w || 125 < w
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (M = 0 < w ? Math.floor(1e3 / w) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (w) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = p;
      }
      var ee = p;
      p = B;
      try {
        return w();
      } finally {
        p = ee;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (w, B) {
      switch (w) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          w = 3;
      }
      var ee = p;
      p = w;
      try {
        return B();
      } finally {
        p = ee;
      }
    }),
    (e.unstable_scheduleCallback = function (w, B, ee) {
      var H = e.unstable_now();
      switch (
        (typeof ee == "object" && ee !== null
          ? ((ee = ee.delay),
            (ee = typeof ee == "number" && 0 < ee ? H + ee : H))
          : (ee = H),
        w)
      ) {
        case 1:
          var A = -1;
          break;
        case 2:
          A = 250;
          break;
        case 5:
          A = 1073741823;
          break;
        case 4:
          A = 1e4;
          break;
        default:
          A = 5e3;
      }
      return (
        (A = ee + A),
        (w = {
          id: g++,
          callback: B,
          priorityLevel: w,
          startTime: ee,
          expirationTime: A,
          sortIndex: -1,
        }),
        ee > H
          ? ((w.sortIndex = ee),
            t(h, w),
            n(c) === null &&
              w === n(h) &&
              (T ? (f(F), (F = -1)) : (T = !0), K(v, ee - H)))
          : ((w.sortIndex = A), t(c, w), b || j || ((b = !0), P(E))),
        w
      );
    }),
    (e.unstable_shouldYield = se),
    (e.unstable_wrapCallback = function (w) {
      var B = p;
      return function () {
        var ee = p;
        p = B;
        try {
          return w.apply(this, arguments);
        } finally {
          p = ee;
        }
      };
    }));
})(ed);
Zc.exports = ed;
var Kf = Zc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jf = u,
  Ft = Kf;
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
var td = new Set(),
  ws = {};
function ar(e, t) {
  (Rr(e, t), Rr(e + "Capture", t));
}
function Rr(e, t) {
  for (ws[e] = t, e = 0; e < t.length; e++) td.add(t[e]);
}
var vn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ll = Object.prototype.hasOwnProperty,
  Zf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Pi = {},
  Ti = {};
function ep(e) {
  return Ll.call(Ti, e)
    ? !0
    : Ll.call(Pi, e)
      ? !1
      : Zf.test(e)
        ? (Ti[e] = !0)
        : ((Pi[e] = !0), !1);
}
function tp(e, t, n, s) {
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
function np(e, t, n, s) {
  if (t === null || typeof t > "u" || tp(e, t, n, s)) return !0;
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
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = s),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = a));
}
var bt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    bt[e] = new _t(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  bt[t] = new _t(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  bt[e] = new _t(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  bt[e] = new _t(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    bt[e] = new _t(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  bt[e] = new _t(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  bt[e] = new _t(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  bt[e] = new _t(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  bt[e] = new _t(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Aa = /[\-:]([a-z])/g;
function Oa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Aa, Oa);
    bt[t] = new _t(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Aa, Oa);
    bt[t] = new _t(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Aa, Oa);
  bt[t] = new _t(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  bt[e] = new _t(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
bt.xlinkHref = new _t(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  bt[e] = new _t(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ua(e, t, n, s) {
  var o = bt.hasOwnProperty(t) ? bt[t] : null;
  (o !== null
    ? o.type !== 0
    : s ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (np(t, n, o, s) && (n = null),
    s || o === null
      ? ep(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var jn = Jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Hs = Symbol.for("react.element"),
  mr = Symbol.for("react.portal"),
  hr = Symbol.for("react.fragment"),
  La = Symbol.for("react.strict_mode"),
  Gl = Symbol.for("react.profiler"),
  nd = Symbol.for("react.provider"),
  rd = Symbol.for("react.context"),
  Ga = Symbol.for("react.forward_ref"),
  Bl = Symbol.for("react.suspense"),
  zl = Symbol.for("react.suspense_list"),
  Ba = Symbol.for("react.memo"),
  kn = Symbol.for("react.lazy"),
  sd = Symbol.for("react.offscreen"),
  Ri = Symbol.iterator;
function Jr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ri && e[Ri]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var lt = Object.assign,
  ml;
function as(e) {
  if (ml === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ml = (t && t[1]) || "";
    }
  return (
    `
` +
    ml +
    e
  );
}
var hl = !1;
function gl(e, t) {
  if (!e || hl) return "";
  hl = !0;
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
    ((hl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? as(e) : "";
}
function rp(e) {
  switch (e.tag) {
    case 5:
      return as(e.type);
    case 16:
      return as("Lazy");
    case 13:
      return as("Suspense");
    case 19:
      return as("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = gl(e.type, !1)), e);
    case 11:
      return ((e = gl(e.type.render, !1)), e);
    case 1:
      return ((e = gl(e.type, !0)), e);
    default:
      return "";
  }
}
function Fl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case hr:
      return "Fragment";
    case mr:
      return "Portal";
    case Gl:
      return "Profiler";
    case La:
      return "StrictMode";
    case Bl:
      return "Suspense";
    case zl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case rd:
        return (e.displayName || "Context") + ".Consumer";
      case nd:
        return (e._context.displayName || "Context") + ".Provider";
      case Ga:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ba:
        return (
          (t = e.displayName || null),
          t !== null ? t : Fl(e.type) || "Memo"
        );
      case kn:
        ((t = e._payload), (e = e._init));
        try {
          return Fl(e(t));
        } catch {}
    }
  return null;
}
function sp(e) {
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
      return Fl(t);
    case 8:
      return t === La ? "StrictMode" : "Mode";
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
function zn(e) {
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
function od(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function op(e) {
  var t = od(e) ? "checked" : "value",
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
          ((s = "" + a), l.call(this, a));
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
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function Vs(e) {
  e._valueTracker || (e._valueTracker = op(e));
}
function ld(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    s = "";
  return (
    e && (s = od(e) ? (e.checked ? "true" : "false") : e.value),
    (e = s),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function wo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Hl(e, t) {
  var n = t.checked;
  return lt({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function $i(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    s = t.checked != null ? t.checked : t.defaultChecked;
  ((n = zn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: s,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function ad(e, t) {
  ((t = t.checked), t != null && Ua(e, "checked", t, !1));
}
function Vl(e, t) {
  ad(e, t);
  var n = zn(t.value),
    s = t.type;
  if (n != null)
    s === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (s === "submit" || s === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? ql(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ql(e, t.type, zn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Ai(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var s = t.type;
    if (
      !(
        (s !== "submit" && s !== "reset") ||
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
function ql(e, t, n) {
  (t !== "number" || wo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var is = Array.isArray;
function _r(e, t, n, s) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      ((o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && s && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + zn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ((e[o].selected = !0), s && (e[o].defaultSelected = !0));
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Wl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(de(91));
  return lt({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Oi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(de(92));
      if (is(n)) {
        if (1 < n.length) throw Error(de(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: zn(n) };
}
function id(e, t) {
  var n = zn(t.value),
    s = zn(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    s != null && (e.defaultValue = "" + s));
}
function Ui(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function cd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Yl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? cd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var qs,
  dd = (function (e) {
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
        qs = qs || document.createElement("div"),
          qs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = qs.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ns(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var us = {
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
  lp = ["Webkit", "ms", "Moz", "O"];
Object.keys(us).forEach(function (e) {
  lp.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (us[t] = us[e]));
  });
});
function ud(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (us.hasOwnProperty(e) && us[e])
      ? ("" + t).trim()
      : t + "px";
}
function fd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0,
        o = ud(n, t[n], s);
      (n === "float" && (n = "cssFloat"), s ? e.setProperty(n, o) : (e[n] = o));
    }
}
var ap = lt(
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
function Ql(e, t) {
  if (t) {
    if (ap[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Xl(e, t) {
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
var Kl = null;
function za(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Jl = null,
  Mr = null,
  Er = null;
function Li(e) {
  if ((e = Bs(e))) {
    if (typeof Jl != "function") throw Error(de(280));
    var t = e.stateNode;
    t && ((t = Ko(t)), Jl(e.stateNode, e.type, t));
  }
}
function pd(e) {
  Mr ? (Er ? Er.push(e) : (Er = [e])) : (Mr = e);
}
function md() {
  if (Mr) {
    var e = Mr,
      t = Er;
    if (((Er = Mr = null), Li(e), t)) for (e = 0; e < t.length; e++) Li(t[e]);
  }
}
function hd(e, t) {
  return e(t);
}
function gd() {}
var xl = !1;
function xd(e, t, n) {
  if (xl) return e(t, n);
  xl = !0;
  try {
    return hd(e, t, n);
  } finally {
    ((xl = !1), (Mr !== null || Er !== null) && (gd(), md()));
  }
}
function js(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var s = Ko(n);
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
      ((s = !s.disabled) ||
        ((e = e.type),
        (s = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !s));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(de(231, t, typeof n));
  return n;
}
var Zl = !1;
if (vn)
  try {
    var Zr = {};
    (Object.defineProperty(Zr, "passive", {
      get: function () {
        Zl = !0;
      },
    }),
      window.addEventListener("test", Zr, Zr),
      window.removeEventListener("test", Zr, Zr));
  } catch {
    Zl = !1;
  }
function ip(e, t, n, s, o, l, a, i, c) {
  var h = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, h);
  } catch (g) {
    this.onError(g);
  }
}
var fs = !1,
  No = null,
  jo = !1,
  ea = null,
  cp = {
    onError: function (e) {
      ((fs = !0), (No = e));
    },
  };
function dp(e, t, n, s, o, l, a, i, c) {
  ((fs = !1), (No = null), ip.apply(cp, arguments));
}
function up(e, t, n, s, o, l, a, i, c) {
  if ((dp.apply(this, arguments), fs)) {
    if (fs) {
      var h = No;
      ((fs = !1), (No = null));
    } else throw Error(de(198));
    jo || ((jo = !0), (ea = h));
  }
}
function ir(e) {
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
function yd(e) {
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
function Gi(e) {
  if (ir(e) !== e) throw Error(de(188));
}
function fp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ir(e)), t === null)) throw Error(de(188));
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
        if (l === n) return (Gi(o), e);
        if (l === s) return (Gi(o), t);
        l = l.sibling;
      }
      throw Error(de(188));
    }
    if (n.return !== s.return) ((n = o), (s = l));
    else {
      for (var a = !1, i = o.child; i; ) {
        if (i === n) {
          ((a = !0), (n = o), (s = l));
          break;
        }
        if (i === s) {
          ((a = !0), (s = o), (n = l));
          break;
        }
        i = i.sibling;
      }
      if (!a) {
        for (i = l.child; i; ) {
          if (i === n) {
            ((a = !0), (n = l), (s = o));
            break;
          }
          if (i === s) {
            ((a = !0), (s = l), (n = o));
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
function vd(e) {
  return ((e = fp(e)), e !== null ? bd(e) : null);
}
function bd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = bd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var wd = Ft.unstable_scheduleCallback,
  Bi = Ft.unstable_cancelCallback,
  pp = Ft.unstable_shouldYield,
  mp = Ft.unstable_requestPaint,
  dt = Ft.unstable_now,
  hp = Ft.unstable_getCurrentPriorityLevel,
  Fa = Ft.unstable_ImmediatePriority,
  Nd = Ft.unstable_UserBlockingPriority,
  So = Ft.unstable_NormalPriority,
  gp = Ft.unstable_LowPriority,
  jd = Ft.unstable_IdlePriority,
  Wo = null,
  un = null;
function xp(e) {
  if (un && typeof un.onCommitFiberRoot == "function")
    try {
      un.onCommitFiberRoot(Wo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var rn = Math.clz32 ? Math.clz32 : bp,
  yp = Math.log,
  vp = Math.LN2;
function bp(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((yp(e) / vp) | 0)) | 0);
}
var Ws = 64,
  Ys = 4194304;
function cs(e) {
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
function Co(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var s = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var i = a & ~o;
    i !== 0 ? (s = cs(i)) : ((l &= a), l !== 0 && (s = cs(l)));
  } else ((a = n & ~o), a !== 0 ? (s = cs(a)) : l !== 0 && (s = cs(l)));
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
      ((n = 31 - rn(t)), (o = 1 << n), (s |= e[n]), (t &= ~o));
  return s;
}
function wp(e, t) {
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
function Np(e, t) {
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
    (c === -1
      ? (!(i & n) || i & s) && (o[a] = wp(i, t))
      : c <= t && (e.expiredLanes |= i),
      (l &= ~i));
  }
}
function ta(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Sd() {
  var e = Ws;
  return ((Ws <<= 1), !(Ws & 4194240) && (Ws = 64), e);
}
function yl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ls(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - rn(t)),
    (e[t] = n));
}
function jp(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var s = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - rn(n),
      l = 1 << o;
    ((t[o] = 0), (s[o] = -1), (e[o] = -1), (n &= ~l));
  }
}
function Ha(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var s = 31 - rn(n),
      o = 1 << s;
    ((o & t) | (e[s] & t) && (e[s] |= t), (n &= ~o));
  }
}
var Ye = 0;
function Cd(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Dd,
  Va,
  kd,
  _d,
  Md,
  na = !1,
  Qs = [],
  Rn = null,
  $n = null,
  An = null,
  Ss = new Map(),
  Cs = new Map(),
  Mn = [],
  Sp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function zi(e, t) {
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
      Ss.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Cs.delete(t.pointerId);
  }
}
function es(e, t, n, s, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: s,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Bs(t)), t !== null && Va(t)),
      e)
    : ((e.eventSystemFlags |= s),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Cp(e, t, n, s, o) {
  switch (t) {
    case "focusin":
      return ((Rn = es(Rn, e, t, n, s, o)), !0);
    case "dragenter":
      return (($n = es($n, e, t, n, s, o)), !0);
    case "mouseover":
      return ((An = es(An, e, t, n, s, o)), !0);
    case "pointerover":
      var l = o.pointerId;
      return (Ss.set(l, es(Ss.get(l) || null, e, t, n, s, o)), !0);
    case "gotpointercapture":
      return (
        (l = o.pointerId),
        Cs.set(l, es(Cs.get(l) || null, e, t, n, s, o)),
        !0
      );
  }
  return !1;
}
function Ed(e) {
  var t = Kn(e.target);
  if (t !== null) {
    var n = ir(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = yd(n)), t !== null)) {
          ((e.blockedOn = t),
            Md(e.priority, function () {
              kd(n);
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
function co(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ra(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var s = new n.constructor(n.type, n);
      ((Kl = s), n.target.dispatchEvent(s), (Kl = null));
    } else return ((t = Bs(n)), t !== null && Va(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Fi(e, t, n) {
  co(e) && n.delete(t);
}
function Dp() {
  ((na = !1),
    Rn !== null && co(Rn) && (Rn = null),
    $n !== null && co($n) && ($n = null),
    An !== null && co(An) && (An = null),
    Ss.forEach(Fi),
    Cs.forEach(Fi));
}
function ts(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    na ||
      ((na = !0),
      Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority, Dp)));
}
function Ds(e) {
  function t(o) {
    return ts(o, e);
  }
  if (0 < Qs.length) {
    ts(Qs[0], e);
    for (var n = 1; n < Qs.length; n++) {
      var s = Qs[n];
      s.blockedOn === e && (s.blockedOn = null);
    }
  }
  for (
    Rn !== null && ts(Rn, e),
      $n !== null && ts($n, e),
      An !== null && ts(An, e),
      Ss.forEach(t),
      Cs.forEach(t),
      n = 0;
    n < Mn.length;
    n++
  )
    ((s = Mn[n]), s.blockedOn === e && (s.blockedOn = null));
  for (; 0 < Mn.length && ((n = Mn[0]), n.blockedOn === null); )
    (Ed(n), n.blockedOn === null && Mn.shift());
}
var Ir = jn.ReactCurrentBatchConfig,
  Do = !0;
function kp(e, t, n, s) {
  var o = Ye,
    l = Ir.transition;
  Ir.transition = null;
  try {
    ((Ye = 1), qa(e, t, n, s));
  } finally {
    ((Ye = o), (Ir.transition = l));
  }
}
function _p(e, t, n, s) {
  var o = Ye,
    l = Ir.transition;
  Ir.transition = null;
  try {
    ((Ye = 4), qa(e, t, n, s));
  } finally {
    ((Ye = o), (Ir.transition = l));
  }
}
function qa(e, t, n, s) {
  if (Do) {
    var o = ra(e, t, n, s);
    if (o === null) (_l(e, t, s, ko, n), zi(e, s));
    else if (Cp(o, e, t, n, s)) s.stopPropagation();
    else if ((zi(e, s), t & 4 && -1 < Sp.indexOf(e))) {
      for (; o !== null; ) {
        var l = Bs(o);
        if (
          (l !== null && Dd(l),
          (l = ra(e, t, n, s)),
          l === null && _l(e, t, s, ko, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && s.stopPropagation();
    } else _l(e, t, s, null, n);
  }
}
var ko = null;
function ra(e, t, n, s) {
  if (((ko = null), (e = za(s)), (e = Kn(e)), e !== null))
    if (((t = ir(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = yd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((ko = e), null);
}
function Id(e) {
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
      switch (hp()) {
        case Fa:
          return 1;
        case Nd:
          return 4;
        case So:
        case gp:
          return 16;
        case jd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var In = null,
  Wa = null,
  uo = null;
function Pd() {
  if (uo) return uo;
  var e,
    t = Wa,
    n = t.length,
    s,
    o = "value" in In ? In.value : In.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (s = 1; s <= a && t[n - s] === o[l - s]; s++);
  return (uo = o.slice(e, 1 < s ? 1 - s : void 0));
}
function fo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Xs() {
  return !0;
}
function Hi() {
  return !1;
}
function Vt(e) {
  function t(n, s, o, l, a) {
    ((this._reactName = n),
      (this._targetInst = o),
      (this.type = s),
      (this.nativeEvent = l),
      (this.target = a),
      (this.currentTarget = null));
    for (var i in e)
      e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(l) : l[i]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Xs
        : Hi),
      (this.isPropagationStopped = Hi),
      this
    );
  }
  return (
    lt(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Xs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Xs));
      },
      persist: function () {},
      isPersistent: Xs,
    }),
    t
  );
}
var Fr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ya = Vt(Fr),
  Gs = lt({}, Fr, { view: 0, detail: 0 }),
  Mp = Vt(Gs),
  vl,
  bl,
  ns,
  Yo = lt({}, Gs, {
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
    getModifierState: Qa,
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
        : (e !== ns &&
            (ns && e.type === "mousemove"
              ? ((vl = e.screenX - ns.screenX), (bl = e.screenY - ns.screenY))
              : (bl = vl = 0),
            (ns = e)),
          vl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : bl;
    },
  }),
  Vi = Vt(Yo),
  Ep = lt({}, Yo, { dataTransfer: 0 }),
  Ip = Vt(Ep),
  Pp = lt({}, Gs, { relatedTarget: 0 }),
  wl = Vt(Pp),
  Tp = lt({}, Fr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Rp = Vt(Tp),
  $p = lt({}, Fr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ap = Vt($p),
  Op = lt({}, Fr, { data: 0 }),
  qi = Vt(Op),
  Up = {
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
  Lp = {
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
  Gp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Bp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Gp[e]) ? !!t[e] : !1;
}
function Qa() {
  return Bp;
}
var zp = lt({}, Gs, {
    key: function (e) {
      if (e.key) {
        var t = Up[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = fo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Lp[e.keyCode] || "Unidentified"
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
    getModifierState: Qa,
    charCode: function (e) {
      return e.type === "keypress" ? fo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? fo(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Fp = Vt(zp),
  Hp = lt({}, Yo, {
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
  Wi = Vt(Hp),
  Vp = lt({}, Gs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Qa,
  }),
  qp = Vt(Vp),
  Wp = lt({}, Fr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Yp = Vt(Wp),
  Qp = lt({}, Yo, {
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
  Xp = Vt(Qp),
  Kp = [9, 13, 27, 32],
  Xa = vn && "CompositionEvent" in window,
  ps = null;
vn && "documentMode" in document && (ps = document.documentMode);
var Jp = vn && "TextEvent" in window && !ps,
  Td = vn && (!Xa || (ps && 8 < ps && 11 >= ps)),
  Yi = " ",
  Qi = !1;
function Rd(e, t) {
  switch (e) {
    case "keyup":
      return Kp.indexOf(t.keyCode) !== -1;
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
function $d(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var gr = !1;
function Zp(e, t) {
  switch (e) {
    case "compositionend":
      return $d(t);
    case "keypress":
      return t.which !== 32 ? null : ((Qi = !0), Yi);
    case "textInput":
      return ((e = t.data), e === Yi && Qi ? null : e);
    default:
      return null;
  }
}
function em(e, t) {
  if (gr)
    return e === "compositionend" || (!Xa && Rd(e, t))
      ? ((e = Pd()), (uo = Wa = In = null), (gr = !1), e)
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
      return Td && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var tm = {
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
function Xi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!tm[e.type] : t === "textarea";
}
function Ad(e, t, n, s) {
  (pd(s),
    (t = _o(t, "onChange")),
    0 < t.length &&
      ((n = new Ya("onChange", "change", null, n, s)),
      e.push({ event: n, listeners: t })));
}
var ms = null,
  ks = null;
function nm(e) {
  Wd(e, 0);
}
function Qo(e) {
  var t = vr(e);
  if (ld(t)) return e;
}
function rm(e, t) {
  if (e === "change") return t;
}
var Od = !1;
if (vn) {
  var Nl;
  if (vn) {
    var jl = "oninput" in document;
    if (!jl) {
      var Ki = document.createElement("div");
      (Ki.setAttribute("oninput", "return;"),
        (jl = typeof Ki.oninput == "function"));
    }
    Nl = jl;
  } else Nl = !1;
  Od = Nl && (!document.documentMode || 9 < document.documentMode);
}
function Ji() {
  ms && (ms.detachEvent("onpropertychange", Ud), (ks = ms = null));
}
function Ud(e) {
  if (e.propertyName === "value" && Qo(ks)) {
    var t = [];
    (Ad(t, ks, e, za(e)), xd(nm, t));
  }
}
function sm(e, t, n) {
  e === "focusin"
    ? (Ji(), (ms = t), (ks = n), ms.attachEvent("onpropertychange", Ud))
    : e === "focusout" && Ji();
}
function om(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Qo(ks);
}
function lm(e, t) {
  if (e === "click") return Qo(t);
}
function am(e, t) {
  if (e === "input" || e === "change") return Qo(t);
}
function im(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var on = typeof Object.is == "function" ? Object.is : im;
function _s(e, t) {
  if (on(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    s = Object.keys(t);
  if (n.length !== s.length) return !1;
  for (s = 0; s < n.length; s++) {
    var o = n[s];
    if (!Ll.call(t, o) || !on(e[o], t[o])) return !1;
  }
  return !0;
}
function Zi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ec(e, t) {
  var n = Zi(e);
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
    n = Zi(n);
  }
}
function Ld(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Ld(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Gd() {
  for (var e = window, t = wo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = wo(e.document);
  }
  return t;
}
function Ka(e) {
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
function cm(e) {
  var t = Gd(),
    n = e.focusedElem,
    s = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ld(n.ownerDocument.documentElement, n)
  ) {
    if (s !== null && Ka(n)) {
      if (
        ((t = s.start),
        (e = s.end),
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
          l = Math.min(s.start, o);
        ((s = s.end === void 0 ? l : Math.min(s.end, o)),
          !e.extend && l > s && ((o = s), (s = l), (l = o)),
          (o = ec(n, l)));
        var a = ec(n, s);
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
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var dm = vn && "documentMode" in document && 11 >= document.documentMode,
  xr = null,
  sa = null,
  hs = null,
  oa = !1;
function tc(e, t, n) {
  var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  oa ||
    xr == null ||
    xr !== wo(s) ||
    ((s = xr),
    "selectionStart" in s && Ka(s)
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
    (hs && _s(hs, s)) ||
      ((hs = s),
      (s = _o(sa, "onSelect")),
      0 < s.length &&
        ((t = new Ya("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: s }),
        (t.target = xr))));
}
function Ks(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var yr = {
    animationend: Ks("Animation", "AnimationEnd"),
    animationiteration: Ks("Animation", "AnimationIteration"),
    animationstart: Ks("Animation", "AnimationStart"),
    transitionend: Ks("Transition", "TransitionEnd"),
  },
  Sl = {},
  Bd = {};
vn &&
  ((Bd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete yr.animationend.animation,
    delete yr.animationiteration.animation,
    delete yr.animationstart.animation),
  "TransitionEvent" in window || delete yr.transitionend.transition);
function Xo(e) {
  if (Sl[e]) return Sl[e];
  if (!yr[e]) return e;
  var t = yr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Bd) return (Sl[e] = t[n]);
  return e;
}
var zd = Xo("animationend"),
  Fd = Xo("animationiteration"),
  Hd = Xo("animationstart"),
  Vd = Xo("transitionend"),
  qd = new Map(),
  nc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Hn(e, t) {
  (qd.set(e, t), ar(t, [e]));
}
for (var Cl = 0; Cl < nc.length; Cl++) {
  var Dl = nc[Cl],
    um = Dl.toLowerCase(),
    fm = Dl[0].toUpperCase() + Dl.slice(1);
  Hn(um, "on" + fm);
}
Hn(zd, "onAnimationEnd");
Hn(Fd, "onAnimationIteration");
Hn(Hd, "onAnimationStart");
Hn("dblclick", "onDoubleClick");
Hn("focusin", "onFocus");
Hn("focusout", "onBlur");
Hn(Vd, "onTransitionEnd");
Rr("onMouseEnter", ["mouseout", "mouseover"]);
Rr("onMouseLeave", ["mouseout", "mouseover"]);
Rr("onPointerEnter", ["pointerout", "pointerover"]);
Rr("onPointerLeave", ["pointerout", "pointerover"]);
ar(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
ar(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
ar("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ar(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
ar(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
ar(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var ds =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  pm = new Set("cancel close invalid load scroll toggle".split(" ").concat(ds));
function rc(e, t, n) {
  var s = e.type || "unknown-event";
  ((e.currentTarget = n), up(s, t, void 0, e), (e.currentTarget = null));
}
function Wd(e, t) {
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
          (rc(o, i, h), (l = c));
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
          (rc(o, i, h), (l = c));
        }
    }
  }
  if (jo) throw ((e = ea), (jo = !1), (ea = null), e);
}
function Ke(e, t) {
  var n = t[da];
  n === void 0 && (n = t[da] = new Set());
  var s = e + "__bubble";
  n.has(s) || (Yd(t, e, 2, !1), n.add(s));
}
function kl(e, t, n) {
  var s = 0;
  (t && (s |= 4), Yd(n, e, s, t));
}
var Js = "_reactListening" + Math.random().toString(36).slice(2);
function Ms(e) {
  if (!e[Js]) {
    ((e[Js] = !0),
      td.forEach(function (n) {
        n !== "selectionchange" && (pm.has(n) || kl(n, !1, e), kl(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Js] || ((t[Js] = !0), kl("selectionchange", !1, t));
  }
}
function Yd(e, t, n, s) {
  switch (Id(t)) {
    case 1:
      var o = kp;
      break;
    case 4:
      o = _p;
      break;
    default:
      o = qa;
  }
  ((n = o.bind(null, t, n, e)),
    (o = void 0),
    !Zl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    s
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1));
}
function _l(e, t, n, s, o) {
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
          if (((a = Kn(i)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            s = l = a;
            continue e;
          }
          i = i.parentNode;
        }
      }
      s = s.return;
    }
  xd(function () {
    var h = l,
      g = za(n),
      m = [];
    e: {
      var p = qd.get(e);
      if (p !== void 0) {
        var j = Ya,
          b = e;
        switch (e) {
          case "keypress":
            if (fo(n) === 0) break e;
          case "keydown":
          case "keyup":
            j = Fp;
            break;
          case "focusin":
            ((b = "focus"), (j = wl));
            break;
          case "focusout":
            ((b = "blur"), (j = wl));
            break;
          case "beforeblur":
          case "afterblur":
            j = wl;
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
            j = Vi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            j = Ip;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            j = qp;
            break;
          case zd:
          case Fd:
          case Hd:
            j = Rp;
            break;
          case Vd:
            j = Yp;
            break;
          case "scroll":
            j = Mp;
            break;
          case "wheel":
            j = Xp;
            break;
          case "copy":
          case "cut":
          case "paste":
            j = Ap;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            j = Wi;
        }
        var T = (t & 4) !== 0,
          k = !T && e === "scroll",
          f = T ? (p !== null ? p + "Capture" : null) : p;
        T = [];
        for (var d = h, y; d !== null; ) {
          y = d;
          var v = y.stateNode;
          if (
            (y.tag === 5 &&
              v !== null &&
              ((y = v),
              f !== null && ((v = js(d, f)), v != null && T.push(Es(d, v, y)))),
            k)
          )
            break;
          d = d.return;
        }
        0 < T.length &&
          ((p = new j(p, b, null, n, g)), m.push({ event: p, listeners: T }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (j = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Kl &&
            (b = n.relatedTarget || n.fromElement) &&
            (Kn(b) || b[bn]))
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
              (b = b ? Kn(b) : null),
              b !== null &&
                ((k = ir(b)), b !== k || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
            : ((j = null), (b = h)),
          j !== b)
        ) {
          if (
            ((T = Vi),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((T = Wi),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (k = j == null ? p : vr(j)),
            (y = b == null ? p : vr(b)),
            (p = new T(v, d + "leave", j, n, g)),
            (p.target = k),
            (p.relatedTarget = y),
            (v = null),
            Kn(g) === h &&
              ((T = new T(f, d + "enter", b, n, g)),
              (T.target = y),
              (T.relatedTarget = k),
              (v = T)),
            (k = v),
            j && b)
          )
            t: {
              for (T = j, f = b, d = 0, y = T; y; y = pr(y)) d++;
              for (y = 0, v = f; v; v = pr(v)) y++;
              for (; 0 < d - y; ) ((T = pr(T)), d--);
              for (; 0 < y - d; ) ((f = pr(f)), y--);
              for (; d--; ) {
                if (T === f || (f !== null && T === f.alternate)) break t;
                ((T = pr(T)), (f = pr(f)));
              }
              T = null;
            }
          else T = null;
          (j !== null && sc(m, p, j, T, !1),
            b !== null && k !== null && sc(m, k, b, T, !0));
        }
      }
      e: {
        if (
          ((p = h ? vr(h) : window),
          (j = p.nodeName && p.nodeName.toLowerCase()),
          j === "select" || (j === "input" && p.type === "file"))
        )
          var E = rm;
        else if (Xi(p))
          if (Od) E = am;
          else {
            E = om;
            var S = sm;
          }
        else
          (j = p.nodeName) &&
            j.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = lm);
        if (E && (E = E(e, h))) {
          Ad(m, E, n, g);
          break e;
        }
        (S && S(e, p, h),
          e === "focusout" &&
            (S = p._wrapperState) &&
            S.controlled &&
            p.type === "number" &&
            ql(p, "number", p.value));
      }
      switch (((S = h ? vr(h) : window), e)) {
        case "focusin":
          (Xi(S) || S.contentEditable === "true") &&
            ((xr = S), (sa = h), (hs = null));
          break;
        case "focusout":
          hs = sa = xr = null;
          break;
        case "mousedown":
          oa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((oa = !1), tc(m, n, g));
          break;
        case "selectionchange":
          if (dm) break;
        case "keydown":
        case "keyup":
          tc(m, n, g);
      }
      var I;
      if (Xa)
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
        gr
          ? Rd(e, n) && (F = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (F = "onCompositionStart");
      (F &&
        (Td &&
          n.locale !== "ko" &&
          (gr || F !== "onCompositionStart"
            ? F === "onCompositionEnd" && gr && (I = Pd())
            : ((In = g),
              (Wa = "value" in In ? In.value : In.textContent),
              (gr = !0))),
        (S = _o(h, F)),
        0 < S.length &&
          ((F = new qi(F, e, null, n, g)),
          m.push({ event: F, listeners: S }),
          I ? (F.data = I) : ((I = $d(n)), I !== null && (F.data = I)))),
        (I = Jp ? Zp(e, n) : em(e, n)) &&
          ((h = _o(h, "onBeforeInput")),
          0 < h.length &&
            ((g = new qi("onBeforeInput", "beforeinput", null, n, g)),
            m.push({ event: g, listeners: h }),
            (g.data = I))));
    }
    Wd(m, t);
  });
}
function Es(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function _o(e, t) {
  for (var n = t + "Capture", s = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    (o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = js(e, n)),
      l != null && s.unshift(Es(e, l, o)),
      (l = js(e, t)),
      l != null && s.push(Es(e, l, o))),
      (e = e.return));
  }
  return s;
}
function pr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function sc(e, t, n, s, o) {
  for (var l = t._reactName, a = []; n !== null && n !== s; ) {
    var i = n,
      c = i.alternate,
      h = i.stateNode;
    if (c !== null && c === s) break;
    (i.tag === 5 &&
      h !== null &&
      ((i = h),
      o
        ? ((c = js(n, l)), c != null && a.unshift(Es(n, c, i)))
        : o || ((c = js(n, l)), c != null && a.push(Es(n, c, i)))),
      (n = n.return));
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var mm = /\r\n?/g,
  hm = /\u0000|\uFFFD/g;
function oc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      mm,
      `
`,
    )
    .replace(hm, "");
}
function Zs(e, t, n) {
  if (((t = oc(t)), oc(e) !== t && n)) throw Error(de(425));
}
function Mo() {}
var la = null,
  aa = null;
function ia(e, t) {
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
var ca = typeof setTimeout == "function" ? setTimeout : void 0,
  gm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  lc = typeof Promise == "function" ? Promise : void 0,
  xm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof lc < "u"
        ? function (e) {
            return lc.resolve(null).then(e).catch(ym);
          }
        : ca;
function ym(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ml(e, t) {
  var n = t,
    s = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (s === 0) {
          (e.removeChild(o), Ds(t));
          return;
        }
        s--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || s++;
    n = o;
  } while (n);
  Ds(t);
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
function ac(e) {
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
var Hr = Math.random().toString(36).slice(2),
  dn = "__reactFiber$" + Hr,
  Is = "__reactProps$" + Hr,
  bn = "__reactContainer$" + Hr,
  da = "__reactEvents$" + Hr,
  vm = "__reactListeners$" + Hr,
  bm = "__reactHandles$" + Hr;
function Kn(e) {
  var t = e[dn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[bn] || n[dn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ac(e); e !== null; ) {
          if ((n = e[dn])) return n;
          e = ac(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Bs(e) {
  return (
    (e = e[dn] || e[bn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function vr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(de(33));
}
function Ko(e) {
  return e[Is] || null;
}
var ua = [],
  br = -1;
function Vn(e) {
  return { current: e };
}
function Je(e) {
  0 > br || ((e.current = ua[br]), (ua[br] = null), br--);
}
function Qe(e, t) {
  (br++, (ua[br] = e.current), (e.current = t));
}
var Fn = {},
  St = Vn(Fn),
  At = Vn(!1),
  nr = Fn;
function $r(e, t) {
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
function Ot(e) {
  return ((e = e.childContextTypes), e != null);
}
function Eo() {
  (Je(At), Je(St));
}
function ic(e, t, n) {
  if (St.current !== Fn) throw Error(de(168));
  (Qe(St, t), Qe(At, n));
}
function Qd(e, t, n) {
  var s = e.stateNode;
  if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
    return n;
  s = s.getChildContext();
  for (var o in s) if (!(o in t)) throw Error(de(108, sp(e) || "Unknown", o));
  return lt({}, n, s);
}
function Io(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Fn),
    (nr = St.current),
    Qe(St, e),
    Qe(At, At.current),
    !0
  );
}
function cc(e, t, n) {
  var s = e.stateNode;
  if (!s) throw Error(de(169));
  (n
    ? ((e = Qd(e, t, nr)),
      (s.__reactInternalMemoizedMergedChildContext = e),
      Je(At),
      Je(St),
      Qe(St, e))
    : Je(At),
    Qe(At, n));
}
var hn = null,
  Jo = !1,
  El = !1;
function Xd(e) {
  hn === null ? (hn = [e]) : hn.push(e);
}
function wm(e) {
  ((Jo = !0), Xd(e));
}
function qn() {
  if (!El && hn !== null) {
    El = !0;
    var e = 0,
      t = Ye;
    try {
      var n = hn;
      for (Ye = 1; e < n.length; e++) {
        var s = n[e];
        do s = s(!0);
        while (s !== null);
      }
      ((hn = null), (Jo = !1));
    } catch (o) {
      throw (hn !== null && (hn = hn.slice(e + 1)), wd(Fa, qn), o);
    } finally {
      ((Ye = t), (El = !1));
    }
  }
  return null;
}
var wr = [],
  Nr = 0,
  Po = null,
  To = 0,
  qt = [],
  Wt = 0,
  rr = null,
  gn = 1,
  xn = "";
function Qn(e, t) {
  ((wr[Nr++] = To), (wr[Nr++] = Po), (Po = e), (To = t));
}
function Kd(e, t, n) {
  ((qt[Wt++] = gn), (qt[Wt++] = xn), (qt[Wt++] = rr), (rr = e));
  var s = gn;
  e = xn;
  var o = 32 - rn(s) - 1;
  ((s &= ~(1 << o)), (n += 1));
  var l = 32 - rn(t) + o;
  if (30 < l) {
    var a = o - (o % 5);
    ((l = (s & ((1 << a) - 1)).toString(32)),
      (s >>= a),
      (o -= a),
      (gn = (1 << (32 - rn(t) + o)) | (n << o) | s),
      (xn = l + e));
  } else ((gn = (1 << l) | (n << o) | s), (xn = e));
}
function Ja(e) {
  e.return !== null && (Qn(e, 1), Kd(e, 1, 0));
}
function Za(e) {
  for (; e === Po; )
    ((Po = wr[--Nr]), (wr[Nr] = null), (To = wr[--Nr]), (wr[Nr] = null));
  for (; e === rr; )
    ((rr = qt[--Wt]),
      (qt[Wt] = null),
      (xn = qt[--Wt]),
      (qt[Wt] = null),
      (gn = qt[--Wt]),
      (qt[Wt] = null));
}
var zt = null,
  Bt = null,
  nt = !1,
  nn = null;
function Jd(e, t) {
  var n = Yt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function dc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (zt = e), (Bt = On(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (zt = e), (Bt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = rr !== null ? { id: gn, overflow: xn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Yt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (zt = e),
            (Bt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function fa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function pa(e) {
  if (nt) {
    var t = Bt;
    if (t) {
      var n = t;
      if (!dc(e, t)) {
        if (fa(e)) throw Error(de(418));
        t = On(n.nextSibling);
        var s = zt;
        t && dc(e, t)
          ? Jd(s, n)
          : ((e.flags = (e.flags & -4097) | 2), (nt = !1), (zt = e));
      }
    } else {
      if (fa(e)) throw Error(de(418));
      ((e.flags = (e.flags & -4097) | 2), (nt = !1), (zt = e));
    }
  }
}
function uc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  zt = e;
}
function eo(e) {
  if (e !== zt) return !1;
  if (!nt) return (uc(e), (nt = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ia(e.type, e.memoizedProps))),
    t && (t = Bt))
  ) {
    if (fa(e)) throw (Zd(), Error(de(418)));
    for (; t; ) (Jd(e, t), (t = On(t.nextSibling)));
  }
  if ((uc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(de(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Bt = On(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Bt = null;
    }
  } else Bt = zt ? On(e.stateNode.nextSibling) : null;
  return !0;
}
function Zd() {
  for (var e = Bt; e; ) e = On(e.nextSibling);
}
function Ar() {
  ((Bt = zt = null), (nt = !1));
}
function ei(e) {
  nn === null ? (nn = [e]) : nn.push(e);
}
var Nm = jn.ReactCurrentBatchConfig;
function rs(e, t, n) {
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
function to(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      de(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function fc(e) {
  var t = e._init;
  return t(e._payload);
}
function eu(e) {
  function t(f, d) {
    if (e) {
      var y = f.deletions;
      y === null ? ((f.deletions = [d]), (f.flags |= 16)) : y.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) (t(f, d), (d = d.sibling));
    return null;
  }
  function s(f, d) {
    for (f = new Map(); d !== null; )
      (d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling));
    return f;
  }
  function o(f, d) {
    return ((f = Bn(f, d)), (f.index = 0), (f.sibling = null), f);
  }
  function l(f, d, y) {
    return (
      (f.index = y),
      e
        ? ((y = f.alternate),
          y !== null
            ? ((y = y.index), y < d ? ((f.flags |= 2), d) : y)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function a(f) {
    return (e && f.alternate === null && (f.flags |= 2), f);
  }
  function i(f, d, y, v) {
    return d === null || d.tag !== 6
      ? ((d = Ol(y, f.mode, v)), (d.return = f), d)
      : ((d = o(d, y)), (d.return = f), d);
  }
  function c(f, d, y, v) {
    var E = y.type;
    return E === hr
      ? g(f, d, y.props.children, v, y.key)
      : d !== null &&
          (d.elementType === E ||
            (typeof E == "object" &&
              E !== null &&
              E.$$typeof === kn &&
              fc(E) === d.type))
        ? ((v = o(d, y.props)), (v.ref = rs(f, d, y)), (v.return = f), v)
        : ((v = vo(y.type, y.key, y.props, null, f.mode, v)),
          (v.ref = rs(f, d, y)),
          (v.return = f),
          v);
  }
  function h(f, d, y, v) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== y.containerInfo ||
      d.stateNode.implementation !== y.implementation
      ? ((d = Ul(y, f.mode, v)), (d.return = f), d)
      : ((d = o(d, y.children || [])), (d.return = f), d);
  }
  function g(f, d, y, v, E) {
    return d === null || d.tag !== 7
      ? ((d = tr(y, f.mode, v, E)), (d.return = f), d)
      : ((d = o(d, y)), (d.return = f), d);
  }
  function m(f, d, y) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return ((d = Ol("" + d, f.mode, y)), (d.return = f), d);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Hs:
          return (
            (y = vo(d.type, d.key, d.props, null, f.mode, y)),
            (y.ref = rs(f, null, d)),
            (y.return = f),
            y
          );
        case mr:
          return ((d = Ul(d, f.mode, y)), (d.return = f), d);
        case kn:
          var v = d._init;
          return m(f, v(d._payload), y);
      }
      if (is(d) || Jr(d))
        return ((d = tr(d, f.mode, y, null)), (d.return = f), d);
      to(f, d);
    }
    return null;
  }
  function p(f, d, y, v) {
    var E = d !== null ? d.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return E !== null ? null : i(f, d, "" + y, v);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Hs:
          return y.key === E ? c(f, d, y, v) : null;
        case mr:
          return y.key === E ? h(f, d, y, v) : null;
        case kn:
          return ((E = y._init), p(f, d, E(y._payload), v));
      }
      if (is(y) || Jr(y)) return E !== null ? null : g(f, d, y, v, null);
      to(f, y);
    }
    return null;
  }
  function j(f, d, y, v, E) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return ((f = f.get(y) || null), i(d, f, "" + v, E));
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Hs:
          return (
            (f = f.get(v.key === null ? y : v.key) || null),
            c(d, f, v, E)
          );
        case mr:
          return (
            (f = f.get(v.key === null ? y : v.key) || null),
            h(d, f, v, E)
          );
        case kn:
          var S = v._init;
          return j(f, d, y, S(v._payload), E);
      }
      if (is(v) || Jr(v)) return ((f = f.get(y) || null), g(d, f, v, E, null));
      to(d, v);
    }
    return null;
  }
  function b(f, d, y, v) {
    for (
      var E = null, S = null, I = d, F = (d = 0), M = null;
      I !== null && F < y.length;
      F++
    ) {
      I.index > F ? ((M = I), (I = null)) : (M = I.sibling);
      var $ = p(f, I, y[F], v);
      if ($ === null) {
        I === null && (I = M);
        break;
      }
      (e && I && $.alternate === null && t(f, I),
        (d = l($, d, F)),
        S === null ? (E = $) : (S.sibling = $),
        (S = $),
        (I = M));
    }
    if (F === y.length) return (n(f, I), nt && Qn(f, F), E);
    if (I === null) {
      for (; F < y.length; F++)
        ((I = m(f, y[F], v)),
          I !== null &&
            ((d = l(I, d, F)),
            S === null ? (E = I) : (S.sibling = I),
            (S = I)));
      return (nt && Qn(f, F), E);
    }
    for (I = s(f, I); F < y.length; F++)
      ((M = j(I, f, F, y[F], v)),
        M !== null &&
          (e && M.alternate !== null && I.delete(M.key === null ? F : M.key),
          (d = l(M, d, F)),
          S === null ? (E = M) : (S.sibling = M),
          (S = M)));
    return (
      e &&
        I.forEach(function (se) {
          return t(f, se);
        }),
      nt && Qn(f, F),
      E
    );
  }
  function T(f, d, y, v) {
    var E = Jr(y);
    if (typeof E != "function") throw Error(de(150));
    if (((y = E.call(y)), y == null)) throw Error(de(151));
    for (
      var S = (E = null), I = d, F = (d = 0), M = null, $ = y.next();
      I !== null && !$.done;
      F++, $ = y.next()
    ) {
      I.index > F ? ((M = I), (I = null)) : (M = I.sibling);
      var se = p(f, I, $.value, v);
      if (se === null) {
        I === null && (I = M);
        break;
      }
      (e && I && se.alternate === null && t(f, I),
        (d = l(se, d, F)),
        S === null ? (E = se) : (S.sibling = se),
        (S = se),
        (I = M));
    }
    if ($.done) return (n(f, I), nt && Qn(f, F), E);
    if (I === null) {
      for (; !$.done; F++, $ = y.next())
        (($ = m(f, $.value, v)),
          $ !== null &&
            ((d = l($, d, F)),
            S === null ? (E = $) : (S.sibling = $),
            (S = $)));
      return (nt && Qn(f, F), E);
    }
    for (I = s(f, I); !$.done; F++, $ = y.next())
      (($ = j(I, f, F, $.value, v)),
        $ !== null &&
          (e && $.alternate !== null && I.delete($.key === null ? F : $.key),
          (d = l($, d, F)),
          S === null ? (E = $) : (S.sibling = $),
          (S = $)));
    return (
      e &&
        I.forEach(function (ye) {
          return t(f, ye);
        }),
      nt && Qn(f, F),
      E
    );
  }
  function k(f, d, y, v) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === hr &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Hs:
          e: {
            for (var E = y.key, S = d; S !== null; ) {
              if (S.key === E) {
                if (((E = y.type), E === hr)) {
                  if (S.tag === 7) {
                    (n(f, S.sibling),
                      (d = o(S, y.props.children)),
                      (d.return = f),
                      (f = d));
                    break e;
                  }
                } else if (
                  S.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === kn &&
                    fc(E) === S.type)
                ) {
                  (n(f, S.sibling),
                    (d = o(S, y.props)),
                    (d.ref = rs(f, S, y)),
                    (d.return = f),
                    (f = d));
                  break e;
                }
                n(f, S);
                break;
              } else t(f, S);
              S = S.sibling;
            }
            y.type === hr
              ? ((d = tr(y.props.children, f.mode, v, y.key)),
                (d.return = f),
                (f = d))
              : ((v = vo(y.type, y.key, y.props, null, f.mode, v)),
                (v.ref = rs(f, d, y)),
                (v.return = f),
                (f = v));
          }
          return a(f);
        case mr:
          e: {
            for (S = y.key; d !== null; ) {
              if (d.key === S)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === y.containerInfo &&
                  d.stateNode.implementation === y.implementation
                ) {
                  (n(f, d.sibling),
                    (d = o(d, y.children || [])),
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
            ((d = Ul(y, f.mode, v)), (d.return = f), (f = d));
          }
          return a(f);
        case kn:
          return ((S = y._init), k(f, d, S(y._payload), v));
      }
      if (is(y)) return b(f, d, y, v);
      if (Jr(y)) return T(f, d, y, v);
      to(f, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = o(d, y)), (d.return = f), (f = d))
          : (n(f, d), (d = Ol(y, f.mode, v)), (d.return = f), (f = d)),
        a(f))
      : n(f, d);
  }
  return k;
}
var Or = eu(!0),
  tu = eu(!1),
  Ro = Vn(null),
  $o = null,
  jr = null,
  ti = null;
function ni() {
  ti = jr = $o = null;
}
function ri(e) {
  var t = Ro.current;
  (Je(Ro), (e._currentValue = t));
}
function ma(e, t, n) {
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
function Pr(e, t) {
  (($o = e),
    (ti = jr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Tt = !0), (e.firstContext = null)));
}
function Xt(e) {
  var t = e._currentValue;
  if (ti !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), jr === null)) {
      if ($o === null) throw Error(de(308));
      ((jr = e), ($o.dependencies = { lanes: 0, firstContext: e }));
    } else jr = jr.next = e;
  return t;
}
var Jn = null;
function si(e) {
  Jn === null ? (Jn = [e]) : Jn.push(e);
}
function nu(e, t, n, s) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), si(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    wn(e, s)
  );
}
function wn(e, t) {
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
var _n = !1;
function oi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ru(e, t) {
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
  if (((s = s.shared), Ve & 2)) {
    var o = s.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (s.pending = t),
      wn(e, n)
    );
  }
  return (
    (o = s.interleaved),
    o === null ? ((t.next = t), si(s)) : ((t.next = o.next), (o.next = t)),
    (s.interleaved = t),
    wn(e, n)
  );
}
function po(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var s = t.lanes;
    ((s &= e.pendingLanes), (n |= s), (t.lanes = n), Ha(e, n));
  }
}
function pc(e, t) {
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
        (l === null ? (o = l = a) : (l = l.next = a), (n = n.next));
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    ((n = {
      baseState: s.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: s.shared,
      effects: s.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Ao(e, t, n, s) {
  var o = e.updateQueue;
  _n = !1;
  var l = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    i = o.shared.pending;
  if (i !== null) {
    o.shared.pending = null;
    var c = i,
      h = c.next;
    ((c.next = null), a === null ? (l = h) : (a.next = h), (a = c));
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
    ((a = 0), (g = h = c = null), (i = l));
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
            T = i;
          switch (((p = t), (j = n), T.tag)) {
            case 1:
              if (((b = T.payload), typeof b == "function")) {
                m = b.call(j, m, p);
                break e;
              }
              m = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (
                ((b = T.payload),
                (p = typeof b == "function" ? b.call(j, m, p) : b),
                p == null)
              )
                break e;
              m = lt({}, m, p);
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
        ((j = {
          eventTime: j,
          lane: p,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          g === null ? ((h = g = j), (c = m)) : (g = g.next = j),
          (a |= p));
      if (((i = i.next), i === null)) {
        if (((i = o.shared.pending), i === null)) break;
        ((p = i),
          (i = p.next),
          (p.next = null),
          (o.lastBaseUpdate = p),
          (o.shared.pending = null));
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
      do ((a |= o.lane), (o = o.next));
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    ((or |= a), (e.lanes = a), (e.memoizedState = m));
  }
}
function mc(e, t, n) {
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
var zs = {},
  fn = Vn(zs),
  Ps = Vn(zs),
  Ts = Vn(zs);
function Zn(e) {
  if (e === zs) throw Error(de(174));
  return e;
}
function li(e, t) {
  switch ((Qe(Ts, t), Qe(Ps, e), Qe(fn, zs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Yl(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Yl(t, e)));
  }
  (Je(fn), Qe(fn, t));
}
function Ur() {
  (Je(fn), Je(Ps), Je(Ts));
}
function su(e) {
  Zn(Ts.current);
  var t = Zn(fn.current),
    n = Yl(t, e.type);
  t !== n && (Qe(Ps, e), Qe(fn, n));
}
function ai(e) {
  Ps.current === e && (Je(fn), Je(Ps));
}
var st = Vn(0);
function Oo(e) {
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
var Il = [];
function ii() {
  for (var e = 0; e < Il.length; e++)
    Il[e]._workInProgressVersionPrimary = null;
  Il.length = 0;
}
var mo = jn.ReactCurrentDispatcher,
  Pl = jn.ReactCurrentBatchConfig,
  sr = 0,
  ot = null,
  ft = null,
  ht = null,
  Uo = !1,
  gs = !1,
  Rs = 0,
  jm = 0;
function wt() {
  throw Error(de(321));
}
function ci(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!on(e[n], t[n])) return !1;
  return !0;
}
function di(e, t, n, s, o, l) {
  if (
    ((sr = l),
    (ot = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (mo.current = e === null || e.memoizedState === null ? km : _m),
    (e = n(s, o)),
    gs)
  ) {
    l = 0;
    do {
      if (((gs = !1), (Rs = 0), 25 <= l)) throw Error(de(301));
      ((l += 1),
        (ht = ft = null),
        (t.updateQueue = null),
        (mo.current = Mm),
        (e = n(s, o)));
    } while (gs);
  }
  if (
    ((mo.current = Lo),
    (t = ft !== null && ft.next !== null),
    (sr = 0),
    (ht = ft = ot = null),
    (Uo = !1),
    t)
  )
    throw Error(de(300));
  return e;
}
function ui() {
  var e = Rs !== 0;
  return ((Rs = 0), e);
}
function cn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ht === null ? (ot.memoizedState = ht = e) : (ht = ht.next = e), ht);
}
function Kt() {
  if (ft === null) {
    var e = ot.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ft.next;
  var t = ht === null ? ot.memoizedState : ht.next;
  if (t !== null) ((ht = t), (ft = e));
  else {
    if (e === null) throw Error(de(310));
    ((ft = e),
      (e = {
        memoizedState: ft.memoizedState,
        baseState: ft.baseState,
        baseQueue: ft.baseQueue,
        queue: ft.queue,
        next: null,
      }),
      ht === null ? (ot.memoizedState = ht = e) : (ht = ht.next = e));
  }
  return ht;
}
function $s(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Tl(e) {
  var t = Kt(),
    n = t.queue;
  if (n === null) throw Error(de(311));
  n.lastRenderedReducer = e;
  var s = ft,
    o = s.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var a = o.next;
      ((o.next = l.next), (l.next = a));
    }
    ((s.baseQueue = o = l), (n.pending = null));
  }
  if (o !== null) {
    ((l = o.next), (s = s.baseState));
    var i = (a = null),
      c = null,
      h = l;
    do {
      var g = h.lane;
      if ((sr & g) === g)
        (c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
          (s = h.hasEagerState ? h.eagerState : e(s, h.action)));
      else {
        var m = {
          lane: g,
          action: h.action,
          hasEagerState: h.hasEagerState,
          eagerState: h.eagerState,
          next: null,
        };
        (c === null ? ((i = c = m), (a = s)) : (c = c.next = m),
          (ot.lanes |= g),
          (or |= g));
      }
      h = h.next;
    } while (h !== null && h !== l);
    (c === null ? (a = s) : (c.next = i),
      on(s, t.memoizedState) || (Tt = !0),
      (t.memoizedState = s),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = s));
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do ((l = o.lane), (ot.lanes |= l), (or |= l), (o = o.next));
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Rl(e) {
  var t = Kt(),
    n = t.queue;
  if (n === null) throw Error(de(311));
  n.lastRenderedReducer = e;
  var s = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do ((l = e(l, a.action)), (a = a.next));
    while (a !== o);
    (on(l, t.memoizedState) || (Tt = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l));
  }
  return [l, s];
}
function ou() {}
function lu(e, t) {
  var n = ot,
    s = Kt(),
    o = t(),
    l = !on(s.memoizedState, o);
  if (
    (l && ((s.memoizedState = o), (Tt = !0)),
    (s = s.queue),
    fi(cu.bind(null, n, s, e), [e]),
    s.getSnapshot !== t || l || (ht !== null && ht.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      As(9, iu.bind(null, n, s, o, t), void 0, null),
      gt === null)
    )
      throw Error(de(349));
    sr & 30 || au(n, t, o);
  }
  return o;
}
function au(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ot.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ot.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function iu(e, t, n, s) {
  ((t.value = n), (t.getSnapshot = s), du(t) && uu(e));
}
function cu(e, t, n) {
  return n(function () {
    du(t) && uu(e);
  });
}
function du(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !on(e, n);
  } catch {
    return !0;
  }
}
function uu(e) {
  var t = wn(e, 1);
  t !== null && sn(t, e, 1, -1);
}
function hc(e) {
  var t = cn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $s,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Dm.bind(null, ot, e)),
    [t.memoizedState, e]
  );
}
function As(e, t, n, s) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: s, next: null }),
    (t = ot.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ot.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((s = n.next), (n.next = e), (e.next = s), (t.lastEffect = e))),
    e
  );
}
function fu() {
  return Kt().memoizedState;
}
function ho(e, t, n, s) {
  var o = cn();
  ((ot.flags |= e),
    (o.memoizedState = As(1 | t, n, void 0, s === void 0 ? null : s)));
}
function Zo(e, t, n, s) {
  var o = Kt();
  s = s === void 0 ? null : s;
  var l = void 0;
  if (ft !== null) {
    var a = ft.memoizedState;
    if (((l = a.destroy), s !== null && ci(s, a.deps))) {
      o.memoizedState = As(t, n, l, s);
      return;
    }
  }
  ((ot.flags |= e), (o.memoizedState = As(1 | t, n, l, s)));
}
function gc(e, t) {
  return ho(8390656, 8, e, t);
}
function fi(e, t) {
  return Zo(2048, 8, e, t);
}
function pu(e, t) {
  return Zo(4, 2, e, t);
}
function mu(e, t) {
  return Zo(4, 4, e, t);
}
function hu(e, t) {
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
function gu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Zo(4, 4, hu.bind(null, t, e), n)
  );
}
function pi() {}
function xu(e, t) {
  var n = Kt();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && ci(t, s[1])
    ? s[0]
    : ((n.memoizedState = [e, t]), e);
}
function yu(e, t) {
  var n = Kt();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && ci(t, s[1])
    ? s[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function vu(e, t, n) {
  return sr & 21
    ? (on(n, t) || ((n = Sd()), (ot.lanes |= n), (or |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Tt = !0)), (e.memoizedState = n));
}
function Sm(e, t) {
  var n = Ye;
  ((Ye = n !== 0 && 4 > n ? n : 4), e(!0));
  var s = Pl.transition;
  Pl.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((Ye = n), (Pl.transition = s));
  }
}
function bu() {
  return Kt().memoizedState;
}
function Cm(e, t, n) {
  var s = Gn(e);
  if (
    ((n = {
      lane: s,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    wu(e))
  )
    Nu(t, n);
  else if (((n = nu(e, t, n, s)), n !== null)) {
    var o = Dt();
    (sn(n, e, s, o), ju(n, t, s));
  }
}
function Dm(e, t, n) {
  var s = Gn(e),
    o = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (wu(e)) Nu(t, o);
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
          (c === null
            ? ((o.next = o), si(t))
            : ((o.next = c.next), (c.next = o)),
            (t.interleaved = o));
          return;
        }
      } catch {
      } finally {
      }
    ((n = nu(e, t, o, s)),
      n !== null && ((o = Dt()), sn(n, e, s, o), ju(n, t, s)));
  }
}
function wu(e) {
  var t = e.alternate;
  return e === ot || (t !== null && t === ot);
}
function Nu(e, t) {
  gs = Uo = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function ju(e, t, n) {
  if (n & 4194240) {
    var s = t.lanes;
    ((s &= e.pendingLanes), (n |= s), (t.lanes = n), Ha(e, n));
  }
}
var Lo = {
    readContext: Xt,
    useCallback: wt,
    useContext: wt,
    useEffect: wt,
    useImperativeHandle: wt,
    useInsertionEffect: wt,
    useLayoutEffect: wt,
    useMemo: wt,
    useReducer: wt,
    useRef: wt,
    useState: wt,
    useDebugValue: wt,
    useDeferredValue: wt,
    useTransition: wt,
    useMutableSource: wt,
    useSyncExternalStore: wt,
    useId: wt,
    unstable_isNewReconciler: !1,
  },
  km = {
    readContext: Xt,
    useCallback: function (e, t) {
      return ((cn().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Xt,
    useEffect: gc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ho(4194308, 4, hu.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ho(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ho(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = cn();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
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
        (e = e.dispatch = Cm.bind(null, ot, e)),
        [s.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = cn();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: hc,
    useDebugValue: pi,
    useDeferredValue: function (e) {
      return (cn().memoizedState = e);
    },
    useTransition: function () {
      var e = hc(!1),
        t = e[0];
      return ((e = Sm.bind(null, e[1])), (cn().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var s = ot,
        o = cn();
      if (nt) {
        if (n === void 0) throw Error(de(407));
        n = n();
      } else {
        if (((n = t()), gt === null)) throw Error(de(349));
        sr & 30 || au(s, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        gc(cu.bind(null, s, l, e), [e]),
        (s.flags |= 2048),
        As(9, iu.bind(null, s, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = cn(),
        t = gt.identifierPrefix;
      if (nt) {
        var n = xn,
          s = gn;
        ((n = (s & ~(1 << (32 - rn(s) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Rs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = jm++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  _m = {
    readContext: Xt,
    useCallback: xu,
    useContext: Xt,
    useEffect: fi,
    useImperativeHandle: gu,
    useInsertionEffect: pu,
    useLayoutEffect: mu,
    useMemo: yu,
    useReducer: Tl,
    useRef: fu,
    useState: function () {
      return Tl($s);
    },
    useDebugValue: pi,
    useDeferredValue: function (e) {
      var t = Kt();
      return vu(t, ft.memoizedState, e);
    },
    useTransition: function () {
      var e = Tl($s)[0],
        t = Kt().memoizedState;
      return [e, t];
    },
    useMutableSource: ou,
    useSyncExternalStore: lu,
    useId: bu,
    unstable_isNewReconciler: !1,
  },
  Mm = {
    readContext: Xt,
    useCallback: xu,
    useContext: Xt,
    useEffect: fi,
    useImperativeHandle: gu,
    useInsertionEffect: pu,
    useLayoutEffect: mu,
    useMemo: yu,
    useReducer: Rl,
    useRef: fu,
    useState: function () {
      return Rl($s);
    },
    useDebugValue: pi,
    useDeferredValue: function (e) {
      var t = Kt();
      return ft === null ? (t.memoizedState = e) : vu(t, ft.memoizedState, e);
    },
    useTransition: function () {
      var e = Rl($s)[0],
        t = Kt().memoizedState;
      return [e, t];
    },
    useMutableSource: ou,
    useSyncExternalStore: lu,
    useId: bu,
    unstable_isNewReconciler: !1,
  };
function en(e, t) {
  if (e && e.defaultProps) {
    ((t = lt({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ha(e, t, n, s) {
  ((t = e.memoizedState),
    (n = n(s, t)),
    (n = n == null ? t : lt({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var el = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ir(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var s = Dt(),
      o = Gn(e),
      l = yn(s, o);
    ((l.payload = t),
      n != null && (l.callback = n),
      (t = Un(e, l, o)),
      t !== null && (sn(t, e, o, s), po(t, e, o)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var s = Dt(),
      o = Gn(e),
      l = yn(s, o);
    ((l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Un(e, l, o)),
      t !== null && (sn(t, e, o, s), po(t, e, o)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Dt(),
      s = Gn(e),
      o = yn(n, s);
    ((o.tag = 2),
      t != null && (o.callback = t),
      (t = Un(e, o, s)),
      t !== null && (sn(t, e, s, n), po(t, e, s)));
  },
};
function xc(e, t, n, s, o, l, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(s, l, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !_s(n, s) || !_s(o, l)
        : !0
  );
}
function Su(e, t, n) {
  var s = !1,
    o = Fn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Xt(l))
      : ((o = Ot(t) ? nr : St.current),
        (s = t.contextTypes),
        (l = (s = s != null) ? $r(e, o) : Fn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = el),
    (e.stateNode = t),
    (t._reactInternals = e),
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function yc(e, t, n, s) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, s),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, s),
    t.state !== e && el.enqueueReplaceState(t, t.state, null));
}
function ga(e, t, n, s) {
  var o = e.stateNode;
  ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), oi(e));
  var l = t.contextType;
  (typeof l == "object" && l !== null
    ? (o.context = Xt(l))
    : ((l = Ot(t) ? nr : St.current), (o.context = $r(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (ha(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && el.enqueueReplaceState(o, o.state, null),
      Ao(e, n, o, s),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308));
}
function Lr(e, t) {
  try {
    var n = "",
      s = t;
    do ((n += rp(s)), (s = s.return));
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
function $l(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Em = typeof WeakMap == "function" ? WeakMap : Map;
function Cu(e, t, n) {
  ((n = yn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var s = t.value;
  return (
    (n.callback = function () {
      (Bo || ((Bo = !0), (ka = s)), xa(e, t));
    }),
    n
  );
}
function Du(e, t, n) {
  ((n = yn(-1, n)), (n.tag = 3));
  var s = e.type.getDerivedStateFromError;
  if (typeof s == "function") {
    var o = t.value;
    ((n.payload = function () {
      return s(o);
    }),
      (n.callback = function () {
        xa(e, t);
      }));
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        (xa(e, t),
          typeof s != "function" &&
            (Ln === null ? (Ln = new Set([this])) : Ln.add(this)));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function vc(e, t, n) {
  var s = e.pingCache;
  if (s === null) {
    s = e.pingCache = new Em();
    var o = new Set();
    s.set(t, o);
  } else ((o = s.get(t)), o === void 0 && ((o = new Set()), s.set(t, o)));
  o.has(n) || (o.add(n), (e = Hm.bind(null, e, t, n)), t.then(e, e));
}
function bc(e) {
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
function wc(e, t, n, s, o) {
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
var Im = jn.ReactCurrentOwner,
  Tt = !1;
function Ct(e, t, n, s) {
  t.child = e === null ? tu(t, null, n, s) : Or(t, e.child, n, s);
}
function Nc(e, t, n, s, o) {
  n = n.render;
  var l = t.ref;
  return (
    Pr(t, o),
    (s = di(e, t, n, s, l, o)),
    (n = ui()),
    e !== null && !Tt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Nn(e, t, o))
      : (nt && n && Ja(t), (t.flags |= 1), Ct(e, t, s, o), t.child)
  );
}
function jc(e, t, n, s, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !wi(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), ku(e, t, l, s, o))
      : ((e = vo(n.type, null, s, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var a = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : _s), n(a, s) && e.ref === t.ref)
    )
      return Nn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Bn(l, s)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ku(e, t, n, s, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (_s(l, s) && e.ref === t.ref)
      if (((Tt = !1), (t.pendingProps = s = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (Tt = !0);
      else return ((t.lanes = e.lanes), Nn(e, t, o));
  }
  return ya(e, t, n, s, o);
}
function _u(e, t, n) {
  var s = t.pendingProps,
    o = s.children,
    l = e !== null ? e.memoizedState : null;
  if (s.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Qe(Cr, Gt),
        (Gt |= n));
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
          Qe(Cr, Gt),
          (Gt |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (s = l !== null ? l.baseLanes : n),
        Qe(Cr, Gt),
        (Gt |= s));
    }
  else
    (l !== null ? ((s = l.baseLanes | n), (t.memoizedState = null)) : (s = n),
      Qe(Cr, Gt),
      (Gt |= s));
  return (Ct(e, t, o, n), t.child);
}
function Mu(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ya(e, t, n, s, o) {
  var l = Ot(n) ? nr : St.current;
  return (
    (l = $r(t, l)),
    Pr(t, o),
    (n = di(e, t, n, s, l, o)),
    (s = ui()),
    e !== null && !Tt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Nn(e, t, o))
      : (nt && s && Ja(t), (t.flags |= 1), Ct(e, t, n, o), t.child)
  );
}
function Sc(e, t, n, s, o) {
  if (Ot(n)) {
    var l = !0;
    Io(t);
  } else l = !1;
  if ((Pr(t, o), t.stateNode === null))
    (go(e, t), Su(t, n, s), ga(t, n, s, o), (s = !0));
  else if (e === null) {
    var a = t.stateNode,
      i = t.memoizedProps;
    a.props = i;
    var c = a.context,
      h = n.contextType;
    typeof h == "object" && h !== null
      ? (h = Xt(h))
      : ((h = Ot(n) ? nr : St.current), (h = $r(t, h)));
    var g = n.getDerivedStateFromProps,
      m =
        typeof g == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    (m ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== s || c !== h) && yc(t, a, s, h)),
      (_n = !1));
    var p = t.memoizedState;
    ((a.state = p),
      Ao(t, s, a, o),
      (c = t.memoizedState),
      i !== s || p !== c || At.current || _n
        ? (typeof g == "function" && (ha(t, n, g, s), (c = t.memoizedState)),
          (i = _n || xc(t, n, i, s, p, c, h))
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
          (s = !1)));
  } else {
    ((a = t.stateNode),
      ru(e, t),
      (i = t.memoizedProps),
      (h = t.type === t.elementType ? i : en(t.type, i)),
      (a.props = h),
      (m = t.pendingProps),
      (p = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = Xt(c))
        : ((c = Ot(n) ? nr : St.current), (c = $r(t, c))));
    var j = n.getDerivedStateFromProps;
    ((g =
      typeof j == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== m || p !== c) && yc(t, a, s, c)),
      (_n = !1),
      (p = t.memoizedState),
      (a.state = p),
      Ao(t, s, a, o));
    var b = t.memoizedState;
    i !== m || p !== b || At.current || _n
      ? (typeof j == "function" && (ha(t, n, j, s), (b = t.memoizedState)),
        (h = _n || xc(t, n, h, s, p, b, c) || !1)
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
  return va(e, t, n, s, l, o);
}
function va(e, t, n, s, o, l) {
  Mu(e, t);
  var a = (t.flags & 128) !== 0;
  if (!s && !a) return (o && cc(t, n, !1), Nn(e, t, l));
  ((s = t.stateNode), (Im.current = t));
  var i =
    a && typeof n.getDerivedStateFromError != "function" ? null : s.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Or(t, e.child, null, l)), (t.child = Or(t, null, i, l)))
      : Ct(e, t, i, l),
    (t.memoizedState = s.state),
    o && cc(t, n, !0),
    t.child
  );
}
function Eu(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? ic(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ic(e, t.context, !1),
    li(e, t.containerInfo));
}
function Cc(e, t, n, s, o) {
  return (Ar(), ei(o), (t.flags |= 256), Ct(e, t, n, s), t.child);
}
var ba = { dehydrated: null, treeContext: null, retryLane: 0 };
function wa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Iu(e, t, n) {
  var s = t.pendingProps,
    o = st.current,
    l = !1,
    a = (t.flags & 128) !== 0,
    i;
  if (
    ((i = a) ||
      (i = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    i
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Qe(st, o & 1),
    e === null)
  )
    return (
      pa(t),
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
                : (l = rl(a, s, 0, null)),
              (e = tr(e, s, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = wa(n)),
              (t.memoizedState = ba),
              e)
            : mi(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((i = o.dehydrated), i !== null)))
    return Pm(e, t, a, s, i, o, n);
  if (l) {
    ((l = s.fallback), (a = t.mode), (o = e.child), (i = o.sibling));
    var c = { mode: "hidden", children: s.children };
    return (
      !(a & 1) && t.child !== o
        ? ((s = t.child),
          (s.childLanes = 0),
          (s.pendingProps = c),
          (t.deletions = null))
        : ((s = Bn(o, c)), (s.subtreeFlags = o.subtreeFlags & 14680064)),
      i !== null ? (l = Bn(i, l)) : ((l = tr(l, a, n, null)), (l.flags |= 2)),
      (l.return = t),
      (s.return = t),
      (s.sibling = l),
      (t.child = s),
      (s = l),
      (l = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? wa(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (l.memoizedState = a),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = ba),
      s
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (s = Bn(l, { mode: "visible", children: s.children })),
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
function mi(e, t) {
  return (
    (t = rl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function no(e, t, n, s) {
  return (
    s !== null && ei(s),
    Or(t, e.child, null, n),
    (e = mi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Pm(e, t, n, s, o, l, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (s = $l(Error(de(422)))), no(e, t, a, s))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((l = s.fallback),
          (o = t.mode),
          (s = rl({ mode: "visible", children: s.children }, o, 0, null)),
          (l = tr(l, o, a, null)),
          (l.flags |= 2),
          (s.return = t),
          (l.return = t),
          (s.sibling = l),
          (t.child = s),
          t.mode & 1 && Or(t, e.child, null, a),
          (t.child.memoizedState = wa(a)),
          (t.memoizedState = ba),
          l);
  if (!(t.mode & 1)) return no(e, t, a, null);
  if (o.data === "$!") {
    if (((s = o.nextSibling && o.nextSibling.dataset), s)) var i = s.dgst;
    return (
      (s = i),
      (l = Error(de(419))),
      (s = $l(l, s, void 0)),
      no(e, t, a, s)
    );
  }
  if (((i = (a & e.childLanes) !== 0), Tt || i)) {
    if (((s = gt), s !== null)) {
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
      ((o = o & (s.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), wn(e, o), sn(s, e, o, -1)));
    }
    return (bi(), (s = $l(Error(de(421)))), no(e, t, a, s));
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Vm.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Bt = On(o.nextSibling)),
      (zt = t),
      (nt = !0),
      (nn = null),
      e !== null &&
        ((qt[Wt++] = gn),
        (qt[Wt++] = xn),
        (qt[Wt++] = rr),
        (gn = e.id),
        (xn = e.overflow),
        (rr = t)),
      (t = mi(t, s.children)),
      (t.flags |= 4096),
      t);
}
function Dc(e, t, n) {
  e.lanes |= t;
  var s = e.alternate;
  (s !== null && (s.lanes |= t), ma(e.return, t, n));
}
function Al(e, t, n, s, o) {
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
function Pu(e, t, n) {
  var s = t.pendingProps,
    o = s.revealOrder,
    l = s.tail;
  if ((Ct(e, t, s.children, n), (s = st.current), s & 2))
    ((s = (s & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Dc(e, n, t);
        else if (e.tag === 19) Dc(e, n, t);
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
    s &= 1;
  }
  if ((Qe(st, s), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          ((e = n.alternate),
            e !== null && Oo(e) === null && (o = n),
            (n = n.sibling));
        ((n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Al(t, !1, o, n, l));
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Oo(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
        }
        Al(t, !0, n, null, l);
        break;
      case "together":
        Al(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function go(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Nn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (or |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(de(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Bn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Bn(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Tm(e, t, n) {
  switch (t.tag) {
    case 3:
      (Eu(t), Ar());
      break;
    case 5:
      su(t);
      break;
    case 1:
      Ot(t.type) && Io(t);
      break;
    case 4:
      li(t, t.stateNode.containerInfo);
      break;
    case 10:
      var s = t.type._context,
        o = t.memoizedProps.value;
      (Qe(Ro, s._currentValue), (s._currentValue = o));
      break;
    case 13:
      if (((s = t.memoizedState), s !== null))
        return s.dehydrated !== null
          ? (Qe(st, st.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Iu(e, t, n)
            : (Qe(st, st.current & 1),
              (e = Nn(e, t, n)),
              e !== null ? e.sibling : null);
      Qe(st, st.current & 1);
      break;
    case 19:
      if (((s = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (s) return Pu(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Qe(st, st.current),
        s)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), _u(e, t, n));
  }
  return Nn(e, t, n);
}
var Tu, Na, Ru, $u;
Tu = function (e, t) {
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
Na = function () {};
Ru = function (e, t, n, s) {
  var o = e.memoizedProps;
  if (o !== s) {
    ((e = t.stateNode), Zn(fn.current));
    var l = null;
    switch (n) {
      case "input":
        ((o = Hl(e, o)), (s = Hl(e, s)), (l = []));
        break;
      case "select":
        ((o = lt({}, o, { value: void 0 })),
          (s = lt({}, s, { value: void 0 })),
          (l = []));
        break;
      case "textarea":
        ((o = Wl(e, o)), (s = Wl(e, s)), (l = []));
        break;
      default:
        typeof o.onClick != "function" &&
          typeof s.onClick == "function" &&
          (e.onclick = Mo);
    }
    Ql(n, s);
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
            (ws.hasOwnProperty(h)
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
          } else (n || (l || (l = []), l.push(h, n)), (n = c));
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
                (ws.hasOwnProperty(h)
                  ? (c != null && h === "onScroll" && Ke("scroll", e),
                    l || i === c || (l = []))
                  : (l = l || []).push(h, c));
    }
    n && (l = l || []).push("style", n);
    var h = l;
    (t.updateQueue = h) && (t.flags |= 4);
  }
};
$u = function (e, t, n, s) {
  n !== s && (t.flags |= 4);
};
function ss(e, t) {
  if (!nt)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var s = null; n !== null; )
          (n.alternate !== null && (s = n), (n = n.sibling));
        s === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (s.sibling = null);
    }
}
function Nt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    s = 0;
  if (t)
    for (var o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (s |= o.subtreeFlags & 14680064),
        (s |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling));
  else
    for (o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (s |= o.subtreeFlags),
        (s |= o.flags),
        (o.return = e),
        (o = o.sibling));
  return ((e.subtreeFlags |= s), (e.childLanes = n), t);
}
function Rm(e, t, n) {
  var s = t.pendingProps;
  switch ((Za(t), t.tag)) {
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
      return (Nt(t), null);
    case 1:
      return (Ot(t.type) && Eo(), Nt(t), null);
    case 3:
      return (
        (s = t.stateNode),
        Ur(),
        Je(At),
        Je(St),
        ii(),
        s.pendingContext &&
          ((s.context = s.pendingContext), (s.pendingContext = null)),
        (e === null || e.child === null) &&
          (eo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), nn !== null && (Ea(nn), (nn = null)))),
        Na(e, t),
        Nt(t),
        null
      );
    case 5:
      ai(t);
      var o = Zn(Ts.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Ru(e, t, n, s, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!s) {
          if (t.stateNode === null) throw Error(de(166));
          return (Nt(t), null);
        }
        if (((e = Zn(fn.current)), eo(t))) {
          ((s = t.stateNode), (n = t.type));
          var l = t.memoizedProps;
          switch (((s[dn] = t), (s[Is] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (Ke("cancel", s), Ke("close", s));
              break;
            case "iframe":
            case "object":
            case "embed":
              Ke("load", s);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ds.length; o++) Ke(ds[o], s);
              break;
            case "source":
              Ke("error", s);
              break;
            case "img":
            case "image":
            case "link":
              (Ke("error", s), Ke("load", s));
              break;
            case "details":
              Ke("toggle", s);
              break;
            case "input":
              ($i(s, l), Ke("invalid", s));
              break;
            case "select":
              ((s._wrapperState = { wasMultiple: !!l.multiple }),
                Ke("invalid", s));
              break;
            case "textarea":
              (Oi(s, l), Ke("invalid", s));
          }
          (Ql(n, l), (o = null));
          for (var a in l)
            if (l.hasOwnProperty(a)) {
              var i = l[a];
              a === "children"
                ? typeof i == "string"
                  ? s.textContent !== i &&
                    (l.suppressHydrationWarning !== !0 &&
                      Zs(s.textContent, i, e),
                    (o = ["children", i]))
                  : typeof i == "number" &&
                    s.textContent !== "" + i &&
                    (l.suppressHydrationWarning !== !0 &&
                      Zs(s.textContent, i, e),
                    (o = ["children", "" + i]))
                : ws.hasOwnProperty(a) &&
                  i != null &&
                  a === "onScroll" &&
                  Ke("scroll", s);
            }
          switch (n) {
            case "input":
              (Vs(s), Ai(s, l, !0));
              break;
            case "textarea":
              (Vs(s), Ui(s));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (s.onclick = Mo);
          }
          ((s = o), (t.updateQueue = s), s !== null && (t.flags |= 4));
        } else {
          ((a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = cd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
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
            (e[Is] = s),
            Tu(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((a = Xl(n, s)), n)) {
              case "dialog":
                (Ke("cancel", e), Ke("close", e), (o = s));
                break;
              case "iframe":
              case "object":
              case "embed":
                (Ke("load", e), (o = s));
                break;
              case "video":
              case "audio":
                for (o = 0; o < ds.length; o++) Ke(ds[o], e);
                o = s;
                break;
              case "source":
                (Ke("error", e), (o = s));
                break;
              case "img":
              case "image":
              case "link":
                (Ke("error", e), Ke("load", e), (o = s));
                break;
              case "details":
                (Ke("toggle", e), (o = s));
                break;
              case "input":
                ($i(e, s), (o = Hl(e, s)), Ke("invalid", e));
                break;
              case "option":
                o = s;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!s.multiple }),
                  (o = lt({}, s, { value: void 0 })),
                  Ke("invalid", e));
                break;
              case "textarea":
                (Oi(e, s), (o = Wl(e, s)), Ke("invalid", e));
                break;
              default:
                o = s;
            }
            (Ql(n, o), (i = o));
            for (l in i)
              if (i.hasOwnProperty(l)) {
                var c = i[l];
                l === "style"
                  ? fd(e, c)
                  : l === "dangerouslySetInnerHTML"
                    ? ((c = c ? c.__html : void 0), c != null && dd(e, c))
                    : l === "children"
                      ? typeof c == "string"
                        ? (n !== "textarea" || c !== "") && Ns(e, c)
                        : typeof c == "number" && Ns(e, "" + c)
                      : l !== "suppressContentEditableWarning" &&
                        l !== "suppressHydrationWarning" &&
                        l !== "autoFocus" &&
                        (ws.hasOwnProperty(l)
                          ? c != null && l === "onScroll" && Ke("scroll", e)
                          : c != null && Ua(e, l, c, a));
              }
            switch (n) {
              case "input":
                (Vs(e), Ai(e, s, !1));
                break;
              case "textarea":
                (Vs(e), Ui(e));
                break;
              case "option":
                s.value != null && e.setAttribute("value", "" + zn(s.value));
                break;
              case "select":
                ((e.multiple = !!s.multiple),
                  (l = s.value),
                  l != null
                    ? _r(e, !!s.multiple, l, !1)
                    : s.defaultValue != null &&
                      _r(e, !!s.multiple, s.defaultValue, !0));
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Mo);
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
      return (Nt(t), null);
    case 6:
      if (e && t.stateNode != null) $u(e, t, e.memoizedProps, s);
      else {
        if (typeof s != "string" && t.stateNode === null) throw Error(de(166));
        if (((n = Zn(Ts.current)), Zn(fn.current), eo(t))) {
          if (
            ((s = t.stateNode),
            (n = t.memoizedProps),
            (s[dn] = t),
            (l = s.nodeValue !== n) && ((e = zt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Zs(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Zs(s.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          ((s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s)),
            (s[dn] = t),
            (t.stateNode = s));
      }
      return (Nt(t), null);
    case 13:
      if (
        (Je(st),
        (s = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (nt && Bt !== null && t.mode & 1 && !(t.flags & 128))
          (Zd(), Ar(), (t.flags |= 98560), (l = !1));
        else if (((l = eo(t)), s !== null && s.dehydrated !== null)) {
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
            (Ar(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Nt(t), (l = !1));
        } else (nn !== null && (Ea(nn), (nn = null)), (l = !0));
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((s = s !== null),
          s !== (e !== null && e.memoizedState !== null) &&
            s &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || st.current & 1 ? pt === 0 && (pt = 3) : bi())),
          t.updateQueue !== null && (t.flags |= 4),
          Nt(t),
          null);
    case 4:
      return (
        Ur(),
        Na(e, t),
        e === null && Ms(t.stateNode.containerInfo),
        Nt(t),
        null
      );
    case 10:
      return (ri(t.type._context), Nt(t), null);
    case 17:
      return (Ot(t.type) && Eo(), Nt(t), null);
    case 19:
      if ((Je(st), (l = t.memoizedState), l === null)) return (Nt(t), null);
      if (((s = (t.flags & 128) !== 0), (a = l.rendering), a === null))
        if (s) ss(l, !1);
        else {
          if (pt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Oo(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    ss(l, !1),
                    s = a.updateQueue,
                    s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    s = n,
                    n = t.child;
                  n !== null;
                )
                  ((l = n),
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
                    (n = n.sibling));
                return (Qe(st, (st.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          l.tail !== null &&
            dt() > Gr &&
            ((t.flags |= 128), (s = !0), ss(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!s)
          if (((e = Oo(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (s = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ss(l, !0),
              l.tail === null && l.tailMode === "hidden" && !a.alternate && !nt)
            )
              return (Nt(t), null);
          } else
            2 * dt() - l.renderingStartTime > Gr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (s = !0), ss(l, !1), (t.lanes = 4194304));
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
          (l.renderingStartTime = dt()),
          (t.sibling = null),
          (n = st.current),
          Qe(st, s ? (n & 1) | 2 : n & 1),
          t)
        : (Nt(t), null);
    case 22:
    case 23:
      return (
        vi(),
        (s = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
        s && t.mode & 1
          ? Gt & 1073741824 && (Nt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Nt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(de(156, t.tag));
}
function $m(e, t) {
  switch ((Za(t), t.tag)) {
    case 1:
      return (
        Ot(t.type) && Eo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ur(),
        Je(At),
        Je(St),
        ii(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (ai(t), null);
    case 13:
      if (
        (Je(st), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(de(340));
        Ar();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (Je(st), null);
    case 4:
      return (Ur(), null);
    case 10:
      return (ri(t.type._context), null);
    case 22:
    case 23:
      return (vi(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var ro = !1,
  jt = !1,
  Am = typeof WeakSet == "function" ? WeakSet : Set,
  Se = null;
function Sr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (s) {
        at(e, t, s);
      }
    else n.current = null;
}
function ja(e, t, n) {
  try {
    n();
  } catch (s) {
    at(e, t, s);
  }
}
var kc = !1;
function Om(e, t) {
  if (((la = Do), (e = Gd()), Ka(e))) {
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
            (n.nodeType, l.nodeType);
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
              ((p = m), (m = j));
            for (;;) {
              if (m === e) break t;
              if (
                (p === n && ++h === o && (i = a),
                p === l && ++g === s && (c = a),
                (j = m.nextSibling) !== null)
              )
                break;
              ((m = p), (p = m.parentNode));
            }
            m = j;
          }
          n = i === -1 || c === -1 ? null : { start: i, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    aa = { focusedElem: e, selectionRange: n }, Do = !1, Se = t;
    Se !== null;
  )
    if (((t = Se), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (Se = e));
    else
      for (; Se !== null; ) {
        t = Se;
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
                  var T = b.memoizedProps,
                    k = b.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? T : en(t.type, T),
                      k,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
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
                throw Error(de(163));
            }
        } catch (v) {
          at(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (Se = e));
          break;
        }
        Se = t.return;
      }
  return ((b = kc), (kc = !1), b);
}
function xs(e, t, n) {
  var s = t.updateQueue;
  if (((s = s !== null ? s.lastEffect : null), s !== null)) {
    var o = (s = s.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        ((o.destroy = void 0), l !== void 0 && ja(t, n, l));
      }
      o = o.next;
    } while (o !== s);
  }
}
function tl(e, t) {
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
function Sa(e) {
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
function Au(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Au(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[dn], delete t[Is], delete t[da], delete t[vm], delete t[bm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Ou(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _c(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ou(e.return)) return null;
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
function Ca(e, t, n) {
  var s = e.tag;
  if (s === 5 || s === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Mo)));
  else if (s !== 4 && ((e = e.child), e !== null))
    for (Ca(e, t, n), e = e.sibling; e !== null; )
      (Ca(e, t, n), (e = e.sibling));
}
function Da(e, t, n) {
  var s = e.tag;
  if (s === 5 || s === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (s !== 4 && ((e = e.child), e !== null))
    for (Da(e, t, n), e = e.sibling; e !== null; )
      (Da(e, t, n), (e = e.sibling));
}
var yt = null,
  tn = !1;
function Dn(e, t, n) {
  for (n = n.child; n !== null; ) (Uu(e, t, n), (n = n.sibling));
}
function Uu(e, t, n) {
  if (un && typeof un.onCommitFiberUnmount == "function")
    try {
      un.onCommitFiberUnmount(Wo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      jt || Sr(n, t);
    case 6:
      var s = yt,
        o = tn;
      ((yt = null),
        Dn(e, t, n),
        (yt = s),
        (tn = o),
        yt !== null &&
          (tn
            ? ((e = yt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : yt.removeChild(n.stateNode)));
      break;
    case 18:
      yt !== null &&
        (tn
          ? ((e = yt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ml(e.parentNode, n)
              : e.nodeType === 1 && Ml(e, n),
            Ds(e))
          : Ml(yt, n.stateNode));
      break;
    case 4:
      ((s = yt),
        (o = tn),
        (yt = n.stateNode.containerInfo),
        (tn = !0),
        Dn(e, t, n),
        (yt = s),
        (tn = o));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !jt &&
        ((s = n.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
      ) {
        o = s = s.next;
        do {
          var l = o,
            a = l.destroy;
          ((l = l.tag),
            a !== void 0 && (l & 2 || l & 4) && ja(n, t, a),
            (o = o.next));
        } while (o !== s);
      }
      Dn(e, t, n);
      break;
    case 1:
      if (
        !jt &&
        (Sr(n, t),
        (s = n.stateNode),
        typeof s.componentWillUnmount == "function")
      )
        try {
          ((s.props = n.memoizedProps),
            (s.state = n.memoizedState),
            s.componentWillUnmount());
        } catch (i) {
          at(n, t, i);
        }
      Dn(e, t, n);
      break;
    case 21:
      Dn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((jt = (s = jt) || n.memoizedState !== null), Dn(e, t, n), (jt = s))
        : Dn(e, t, n);
      break;
    default:
      Dn(e, t, n);
  }
}
function Mc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Am()),
      t.forEach(function (s) {
        var o = qm.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(o, o));
      }));
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
              ((yt = i.stateNode), (tn = !1));
              break e;
            case 3:
              ((yt = i.stateNode.containerInfo), (tn = !0));
              break e;
            case 4:
              ((yt = i.stateNode.containerInfo), (tn = !0));
              break e;
          }
          i = i.return;
        }
        if (yt === null) throw Error(de(160));
        (Uu(l, a, o), (yt = null), (tn = !1));
        var c = o.alternate;
        (c !== null && (c.return = null), (o.return = null));
      } catch (h) {
        at(o, t, h);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Lu(t, e), (t = t.sibling));
}
function Lu(e, t) {
  var n = e.alternate,
    s = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Zt(t, e), ln(e), s & 4)) {
        try {
          (xs(3, e, e.return), tl(3, e));
        } catch (T) {
          at(e, e.return, T);
        }
        try {
          xs(5, e, e.return);
        } catch (T) {
          at(e, e.return, T);
        }
      }
      break;
    case 1:
      (Zt(t, e), ln(e), s & 512 && n !== null && Sr(n, n.return));
      break;
    case 5:
      if (
        (Zt(t, e),
        ln(e),
        s & 512 && n !== null && Sr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Ns(o, "");
        } catch (T) {
          at(e, e.return, T);
        }
      }
      if (s & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          a = n !== null ? n.memoizedProps : l,
          i = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            (i === "input" && l.type === "radio" && l.name != null && ad(o, l),
              Xl(i, a));
            var h = Xl(i, l);
            for (a = 0; a < c.length; a += 2) {
              var g = c[a],
                m = c[a + 1];
              g === "style"
                ? fd(o, m)
                : g === "dangerouslySetInnerHTML"
                  ? dd(o, m)
                  : g === "children"
                    ? Ns(o, m)
                    : Ua(o, g, m, h);
            }
            switch (i) {
              case "input":
                Vl(o, l);
                break;
              case "textarea":
                id(o, l);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var j = l.value;
                j != null
                  ? _r(o, !!l.multiple, j, !1)
                  : p !== !!l.multiple &&
                    (l.defaultValue != null
                      ? _r(o, !!l.multiple, l.defaultValue, !0)
                      : _r(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[Is] = l;
          } catch (T) {
            at(e, e.return, T);
          }
      }
      break;
    case 6:
      if ((Zt(t, e), ln(e), s & 4)) {
        if (e.stateNode === null) throw Error(de(162));
        ((o = e.stateNode), (l = e.memoizedProps));
        try {
          o.nodeValue = l;
        } catch (T) {
          at(e, e.return, T);
        }
      }
      break;
    case 3:
      if (
        (Zt(t, e), ln(e), s & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ds(t.containerInfo);
        } catch (T) {
          at(e, e.return, T);
        }
      break;
    case 4:
      (Zt(t, e), ln(e));
      break;
    case 13:
      (Zt(t, e),
        ln(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (xi = dt())),
        s & 4 && Mc(e));
      break;
    case 22:
      if (
        ((g = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((jt = (h = jt) || g), Zt(t, e), (jt = h)) : Zt(t, e),
        ln(e),
        s & 8192)
      ) {
        if (
          ((h = e.memoizedState !== null),
          (e.stateNode.isHidden = h) && !g && e.mode & 1)
        )
          for (Se = e, g = e.child; g !== null; ) {
            for (m = Se = g; Se !== null; ) {
              switch (((p = Se), (j = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  xs(4, p, p.return);
                  break;
                case 1:
                  Sr(p, p.return);
                  var b = p.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    ((s = p), (n = p.return));
                    try {
                      ((t = s),
                        (b.props = t.memoizedProps),
                        (b.state = t.memoizedState),
                        b.componentWillUnmount());
                    } catch (T) {
                      at(s, n, T);
                    }
                  }
                  break;
                case 5:
                  Sr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Ic(m);
                    continue;
                  }
              }
              j !== null ? ((j.return = p), (Se = j)) : Ic(m);
            }
            g = g.sibling;
          }
        e: for (g = null, m = e; ; ) {
          if (m.tag === 5) {
            if (g === null) {
              g = m;
              try {
                ((o = m.stateNode),
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
                      (i.style.display = ud("display", a))));
              } catch (T) {
                at(e, e.return, T);
              }
            }
          } else if (m.tag === 6) {
            if (g === null)
              try {
                m.stateNode.nodeValue = h ? "" : m.memoizedProps;
              } catch (T) {
                at(e, e.return, T);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            ((m.child.return = m), (m = m.child));
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            (g === m && (g = null), (m = m.return));
          }
          (g === m && (g = null),
            (m.sibling.return = m.return),
            (m = m.sibling));
        }
      }
      break;
    case 19:
      (Zt(t, e), ln(e), s & 4 && Mc(e));
      break;
    case 21:
      break;
    default:
      (Zt(t, e), ln(e));
  }
}
function ln(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ou(n)) {
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
          s.flags & 32 && (Ns(o, ""), (s.flags &= -33));
          var l = _c(e);
          Da(e, l, o);
          break;
        case 3:
        case 4:
          var a = s.stateNode.containerInfo,
            i = _c(e);
          Ca(e, i, a);
          break;
        default:
          throw Error(de(161));
      }
    } catch (c) {
      at(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Um(e, t, n) {
  ((Se = e), Gu(e));
}
function Gu(e, t, n) {
  for (var s = (e.mode & 1) !== 0; Se !== null; ) {
    var o = Se,
      l = o.child;
    if (o.tag === 22 && s) {
      var a = o.memoizedState !== null || ro;
      if (!a) {
        var i = o.alternate,
          c = (i !== null && i.memoizedState !== null) || jt;
        i = ro;
        var h = jt;
        if (((ro = a), (jt = c) && !h))
          for (Se = o; Se !== null; )
            ((a = Se),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Pc(o)
                : c !== null
                  ? ((c.return = a), (Se = c))
                  : Pc(o));
        for (; l !== null; ) ((Se = l), Gu(l), (l = l.sibling));
        ((Se = o), (ro = i), (jt = h));
      }
      Ec(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (Se = l)) : Ec(e);
  }
}
function Ec(e) {
  for (; Se !== null; ) {
    var t = Se;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              jt || tl(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !jt)
                if (n === null) s.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : en(t.type, n.memoizedProps);
                  s.componentDidUpdate(
                    o,
                    n.memoizedState,
                    s.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var l = t.updateQueue;
              l !== null && mc(t, l, s);
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
                mc(t, a, n);
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
                    m !== null && Ds(m);
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
        jt || (t.flags & 512 && Sa(t));
      } catch (p) {
        at(t, t.return, p);
      }
    }
    if (t === e) {
      Se = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (Se = n));
      break;
    }
    Se = t.return;
  }
}
function Ic(e) {
  for (; Se !== null; ) {
    var t = Se;
    if (t === e) {
      Se = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (Se = n));
      break;
    }
    Se = t.return;
  }
}
function Pc(e) {
  for (; Se !== null; ) {
    var t = Se;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            tl(4, t);
          } catch (c) {
            at(t, n, c);
          }
          break;
        case 1:
          var s = t.stateNode;
          if (typeof s.componentDidMount == "function") {
            var o = t.return;
            try {
              s.componentDidMount();
            } catch (c) {
              at(t, o, c);
            }
          }
          var l = t.return;
          try {
            Sa(t);
          } catch (c) {
            at(t, l, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Sa(t);
          } catch (c) {
            at(t, a, c);
          }
      }
    } catch (c) {
      at(t, t.return, c);
    }
    if (t === e) {
      Se = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      ((i.return = t.return), (Se = i));
      break;
    }
    Se = t.return;
  }
}
var Lm = Math.ceil,
  Go = jn.ReactCurrentDispatcher,
  hi = jn.ReactCurrentOwner,
  Qt = jn.ReactCurrentBatchConfig,
  Ve = 0,
  gt = null,
  ut = null,
  vt = 0,
  Gt = 0,
  Cr = Vn(0),
  pt = 0,
  Os = null,
  or = 0,
  nl = 0,
  gi = 0,
  ys = null,
  Pt = null,
  xi = 0,
  Gr = 1 / 0,
  mn = null,
  Bo = !1,
  ka = null,
  Ln = null,
  so = !1,
  Pn = null,
  zo = 0,
  vs = 0,
  _a = null,
  xo = -1,
  yo = 0;
function Dt() {
  return Ve & 6 ? dt() : xo !== -1 ? xo : (xo = dt());
}
function Gn(e) {
  return e.mode & 1
    ? Ve & 2 && vt !== 0
      ? vt & -vt
      : Nm.transition !== null
        ? (yo === 0 && (yo = Sd()), yo)
        : ((e = Ye),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Id(e.type))),
          e)
    : 1;
}
function sn(e, t, n, s) {
  if (50 < vs) throw ((vs = 0), (_a = null), Error(de(185)));
  (Ls(e, n, s),
    (!(Ve & 2) || e !== gt) &&
      (e === gt && (!(Ve & 2) && (nl |= n), pt === 4 && En(e, vt)),
      Ut(e, s),
      n === 1 && Ve === 0 && !(t.mode & 1) && ((Gr = dt() + 500), Jo && qn())));
}
function Ut(e, t) {
  var n = e.callbackNode;
  Np(e, t);
  var s = Co(e, e === gt ? vt : 0);
  if (s === 0)
    (n !== null && Bi(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = s & -s), e.callbackPriority !== t)) {
    if ((n != null && Bi(n), t === 1))
      (e.tag === 0 ? wm(Tc.bind(null, e)) : Xd(Tc.bind(null, e)),
        xm(function () {
          !(Ve & 6) && qn();
        }),
        (n = null));
    else {
      switch (Cd(s)) {
        case 1:
          n = Fa;
          break;
        case 4:
          n = Nd;
          break;
        case 16:
          n = So;
          break;
        case 536870912:
          n = jd;
          break;
        default:
          n = So;
      }
      n = Yu(n, Bu.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Bu(e, t) {
  if (((xo = -1), (yo = 0), Ve & 6)) throw Error(de(327));
  var n = e.callbackNode;
  if (Tr() && e.callbackNode !== n) return null;
  var s = Co(e, e === gt ? vt : 0);
  if (s === 0) return null;
  if (s & 30 || s & e.expiredLanes || t) t = Fo(e, s);
  else {
    t = s;
    var o = Ve;
    Ve |= 2;
    var l = Fu();
    (gt !== e || vt !== t) && ((mn = null), (Gr = dt() + 500), er(e, t));
    do
      try {
        zm();
        break;
      } catch (i) {
        zu(e, i);
      }
    while (!0);
    (ni(),
      (Go.current = l),
      (Ve = o),
      ut !== null ? (t = 0) : ((gt = null), (vt = 0), (t = pt)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ta(e)), o !== 0 && ((s = o), (t = Ma(e, o)))), t === 1)
    )
      throw ((n = Os), er(e, 0), En(e, s), Ut(e, dt()), n);
    if (t === 6) En(e, s);
    else {
      if (
        ((o = e.current.alternate),
        !(s & 30) &&
          !Gm(o) &&
          ((t = Fo(e, s)),
          t === 2 && ((l = ta(e)), l !== 0 && ((s = l), (t = Ma(e, l)))),
          t === 1))
      )
        throw ((n = Os), er(e, 0), En(e, s), Ut(e, dt()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = s), t)) {
        case 0:
        case 1:
          throw Error(de(345));
        case 2:
          Xn(e, Pt, mn);
          break;
        case 3:
          if (
            (En(e, s), (s & 130023424) === s && ((t = xi + 500 - dt()), 10 < t))
          ) {
            if (Co(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & s) !== s)) {
              (Dt(), (e.pingedLanes |= e.suspendedLanes & o));
              break;
            }
            e.timeoutHandle = ca(Xn.bind(null, e, Pt, mn), t);
            break;
          }
          Xn(e, Pt, mn);
          break;
        case 4:
          if ((En(e, s), (s & 4194240) === s)) break;
          for (t = e.eventTimes, o = -1; 0 < s; ) {
            var a = 31 - rn(s);
            ((l = 1 << a), (a = t[a]), a > o && (o = a), (s &= ~l));
          }
          if (
            ((s = o),
            (s = dt() - s),
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
                          : 1960 * Lm(s / 1960)) - s),
            10 < s)
          ) {
            e.timeoutHandle = ca(Xn.bind(null, e, Pt, mn), s);
            break;
          }
          Xn(e, Pt, mn);
          break;
        case 5:
          Xn(e, Pt, mn);
          break;
        default:
          throw Error(de(329));
      }
    }
  }
  return (Ut(e, dt()), e.callbackNode === n ? Bu.bind(null, e) : null);
}
function Ma(e, t) {
  var n = ys;
  return (
    e.current.memoizedState.isDehydrated && (er(e, t).flags |= 256),
    (e = Fo(e, t)),
    e !== 2 && ((t = Pt), (Pt = n), t !== null && Ea(t)),
    e
  );
}
function Ea(e) {
  Pt === null ? (Pt = e) : Pt.push.apply(Pt, e);
}
function Gm(e) {
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
function En(e, t) {
  for (
    t &= ~gi,
      t &= ~nl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - rn(t),
      s = 1 << n;
    ((e[n] = -1), (t &= ~s));
  }
}
function Tc(e) {
  if (Ve & 6) throw Error(de(327));
  Tr();
  var t = Co(e, 0);
  if (!(t & 1)) return (Ut(e, dt()), null);
  var n = Fo(e, t);
  if (e.tag !== 0 && n === 2) {
    var s = ta(e);
    s !== 0 && ((t = s), (n = Ma(e, s)));
  }
  if (n === 1) throw ((n = Os), er(e, 0), En(e, t), Ut(e, dt()), n);
  if (n === 6) throw Error(de(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Xn(e, Pt, mn),
    Ut(e, dt()),
    null
  );
}
function yi(e, t) {
  var n = Ve;
  Ve |= 1;
  try {
    return e(t);
  } finally {
    ((Ve = n), Ve === 0 && ((Gr = dt() + 500), Jo && qn()));
  }
}
function lr(e) {
  Pn !== null && Pn.tag === 0 && !(Ve & 6) && Tr();
  var t = Ve;
  Ve |= 1;
  var n = Qt.transition,
    s = Ye;
  try {
    if (((Qt.transition = null), (Ye = 1), e)) return e();
  } finally {
    ((Ye = s), (Qt.transition = n), (Ve = t), !(Ve & 6) && qn());
  }
}
function vi() {
  ((Gt = Cr.current), Je(Cr));
}
function er(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), gm(n)), ut !== null))
    for (n = ut.return; n !== null; ) {
      var s = n;
      switch ((Za(s), s.tag)) {
        case 1:
          ((s = s.type.childContextTypes), s != null && Eo());
          break;
        case 3:
          (Ur(), Je(At), Je(St), ii());
          break;
        case 5:
          ai(s);
          break;
        case 4:
          Ur();
          break;
        case 13:
          Je(st);
          break;
        case 19:
          Je(st);
          break;
        case 10:
          ri(s.type._context);
          break;
        case 22:
        case 23:
          vi();
      }
      n = n.return;
    }
  if (
    ((gt = e),
    (ut = e = Bn(e.current, null)),
    (vt = Gt = t),
    (pt = 0),
    (Os = null),
    (gi = nl = or = 0),
    (Pt = ys = null),
    Jn !== null)
  ) {
    for (t = 0; t < Jn.length; t++)
      if (((n = Jn[t]), (s = n.interleaved), s !== null)) {
        n.interleaved = null;
        var o = s.next,
          l = n.pending;
        if (l !== null) {
          var a = l.next;
          ((l.next = o), (s.next = a));
        }
        n.pending = s;
      }
    Jn = null;
  }
  return e;
}
function zu(e, t) {
  do {
    var n = ut;
    try {
      if ((ni(), (mo.current = Lo), Uo)) {
        for (var s = ot.memoizedState; s !== null; ) {
          var o = s.queue;
          (o !== null && (o.pending = null), (s = s.next));
        }
        Uo = !1;
      }
      if (
        ((sr = 0),
        (ht = ft = ot = null),
        (gs = !1),
        (Rs = 0),
        (hi.current = null),
        n === null || n.return === null)
      ) {
        ((pt = 1), (Os = t), (ut = null));
        break;
      }
      e: {
        var l = e,
          a = n.return,
          i = n,
          c = t;
        if (
          ((t = vt),
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
          var j = bc(a);
          if (j !== null) {
            ((j.flags &= -257),
              wc(j, a, i, l, t),
              j.mode & 1 && vc(l, h, t),
              (t = j),
              (c = h));
            var b = t.updateQueue;
            if (b === null) {
              var T = new Set();
              (T.add(c), (t.updateQueue = T));
            } else b.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              (vc(l, h, t), bi());
              break e;
            }
            c = Error(de(426));
          }
        } else if (nt && i.mode & 1) {
          var k = bc(a);
          if (k !== null) {
            (!(k.flags & 65536) && (k.flags |= 256),
              wc(k, a, i, l, t),
              ei(Lr(c, i)));
            break e;
          }
        }
        ((l = c = Lr(c, i)),
          pt !== 4 && (pt = 2),
          ys === null ? (ys = [l]) : ys.push(l),
          (l = a));
        do {
          switch (l.tag) {
            case 3:
              ((l.flags |= 65536), (t &= -t), (l.lanes |= t));
              var f = Cu(l, c, t);
              pc(l, f);
              break e;
            case 1:
              i = c;
              var d = l.type,
                y = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Ln === null || !Ln.has(y))))
              ) {
                ((l.flags |= 65536), (t &= -t), (l.lanes |= t));
                var v = Du(l, i, t);
                pc(l, v);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Vu(n);
    } catch (E) {
      ((t = E), ut === n && n !== null && (ut = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Fu() {
  var e = Go.current;
  return ((Go.current = Lo), e === null ? Lo : e);
}
function bi() {
  ((pt === 0 || pt === 3 || pt === 2) && (pt = 4),
    gt === null || (!(or & 268435455) && !(nl & 268435455)) || En(gt, vt));
}
function Fo(e, t) {
  var n = Ve;
  Ve |= 2;
  var s = Fu();
  (gt !== e || vt !== t) && ((mn = null), er(e, t));
  do
    try {
      Bm();
      break;
    } catch (o) {
      zu(e, o);
    }
  while (!0);
  if ((ni(), (Ve = n), (Go.current = s), ut !== null)) throw Error(de(261));
  return ((gt = null), (vt = 0), pt);
}
function Bm() {
  for (; ut !== null; ) Hu(ut);
}
function zm() {
  for (; ut !== null && !pp(); ) Hu(ut);
}
function Hu(e) {
  var t = Wu(e.alternate, e, Gt);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Vu(e) : (ut = t),
    (hi.current = null));
}
function Vu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = $m(n, t)), n !== null)) {
        ((n.flags &= 32767), (ut = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((pt = 6), (ut = null));
        return;
      }
    } else if (((n = Rm(n, t, Gt)), n !== null)) {
      ut = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ut = t;
      return;
    }
    ut = t = e;
  } while (t !== null);
  pt === 0 && (pt = 5);
}
function Xn(e, t, n) {
  var s = Ye,
    o = Qt.transition;
  try {
    ((Qt.transition = null), (Ye = 1), Fm(e, t, n, s));
  } finally {
    ((Qt.transition = o), (Ye = s));
  }
  return null;
}
function Fm(e, t, n, s) {
  do Tr();
  while (Pn !== null);
  if (Ve & 6) throw Error(de(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(de(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var l = n.lanes | n.childLanes;
  if (
    (jp(e, l),
    e === gt && ((ut = gt = null), (vt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      so ||
      ((so = !0),
      Yu(So, function () {
        return (Tr(), null);
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    ((l = Qt.transition), (Qt.transition = null));
    var a = Ye;
    Ye = 1;
    var i = Ve;
    ((Ve |= 4),
      (hi.current = null),
      Om(e, n),
      Lu(n, e),
      cm(aa),
      (Do = !!la),
      (aa = la = null),
      (e.current = n),
      Um(n),
      mp(),
      (Ve = i),
      (Ye = a),
      (Qt.transition = l));
  } else e.current = n;
  if (
    (so && ((so = !1), (Pn = e), (zo = o)),
    (l = e.pendingLanes),
    l === 0 && (Ln = null),
    xp(n.stateNode),
    Ut(e, dt()),
    t !== null)
  )
    for (s = e.onRecoverableError, n = 0; n < t.length; n++)
      ((o = t[n]), s(o.value, { componentStack: o.stack, digest: o.digest }));
  if (Bo) throw ((Bo = !1), (e = ka), (ka = null), e);
  return (
    zo & 1 && e.tag !== 0 && Tr(),
    (l = e.pendingLanes),
    l & 1 ? (e === _a ? vs++ : ((vs = 0), (_a = e))) : (vs = 0),
    qn(),
    null
  );
}
function Tr() {
  if (Pn !== null) {
    var e = Cd(zo),
      t = Qt.transition,
      n = Ye;
    try {
      if (((Qt.transition = null), (Ye = 16 > e ? 16 : e), Pn === null))
        var s = !1;
      else {
        if (((e = Pn), (Pn = null), (zo = 0), Ve & 6)) throw Error(de(331));
        var o = Ve;
        for (Ve |= 4, Se = e.current; Se !== null; ) {
          var l = Se,
            a = l.child;
          if (Se.flags & 16) {
            var i = l.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var h = i[c];
                for (Se = h; Se !== null; ) {
                  var g = Se;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xs(8, g, l);
                  }
                  var m = g.child;
                  if (m !== null) ((m.return = g), (Se = m));
                  else
                    for (; Se !== null; ) {
                      g = Se;
                      var p = g.sibling,
                        j = g.return;
                      if ((Au(g), g === h)) {
                        Se = null;
                        break;
                      }
                      if (p !== null) {
                        ((p.return = j), (Se = p));
                        break;
                      }
                      Se = j;
                    }
                }
              }
              var b = l.alternate;
              if (b !== null) {
                var T = b.child;
                if (T !== null) {
                  b.child = null;
                  do {
                    var k = T.sibling;
                    ((T.sibling = null), (T = k));
                  } while (T !== null);
                }
              }
              Se = l;
            }
          }
          if (l.subtreeFlags & 2064 && a !== null) ((a.return = l), (Se = a));
          else
            e: for (; Se !== null; ) {
              if (((l = Se), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xs(9, l, l.return);
                }
              var f = l.sibling;
              if (f !== null) {
                ((f.return = l.return), (Se = f));
                break e;
              }
              Se = l.return;
            }
        }
        var d = e.current;
        for (Se = d; Se !== null; ) {
          a = Se;
          var y = a.child;
          if (a.subtreeFlags & 2064 && y !== null) ((y.return = a), (Se = y));
          else
            e: for (a = d; Se !== null; ) {
              if (((i = Se), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      tl(9, i);
                  }
                } catch (E) {
                  at(i, i.return, E);
                }
              if (i === a) {
                Se = null;
                break e;
              }
              var v = i.sibling;
              if (v !== null) {
                ((v.return = i.return), (Se = v));
                break e;
              }
              Se = i.return;
            }
        }
        if (
          ((Ve = o), qn(), un && typeof un.onPostCommitFiberRoot == "function")
        )
          try {
            un.onPostCommitFiberRoot(Wo, e);
          } catch {}
        s = !0;
      }
      return s;
    } finally {
      ((Ye = n), (Qt.transition = t));
    }
  }
  return !1;
}
function Rc(e, t, n) {
  ((t = Lr(n, t)),
    (t = Cu(e, t, 1)),
    (e = Un(e, t, 1)),
    (t = Dt()),
    e !== null && (Ls(e, 1, t), Ut(e, t)));
}
function at(e, t, n) {
  if (e.tag === 3) Rc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Rc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof s.componentDidCatch == "function" &&
            (Ln === null || !Ln.has(s)))
        ) {
          ((e = Lr(n, e)),
            (e = Du(t, e, 1)),
            (t = Un(t, e, 1)),
            (e = Dt()),
            t !== null && (Ls(t, 1, e), Ut(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Hm(e, t, n) {
  var s = e.pingCache;
  (s !== null && s.delete(t),
    (t = Dt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    gt === e &&
      (vt & n) === n &&
      (pt === 4 || (pt === 3 && (vt & 130023424) === vt && 500 > dt() - xi)
        ? er(e, 0)
        : (gi |= n)),
    Ut(e, t));
}
function qu(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ys), (Ys <<= 1), !(Ys & 130023424) && (Ys = 4194304))
      : (t = 1));
  var n = Dt();
  ((e = wn(e, t)), e !== null && (Ls(e, t, n), Ut(e, n)));
}
function Vm(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), qu(e, n));
}
function qm(e, t) {
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
  (s !== null && s.delete(t), qu(e, n));
}
var Wu;
Wu = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || At.current) Tt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Tt = !1), Tm(e, t, n));
      Tt = !!(e.flags & 131072);
    }
  else ((Tt = !1), nt && t.flags & 1048576 && Kd(t, To, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var s = t.type;
      (go(e, t), (e = t.pendingProps));
      var o = $r(t, St.current);
      (Pr(t, n), (o = di(null, t, s, e, o, n)));
      var l = ui();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ot(s) ? ((l = !0), Io(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            oi(t),
            (o.updater = el),
            (t.stateNode = o),
            (o._reactInternals = t),
            ga(t, s, e, n),
            (t = va(null, t, s, !0, l, n)))
          : ((t.tag = 0), nt && l && Ja(t), Ct(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      s = t.elementType;
      e: {
        switch (
          (go(e, t),
          (e = t.pendingProps),
          (o = s._init),
          (s = o(s._payload)),
          (t.type = s),
          (o = t.tag = Ym(s)),
          (e = en(s, e)),
          o)
        ) {
          case 0:
            t = ya(null, t, s, e, n);
            break e;
          case 1:
            t = Sc(null, t, s, e, n);
            break e;
          case 11:
            t = Nc(null, t, s, e, n);
            break e;
          case 14:
            t = jc(null, t, s, en(s.type, e), n);
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
        ya(e, t, s, o, n)
      );
    case 1:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : en(s, o)),
        Sc(e, t, s, o, n)
      );
    case 3:
      e: {
        if ((Eu(t), e === null)) throw Error(de(387));
        ((s = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          ru(e, t),
          Ao(t, s, null, n));
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
            ((o = Lr(Error(de(423)), t)), (t = Cc(e, t, s, n, o)));
            break e;
          } else if (s !== o) {
            ((o = Lr(Error(de(424)), t)), (t = Cc(e, t, s, n, o)));
            break e;
          } else
            for (
              Bt = On(t.stateNode.containerInfo.firstChild),
                zt = t,
                nt = !0,
                nn = null,
                n = tu(t, null, s, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Ar(), s === o)) {
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
        su(t),
        e === null && pa(t),
        (s = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (a = o.children),
        ia(s, o) ? (a = null) : l !== null && ia(s, l) && (t.flags |= 32),
        Mu(e, t),
        Ct(e, t, a, n),
        t.child
      );
    case 6:
      return (e === null && pa(t), null);
    case 13:
      return Iu(e, t, n);
    case 4:
      return (
        li(t, t.stateNode.containerInfo),
        (s = t.pendingProps),
        e === null ? (t.child = Or(t, null, s, n)) : Ct(e, t, s, n),
        t.child
      );
    case 11:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : en(s, o)),
        Nc(e, t, s, o, n)
      );
    case 7:
      return (Ct(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Ct(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Ct(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((s = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (a = o.value),
          Qe(Ro, s._currentValue),
          (s._currentValue = a),
          l !== null)
        )
          if (on(l.value, a)) {
            if (l.children === o.children && !At.current) {
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
                      ((c = yn(-1, n & -n)), (c.tag = 2));
                      var h = l.updateQueue;
                      if (h !== null) {
                        h = h.shared;
                        var g = h.pending;
                        (g === null
                          ? (c.next = c)
                          : ((c.next = g.next), (g.next = c)),
                          (h.pending = c));
                      }
                    }
                    ((l.lanes |= n),
                      (c = l.alternate),
                      c !== null && (c.lanes |= n),
                      ma(l.return, n, t),
                      (i.lanes |= n));
                    break;
                  }
                  c = c.next;
                }
              } else if (l.tag === 10) a = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((a = l.return), a === null)) throw Error(de(341));
                ((a.lanes |= n),
                  (i = a.alternate),
                  i !== null && (i.lanes |= n),
                  ma(a, n, t),
                  (a = l.sibling));
              } else a = l.child;
              if (a !== null) a.return = l;
              else
                for (a = l; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((l = a.sibling), l !== null)) {
                    ((l.return = a.return), (a = l));
                    break;
                  }
                  a = a.return;
                }
              l = a;
            }
        (Ct(e, t, o.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (s = t.pendingProps.children),
        Pr(t, n),
        (o = Xt(o)),
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
        jc(e, t, s, o, n)
      );
    case 15:
      return ku(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : en(s, o)),
        go(e, t),
        (t.tag = 1),
        Ot(s) ? ((e = !0), Io(t)) : (e = !1),
        Pr(t, n),
        Su(t, s, o),
        ga(t, s, o, n),
        va(null, t, s, !0, e, n)
      );
    case 19:
      return Pu(e, t, n);
    case 22:
      return _u(e, t, n);
  }
  throw Error(de(156, t.tag));
};
function Yu(e, t) {
  return wd(e, t);
}
function Wm(e, t, n, s) {
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
    (this.mode = s),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Yt(e, t, n, s) {
  return new Wm(e, t, n, s);
}
function wi(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Ym(e) {
  if (typeof e == "function") return wi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ga)) return 11;
    if (e === Ba) return 14;
  }
  return 2;
}
function Bn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Yt(e.tag, t, e.key, e.mode)),
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
function vo(e, t, n, s, o, l) {
  var a = 2;
  if (((s = e), typeof e == "function")) wi(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case hr:
        return tr(n.children, o, l, t);
      case La:
        ((a = 8), (o |= 8));
        break;
      case Gl:
        return (
          (e = Yt(12, n, t, o | 2)),
          (e.elementType = Gl),
          (e.lanes = l),
          e
        );
      case Bl:
        return ((e = Yt(13, n, t, o)), (e.elementType = Bl), (e.lanes = l), e);
      case zl:
        return ((e = Yt(19, n, t, o)), (e.elementType = zl), (e.lanes = l), e);
      case sd:
        return rl(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case nd:
              a = 10;
              break e;
            case rd:
              a = 9;
              break e;
            case Ga:
              a = 11;
              break e;
            case Ba:
              a = 14;
              break e;
            case kn:
              ((a = 16), (s = null));
              break e;
          }
        throw Error(de(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Yt(a, n, t, o)),
    (t.elementType = e),
    (t.type = s),
    (t.lanes = l),
    t
  );
}
function tr(e, t, n, s) {
  return ((e = Yt(7, e, s, t)), (e.lanes = n), e);
}
function rl(e, t, n, s) {
  return (
    (e = Yt(22, e, s, t)),
    (e.elementType = sd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ol(e, t, n) {
  return ((e = Yt(6, e, null, t)), (e.lanes = n), e);
}
function Ul(e, t, n) {
  return (
    (t = Yt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Qm(e, t, n, s, o) {
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
    (this.eventTimes = yl(0)),
    (this.expirationTimes = yl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = yl(0)),
    (this.identifierPrefix = s),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null));
}
function Ni(e, t, n, s, o, l, a, i, c) {
  return (
    (e = new Qm(e, t, n, i, c)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Yt(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: s,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    oi(l),
    e
  );
}
function Xm(e, t, n) {
  var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: mr,
    key: s == null ? null : "" + s,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Qu(e) {
  if (!e) return Fn;
  e = e._reactInternals;
  e: {
    if (ir(e) !== e || e.tag !== 1) throw Error(de(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ot(t.type)) {
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
    if (Ot(n)) return Qd(e, n, t);
  }
  return t;
}
function Xu(e, t, n, s, o, l, a, i, c) {
  return (
    (e = Ni(n, s, !0, e, o, l, a, i, c)),
    (e.context = Qu(null)),
    (n = e.current),
    (s = Dt()),
    (o = Gn(n)),
    (l = yn(s, o)),
    (l.callback = t ?? null),
    Un(n, l, o),
    (e.current.lanes = o),
    Ls(e, o, s),
    Ut(e, s),
    e
  );
}
function sl(e, t, n, s) {
  var o = t.current,
    l = Dt(),
    a = Gn(o);
  return (
    (n = Qu(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = yn(l, a)),
    (t.payload = { element: e }),
    (s = s === void 0 ? null : s),
    s !== null && (t.callback = s),
    (e = Un(o, t, a)),
    e !== null && (sn(e, o, a, l), po(e, o, a)),
    a
  );
}
function Ho(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $c(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ji(e, t) {
  ($c(e, t), (e = e.alternate) && $c(e, t));
}
function Km() {
  return null;
}
var Ku =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Si(e) {
  this._internalRoot = e;
}
ol.prototype.render = Si.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(de(409));
  sl(e, t, null, null);
};
ol.prototype.unmount = Si.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (lr(function () {
      sl(null, e, null, null);
    }),
      (t[bn] = null));
  }
};
function ol(e) {
  this._internalRoot = e;
}
ol.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = _d();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Mn.length && t !== 0 && t < Mn[n].priority; n++);
    (Mn.splice(n, 0, e), n === 0 && Ed(e));
  }
};
function Ci(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ll(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ac() {}
function Jm(e, t, n, s, o) {
  if (o) {
    if (typeof s == "function") {
      var l = s;
      s = function () {
        var h = Ho(a);
        l.call(h);
      };
    }
    var a = Xu(t, s, e, 0, null, !1, !1, "", Ac);
    return (
      (e._reactRootContainer = a),
      (e[bn] = a.current),
      Ms(e.nodeType === 8 ? e.parentNode : e),
      lr(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof s == "function") {
    var i = s;
    s = function () {
      var h = Ho(c);
      i.call(h);
    };
  }
  var c = Ni(e, 0, !1, null, null, !1, !1, "", Ac);
  return (
    (e._reactRootContainer = c),
    (e[bn] = c.current),
    Ms(e.nodeType === 8 ? e.parentNode : e),
    lr(function () {
      sl(t, c, n, s);
    }),
    c
  );
}
function al(e, t, n, s, o) {
  var l = n._reactRootContainer;
  if (l) {
    var a = l;
    if (typeof o == "function") {
      var i = o;
      o = function () {
        var c = Ho(a);
        i.call(c);
      };
    }
    sl(t, a, e, o);
  } else a = Jm(n, t, e, o, s);
  return Ho(a);
}
Dd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = cs(t.pendingLanes);
        n !== 0 &&
          (Ha(t, n | 1), Ut(t, dt()), !(Ve & 6) && ((Gr = dt() + 500), qn()));
      }
      break;
    case 13:
      (lr(function () {
        var s = wn(e, 1);
        if (s !== null) {
          var o = Dt();
          sn(s, e, 1, o);
        }
      }),
        ji(e, 1));
  }
};
Va = function (e) {
  if (e.tag === 13) {
    var t = wn(e, 134217728);
    if (t !== null) {
      var n = Dt();
      sn(t, e, 134217728, n);
    }
    ji(e, 134217728);
  }
};
kd = function (e) {
  if (e.tag === 13) {
    var t = Gn(e),
      n = wn(e, t);
    if (n !== null) {
      var s = Dt();
      sn(n, e, t, s);
    }
    ji(e, t);
  }
};
_d = function () {
  return Ye;
};
Md = function (e, t) {
  var n = Ye;
  try {
    return ((Ye = e), t());
  } finally {
    Ye = n;
  }
};
Jl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Vl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var s = n[t];
          if (s !== e && s.form === e.form) {
            var o = Ko(s);
            if (!o) throw Error(de(90));
            (ld(s), Vl(s, o));
          }
        }
      }
      break;
    case "textarea":
      id(e, n);
      break;
    case "select":
      ((t = n.value), t != null && _r(e, !!n.multiple, t, !1));
  }
};
hd = yi;
gd = lr;
var Zm = { usingClientEntryPoint: !1, Events: [Bs, vr, Ko, pd, md, yi] },
  os = {
    findFiberByHostInstance: Kn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  eh = {
    bundleType: os.bundleType,
    version: os.version,
    rendererPackageName: os.rendererPackageName,
    rendererConfig: os.rendererConfig,
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
      return ((e = vd(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: os.findFiberByHostInstance || Km,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var oo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!oo.isDisabled && oo.supportsFiber)
    try {
      ((Wo = oo.inject(eh)), (un = oo));
    } catch {}
}
Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zm;
Ht.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ci(t)) throw Error(de(200));
  return Xm(e, t, null, n);
};
Ht.createRoot = function (e, t) {
  if (!Ci(e)) throw Error(de(299));
  var n = !1,
    s = "",
    o = Ku;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ni(e, 1, !1, null, null, n, !1, s, o)),
    (e[bn] = t.current),
    Ms(e.nodeType === 8 ? e.parentNode : e),
    new Si(t)
  );
};
Ht.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(de(188))
      : ((e = Object.keys(e).join(",")), Error(de(268, e)));
  return ((e = vd(t)), (e = e === null ? null : e.stateNode), e);
};
Ht.flushSync = function (e) {
  return lr(e);
};
Ht.hydrate = function (e, t, n) {
  if (!ll(t)) throw Error(de(200));
  return al(null, e, t, !0, n);
};
Ht.hydrateRoot = function (e, t, n) {
  if (!Ci(e)) throw Error(de(405));
  var s = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    a = Ku;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Xu(t, null, e, 1, n ?? null, o, !1, l, a)),
    (e[bn] = t.current),
    Ms(e),
    s)
  )
    for (e = 0; e < s.length; e++)
      ((n = s[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o));
  return new ol(t);
};
Ht.render = function (e, t, n) {
  if (!ll(t)) throw Error(de(200));
  return al(null, e, t, !1, n);
};
Ht.unmountComponentAtNode = function (e) {
  if (!ll(e)) throw Error(de(40));
  return e._reactRootContainer
    ? (lr(function () {
        al(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[bn] = null));
        });
      }),
      !0)
    : !1;
};
Ht.unstable_batchedUpdates = yi;
Ht.unstable_renderSubtreeIntoContainer = function (e, t, n, s) {
  if (!ll(n)) throw Error(de(200));
  if (e == null || e._reactInternals === void 0) throw Error(de(38));
  return al(e, t, n, !1, s);
};
Ht.version = "18.3.1-next-f1338f8080-20240426";
function Ju() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ju);
    } catch (e) {
      console.error(e);
    }
}
(Ju(), (Jc.exports = Ht));
var th = Jc.exports,
  Zu,
  Oc = th;
((Zu = Oc.createRoot), Oc.hydrateRoot);
class nh {
  constructor() {
    ((this.config = null), (this.isConfigLoaded = !1));
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
        console.error("Failed to load API config:", n),
        new Error("API configuration not available")
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
          Object.fromEntries(i.headers.entries()),
        ),
        !i.ok)
      )
        throw (
          console.log("❌ HTTP Error:", i.status),
          console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
          new Error(`HTTP error! status: ${i.status}`)
        );
      const c = await i.json();
      return (
        console.log("✅ Response Data:", c),
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
        c
      );
    } catch (i) {
      throw (
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
        console.log("❌ API Request Failed"),
        console.log("🔗 Endpoint:", t),
        console.log("💥 Error:", i),
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
        i
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
        return (console.error("API returned error:", s), []);
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
            (a.NAME && a.NAME.toLowerCase().includes(l)),
        );
      }
      return o;
    } catch (s) {
      return (console.error("Medicine search failed:", s), []);
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
      return (await this.loadConfig(), !0);
    } catch (t) {
      return (console.error("API connection check failed:", t), !1);
    }
  }
  async getStock(t, n) {
    const s = { ServerName: t, ServerType: n };
    return this.request("/api/stock/get_stock", {
      method: "POST",
      body: JSON.stringify(s),
    });
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
    const o = `${(await this.loadConfig()).ai || "https://www.kutech.tw:3000"}/barcode`,
      l = new FormData();
    (l.append("file", t),
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
      console.log(`📤 AI Barcode Scan Request [${new Date().toISOString()}]`),
      console.log("🔗 URL:", o),
      console.log("📷 Image File:", t.name, t.size, "bytes"),
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"));
    try {
      const a = await fetch(o, { method: "POST", body: l }),
        i = await a.json();
      return (
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
        console.log(
          `📥 AI Barcode Scan Response [${new Date().toISOString()}]`,
        ),
        console.log("📊 Status:", a.status),
        console.log("📦 Response Data:", i),
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),
        i
      );
    } catch (a) {
      return (console.error("❌ AI Barcode Scan Error:", a), { results: [] });
    }
  }
  async searchByBarCode(t) {
    const n = { Value: t };
    return this.request("/api/medmap/barcode", {
      method: "POST",
      body: JSON.stringify(n),
    });
  }
  async lightByCodeNameType(t, n, s, o, l, a, i) {
    const c = [
      `ServerName=${t}`,
      `ServerType=${n}`,
      `code=${s}`,
      `color=${o}`,
      `lightness=${l}`,
    ];
    i !== void 0 && c.push(`time=${i}`);
    const h = { Method: "light_by_code_name_type", ValueAry: c, Data: {} };
    return this.request("/api/medMap/light_by_code_name_type", {
      method: "POST",
      body: JSON.stringify(h),
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
    ((this.config = null), (this.isConfigLoaded = !1));
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
const Me = new nh();
class rh {
  convertMedMapApiToFakeData(t) {
    (console.log("🔄 開始轉換 MedMap API 資料到假資料格式"),
      console.log("📥 原始 API 資料:", t));
    try {
      Array.isArray(t) ||
        (console.warn("⚠️ API 資料不是陣列格式，嘗試包裝成陣列"), (t = [t]));
      const s = t
        .map((o, l) => this.convertSingleDepartment(o, l))
        .filter((o) => {
          if (Object.keys(o).length !== 0) return o;
        });
      return (console.log("✅ MedMap 資料轉換完成，結果:", s), s);
    } catch (n) {
      return (console.error("❌ MedMap 資料轉換失敗:", n), []);
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
            (l.absolute_position
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
                  (Array.isArray(c.shelf) &&
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
                        (p.type == "shelf" && (b.type = "dispensing_shelves"),
                          Array.isArray(p.medMapBox) &&
                            p.medMapBox.forEach((k, f) => {
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
                                y = {},
                                v = p.position.split(","),
                                E = k.position.split(",");
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
                                ((y.name = k.storage.Name),
                                  (y.code = k.storage.Code),
                                  (y.cht_name = k.storage.ChineseName),
                                  (y.SKDIACODE = k.storage.SKDIACODE),
                                  (y.device_type = k.storage.device_type),
                                  (y.qty = k.storage.StorageName),
                                  (y.stockCol = `${+v[0] + 1}`),
                                  (y.stockRow = ""),
                                  (y.stock = `${+E[1] + 1}`));
                              } else
                                ((d.device_type = 10),
                                  (d.box_type = "2.9"),
                                  (y.name = ""),
                                  (y.code = ""),
                                  (y.cht_name = ""),
                                  (y.stockCol = `${+v[0] + 1}`),
                                  (y.stockRow = ""),
                                  (y.stock = `${+E[1] + 1}`));
                              (o.contents[a].med_list.push(y),
                                (d.med_info[0] = y),
                                b.contents.push(d));
                            }));
                      else {
                        b.type = "store_shelves";
                        const k = p.medMapStock.sort((E, S) => {
                          const [I] = E.location.split(",").map(Number),
                            [F] = S.location.split(",").map(Number);
                          return I - F;
                        });
                        ((b.medMapStock = k), (b.name = p.name));
                        let f = Math.max(
                            ...k.map((E) => E.location.split(",")[0]),
                          ),
                          d = Math.max(
                            ...l.sub_section.map(
                              (E) => E.position.split(",")[1],
                            ),
                          );
                        +f <= 0 && (f = 0);
                        let y = p.position.split(","),
                          v = c.position.split(",");
                        k.forEach((E, S) => {
                          if (E.code) {
                            let I = {};
                            ((I.name = E.name),
                              (I.code = E.code),
                              (I.cht_name = ""),
                              (I.SKDIACODE = E.material_no),
                              (I.qty = E.qty),
                              (I.stockCol = `${+y[0] + 1}`),
                              (I.stockRow = `${+v[1] + 1}`),
                              l.reverse == "True" &&
                                (I.stockRow = d + 1 - `${+v[1]}`),
                              (I.stock = `${+E.location.split(",")[0] + 1}`),
                              l.reverse == "True" &&
                                (I.stock = f + 1 - +E.location.split(",")[0]),
                              o.contents[a].med_list.push(I));
                          }
                        });
                      }
                      let T = p.position.split(",")[1];
                      (m < +T &&
                        ((m = +T), (o.contents[a].contents[h].oriMaxCol = +m)),
                        o.contents[a].contents[h].contents.push(b));
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
                        (b.serverName &&
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
                                  ? p.drawer.Boxes.forEach((f, d) => {
                                      let y = [];
                                      (Array.isArray(f) &&
                                        f.forEach((v, E) => {
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
                                          (y.push(S),
                                            v.Code &&
                                              o.contents[a].med_list.push(
                                                v.Code,
                                              ));
                                        }),
                                        b.Boxes.push(y));
                                    })
                                  : (b.Boxes = p.drawer.Boxes)))
                            : ((b.type = "list_draw"),
                              (b.name = `清單抽屜 ${j}`)));
                        let T = p.position.split(",")[1];
                        (m < +T &&
                          ((m = +T),
                          (o.contents[a].contents[h].oriMaxCol = +m)),
                          o.contents[a].contents[h].contents.push(b));
                      }));
                }));
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
          this.convertSingleComponent(g, m, o.GUID),
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
        return (console.error("❌ 轉換後的資料不是陣列格式"), !1);
      for (const n of t) {
        if (!n.GUID || !n.type || !n.name)
          return (console.error("❌ 部門資料缺少必要欄位:", n), !1);
        if (!n.gird_position || typeof n.gird_position != "string")
          return (
            console.error("❌ 部門位置資料格式錯誤:", n.gird_position),
            !1
          );
        if (n.components && Array.isArray(n.components)) {
          for (const s of n.components)
            if (!s.GUID || !s.type)
              return (console.error("❌ 組件資料缺少必要欄位:", s), !1);
        }
      }
      return (console.log("✅ 轉換後的資料結構驗證通過"), !0);
    } catch (n) {
      return (console.error("❌ 資料驗證過程中發生錯誤:", n), !1);
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
          }),
        ),
      ],
    };
    return (console.log("📊 資料轉換報告:", s), s);
  }
}
const Rt = new rh(),
  sh = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Rt },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ef = u.createContext(void 0),
  oh = ({ children: e }) => {
    const [t, n] = u.useState(!1),
      [s, o] = u.useState(null),
      [l, a] = u.useState(!0),
      [i, c] = u.useState(null),
      [h, g] = u.useState(null),
      [m, p] = u.useState("department"),
      [j, b] = u.useState(!1),
      [T, k] = u.useState(0),
      [f, d] = u.useState({ message: "", type: "success", isVisible: !1 }),
      [y, v] = u.useState(!1),
      [E, S] = u.useState(null),
      [I, F] = u.useState("edit"),
      [M, $] = u.useState(!1),
      [se, ye] = u.useState(null),
      [_, N] = u.useState(!1),
      [L, P] = u.useState(null),
      [K, w] = u.useState(!1),
      [B, ee] = u.useState(!1),
      [H, A] = u.useState(null),
      [Ne, U] = u.useState(!1),
      [G, he] = u.useState(null),
      [J, ke] = u.useState(!1),
      [Ee, De] = u.useState(null),
      [Be, te] = u.useState(!1),
      [D, ge] = u.useState(null),
      [fe, W] = u.useState(null),
      [le, be] = u.useState(null),
      [O, oe] = u.useState("add"),
      [V, xe] = u.useState(!1),
      [ce, we] = u.useState([]),
      [pe, C] = u.useState([]),
      [R, q] = u.useState(!1),
      [ue, ie] = u.useState(!1),
      [je, Ue] = u.useState(""),
      [We, ct] = u.useState(!1),
      [Et, It] = u.useState(""),
      [cr, pn] = u.useState(!1),
      [Vr, qr] = u.useState(null),
      [cl, Wn] = u.useState(null),
      [Yn, Wr] = u.useState(!1),
      [Yr, Qr] = u.useState(null),
      [dl, Xr] = u.useState(!1),
      [x, Z] = u.useState(null),
      [ne, z] = u.useState(null),
      me = () => {
        (localStorage.removeItem("user_session"), n(!1), o(null));
      },
      Y = u.useCallback(() => {
        k(($e) => $e + 1);
      }, []),
      X = u.useCallback(($e, Xe) => {
        d({ message: $e, type: Xe, isVisible: !0 });
      }, []),
      re = u.useCallback(() => {
        d(($e) => ({ ...$e, isVisible: !1 }));
      }, []),
      ae = ($e) => {
        (S($e), F("edit"), v(!0));
      },
      Q = () => {
        const $e = {
          GUID: `new_medbox_${Date.now()}`,
          name: "",
          box_type: "",
          width: [],
          width_index: 0,
          med_info: [],
          parentShelf: null,
        };
        (S($e), F("add"), v(!0));
      },
      ve = () => {
        (v(!1), S(null), F("edit"));
      },
      Ce = ($e) => {
        (ye($e), $(!0));
      },
      Ae = () => {
        ($(!1), ye(null));
      },
      Ie = ($e) => {
        (P($e), N(!0));
      },
      Te = () => {
        (N(!1), P(null));
      },
      He = ($e) => {
        (A($e), ee(!0));
      },
      Oe = () => {
        (ee(!1), A(null));
      },
      Le = ($e) => {
        (he($e), U(!0));
      },
      Ge = () => {
        (U(!1), he(null));
      },
      _e = ($e) => {
        (De($e), ke(!0));
      },
      Re = () => {
        (ke(!1), De(null));
      },
      ze = ($e) => {
        (ge($e), W(null), oe("add"), te(!0));
      },
      Pe = ($e, Xe) => {
        (ge($e), W(Xe));
        const et = JSON.parse(JSON.stringify(Xe));
        (be(et),
          console.log("📋 深拷貝暫存原始貨物資料:", et),
          oe("edit"),
          te(!0));
      },
      rt = () => {
        (te(!1), ge(null), W(null), be(null), oe("add"));
      },
      Kr = () => {
        xe(!0);
      },
      ul = () => {
        xe(!1);
      },
      ff = ($e = "") => {
        (Ue($e), ie(!0));
      },
      pf = () => {
        ie(!1);
      },
      mf = ($e) => {
        (It($e), ct(!0));
      },
      hf = () => {
        (ct(!1), It(""));
      },
      gf = ($e, Xe) => {
        (qr($e), Wn(Xe || null), pn(!0));
      },
      xf = () => {
        (pn(!1), qr(null), Wn(null));
      },
      yf = ($e) => {
        (Qr($e), Wr(!0));
      },
      vf = () => {
        (Wr(!1), Qr(null));
      },
      bf = ($e) => {
        (Z($e), Xr(!0));
      },
      wf = () => {
        (Xr(!1), Z(null));
      },
      Nf = u.useCallback(async () => {
        if (!i) {
          console.warn("沒有選擇部門分類，無法重新載入資料");
          return;
        }
        (console.log("🔄 重新載入藥品地圖資料，部門類型:", i), w(!0));
        try {
          const $e = await Me.getMedMapByDepartment(i);
          if ($e.Code === 200 && $e.Data) {
            console.log("📡 重新載入成功:", $e.Data);
            const Xe = Rt.convertMedMapApiToFakeData($e.Data);
            if (!Rt.validateConvertedData(Xe)) {
              (console.error("❌ 轉換後的資料驗證失敗"), g(null));
              return;
            }
            (g(Xe), console.log("✅ 地圖資料已重新載入"));
          } else (console.error("❌ API 回傳錯誤:", $e), g(null));
        } catch ($e) {
          (console.error("💥 重新載入藥品地圖資料失敗:", $e), g(null));
        } finally {
          w(!1);
        }
      }, [i, w, g]),
      jf = u.useCallback(($e, Xe) => {
        g(
          (et) =>
            et &&
            et.map((xt) => {
              const tt = { ...xt };
              return (
                tt.contents &&
                  (tt.contents = tt.contents.map((Sn) => {
                    const dr = { ...Sn };
                    return (
                      dr.contents &&
                        (dr.contents = dr.contents.map((ur) => {
                          const fr = { ...ur };
                          return (
                            fr.contents &&
                              (fr.contents = fr.contents.map((Cn) => {
                                if (Cn.GUID === $e) {
                                  const Jt = { ...Cn };
                                  return (
                                    Jt.medMapStock || (Jt.medMapStock = []),
                                    (Jt.medMapStock = [...Jt.medMapStock, Xe]),
                                    Jt
                                  );
                                }
                                return Cn;
                              })),
                            fr
                          );
                        })),
                      dr
                    );
                  })),
                tt
              );
            }),
        );
      }, []),
      Sf = u.useCallback(($e, Xe, et) => {
        g(
          (mt) =>
            mt &&
            mt.map((tt) => {
              const Sn = { ...tt };
              return (
                Sn.contents &&
                  (Sn.contents = Sn.contents.map((dr) => {
                    const ur = { ...dr };
                    return (
                      ur.contents &&
                        (ur.contents = ur.contents.map((fr) => {
                          const Cn = { ...fr };
                          return (
                            Cn.contents &&
                              (Cn.contents = Cn.contents.map((Jt) => {
                                if (Jt.GUID === $e && Jt.medMapStock) {
                                  const _i = { ...Jt };
                                  return (
                                    (_i.medMapStock = Jt.medMapStock.map(
                                      (fl) =>
                                        fl.GUID === Xe ? { ...fl, ...et } : fl,
                                    )),
                                    _i
                                  );
                                }
                                return Jt;
                              })),
                            Cn
                          );
                        })),
                      ur
                    );
                  })),
                Sn
              );
            }),
        );
      }, []),
      Cf = u.useCallback(($e, Xe) => {
        g((et) => {
          if (!et) return et;
          const mt = (xt) =>
            xt.map((tt) =>
              tt.GUID === $e
                ? { ...tt, ...Xe }
                : tt.contents && Array.isArray(tt.contents)
                  ? { ...tt, contents: mt(tt.contents) }
                  : tt,
            );
          return mt(et);
        });
      }, []),
      Df = u.useCallback(($e) => {
        g((Xe) => {
          if (!Xe) return Xe;
          const et = (mt) =>
            mt
              .filter((xt) => xt.GUID !== $e)
              .map((xt) =>
                xt.contents && Array.isArray(xt.contents)
                  ? { ...xt, contents: et(xt.contents) }
                  : xt,
              );
          return et(Xe);
        });
      }, []),
      kf = u.useCallback(($e, Xe) => {
        g(
          (et) =>
            et &&
            et.map((mt) => {
              if (mt.GUID === $e) {
                const xt = mt.contents ? [...mt.contents, Xe] : [Xe];
                return { ...mt, contents: xt, medMap_Section: xt };
              }
              return mt;
            }),
        );
      }, []),
      _f = u.useCallback(($e, Xe) => {
        g((et) => {
          if (!et) return et;
          const mt = (xt) =>
            xt.map((tt) => {
              if (tt.GUID === $e) {
                const Sn = tt.contents ? [...tt.contents, Xe] : [Xe];
                return { ...tt, contents: Sn };
              }
              return tt.contents && Array.isArray(tt.contents)
                ? { ...tt, contents: mt(tt.contents) }
                : tt;
            });
          return mt(et);
        });
      }, []);
    return r.jsx(ef.Provider, {
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
        apiDepartmentData: h,
        setApiDepartmentData: g,
        viewMode: m,
        setViewMode: p,
        refreshTrigger: T,
        triggerRefresh: Y,
        addStockToShelf: jf,
        notification: f,
        showNotification: X,
        hideNotification: re,
        medBoxModalOpen: y,
        setMedBoxModalOpen: v,
        selectedMedBox: E,
        setSelectedMedBox: S,
        openMedBoxModal: ae,
        closeMedBoxModal: ve,
        modalMode: I,
        setModalMode: F,
        openAddMedBoxModal: Q,
        listDrawModalOpen: M,
        setListDrawModalOpen: $,
        selectedListDraw: se,
        setSelectedListDraw: ye,
        openListDrawModal: Ce,
        closeListDrawModal: Ae,
        gridDrawModalOpen: _,
        setGridDrawModalOpen: N,
        selectedGridDraw: L,
        setSelectedGridDraw: P,
        openGridDrawModal: Ie,
        closeGridDrawModal: Te,
        isLoadingMedMap: K,
        setIsLoadingMedMap: w,
        addParentContainerModalOpen: B,
        setAddParentContainerModalOpen: ee,
        selectedDepartmentForAdd: H,
        setSelectedDepartmentForAdd: A,
        openAddParentContainerModal: He,
        closeAddParentContainerModal: Oe,
        addShelfDrawContainerModalOpen: Ne,
        setAddShelfDrawContainerModalOpen: U,
        selectedSubContainerForAdd: G,
        setSelectedSubContainerForAdd: he,
        openAddShelfDrawContainerModal: Le,
        closeAddShelfDrawContainerModal: Ge,
        addSubContainerModalOpen: J,
        setAddSubContainerModalOpen: ke,
        selectedParentContainerForAdd: Ee,
        setSelectedParentContainerForAdd: De,
        openAddSubContainerModal: _e,
        closeAddSubContainerModal: Re,
        addStoreItemModalOpen: Be,
        setAddStoreItemModalOpen: te,
        selectedStoreShelfForAdd: D,
        setSelectedStoreShelfForAdd: ge,
        selectedStockItemForEdit: fe,
        setSelectedStockItemForEdit: W,
        originalStockItemBackup: le,
        storeItemModalMode: O,
        setStoreItemModalMode: oe,
        openAddStoreItemModal: ze,
        openEditStoreItemModal: Pe,
        closeAddStoreItemModal: rt,
        updateStockInShelf: Sf,
        updateContainerInLocalData: Cf,
        removeContainerFromLocalData: Df,
        addParentContainerToLocalData: kf,
        addSubContainerToLocalData: _f,
        addDepartmentModalOpen: V,
        setAddDepartmentModalOpen: xe,
        allDepartmentsList: ce,
        setAllDepartmentsList: we,
        openAddDepartmentModal: Kr,
        closeAddDepartmentModal: ul,
        reloadMedMapData: Nf,
        qrCodeScannerModalOpen: ue,
        qrCodeScannerMode: je,
        setQRCodeScannerModalOpen: ie,
        openQRCodeScannerModal: ff,
        closeQRCodeScannerModal: pf,
        addBarcodeModalOpen: We,
        setAddBarcodeModalOpen: ct,
        openAddBarcodeModal: mf,
        closeAddBarcodeModal: hf,
        initialBarcodeValue: Et,
        containerDetailModalOpen: cr,
        setContainerDetailModalOpen: pn,
        selectedContainerForDetail: Vr,
        setSelectedContainerForDetail: qr,
        highlightedMedicineCode: cl,
        setHighlightedMedicineCode: Wn,
        openContainerDetailModal: gf,
        closeContainerDetailModal: xf,
        editStoreShelfModalOpen: Yn,
        setEditStoreShelfModalOpen: Wr,
        selectedStoreShelfForEdit: Yr,
        setSelectedStoreShelfForEdit: Qr,
        openEditStoreShelfModal: yf,
        closeEditStoreShelfModal: vf,
        activeCanvas: ne,
        setActiveCanvas: z,
        editParentContainerModalOpen: dl,
        setEditParentContainerModalOpen: Xr,
        selectedParentContainerForEdit: x,
        setSelectedParentContainerForEdit: Z,
        openEditParentContainerModal: bf,
        closeEditParentContainerModal: wf,
        medicineList: pe,
        setMedicineList: C,
        isLoadingMedicines: R,
        setIsLoadingMedicines: q,
      },
      children: e,
    });
  },
  it = () => {
    const e = u.useContext(ef);
    if (e === void 0)
      throw new Error("useDrugMap must be used within a DrugMapProvider");
    return e;
  },
  lh = {
    "zh-TW": {
      "nav.title": "藥品地圖",
      "nav.home": "返回首頁",
      "nav.expandSidebar": "展開側邊欄",
      "nav.collapseSidebar": "收合側邊欄",
      "topbar.medicine": "編輯",
      "topbar.department": "視圖",
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
      "topbar.medicine": "Edit",
      "topbar.department": "View",
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
  tf = u.createContext(void 0),
  ah = ({ children: e }) => {
    const [t, n] = u.useState("zh-TW"),
      s = (o) => lh[t][o] || o;
    return r.jsx(tf.Provider, {
      value: { language: t, setLanguage: n, t: s },
      children: e,
    });
  },
  Mt = () => {
    const e = u.useContext(tf);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ih = {
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
 */ const ch = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  qe = (e, t) => {
    const n = u.forwardRef(
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
        g,
      ) =>
        u.createElement(
          "svg",
          {
            ref: g,
            ...ih,
            width: o,
            height: o,
            stroke: s,
            strokeWidth: a ? (Number(l) * 24) / Number(o) : l,
            className: ["lucide", `lucide-${ch(e)}`, i].join(" "),
            ...h,
          },
          [
            ...t.map(([m, p]) => u.createElement(m, p)),
            ...(Array.isArray(c) ? c : [c]),
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
 */ const dh = qe("Archive", [
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
 */ const Uc = qe("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nf = qe("Building2", [
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
 */ const Br = qe("Camera", [
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
 */ const uh = qe("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lo = qe("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rf = qe("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fh = qe("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ph = qe("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sf = qe("EyeOff", [
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
 */ const of = qe("Eye", [
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
 */ const mh = qe("Globe", [
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
 */ const lf = qe("Grid3x3", [
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
 */ const Di = qe("Layers", [
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
 */ const hh = qe("Lightbulb", [
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
 */ const gh = qe("ListX", [
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
 */ const Ia = qe("List", [
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
 */ const Lt = qe("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ki = qe("Lock", [
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
 */ const xh = qe("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yh = qe("Package", [
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
 */ const Dr = qe("Pen", [
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
 */ const vh = qe("Pill", [
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
 */ const $t = qe("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vo = qe("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tn = qe("Settings", [
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
 */ const kr = qe("Trash2", [
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
 */ const af = qe("Unlock", [
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
 */ const bh = qe("Warehouse", [
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
 */ const wh = qe("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ze = qe("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Nh = () => {
    const { sidebarOpen: e, setSidebarOpen: t } = it(),
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
              children: r.jsx(Di, { className: "w-5 h-5" }),
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
                ? r.jsx(Ia, { className: "w-6 h-6" })
                : r.jsx(Ia, { className: "w-6 h-6" }),
            }),
          ],
        }),
      }),
    });
  },
  jh = () => {
    const {
        viewMode: e,
        setViewMode: t,
        logout: n,
        currentUser: s,
        selectedDepartmentType: o,
        openAddDepartmentModal: l,
        apiDepartmentData: a,
        allDepartmentsList: i,
      } = it(),
      { language: c, setLanguage: h, t: g } = Mt(),
      [m, p] = bo.useState(!1),
      j = () => {
        h(c === "zh-TW" ? "en" : "zh-TW");
      },
      b = bo.useMemo(() => {
        if (!o || !i || !a) return !1;
        const T = a.map((d) => d.name);
        return (
          i
            .filter((d) => d["department_type "] === o)
            .filter((d) => !T.includes(d.name)).length > 0
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
                      onClick: () => t("department"),
                      className: `flex items-center space-x-2 px-3 py-1.5 rounded-md transition-all duration-300 ease-in-out transform ${e === "department" ? "bg-white text-blue-600 shadow-sm scale-105" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:scale-102"}`,
                      children: [
                        r.jsx(nf, { className: "w-4 h-4" }),
                        r.jsx("span", {
                          className: "text-sm font-medium",
                          children: g("topbar.department"),
                        }),
                      ],
                    }),
                    r.jsxs("button", {
                      onClick: () => t("medicine"),
                      className: `flex items-center space-x-2 px-3 py-1.5 rounded-md transition-all duration-300 ease-in-out transform ${e === "medicine" ? "bg-white text-green-600 shadow-sm scale-105" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:scale-102"}`,
                      children: [
                        r.jsx(vh, { className: "w-4 h-4" }),
                        r.jsx("span", {
                          className: "text-sm font-medium",
                          children: g("topbar.medicine"),
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
                    ? r.jsx(ph, { className: "w-4 h-4" })
                    : r.jsx(rf, { className: "w-4 h-4" }),
                }),
              ],
            }),
            r.jsxs("div", {
              className: `
            flex items-center gap-2 lg:gap-0 lg:space-x-2 flex-col lg:flex-row
            lg:flex lg:opacity-100 lg:max-h-none
            transition-all duration-300 ease-in-out overflow-hidden
            ${m ? "flex opacity-100 max-h-96" : "hidden opacity-0 max-h-0 lg:flex lg:opacity-100 lg:max-h-none"}
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
                          r.jsx($t, { className: "w-4 h-4" }),
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
                    r.jsx(mh, { className: "w-4 h-4" }),
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
                    r.jsx(xh, { className: "w-4 h-4" }),
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
  Sh = [
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
  Ch = ({ isOpen: e, onClose: t }) => {
    const [n, s] = u.useState("blue"),
      [o, l] = u.useState(1),
      [a, i] = u.useState(60),
      [c, h] = u.useState(120),
      [g, m] = u.useState(""),
      [p, j] = u.useState(""),
      [b, T] = u.useState([]),
      [k, f] = u.useState([]),
      [d, y] = u.useState([]),
      [v, E] = u.useState(!1),
      [S, I] = u.useState(!1),
      F = u.useRef(null),
      M = u.useRef(null),
      $ = u.useRef(null),
      se = u.useRef(null);
    (u.useEffect(() => {
      if (e) {
        const w = localStorage.getItem("medMap_setting");
        if (w)
          try {
            const B = JSON.parse(w);
            (s(B.light_color || "blue"),
              l(B.brightness !== void 0 ? B.brightness : 1),
              i(B.light_sec !== void 0 ? B.light_sec : 60),
              h(B.refresh_interval !== void 0 ? B.refresh_interval : 120),
              m(B.default_person || ""),
              j(B.default_person_id || ""));
          } catch (B) {
            (console.error("讀取設定失敗:", B),
              s("blue"),
              l(1),
              i(60),
              h(120),
              m(""),
              j(""));
          }
        else (s("blue"), l(1), i(60), h(120), m(""), j(""));
        ye();
      }
    }, [e]),
      u.useEffect(() => {
        const w = (B) => {
          ($.current &&
            !$.current.contains(B.target) &&
            F.current &&
            !F.current.contains(B.target) &&
            E(!1),
            se.current &&
              !se.current.contains(B.target) &&
              M.current &&
              !M.current.contains(B.target) &&
              I(!1));
        };
        return (
          document.addEventListener("mousedown", w),
          () => document.removeEventListener("mousedown", w)
        );
      }, []));
    const ye = async () => {
        try {
          const w = await Me.getAllStaffInfo();
          w.Code === 200 && w.Data && T(w.Data);
        } catch (w) {
          console.error("獲取人員資料失敗:", w);
        }
      },
      _ = (w) => {
        if ((m(w), w.trim() === "")) {
          (f([]), E(!1));
          return;
        }
        const B = b.filter(
          (ee) => ee.name && ee.name.toLowerCase().includes(w.toLowerCase()),
        );
        (f(B), E(B.length > 0));
      },
      N = (w) => {
        if ((j(w), w.trim() === "")) {
          (y([]), I(!1));
          return;
        }
        const B = b.filter(
          (ee) => ee.ID && ee.ID.toLowerCase().includes(w.toLowerCase()),
        );
        (y(B), I(B.length > 0));
      },
      L = (w) => {
        (m(w.name), j(w.ID), E(!1));
      },
      P = (w) => {
        (m(w.name), j(w.ID), I(!1));
      },
      K = () => {
        const w = {
          light_color: n,
          brightness: o,
          light_sec: a,
          refresh_interval: c,
          default_person: g,
          default_person_id: p,
        };
        (localStorage.setItem("medMap_setting", JSON.stringify(w)),
          console.log("設定已儲存:", w),
          t());
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
                      children: r.jsx(Ze, { className: "w-5 h-5" }),
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
                                  ref: F,
                                  type: "text",
                                  value: g,
                                  onChange: (w) => _(w.target.value),
                                  onFocus: () => {
                                    g.trim() && _(g);
                                  },
                                  placeholder: "請輸入人員名稱",
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                }),
                                v &&
                                  r.jsx("div", {
                                    ref: $,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: k.map((w, B) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          onClick: () => L(w),
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
                                        B,
                                      ),
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
                                  ref: M,
                                  type: "text",
                                  value: p,
                                  onChange: (w) => N(w.target.value),
                                  onFocus: () => {
                                    p.trim() && N(p);
                                  },
                                  placeholder: "請輸入人員 ID",
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                }),
                                S &&
                                  r.jsx("div", {
                                    ref: se,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: d.map((w, B) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          onClick: () => P(w),
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
                                        B,
                                      ),
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
                          children: Sh.map((w) =>
                            r.jsxs(
                              "button",
                              {
                                onClick: () => s(w.value),
                                className: `
                    relative p-3 rounded-lg border-2 transition-all
                    ${w.bgColor} ${w.textColor}
                    ${n === w.value ? "border-gray-900 shadow-lg scale-105" : "border-gray-300 hover:border-gray-400 hover:shadow-md"}
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
                              w.value,
                            ),
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
                                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${o * 100}%, #e5e7eb ${o * 100}%, #e5e7eb 100%)`,
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
                                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((a - 1) / 119) * 100}%, #e5e7eb ${((a - 1) / 119) * 100}%, #e5e7eb 100%)`,
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
                    r.jsxs("div", {
                      children: [
                        r.jsxs("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: [
                            "資料刷新間隔: ",
                            Math.floor(c / 60),
                            "分",
                            c % 60 !== 0 ? `${c % 60}秒` : "",
                          ],
                        }),
                        r.jsxs("div", {
                          className: "relative",
                          children: [
                            r.jsx("input", {
                              type: "range",
                              min: "120",
                              max: "300",
                              step: "30",
                              value: c,
                              onChange: (w) => h(parseInt(w.target.value)),
                              className:
                                "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600",
                              style: {
                                background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${((c - 120) / 180) * 100}%, #e5e7eb ${((c - 120) / 180) * 100}%, #e5e7eb 100%)`,
                              },
                            }),
                            r.jsxs("div", {
                              className:
                                "flex justify-between text-xs text-gray-500 mt-1",
                              children: [
                                r.jsx("span", { children: "2分" }),
                                r.jsx("span", { children: "3.5分" }),
                                r.jsx("span", { children: "5分" }),
                              ],
                            }),
                          ],
                        }),
                        r.jsx("p", {
                          className: "mt-2 text-xs text-gray-500",
                          children: "設定資料自動刷新的時間間隔",
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
                      onClick: K,
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
  Dh = ({ isOpen: e, onClose: t, onConfirm: n }) => {
    const [s, o] = u.useState(""),
      [l, a] = u.useState(!1);
    u.useEffect(() => {
      e && (o(""), a(!1));
    }, [e]);
    const i = (h) => {
        (h.preventDefault(), s.trim() && n(s));
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
                          children: r.jsx(ki, {
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
                      children: r.jsx(Ze, { className: "w-6 h-6" }),
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
                              ? r.jsx(sf, { className: "w-5 h-5" })
                              : r.jsx(of, { className: "w-5 h-5" }),
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
  kh = () => {
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
      } = it(),
      { t: g } = Mt(),
      [m, p] = u.useState(new Set()),
      [j, b] = u.useState([]),
      [T, k] = u.useState(!0),
      [f, d] = u.useState([]),
      [y, v] = u.useState(!1),
      [E, S] = u.useState(!1),
      I = () => {
        c ? h(!1) : S(!0);
      },
      F = (_) => {
        _ === "66437068" ? (h(!0), S(!1)) : alert("密碼錯誤，無法開啟後台模式");
      };
    u.useEffect(() => {
      (async () => {
        k(!0);
        try {
          const N = await Me.getDepartments();
          N.Code === 200 && N.Data
            ? (console.log(N.Data), b(N.Data), i(N.Data))
            : (console.error("API returned error:", N), b([]), i([]));
        } catch (N) {
          (console.error("Failed to fetch department data:", N), b([]), i([]));
        } finally {
          k(!1);
        }
      })();
    }, []);
    const M = j.reduce((_, N) => {
        const L = N["department_type "];
        return (_[L] || (_[L] = []), _[L].push(N), _);
      }, {}),
      $ = (_) => {
        const N = new Set(m);
        (N.has(_) ? N.delete(_) : N.add(_), p(N));
      },
      se = async (_) => {
        (console.log("🏢 選擇部門:", _), s(_), await ye(_), t(!1));
      },
      ye = async (_) => {
        (console.log("🚀 開始取得藥品地圖資料，部門類型:", _), a(!0));
        try {
          const N = await Me.getMedMapByDepartment(_);
          if (N.Code === 200 && N.Data) {
            console.log("📡 API 回傳成功:", N.Data);
            const L = Rt.convertMedMapApiToFakeData(N.Data);
            if (!Rt.validateConvertedData(L)) {
              (console.error("❌ 轉換後的資料驗證失敗"), d([]));
              return;
            }
            const K = Rt.generateConversionReport(N.Data, L);
            (d(L),
              o(L),
              console.log("💾 已暫存轉換後的資料到狀態中"),
              console.log("📊 最終轉換結果:", L),
              console.log("📋 轉換報告:", K));
          } else (console.error("❌ API 回傳錯誤:", N), d([]), o(null));
        } catch (N) {
          (console.error("💥 取得藥品地圖資料失敗:", N), d([]), o(null));
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
          className: `fixed w-80 bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200/50 z-50 transform transition-all duration-300 ease-in-out h-screen h-svh ${e ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`,
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
                          children: r.jsx(Di, { className: "w-5 h-5" }),
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
                      children: r.jsx(gh, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
              }),
              r.jsx("div", {
                className: "flex-1 overflow-y-auto p-4",
                children: T
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
                        Object.entries(M).map(([_, N]) =>
                          r.jsxs(
                            "div",
                            {
                              className: "space-y-1",
                              children: [
                                r.jsxs("button", {
                                  type: "button",
                                  onClick: () => se(_),
                                  disabled: l,
                                  className: `w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 border ${n === _ ? "bg-blue-50 text-blue-700 border-blue-200 shadow-sm" : "text-gray-700 hover:bg-gray-50 hover:shadow-sm border-transparent"} ${l ? "opacity-50 cursor-not-allowed" : ""}`,
                                  children: [
                                    r.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        _ === "B1F"
                                          ? r.jsx(nf, { className: "w-4 h-4" })
                                          : r.jsx(bh, { className: "w-4 h-4" }),
                                        r.jsxs("div", {
                                          className: "text-left",
                                          children: [
                                            r.jsx("div", {
                                              className: "font-medium",
                                              children: _,
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
                                      onClick: (L) => {
                                        (L.stopPropagation(), $(_));
                                      },
                                      className:
                                        "p-1 hover:bg-gray-200/50 rounded transition-colors",
                                      children: m.has(_)
                                        ? r.jsx(rf, { className: "w-4 h-4" })
                                        : r.jsx(fh, { className: "w-4 h-4" }),
                                    }),
                                  ],
                                }),
                                m.has(_) &&
                                  r.jsx("div", {
                                    className: "ml-6 space-y-2",
                                    children: N.map((L) =>
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
                                                children: L.name,
                                              }),
                                              r.jsx("span", {
                                                className: `text-xs px-2 py-1 rounded-full ${L.type === "調劑台" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`,
                                                children: L.type,
                                              }),
                                            ],
                                          }),
                                        },
                                        L.GUID,
                                      ),
                                    ),
                                  }),
                              ],
                            },
                            _,
                          ),
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
                          className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${c ? "bg-blue-600" : "bg-gray-300"}`,
                          children: r.jsx("span", {
                            className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${c ? "translate-x-6" : "translate-x-1"}`,
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
        r.jsx(Ch, { isOpen: y, onClose: () => v(!1) }),
        r.jsx(Dh, { isOpen: E, onClose: () => S(!1), onConfirm: F }),
      ],
    });
  },
  _h = () => {
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
  Mh = ({
    component: e,
    scale: t,
    isLocked: n,
    isHighlighted: s = !1,
    onContainerClick: o,
  }) => {
    const l = u.useRef(null),
      { t: a } = Mt(),
      {
        apiDepartmentData: i,
        setApiDepartmentData: c,
        showNotification: h,
      } = it(),
      [g, m] = u.useState(!1),
      [p, j] = u.useState({ x: 0, y: 0 }),
      [b, T] = u.useState(e.position),
      [k, f] = u.useState(!1),
      [d, y] = u.useState(null),
      [v, E] = u.useState({ x: 0, y: 0 }),
      [S, I] = u.useState({ x: 0, y: 0 });
    u.useEffect(() => {
      (console.log("🔄 CanvasComponent: position prop changed", {
        GUID: e.GUID,
        newPosition: e.position,
        currentPosition: b,
      }),
        T(e.position));
    }, [e.position]);
    const F = () => {
        try {
          const J = localStorage.getItem("medMap_setting");
          if (J) return JSON.parse(J).light_color || "red";
        } catch (J) {
          console.error("讀取高亮顏色設定失敗:", J);
        }
        return "red";
      },
      M = u.useCallback(
        async (J, ke) => {
          if (!i) return;
          console.log("🔄 更新組件位置:", J, ke);
          const Ee = JSON.parse(JSON.stringify(i)),
            De = (te) => {
              for (const D of te) {
                if (D.GUID === J)
                  return (
                    (D.position = { x: ke.x.toFixed(3), y: ke.y.toFixed(3) }),
                    console.log(
                      "✅ 組件位置已更新:",
                      D.name,
                      ke.x.toFixed(3),
                      ke.y.toFixed(3),
                    ),
                    !0
                  );
                if (
                  (D.components &&
                    Array.isArray(D.components) &&
                    De(D.components)) ||
                  (D.contents && Array.isArray(D.contents) && De(D.contents))
                )
                  return !0;
              }
              return !1;
            };
          if (De(Ee)) {
            (c(Ee), console.log("💾 全域資料已更新"));
            try {
              console.log("📡 開始同步後端位置資料...");
              const te = await Me.updateContainerPosition({
                GUID: J,
                absolute_position: `${ke.x.toFixed(3)},${ke.y.toFixed(3)}`,
              });
              te.Code === 200
                ? (console.log("✅ 後端位置同步成功", te),
                  h("位置更新成功", "success"))
                : (console.error("❌ 後端位置同步失敗:", te),
                  h(`位置更新失敗: ${te.Result || "未知錯誤"}`, "error"));
            } catch (te) {
              (console.error("💥 後端位置同步發生錯誤:", te),
                h("位置更新失敗: 網路錯誤", "error"));
            }
          } else console.warn("⚠️ 未找到要更新的組件:", J);
        },
        [i, c, h],
      ),
      { position: $, dimensions: se, name: ye, type: _ } = e,
      N = u.useCallback(
        (J) => {
          const ke = l.current;
          if (ke)
            if ((I({ x: J.clientX, y: J.clientY }), n)) {
              (J.preventDefault(),
                J.stopPropagation(),
                ke.setPointerCapture(J.pointerId));
              const Ee = ke.getBoundingClientRect(),
                De = J.clientX - Ee.left,
                Be = J.clientY - Ee.top;
              (j({ x: De, y: Be }), m(!0), f(!1));
            } else f(!1);
        },
        [n],
      ),
      L = u.useCallback(() => {
        if (!i) return [];
        const J = [],
          ke = (Ee) => {
            for (const De of Ee)
              (De.GUID !== e.GUID &&
                De.position &&
                J.push({
                  GUID: De.GUID,
                  position: De.position,
                  dimensions: De.dimensions,
                }),
                De.components &&
                  Array.isArray(De.components) &&
                  ke(De.components),
                De.contents && Array.isArray(De.contents) && ke(De.contents));
          };
        return (ke(i), J);
      }, [i, e.GUID]),
      P = u.useCallback(
        (J, ke) => {
          const De = L();
          let Be = J,
            te = ke;
          for (const D of De) {
            const ge = parseFloat(D.position.x),
              fe = parseFloat(D.position.y);
            if (
              (Math.abs(J - ge) < 20 && (Be = ge),
              Math.abs(ke - fe) < 20 && (te = fe),
              D.dimensions && e.dimensions)
            ) {
              const W = ge + parseFloat(D.dimensions.width),
                le = J + parseFloat(e.dimensions.width);
              Math.abs(le - W) < 20 &&
                (Be = W - parseFloat(e.dimensions.width));
              const be = fe + parseFloat(D.dimensions.depth),
                O = ke + parseFloat(e.dimensions.depth);
              Math.abs(O - be) < 20 &&
                (te = be - parseFloat(e.dimensions.depth));
            }
          }
          return { x: Be, y: te };
        },
        [L, e.dimensions],
      ),
      K = u.useCallback(
        (J) => {
          const ke = Math.abs(J.clientX - S.x),
            Ee = Math.abs(J.clientY - S.y);
          if (((ke > 5 || Ee > 5) && f(!0), !g || !n)) return;
          (J.preventDefault(), J.stopPropagation());
          const De = l.current;
          if (!De) return;
          const Be = De.closest("[data-canvas-content]");
          if (!Be) return;
          const te = Be.getBoundingClientRect(),
            D = (J.clientX - te.left - p.x) / t,
            ge = (J.clientY - te.top - p.y) / t,
            fe = P(D, ge);
          T(fe);
        },
        [g, p, t, n, P, S],
      ),
      w = u.useCallback(
        (J) => {
          const ke = Math.abs(J.clientX - S.x),
            Ee = Math.abs(J.clientY - S.y),
            De = ke > 5 || Ee > 5;
          if (n) {
            if (!g) return;
            (J.preventDefault(), J.stopPropagation());
            const Be = l.current;
            (Be && Be.releasePointerCapture(J.pointerId),
              m(!1),
              De ? M(e.GUID, b) : o && o(e),
              f(!1));
          } else
            (!De && o && (J.preventDefault(), J.stopPropagation(), o(e)),
              f(!1));
        },
        [g, n, o, e, M, b, S],
      ),
      B = u.useCallback(
        (J) => {
          const ke = l.current;
          if (!ke) return;
          const Ee = J.touches[0];
          if (Ee && (E({ x: Ee.clientX, y: Ee.clientY }), n)) {
            (J.preventDefault(), J.stopPropagation(), y(Ee.identifier));
            const De = ke.getBoundingClientRect(),
              Be = Ee.clientX - De.left,
              te = Ee.clientY - De.top;
            (j({ x: Be, y: te }), m(!0));
          }
        },
        [n],
      ),
      ee = u.useCallback(
        (J) => {
          if (!g || !n || d === null) return;
          (J.preventDefault(), J.stopPropagation());
          const ke = l.current;
          if (!ke) return;
          const Ee = Array.from(J.touches).find((fe) => fe.identifier === d);
          if (!Ee) return;
          const De = ke.closest("[data-canvas-content]");
          if (!De) return;
          const Be = De.getBoundingClientRect(),
            te = (Ee.clientX - Be.left - p.x) / t,
            D = (Ee.clientY - Be.top - p.y) / t,
            ge = P(te, D);
          T(ge);
        },
        [g, p, t, n, d, P],
      ),
      H = u.useCallback(
        (J) => {
          const ke = Array.from(J.changedTouches)[0];
          if (!ke) return;
          const Ee = Math.abs(ke.clientX - v.x),
            De = Math.abs(ke.clientY - v.y),
            Be = Ee > 10 || De > 10;
          if (n) {
            if (
              !g ||
              d === null ||
              !Array.from(J.changedTouches).some((D) => D.identifier === d)
            )
              return;
            (J.preventDefault(),
              J.stopPropagation(),
              m(!1),
              y(null),
              E({ x: 0, y: 0 }),
              Be ? M(e.GUID, b) : o && o(e));
          } else
            (!Be && o && (J.preventDefault(), J.stopPropagation(), o(e)),
              E({ x: 0, y: 0 }));
        },
        [g, n, d, M, e, b, v, o],
      ),
      A = u.useCallback(
        (J) => {
          !g ||
            !n ||
            d === null ||
            !Array.from(J.changedTouches).some((Ee) => Ee.identifier === d) ||
            (J.preventDefault(),
            J.stopPropagation(),
            T(e.position),
            m(!1),
            y(null),
            E({ x: 0, y: 0 }));
        },
        [g, n, d, e.position],
      ),
      Ne = (J) => {
        if (s) return `highlight-breathe-${F()}`;
        switch (J) {
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
      U = (J) => {
        if (s) return `highlight-breathe-${F()}`;
        switch (J) {
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
      G = (J) => {
        if (s) return `highlight-tag-${F()}`;
        switch (J) {
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
      he = (J) => {
        const ke =
          J === "調劑台"
            ? "type.dispensingStation"
            : J === "藥庫"
              ? "type.warehouse"
              : J === "parent_container"
                ? "櫃體"
                : "type." + J;
        return a(ke) || J;
      };
    return r.jsx("div", {
      ref: l,
      className: `flex flex-col absolute border-2 rounded-lg shadow-lg hover:shadow-xl ${Ne(_)} overflow-hidden ${n ? "cursor-move" : "cursor-default"} ${g ? "shadow-2xl z-50" : ""}`,
      style: {
        left: `${b.x}px`,
        top: `${b.y}px`,
        minWidth: _ === "調劑台" || _ === "藥庫" ? "120px" : "180px",
        minHeight: _ === "調劑台" || _ === "藥庫" ? "60px" : "120px",
        userSelect: "none",
        touchAction: "none",
        transition: g
          ? "none"
          : "transform 0.2s ease-out, box-shadow 0.2s ease-out",
      },
      onPointerDown: N,
      onPointerMove: K,
      onPointerUp: w,
      onTouchStart: B,
      onTouchMove: ee,
      onTouchEnd: H,
      onTouchCancel: A,
      children: r.jsx("div", {
        className: `w-full min-w-[400px] h-auto flex items-start flex-1 justify-between p-2 border-gray-600 ${U(_)}`,
        children: r.jsx("div", {
          className: "flex space-x-2 flex-1 min-w-0",
          children: r.jsxs("div", {
            className: "min-w-0 flex gap-4",
            children: [
              r.jsx("div", {
                className: "font-semibold text-[48px] truncate",
                children: ye,
              }),
              r.jsx("div", {
                className: `flex items-center text-[28px] truncate py-2 px-4 text-white rounded-2xl ${G(_)}`,
                children: he(_),
              }),
            ],
          }),
        }),
      }),
    });
  },
  il = ({ isOpen: e, onClose: t, onScanSuccess: n, mode: s }) => {
    const { showNotification: o, openAddBarcodeModal: l } = it();
    console.log("🔍 QRCodeScannerModal props:", {
      isOpen: e,
      mode: s,
      hasOnScanSuccess: !!n,
    });
    const a = u.useRef(null),
      i = u.useRef(null),
      c = u.useRef(null),
      h = u.useRef(null),
      g = u.useRef(!1),
      [m, p] = u.useState(!1),
      [j, b] = u.useState(""),
      [T, k] = u.useState(null),
      [f, d] = u.useState(!1);
    u.useEffect(() => {
      const M = () => {
        const $ = window.innerWidth < 680;
        d($);
      };
      return (
        M(),
        window.addEventListener("resize", M),
        () => window.removeEventListener("resize", M)
      );
    }, []);
    const y = async () => {
        try {
          b("");
          const M = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: "environment",
              width: { ideal: 9999 },
              height: { ideal: 9999 },
            },
          });
          ((c.current = M),
            a.current &&
              ((a.current.srcObject = M),
              await a.current.play(),
              console.log("✅ Camera started, setting isScanning to true"),
              p(!0)));
        } catch (M) {
          (console.error("無法開啟相機:", M),
            b("無法開啟相機，請確認相機權限已開啟"));
        }
      },
      v = () => {
        (console.log("🛑 停止相機和掃描"),
          (g.current = !1),
          p(!1),
          c.current &&
            (c.current.getTracks().forEach((M) => M.stop()),
            (c.current = null)),
          a.current && (a.current.srcObject = null));
      },
      E = async () => {
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
        const M = a.current,
          $ = i.current,
          se = $.getContext("2d");
        if (!se || M.readyState !== M.HAVE_ENOUGH_DATA) {
          (console.log("❌ Video not ready or no context"),
            (g.current = !1),
            setTimeout(() => {
              m && E();
            }, 100));
          return;
        }
        (($.width = M.videoWidth),
          ($.height = M.videoHeight),
          se.drawImage(M, 0, 0, $.width, $.height),
          $.toBlob(
            async (ye) => {
              if (!ye) return;
              const _ = new File([ye], "scan.jpg", { type: "image/jpeg" }),
                N = performance.now();
              try {
                console.log("📸 [相機掃描] 截取圖片並掃描...");
                const L = performance.now(),
                  P = await Me.scanBarcode(_),
                  K = performance.now();
                if (
                  (console.log(
                    `⏱️ [相機掃描] 掃描條碼API用時: ${(K - L).toFixed(2)}ms`,
                  ),
                  !P.results || P.results.length === 0)
                ) {
                  (console.log("⚠️ 未辨識到條碼，立即進行下一輪掃描"),
                    (g.current = !1),
                    m && E());
                  return;
                }
                const w = P.results[0];
                if (!w.code) {
                  (console.log(
                    "⚠️ 辨識到條碼但無法讀取內容，立即進行下一輪掃描",
                  ),
                    (g.current = !1),
                    m && E());
                  return;
                }
                (console.log("✅ 成功辨識條碼:", w.code),
                  console.log("📋 條碼類型:", w.type),
                  console.log("📊 信心度:", w.conf),
                  (g.current = !1),
                  v(),
                  t());
                try {
                  const B = performance.now(),
                    ee = await Me.searchByBarCode(w.code);
                  console.log("AI掃描回傳:", ee);
                  const H = performance.now();
                  if (
                    (console.log(
                      `⏱️ [相機掃描] 搜尋藥品資料API用時: ${(H - B).toFixed(2)}ms`,
                    ),
                    console.log("🔍 條碼搜尋結果:", ee),
                    ee.Code === 200)
                  )
                    if (
                      (console.log("✅ 找到藥品資料:", ee.Data),
                      console.log("🎯 準備調用 onScanSuccess, mode:", s),
                      o("找到藥品資料", "success"),
                      n)
                    ) {
                      console.log("✅ onScanSuccess 存在，開始調用");
                      const A = performance.now();
                      n(w.code, ee.Data);
                      const Ne = performance.now();
                      console.log(
                        `⏱️ [相機掃描] 定位藥品用時: ${(Ne - A).toFixed(2)}ms`,
                      );
                      const U = performance.now();
                      (console.log(
                        `⏱️ [相機掃描] 總用時: ${(U - N).toFixed(2)}ms`,
                      ),
                        console.log("✅ onScanSuccess 調用完成"));
                    } else console.warn("⚠️ onScanSuccess 不存在");
                  else
                    ee.Code === -200 && ee.Result === "查無資料"
                      ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                        o("查無條碼資料，請建立條碼", "warning"),
                        l(w.code))
                      : (console.log("❌ 搜尋失敗:", ee.Result),
                        o(ee.Result || "搜尋失敗", "error"));
                } catch (B) {
                  (console.error("條碼搜尋錯誤:", B),
                    o("搜尋失敗，請稍後再試", "error"));
                }
              } catch (L) {
                (console.error("掃描錯誤:", L),
                  (g.current = !1),
                  setTimeout(() => {
                    m && E();
                  }, 500));
              }
            },
            "image/jpeg",
            1,
          ));
      },
      S = () => {
        (console.log("🚀 開始連續掃描模式"), (g.current = !1), E());
      };
    (u.useEffect(
      () => (
        e ? y() : v(),
        () => {
          v();
        }
      ),
      [e],
    ),
      u.useEffect(() => {
        m
          ? (console.log("🚀 isScanning became true, starting continuous scan"),
            S())
          : (console.log("🛑 isScanning became false"), (g.current = !1));
      }, [m]));
    const I = () => {
        (v(), t());
      },
      F = async (M) => {
        if (!c.current || !h.current) return;
        const $ = h.current.getBoundingClientRect(),
          se = (M.clientX - $.left) / $.width,
          ye = (M.clientY - $.top) / $.height;
        (console.log("🎯 點擊聚焦位置:", { x: se, y: ye }),
          k({ x: M.clientX - $.left, y: M.clientY - $.top }),
          setTimeout(() => k(null), 1e3));
        try {
          const _ = c.current.getVideoTracks()[0],
            N = _.getCapabilities();
          if (
            (console.log("📹 相機能力:", N),
            !N.focusMode || !N.focusMode.includes("manual"))
          ) {
            console.log("⚠️ 此相機不支援手動聚焦");
            return;
          }
          const L = {
            advanced: [
              {
                focusMode: "manual",
                focusDistance: 0,
                pointsOfInterest: [{ x: se, y: ye }],
              },
            ],
          };
          (await _.applyConstraints(L), console.log("✅ 聚焦成功"));
        } catch (_) {
          console.log("⚠️ 聚焦失敗 (可能不支援):", _);
        }
      };
    return e
      ? f
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
                      r.jsx(Br, { className: "w-6 h-6 text-white" }),
                      r.jsx("h2", {
                        className: "text-lg font-semibold text-white",
                        children: "條碼掃描",
                      }),
                    ],
                  }),
                  r.jsx("button", {
                    onClick: I,
                    className:
                      "p-2 hover:bg-gray-700 rounded-lg transition-colors",
                    children: r.jsx(Ze, { className: "w-6 h-6 text-white" }),
                  }),
                ],
              }),
              r.jsxs("div", {
                className: "flex-1 relative",
                children: [
                  r.jsxs("div", {
                    ref: h,
                    className: "absolute inset-0 bg-black cursor-crosshair",
                    onClick: F,
                    children: [
                      r.jsx("video", {
                        ref: a,
                        className: "w-full h-full object-cover",
                        playsInline: !0,
                        muted: !0,
                      }),
                      T &&
                        r.jsxs("div", {
                          className: "absolute pointer-events-none",
                          style: {
                            left: T.x,
                            top: T.y,
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
                          children: r.jsx(Br, {
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
                      onClick: I,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ze, {
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
                          onClick: F,
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
  cf = ({ isOpen: e, onClose: t, medicineList: n, onSelectMedicine: s }) => {
    const [o, l] = u.useState(""),
      [a, i] = u.useState([]),
      c = u.useRef(null);
    (u.useEffect(() => {
      e &&
        (l(""),
        i([]),
        setTimeout(() => {
          var g;
          (g = c.current) == null || g.focus();
        }, 100));
    }, [e]),
      u.useEffect(() => {
        if (!o.trim()) {
          i([]);
          return;
        }
        const g = o.toLowerCase().trim(),
          m = n.filter((p) => {
            const j = (p.CODE || "").toLowerCase(),
              b = (p.NAME || "").toLowerCase(),
              T = (p.CHT_NAME || "").toLowerCase(),
              k = (p.SKDIACODE || "").toLowerCase();
            return (
              j.includes(g) || b.includes(g) || T.includes(g) || k.includes(g)
            );
          });
        i(m.slice(0, 50));
      }, [o, n]));
    const h = (g) => {
      (s && s(g), t());
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
                    children: r.jsx(Ze, { className: "w-6 h-6 text-gray-600" }),
                  }),
                ],
              }),
              r.jsxs("div", {
                className: "p-6 border-b border-gray-200",
                children: [
                  r.jsxs("div", {
                    className: "relative",
                    children: [
                      r.jsx(Vo, {
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
                            g.GUID,
                          ),
                        ),
                      })
                  : r.jsxs("div", {
                      className: "text-center py-12 text-gray-500",
                      children: [
                        r.jsx(Vo, {
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
class Eh {
  constructor() {
    ((this.currentTask = null), (this.isProcessing = !1));
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
        await this.sleep(200));
      const a = Math.round(o / 1e3);
      console.log("💡 開始新的亮燈任務");
      for (const i of t)
        try {
          const c = performance.now();
          await Me.lightByCodeNameType(
            i.serverName,
            i.serverType,
            i.medicineCode,
            n,
            s,
            i.deviceType,
            a,
          );
          const h = performance.now();
          console.log(
            `⏱️ 亮燈API用時 (${i.serverName}/${i.medicineCode}): ${(h - c).toFixed(2)}ms, 時間: ${a}秒`,
          );
        } catch (c) {
          console.error(`❌ 亮燈失敗 (${i.serverName}/${i.medicineCode}):`, c);
        }
      ((this.currentTask = { lightData: t, onLightOff: l }),
        console.log(
          `✅ 亮燈任務已設定，將於 ${a} 秒後自動滅燈（由伺服器控制）`,
        ));
    } finally {
      this.isProcessing = !1;
    }
  }
  async clearCurrentTask() {
    this.currentTask &&
      (console.log("🛑 清除當前亮燈任務"),
      await this.turnOffLights(this.currentTask.lightData),
      this.currentTask.onLightOff && this.currentTask.onLightOff(),
      (this.currentTask = null));
  }
  async turnOffLights(t) {
    console.log("🌑 開始執行滅燈...");
    for (const n of t)
      try {
        const s = performance.now();
        await Me.lightByCodeNameType(
          n.serverName,
          n.serverType,
          n.medicineCode,
          "0,0,0",
          "0",
          n.deviceType,
        );
        const o = performance.now();
        console.log(
          `⏱️ 滅燈API用時 (${n.serverName}/${n.medicineCode}): ${(o - s).toFixed(2)}ms`,
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
    (this.currentTask && (this.currentTask = null), (this.isProcessing = !1));
  }
}
const bs = new Eh(),
  df = (e, t, n = !0) => {
    const s = u.useRef(e),
      o = u.useRef(Date.now()),
      l = u.useRef(0);
    (u.useEffect(() => {
      s.current = e;
    }, [e]),
      u.useEffect(() => {
        if (!n || t <= 0) return;
        ((o.current = Date.now()), (l.current = 0));
        const a = setInterval(() => {
          const i = Date.now(),
            c = Math.floor((i - o.current) / 1e3);
          c >= 1 &&
            ((l.current += c),
            l.current >= t && (s.current(), (l.current = 0)),
            (o.current += c * 1e3));
        }, 1e3);
        return () => {
          clearInterval(a);
        };
      }, [t, n]));
  },
  Ih = ({ children: e }) => {
    const t = u.useRef(null),
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
      } = it(),
      { t: j } = Mt(),
      [b, T] = u.useState({ x: 0, y: 0, scale: 1 }),
      [k, f] = u.useState(!1),
      [d, y] = u.useState(!1),
      [v, E] = u.useState({ x: 0, y: 0 }),
      [S, I] = u.useState(!1),
      [F, M] = u.useState(!1),
      [$, se] = u.useState(!1),
      [ye, _] = u.useState(""),
      [N, L] = u.useState([]),
      [P, K] = u.useState(null),
      [w, B] = u.useState(120),
      ee = {
        blue: "255,0,0",
        green: "0,255,0",
        red: "0,0,255",
        yellow: "0,255,255",
        purple: "255,0,255",
        cyan: "255,255,0",
      },
      H = () => {
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
      A = (C, R, q, ue) => {
        try {
          const ie = H(),
            je = ie.findIndex(
              (We) => We.department === C && We.canvasType === R,
            ),
            Ue = { department: C, canvasType: R, scale: q, position: ue };
          (je >= 0 ? (ie[je] = Ue) : ie.push(Ue),
            localStorage.setItem("med_map_anchor", JSON.stringify(ie)));
        } catch (ie) {
          console.error("Error saving canvas state to localStorage:", ie);
        }
      },
      Ne = (C, R) =>
        H().find((ue) => ue.department === C && ue.canvasType === R) || null;
    (u.useEffect(() => {
      const C = localStorage.getItem("medMap_setting");
      if (C)
        try {
          const R = JSON.parse(C);
          R.refresh_interval !== void 0 && B(R.refresh_interval);
        } catch (R) {
          console.error("Failed to load refresh interval:", R);
        }
    }, []),
      u.useEffect(
        () => (
          m("infinite"),
          () => {
            m(null);
          }
        ),
        [m],
      ));
    const U = u.useCallback(async () => {
      if (!(g !== "infinite" || !n))
        try {
          console.log("🔄 Auto-refreshing data for InfiniteCanvas...");
          const C = await Me.getMedMapByDepartment(n);
          if (C.Code === 200 && C.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const R = Rt.convertMedMapApiToFakeData(C.Data);
            if (!Rt.validateConvertedData(R)) {
              console.error("❌ 轉換後的資料驗證失敗");
              return;
            }
            (console.log(
              "✅ Data refreshed and converted successfully, updating state...",
            ),
              console.log("📊 Converted data to set:", R),
              o(R));
          }
        } catch (C) {
          console.error("❌ Failed to auto-refresh data:", C);
        }
    }, [g, n, o]);
    (df(U, w, g === "infinite" && !!n),
      u.useEffect(() => {
        if (n) {
          const C = Ne(n, "InfiniteCanvas");
          if (C) T({ x: C.position.x, y: C.position.y, scale: C.scale });
          else {
            const R = { x: 0, y: 0, scale: 1 };
            (T(R), A(n, "InfiniteCanvas", R.scale, R));
          }
        }
      }, [n]),
      u.useEffect(() => {
        if (!n) return;
        const C = setTimeout(() => {
          A(n, "InfiniteCanvas", b.scale, { x: b.x, y: b.y });
        }, 500);
        return () => clearTimeout(C);
      }, [b, n]),
      u.useEffect(() => {
        console.log("🔄 InfiniteCanvas: apiDepartmentData changed", {
          hasData: !!s,
          length: (s == null ? void 0 : s.length) || 0,
          data: s,
        });
      }, [s]));
    const G = u.useMemo(() => {
      if (
        (console.log(
          "🔄 useMemo: Re-calculating components due to apiDepartmentData change",
        ),
        !s || s.length === 0)
      )
        return (console.log("⚠️ No apiDepartmentData available"), []);
      const C = s,
        R = [];
      console.log("🔍 Processing departments for InfiniteCanvas:", C);
      for (const q of C)
        if (
          (console.log("📦 Processing department:", q.name, "Type:", q.type),
          q.type === "調劑台" || q.type === "藥庫")
        ) {
          if (q.contents && Array.isArray(q.contents)) {
            console.log("  └─ Found", q.contents.length, "parent containers");
            for (const ue of q.contents)
              (console.log("    📌 Parent container:", {
                GUID: ue.GUID,
                name: ue.name,
                type: ue.type,
                position: ue.position,
                hasDimensions: !!ue.dimensions,
                dimensions: ue.dimensions,
              }),
                R.push({
                  GUID: ue.GUID,
                  type: ue.type,
                  name: `${ue.name}`,
                  position: ue.position,
                  dimensions: ue.dimensions || {
                    width: 200,
                    height: 200,
                    depth: 200,
                  },
                  med_list: ue.med_list || [],
                  serverName: ue.serverName,
                  serverType: ue.serverType,
                  Master_GUID: q.GUID,
                  contents: ue.contents || [],
                }));
          }
        } else
          q.contents &&
            Array.isArray(q.contents) &&
            q.contents.length > 0 &&
            (console.log("  └─ Found", q.contents.length, "contents"),
            R.push(...q.contents));
      return (
        console.log("✅ Total components for InfiniteCanvas:", R.length),
        R
      );
    }, [s]);
    (u.useEffect(() => {
      console.log("🎨 InfiniteCanvas: components changed", {
        count: G.length,
        components: G.map((C) => ({
          GUID: C.GUID,
          name: C.name,
          type: C.type,
          position: C.position,
        })),
      });
    }, [G]),
      u.useEffect(() => {
        const C = (q) => {
            q.code === "Space" && !q.repeat && (q.preventDefault(), I(!0));
          },
          R = (q) => {
            q.code === "Space" && (q.preventDefault(), I(!1), f(!1));
          };
        return (
          window.addEventListener("keydown", C),
          window.addEventListener("keyup", R),
          () => {
            (window.removeEventListener("keydown", C),
              window.removeEventListener("keyup", R));
          }
        );
      }, []));
    const he = u.useCallback(
        (C) => {
          var q;
          if (d) return;
          if (
            (C.ctrlKey && !navigator.userAgent.includes("Mac")) ||
            (C.metaKey && navigator.userAgent.includes("Mac"))
          ) {
            (C.preventDefault(), C.stopPropagation());
            const ue =
              (q = t.current) == null ? void 0 : q.getBoundingClientRect();
            if (!ue) return;
            const ie = C.clientX - ue.left,
              je = C.clientY - ue.top,
              Ue = C.deltaY > 0 ? 0.9 : 1.1,
              We = Math.max(0.1, Math.min(5, b.scale * Ue)),
              ct = We / b.scale,
              Et = ie - (ie - b.x) * ct,
              It = je - (je - b.y) * ct;
            T({ x: Et, y: It, scale: We });
          }
        },
        [b, d],
      ),
      J = u.useCallback(
        (C) => {
          d ||
            !S ||
            (f(!0), E({ x: C.clientX, y: C.clientY }), C.preventDefault());
        },
        [d, S],
      ),
      ke = u.useCallback(
        (C) => {
          if (!k || d) return;
          const R = C.clientX - v.x,
            q = C.clientY - v.y;
          (T((ue) => ({ ...ue, x: ue.x + R, y: ue.y + q })),
            E({ x: C.clientX, y: C.clientY }));
        },
        [k, v, d],
      ),
      Ee = u.useCallback(() => {
        f(!1);
      }, []),
      De = u.useCallback(
        (C) => {
          if (!s) return [];
          const R = [],
            q = (ue) => {
              for (const ie of ue)
                (ie.med_list &&
                  Array.isArray(ie.med_list) &&
                  ie.med_list.some((Ue) => Ue.code == C) &&
                  (console.log("✅ 找到藥品所在櫃體:", ie.name, ie.GUID),
                  R.push(ie)),
                  ie.components &&
                    Array.isArray(ie.components) &&
                    q(ie.components),
                  ie.contents && Array.isArray(ie.contents) && q(ie.contents));
            };
          return (q(s), R);
        },
        [s],
      ),
      Be = u.useCallback(() => {
        try {
          const R = localStorage.getItem("medMap_setting");
          if (R) {
            const ue = JSON.parse(R).light_sec;
            if (ue != null && ue !== "") {
              const ie = Number(ue);
              if (!isNaN(ie) && ie > 0) return ie * 1e3;
            }
          }
        } catch (R) {
          console.error("讀取亮燈設定失敗:", R);
        }
        return 6e4;
      }, []),
      te = u.useCallback(() => {
        const C = { rgb_color: "255,0,0", brightness: "100" };
        try {
          const R = localStorage.getItem("medMap_setting");
          if (R) {
            const q = JSON.parse(R),
              ue = q.light_color || "red";
            return {
              rgb_color: ee[ue] || ee.red,
              brightness: String(q.brightness !== void 0 ? q.brightness : 100),
            };
          }
        } catch (R) {
          console.error("讀取亮燈設定失敗:", R);
        }
        return C;
      }, []),
      D = u.useCallback(
        async (C) => {
          if (!C.trim()) return;
          console.log("🔍 搜尋藥碼:", C);
          const R = De(C);
          if (R.length > 0) {
            const q = Be(),
              ue = te();
            (console.log(`🎯 高亮 ${R.length} 個櫃體:`, R),
              console.log(`⏱️ 亮燈時長: ${q}ms (${q / 1e3}秒)`),
              console.log("💡 亮燈設定:", ue),
              l("找到藥品，開始亮燈", "success"));
            const ie = R.map((Ue) => Ue.GUID);
            (L(ie), K(C), h(C));
            const je = R.filter((Ue) => Ue.serverName && Ue.serverType).map(
              (Ue) => ({
                serverName: Ue.serverName,
                serverType: Ue.serverType,
                medicineCode: C,
                deviceType: Ue.device_type,
              }),
            );
            je.length > 0 &&
              (await bs.startLighting(je, ue.rgb_color, ue.brightness, q),
              setTimeout(() => {
                (L([]), K(null), h(null));
              }, q));
          } else
            (console.log("❌ 未找到包含此藥品的櫃體"), L([]), K(null), h(null));
        },
        [De, Be, te, h],
      ),
      ge = (C, R) => {
        var je, Ue;
        console.log("📍 [相機掃描-部門視圖] 藥品定位模式 - 掃描到藥品:", {
          barcode: C,
          medicineData: R,
        });
        const q =
          ((je = R[0]) == null ? void 0 : je.CODE) ||
          ((Ue = R[0]) == null ? void 0 : Ue.code);
        M(!1);
        const ue = performance.now();
        D(q);
        const ie = performance.now();
        console.log(
          `⏱️ [相機掃描-部門視圖] 亮燈用時: ${(ie - ue).toFixed(2)}ms`,
        );
      },
      fe = (C) => {
        console.log("📍 [藥品搜尋-部門視圖] 選擇藥品:", C);
        const R = C.CODE;
        (se(!1), l(`選擇藥品: ${C.NAME}`, "success"));
        const q = performance.now();
        D(R);
        const ue = performance.now();
        console.log(
          `⏱️ [藥品搜尋-部門視圖] 亮燈用時: ${(ue - q).toFixed(2)}ms`,
        );
      },
      W = async (C) => {
        var R, q;
        if (C.key === "Enter") {
          if ((C.preventDefault(), !ye.trim())) {
            l("請輸入條碼", "warning");
            return;
          }
          const ue = performance.now();
          try {
            console.log("🔍 [手動輸入-部門視圖] 搜尋條碼:", ye);
            const ie = performance.now(),
              je = await Me.searchByBarCode(ye),
              Ue = performance.now();
            if (
              (console.log(
                `⏱️ [手動輸入-部門視圖] API搜尋藥品資料用時: ${(Ue - ie).toFixed(2)}ms`,
              ),
              console.log("📋 條碼搜尋回應:", je),
              je.Code === 200 && je.Data && je.Data.length > 0)
            ) {
              const We =
                ((R = je.Data[0]) == null ? void 0 : R.CODE) ||
                ((q = je.Data[0]) == null ? void 0 : q.code);
              console.log("✅ 找到藥品資料:", je.Data);
              const ct = performance.now();
              D(We);
              const Et = performance.now();
              (console.log(
                `⏱️ [手動輸入-部門視圖] 亮燈用時: ${(Et - ct).toFixed(2)}ms`,
              ),
                _(""));
              const It = performance.now();
              console.log(
                `⏱️ [手動輸入-部門視圖] 總用時: ${(It - ue).toFixed(2)}ms`,
              );
            } else
              je.Code === -200 && je.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  l("查無條碼資料，請建立條碼", "warning"),
                  a(ye),
                  _(""))
                : (console.log("❌ 搜尋失敗:", je.Result),
                  l(je.Result || "搜尋失敗", "error"));
          } catch (ie) {
            (console.error("條碼搜尋錯誤:", ie),
              l("搜尋失敗，請稍後再試", "error"));
          }
        }
      };
    (u.useEffect(
      () => () => {
        bs.cleanup();
      },
      [],
    ),
      u.useEffect(() => {
        if (c) {
          console.log("🔔 Context highlightedMedicineCode 變化:", c);
          const C = De(c);
          if (C.length > 0) {
            const R = C.map((q) => q.GUID);
            (L(R), K(c), console.log("✨ UI 高亮已更新:", R));
          }
        } else (L([]), K(null));
      }, [c, De]));
    const [le, be] = u.useState(null),
      [O, oe] = u.useState({ x: 0, y: 0 }),
      V = (C) => {
        if (C.length < 2) return null;
        const R = C[0],
          q = C[1];
        return Math.sqrt(
          Math.pow(q.clientX - R.clientX, 2) +
            Math.pow(q.clientY - R.clientY, 2),
        );
      },
      xe = (C) => {
        if (C.length === 1) return { x: C[0].clientX, y: C[0].clientY };
        const R = C[0],
          q = C[1];
        return {
          x: (R.clientX + q.clientX) / 2,
          y: (R.clientY + q.clientY) / 2,
        };
      },
      ce = u.useCallback(
        (C) => {
          if (!d) {
            if (C.touches.length === 2) {
              const R = V(C.touches),
                q = xe(C.touches);
              (be(R), oe(q));
            } else if (C.touches.length === 1) {
              const R = C.touches[0];
              (E({ x: R.clientX, y: R.clientY }), f(!0));
            }
          }
        },
        [d],
      ),
      we = u.useCallback(
        (C) => {
          var R;
          if (!d) {
            if ((C.preventDefault(), C.touches.length === 2 && le !== null)) {
              const q = V(C.touches),
                ue = xe(C.touches);
              if (q && le) {
                const ie =
                  (R = t.current) == null ? void 0 : R.getBoundingClientRect();
                if (!ie) return;
                const je = q / le,
                  Ue = Math.max(0.1, Math.min(5, b.scale * je)),
                  We = ue.x - ie.left,
                  ct = ue.y - ie.top,
                  Et = Ue / b.scale,
                  It = We - (We - b.x) * Et,
                  cr = ct - (ct - b.y) * Et;
                (T({ x: It, y: cr, scale: Ue }), be(q), oe(ue));
              }
            } else if (C.touches.length === 1 && k) {
              const q = C.touches[0],
                ue = q.clientX - v.x,
                ie = q.clientY - v.y;
              (T((je) => ({ ...je, x: je.x + ue, y: je.y + ie })),
                E({ x: q.clientX, y: q.clientY }));
            }
          }
        },
        [b, le, k, v, d],
      ),
      pe = u.useCallback(() => {
        (be(null), f(!1));
      }, []);
    return (
      u.useEffect(() => {
        const C = t.current;
        if (C)
          return (
            C.addEventListener("wheel", he, { passive: !1 }),
            () => C.removeEventListener("wheel", he)
          );
      }, [he]),
      u.useCallback(() => {
        T({ x: 0, y: 0, scale: 1 });
      }, []),
      r.jsxs("div", {
        className: "relative w-full h-full overflow-hidden bg-gray-50",
        children: [
          r.jsx("div", {
            className:
              "absolute lg:bottom-4 lg:left-4 bottom-16 left-[50%] lg:translate-x-[0%] translate-x-[-50%] z-10",
            children: r.jsxs("div", {
              className:
                "bg-white rounded-lg shadow-lg flex items-center overflow-hidden border border-gray-200",
              children: [
                r.jsx("button", {
                  onClick: () => se(!0),
                  className: "p-2 hover:bg-gray-50 transition-colors",
                  title: "搜尋藥品",
                  children: r.jsx(Vo, { className: "w-6 h-6 text-blue-600" }),
                }),
                r.jsx("div", { className: "w-px h-6 bg-gray-200" }),
                r.jsx("input", {
                  type: "text",
                  value: ye,
                  onChange: (C) => _(C.target.value),
                  onKeyPress: W,
                  placeholder: "輸入條碼或掃描...",
                  className:
                    "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
                }),
                r.jsx("button", {
                  onClick: () => M(!0),
                  className: "p-2 hover:bg-gray-50 transition-colors",
                  title: "掃描條碼",
                  children: r.jsx(Br, { className: "w-6 h-6 text-blue-600" }),
                }),
              ],
            }),
          }),
          r.jsx("div", {
            className: "absolute bottom-4 right-4 z-10 flex gap-2",
            children: r.jsx("button", {
              onClick: () => y(!d),
              className: `p-3 rounded-lg shadow-lg transition-colors ${d ? "bg-red-500 text-white hover:bg-red-600" : "bg-white text-gray-700 hover:bg-gray-50"}`,
              title: j(d ? "canvas.unlockCanvas" : "canvas.lockCanvas"),
              children: d
                ? r.jsx(ki, { className: "w-6 h-6" })
                : r.jsx(af, { className: "w-6 h-6" }),
            }),
          }),
          r.jsx("div", {
            ref: t,
            className: `w-full h-full relative ${S && !d ? "cursor-grab" : "cursor-default"} ${k ? "cursor-grabbing" : ""}`,
            onMouseDown: J,
            onMouseMove: ke,
            onMouseUp: Ee,
            onMouseLeave: Ee,
            onTouchStart: ce,
            onTouchMove: we,
            onTouchEnd: pe,
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
                    G.map((C) =>
                      r.jsx(
                        Mh,
                        {
                          component: C,
                          scale: b.scale,
                          isLocked: d,
                          isHighlighted: N.includes(C.GUID),
                          onContainerClick: (R) => {
                            (console.log("🖱️ 點擊櫃體，傳遞亮燈藥品代碼:", P),
                              i(R, P));
                          },
                        },
                        C.GUID,
                      ),
                    ),
                    e,
                  ],
                }),
              ],
            }),
          }),
          r.jsx(il, {
            isOpen: F,
            onClose: () => M(!1),
            onScanSuccess: ge,
            mode: "med_light_location_mode",
          }),
          r.jsx(cf, {
            isOpen: $,
            onClose: () => se(!1),
            medicineList: p,
            onSelectMedicine: fe,
          }),
        ],
      })
    );
  },
  ls = ({ content: e, isAdminMode: t }) => {
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
        openEditParentContainerModal: T,
        updateContainerInLocalData: k,
        removeContainerFromLocalData: f,
      } = it(),
      { t: d } = Mt(),
      [y, v] = u.useState(!1),
      [E, S] = u.useState(""),
      [I, F] = u.useState(!1),
      [M, $] = u.useState(e.name),
      [se, ye] = u.useState(!1),
      [_, N] = u.useState(!1);
    u.useEffect(() => {
      $(e.name);
    }, [e.name]);
    const L = (G) => {
        (G.stopPropagation(), S(e.name || ""), v(!0));
      },
      P = (G) => {
        (G.stopPropagation(), v(!1), S(""));
      },
      K = (G) => {
        (G.stopPropagation(), N(!0));
      },
      w = (G) => {
        (G.stopPropagation(), N(!1));
      },
      B = async (G) => {
        (G.stopPropagation(), ye(!0));
        try {
          let he;
          if (e.type === "parent_container")
            he = await Me.deleteParentContainer(e.GUID);
          else if (e.type === "sub_container")
            he = await Me.deleteSubContainer(e.GUID);
          else if (
            e.type === "store_shelves" ||
            e.type === "dispensing_shelves"
          )
            he = await Me.deleteShelfContainer(e.GUID);
          else {
            (p("不支援的容器類型", "error"), ye(!1), N(!1));
            return;
          }
          he.Code === 200
            ? (p("刪除成功", "success"), f(e.GUID), N(!1))
            : p(he.Result || "刪除失敗", "error");
        } catch (he) {
          (console.error("刪除容器失敗:", he),
            p("刪除失敗，請稍後再試", "error"));
        } finally {
          (ye(!1), N(!1));
        }
      },
      ee = async (G) => {
        if ((G.stopPropagation(), !E.trim())) {
          p("名稱不能為空", "error");
          return;
        }
        if (E === e.name) {
          v(!1);
          return;
        }
        F(!0);
        try {
          const he = [
            {
              GUID: e.GUID,
              name: E.trim(),
              Master_GUID: e.Master_GUID,
              position: e.gird_position,
              serverName: e.serverName,
              serverType: e.serverType,
            },
          ];
          let J;
          if (e.type === "store_shelves" || e.type === "dispensing_shelves")
            J = await Me.updateMedMapShelf(he);
          else if (e.type === "sub_container")
            J = await Me.updateSubSection(he);
          else if (e.type === "parent_container")
            J = await Me.updateMedMapSection(he);
          else {
            (p("不支援的容器類型", "error"), F(!1));
            return;
          }
          J.Code === 200
            ? (p("名稱更新成功", "success"),
              v(!1),
              $(E.trim()),
              k(e.GUID, { name: E.trim() }))
            : p(J.Result || "更新失敗", "error");
        } catch (he) {
          (console.error("更新名稱失敗:", he),
            p("更新失敗，請稍後再試", "error"));
        } finally {
          F(!1);
        }
      },
      H = (G) => {
        switch (G) {
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
      A = (G) => {
        switch (G) {
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
      Ne = (G) => {
        switch (G) {
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
      U = (G) => {
        switch (G) {
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
            return G;
        }
      };
    switch (e.type) {
      case "sub_container":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${H(e.type || 0)} ${A(e.type || 0)}`,
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                y
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: E,
                          onChange: (G) => S(G.target.value),
                          onClick: (G) => G.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: ee,
                          disabled: I,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(lo, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: P,
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Ze, {
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
                          onClick: L,
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(Dr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !y &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Ne(e.type)}`,
                    children: U(e.type),
                  }),
              ],
            }),
            e.type !== "none" &&
              !y &&
              r.jsxs("div", {
                className: "flex items-center space-x-1",
                children: [
                  t &&
                    r.jsx("button", {
                      className:
                        "p-1 hover:bg-red-100 rounded transition-colors",
                      onClick: K,
                      title: "刪除容器",
                      children: r.jsx(kr, {
                        className: "w-5 h-5 text-red-600",
                      }),
                    }),
                  r.jsx("button", {
                    className:
                      "p-1 hover:bg-black/10 rounded transition-colors",
                    onClick: (G) => {
                      (G.stopPropagation(), a(e));
                    },
                    title: d("modal.add"),
                    children: r.jsx($t, {
                      className: "w-6 h-6 text-green-700",
                    }),
                  }),
                ],
              }),
            _ &&
              r.jsx("div", {
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4",
                  onClick: (G) => G.stopPropagation(),
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
                          onClick: w,
                          disabled: se,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: B,
                          disabled: se,
                          className:
                            "px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: se ? "刪除中..." : "確認刪除",
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${H(e.type || 0)} ${A(e.type || 0)} cursor-pointer hover:bg-black/5 transition-colors`,
          onClick: (G) => {
            y || T(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                y
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: E,
                          onChange: (G) => S(G.target.value),
                          onClick: (G) => G.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (G) => {
                            (G.stopPropagation(), ee(G));
                          },
                          disabled: I,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(lo, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: (G) => {
                            (G.stopPropagation(), P(G));
                          },
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Ze, {
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
                          onClick: (G) => {
                            (G.stopPropagation(), L(G));
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(Dr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" && !y
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Ne(e.type)}`,
                      children: U(e.type),
                    })
                  : null,
              ],
            }),
            e.type !== "none" &&
              !y &&
              r.jsxs("div", {
                className: "flex items-center space-x-1",
                children: [
                  t &&
                    r.jsx("button", {
                      className:
                        "p-1 hover:bg-red-100 rounded transition-colors",
                      onClick: K,
                      title: "刪除容器",
                      children: r.jsx(kr, {
                        className: "w-5 h-5 text-red-600",
                      }),
                    }),
                  r.jsx("button", {
                    className:
                      "p-1 hover:bg-black/10 rounded transition-colors",
                    onClick: (G) => {
                      (G.stopPropagation(), i(e));
                    },
                    title: d("modal.add"),
                    children: r.jsx($t, {
                      className: "w-6 h-6 text-green-700",
                    }),
                  }),
                ],
              }),
            _ &&
              r.jsx("div", {
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4",
                  onClick: (G) => G.stopPropagation(),
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
                          onClick: w,
                          disabled: se,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: B,
                          disabled: se,
                          className:
                            "px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: se ? "刪除中..." : "確認刪除",
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${H(e.type || 0)} ${A(e.type || 0)}`,
          children: [
            r.jsx("div", {
              className: "flex items-center mr-4",
              children:
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Ne(e.type)}`,
                      children: U(e.type),
                    })
                  : null,
            }),
            r.jsx("div", {
              className: "flex items-center space-x-1",
              children: r.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                onClick: (G) => {
                  (G.stopPropagation(), n(e));
                },
                title: d("modal.settings"),
                children: r.jsx(Tn, { className: "w-6 h-6 text-gray-600" }),
              }),
            }),
          ],
        });
      case "dispensing_shelves":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${H(e.type || 0)} ${A(e.type || 0)}`,
          onClick: (G) => {
            y || b(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                y
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: E,
                          onChange: (G) => S(G.target.value),
                          onClick: (G) => G.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: ee,
                          disabled: I,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(lo, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: P,
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Ze, {
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
                          onClick: (G) => {
                            (G.stopPropagation(), L(G));
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(Dr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !y &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Ne(e.type)}`,
                    children: U(e.type),
                  }),
              ],
            }),
            r.jsxs("div", {
              className: "flex items-center space-x-1",
              children: [
                t &&
                  !y &&
                  r.jsx("button", {
                    className: "p-1 hover:bg-red-100 rounded transition-colors",
                    onClick: K,
                    title: "刪除容器",
                    children: r.jsx(kr, { className: "w-5 h-5 text-red-600" }),
                  }),
                r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (G) => {
                    G.stopPropagation();
                    const he = {
                      GUID: `new_medbox_${Date.now()}`,
                      name: "",
                      box_type: "",
                      width: [],
                      width_index: 0,
                      med_info: [],
                      parentShelf: e,
                    };
                    (h(he), g("add"), m(!0));
                  },
                  title: d("modal.add"),
                  children: r.jsx($t, { className: "w-6 h-6 text-green-700" }),
                }),
              ],
            }),
            _ &&
              r.jsx("div", {
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4",
                  onClick: (G) => G.stopPropagation(),
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
                          onClick: w,
                          disabled: se,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: B,
                          disabled: se,
                          className:
                            "px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: se ? "刪除中..." : "確認刪除",
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${H(e.type || 0)} ${A(e.type || 0)} cursor-pointer hover:bg-black/5 transition-colors`,
          onClick: (G) => {
            y || b(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                y
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: E,
                          onChange: (G) => S(G.target.value),
                          onClick: (G) => G.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (G) => {
                            (G.stopPropagation(), ee(G));
                          },
                          disabled: I,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(lo, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: (G) => {
                            (G.stopPropagation(), P(G));
                          },
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(Ze, {
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
                          onClick: (G) => {
                            (G.stopPropagation(), L(G));
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(Dr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !y &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Ne(e.type)}`,
                    children: U(e.type),
                  }),
              ],
            }),
            r.jsxs("div", {
              className: "flex items-center space-x-1",
              children: [
                t &&
                  !y &&
                  r.jsx("button", {
                    className: "p-1 hover:bg-red-100 rounded transition-colors",
                    onClick: K,
                    title: "刪除容器",
                    children: r.jsx(kr, { className: "w-5 h-5 text-red-600" }),
                  }),
                r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (G) => {
                    (G.stopPropagation(), c(e));
                  },
                  title: d("modal.add"),
                  children: r.jsx($t, { className: "w-6 h-6 text-green-700" }),
                }),
              ],
            }),
            _ &&
              r.jsx("div", {
                className:
                  "absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm",
                children: r.jsxs("div", {
                  className: "bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4",
                  onClick: (G) => G.stopPropagation(),
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
                          onClick: w,
                          disabled: se,
                          className:
                            "px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        r.jsx("button", {
                          onClick: B,
                          disabled: se,
                          className:
                            "px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: se ? "刪除中..." : "確認刪除",
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
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${H(e.type || 0)} ${A(e.type || 0)}`,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Ne(e.type)}`,
                      children: U(e.type),
                    })
                  : null,
              ],
            }),
            r.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (G) => {
                (G.stopPropagation(), o(e));
              },
              title: d("modal.settings"),
              children: r.jsx(Tn, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      case "grid_draw":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${H(e.type || 0)} ${A(e.type || 0)}`,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Ne(e.type)}`,
                      children: U(e.type),
                    })
                  : null,
              ],
            }),
            r.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (G) => {
                (G.stopPropagation(), l(e));
              },
              title: d("modal.settings"),
              children: r.jsx(Tn, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      default:
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${H(e.type || 0)} ${A(e.type || 0)}`,
          children: [
            r.jsx("div", {
              className: "flex items-center space-x-2 mr-6",
              children:
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Ne(e.type)}`,
                      children: U(e.type),
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
  uf = u.forwardRef(({ children: e }, t) => {
    const n = u.useRef(null),
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
        medicineList: T,
      } = it(),
      [k, f] = u.useState({ x: 0, y: 0, scale: 1 }),
      [d, y] = u.useState(!1),
      [v, E] = u.useState(!1),
      [S, I] = u.useState({ x: 0, y: 0 }),
      [F, M] = u.useState(!1),
      [$, se] = u.useState(""),
      [ye, _] = u.useState(!1),
      [N, L] = u.useState(!1),
      [P, K] = u.useState(null),
      [w, B] = u.useState(!1),
      [ee, H] = u.useState(120),
      [A, Ne] = u.useState({
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
      [U, G] = u.useState(null),
      he = u.useRef({}),
      J = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        ) ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0,
      ke = 8,
      Ee = () => {
        try {
          const x = localStorage.getItem("med_map_anchor");
          return x ? JSON.parse(x) : [];
        } catch (x) {
          return (
            console.error("Error reading canvas states from localStorage:", x),
            []
          );
        }
      },
      De = (x, Z, ne, z) => {
        try {
          const me = Ee(),
            Y = me.findIndex(
              (re) => re.department === x && re.canvasType === Z,
            ),
            X = { department: x, canvasType: Z, scale: ne, position: z };
          (Y >= 0 ? (me[Y] = X) : me.push(X),
            localStorage.setItem("med_map_anchor", JSON.stringify(me)));
        } catch (me) {
          console.error("Error saving canvas state to localStorage:", me);
        }
      },
      Be = (x, Z) =>
        Ee().find((z) => z.department === x && z.canvasType === Z) || null;
    (u.useEffect(() => {
      const x = localStorage.getItem("medMap_setting");
      if (x)
        try {
          const Z = JSON.parse(x);
          Z.refresh_interval !== void 0 && H(Z.refresh_interval);
        } catch (Z) {
          console.error("Failed to load refresh interval:", Z);
        }
    }, []),
      u.useEffect(
        () => (
          b("drug"),
          () => {
            b(null);
          }
        ),
        [b],
      ));
    const te = u.useCallback(async () => {
      if (!(j !== "drug" || !s))
        try {
          console.log("🔄 Auto-refreshing data for DrugCanvas...");
          const x = await Me.getMedMapByDepartment(s);
          if (x.Code === 200 && x.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const Z = Rt.convertMedMapApiToFakeData(x.Data);
            if (!Rt.validateConvertedData(Z)) {
              console.error("❌ 轉換後的資料驗證失敗");
              return;
            }
            (console.log(
              "✅ Data refreshed and converted successfully, updating state...",
            ),
              l(Z));
          }
        } catch (x) {
          console.error("❌ Failed to auto-refresh data:", x);
        }
    }, [j, s, l]);
    (df(te, ee, j === "drug" && !!s),
      u.useEffect(() => {
        if (s) {
          const x = Be(s, "drugCanvas");
          if (x) f({ x: x.position.x, y: x.position.y, scale: x.scale });
          else {
            const Z = { x: 0, y: 0, scale: 1 };
            (f(Z), De(s, "drugCanvas", Z.scale, Z));
          }
        }
      }, [s]),
      u.useEffect(() => {
        if (!s) return;
        const x = setTimeout(() => {
          De(s, "drugCanvas", k.scale, { x: k.x, y: k.y });
        }, 500);
        return () => clearTimeout(x);
      }, [k, s]));
    const D = (x) =>
        [
          "parent_container",
          "sub_container",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
          "med_box",
        ].includes(x),
      ge = (x) =>
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
        })[x] || [],
      fe = (x) => {
        const [Z, ne] = x.split(",").map(Number);
        return { row: Z || 0, col: ne || 0 };
      },
      W = (x, Z) => {
        const ne = (me, Y = null) => {
            if (me.GUID === x) return { container: me, parent: Y };
            if (me.contents)
              for (const X of me.contents) {
                const re = ne(X, me);
                if (re) return re;
              }
            return null;
          },
          z = cr();
        for (const me of z) {
          const Y = ne(me);
          if (Y) return Y;
        }
        return null;
      },
      le = (x, Z) => {
        if (!x.contents) return [];
        const ne = Z;
        if (!ne) return x.contents;
        const z = fe(ne.gird_position);
        console.log("📤 移除容器位置:", z);
        for (const me of x.contents) {
          const Y = fe(me.gird_position);
          if (Y.row === z.row && Y.col > z.col) {
            const X = Y.col - 1;
            ((me.gird_position = `${Y.row},${X}`),
              console.log(
                `  ← 容器 ${me.GUID}: (${Y.row},${Y.col}) → (${Y.row},${X})`,
              ),
              (he.current[me.GUID] = {
                GUID: me.GUID,
                Master_GUID: x.GUID,
                position: `${Y.row},${X}`,
                serverName: x.serverName,
                serverType: x.serverType,
                type: me.type,
                containerData: me,
              }));
          }
        }
        return (console.log("✓ 重新計算完成"), x.contents);
      },
      be = (x, Z, ne, z, me) => {
        if (
          (x.contents || (x.contents = []),
          console.log("📥 插入容器到位置:", `(${ne},${z})`),
          console.log("   插入方向:", me),
          console.log("   目標父容器:", x.GUID),
          console.log("   插入前容器數量:", x.contents.length),
          x.contents.length === 0)
        )
          ((ne = 0), (z = 0), console.log("   父容器為空，放置在 (0,0)"));
        else {
          const Y = x.contents
            .filter((X) => {
              const re = fe(X.gird_position || "0,0");
              return re.row === ne && re.col >= z;
            })
            .sort((X, re) => {
              const ae = fe(X.gird_position || "0,0");
              return fe(re.gird_position || "0,0").col - ae.col;
            });
          console.log(`   同 row ${ne} 需要移動的容器數量:`, Y.length);
          for (const X of Y) {
            const re = fe(X.gird_position || "0,0"),
              ae = re.col + 1;
            ((X.gird_position = `${re.row},${ae}`),
              console.log(
                `  → 容器 ${X.GUID}: (${re.row},${re.col}) → (${re.row},${ae})`,
              ),
              (he.current[X.GUID] = {
                GUID: X.GUID,
                Master_GUID: x.GUID,
                position: `${re.row},${ae}`,
                serverName: x.serverName,
                serverType: x.serverType,
                type: X.type,
                containerData: X,
              }));
          }
        }
        ((Z.gird_position = `${ne},${z}`),
          (Z.Master_GUID = x.GUID),
          console.log(`Inserted container ${Z.GUID} at position ${ne},${z}`),
          x.contents.push(Z),
          (he.current[Z.GUID] = {
            GUID: Z.GUID,
            Master_GUID: x.GUID,
            position: `${ne},${z}`,
            serverName: x.serverName,
            serverType: x.serverType,
            type: Z.type,
            containerData: Z,
          }),
          Z.type === "dispensing_shelves" &&
            Z.contents &&
            Z.contents.forEach((Y) => {
              Y.type === "med_box" &&
                (he.current[Y.GUID] = {
                  GUID: Y.GUID,
                  Master_GUID: Y.Master_GUID,
                  position: Y.gird_position,
                  serverName: x.serverName,
                  serverType: x.serverType,
                  type: Y.type,
                  containerData: Y,
                });
            }));
      },
      O = (x, Z, ne) => {
        const z = x.getBoundingClientRect(),
          me = z.left + z.width / 2,
          Y = z.top + z.height / 2,
          X = Z - me,
          re = ne - Y;
        return Math.abs(X) > Math.abs(re)
          ? X > 0
            ? "right"
            : "left"
          : re > 0
            ? "bottom"
            : "top";
      },
      oe = (x, Z, ne, z) => {
        if (!v) return;
        if ((z.preventDefault(), z.stopPropagation(), A.floatingElement))
          try {
            A.floatingElement.parentNode &&
              A.floatingElement.parentNode.removeChild(A.floatingElement);
          } catch (ve) {
            console.error("清除舊浮動元素失敗:", ve);
          }
        const me = J(),
          Y =
            "touches" in z
              ? z.touches[0].clientX
              : ("pointerId" in z, z.clientX),
          X =
            "touches" in z
              ? z.touches[0].clientY
              : ("pointerId" in z, z.clientY),
          re = ne.getBoundingClientRect(),
          ae = { x: Y - re.left, y: X - re.top },
          Q = ne.cloneNode(!0);
        ((Q.style.position = "fixed"),
          (Q.style.left = `${Y - ae.x}px`),
          (Q.style.top = `${X - ae.y}px`),
          (Q.style.width = `${re.width}px`),
          (Q.style.height = `${re.height}px`),
          (Q.style.zIndex = "9999"),
          (Q.style.opacity = "0.8"),
          (Q.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (Q.style.pointerEvents = "none"),
          document.body.appendChild(Q),
          console.log("開始拖曳 stockItem:", x),
          console.log("來源 shelf:", Z),
          Ne({
            isDragging: !0,
            draggedContainer: null,
            draggedElement: ne,
            floatingElement: Q,
            originalParent: null,
            originalPosition: "",
            originalIndex: -1,
            mouseOffset: ae,
            isMobileDrag: me,
            originalData: null,
            draggedStockItem: x,
            draggedStockShelf: Z,
          }));
      },
      V = (x, Z, ne) => {
        if (!v || !D(x.type)) return;
        if (x.type === "sub_container" && !p) {
          m("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (x.type === "grid_draw" && !p) {
          m("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (x.type === "list_draw" && !p) {
          m("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (x.type === "parent_container" && !p) {
          m("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (x.type === "dispensing_shelves" && !p) {
          m("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (x.type === "store_shelves" && !p) {
          m("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (
          ((he.current = {}),
          ne.preventDefault(),
          ne.stopPropagation(),
          A.floatingElement)
        )
          try {
            A.floatingElement.parentNode &&
              A.floatingElement.parentNode.removeChild(A.floatingElement);
          } catch (Te) {
            console.error("清除舊浮動元素失敗:", Te);
          }
        const z = J(),
          me =
            "touches" in ne
              ? ne.touches[0].clientX
              : ("pointerId" in ne, ne.clientX),
          Y =
            "touches" in ne
              ? ne.touches[0].clientY
              : ("pointerId" in ne, ne.clientY),
          X = Z.getBoundingClientRect(),
          re = { x: me - X.left, y: Y - X.top },
          ae = W(x.GUID);
        if (!ae) return;
        (console.log("拖曳目標", x), console.log("拖曳目標", ae));
        const Q = Z.cloneNode(!0);
        ((Q.style.position = "fixed"),
          (Q.style.left = `${me - re.x}px`),
          (Q.style.top = `${Y - re.y}px`),
          (Q.style.width = `${X.width}px`),
          (Q.style.height = `${X.height}px`),
          (Q.style.zIndex = "9999"),
          (Q.style.opacity = "0.8"),
          (Q.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (Q.style.pointerEvents = "none"),
          document.body.appendChild(Q));
        const ve = ae.parent.contents.findIndex((Te) => Te.GUID === x.GUID),
          Ce = JSON.parse(JSON.stringify(ae.parent.contents));
        (ae.parent.contents.splice(ve, 1), console.log(ve));
        const Ae = ae.parent,
          Ie = le(ae.parent, x);
        ((ae.parent.contents = Ie),
          console.log(ae.parent),
          Ne({
            isDragging: !0,
            draggedContainer: x,
            draggedElement: Z,
            floatingElement: Q,
            originalParent: Ae,
            originalPosition: x.gird_position,
            originalIndex: ve,
            mouseOffset: re,
            isMobileDrag: z,
            originalData: Ce,
          }));
      },
      xe = (x) => {
        if (!A.isDragging || !A.floatingElement) return;
        const Z = "touches" in x ? x.touches[0].clientX : x.clientX,
          ne = "touches" in x ? x.touches[0].clientY : x.clientY;
        if (
          ((A.floatingElement.style.left = `${Z - A.mouseOffset.x}px`),
          (A.floatingElement.style.top = `${ne - A.mouseOffset.y}px`),
          A.draggedStockItem)
        ) {
          const Y = document.elementFromPoint(Z, ne),
            X = Y == null ? void 0 : Y.closest("[data-stock-guid]");
          if (X) {
            const ae = X.getAttribute("data-stock-guid"),
              Q = (Ce) => {
                for (const Ae of Ce) {
                  if (Ae.type === "store_shelves" && Ae.medMapStock) {
                    const Ie = Ae.medMapStock.find((Te) => Te.GUID === ae);
                    if (Ie) return { stockItem: Ie, shelf: Ae };
                  }
                  if (Ae.contents) {
                    const Ie = Q(Ae.contents);
                    if (Ie) return Ie;
                  }
                }
                return null;
              },
              ve = Q(o);
            if (ve && ve.stockItem.GUID !== A.draggedStockItem.GUID) {
              const Ce = X.getBoundingClientRect(),
                Ae = Ce.left + Ce.width / 2,
                Ie = Ce.top + Ce.height / 2,
                Te = Math.abs(Z - Ae),
                He = Math.abs(ne - Ie);
              let Oe;
              (Te > He
                ? (Oe = Z < Ae ? "left" : "right")
                : (Oe = ne < Ie ? "top" : "bottom"),
                G({
                  container: ve.shelf,
                  direction: null,
                  element: X,
                  stockItem: ve.stockItem,
                  stockItemDirection: Oe,
                }));
              return;
            }
          }
          const re = Y == null ? void 0 : Y.closest("[data-container-guid]");
          if (re) {
            const ae = re.getAttribute("data-container-guid"),
              Q = W(ae);
            if (Q && Q.container.type === "store_shelves") {
              G({ container: Q.container, direction: null, element: re });
              return;
            }
          }
          G(null);
          return;
        }
        const z = document.elementFromPoint(Z, ne),
          me = z == null ? void 0 : z.closest("[data-container-guid]");
        if (me) {
          const Y = me.getAttribute("data-container-guid"),
            X = W(Y);
          if (X) {
            const re = ge(A.draggedContainer.type),
              ae = A.draggedContainer.type,
              Q = X.container.type;
            if (X.container.GUID === A.draggedContainer.GUID) {
              G(null);
              return;
            }
            if (re.includes(Q)) {
              const ve = O(me, Z, ne);
              if (ae === "med_box" && !["left", "right"].includes(ve)) {
                G(null);
                return;
              }
              (X.container.gird_position ||
                console.warn(
                  `⚠️ 目標容器 ${X.container.GUID} 缺少 gird_position`,
                ),
                G({ container: X.container, direction: ve, element: me }));
              return;
            }
            if (ae === "parent_container" || ae === "sub_container") {
              let ve = me.parentElement;
              for (; ve; ) {
                if (ve.hasAttribute("data-container-guid")) {
                  const Ce = ve.getAttribute("data-container-guid"),
                    Ae = W(Ce);
                  if (Ae && re.includes(Ae.container.type)) {
                    if (Ae.container.GUID === A.draggedContainer.GUID) {
                      ve = ve.parentElement;
                      continue;
                    }
                    const Ie = O(ve, Z, ne);
                    (console.log(
                      `🔼 向上找到有效目標: ${Ae.container.type} (${Ae.container.name})`,
                    ),
                      Ae.container.gird_position ||
                        console.warn(
                          `⚠️ 父容器 ${Ae.container.GUID} 缺少 gird_position`,
                        ),
                      G({
                        container: Ae.container,
                        direction: Ie,
                        element: ve,
                      }));
                    return;
                  }
                }
                ve = ve.parentElement;
              }
            }
          }
        }
        G(null);
      },
      ce = async (x) => {
        var me, Y;
        if (!A.isDragging) return;
        if (A.floatingElement)
          try {
            A.floatingElement.parentNode &&
              A.floatingElement.parentNode.removeChild(A.floatingElement);
          } catch (X) {
            console.error("清除浮動元素失敗:", X);
          }
        if (A.draggedStockItem && A.draggedStockShelf) {
          if (
            (console.log("StockItem 拖曳結束"),
            console.log("Drop Target:", U),
            U)
          ) {
            const X = [];
            if (U.stockItem && U.stockItemDirection) {
              console.log(
                `拖曳到 stockItem ${U.stockItem.GUID} 的 ${U.stockItemDirection} 邊`,
              );
              const re = U.container,
                ae = A.draggedStockShelf,
                Q = A.draggedStockItem,
                ve = (U.stockItem.location || "0,0").split(","),
                Ce = Number(ve[0] || "0"),
                Ae = (Q.location || "0,0").split(","),
                Ie = Number(Ae[0] || "0"),
                Te = Number(Ae[1] || "0");
              if (re.GUID === ae.GUID) {
                console.log("同一層架內移動");
                const Oe = Number(ve[1] || "0");
                if (
                  U.stockItemDirection === "top" ||
                  U.stockItemDirection === "bottom"
                ) {
                  console.log("垂直移動（上下）");
                  let Le;
                  if (
                    (U.stockItemDirection === "top" ? (Le = Oe) : (Le = Oe + 1),
                    Ie === Ce)
                  ) {
                    (console.log("同一列內的深度移動"),
                      ae.medMapStock.forEach((_e) => {
                        const Re = (_e.location || "0,0").split(","),
                          ze = Number(Re[0] || "0"),
                          Pe = Number(Re[1] || "0");
                        if (ze === Ie && _e.GUID !== Q.GUID) {
                          if (Pe > Te) {
                            const rt = Pe - 1;
                            (rt >= Le
                              ? (_e.location = `${ze},${rt + 1}`)
                              : (_e.location = `${ze},${rt}`),
                              X.push({ ..._e }));
                          } else if (Pe < Te) {
                            const rt = Le > Te ? Le - 1 : Le;
                            Pe >= rt &&
                              ((_e.location = `${ze},${Pe + 1}`),
                              X.push({ ..._e }));
                          }
                        }
                      }));
                    const Ge = Le > Te ? Le - 1 : Le;
                    ((Q.location = `${Ce},${Ge}`), X.push({ ...Q }));
                  } else
                    (console.log("跨列移動到目標列"),
                      ae.medMapStock.forEach((Ge) => {
                        const _e = (Ge.location || "0,0").split(","),
                          Re = Number(_e[0] || "0"),
                          ze = Number(_e[1] || "0");
                        Re === Ie &&
                          Ge.GUID !== Q.GUID &&
                          ze > Te &&
                          ((Ge.location = `${Re},${ze - 1}`),
                          X.push({ ...Ge }));
                      }),
                      ae.medMapStock.forEach((Ge) => {
                        const _e = (Ge.location || "0,0").split(","),
                          Re = Number(_e[0] || "0"),
                          ze = Number(_e[1] || "0");
                        Re === Ce &&
                          Ge.GUID !== Q.GUID &&
                          ze >= Le &&
                          ((Ge.location = `${Re},${ze + 1}`),
                          X.push({ ...Ge }));
                      }),
                      (Q.location = `${Ce},${Le}`),
                      X.push({ ...Q }));
                } else {
                  console.log("水平移動（左右）");
                  const Le = ae.medMapStock.findIndex(
                    (Re) => Re.GUID === Q.GUID,
                  );
                  (Le !== -1 && ae.medMapStock.splice(Le, 1),
                    ae.medMapStock.forEach((Re) => {
                      const ze = (Re.location || "0,0").split(","),
                        Pe = Number(ze[0] || "0"),
                        rt = Number(ze[1] || "0");
                      Pe > Ie &&
                        ((Re.location = `${Pe - 1},${rt}`), X.push({ ...Re }));
                    }));
                  let Ge;
                  const _e = Ce > Ie ? Ce - 1 : Ce;
                  (U.stockItemDirection === "left" ? (Ge = _e) : (Ge = _e + 1),
                    ae.medMapStock.forEach((Re) => {
                      const ze = (Re.location || "0,0").split(","),
                        Pe = Number(ze[0] || "0"),
                        rt = Number(ze[1] || "0");
                      Pe >= Ge &&
                        ((Re.location = `${Pe + 1},${rt}`), X.push({ ...Re }));
                    }),
                    (Q.location = `${Ge},${Te}`),
                    ae.medMapStock.push(Q),
                    ae.medMapStock.sort((Re, ze) => {
                      const Pe = (Re.location || "0,0").split(","),
                        rt = (ze.location || "0,0").split(",");
                      return Number(Pe[0] || "0") - Number(rt[0] || "0");
                    }),
                    X.push({ ...Q }));
                }
              } else {
                console.log("不同層架間移動");
                const Oe = Number(ve[1] || "0"),
                  Le = ae.medMapStock.findIndex((Ge) => Ge.GUID === Q.GUID);
                if (
                  (Le !== -1 && ae.medMapStock.splice(Le, 1),
                  U.stockItemDirection === "top" ||
                    U.stockItemDirection === "bottom")
                ) {
                  (console.log("跨層架垂直移動到目標列"),
                    ae.medMapStock.forEach((_e) => {
                      const Re = (_e.location || "0,0").split(","),
                        ze = Number(Re[0] || "0"),
                        Pe = Number(Re[1] || "0");
                      ze === Ie &&
                        Pe > Te &&
                        ((_e.location = `${ze},${Pe - 1}`), X.push({ ..._e }));
                    }));
                  let Ge;
                  (U.stockItemDirection === "top" ? (Ge = Oe) : (Ge = Oe + 1),
                    re.medMapStock.forEach((_e) => {
                      const Re = (_e.location || "0,0").split(","),
                        ze = Number(Re[0] || "0"),
                        Pe = Number(Re[1] || "0");
                      ze === Ce &&
                        Pe >= Ge &&
                        ((_e.location = `${ze},${Pe + 1}`), X.push({ ..._e }));
                    }),
                    (Q.location = `${Ce},${Ge}`),
                    (Q.shelf_guid = re.GUID),
                    re.medMapStock.push(Q),
                    re.medMapStock.sort((_e, Re) => {
                      const ze = (_e.location || "0,0").split(","),
                        Pe = (Re.location || "0,0").split(",");
                      return Number(ze[0] || "0") - Number(Pe[0] || "0");
                    }),
                    X.push({ ...Q }));
                } else {
                  (console.log("跨層架水平移動"),
                    ae.medMapStock.forEach((_e) => {
                      const Re = (_e.location || "0,0").split(","),
                        ze = Number(Re[0] || "0"),
                        Pe = Number(Re[1] || "0");
                      ze > Ie &&
                        ((_e.location = `${ze - 1},${Pe}`), X.push({ ..._e }));
                    }));
                  let Ge;
                  (U.stockItemDirection === "left" ? (Ge = Ce) : (Ge = Ce + 1),
                    re.medMapStock.forEach((_e) => {
                      const Re = (_e.location || "0,0").split(","),
                        ze = Number(Re[0] || "0"),
                        Pe = Number(Re[1] || "0");
                      ze >= Ge &&
                        ((_e.location = `${ze + 1},${Pe}`), X.push({ ..._e }));
                    }),
                    (Q.location = `${Ge},${Te}`),
                    (Q.shelf_guid = re.GUID),
                    re.medMapStock.push(Q),
                    re.medMapStock.sort((_e, Re) => {
                      const ze = (_e.location || "0,0").split(","),
                        Pe = (Re.location || "0,0").split(",");
                      return Number(ze[0] || "0") - Number(Pe[0] || "0");
                    }),
                    X.push({ ...Q }));
                }
              }
            } else if (U.container.type === "store_shelves") {
              console.log("拖曳到 store_shelves 容器");
              const re = U.container,
                ae = A.draggedStockShelf,
                Q = A.draggedStockItem,
                ve = (Q.location || "0,0").split(","),
                Ce = Number(ve[0] || "0"),
                Ae = ae.medMapStock.findIndex((Ie) => Ie.GUID === Q.GUID);
              (Ae !== -1 &&
                (ae.medMapStock.splice(Ae, 1),
                ae.medMapStock.forEach((Ie) => {
                  const Te = (Ie.location || "0,0").split(","),
                    He = Number(Te[0] || "0"),
                    Oe = Number(Te[1] || "0");
                  He > Ce &&
                    ((Ie.location = `${He - 1},${Oe}`), X.push({ ...Ie }));
                })),
                (Q.location = "0,0"),
                (Q.shelf_guid = re.GUID),
                re.medMapStock || (re.medMapStock = []),
                re.medMapStock.forEach((Ie) => {
                  const Te = (Ie.location || "0,0").split(","),
                    He = Number(Te[0] || "0"),
                    Oe = Number(Te[1] || "0");
                  ((Ie.location = `${He + 1},${Oe}`), X.push({ ...Ie }));
                }),
                re.medMapStock.push(Q),
                re.medMapStock.sort((Ie, Te) => {
                  const He = (Ie.location || "0,0").split(","),
                    Oe = (Te.location || "0,0").split(",");
                  return Number(He[0] || "0") - Number(Oe[0] || "0");
                }),
                X.push({ ...Q }));
            }
            if (X.length > 0) {
              console.log("準備更新的 stockItems:", X);
              try {
                const re = await Me.updateStock(X);
                if (re.Code === 200) {
                  m("藥品位置更新成功", "success");
                  try {
                    const ae = await Me.getMedMapByDepartment(s);
                    if (ae.Code === 200 && ae.Data) {
                      const Q = Rt.convertMedMapApiToFakeData(ae.Data);
                      Rt.validateConvertedData(Q) && l(Q);
                    }
                  } catch (ae) {
                    console.error("刷新數據失敗:", ae);
                  }
                } else m(re.Result || "更新失敗", "error");
              } catch (re) {
                (console.error("更新 stockItem 失敗:", re),
                  m("更新失敗，請稍後再試", "error"));
              }
            }
          }
          (Ne({
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
            G(null));
          return;
        }
        let Z = null,
          ne = null,
          z = null;
        if (
          (console.log("Drop Target:", U),
          console.log("Is Mobile Drag:", A.isMobileDrag),
          A.isMobileDrag)
        )
          if (U) {
            ((Z = U.direction), (z = U.container));
            const X = U.container.gird_position;
            console.log("目標容器原始位置:", X);
            const re = W(U.container.Master_GUID || U.container.GUID);
            (console.log("🔍 移除前查找目標父容器:"),
              console.log(
                "  - 查找 GUID:",
                U.container.Master_GUID || U.container.GUID,
              ),
              console.log(
                "  - 找到的父容器:",
                (me = re == null ? void 0 : re.container) == null
                  ? void 0
                  : me.GUID,
              ),
              console.log(
                "  - 父容器類型:",
                (Y = re == null ? void 0 : re.container) == null
                  ? void 0
                  : Y.type,
              ));
            const ae = W(A.draggedContainer.GUID);
            let Q = null;
            if (ae) {
              Q = ae.parent.GUID;
              const Le = ae.parent.contents.findIndex(
                (_e) => _e.GUID === A.draggedContainer.GUID,
              );
              ae.parent.contents.splice(Le, 1);
              const Ge = le(ae.parent, A.draggedContainer);
              ae.parent.contents = Ge;
            }
            let ve = re;
            if (!ve) {
              console.warn(
                "⚠️ 透過 Master_GUID 找不到父容器，嘗試透過目標容器 GUID 查找",
              );
              const Le = W(U.container.GUID);
              Le && Le.parent
                ? ((ve = { container: Le.parent, parent: null }),
                  console.log(
                    "✓ 透過目標容器 GUID 找到父容器:",
                    Le.parent.GUID,
                  ))
                : console.error("❌ 完全找不到目標父容器");
            }
            let Ce = U.container;
            if (Q && ve && ve.container.GUID === Q) {
              const Le = ve.container.contents.find(
                (Ge) => Ge.GUID === U.container.GUID,
              );
              Le
                ? ((Ce = Le),
                  console.log(
                    "同一父容器內移動，更新後的目標容器位置:",
                    Le.gird_position,
                  ))
                : (console.log("找不到更新後的目標容器，使用原始位置:", X),
                  (Ce = { ...U.container, gird_position: X }));
            }
            const Ae = Ce.gird_position || X;
            (console.log("最終使用的目標位置:", Ae),
              (!Ae || Ae === "0,0") &&
                (console.error("❌ 警告：目標位置無效或為 0,0"),
                console.error(
                  "  - targetContainer.gird_position:",
                  Ce.gird_position,
                ),
                console.error("  - originalTargetPosition:", X),
                console.error("  - dropTarget.container:", U.container)));
            const Ie = fe(Ae || "0,0");
            let Te = Ie.row,
              He = Ie.col;
            switch (
              (console.log("計算後的新位置 (插入前):", { row: Te, col: He }),
              U.direction)
            ) {
              case "top":
                Te = Math.max(0, Ie.row);
                break;
              case "bottom":
                Te = Ie.row + 1;
                break;
              case "left":
                He = Math.max(0, Ie.col);
                break;
              case "right":
                He = Ie.col + 1;
                break;
            }
            let Oe = (ve == null ? void 0 : ve.container) || U.container;
            if (
              (console.log("📦 目標父容器決定:"),
              console.log("  - targetParentData 存在:", !!ve),
              console.log(
                "  - 使用的父容器 GUID:",
                Oe == null ? void 0 : Oe.GUID,
              ),
              console.log(
                "  - 使用的父容器類型:",
                Oe == null ? void 0 : Oe.type,
              ),
              console.log("  - dropTarget.container.class:", U.container.class),
              console.log(
                "  - dragState.draggedContainer.class:",
                A.draggedContainer.class,
              ),
              A.draggedContainer.class != U.container.class &&
                ((Oe = U.container),
                console.log(
                  "  → class 不同，改用 dropTarget.container 作為父容器",
                )),
              A.draggedContainer.type === "med_box" &&
                U.container.type !== "med_box")
            )
              if (
                (console.log("藥盒移動目標到層架上"),
                (Oe = U.container),
                Oe.contents.length > 0)
              ) {
                let Le = 0,
                  Ge = 0;
                Oe.contents.forEach((_e) => {
                  const Re = fe(_e.gird_position || "0,0").row,
                    ze = fe(_e.gird_position || "0,0").col;
                  (Le > Re && (Le = Re), Ge > ze && (Ge = ze));
                });
                for (let _e = 0; _e <= Ge; _e++)
                  for (let Re = 0; Re <= Le; Re++) {
                    const ze = `${_e},${Re}`;
                    Oe.contents.filter((rt) => rt.grid_position === ze)
                      .length === 0 && ((Te = _e), (He = Re));
                  }
              } else ((Te = 0), (He = 0));
            ((ne = Oe), be(Oe, A.draggedContainer, Te, He, U.direction));
          } else
            (console.log("無效拖放，復原所有容器位置"),
              A.originalData &&
                A.originalParent &&
                (A.originalParent.contents = JSON.parse(
                  JSON.stringify(A.originalData),
                )),
              (Z = null),
              (z = null),
              (ne = A.originalParent));
        else if (U) {
          ((Z = U.direction), (z = U.container));
          const X = W(A.draggedContainer.GUID);
          let re = null;
          if (
            (console.log("=== 開始處理容器拖曳 ==="),
            console.log("拖曳容器 GUID:", A.draggedContainer.GUID),
            console.log("拖曳容器原始位置:", A.draggedContainer.gird_position),
            X)
          ) {
            ((re = X.parent.GUID),
              console.log("原始父容器 GUID:", re),
              console.log(
                "移除前父容器的 contents 數量:",
                X.parent.contents.length,
              ));
            const Te = X.parent.contents.findIndex(
              (Oe) => Oe.GUID === A.draggedContainer.GUID,
            );
            (X.parent.contents.splice(Te, 1),
              console.log(
                "移除後父容器的 contents 數量:",
                X.parent.contents.length,
              ));
            const He = le(X.parent, A.draggedContainer);
            ((X.parent.contents = He),
              console.log("重新計算後的容器列表:"),
              X.parent.contents.forEach((Oe) => {
                console.log(`  - ${Oe.GUID}: ${Oe.gird_position}`);
              }));
          }
          const ae = W(U.container.Master_GUID || U.container.GUID);
          let Q = U.container;
          if (
            (console.log("目標容器原始位置:", U.container.gird_position),
            re && ae && ae.container.GUID === re)
          ) {
            console.log("✓ 在同一個父容器內移動");
            const Te = ae.container.contents.find(
              (He) => He.GUID === U.container.GUID,
            );
            Te &&
              ((Q = Te),
              console.log(
                "同一父容器內移動，更新後的目標容器位置:",
                Te.gird_position,
              ));
          } else console.log("✗ 跨父容器移動或父容器不同");
          const ve = fe(Q.gird_position || "0,0");
          let Ce = ve.row,
            Ae = ve.col;
          switch (U.direction) {
            case "top":
              Ce = Math.max(0, ve.row);
              break;
            case "bottom":
              Ce = ve.row + 1;
              break;
            case "left":
              Ae = Math.max(0, ve.col);
              break;
            case "right":
              Ae = ve.col + 1;
              break;
          }
          (console.log("------目標容器", U),
            console.log("------拖曳容器", A.draggedContainer));
          let Ie = (ae == null ? void 0 : ae.container) || U.container;
          if (
            (console.log(A.draggedContainer.class),
            console.log(U.container.class),
            console.log(A.draggedContainer.class != U.container.class),
            A.draggedContainer.class != U.container.class &&
              ((Ie = U.container),
              console.log("------這邊顯示放到上層容器現象"),
              console.log("------目標容器", U),
              console.log("------拖曳容器", A.draggedContainer),
              console.log("------目標父容器", Ie)),
            A.draggedContainer.type === "med_box" &&
              U.container.type !== "med_box")
          )
            if (
              (console.log("藥盒移動目標到層架上"),
              (Ie = U.container),
              Ie.contents.length > 0)
            ) {
              let Te = 0,
                He = 0;
              Ie.contents.forEach((Oe) => {
                const Le = fe(Oe.gird_position || "0,0").row,
                  Ge = fe(Oe.gird_position || "0,0").col;
                (Te > Le && (Te = Le), He > Ge && (He = Ge));
              });
              for (let Oe = 0; Oe <= He; Oe++)
                for (let Le = 0; Le <= Te; Le++) {
                  const Ge = `${Oe},${Le}`;
                  Ie.contents.filter((Re) => Re.grid_position === Ge).length ===
                    0 && ((Ce = Oe), (Ae = Le));
                }
            } else ((Ce = 0), (Ae = 0));
          ((ne = Ie), be(Ie, A.draggedContainer, Ce, Ae, U.direction));
        } else
          (console.log("無效拖放，復原所有容器位置"),
            A.originalData &&
              A.originalParent &&
              (A.originalParent.contents = JSON.parse(
                JSON.stringify(A.originalData),
              )),
            (Z = null),
            (z = null),
            (ne = A.originalParent));
        (Ne({
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
          G(null),
          console.log("Drop Direction:", Z),
          console.log("Parent Object:", ne),
          console.log("Target Object:", z),
          console.log("API更新資料：", he),
          await Ph(he));
      };
    (u.useEffect(() => {
      if (A.isDragging)
        if (J()) {
          const Z = (me) => {
              (me.preventDefault(), xe(me));
            },
            ne = (me) => ce(),
            z = (me) => ce();
          return (
            document.addEventListener("pointermove", Z, { passive: !1 }),
            document.addEventListener("pointerup", ne),
            document.addEventListener("pointercancel", z),
            () => {
              (document.removeEventListener("pointermove", Z),
                document.removeEventListener("pointerup", ne),
                document.removeEventListener("pointercancel", z));
            }
          );
        } else {
          const Z = (Y) => xe(Y),
            ne = (Y) => ce(),
            z = (Y) => {
              (Y.preventDefault(), xe(Y));
            },
            me = (Y) => ce();
          return (
            document.addEventListener("mousemove", Z),
            document.addEventListener("mouseup", ne),
            document.addEventListener("touchmove", z, { passive: !1 }),
            document.addEventListener("touchend", me),
            () => {
              (document.removeEventListener("mousemove", Z),
                document.removeEventListener("mouseup", ne),
                document.removeEventListener("touchmove", z),
                document.removeEventListener("touchend", me));
            }
          );
        }
    }, [A.isDragging, U]),
      u.useEffect(
        () => () => {
          if (A.floatingElement)
            try {
              A.floatingElement.parentNode &&
                A.floatingElement.parentNode.removeChild(A.floatingElement);
            } catch (x) {
              console.error("組件卸載時清除浮動元素失敗:", x);
            }
        },
        [A.floatingElement],
      ),
      u.useEffect(() => {
        const x = (ne) => {
            ne.code === "Space" && !ne.repeat && (ne.preventDefault(), M(!0));
          },
          Z = (ne) => {
            ne.code === "Space" && (ne.preventDefault(), M(!1), y(!1));
          };
        return (
          window.addEventListener("keydown", x),
          window.addEventListener("keyup", Z),
          () => {
            (window.removeEventListener("keydown", x),
              window.removeEventListener("keyup", Z));
          }
        );
      }, []));
    const we = u.useCallback(
        (x) => {
          var ne;
          if (v) return;
          if (x.ctrlKey || x.metaKey) {
            (x.preventDefault(), x.stopPropagation());
            const z =
              (ne = n.current) == null ? void 0 : ne.getBoundingClientRect();
            if (!z) return;
            const me = x.clientX - z.left,
              Y = x.clientY - z.top,
              X = x.deltaY > 0 ? 0.9 : 1.1,
              re = Math.max(0.1, Math.min(5, k.scale * X)),
              ae = re / k.scale,
              Q = me - (me - k.x) * ae,
              ve = Y - (Y - k.y) * ae;
            f({ x: Q, y: ve, scale: re });
          }
        },
        [k, v],
      ),
      pe = u.useCallback(
        (x) => {
          v ||
            !F ||
            (y(!0),
            I({ x: x.clientX, y: x.clientY }),
            K({ x: x.clientX, y: x.clientY }),
            B(!1),
            x.preventDefault());
        },
        [v, F],
      ),
      C = u.useCallback(
        (x) => {
          if (!d || v) return;
          const Z = x.clientX - S.x,
            ne = x.clientY - S.y;
          if (P) {
            const z = Math.abs(x.clientX - P.x),
              me = Math.abs(x.clientY - P.y);
            (z > 5 || me > 5) && B(!0);
          }
          (f((z) => ({ ...z, x: z.x + Z, y: z.y + ne })),
            I({ x: x.clientX, y: x.clientY }));
        },
        [d, S, v, P],
      ),
      R = u.useCallback(() => {
        (y(!1), K(null));
      }, []),
      [q, ue] = u.useState(null),
      [ie, je] = u.useState({ x: 0, y: 0 }),
      Ue = (x) => {
        if (x.length < 2) return null;
        const Z = x[0],
          ne = x[1];
        return Math.sqrt(
          Math.pow(ne.clientX - Z.clientX, 2) +
            Math.pow(ne.clientY - Z.clientY, 2),
        );
      },
      We = (x) => {
        if (x.length === 1) return { x: x[0].clientX, y: x[0].clientY };
        const Z = x[0],
          ne = x[1];
        return {
          x: (Z.clientX + ne.clientX) / 2,
          y: (Z.clientY + ne.clientY) / 2,
        };
      },
      ct = u.useCallback(
        (x) => {
          if (!v) {
            if (x.touches.length === 2) {
              const Z = Ue(x.touches),
                ne = We(x.touches);
              (ue(Z), je(ne));
            } else if (x.touches.length === 1) {
              const Z = x.touches[0];
              (I({ x: Z.clientX, y: Z.clientY }), y(!0));
            }
          }
        },
        [v],
      ),
      Et = u.useCallback(
        (x) => {
          var Z;
          if (!v) {
            if ((x.preventDefault(), x.touches.length === 2 && q !== null)) {
              const ne = Ue(x.touches),
                z = We(x.touches);
              if (ne && q) {
                const me =
                  (Z = n.current) == null ? void 0 : Z.getBoundingClientRect();
                if (!me) return;
                const Y = ne / q,
                  X = Math.max(0.1, Math.min(5, k.scale * Y)),
                  re = z.x - me.left,
                  ae = z.y - me.top,
                  Q = X / k.scale,
                  ve = re - (re - k.x) * Q,
                  Ce = ae - (ae - k.y) * Q;
                (f({ x: ve, y: Ce, scale: X }), ue(ne), je(z));
              }
            } else if (x.touches.length === 1 && d) {
              const ne = x.touches[0],
                z = ne.clientX - S.x,
                me = ne.clientY - S.y;
              (f((Y) => ({ ...Y, x: Y.x + z, y: Y.y + me })),
                I({ x: ne.clientX, y: ne.clientY }));
            }
          }
        },
        [k, q, d, S, v],
      ),
      It = u.useCallback(() => {
        (ue(null), y(!1));
      }, []);
    u.useEffect(() => {
      const x = n.current;
      if (x)
        return (
          x.addEventListener("wheel", we, { passive: !1 }),
          () => x.removeEventListener("wheel", we)
        );
    }, [we]);
    const cr = () => (!o || o.length === 0 ? [] : o),
      pn = (x) => {
        if (!x || x.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const Z = x.map((Y) => ({
            ...Y,
            gridPos: fe(Y.gird_position || "0,0"),
          })),
          ne = Math.max(...Z.map((Y) => Y.gridPos.row), 0),
          z = Math.max(...Z.map((Y) => Y.gridPos.col), 0);
        return {
          sortedContents: Z.sort((Y, X) =>
            Y.gridPos.row !== X.gridPos.row
              ? Y.gridPos.row - X.gridPos.row
              : Y.gridPos.col - X.gridPos.col,
          ),
          maxRow: ne,
          maxCol: z,
        };
      },
      Vr = cr(),
      qr = Math.max(...Vr.map((x) => fe(x.gird_position || "0,0").row), 0),
      cl = Math.max(...Vr.map((x) => fe(x.gird_position || "0,0").col), 0),
      Wn = (x) => {
        const Z = (z) => {
            if (
              z.width &&
              Array.isArray(z.width) &&
              typeof z.width_index == "number" &&
              z.width_index >= 0 &&
              z.width_index < z.width.length
            ) {
              const Y = parseFloat(z.width[z.width_index]);
              if (!isNaN(Y)) {
                const X = Y * 20;
                return Math.max(200, X);
              }
            }
            return 200;
          },
          ne = (z) => {
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
        switch (x.type) {
          case "med_box":
            return (
              Z(x),
              r.jsxs(
                "div",
                {
                  "data-container-guid": x.GUID,
                  className: `${x.type !== "sub_container" ? "border-2 rounded-lg shadow-sm" : ""} ${ne(x.type || 0)} min-h-[80px] flex flex-col flex-shrink-0 h-full overflow-hidden`,
                  children: [
                    r.jsx("div", {
                      onMouseDown:
                        v && D(x.type) && !J()
                          ? (z) =>
                              V(
                                x,
                                z.currentTarget.closest(
                                  "[data-container-guid]",
                                ),
                                z,
                              )
                          : void 0,
                      onPointerDown:
                        v && D(x.type) && J()
                          ? (z) =>
                              V(
                                x,
                                z.currentTarget.closest(
                                  "[data-container-guid]",
                                ),
                                z,
                              )
                          : void 0,
                      className: v && D(x.type) ? "cursor-move" : "",
                      children: r.jsx(ls, { content: x, isAdminMode: p }),
                    }),
                    r.jsx("div", { className: "flex-1 p-1", children: Yn(x) }),
                  ],
                },
                x.GUID,
              )
            );
          case "sub_container":
          case "parent_container":
            return r.jsxs(
              "div",
              {
                "data-container-guid": x.GUID,
                className: `${ne(x.type || 0)} border-2 overflow-hidden rounded-lg shadow-sm min-h-[80px] flex flex-col h-full`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      v && D(x.type) && !J()
                        ? (z) =>
                            V(
                              x,
                              z.currentTarget.closest("[data-container-guid]"),
                              z,
                            )
                        : void 0,
                    onPointerDown:
                      v && D(x.type) && J()
                        ? (z) =>
                            V(
                              x,
                              z.currentTarget.closest("[data-container-guid]"),
                              z,
                            )
                        : void 0,
                    className: v && D(x.type) ? "cursor-move" : "",
                    children: r.jsx(ls, { content: x, isAdminMode: p }),
                  }),
                  r.jsx("div", { className: "flex-1  p-1", children: Yn(x) }),
                ],
              },
              x.GUID,
            );
          case "grid_draw":
            return r.jsxs(
              "div",
              {
                "data-container-guid": x.GUID,
                className: `${x.type !== "sub_container" ? "border-2 rounded-lg shadow-sm" : ""} ${ne(x.type || 0)} min-h-[80px] flex flex-col h-full overflow-hidden`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      v && D(x.type) && !J()
                        ? (z) =>
                            V(
                              x,
                              z.currentTarget.closest("[data-container-guid]"),
                              z,
                            )
                        : void 0,
                    onPointerDown:
                      v && D(x.type) && J()
                        ? (z) =>
                            V(
                              x,
                              z.currentTarget.closest("[data-container-guid]"),
                              z,
                            )
                        : void 0,
                    className: v && D(x.type) ? "cursor-move" : "",
                    children: r.jsx(ls, { content: x, isAdminMode: p }),
                  }),
                  r.jsx("div", {
                    className: "flex-1 p-1 flex items-center",
                    children: Yn(x),
                  }),
                ],
              },
              x.GUID,
            );
          case "dispensing_shelves":
          case "store_shelves":
            return r.jsxs(
              "div",
              {
                "data-container-guid": x.GUID,
                className: `${x.type !== "sub_container" ? "border-2 rounded-lg shadow-sm" : ""} ${ne(x.type || 0)} min-h-[80px] flex flex-col h-full overflow-hidden`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      v && D(x.type) && !J()
                        ? (z) =>
                            V(
                              x,
                              z.currentTarget.closest("[data-container-guid]"),
                              z,
                            )
                        : void 0,
                    onPointerDown:
                      v && D(x.type) && J()
                        ? (z) =>
                            V(
                              x,
                              z.currentTarget.closest("[data-container-guid]"),
                              z,
                            )
                        : void 0,
                    className: v && D(x.type) ? "cursor-move" : "",
                    children: r.jsx(ls, { content: x, isAdminMode: p }),
                  }),
                  r.jsx("div", {
                    className: "flex-1 p-1 h-full overflow-hidden",
                    children: Yn(x),
                  }),
                ],
              },
              x.GUID,
            );
          default:
            return r.jsxs(
              "div",
              {
                "data-container-guid": x.GUID,
                className: `${x.type !== "sub_container" ? "border-2 rounded-lg shadow-sm" : ""} ${ne(x.type || 0)} min-h-[80px] flex flex-col h-full overflow-hidden ${x.type == "none" ? "opacity-0" : ""}`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      v && D(x.type) && !J()
                        ? (z) =>
                            V(
                              x,
                              z.currentTarget.closest("[data-container-guid]"),
                              z,
                            )
                        : void 0,
                    onPointerDown:
                      v && D(x.type) && J()
                        ? (z) =>
                            V(
                              x,
                              z.currentTarget.closest("[data-container-guid]"),
                              z,
                            )
                        : void 0,
                    className: v && D(x.type) ? "cursor-move" : "",
                    children: r.jsx(ls, { content: x, isAdminMode: p }),
                  }),
                  r.jsx("div", { className: "flex-1 p-1", children: Yn(x) }),
                ],
              },
              x.GUID,
            );
        }
      },
      Yn = (x) => {
        const Z = (ne, z, me) => {
          const Y = Array(z + 1)
              .fill(null)
              .map(() => Array(me + 1).fill(!1)),
            X = {};
          return (
            ne.forEach((re) => {
              const ae = fe(re.gird_position || "0,0");
              ((X[`${ae.row},${ae.col}`] = re), (Y[ae.row][ae.col] = !0));
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: z + 1 }, (re, ae) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      style: { height: `${100 / (z + 1)}%`, minHeight: "80px" },
                      children: Array.from({ length: me + 1 }, (Q, ve) => {
                        const Ce = `${ae},${ve}`,
                          Ae = X[Ce];
                        return Ae
                          ? r.jsxs(
                              "td",
                              {
                                className: "align-top bg-transparent",
                                style: {
                                  width: `${100 / (me + 1)}%`,
                                  height: `${100 / (z + 1)}%`,
                                  minHeight: "80px",
                                  border: "none",
                                  position: "relative",
                                },
                                children: [
                                  Wn(Ae),
                                  (U == null ? void 0 : U.container.GUID) ===
                                    Ae.GUID &&
                                    r.jsx("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none",
                                      children: r.jsx("div", {
                                        className: `absolute bg-blue-400 opacity-50 ${U.direction === "top" ? "top-0 left-0 right-0 h-1" : U.direction === "bottom" ? "bottom-0 left-0 right-0 h-1" : U.direction === "left" ? "left-0 top-0 bottom-0 w-1" : "right-0 top-0 bottom-0 w-1"}`,
                                      }),
                                    }),
                                ],
                              },
                              ve,
                            )
                          : r.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (me + 1)}%`,
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
                              ve,
                            );
                      }),
                    },
                    ae,
                  ),
                ),
              }),
            })
          );
        };
        switch (x.type) {
          case "parent_container":
          case "sub_container":
            if (x.contents && x.contents.length > 0) {
              const {
                sortedContents: Q,
                maxRow: ve,
                maxCol: Ce,
              } = pn(x.contents);
              return Z(Q, ve, Ce);
            } else
              return r.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "1px" },
                children: r.jsx("tbody", { children: r.jsx("tr", {}) }),
              });
          case "dispensing_shelves":
            if (x.contents && x.contents.length > 0) {
              const {
                sortedContents: Q,
                maxRow: ve,
                maxCol: Ce,
              } = pn(x.contents);
              return Z(Q, ve, Ce);
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
            if (x.medMapStock && x.medMapStock.length > 0) {
              const Q = x.medMapStock,
                ve = {};
              Q.forEach((Te) => {
                const He = (Te.location || "0,0").split(","),
                  Oe = Number(He[0] || "0"),
                  Le = Number(He[1] || "0");
                (ve[Oe] || (ve[Oe] = []),
                  ve[Oe].push({ ...Te, _position: Oe, _depth: Le }));
              });
              const Ce = Object.keys(ve)
                  .map(Number)
                  .sort((Te, He) => Te - He),
                Ae = Ce.length;
              Math.max(...Ce.map((Te) => ve[Te].length));
              const Ie = x.width ? x.width * 5 : 500;
              return r.jsx("div", {
                className: "flex h-full",
                style: { minWidth: `${Ie}px` },
                children: Ce.map((Te) => {
                  const He = ve[Te].sort((_e, Re) => Re._depth - _e._depth),
                    Oe = Ae > 0 ? 100 / Ae : 100,
                    Le = He.length,
                    Ge = Le > 0 ? 100 / Le : 100;
                  return r.jsx(
                    "div",
                    {
                      className: "flex flex-shrink-0 flex-col m-1",
                      style: { width: `calc(${Oe}% - 8px)`, minWidth: "160px" },
                      children: He.map((_e, Re) => {
                        const ze = Re === Le - 1;
                        return r.jsx(
                          "div",
                          {
                            className: `relative ${ze ? "" : "mb-1"}`,
                            style: {
                              height: `calc(${Ge}% - ${ze ? "0px" : "0.25rem"})`,
                            },
                            "data-stock-guid": _e.GUID,
                            children: r.jsxs("div", {
                              className: `border-2 bg-yellow-50 border-yellow-400 rounded-lg p-2 h-full flex flex-col justify-center items-center cursor-pointer bg-white hover:bg-yellow-100 hover:border-yellow-500 hover:shadow-md transition-all ${v ? "cursor-move" : ""}`,
                              onMouseDown: (Pe) => {
                                v
                                  ? oe(
                                      _e,
                                      x,
                                      Pe.currentTarget.closest(
                                        "[data-stock-guid]",
                                      ),
                                      Pe,
                                    )
                                  : !d &&
                                    !F &&
                                    (K({ x: Pe.clientX, y: Pe.clientY }),
                                    B(!1));
                              },
                              onMouseUp: (Pe) => {
                                if (!d && !F && !w && P && !v) {
                                  const rt = Math.abs(Pe.clientX - P.x),
                                    Kr = Math.abs(Pe.clientY - P.y);
                                  rt <= 5 &&
                                    Kr <= 5 &&
                                    (Pe.stopPropagation(), c(x, _e));
                                }
                                v || (K(null), B(!1));
                              },
                              onTouchStart: (Pe) => {
                                if (v && J())
                                  oe(
                                    _e,
                                    x,
                                    Pe.currentTarget.closest(
                                      "[data-stock-guid]",
                                    ),
                                    Pe,
                                  );
                                else if (!d && !v) {
                                  const rt = Pe.touches[0];
                                  (K({ x: rt.clientX, y: rt.clientY }), B(!1));
                                }
                              },
                              onTouchEnd: (Pe) => {
                                if (!d && !w && P && !v) {
                                  const rt = Pe.changedTouches[0],
                                    Kr = Math.abs(rt.clientX - P.x),
                                    ul = Math.abs(rt.clientY - P.y);
                                  Kr <= 5 &&
                                    ul <= 5 &&
                                    (Pe.stopPropagation(), c(x, _e));
                                }
                                v || (K(null), B(!1));
                              },
                              onPointerDown: (Pe) => {
                                v &&
                                  J() &&
                                  oe(
                                    _e,
                                    x,
                                    Pe.currentTarget.closest(
                                      "[data-stock-guid]",
                                    ),
                                    Pe,
                                  );
                              },
                              children: [
                                r.jsx("div", {
                                  className:
                                    "py-1 text-base font-semibold text-gray-800 flex text-center text-ellipsis whitespace-normal items-center flex-1",
                                  children: _e.name || _e.material_no,
                                }),
                                r.jsxs("div", {
                                  className:
                                    "w-full flex justify-between items-end",
                                  children: [
                                    r.jsx("div", {
                                      className: "",
                                      children: r.jsxs("div", {
                                        className: "mt-1",
                                        children: ["[ ", +_e.qty || 0, " ]"],
                                      }),
                                    }),
                                    r.jsx("div", {
                                      className:
                                        "flex justify-end items-end mt-2",
                                      children: r.jsx("button", {
                                        onMouseDown: (Pe) => {
                                          Pe.stopPropagation();
                                        },
                                        onMouseUp: (Pe) => {
                                          Pe.stopPropagation();
                                        },
                                        onTouchStart: (Pe) => {
                                          Pe.stopPropagation();
                                        },
                                        onTouchEnd: (Pe) => {
                                          Pe.stopPropagation();
                                        },
                                        onClick: (Pe) => Qr(_e, x, Pe),
                                        className:
                                          "text-red-500 hover:text-red-600 rounded-full p-2 transition-all z-10",
                                        title: "刪除",
                                        children: r.jsx(kr, {
                                          className: "w-6 h-6",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          _e.GUID || Re,
                        );
                      }),
                    },
                    Te,
                  );
                }),
              });
            } else if (x.contents && x.contents.length > 0) {
              const {
                sortedContents: Q,
                maxRow: ve,
                maxCol: Ce,
              } = pn(x.contents);
              return Z(Q, ve, Ce);
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
            if (x.contents && x.contents.length > 0) {
              const {
                sortedContents: Q,
                maxRow: ve,
                maxCol: Ce,
              } = pn(x.contents);
              return Z(Q, ve, Ce);
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
            const ne = Math.max(
                ...x.Boxes.flat().map((Q) => +Q.Row + +Q.Height - 1),
              ),
              z = Math.max(
                ...x.Boxes.flat().map((Q) => +Q.Column + +Q.Width - 1),
              ),
              me = ne + 1,
              Y = z + 1,
              X = x.Boxes.flat(),
              re = Array(me)
                .fill(null)
                .map(() => Array(Y).fill(!1)),
              ae = {};
            return (
              X.forEach((Q) => {
                Q.Slave || (ae[`${Q.Row},${Q.Column}`] = Q);
              }),
              X.forEach((Q) => {
                if (!Q.Slave && (Q.Width > 1 || Q.Height > 1))
                  for (let ve = Q.Row; ve < Q.Row + Q.Height; ve++)
                    for (let Ce = Q.Column; Ce < Q.Column + Q.Width; Ce++)
                      (ve !== Q.Row || Ce !== Q.Column) && (re[ve][Ce] = !0);
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
            return x.med_info && x.med_info.length > 0
              ? r.jsxs("div", {
                  className:
                    "text-base text-left h-full min-h-[40px] max-w-[200px] min-w-[200px] p-1 flex items-center justify-between flex-col",
                  children: [
                    r.jsx("div", {
                      className: "text-gray-700 font-bold truncate w-full",
                      children: x.med_info[0].name,
                    }),
                    r.jsxs("div", {
                      className:
                        "text-gray-700 w-full flex justify-between px-1",
                      children: [
                        r.jsxs("div", { children: [x.box_type, "吋"] }),
                        r.jsxs("div", {
                          children: [x.width[x.width_index], "cm"],
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
            return x.contents && x.contents.length > 0
              ? r.jsx("div", {
                  className: "space-y-2",
                  children: x.contents.map((Q) => Wn(Q)),
                })
              : r.jsx("div", {
                  className:
                    "h-full flex items-center justify-center text-gray-500",
                  children: r.jsxs("div", {
                    className: "text-base",
                    children: ["未知類型: ", x.type],
                  }),
                });
        }
      },
      Wr = (x) => {
        if (
          (fe(x.gird_position || "0,0"),
          x.type !== "調劑台" && x.type !== "藥庫")
        )
          return null;
        const Z = (ne) => {
          if (!ne || ne.length === 0)
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
          const { sortedContents: z, maxRow: me, maxCol: Y } = pn(ne),
            X = Array(me + 1)
              .fill(null)
              .map(() => Array(Y + 1).fill(!1)),
            re = {};
          return (
            z.forEach((ae) => {
              const Q = fe(ae.gird_position || "0,0");
              ((re[`${Q.row},${Q.col}`] = ae), (X[Q.row][Q.col] = !0));
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: me + 1 }, (ae, Q) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      children: Array.from({ length: Y + 1 }, (ve, Ce) => {
                        const Ae = `${Q},${Ce}`,
                          Ie = re[Ae];
                        return Ie
                          ? r.jsxs(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (Y + 1)}%`,
                                  height: `${100 / (me + 1)}%`,
                                  minHeight: "120px",
                                  border: "none",
                                  position: "relative",
                                },
                                children: [
                                  Wn(Ie),
                                  (U == null ? void 0 : U.container.GUID) ===
                                    Ie.GUID &&
                                    r.jsx("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none",
                                      children: r.jsx("div", {
                                        className: `absolute bg-blue-400 opacity-50 ${U.direction === "top" ? "top-0 left-0 right-0 h-1" : U.direction === "bottom" ? "bottom-0 left-0 right-0 h-1" : U.direction === "left" ? "left-0 top-0 bottom-0 w-1" : "right-0 top-0 bottom-0 w-1"}`,
                                      }),
                                    }),
                                ],
                              },
                              Ce,
                            )
                          : r.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (Y + 1)}%`,
                                  height: `${100 / (me + 1)}%`,
                                  minHeight: "120px",
                                  border: "1px dashed #e5e7eb",
                                },
                                children: r.jsx("div", {
                                  className:
                                    "w-full h-full flex items-center justify-center text-gray-400 text-sm",
                                  children: "空位",
                                }),
                              },
                              Ce,
                            );
                      }),
                    },
                    Q,
                  ),
                ),
              }),
            })
          );
        };
        return r.jsxs(
          "div",
          {
            "data-container-guid": x.GUID,
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
                      children: x.name,
                    }),
                  }),
                  r.jsx("div", {
                    className: "flex items-center space-x-1",
                    children: r.jsx("button", {
                      className:
                        "p-1 hover:bg-black/10 rounded transition-colors",
                      onClick: (ne) => {
                        (ne.stopPropagation(),
                          console.log("🔘 點擊新增父容器按鈕"),
                          console.log("📋 找到的部門資料:", x),
                          x
                            ? (console.log(
                                "✅ 呼叫 openAddParentContainerModal",
                              ),
                              i(x))
                            : console.warn("⚠️ 未找到對應的部門資料"));
                      },
                      title: "新增",
                      children: r.jsx($t, {
                        className: "w-6 h-6 text-green-700",
                      }),
                    }),
                  }),
                ],
              }),
              r.jsx("div", {
                className: `flex-1 bg-orange-50 ${(U == null ? void 0 : U.container.GUID) === x.GUID ? "ring-2 ring-blue-400 ring-inset" : ""}`,
                children: Z(x.contents || []),
              }),
            ],
          },
          x.GUID,
        );
      },
      Yr = u.useCallback(
        (x) => {
          if (
            (console.log("🎯 locateDrugOnCanvas 被調用，藥品資料:", x),
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
          const Z = x[0].CODE || x[0].code;
          if ((console.log("🎯 提取的藥碼:", Z), !Z)) {
            console.warn("⚠️ 無法定位藥品：缺少藥碼");
            return;
          }
          console.log("🎯 開始定位藥品:", Z);
          const ne = (me) => {
              for (const Y of me) {
                if (Y.type === "grid_draw" && Y.Boxes) {
                  for (const X of Y.Boxes)
                    for (const re of X)
                      if (re.Code === Z) {
                        const ae = document.querySelector(
                          `[data-container-guid="${Y.GUID}"]`,
                        );
                        if (ae)
                          return (
                            console.log("✅ 找到藥品容器 (grid_draw):", Y),
                            { element: ae, bounds: ae.getBoundingClientRect() }
                          );
                      }
                }
                if (
                  Y.type === "list_draw" &&
                  Y.drugs &&
                  Y.drugs.some((re) => re.code === Z)
                ) {
                  const re = document.querySelector(
                    `[data-container-guid="${Y.GUID}"]`,
                  );
                  if (re)
                    return (
                      console.log("✅ 找到藥品容器 (list_draw):", Y),
                      { element: re, bounds: re.getBoundingClientRect() }
                    );
                }
                if (
                  (Y.type === "store_shelves" ||
                    Y.type === "dispensing_shelves") &&
                  Y.medMapStock &&
                  Y.medMapStock.some(
                    (re) => re.code === Z || re.material_no === Z,
                  )
                ) {
                  const re = document.querySelector(
                    `[data-container-guid="${Y.GUID}"]`,
                  );
                  if (re)
                    return (
                      console.log("✅ 找到藥品容器 (store_shelves):", Y),
                      { element: re, bounds: re.getBoundingClientRect() }
                    );
                }
                if (
                  Y.type === "med_box" &&
                  Y.med_info &&
                  Y.med_info.length > 0 &&
                  Y.med_info.some((re) => re.code === Z)
                ) {
                  const re = document.querySelector(
                    `[data-container-guid="${Y.GUID}"]`,
                  );
                  if (re)
                    return (
                      console.log("✅ 找到藥品容器 (med_box):", Y),
                      { element: re, bounds: re.getBoundingClientRect() }
                    );
                }
                if (Y.contents && Y.contents.length > 0) {
                  const X = ne(Y.contents);
                  if (X) return X;
                }
              }
              return null;
            },
            z = ne(o);
          if (z) {
            const me = n.current.getBoundingClientRect(),
              Y = z.bounds,
              X = (Y.left + Y.right) / 2,
              re = (Y.top + Y.bottom) / 2,
              ae = (X - me.left - k.x) / k.scale,
              Q = (re - me.top - k.y) / k.scale,
              ve = me.width / 2,
              Ce = me.height / 2,
              Ae = ve - ae * k.scale,
              Ie = Ce - Q * k.scale;
            (f((Te) => ({ ...Te, x: Ae, y: Ie })),
              console.log("✅ 定位完成", {
                elementScreenCenter: { x: X, y: re },
                elementCanvasPos: { x: ae, y: Q },
                screenCenter: { x: ve, y: Ce },
                newTransform: { x: Ae, y: Ie },
              }),
              m(`已定位到藥品：${x.CHT_NAME || x.NAME || Z}`, "success"));
          } else
            (console.warn("❌ 未找到藥品容器"),
              m("未找到該藥品的儲存位置", "error"));
        },
        [o, k, m],
      );
    u.useImperativeHandle(
      t,
      () => (
        console.log("🔧 useImperativeHandle 設置 ref 方法"),
        { locateDrug: Yr }
      ),
    );
    const Qr = async (x, Z, ne) => {
        (ne.stopPropagation(), ne.preventDefault());
        const z = window.confirm(`確定要刪除 ${x.name || x.material_no} 嗎？`),
          me = { ...x, shelf_guid: "" };
        if (z)
          try {
            const Y = await Me.updateStock([me]);
            if ((console.log(Y), Y.Code === 200)) {
              const X = Z.medMapStock.findIndex((re) => re.GUID === x.GUID);
              (X !== -1 &&
                (Z.medMapStock.splice(X, 1),
                Z.medMapStock.forEach((re, ae) => {
                  re.location = String(ae);
                })),
                m("刪除成功", "success"));
            } else m(Y.Result || "刪除失敗", "error");
          } catch (Y) {
            (console.error("刪除 stock 失敗:", Y),
              m("刪除失敗，請稍後再試", "error"));
          }
      },
      dl = async (x) => {
        if (x.key === "Enter" && $.trim() && !ye) {
          (x.preventDefault(), _(!0));
          const Z = performance.now();
          try {
            console.log("🔍 [手動輸入] 搜尋條碼:", $);
            const ne = performance.now(),
              z = await Me.searchByBarCode($.trim()),
              me = performance.now();
            if (
              (console.log(
                `⏱️ [手動輸入] API搜尋藥品資料用時: ${(me - ne).toFixed(2)}ms`,
              ),
              console.log("📋 條碼搜尋回應:", z),
              z.Code === 200)
            ) {
              console.log("✅ 找到藥品資料:", z.Data);
              const Y = performance.now();
              Yr(z.Data);
              const X = performance.now();
              (console.log(
                `⏱️ [手動輸入] 定位藥品用時: ${(X - Y).toFixed(2)}ms`,
              ),
                se(""));
              const re = performance.now();
              console.log(`⏱️ [手動輸入] 總用時: ${(re - Z).toFixed(2)}ms`);
            } else
              z.Code === -200 && z.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  m("查無資料，請建立條碼", "error"),
                  g($.trim()),
                  se(""))
                : (console.log("❌ 搜尋失敗:", z.Result),
                  m(z.Result || "搜尋失敗", "error"));
          } catch (ne) {
            (console.error("條碼搜尋錯誤:", ne),
              m("搜尋失敗，請稍後再試", "error"));
          } finally {
            _(!1);
          }
        }
      },
      Xr = (x) => {
        (console.log("📍 [藥品搜尋-容器視圖] 選擇藥品:", x),
          L(!1),
          m(`選擇藥品: ${x.NAME}`, "success"),
          Yr([x]));
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
                onClick: () => L(!0),
                className: "p-2 hover:bg-gray-50 transition-colors",
                title: "搜尋藥品",
                disabled: ye,
                children: r.jsx(Vo, { className: "w-6 h-6 text-blue-600" }),
              }),
              r.jsx("div", { className: "w-px h-6 bg-gray-200" }),
              r.jsx("input", {
                type: "text",
                value: $,
                onChange: (x) => se(x.target.value),
                onKeyDown: dl,
                placeholder: "輸入條碼或掃描...",
                className:
                  "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
                disabled: ye,
              }),
              r.jsx("button", {
                onClick: () => h("track_Drug_mode"),
                className: "p-2 hover:bg-gray-50 transition-colors",
                title: "掃描條碼",
                disabled: ye,
                children: r.jsx(Br, { className: "w-6 h-6 text-blue-600" }),
              }),
            ],
          }),
        }),
        r.jsx("div", {
          className: "absolute bottom-4 right-4 z-10 flex gap-2",
          children: r.jsx("button", {
            onClick: () => E(!v),
            className: `rounded-lg shadow-lg p-2 transition-colors ${v ? "bg-red-500 text-white hover:bg-red-600" : "bg-white text-gray-700 hover:bg-gray-50"}`,
            title: v ? "Unlock Canvas" : "Lock Canvas",
            children: v
              ? r.jsx(ki, { className: "w-6 h-6" })
              : r.jsx(af, { className: "w-6 h-6" }),
          }),
        }),
        r.jsx("div", {
          ref: n,
          className: `w-full h-full relative ${F && !v ? "cursor-grab" : "cursor-default"} ${d ? "cursor-grabbing" : ""}`,
          onMouseDown: pe,
          onMouseMove: C,
          onMouseUp: R,
          onMouseLeave: R,
          onTouchStart: ct,
          onTouchMove: Et,
          onTouchEnd: It,
          children: r.jsxs("div", {
            className: "absolute inset-0 origin-top-left",
            style: {
              transform: `translate(${k.x}px, ${k.y}px) scale(${k.scale})`,
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
                    borderSpacing: `${ke}px`,
                    minWidth: "fit-content",
                    minHeight: "fit-content",
                  },
                  children: r.jsx("tbody", {
                    children: Array.from({ length: qr + 1 }, (x, Z) =>
                      r.jsx(
                        "tr",
                        {
                          children: Array.from({ length: cl + 1 }, (ne, z) => {
                            const me = Vr.find((Y) => {
                              const X = fe(Y.gird_position || "0,0");
                              return X.row === Z && X.col === z;
                            });
                            return me
                              ? r.jsx(
                                  "td",
                                  {
                                    className: "align-top",
                                    style: {
                                      minWidth: "150px",
                                      minHeight: "120px",
                                      border: "none",
                                    },
                                    children: Wr(me),
                                  },
                                  z,
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
                                  z,
                                );
                          }),
                        },
                        Z,
                      ),
                    ),
                  }),
                }),
              }),
              e,
            ],
          }),
        }),
        r.jsx(cf, {
          isOpen: N,
          onClose: () => L(!1),
          medicineList: T,
          onSelectMedicine: Xr,
        }),
      ],
    });
  });
uf.displayName = "DrugCanvas";
const Ph = async (e) => {
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
            absolute_position: `${(h = i.containerData) == null ? void 0 : h.position.x},${(g = i.containerData) == null ? void 0 : g.position.y}`,
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
          Me.updateMedMapBox(t)
            .then((i) => ({ type: "med_box", response: i, count: t.length }))
            .catch((i) => ({ type: "med_box", error: i, count: t.length })),
        )),
      n.length > 0 &&
        (console.log("🗂️ 更新抽屜資料:", n),
        a.push(
          Me.updateMedMapDrawer(n)
            .then((i) => ({ type: "drawer", response: i, count: n.length }))
            .catch((i) => ({ type: "drawer", error: i, count: n.length })),
        )),
      s.length > 0 &&
        (console.log("🏪 更新層架資料:", s),
        a.push(
          Me.updateMedMapShelf(s)
            .then((i) => ({ type: "shelf", response: i, count: s.length }))
            .catch((i) => ({ type: "shelf", error: i, count: s.length })),
        )),
      o.length > 0 &&
        (console.log("🏢 更新父容器資料:", o),
        o.forEach((i) => {
          a.push(
            Me.updateContainerPosition(i)
              .then((c) => ({
                type: "parent_container",
                response: c,
                count: 1,
              }))
              .catch((c) => ({ type: "parent_container", error: c, count: 1 })),
          );
        })),
      l.length > 0 &&
        (console.log("📁 更新子容器資料:", l),
        a.push(
          Me.updateSubSection(l)
            .then((i) => ({
              type: "sub_container",
              response: i,
              count: l.length,
            }))
            .catch((i) => ({
              type: "sub_container",
              error: i,
              count: l.length,
            })),
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
          ((h += m.count),
            g.push(`${m.type}: ${m.error.message || "網路錯誤"}`),
            console.error(`❌ ${m.type} API 失敗:`, m.error));
        else if (((p = m.response) == null ? void 0 : p.Code) === 200)
          ((c += m.count), console.log(`✅ ${m.type} API 成功:`, m.response));
        else {
          h += m.count;
          const b =
            ((j = m.response) == null ? void 0 : j.Result) || "未知錯誤";
          (g.push(`${m.type}: ${b}`),
            console.error(`❌ ${m.type} API 失敗:`, m.response));
        }
      });
    } catch (i) {
      console.error("💥 批次更新過程中發生錯誤:", i);
    } finally {
      console.log("完成更新");
    }
  },
  Th = "modulepreload",
  Rh = function (e) {
    return "/" + e;
  },
  Lc = {},
  $h = function (t, n, s) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const a = document.querySelector("meta[property=csp-nonce]"),
        i =
          (a == null ? void 0 : a.nonce) ||
          (a == null ? void 0 : a.getAttribute("nonce"));
      o = Promise.allSettled(
        n.map((c) => {
          if (((c = Rh(c)), c in Lc)) return;
          Lc[c] = !0;
          const h = c.endsWith(".css"),
            g = h ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${g}`)) return;
          const m = document.createElement("link");
          if (
            ((m.rel = h ? "stylesheet" : Th),
            h || (m.as = "script"),
            (m.crossOrigin = ""),
            (m.href = c),
            i && m.setAttribute("nonce", i),
            document.head.appendChild(m),
            h)
          )
            return new Promise((p, j) => {
              (m.addEventListener("load", p),
                m.addEventListener("error", () =>
                  j(new Error(`Unable to preload CSS for ${c}`)),
                ));
            });
        }),
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
  Ah = () => {
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
      } = it(),
      { t: g } = Mt(),
      [m, p] = u.useState(0),
      [j, b] = u.useState({}),
      [T, k] = u.useState(""),
      [f, d] = u.useState(""),
      [y, v] = u.useState("N"),
      [E, S] = u.useState([]),
      [I, F] = u.useState(!1),
      [M, $] = u.useState(!1),
      [se, ye] = u.useState(null),
      [_, N] = u.useState(null),
      [L, P] = u.useState(!1),
      [K, w] = u.useState(!1);
    u.useEffect(() => {
      if (n && e)
        if (c === "add") {
          p(0);
          const te = {};
          (an.forEach((D, ge) => {
            te[ge] = 0;
          }),
            b(te),
            k(""),
            $(!1),
            B());
        } else {
          const te = an.findIndex(
            (D) => D.box_type === n.box_type || D.type === n.box_type,
          );
          if ((console.log(n), te >= 0)) {
            p(te);
            const ge = an[te].width.findIndex((W) => {
                var le;
                return (
                  W ===
                  ((le = n.width) == null ? void 0 : le[n.width_index || 0])
                );
              }),
              fe = {};
            (an.forEach((W, le) => {
              le === te ? (fe[le] = ge >= 0 ? ge : 0) : (fe[le] = 0);
            }),
              b(fe));
          } else {
            p(0);
            const D = {};
            (an.forEach((ge, fe) => {
              D[fe] = 0;
            }),
              b(D));
          }
          (k(n.ip || ""),
            N({
              box_type: n.box_type,
              width: n.width,
              width_index: n.width_index,
              ip: n.ip || "",
              storage: n.storage ? JSON.parse(JSON.stringify(n.storage)) : null,
            }));
        }
    }, [n, e, c]);
    const B = () => {
        n && n.parentShelf && ye(n.parentShelf);
      },
      ee = (te) => {
        if (!te || !te.contents || te.contents.length === 0) return "0,0";
        let D = -1,
          ge = 0;
        return (
          te.contents.forEach((fe) => {
            if (fe.gird_position) {
              const [W, le] = fe.gird_position.split(",").map(Number);
              le > D && ((D = le), (ge = W));
            }
          }),
          `${ge},${D + 1}`
        );
      },
      H = () => {
        if (!_ || c !== "edit") return !1;
        const te = an[m],
          D = j[m] || 0,
          ge = te.box_type || te.type || te.name;
        return (
          _.box_type !== ge ||
          _.width_index !== D ||
          _.ip !== T ||
          JSON.stringify(_.storage) !==
            JSON.stringify(n == null ? void 0 : n.storage)
        );
      },
      A = (te) => {
        p(te);
      },
      Ne = (te, D) => {
        b((ge) => ({ ...ge, [te]: D }));
      },
      U = () => {
        n && (c === "add" ? he() : J());
      },
      G = () => {
        t();
      },
      he = async () => {
        if (!n || !se) {
          a("缺少必要資料，無法新增藥盒", "error");
          return;
        }
        $(!0);
        try {
          const te = an[m],
            D = j[m] || 0,
            ge = te.width[D],
            fe = ee(se),
            W = {
              Master_GUID: se.GUID,
              position: fe,
              width: ge.toString(),
              height: "60",
              ip_box: T,
              serverName: se.serverName || "",
              serverType: se.serverType || "",
            };
          console.log("🚀 發送新增藥盒 API 請求:", W);
          const le = await Me.addMedMapBox(W);
          le.Code === 200
            ? (a("藥盒新增成功", "success"), t(), await ke())
            : a(`藥盒新增失敗：${le.Result || "未知錯誤"}`, "error");
        } catch (te) {
          (console.error("Add med box failed:", te),
            a("藥盒新增失敗：網路錯誤", "error"));
        } finally {
          $(!1);
        }
      },
      J = async () => {
        var te;
        if (!n || !H()) {
          a("沒有資料變更", "error");
          return;
        }
        P(!0);
        try {
          const D = an[m],
            ge = j[m] || 0,
            fe = D.width[ge],
            W = D.box_type || D.type || D.name,
            le = _.box_type !== W || _.width_index !== ge || _.ip !== T,
            be =
              JSON.stringify(_.storage) !==
              JSON.stringify(n == null ? void 0 : n.storage),
            O = [];
          if (le) {
            const xe = {
              GUID: n.GUID,
              Master_GUID: n.Master_GUID,
              position: n.gird_position,
              ip_light: T,
              serverName: n.serverName,
              serverType: n.serverType,
            };
            O.push(Me.updateMedMapBox([xe]));
          }
          be &&
            O.push(
              Me.updateEpd266Storages(n.serverName || "", n.serverType || "", [
                n.storage,
              ]),
            );
          const oe = await Promise.all(O);
          if (oe.every((xe) => xe.Code === 200))
            (a("藥盒更新成功", "success"), t(), await ke());
          else {
            const xe = oe.filter((ce) => ce.Code !== 200);
            a(
              `藥盒更新失敗：${((te = xe[0]) == null ? void 0 : te.Result) || "未知錯誤"}`,
              "error",
            );
          }
        } catch (D) {
          (console.error("Update med box failed:", D),
            a("藥盒更新失敗：網路錯誤", "error"));
        } finally {
          P(!1);
        }
      },
      ke = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        (console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0));
        try {
          const te = await Me.getMedMapByDepartment(s);
          if (te.Code === 200 && te.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const D = await $h(() => Promise.resolve().then(() => sh), void 0),
              ge = D.default.convertMedMapApiToFakeData(te.Data);
            if (!D.default.validateConvertedData(ge)) {
              (console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error"));
              return;
            }
            (o(ge), console.log("✅ 藥品地圖資料已更新"));
          } else
            (console.error("❌ API 回傳錯誤:", te),
              a("資料更新失敗：API 錯誤", "error"));
        } catch (te) {
          (console.error("💥 重新獲取藥品地圖資料失敗:", te),
            a("資料更新失敗：網路錯誤", "error"));
        } finally {
          l(!1);
        }
      },
      Ee = async () => {
        F(!0);
        try {
          const te = f.toLowerCase().trim();
          let D = h;
          (te &&
            (D = D.filter((ge) => {
              var fe, W, le;
              return (
                ((fe = ge.CODE) == null
                  ? void 0
                  : fe.toLowerCase().includes(te)) ||
                ((W = ge.NAME) == null
                  ? void 0
                  : W.toLowerCase().includes(te)) ||
                ((le = ge.CHT_NAME) == null
                  ? void 0
                  : le.toLowerCase().includes(te))
              );
            })),
            y !== "N" && (D = D.filter((ge) => ge.DRUGKIND === y)),
            S(D));
        } catch (te) {
          (console.error("Search failed:", te), S([]));
        } finally {
          F(!1);
        }
      },
      De = (te, D) => {
        (console.log("📸 掃描成功，藥品資料:", D), w(!1), Be(D));
      },
      Be = async (te) => {
        if (n)
          try {
            console.log("🚀 開始更新藥盒藥品代碼:", te.CODE);
            const D = await Me.updateEpd266Medcode(
              n.serverName || "",
              n.serverType || "",
              te.CODE,
              n.storage || {},
            );
            D.Code === 200
              ? (console.log("✅ 藥品代碼更新成功:", D.Data),
                (n.storage = D.Data),
                (n.med_info = [
                  { name: te.NAME, cht_name: te.CHT_NAME, code: te.CODE },
                ]),
                a("藥品更新成功", "success"),
                i())
              : (console.error("❌ 藥品代碼更新失敗:", D),
                a(`藥品更新失敗：${D.Result || "未知錯誤"}`, "error"));
          } catch (D) {
            (console.error("💥 藥品代碼更新發生錯誤:", D),
              a("藥品更新失敗：網路錯誤", "error"));
          }
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: G,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (te) => te.stopPropagation(),
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
                              : "modal.medBoxSettings",
                          ),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: G,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ze, { className: "w-6 h-6" }),
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
                                onChange: (te) => k(te.target.value),
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
                                children: an.map((te, D) =>
                                  r.jsxs(
                                    "label",
                                    {
                                      className: `flex items-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${m === D ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"}`,
                                      children: [
                                        r.jsx("input", {
                                          type: "radio",
                                          name: "boxType",
                                          value: D,
                                          checked: m === D,
                                          onChange: () => A(D),
                                          className:
                                            "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                        }),
                                        r.jsx("div", {
                                          children: r.jsx("div", {
                                            className:
                                              "text-sm font-medium text-gray-900",
                                            children: te.name,
                                          }),
                                        }),
                                      ],
                                    },
                                    D,
                                  ),
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
                              an.map((te, D) =>
                                r.jsx(
                                  "div",
                                  {
                                    className: `flex gap-4 ${m === D ? "block" : "hidden"}`,
                                    children: te.width.map((ge, fe) =>
                                      r.jsxs(
                                        "label",
                                        {
                                          className: `flex items-center justify-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${m === D && (j[D] || 0) === fe ? "border-green-500 bg-green-50" : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"}`,
                                          children: [
                                            r.jsx("input", {
                                              type: "radio",
                                              name: `width-${D}`,
                                              value: fe,
                                              checked:
                                                m === D && (j[D] || 0) === fe,
                                              onChange: () => Ne(D, fe),
                                              className:
                                                "w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500 hidden",
                                            }),
                                            r.jsx("div", {
                                              className: "text-center",
                                              children: r.jsxs("div", {
                                                className:
                                                  "text-sm font-semibold text-gray-900",
                                                children: [ge, " ", te.unit],
                                              }),
                                            }),
                                          ],
                                        },
                                        `${D}-${fe}`,
                                      ),
                                    ),
                                  },
                                  D,
                                ),
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
                                          children: n.med_info.map((te, D) =>
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
                                                          te.code ||
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
                                                          te.name ||
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
                                                          te.cht_name ||
                                                          g("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              D,
                                            ),
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
                                    onClick: () => w(!0),
                                    className:
                                      "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                    title: "掃描條碼",
                                    children: r.jsx(Br, {
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
                                    onChange: (te) => d(te.target.value),
                                    placeholder: g("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  r.jsxs("select", {
                                    value: y,
                                    onChange: (te) => v(te.target.value),
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
                                    onClick: Ee,
                                    disabled: I,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      I &&
                                        r.jsx(Lt, {
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
                                children: I
                                  ? r.jsxs("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: [
                                        r.jsx(Lt, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        g("status.searching"),
                                      ],
                                    })
                                  : E.length > 0
                                    ? r.jsx("div", {
                                        className: "space-y-1",
                                        children: E.map((te, D) =>
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
                                                      children: te.NAME,
                                                    }),
                                                    r.jsx("div", {
                                                      className:
                                                        "text-xs text-gray-500 truncate",
                                                      children: te.CHT_NAME,
                                                    }),
                                                    r.jsx("div", {
                                                      className:
                                                        "text-xs text-gray-400 font-mono",
                                                      children: te.CODE,
                                                    }),
                                                  ],
                                                }),
                                                r.jsx("button", {
                                                  onClick: () => Be(te),
                                                  className:
                                                    "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                  title: g("button.add"),
                                                  children: r.jsx($t, {
                                                    className: "w-4 h-4",
                                                  }),
                                                }),
                                              ],
                                            },
                                            te.GUID || D,
                                          ),
                                        ),
                                      })
                                    : r.jsx("div", {
                                        className:
                                          "text-gray-500 text-center flex items-center justify-center h-full",
                                        children: g(
                                          f || y !== "N"
                                            ? "status.noSearchResults"
                                            : "status.searchResults",
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
                      onClick: G,
                      disabled: M || L,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: g("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: U,
                      disabled: M || L,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        (M || L) &&
                          r.jsx(Lt, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", {
                          children: M
                            ? "新增中..."
                            : L
                              ? "更新中..."
                              : g(c === "add" ? "button.add" : "button.save"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            r.jsx(il, {
              isOpen: K,
              onClose: () => w(!1),
              onScanSuccess: De,
              mode: "set_med_box_med_mode",
            }),
          ],
        });
  },
  Oh = () => {
    const {
        listDrawModalOpen: e,
        closeListDrawModal: t,
        selectedListDraw: n,
        triggerRefresh: s,
      } = it(),
      { t: o } = Mt(),
      [l, a] = u.useState(""),
      [i, c] = u.useState([]),
      [h, g] = u.useState(""),
      [m, p] = u.useState("N"),
      [j, b] = u.useState([]),
      [T, k] = u.useState(!1);
    u.useEffect(() => {
      n && e && (a(n.name || ""), c(n.med_info || []));
    }, [n, e]);
    const f = (S) => {
        c((I) => I.filter((F) => F.code !== S));
      },
      d = async () => {
        k(!0);
        try {
          const S = await Me.searchMedicine(h, m);
          b(S);
        } catch (S) {
          (console.error("Search failed:", S), b([]));
        } finally {
          k(!1);
        }
      },
      y = (S) => {
        const I = {
          id: S.GUID || `${Date.now()}_${Math.random()}`,
          name: S.NAME,
          cht_name: S.CHT_NAME,
          code: S.CODE,
        };
        c((F) => (F.some(($) => $.code === I.code) ? F : [...F, I]));
      },
      v = () => {
        n && ((n.name = l), (n.med_info = i), s(), t());
      },
      E = () => {
        t();
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: E,
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
                      onClick: E,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ze, { className: "w-6 h-6" }),
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
                                                onClick: () => f(S.code),
                                                className:
                                                  "ml-3 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0",
                                                title: o("button.remove"),
                                                children: r.jsx(Ze, {
                                                  className: "w-5 h-5",
                                                }),
                                              }),
                                            ],
                                          }),
                                        },
                                        S.id,
                                      ),
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
                                    disabled: T,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      T &&
                                        r.jsx(Lt, {
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
                                children: T
                                  ? r.jsxs("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: [
                                        r.jsx(Lt, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        o("status.searching"),
                                      ],
                                    })
                                  : j.length > 0
                                    ? r.jsx("div", {
                                        className: "space-y-1",
                                        children: j.map((S, I) =>
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
                                                  onClick: () => y(S),
                                                  className:
                                                    "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                  title: o("button.add"),
                                                  children: r.jsx($t, {
                                                    className: "w-4 h-4",
                                                  }),
                                                }),
                                              ],
                                            },
                                            S.GUID || I,
                                          ),
                                        ),
                                      })
                                    : r.jsx("div", {
                                        className:
                                          "text-gray-500 text-center flex items-center justify-center h-full",
                                        children: o(
                                          h || m !== "N"
                                            ? "status.noSearchResults"
                                            : "status.searchResults",
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
                      onClick: E,
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
  Uh = () => {
    const {
        gridDrawModalOpen: e,
        closeGridDrawModal: t,
        selectedGridDraw: n,
        triggerRefresh: s,
        apiDepartmentData: o,
        setApiDepartmentData: l,
        showNotification: a,
        medicineList: i,
      } = it(),
      { t: c } = Mt(),
      [h, g] = u.useState(""),
      [m, p] = u.useState(null),
      [j, b] = u.useState(!1),
      [T, k] = u.useState(!1),
      [f, d] = u.useState(null),
      [y, v] = u.useState(""),
      [E, S] = u.useState("N"),
      [I, F] = u.useState([]),
      [M, $] = u.useState(!1),
      [se, ye] = u.useState(0),
      [_, N] = u.useState({ x: 0, y: 0 });
    (u.useEffect(() => {
      if (n && e)
        if ((g(n.name || ""), n.drawer)) {
          if (!j) {
            console.log("🔄 備份原始 drawer 資料:", n);
            const W = JSON.parse(JSON.stringify(n.drawer));
            (p(W), b(!0), console.log("✅ 備份完成，備份資料:", W));
          }
        } else (console.log("⚠️ 沒有 drawer 資料可備份"), p(null), b(!1));
    }, [n, e, j]),
      u.useEffect(() => {
        e || (b(!1), p(null), d(null));
      }, [e]));
    const L = () => {
        n && ge();
      },
      P = () => {
        if (
          (console.log("🔄 開始恢復原始資料..."),
          console.log("原始備份資料:", m),
          console.log("當前 selectedGridDraw:", n),
          n && m && j)
        ) {
          console.log("📦 恢復 drawer 資料...");
          const W = JSON.parse(JSON.stringify(m));
          if (((n.drawer = W), o)) {
            const le = (O) => {
                O.forEach((oe) => {
                  (oe.GUID === n.GUID &&
                    (console.log("🎯 找到目標格線抽屜，更新資料"),
                    (oe.drawer = W)),
                    oe.contents &&
                      Array.isArray(oe.contents) &&
                      le(oe.contents),
                    oe.components &&
                      Array.isArray(oe.components) &&
                      le(oe.components));
                });
              },
              be = JSON.parse(JSON.stringify(o));
            (le(be), l(be), console.log("🔄 已更新全域資料狀態"));
          }
          console.log("✅ 資料已恢復:", n.drawer);
        } else
          (console.log(
            "⚠️ 無法恢復資料 - selectedGridDraw、originalDrawerData 或 hasBackup 為空",
          ),
            console.log("selectedGridDraw:", !!n),
            console.log("originalDrawerData:", !!m),
            console.log("hasBackup:", j));
        (d(null), b(!1), p(null), s(), t());
      },
      K = (W, le) => {
        if (!f) return !1;
        const be = Math.min(f.startRow, f.endRow),
          O = Math.max(f.startRow, f.endRow),
          oe = Math.min(f.startCol, f.endCol),
          V = Math.max(f.startCol, f.endCol);
        return W >= be && W <= O && le >= oe && le <= V;
      },
      w = (W) => {
        var we;
        if (
          !((we = n == null ? void 0 : n.drawer) != null && we.Boxes) ||
          W.Slave
        )
          return { width: 1, height: 1 };
        const be = n.drawer.Boxes.flat().filter(
          (pe) =>
            pe.Slave &&
            pe.MasterBox_Row === W.Row &&
            pe.MasterBox_Column === W.Column,
        );
        if (be.length === 0) return { width: 1, height: 1 };
        const O = [W, ...be],
          oe = Math.min(...O.map((pe) => pe.Row)),
          V = Math.max(...O.map((pe) => pe.Row)),
          xe = Math.min(...O.map((pe) => pe.Column));
        return {
          width: Math.max(...O.map((pe) => pe.Column)) - xe + 1,
          height: V - oe + 1,
        };
      },
      B = () => {
        var xe;
        if (!f || !((xe = n == null ? void 0 : n.drawer) != null && xe.Boxes))
          return [];
        const W = n.drawer.Boxes.flat(),
          le = Math.min(f.startRow, f.endRow),
          be = Math.max(f.startRow, f.endRow),
          O = Math.min(f.startCol, f.endCol),
          oe = Math.max(f.startCol, f.endCol),
          V = [];
        return (
          W.forEach((ce) => {
            if (!ce.Slave) {
              const we = w(ce),
                pe = ce.Row + we.height - 1,
                C = ce.Column + we.width - 1;
              ce.Row >= le &&
                pe <= be &&
                ce.Column >= O &&
                C <= oe &&
                V.push(ce);
            }
          }),
          V
        );
      },
      ee = (W, le, be, O) => {
        var C;
        if (!f || !((C = n == null ? void 0 : n.drawer) != null && C.Boxes))
          return !1;
        const oe = n.drawer.Boxes.flat();
        let V = !0,
          xe = W,
          ce = le,
          we = be,
          pe = O;
        for (; V; )
          ((V = !1),
            oe.forEach((R) => {
              if (!R.Slave) {
                const q = w(R),
                  ue = R.Row + q.height - 1,
                  ie = R.Column + q.width - 1;
                !(R.Row > ce || ue < xe || R.Column > pe || ie < we) &&
                  (R.Row < xe && ((xe = R.Row), (V = !0)),
                  ue > ce && ((ce = ue), (V = !0)),
                  R.Column < we && ((we = R.Column), (V = !0)),
                  ie > pe && ((pe = ie), (V = !0)));
              }
            }));
        return { minRow: xe, maxRow: ce, minCol: we, maxCol: pe };
      },
      H = () => {
        var V;
        if (!f || !((V = n == null ? void 0 : n.drawer) != null && V.Boxes))
          return !1;
        const W = Math.min(f.startRow, f.endRow),
          le = Math.max(f.startRow, f.endRow),
          be = Math.min(f.startCol, f.endCol),
          O = Math.max(f.startCol, f.endCol),
          oe = n.drawer.Boxes.flat();
        for (let xe = W; xe <= le; xe++)
          for (let ce = be; ce <= O; ce++) {
            let we = !1;
            for (const pe of oe)
              if (!pe.Slave) {
                const C = w(pe),
                  R = pe.Row + C.height - 1,
                  q = pe.Column + C.width - 1;
                if (xe >= pe.Row && xe <= R && ce >= pe.Column && ce <= q) {
                  we = !0;
                  break;
                }
              }
            if (!we) return !1;
          }
        return !0;
      },
      A = () => {
        var C, R;
        const W = B();
        if (!f) return { canMerge: !1, canUnmerge: !1 };
        if (W.length === 0) return { canMerge: !1, canUnmerge: !1 };
        const le =
            ((R =
              (C = n == null ? void 0 : n.drawer) == null ? void 0 : C.Boxes) ==
            null
              ? void 0
              : R.flat()) || [],
          be = W.some(
            (q) =>
              le.filter(
                (ie) =>
                  ie.Slave &&
                  ie.MasterBox_Row === q.Row &&
                  ie.MasterBox_Column === q.Column,
              ).length > 0,
          ),
          O = Math.min(f.startRow, f.endRow),
          oe = Math.max(f.startRow, f.endRow),
          V = Math.min(f.startCol, f.endCol),
          xe = Math.max(f.startCol, f.endCol),
          ce = le.some(
            (q) =>
              q.Slave &&
              q.Row >= O &&
              q.Row <= oe &&
              q.Column >= V &&
              q.Column <= xe,
          );
        return { canMerge: W.length > 1 && H(), canUnmerge: be || ce };
      },
      { canMerge: Ne, canUnmerge: U } = A(),
      G = async () => {
        $(!0);
        try {
          const W = y.toLowerCase().trim();
          let le = i;
          (W &&
            (le = le.filter((be) => {
              var O, oe, V;
              return (
                ((O = be.CODE) == null
                  ? void 0
                  : O.toLowerCase().includes(W)) ||
                ((oe = be.NAME) == null
                  ? void 0
                  : oe.toLowerCase().includes(W)) ||
                ((V = be.CHT_NAME) == null
                  ? void 0
                  : V.toLowerCase().includes(W))
              );
            })),
            E !== "N" && (le = le.filter((be) => be.DRUGKIND === E)),
            F(le));
        } catch (W) {
          (console.error("Search failed:", W), F([]));
        } finally {
          $(!1);
        }
      },
      he = async (W) => {
        var be;
        if (!f || !((be = n == null ? void 0 : n.drawer) != null && be.Boxes))
          return;
        const le = B();
        if (le.length !== 0)
          try {
            const O = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [`guid=${le[0].GUID}`, `code=${W.CODE}`],
              Data: n.drawer,
            };
            console.log("🚀 發送更新藥品 API 請求:", O);
            const oe = await Me.request("/api/device/update_drawer_medcode", {
              method: "POST",
              body: JSON.stringify(O),
            });
            if (
              (console.log("📡 更新藥品 API 回應:", oe),
              oe.Code === 200 && oe.Data)
            ) {
              if (
                ((n.drawer = oe.Data),
                oe.Data.Boxes && (n.Boxes = oe.Data.Boxes),
                console.log("✅ 藥品資料更新成功"),
                o)
              ) {
                const V = (ce) => {
                    ce.forEach((we) => {
                      (we.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (we.drawer = n.drawer),
                        n.Boxes && (we.Boxes = n.Boxes)),
                        we.contents &&
                          Array.isArray(we.contents) &&
                          V(we.contents),
                        we.components &&
                          Array.isArray(we.components) &&
                          V(we.components));
                    });
                  },
                  xe = JSON.parse(JSON.stringify(o));
                (V(xe), l(xe));
              }
              (d(null), s());
            } else
              (console.error("❌ 藥品更新失敗:", oe),
                a(`藥品更新失敗：${oe.Result || "未知錯誤"}`, "error"));
          } catch (O) {
            (console.error("💥 藥品更新 API 調用失敗:", O),
              a("藥品更新失敗：網路錯誤", "error"));
          }
      },
      J = (W, le, be) => {
        (be.preventDefault(),
          be.stopPropagation(),
          "touches" in be &&
            (ye(Date.now()),
            N({ x: be.touches[0].clientX, y: be.touches[0].clientY })),
          k(!0),
          d({ startRow: W, startCol: le, endRow: W, endCol: le }));
      },
      ke = (W, le) => {
        if (!T || !f) return;
        const be = Math.min(f.startRow, W),
          O = Math.max(f.startRow, W),
          oe = Math.min(f.startCol, le),
          V = Math.max(f.startCol, le),
          xe = ee(be, O, oe, V);
        xe &&
          d((ce) =>
            ce
              ? {
                  startRow: ce.startRow,
                  startCol: ce.startCol,
                  endRow: W >= ce.startRow ? xe.maxRow : xe.minRow,
                  endCol: le >= ce.startCol ? xe.maxCol : xe.minCol,
                }
              : null,
          );
      },
      Ee = () => {
        if (T && (k(!1), f && n != null && n.Boxes)) {
          const W = Math.min(f.startRow, f.endRow),
            le = Math.max(f.startRow, f.endRow),
            be = Math.min(f.startCol, f.endCol),
            O = Math.max(f.startCol, f.endCol),
            oe = ee(W, le, be, O);
          oe &&
            d({
              startRow: oe.minRow,
              startCol: oe.minCol,
              endRow: oe.maxRow,
              endCol: oe.maxCol,
            });
        }
      },
      De = () => {
        var W;
        !Ne ||
          !((W = n == null ? void 0 : n.drawer) != null && W.Boxes) ||
          !f ||
          D();
      },
      Be = () => {
        var W;
        !U ||
          !((W = n == null ? void 0 : n.drawer) != null && W.Boxes) ||
          !f ||
          (console.log(f), te());
      },
      te = async () => {
        var W;
        if (!(!f || !((W = n == null ? void 0 : n.drawer) != null && W.Boxes)))
          try {
            const le = Math.min(f.startRow, f.endRow),
              be = Math.max(f.startRow, f.endRow),
              O = Math.min(f.startCol, f.endCol),
              oe = Math.max(f.startCol, f.endCol),
              xe = n.drawer.Boxes.flat().filter(
                (R) =>
                  R.Row >= le && R.Row <= be && R.Column >= O && R.Column <= oe,
              ),
              ce = [],
              we = [];
            xe.forEach((R) => {
              (ce.push(R.Column.toString()), we.push(R.Row.toString()));
            });
            const pe = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${ce.join(",")}`,
                `SelectRows=${we.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", pe);
            const C = await Me.request("/api/device/separate_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(pe),
            });
            if ((console.log("📡 API 回應:", C), C.Code === 200 && C.Data)) {
              if (
                C.Data.Boxes &&
                Array.isArray(C.Data.Boxes) &&
                ((n.Boxes = C.Data.Boxes),
                (n.drawer = C.Data),
                console.log("✅ 資料已更新"),
                o)
              ) {
                const R = (ue) => {
                    ue.forEach((ie) => {
                      (ie.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (ie.drawer = n.drawer)),
                        ie.contents &&
                          Array.isArray(ie.contents) &&
                          R(ie.contents),
                        ie.components &&
                          Array.isArray(ie.components) &&
                          R(ie.components));
                    });
                  },
                  q = JSON.parse(JSON.stringify(o));
                (R(q), l(q));
              }
            } else
              (console.error("❌ API 回應錯誤:", C),
                a(`取消合併失敗：${C.Result || "未知錯誤"}`, "error"));
          } catch (le) {
            (console.error("💥 API 調用失敗:", le),
              a("取消合併失敗：網路錯誤", "error"));
          } finally {
            (console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              d(null),
              s());
          }
      },
      D = async () => {
        var W;
        if (!(!f || !((W = n == null ? void 0 : n.drawer) != null && W.Boxes)))
          try {
            const le = Math.min(f.startRow, f.endRow),
              be = Math.max(f.startRow, f.endRow),
              O = Math.min(f.startCol, f.endCol),
              oe = Math.max(f.startCol, f.endCol),
              xe = n.drawer.Boxes.flat().filter(
                (R) =>
                  R.Row >= le && R.Row <= be && R.Column >= O && R.Column <= oe,
              ),
              ce = [],
              we = [];
            xe.forEach((R) => {
              (ce.push(R.Column.toString()), we.push(R.Row.toString()));
            });
            const pe = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${ce.join(",")}`,
                `SelectRows=${we.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", pe);
            const C = await Me.request("/api/device/combine_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(pe),
            });
            if ((console.log("📡 API 回應:", C), C.Code === 200 && C.Data)) {
              if (
                C.Data.Boxes &&
                Array.isArray(C.Data.Boxes) &&
                ((n.Boxes = C.Data.Boxes),
                (n.drawer = C.Data),
                console.log("✅ 資料已更新"),
                o)
              ) {
                const R = (ue) => {
                    ue.forEach((ie) => {
                      (ie.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (ie.drawer = n.drawer)),
                        ie.contents &&
                          Array.isArray(ie.contents) &&
                          R(ie.contents),
                        ie.components &&
                          Array.isArray(ie.components) &&
                          R(ie.components));
                    });
                  },
                  q = JSON.parse(JSON.stringify(o));
                (R(q), l(q));
              }
            } else
              (console.error("❌ API 回應錯誤:", C),
                a(`取消合併失敗：${C.Result || "未知錯誤"}`, "error"));
          } catch (le) {
            (console.error("💥 API 調用失敗:", le),
              a("取消合併失敗：網路錯誤", "error"));
          } finally {
            (console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              d(null),
              s());
          }
      },
      ge = async () => {
        if (n)
          try {
            n.name = h;
            const W = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              Data: [n.drawer],
            };
            console.log("🚀 發送確認更新 API 請求:", W);
            const le = await Me.request("/api/device/update_epd583_drawers", {
              method: "POST",
              body: JSON.stringify(W),
            });
            if ((console.log("📡 確認更新 API 回應:", le), le.Code === 200)) {
              if (
                (console.log("✅ 抽屜資料更新成功"),
                a("抽屜資料更新成功", "success"),
                o)
              ) {
                const be = (oe) => {
                    oe.forEach((V) => {
                      (V.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新名稱"),
                        (V.name = n.name)),
                        V.contents &&
                          Array.isArray(V.contents) &&
                          be(V.contents),
                        V.components &&
                          Array.isArray(V.components) &&
                          be(V.components));
                    });
                  },
                  O = JSON.parse(JSON.stringify(o));
                (be(O), l(O));
              }
              (b(!1), p(null), s(), t());
            } else
              (console.error("❌ 抽屜資料更新失敗:", le),
                a(`抽屜資料更新失敗：${le.Result || "未知錯誤"}`, "error"));
          } catch (W) {
            (console.error("💥 抽屜資料更新 API 調用失敗:", W),
              a("抽屜資料更新失敗：網路錯誤", "error"));
          }
      },
      fe = () => {
        var we;
        if (
          !((we = n == null ? void 0 : n.drawer) != null && we.Boxes) ||
          n.drawer.Boxes.length === 0
        )
          return r.jsx("div", {
            className:
              "bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg py-12",
            children: r.jsxs("div", {
              className: "text-center",
              children: [
                r.jsx(lf, {
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
        const W = n.drawer.Boxes.flat(),
          le = (pe) => {
            if (pe.Slave) return { width: 1, height: 1 };
            const C = W.filter(
              (Ue) =>
                Ue.Slave &&
                Ue.MasterBox_Row === pe.Row &&
                Ue.MasterBox_Column === pe.Column,
            );
            if (C.length === 0) return { width: 1, height: 1 };
            const R = [pe, ...C],
              q = Math.min(...R.map((Ue) => Ue.Row)),
              ue = Math.max(...R.map((Ue) => Ue.Row)),
              ie = Math.min(...R.map((Ue) => Ue.Column));
            return {
              width: Math.max(...R.map((Ue) => Ue.Column)) - ie + 1,
              height: ue - q + 1,
            };
          },
          be = Math.max(...W.map((pe) => pe.Row + 1 - 1)),
          O = Math.max(...W.map((pe) => pe.Column + 1 - 1)),
          oe = be + 1,
          V = O + 1,
          xe = Array(oe)
            .fill(null)
            .map(() => Array(V).fill(!1)),
          ce = {};
        return (
          W.forEach((pe) => {
            if (!pe.Slave) {
              const C = le(pe);
              ((ce[`${pe.Row},${pe.Column}`] = pe),
                (pe.calculatedWidth = C.width),
                (pe.calculatedHeight = C.height));
            }
          }),
          W.forEach((pe) => {
            if (
              !pe.Slave &&
              (pe.calculatedWidth > 1 || pe.calculatedHeight > 1)
            )
              for (let C = pe.Row; C < pe.Row + pe.calculatedHeight; C++)
                for (let R = pe.Column; R < pe.Column + pe.calculatedWidth; R++)
                  (C !== pe.Row || R !== pe.Column) && (xe[C][R] = !0);
          }),
          r.jsx("div", {
            className: "rounded-lg",
            children: r.jsx("table", {
              className: "w-full",
              children: r.jsx("tbody", {
                children: Array.from({ length: oe }, (pe, C) =>
                  r.jsx(
                    "tr",
                    {
                      children: Array.from({ length: V }, (R, q) => {
                        if (xe[C][q]) return null;
                        const ue = `${C},${q}`,
                          ie = ce[ue];
                        return ie
                          ? r.jsx(
                              "td",
                              {
                                className: `border border-gray-400 pt-1 pl-1 align-top cursor-pointer select-none ${K(C, q) ? "bg-blue-200" : "bg-white hover:bg-gray-100"}`,
                                style: {
                                  width: `${100 / V}%`,
                                  minHeight: "40px",
                                  height: `${50 * ie.calculatedHeight}px`,
                                  maxHeight: `${50 * ie.calculatedHeight}px`,
                                },
                                colSpan: ie.calculatedWidth,
                                rowSpan: ie.calculatedHeight,
                                onMouseDown: (je) => J(C, q, je),
                                onMouseEnter: () => ke(C, q),
                                onMouseUp: Ee,
                                onTouchStart: (je) => J(C, q, je),
                                onTouchMove: (je) => {
                                  if ((je.preventDefault(), !T)) return;
                                  const Ue = je.touches[0],
                                    We = document.elementFromPoint(
                                      Ue.clientX,
                                      Ue.clientY,
                                    ),
                                    ct = We == null ? void 0 : We.closest("td");
                                  if (ct) {
                                    const Et = parseInt(
                                        ct.getAttribute("data-row") || "0",
                                      ),
                                      It = parseInt(
                                        ct.getAttribute("data-col") || "0",
                                      );
                                    ke(Et, It);
                                  }
                                },
                                onTouchEnd: Ee,
                                "data-row": C,
                                "data-col": q,
                                children: r.jsx("div", {
                                  className: "h-full flex flex-col",
                                  children:
                                    ie.Code || ie.Name || ie.ChineseName
                                      ? r.jsxs(r.Fragment, {
                                          children: [
                                            ie.Code &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs font-mono text-gray-600",
                                                children: ie.Code,
                                              }),
                                            ie.Name &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs font-medium text-gray-900",
                                                children: ie.Name,
                                              }),
                                            ie.ChineseName &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs text-gray-700",
                                                children: ie.ChineseName,
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
                              q,
                            )
                          : r.jsx(
                              "td",
                              {
                                className: `border border-gray-300 p-2 align-top cursor-pointer select-none ${K(C, q) ? "border-1 border-blue-500 bg-blue-100" : "bg-gray-50 hover:bg-gray-100"}`,
                                style: {
                                  width: `${100 / V}%`,
                                  minWidth: "80px",
                                  minHeight: "80px",
                                },
                                onMouseDown: (je) => J(C, q, je),
                                onMouseEnter: () => ke(C, q),
                                onMouseUp: Ee,
                                onTouchStart: (je) => J(C, q, je),
                                onTouchMove: (je) => {
                                  if ((je.preventDefault(), !T)) return;
                                  const Ue = je.touches[0],
                                    We = document.elementFromPoint(
                                      Ue.clientX,
                                      Ue.clientY,
                                    ),
                                    ct = We == null ? void 0 : We.closest("td");
                                  if (ct) {
                                    const Et = parseInt(
                                        ct.getAttribute("data-row") || "0",
                                      ),
                                      It = parseInt(
                                        ct.getAttribute("data-col") || "0",
                                      );
                                    ke(Et, It);
                                  }
                                },
                                onTouchEnd: Ee,
                                "data-row": C,
                                "data-col": q,
                                children: r.jsx("div", {
                                  className:
                                    "h-full flex items-center justify-center text-gray-400 text-xs",
                                  children: c("status.notAdded"),
                                }),
                              },
                              q,
                            );
                      }),
                    },
                    C,
                  ),
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
              onClick: P,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (W) => W.stopPropagation(),
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
                      onClick: P,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ze, { className: "w-6 h-6" }),
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
                              onChange: (W) => g(W.target.value),
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
                                onClick: De,
                                disabled: !Ne,
                                className: `px-4 py-2 rounded transition-colors ${Ne ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`,
                                children: c("button.merge"),
                              }),
                              r.jsx("button", {
                                onClick: Be,
                                disabled: !U,
                                className: `px-4 py-2 rounded transition-colors ${U ? "bg-red-600 text-white hover:bg-red-700" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`,
                                children: c("button.unmerge"),
                              }),
                            ],
                          }),
                        }),
                        r.jsx("div", {
                          className: "space-y-2 w-[30%]",
                          children: (() => {
                            const W = B(),
                              le = W.find((be) => !be.Slave);
                            return le && (le.Code || le.Name || le.ChineseName)
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
                                          children: le.Code || "-",
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
                                          children: le.Name || "-",
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
                                          children: le.ChineseName || "-",
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
                                      f && W.length > 0
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
                                  onChange: (W) => v(W.target.value),
                                  placeholder: c("placeholder.drugSearch"),
                                  className:
                                    "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                }),
                                r.jsxs("select", {
                                  value: E,
                                  onChange: (W) => S(W.target.value),
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
                                  onClick: G,
                                  disabled: M,
                                  className:
                                    "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                  children: [
                                    M &&
                                      r.jsx(Lt, {
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
                              children: M
                                ? r.jsxs("div", {
                                    className:
                                      "text-gray-500 text-center flex items-center justify-center h-full",
                                    children: [
                                      r.jsx(Lt, {
                                        className: "w-5 h-5 animate-spin mr-2",
                                      }),
                                      c("status.searching"),
                                    ],
                                  })
                                : I.length > 0
                                  ? r.jsx("div", {
                                      className: "space-y-1",
                                      children: I.map((W, le) =>
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
                                                    children: W.NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: W.CHT_NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: W.CODE,
                                                  }),
                                                ],
                                              }),
                                              r.jsx("button", {
                                                onClick: () => he(W),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: c("button.add"),
                                                children: r.jsx($t, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          W.GUID || le,
                                        ),
                                      ),
                                    })
                                  : r.jsx("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: c(
                                        y || E !== "N"
                                          ? "status.noSearchResults"
                                          : "status.searchResults",
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
                          onClick: P,
                          className:
                            "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                          children: c("button.cancel"),
                        }),
                        r.jsx("button", {
                          onClick: L,
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
                  onMouseUp: Ee,
                  onMouseLeave: Ee,
                  onTouchEnd: Ee,
                  onTouchCancel: Ee,
                }),
              ],
            }),
          ],
        });
  },
  Lh = () => {
    var F;
    const {
        addParentContainerModalOpen: e,
        closeAddParentContainerModal: t,
        selectedDepartmentForAdd: n,
        showNotification: s,
        setSidebarOpen: o,
        addParentContainerToLocalData: l,
      } = it(),
      { t: a } = Mt(),
      [i, c] = u.useState(null),
      [h, g] = u.useState(0),
      [m, p] = u.useState(0),
      [j, b] = u.useState(!1);
    (u.useEffect(() => {
      e && (c(null), g(0), p(0), b(!1));
    }, [e]),
      u.useEffect(() => {
        i && (g(i.row), p(i.col));
      }, [i]));
    const T = () => {
        const M = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach(($) => {
              $.type === "parent_container" &&
                $.gird_position &&
                M.add($.gird_position);
            }),
          M
        );
      },
      k = () => {
        const M = T(),
          $ = [];
        if (M.size === 0) return ($.push({ row: 0, col: 0 }), $);
        const se = [];
        M.forEach((_) => {
          const [N, L] = _.split(",").map(Number);
          se.push({ row: N, col: L });
        });
        const ye = new Set();
        return (
          se.forEach(({ row: _, col: N }) => {
            (ye.add(`${_},${N + 1}`),
              ye.add(`${_ + 1},${N}`),
              N > 0 && ye.add(`${_},${N - 1}`),
              _ > 0 && ye.add(`${_ - 1},${N}`));
          }),
          ye.forEach((_) => {
            if (!M.has(_)) {
              const [N, L] = _.split(",").map(Number);
              N >= 0 && L >= 0 && $.push({ row: N, col: L });
            }
          }),
          M.has("0,1") ||
            $.some((N) => N.row === 0 && N.col === 1) ||
            $.push({ row: 0, col: 1 }),
          M.has("1,0") ||
            $.some((N) => N.row === 1 && N.col === 0) ||
            $.push({ row: 1, col: 0 }),
          $.sort((_, N) => (_.row === N.row ? _.col - N.col : _.row - N.row))
        );
      },
      f = (M) => {
        c(M);
      },
      d = (M) => {
        (g(M), c({ row: M, col: m }));
      },
      y = (M) => {
        (p(M), c({ row: h, col: M }));
      },
      v = i && !T().has(`${i.row},${i.col}`) && i.row >= 0 && i.col >= 0,
      E = async () => {
        if (!(!i || !n || !v)) {
          b(!0);
          try {
            const M = `${i.row},${i.col}`;
            console.log(n);
            const $ = await Me.addMedMapSection(n.GUID, M, n.name, n.type);
            if ($.Code === 200) {
              const se = {
                GUID: $.Data.GUID,
                Master_GUID: $.Data.Master_GUID,
                gird_position: $.Data.position,
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
              (l(n.GUID, se), s("新增成功", "success"), t(), o(!1));
            } else s(`新增失敗：${$.Result || "未知錯誤"}`, "error");
          } catch (M) {
            (console.error("Add parent container failed:", M),
              s("新增失敗：網路錯誤", "error"));
          } finally {
            b(!1);
          }
        }
      },
      S = () => {
        t();
      },
      I = () => {
        const M = T(),
          $ = k(),
          se = [...M]
            .map((w) => {
              const [B, ee] = w.split(",").map(Number);
              return { row: B, col: ee };
            })
            .concat($);
        se.length === 0 && se.push({ row: 0, col: 0 });
        const ye = Math.max(...se.map((w) => w.row)),
          _ = Math.max(...se.map((w) => w.col)),
          N = Math.min(...se.map((w) => w.row)),
          L = Math.min(...se.map((w) => w.col)),
          P = ye - N + 1,
          K = _ - L + 1;
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
                style: { gridTemplateColumns: `repeat(${K}, 1fr)` },
                children: Array.from({ length: P * K }, (w, B) => {
                  const ee = Math.floor(B / K) + N,
                    H = (B % K) + L,
                    A = `${ee},${H}`,
                    Ne = M.has(A),
                    U = $.some((he) => he.row === ee && he.col === H),
                    G =
                      (i == null ? void 0 : i.row) === ee &&
                      (i == null ? void 0 : i.col) === H;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => U && f({ row: ee, col: H }),
                      disabled: Ne || !U,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${Ne ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed" : G ? "bg-blue-500 border-blue-600 text-white shadow-lg" : U ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer" : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"}
                  `,
                      title: Ne ? "已占用" : U ? "可選擇" : "不可用",
                      children: Ne ? "占用" : `${ee},${H}`,
                    },
                    A,
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
              onClick: (M) => M.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx($t, { className: "w-6 h-6 text-green-600" }),
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
                      children: r.jsx(Ze, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      I(),
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
                                    onChange: (M) =>
                                      d(parseInt(M.target.value) || 0),
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
                                    onChange: (M) =>
                                      y(parseInt(M.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          i &&
                            r.jsx("div", {
                              className: `text-sm p-2 rounded ${v ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`,
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
                                  ((F = n == null ? void 0 : n.contents) == null
                                    ? void 0
                                    : F.filter(
                                        (M) => M.type === "parent_container",
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
                      onClick: E,
                      disabled: !v || j,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        j && r.jsx(Lt, { className: "w-4 h-4 animate-spin" }),
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
  Gc = [
    {
      value: "dispensing_shelves",
      label: "藥盒層架",
      icon: r.jsx(yh, { className: "w-5 h-5" }),
      isShelf: !0,
    },
    {
      value: "store_shelves",
      label: "藥品層架",
      icon: r.jsx(dh, { className: "w-5 h-5" }),
      isShelf: !0,
    },
    {
      value: "list_draw",
      label: "清單抽屜",
      icon: r.jsx(Ia, { className: "w-5 h-5" }),
      isShelf: !1,
    },
    {
      value: "grid_draw",
      label: "格線抽屜",
      icon: r.jsx(lf, { className: "w-5 h-5" }),
      isShelf: !1,
    },
  ],
  Gh = () => {
    var ee;
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
      } = it(),
      { t: h } = Mt(),
      [g, m] = u.useState("dispensing_shelves"),
      [p, j] = u.useState("1"),
      [b, T] = u.useState("1"),
      [k, f] = u.useState(""),
      [d, y] = u.useState(null),
      [v, E] = u.useState(0),
      [S, I] = u.useState(0),
      [F, M] = u.useState(!1);
    (u.useEffect(() => {
      e &&
        (m("dispensing_shelves"),
        j("1"),
        T("1"),
        f(""),
        y(null),
        E(0),
        I(0),
        M(!1));
    }, [e]),
      u.useEffect(() => {
        d && (E(d.row), I(d.col));
      }, [d]));
    const $ = () => {
        const H = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((A) => {
              A.gird_position && H.add(A.gird_position);
            }),
          H
        );
      },
      se = () => {
        const H = $(),
          A = [];
        if (H.size === 0) return (A.push({ row: 0, col: 0 }), A);
        const Ne = [];
        H.forEach((G) => {
          const [he, J] = G.split(",").map(Number);
          Ne.push({ row: he, col: J });
        });
        const U = new Set();
        return (
          Ne.forEach(({ row: G, col: he }) => {
            (U.add(`${G},${he + 1}`),
              U.add(`${G + 1},${he}`),
              he > 0 && U.add(`${G},${he - 1}`),
              G > 0 && U.add(`${G - 1},${he}`));
          }),
          U.forEach((G) => {
            if (!H.has(G)) {
              const [he, J] = G.split(",").map(Number);
              he >= 0 && J >= 0 && A.push({ row: he, col: J });
            }
          }),
          H.has("0,1") ||
            A.some((he) => he.row === 0 && he.col === 1) ||
            A.push({ row: 0, col: 1 }),
          H.has("1,0") ||
            A.some((he) => he.row === 1 && he.col === 0) ||
            A.push({ row: 1, col: 0 }),
          A.sort((G, he) =>
            G.row === he.row ? G.col - he.col : G.row - he.row,
          )
        );
      },
      ye = (H) => {
        y(H);
      },
      _ = (H) => {
        (E(H), y({ row: H, col: S }));
      },
      N = (H) => {
        (I(H), y({ row: v, col: H }));
      },
      L = d && !$().has(`${d.row},${d.col}`) && d.row >= 0 && d.col >= 0,
      P = async () => {
        if (!(!d || !n || !L)) {
          M(!0);
          try {
            const H = `${d.row},${d.col}`,
              A = Gc.find((U) => U.value === g);
            let Ne;
            (A != null && A.isShelf
              ? (Ne = await Me.addMedMapShelf({
                  Master_GUID: n.GUID,
                  position: H,
                  width: p,
                  height: b,
                  ip_light: k,
                  type: g,
                  serverName: n.name,
                  serverType: n.type,
                }))
              : (Ne = await Me.addMedMapDrawer({
                  Master_GUID: n.GUID,
                  position: H,
                  width: p,
                  height: b,
                  ip_drawer: k,
                  type: g,
                  serverName: n.name,
                  serverType: n.type,
                })),
              Ne.Code === 200
                ? (a("新增成功", "success"), t(), c(!1), await K())
                : a(`新增失敗：${Ne.Result || "未知錯誤"}`, "error"));
          } catch (H) {
            (console.error("Add container failed:", H),
              a("新增失敗：網路錯誤", "error"));
          } finally {
            M(!1);
          }
        }
      },
      K = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        (console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0));
        try {
          const H = await Me.getMedMapByDepartment(s);
          if (H.Code === 200 && H.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const A = Rt.convertMedMapApiToFakeData(H.Data);
            if (!Rt.validateConvertedData(A)) {
              (console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error"));
              return;
            }
            (o(A), console.log("✅ 藥品地圖資料已更新"));
          } else
            (console.error("❌ API 回傳錯誤:", H),
              a("資料更新失敗：API 錯誤", "error"));
        } catch (H) {
          (console.error("💥 重新獲取藥品地圖資料失敗:", H),
            a("資料更新失敗：網路錯誤", "error"));
        } finally {
          l(!1);
        }
      },
      w = () => {
        t();
      },
      B = () => {
        const H = $(),
          A = se(),
          Ne = [...H]
            .map((De) => {
              const [Be, te] = De.split(",").map(Number);
              return { row: Be, col: te };
            })
            .concat(A);
        Ne.length === 0 && Ne.push({ row: 0, col: 0 });
        const U = Math.max(...Ne.map((De) => De.row)),
          G = Math.max(...Ne.map((De) => De.col)),
          he = Math.min(...Ne.map((De) => De.row)),
          J = Math.min(...Ne.map((De) => De.col)),
          ke = U - he + 1,
          Ee = G - J + 1;
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
                style: { gridTemplateColumns: `repeat(${Ee}, 1fr)` },
                children: Array.from({ length: ke * Ee }, (De, Be) => {
                  const te = Math.floor(Be / Ee) + he,
                    D = (Be % Ee) + J,
                    ge = `${te},${D}`,
                    fe = H.has(ge),
                    W = A.some((be) => be.row === te && be.col === D),
                    le =
                      (d == null ? void 0 : d.row) === te &&
                      (d == null ? void 0 : d.col) === D;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => W && ye({ row: te, col: D }),
                      disabled: fe || !W,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${fe ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed" : le ? "bg-blue-500 border-blue-600 text-white shadow-lg" : W ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer" : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"}
                  `,
                      title: fe ? "已占用" : W ? "可選擇" : "不可用",
                      children: fe ? "占用" : `${te},${D}`,
                    },
                    ge,
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
              onClick: w,
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
                        r.jsx($t, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增層架/抽屜",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: w,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(Ze, { className: "w-6 h-6" }),
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
                            children: Gc.map((H) =>
                              r.jsxs(
                                "label",
                                {
                                  className: `flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${g === H.value ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"}`,
                                  children: [
                                    r.jsx("input", {
                                      type: "radio",
                                      name: "containerType",
                                      value: H.value,
                                      checked: g === H.value,
                                      onChange: (A) => m(A.target.value),
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
                                H.value,
                              ),
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
                                onChange: (H) => T(H.target.value),
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
                            onChange: (H) => f(H.target.value),
                            placeholder: "請輸入 IP 位址",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                          }),
                        ],
                      }),
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
                                    value: v,
                                    onChange: (H) =>
                                      _(parseInt(H.target.value) || 0),
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
                              className: `text-sm p-2 rounded ${L ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`,
                              children: L
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
                                  ((ee = n == null ? void 0 : n.contents) ==
                                  null
                                    ? void 0
                                    : ee.length) || 0,
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
                      onClick: w,
                      disabled: F,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: h("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: P,
                      disabled: !L || F,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        F && r.jsx(Lt, { className: "w-4 h-4 animate-spin" }),
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
  Bh = () => {
    var F;
    const {
        addSubContainerModalOpen: e,
        closeAddSubContainerModal: t,
        selectedParentContainerForAdd: n,
        showNotification: s,
        setSidebarOpen: o,
        addSubContainerToLocalData: l,
      } = it(),
      { t: a } = Mt(),
      [i, c] = u.useState(null),
      [h, g] = u.useState(0),
      [m, p] = u.useState(0),
      [j, b] = u.useState(!1);
    (u.useEffect(() => {
      e && (c(null), g(0), p(0), b(!1));
    }, [e]),
      u.useEffect(() => {
        i && (g(i.row), p(i.col));
      }, [i]));
    const T = () => {
        const M = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach(($) => {
              $.type === "sub_container" &&
                $.gird_position &&
                M.add($.gird_position);
            }),
          M
        );
      },
      k = () => {
        const M = T(),
          $ = [];
        if (M.size === 0) return ($.push({ row: 0, col: 0 }), $);
        const se = [];
        M.forEach((_) => {
          const [N, L] = _.split(",").map(Number);
          se.push({ row: N, col: L });
        });
        const ye = new Set();
        return (
          se.forEach(({ row: _, col: N }) => {
            (ye.add(`${_},${N + 1}`),
              ye.add(`${_ + 1},${N}`),
              N > 0 && ye.add(`${_},${N - 1}`),
              _ > 0 && ye.add(`${_ - 1},${N}`));
          }),
          ye.forEach((_) => {
            if (!M.has(_)) {
              const [N, L] = _.split(",").map(Number);
              N >= 0 && L >= 0 && $.push({ row: N, col: L });
            }
          }),
          M.has("0,1") ||
            $.some((N) => N.row === 0 && N.col === 1) ||
            $.push({ row: 0, col: 1 }),
          M.has("1,0") ||
            $.some((N) => N.row === 1 && N.col === 0) ||
            $.push({ row: 1, col: 0 }),
          $.sort((_, N) => (_.row === N.row ? _.col - N.col : _.row - N.row))
        );
      },
      f = (M) => {
        c(M);
      },
      d = (M) => {
        (g(M), c({ row: M, col: m }));
      },
      y = (M) => {
        (p(M), c({ row: h, col: M }));
      },
      v = i && !T().has(`${i.row},${i.col}`) && i.row >= 0 && i.col >= 0,
      E = async () => {
        if (!(!i || !n || !v)) {
          b(!0);
          try {
            const M = `${i.row},${i.col}`,
              $ = await Me.addSubSection(n.GUID, M);
            if ($.Code === 200) {
              const se = {
                GUID: $.Data.GUID,
                Master_GUID: $.Data.Master_GUID,
                name: "",
                type: "sub_container",
                class: 2,
                gird_position: $.Data.position,
                contents: [],
                serverName: n.serverName,
                serverType: n.serverType,
                oriMaxCol: 0,
              };
              (l(n.GUID, se), s("新增成功", "success"), t(), o(!1));
            } else s(`新增失敗：${$.Result || "未知錯誤"}`, "error");
          } catch (M) {
            (console.error("Add sub container failed:", M),
              s("新增失敗：網路錯誤", "error"));
          } finally {
            b(!1);
          }
        }
      },
      S = () => {
        t();
      },
      I = () => {
        const M = T(),
          $ = k(),
          se = [...M]
            .map((w) => {
              const [B, ee] = w.split(",").map(Number);
              return { row: B, col: ee };
            })
            .concat($);
        se.length === 0 && se.push({ row: 0, col: 0 });
        const ye = Math.max(...se.map((w) => w.row)),
          _ = Math.max(...se.map((w) => w.col)),
          N = Math.min(...se.map((w) => w.row)),
          L = Math.min(...se.map((w) => w.col)),
          P = ye - N + 1,
          K = _ - L + 1;
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
                style: { gridTemplateColumns: `repeat(${K}, 1fr)` },
                children: Array.from({ length: P * K }, (w, B) => {
                  const ee = Math.floor(B / K) + N,
                    H = (B % K) + L,
                    A = `${ee},${H}`,
                    Ne = M.has(A),
                    U = $.some((he) => he.row === ee && he.col === H),
                    G =
                      (i == null ? void 0 : i.row) === ee &&
                      (i == null ? void 0 : i.col) === H;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => U && f({ row: ee, col: H }),
                      disabled: Ne || !U,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${Ne ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed" : G ? "bg-blue-500 border-blue-600 text-white shadow-lg" : U ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer" : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"}
                  `,
                      title: Ne ? "已占用" : U ? "可選擇" : "不可用",
                      children: Ne ? "占用" : `${ee},${H}`,
                    },
                    A,
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
              onClick: (M) => M.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx($t, { className: "w-6 h-6 text-green-600" }),
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
                      children: r.jsx(Ze, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      I(),
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
                                    onChange: (M) =>
                                      d(parseInt(M.target.value) || 0),
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
                                    onChange: (M) =>
                                      y(parseInt(M.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          i &&
                            r.jsx("div", {
                              className: `text-sm p-2 rounded ${v ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`,
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
                                  ((F = n == null ? void 0 : n.contents) == null
                                    ? void 0
                                    : F.filter(
                                        (M) => M.type === "sub_container",
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
                      onClick: E,
                      disabled: !v || j,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        j && r.jsx(Lt, { className: "w-4 h-4 animate-spin" }),
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
  zh = ({ isOpen: e, onClose: t, storeShelf: n }) => {
    const {
        showNotification: s,
        addStockToShelf: o,
        selectedStockItemForEdit: l,
        originalStockItemBackup: a,
        storeItemModalMode: i,
        updateStockInShelf: c,
      } = it(),
      [h, g] = u.useState(""),
      [m, p] = u.useState(""),
      [j, b] = u.useState(""),
      [T, k] = u.useState(""),
      [f, d] = u.useState([]),
      [y, v] = u.useState([]),
      [E, S] = u.useState(""),
      [I, F] = u.useState(""),
      [M, $] = u.useState(""),
      [se, ye] = u.useState(""),
      [_, N] = u.useState("EPD290"),
      [L, P] = u.useState(null),
      [K, w] = u.useState([]),
      [B, ee] = u.useState(""),
      [H, A] = u.useState(null),
      [Ne, U] = u.useState(!1),
      [G, he] = u.useState([]),
      [J, ke] = u.useState(!1),
      Ee = u.useRef(null);
    (u.useEffect(() => {
      (async () => {
        if (!e || !n) return;
        const oe = n.serverName,
          V = n.serverType;
        if (!oe || !V) {
          console.warn("層架缺少 ServerName 或 ServerType");
          return;
        }
        ke(!0);
        try {
          console.log(
            `正在載入藥品資料... ServerName: ${oe}, ServerType: ${V}`,
          );
          const xe = await Me.getStock(oe, V);
          xe.Code === 200 && xe.Data
            ? (he(xe.Data),
              console.log(`成功載入 ${xe.Data.length} 筆藥品資料`),
              xe.Data.length > 0 &&
                console.log("📦 藥品資料範例（第一筆）:", xe.Data[0]))
            : (console.error("載入藥品資料失敗:", xe.Result),
              s(xe.Result || "載入藥品資料失敗", "error"),
              he([]));
        } catch (xe) {
          (console.error("載入藥品資料時發生錯誤:", xe),
            s("載入藥品資料失敗，請稍後再試", "error"),
            he([]));
        } finally {
          ke(!1);
        }
      })();
    }, [e, n]),
      u.useEffect(() => {
        if (e && i === "edit" && l) {
          (console.log(l),
            g(l.code || ""),
            p(l.name || ""),
            b(""),
            k(l.material_no || ""));
          const O = l.lot || [],
            oe = l.expiry_date || [],
            V = l.qty || [],
            xe = [];
          if (O.length > 0 || oe.length > 0 || V.length > 0) {
            const pe = Math.max(O.length, oe.length, V.length),
              C = [];
            for (let R = 0; R < pe; R++) {
              const q = oe[R] || "";
              let ue = "";
              (q && (ue = q.split("T")[0]),
                (ue = ue.replace(/\//g, "-")),
                C.push({
                  id: `batch_${Date.now()}_${R}`,
                  lot: O[R] || "",
                  expiryDate: ue,
                  qty: String(V[R] || ""),
                }),
                console.log(C),
                ue && xe.push(ue));
            }
            (d(C), v(xe));
          } else v([]);
          const we = (l.location || "0,0").split(",");
          (S(we[0] || "0"),
            F(we[1] || "0"),
            $(l.led_index || ""),
            ye(l.ip || ""),
            N(l.device_type || "EPD290"));
        } else if (e && i === "add") {
          if (
            (g(""),
            p(""),
            b(""),
            k(""),
            d([]),
            v([]),
            $(""),
            ye(""),
            N("EPD290"),
            n && n.medMapStock && n.medMapStock.length > 0)
          ) {
            const O = n.medMapStock.map((V) => {
              const ce = (V.location || "0,0").split(",");
              return Number(ce[0] || "0");
            });
            let oe = 0;
            for (; O.includes(oe); ) oe++;
            S(String(oe));
          } else S("0");
          F("0");
        }
      }, [e, i, l, n]),
      u.useEffect(() => {
        const O = (oe) => {
          Ee.current && !Ee.current.contains(oe.target) && P(null);
        };
        return (
          document.addEventListener("mousedown", O),
          () => {
            document.removeEventListener("mousedown", O);
          }
        );
      }, []));
    const De = (O, oe) => {
        if (!oe.trim()) {
          w([]);
          return;
        }
        const V = oe.toLowerCase(),
          xe = G.filter((ce) => {
            var we, pe, C, R;
            if (!ce.med_cloud) return !1;
            switch (O) {
              case "code":
                if (ce.med_cloud)
                  return (we = ce.med_cloud.CODE) == null
                    ? void 0
                    : we.toLowerCase().includes(V);
                if (!ce.med_cloud) return ce.code.toLowerCase().includes(V);
              case "name":
                if (ce.med_cloud)
                  return (pe = ce.med_cloud.NAME) == null
                    ? void 0
                    : pe.toLowerCase().includes(V);
                if (!ce.med_cloud) return ce.name.toLowerCase().includes(V);
              case "chineseName":
                return (C = ce.med_cloud.CHT_NAME) == null
                  ? void 0
                  : C.toLowerCase().includes(V);
              case "skdiacode":
                return (R = ce.med_cloud.SKDIACODE) == null
                  ? void 0
                  : R.toLowerCase().includes(V);
              default:
                return !1;
            }
          });
        w(xe.slice(0, 50));
      },
      Be = (O, oe) => {
        switch ((P(O), O)) {
          case "code":
            g(oe);
            break;
          case "name":
            p(oe);
            break;
          case "chineseName":
            b(oe);
            break;
          case "skdiacode":
            k(oe);
            break;
        }
        De(O, oe);
      },
      te = (O, oe) => {
        var pe, C, R;
        const V = O.med_cloud;
        (g(V.CODE || ""),
          p(V.NAME || ""),
          b(V.CHT_NAME || ""),
          k(V.SKDIACODE || ""),
          ee(O.GUID),
          A(O),
          console.log("🔍 選擇的藥品完整資料:", O));
        let xe = O.lot || ((pe = O.med_cloud) == null ? void 0 : pe.lot) || [],
          ce =
            O.expiry_date ||
            ((C = O.med_cloud) == null ? void 0 : C.expiry_date) ||
            [],
          we = O.qty || ((R = O.med_cloud) == null ? void 0 : R.qty) || [];
        if (
          i === "edit" &&
          n != null &&
          n.medMapStock &&
          xe.length === 0 &&
          ce.length === 0 &&
          we.length === 0
        ) {
          const q = n.medMapStock.find(
            (ue) =>
              ue.code === (V.CODE || "") ||
              ue.GUID === O.GUID ||
              ue.material_no === (V.SKDIACODE || ""),
          );
          q &&
            (console.log("🔍 從層架找到相同藥品的批次資訊:", q),
            (xe = q.lot || []),
            (ce = q.expiry_date || []),
            (we = q.qty || []));
        }
        if (
          (console.log(
            "🔍 批次資訊 - lot:",
            xe,
            "expiry_date:",
            ce,
            "qty:",
            we,
          ),
          console.log("🔍 當前模式:", i),
          i === "edit")
        )
          if (xe.length > 0 || ce.length > 0 || we.length > 0) {
            const q = [],
              ue = Math.max(xe.length, ce.length, we.length),
              ie = [];
            for (let je = 0; je < ue; je++) {
              const Ue = ce[je] || "";
              let We = "";
              (Ue && (We = Ue.split("T")[0]),
                (We = We.replace(/\//g, "-")),
                ie.push({
                  id: `batch_${Date.now()}_${je}`,
                  lot: xe[je] || "",
                  expiryDate: We,
                  qty: String(we[je] || ""),
                }),
                We && q.push(We));
            }
            (console.log("✅ 成功載入批次資訊:", ie), d(ie), v(q));
          } else
            (console.log("🗑️ 清空批次資訊（藥品無批次資料）"), d([]), v([]));
        (P(null), w([]));
      },
      D = () => {
        const O = {
          id: `batch_${Date.now()}`,
          lot: "",
          expiryDate: "",
          qty: "",
        };
        d([...f, O]);
      },
      ge = (O) => {
        d(f.filter((oe) => oe.id !== O));
      },
      fe = (O, oe, V) => {
        d(f.map((xe) => (xe.id === O ? { ...xe, [oe]: V } : xe)));
      },
      W = async () => {
        var xe;
        if (!h || !m) {
          s("請選擇藥品", "error");
          return;
        }
        if (!n || !n.GUID) {
          s("層架資訊錯誤", "error");
          return;
        }
        const O = [],
          oe = [],
          V = [];
        f.forEach((ce) => {
          O.push(ce.lot || "");
          let we = "";
          (ce.expiryDate && (we = `${ce.expiryDate}`),
            oe.push(we),
            V.push(ce.qty ? `${Number(ce.qty)}` : "0"));
        });
        try {
          if (i === "edit" && l) {
            const ce = {
                GUID: B || l.GUID,
                code: h,
                device_type: _,
                expiry_date: oe,
                ip_light: se || "",
                ip: se || "",
                led_index: M || "",
                location: `${E || "0"},${I || "0"}`,
                lot: O,
                material_no: T || "",
                name: m,
                qty: V,
                shelf_guid: n.GUID,
              },
              we = await Me.updateStock([ce]);
            if ((console.log("==============>", ce), we.Code === 200)) {
              if (a) {
                const C = { ...a, shelf_guid: "" };
                (console.log("==============>", a),
                  console.log(
                    "📤 發送備份資料更新請求（shelf_guid 改為空字串）:",
                    C,
                  ));
                try {
                  const R = await Me.updateStock([C]);
                  R.Code === 200
                    ? console.log("✅ 備份資料更新成功")
                    : console.warn("⚠️ 備份資料更新失敗:", R.Result);
                } catch (R) {
                  console.error("❌ 備份資料更新錯誤:", R);
                }
              }
              (c(n.GUID, l.GUID, ce), console.log("檢查有無貨物批次被刪除"));
              const pe = y.filter((C) => !oe.includes(C));
              if ((console.log(pe), pe.length > 0)) {
                console.log("🗑️ 檢測到被刪除的批次效期:", pe);
                let C = "";
                try {
                  l.Value &&
                    ((C = JSON.parse(l.Value).GUID || ""),
                    console.log("📦 從 Value 欄位解析出的 GUID:", C));
                } catch (R) {
                  console.error("❌ 解析 Value 欄位失敗:", R);
                }
                if (C) {
                  for (const R of pe)
                    try {
                      console.log(`🗑️ 正在刪除批次，GUID: ${C}, 效期: ${R}`);
                      const q = await Me.stockDeleteValidityPeriod(C, R);
                      q.Code === 200
                        ? console.log(`✅ 成功刪除批次效期: ${R}`)
                        : console.warn(
                            `⚠️ 刪除批次失敗 (效期: ${R}):`,
                            q.Result,
                          );
                    } catch (q) {
                      console.error(`❌ 刪除批次時發生錯誤 (效期: ${R}):`, q);
                    }
                  s(`更新貨物成功，已刪除 ${pe.length} 個批次`, "success");
                } else
                  (console.warn("⚠️ 無法取得 Value GUID，跳過批次刪除"),
                    s("更新貨物成功（但無法刪除批次）", "success"));
              } else s("更新貨物成功", "success");
              be();
            } else s(we.Result || "更新貨物失敗", "error");
          } else {
            let ce, we;
            if (H && H.shelf_guid)
              if (window.confirm("該藥品已有其他儲位，是否新增儲位？"))
                ((we = {
                  code: h,
                  device_type: _,
                  expiry_date: oe,
                  ip_light: se || "",
                  ip: se || "",
                  led_index: M || "",
                  location: `${E || "0"},${I || "0"}`,
                  lot: O,
                  material_no: T || "",
                  name: m,
                  qty: V,
                  shelf_guid: n.GUID,
                }),
                  (ce = await Me.addStock([we])));
              else return;
            else
              ((we = {
                code: h,
                device_type: _,
                expiry_date: oe,
                ip_light: se || "",
                ip: se || "",
                led_index: M || "",
                location: `${E || "0"},${I || "0"}`,
                lot: O,
                material_no: T || "",
                name: m,
                qty: V,
                shelf_guid: n.GUID,
              }),
                !(H != null && H.shelf_guid) &&
                  B &&
                  ((we.GUID = B),
                  console.log("🆔 藥品無儲位，帶入藥品 GUID:", B)),
                (ce = await Me.updateStock([we])));
            ce.Code === 200
              ? (o(n.GUID, {
                  GUID:
                    ((xe = ce.Data) == null ? void 0 : xe.GUID) ||
                    `stock_${Date.now()}`,
                  ...we,
                }),
                s("新增貨物成功", "success"),
                be())
              : s(ce.Result || "新增貨物失敗", "error");
          }
        } catch (ce) {
          (console.error("貨物操作錯誤:", ce),
            s(
              i === "edit"
                ? "更新貨物失敗，請稍後再試"
                : "新增貨物失敗，請稍後再試",
              "error",
            ));
        }
      },
      le = (O, oe) => {
        console.log("📸 掃描成功，填入藥品資料:", oe);
        const V = oe[0];
        (g(V.CODE || V.code || ""),
          p(V.NAME || V.name || ""),
          b(V.CHT_NAME || V.cht_name || ""),
          k(V.SKDIACODE || V.skdiacode || V.material_no || ""),
          ee(V.GUID || ""));
        const xe = {
          GUID: V.GUID || "",
          med_cloud: {
            CODE: V.CODE || V.code || "",
            NAME: V.NAME || V.name || "",
            CHT_NAME: V.CHT_NAME || V.cht_name || "",
            SKDIACODE: V.SKDIACODE || V.skdiacode || V.material_no || "",
            DRUGKIND: V.DRUGKIND || V.drugkind || "",
            FILE_STATUS: V.FILE_STATUS || V.file_status || "",
          },
          shelf_guid: V.shelf_guid || "",
          lot: V.lot || [],
          expiry_date: V.expiry_date || [],
          qty: V.qty || [],
        };
        A(xe);
        let ce = V.lot || [],
          we = V.expiry_date || [],
          pe = V.qty || [];
        if (
          i === "edit" &&
          n != null &&
          n.medMapStock &&
          ce.length === 0 &&
          we.length === 0 &&
          pe.length === 0
        ) {
          const C = n.medMapStock.find(
            (R) =>
              R.code === (V.CODE || V.code || "") ||
              R.GUID === (V.GUID || "") ||
              R.material_no ===
                (V.SKDIACODE || V.skdiacode || V.material_no || ""),
          );
          C &&
            (console.log("📸 從層架找到相同藥品的批次資訊:", C),
            (ce = C.lot || []),
            (we = C.expiry_date || []),
            (pe = C.qty || []));
        }
        if (
          (console.log(
            "📸 QR掃描批次資訊 - lot:",
            ce,
            "expiry_date:",
            we,
            "qty:",
            pe,
          ),
          console.log("📸 當前模式:", i),
          i === "edit")
        )
          if (ce.length > 0 || we.length > 0 || pe.length > 0) {
            const C = [],
              R = Math.max(ce.length, we.length, pe.length),
              q = [];
            for (let ue = 0; ue < R; ue++) {
              const ie = we[ue] || "";
              let je = "";
              (ie && (je = ie.split("T")[0]),
                (je = je.replace(/\//g, "-")),
                q.push({
                  id: `batch_${Date.now()}_${ue}`,
                  lot: ce[ue] || "",
                  expiryDate: je,
                  qty: String(pe[ue] || ""),
                }),
                je && C.push(je));
            }
            (console.log("✅ QR掃描成功載入批次資訊:", q), d(q), v(C));
          } else
            (console.log("🗑️ QR掃描清空批次資訊（藥品無批次資料）"),
              d([]),
              v([]));
        (U(!1), s("已自動填入藥品資料", "success"));
      },
      be = () => {
        (g(""),
          p(""),
          b(""),
          k(""),
          d([]),
          v([]),
          S(""),
          F(""),
          $(""),
          ye(""),
          N("EPD290"),
          ee(""),
          A(null),
          w([]),
          P(null),
          t());
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
                      children: i === "edit" ? "編輯貨物" : "新增貨物",
                    }),
                    r.jsx("button", {
                      onClick: be,
                      className:
                        "p-2 hover:bg-gray-100 rounded-full transition-colors",
                      children: r.jsx(Ze, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "p-4 space-y-2",
                  children: J
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
                    : G.length === 0
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
                                      onClick: () => U(!0),
                                      className:
                                        "hover:bg-gray-100 rounded-lg transition-colors p-2",
                                      title: "掃描條碼",
                                      children: r.jsx(Br, {
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
                                      ref: L === "code" ? Ee : null,
                                      children: [
                                        r.jsx("label", {
                                          className:
                                            "block text-sm font-medium text-gray-700 mb-1",
                                          children: "藥碼",
                                        }),
                                        r.jsx("input", {
                                          type: "text",
                                          value: h,
                                          onChange: (O) =>
                                            Be("code", O.target.value),
                                          onFocus: () => P("code"),
                                          className:
                                            "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                          placeholder: "輸入藥品代碼",
                                        }),
                                        L === "code" &&
                                          K.length > 0 &&
                                          r.jsx("div", {
                                            className:
                                              "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                            children: K.map(
                                              (O) =>
                                                O.med_cloud &&
                                                r.jsxs(
                                                  "div",
                                                  {
                                                    onClick: () => te(O),
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
                                                            children:
                                                              O.med_cloud.CODE,
                                                          }),
                                                          r.jsx("span", {
                                                            className:
                                                              "text-gray-600",
                                                            children: "|",
                                                          }),
                                                          r.jsx("span", {
                                                            className:
                                                              "text-gray-700",
                                                            children:
                                                              O.med_cloud.NAME,
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
                                                            children:
                                                              O.med_cloud
                                                                .CHT_NAME,
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
                                                              O.med_cloud
                                                                .SKDIACODE,
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  },
                                                  O.GUID,
                                                ),
                                            ),
                                          }),
                                      ],
                                    }),
                                    r.jsxs("div", {
                                      className: "relative",
                                      ref: L === "name" ? Ee : null,
                                      children: [
                                        r.jsx("label", {
                                          className:
                                            "block text-sm font-medium text-gray-700 mb-1",
                                          children: "藥名",
                                        }),
                                        r.jsx("input", {
                                          type: "text",
                                          value: m,
                                          onChange: (O) =>
                                            Be("name", O.target.value),
                                          onFocus: () => P("name"),
                                          className:
                                            "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                          placeholder: "輸入藥品名稱",
                                        }),
                                        L === "name" &&
                                          K.length > 0 &&
                                          r.jsx("div", {
                                            className:
                                              "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                            children: K.map(
                                              (O) =>
                                                O.med_cloud &&
                                                r.jsxs(
                                                  "div",
                                                  {
                                                    onClick: () => te(O),
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
                                                            children:
                                                              O.med_cloud.CODE,
                                                          }),
                                                          r.jsx("span", {
                                                            className:
                                                              "text-gray-600",
                                                            children: "|",
                                                          }),
                                                          r.jsx("span", {
                                                            className:
                                                              "text-gray-700",
                                                            children:
                                                              O.med_cloud.NAME,
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
                                                            children:
                                                              O.med_cloud
                                                                .CHT_NAME,
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
                                                              O.med_cloud
                                                                .SKDIACODE,
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  },
                                                  O.GUID,
                                                ),
                                            ),
                                          }),
                                      ],
                                    }),
                                    r.jsxs("div", {
                                      className: "relative",
                                      ref: L === "chineseName" ? Ee : null,
                                      children: [
                                        r.jsx("label", {
                                          className:
                                            "block text-sm font-medium text-gray-700 mb-1",
                                          children: "中文名",
                                        }),
                                        r.jsx("input", {
                                          type: "text",
                                          value: j,
                                          onChange: (O) =>
                                            Be("chineseName", O.target.value),
                                          onFocus: () => P("chineseName"),
                                          className:
                                            "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                          placeholder: "輸入中文名稱",
                                        }),
                                        L === "chineseName" &&
                                          K.length > 0 &&
                                          r.jsx("div", {
                                            className:
                                              "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                            children: K.map(
                                              (O) =>
                                                O.med_cloud &&
                                                r.jsxs(
                                                  "div",
                                                  {
                                                    onClick: () => te(O),
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
                                                            children:
                                                              O.med_cloud.CODE,
                                                          }),
                                                          r.jsx("span", {
                                                            className:
                                                              "text-gray-600",
                                                            children: "|",
                                                          }),
                                                          r.jsx("span", {
                                                            className:
                                                              "text-gray-700",
                                                            children:
                                                              O.med_cloud.NAME,
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
                                                            children:
                                                              O.med_cloud
                                                                .CHT_NAME,
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
                                                              O.med_cloud
                                                                .SKDIACODE,
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  },
                                                  O.GUID,
                                                ),
                                            ),
                                          }),
                                      ],
                                    }),
                                    r.jsxs("div", {
                                      className: "relative",
                                      ref: L === "skdiacode" ? Ee : null,
                                      children: [
                                        r.jsx("label", {
                                          className:
                                            "block text-sm font-medium text-gray-700 mb-1",
                                          children: "料號",
                                        }),
                                        r.jsx("input", {
                                          type: "text",
                                          value: T,
                                          onChange: (O) =>
                                            Be("skdiacode", O.target.value),
                                          onFocus: () => P("skdiacode"),
                                          className:
                                            "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                          placeholder: "輸入料號",
                                        }),
                                        L === "skdiacode" &&
                                          K.length > 0 &&
                                          r.jsx("div", {
                                            className:
                                              "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                            children: K.map(
                                              (O) =>
                                                O.med_cloud &&
                                                r.jsxs(
                                                  "div",
                                                  {
                                                    onClick: () => te(O),
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
                                                            children:
                                                              O.med_cloud.CODE,
                                                          }),
                                                          r.jsx("span", {
                                                            className:
                                                              "text-gray-600",
                                                            children: "|",
                                                          }),
                                                          r.jsx("span", {
                                                            className:
                                                              "text-gray-700",
                                                            children:
                                                              O.med_cloud.NAME,
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
                                                            children:
                                                              O.med_cloud
                                                                .CHT_NAME,
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
                                                              O.med_cloud
                                                                .SKDIACODE,
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  },
                                                  O.GUID,
                                                ),
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
                                      onClick: D,
                                      className:
                                        "flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
                                      title: "新增批次",
                                      children: [
                                        r.jsx($t, { className: "w-4 h-4" }),
                                        "新增批次",
                                      ],
                                    }),
                                  ],
                                }),
                                f.length === 0
                                  ? r.jsxs("div", {
                                      className:
                                        "text-center py-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300",
                                      children: [
                                        r.jsx("p", {
                                          className: "text-gray-500",
                                          children: "暫無藥品批號資訊",
                                        }),
                                        r.jsx("p", {
                                          className:
                                            "text-sm text-gray-400 mt-1",
                                          children:
                                            "點擊上方「新增批次」按鈕開始添加",
                                        }),
                                      ],
                                    })
                                  : r.jsx("div", {
                                      className: "space-y-3",
                                      children: f.map((O, oe) =>
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
                                                    children: ["批次 ", oe + 1],
                                                  }),
                                                  r.jsx("button", {
                                                    onClick: () => ge(O.id),
                                                    className:
                                                      "p-1 text-red-600 hover:bg-red-50 rounded transition-colors",
                                                    title: "刪除批次",
                                                    children: r.jsx(kr, {
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
                                                        value: O.lot,
                                                        onChange: (V) =>
                                                          fe(
                                                            O.id,
                                                            "lot",
                                                            V.target.value,
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
                                                        value: O.expiryDate,
                                                        onChange: (V) =>
                                                          fe(
                                                            O.id,
                                                            "expiryDate",
                                                            V.target.value,
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
                                                        value: O.qty,
                                                        onChange: (V) =>
                                                          fe(
                                                            O.id,
                                                            "qty",
                                                            V.target.value,
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
                                          O.id,
                                        ),
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
                                          value: E,
                                          onChange: (O) => S(O.target.value),
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
                                          value: I,
                                          onChange: (O) => F(O.target.value),
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
                                          value: M,
                                          onChange: (O) => $(O.target.value),
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
                                          value: se,
                                          onChange: (O) => ye(O.target.value),
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
                                          value: _,
                                          onChange: (O) => N(O.target.value),
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
                      onClick: be,
                      className:
                        "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: W,
                      disabled: J || G.length === 0,
                      className:
                        "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400",
                      children: i === "edit" ? "修改" : "新增",
                    }),
                  ],
                }),
              ],
            }),
            r.jsx(il, {
              isOpen: Ne,
              onClose: () => U(!1),
              onScanSuccess: le,
              mode: "set_store_med_mode",
            }),
          ],
        })
      : null;
  },
  Fh = ({ isOpen: e, onClose: t }) => {
    const {
        selectedDepartmentType: n,
        apiDepartmentData: s,
        allDepartmentsList: o,
        showNotification: l,
        triggerRefresh: a,
        reloadMedMapData: i,
      } = it(),
      [c, h] = u.useState(null),
      [g, m] = u.useState(""),
      [p, j] = u.useState(!1),
      b = () => (s ? s.map((I) => I.name) : []),
      T = () => (!n || !o ? [] : o.filter((I) => I["department_type "] === n)),
      k = () => {
        const I = b();
        return T().filter((M) => !I.includes(M.name));
      },
      f = () => (s ? s.map((I) => I.gird_position) : []),
      d = () => {
        const I = f(),
          F = [];
        for (let M = 0; M < 10; M++)
          for (let $ = 0; $ < 10; $++) {
            const se = `${M},${$}`;
            I.includes(se) || F.push(se);
          }
        return F.slice(0, 20);
      };
    u.useEffect(() => {
      e && (h(null), m(""));
    }, [e]);
    const y = async () => {
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
          const I = await Me.addMedMap(c.name, c.type, g);
          I.Code === 200
            ? (l("新增部門成功", "success"), await i(), v())
            : l(I.Result || "新增部門失敗", "error");
        } catch (I) {
          (console.error("新增部門錯誤:", I),
            l("新增部門失敗，請稍後再試", "error"));
        } finally {
          j(!1);
        }
      },
      v = () => {
        (h(null), m(""), t());
      };
    if (!e) return null;
    const E = k(),
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
                children: r.jsx(Ze, { className: "w-5 h-5" }),
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
                  E.length === 0
                    ? r.jsx("div", {
                        className: "text-center py-8",
                        children: r.jsx("p", {
                          className: "text-gray-600",
                          children: "所有部門都已新增",
                        }),
                      })
                    : r.jsx("div", {
                        className: "space-y-2",
                        children: E.map((I) =>
                          r.jsxs(
                            "label",
                            {
                              className: `flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${(c == null ? void 0 : c.name) === I.name ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"}`,
                              children: [
                                r.jsx("input", {
                                  type: "radio",
                                  name: "department",
                                  value: I.name,
                                  checked:
                                    (c == null ? void 0 : c.name) === I.name,
                                  onChange: () => h(I),
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
                            I.name,
                          ),
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
                          children: S.map((I) => {
                            const [F, M] = I.split(",");
                            return r.jsxs(
                              "button",
                              {
                                onClick: () => m(I),
                                className: `p-3 border-2 rounded-lg text-sm font-medium transition-all ${g === I ? "border-blue-500 bg-blue-500 text-white" : "border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700"}`,
                                children: ["(", F, ",", M, ")"],
                              },
                              I,
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
                onClick: y,
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
  Hh = ({ isOpen: e, onClose: t, initialBarcode: n = "" }) => {
    const {
        showNotification: s,
        medicineList: o,
        isLoadingMedicines: l,
      } = it(),
      [a, i] = u.useState(""),
      [c, h] = u.useState(""),
      [g, m] = u.useState(""),
      [p, j] = u.useState(""),
      [b, T] = u.useState(""),
      [k, f] = u.useState(null),
      [d, y] = u.useState([]),
      [v, E] = u.useState(""),
      [S, I] = u.useState(null),
      [F, M] = u.useState(!1),
      $ = u.useRef(null);
    (u.useEffect(() => {
      e && (i(n), h(""), m(""), j(""), T(""), E(""), I(null), f(null));
    }, [e, n]),
      u.useEffect(() => {
        const P = (K) => {
          $.current && !$.current.contains(K.target) && f(null);
        };
        return (
          document.addEventListener("mousedown", P),
          () => {
            document.removeEventListener("mousedown", P);
          }
        );
      }, []));
    const se = (P, K) => {
        if (!K.trim() || l) {
          y([]);
          return;
        }
        const w = K.toLowerCase(),
          B = o.filter((ee) => {
            var H, A, Ne, U;
            switch (P) {
              case "code":
                return (H = ee.CODE) == null
                  ? void 0
                  : H.toLowerCase().includes(w);
              case "name":
                return (A = ee.NAME) == null
                  ? void 0
                  : A.toLowerCase().includes(w);
              case "chineseName":
                return (Ne = ee.CHT_NAME) == null
                  ? void 0
                  : Ne.toLowerCase().includes(w);
              case "skdiacode":
                return (U = ee.SKDIACODE) == null
                  ? void 0
                  : U.toLowerCase().includes(w);
              default:
                return !1;
            }
          });
        y(B.slice(0, 10));
      },
      ye = (P, K) => {
        switch ((f(P), P)) {
          case "code":
            h(K);
            break;
          case "name":
            m(K);
            break;
          case "chineseName":
            j(K);
            break;
          case "skdiacode":
            T(K);
            break;
        }
        se(P, K);
      },
      _ = (P) => {
        (E(P.GUID),
          I(P),
          h(P.CODE || ""),
          m(P.NAME || ""),
          j(P.CHT_NAME || ""),
          T(P.SKDIACODE || ""),
          f(null),
          y([]));
      },
      N = () => {
        (i(""),
          h(""),
          m(""),
          j(""),
          T(""),
          E(""),
          I(null),
          f(null),
          y([]),
          t());
      },
      L = async () => {
        if (!c.trim()) {
          s("藥碼為必填欄位", "error");
          return;
        }
        if (!a.trim()) {
          s("條碼不能為空", "error");
          return;
        }
        M(!0);
        try {
          let P = [];
          if (S && S.BARCODE2)
            try {
              const w = JSON.parse(S.BARCODE2);
              Array.isArray(w)
                ? (P = [...w])
                : typeof w == "string" && (P = [w]);
            } catch {
              (console.warn("解析 BARCODE2 失敗，使用原始值:", S.BARCODE2),
                S.BARCODE2 && (P = [S.BARCODE2]));
            }
          (P.includes(a.trim()) || P.push(a.trim()),
            console.log("📋 處理後的 BARCODE2 陣列:", P));
          const K = await Me.addMedClouds(
            a.trim(),
            c.trim(),
            JSON.stringify(P),
            S.BARCODE,
          );
          K.Code === 200
            ? (s("條碼建立成功", "success"), N())
            : s(K.Result || "建立條碼失敗", "error");
        } catch (P) {
          (console.error("建立條碼失敗:", P),
            s("建立條碼失敗，請稍後再試", "error"));
        } finally {
          M(!1);
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
                        children: r.jsx($t, {
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
                    disabled: F,
                    children: r.jsx(Ze, { className: "w-6 h-6 text-gray-600" }),
                  }),
                ],
              }),
              r.jsx("div", {
                className: "flex-1 overflow-y-auto p-6",
                children: r.jsxs("div", {
                  className: "space-y-4",
                  ref: $,
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
                          onChange: (P) => ye("code", P.target.value),
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
                            children: d.map((P) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => _(P),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: P.CODE,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: P.NAME,
                                    }),
                                  ],
                                },
                                P.GUID,
                              ),
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
                          onChange: (P) => ye("name", P.target.value),
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
                            children: d.map((P) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => _(P),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: P.NAME,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: P.CODE,
                                    }),
                                  ],
                                },
                                P.GUID,
                              ),
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
                          onChange: (P) => ye("chineseName", P.target.value),
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
                            children: d.map((P) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => _(P),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: P.CHT_NAME,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: P.CODE,
                                    }),
                                  ],
                                },
                                P.GUID,
                              ),
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
                          onChange: (P) => ye("skdiacode", P.target.value),
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
                            children: d.map((P) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => _(P),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: P.SKDIACODE,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: P.NAME,
                                    }),
                                  ],
                                },
                                P.GUID,
                              ),
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
                      disabled: F,
                      className:
                        "px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: L,
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
  Vh = ({
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
        const p = m.map((k) => ({
            ...k,
            gridPos: l(k.gird_position || "0,0"),
          })),
          j = Math.max(...p.map((k) => k.gridPos.row), 0),
          b = Math.max(...p.map((k) => k.gridPos.col), 0);
        return {
          sortedContents: p.sort((k, f) =>
            k.gridPos.row !== f.gridPos.row
              ? k.gridPos.row - f.gridPos.row
              : k.gridPos.col - f.gridPos.col,
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
            className: `${p ? "shadow-sm border-2 p-1 rounded-lg" : ""} ${i(m.type)} flex flex-col max-w-full min-w-0 h-full overflow-hidden`,
            children: r.jsx("div", {
              className: "flex-1 min-w-0 overflow-hidden",
              children: g(m),
            }),
          },
          m.GUID,
        );
      },
      h = (m, p, j) => {
        const b = {};
        return (
          m.forEach((T) => {
            const k = l(T.gird_position || "0,0");
            b[`${k.row},${k.col}`] = T;
          }),
          r.jsx("table", {
            className: "w-full h-full max-w-full table-fixed",
            style: { borderCollapse: "separate", borderSpacing: "0px" },
            children: r.jsx("tbody", {
              children: Array.from({ length: p + 1 }, (T, k) =>
                r.jsx(
                  "tr",
                  {
                    children: Array.from({ length: j + 1 }, (f, d) => {
                      const y = `${k},${d}`,
                        v = b[y];
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
                            d,
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
                            d,
                          );
                    }),
                  },
                  k,
                ),
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
              p.forEach((k) => {
                const f = k.location || k.gird_position || "0,0",
                  [d, y] = f.split(",").map(Number);
                (j[d] || (j[d] = []),
                  j[d].push({ ...k, _position: d, _depth: y }));
              });
              const b = Object.keys(j)
                  .map(Number)
                  .sort((k, f) => k - f),
                T = b.length;
              return (
                Math.max(...b.map((k) => j[k].length)),
                r.jsx("div", {
                  className: "flex h-full w-full overflow-hidden gap-1",
                  children: b.map((k) => {
                    const f = j[k].sort((E, S) => S._depth - E._depth),
                      d = T > 0 ? 100 / T : 100,
                      y = f.length,
                      v = y > 0 ? 100 / y : 100;
                    return r.jsx(
                      "div",
                      {
                        className: "flex flex-col h-full",
                        style: { width: `${d}%` },
                        children: f.map((E, S) => {
                          let I = 0;
                          E.qty &&
                            E.qty.forEach((ye) => {
                              I += +ye;
                            });
                          const F = t && (E.code == t || E.material_no == t),
                            M = n.includes(E.code) || n.includes(E.material_no),
                            $ = o(),
                            se = S === y - 1;
                          return r.jsxs(
                            "div",
                            {
                              className: `border-2 rounded-lg border-gray-300 p-2 flex flex-col text-gray-800 justify-center items-center transition-colors cursor-pointer min-w-0 overflow-hidden ${se ? "" : "mb-1"} ${M ? "highlight-breathe-red" : F ? `highlight-breathe-${$}` : ""}`,
                              style: {
                                height: `calc(${v}% - ${se ? "0px" : "0.25rem"})`,
                              },
                              onClick: () =>
                                s &&
                                s({
                                  code: E.code || E.material_no,
                                  name: E.name,
                                }),
                              children: [
                                r.jsx("div", {
                                  className:
                                    "text-sm font-semibold truncate w-full text-center whitespace-normal overflow-hidden",
                                  children: E.name || E.material_no,
                                }),
                                r.jsxs("div", {
                                  className: "text-xs mt-1",
                                  children: ["數量: ", I || 0],
                                }),
                              ],
                            },
                            E.GUID || S,
                          );
                        }),
                      },
                      k,
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
              const p = t && m.med_info.some((T) => T.code == t),
                j = m.med_info.some((T) => n.includes(T.code)),
                b = o();
              return r.jsx("div", {
                className: `text-sm text-center h-full p-2 flex flex-col text-gray-800 justify-center transition-colors cursor-pointer overflow-hidden ${j ? "highlight-breathe-red" : p ? `highlight-breathe-${b}` : ""}`,
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
  qh = ({ isOpen: e, onClose: t, type: n, data: s, onApprove: o }) => {
    const [l, a] = u.useState("0"),
      [i, c] = u.useState("0"),
      [h, g] = u.useState(null),
      [m, p] = u.useState(null),
      [j, b] = u.useState(!1),
      [T, k] = u.useState(!1),
      [f, d] = u.useState(""),
      [y, v] = u.useState(""),
      [E, S] = u.useState([]),
      [I, F] = u.useState([]),
      [M, $] = u.useState([]),
      [se, ye] = u.useState(!1),
      [_, N] = u.useState(!1),
      L = u.useRef(null),
      P = u.useRef(null),
      K = u.useRef(null),
      w = u.useRef(null);
    (u.useEffect(() => {
      if (e && s) {
        const D = s.issuedQuantity || s.requestedQuantity || "0";
        (a(D), c(D), g(null), p(null), b(!1));
        const ge = localStorage.getItem("medMap_setting");
        if (ge)
          try {
            const fe = JSON.parse(ge);
            (d(fe.default_person || ""), v(fe.default_person_id || ""));
          } catch (fe) {
            (console.error("讀取設定失敗:", fe), d(""), v(""));
          }
        else (d(""), v(""));
        B();
      }
    }, [e, s]),
      u.useEffect(() => {
        const D = (ge) => {
          (K.current &&
            !K.current.contains(ge.target) &&
            L.current &&
            !L.current.contains(ge.target) &&
            ye(!1),
            w.current &&
              !w.current.contains(ge.target) &&
              P.current &&
              !P.current.contains(ge.target) &&
              N(!1));
        };
        return (
          document.addEventListener("mousedown", D),
          () => document.removeEventListener("mousedown", D)
        );
      }, []));
    const B = async () => {
        try {
          const D = await Me.getAllStaffInfo();
          D.Code === 200 && D.Data && S(D.Data);
        } catch (D) {
          console.error("獲取人員資料失敗:", D);
        }
      },
      ee = (D) => {
        if ((d(D), D.trim() === "")) {
          (F([]), ye(!1));
          return;
        }
        const ge = E.filter(
          (fe) => fe.name && fe.name.toLowerCase().includes(D.toLowerCase()),
        );
        (F(ge), ye(ge.length > 0));
      },
      H = (D) => {
        if ((v(D), D.trim() === "")) {
          ($([]), N(!1));
          return;
        }
        const ge = E.filter(
          (fe) => fe.ID && fe.ID.toLowerCase().includes(D.toLowerCase()),
        );
        ($(ge), N(ge.length > 0));
      },
      A = (D) => {
        (d(D.name), v(D.ID), ye(!1));
      },
      Ne = (D) => {
        (d(D.name), v(D.ID), N(!1));
      };
    if (!e || !s) return null;
    const U = (D) => {
        if (j) (a(D), c(D), b(!1));
        else {
          const ge = l === "0" ? D : l + D;
          (a(ge), c(ge));
        }
      },
      G = (D) => {
        (h && m !== null && !j && he(), p(i), g(D), b(!0));
      },
      he = () => {
        if (h === null || m === null) return;
        const D = parseFloat(m),
          ge = parseFloat(i);
        let fe = 0;
        switch (h) {
          case "+":
            fe = D + ge;
            break;
          case "-":
            fe = D - ge;
            break;
          case "×":
            fe = D * ge;
            break;
          case "÷":
            fe = ge !== 0 ? D / ge : 0;
            break;
          default:
            return;
        }
        const W = fe.toString();
        (a(W), c(W), g(null), p(null), b(!0));
      },
      J = () => {
        he();
      },
      ke = () => {
        if (j) (a("0."), c("0."), b(!1));
        else if (!l.includes(".")) {
          const D = l + ".";
          (a(D), c(D));
        }
      },
      Ee = () => {
        (a("0"), c("0"), g(null), p(null), b(!1));
      },
      De = () => {
        const D = new Date(),
          ge = D.getFullYear(),
          fe = String(D.getMonth() + 1).padStart(2, "0"),
          W = String(D.getDate()).padStart(2, "0"),
          le = String(D.getHours()).padStart(2, "0"),
          be = String(D.getMinutes()).padStart(2, "0"),
          O = String(D.getSeconds()).padStart(2, "0");
        return `${ge}-${fe}-${W}T${le}:${be}:${O}`;
      },
      Be = async () => {
        if (!s) return;
        if (!f.trim()) {
          alert("請輸入核撥人員名稱");
          return;
        }
        const D = n === "requisition" ? "申領" : "撥補";
        if (
          window.confirm(`確認核撥資訊：

藥品名稱：${s.name}
實際撥發量：${l}
核撥人員：${f}${y ? ` (${y})` : ""}

是否確認${D}？`)
        ) {
          k(!0);
          try {
            const fe = De();
            if (n === "requisition") {
              const W = await Me.updateRequisitionActualQuantity(s.GUID, l);
              if (W.Code !== 200) {
                (alert(`更新實際撥發量失敗：${W.Message || "未知錯誤"}`),
                  k(!1));
                return;
              }
              const le = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuingPerson: f,
                issueTime: fe,
              };
              console.log("申領request", le);
              const be = await Me.updateRequisitionByGuid(le);
              if (be.Code !== 200) {
                (alert(`申領過帳失敗：${be.Message || "未知錯誤"}`), k(!1));
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
              const W = await Me.updateDistributionActualQuantity(s.GUID, l);
              if (W.Code !== 200) {
                (alert(`更新實際撥發量失敗：${W.Message || "未知錯誤"}`),
                  k(!1));
                return;
              }
              const le = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuer: f,
                issuanceTime: fe,
              };
              console.log("撥補request", le);
              const be = await Me.updateDistributionByGuid(le);
              if (be.Code !== 200) {
                (alert(`撥補過帳失敗：${be.Message || "未知錯誤"}`), k(!1));
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
            (o && (await o()), alert(`${D}核撥成功！`), t());
          } catch (fe) {
            (console.error(`${D}核撥失敗:`, fe),
              alert(`${D}核撥失敗，請稍後再試`));
          } finally {
            k(!1);
          }
        }
      },
      te = n === "requisition" ? s.requestedQuantity : s.issuedQuantity;
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
                  children: r.jsx(Ze, { className: "w-5 h-5 text-gray-700" }),
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
                                ref: L,
                                type: "text",
                                value: f,
                                onChange: (D) => ee(D.target.value),
                                onFocus: () => {
                                  f.trim() && ee(f);
                                },
                                placeholder: "人員名稱",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              se &&
                                r.jsx("div", {
                                  ref: K,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: I.map((D, ge) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => A(D),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          r.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: D.ID,
                                          }),
                                          r.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: D.name,
                                          }),
                                        ],
                                      },
                                      ge,
                                    ),
                                  ),
                                }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "relative",
                            children: [
                              r.jsx("input", {
                                ref: P,
                                type: "text",
                                value: y,
                                onChange: (D) => H(D.target.value),
                                onFocus: () => {
                                  y.trim() && H(y);
                                },
                                placeholder: "人員 ID",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              _ &&
                                r.jsx("div", {
                                  ref: w,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: M.map((D, ge) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => Ne(D),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          r.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: D.ID,
                                          }),
                                          r.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: D.name,
                                          }),
                                        ],
                                      },
                                      ge,
                                    ),
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
                            children: te || "-",
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
                        onClick: () => U("7"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "7",
                      }),
                      r.jsx("button", {
                        onClick: () => U("8"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "8",
                      }),
                      r.jsx("button", {
                        onClick: () => U("9"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "9",
                      }),
                      r.jsx("button", {
                        onClick: () => G("÷"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "÷",
                      }),
                      r.jsx("button", {
                        onClick: () => U("4"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "4",
                      }),
                      r.jsx("button", {
                        onClick: () => U("5"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "5",
                      }),
                      r.jsx("button", {
                        onClick: () => U("6"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "6",
                      }),
                      r.jsx("button", {
                        onClick: () => G("×"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "×",
                      }),
                      r.jsx("button", {
                        onClick: () => U("1"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "1",
                      }),
                      r.jsx("button", {
                        onClick: () => U("2"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "2",
                      }),
                      r.jsx("button", {
                        onClick: () => U("3"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "3",
                      }),
                      r.jsx("button", {
                        onClick: () => G("-"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "-",
                      }),
                      r.jsx("button", {
                        onClick: () => U("0"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "0",
                      }),
                      r.jsx("button", {
                        onClick: ke,
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: ".",
                      }),
                      r.jsx("button", {
                        onClick: J,
                        className:
                          "py-4 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors",
                        children: "=",
                      }),
                      r.jsx("button", {
                        onClick: () => G("+"),
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
                  onClick: Ee,
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
                  onClick: Be,
                  disabled: T,
                  className:
                    "px-6 py-2.5 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                  children: T ? "處理中..." : "核撥",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Wh = ({
    isOpen: e,
    onClose: t,
    medicineInfo: n,
    requisitions: s,
    distributions: o,
    onNoticeUpdated: l,
  }) => {
    const { setHighlightedMedicineCode: a } = it(),
      [i, c] = u.useState(s),
      [h, g] = u.useState(o),
      [m, p] = u.useState(null),
      [j, b] = u.useState(!1),
      [T, k] = u.useState(null),
      [f, d] = u.useState("requisition"),
      [y, v] = u.useState(!1),
      [E, S] = u.useState(!1);
    (bo.useEffect(() => {
      (c(s), g(o));
    }, [s, o]),
      u.useEffect(
        () => () => {
          bs.cleanup();
        },
        [],
      ));
    const I = async () => {
        var N;
        if (n && !E) {
          if (!n.serverName || !n.serverType) {
            alert("無法取得藥品位置資訊");
            return;
          }
          S(!0);
          try {
            const L = localStorage.getItem("medMap_setting");
            let P = "255,0,0",
              K = "1",
              w = 60;
            if (L)
              try {
                const B = JSON.parse(L);
                ((P =
                  {
                    blue: "255,0,0",
                    green: "0,255,0",
                    red: "0,0,255",
                    yellow: "0,255,255",
                    purple: "255,0,255",
                    cyan: "255,255,0",
                  }[B.light_color] || "255,0,0"),
                  (K =
                    ((N = B.brightness) == null ? void 0 : N.toString()) ||
                    "1"),
                  (w = B.light_sec || 60));
              } catch (B) {
                console.error("讀取設定失敗:", B);
              }
            if (y) (await bs.turnOffAllLights(), v(!1), a(null));
            else {
              const B = [
                {
                  serverName: n.serverName,
                  serverType: n.serverType,
                  medicineCode: n.code,
                },
              ];
              (await bs.startLighting(B, P, K, w * 1e3, () => {
                (v(!1), a(null));
              }),
                v(!0),
                a(n.code));
            }
          } catch (L) {
            console.error("亮燈操作失敗:", L);
          } finally {
            S(!1);
          }
        }
      },
      F = async (N) => {
        const L = N.notice === "True" ? "False" : "True";
        p(N.GUID);
        const P = [...i],
          K = P.findIndex((w) => w.GUID === N.GUID);
        if (K === -1) {
          p(null);
          return;
        }
        ((P[K] = { ...N, notice: L }), c(P));
        try {
          const w = await Me.updateRequisitionNotice(N.GUID, L);
          w.Code !== 200
            ? ((P[K] = { ...N, notice: N.notice }),
              c(P),
              console.error("更新申領通知狀態失敗:", w))
            : l && l();
        } catch (w) {
          ((P[K] = { ...N, notice: N.notice }),
            c(P),
            console.error("更新申領通知狀態失敗:", w));
        } finally {
          p(null);
        }
      },
      M = async (N) => {
        const L = N.notice === "True" ? "False" : "True";
        p(N.GUID);
        const P = [...h],
          K = P.findIndex((w) => w.GUID === N.GUID);
        if (K === -1) {
          p(null);
          return;
        }
        ((P[K] = { ...N, notice: L }), g(P));
        try {
          const w = await Me.updateDistributionNotice(N.GUID, L);
          w.Code !== 200
            ? ((P[K] = { ...N, notice: N.notice }),
              g(P),
              console.error("更新撥補通知狀態失敗:", w))
            : l && l();
        } catch (w) {
          ((P[K] = { ...N, notice: N.notice }),
            g(P),
            console.error("更新撥補通知狀態失敗:", w));
        } finally {
          p(null);
        }
      };
    if (!e || !n) return null;
    const $ = i.filter((N) => N.state === "等待過帳"),
      se = h.filter((N) => N.state === "等待過帳"),
      ye = $.length === 0 && se.length === 0,
      _ = (N) => {
        if (!N || N === "1/01/01 00:00:00" || N === "0001-01-01T00:00:00")
          return "-";
        try {
          const L = new Date(N);
          if (isNaN(L.getTime())) return N;
          const P = L.getFullYear(),
            K = String(L.getMonth() + 1).padStart(2, "0"),
            w = String(L.getDate()).padStart(2, "0"),
            B = String(L.getHours()).padStart(2, "0"),
            ee = String(L.getMinutes()).padStart(2, "0");
          return `${P}/${K}/${w} ${B}:${ee}`;
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
                      onClick: I,
                      disabled: E,
                      className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed ${y ? "bg-green-500 text-white hover:bg-green-600 shadow-lg" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`,
                      title: y ? "點擊關燈" : "點擊亮燈",
                      children: r.jsx(hh, {
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
                    children: r.jsx(Ze, { className: "w-6 h-6 text-gray-700" }),
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
              children: ye
                ? r.jsx("div", {
                    className:
                      "flex items-center justify-center h-40 text-gray-400 text-lg",
                    children: "無藥品需求",
                  })
                : r.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      $.map((N, L) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-blue-200 rounded-lg p-3 bg-blue-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              (d("requisition"), k(N), b(!0));
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
                                        onClick: (P) => {
                                          (P.stopPropagation(), F(N));
                                        },
                                        disabled: m === N.GUID,
                                        className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${N.notice === "True" ? "bg-green-500 text-white hover:bg-green-600" : "bg-gray-300 text-gray-600 hover:bg-gray-400"}`,
                                        title:
                                          N.notice === "True"
                                            ? "點擊關閉通知"
                                            : "點擊開啟通知",
                                        children: r.jsx(Uc, {
                                          className: "w-5 h-5",
                                        }),
                                      }),
                                    ],
                                  }),
                                  r.jsx("span", {
                                    className: `px-3 text-sm py-2 text-white font-semibold rounded-full ${N.actionType.includes("緊急") ? "bg-green-600" : "bg-blue-600"}`,
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
                                        children: _(N.requestTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          N.GUID,
                        ),
                      ),
                      se.map((N, L) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-yellow-200 rounded-lg p-3 bg-yellow-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              (d("distribution"), k(N), b(!0));
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
                                    onClick: (P) => {
                                      (P.stopPropagation(), M(N));
                                    },
                                    disabled: m === N.GUID,
                                    className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 ${N.notice === "True" ? "bg-green-500 text-white hover:bg-green-600" : "bg-gray-300 text-gray-600 hover:bg-gray-400"}`,
                                    title:
                                      N.notice === "True"
                                        ? "點擊關閉通知"
                                        : "點擊開啟通知",
                                    children: r.jsx(Uc, {
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
                                        children: _(N.addedTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          N.GUID,
                        ),
                      ),
                    ],
                  }),
            }),
          ],
        }),
        r.jsx(qh, {
          isOpen: j,
          onClose: () => b(!1),
          type: f,
          data: T,
          onApprove: l,
        }),
      ],
    });
  },
  Yh = ({ isOpen: e, onClose: t, container: n }) => {
    const [s, o] = u.useState("list_mode"),
      { highlightedMedicineCode: l, apiDepartmentData: a } = it(),
      [i, c] = u.useState(!1),
      [h, g] = u.useState([]),
      [m, p] = u.useState([]),
      [j, b] = u.useState([]),
      [T, k] = u.useState(!1),
      [f, d] = u.useState(null),
      y = u.useRef(null),
      v = u.useRef(null),
      E = u.useCallback(
        (_) => {
          if (!a || !_) return null;
          const N = (L) => {
            for (const P of L) {
              if (P.GUID === _) return P;
              if (P.contents && Array.isArray(P.contents)) {
                const K = N(P.contents);
                if (K) return K;
              }
            }
            return null;
          };
          for (const L of a) {
            if (L.GUID === _) return L;
            if (L.contents && Array.isArray(L.contents)) {
              const P = N(L.contents);
              if (P) return P;
            }
          }
          return null;
        },
        [a],
      ),
      S = n ? E(n.GUID) || n : null,
      I = () => {
        try {
          const N = localStorage.getItem("medMap_setting");
          if (N) {
            const P = JSON.parse(N).light_sec;
            if (P != null && P !== "") {
              const K = Number(P);
              if (!isNaN(K) && K > 0) return K * 1e3;
            }
          }
        } catch (N) {
          console.error("讀取亮燈設定失敗:", N);
        }
        return 6e4;
      },
      F = () => {
        try {
          const _ = localStorage.getItem("medMap_setting");
          if (_) return JSON.parse(_).light_color || "red";
        } catch (_) {
          console.error("讀取高亮顏色設定失敗:", _);
        }
        return "red";
      },
      M = u.useCallback(async () => {
        try {
          const _ = new Date(),
            N = `${_.getFullYear()}-${String(_.getMonth() + 1).padStart(2, "0")}-${String(_.getDate()).padStart(2, "0")} 00:00:00`,
            L = `${_.getFullYear()}-${String(_.getMonth() + 1).padStart(2, "0")}-${String(_.getDate()).padStart(2, "0")} 23:59:59`,
            [P, K] = await Promise.all([
              Me.getRequisitionByTime(N, L),
              Me.getDistributionByTime(N, L),
            ]),
            w = [];
          if (P.Code === 200 && P.Data) {
            const B = P.Data.filter((H) => {
              var A;
              return (A = S == null ? void 0 : S.med_list) == null
                ? void 0
                : A.some((Ne) => Ne.code === H.code);
            });
            (p(B),
              B.filter(
                (H) => H.state === "等待過帳" && H.notice === "True",
              ).forEach((H) => {
                H.code && w.push(H.code);
              }));
          }
          if (K.Code === 200 && K.Data) {
            const B = K.Data.filter((H) => {
              var A;
              return (A = S == null ? void 0 : S.med_list) == null
                ? void 0
                : A.some((Ne) => Ne.code === H.code);
            });
            (b(B),
              B.filter(
                (H) => H.state === "等待過帳" && H.notice === "True",
              ).forEach((H) => {
                H.code && (w.includes(H.code) || w.push(H.code));
              }));
          }
          g(w);
        } catch (_) {
          console.error("檢查申領撥補資料失敗:", _);
        }
      }, [S]);
    (u.useEffect(
      () => (
        e
          ? (M(),
            v.current && clearInterval(v.current),
            (v.current = setInterval(() => {
              M();
            }, 1e4)))
          : v.current && (clearInterval(v.current), (v.current = null)),
        () => {
          v.current && (clearInterval(v.current), (v.current = null));
        }
      ),
      [e, M],
    ),
      u.useEffect(() => {
        var _;
        S &&
          console.log("🔄 ContainerDetailModal: currentContainer updated", {
            GUID: S.GUID,
            name: S.name,
            medListCount: ((_ = S.med_list) == null ? void 0 : _.length) || 0,
          });
      }, [S]),
      u.useEffect(() => {
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
          const _ = I();
          (console.log("✅ ContainerDetailModal - 啟動亮燈:", {
            medicineCode: l,
            duration: _ / 1e3 + "秒",
          }),
            y.current && clearTimeout(y.current),
            (y.current = setTimeout(() => {
              (console.log("⏱️ ContainerDetailModal - 亮燈時間結束"),
                c(!1),
                (y.current = null));
            }, _)));
        } else c(!1);
        return () => {
          y.current && clearTimeout(y.current);
        };
      }, [e, l]));
    const $ = (_) => {
      var P, K;
      (m.filter((w) => w.code === _.code), j.filter((w) => w.code === _.code));
      const N = (w) => {
          for (const B of w) {
            if (B.type === "store_shelves" && B.medMapStock) {
              const ee = B.medMapStock.find((H) => H.code === _.code);
              if (ee) return { stock: ee, shelf: B };
            }
            if (B.contents && B.contents.length > 0) {
              const ee = N(B.contents);
              if (ee) return ee;
            }
          }
          return null;
        },
        L = n ? N([n]) : null;
      (d({
        code: _.code,
        name: _.name,
        cht_name: _.cht_name,
        skdiacode: _.SKDIACODE || _.skdiacode,
        serverName:
          (P = L == null ? void 0 : L.shelf) == null ? void 0 : P.serverName,
        serverType:
          (K = L == null ? void 0 : L.shelf) == null ? void 0 : K.serverType,
      }),
        k(!0));
    };
    if (!e) return null;
    const se = () => {
        if (!(S != null && S.med_list) || S.med_list.length === 0)
          return r.jsx("div", {
            className: "flex items-center justify-center h-full text-gray-400",
            children: r.jsx("p", { children: "無藥品資料" }),
          });
        const _ = [...S.med_list].sort((N, L) => N.code.localeCompare(L.code));
        return r.jsx("div", {
          className: "overflow-y-auto h-full",
          children: r.jsxs("table", {
            className: "w-full border-collapse",
            children: [
              r.jsx("thead", {
                className: "sticky top-0 bg-white",
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
                children: _.map((N, L) => {
                  const P = i && l && N.code == l,
                    K = h.includes(N.code);
                  let w = 0;
                  (N.qty.forEach((ee) => {
                    w += +ee;
                  }),
                    L === 0 &&
                      console.log("🧪 ContainerDetailModal - 第一筆藥品檢查:", {
                        medCode: N.code,
                        highlightedCode: l,
                        isHighlightActive: i,
                        isHighlighted: P,
                        isPendingRequisition: K,
                        comparison: `${N.code} == ${l} = ${N.code == l}`,
                      }));
                  const B = F();
                  return r.jsxs(
                    "tr",
                    {
                      className: `transition-colors cursor-pointer ${K ? "highlight-breathe-red" : P ? `highlight-breathe-${B}` : "hover:bg-gray-50"}`,
                      onClick: () => $(N),
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
                          children: w || "-",
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
                    L,
                  );
                }),
              }),
            ],
          }),
        });
      },
      ye = () =>
        n
          ? r.jsx(Vh, {
              container: S,
              highlightedMedicineCode: i ? l : null,
              pendingRequisitionCodes: h,
              onMedicineClick: $,
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
                          className: `px-4 py-2 rounded-md text-sm font-medium transition-all ${s === "list_mode" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"}`,
                          children: "清單",
                        }),
                        r.jsx("button", {
                          onClick: () => o("view_mode"),
                          className: `px-4 py-2 rounded-md text-sm font-medium transition-all ${s === "view_mode" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"}`,
                          children: "視圖",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: t,
                      className:
                        "p-2 hover:bg-gray-100 rounded-full transition-colors",
                      title: "關閉",
                      children: r.jsx(Ze, {
                        className: "w-6 h-6 text-gray-700",
                      }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 overflow-hidden p-3",
                  children: s === "list_mode" ? se() : ye(),
                }),
              ],
            }),
          ],
        }),
        r.jsx(Wh, {
          isOpen: T,
          onClose: () => k(!1),
          medicineInfo: f,
          requisitions: f ? m.filter((_) => _.code === f.code) : [],
          distributions: f ? j.filter((_) => _.code === f.code) : [],
          onNoticeUpdated: M,
        }),
      ],
    });
  },
  Qh = () => {
    const {
        editStoreShelfModalOpen: e,
        closeEditStoreShelfModal: t,
        selectedStoreShelfForEdit: n,
        showNotification: s,
        updateContainerInLocalData: o,
      } = it(),
      [l, a] = u.useState({
        name: "",
        position: "",
        width: "85",
        height: "29",
        ip: "",
        serverName: "",
        serverType: "",
        deviceType: "",
      }),
      [i, c] = u.useState(!1);
    u.useEffect(() => {
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
              b = `${(await Me.getConfig()).domain}/api/medmap/update_shelf`,
              k = await (
                await fetch(b, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(p),
                })
              ).json();
            (console.log(p),
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
                : s(k.Result || "更新失敗", "error"));
          } catch (p) {
            (console.error("更新層架失敗:", p),
              s("更新失敗，請稍後再試", "error"));
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
                        r.jsx(Dr, { className: "w-6 h-6 text-gray-600" }),
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
                      children: r.jsx(Ze, { className: "w-6 h-6" }),
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
                        i && r.jsx(Lt, { className: "w-4 h-4 animate-spin" }),
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
  Xh = () => {
    const {
        editParentContainerModalOpen: e,
        closeEditParentContainerModal: t,
        selectedParentContainerForEdit: n,
        showNotification: s,
        updateContainerInLocalData: o,
      } = it(),
      [l, a] = u.useState({
        name: "",
        position: "",
        ip_light: "",
        serverName: "",
        serverType: "",
        deviceType: "",
        reverse: "False",
      }),
      [i, c] = u.useState(!1);
    u.useEffect(() => {
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
            const b = await Me.updateMedMapSection(j);
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
            (console.error("更新父容器失敗:", p),
              s("更新失敗，請稍後再試", "error"));
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
                        r.jsx(Dr, { className: "w-6 h-6 text-gray-600" }),
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
                      children: r.jsx(Ze, { className: "w-6 h-6" }),
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
                                l.reverse === "True" ? "False" : "True",
                              ),
                            className: `relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${l.reverse === "True" ? "bg-blue-600" : "bg-gray-300"}`,
                            children: r.jsx("span", {
                              className: `inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${l.reverse === "True" ? "translate-x-7" : "translate-x-1"}`,
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
                        i && r.jsx(Lt, { className: "w-4 h-4 animate-spin" }),
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
  Kh = ({ isOpen: e, onLoginSuccess: t }) => {
    const { t: n } = Mt(),
      [s, o] = u.useState(""),
      [l, a] = u.useState(""),
      [i, c] = u.useState(!1),
      [h, g] = u.useState(!1),
      [m, p] = u.useState(""),
      j = async (T) => {
        if ((T.preventDefault(), !s.trim() || !l.trim())) {
          p("Please enter both ID and password");
          return;
        }
        (g(!0), p(""));
        try {
          const k = await Me.login({ ID: s.trim(), Password: l });
          if (k.Code === 200 && k.Data) {
            const f = { ...k.Data, loginTime: new Date().toISOString() };
            (localStorage.setItem("user_session", JSON.stringify(f)), t(f));
          } else p(k.Result || "Login failed");
        } catch (k) {
          (console.error("Login failed:", k),
            p("Network error. Please try again."));
        } finally {
          g(!1);
        }
      },
      b = (T) => {
        T.key === "Enter" && !h && j(T);
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
                              onChange: (T) => o(T.target.value),
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
                                  onChange: (T) => a(T.target.value),
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
                                    ? r.jsx(sf, { className: "w-5 h-5" })
                                    : r.jsx(of, { className: "w-5 h-5" }),
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
                                  r.jsx(Lt, {
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
  Jh = ({ isVisible: e, message: t }) => {
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
                        children: r.jsx(Di, {
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
                      r.jsx(Lt, {
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
  Zh = ({
    message: e,
    type: t,
    isVisible: n,
    onClose: s,
    duration: o = 3e3,
  }) => {
    const [l, a] = u.useState(!1);
    return (
      u.useEffect(() => {
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
            className: `fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999] transition-all duration-300 ease-in-out ${n ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`,
            children: r.jsxs("div", {
              className: `flex items-center space-x-3 px-4 py-3 rounded-lg shadow-lg border ${t === "success" ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"}`,
              children: [
                t === "success"
                  ? r.jsx(uh, { className: "w-5 h-5 text-green-600" })
                  : r.jsx(wh, { className: "w-5 h-5 text-red-600" }),
                r.jsx("span", {
                  className: "text-sm font-medium",
                  children: e,
                }),
                r.jsx("button", {
                  onClick: s,
                  className: `p-1 rounded-full hover:bg-black/10 transition-colors ${t === "success" ? "text-green-600" : "text-red-600"}`,
                  children: r.jsx(Ze, { className: "w-4 h-4" }),
                }),
              ],
            }),
          })
        : null
    );
  };
function eg() {
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
    closeAddDepartmentModal: T,
    qrCodeScannerModalOpen: k,
    qrCodeScannerMode: f,
    closeQRCodeScannerModal: d,
    addBarcodeModalOpen: y,
    closeAddBarcodeModal: v,
    initialBarcodeValue: E,
    containerDetailModalOpen: S,
    closeContainerDetailModal: I,
    selectedContainerForDetail: F,
    setMedicineList: M,
    setIsLoadingMedicines: $,
    showNotification: se,
  } = it();
  (u.useEffect(() => {
    (() => {
      try {
        const P = localStorage.getItem("user_session");
        if (P) {
          const K = JSON.parse(P);
          K.GUID && K.ID && K.Name
            ? (o(K), s(!0))
            : localStorage.removeItem("user_session");
        }
      } catch (P) {
        (console.error("Error checking session:", P),
          localStorage.removeItem("user_session"));
      }
    })();
  }, [s, o]),
    u.useEffect(() => {
      let L = !0;
      return (
        (async () => {
          if (n) {
            $(!0);
            try {
              console.log("開始載入藥品資料...");
              const K = await Me.getMedicineCloud();
              if ((console.log("藥品資料 API 回應:", K), !L)) return;
              K.Code === 200 && K.Data
                ? (M(K.Data),
                  console.log(`✅ 成功載入 ${K.Data.length} 筆藥品資料`),
                  se(`載入 ${K.Data.length} 筆藥品資料`, "success"))
                : (console.warn("API 回應異常:", K),
                  M([]),
                  se("藥品資料載入異常，請稍後重試", "error"));
            } catch (K) {
              if (!L) return;
              (console.error("載入藥品資料失敗:", K),
                M([]),
                se("無法連線到藥品資料庫，部分功能可能無法使用", "error"));
            } finally {
              L && $(!1);
            }
          }
        })(),
        () => {
          L = !1;
        }
      );
    }, [n]));
  const ye = (L) => {
      (o(L), s(!0));
    },
    _ = bo.useRef(null),
    N = (L, P) => {
      if (
        (console.log("📸 QR掃描成功 - handleQRScanSuccess 被調用:", {
          barcode: L,
          medicineData: P,
          mode: f,
        }),
        console.log("📸 當前 mode:", f),
        console.log("📸 當前 viewMode:", t),
        console.log("📸 drugCanvasRef.current:", _.current),
        f === "track_Drug_mode")
      ) {
        if ((console.log("✅ 進入 track_Drug_mode 分支"), t !== "medicine")) {
          (console.warn("⚠️ 當前不在藥品地圖視圖，無法定位藥品"),
            se("請切換到藥品地圖視圖後再使用此功能", "error"));
          return;
        }
        _.current
          ? (console.log("✅ drugCanvasRef.current 存在"),
            console.log(
              "📸 drugCanvasRef.current.locateDrug 類型:",
              typeof _.current.locateDrug,
            ),
            typeof _.current.locateDrug == "function"
              ? (console.log("✅ 呼叫 locateDrug 函數"),
                _.current.locateDrug(P))
              : console.warn("⚠️ locateDrug 不是函數"))
          : console.warn("⚠️ drugCanvasRef.current 不存在");
      } else console.log("⚠️ mode 不是 track_Drug_mode，當前 mode:", f);
    };
  return n
    ? r.jsxs("div", {
        className: "min-h-screen bg-gray-50",
        children: [
          r.jsx(Nh, {}),
          r.jsx(jh, {}),
          r.jsx(kh, {}),
          r.jsx("div", {
            className: "fixed inset-0",
            children: r.jsx("div", {
              className: "w-full h-full",
              children:
                t === "department" ? r.jsx(Ih, {}) : r.jsx(uf, { ref: _ }),
            }),
          }),
          r.jsx(_h, {}),
          r.jsx(Ah, {}),
          r.jsx(Oh, {}),
          r.jsx(Uh, {}),
          r.jsx(Lh, {}),
          r.jsx(Gh, {}),
          r.jsx(Bh, {}),
          r.jsx(zh, { isOpen: m, onClose: p, storeShelf: j }),
          r.jsx(Fh, { isOpen: b, onClose: T }),
          r.jsx(il, { isOpen: k, onClose: d, mode: f, onScanSuccess: N }),
          r.jsx(Hh, { isOpen: y, onClose: v, initialBarcode: E }),
          r.jsx(Yh, { isOpen: S, onClose: I, container: F }),
          r.jsx(Qh, {}),
          r.jsx(Xh, {}),
          r.jsx(Jh, { isVisible: l }),
          r.jsx(Zh, {
            message: a.message,
            type: a.type,
            isVisible: a.isVisible,
            onClose: i,
          }),
        ],
      })
    : r.jsx(Kh, { isOpen: !0, onLoginSuccess: ye });
}
function tg() {
  return r.jsx(ah, { children: r.jsx(oh, { children: r.jsx(eg, {}) }) });
}
Zu(document.getElementById("root")).render(
  r.jsx(u.StrictMode, { children: r.jsx(tg, {}) }),
);
