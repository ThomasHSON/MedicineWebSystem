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
function If(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Fc = { exports: {} },
  Yo = {},
  Hc = { exports: {} },
  Be = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gs = Symbol.for("react.element"),
  Ef = Symbol.for("react.portal"),
  Pf = Symbol.for("react.fragment"),
  Tf = Symbol.for("react.strict_mode"),
  Rf = Symbol.for("react.profiler"),
  $f = Symbol.for("react.provider"),
  Af = Symbol.for("react.context"),
  Uf = Symbol.for("react.forward_ref"),
  Of = Symbol.for("react.suspense"),
  Lf = Symbol.for("react.memo"),
  Gf = Symbol.for("react.lazy"),
  Ei = Symbol.iterator;
function zf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ei && e[Ei]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Vc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  qc = Object.assign,
  Wc = {};
function Hr(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Wc),
    (this.updater = n || Vc));
}
Hr.prototype.isReactComponent = {};
Hr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Hr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Yc() {}
Yc.prototype = Hr.prototype;
function Ra(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Wc),
    (this.updater = n || Vc));
}
var $a = (Ra.prototype = new Yc());
$a.constructor = Ra;
qc($a, Hr.prototype);
$a.isPureReactComponent = !0;
var Pi = Array.isArray,
  Qc = Object.prototype.hasOwnProperty,
  Aa = { current: null },
  Xc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kc(e, t, n) {
  var s,
    o = {},
    l = null,
    a = null;
  if (t != null)
    for (s in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Qc.call(t, s) && !Xc.hasOwnProperty(s) && (o[s] = t[s]);
  var i = arguments.length - 2;
  if (i === 1) o.children = n;
  else if (1 < i) {
    for (var c = Array(i), h = 0; h < i; h++) c[h] = arguments[h + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (s in ((i = e.defaultProps), i)) o[s] === void 0 && (o[s] = i[s]);
  return {
    $$typeof: Gs,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: Aa.current,
  };
}
function Bf(e, t) {
  return {
    $$typeof: Gs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ua(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gs;
}
function Ff(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ti = /\/+/g;
function hl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ff("" + e.key)
    : t.toString(36);
}
function co(e, t, n, s, o) {
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
          case Gs:
          case Ef:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = s === "" ? "." + hl(a, 0) : s),
      Pi(o)
        ? ((n = ""),
          e != null && (n = e.replace(Ti, "$&/") + "/"),
          co(o, t, n, "", function (h) {
            return h;
          }))
        : o != null &&
          (Ua(o) &&
            (o = Bf(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Ti, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (s = s === "" ? "." : s + ":"), Pi(e)))
    for (var i = 0; i < e.length; i++) {
      l = e[i];
      var c = s + hl(l, i);
      a += co(l, t, n, c, o);
    }
  else if (((c = zf(e)), typeof c == "function"))
    for (e = c.call(e), i = 0; !(l = e.next()).done; )
      ((l = l.value), (c = s + hl(l, i++)), (a += co(l, t, n, c, o)));
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
function Vs(e, t, n) {
  if (e == null) return e;
  var s = [],
    o = 0;
  return (
    co(e, s, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    s
  );
}
function Hf(e) {
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
  uo = { transition: null },
  Vf = {
    ReactCurrentDispatcher: kt,
    ReactCurrentBatchConfig: uo,
    ReactCurrentOwner: Aa,
  };
function Jc() {
  throw Error("act(...) is not supported in production builds of React.");
}
Be.Children = {
  map: Vs,
  forEach: function (e, t, n) {
    Vs(
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
      Vs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Vs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ua(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
Be.Component = Hr;
Be.Fragment = Pf;
Be.Profiler = Rf;
Be.PureComponent = Ra;
Be.StrictMode = Tf;
Be.Suspense = Of;
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vf;
Be.act = Jc;
Be.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var s = qc({}, e.props),
    o = e.key,
    l = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (a = Aa.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (c in t)
      Qc.call(t, c) &&
        !Xc.hasOwnProperty(c) &&
        (s[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) s.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var h = 0; h < c; h++) i[h] = arguments[h + 2];
    s.children = i;
  }
  return { $$typeof: Gs, type: e.type, key: o, ref: l, props: s, _owner: a };
};
Be.createContext = function (e) {
  return (
    (e = {
      $$typeof: Af,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: $f, _context: e }),
    (e.Consumer = e)
  );
};
Be.createElement = Kc;
Be.createFactory = function (e) {
  var t = Kc.bind(null, e);
  return ((t.type = e), t);
};
Be.createRef = function () {
  return { current: null };
};
Be.forwardRef = function (e) {
  return { $$typeof: Uf, render: e };
};
Be.isValidElement = Ua;
Be.lazy = function (e) {
  return { $$typeof: Gf, _payload: { _status: -1, _result: e }, _init: Hf };
};
Be.memo = function (e, t) {
  return { $$typeof: Lf, type: e, compare: t === void 0 ? null : t };
};
Be.startTransition = function (e) {
  var t = uo.transition;
  uo.transition = {};
  try {
    e();
  } finally {
    uo.transition = t;
  }
};
Be.unstable_act = Jc;
Be.useCallback = function (e, t) {
  return kt.current.useCallback(e, t);
};
Be.useContext = function (e) {
  return kt.current.useContext(e);
};
Be.useDebugValue = function () {};
Be.useDeferredValue = function (e) {
  return kt.current.useDeferredValue(e);
};
Be.useEffect = function (e, t) {
  return kt.current.useEffect(e, t);
};
Be.useId = function () {
  return kt.current.useId();
};
Be.useImperativeHandle = function (e, t, n) {
  return kt.current.useImperativeHandle(e, t, n);
};
Be.useInsertionEffect = function (e, t) {
  return kt.current.useInsertionEffect(e, t);
};
Be.useLayoutEffect = function (e, t) {
  return kt.current.useLayoutEffect(e, t);
};
Be.useMemo = function (e, t) {
  return kt.current.useMemo(e, t);
};
Be.useReducer = function (e, t, n) {
  return kt.current.useReducer(e, t, n);
};
Be.useRef = function (e) {
  return kt.current.useRef(e);
};
Be.useState = function (e) {
  return kt.current.useState(e);
};
Be.useSyncExternalStore = function (e, t, n) {
  return kt.current.useSyncExternalStore(e, t, n);
};
Be.useTransition = function () {
  return kt.current.useTransition();
};
Be.version = "18.3.1";
Hc.exports = Be;
var u = Hc.exports;
const No = If(u);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qf = u,
  Wf = Symbol.for("react.element"),
  Yf = Symbol.for("react.fragment"),
  Qf = Object.prototype.hasOwnProperty,
  Xf = qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Kf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zc(e, t, n) {
  var s,
    o = {},
    l = null,
    a = null;
  (n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (a = t.ref));
  for (s in t) Qf.call(t, s) && !Kf.hasOwnProperty(s) && (o[s] = t[s]);
  if (e && e.defaultProps)
    for (s in ((t = e.defaultProps), t)) o[s] === void 0 && (o[s] = t[s]);
  return {
    $$typeof: Wf,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: Xf.current,
  };
}
Yo.Fragment = Yf;
Yo.jsx = Zc;
Yo.jsxs = Zc;
Fc.exports = Yo;
var r = Fc.exports,
  ed = { exports: {} },
  Vt = {},
  td = { exports: {} },
  nd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(w, z) {
    var te = w.length;
    w.push(z);
    e: for (; 0 < te; ) {
      var H = (te - 1) >>> 1,
        A = w[H];
      if (0 < o(A, z)) ((w[H] = z), (w[te] = A), (te = H));
      else break e;
    }
  }
  function n(w) {
    return w.length === 0 ? null : w[0];
  }
  function s(w) {
    if (w.length === 0) return null;
    var z = w[0],
      te = w.pop();
    if (te !== z) {
      w[0] = te;
      e: for (var H = 0, A = w.length, Se = A >>> 1; H < Se; ) {
        var R = 2 * (H + 1) - 1,
          G = w[R],
          ge = R + 1,
          Z = w[ge];
        if (0 > o(G, te))
          ge < A && 0 > o(Z, G)
            ? ((w[H] = Z), (w[ge] = te), (H = ge))
            : ((w[H] = G), (w[R] = te), (H = R));
        else if (ge < A && 0 > o(Z, te)) ((w[H] = Z), (w[ge] = te), (H = ge));
        else break e;
      }
    }
    return z;
  }
  function o(w, z) {
    var te = w.sortIndex - z.sortIndex;
    return te !== 0 ? te : w.id - z.id;
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
    x = 1,
    m = null,
    p = 3,
    j = !1,
    b = !1,
    T = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(w) {
    for (var z = n(h); z !== null; ) {
      if (z.callback === null) s(h);
      else if (z.startTime <= w)
        (s(h), (z.sortIndex = z.expirationTime), t(c, z));
      else break;
      z = n(h);
    }
  }
  function v(w) {
    if (((T = !1), y(w), !b))
      if (n(c) !== null) ((b = !0), P(I));
      else {
        var z = n(h);
        z !== null && J(v, z.startTime - w);
      }
  }
  function I(w, z) {
    ((b = !1), T && ((T = !1), f(F), (F = -1)), (j = !0));
    var te = p;
    try {
      for (
        y(z), m = n(c);
        m !== null && (!(m.expirationTime > z) || (w && !se()));
      ) {
        var H = m.callback;
        if (typeof H == "function") {
          ((m.callback = null), (p = m.priorityLevel));
          var A = H(m.expirationTime <= z);
          ((z = e.unstable_now()),
            typeof A == "function" ? (m.callback = A) : m === n(c) && s(c),
            y(z));
        } else s(c);
        m = n(c);
      }
      if (m !== null) var Se = !0;
      else {
        var R = n(h);
        (R !== null && J(v, R.startTime - z), (Se = !1));
      }
      return Se;
    } finally {
      ((m = null), (p = te), (j = !1));
    }
  }
  var S = !1,
    E = null,
    F = -1,
    M = 5,
    U = -1;
  function se() {
    return !(e.unstable_now() - U < M);
  }
  function be() {
    if (E !== null) {
      var w = e.unstable_now();
      U = w;
      var z = !0;
      try {
        z = E(!0, w);
      } finally {
        z ? k() : ((S = !1), (E = null));
      }
    } else S = !1;
  }
  var k;
  if (typeof d == "function")
    k = function () {
      d(be);
    };
  else if (typeof MessageChannel < "u") {
    var N = new MessageChannel(),
      L = N.port2;
    ((N.port1.onmessage = be),
      (k = function () {
        L.postMessage(null);
      }));
  } else
    k = function () {
      _(be, 0);
    };
  function P(w) {
    ((E = w), S || ((S = !0), k()));
  }
  function J(w, z) {
    F = _(function () {
      w(e.unstable_now());
    }, z);
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
      b || j || ((b = !0), P(I));
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
          var z = 3;
          break;
        default:
          z = p;
      }
      var te = p;
      p = z;
      try {
        return w();
      } finally {
        p = te;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (w, z) {
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
      var te = p;
      p = w;
      try {
        return z();
      } finally {
        p = te;
      }
    }),
    (e.unstable_scheduleCallback = function (w, z, te) {
      var H = e.unstable_now();
      switch (
        (typeof te == "object" && te !== null
          ? ((te = te.delay),
            (te = typeof te == "number" && 0 < te ? H + te : H))
          : (te = H),
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
        (A = te + A),
        (w = {
          id: x++,
          callback: z,
          priorityLevel: w,
          startTime: te,
          expirationTime: A,
          sortIndex: -1,
        }),
        te > H
          ? ((w.sortIndex = te),
            t(h, w),
            n(c) === null &&
              w === n(h) &&
              (T ? (f(F), (F = -1)) : (T = !0), J(v, te - H)))
          : ((w.sortIndex = A), t(c, w), b || j || ((b = !0), P(I))),
        w
      );
    }),
    (e.unstable_shouldYield = se),
    (e.unstable_wrapCallback = function (w) {
      var z = p;
      return function () {
        var te = p;
        p = z;
        try {
          return w.apply(this, arguments);
        } finally {
          p = te;
        }
      };
    }));
})(nd);
td.exports = nd;
var Jf = td.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zf = u,
  Ht = Jf;
function ue(e) {
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
var rd = new Set(),
  js = {};
function cr(e, t) {
  (Ar(e, t), Ar(e + "Capture", t));
}
function Ar(e, t) {
  for (js[e] = t, e = 0; e < t.length; e++) rd.add(t[e]);
}
var wn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  zl = Object.prototype.hasOwnProperty,
  ep =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ri = {},
  $i = {};
function tp(e) {
  return zl.call($i, e)
    ? !0
    : zl.call(Ri, e)
      ? !1
      : ep.test(e)
        ? ($i[e] = !0)
        : ((Ri[e] = !0), !1);
}
function np(e, t, n, s) {
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
function rp(e, t, n, s) {
  if (t === null || typeof t > "u" || np(e, t, n, s)) return !0;
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
function Mt(e, t, n, s, o, l, a) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = s),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = a));
}
var wt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    wt[e] = new Mt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  wt[t] = new Mt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  wt[e] = new Mt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  wt[e] = new Mt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    wt[e] = new Mt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  wt[e] = new Mt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  wt[e] = new Mt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  wt[e] = new Mt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  wt[e] = new Mt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Oa = /[\-:]([a-z])/g;
function La(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Oa, La);
    wt[t] = new Mt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Oa, La);
    wt[t] = new Mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Oa, La);
  wt[t] = new Mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  wt[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
wt.xlinkHref = new Mt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  wt[e] = new Mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ga(e, t, n, s) {
  var o = wt.hasOwnProperty(t) ? wt[t] : null;
  (o !== null
    ? o.type !== 0
    : s ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (rp(t, n, o, s) && (n = null),
    s || o === null
      ? tp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Cn = Zf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  qs = Symbol.for("react.element"),
  gr = Symbol.for("react.portal"),
  xr = Symbol.for("react.fragment"),
  za = Symbol.for("react.strict_mode"),
  Bl = Symbol.for("react.profiler"),
  sd = Symbol.for("react.provider"),
  od = Symbol.for("react.context"),
  Ba = Symbol.for("react.forward_ref"),
  Fl = Symbol.for("react.suspense"),
  Hl = Symbol.for("react.suspense_list"),
  Fa = Symbol.for("react.memo"),
  Mn = Symbol.for("react.lazy"),
  ld = Symbol.for("react.offscreen"),
  Ai = Symbol.iterator;
function es(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ai && e[Ai]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var lt = Object.assign,
  gl;
function cs(e) {
  if (gl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      gl = (t && t[1]) || "";
    }
  return (
    `
` +
    gl +
    e
  );
}
var xl = !1;
function yl(e, t) {
  if (!e || xl) return "";
  xl = !0;
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
    ((xl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? cs(e) : "";
}
function sp(e) {
  switch (e.tag) {
    case 5:
      return cs(e.type);
    case 16:
      return cs("Lazy");
    case 13:
      return cs("Suspense");
    case 19:
      return cs("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = yl(e.type, !1)), e);
    case 11:
      return ((e = yl(e.type.render, !1)), e);
    case 1:
      return ((e = yl(e.type, !0)), e);
    default:
      return "";
  }
}
function Vl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case xr:
      return "Fragment";
    case gr:
      return "Portal";
    case Bl:
      return "Profiler";
    case za:
      return "StrictMode";
    case Fl:
      return "Suspense";
    case Hl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case od:
        return (e.displayName || "Context") + ".Consumer";
      case sd:
        return (e._context.displayName || "Context") + ".Provider";
      case Ba:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Fa:
        return (
          (t = e.displayName || null),
          t !== null ? t : Vl(e.type) || "Memo"
        );
      case Mn:
        ((t = e._payload), (e = e._init));
        try {
          return Vl(e(t));
        } catch {}
    }
  return null;
}
function op(e) {
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
      return Vl(t);
    case 8:
      return t === za ? "StrictMode" : "Mode";
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
function Hn(e) {
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
function ad(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function lp(e) {
  var t = ad(e) ? "checked" : "value",
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
function Ws(e) {
  e._valueTracker || (e._valueTracker = lp(e));
}
function id(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    s = "";
  return (
    e && (s = ad(e) ? (e.checked ? "true" : "false") : e.value),
    (e = s),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function jo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ql(e, t) {
  var n = t.checked;
  return lt({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ui(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    s = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Hn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: s,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function cd(e, t) {
  ((t = t.checked), t != null && Ga(e, "checked", t, !1));
}
function Wl(e, t) {
  cd(e, t);
  var n = Hn(t.value),
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
    ? Yl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Yl(e, t.type, Hn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Oi(e, t, n) {
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
function Yl(e, t, n) {
  (t !== "number" || jo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ds = Array.isArray;
function Ir(e, t, n, s) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      ((o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && s && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Hn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ((e[o].selected = !0), s && (e[o].defaultSelected = !0));
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ql(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(ue(91));
  return lt({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Li(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(ue(92));
      if (ds(n)) {
        if (1 < n.length) throw Error(ue(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Hn(n) };
}
function dd(e, t) {
  var n = Hn(t.value),
    s = Hn(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    s != null && (e.defaultValue = "" + s));
}
function Gi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ud(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Xl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ud(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Ys,
  fd = (function (e) {
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
        Ys = Ys || document.createElement("div"),
          Ys.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ys.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ss(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ps = {
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
  ap = ["Webkit", "ms", "Moz", "O"];
Object.keys(ps).forEach(function (e) {
  ap.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ps[t] = ps[e]));
  });
});
function pd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ps.hasOwnProperty(e) && ps[e])
      ? ("" + t).trim()
      : t + "px";
}
function md(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0,
        o = pd(n, t[n], s);
      (n === "float" && (n = "cssFloat"), s ? e.setProperty(n, o) : (e[n] = o));
    }
}
var ip = lt(
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
function Kl(e, t) {
  if (t) {
    if (ip[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(ue(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(ue(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(ue(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(ue(62));
  }
}
function Jl(e, t) {
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
var Zl = null;
function Ha(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ea = null,
  Er = null,
  Pr = null;
function zi(e) {
  if ((e = Fs(e))) {
    if (typeof ea != "function") throw Error(ue(280));
    var t = e.stateNode;
    t && ((t = Zo(t)), ea(e.stateNode, e.type, t));
  }
}
function hd(e) {
  Er ? (Pr ? Pr.push(e) : (Pr = [e])) : (Er = e);
}
function gd() {
  if (Er) {
    var e = Er,
      t = Pr;
    if (((Pr = Er = null), zi(e), t)) for (e = 0; e < t.length; e++) zi(t[e]);
  }
}
function xd(e, t) {
  return e(t);
}
function yd() {}
var vl = !1;
function vd(e, t, n) {
  if (vl) return e(t, n);
  vl = !0;
  try {
    return xd(e, t, n);
  } finally {
    ((vl = !1), (Er !== null || Pr !== null) && (yd(), gd()));
  }
}
function Cs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var s = Zo(n);
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
  if (n && typeof n != "function") throw Error(ue(231, t, typeof n));
  return n;
}
var ta = !1;
if (wn)
  try {
    var ts = {};
    (Object.defineProperty(ts, "passive", {
      get: function () {
        ta = !0;
      },
    }),
      window.addEventListener("test", ts, ts),
      window.removeEventListener("test", ts, ts));
  } catch {
    ta = !1;
  }
function cp(e, t, n, s, o, l, a, i, c) {
  var h = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, h);
  } catch (x) {
    this.onError(x);
  }
}
var ms = !1,
  So = null,
  Co = !1,
  na = null,
  dp = {
    onError: function (e) {
      ((ms = !0), (So = e));
    },
  };
function up(e, t, n, s, o, l, a, i, c) {
  ((ms = !1), (So = null), cp.apply(dp, arguments));
}
function fp(e, t, n, s, o, l, a, i, c) {
  if ((up.apply(this, arguments), ms)) {
    if (ms) {
      var h = So;
      ((ms = !1), (So = null));
    } else throw Error(ue(198));
    Co || ((Co = !0), (na = h));
  }
}
function dr(e) {
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
function bd(e) {
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
function Bi(e) {
  if (dr(e) !== e) throw Error(ue(188));
}
function pp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = dr(e)), t === null)) throw Error(ue(188));
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
        if (l === n) return (Bi(o), e);
        if (l === s) return (Bi(o), t);
        l = l.sibling;
      }
      throw Error(ue(188));
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
        if (!a) throw Error(ue(189));
      }
    }
    if (n.alternate !== s) throw Error(ue(190));
  }
  if (n.tag !== 3) throw Error(ue(188));
  return n.stateNode.current === n ? e : t;
}
function wd(e) {
  return ((e = pp(e)), e !== null ? Nd(e) : null);
}
function Nd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Nd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var jd = Ht.unstable_scheduleCallback,
  Fi = Ht.unstable_cancelCallback,
  mp = Ht.unstable_shouldYield,
  hp = Ht.unstable_requestPaint,
  ut = Ht.unstable_now,
  gp = Ht.unstable_getCurrentPriorityLevel,
  Va = Ht.unstable_ImmediatePriority,
  Sd = Ht.unstable_UserBlockingPriority,
  Do = Ht.unstable_NormalPriority,
  xp = Ht.unstable_LowPriority,
  Cd = Ht.unstable_IdlePriority,
  Qo = null,
  fn = null;
function yp(e) {
  if (fn && typeof fn.onCommitFiberRoot == "function")
    try {
      fn.onCommitFiberRoot(Qo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var sn = Math.clz32 ? Math.clz32 : wp,
  vp = Math.log,
  bp = Math.LN2;
function wp(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((vp(e) / bp) | 0)) | 0);
}
var Qs = 64,
  Xs = 4194304;
function us(e) {
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
function _o(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var s = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var i = a & ~o;
    i !== 0 ? (s = us(i)) : ((l &= a), l !== 0 && (s = us(l)));
  } else ((a = n & ~o), a !== 0 ? (s = us(a)) : l !== 0 && (s = us(l)));
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
      ((n = 31 - sn(t)), (o = 1 << n), (s |= e[n]), (t &= ~o));
  return s;
}
function Np(e, t) {
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
function jp(e, t) {
  for (
    var n = e.suspendedLanes,
      s = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;
  ) {
    var a = 31 - sn(l),
      i = 1 << a,
      c = o[a];
    (c === -1
      ? (!(i & n) || i & s) && (o[a] = Np(i, t))
      : c <= t && (e.expiredLanes |= i),
      (l &= ~i));
  }
}
function ra(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Dd() {
  var e = Qs;
  return ((Qs <<= 1), !(Qs & 4194240) && (Qs = 64), e);
}
function bl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function zs(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - sn(t)),
    (e[t] = n));
}
function Sp(e, t) {
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
    var o = 31 - sn(n),
      l = 1 << o;
    ((t[o] = 0), (s[o] = -1), (e[o] = -1), (n &= ~l));
  }
}
function qa(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var s = 31 - sn(n),
      o = 1 << s;
    ((o & t) | (e[s] & t) && (e[s] |= t), (n &= ~o));
  }
}
var Qe = 0;
function _d(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var kd,
  Wa,
  Md,
  Id,
  Ed,
  sa = !1,
  Ks = [],
  An = null,
  Un = null,
  On = null,
  Ds = new Map(),
  _s = new Map(),
  En = [],
  Cp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Hi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      An = null;
      break;
    case "dragenter":
    case "dragleave":
      Un = null;
      break;
    case "mouseover":
    case "mouseout":
      On = null;
      break;
    case "pointerover":
    case "pointerout":
      Ds.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _s.delete(t.pointerId);
  }
}
function ns(e, t, n, s, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: s,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Fs(t)), t !== null && Wa(t)),
      e)
    : ((e.eventSystemFlags |= s),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Dp(e, t, n, s, o) {
  switch (t) {
    case "focusin":
      return ((An = ns(An, e, t, n, s, o)), !0);
    case "dragenter":
      return ((Un = ns(Un, e, t, n, s, o)), !0);
    case "mouseover":
      return ((On = ns(On, e, t, n, s, o)), !0);
    case "pointerover":
      var l = o.pointerId;
      return (Ds.set(l, ns(Ds.get(l) || null, e, t, n, s, o)), !0);
    case "gotpointercapture":
      return (
        (l = o.pointerId),
        _s.set(l, ns(_s.get(l) || null, e, t, n, s, o)),
        !0
      );
  }
  return !1;
}
function Pd(e) {
  var t = Zn(e.target);
  if (t !== null) {
    var n = dr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = bd(n)), t !== null)) {
          ((e.blockedOn = t),
            Ed(e.priority, function () {
              Md(n);
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
function fo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = oa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var s = new n.constructor(n.type, n);
      ((Zl = s), n.target.dispatchEvent(s), (Zl = null));
    } else return ((t = Fs(n)), t !== null && Wa(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Vi(e, t, n) {
  fo(e) && n.delete(t);
}
function _p() {
  ((sa = !1),
    An !== null && fo(An) && (An = null),
    Un !== null && fo(Un) && (Un = null),
    On !== null && fo(On) && (On = null),
    Ds.forEach(Vi),
    _s.forEach(Vi));
}
function rs(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    sa ||
      ((sa = !0),
      Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority, _p)));
}
function ks(e) {
  function t(o) {
    return rs(o, e);
  }
  if (0 < Ks.length) {
    rs(Ks[0], e);
    for (var n = 1; n < Ks.length; n++) {
      var s = Ks[n];
      s.blockedOn === e && (s.blockedOn = null);
    }
  }
  for (
    An !== null && rs(An, e),
      Un !== null && rs(Un, e),
      On !== null && rs(On, e),
      Ds.forEach(t),
      _s.forEach(t),
      n = 0;
    n < En.length;
    n++
  )
    ((s = En[n]), s.blockedOn === e && (s.blockedOn = null));
  for (; 0 < En.length && ((n = En[0]), n.blockedOn === null); )
    (Pd(n), n.blockedOn === null && En.shift());
}
var Tr = Cn.ReactCurrentBatchConfig,
  ko = !0;
function kp(e, t, n, s) {
  var o = Qe,
    l = Tr.transition;
  Tr.transition = null;
  try {
    ((Qe = 1), Ya(e, t, n, s));
  } finally {
    ((Qe = o), (Tr.transition = l));
  }
}
function Mp(e, t, n, s) {
  var o = Qe,
    l = Tr.transition;
  Tr.transition = null;
  try {
    ((Qe = 4), Ya(e, t, n, s));
  } finally {
    ((Qe = o), (Tr.transition = l));
  }
}
function Ya(e, t, n, s) {
  if (ko) {
    var o = oa(e, t, n, s);
    if (o === null) (Il(e, t, s, Mo, n), Hi(e, s));
    else if (Dp(o, e, t, n, s)) s.stopPropagation();
    else if ((Hi(e, s), t & 4 && -1 < Cp.indexOf(e))) {
      for (; o !== null; ) {
        var l = Fs(o);
        if (
          (l !== null && kd(l),
          (l = oa(e, t, n, s)),
          l === null && Il(e, t, s, Mo, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && s.stopPropagation();
    } else Il(e, t, s, null, n);
  }
}
var Mo = null;
function oa(e, t, n, s) {
  if (((Mo = null), (e = Ha(s)), (e = Zn(e)), e !== null))
    if (((t = dr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = bd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Mo = e), null);
}
function Td(e) {
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
      switch (gp()) {
        case Va:
          return 1;
        case Sd:
          return 4;
        case Do:
        case xp:
          return 16;
        case Cd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Tn = null,
  Qa = null,
  po = null;
function Rd() {
  if (po) return po;
  var e,
    t = Qa,
    n = t.length,
    s,
    o = "value" in Tn ? Tn.value : Tn.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (s = 1; s <= a && t[n - s] === o[l - s]; s++);
  return (po = o.slice(e, 1 < s ? 1 - s : void 0));
}
function mo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Js() {
  return !0;
}
function qi() {
  return !1;
}
function qt(e) {
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
        ? Js
        : qi),
      (this.isPropagationStopped = qi),
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
          (this.isDefaultPrevented = Js));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Js));
      },
      persist: function () {},
      isPersistent: Js,
    }),
    t
  );
}
var Vr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Xa = qt(Vr),
  Bs = lt({}, Vr, { view: 0, detail: 0 }),
  Ip = qt(Bs),
  wl,
  Nl,
  ss,
  Xo = lt({}, Bs, {
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
    getModifierState: Ka,
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
        : (e !== ss &&
            (ss && e.type === "mousemove"
              ? ((wl = e.screenX - ss.screenX), (Nl = e.screenY - ss.screenY))
              : (Nl = wl = 0),
            (ss = e)),
          wl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Nl;
    },
  }),
  Wi = qt(Xo),
  Ep = lt({}, Xo, { dataTransfer: 0 }),
  Pp = qt(Ep),
  Tp = lt({}, Bs, { relatedTarget: 0 }),
  jl = qt(Tp),
  Rp = lt({}, Vr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $p = qt(Rp),
  Ap = lt({}, Vr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Up = qt(Ap),
  Op = lt({}, Vr, { data: 0 }),
  Yi = qt(Op),
  Lp = {
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
  Gp = {
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
  zp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Bp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = zp[e]) ? !!t[e] : !1;
}
function Ka() {
  return Bp;
}
var Fp = lt({}, Bs, {
    key: function (e) {
      if (e.key) {
        var t = Lp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = mo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Gp[e.keyCode] || "Unidentified"
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
    getModifierState: Ka,
    charCode: function (e) {
      return e.type === "keypress" ? mo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? mo(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Hp = qt(Fp),
  Vp = lt({}, Xo, {
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
  Qi = qt(Vp),
  qp = lt({}, Bs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ka,
  }),
  Wp = qt(qp),
  Yp = lt({}, Vr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Qp = qt(Yp),
  Xp = lt({}, Xo, {
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
  Kp = qt(Xp),
  Jp = [9, 13, 27, 32],
  Ja = wn && "CompositionEvent" in window,
  hs = null;
wn && "documentMode" in document && (hs = document.documentMode);
var Zp = wn && "TextEvent" in window && !hs,
  $d = wn && (!Ja || (hs && 8 < hs && 11 >= hs)),
  Xi = " ",
  Ki = !1;
function Ad(e, t) {
  switch (e) {
    case "keyup":
      return Jp.indexOf(t.keyCode) !== -1;
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
function Ud(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var yr = !1;
function em(e, t) {
  switch (e) {
    case "compositionend":
      return Ud(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ki = !0), Xi);
    case "textInput":
      return ((e = t.data), e === Xi && Ki ? null : e);
    default:
      return null;
  }
}
function tm(e, t) {
  if (yr)
    return e === "compositionend" || (!Ja && Ad(e, t))
      ? ((e = Rd()), (po = Qa = Tn = null), (yr = !1), e)
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
      return $d && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var nm = {
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
function Ji(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!nm[e.type] : t === "textarea";
}
function Od(e, t, n, s) {
  (hd(s),
    (t = Io(t, "onChange")),
    0 < t.length &&
      ((n = new Xa("onChange", "change", null, n, s)),
      e.push({ event: n, listeners: t })));
}
var gs = null,
  Ms = null;
function rm(e) {
  Qd(e, 0);
}
function Ko(e) {
  var t = wr(e);
  if (id(t)) return e;
}
function sm(e, t) {
  if (e === "change") return t;
}
var Ld = !1;
if (wn) {
  var Sl;
  if (wn) {
    var Cl = "oninput" in document;
    if (!Cl) {
      var Zi = document.createElement("div");
      (Zi.setAttribute("oninput", "return;"),
        (Cl = typeof Zi.oninput == "function"));
    }
    Sl = Cl;
  } else Sl = !1;
  Ld = Sl && (!document.documentMode || 9 < document.documentMode);
}
function ec() {
  gs && (gs.detachEvent("onpropertychange", Gd), (Ms = gs = null));
}
function Gd(e) {
  if (e.propertyName === "value" && Ko(Ms)) {
    var t = [];
    (Od(t, Ms, e, Ha(e)), vd(rm, t));
  }
}
function om(e, t, n) {
  e === "focusin"
    ? (ec(), (gs = t), (Ms = n), gs.attachEvent("onpropertychange", Gd))
    : e === "focusout" && ec();
}
function lm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ko(Ms);
}
function am(e, t) {
  if (e === "click") return Ko(t);
}
function im(e, t) {
  if (e === "input" || e === "change") return Ko(t);
}
function cm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ln = typeof Object.is == "function" ? Object.is : cm;
function Is(e, t) {
  if (ln(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    s = Object.keys(t);
  if (n.length !== s.length) return !1;
  for (s = 0; s < n.length; s++) {
    var o = n[s];
    if (!zl.call(t, o) || !ln(e[o], t[o])) return !1;
  }
  return !0;
}
function tc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function nc(e, t) {
  var n = tc(e);
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
    n = tc(n);
  }
}
function zd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? zd(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Bd() {
  for (var e = window, t = jo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = jo(e.document);
  }
  return t;
}
function Za(e) {
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
function dm(e) {
  var t = Bd(),
    n = e.focusedElem,
    s = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    zd(n.ownerDocument.documentElement, n)
  ) {
    if (s !== null && Za(n)) {
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
          (o = nc(n, l)));
        var a = nc(n, s);
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
var um = wn && "documentMode" in document && 11 >= document.documentMode,
  vr = null,
  la = null,
  xs = null,
  aa = !1;
function rc(e, t, n) {
  var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  aa ||
    vr == null ||
    vr !== jo(s) ||
    ((s = vr),
    "selectionStart" in s && Za(s)
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
    (xs && Is(xs, s)) ||
      ((xs = s),
      (s = Io(la, "onSelect")),
      0 < s.length &&
        ((t = new Xa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: s }),
        (t.target = vr))));
}
function Zs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var br = {
    animationend: Zs("Animation", "AnimationEnd"),
    animationiteration: Zs("Animation", "AnimationIteration"),
    animationstart: Zs("Animation", "AnimationStart"),
    transitionend: Zs("Transition", "TransitionEnd"),
  },
  Dl = {},
  Fd = {};
wn &&
  ((Fd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete br.animationend.animation,
    delete br.animationiteration.animation,
    delete br.animationstart.animation),
  "TransitionEvent" in window || delete br.transitionend.transition);
function Jo(e) {
  if (Dl[e]) return Dl[e];
  if (!br[e]) return e;
  var t = br[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Fd) return (Dl[e] = t[n]);
  return e;
}
var Hd = Jo("animationend"),
  Vd = Jo("animationiteration"),
  qd = Jo("animationstart"),
  Wd = Jo("transitionend"),
  Yd = new Map(),
  sc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function qn(e, t) {
  (Yd.set(e, t), cr(t, [e]));
}
for (var _l = 0; _l < sc.length; _l++) {
  var kl = sc[_l],
    fm = kl.toLowerCase(),
    pm = kl[0].toUpperCase() + kl.slice(1);
  qn(fm, "on" + pm);
}
qn(Hd, "onAnimationEnd");
qn(Vd, "onAnimationIteration");
qn(qd, "onAnimationStart");
qn("dblclick", "onDoubleClick");
qn("focusin", "onFocus");
qn("focusout", "onBlur");
qn(Wd, "onTransitionEnd");
Ar("onMouseEnter", ["mouseout", "mouseover"]);
Ar("onMouseLeave", ["mouseout", "mouseover"]);
Ar("onPointerEnter", ["pointerout", "pointerover"]);
Ar("onPointerLeave", ["pointerout", "pointerover"]);
cr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
cr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
cr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
cr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
cr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var fs =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  mm = new Set("cancel close invalid load scroll toggle".split(" ").concat(fs));
function oc(e, t, n) {
  var s = e.type || "unknown-event";
  ((e.currentTarget = n), fp(s, t, void 0, e), (e.currentTarget = null));
}
function Qd(e, t) {
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
          (oc(o, i, h), (l = c));
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
          (oc(o, i, h), (l = c));
        }
    }
  }
  if (Co) throw ((e = na), (Co = !1), (na = null), e);
}
function Ze(e, t) {
  var n = t[fa];
  n === void 0 && (n = t[fa] = new Set());
  var s = e + "__bubble";
  n.has(s) || (Xd(t, e, 2, !1), n.add(s));
}
function Ml(e, t, n) {
  var s = 0;
  (t && (s |= 4), Xd(n, e, s, t));
}
var eo = "_reactListening" + Math.random().toString(36).slice(2);
function Es(e) {
  if (!e[eo]) {
    ((e[eo] = !0),
      rd.forEach(function (n) {
        n !== "selectionchange" && (mm.has(n) || Ml(n, !1, e), Ml(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[eo] || ((t[eo] = !0), Ml("selectionchange", !1, t));
  }
}
function Xd(e, t, n, s) {
  switch (Td(t)) {
    case 1:
      var o = kp;
      break;
    case 4:
      o = Mp;
      break;
    default:
      o = Ya;
  }
  ((n = o.bind(null, t, n, e)),
    (o = void 0),
    !ta ||
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
function Il(e, t, n, s, o) {
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
          if (((a = Zn(i)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            s = l = a;
            continue e;
          }
          i = i.parentNode;
        }
      }
      s = s.return;
    }
  vd(function () {
    var h = l,
      x = Ha(n),
      m = [];
    e: {
      var p = Yd.get(e);
      if (p !== void 0) {
        var j = Xa,
          b = e;
        switch (e) {
          case "keypress":
            if (mo(n) === 0) break e;
          case "keydown":
          case "keyup":
            j = Hp;
            break;
          case "focusin":
            ((b = "focus"), (j = jl));
            break;
          case "focusout":
            ((b = "blur"), (j = jl));
            break;
          case "beforeblur":
          case "afterblur":
            j = jl;
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
            j = Wi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            j = Pp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            j = Wp;
            break;
          case Hd:
          case Vd:
          case qd:
            j = $p;
            break;
          case Wd:
            j = Qp;
            break;
          case "scroll":
            j = Ip;
            break;
          case "wheel":
            j = Kp;
            break;
          case "copy":
          case "cut":
          case "paste":
            j = Up;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            j = Qi;
        }
        var T = (t & 4) !== 0,
          _ = !T && e === "scroll",
          f = T ? (p !== null ? p + "Capture" : null) : p;
        T = [];
        for (var d = h, y; d !== null; ) {
          y = d;
          var v = y.stateNode;
          if (
            (y.tag === 5 &&
              v !== null &&
              ((y = v),
              f !== null && ((v = Cs(d, f)), v != null && T.push(Ps(d, v, y)))),
            _)
          )
            break;
          d = d.return;
        }
        0 < T.length &&
          ((p = new j(p, b, null, n, x)), m.push({ event: p, listeners: T }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (j = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Zl &&
            (b = n.relatedTarget || n.fromElement) &&
            (Zn(b) || b[Nn]))
        )
          break e;
        if (
          (j || p) &&
          ((p =
            x.window === x
              ? x
              : (p = x.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          j
            ? ((b = n.relatedTarget || n.toElement),
              (j = h),
              (b = b ? Zn(b) : null),
              b !== null &&
                ((_ = dr(b)), b !== _ || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
            : ((j = null), (b = h)),
          j !== b)
        ) {
          if (
            ((T = Wi),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((T = Qi),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (_ = j == null ? p : wr(j)),
            (y = b == null ? p : wr(b)),
            (p = new T(v, d + "leave", j, n, x)),
            (p.target = _),
            (p.relatedTarget = y),
            (v = null),
            Zn(x) === h &&
              ((T = new T(f, d + "enter", b, n, x)),
              (T.target = y),
              (T.relatedTarget = _),
              (v = T)),
            (_ = v),
            j && b)
          )
            t: {
              for (T = j, f = b, d = 0, y = T; y; y = hr(y)) d++;
              for (y = 0, v = f; v; v = hr(v)) y++;
              for (; 0 < d - y; ) ((T = hr(T)), d--);
              for (; 0 < y - d; ) ((f = hr(f)), y--);
              for (; d--; ) {
                if (T === f || (f !== null && T === f.alternate)) break t;
                ((T = hr(T)), (f = hr(f)));
              }
              T = null;
            }
          else T = null;
          (j !== null && lc(m, p, j, T, !1),
            b !== null && _ !== null && lc(m, _, b, T, !0));
        }
      }
      e: {
        if (
          ((p = h ? wr(h) : window),
          (j = p.nodeName && p.nodeName.toLowerCase()),
          j === "select" || (j === "input" && p.type === "file"))
        )
          var I = sm;
        else if (Ji(p))
          if (Ld) I = im;
          else {
            I = lm;
            var S = om;
          }
        else
          (j = p.nodeName) &&
            j.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (I = am);
        if (I && (I = I(e, h))) {
          Od(m, I, n, x);
          break e;
        }
        (S && S(e, p, h),
          e === "focusout" &&
            (S = p._wrapperState) &&
            S.controlled &&
            p.type === "number" &&
            Yl(p, "number", p.value));
      }
      switch (((S = h ? wr(h) : window), e)) {
        case "focusin":
          (Ji(S) || S.contentEditable === "true") &&
            ((vr = S), (la = h), (xs = null));
          break;
        case "focusout":
          xs = la = vr = null;
          break;
        case "mousedown":
          aa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((aa = !1), rc(m, n, x));
          break;
        case "selectionchange":
          if (um) break;
        case "keydown":
        case "keyup":
          rc(m, n, x);
      }
      var E;
      if (Ja)
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
        yr
          ? Ad(e, n) && (F = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (F = "onCompositionStart");
      (F &&
        ($d &&
          n.locale !== "ko" &&
          (yr || F !== "onCompositionStart"
            ? F === "onCompositionEnd" && yr && (E = Rd())
            : ((Tn = x),
              (Qa = "value" in Tn ? Tn.value : Tn.textContent),
              (yr = !0))),
        (S = Io(h, F)),
        0 < S.length &&
          ((F = new Yi(F, e, null, n, x)),
          m.push({ event: F, listeners: S }),
          E ? (F.data = E) : ((E = Ud(n)), E !== null && (F.data = E)))),
        (E = Zp ? em(e, n) : tm(e, n)) &&
          ((h = Io(h, "onBeforeInput")),
          0 < h.length &&
            ((x = new Yi("onBeforeInput", "beforeinput", null, n, x)),
            m.push({ event: x, listeners: h }),
            (x.data = E))));
    }
    Qd(m, t);
  });
}
function Ps(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Io(e, t) {
  for (var n = t + "Capture", s = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    (o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = Cs(e, n)),
      l != null && s.unshift(Ps(e, l, o)),
      (l = Cs(e, t)),
      l != null && s.push(Ps(e, l, o))),
      (e = e.return));
  }
  return s;
}
function hr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function lc(e, t, n, s, o) {
  for (var l = t._reactName, a = []; n !== null && n !== s; ) {
    var i = n,
      c = i.alternate,
      h = i.stateNode;
    if (c !== null && c === s) break;
    (i.tag === 5 &&
      h !== null &&
      ((i = h),
      o
        ? ((c = Cs(n, l)), c != null && a.unshift(Ps(n, c, i)))
        : o || ((c = Cs(n, l)), c != null && a.push(Ps(n, c, i)))),
      (n = n.return));
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var hm = /\r\n?/g,
  gm = /\u0000|\uFFFD/g;
function ac(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      hm,
      `
`,
    )
    .replace(gm, "");
}
function to(e, t, n) {
  if (((t = ac(t)), ac(e) !== t && n)) throw Error(ue(425));
}
function Eo() {}
var ia = null,
  ca = null;
function da(e, t) {
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
var ua = typeof setTimeout == "function" ? setTimeout : void 0,
  xm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ic = typeof Promise == "function" ? Promise : void 0,
  ym =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ic < "u"
        ? function (e) {
            return ic.resolve(null).then(e).catch(vm);
          }
        : ua;
function vm(e) {
  setTimeout(function () {
    throw e;
  });
}
function El(e, t) {
  var n = t,
    s = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (s === 0) {
          (e.removeChild(o), ks(t));
          return;
        }
        s--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || s++;
    n = o;
  } while (n);
  ks(t);
}
function Ln(e) {
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
function cc(e) {
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
var qr = Math.random().toString(36).slice(2),
  un = "__reactFiber$" + qr,
  Ts = "__reactProps$" + qr,
  Nn = "__reactContainer$" + qr,
  fa = "__reactEvents$" + qr,
  bm = "__reactListeners$" + qr,
  wm = "__reactHandles$" + qr;
function Zn(e) {
  var t = e[un];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Nn] || n[un])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = cc(e); e !== null; ) {
          if ((n = e[un])) return n;
          e = cc(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Fs(e) {
  return (
    (e = e[un] || e[Nn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function wr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(ue(33));
}
function Zo(e) {
  return e[Ts] || null;
}
var pa = [],
  Nr = -1;
function Wn(e) {
  return { current: e };
}
function et(e) {
  0 > Nr || ((e.current = pa[Nr]), (pa[Nr] = null), Nr--);
}
function Je(e, t) {
  (Nr++, (pa[Nr] = e.current), (e.current = t));
}
var Vn = {},
  Ct = Wn(Vn),
  Ut = Wn(!1),
  sr = Vn;
function Ur(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Vn;
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
function Po() {
  (et(Ut), et(Ct));
}
function dc(e, t, n) {
  if (Ct.current !== Vn) throw Error(ue(168));
  (Je(Ct, t), Je(Ut, n));
}
function Kd(e, t, n) {
  var s = e.stateNode;
  if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
    return n;
  s = s.getChildContext();
  for (var o in s) if (!(o in t)) throw Error(ue(108, op(e) || "Unknown", o));
  return lt({}, n, s);
}
function To(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vn),
    (sr = Ct.current),
    Je(Ct, e),
    Je(Ut, Ut.current),
    !0
  );
}
function uc(e, t, n) {
  var s = e.stateNode;
  if (!s) throw Error(ue(169));
  (n
    ? ((e = Kd(e, t, sr)),
      (s.__reactInternalMemoizedMergedChildContext = e),
      et(Ut),
      et(Ct),
      Je(Ct, e))
    : et(Ut),
    Je(Ut, n));
}
var xn = null,
  el = !1,
  Pl = !1;
function Jd(e) {
  xn === null ? (xn = [e]) : xn.push(e);
}
function Nm(e) {
  ((el = !0), Jd(e));
}
function Yn() {
  if (!Pl && xn !== null) {
    Pl = !0;
    var e = 0,
      t = Qe;
    try {
      var n = xn;
      for (Qe = 1; e < n.length; e++) {
        var s = n[e];
        do s = s(!0);
        while (s !== null);
      }
      ((xn = null), (el = !1));
    } catch (o) {
      throw (xn !== null && (xn = xn.slice(e + 1)), jd(Va, Yn), o);
    } finally {
      ((Qe = t), (Pl = !1));
    }
  }
  return null;
}
var jr = [],
  Sr = 0,
  Ro = null,
  $o = 0,
  Wt = [],
  Yt = 0,
  or = null,
  yn = 1,
  vn = "";
function Kn(e, t) {
  ((jr[Sr++] = $o), (jr[Sr++] = Ro), (Ro = e), ($o = t));
}
function Zd(e, t, n) {
  ((Wt[Yt++] = yn), (Wt[Yt++] = vn), (Wt[Yt++] = or), (or = e));
  var s = yn;
  e = vn;
  var o = 32 - sn(s) - 1;
  ((s &= ~(1 << o)), (n += 1));
  var l = 32 - sn(t) + o;
  if (30 < l) {
    var a = o - (o % 5);
    ((l = (s & ((1 << a) - 1)).toString(32)),
      (s >>= a),
      (o -= a),
      (yn = (1 << (32 - sn(t) + o)) | (n << o) | s),
      (vn = l + e));
  } else ((yn = (1 << l) | (n << o) | s), (vn = e));
}
function ei(e) {
  e.return !== null && (Kn(e, 1), Zd(e, 1, 0));
}
function ti(e) {
  for (; e === Ro; )
    ((Ro = jr[--Sr]), (jr[Sr] = null), ($o = jr[--Sr]), (jr[Sr] = null));
  for (; e === or; )
    ((or = Wt[--Yt]),
      (Wt[Yt] = null),
      (vn = Wt[--Yt]),
      (Wt[Yt] = null),
      (yn = Wt[--Yt]),
      (Wt[Yt] = null));
}
var Ft = null,
  Bt = null,
  rt = !1,
  rn = null;
function eu(e, t) {
  var n = Qt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function fc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ft = e), (Bt = Ln(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ft = e), (Bt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = or !== null ? { id: yn, overflow: vn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Qt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ft = e),
            (Bt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ma(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ha(e) {
  if (rt) {
    var t = Bt;
    if (t) {
      var n = t;
      if (!fc(e, t)) {
        if (ma(e)) throw Error(ue(418));
        t = Ln(n.nextSibling);
        var s = Ft;
        t && fc(e, t)
          ? eu(s, n)
          : ((e.flags = (e.flags & -4097) | 2), (rt = !1), (Ft = e));
      }
    } else {
      if (ma(e)) throw Error(ue(418));
      ((e.flags = (e.flags & -4097) | 2), (rt = !1), (Ft = e));
    }
  }
}
function pc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ft = e;
}
function no(e) {
  if (e !== Ft) return !1;
  if (!rt) return (pc(e), (rt = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !da(e.type, e.memoizedProps))),
    t && (t = Bt))
  ) {
    if (ma(e)) throw (tu(), Error(ue(418)));
    for (; t; ) (eu(e, t), (t = Ln(t.nextSibling)));
  }
  if ((pc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(ue(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Bt = Ln(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Bt = null;
    }
  } else Bt = Ft ? Ln(e.stateNode.nextSibling) : null;
  return !0;
}
function tu() {
  for (var e = Bt; e; ) e = Ln(e.nextSibling);
}
function Or() {
  ((Bt = Ft = null), (rt = !1));
}
function ni(e) {
  rn === null ? (rn = [e]) : rn.push(e);
}
var jm = Cn.ReactCurrentBatchConfig;
function os(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(ue(309));
        var s = n.stateNode;
      }
      if (!s) throw Error(ue(147, e));
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
    if (typeof e != "string") throw Error(ue(284));
    if (!n._owner) throw Error(ue(290, e));
  }
  return e;
}
function ro(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      ue(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function mc(e) {
  var t = e._init;
  return t(e._payload);
}
function nu(e) {
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
    return ((f = Fn(f, d)), (f.index = 0), (f.sibling = null), f);
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
      ? ((d = Ll(y, f.mode, v)), (d.return = f), d)
      : ((d = o(d, y)), (d.return = f), d);
  }
  function c(f, d, y, v) {
    var I = y.type;
    return I === xr
      ? x(f, d, y.props.children, v, y.key)
      : d !== null &&
          (d.elementType === I ||
            (typeof I == "object" &&
              I !== null &&
              I.$$typeof === Mn &&
              mc(I) === d.type))
        ? ((v = o(d, y.props)), (v.ref = os(f, d, y)), (v.return = f), v)
        : ((v = wo(y.type, y.key, y.props, null, f.mode, v)),
          (v.ref = os(f, d, y)),
          (v.return = f),
          v);
  }
  function h(f, d, y, v) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== y.containerInfo ||
      d.stateNode.implementation !== y.implementation
      ? ((d = Gl(y, f.mode, v)), (d.return = f), d)
      : ((d = o(d, y.children || [])), (d.return = f), d);
  }
  function x(f, d, y, v, I) {
    return d === null || d.tag !== 7
      ? ((d = rr(y, f.mode, v, I)), (d.return = f), d)
      : ((d = o(d, y)), (d.return = f), d);
  }
  function m(f, d, y) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return ((d = Ll("" + d, f.mode, y)), (d.return = f), d);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case qs:
          return (
            (y = wo(d.type, d.key, d.props, null, f.mode, y)),
            (y.ref = os(f, null, d)),
            (y.return = f),
            y
          );
        case gr:
          return ((d = Gl(d, f.mode, y)), (d.return = f), d);
        case Mn:
          var v = d._init;
          return m(f, v(d._payload), y);
      }
      if (ds(d) || es(d))
        return ((d = rr(d, f.mode, y, null)), (d.return = f), d);
      ro(f, d);
    }
    return null;
  }
  function p(f, d, y, v) {
    var I = d !== null ? d.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return I !== null ? null : i(f, d, "" + y, v);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case qs:
          return y.key === I ? c(f, d, y, v) : null;
        case gr:
          return y.key === I ? h(f, d, y, v) : null;
        case Mn:
          return ((I = y._init), p(f, d, I(y._payload), v));
      }
      if (ds(y) || es(y)) return I !== null ? null : x(f, d, y, v, null);
      ro(f, y);
    }
    return null;
  }
  function j(f, d, y, v, I) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return ((f = f.get(y) || null), i(d, f, "" + v, I));
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case qs:
          return (
            (f = f.get(v.key === null ? y : v.key) || null),
            c(d, f, v, I)
          );
        case gr:
          return (
            (f = f.get(v.key === null ? y : v.key) || null),
            h(d, f, v, I)
          );
        case Mn:
          var S = v._init;
          return j(f, d, y, S(v._payload), I);
      }
      if (ds(v) || es(v)) return ((f = f.get(y) || null), x(d, f, v, I, null));
      ro(d, v);
    }
    return null;
  }
  function b(f, d, y, v) {
    for (
      var I = null, S = null, E = d, F = (d = 0), M = null;
      E !== null && F < y.length;
      F++
    ) {
      E.index > F ? ((M = E), (E = null)) : (M = E.sibling);
      var U = p(f, E, y[F], v);
      if (U === null) {
        E === null && (E = M);
        break;
      }
      (e && E && U.alternate === null && t(f, E),
        (d = l(U, d, F)),
        S === null ? (I = U) : (S.sibling = U),
        (S = U),
        (E = M));
    }
    if (F === y.length) return (n(f, E), rt && Kn(f, F), I);
    if (E === null) {
      for (; F < y.length; F++)
        ((E = m(f, y[F], v)),
          E !== null &&
            ((d = l(E, d, F)),
            S === null ? (I = E) : (S.sibling = E),
            (S = E)));
      return (rt && Kn(f, F), I);
    }
    for (E = s(f, E); F < y.length; F++)
      ((M = j(E, f, F, y[F], v)),
        M !== null &&
          (e && M.alternate !== null && E.delete(M.key === null ? F : M.key),
          (d = l(M, d, F)),
          S === null ? (I = M) : (S.sibling = M),
          (S = M)));
    return (
      e &&
        E.forEach(function (se) {
          return t(f, se);
        }),
      rt && Kn(f, F),
      I
    );
  }
  function T(f, d, y, v) {
    var I = es(y);
    if (typeof I != "function") throw Error(ue(150));
    if (((y = I.call(y)), y == null)) throw Error(ue(151));
    for (
      var S = (I = null), E = d, F = (d = 0), M = null, U = y.next();
      E !== null && !U.done;
      F++, U = y.next()
    ) {
      E.index > F ? ((M = E), (E = null)) : (M = E.sibling);
      var se = p(f, E, U.value, v);
      if (se === null) {
        E === null && (E = M);
        break;
      }
      (e && E && se.alternate === null && t(f, E),
        (d = l(se, d, F)),
        S === null ? (I = se) : (S.sibling = se),
        (S = se),
        (E = M));
    }
    if (U.done) return (n(f, E), rt && Kn(f, F), I);
    if (E === null) {
      for (; !U.done; F++, U = y.next())
        ((U = m(f, U.value, v)),
          U !== null &&
            ((d = l(U, d, F)),
            S === null ? (I = U) : (S.sibling = U),
            (S = U)));
      return (rt && Kn(f, F), I);
    }
    for (E = s(f, E); !U.done; F++, U = y.next())
      ((U = j(E, f, F, U.value, v)),
        U !== null &&
          (e && U.alternate !== null && E.delete(U.key === null ? F : U.key),
          (d = l(U, d, F)),
          S === null ? (I = U) : (S.sibling = U),
          (S = U)));
    return (
      e &&
        E.forEach(function (be) {
          return t(f, be);
        }),
      rt && Kn(f, F),
      I
    );
  }
  function _(f, d, y, v) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === xr &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case qs:
          e: {
            for (var I = y.key, S = d; S !== null; ) {
              if (S.key === I) {
                if (((I = y.type), I === xr)) {
                  if (S.tag === 7) {
                    (n(f, S.sibling),
                      (d = o(S, y.props.children)),
                      (d.return = f),
                      (f = d));
                    break e;
                  }
                } else if (
                  S.elementType === I ||
                  (typeof I == "object" &&
                    I !== null &&
                    I.$$typeof === Mn &&
                    mc(I) === S.type)
                ) {
                  (n(f, S.sibling),
                    (d = o(S, y.props)),
                    (d.ref = os(f, S, y)),
                    (d.return = f),
                    (f = d));
                  break e;
                }
                n(f, S);
                break;
              } else t(f, S);
              S = S.sibling;
            }
            y.type === xr
              ? ((d = rr(y.props.children, f.mode, v, y.key)),
                (d.return = f),
                (f = d))
              : ((v = wo(y.type, y.key, y.props, null, f.mode, v)),
                (v.ref = os(f, d, y)),
                (v.return = f),
                (f = v));
          }
          return a(f);
        case gr:
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
            ((d = Gl(y, f.mode, v)), (d.return = f), (f = d));
          }
          return a(f);
        case Mn:
          return ((S = y._init), _(f, d, S(y._payload), v));
      }
      if (ds(y)) return b(f, d, y, v);
      if (es(y)) return T(f, d, y, v);
      ro(f, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = o(d, y)), (d.return = f), (f = d))
          : (n(f, d), (d = Ll(y, f.mode, v)), (d.return = f), (f = d)),
        a(f))
      : n(f, d);
  }
  return _;
}
var Lr = nu(!0),
  ru = nu(!1),
  Ao = Wn(null),
  Uo = null,
  Cr = null,
  ri = null;
function si() {
  ri = Cr = Uo = null;
}
function oi(e) {
  var t = Ao.current;
  (et(Ao), (e._currentValue = t));
}
function ga(e, t, n) {
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
function Rr(e, t) {
  ((Uo = e),
    (ri = Cr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Rt = !0), (e.firstContext = null)));
}
function Kt(e) {
  var t = e._currentValue;
  if (ri !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Cr === null)) {
      if (Uo === null) throw Error(ue(308));
      ((Cr = e), (Uo.dependencies = { lanes: 0, firstContext: e }));
    } else Cr = Cr.next = e;
  return t;
}
var er = null;
function li(e) {
  er === null ? (er = [e]) : er.push(e);
}
function su(e, t, n, s) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), li(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    jn(e, s)
  );
}
function jn(e, t) {
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
var In = !1;
function ai(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ou(e, t) {
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
function bn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Gn(e, t, n) {
  var s = e.updateQueue;
  if (s === null) return null;
  if (((s = s.shared), Ve & 2)) {
    var o = s.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (s.pending = t),
      jn(e, n)
    );
  }
  return (
    (o = s.interleaved),
    o === null ? ((t.next = t), li(s)) : ((t.next = o.next), (o.next = t)),
    (s.interleaved = t),
    jn(e, n)
  );
}
function ho(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var s = t.lanes;
    ((s &= e.pendingLanes), (n |= s), (t.lanes = n), qa(e, n));
  }
}
function hc(e, t) {
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
function Oo(e, t, n, s) {
  var o = e.updateQueue;
  In = !1;
  var l = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    i = o.shared.pending;
  if (i !== null) {
    o.shared.pending = null;
    var c = i,
      h = c.next;
    ((c.next = null), a === null ? (l = h) : (a.next = h), (a = c));
    var x = e.alternate;
    x !== null &&
      ((x = x.updateQueue),
      (i = x.lastBaseUpdate),
      i !== a &&
        (i === null ? (x.firstBaseUpdate = h) : (i.next = h),
        (x.lastBaseUpdate = c)));
  }
  if (l !== null) {
    var m = o.baseState;
    ((a = 0), (x = h = c = null), (i = l));
    do {
      var p = i.lane,
        j = i.eventTime;
      if ((s & p) === p) {
        x !== null &&
          (x = x.next =
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
              In = !0;
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
          x === null ? ((h = x = j), (c = m)) : (x = x.next = j),
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
      (x === null && (c = m),
      (o.baseState = c),
      (o.firstBaseUpdate = h),
      (o.lastBaseUpdate = x),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do ((a |= o.lane), (o = o.next));
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    ((ar |= a), (e.lanes = a), (e.memoizedState = m));
  }
}
function gc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var s = e[t],
        o = s.callback;
      if (o !== null) {
        if (((s.callback = null), (s = n), typeof o != "function"))
          throw Error(ue(191, o));
        o.call(s);
      }
    }
}
var Hs = {},
  pn = Wn(Hs),
  Rs = Wn(Hs),
  $s = Wn(Hs);
function tr(e) {
  if (e === Hs) throw Error(ue(174));
  return e;
}
function ii(e, t) {
  switch ((Je($s, t), Je(Rs, e), Je(pn, Hs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Xl(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Xl(t, e)));
  }
  (et(pn), Je(pn, t));
}
function Gr() {
  (et(pn), et(Rs), et($s));
}
function lu(e) {
  tr($s.current);
  var t = tr(pn.current),
    n = Xl(t, e.type);
  t !== n && (Je(Rs, e), Je(pn, n));
}
function ci(e) {
  Rs.current === e && (et(pn), et(Rs));
}
var st = Wn(0);
function Lo(e) {
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
var Tl = [];
function di() {
  for (var e = 0; e < Tl.length; e++)
    Tl[e]._workInProgressVersionPrimary = null;
  Tl.length = 0;
}
var go = Cn.ReactCurrentDispatcher,
  Rl = Cn.ReactCurrentBatchConfig,
  lr = 0,
  ot = null,
  mt = null,
  xt = null,
  Go = !1,
  ys = !1,
  As = 0,
  Sm = 0;
function Nt() {
  throw Error(ue(321));
}
function ui(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ln(e[n], t[n])) return !1;
  return !0;
}
function fi(e, t, n, s, o, l) {
  if (
    ((lr = l),
    (ot = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (go.current = e === null || e.memoizedState === null ? km : Mm),
    (e = n(s, o)),
    ys)
  ) {
    l = 0;
    do {
      if (((ys = !1), (As = 0), 25 <= l)) throw Error(ue(301));
      ((l += 1),
        (xt = mt = null),
        (t.updateQueue = null),
        (go.current = Im),
        (e = n(s, o)));
    } while (ys);
  }
  if (
    ((go.current = zo),
    (t = mt !== null && mt.next !== null),
    (lr = 0),
    (xt = mt = ot = null),
    (Go = !1),
    t)
  )
    throw Error(ue(300));
  return e;
}
function pi() {
  var e = As !== 0;
  return ((As = 0), e);
}
function dn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (xt === null ? (ot.memoizedState = xt = e) : (xt = xt.next = e), xt);
}
function Jt() {
  if (mt === null) {
    var e = ot.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = mt.next;
  var t = xt === null ? ot.memoizedState : xt.next;
  if (t !== null) ((xt = t), (mt = e));
  else {
    if (e === null) throw Error(ue(310));
    ((mt = e),
      (e = {
        memoizedState: mt.memoizedState,
        baseState: mt.baseState,
        baseQueue: mt.baseQueue,
        queue: mt.queue,
        next: null,
      }),
      xt === null ? (ot.memoizedState = xt = e) : (xt = xt.next = e));
  }
  return xt;
}
function Us(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function $l(e) {
  var t = Jt(),
    n = t.queue;
  if (n === null) throw Error(ue(311));
  n.lastRenderedReducer = e;
  var s = mt,
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
      var x = h.lane;
      if ((lr & x) === x)
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
          lane: x,
          action: h.action,
          hasEagerState: h.hasEagerState,
          eagerState: h.eagerState,
          next: null,
        };
        (c === null ? ((i = c = m), (a = s)) : (c = c.next = m),
          (ot.lanes |= x),
          (ar |= x));
      }
      h = h.next;
    } while (h !== null && h !== l);
    (c === null ? (a = s) : (c.next = i),
      ln(s, t.memoizedState) || (Rt = !0),
      (t.memoizedState = s),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = s));
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do ((l = o.lane), (ot.lanes |= l), (ar |= l), (o = o.next));
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Al(e) {
  var t = Jt(),
    n = t.queue;
  if (n === null) throw Error(ue(311));
  n.lastRenderedReducer = e;
  var s = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do ((l = e(l, a.action)), (a = a.next));
    while (a !== o);
    (ln(l, t.memoizedState) || (Rt = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l));
  }
  return [l, s];
}
function au() {}
function iu(e, t) {
  var n = ot,
    s = Jt(),
    o = t(),
    l = !ln(s.memoizedState, o);
  if (
    (l && ((s.memoizedState = o), (Rt = !0)),
    (s = s.queue),
    mi(uu.bind(null, n, s, e), [e]),
    s.getSnapshot !== t || l || (xt !== null && xt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Os(9, du.bind(null, n, s, o, t), void 0, null),
      yt === null)
    )
      throw Error(ue(349));
    lr & 30 || cu(n, t, o);
  }
  return o;
}
function cu(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ot.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ot.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function du(e, t, n, s) {
  ((t.value = n), (t.getSnapshot = s), fu(t) && pu(e));
}
function uu(e, t, n) {
  return n(function () {
    fu(t) && pu(e);
  });
}
function fu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ln(e, n);
  } catch {
    return !0;
  }
}
function pu(e) {
  var t = jn(e, 1);
  t !== null && on(t, e, 1, -1);
}
function xc(e) {
  var t = dn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Us,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = _m.bind(null, ot, e)),
    [t.memoizedState, e]
  );
}
function Os(e, t, n, s) {
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
function mu() {
  return Jt().memoizedState;
}
function xo(e, t, n, s) {
  var o = dn();
  ((ot.flags |= e),
    (o.memoizedState = Os(1 | t, n, void 0, s === void 0 ? null : s)));
}
function tl(e, t, n, s) {
  var o = Jt();
  s = s === void 0 ? null : s;
  var l = void 0;
  if (mt !== null) {
    var a = mt.memoizedState;
    if (((l = a.destroy), s !== null && ui(s, a.deps))) {
      o.memoizedState = Os(t, n, l, s);
      return;
    }
  }
  ((ot.flags |= e), (o.memoizedState = Os(1 | t, n, l, s)));
}
function yc(e, t) {
  return xo(8390656, 8, e, t);
}
function mi(e, t) {
  return tl(2048, 8, e, t);
}
function hu(e, t) {
  return tl(4, 2, e, t);
}
function gu(e, t) {
  return tl(4, 4, e, t);
}
function xu(e, t) {
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
function yu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    tl(4, 4, xu.bind(null, t, e), n)
  );
}
function hi() {}
function vu(e, t) {
  var n = Jt();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && ui(t, s[1])
    ? s[0]
    : ((n.memoizedState = [e, t]), e);
}
function bu(e, t) {
  var n = Jt();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && ui(t, s[1])
    ? s[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function wu(e, t, n) {
  return lr & 21
    ? (ln(n, t) || ((n = Dd()), (ot.lanes |= n), (ar |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Rt = !0)), (e.memoizedState = n));
}
function Cm(e, t) {
  var n = Qe;
  ((Qe = n !== 0 && 4 > n ? n : 4), e(!0));
  var s = Rl.transition;
  Rl.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((Qe = n), (Rl.transition = s));
  }
}
function Nu() {
  return Jt().memoizedState;
}
function Dm(e, t, n) {
  var s = Bn(e);
  if (
    ((n = {
      lane: s,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ju(e))
  )
    Su(t, n);
  else if (((n = su(e, t, n, s)), n !== null)) {
    var o = _t();
    (on(n, e, s, o), Cu(n, t, s));
  }
}
function _m(e, t, n) {
  var s = Bn(e),
    o = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ju(e)) Su(t, o);
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
        if (((o.hasEagerState = !0), (o.eagerState = i), ln(i, a))) {
          var c = t.interleaved;
          (c === null
            ? ((o.next = o), li(t))
            : ((o.next = c.next), (c.next = o)),
            (t.interleaved = o));
          return;
        }
      } catch {
      } finally {
      }
    ((n = su(e, t, o, s)),
      n !== null && ((o = _t()), on(n, e, s, o), Cu(n, t, s)));
  }
}
function ju(e) {
  var t = e.alternate;
  return e === ot || (t !== null && t === ot);
}
function Su(e, t) {
  ys = Go = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Cu(e, t, n) {
  if (n & 4194240) {
    var s = t.lanes;
    ((s &= e.pendingLanes), (n |= s), (t.lanes = n), qa(e, n));
  }
}
var zo = {
    readContext: Kt,
    useCallback: Nt,
    useContext: Nt,
    useEffect: Nt,
    useImperativeHandle: Nt,
    useInsertionEffect: Nt,
    useLayoutEffect: Nt,
    useMemo: Nt,
    useReducer: Nt,
    useRef: Nt,
    useState: Nt,
    useDebugValue: Nt,
    useDeferredValue: Nt,
    useTransition: Nt,
    useMutableSource: Nt,
    useSyncExternalStore: Nt,
    useId: Nt,
    unstable_isNewReconciler: !1,
  },
  km = {
    readContext: Kt,
    useCallback: function (e, t) {
      return ((dn().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Kt,
    useEffect: yc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        xo(4194308, 4, xu.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return xo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return xo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = dn();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var s = dn();
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
        (e = e.dispatch = Dm.bind(null, ot, e)),
        [s.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = dn();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: xc,
    useDebugValue: hi,
    useDeferredValue: function (e) {
      return (dn().memoizedState = e);
    },
    useTransition: function () {
      var e = xc(!1),
        t = e[0];
      return ((e = Cm.bind(null, e[1])), (dn().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var s = ot,
        o = dn();
      if (rt) {
        if (n === void 0) throw Error(ue(407));
        n = n();
      } else {
        if (((n = t()), yt === null)) throw Error(ue(349));
        lr & 30 || cu(s, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        yc(uu.bind(null, s, l, e), [e]),
        (s.flags |= 2048),
        Os(9, du.bind(null, s, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = dn(),
        t = yt.identifierPrefix;
      if (rt) {
        var n = vn,
          s = yn;
        ((n = (s & ~(1 << (32 - sn(s) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = As++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Sm++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Mm = {
    readContext: Kt,
    useCallback: vu,
    useContext: Kt,
    useEffect: mi,
    useImperativeHandle: yu,
    useInsertionEffect: hu,
    useLayoutEffect: gu,
    useMemo: bu,
    useReducer: $l,
    useRef: mu,
    useState: function () {
      return $l(Us);
    },
    useDebugValue: hi,
    useDeferredValue: function (e) {
      var t = Jt();
      return wu(t, mt.memoizedState, e);
    },
    useTransition: function () {
      var e = $l(Us)[0],
        t = Jt().memoizedState;
      return [e, t];
    },
    useMutableSource: au,
    useSyncExternalStore: iu,
    useId: Nu,
    unstable_isNewReconciler: !1,
  },
  Im = {
    readContext: Kt,
    useCallback: vu,
    useContext: Kt,
    useEffect: mi,
    useImperativeHandle: yu,
    useInsertionEffect: hu,
    useLayoutEffect: gu,
    useMemo: bu,
    useReducer: Al,
    useRef: mu,
    useState: function () {
      return Al(Us);
    },
    useDebugValue: hi,
    useDeferredValue: function (e) {
      var t = Jt();
      return mt === null ? (t.memoizedState = e) : wu(t, mt.memoizedState, e);
    },
    useTransition: function () {
      var e = Al(Us)[0],
        t = Jt().memoizedState;
      return [e, t];
    },
    useMutableSource: au,
    useSyncExternalStore: iu,
    useId: Nu,
    unstable_isNewReconciler: !1,
  };
function tn(e, t) {
  if (e && e.defaultProps) {
    ((t = lt({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function xa(e, t, n, s) {
  ((t = e.memoizedState),
    (n = n(s, t)),
    (n = n == null ? t : lt({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var nl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? dr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var s = _t(),
      o = Bn(e),
      l = bn(s, o);
    ((l.payload = t),
      n != null && (l.callback = n),
      (t = Gn(e, l, o)),
      t !== null && (on(t, e, o, s), ho(t, e, o)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var s = _t(),
      o = Bn(e),
      l = bn(s, o);
    ((l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Gn(e, l, o)),
      t !== null && (on(t, e, o, s), ho(t, e, o)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = _t(),
      s = Bn(e),
      o = bn(n, s);
    ((o.tag = 2),
      t != null && (o.callback = t),
      (t = Gn(e, o, s)),
      t !== null && (on(t, e, s, n), ho(t, e, s)));
  },
};
function vc(e, t, n, s, o, l, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(s, l, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Is(n, s) || !Is(o, l)
        : !0
  );
}
function Du(e, t, n) {
  var s = !1,
    o = Vn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Kt(l))
      : ((o = Ot(t) ? sr : Ct.current),
        (s = t.contextTypes),
        (l = (s = s != null) ? Ur(e, o) : Vn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = nl),
    (e.stateNode = t),
    (t._reactInternals = e),
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function bc(e, t, n, s) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, s),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, s),
    t.state !== e && nl.enqueueReplaceState(t, t.state, null));
}
function ya(e, t, n, s) {
  var o = e.stateNode;
  ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), ai(e));
  var l = t.contextType;
  (typeof l == "object" && l !== null
    ? (o.context = Kt(l))
    : ((l = Ot(t) ? sr : Ct.current), (o.context = Ur(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (xa(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && nl.enqueueReplaceState(o, o.state, null),
      Oo(e, n, o, s),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308));
}
function zr(e, t) {
  try {
    var n = "",
      s = t;
    do ((n += sp(s)), (s = s.return));
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
function Ul(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function va(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Em = typeof WeakMap == "function" ? WeakMap : Map;
function _u(e, t, n) {
  ((n = bn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var s = t.value;
  return (
    (n.callback = function () {
      (Fo || ((Fo = !0), (Ma = s)), va(e, t));
    }),
    n
  );
}
function ku(e, t, n) {
  ((n = bn(-1, n)), (n.tag = 3));
  var s = e.type.getDerivedStateFromError;
  if (typeof s == "function") {
    var o = t.value;
    ((n.payload = function () {
      return s(o);
    }),
      (n.callback = function () {
        va(e, t);
      }));
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        (va(e, t),
          typeof s != "function" &&
            (zn === null ? (zn = new Set([this])) : zn.add(this)));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function wc(e, t, n) {
  var s = e.pingCache;
  if (s === null) {
    s = e.pingCache = new Em();
    var o = new Set();
    s.set(t, o);
  } else ((o = s.get(t)), o === void 0 && ((o = new Set()), s.set(t, o)));
  o.has(n) || (o.add(n), (e = Vm.bind(null, e, t, n)), t.then(e, e));
}
function Nc(e) {
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
function jc(e, t, n, s, o) {
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
              : ((t = bn(-1, 1)), (t.tag = 2), Gn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Pm = Cn.ReactCurrentOwner,
  Rt = !1;
function Dt(e, t, n, s) {
  t.child = e === null ? ru(t, null, n, s) : Lr(t, e.child, n, s);
}
function Sc(e, t, n, s, o) {
  n = n.render;
  var l = t.ref;
  return (
    Rr(t, o),
    (s = fi(e, t, n, s, l, o)),
    (n = pi()),
    e !== null && !Rt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Sn(e, t, o))
      : (rt && n && ei(t), (t.flags |= 1), Dt(e, t, s, o), t.child)
  );
}
function Cc(e, t, n, s, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !ji(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Mu(e, t, l, s, o))
      : ((e = wo(n.type, null, s, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var a = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Is), n(a, s) && e.ref === t.ref)
    )
      return Sn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Fn(l, s)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Mu(e, t, n, s, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Is(l, s) && e.ref === t.ref)
      if (((Rt = !1), (t.pendingProps = s = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (Rt = !0);
      else return ((t.lanes = e.lanes), Sn(e, t, o));
  }
  return ba(e, t, n, s, o);
}
function Iu(e, t, n) {
  var s = t.pendingProps,
    o = s.children,
    l = e !== null ? e.memoizedState : null;
  if (s.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Je(_r, zt),
        (zt |= n));
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
          Je(_r, zt),
          (zt |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (s = l !== null ? l.baseLanes : n),
        Je(_r, zt),
        (zt |= s));
    }
  else
    (l !== null ? ((s = l.baseLanes | n), (t.memoizedState = null)) : (s = n),
      Je(_r, zt),
      (zt |= s));
  return (Dt(e, t, o, n), t.child);
}
function Eu(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ba(e, t, n, s, o) {
  var l = Ot(n) ? sr : Ct.current;
  return (
    (l = Ur(t, l)),
    Rr(t, o),
    (n = fi(e, t, n, s, l, o)),
    (s = pi()),
    e !== null && !Rt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Sn(e, t, o))
      : (rt && s && ei(t), (t.flags |= 1), Dt(e, t, n, o), t.child)
  );
}
function Dc(e, t, n, s, o) {
  if (Ot(n)) {
    var l = !0;
    To(t);
  } else l = !1;
  if ((Rr(t, o), t.stateNode === null))
    (yo(e, t), Du(t, n, s), ya(t, n, s, o), (s = !0));
  else if (e === null) {
    var a = t.stateNode,
      i = t.memoizedProps;
    a.props = i;
    var c = a.context,
      h = n.contextType;
    typeof h == "object" && h !== null
      ? (h = Kt(h))
      : ((h = Ot(n) ? sr : Ct.current), (h = Ur(t, h)));
    var x = n.getDerivedStateFromProps,
      m =
        typeof x == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    (m ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== s || c !== h) && bc(t, a, s, h)),
      (In = !1));
    var p = t.memoizedState;
    ((a.state = p),
      Oo(t, s, a, o),
      (c = t.memoizedState),
      i !== s || p !== c || Ut.current || In
        ? (typeof x == "function" && (xa(t, n, x, s), (c = t.memoizedState)),
          (i = In || vc(t, n, i, s, p, c, h))
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
      ou(e, t),
      (i = t.memoizedProps),
      (h = t.type === t.elementType ? i : tn(t.type, i)),
      (a.props = h),
      (m = t.pendingProps),
      (p = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = Kt(c))
        : ((c = Ot(n) ? sr : Ct.current), (c = Ur(t, c))));
    var j = n.getDerivedStateFromProps;
    ((x =
      typeof j == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== m || p !== c) && bc(t, a, s, c)),
      (In = !1),
      (p = t.memoizedState),
      (a.state = p),
      Oo(t, s, a, o));
    var b = t.memoizedState;
    i !== m || p !== b || Ut.current || In
      ? (typeof j == "function" && (xa(t, n, j, s), (b = t.memoizedState)),
        (h = In || vc(t, n, h, s, p, b, c) || !1)
          ? (x ||
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
  return wa(e, t, n, s, l, o);
}
function wa(e, t, n, s, o, l) {
  Eu(e, t);
  var a = (t.flags & 128) !== 0;
  if (!s && !a) return (o && uc(t, n, !1), Sn(e, t, l));
  ((s = t.stateNode), (Pm.current = t));
  var i =
    a && typeof n.getDerivedStateFromError != "function" ? null : s.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Lr(t, e.child, null, l)), (t.child = Lr(t, null, i, l)))
      : Dt(e, t, i, l),
    (t.memoizedState = s.state),
    o && uc(t, n, !0),
    t.child
  );
}
function Pu(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? dc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && dc(e, t.context, !1),
    ii(e, t.containerInfo));
}
function _c(e, t, n, s, o) {
  return (Or(), ni(o), (t.flags |= 256), Dt(e, t, n, s), t.child);
}
var Na = { dehydrated: null, treeContext: null, retryLane: 0 };
function ja(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Tu(e, t, n) {
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
    Je(st, o & 1),
    e === null)
  )
    return (
      ha(t),
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
                : (l = ol(a, s, 0, null)),
              (e = rr(e, s, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = ja(n)),
              (t.memoizedState = Na),
              e)
            : gi(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((i = o.dehydrated), i !== null)))
    return Tm(e, t, a, s, i, o, n);
  if (l) {
    ((l = s.fallback), (a = t.mode), (o = e.child), (i = o.sibling));
    var c = { mode: "hidden", children: s.children };
    return (
      !(a & 1) && t.child !== o
        ? ((s = t.child),
          (s.childLanes = 0),
          (s.pendingProps = c),
          (t.deletions = null))
        : ((s = Fn(o, c)), (s.subtreeFlags = o.subtreeFlags & 14680064)),
      i !== null ? (l = Fn(i, l)) : ((l = rr(l, a, n, null)), (l.flags |= 2)),
      (l.return = t),
      (s.return = t),
      (s.sibling = l),
      (t.child = s),
      (s = l),
      (l = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? ja(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (l.memoizedState = a),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Na),
      s
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (s = Fn(l, { mode: "visible", children: s.children })),
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
function gi(e, t) {
  return (
    (t = ol({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function so(e, t, n, s) {
  return (
    s !== null && ni(s),
    Lr(t, e.child, null, n),
    (e = gi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Tm(e, t, n, s, o, l, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (s = Ul(Error(ue(422)))), so(e, t, a, s))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((l = s.fallback),
          (o = t.mode),
          (s = ol({ mode: "visible", children: s.children }, o, 0, null)),
          (l = rr(l, o, a, null)),
          (l.flags |= 2),
          (s.return = t),
          (l.return = t),
          (s.sibling = l),
          (t.child = s),
          t.mode & 1 && Lr(t, e.child, null, a),
          (t.child.memoizedState = ja(a)),
          (t.memoizedState = Na),
          l);
  if (!(t.mode & 1)) return so(e, t, a, null);
  if (o.data === "$!") {
    if (((s = o.nextSibling && o.nextSibling.dataset), s)) var i = s.dgst;
    return (
      (s = i),
      (l = Error(ue(419))),
      (s = Ul(l, s, void 0)),
      so(e, t, a, s)
    );
  }
  if (((i = (a & e.childLanes) !== 0), Rt || i)) {
    if (((s = yt), s !== null)) {
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
          ((l.retryLane = o), jn(e, o), on(s, e, o, -1)));
    }
    return (Ni(), (s = Ul(Error(ue(421)))), so(e, t, a, s));
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = qm.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Bt = Ln(o.nextSibling)),
      (Ft = t),
      (rt = !0),
      (rn = null),
      e !== null &&
        ((Wt[Yt++] = yn),
        (Wt[Yt++] = vn),
        (Wt[Yt++] = or),
        (yn = e.id),
        (vn = e.overflow),
        (or = t)),
      (t = gi(t, s.children)),
      (t.flags |= 4096),
      t);
}
function kc(e, t, n) {
  e.lanes |= t;
  var s = e.alternate;
  (s !== null && (s.lanes |= t), ga(e.return, t, n));
}
function Ol(e, t, n, s, o) {
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
function Ru(e, t, n) {
  var s = t.pendingProps,
    o = s.revealOrder,
    l = s.tail;
  if ((Dt(e, t, s.children, n), (s = st.current), s & 2))
    ((s = (s & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && kc(e, n, t);
        else if (e.tag === 19) kc(e, n, t);
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
  if ((Je(st, s), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          ((e = n.alternate),
            e !== null && Lo(e) === null && (o = n),
            (n = n.sibling));
        ((n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Ol(t, !1, o, n, l));
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Lo(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
        }
        Ol(t, !0, n, null, l);
        break;
      case "together":
        Ol(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function yo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Sn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (ar |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(ue(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Fn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Fn(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Rm(e, t, n) {
  switch (t.tag) {
    case 3:
      (Pu(t), Or());
      break;
    case 5:
      lu(t);
      break;
    case 1:
      Ot(t.type) && To(t);
      break;
    case 4:
      ii(t, t.stateNode.containerInfo);
      break;
    case 10:
      var s = t.type._context,
        o = t.memoizedProps.value;
      (Je(Ao, s._currentValue), (s._currentValue = o));
      break;
    case 13:
      if (((s = t.memoizedState), s !== null))
        return s.dehydrated !== null
          ? (Je(st, st.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Tu(e, t, n)
            : (Je(st, st.current & 1),
              (e = Sn(e, t, n)),
              e !== null ? e.sibling : null);
      Je(st, st.current & 1);
      break;
    case 19:
      if (((s = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (s) return Ru(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Je(st, st.current),
        s)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Iu(e, t, n));
  }
  return Sn(e, t, n);
}
var $u, Sa, Au, Uu;
$u = function (e, t) {
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
Sa = function () {};
Au = function (e, t, n, s) {
  var o = e.memoizedProps;
  if (o !== s) {
    ((e = t.stateNode), tr(pn.current));
    var l = null;
    switch (n) {
      case "input":
        ((o = ql(e, o)), (s = ql(e, s)), (l = []));
        break;
      case "select":
        ((o = lt({}, o, { value: void 0 })),
          (s = lt({}, s, { value: void 0 })),
          (l = []));
        break;
      case "textarea":
        ((o = Ql(e, o)), (s = Ql(e, s)), (l = []));
        break;
      default:
        typeof o.onClick != "function" &&
          typeof s.onClick == "function" &&
          (e.onclick = Eo);
    }
    Kl(n, s);
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
            (js.hasOwnProperty(h)
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
                (js.hasOwnProperty(h)
                  ? (c != null && h === "onScroll" && Ze("scroll", e),
                    l || i === c || (l = []))
                  : (l = l || []).push(h, c));
    }
    n && (l = l || []).push("style", n);
    var h = l;
    (t.updateQueue = h) && (t.flags |= 4);
  }
};
Uu = function (e, t, n, s) {
  n !== s && (t.flags |= 4);
};
function ls(e, t) {
  if (!rt)
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
function jt(e) {
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
function $m(e, t, n) {
  var s = t.pendingProps;
  switch ((ti(t), t.tag)) {
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
      return (jt(t), null);
    case 1:
      return (Ot(t.type) && Po(), jt(t), null);
    case 3:
      return (
        (s = t.stateNode),
        Gr(),
        et(Ut),
        et(Ct),
        di(),
        s.pendingContext &&
          ((s.context = s.pendingContext), (s.pendingContext = null)),
        (e === null || e.child === null) &&
          (no(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), rn !== null && (Pa(rn), (rn = null)))),
        Sa(e, t),
        jt(t),
        null
      );
    case 5:
      ci(t);
      var o = tr($s.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Au(e, t, n, s, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!s) {
          if (t.stateNode === null) throw Error(ue(166));
          return (jt(t), null);
        }
        if (((e = tr(pn.current)), no(t))) {
          ((s = t.stateNode), (n = t.type));
          var l = t.memoizedProps;
          switch (((s[un] = t), (s[Ts] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (Ze("cancel", s), Ze("close", s));
              break;
            case "iframe":
            case "object":
            case "embed":
              Ze("load", s);
              break;
            case "video":
            case "audio":
              for (o = 0; o < fs.length; o++) Ze(fs[o], s);
              break;
            case "source":
              Ze("error", s);
              break;
            case "img":
            case "image":
            case "link":
              (Ze("error", s), Ze("load", s));
              break;
            case "details":
              Ze("toggle", s);
              break;
            case "input":
              (Ui(s, l), Ze("invalid", s));
              break;
            case "select":
              ((s._wrapperState = { wasMultiple: !!l.multiple }),
                Ze("invalid", s));
              break;
            case "textarea":
              (Li(s, l), Ze("invalid", s));
          }
          (Kl(n, l), (o = null));
          for (var a in l)
            if (l.hasOwnProperty(a)) {
              var i = l[a];
              a === "children"
                ? typeof i == "string"
                  ? s.textContent !== i &&
                    (l.suppressHydrationWarning !== !0 &&
                      to(s.textContent, i, e),
                    (o = ["children", i]))
                  : typeof i == "number" &&
                    s.textContent !== "" + i &&
                    (l.suppressHydrationWarning !== !0 &&
                      to(s.textContent, i, e),
                    (o = ["children", "" + i]))
                : js.hasOwnProperty(a) &&
                  i != null &&
                  a === "onScroll" &&
                  Ze("scroll", s);
            }
          switch (n) {
            case "input":
              (Ws(s), Oi(s, l, !0));
              break;
            case "textarea":
              (Ws(s), Gi(s));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (s.onclick = Eo);
          }
          ((s = o), (t.updateQueue = s), s !== null && (t.flags |= 4));
        } else {
          ((a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ud(n)),
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
            (e[un] = t),
            (e[Ts] = s),
            $u(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((a = Jl(n, s)), n)) {
              case "dialog":
                (Ze("cancel", e), Ze("close", e), (o = s));
                break;
              case "iframe":
              case "object":
              case "embed":
                (Ze("load", e), (o = s));
                break;
              case "video":
              case "audio":
                for (o = 0; o < fs.length; o++) Ze(fs[o], e);
                o = s;
                break;
              case "source":
                (Ze("error", e), (o = s));
                break;
              case "img":
              case "image":
              case "link":
                (Ze("error", e), Ze("load", e), (o = s));
                break;
              case "details":
                (Ze("toggle", e), (o = s));
                break;
              case "input":
                (Ui(e, s), (o = ql(e, s)), Ze("invalid", e));
                break;
              case "option":
                o = s;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!s.multiple }),
                  (o = lt({}, s, { value: void 0 })),
                  Ze("invalid", e));
                break;
              case "textarea":
                (Li(e, s), (o = Ql(e, s)), Ze("invalid", e));
                break;
              default:
                o = s;
            }
            (Kl(n, o), (i = o));
            for (l in i)
              if (i.hasOwnProperty(l)) {
                var c = i[l];
                l === "style"
                  ? md(e, c)
                  : l === "dangerouslySetInnerHTML"
                    ? ((c = c ? c.__html : void 0), c != null && fd(e, c))
                    : l === "children"
                      ? typeof c == "string"
                        ? (n !== "textarea" || c !== "") && Ss(e, c)
                        : typeof c == "number" && Ss(e, "" + c)
                      : l !== "suppressContentEditableWarning" &&
                        l !== "suppressHydrationWarning" &&
                        l !== "autoFocus" &&
                        (js.hasOwnProperty(l)
                          ? c != null && l === "onScroll" && Ze("scroll", e)
                          : c != null && Ga(e, l, c, a));
              }
            switch (n) {
              case "input":
                (Ws(e), Oi(e, s, !1));
                break;
              case "textarea":
                (Ws(e), Gi(e));
                break;
              case "option":
                s.value != null && e.setAttribute("value", "" + Hn(s.value));
                break;
              case "select":
                ((e.multiple = !!s.multiple),
                  (l = s.value),
                  l != null
                    ? Ir(e, !!s.multiple, l, !1)
                    : s.defaultValue != null &&
                      Ir(e, !!s.multiple, s.defaultValue, !0));
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Eo);
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
      return (jt(t), null);
    case 6:
      if (e && t.stateNode != null) Uu(e, t, e.memoizedProps, s);
      else {
        if (typeof s != "string" && t.stateNode === null) throw Error(ue(166));
        if (((n = tr($s.current)), tr(pn.current), no(t))) {
          if (
            ((s = t.stateNode),
            (n = t.memoizedProps),
            (s[un] = t),
            (l = s.nodeValue !== n) && ((e = Ft), e !== null))
          )
            switch (e.tag) {
              case 3:
                to(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  to(s.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          ((s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s)),
            (s[un] = t),
            (t.stateNode = s));
      }
      return (jt(t), null);
    case 13:
      if (
        (et(st),
        (s = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (rt && Bt !== null && t.mode & 1 && !(t.flags & 128))
          (tu(), Or(), (t.flags |= 98560), (l = !1));
        else if (((l = no(t)), s !== null && s.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(ue(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(ue(317));
            l[un] = t;
          } else
            (Or(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (jt(t), (l = !1));
        } else (rn !== null && (Pa(rn), (rn = null)), (l = !0));
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((s = s !== null),
          s !== (e !== null && e.memoizedState !== null) &&
            s &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || st.current & 1 ? ht === 0 && (ht = 3) : Ni())),
          t.updateQueue !== null && (t.flags |= 4),
          jt(t),
          null);
    case 4:
      return (
        Gr(),
        Sa(e, t),
        e === null && Es(t.stateNode.containerInfo),
        jt(t),
        null
      );
    case 10:
      return (oi(t.type._context), jt(t), null);
    case 17:
      return (Ot(t.type) && Po(), jt(t), null);
    case 19:
      if ((et(st), (l = t.memoizedState), l === null)) return (jt(t), null);
      if (((s = (t.flags & 128) !== 0), (a = l.rendering), a === null))
        if (s) ls(l, !1);
        else {
          if (ht !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Lo(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    ls(l, !1),
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
                return (Je(st, (st.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          l.tail !== null &&
            ut() > Br &&
            ((t.flags |= 128), (s = !0), ls(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!s)
          if (((e = Lo(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (s = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ls(l, !0),
              l.tail === null && l.tailMode === "hidden" && !a.alternate && !rt)
            )
              return (jt(t), null);
          } else
            2 * ut() - l.renderingStartTime > Br &&
              n !== 1073741824 &&
              ((t.flags |= 128), (s = !0), ls(l, !1), (t.lanes = 4194304));
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
          (l.renderingStartTime = ut()),
          (t.sibling = null),
          (n = st.current),
          Je(st, s ? (n & 1) | 2 : n & 1),
          t)
        : (jt(t), null);
    case 22:
    case 23:
      return (
        wi(),
        (s = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
        s && t.mode & 1
          ? zt & 1073741824 && (jt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : jt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(ue(156, t.tag));
}
function Am(e, t) {
  switch ((ti(t), t.tag)) {
    case 1:
      return (
        Ot(t.type) && Po(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Gr(),
        et(Ut),
        et(Ct),
        di(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (ci(t), null);
    case 13:
      if (
        (et(st), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(ue(340));
        Or();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (et(st), null);
    case 4:
      return (Gr(), null);
    case 10:
      return (oi(t.type._context), null);
    case 22:
    case 23:
      return (wi(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var oo = !1,
  St = !1,
  Um = typeof WeakSet == "function" ? WeakSet : Set,
  _e = null;
function Dr(e, t) {
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
function Ca(e, t, n) {
  try {
    n();
  } catch (s) {
    at(e, t, s);
  }
}
var Mc = !1;
function Om(e, t) {
  if (((ia = ko), (e = Bd()), Za(e))) {
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
            x = 0,
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
                p === l && ++x === s && (c = a),
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
    ca = { focusedElem: e, selectionRange: n }, ko = !1, _e = t;
    _e !== null;
  )
    if (((t = _e), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (_e = e));
    else
      for (; _e !== null; ) {
        t = _e;
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
                    _ = b.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? T : tn(t.type, T),
                      _,
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
                throw Error(ue(163));
            }
        } catch (v) {
          at(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (_e = e));
          break;
        }
        _e = t.return;
      }
  return ((b = Mc), (Mc = !1), b);
}
function vs(e, t, n) {
  var s = t.updateQueue;
  if (((s = s !== null ? s.lastEffect : null), s !== null)) {
    var o = (s = s.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        ((o.destroy = void 0), l !== void 0 && Ca(t, n, l));
      }
      o = o.next;
    } while (o !== s);
  }
}
function rl(e, t) {
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
function Da(e) {
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
function Ou(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Ou(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[un], delete t[Ts], delete t[fa], delete t[bm], delete t[wm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Lu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ic(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Lu(e.return)) return null;
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
function _a(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Eo)));
  else if (s !== 4 && ((e = e.child), e !== null))
    for (_a(e, t, n), e = e.sibling; e !== null; )
      (_a(e, t, n), (e = e.sibling));
}
function ka(e, t, n) {
  var s = e.tag;
  if (s === 5 || s === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (s !== 4 && ((e = e.child), e !== null))
    for (ka(e, t, n), e = e.sibling; e !== null; )
      (ka(e, t, n), (e = e.sibling));
}
var vt = null,
  nn = !1;
function kn(e, t, n) {
  for (n = n.child; n !== null; ) (Gu(e, t, n), (n = n.sibling));
}
function Gu(e, t, n) {
  if (fn && typeof fn.onCommitFiberUnmount == "function")
    try {
      fn.onCommitFiberUnmount(Qo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      St || Dr(n, t);
    case 6:
      var s = vt,
        o = nn;
      ((vt = null),
        kn(e, t, n),
        (vt = s),
        (nn = o),
        vt !== null &&
          (nn
            ? ((e = vt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : vt.removeChild(n.stateNode)));
      break;
    case 18:
      vt !== null &&
        (nn
          ? ((e = vt),
            (n = n.stateNode),
            e.nodeType === 8
              ? El(e.parentNode, n)
              : e.nodeType === 1 && El(e, n),
            ks(e))
          : El(vt, n.stateNode));
      break;
    case 4:
      ((s = vt),
        (o = nn),
        (vt = n.stateNode.containerInfo),
        (nn = !0),
        kn(e, t, n),
        (vt = s),
        (nn = o));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !St &&
        ((s = n.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
      ) {
        o = s = s.next;
        do {
          var l = o,
            a = l.destroy;
          ((l = l.tag),
            a !== void 0 && (l & 2 || l & 4) && Ca(n, t, a),
            (o = o.next));
        } while (o !== s);
      }
      kn(e, t, n);
      break;
    case 1:
      if (
        !St &&
        (Dr(n, t),
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
      kn(e, t, n);
      break;
    case 21:
      kn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((St = (s = St) || n.memoizedState !== null), kn(e, t, n), (St = s))
        : kn(e, t, n);
      break;
    default:
      kn(e, t, n);
  }
}
function Ec(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Um()),
      t.forEach(function (s) {
        var o = Wm.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(o, o));
      }));
  }
}
function en(e, t) {
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
              ((vt = i.stateNode), (nn = !1));
              break e;
            case 3:
              ((vt = i.stateNode.containerInfo), (nn = !0));
              break e;
            case 4:
              ((vt = i.stateNode.containerInfo), (nn = !0));
              break e;
          }
          i = i.return;
        }
        if (vt === null) throw Error(ue(160));
        (Gu(l, a, o), (vt = null), (nn = !1));
        var c = o.alternate;
        (c !== null && (c.return = null), (o.return = null));
      } catch (h) {
        at(o, t, h);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (zu(t, e), (t = t.sibling));
}
function zu(e, t) {
  var n = e.alternate,
    s = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((en(t, e), an(e), s & 4)) {
        try {
          (vs(3, e, e.return), rl(3, e));
        } catch (T) {
          at(e, e.return, T);
        }
        try {
          vs(5, e, e.return);
        } catch (T) {
          at(e, e.return, T);
        }
      }
      break;
    case 1:
      (en(t, e), an(e), s & 512 && n !== null && Dr(n, n.return));
      break;
    case 5:
      if (
        (en(t, e),
        an(e),
        s & 512 && n !== null && Dr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Ss(o, "");
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
            (i === "input" && l.type === "radio" && l.name != null && cd(o, l),
              Jl(i, a));
            var h = Jl(i, l);
            for (a = 0; a < c.length; a += 2) {
              var x = c[a],
                m = c[a + 1];
              x === "style"
                ? md(o, m)
                : x === "dangerouslySetInnerHTML"
                  ? fd(o, m)
                  : x === "children"
                    ? Ss(o, m)
                    : Ga(o, x, m, h);
            }
            switch (i) {
              case "input":
                Wl(o, l);
                break;
              case "textarea":
                dd(o, l);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var j = l.value;
                j != null
                  ? Ir(o, !!l.multiple, j, !1)
                  : p !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Ir(o, !!l.multiple, l.defaultValue, !0)
                      : Ir(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[Ts] = l;
          } catch (T) {
            at(e, e.return, T);
          }
      }
      break;
    case 6:
      if ((en(t, e), an(e), s & 4)) {
        if (e.stateNode === null) throw Error(ue(162));
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
        (en(t, e), an(e), s & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ks(t.containerInfo);
        } catch (T) {
          at(e, e.return, T);
        }
      break;
    case 4:
      (en(t, e), an(e));
      break;
    case 13:
      (en(t, e),
        an(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (vi = ut())),
        s & 4 && Ec(e));
      break;
    case 22:
      if (
        ((x = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((St = (h = St) || x), en(t, e), (St = h)) : en(t, e),
        an(e),
        s & 8192)
      ) {
        if (
          ((h = e.memoizedState !== null),
          (e.stateNode.isHidden = h) && !x && e.mode & 1)
        )
          for (_e = e, x = e.child; x !== null; ) {
            for (m = _e = x; _e !== null; ) {
              switch (((p = _e), (j = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  vs(4, p, p.return);
                  break;
                case 1:
                  Dr(p, p.return);
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
                  Dr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Tc(m);
                    continue;
                  }
              }
              j !== null ? ((j.return = p), (_e = j)) : Tc(m);
            }
            x = x.sibling;
          }
        e: for (x = null, m = e; ; ) {
          if (m.tag === 5) {
            if (x === null) {
              x = m;
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
                      (i.style.display = pd("display", a))));
              } catch (T) {
                at(e, e.return, T);
              }
            }
          } else if (m.tag === 6) {
            if (x === null)
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
            (x === m && (x = null), (m = m.return));
          }
          (x === m && (x = null),
            (m.sibling.return = m.return),
            (m = m.sibling));
        }
      }
      break;
    case 19:
      (en(t, e), an(e), s & 4 && Ec(e));
      break;
    case 21:
      break;
    default:
      (en(t, e), an(e));
  }
}
function an(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Lu(n)) {
            var s = n;
            break e;
          }
          n = n.return;
        }
        throw Error(ue(160));
      }
      switch (s.tag) {
        case 5:
          var o = s.stateNode;
          s.flags & 32 && (Ss(o, ""), (s.flags &= -33));
          var l = Ic(e);
          ka(e, l, o);
          break;
        case 3:
        case 4:
          var a = s.stateNode.containerInfo,
            i = Ic(e);
          _a(e, i, a);
          break;
        default:
          throw Error(ue(161));
      }
    } catch (c) {
      at(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Lm(e, t, n) {
  ((_e = e), Bu(e));
}
function Bu(e, t, n) {
  for (var s = (e.mode & 1) !== 0; _e !== null; ) {
    var o = _e,
      l = o.child;
    if (o.tag === 22 && s) {
      var a = o.memoizedState !== null || oo;
      if (!a) {
        var i = o.alternate,
          c = (i !== null && i.memoizedState !== null) || St;
        i = oo;
        var h = St;
        if (((oo = a), (St = c) && !h))
          for (_e = o; _e !== null; )
            ((a = _e),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Rc(o)
                : c !== null
                  ? ((c.return = a), (_e = c))
                  : Rc(o));
        for (; l !== null; ) ((_e = l), Bu(l), (l = l.sibling));
        ((_e = o), (oo = i), (St = h));
      }
      Pc(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (_e = l)) : Pc(e);
  }
}
function Pc(e) {
  for (; _e !== null; ) {
    var t = _e;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              St || rl(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !St)
                if (n === null) s.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : tn(t.type, n.memoizedProps);
                  s.componentDidUpdate(
                    o,
                    n.memoizedState,
                    s.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var l = t.updateQueue;
              l !== null && gc(t, l, s);
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
                gc(t, a, n);
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
                  var x = h.memoizedState;
                  if (x !== null) {
                    var m = x.dehydrated;
                    m !== null && ks(m);
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
              throw Error(ue(163));
          }
        St || (t.flags & 512 && Da(t));
      } catch (p) {
        at(t, t.return, p);
      }
    }
    if (t === e) {
      _e = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (_e = n));
      break;
    }
    _e = t.return;
  }
}
function Tc(e) {
  for (; _e !== null; ) {
    var t = _e;
    if (t === e) {
      _e = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (_e = n));
      break;
    }
    _e = t.return;
  }
}
function Rc(e) {
  for (; _e !== null; ) {
    var t = _e;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            rl(4, t);
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
            Da(t);
          } catch (c) {
            at(t, l, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Da(t);
          } catch (c) {
            at(t, a, c);
          }
      }
    } catch (c) {
      at(t, t.return, c);
    }
    if (t === e) {
      _e = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      ((i.return = t.return), (_e = i));
      break;
    }
    _e = t.return;
  }
}
var Gm = Math.ceil,
  Bo = Cn.ReactCurrentDispatcher,
  xi = Cn.ReactCurrentOwner,
  Xt = Cn.ReactCurrentBatchConfig,
  Ve = 0,
  yt = null,
  pt = null,
  bt = 0,
  zt = 0,
  _r = Wn(0),
  ht = 0,
  Ls = null,
  ar = 0,
  sl = 0,
  yi = 0,
  bs = null,
  Tt = null,
  vi = 0,
  Br = 1 / 0,
  gn = null,
  Fo = !1,
  Ma = null,
  zn = null,
  lo = !1,
  Rn = null,
  Ho = 0,
  ws = 0,
  Ia = null,
  vo = -1,
  bo = 0;
function _t() {
  return Ve & 6 ? ut() : vo !== -1 ? vo : (vo = ut());
}
function Bn(e) {
  return e.mode & 1
    ? Ve & 2 && bt !== 0
      ? bt & -bt
      : jm.transition !== null
        ? (bo === 0 && (bo = Dd()), bo)
        : ((e = Qe),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Td(e.type))),
          e)
    : 1;
}
function on(e, t, n, s) {
  if (50 < ws) throw ((ws = 0), (Ia = null), Error(ue(185)));
  (zs(e, n, s),
    (!(Ve & 2) || e !== yt) &&
      (e === yt && (!(Ve & 2) && (sl |= n), ht === 4 && Pn(e, bt)),
      Lt(e, s),
      n === 1 && Ve === 0 && !(t.mode & 1) && ((Br = ut() + 500), el && Yn())));
}
function Lt(e, t) {
  var n = e.callbackNode;
  jp(e, t);
  var s = _o(e, e === yt ? bt : 0);
  if (s === 0)
    (n !== null && Fi(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = s & -s), e.callbackPriority !== t)) {
    if ((n != null && Fi(n), t === 1))
      (e.tag === 0 ? Nm($c.bind(null, e)) : Jd($c.bind(null, e)),
        ym(function () {
          !(Ve & 6) && Yn();
        }),
        (n = null));
    else {
      switch (_d(s)) {
        case 1:
          n = Va;
          break;
        case 4:
          n = Sd;
          break;
        case 16:
          n = Do;
          break;
        case 536870912:
          n = Cd;
          break;
        default:
          n = Do;
      }
      n = Xu(n, Fu.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Fu(e, t) {
  if (((vo = -1), (bo = 0), Ve & 6)) throw Error(ue(327));
  var n = e.callbackNode;
  if ($r() && e.callbackNode !== n) return null;
  var s = _o(e, e === yt ? bt : 0);
  if (s === 0) return null;
  if (s & 30 || s & e.expiredLanes || t) t = Vo(e, s);
  else {
    t = s;
    var o = Ve;
    Ve |= 2;
    var l = Vu();
    (yt !== e || bt !== t) && ((gn = null), (Br = ut() + 500), nr(e, t));
    do
      try {
        Fm();
        break;
      } catch (i) {
        Hu(e, i);
      }
    while (!0);
    (si(),
      (Bo.current = l),
      (Ve = o),
      pt !== null ? (t = 0) : ((yt = null), (bt = 0), (t = ht)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ra(e)), o !== 0 && ((s = o), (t = Ea(e, o)))), t === 1)
    )
      throw ((n = Ls), nr(e, 0), Pn(e, s), Lt(e, ut()), n);
    if (t === 6) Pn(e, s);
    else {
      if (
        ((o = e.current.alternate),
        !(s & 30) &&
          !zm(o) &&
          ((t = Vo(e, s)),
          t === 2 && ((l = ra(e)), l !== 0 && ((s = l), (t = Ea(e, l)))),
          t === 1))
      )
        throw ((n = Ls), nr(e, 0), Pn(e, s), Lt(e, ut()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = s), t)) {
        case 0:
        case 1:
          throw Error(ue(345));
        case 2:
          Jn(e, Tt, gn);
          break;
        case 3:
          if (
            (Pn(e, s), (s & 130023424) === s && ((t = vi + 500 - ut()), 10 < t))
          ) {
            if (_o(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & s) !== s)) {
              (_t(), (e.pingedLanes |= e.suspendedLanes & o));
              break;
            }
            e.timeoutHandle = ua(Jn.bind(null, e, Tt, gn), t);
            break;
          }
          Jn(e, Tt, gn);
          break;
        case 4:
          if ((Pn(e, s), (s & 4194240) === s)) break;
          for (t = e.eventTimes, o = -1; 0 < s; ) {
            var a = 31 - sn(s);
            ((l = 1 << a), (a = t[a]), a > o && (o = a), (s &= ~l));
          }
          if (
            ((s = o),
            (s = ut() - s),
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
                          : 1960 * Gm(s / 1960)) - s),
            10 < s)
          ) {
            e.timeoutHandle = ua(Jn.bind(null, e, Tt, gn), s);
            break;
          }
          Jn(e, Tt, gn);
          break;
        case 5:
          Jn(e, Tt, gn);
          break;
        default:
          throw Error(ue(329));
      }
    }
  }
  return (Lt(e, ut()), e.callbackNode === n ? Fu.bind(null, e) : null);
}
function Ea(e, t) {
  var n = bs;
  return (
    e.current.memoizedState.isDehydrated && (nr(e, t).flags |= 256),
    (e = Vo(e, t)),
    e !== 2 && ((t = Tt), (Tt = n), t !== null && Pa(t)),
    e
  );
}
function Pa(e) {
  Tt === null ? (Tt = e) : Tt.push.apply(Tt, e);
}
function zm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var s = 0; s < n.length; s++) {
          var o = n[s],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!ln(l(), o)) return !1;
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
function Pn(e, t) {
  for (
    t &= ~yi,
      t &= ~sl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - sn(t),
      s = 1 << n;
    ((e[n] = -1), (t &= ~s));
  }
}
function $c(e) {
  if (Ve & 6) throw Error(ue(327));
  $r();
  var t = _o(e, 0);
  if (!(t & 1)) return (Lt(e, ut()), null);
  var n = Vo(e, t);
  if (e.tag !== 0 && n === 2) {
    var s = ra(e);
    s !== 0 && ((t = s), (n = Ea(e, s)));
  }
  if (n === 1) throw ((n = Ls), nr(e, 0), Pn(e, t), Lt(e, ut()), n);
  if (n === 6) throw Error(ue(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Jn(e, Tt, gn),
    Lt(e, ut()),
    null
  );
}
function bi(e, t) {
  var n = Ve;
  Ve |= 1;
  try {
    return e(t);
  } finally {
    ((Ve = n), Ve === 0 && ((Br = ut() + 500), el && Yn()));
  }
}
function ir(e) {
  Rn !== null && Rn.tag === 0 && !(Ve & 6) && $r();
  var t = Ve;
  Ve |= 1;
  var n = Xt.transition,
    s = Qe;
  try {
    if (((Xt.transition = null), (Qe = 1), e)) return e();
  } finally {
    ((Qe = s), (Xt.transition = n), (Ve = t), !(Ve & 6) && Yn());
  }
}
function wi() {
  ((zt = _r.current), et(_r));
}
function nr(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), xm(n)), pt !== null))
    for (n = pt.return; n !== null; ) {
      var s = n;
      switch ((ti(s), s.tag)) {
        case 1:
          ((s = s.type.childContextTypes), s != null && Po());
          break;
        case 3:
          (Gr(), et(Ut), et(Ct), di());
          break;
        case 5:
          ci(s);
          break;
        case 4:
          Gr();
          break;
        case 13:
          et(st);
          break;
        case 19:
          et(st);
          break;
        case 10:
          oi(s.type._context);
          break;
        case 22:
        case 23:
          wi();
      }
      n = n.return;
    }
  if (
    ((yt = e),
    (pt = e = Fn(e.current, null)),
    (bt = zt = t),
    (ht = 0),
    (Ls = null),
    (yi = sl = ar = 0),
    (Tt = bs = null),
    er !== null)
  ) {
    for (t = 0; t < er.length; t++)
      if (((n = er[t]), (s = n.interleaved), s !== null)) {
        n.interleaved = null;
        var o = s.next,
          l = n.pending;
        if (l !== null) {
          var a = l.next;
          ((l.next = o), (s.next = a));
        }
        n.pending = s;
      }
    er = null;
  }
  return e;
}
function Hu(e, t) {
  do {
    var n = pt;
    try {
      if ((si(), (go.current = zo), Go)) {
        for (var s = ot.memoizedState; s !== null; ) {
          var o = s.queue;
          (o !== null && (o.pending = null), (s = s.next));
        }
        Go = !1;
      }
      if (
        ((lr = 0),
        (xt = mt = ot = null),
        (ys = !1),
        (As = 0),
        (xi.current = null),
        n === null || n.return === null)
      ) {
        ((ht = 1), (Ls = t), (pt = null));
        break;
      }
      e: {
        var l = e,
          a = n.return,
          i = n,
          c = t;
        if (
          ((t = bt),
          (i.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var h = c,
            x = i,
            m = x.tag;
          if (!(x.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = x.alternate;
            p
              ? ((x.updateQueue = p.updateQueue),
                (x.memoizedState = p.memoizedState),
                (x.lanes = p.lanes))
              : ((x.updateQueue = null), (x.memoizedState = null));
          }
          var j = Nc(a);
          if (j !== null) {
            ((j.flags &= -257),
              jc(j, a, i, l, t),
              j.mode & 1 && wc(l, h, t),
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
              (wc(l, h, t), Ni());
              break e;
            }
            c = Error(ue(426));
          }
        } else if (rt && i.mode & 1) {
          var _ = Nc(a);
          if (_ !== null) {
            (!(_.flags & 65536) && (_.flags |= 256),
              jc(_, a, i, l, t),
              ni(zr(c, i)));
            break e;
          }
        }
        ((l = c = zr(c, i)),
          ht !== 4 && (ht = 2),
          bs === null ? (bs = [l]) : bs.push(l),
          (l = a));
        do {
          switch (l.tag) {
            case 3:
              ((l.flags |= 65536), (t &= -t), (l.lanes |= t));
              var f = _u(l, c, t);
              hc(l, f);
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
                    (zn === null || !zn.has(y))))
              ) {
                ((l.flags |= 65536), (t &= -t), (l.lanes |= t));
                var v = ku(l, i, t);
                hc(l, v);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Wu(n);
    } catch (I) {
      ((t = I), pt === n && n !== null && (pt = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Vu() {
  var e = Bo.current;
  return ((Bo.current = zo), e === null ? zo : e);
}
function Ni() {
  ((ht === 0 || ht === 3 || ht === 2) && (ht = 4),
    yt === null || (!(ar & 268435455) && !(sl & 268435455)) || Pn(yt, bt));
}
function Vo(e, t) {
  var n = Ve;
  Ve |= 2;
  var s = Vu();
  (yt !== e || bt !== t) && ((gn = null), nr(e, t));
  do
    try {
      Bm();
      break;
    } catch (o) {
      Hu(e, o);
    }
  while (!0);
  if ((si(), (Ve = n), (Bo.current = s), pt !== null)) throw Error(ue(261));
  return ((yt = null), (bt = 0), ht);
}
function Bm() {
  for (; pt !== null; ) qu(pt);
}
function Fm() {
  for (; pt !== null && !mp(); ) qu(pt);
}
function qu(e) {
  var t = Qu(e.alternate, e, zt);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Wu(e) : (pt = t),
    (xi.current = null));
}
function Wu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Am(n, t)), n !== null)) {
        ((n.flags &= 32767), (pt = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ht = 6), (pt = null));
        return;
      }
    } else if (((n = $m(n, t, zt)), n !== null)) {
      pt = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      pt = t;
      return;
    }
    pt = t = e;
  } while (t !== null);
  ht === 0 && (ht = 5);
}
function Jn(e, t, n) {
  var s = Qe,
    o = Xt.transition;
  try {
    ((Xt.transition = null), (Qe = 1), Hm(e, t, n, s));
  } finally {
    ((Xt.transition = o), (Qe = s));
  }
  return null;
}
function Hm(e, t, n, s) {
  do $r();
  while (Rn !== null);
  if (Ve & 6) throw Error(ue(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(ue(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var l = n.lanes | n.childLanes;
  if (
    (Sp(e, l),
    e === yt && ((pt = yt = null), (bt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      lo ||
      ((lo = !0),
      Xu(Do, function () {
        return ($r(), null);
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    ((l = Xt.transition), (Xt.transition = null));
    var a = Qe;
    Qe = 1;
    var i = Ve;
    ((Ve |= 4),
      (xi.current = null),
      Om(e, n),
      zu(n, e),
      dm(ca),
      (ko = !!ia),
      (ca = ia = null),
      (e.current = n),
      Lm(n),
      hp(),
      (Ve = i),
      (Qe = a),
      (Xt.transition = l));
  } else e.current = n;
  if (
    (lo && ((lo = !1), (Rn = e), (Ho = o)),
    (l = e.pendingLanes),
    l === 0 && (zn = null),
    yp(n.stateNode),
    Lt(e, ut()),
    t !== null)
  )
    for (s = e.onRecoverableError, n = 0; n < t.length; n++)
      ((o = t[n]), s(o.value, { componentStack: o.stack, digest: o.digest }));
  if (Fo) throw ((Fo = !1), (e = Ma), (Ma = null), e);
  return (
    Ho & 1 && e.tag !== 0 && $r(),
    (l = e.pendingLanes),
    l & 1 ? (e === Ia ? ws++ : ((ws = 0), (Ia = e))) : (ws = 0),
    Yn(),
    null
  );
}
function $r() {
  if (Rn !== null) {
    var e = _d(Ho),
      t = Xt.transition,
      n = Qe;
    try {
      if (((Xt.transition = null), (Qe = 16 > e ? 16 : e), Rn === null))
        var s = !1;
      else {
        if (((e = Rn), (Rn = null), (Ho = 0), Ve & 6)) throw Error(ue(331));
        var o = Ve;
        for (Ve |= 4, _e = e.current; _e !== null; ) {
          var l = _e,
            a = l.child;
          if (_e.flags & 16) {
            var i = l.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var h = i[c];
                for (_e = h; _e !== null; ) {
                  var x = _e;
                  switch (x.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vs(8, x, l);
                  }
                  var m = x.child;
                  if (m !== null) ((m.return = x), (_e = m));
                  else
                    for (; _e !== null; ) {
                      x = _e;
                      var p = x.sibling,
                        j = x.return;
                      if ((Ou(x), x === h)) {
                        _e = null;
                        break;
                      }
                      if (p !== null) {
                        ((p.return = j), (_e = p));
                        break;
                      }
                      _e = j;
                    }
                }
              }
              var b = l.alternate;
              if (b !== null) {
                var T = b.child;
                if (T !== null) {
                  b.child = null;
                  do {
                    var _ = T.sibling;
                    ((T.sibling = null), (T = _));
                  } while (T !== null);
                }
              }
              _e = l;
            }
          }
          if (l.subtreeFlags & 2064 && a !== null) ((a.return = l), (_e = a));
          else
            e: for (; _e !== null; ) {
              if (((l = _e), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    vs(9, l, l.return);
                }
              var f = l.sibling;
              if (f !== null) {
                ((f.return = l.return), (_e = f));
                break e;
              }
              _e = l.return;
            }
        }
        var d = e.current;
        for (_e = d; _e !== null; ) {
          a = _e;
          var y = a.child;
          if (a.subtreeFlags & 2064 && y !== null) ((y.return = a), (_e = y));
          else
            e: for (a = d; _e !== null; ) {
              if (((i = _e), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rl(9, i);
                  }
                } catch (I) {
                  at(i, i.return, I);
                }
              if (i === a) {
                _e = null;
                break e;
              }
              var v = i.sibling;
              if (v !== null) {
                ((v.return = i.return), (_e = v));
                break e;
              }
              _e = i.return;
            }
        }
        if (
          ((Ve = o), Yn(), fn && typeof fn.onPostCommitFiberRoot == "function")
        )
          try {
            fn.onPostCommitFiberRoot(Qo, e);
          } catch {}
        s = !0;
      }
      return s;
    } finally {
      ((Qe = n), (Xt.transition = t));
    }
  }
  return !1;
}
function Ac(e, t, n) {
  ((t = zr(n, t)),
    (t = _u(e, t, 1)),
    (e = Gn(e, t, 1)),
    (t = _t()),
    e !== null && (zs(e, 1, t), Lt(e, t)));
}
function at(e, t, n) {
  if (e.tag === 3) Ac(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ac(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof s.componentDidCatch == "function" &&
            (zn === null || !zn.has(s)))
        ) {
          ((e = zr(n, e)),
            (e = ku(t, e, 1)),
            (t = Gn(t, e, 1)),
            (e = _t()),
            t !== null && (zs(t, 1, e), Lt(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Vm(e, t, n) {
  var s = e.pingCache;
  (s !== null && s.delete(t),
    (t = _t()),
    (e.pingedLanes |= e.suspendedLanes & n),
    yt === e &&
      (bt & n) === n &&
      (ht === 4 || (ht === 3 && (bt & 130023424) === bt && 500 > ut() - vi)
        ? nr(e, 0)
        : (yi |= n)),
    Lt(e, t));
}
function Yu(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Xs), (Xs <<= 1), !(Xs & 130023424) && (Xs = 4194304))
      : (t = 1));
  var n = _t();
  ((e = jn(e, t)), e !== null && (zs(e, t, n), Lt(e, n)));
}
function qm(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Yu(e, n));
}
function Wm(e, t) {
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
      throw Error(ue(314));
  }
  (s !== null && s.delete(t), Yu(e, n));
}
var Qu;
Qu = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ut.current) Rt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Rt = !1), Rm(e, t, n));
      Rt = !!(e.flags & 131072);
    }
  else ((Rt = !1), rt && t.flags & 1048576 && Zd(t, $o, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var s = t.type;
      (yo(e, t), (e = t.pendingProps));
      var o = Ur(t, Ct.current);
      (Rr(t, n), (o = fi(null, t, s, e, o, n)));
      var l = pi();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ot(s) ? ((l = !0), To(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            ai(t),
            (o.updater = nl),
            (t.stateNode = o),
            (o._reactInternals = t),
            ya(t, s, e, n),
            (t = wa(null, t, s, !0, l, n)))
          : ((t.tag = 0), rt && l && ei(t), Dt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      s = t.elementType;
      e: {
        switch (
          (yo(e, t),
          (e = t.pendingProps),
          (o = s._init),
          (s = o(s._payload)),
          (t.type = s),
          (o = t.tag = Qm(s)),
          (e = tn(s, e)),
          o)
        ) {
          case 0:
            t = ba(null, t, s, e, n);
            break e;
          case 1:
            t = Dc(null, t, s, e, n);
            break e;
          case 11:
            t = Sc(null, t, s, e, n);
            break e;
          case 14:
            t = Cc(null, t, s, tn(s.type, e), n);
            break e;
        }
        throw Error(ue(306, s, ""));
      }
      return t;
    case 0:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : tn(s, o)),
        ba(e, t, s, o, n)
      );
    case 1:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : tn(s, o)),
        Dc(e, t, s, o, n)
      );
    case 3:
      e: {
        if ((Pu(t), e === null)) throw Error(ue(387));
        ((s = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          ou(e, t),
          Oo(t, s, null, n));
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
            ((o = zr(Error(ue(423)), t)), (t = _c(e, t, s, n, o)));
            break e;
          } else if (s !== o) {
            ((o = zr(Error(ue(424)), t)), (t = _c(e, t, s, n, o)));
            break e;
          } else
            for (
              Bt = Ln(t.stateNode.containerInfo.firstChild),
                Ft = t,
                rt = !0,
                rn = null,
                n = ru(t, null, s, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Or(), s === o)) {
            t = Sn(e, t, n);
            break e;
          }
          Dt(e, t, s, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        lu(t),
        e === null && ha(t),
        (s = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (a = o.children),
        da(s, o) ? (a = null) : l !== null && da(s, l) && (t.flags |= 32),
        Eu(e, t),
        Dt(e, t, a, n),
        t.child
      );
    case 6:
      return (e === null && ha(t), null);
    case 13:
      return Tu(e, t, n);
    case 4:
      return (
        ii(t, t.stateNode.containerInfo),
        (s = t.pendingProps),
        e === null ? (t.child = Lr(t, null, s, n)) : Dt(e, t, s, n),
        t.child
      );
    case 11:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : tn(s, o)),
        Sc(e, t, s, o, n)
      );
    case 7:
      return (Dt(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Dt(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Dt(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((s = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (a = o.value),
          Je(Ao, s._currentValue),
          (s._currentValue = a),
          l !== null)
        )
          if (ln(l.value, a)) {
            if (l.children === o.children && !Ut.current) {
              t = Sn(e, t, n);
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
                      ((c = bn(-1, n & -n)), (c.tag = 2));
                      var h = l.updateQueue;
                      if (h !== null) {
                        h = h.shared;
                        var x = h.pending;
                        (x === null
                          ? (c.next = c)
                          : ((c.next = x.next), (x.next = c)),
                          (h.pending = c));
                      }
                    }
                    ((l.lanes |= n),
                      (c = l.alternate),
                      c !== null && (c.lanes |= n),
                      ga(l.return, n, t),
                      (i.lanes |= n));
                    break;
                  }
                  c = c.next;
                }
              } else if (l.tag === 10) a = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((a = l.return), a === null)) throw Error(ue(341));
                ((a.lanes |= n),
                  (i = a.alternate),
                  i !== null && (i.lanes |= n),
                  ga(a, n, t),
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
        (Dt(e, t, o.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (s = t.pendingProps.children),
        Rr(t, n),
        (o = Kt(o)),
        (s = s(o)),
        (t.flags |= 1),
        Dt(e, t, s, n),
        t.child
      );
    case 14:
      return (
        (s = t.type),
        (o = tn(s, t.pendingProps)),
        (o = tn(s.type, o)),
        Cc(e, t, s, o, n)
      );
    case 15:
      return Mu(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : tn(s, o)),
        yo(e, t),
        (t.tag = 1),
        Ot(s) ? ((e = !0), To(t)) : (e = !1),
        Rr(t, n),
        Du(t, s, o),
        ya(t, s, o, n),
        wa(null, t, s, !0, e, n)
      );
    case 19:
      return Ru(e, t, n);
    case 22:
      return Iu(e, t, n);
  }
  throw Error(ue(156, t.tag));
};
function Xu(e, t) {
  return jd(e, t);
}
function Ym(e, t, n, s) {
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
function Qt(e, t, n, s) {
  return new Ym(e, t, n, s);
}
function ji(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Qm(e) {
  if (typeof e == "function") return ji(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ba)) return 11;
    if (e === Fa) return 14;
  }
  return 2;
}
function Fn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Qt(e.tag, t, e.key, e.mode)),
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
function wo(e, t, n, s, o, l) {
  var a = 2;
  if (((s = e), typeof e == "function")) ji(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case xr:
        return rr(n.children, o, l, t);
      case za:
        ((a = 8), (o |= 8));
        break;
      case Bl:
        return (
          (e = Qt(12, n, t, o | 2)),
          (e.elementType = Bl),
          (e.lanes = l),
          e
        );
      case Fl:
        return ((e = Qt(13, n, t, o)), (e.elementType = Fl), (e.lanes = l), e);
      case Hl:
        return ((e = Qt(19, n, t, o)), (e.elementType = Hl), (e.lanes = l), e);
      case ld:
        return ol(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case sd:
              a = 10;
              break e;
            case od:
              a = 9;
              break e;
            case Ba:
              a = 11;
              break e;
            case Fa:
              a = 14;
              break e;
            case Mn:
              ((a = 16), (s = null));
              break e;
          }
        throw Error(ue(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Qt(a, n, t, o)),
    (t.elementType = e),
    (t.type = s),
    (t.lanes = l),
    t
  );
}
function rr(e, t, n, s) {
  return ((e = Qt(7, e, s, t)), (e.lanes = n), e);
}
function ol(e, t, n, s) {
  return (
    (e = Qt(22, e, s, t)),
    (e.elementType = ld),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ll(e, t, n) {
  return ((e = Qt(6, e, null, t)), (e.lanes = n), e);
}
function Gl(e, t, n) {
  return (
    (t = Qt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Xm(e, t, n, s, o) {
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
    (this.eventTimes = bl(0)),
    (this.expirationTimes = bl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = bl(0)),
    (this.identifierPrefix = s),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null));
}
function Si(e, t, n, s, o, l, a, i, c) {
  return (
    (e = new Xm(e, t, n, i, c)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Qt(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: s,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ai(l),
    e
  );
}
function Km(e, t, n) {
  var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: gr,
    key: s == null ? null : "" + s,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ku(e) {
  if (!e) return Vn;
  e = e._reactInternals;
  e: {
    if (dr(e) !== e || e.tag !== 1) throw Error(ue(170));
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
    throw Error(ue(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ot(n)) return Kd(e, n, t);
  }
  return t;
}
function Ju(e, t, n, s, o, l, a, i, c) {
  return (
    (e = Si(n, s, !0, e, o, l, a, i, c)),
    (e.context = Ku(null)),
    (n = e.current),
    (s = _t()),
    (o = Bn(n)),
    (l = bn(s, o)),
    (l.callback = t ?? null),
    Gn(n, l, o),
    (e.current.lanes = o),
    zs(e, o, s),
    Lt(e, s),
    e
  );
}
function ll(e, t, n, s) {
  var o = t.current,
    l = _t(),
    a = Bn(o);
  return (
    (n = Ku(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = bn(l, a)),
    (t.payload = { element: e }),
    (s = s === void 0 ? null : s),
    s !== null && (t.callback = s),
    (e = Gn(o, t, a)),
    e !== null && (on(e, o, a, l), ho(e, o, a)),
    a
  );
}
function qo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Uc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ci(e, t) {
  (Uc(e, t), (e = e.alternate) && Uc(e, t));
}
function Jm() {
  return null;
}
var Zu =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Di(e) {
  this._internalRoot = e;
}
al.prototype.render = Di.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(ue(409));
  ll(e, t, null, null);
};
al.prototype.unmount = Di.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (ir(function () {
      ll(null, e, null, null);
    }),
      (t[Nn] = null));
  }
};
function al(e) {
  this._internalRoot = e;
}
al.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Id();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < En.length && t !== 0 && t < En[n].priority; n++);
    (En.splice(n, 0, e), n === 0 && Pd(e));
  }
};
function _i(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function il(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Oc() {}
function Zm(e, t, n, s, o) {
  if (o) {
    if (typeof s == "function") {
      var l = s;
      s = function () {
        var h = qo(a);
        l.call(h);
      };
    }
    var a = Ju(t, s, e, 0, null, !1, !1, "", Oc);
    return (
      (e._reactRootContainer = a),
      (e[Nn] = a.current),
      Es(e.nodeType === 8 ? e.parentNode : e),
      ir(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof s == "function") {
    var i = s;
    s = function () {
      var h = qo(c);
      i.call(h);
    };
  }
  var c = Si(e, 0, !1, null, null, !1, !1, "", Oc);
  return (
    (e._reactRootContainer = c),
    (e[Nn] = c.current),
    Es(e.nodeType === 8 ? e.parentNode : e),
    ir(function () {
      ll(t, c, n, s);
    }),
    c
  );
}
function cl(e, t, n, s, o) {
  var l = n._reactRootContainer;
  if (l) {
    var a = l;
    if (typeof o == "function") {
      var i = o;
      o = function () {
        var c = qo(a);
        i.call(c);
      };
    }
    ll(t, a, e, o);
  } else a = Zm(n, t, e, o, s);
  return qo(a);
}
kd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = us(t.pendingLanes);
        n !== 0 &&
          (qa(t, n | 1), Lt(t, ut()), !(Ve & 6) && ((Br = ut() + 500), Yn()));
      }
      break;
    case 13:
      (ir(function () {
        var s = jn(e, 1);
        if (s !== null) {
          var o = _t();
          on(s, e, 1, o);
        }
      }),
        Ci(e, 1));
  }
};
Wa = function (e) {
  if (e.tag === 13) {
    var t = jn(e, 134217728);
    if (t !== null) {
      var n = _t();
      on(t, e, 134217728, n);
    }
    Ci(e, 134217728);
  }
};
Md = function (e) {
  if (e.tag === 13) {
    var t = Bn(e),
      n = jn(e, t);
    if (n !== null) {
      var s = _t();
      on(n, e, t, s);
    }
    Ci(e, t);
  }
};
Id = function () {
  return Qe;
};
Ed = function (e, t) {
  var n = Qe;
  try {
    return ((Qe = e), t());
  } finally {
    Qe = n;
  }
};
ea = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Wl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = Zo(s);
            if (!o) throw Error(ue(90));
            (id(s), Wl(s, o));
          }
        }
      }
      break;
    case "textarea":
      dd(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Ir(e, !!n.multiple, t, !1));
  }
};
xd = bi;
yd = ir;
var eh = { usingClientEntryPoint: !1, Events: [Fs, wr, Zo, hd, gd, bi] },
  as = {
    findFiberByHostInstance: Zn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  th = {
    bundleType: as.bundleType,
    version: as.version,
    rendererPackageName: as.rendererPackageName,
    rendererConfig: as.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Cn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = wd(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: as.findFiberByHostInstance || Jm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ao = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ao.isDisabled && ao.supportsFiber)
    try {
      ((Qo = ao.inject(th)), (fn = ao));
    } catch {}
}
Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eh;
Vt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!_i(t)) throw Error(ue(200));
  return Km(e, t, null, n);
};
Vt.createRoot = function (e, t) {
  if (!_i(e)) throw Error(ue(299));
  var n = !1,
    s = "",
    o = Zu;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Si(e, 1, !1, null, null, n, !1, s, o)),
    (e[Nn] = t.current),
    Es(e.nodeType === 8 ? e.parentNode : e),
    new Di(t)
  );
};
Vt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(ue(188))
      : ((e = Object.keys(e).join(",")), Error(ue(268, e)));
  return ((e = wd(t)), (e = e === null ? null : e.stateNode), e);
};
Vt.flushSync = function (e) {
  return ir(e);
};
Vt.hydrate = function (e, t, n) {
  if (!il(t)) throw Error(ue(200));
  return cl(null, e, t, !0, n);
};
Vt.hydrateRoot = function (e, t, n) {
  if (!_i(e)) throw Error(ue(405));
  var s = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    a = Zu;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Ju(t, null, e, 1, n ?? null, o, !1, l, a)),
    (e[Nn] = t.current),
    Es(e),
    s)
  )
    for (e = 0; e < s.length; e++)
      ((n = s[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o));
  return new al(t);
};
Vt.render = function (e, t, n) {
  if (!il(t)) throw Error(ue(200));
  return cl(null, e, t, !1, n);
};
Vt.unmountComponentAtNode = function (e) {
  if (!il(e)) throw Error(ue(40));
  return e._reactRootContainer
    ? (ir(function () {
        cl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Nn] = null));
        });
      }),
      !0)
    : !1;
};
Vt.unstable_batchedUpdates = bi;
Vt.unstable_renderSubtreeIntoContainer = function (e, t, n, s) {
  if (!il(n)) throw Error(ue(200));
  if (e == null || e._reactInternals === void 0) throw Error(ue(38));
  return cl(e, t, n, !1, s);
};
Vt.version = "18.3.1-next-f1338f8080-20240426";
function ef() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ef);
    } catch (e) {
      console.error(e);
    }
}
(ef(), (ed.exports = Vt));
var nh = ed.exports,
  tf,
  Lc = nh;
((tf = Lc.createRoot), Lc.hydrateRoot);
class rh {
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
  async addStock(t, n, s) {
    const o = { Data: t, ServerName: n, ServerType: s };
    return (
      console.log(o),
      this.request("/api/stock/add", {
        method: "POST",
        body: JSON.stringify(o),
      })
    );
  }
  async updateStock(t, n, s) {
    const o = { Data: t, ServerName: n, ServerType: s };
    return this.request("/api/stock/update", {
      method: "POST",
      body: JSON.stringify(o),
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
const Ee = new rh();
class sh {
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
                  let x = {
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
                  o.contents[a].contents[h] = x;
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
                            p.medMapBox.forEach((_, f) => {
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
                                y = {},
                                v = p.position.split(","),
                                I = _.position.split(",");
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
                                ((y.name = _.storage.Name),
                                  (y.code = _.storage.Code),
                                  (y.cht_name = _.storage.ChineseName),
                                  (y.SKDIACODE = _.storage.SKDIACODE),
                                  (y.device_type = _.storage.device_type),
                                  (y.qty = _.storage.StorageName),
                                  (y.stockCol = `${+v[0] + 1}`),
                                  (y.stockRow = ""),
                                  (y.stock = `${+I[1] + 1}`));
                              } else
                                ((d.device_type = 10),
                                  (d.box_type = "2.9"),
                                  (y.name = ""),
                                  (y.code = ""),
                                  (y.cht_name = ""),
                                  (y.stockCol = `${+v[0] + 1}`),
                                  (y.stockRow = ""),
                                  (y.stock = `${+I[1] + 1}`));
                              (o.contents[a].med_list.push(y),
                                (d.med_info[0] = y),
                                b.contents.push(d));
                            }));
                      else {
                        b.type = "store_shelves";
                        const _ = p.medMapStock.sort((I, S) => {
                          const [E] = I.location.split(",").map(Number),
                            [F] = S.location.split(",").map(Number);
                          return E - F;
                        });
                        ((b.medMapStock = _), (b.name = p.name));
                        let f = Math.max(
                            ..._.map((I) => I.location.split(",")[0]),
                          ),
                          d = Math.max(
                            ...l.sub_section.map(
                              (I) => I.position.split(",")[1],
                            ),
                          );
                        +f <= 0 && (f = 0);
                        let y = p.position.split(","),
                          v = c.position.split(",");
                        _.forEach((I, S) => {
                          if (I.code) {
                            let E = {};
                            ((E.name = I.name),
                              (E.code = I.code),
                              (E.cht_name = ""),
                              (E.SKDIACODE = I.material_no),
                              (E.qty = I.qty),
                              (E.stockCol = `${+y[0] + 1}`),
                              (E.stockRow = `${+v[1] + 1}`),
                              l.reverse == "True" &&
                                (E.stockRow = d + 1 - `${+v[1]}`),
                              (E.stock = `${+I.location.split(",")[0] + 1}`),
                              l.reverse == "True" &&
                                (E.stock = f + 1 - +I.location.split(",")[0]),
                              o.contents[a].med_list.push(E));
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
                                        f.forEach((v, I) => {
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
        (o.components = t.components.map((x, m) =>
          this.convertSingleComponent(x, m, o.GUID),
        )),
      Object.keys(t).forEach((x) => {
        [
          "GUID",
          "type",
          "name",
          "position",
          "dimensions",
          "med_box",
          "components",
        ].includes(x) || (o[x] = t[x]);
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
const $t = new sh(),
  oh = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: $t },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  nf = u.createContext(void 0),
  lh = ({ children: e }) => {
    const [t, n] = u.useState(!1),
      [s, o] = u.useState(null),
      [l, a] = u.useState(!0),
      [i, c] = u.useState(null),
      [h, x] = u.useState(null),
      [m, p] = u.useState("department"),
      [j, b] = u.useState(!1),
      [T, _] = u.useState(0),
      [f, d] = u.useState({ message: "", type: "success", isVisible: !1 }),
      [y, v] = u.useState(!1),
      [I, S] = u.useState(null),
      [E, F] = u.useState("edit"),
      [M, U] = u.useState(!1),
      [se, be] = u.useState(null),
      [k, N] = u.useState(!1),
      [L, P] = u.useState(null),
      [J, w] = u.useState(!1),
      [z, te] = u.useState(!1),
      [H, A] = u.useState(null),
      [Se, R] = u.useState(!1),
      [G, ge] = u.useState(null),
      [Z, Ie] = u.useState(!1),
      [Pe, Me] = u.useState(null),
      [Ge, ne] = u.useState(!1),
      [D, xe] = u.useState(null),
      [me, W] = u.useState(null),
      [ie, we] = u.useState(null),
      [O, ae] = u.useState("add"),
      [V, ye] = u.useState(!1),
      [de, je] = u.useState([]),
      [he, C] = u.useState([]),
      [$, q] = u.useState(!1),
      [fe, ce] = u.useState(!1),
      [Ce, Ue] = u.useState(""),
      [We, ct] = u.useState(!1),
      [Et, Pt] = u.useState(""),
      [ur, mn] = u.useState(!1),
      [Wr, Yr] = u.useState(null),
      [ul, Qn] = u.useState(null),
      [Xn, Qr] = u.useState(!1),
      [Xr, Kr] = u.useState(null),
      [fl, Jr] = u.useState(!1),
      [g, X] = u.useState(null),
      [re, B] = u.useState(null),
      pe = () => {
        (localStorage.removeItem("user_session"), n(!1), o(null));
      },
      Q = u.useCallback(() => {
        _((Re) => Re + 1);
      }, []),
      ee = u.useCallback((Re, Xe) => {
        d({ message: Re, type: Xe, isVisible: !0 });
      }, []),
      K = u.useCallback(() => {
        d((Re) => ({ ...Re, isVisible: !1 }));
      }, []),
      oe = (Re) => {
        (S(Re), F("edit"), v(!0));
      },
      Y = () => {
        const Re = {
          GUID: `new_medbox_${Date.now()}`,
          name: "",
          box_type: "",
          width: [],
          width_index: 0,
          med_info: [],
          parentShelf: null,
        };
        (S(Re), F("add"), v(!0));
      },
      le = () => {
        (v(!1), S(null), F("edit"));
      },
      Ne = (Re) => {
        (be(Re), U(!0));
      },
      ve = () => {
        (U(!1), be(null));
      },
      De = (Re) => {
        (P(Re), N(!0));
      },
      Te = () => {
        (N(!1), P(null));
      },
      Fe = (Re) => {
        (A(Re), te(!0));
      },
      Ae = () => {
        (te(!1), A(null));
      },
      Oe = (Re) => {
        (ge(Re), R(!0));
      },
      Le = () => {
        (R(!1), ge(null));
      },
      ke = (Re) => {
        (Me(Re), Ie(!0));
      },
      $e = () => {
        (Ie(!1), Me(null));
      },
      ze = (Re) => {
        (xe(Re), W(null), ae("add"), ne(!0));
      },
      He = (Re, Xe) => {
        (xe(Re), W(Xe));
        const Ke = JSON.parse(JSON.stringify(Xe));
        (we(Ke),
          console.log("📋 深拷貝暫存原始貨物資料:", Ke),
          ae("edit"),
          ne(!0));
      },
      gt = () => {
        (ne(!1), xe(null), W(null), we(null), ae("add"));
      },
      Ye = () => {
        ye(!0);
      },
      hn = () => {
        ye(!1);
      },
      Zr = (Re = "") => {
        (Ue(Re), ce(!0));
      },
      pl = () => {
        ce(!1);
      },
      mf = (Re) => {
        (Pt(Re), ct(!0));
      },
      hf = () => {
        (ct(!1), Pt(""));
      },
      gf = (Re, Xe) => {
        (Yr(Re), Qn(Xe || null), mn(!0));
      },
      xf = () => {
        (mn(!1), Yr(null), Qn(null));
      },
      yf = (Re) => {
        (Kr(Re), Qr(!0));
      },
      vf = () => {
        (Qr(!1), Kr(null));
      },
      bf = (Re) => {
        (X(Re), Jr(!0));
      },
      wf = () => {
        (Jr(!1), X(null));
      },
      Nf = u.useCallback(async () => {
        if (!i) {
          console.warn("沒有選擇部門分類，無法重新載入資料");
          return;
        }
        (console.log("🔄 重新載入藥品地圖資料，部門類型:", i), w(!0));
        try {
          const Re = await Ee.getMedMapByDepartment(i);
          if (Re.Code === 200 && Re.Data) {
            console.log("📡 重新載入成功:", Re.Data);
            const Xe = $t.convertMedMapApiToFakeData(Re.Data);
            if (!$t.validateConvertedData(Xe)) {
              (console.error("❌ 轉換後的資料驗證失敗"), x(null));
              return;
            }
            (x(Xe), console.log("✅ 地圖資料已重新載入"));
          } else (console.error("❌ API 回傳錯誤:", Re), x(null));
        } catch (Re) {
          (console.error("💥 重新載入藥品地圖資料失敗:", Re), x(null));
        } finally {
          w(!1);
        }
      }, [i, w, x]),
      jf = u.useCallback((Re, Xe) => {
        x(
          (Ke) =>
            Ke &&
            Ke.map((ft) => {
              const nt = { ...ft };
              return (
                nt.contents &&
                  (nt.contents = nt.contents.map((Dn) => {
                    const fr = { ...Dn };
                    return (
                      fr.contents &&
                        (fr.contents = fr.contents.map((pr) => {
                          const mr = { ...pr };
                          return (
                            mr.contents &&
                              (mr.contents = mr.contents.map((_n) => {
                                if (_n.GUID === Re) {
                                  const Zt = { ..._n };
                                  return (
                                    Zt.medMapStock || (Zt.medMapStock = []),
                                    (Zt.medMapStock = [...Zt.medMapStock, Xe]),
                                    Zt
                                  );
                                }
                                return _n;
                              })),
                            mr
                          );
                        })),
                      fr
                    );
                  })),
                nt
              );
            }),
        );
      }, []),
      Sf = u.useCallback((Re, Xe, Ke) => {
        x(
          (dt) =>
            dt &&
            dt.map((nt) => {
              const Dn = { ...nt };
              return (
                Dn.contents &&
                  (Dn.contents = Dn.contents.map((fr) => {
                    const pr = { ...fr };
                    return (
                      pr.contents &&
                        (pr.contents = pr.contents.map((mr) => {
                          const _n = { ...mr };
                          return (
                            _n.contents &&
                              (_n.contents = _n.contents.map((Zt) => {
                                if (Zt.GUID === Re && Zt.medMapStock) {
                                  const Ii = { ...Zt };
                                  return (
                                    (Ii.medMapStock = Zt.medMapStock.map(
                                      (ml) =>
                                        ml.GUID === Xe ? { ...ml, ...Ke } : ml,
                                    )),
                                    Ii
                                  );
                                }
                                return Zt;
                              })),
                            _n
                          );
                        })),
                      pr
                    );
                  })),
                Dn
              );
            }),
        );
      }, []),
      Cf = u.useCallback(
        (Re) => {
          if (!h) return [];
          for (const Xe of h)
            if (Xe.contents) {
              for (const Ke of Xe.contents)
                if (Ke.contents) {
                  for (const dt of Ke.contents)
                    if (dt.contents) {
                      for (const ft of dt.contents)
                        if (ft.GUID === Re) return ft.medMapStock || [];
                    }
                }
            }
          return [];
        },
        [h],
      ),
      Df = u.useCallback((Re, Xe) => {
        x((Ke) => {
          if (!Ke) return Ke;
          const dt = (ft) =>
            ft.map((nt) =>
              nt.GUID === Re
                ? { ...nt, ...Xe }
                : nt.contents && Array.isArray(nt.contents)
                  ? { ...nt, contents: dt(nt.contents) }
                  : nt,
            );
          return dt(Ke);
        });
      }, []),
      _f = u.useCallback((Re) => {
        x((Xe) => {
          if (!Xe) return Xe;
          const Ke = (dt) =>
            dt
              .filter((ft) => ft.GUID !== Re)
              .map((ft) =>
                ft.contents && Array.isArray(ft.contents)
                  ? { ...ft, contents: Ke(ft.contents) }
                  : ft,
              );
          return Ke(Xe);
        });
      }, []),
      kf = u.useCallback((Re, Xe) => {
        x(
          (Ke) =>
            Ke &&
            Ke.map((dt) => {
              if (dt.GUID === Re) {
                const ft = dt.contents ? [...dt.contents, Xe] : [Xe];
                return { ...dt, contents: ft, medMap_Section: ft };
              }
              return dt;
            }),
        );
      }, []),
      Mf = u.useCallback((Re, Xe) => {
        x((Ke) => {
          if (!Ke) return Ke;
          const dt = (ft) =>
            ft.map((nt) => {
              if (nt.GUID === Re) {
                const Dn = nt.contents ? [...nt.contents, Xe] : [Xe];
                return { ...nt, contents: Dn };
              }
              return nt.contents && Array.isArray(nt.contents)
                ? { ...nt, contents: dt(nt.contents) }
                : nt;
            });
          return dt(Ke);
        });
      }, []);
    return r.jsx(nf.Provider, {
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
        isAdminMode: j,
        setIsAdminMode: b,
        apiDepartmentData: h,
        setApiDepartmentData: x,
        viewMode: m,
        setViewMode: p,
        refreshTrigger: T,
        triggerRefresh: Q,
        addStockToShelf: jf,
        notification: f,
        showNotification: ee,
        hideNotification: K,
        medBoxModalOpen: y,
        setMedBoxModalOpen: v,
        selectedMedBox: I,
        setSelectedMedBox: S,
        openMedBoxModal: oe,
        closeMedBoxModal: le,
        modalMode: E,
        setModalMode: F,
        openAddMedBoxModal: Y,
        listDrawModalOpen: M,
        setListDrawModalOpen: U,
        selectedListDraw: se,
        setSelectedListDraw: be,
        openListDrawModal: Ne,
        closeListDrawModal: ve,
        gridDrawModalOpen: k,
        setGridDrawModalOpen: N,
        selectedGridDraw: L,
        setSelectedGridDraw: P,
        openGridDrawModal: De,
        closeGridDrawModal: Te,
        isLoadingMedMap: J,
        setIsLoadingMedMap: w,
        addParentContainerModalOpen: z,
        setAddParentContainerModalOpen: te,
        selectedDepartmentForAdd: H,
        setSelectedDepartmentForAdd: A,
        openAddParentContainerModal: Fe,
        closeAddParentContainerModal: Ae,
        addShelfDrawContainerModalOpen: Se,
        setAddShelfDrawContainerModalOpen: R,
        selectedSubContainerForAdd: G,
        setSelectedSubContainerForAdd: ge,
        openAddShelfDrawContainerModal: Oe,
        closeAddShelfDrawContainerModal: Le,
        addSubContainerModalOpen: Z,
        setAddSubContainerModalOpen: Ie,
        selectedParentContainerForAdd: Pe,
        setSelectedParentContainerForAdd: Me,
        openAddSubContainerModal: ke,
        closeAddSubContainerModal: $e,
        addStoreItemModalOpen: Ge,
        setAddStoreItemModalOpen: ne,
        selectedStoreShelfForAdd: D,
        setSelectedStoreShelfForAdd: xe,
        selectedStockItemForEdit: me,
        setSelectedStockItemForEdit: W,
        originalStockItemBackup: ie,
        storeItemModalMode: O,
        setStoreItemModalMode: ae,
        openAddStoreItemModal: ze,
        openEditStoreItemModal: He,
        closeAddStoreItemModal: gt,
        updateStockInShelf: Sf,
        getShelfStocks: Cf,
        updateContainerInLocalData: Df,
        removeContainerFromLocalData: _f,
        addParentContainerToLocalData: kf,
        addSubContainerToLocalData: Mf,
        addDepartmentModalOpen: V,
        setAddDepartmentModalOpen: ye,
        allDepartmentsList: de,
        setAllDepartmentsList: je,
        openAddDepartmentModal: Ye,
        closeAddDepartmentModal: hn,
        reloadMedMapData: Nf,
        qrCodeScannerModalOpen: fe,
        qrCodeScannerMode: Ce,
        setQRCodeScannerModalOpen: ce,
        openQRCodeScannerModal: Zr,
        closeQRCodeScannerModal: pl,
        addBarcodeModalOpen: We,
        setAddBarcodeModalOpen: ct,
        openAddBarcodeModal: mf,
        closeAddBarcodeModal: hf,
        initialBarcodeValue: Et,
        containerDetailModalOpen: ur,
        setContainerDetailModalOpen: mn,
        selectedContainerForDetail: Wr,
        setSelectedContainerForDetail: Yr,
        highlightedMedicineCode: ul,
        setHighlightedMedicineCode: Qn,
        openContainerDetailModal: gf,
        closeContainerDetailModal: xf,
        editStoreShelfModalOpen: Xn,
        setEditStoreShelfModalOpen: Qr,
        selectedStoreShelfForEdit: Xr,
        setSelectedStoreShelfForEdit: Kr,
        openEditStoreShelfModal: yf,
        closeEditStoreShelfModal: vf,
        activeCanvas: re,
        setActiveCanvas: B,
        editParentContainerModalOpen: fl,
        setEditParentContainerModalOpen: Jr,
        selectedParentContainerForEdit: g,
        setSelectedParentContainerForEdit: X,
        openEditParentContainerModal: bf,
        closeEditParentContainerModal: wf,
        medicineList: he,
        setMedicineList: C,
        isLoadingMedicines: $,
        setIsLoadingMedicines: q,
      },
      children: e,
    });
  },
  it = () => {
    const e = u.useContext(nf);
    if (e === void 0)
      throw new Error("useDrugMap must be used within a DrugMapProvider");
    return e;
  },
  ah = {
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
  rf = u.createContext(void 0),
  ih = ({ children: e }) => {
    const [t, n] = u.useState("zh-TW"),
      s = (o) => ah[t][o] || o;
    return r.jsx(rf.Provider, {
      value: { language: t, setLanguage: n, t: s },
      children: e,
    });
  },
  It = () => {
    const e = u.useContext(rf);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ch = {
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
 */ const dh = (e) =>
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
        x,
      ) =>
        u.createElement(
          "svg",
          {
            ref: x,
            ...ch,
            width: o,
            height: o,
            stroke: s,
            strokeWidth: a ? (Number(l) * 24) / Number(o) : l,
            className: ["lucide", `lucide-${dh(e)}`, i].join(" "),
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
 */ const uh = qe("Archive", [
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
 */ const Gc = qe("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sf = qe("Building2", [
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
 */ const Fr = qe("Camera", [
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
 */ const fh = qe("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const io = qe("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const of = qe("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ph = qe("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mh = qe("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lf = qe("EyeOff", [
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
 */ const af = qe("Eye", [
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
 */ const hh = qe("Globe", [
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
 */ const cf = qe("Grid3x3", [
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
 */ const ki = qe("Layers", [
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
 */ const gh = qe("Lightbulb", [
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
 */ const xh = qe("ListX", [
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
 */ const Ta = qe("List", [
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
 */ const Gt = qe("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mi = qe("Lock", [
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
 */ const yh = qe("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vh = qe("Package", [
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
 */ const kr = qe("Pen", [
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
 */ const bh = qe("Pill", [
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
 */ const At = qe("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wo = qe("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $n = qe("Settings", [
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
 */ const Mr = qe("Trash2", [
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
 */ const df = qe("Unlock", [
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
 */ const wh = qe("Warehouse", [
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
 */ const Nh = qe("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tt = qe("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  jh = () => {
    const { sidebarOpen: e, setSidebarOpen: t } = it(),
      { t: n } = It();
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
              children: r.jsx(ki, { className: "w-5 h-5" }),
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
                ? r.jsx(Ta, { className: "w-6 h-6" })
                : r.jsx(Ta, { className: "w-6 h-6" }),
            }),
          ],
        }),
      }),
    });
  },
  Sh = () => {
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
      { language: c, setLanguage: h, t: x } = It(),
      [m, p] = No.useState(!1),
      j = () => {
        h(c === "zh-TW" ? "en" : "zh-TW");
      },
      b = No.useMemo(() => {
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
                        r.jsx(sf, { className: "w-4 h-4" }),
                        r.jsx("span", {
                          className: "text-sm font-medium",
                          children: x("topbar.department"),
                        }),
                      ],
                    }),
                    r.jsxs("button", {
                      onClick: () => t("medicine"),
                      className: `flex items-center space-x-2 px-3 py-1.5 rounded-md transition-all duration-300 ease-in-out transform ${e === "medicine" ? "bg-white text-green-600 shadow-sm scale-105" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:scale-102"}`,
                      children: [
                        r.jsx(bh, { className: "w-4 h-4" }),
                        r.jsx("span", {
                          className: "text-sm font-medium",
                          children: x("topbar.medicine"),
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
                    ? r.jsx(mh, { className: "w-4 h-4" })
                    : r.jsx(of, { className: "w-4 h-4" }),
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
                          r.jsx(At, { className: "w-4 h-4" }),
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
                    r.jsx(hh, { className: "w-4 h-4" }),
                    r.jsx("span", {
                      className: "text-sm font-medium",
                      children: x("topbar.language"),
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
                    r.jsx(yh, { className: "w-4 h-4" }),
                    r.jsx("span", {
                      className: "text-sm font-medium",
                      children: x("topbar.logout"),
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
  Ch = [
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
  Dh = ({ isOpen: e, onClose: t }) => {
    const [n, s] = u.useState("blue"),
      [o, l] = u.useState(1),
      [a, i] = u.useState(60),
      [c, h] = u.useState(120),
      [x, m] = u.useState(""),
      [p, j] = u.useState(""),
      [b, T] = u.useState([]),
      [_, f] = u.useState([]),
      [d, y] = u.useState([]),
      [v, I] = u.useState(!1),
      [S, E] = u.useState(!1),
      F = u.useRef(null),
      M = u.useRef(null),
      U = u.useRef(null),
      se = u.useRef(null);
    (u.useEffect(() => {
      if (e) {
        const w = localStorage.getItem("medMap_setting");
        if (w)
          try {
            const z = JSON.parse(w);
            (s(z.light_color || "blue"),
              l(z.brightness !== void 0 ? z.brightness : 1),
              i(z.light_sec !== void 0 ? z.light_sec : 60),
              h(z.refresh_interval !== void 0 ? z.refresh_interval : 120),
              m(z.default_person || ""),
              j(z.default_person_id || ""));
          } catch (z) {
            (console.error("讀取設定失敗:", z),
              s("blue"),
              l(1),
              i(60),
              h(120),
              m(""),
              j(""));
          }
        else (s("blue"), l(1), i(60), h(120), m(""), j(""));
        be();
      }
    }, [e]),
      u.useEffect(() => {
        const w = (z) => {
          (U.current &&
            !U.current.contains(z.target) &&
            F.current &&
            !F.current.contains(z.target) &&
            I(!1),
            se.current &&
              !se.current.contains(z.target) &&
              M.current &&
              !M.current.contains(z.target) &&
              E(!1));
        };
        return (
          document.addEventListener("mousedown", w),
          () => document.removeEventListener("mousedown", w)
        );
      }, []));
    const be = async () => {
        try {
          const w = await Ee.getAllStaffInfo();
          w.Code === 200 && w.Data && T(w.Data);
        } catch (w) {
          console.error("獲取人員資料失敗:", w);
        }
      },
      k = (w) => {
        if ((m(w), w.trim() === "")) {
          (f([]), I(!1));
          return;
        }
        const z = b.filter(
          (te) => te.name && te.name.toLowerCase().includes(w.toLowerCase()),
        );
        (f(z), I(z.length > 0));
      },
      N = (w) => {
        if ((j(w), w.trim() === "")) {
          (y([]), E(!1));
          return;
        }
        const z = b.filter(
          (te) => te.ID && te.ID.toLowerCase().includes(w.toLowerCase()),
        );
        (y(z), E(z.length > 0));
      },
      L = (w) => {
        (m(w.name), j(w.ID), I(!1));
      },
      P = (w) => {
        (m(w.name), j(w.ID), E(!1));
      },
      J = () => {
        const w = {
          light_color: n,
          brightness: o,
          light_sec: a,
          refresh_interval: c,
          default_person: x,
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
                      children: r.jsx(tt, { className: "w-5 h-5" }),
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
                                  value: x,
                                  onChange: (w) => k(w.target.value),
                                  onFocus: () => {
                                    x.trim() && k(x);
                                  },
                                  placeholder: "請輸入人員名稱",
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                }),
                                v &&
                                  r.jsx("div", {
                                    ref: U,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: _.map((w, z) =>
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
                                        z,
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
                                    children: d.map((w, z) =>
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
                                        z,
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
                          children: Ch.map((w) =>
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
                      onClick: J,
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
  _h = ({ isOpen: e, onClose: t, onConfirm: n }) => {
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
                          children: r.jsx(Mi, {
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
                      children: r.jsx(tt, { className: "w-6 h-6" }),
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
                              ? r.jsx(lf, { className: "w-5 h-5" })
                              : r.jsx(af, { className: "w-5 h-5" }),
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
      { t: x } = It(),
      [m, p] = u.useState(new Set()),
      [j, b] = u.useState([]),
      [T, _] = u.useState(!0),
      [f, d] = u.useState([]),
      [y, v] = u.useState(!1),
      [I, S] = u.useState(!1),
      E = () => {
        c ? h(!1) : S(!0);
      },
      F = (k) => {
        k === "66437068" ? (h(!0), S(!1)) : alert("密碼錯誤，無法開啟後台模式");
      };
    u.useEffect(() => {
      (async () => {
        _(!0);
        try {
          const N = await Ee.getDepartments();
          N.Code === 200 && N.Data
            ? (console.log(N.Data), b(N.Data), i(N.Data))
            : (console.error("API returned error:", N), b([]), i([]));
        } catch (N) {
          (console.error("Failed to fetch department data:", N), b([]), i([]));
        } finally {
          _(!1);
        }
      })();
    }, []);
    const M = j.reduce((k, N) => {
        const L = N["department_type "];
        return (k[L] || (k[L] = []), k[L].push(N), k);
      }, {}),
      U = (k) => {
        const N = new Set(m);
        (N.has(k) ? N.delete(k) : N.add(k), p(N));
      },
      se = async (k) => {
        (console.log("🏢 選擇部門:", k), s(k), await be(k), t(!1));
      },
      be = async (k) => {
        (console.log("🚀 開始取得藥品地圖資料，部門類型:", k), a(!0));
        try {
          const N = await Ee.getMedMapByDepartment(k);
          if (N.Code === 200 && N.Data) {
            console.log("📡 API 回傳成功:", N.Data);
            const L = $t.convertMedMapApiToFakeData(N.Data);
            if (!$t.validateConvertedData(L)) {
              (console.error("❌ 轉換後的資料驗證失敗"), d([]));
              return;
            }
            const J = $t.generateConversionReport(N.Data, L);
            (d(L),
              o(L),
              console.log("💾 已暫存轉換後的資料到狀態中"),
              console.log("📊 最終轉換結果:", L),
              console.log("📋 轉換報告:", J));
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
                          title: x("nav.home"),
                          children: r.jsx(ki, { className: "w-5 h-5" }),
                        }),
                        r.jsx("h1", {
                          className: "text-lg font-semibold text-gray-900",
                          children: x("sidebar.drugMap"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      type: "button",
                      onClick: () => t(!e),
                      className:
                        "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                      title: x("sidebar.closeSidebar"),
                      children: r.jsx(xh, { className: "w-6 h-6" }),
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
                          children: x("sidebar.departmentCategories"),
                        }),
                        Object.entries(M).map(([k, N]) =>
                          r.jsxs(
                            "div",
                            {
                              className: "space-y-1",
                              children: [
                                r.jsxs("button", {
                                  type: "button",
                                  onClick: () => se(k),
                                  disabled: l,
                                  className: `w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 border ${n === k ? "bg-blue-50 text-blue-700 border-blue-200 shadow-sm" : "text-gray-700 hover:bg-gray-50 hover:shadow-sm border-transparent"} ${l ? "opacity-50 cursor-not-allowed" : ""}`,
                                  children: [
                                    r.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        k === "B1F"
                                          ? r.jsx(sf, { className: "w-4 h-4" })
                                          : r.jsx(wh, { className: "w-4 h-4" }),
                                        r.jsxs("div", {
                                          className: "text-left",
                                          children: [
                                            r.jsx("div", {
                                              className: "font-medium",
                                              children: k,
                                            }),
                                            r.jsxs("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: [
                                                N.length,
                                                " ",
                                                x("sidebar.departments"),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    r.jsx("div", {
                                      onClick: (L) => {
                                        (L.stopPropagation(), U(k));
                                      },
                                      className:
                                        "p-1 hover:bg-gray-200/50 rounded transition-colors",
                                      children: m.has(k)
                                        ? r.jsx(of, { className: "w-4 h-4" })
                                        : r.jsx(ph, { className: "w-4 h-4" }),
                                    }),
                                  ],
                                }),
                                m.has(k) &&
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
                            k,
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
                          onClick: E,
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
                      children: r.jsx($n, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        r.jsx(Dh, { isOpen: y, onClose: () => v(!1) }),
        r.jsx(_h, { isOpen: I, onClose: () => S(!1), onConfirm: F }),
      ],
    });
  },
  Mh = () => {
    const { t: e } = It();
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
  Ih = ({
    component: e,
    scale: t,
    isLocked: n,
    isHighlighted: s = !1,
    onContainerClick: o,
  }) => {
    const l = u.useRef(null),
      { t: a } = It(),
      {
        apiDepartmentData: i,
        setApiDepartmentData: c,
        showNotification: h,
      } = it(),
      [x, m] = u.useState(!1),
      [p, j] = u.useState({ x: 0, y: 0 }),
      [b, T] = u.useState(e.position),
      [_, f] = u.useState(!1),
      [d, y] = u.useState(null),
      [v, I] = u.useState({ x: 0, y: 0 }),
      [S, E] = u.useState({ x: 0, y: 0 });
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
          const Z = localStorage.getItem("medMap_setting");
          if (Z) return JSON.parse(Z).light_color || "red";
        } catch (Z) {
          console.error("讀取高亮顏色設定失敗:", Z);
        }
        return "red";
      },
      M = u.useCallback(
        async (Z, Ie) => {
          if (!i) return;
          console.log("🔄 更新組件位置:", Z, Ie);
          const Pe = JSON.parse(JSON.stringify(i)),
            Me = (ne) => {
              for (const D of ne) {
                if (D.GUID === Z)
                  return (
                    (D.position = { x: Ie.x.toFixed(3), y: Ie.y.toFixed(3) }),
                    console.log(
                      "✅ 組件位置已更新:",
                      D.name,
                      Ie.x.toFixed(3),
                      Ie.y.toFixed(3),
                    ),
                    !0
                  );
                if (
                  (D.components &&
                    Array.isArray(D.components) &&
                    Me(D.components)) ||
                  (D.contents && Array.isArray(D.contents) && Me(D.contents))
                )
                  return !0;
              }
              return !1;
            };
          if (Me(Pe)) {
            (c(Pe), console.log("💾 全域資料已更新"));
            try {
              console.log("📡 開始同步後端位置資料...");
              const ne = await Ee.updateContainerPosition({
                GUID: Z,
                absolute_position: `${Ie.x.toFixed(3)},${Ie.y.toFixed(3)}`,
              });
              ne.Code === 200
                ? (console.log("✅ 後端位置同步成功", ne),
                  h("位置更新成功", "success"))
                : (console.error("❌ 後端位置同步失敗:", ne),
                  h(`位置更新失敗: ${ne.Result || "未知錯誤"}`, "error"));
            } catch (ne) {
              (console.error("💥 後端位置同步發生錯誤:", ne),
                h("位置更新失敗: 網路錯誤", "error"));
            }
          } else console.warn("⚠️ 未找到要更新的組件:", Z);
        },
        [i, c, h],
      ),
      { position: U, dimensions: se, name: be, type: k } = e,
      N = u.useCallback(
        (Z) => {
          const Ie = l.current;
          if (Ie)
            if ((E({ x: Z.clientX, y: Z.clientY }), n)) {
              (Z.preventDefault(),
                Z.stopPropagation(),
                Ie.setPointerCapture(Z.pointerId));
              const Pe = Ie.getBoundingClientRect(),
                Me = Z.clientX - Pe.left,
                Ge = Z.clientY - Pe.top;
              (j({ x: Me, y: Ge }), m(!0), f(!1));
            } else f(!1);
        },
        [n],
      ),
      L = u.useCallback(() => {
        if (!i) return [];
        const Z = [],
          Ie = (Pe) => {
            for (const Me of Pe)
              (Me.GUID !== e.GUID &&
                Me.position &&
                Z.push({
                  GUID: Me.GUID,
                  position: Me.position,
                  dimensions: Me.dimensions,
                }),
                Me.components &&
                  Array.isArray(Me.components) &&
                  Ie(Me.components),
                Me.contents && Array.isArray(Me.contents) && Ie(Me.contents));
          };
        return (Ie(i), Z);
      }, [i, e.GUID]),
      P = u.useCallback(
        (Z, Ie) => {
          const Me = L();
          let Ge = Z,
            ne = Ie;
          for (const D of Me) {
            const xe = parseFloat(D.position.x),
              me = parseFloat(D.position.y);
            if (
              (Math.abs(Z - xe) < 20 && (Ge = xe),
              Math.abs(Ie - me) < 20 && (ne = me),
              D.dimensions && e.dimensions)
            ) {
              const W = xe + parseFloat(D.dimensions.width),
                ie = Z + parseFloat(e.dimensions.width);
              Math.abs(ie - W) < 20 &&
                (Ge = W - parseFloat(e.dimensions.width));
              const we = me + parseFloat(D.dimensions.depth),
                O = Ie + parseFloat(e.dimensions.depth);
              Math.abs(O - we) < 20 &&
                (ne = we - parseFloat(e.dimensions.depth));
            }
          }
          return { x: Ge, y: ne };
        },
        [L, e.dimensions],
      ),
      J = u.useCallback(
        (Z) => {
          const Ie = Math.abs(Z.clientX - S.x),
            Pe = Math.abs(Z.clientY - S.y);
          if (((Ie > 5 || Pe > 5) && f(!0), !x || !n)) return;
          (Z.preventDefault(), Z.stopPropagation());
          const Me = l.current;
          if (!Me) return;
          const Ge = Me.closest("[data-canvas-content]");
          if (!Ge) return;
          const ne = Ge.getBoundingClientRect(),
            D = (Z.clientX - ne.left - p.x) / t,
            xe = (Z.clientY - ne.top - p.y) / t,
            me = P(D, xe);
          T(me);
        },
        [x, p, t, n, P, S],
      ),
      w = u.useCallback(
        (Z) => {
          const Ie = Math.abs(Z.clientX - S.x),
            Pe = Math.abs(Z.clientY - S.y),
            Me = Ie > 5 || Pe > 5;
          if (n) {
            if (!x) return;
            (Z.preventDefault(), Z.stopPropagation());
            const Ge = l.current;
            (Ge && Ge.releasePointerCapture(Z.pointerId),
              m(!1),
              Me ? M(e.GUID, b) : o && o(e),
              f(!1));
          } else
            (!Me && o && (Z.preventDefault(), Z.stopPropagation(), o(e)),
              f(!1));
        },
        [x, n, o, e, M, b, S],
      ),
      z = u.useCallback(
        (Z) => {
          const Ie = l.current;
          if (!Ie) return;
          const Pe = Z.touches[0];
          if (Pe && (I({ x: Pe.clientX, y: Pe.clientY }), n)) {
            (Z.preventDefault(), Z.stopPropagation(), y(Pe.identifier));
            const Me = Ie.getBoundingClientRect(),
              Ge = Pe.clientX - Me.left,
              ne = Pe.clientY - Me.top;
            (j({ x: Ge, y: ne }), m(!0));
          }
        },
        [n],
      ),
      te = u.useCallback(
        (Z) => {
          if (!x || !n || d === null) return;
          (Z.preventDefault(), Z.stopPropagation());
          const Ie = l.current;
          if (!Ie) return;
          const Pe = Array.from(Z.touches).find((me) => me.identifier === d);
          if (!Pe) return;
          const Me = Ie.closest("[data-canvas-content]");
          if (!Me) return;
          const Ge = Me.getBoundingClientRect(),
            ne = (Pe.clientX - Ge.left - p.x) / t,
            D = (Pe.clientY - Ge.top - p.y) / t,
            xe = P(ne, D);
          T(xe);
        },
        [x, p, t, n, d, P],
      ),
      H = u.useCallback(
        (Z) => {
          const Ie = Array.from(Z.changedTouches)[0];
          if (!Ie) return;
          const Pe = Math.abs(Ie.clientX - v.x),
            Me = Math.abs(Ie.clientY - v.y),
            Ge = Pe > 10 || Me > 10;
          if (n) {
            if (
              !x ||
              d === null ||
              !Array.from(Z.changedTouches).some((D) => D.identifier === d)
            )
              return;
            (Z.preventDefault(),
              Z.stopPropagation(),
              m(!1),
              y(null),
              I({ x: 0, y: 0 }),
              Ge ? M(e.GUID, b) : o && o(e));
          } else
            (!Ge && o && (Z.preventDefault(), Z.stopPropagation(), o(e)),
              I({ x: 0, y: 0 }));
        },
        [x, n, d, M, e, b, v, o],
      ),
      A = u.useCallback(
        (Z) => {
          !x ||
            !n ||
            d === null ||
            !Array.from(Z.changedTouches).some((Pe) => Pe.identifier === d) ||
            (Z.preventDefault(),
            Z.stopPropagation(),
            T(e.position),
            m(!1),
            y(null),
            I({ x: 0, y: 0 }));
        },
        [x, n, d, e.position],
      ),
      Se = (Z) => {
        if (s) return `highlight-breathe-${F()}`;
        switch (Z) {
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
      R = (Z) => {
        if (s) return `highlight-breathe-${F()}`;
        switch (Z) {
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
      G = (Z) => {
        if (s) return `highlight-tag-${F()}`;
        switch (Z) {
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
      ge = (Z) => {
        const Ie =
          Z === "調劑台"
            ? "type.dispensingStation"
            : Z === "藥庫"
              ? "type.warehouse"
              : Z === "parent_container"
                ? "櫃體"
                : "type." + Z;
        return a(Ie) || Z;
      };
    return r.jsx("div", {
      ref: l,
      className: `flex flex-col absolute border-2 rounded-lg shadow-lg hover:shadow-xl ${Se(k)} overflow-hidden ${n ? "cursor-move" : "cursor-default"} ${x ? "shadow-2xl z-50" : ""}`,
      style: {
        left: `${b.x}px`,
        top: `${b.y}px`,
        minWidth: k === "調劑台" || k === "藥庫" ? "120px" : "180px",
        minHeight: k === "調劑台" || k === "藥庫" ? "60px" : "120px",
        userSelect: "none",
        touchAction: "none",
        transition: x
          ? "none"
          : "transform 0.2s ease-out, box-shadow 0.2s ease-out",
      },
      onPointerDown: N,
      onPointerMove: J,
      onPointerUp: w,
      onTouchStart: z,
      onTouchMove: te,
      onTouchEnd: H,
      onTouchCancel: A,
      children: r.jsx("div", {
        className: `w-full min-w-[400px] h-auto flex items-start flex-1 justify-between p-2 border-gray-600 ${R(k)}`,
        children: r.jsx("div", {
          className: "flex space-x-2 flex-1 min-w-0",
          children: r.jsxs("div", {
            className: "min-w-0 flex gap-4",
            children: [
              r.jsx("div", {
                className: "font-semibold text-[48px] truncate",
                children: be,
              }),
              r.jsx("div", {
                className: `flex items-center text-[28px] truncate py-2 px-4 text-white rounded-2xl ${G(k)}`,
                children: ge(k),
              }),
            ],
          }),
        }),
      }),
    });
  },
  dl = ({ isOpen: e, onClose: t, onScanSuccess: n, mode: s }) => {
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
      x = u.useRef(!1),
      [m, p] = u.useState(!1),
      [j, b] = u.useState(""),
      [T, _] = u.useState(null),
      [f, d] = u.useState(!1);
    u.useEffect(() => {
      const M = () => {
        const U = window.innerWidth < 680;
        d(U);
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
          (x.current = !1),
          p(!1),
          c.current &&
            (c.current.getTracks().forEach((M) => M.stop()),
            (c.current = null)),
          a.current && (a.current.srcObject = null));
      },
      I = async () => {
        if (
          (console.log("🔄 captureAndScan called"),
          !a.current || !i.current || !m)
        ) {
          console.log("❌ Early return: missing refs or not scanning");
          return;
        }
        if (x.current) {
          console.log("⏱️ Scan already in progress, skipping");
          return;
        }
        x.current = !0;
        const M = a.current,
          U = i.current,
          se = U.getContext("2d");
        if (!se || M.readyState !== M.HAVE_ENOUGH_DATA) {
          (console.log("❌ Video not ready or no context"),
            (x.current = !1),
            setTimeout(() => {
              m && I();
            }, 100));
          return;
        }
        ((U.width = M.videoWidth),
          (U.height = M.videoHeight),
          se.drawImage(M, 0, 0, U.width, U.height),
          U.toBlob(
            async (be) => {
              if (!be) return;
              const k = new File([be], "scan.jpg", { type: "image/jpeg" }),
                N = performance.now();
              try {
                console.log("📸 [相機掃描] 截取圖片並掃描...");
                const L = performance.now(),
                  P = await Ee.scanBarcode(k),
                  J = performance.now();
                if (
                  (console.log(
                    `⏱️ [相機掃描] 掃描條碼API用時: ${(J - L).toFixed(2)}ms`,
                  ),
                  !P.results || P.results.length === 0)
                ) {
                  (console.log("⚠️ 未辨識到條碼，立即進行下一輪掃描"),
                    (x.current = !1),
                    m && I());
                  return;
                }
                const w = P.results[0];
                if (!w.code) {
                  (console.log(
                    "⚠️ 辨識到條碼但無法讀取內容，立即進行下一輪掃描",
                  ),
                    (x.current = !1),
                    m && I());
                  return;
                }
                (console.log("✅ 成功辨識條碼:", w.code),
                  console.log("📋 條碼類型:", w.type),
                  console.log("📊 信心度:", w.conf),
                  (x.current = !1),
                  v(),
                  t());
                try {
                  const z = performance.now(),
                    te = await Ee.searchByBarCode(w.code);
                  console.log("AI掃描回傳:", te);
                  const H = performance.now();
                  if (
                    (console.log(
                      `⏱️ [相機掃描] 搜尋藥品資料API用時: ${(H - z).toFixed(2)}ms`,
                    ),
                    console.log("🔍 條碼搜尋結果:", te),
                    te.Code === 200)
                  )
                    if (
                      (console.log("✅ 找到藥品資料:", te.Data),
                      console.log("🎯 準備調用 onScanSuccess, mode:", s),
                      o("找到藥品資料", "success"),
                      n)
                    ) {
                      console.log("✅ onScanSuccess 存在，開始調用");
                      const A = performance.now();
                      n(w.code, te.Data);
                      const Se = performance.now();
                      console.log(
                        `⏱️ [相機掃描] 定位藥品用時: ${(Se - A).toFixed(2)}ms`,
                      );
                      const R = performance.now();
                      (console.log(
                        `⏱️ [相機掃描] 總用時: ${(R - N).toFixed(2)}ms`,
                      ),
                        console.log("✅ onScanSuccess 調用完成"));
                    } else console.warn("⚠️ onScanSuccess 不存在");
                  else
                    te.Code === -200 && te.Result === "查無資料"
                      ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                        o("查無條碼資料，請建立條碼", "warning"),
                        l(w.code))
                      : (console.log("❌ 搜尋失敗:", te.Result),
                        o(te.Result || "搜尋失敗", "error"));
                } catch (z) {
                  (console.error("條碼搜尋錯誤:", z),
                    o("搜尋失敗，請稍後再試", "error"));
                }
              } catch (L) {
                (console.error("掃描錯誤:", L),
                  (x.current = !1),
                  setTimeout(() => {
                    m && I();
                  }, 500));
              }
            },
            "image/jpeg",
            1,
          ));
      },
      S = () => {
        (console.log("🚀 開始連續掃描模式"), (x.current = !1), I());
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
          : (console.log("🛑 isScanning became false"), (x.current = !1));
      }, [m]));
    const E = () => {
        (v(), t());
      },
      F = async (M) => {
        if (!c.current || !h.current) return;
        const U = h.current.getBoundingClientRect(),
          se = (M.clientX - U.left) / U.width,
          be = (M.clientY - U.top) / U.height;
        (console.log("🎯 點擊聚焦位置:", { x: se, y: be }),
          _({ x: M.clientX - U.left, y: M.clientY - U.top }),
          setTimeout(() => _(null), 1e3));
        try {
          const k = c.current.getVideoTracks()[0],
            N = k.getCapabilities();
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
                pointsOfInterest: [{ x: se, y: be }],
              },
            ],
          };
          (await k.applyConstraints(L), console.log("✅ 聚焦成功"));
        } catch (k) {
          console.log("⚠️ 聚焦失敗 (可能不支援):", k);
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
                      r.jsx(Fr, { className: "w-6 h-6 text-white" }),
                      r.jsx("h2", {
                        className: "text-lg font-semibold text-white",
                        children: "條碼掃描",
                      }),
                    ],
                  }),
                  r.jsx("button", {
                    onClick: E,
                    className:
                      "p-2 hover:bg-gray-700 rounded-lg transition-colors",
                    children: r.jsx(tt, { className: "w-6 h-6 text-white" }),
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
                          children: r.jsx(Fr, {
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
                      onClick: E,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(tt, {
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
  uf = ({ isOpen: e, onClose: t, medicineList: n, onSelectMedicine: s }) => {
    const [o, l] = u.useState(""),
      [a, i] = u.useState([]),
      c = u.useRef(null);
    (u.useEffect(() => {
      e &&
        (l(""),
        i([]),
        setTimeout(() => {
          var x;
          (x = c.current) == null || x.focus();
        }, 100));
    }, [e]),
      u.useEffect(() => {
        if (!o.trim()) {
          i([]);
          return;
        }
        const x = o.toLowerCase().trim(),
          m = n.filter((p) => {
            const j = (p.CODE || "").toLowerCase(),
              b = (p.NAME || "").toLowerCase(),
              T = (p.CHT_NAME || "").toLowerCase(),
              _ = (p.SKDIACODE || "").toLowerCase();
            return (
              j.includes(x) || b.includes(x) || T.includes(x) || _.includes(x)
            );
          });
        i(m.slice(0, 50));
      }, [o, n]));
    const h = (x) => {
      (s && s(x), t());
    };
    return e
      ? r.jsx("div", {
          className:
            "fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 p-4",
          children: r.jsxs("div", {
            className:
              "bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col",
            onClick: (x) => x.stopPropagation(),
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
                    children: r.jsx(tt, { className: "w-6 h-6 text-gray-600" }),
                  }),
                ],
              }),
              r.jsxs("div", {
                className: "p-6 border-b border-gray-200",
                children: [
                  r.jsxs("div", {
                    className: "relative",
                    children: [
                      r.jsx(Wo, {
                        className:
                          "absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400",
                      }),
                      r.jsx("input", {
                        ref: c,
                        type: "text",
                        value: o,
                        onChange: (x) => l(x.target.value),
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
                        children: a.map((x) =>
                          r.jsxs(
                            "button",
                            {
                              onClick: () => h(x),
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
                                            children: x.CODE,
                                          }),
                                          x.DRUGKIND &&
                                            x.DRUGKIND !== "N" &&
                                            r.jsxs("span", {
                                              className:
                                                "px-2 py-0.5 text-xs font-medium bg-red-100 text-red-700 rounded",
                                              children: ["管制 ", x.DRUGKIND],
                                            }),
                                        ],
                                      }),
                                      r.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: x.NAME,
                                      }),
                                      r.jsx("p", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: x.CHT_NAME,
                                      }),
                                    ],
                                  }),
                                }),
                                x.SKDIACODE &&
                                  r.jsxs("p", {
                                    className: "text-xs text-gray-400 mt-2",
                                    children: ["料號: ", x.SKDIACODE],
                                  }),
                              ],
                            },
                            x.GUID,
                          ),
                        ),
                      })
                  : r.jsxs("div", {
                      className: "text-center py-12 text-gray-500",
                      children: [
                        r.jsx(Wo, {
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
          await Ee.lightByCodeNameType(
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
        await Ee.lightByCodeNameType(
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
const Ns = new Eh(),
  ff = (e, t, n = !0) => {
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
  Ph = ({ children: e }) => {
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
        activeCanvas: x,
        setActiveCanvas: m,
        medicineList: p,
      } = it(),
      { t: j } = It(),
      [b, T] = u.useState({ x: 0, y: 0, scale: 1 }),
      [_, f] = u.useState(!1),
      [d, y] = u.useState(!1),
      [v, I] = u.useState({ x: 0, y: 0 }),
      [S, E] = u.useState(!1),
      [F, M] = u.useState(!1),
      [U, se] = u.useState(!1),
      [be, k] = u.useState(""),
      [N, L] = u.useState([]),
      [P, J] = u.useState(null),
      [w, z] = u.useState(120),
      te = {
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
      A = (C, $, q, fe) => {
        try {
          const ce = H(),
            Ce = ce.findIndex(
              (We) => We.department === C && We.canvasType === $,
            ),
            Ue = { department: C, canvasType: $, scale: q, position: fe };
          (Ce >= 0 ? (ce[Ce] = Ue) : ce.push(Ue),
            localStorage.setItem("med_map_anchor", JSON.stringify(ce)));
        } catch (ce) {
          console.error("Error saving canvas state to localStorage:", ce);
        }
      },
      Se = (C, $) =>
        H().find((fe) => fe.department === C && fe.canvasType === $) || null;
    (u.useEffect(() => {
      const C = localStorage.getItem("medMap_setting");
      if (C)
        try {
          const $ = JSON.parse(C);
          $.refresh_interval !== void 0 && z($.refresh_interval);
        } catch ($) {
          console.error("Failed to load refresh interval:", $);
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
    const R = u.useCallback(async () => {
      if (!(x !== "infinite" || !n))
        try {
          console.log("🔄 Auto-refreshing data for InfiniteCanvas...");
          const C = await Ee.getMedMapByDepartment(n);
          if (C.Code === 200 && C.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const $ = $t.convertMedMapApiToFakeData(C.Data);
            if (!$t.validateConvertedData($)) {
              console.error("❌ 轉換後的資料驗證失敗");
              return;
            }
            (console.log(
              "✅ Data refreshed and converted successfully, updating state...",
            ),
              console.log("📊 Converted data to set:", $),
              o($));
          }
        } catch (C) {
          console.error("❌ Failed to auto-refresh data:", C);
        }
    }, [x, n, o]);
    (ff(R, w, x === "infinite" && !!n),
      u.useEffect(() => {
        if (n) {
          const C = Se(n, "InfiniteCanvas");
          if (C) T({ x: C.position.x, y: C.position.y, scale: C.scale });
          else {
            const $ = { x: 0, y: 0, scale: 1 };
            (T($), A(n, "InfiniteCanvas", $.scale, $));
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
        $ = [];
      console.log("🔍 Processing departments for InfiniteCanvas:", C);
      for (const q of C)
        if (
          (console.log("📦 Processing department:", q.name, "Type:", q.type),
          q.type === "調劑台" || q.type === "藥庫")
        ) {
          if (q.contents && Array.isArray(q.contents)) {
            console.log("  └─ Found", q.contents.length, "parent containers");
            for (const fe of q.contents)
              (console.log("    📌 Parent container:", {
                GUID: fe.GUID,
                name: fe.name,
                type: fe.type,
                position: fe.position,
                hasDimensions: !!fe.dimensions,
                dimensions: fe.dimensions,
              }),
                $.push({
                  GUID: fe.GUID,
                  type: fe.type,
                  name: `${fe.name}`,
                  position: fe.position,
                  dimensions: fe.dimensions || {
                    width: 200,
                    height: 200,
                    depth: 200,
                  },
                  med_list: fe.med_list || [],
                  serverName: fe.serverName,
                  serverType: fe.serverType,
                  Master_GUID: q.GUID,
                  contents: fe.contents || [],
                }));
          }
        } else
          q.contents &&
            Array.isArray(q.contents) &&
            q.contents.length > 0 &&
            (console.log("  └─ Found", q.contents.length, "contents"),
            $.push(...q.contents));
      return (
        console.log("✅ Total components for InfiniteCanvas:", $.length),
        $
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
            q.code === "Space" && !q.repeat && (q.preventDefault(), E(!0));
          },
          $ = (q) => {
            q.code === "Space" && (q.preventDefault(), E(!1), f(!1));
          };
        return (
          window.addEventListener("keydown", C),
          window.addEventListener("keyup", $),
          () => {
            (window.removeEventListener("keydown", C),
              window.removeEventListener("keyup", $));
          }
        );
      }, []));
    const ge = u.useCallback(
        (C) => {
          var q;
          if (d) return;
          if (
            (C.ctrlKey && !navigator.userAgent.includes("Mac")) ||
            (C.metaKey && navigator.userAgent.includes("Mac"))
          ) {
            (C.preventDefault(), C.stopPropagation());
            const fe =
              (q = t.current) == null ? void 0 : q.getBoundingClientRect();
            if (!fe) return;
            const ce = C.clientX - fe.left,
              Ce = C.clientY - fe.top,
              Ue = C.deltaY > 0 ? 0.9 : 1.1,
              We = Math.max(0.1, Math.min(5, b.scale * Ue)),
              ct = We / b.scale,
              Et = ce - (ce - b.x) * ct,
              Pt = Ce - (Ce - b.y) * ct;
            T({ x: Et, y: Pt, scale: We });
          }
        },
        [b, d],
      ),
      Z = u.useCallback(
        (C) => {
          d ||
            !S ||
            (f(!0), I({ x: C.clientX, y: C.clientY }), C.preventDefault());
        },
        [d, S],
      ),
      Ie = u.useCallback(
        (C) => {
          if (!_ || d) return;
          const $ = C.clientX - v.x,
            q = C.clientY - v.y;
          (T((fe) => ({ ...fe, x: fe.x + $, y: fe.y + q })),
            I({ x: C.clientX, y: C.clientY }));
        },
        [_, v, d],
      ),
      Pe = u.useCallback(() => {
        f(!1);
      }, []),
      Me = u.useCallback(
        (C) => {
          if (!s) return [];
          const $ = [],
            q = (fe) => {
              for (const ce of fe)
                (ce.med_list &&
                  Array.isArray(ce.med_list) &&
                  ce.med_list.some((Ue) => Ue.code == C) &&
                  (console.log("✅ 找到藥品所在櫃體:", ce.name, ce.GUID),
                  $.push(ce)),
                  ce.components &&
                    Array.isArray(ce.components) &&
                    q(ce.components),
                  ce.contents && Array.isArray(ce.contents) && q(ce.contents));
            };
          return (q(s), $);
        },
        [s],
      ),
      Ge = u.useCallback(() => {
        try {
          const $ = localStorage.getItem("medMap_setting");
          if ($) {
            const fe = JSON.parse($).light_sec;
            if (fe != null && fe !== "") {
              const ce = Number(fe);
              if (!isNaN(ce) && ce > 0) return ce * 1e3;
            }
          }
        } catch ($) {
          console.error("讀取亮燈設定失敗:", $);
        }
        return 6e4;
      }, []),
      ne = u.useCallback(() => {
        const C = { rgb_color: "255,0,0", brightness: "100" };
        try {
          const $ = localStorage.getItem("medMap_setting");
          if ($) {
            const q = JSON.parse($),
              fe = q.light_color || "red";
            return {
              rgb_color: te[fe] || te.red,
              brightness: String(q.brightness !== void 0 ? q.brightness : 100),
            };
          }
        } catch ($) {
          console.error("讀取亮燈設定失敗:", $);
        }
        return C;
      }, []),
      D = u.useCallback(
        async (C) => {
          if (!C.trim()) return;
          console.log("🔍 搜尋藥碼:", C);
          const $ = Me(C);
          if ($.length > 0) {
            const q = Ge(),
              fe = ne();
            (console.log(`🎯 高亮 ${$.length} 個櫃體:`, $),
              console.log(`⏱️ 亮燈時長: ${q}ms (${q / 1e3}秒)`),
              console.log("💡 亮燈設定:", fe),
              l("找到藥品，開始亮燈", "success"));
            const ce = $.map((Ue) => Ue.GUID);
            (L(ce), J(C), h(C));
            const Ce = $.filter((Ue) => Ue.serverName && Ue.serverType).map(
              (Ue) => ({
                serverName: Ue.serverName,
                serverType: Ue.serverType,
                medicineCode: C,
                deviceType: Ue.device_type,
              }),
            );
            Ce.length > 0 &&
              (await Ns.startLighting(Ce, fe.rgb_color, fe.brightness, q),
              setTimeout(() => {
                (L([]), J(null), h(null));
              }, q));
          } else
            (console.log("❌ 未找到包含此藥品的櫃體"), L([]), J(null), h(null));
        },
        [Me, Ge, ne, h],
      ),
      xe = (C, $) => {
        var Ce, Ue;
        console.log("📍 [相機掃描-部門視圖] 藥品定位模式 - 掃描到藥品:", {
          barcode: C,
          medicineData: $,
        });
        const q =
          ((Ce = $[0]) == null ? void 0 : Ce.CODE) ||
          ((Ue = $[0]) == null ? void 0 : Ue.code);
        M(!1);
        const fe = performance.now();
        D(q);
        const ce = performance.now();
        console.log(
          `⏱️ [相機掃描-部門視圖] 亮燈用時: ${(ce - fe).toFixed(2)}ms`,
        );
      },
      me = (C) => {
        console.log("📍 [藥品搜尋-部門視圖] 選擇藥品:", C);
        const $ = C.CODE;
        (se(!1), l(`選擇藥品: ${C.NAME}`, "success"));
        const q = performance.now();
        D($);
        const fe = performance.now();
        console.log(
          `⏱️ [藥品搜尋-部門視圖] 亮燈用時: ${(fe - q).toFixed(2)}ms`,
        );
      },
      W = async (C) => {
        var $, q;
        if (C.key === "Enter") {
          if ((C.preventDefault(), !be.trim())) {
            l("請輸入條碼", "warning");
            return;
          }
          const fe = performance.now();
          try {
            console.log("🔍 [手動輸入-部門視圖] 搜尋條碼:", be);
            const ce = performance.now(),
              Ce = await Ee.searchByBarCode(be),
              Ue = performance.now();
            if (
              (console.log(
                `⏱️ [手動輸入-部門視圖] API搜尋藥品資料用時: ${(Ue - ce).toFixed(2)}ms`,
              ),
              console.log("📋 條碼搜尋回應:", Ce),
              Ce.Code === 200 && Ce.Data && Ce.Data.length > 0)
            ) {
              const We =
                (($ = Ce.Data[0]) == null ? void 0 : $.CODE) ||
                ((q = Ce.Data[0]) == null ? void 0 : q.code);
              console.log("✅ 找到藥品資料:", Ce.Data);
              const ct = performance.now();
              D(We);
              const Et = performance.now();
              (console.log(
                `⏱️ [手動輸入-部門視圖] 亮燈用時: ${(Et - ct).toFixed(2)}ms`,
              ),
                k(""));
              const Pt = performance.now();
              console.log(
                `⏱️ [手動輸入-部門視圖] 總用時: ${(Pt - fe).toFixed(2)}ms`,
              );
            } else
              Ce.Code === -200 && Ce.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  l("查無條碼資料，請建立條碼", "warning"),
                  a(be),
                  k(""))
                : (console.log("❌ 搜尋失敗:", Ce.Result),
                  l(Ce.Result || "搜尋失敗", "error"));
          } catch (ce) {
            (console.error("條碼搜尋錯誤:", ce),
              l("搜尋失敗，請稍後再試", "error"));
          }
        }
      };
    (u.useEffect(
      () => () => {
        Ns.cleanup();
      },
      [],
    ),
      u.useEffect(() => {
        if (c) {
          console.log("🔔 Context highlightedMedicineCode 變化:", c);
          const C = Me(c);
          if (C.length > 0) {
            const $ = C.map((q) => q.GUID);
            (L($), J(c), console.log("✨ UI 高亮已更新:", $));
          }
        } else (L([]), J(null));
      }, [c, Me]));
    const [ie, we] = u.useState(null),
      [O, ae] = u.useState({ x: 0, y: 0 }),
      V = (C) => {
        if (C.length < 2) return null;
        const $ = C[0],
          q = C[1];
        return Math.sqrt(
          Math.pow(q.clientX - $.clientX, 2) +
            Math.pow(q.clientY - $.clientY, 2),
        );
      },
      ye = (C) => {
        if (C.length === 1) return { x: C[0].clientX, y: C[0].clientY };
        const $ = C[0],
          q = C[1];
        return {
          x: ($.clientX + q.clientX) / 2,
          y: ($.clientY + q.clientY) / 2,
        };
      },
      de = u.useCallback(
        (C) => {
          if (!d) {
            if (C.touches.length === 2) {
              const $ = V(C.touches),
                q = ye(C.touches);
              (we($), ae(q));
            } else if (C.touches.length === 1) {
              const $ = C.touches[0];
              (I({ x: $.clientX, y: $.clientY }), f(!0));
            }
          }
        },
        [d],
      ),
      je = u.useCallback(
        (C) => {
          var $;
          if (!d) {
            if ((C.preventDefault(), C.touches.length === 2 && ie !== null)) {
              const q = V(C.touches),
                fe = ye(C.touches);
              if (q && ie) {
                const ce =
                  ($ = t.current) == null ? void 0 : $.getBoundingClientRect();
                if (!ce) return;
                const Ce = q / ie,
                  Ue = Math.max(0.1, Math.min(5, b.scale * Ce)),
                  We = fe.x - ce.left,
                  ct = fe.y - ce.top,
                  Et = Ue / b.scale,
                  Pt = We - (We - b.x) * Et,
                  ur = ct - (ct - b.y) * Et;
                (T({ x: Pt, y: ur, scale: Ue }), we(q), ae(fe));
              }
            } else if (C.touches.length === 1 && _) {
              const q = C.touches[0],
                fe = q.clientX - v.x,
                ce = q.clientY - v.y;
              (T((Ce) => ({ ...Ce, x: Ce.x + fe, y: Ce.y + ce })),
                I({ x: q.clientX, y: q.clientY }));
            }
          }
        },
        [b, ie, _, v, d],
      ),
      he = u.useCallback(() => {
        (we(null), f(!1));
      }, []);
    return (
      u.useEffect(() => {
        const C = t.current;
        if (C)
          return (
            C.addEventListener("wheel", ge, { passive: !1 }),
            () => C.removeEventListener("wheel", ge)
          );
      }, [ge]),
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
                  children: r.jsx(Wo, { className: "w-6 h-6 text-blue-600" }),
                }),
                r.jsx("div", { className: "w-px h-6 bg-gray-200" }),
                r.jsx("input", {
                  type: "text",
                  value: be,
                  onChange: (C) => k(C.target.value),
                  onKeyPress: W,
                  placeholder: "輸入條碼或掃描...",
                  className:
                    "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
                }),
                r.jsx("button", {
                  onClick: () => M(!0),
                  className: "p-2 hover:bg-gray-50 transition-colors",
                  title: "掃描條碼",
                  children: r.jsx(Fr, { className: "w-6 h-6 text-blue-600" }),
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
                ? r.jsx(Mi, { className: "w-6 h-6" })
                : r.jsx(df, { className: "w-6 h-6" }),
            }),
          }),
          r.jsx("div", {
            ref: t,
            className: `w-full h-full relative ${S && !d ? "cursor-grab" : "cursor-default"} ${_ ? "cursor-grabbing" : ""}`,
            onMouseDown: Z,
            onMouseMove: Ie,
            onMouseUp: Pe,
            onMouseLeave: Pe,
            onTouchStart: de,
            onTouchMove: je,
            onTouchEnd: he,
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
                        Ih,
                        {
                          component: C,
                          scale: b.scale,
                          isLocked: d,
                          isHighlighted: N.includes(C.GUID),
                          onContainerClick: ($) => {
                            (console.log("🖱️ 點擊櫃體，傳遞亮燈藥品代碼:", P),
                              i($, P));
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
          r.jsx(dl, {
            isOpen: F,
            onClose: () => M(!1),
            onScanSuccess: xe,
            mode: "med_light_location_mode",
          }),
          r.jsx(uf, {
            isOpen: U,
            onClose: () => se(!1),
            medicineList: p,
            onSelectMedicine: me,
          }),
        ],
      })
    );
  },
  is = ({ content: e, isAdminMode: t }) => {
    const {
        openMedBoxModal: n,
        openAddMedBoxModal: s,
        openListDrawModal: o,
        openGridDrawModal: l,
        openAddShelfDrawContainerModal: a,
        openAddSubContainerModal: i,
        openAddStoreItemModal: c,
        setSelectedMedBox: h,
        setModalMode: x,
        setMedBoxModalOpen: m,
        showNotification: p,
        triggerRefresh: j,
        openEditStoreShelfModal: b,
        openEditParentContainerModal: T,
        updateContainerInLocalData: _,
        removeContainerFromLocalData: f,
      } = it(),
      { t: d } = It(),
      [y, v] = u.useState(!1),
      [I, S] = u.useState(""),
      [E, F] = u.useState(!1),
      [M, U] = u.useState(e.name),
      [se, be] = u.useState(!1),
      [k, N] = u.useState(!1);
    u.useEffect(() => {
      U(e.name);
    }, [e.name]);
    const L = (G) => {
        (G.stopPropagation(), S(e.name || ""), v(!0));
      },
      P = (G) => {
        (G.stopPropagation(), v(!1), S(""));
      },
      J = (G) => {
        (G.stopPropagation(), N(!0));
      },
      w = (G) => {
        (G.stopPropagation(), N(!1));
      },
      z = async (G) => {
        (G.stopPropagation(), be(!0));
        try {
          let ge;
          if (e.type === "parent_container")
            ge = await Ee.deleteParentContainer(e.GUID);
          else if (e.type === "sub_container")
            ge = await Ee.deleteSubContainer(e.GUID);
          else if (
            e.type === "store_shelves" ||
            e.type === "dispensing_shelves"
          )
            ge = await Ee.deleteShelfContainer(e.GUID);
          else {
            (p("不支援的容器類型", "error"), be(!1), N(!1));
            return;
          }
          ge.Code === 200
            ? (p("刪除成功", "success"), f(e.GUID), N(!1))
            : p(ge.Result || "刪除失敗", "error");
        } catch (ge) {
          (console.error("刪除容器失敗:", ge),
            p("刪除失敗，請稍後再試", "error"));
        } finally {
          (be(!1), N(!1));
        }
      },
      te = async (G) => {
        if ((G.stopPropagation(), !I.trim())) {
          p("名稱不能為空", "error");
          return;
        }
        if (I === e.name) {
          v(!1);
          return;
        }
        F(!0);
        try {
          const ge = [
            {
              GUID: e.GUID,
              name: I.trim(),
              Master_GUID: e.Master_GUID,
              position: e.gird_position,
              serverName: e.serverName,
              serverType: e.serverType,
            },
          ];
          let Z;
          if (e.type === "store_shelves" || e.type === "dispensing_shelves")
            Z = await Ee.updateMedMapShelf(ge);
          else if (e.type === "sub_container")
            Z = await Ee.updateSubSection(ge);
          else if (e.type === "parent_container")
            Z = await Ee.updateMedMapSection(ge);
          else {
            (p("不支援的容器類型", "error"), F(!1));
            return;
          }
          Z.Code === 200
            ? (p("名稱更新成功", "success"),
              v(!1),
              U(I.trim()),
              _(e.GUID, { name: I.trim() }))
            : p(Z.Result || "更新失敗", "error");
        } catch (ge) {
          (console.error("更新名稱失敗:", ge),
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
      Se = (G) => {
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
      R = (G) => {
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
                          value: I,
                          onChange: (G) => S(G.target.value),
                          onClick: (G) => G.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: E,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: te,
                          disabled: E,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(io, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: P,
                          disabled: E,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(tt, {
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
                          children: r.jsx(kr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !y &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Se(e.type)}`,
                    children: R(e.type),
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
                      onClick: J,
                      title: "刪除容器",
                      children: r.jsx(Mr, {
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
                    children: r.jsx(At, {
                      className: "w-6 h-6 text-green-700",
                    }),
                  }),
                ],
              }),
            k &&
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
                          onClick: z,
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
                          value: I,
                          onChange: (G) => S(G.target.value),
                          onClick: (G) => G.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: E,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (G) => {
                            (G.stopPropagation(), te(G));
                          },
                          disabled: E,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(io, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: (G) => {
                            (G.stopPropagation(), P(G));
                          },
                          disabled: E,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(tt, {
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
                          children: r.jsx(kr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" && !y
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Se(e.type)}`,
                      children: R(e.type),
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
                      onClick: J,
                      title: "刪除容器",
                      children: r.jsx(Mr, {
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
                    children: r.jsx(At, {
                      className: "w-6 h-6 text-green-700",
                    }),
                  }),
                ],
              }),
            k &&
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
                          onClick: z,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Se(e.type)}`,
                      children: R(e.type),
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
                children: r.jsx($n, { className: "w-6 h-6 text-gray-600" }),
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
                          value: I,
                          onChange: (G) => S(G.target.value),
                          onClick: (G) => G.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: E,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: te,
                          disabled: E,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(io, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: P,
                          disabled: E,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(tt, {
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
                          children: r.jsx(kr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !y &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Se(e.type)}`,
                    children: R(e.type),
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
                    onClick: J,
                    title: "刪除容器",
                    children: r.jsx(Mr, { className: "w-5 h-5 text-red-600" }),
                  }),
                r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (G) => {
                    G.stopPropagation();
                    const ge = {
                      GUID: `new_medbox_${Date.now()}`,
                      name: "",
                      box_type: "",
                      width: [],
                      width_index: 0,
                      med_info: [],
                      parentShelf: e,
                    };
                    (h(ge), x("add"), m(!0));
                  },
                  title: d("modal.add"),
                  children: r.jsx(At, { className: "w-6 h-6 text-green-700" }),
                }),
              ],
            }),
            k &&
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
                          onClick: z,
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
                          value: I,
                          onChange: (G) => S(G.target.value),
                          onClick: (G) => G.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: E,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (G) => {
                            (G.stopPropagation(), te(G));
                          },
                          disabled: E,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(io, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: (G) => {
                            (G.stopPropagation(), P(G));
                          },
                          disabled: E,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(tt, {
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
                          children: r.jsx(kr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !y &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Se(e.type)}`,
                    children: R(e.type),
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
                    onClick: J,
                    title: "刪除容器",
                    children: r.jsx(Mr, { className: "w-5 h-5 text-red-600" }),
                  }),
                r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (G) => {
                    (G.stopPropagation(), c(e));
                  },
                  title: d("modal.add"),
                  children: r.jsx(At, { className: "w-6 h-6 text-green-700" }),
                }),
              ],
            }),
            k &&
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
                          onClick: z,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Se(e.type)}`,
                      children: R(e.type),
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
              children: r.jsx($n, { className: "w-6 h-6 text-gray-600" }),
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Se(e.type)}`,
                      children: R(e.type),
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
              children: r.jsx($n, { className: "w-6 h-6 text-gray-600" }),
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${Se(e.type)}`,
                      children: R(e.type),
                    })
                  : null,
            }),
            e.type !== "none" &&
              r.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                title: d("modal.settings"),
                children: r.jsx($n, { className: "w-6 h-6 text-gray-600" }),
              }),
          ],
        });
    }
  },
  pf = u.forwardRef(({ children: e }, t) => {
    const n = u.useRef(null),
      {
        selectedDepartmentType: s,
        apiDepartmentData: o,
        setApiDepartmentData: l,
        setSidebarOpen: a,
        openAddParentContainerModal: i,
        openEditStoreItemModal: c,
        openQRCodeScannerModal: h,
        openAddBarcodeModal: x,
        showNotification: m,
        isAdminMode: p,
        activeCanvas: j,
        setActiveCanvas: b,
        medicineList: T,
      } = it(),
      [_, f] = u.useState({ x: 0, y: 0, scale: 1 }),
      [d, y] = u.useState(!1),
      [v, I] = u.useState(!1),
      [S, E] = u.useState({ x: 0, y: 0 }),
      [F, M] = u.useState(!1),
      [U, se] = u.useState(""),
      [be, k] = u.useState(!1),
      [N, L] = u.useState(!1),
      [P, J] = u.useState(null),
      [w, z] = u.useState(!1),
      [te, H] = u.useState(120),
      [A, Se] = u.useState({
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
      [R, G] = u.useState(null),
      ge = u.useRef({}),
      Z = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        ) ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0,
      Ie = 8,
      Pe = () => {
        try {
          const g = localStorage.getItem("med_map_anchor");
          return g ? JSON.parse(g) : [];
        } catch (g) {
          return (
            console.error("Error reading canvas states from localStorage:", g),
            []
          );
        }
      },
      Me = (g, X, re, B) => {
        try {
          const pe = Pe(),
            Q = pe.findIndex((K) => K.department === g && K.canvasType === X),
            ee = { department: g, canvasType: X, scale: re, position: B };
          (Q >= 0 ? (pe[Q] = ee) : pe.push(ee),
            localStorage.setItem("med_map_anchor", JSON.stringify(pe)));
        } catch (pe) {
          console.error("Error saving canvas state to localStorage:", pe);
        }
      },
      Ge = (g, X) =>
        Pe().find((B) => B.department === g && B.canvasType === X) || null;
    (u.useEffect(() => {
      const g = localStorage.getItem("medMap_setting");
      if (g)
        try {
          const X = JSON.parse(g);
          X.refresh_interval !== void 0 && H(X.refresh_interval);
        } catch (X) {
          console.error("Failed to load refresh interval:", X);
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
    const ne = u.useCallback(async () => {
      if (!(j !== "drug" || !s))
        try {
          console.log("🔄 Auto-refreshing data for DrugCanvas...");
          const g = await Ee.getMedMapByDepartment(s);
          if (g.Code === 200 && g.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const X = $t.convertMedMapApiToFakeData(g.Data);
            if (!$t.validateConvertedData(X)) {
              console.error("❌ 轉換後的資料驗證失敗");
              return;
            }
            (console.log(
              "✅ Data refreshed and converted successfully, updating state...",
            ),
              l(X));
          }
        } catch (g) {
          console.error("❌ Failed to auto-refresh data:", g);
        }
    }, [j, s, l]);
    (ff(ne, te, j === "drug" && !!s),
      u.useEffect(() => {
        if (s) {
          const g = Ge(s, "drugCanvas");
          if (g) f({ x: g.position.x, y: g.position.y, scale: g.scale });
          else {
            const X = { x: 0, y: 0, scale: 1 };
            (f(X), Me(s, "drugCanvas", X.scale, X));
          }
        }
      }, [s]),
      u.useEffect(() => {
        if (!s) return;
        const g = setTimeout(() => {
          Me(s, "drugCanvas", _.scale, { x: _.x, y: _.y });
        }, 500);
        return () => clearTimeout(g);
      }, [_, s]));
    const D = (g) =>
        [
          "parent_container",
          "sub_container",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
          "med_box",
        ].includes(g),
      xe = (g) =>
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
        })[g] || [],
      me = (g) => {
        const [X, re] = g.split(",").map(Number);
        return { row: X || 0, col: re || 0 };
      },
      W = (g, X) => {
        const re = (pe, Q = null) => {
            if (pe.GUID === g) return { container: pe, parent: Q };
            if (pe.contents)
              for (const ee of pe.contents) {
                const K = re(ee, pe);
                if (K) return K;
              }
            return null;
          },
          B = ur();
        for (const pe of B) {
          const Q = re(pe);
          if (Q) return Q;
        }
        return null;
      },
      ie = (g, X) => {
        if (!g.contents) return [];
        const re = X;
        if (!re) return g.contents;
        const B = me(re.gird_position);
        console.log("📤 移除容器位置:", B);
        for (const pe of g.contents) {
          const Q = me(pe.gird_position);
          if (Q.row === B.row && Q.col > B.col) {
            const ee = Q.col - 1;
            ((pe.gird_position = `${Q.row},${ee}`),
              console.log(
                `  ← 容器 ${pe.GUID}: (${Q.row},${Q.col}) → (${Q.row},${ee})`,
              ),
              (ge.current[pe.GUID] = {
                GUID: pe.GUID,
                Master_GUID: g.GUID,
                position: `${Q.row},${ee}`,
                serverName: g.serverName,
                serverType: g.serverType,
                type: pe.type,
                containerData: pe,
              }));
          }
        }
        return (console.log("✓ 重新計算完成"), g.contents);
      },
      we = (g, X, re, B, pe) => {
        if (
          (g.contents || (g.contents = []),
          console.log("📥 插入容器到位置:", `(${re},${B})`),
          console.log("   插入方向:", pe),
          console.log("   目標父容器:", g.GUID),
          console.log("   插入前容器數量:", g.contents.length),
          g.contents.length === 0)
        )
          ((re = 0), (B = 0), console.log("   父容器為空，放置在 (0,0)"));
        else {
          const Q = g.contents
            .filter((ee) => {
              const K = me(ee.gird_position || "0,0");
              return K.row === re && K.col >= B;
            })
            .sort((ee, K) => {
              const oe = me(ee.gird_position || "0,0");
              return me(K.gird_position || "0,0").col - oe.col;
            });
          console.log(`   同 row ${re} 需要移動的容器數量:`, Q.length);
          for (const ee of Q) {
            const K = me(ee.gird_position || "0,0"),
              oe = K.col + 1;
            ((ee.gird_position = `${K.row},${oe}`),
              console.log(
                `  → 容器 ${ee.GUID}: (${K.row},${K.col}) → (${K.row},${oe})`,
              ),
              (ge.current[ee.GUID] = {
                GUID: ee.GUID,
                Master_GUID: g.GUID,
                position: `${K.row},${oe}`,
                serverName: g.serverName,
                serverType: g.serverType,
                type: ee.type,
                containerData: ee,
              }));
          }
        }
        ((X.gird_position = `${re},${B}`),
          (X.Master_GUID = g.GUID),
          console.log(`Inserted container ${X.GUID} at position ${re},${B}`),
          g.contents.push(X),
          (ge.current[X.GUID] = {
            GUID: X.GUID,
            Master_GUID: g.GUID,
            position: `${re},${B}`,
            serverName: g.serverName,
            serverType: g.serverType,
            type: X.type,
            containerData: X,
          }),
          X.type === "dispensing_shelves" &&
            X.contents &&
            X.contents.forEach((Q) => {
              Q.type === "med_box" &&
                (ge.current[Q.GUID] = {
                  GUID: Q.GUID,
                  Master_GUID: Q.Master_GUID,
                  position: Q.gird_position,
                  serverName: g.serverName,
                  serverType: g.serverType,
                  type: Q.type,
                  containerData: Q,
                });
            }));
      },
      O = (g, X, re) => {
        const B = g.getBoundingClientRect(),
          pe = B.left + B.width / 2,
          Q = B.top + B.height / 2,
          ee = X - pe,
          K = re - Q;
        return Math.abs(ee) > Math.abs(K)
          ? ee > 0
            ? "right"
            : "left"
          : K > 0
            ? "bottom"
            : "top";
      },
      ae = (g, X, re, B) => {
        if (!v) return;
        if ((B.preventDefault(), B.stopPropagation(), A.floatingElement))
          try {
            A.floatingElement.parentNode &&
              A.floatingElement.parentNode.removeChild(A.floatingElement);
          } catch (le) {
            console.error("清除舊浮動元素失敗:", le);
          }
        const pe = Z(),
          Q =
            "touches" in B
              ? B.touches[0].clientX
              : ("pointerId" in B, B.clientX),
          ee =
            "touches" in B
              ? B.touches[0].clientY
              : ("pointerId" in B, B.clientY),
          K = re.getBoundingClientRect(),
          oe = { x: Q - K.left, y: ee - K.top },
          Y = re.cloneNode(!0);
        ((Y.style.position = "fixed"),
          (Y.style.left = `${Q - oe.x}px`),
          (Y.style.top = `${ee - oe.y}px`),
          (Y.style.width = `${K.width}px`),
          (Y.style.height = `${K.height}px`),
          (Y.style.zIndex = "9999"),
          (Y.style.opacity = "0.8"),
          (Y.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (Y.style.pointerEvents = "none"),
          document.body.appendChild(Y),
          console.log("開始拖曳 stockItem:", g),
          console.log("來源 shelf:", X),
          Se({
            isDragging: !0,
            draggedContainer: null,
            draggedElement: re,
            floatingElement: Y,
            originalParent: null,
            originalPosition: "",
            originalIndex: -1,
            mouseOffset: oe,
            isMobileDrag: pe,
            originalData: null,
            draggedStockItem: g,
            draggedStockShelf: X,
          }));
      },
      V = (g, X, re) => {
        if (!v || !D(g.type)) return;
        if (g.type === "sub_container" && !p) {
          m("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (g.type === "grid_draw" && !p) {
          m("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (g.type === "list_draw" && !p) {
          m("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (g.type === "parent_container" && !p) {
          m("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (g.type === "dispensing_shelves" && !p) {
          m("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (g.type === "store_shelves" && !p) {
          m("需要開啟後台模式才能移動該容器", "error");
          return;
        }
        if (
          ((ge.current = {}),
          re.preventDefault(),
          re.stopPropagation(),
          A.floatingElement)
        )
          try {
            A.floatingElement.parentNode &&
              A.floatingElement.parentNode.removeChild(A.floatingElement);
          } catch (Te) {
            console.error("清除舊浮動元素失敗:", Te);
          }
        const B = Z(),
          pe =
            "touches" in re
              ? re.touches[0].clientX
              : ("pointerId" in re, re.clientX),
          Q =
            "touches" in re
              ? re.touches[0].clientY
              : ("pointerId" in re, re.clientY),
          ee = X.getBoundingClientRect(),
          K = { x: pe - ee.left, y: Q - ee.top },
          oe = W(g.GUID);
        if (!oe) return;
        (console.log("拖曳目標", g), console.log("拖曳目標", oe));
        const Y = X.cloneNode(!0);
        ((Y.style.position = "fixed"),
          (Y.style.left = `${pe - K.x}px`),
          (Y.style.top = `${Q - K.y}px`),
          (Y.style.width = `${ee.width}px`),
          (Y.style.height = `${ee.height}px`),
          (Y.style.zIndex = "9999"),
          (Y.style.opacity = "0.8"),
          (Y.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (Y.style.pointerEvents = "none"),
          document.body.appendChild(Y));
        const le = oe.parent.contents.findIndex((Te) => Te.GUID === g.GUID),
          Ne = JSON.parse(JSON.stringify(oe.parent.contents));
        (oe.parent.contents.splice(le, 1), console.log(le));
        const ve = oe.parent,
          De = ie(oe.parent, g);
        ((oe.parent.contents = De),
          console.log(oe.parent),
          Se({
            isDragging: !0,
            draggedContainer: g,
            draggedElement: X,
            floatingElement: Y,
            originalParent: ve,
            originalPosition: g.gird_position,
            originalIndex: le,
            mouseOffset: K,
            isMobileDrag: B,
            originalData: Ne,
          }));
      },
      ye = (g) => {
        if (!A.isDragging || !A.floatingElement) return;
        const X = "touches" in g ? g.touches[0].clientX : g.clientX,
          re = "touches" in g ? g.touches[0].clientY : g.clientY;
        if (
          ((A.floatingElement.style.left = `${X - A.mouseOffset.x}px`),
          (A.floatingElement.style.top = `${re - A.mouseOffset.y}px`),
          A.draggedStockItem)
        ) {
          const Q = document.elementFromPoint(X, re),
            ee = Q == null ? void 0 : Q.closest("[data-stock-guid]");
          if (ee) {
            const oe = ee.getAttribute("data-stock-guid"),
              Y = (Ne) => {
                for (const ve of Ne) {
                  if (ve.type === "store_shelves" && ve.medMapStock) {
                    const De = ve.medMapStock.find((Te) => Te.GUID === oe);
                    if (De) return { stockItem: De, shelf: ve };
                  }
                  if (ve.contents) {
                    const De = Y(ve.contents);
                    if (De) return De;
                  }
                }
                return null;
              },
              le = Y(o);
            if (le && le.stockItem.GUID !== A.draggedStockItem.GUID) {
              const Ne = ee.getBoundingClientRect(),
                ve = Ne.left + Ne.width / 2,
                De = Ne.top + Ne.height / 2,
                Te = Math.abs(X - ve),
                Fe = Math.abs(re - De);
              let Ae;
              (Te > Fe
                ? (Ae = X < ve ? "left" : "right")
                : (Ae = re < De ? "top" : "bottom"),
                G({
                  container: le.shelf,
                  direction: null,
                  element: ee,
                  stockItem: le.stockItem,
                  stockItemDirection: Ae,
                }));
              return;
            }
          }
          const K = Q == null ? void 0 : Q.closest("[data-container-guid]");
          if (K) {
            const oe = K.getAttribute("data-container-guid"),
              Y = W(oe);
            if (Y && Y.container.type === "store_shelves") {
              G({ container: Y.container, direction: null, element: K });
              return;
            }
          }
          G(null);
          return;
        }
        const B = document.elementFromPoint(X, re),
          pe = B == null ? void 0 : B.closest("[data-container-guid]");
        if (pe) {
          const Q = pe.getAttribute("data-container-guid"),
            ee = W(Q);
          if (ee) {
            const K = xe(A.draggedContainer.type),
              oe = A.draggedContainer.type,
              Y = ee.container.type;
            if (ee.container.GUID === A.draggedContainer.GUID) {
              G(null);
              return;
            }
            if (K.includes(Y)) {
              const le = O(pe, X, re);
              if (oe === "med_box" && !["left", "right"].includes(le)) {
                G(null);
                return;
              }
              (ee.container.gird_position ||
                console.warn(
                  `⚠️ 目標容器 ${ee.container.GUID} 缺少 gird_position`,
                ),
                G({ container: ee.container, direction: le, element: pe }));
              return;
            }
            if (oe === "parent_container" || oe === "sub_container") {
              let le = pe.parentElement;
              for (; le; ) {
                if (le.hasAttribute("data-container-guid")) {
                  const Ne = le.getAttribute("data-container-guid"),
                    ve = W(Ne);
                  if (ve && K.includes(ve.container.type)) {
                    if (ve.container.GUID === A.draggedContainer.GUID) {
                      le = le.parentElement;
                      continue;
                    }
                    const De = O(le, X, re);
                    (console.log(
                      `🔼 向上找到有效目標: ${ve.container.type} (${ve.container.name})`,
                    ),
                      ve.container.gird_position ||
                        console.warn(
                          `⚠️ 父容器 ${ve.container.GUID} 缺少 gird_position`,
                        ),
                      G({
                        container: ve.container,
                        direction: De,
                        element: le,
                      }));
                    return;
                  }
                }
                le = le.parentElement;
              }
            }
          }
        }
        G(null);
      },
      de = async (g) => {
        var pe, Q;
        if (!A.isDragging) return;
        if (A.floatingElement)
          try {
            A.floatingElement.parentNode &&
              A.floatingElement.parentNode.removeChild(A.floatingElement);
          } catch (ee) {
            console.error("清除浮動元素失敗:", ee);
          }
        if (A.draggedStockItem && A.draggedStockShelf) {
          if (
            (console.log("StockItem 拖曳結束"),
            console.log("Drop Target:", R),
            R)
          ) {
            const ee = [];
            let K = null,
              oe = A.draggedStockShelf;
            if (R.stockItem && R.stockItemDirection) {
              (console.log(
                `拖曳到 stockItem ${R.stockItem.GUID} 的 ${R.stockItemDirection} 邊`,
              ),
                (K = R.container),
                (oe = A.draggedStockShelf));
              const Y = A.draggedStockItem,
                le = (R.stockItem.location || "0,0").split(","),
                Ne = Number(le[0] || "0"),
                ve = (Y.location || "0,0").split(","),
                De = Number(ve[0] || "0"),
                Te = Number(ve[1] || "0");
              if (K.GUID === oe.GUID) {
                console.log("同一層架內移動");
                const Ae = Number(le[1] || "0");
                if (
                  R.stockItemDirection === "top" ||
                  R.stockItemDirection === "bottom"
                ) {
                  console.log("垂直移動（上下）");
                  let Oe;
                  if (
                    (R.stockItemDirection === "top" ? (Oe = Ae) : (Oe = Ae + 1),
                    De === Ne)
                  ) {
                    (console.log("同一列內的深度移動"),
                      oe.medMapStock.forEach((ke) => {
                        const $e = (ke.location || "0,0").split(","),
                          ze = Number($e[0] || "0"),
                          He = Number($e[1] || "0");
                        if (ze === De && ke.GUID !== Y.GUID) {
                          if (He > Te) {
                            const gt = He - 1;
                            (gt >= Oe
                              ? (ke.location = `${ze},${gt + 1}`)
                              : (ke.location = `${ze},${gt}`),
                              ee.push({ ...ke }));
                          } else if (He < Te) {
                            const gt = Oe > Te ? Oe - 1 : Oe;
                            He >= gt &&
                              ((ke.location = `${ze},${He + 1}`),
                              ee.push({ ...ke }));
                          }
                        }
                      }));
                    const Le = Oe > Te ? Oe - 1 : Oe;
                    ((Y.location = `${Ne},${Le}`), ee.push({ ...Y }));
                  } else
                    (console.log("跨列移動到目標列"),
                      oe.medMapStock.forEach((Le) => {
                        const ke = (Le.location || "0,0").split(","),
                          $e = Number(ke[0] || "0"),
                          ze = Number(ke[1] || "0");
                        $e === De &&
                          Le.GUID !== Y.GUID &&
                          ze > Te &&
                          ((Le.location = `${$e},${ze - 1}`),
                          ee.push({ ...Le }));
                      }),
                      oe.medMapStock.forEach((Le) => {
                        const ke = (Le.location || "0,0").split(","),
                          $e = Number(ke[0] || "0"),
                          ze = Number(ke[1] || "0");
                        $e === Ne &&
                          Le.GUID !== Y.GUID &&
                          ze >= Oe &&
                          ((Le.location = `${$e},${ze + 1}`),
                          ee.push({ ...Le }));
                      }),
                      (Y.location = `${Ne},${Oe}`),
                      ee.push({ ...Y }));
                } else {
                  console.log("水平移動（左右）");
                  const Oe = oe.medMapStock.findIndex(
                    ($e) => $e.GUID === Y.GUID,
                  );
                  (Oe !== -1 && oe.medMapStock.splice(Oe, 1),
                    oe.medMapStock.forEach(($e) => {
                      const ze = ($e.location || "0,0").split(","),
                        He = Number(ze[0] || "0"),
                        gt = Number(ze[1] || "0");
                      He > De && ($e.location = `${He - 1},${gt}`);
                    }));
                  let Le;
                  const ke = Ne > De ? Ne - 1 : Ne;
                  (R.stockItemDirection === "left" ? (Le = ke) : (Le = ke + 1),
                    oe.medMapStock.forEach(($e) => {
                      const ze = ($e.location || "0,0").split(","),
                        He = Number(ze[0] || "0"),
                        gt = Number(ze[1] || "0");
                      He >= Le && ($e.location = `${He + 1},${gt}`);
                    }),
                    (Y.location = `${Le},${Te}`),
                    oe.medMapStock.push(Y),
                    oe.medMapStock.sort(($e, ze) => {
                      const He = ($e.location || "0,0").split(","),
                        gt = (ze.location || "0,0").split(",");
                      return Number(He[0] || "0") - Number(gt[0] || "0");
                    }),
                    oe.medMapStock.forEach(($e) => {
                      ee.push({ ...$e });
                    }));
                }
              } else {
                console.log("不同層架間移動");
                const Ae = Number(le[1] || "0"),
                  Oe = oe.medMapStock.findIndex((Le) => Le.GUID === Y.GUID);
                if (
                  (Oe !== -1 && oe.medMapStock.splice(Oe, 1),
                  R.stockItemDirection === "top" ||
                    R.stockItemDirection === "bottom")
                ) {
                  (console.log("跨層架垂直移動到目標列"),
                    oe.medMapStock.forEach((ke) => {
                      const $e = (ke.location || "0,0").split(","),
                        ze = Number($e[0] || "0"),
                        He = Number($e[1] || "0");
                      ze === De &&
                        He > Te &&
                        ((ke.location = `${ze},${He - 1}`), ee.push({ ...ke }));
                    }));
                  let Le;
                  (R.stockItemDirection === "top" ? (Le = Ae) : (Le = Ae + 1),
                    K.medMapStock.forEach((ke) => {
                      const $e = (ke.location || "0,0").split(","),
                        ze = Number($e[0] || "0"),
                        He = Number($e[1] || "0");
                      ze === Ne &&
                        He >= Le &&
                        ((ke.location = `${ze},${He + 1}`), ee.push({ ...ke }));
                    }),
                    (Y.location = `${Ne},${Le}`),
                    (Y.shelf_guid = K.GUID),
                    K.medMapStock.push(Y),
                    K.medMapStock.sort((ke, $e) => {
                      const ze = (ke.location || "0,0").split(","),
                        He = ($e.location || "0,0").split(",");
                      return Number(ze[0] || "0") - Number(He[0] || "0");
                    }),
                    ee.push({ ...Y }));
                } else {
                  (console.log("跨層架水平移動"),
                    oe.medMapStock.forEach((ke) => {
                      const $e = (ke.location || "0,0").split(","),
                        ze = Number($e[0] || "0"),
                        He = Number($e[1] || "0");
                      ze > De &&
                        ((ke.location = `${ze - 1},${He}`), ee.push({ ...ke }));
                    }));
                  let Le;
                  (R.stockItemDirection === "left" ? (Le = Ne) : (Le = Ne + 1),
                    K.medMapStock.forEach((ke) => {
                      const $e = (ke.location || "0,0").split(","),
                        ze = Number($e[0] || "0"),
                        He = Number($e[1] || "0");
                      ze >= Le &&
                        ((ke.location = `${ze + 1},${He}`), ee.push({ ...ke }));
                    }),
                    (Y.location = `${Le},${Te}`),
                    (Y.shelf_guid = K.GUID),
                    K.medMapStock.push(Y),
                    K.medMapStock.sort((ke, $e) => {
                      const ze = (ke.location || "0,0").split(","),
                        He = ($e.location || "0,0").split(",");
                      return Number(ze[0] || "0") - Number(He[0] || "0");
                    }),
                    ee.push({ ...Y }));
                }
              }
            } else if (R.container.type === "store_shelves") {
              (console.log("拖曳到 store_shelves 容器"),
                (K = R.container),
                (oe = A.draggedStockShelf));
              const Y = A.draggedStockItem,
                le = (Y.location || "0,0").split(","),
                Ne = Number(le[0] || "0"),
                ve = oe.medMapStock.findIndex((De) => De.GUID === Y.GUID);
              (ve !== -1 &&
                (oe.medMapStock.splice(ve, 1),
                oe.medMapStock.forEach((De) => {
                  const Te = (De.location || "0,0").split(","),
                    Fe = Number(Te[0] || "0"),
                    Ae = Number(Te[1] || "0");
                  Fe > Ne &&
                    ((De.location = `${Fe - 1},${Ae}`), ee.push({ ...De }));
                })),
                (Y.location = "0,0"),
                (Y.shelf_guid = K.GUID),
                K.medMapStock || (K.medMapStock = []),
                K.medMapStock.forEach((De) => {
                  const Te = (De.location || "0,0").split(","),
                    Fe = Number(Te[0] || "0"),
                    Ae = Number(Te[1] || "0");
                  ((De.location = `${Fe + 1},${Ae}`), ee.push({ ...De }));
                }),
                K.medMapStock.push(Y),
                K.medMapStock.sort((De, Te) => {
                  const Fe = (De.location || "0,0").split(","),
                    Ae = (Te.location || "0,0").split(",");
                  return Number(Fe[0] || "0") - Number(Ae[0] || "0");
                }),
                ee.push({ ...Y }));
            }
            if (ee.length > 0) {
              console.log("準備更新的 stockItems:", ee);
              let Y = [];
              if (oe && K && oe.GUID !== K.GUID) {
                (console.log("🔄 跨層架移動，收集所有相關藥品"),
                  console.log("📦 來源層架 GUID:", oe.GUID),
                  console.log("📦 目標層架 GUID:", K.GUID));
                const le = (oe.medMapStock || []).map((ve) => ({
                    GUID: ve.GUID,
                    code: ve.code || "",
                    device_type: ve.device_type || "",
                    expiry_date: ve.expiry_date || [],
                    ip_light: ve.ip_light || "",
                    ip: ve.ip || "",
                    led_index: ve.led_index || "",
                    location: ve.location || "0,0",
                    lot: ve.lot || [],
                    material_no: ve.material_no || "",
                    name: ve.name || "",
                    qty: ve.qty || [],
                    shelf_guid: oe.GUID,
                  })),
                  Ne = (K.medMapStock || []).map((ve) => ({
                    GUID: ve.GUID,
                    code: ve.code || "",
                    device_type: ve.device_type || "",
                    expiry_date: ve.expiry_date || [],
                    ip_light: ve.ip_light || "",
                    ip: ve.ip || "",
                    led_index: ve.led_index || "",
                    location: ve.location || "0,0",
                    lot: ve.lot || [],
                    material_no: ve.material_no || "",
                    name: ve.name || "",
                    qty: ve.qty || [],
                    shelf_guid: K.GUID,
                  }));
                ((Y = [...le, ...Ne]),
                  console.log("📤 發送藥品總數:", Y.length),
                  console.log("  - 來源層架藥品:", le.length),
                  console.log("  - 目標層架藥品:", Ne.length));
              } else
                (console.log("📝 同層架內移動，只發送變動的藥品"), (Y = ee));
              try {
                const le =
                    (K == null ? void 0 : K.serverName) ||
                    (oe == null ? void 0 : oe.serverName) ||
                    "",
                  Ne =
                    (K == null ? void 0 : K.serverType) ||
                    (oe == null ? void 0 : oe.serverType) ||
                    "",
                  ve = await Ee.updateStock(Y, le, Ne);
                if (ve.Code === 200) {
                  m("藥品位置更新成功", "success");
                  try {
                    const De = await Ee.getMedMapByDepartment(s);
                    if (De.Code === 200 && De.Data) {
                      const Te = $t.convertMedMapApiToFakeData(De.Data);
                      $t.validateConvertedData(Te) && l(Te);
                    }
                  } catch (De) {
                    console.error("刷新數據失敗:", De);
                  }
                } else m(ve.Result || "更新失敗", "error");
              } catch (le) {
                (console.error("更新 stockItem 失敗:", le),
                  m("更新失敗，請稍後再試", "error"));
              }
            }
          }
          (Se({
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
        let X = null,
          re = null,
          B = null;
        if (
          (console.log("Drop Target:", R),
          console.log("Is Mobile Drag:", A.isMobileDrag),
          A.isMobileDrag)
        )
          if (R) {
            ((X = R.direction), (B = R.container));
            const ee = R.container.gird_position;
            console.log("目標容器原始位置:", ee);
            const K = W(R.container.Master_GUID || R.container.GUID);
            (console.log("🔍 移除前查找目標父容器:"),
              console.log(
                "  - 查找 GUID:",
                R.container.Master_GUID || R.container.GUID,
              ),
              console.log(
                "  - 找到的父容器:",
                (pe = K == null ? void 0 : K.container) == null
                  ? void 0
                  : pe.GUID,
              ),
              console.log(
                "  - 父容器類型:",
                (Q = K == null ? void 0 : K.container) == null
                  ? void 0
                  : Q.type,
              ));
            const oe = W(A.draggedContainer.GUID);
            let Y = null;
            if (oe) {
              Y = oe.parent.GUID;
              const Oe = oe.parent.contents.findIndex(
                (ke) => ke.GUID === A.draggedContainer.GUID,
              );
              oe.parent.contents.splice(Oe, 1);
              const Le = ie(oe.parent, A.draggedContainer);
              oe.parent.contents = Le;
            }
            let le = K;
            if (!le) {
              console.warn(
                "⚠️ 透過 Master_GUID 找不到父容器，嘗試透過目標容器 GUID 查找",
              );
              const Oe = W(R.container.GUID);
              Oe && Oe.parent
                ? ((le = { container: Oe.parent, parent: null }),
                  console.log(
                    "✓ 透過目標容器 GUID 找到父容器:",
                    Oe.parent.GUID,
                  ))
                : console.error("❌ 完全找不到目標父容器");
            }
            let Ne = R.container;
            if (Y && le && le.container.GUID === Y) {
              const Oe = le.container.contents.find(
                (Le) => Le.GUID === R.container.GUID,
              );
              Oe
                ? ((Ne = Oe),
                  console.log(
                    "同一父容器內移動，更新後的目標容器位置:",
                    Oe.gird_position,
                  ))
                : (console.log("找不到更新後的目標容器，使用原始位置:", ee),
                  (Ne = { ...R.container, gird_position: ee }));
            }
            const ve = Ne.gird_position || ee;
            (console.log("最終使用的目標位置:", ve),
              (!ve || ve === "0,0") &&
                (console.error("❌ 警告：目標位置無效或為 0,0"),
                console.error(
                  "  - targetContainer.gird_position:",
                  Ne.gird_position,
                ),
                console.error("  - originalTargetPosition:", ee),
                console.error("  - dropTarget.container:", R.container)));
            const De = me(ve || "0,0");
            let Te = De.row,
              Fe = De.col;
            switch (
              (console.log("計算後的新位置 (插入前):", { row: Te, col: Fe }),
              R.direction)
            ) {
              case "top":
                Te = Math.max(0, De.row);
                break;
              case "bottom":
                Te = De.row + 1;
                break;
              case "left":
                Fe = Math.max(0, De.col);
                break;
              case "right":
                Fe = De.col + 1;
                break;
            }
            let Ae = (le == null ? void 0 : le.container) || R.container;
            if (
              (console.log("📦 目標父容器決定:"),
              console.log("  - targetParentData 存在:", !!le),
              console.log(
                "  - 使用的父容器 GUID:",
                Ae == null ? void 0 : Ae.GUID,
              ),
              console.log(
                "  - 使用的父容器類型:",
                Ae == null ? void 0 : Ae.type,
              ),
              console.log("  - dropTarget.container.class:", R.container.class),
              console.log(
                "  - dragState.draggedContainer.class:",
                A.draggedContainer.class,
              ),
              A.draggedContainer.class != R.container.class &&
                ((Ae = R.container),
                console.log(
                  "  → class 不同，改用 dropTarget.container 作為父容器",
                )),
              A.draggedContainer.type === "med_box" &&
                R.container.type !== "med_box")
            )
              if (
                (console.log("藥盒移動目標到層架上"),
                (Ae = R.container),
                Ae.contents.length > 0)
              ) {
                let Oe = 0,
                  Le = 0;
                Ae.contents.forEach((ke) => {
                  const $e = me(ke.gird_position || "0,0").row,
                    ze = me(ke.gird_position || "0,0").col;
                  (Oe > $e && (Oe = $e), Le > ze && (Le = ze));
                });
                for (let ke = 0; ke <= Le; ke++)
                  for (let $e = 0; $e <= Oe; $e++) {
                    const ze = `${ke},${$e}`;
                    Ae.contents.filter((gt) => gt.grid_position === ze)
                      .length === 0 && ((Te = ke), (Fe = $e));
                  }
              } else ((Te = 0), (Fe = 0));
            ((re = Ae), we(Ae, A.draggedContainer, Te, Fe, R.direction));
          } else
            (console.log("無效拖放，復原所有容器位置"),
              A.originalData &&
                A.originalParent &&
                (A.originalParent.contents = JSON.parse(
                  JSON.stringify(A.originalData),
                )),
              (X = null),
              (B = null),
              (re = A.originalParent));
        else if (R) {
          ((X = R.direction), (B = R.container));
          const ee = W(A.draggedContainer.GUID);
          let K = null;
          if (
            (console.log("=== 開始處理容器拖曳 ==="),
            console.log("拖曳容器 GUID:", A.draggedContainer.GUID),
            console.log("拖曳容器原始位置:", A.draggedContainer.gird_position),
            ee)
          ) {
            ((K = ee.parent.GUID),
              console.log("原始父容器 GUID:", K),
              console.log(
                "移除前父容器的 contents 數量:",
                ee.parent.contents.length,
              ));
            const Te = ee.parent.contents.findIndex(
              (Ae) => Ae.GUID === A.draggedContainer.GUID,
            );
            (ee.parent.contents.splice(Te, 1),
              console.log(
                "移除後父容器的 contents 數量:",
                ee.parent.contents.length,
              ));
            const Fe = ie(ee.parent, A.draggedContainer);
            ((ee.parent.contents = Fe),
              console.log("重新計算後的容器列表:"),
              ee.parent.contents.forEach((Ae) => {
                console.log(`  - ${Ae.GUID}: ${Ae.gird_position}`);
              }));
          }
          const oe = W(R.container.Master_GUID || R.container.GUID);
          let Y = R.container;
          if (
            (console.log("目標容器原始位置:", R.container.gird_position),
            K && oe && oe.container.GUID === K)
          ) {
            console.log("✓ 在同一個父容器內移動");
            const Te = oe.container.contents.find(
              (Fe) => Fe.GUID === R.container.GUID,
            );
            Te &&
              ((Y = Te),
              console.log(
                "同一父容器內移動，更新後的目標容器位置:",
                Te.gird_position,
              ));
          } else console.log("✗ 跨父容器移動或父容器不同");
          const le = me(Y.gird_position || "0,0");
          let Ne = le.row,
            ve = le.col;
          switch (R.direction) {
            case "top":
              Ne = Math.max(0, le.row);
              break;
            case "bottom":
              Ne = le.row + 1;
              break;
            case "left":
              ve = Math.max(0, le.col);
              break;
            case "right":
              ve = le.col + 1;
              break;
          }
          (console.log("------目標容器", R),
            console.log("------拖曳容器", A.draggedContainer));
          let De = (oe == null ? void 0 : oe.container) || R.container;
          if (
            (console.log(A.draggedContainer.class),
            console.log(R.container.class),
            console.log(A.draggedContainer.class != R.container.class),
            A.draggedContainer.class != R.container.class &&
              ((De = R.container),
              console.log("------這邊顯示放到上層容器現象"),
              console.log("------目標容器", R),
              console.log("------拖曳容器", A.draggedContainer),
              console.log("------目標父容器", De)),
            A.draggedContainer.type === "med_box" &&
              R.container.type !== "med_box")
          )
            if (
              (console.log("藥盒移動目標到層架上"),
              (De = R.container),
              De.contents.length > 0)
            ) {
              let Te = 0,
                Fe = 0;
              De.contents.forEach((Ae) => {
                const Oe = me(Ae.gird_position || "0,0").row,
                  Le = me(Ae.gird_position || "0,0").col;
                (Te > Oe && (Te = Oe), Fe > Le && (Fe = Le));
              });
              for (let Ae = 0; Ae <= Fe; Ae++)
                for (let Oe = 0; Oe <= Te; Oe++) {
                  const Le = `${Ae},${Oe}`;
                  De.contents.filter(($e) => $e.grid_position === Le).length ===
                    0 && ((Ne = Ae), (ve = Oe));
                }
            } else ((Ne = 0), (ve = 0));
          ((re = De), we(De, A.draggedContainer, Ne, ve, R.direction));
        } else
          (console.log("無效拖放，復原所有容器位置"),
            A.originalData &&
              A.originalParent &&
              (A.originalParent.contents = JSON.parse(
                JSON.stringify(A.originalData),
              )),
            (X = null),
            (B = null),
            (re = A.originalParent));
        (Se({
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
          console.log("Drop Direction:", X),
          console.log("Parent Object:", re),
          console.log("Target Object:", B),
          console.log("API更新資料：", ge),
          await Th(ge));
      };
    (u.useEffect(() => {
      if (A.isDragging)
        if (Z()) {
          const X = (pe) => {
              (pe.preventDefault(), ye(pe));
            },
            re = (pe) => de(),
            B = (pe) => de();
          return (
            document.addEventListener("pointermove", X, { passive: !1 }),
            document.addEventListener("pointerup", re),
            document.addEventListener("pointercancel", B),
            () => {
              (document.removeEventListener("pointermove", X),
                document.removeEventListener("pointerup", re),
                document.removeEventListener("pointercancel", B));
            }
          );
        } else {
          const X = (Q) => ye(Q),
            re = (Q) => de(),
            B = (Q) => {
              (Q.preventDefault(), ye(Q));
            },
            pe = (Q) => de();
          return (
            document.addEventListener("mousemove", X),
            document.addEventListener("mouseup", re),
            document.addEventListener("touchmove", B, { passive: !1 }),
            document.addEventListener("touchend", pe),
            () => {
              (document.removeEventListener("mousemove", X),
                document.removeEventListener("mouseup", re),
                document.removeEventListener("touchmove", B),
                document.removeEventListener("touchend", pe));
            }
          );
        }
    }, [A.isDragging, R]),
      u.useEffect(
        () => () => {
          if (A.floatingElement)
            try {
              A.floatingElement.parentNode &&
                A.floatingElement.parentNode.removeChild(A.floatingElement);
            } catch (g) {
              console.error("組件卸載時清除浮動元素失敗:", g);
            }
        },
        [A.floatingElement],
      ),
      u.useEffect(() => {
        const g = (re) => {
            re.code === "Space" && !re.repeat && (re.preventDefault(), M(!0));
          },
          X = (re) => {
            re.code === "Space" && (re.preventDefault(), M(!1), y(!1));
          };
        return (
          window.addEventListener("keydown", g),
          window.addEventListener("keyup", X),
          () => {
            (window.removeEventListener("keydown", g),
              window.removeEventListener("keyup", X));
          }
        );
      }, []));
    const je = u.useCallback(
        (g) => {
          var re;
          if (v) return;
          if (g.ctrlKey || g.metaKey) {
            (g.preventDefault(), g.stopPropagation());
            const B =
              (re = n.current) == null ? void 0 : re.getBoundingClientRect();
            if (!B) return;
            const pe = g.clientX - B.left,
              Q = g.clientY - B.top,
              ee = g.deltaY > 0 ? 0.9 : 1.1,
              K = Math.max(0.1, Math.min(5, _.scale * ee)),
              oe = K / _.scale,
              Y = pe - (pe - _.x) * oe,
              le = Q - (Q - _.y) * oe;
            f({ x: Y, y: le, scale: K });
          }
        },
        [_, v],
      ),
      he = u.useCallback(
        (g) => {
          v ||
            !F ||
            (y(!0),
            E({ x: g.clientX, y: g.clientY }),
            J({ x: g.clientX, y: g.clientY }),
            z(!1),
            g.preventDefault());
        },
        [v, F],
      ),
      C = u.useCallback(
        (g) => {
          if (!d || v) return;
          const X = g.clientX - S.x,
            re = g.clientY - S.y;
          if (P) {
            const B = Math.abs(g.clientX - P.x),
              pe = Math.abs(g.clientY - P.y);
            (B > 5 || pe > 5) && z(!0);
          }
          (f((B) => ({ ...B, x: B.x + X, y: B.y + re })),
            E({ x: g.clientX, y: g.clientY }));
        },
        [d, S, v, P],
      ),
      $ = u.useCallback(() => {
        (y(!1), J(null));
      }, []),
      [q, fe] = u.useState(null),
      [ce, Ce] = u.useState({ x: 0, y: 0 }),
      Ue = (g) => {
        if (g.length < 2) return null;
        const X = g[0],
          re = g[1];
        return Math.sqrt(
          Math.pow(re.clientX - X.clientX, 2) +
            Math.pow(re.clientY - X.clientY, 2),
        );
      },
      We = (g) => {
        if (g.length === 1) return { x: g[0].clientX, y: g[0].clientY };
        const X = g[0],
          re = g[1];
        return {
          x: (X.clientX + re.clientX) / 2,
          y: (X.clientY + re.clientY) / 2,
        };
      },
      ct = u.useCallback(
        (g) => {
          if (!v) {
            if (g.touches.length === 2) {
              const X = Ue(g.touches),
                re = We(g.touches);
              (fe(X), Ce(re));
            } else if (g.touches.length === 1) {
              const X = g.touches[0];
              (E({ x: X.clientX, y: X.clientY }), y(!0));
            }
          }
        },
        [v],
      ),
      Et = u.useCallback(
        (g) => {
          var X;
          if (!v) {
            if ((g.preventDefault(), g.touches.length === 2 && q !== null)) {
              const re = Ue(g.touches),
                B = We(g.touches);
              if (re && q) {
                const pe =
                  (X = n.current) == null ? void 0 : X.getBoundingClientRect();
                if (!pe) return;
                const Q = re / q,
                  ee = Math.max(0.1, Math.min(5, _.scale * Q)),
                  K = B.x - pe.left,
                  oe = B.y - pe.top,
                  Y = ee / _.scale,
                  le = K - (K - _.x) * Y,
                  Ne = oe - (oe - _.y) * Y;
                (f({ x: le, y: Ne, scale: ee }), fe(re), Ce(B));
              }
            } else if (g.touches.length === 1 && d) {
              const re = g.touches[0],
                B = re.clientX - S.x,
                pe = re.clientY - S.y;
              (f((Q) => ({ ...Q, x: Q.x + B, y: Q.y + pe })),
                E({ x: re.clientX, y: re.clientY }));
            }
          }
        },
        [_, q, d, S, v],
      ),
      Pt = u.useCallback(() => {
        (fe(null), y(!1));
      }, []);
    u.useEffect(() => {
      const g = n.current;
      if (g)
        return (
          g.addEventListener("wheel", je, { passive: !1 }),
          () => g.removeEventListener("wheel", je)
        );
    }, [je]);
    const ur = () => (!o || o.length === 0 ? [] : o),
      mn = (g) => {
        if (!g || g.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const X = g.map((Q) => ({
            ...Q,
            gridPos: me(Q.gird_position || "0,0"),
          })),
          re = Math.max(...X.map((Q) => Q.gridPos.row), 0),
          B = Math.max(...X.map((Q) => Q.gridPos.col), 0);
        return {
          sortedContents: X.sort((Q, ee) =>
            Q.gridPos.row !== ee.gridPos.row
              ? Q.gridPos.row - ee.gridPos.row
              : Q.gridPos.col - ee.gridPos.col,
          ),
          maxRow: re,
          maxCol: B,
        };
      },
      Wr = ur(),
      Yr = Math.max(...Wr.map((g) => me(g.gird_position || "0,0").row), 0),
      ul = Math.max(...Wr.map((g) => me(g.gird_position || "0,0").col), 0),
      Qn = (g) => {
        const X = (B) => {
            if (
              B.width &&
              Array.isArray(B.width) &&
              typeof B.width_index == "number" &&
              B.width_index >= 0 &&
              B.width_index < B.width.length
            ) {
              const Q = parseFloat(B.width[B.width_index]);
              if (!isNaN(Q)) {
                const ee = Q * 20;
                return Math.max(200, ee);
              }
            }
            return 200;
          },
          re = (B) => {
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
        switch (g.type) {
          case "med_box":
            return (
              X(g),
              r.jsxs(
                "div",
                {
                  "data-container-guid": g.GUID,
                  className: `${g.type !== "sub_container" ? "border-2 rounded-lg shadow-sm" : ""} ${re(g.type || 0)} min-h-[80px] flex flex-col flex-shrink-0 h-full overflow-hidden`,
                  children: [
                    r.jsx("div", {
                      onMouseDown:
                        v && D(g.type) && !Z()
                          ? (B) =>
                              V(
                                g,
                                B.currentTarget.closest(
                                  "[data-container-guid]",
                                ),
                                B,
                              )
                          : void 0,
                      onPointerDown:
                        v && D(g.type) && Z()
                          ? (B) =>
                              V(
                                g,
                                B.currentTarget.closest(
                                  "[data-container-guid]",
                                ),
                                B,
                              )
                          : void 0,
                      className: v && D(g.type) ? "cursor-move" : "",
                      children: r.jsx(is, { content: g, isAdminMode: p }),
                    }),
                    r.jsx("div", { className: "flex-1 p-1", children: Xn(g) }),
                  ],
                },
                g.GUID,
              )
            );
          case "sub_container":
          case "parent_container":
            return r.jsxs(
              "div",
              {
                "data-container-guid": g.GUID,
                className: `${re(g.type || 0)} border-2 overflow-hidden rounded-lg shadow-sm min-h-[80px] flex flex-col h-full`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      v && D(g.type) && !Z()
                        ? (B) =>
                            V(
                              g,
                              B.currentTarget.closest("[data-container-guid]"),
                              B,
                            )
                        : void 0,
                    onPointerDown:
                      v && D(g.type) && Z()
                        ? (B) =>
                            V(
                              g,
                              B.currentTarget.closest("[data-container-guid]"),
                              B,
                            )
                        : void 0,
                    className: v && D(g.type) ? "cursor-move" : "",
                    children: r.jsx(is, { content: g, isAdminMode: p }),
                  }),
                  r.jsx("div", { className: "flex-1  p-1", children: Xn(g) }),
                ],
              },
              g.GUID,
            );
          case "grid_draw":
            return r.jsxs(
              "div",
              {
                "data-container-guid": g.GUID,
                className: `${g.type !== "sub_container" ? "border-2 rounded-lg shadow-sm" : ""} ${re(g.type || 0)} min-h-[80px] flex flex-col h-full overflow-hidden`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      v && D(g.type) && !Z()
                        ? (B) =>
                            V(
                              g,
                              B.currentTarget.closest("[data-container-guid]"),
                              B,
                            )
                        : void 0,
                    onPointerDown:
                      v && D(g.type) && Z()
                        ? (B) =>
                            V(
                              g,
                              B.currentTarget.closest("[data-container-guid]"),
                              B,
                            )
                        : void 0,
                    className: v && D(g.type) ? "cursor-move" : "",
                    children: r.jsx(is, { content: g, isAdminMode: p }),
                  }),
                  r.jsx("div", {
                    className: "flex-1 p-1 flex items-center",
                    children: Xn(g),
                  }),
                ],
              },
              g.GUID,
            );
          case "dispensing_shelves":
          case "store_shelves":
            return r.jsxs(
              "div",
              {
                "data-container-guid": g.GUID,
                className: `${g.type !== "sub_container" ? "border-2 rounded-lg shadow-sm" : ""} ${re(g.type || 0)} min-h-[80px] flex flex-col h-full overflow-hidden`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      v && D(g.type) && !Z()
                        ? (B) =>
                            V(
                              g,
                              B.currentTarget.closest("[data-container-guid]"),
                              B,
                            )
                        : void 0,
                    onPointerDown:
                      v && D(g.type) && Z()
                        ? (B) =>
                            V(
                              g,
                              B.currentTarget.closest("[data-container-guid]"),
                              B,
                            )
                        : void 0,
                    className: v && D(g.type) ? "cursor-move" : "",
                    children: r.jsx(is, { content: g, isAdminMode: p }),
                  }),
                  r.jsx("div", {
                    className: "flex-1 p-1 h-full overflow-hidden",
                    children: Xn(g),
                  }),
                ],
              },
              g.GUID,
            );
          default:
            return r.jsxs(
              "div",
              {
                "data-container-guid": g.GUID,
                className: `${g.type !== "sub_container" ? "border-2 rounded-lg shadow-sm" : ""} ${re(g.type || 0)} min-h-[80px] flex flex-col h-full overflow-hidden ${g.type == "none" ? "opacity-0" : ""}`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      v && D(g.type) && !Z()
                        ? (B) =>
                            V(
                              g,
                              B.currentTarget.closest("[data-container-guid]"),
                              B,
                            )
                        : void 0,
                    onPointerDown:
                      v && D(g.type) && Z()
                        ? (B) =>
                            V(
                              g,
                              B.currentTarget.closest("[data-container-guid]"),
                              B,
                            )
                        : void 0,
                    className: v && D(g.type) ? "cursor-move" : "",
                    children: r.jsx(is, { content: g, isAdminMode: p }),
                  }),
                  r.jsx("div", { className: "flex-1 p-1", children: Xn(g) }),
                ],
              },
              g.GUID,
            );
        }
      },
      Xn = (g) => {
        const X = (re, B, pe) => {
          const Q = Array(B + 1)
              .fill(null)
              .map(() => Array(pe + 1).fill(!1)),
            ee = {};
          return (
            re.forEach((K) => {
              const oe = me(K.gird_position || "0,0");
              ((ee[`${oe.row},${oe.col}`] = K), (Q[oe.row][oe.col] = !0));
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: B + 1 }, (K, oe) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      style: { height: `${100 / (B + 1)}%`, minHeight: "80px" },
                      children: Array.from({ length: pe + 1 }, (Y, le) => {
                        const Ne = `${oe},${le}`,
                          ve = ee[Ne];
                        return ve
                          ? r.jsxs(
                              "td",
                              {
                                className: "align-top bg-transparent",
                                style: {
                                  width: `${100 / (pe + 1)}%`,
                                  height: `${100 / (B + 1)}%`,
                                  minHeight: "80px",
                                  border: "none",
                                  position: "relative",
                                },
                                children: [
                                  Qn(ve),
                                  (R == null ? void 0 : R.container.GUID) ===
                                    ve.GUID &&
                                    r.jsx("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none",
                                      children: r.jsx("div", {
                                        className: `absolute bg-blue-400 opacity-50 ${R.direction === "top" ? "top-0 left-0 right-0 h-1" : R.direction === "bottom" ? "bottom-0 left-0 right-0 h-1" : R.direction === "left" ? "left-0 top-0 bottom-0 w-1" : "right-0 top-0 bottom-0 w-1"}`,
                                      }),
                                    }),
                                ],
                              },
                              le,
                            )
                          : r.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (pe + 1)}%`,
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
                              le,
                            );
                      }),
                    },
                    oe,
                  ),
                ),
              }),
            })
          );
        };
        switch (g.type) {
          case "parent_container":
          case "sub_container":
            if (g.contents && g.contents.length > 0) {
              const {
                sortedContents: Y,
                maxRow: le,
                maxCol: Ne,
              } = mn(g.contents);
              return X(Y, le, Ne);
            } else
              return r.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "1px" },
                children: r.jsx("tbody", { children: r.jsx("tr", {}) }),
              });
          case "dispensing_shelves":
            if (g.contents && g.contents.length > 0) {
              const {
                sortedContents: Y,
                maxRow: le,
                maxCol: Ne,
              } = mn(g.contents);
              return X(Y, le, Ne);
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
            if (g.medMapStock && g.medMapStock.length > 0) {
              const Y = g.medMapStock,
                le = {};
              Y.forEach((Te) => {
                const Fe = (Te.location || "0,0").split(","),
                  Ae = Number(Fe[0] || "0"),
                  Oe = Number(Fe[1] || "0");
                (le[Ae] || (le[Ae] = []),
                  le[Ae].push({ ...Te, _position: Ae, _depth: Oe }));
              });
              const Ne = Object.keys(le)
                  .map(Number)
                  .sort((Te, Fe) => Te - Fe),
                ve = Ne.length;
              Math.max(...Ne.map((Te) => le[Te].length));
              const De = g.width ? g.width * 5 : 500;
              return r.jsx("div", {
                className: "flex h-full",
                style: { minWidth: `${De}px` },
                children: Ne.map((Te) => {
                  const Fe = le[Te].sort((ke, $e) => $e._depth - ke._depth),
                    Ae = ve > 0 ? 100 / ve : 100,
                    Oe = Fe.length,
                    Le = Oe > 0 ? 100 / Oe : 100;
                  return r.jsx(
                    "div",
                    {
                      className: "flex flex-shrink-0 flex-col m-1",
                      style: { width: `calc(${Ae}% - 8px)`, minWidth: "160px" },
                      children: Fe.map((ke, $e) => {
                        var He, gt;
                        const ze = $e === Oe - 1;
                        return r.jsxs(
                          "div",
                          {
                            className: `relative ${ze ? "" : "mb-1"}`,
                            style: {
                              height: `calc(${Le}% - ${ze ? "0px" : "0.25rem"})`,
                            },
                            "data-stock-guid": ke.GUID,
                            children: [
                              ((He = R == null ? void 0 : R.stockItem) == null
                                ? void 0
                                : He.GUID) === ke.GUID &&
                                (R == null ? void 0 : R.stockItemDirection) &&
                                r.jsxs("div", {
                                  className:
                                    "absolute inset-0 pointer-events-none z-20 rounded-lg overflow-hidden",
                                  children: [
                                    R.stockItemDirection === "top" &&
                                      r.jsx("div", {
                                        className:
                                          "absolute top-0 left-0 right-0 h-1 bg-blue-500 rounded-t-lg shadow-[0_0_6px_rgba(59,130,246,0.8)]",
                                      }),
                                    R.stockItemDirection === "bottom" &&
                                      r.jsx("div", {
                                        className:
                                          "absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded-b-lg shadow-[0_0_6px_rgba(59,130,246,0.8)]",
                                      }),
                                    R.stockItemDirection === "left" &&
                                      r.jsx("div", {
                                        className:
                                          "absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-lg shadow-[0_0_6px_rgba(59,130,246,0.8)]",
                                      }),
                                    R.stockItemDirection === "right" &&
                                      r.jsx("div", {
                                        className:
                                          "absolute right-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r-lg shadow-[0_0_6px_rgba(59,130,246,0.8)]",
                                      }),
                                    r.jsx("div", {
                                      className:
                                        "absolute bg-blue-400 opacity-10 inset-0",
                                    }),
                                  ],
                                }),
                              r.jsxs("div", {
                                className: `border-2 bg-yellow-50 border-yellow-400 rounded-lg p-2 h-full flex flex-col justify-center items-center cursor-pointer bg-white hover:bg-yellow-100 hover:border-yellow-500 hover:shadow-md transition-all ${v ? "cursor-move" : ""} ${((gt = R == null ? void 0 : R.stockItem) == null ? void 0 : gt.GUID) === ke.GUID ? "border-blue-400" : ""}`,
                                onMouseDown: (Ye) => {
                                  v
                                    ? ae(
                                        ke,
                                        g,
                                        Ye.currentTarget.closest(
                                          "[data-stock-guid]",
                                        ),
                                        Ye,
                                      )
                                    : !d &&
                                      !F &&
                                      (J({ x: Ye.clientX, y: Ye.clientY }),
                                      z(!1));
                                },
                                onMouseUp: (Ye) => {
                                  if (!d && !F && !w && P && !v) {
                                    const hn = Math.abs(Ye.clientX - P.x),
                                      Zr = Math.abs(Ye.clientY - P.y);
                                    hn <= 5 &&
                                      Zr <= 5 &&
                                      (Ye.stopPropagation(), c(g, ke));
                                  }
                                  v || (J(null), z(!1));
                                },
                                onTouchStart: (Ye) => {
                                  if (v && Z())
                                    ae(
                                      ke,
                                      g,
                                      Ye.currentTarget.closest(
                                        "[data-stock-guid]",
                                      ),
                                      Ye,
                                    );
                                  else if (!d && !v) {
                                    const hn = Ye.touches[0];
                                    (J({ x: hn.clientX, y: hn.clientY }),
                                      z(!1));
                                  }
                                },
                                onTouchEnd: (Ye) => {
                                  if (!d && !w && P && !v) {
                                    const hn = Ye.changedTouches[0],
                                      Zr = Math.abs(hn.clientX - P.x),
                                      pl = Math.abs(hn.clientY - P.y);
                                    Zr <= 5 &&
                                      pl <= 5 &&
                                      (Ye.stopPropagation(), c(g, ke));
                                  }
                                  v || (J(null), z(!1));
                                },
                                onPointerDown: (Ye) => {
                                  v &&
                                    Z() &&
                                    ae(
                                      ke,
                                      g,
                                      Ye.currentTarget.closest(
                                        "[data-stock-guid]",
                                      ),
                                      Ye,
                                    );
                                },
                                children: [
                                  r.jsx("div", {
                                    className:
                                      "py-1 text-base font-semibold text-gray-800 flex text-center text-ellipsis whitespace-normal items-center flex-1",
                                    children: ke.name || ke.material_no,
                                  }),
                                  r.jsxs("div", {
                                    className:
                                      "w-full flex justify-between items-end",
                                    children: [
                                      r.jsx("div", {
                                        className: "",
                                        children: r.jsxs("div", {
                                          className: "mt-1",
                                          children: ["[ ", +ke.qty || 0, " ]"],
                                        }),
                                      }),
                                      r.jsx("div", {
                                        className:
                                          "flex justify-end items-end mt-2",
                                        children: r.jsx("button", {
                                          onMouseDown: (Ye) => {
                                            Ye.stopPropagation();
                                          },
                                          onMouseUp: (Ye) => {
                                            Ye.stopPropagation();
                                          },
                                          onTouchStart: (Ye) => {
                                            Ye.stopPropagation();
                                          },
                                          onTouchEnd: (Ye) => {
                                            Ye.stopPropagation();
                                          },
                                          onClick: (Ye) => Kr(ke, g, Ye),
                                          className:
                                            "text-red-500 hover:text-red-600 rounded-full p-2 transition-all z-10",
                                          title: "刪除",
                                          children: r.jsx(Mr, {
                                            className: "w-6 h-6",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          ke.GUID || $e,
                        );
                      }),
                    },
                    Te,
                  );
                }),
              });
            } else if (g.contents && g.contents.length > 0) {
              const {
                sortedContents: Y,
                maxRow: le,
                maxCol: Ne,
              } = mn(g.contents);
              return X(Y, le, Ne);
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
            if (g.contents && g.contents.length > 0) {
              const {
                sortedContents: Y,
                maxRow: le,
                maxCol: Ne,
              } = mn(g.contents);
              return X(Y, le, Ne);
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
            const re = Math.max(
                ...g.Boxes.flat().map((Y) => +Y.Row + +Y.Height - 1),
              ),
              B = Math.max(
                ...g.Boxes.flat().map((Y) => +Y.Column + +Y.Width - 1),
              ),
              pe = re + 1,
              Q = B + 1,
              ee = g.Boxes.flat(),
              K = Array(pe)
                .fill(null)
                .map(() => Array(Q).fill(!1)),
              oe = {};
            return (
              ee.forEach((Y) => {
                Y.Slave || (oe[`${Y.Row},${Y.Column}`] = Y);
              }),
              ee.forEach((Y) => {
                if (!Y.Slave && (Y.Width > 1 || Y.Height > 1))
                  for (let le = Y.Row; le < Y.Row + Y.Height; le++)
                    for (let Ne = Y.Column; Ne < Y.Column + Y.Width; Ne++)
                      (le !== Y.Row || Ne !== Y.Column) && (K[le][Ne] = !0);
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
            return g.med_info && g.med_info.length > 0
              ? r.jsxs("div", {
                  className:
                    "text-base text-left h-full min-h-[40px] max-w-[200px] min-w-[200px] p-1 flex items-center justify-between flex-col",
                  children: [
                    r.jsx("div", {
                      className: "text-gray-700 font-bold truncate w-full",
                      children: g.med_info[0].name,
                    }),
                    r.jsxs("div", {
                      className:
                        "text-gray-700 w-full flex justify-between px-1",
                      children: [
                        r.jsxs("div", { children: [g.box_type, "吋"] }),
                        r.jsxs("div", {
                          children: [g.width[g.width_index], "cm"],
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
            return g.contents && g.contents.length > 0
              ? r.jsx("div", {
                  className: "space-y-2",
                  children: g.contents.map((Y) => Qn(Y)),
                })
              : r.jsx("div", {
                  className:
                    "h-full flex items-center justify-center text-gray-500",
                  children: r.jsxs("div", {
                    className: "text-base",
                    children: ["未知類型: ", g.type],
                  }),
                });
        }
      },
      Qr = (g) => {
        if (
          (me(g.gird_position || "0,0"),
          g.type !== "調劑台" && g.type !== "藥庫")
        )
          return null;
        const X = (re) => {
          if (!re || re.length === 0)
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
          const { sortedContents: B, maxRow: pe, maxCol: Q } = mn(re),
            ee = Array(pe + 1)
              .fill(null)
              .map(() => Array(Q + 1).fill(!1)),
            K = {};
          return (
            B.forEach((oe) => {
              const Y = me(oe.gird_position || "0,0");
              ((K[`${Y.row},${Y.col}`] = oe), (ee[Y.row][Y.col] = !0));
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: pe + 1 }, (oe, Y) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      children: Array.from({ length: Q + 1 }, (le, Ne) => {
                        const ve = `${Y},${Ne}`,
                          De = K[ve];
                        return De
                          ? r.jsxs(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (Q + 1)}%`,
                                  height: `${100 / (pe + 1)}%`,
                                  minHeight: "120px",
                                  border: "none",
                                  position: "relative",
                                },
                                children: [
                                  Qn(De),
                                  (R == null ? void 0 : R.container.GUID) ===
                                    De.GUID &&
                                    r.jsx("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none",
                                      children: r.jsx("div", {
                                        className: `absolute bg-blue-400 opacity-50 ${R.direction === "top" ? "top-0 left-0 right-0 h-1" : R.direction === "bottom" ? "bottom-0 left-0 right-0 h-1" : R.direction === "left" ? "left-0 top-0 bottom-0 w-1" : "right-0 top-0 bottom-0 w-1"}`,
                                      }),
                                    }),
                                ],
                              },
                              Ne,
                            )
                          : r.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (Q + 1)}%`,
                                  height: `${100 / (pe + 1)}%`,
                                  minHeight: "120px",
                                  border: "1px dashed #e5e7eb",
                                },
                                children: r.jsx("div", {
                                  className:
                                    "w-full h-full flex items-center justify-center text-gray-400 text-sm",
                                  children: "空位",
                                }),
                              },
                              Ne,
                            );
                      }),
                    },
                    Y,
                  ),
                ),
              }),
            })
          );
        };
        return r.jsxs(
          "div",
          {
            "data-container-guid": g.GUID,
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
                      children: g.name,
                    }),
                  }),
                  r.jsx("div", {
                    className: "flex items-center space-x-1",
                    children: r.jsx("button", {
                      className:
                        "p-1 hover:bg-black/10 rounded transition-colors",
                      onClick: (re) => {
                        (re.stopPropagation(),
                          console.log("🔘 點擊新增父容器按鈕"),
                          console.log("📋 找到的部門資料:", g),
                          g
                            ? (console.log(
                                "✅ 呼叫 openAddParentContainerModal",
                              ),
                              i(g))
                            : console.warn("⚠️ 未找到對應的部門資料"));
                      },
                      title: "新增",
                      children: r.jsx(At, {
                        className: "w-6 h-6 text-green-700",
                      }),
                    }),
                  }),
                ],
              }),
              r.jsx("div", {
                className: `flex-1 bg-orange-50 ${(R == null ? void 0 : R.container.GUID) === g.GUID ? "ring-2 ring-blue-400 ring-inset" : ""}`,
                children: X(g.contents || []),
              }),
            ],
          },
          g.GUID,
        );
      },
      Xr = u.useCallback(
        (g) => {
          if (
            (console.log("🎯 locateDrugOnCanvas 被調用，藥品資料:", g),
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
          const X = g[0].CODE || g[0].code;
          if ((console.log("🎯 提取的藥碼:", X), !X)) {
            console.warn("⚠️ 無法定位藥品：缺少藥碼");
            return;
          }
          console.log("🎯 開始定位藥品:", X);
          const re = (pe) => {
              for (const Q of pe) {
                if (Q.type === "grid_draw" && Q.Boxes) {
                  for (const ee of Q.Boxes)
                    for (const K of ee)
                      if (K.Code === X) {
                        const oe = document.querySelector(
                          `[data-container-guid="${Q.GUID}"]`,
                        );
                        if (oe)
                          return (
                            console.log("✅ 找到藥品容器 (grid_draw):", Q),
                            { element: oe, bounds: oe.getBoundingClientRect() }
                          );
                      }
                }
                if (
                  Q.type === "list_draw" &&
                  Q.drugs &&
                  Q.drugs.some((K) => K.code === X)
                ) {
                  const K = document.querySelector(
                    `[data-container-guid="${Q.GUID}"]`,
                  );
                  if (K)
                    return (
                      console.log("✅ 找到藥品容器 (list_draw):", Q),
                      { element: K, bounds: K.getBoundingClientRect() }
                    );
                }
                if (
                  (Q.type === "store_shelves" ||
                    Q.type === "dispensing_shelves") &&
                  Q.medMapStock &&
                  Q.medMapStock.some((K) => K.code === X || K.material_no === X)
                ) {
                  const K = document.querySelector(
                    `[data-container-guid="${Q.GUID}"]`,
                  );
                  if (K)
                    return (
                      console.log("✅ 找到藥品容器 (store_shelves):", Q),
                      { element: K, bounds: K.getBoundingClientRect() }
                    );
                }
                if (
                  Q.type === "med_box" &&
                  Q.med_info &&
                  Q.med_info.length > 0 &&
                  Q.med_info.some((K) => K.code === X)
                ) {
                  const K = document.querySelector(
                    `[data-container-guid="${Q.GUID}"]`,
                  );
                  if (K)
                    return (
                      console.log("✅ 找到藥品容器 (med_box):", Q),
                      { element: K, bounds: K.getBoundingClientRect() }
                    );
                }
                if (Q.contents && Q.contents.length > 0) {
                  const ee = re(Q.contents);
                  if (ee) return ee;
                }
              }
              return null;
            },
            B = re(o);
          if (B) {
            const pe = n.current.getBoundingClientRect(),
              Q = B.bounds,
              ee = (Q.left + Q.right) / 2,
              K = (Q.top + Q.bottom) / 2,
              oe = (ee - pe.left - _.x) / _.scale,
              Y = (K - pe.top - _.y) / _.scale,
              le = pe.width / 2,
              Ne = pe.height / 2,
              ve = le - oe * _.scale,
              De = Ne - Y * _.scale;
            (f((Te) => ({ ...Te, x: ve, y: De })),
              console.log("✅ 定位完成", {
                elementScreenCenter: { x: ee, y: K },
                elementCanvasPos: { x: oe, y: Y },
                screenCenter: { x: le, y: Ne },
                newTransform: { x: ve, y: De },
              }),
              m(`已定位到藥品：${g.CHT_NAME || g.NAME || X}`, "success"));
          } else
            (console.warn("❌ 未找到藥品容器"),
              m("未找到該藥品的儲存位置", "error"));
        },
        [o, _, m],
      );
    u.useImperativeHandle(
      t,
      () => (
        console.log("🔧 useImperativeHandle 設置 ref 方法"),
        { locateDrug: Xr }
      ),
    );
    const Kr = async (g, X, re) => {
        if (
          (re.stopPropagation(),
          re.preventDefault(),
          !!window.confirm(`確定要刪除 ${g.name || g.material_no} 嗎？`))
        )
          try {
            (console.log("🗑️ 刪除藥品:", g.name || g.material_no),
              console.log("📦 所在層架 GUID:", X.GUID));
            const pe = {
                GUID: g.GUID,
                code: g.code || "",
                device_type: g.device_type || "",
                expiry_date: g.expiry_date || [],
                ip_light: g.ip_light || "",
                ip: g.ip || "",
                led_index: g.led_index || "",
                location: g.location || "0,0",
                lot: g.lot || [],
                material_no: g.material_no || "",
                name: g.name || "",
                qty: g.qty || [],
                shelf_guid: "",
              },
              Q = (X.medMapStock || [])
                .filter((le) => le.GUID !== g.GUID)
                .map((le, Ne) => ({
                  GUID: le.GUID,
                  code: le.code || "",
                  device_type: le.device_type || "",
                  expiry_date: le.expiry_date || [],
                  ip_light: le.ip_light || "",
                  ip: le.ip || "",
                  led_index: le.led_index || "",
                  location: `${Ne},0`,
                  lot: le.lot || [],
                  material_no: le.material_no || "",
                  name: le.name || "",
                  qty: le.qty || [],
                  shelf_guid: X.GUID,
                })),
              ee = [pe, ...Q];
            (console.log("📤 發送刪除請求，藥品總數:", ee.length),
              console.log("  - 被刪除的藥品: 1"),
              console.log("  - 同層架剩餘藥品:", Q.length));
            const K = X.serverName || "",
              oe = X.serverType || "",
              Y = await Ee.updateStock(ee, K, oe);
            if ((console.log("刪除回應:", Y), Y.Code === 200)) {
              const le = X.medMapStock.findIndex((Ne) => Ne.GUID === g.GUID);
              (le !== -1 &&
                (X.medMapStock.splice(le, 1),
                X.medMapStock.forEach((Ne, ve) => {
                  const Te = (Ne.location || "0,0").split(",")[1] || "0";
                  Ne.location = `${ve},${Te}`;
                })),
                m("刪除成功", "success"));
            } else m(Y.Result || "刪除失敗", "error");
          } catch (pe) {
            (console.error("刪除 stock 失敗:", pe),
              m("刪除失敗，請稍後再試", "error"));
          }
      },
      fl = async (g) => {
        if (g.key === "Enter" && U.trim() && !be) {
          (g.preventDefault(), k(!0));
          const X = performance.now();
          try {
            console.log("🔍 [手動輸入] 搜尋條碼:", U);
            const re = performance.now(),
              B = await Ee.searchByBarCode(U.trim()),
              pe = performance.now();
            if (
              (console.log(
                `⏱️ [手動輸入] API搜尋藥品資料用時: ${(pe - re).toFixed(2)}ms`,
              ),
              console.log("📋 條碼搜尋回應:", B),
              B.Code === 200)
            ) {
              console.log("✅ 找到藥品資料:", B.Data);
              const Q = performance.now();
              Xr(B.Data);
              const ee = performance.now();
              (console.log(
                `⏱️ [手動輸入] 定位藥品用時: ${(ee - Q).toFixed(2)}ms`,
              ),
                se(""));
              const K = performance.now();
              console.log(`⏱️ [手動輸入] 總用時: ${(K - X).toFixed(2)}ms`);
            } else
              B.Code === -200 && B.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  m("查無資料，請建立條碼", "error"),
                  x(U.trim()),
                  se(""))
                : (console.log("❌ 搜尋失敗:", B.Result),
                  m(B.Result || "搜尋失敗", "error"));
          } catch (re) {
            (console.error("條碼搜尋錯誤:", re),
              m("搜尋失敗，請稍後再試", "error"));
          } finally {
            k(!1);
          }
        }
      },
      Jr = (g) => {
        (console.log("📍 [藥品搜尋-容器視圖] 選擇藥品:", g),
          L(!1),
          m(`選擇藥品: ${g.NAME}`, "success"),
          Xr([g]));
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
                disabled: be,
                children: r.jsx(Wo, { className: "w-6 h-6 text-blue-600" }),
              }),
              r.jsx("div", { className: "w-px h-6 bg-gray-200" }),
              r.jsx("input", {
                type: "text",
                value: U,
                onChange: (g) => se(g.target.value),
                onKeyDown: fl,
                placeholder: "輸入條碼或掃描...",
                className:
                  "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
                disabled: be,
              }),
              r.jsx("button", {
                onClick: () => h("track_Drug_mode"),
                className: "p-2 hover:bg-gray-50 transition-colors",
                title: "掃描條碼",
                disabled: be,
                children: r.jsx(Fr, { className: "w-6 h-6 text-blue-600" }),
              }),
            ],
          }),
        }),
        r.jsx("div", {
          className: "absolute bottom-4 right-4 z-10 flex gap-2",
          children: r.jsx("button", {
            onClick: () => I(!v),
            className: `rounded-lg shadow-lg p-2 transition-colors ${v ? "bg-red-500 text-white hover:bg-red-600" : "bg-white text-gray-700 hover:bg-gray-50"}`,
            title: v ? "Unlock Canvas" : "Lock Canvas",
            children: v
              ? r.jsx(Mi, { className: "w-6 h-6" })
              : r.jsx(df, { className: "w-6 h-6" }),
          }),
        }),
        r.jsx("div", {
          ref: n,
          className: `w-full h-full relative ${F && !v ? "cursor-grab" : "cursor-default"} ${d ? "cursor-grabbing" : ""}`,
          onMouseDown: he,
          onMouseMove: C,
          onMouseUp: $,
          onMouseLeave: $,
          onTouchStart: ct,
          onTouchMove: Et,
          onTouchEnd: Pt,
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
                    borderSpacing: `${Ie}px`,
                    minWidth: "fit-content",
                    minHeight: "fit-content",
                  },
                  children: r.jsx("tbody", {
                    children: Array.from({ length: Yr + 1 }, (g, X) =>
                      r.jsx(
                        "tr",
                        {
                          children: Array.from({ length: ul + 1 }, (re, B) => {
                            const pe = Wr.find((Q) => {
                              const ee = me(Q.gird_position || "0,0");
                              return ee.row === X && ee.col === B;
                            });
                            return pe
                              ? r.jsx(
                                  "td",
                                  {
                                    className: "align-top",
                                    style: {
                                      minWidth: "150px",
                                      minHeight: "120px",
                                      border: "none",
                                    },
                                    children: Qr(pe),
                                  },
                                  B,
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
                                  B,
                                );
                          }),
                        },
                        X,
                      ),
                    ),
                  }),
                }),
              }),
              e,
            ],
          }),
        }),
        r.jsx(uf, {
          isOpen: N,
          onClose: () => L(!1),
          medicineList: T,
          onSelectMedicine: Jr,
        }),
      ],
    });
  });
pf.displayName = "DrugCanvas";
const Th = async (e) => {
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
      var h, x, m, p, j;
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
            absolute_position: `${(h = i.containerData) == null ? void 0 : h.position.x},${(x = i.containerData) == null ? void 0 : x.position.y}`,
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
          Ee.updateMedMapBox(t)
            .then((i) => ({ type: "med_box", response: i, count: t.length }))
            .catch((i) => ({ type: "med_box", error: i, count: t.length })),
        )),
      n.length > 0 &&
        (console.log("🗂️ 更新抽屜資料:", n),
        a.push(
          Ee.updateMedMapDrawer(n)
            .then((i) => ({ type: "drawer", response: i, count: n.length }))
            .catch((i) => ({ type: "drawer", error: i, count: n.length })),
        )),
      s.length > 0 &&
        (console.log("🏪 更新層架資料:", s),
        a.push(
          Ee.updateMedMapShelf(s)
            .then((i) => ({ type: "shelf", response: i, count: s.length }))
            .catch((i) => ({ type: "shelf", error: i, count: s.length })),
        )),
      o.length > 0 &&
        (console.log("🏢 更新父容器資料:", o),
        o.forEach((i) => {
          a.push(
            Ee.updateContainerPosition(i)
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
          Ee.updateSubSection(l)
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
      const x = [];
      i.forEach((m) => {
        var p, j;
        if (m.error)
          ((h += m.count),
            x.push(`${m.type}: ${m.error.message || "網路錯誤"}`),
            console.error(`❌ ${m.type} API 失敗:`, m.error));
        else if (((p = m.response) == null ? void 0 : p.Code) === 200)
          ((c += m.count), console.log(`✅ ${m.type} API 成功:`, m.response));
        else {
          h += m.count;
          const b =
            ((j = m.response) == null ? void 0 : j.Result) || "未知錯誤";
          (x.push(`${m.type}: ${b}`),
            console.error(`❌ ${m.type} API 失敗:`, m.response));
        }
      });
    } catch (i) {
      console.error("💥 批次更新過程中發生錯誤:", i);
    } finally {
      console.log("完成更新");
    }
  },
  Rh = "modulepreload",
  $h = function (e) {
    return "/" + e;
  },
  zc = {},
  Ah = function (t, n, s) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const a = document.querySelector("meta[property=csp-nonce]"),
        i =
          (a == null ? void 0 : a.nonce) ||
          (a == null ? void 0 : a.getAttribute("nonce"));
      o = Promise.allSettled(
        n.map((c) => {
          if (((c = $h(c)), c in zc)) return;
          zc[c] = !0;
          const h = c.endsWith(".css"),
            x = h ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${x}`)) return;
          const m = document.createElement("link");
          if (
            ((m.rel = h ? "stylesheet" : Rh),
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
  cn = [
    { name: "2.13吋", box_type: "2.13", width: ["7.5"], unit: "cm" },
    { name: "2.9吋", type: "2.9", width: ["10", "15", "20"], unit: "cm" },
    { name: "4.2吋", type: "4.2", width: ["11", "16"], unit: "cm" },
  ],
  Uh = () => {
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
      { t: x } = It(),
      [m, p] = u.useState(0),
      [j, b] = u.useState({}),
      [T, _] = u.useState(""),
      [f, d] = u.useState(""),
      [y, v] = u.useState("N"),
      [I, S] = u.useState([]),
      [E, F] = u.useState(!1),
      [M, U] = u.useState(!1),
      [se, be] = u.useState(null),
      [k, N] = u.useState(null),
      [L, P] = u.useState(!1),
      [J, w] = u.useState(!1);
    u.useEffect(() => {
      if (n && e)
        if (c === "add") {
          p(0);
          const ne = {};
          (cn.forEach((D, xe) => {
            ne[xe] = 0;
          }),
            b(ne),
            _(""),
            U(!1),
            z());
        } else {
          const ne = cn.findIndex(
            (D) => D.box_type === n.box_type || D.type === n.box_type,
          );
          if ((console.log(n), ne >= 0)) {
            p(ne);
            const xe = cn[ne].width.findIndex((W) => {
                var ie;
                return (
                  W ===
                  ((ie = n.width) == null ? void 0 : ie[n.width_index || 0])
                );
              }),
              me = {};
            (cn.forEach((W, ie) => {
              ie === ne ? (me[ie] = xe >= 0 ? xe : 0) : (me[ie] = 0);
            }),
              b(me));
          } else {
            p(0);
            const D = {};
            (cn.forEach((xe, me) => {
              D[me] = 0;
            }),
              b(D));
          }
          (_(n.ip || ""),
            N({
              box_type: n.box_type,
              width: n.width,
              width_index: n.width_index,
              ip: n.ip || "",
              storage: n.storage ? JSON.parse(JSON.stringify(n.storage)) : null,
            }));
        }
    }, [n, e, c]);
    const z = () => {
        n && n.parentShelf && be(n.parentShelf);
      },
      te = (ne) => {
        if (!ne || !ne.contents || ne.contents.length === 0) return "0,0";
        let D = -1,
          xe = 0;
        return (
          ne.contents.forEach((me) => {
            if (me.gird_position) {
              const [W, ie] = me.gird_position.split(",").map(Number);
              ie > D && ((D = ie), (xe = W));
            }
          }),
          `${xe},${D + 1}`
        );
      },
      H = () => {
        if (!k || c !== "edit") return !1;
        const ne = cn[m],
          D = j[m] || 0,
          xe = ne.box_type || ne.type || ne.name;
        return (
          k.box_type !== xe ||
          k.width_index !== D ||
          k.ip !== T ||
          JSON.stringify(k.storage) !==
            JSON.stringify(n == null ? void 0 : n.storage)
        );
      },
      A = (ne) => {
        p(ne);
      },
      Se = (ne, D) => {
        b((xe) => ({ ...xe, [ne]: D }));
      },
      R = () => {
        n && (c === "add" ? ge() : Z());
      },
      G = () => {
        t();
      },
      ge = async () => {
        if (!n || !se) {
          a("缺少必要資料，無法新增藥盒", "error");
          return;
        }
        U(!0);
        try {
          const ne = cn[m],
            D = j[m] || 0,
            xe = ne.width[D],
            me = te(se),
            W = {
              Master_GUID: se.GUID,
              position: me,
              width: xe.toString(),
              height: "60",
              ip_box: T,
              serverName: se.serverName || "",
              serverType: se.serverType || "",
            };
          console.log("🚀 發送新增藥盒 API 請求:", W);
          const ie = await Ee.addMedMapBox(W);
          ie.Code === 200
            ? (a("藥盒新增成功", "success"), t(), await Ie())
            : a(`藥盒新增失敗：${ie.Result || "未知錯誤"}`, "error");
        } catch (ne) {
          (console.error("Add med box failed:", ne),
            a("藥盒新增失敗：網路錯誤", "error"));
        } finally {
          U(!1);
        }
      },
      Z = async () => {
        var ne;
        if (!n || !H()) {
          a("沒有資料變更", "error");
          return;
        }
        P(!0);
        try {
          const D = cn[m],
            xe = j[m] || 0,
            me = D.width[xe],
            W = D.box_type || D.type || D.name,
            ie = k.box_type !== W || k.width_index !== xe || k.ip !== T,
            we =
              JSON.stringify(k.storage) !==
              JSON.stringify(n == null ? void 0 : n.storage),
            O = [];
          if (ie) {
            const ye = {
              GUID: n.GUID,
              Master_GUID: n.Master_GUID,
              position: n.gird_position,
              ip_light: T,
              serverName: n.serverName,
              serverType: n.serverType,
            };
            O.push(Ee.updateMedMapBox([ye]));
          }
          we &&
            O.push(
              Ee.updateEpd266Storages(n.serverName || "", n.serverType || "", [
                n.storage,
              ]),
            );
          const ae = await Promise.all(O);
          if (ae.every((ye) => ye.Code === 200))
            (a("藥盒更新成功", "success"), t(), await Ie());
          else {
            const ye = ae.filter((de) => de.Code !== 200);
            a(
              `藥盒更新失敗：${((ne = ye[0]) == null ? void 0 : ne.Result) || "未知錯誤"}`,
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
      Ie = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        (console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0));
        try {
          const ne = await Ee.getMedMapByDepartment(s);
          if (ne.Code === 200 && ne.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const D = await Ah(() => Promise.resolve().then(() => oh), void 0),
              xe = D.default.convertMedMapApiToFakeData(ne.Data);
            if (!D.default.validateConvertedData(xe)) {
              (console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error"));
              return;
            }
            (o(xe), console.log("✅ 藥品地圖資料已更新"));
          } else
            (console.error("❌ API 回傳錯誤:", ne),
              a("資料更新失敗：API 錯誤", "error"));
        } catch (ne) {
          (console.error("💥 重新獲取藥品地圖資料失敗:", ne),
            a("資料更新失敗：網路錯誤", "error"));
        } finally {
          l(!1);
        }
      },
      Pe = async () => {
        F(!0);
        try {
          const ne = f.toLowerCase().trim();
          let D = h;
          (ne &&
            (D = D.filter((xe) => {
              var me, W, ie;
              return (
                ((me = xe.CODE) == null
                  ? void 0
                  : me.toLowerCase().includes(ne)) ||
                ((W = xe.NAME) == null
                  ? void 0
                  : W.toLowerCase().includes(ne)) ||
                ((ie = xe.CHT_NAME) == null
                  ? void 0
                  : ie.toLowerCase().includes(ne))
              );
            })),
            y !== "N" && (D = D.filter((xe) => xe.DRUGKIND === y)),
            S(D));
        } catch (ne) {
          (console.error("Search failed:", ne), S([]));
        } finally {
          F(!1);
        }
      },
      Me = (ne, D) => {
        (console.log("📸 掃描成功，藥品資料:", D), w(!1), Ge(D));
      },
      Ge = async (ne) => {
        if (n)
          try {
            console.log("🚀 開始更新藥盒藥品代碼:", ne.CODE);
            const D = await Ee.updateEpd266Medcode(
              n.serverName || "",
              n.serverType || "",
              ne.CODE,
              n.storage || {},
            );
            D.Code === 200
              ? (console.log("✅ 藥品代碼更新成功:", D.Data),
                (n.storage = D.Data),
                (n.med_info = [
                  { name: ne.NAME, cht_name: ne.CHT_NAME, code: ne.CODE },
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
              onClick: (ne) => ne.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx($n, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: x(
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
                      children: r.jsx(tt, { className: "w-6 h-6" }),
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
                              children: x("form.ipAddress"),
                            }),
                            r.jsx("div", {
                              className: "flex items-center",
                              children: r.jsx("input", {
                                type: "text",
                                onChange: (ne) => _(ne.target.value),
                                placeholder:
                                  (n == null ? void 0 : n.ip) ||
                                  (n == null ? void 0 : n.name) ||
                                  x("placeholder.ipAddress"),
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
                                children: x("form.medBoxType"),
                              }),
                              r.jsx("div", {
                                className: "flex gap-4 justify-between",
                                children: cn.map((ne, D) =>
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
                                            children: ne.name,
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
                                children: x("form.widthSelection"),
                              }),
                              cn.map((ne, D) =>
                                r.jsx(
                                  "div",
                                  {
                                    className: `flex gap-4 ${m === D ? "block" : "hidden"}`,
                                    children: ne.width.map((xe, me) =>
                                      r.jsxs(
                                        "label",
                                        {
                                          className: `flex items-center justify-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${m === D && (j[D] || 0) === me ? "border-green-500 bg-green-50" : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"}`,
                                          children: [
                                            r.jsx("input", {
                                              type: "radio",
                                              name: `width-${D}`,
                                              value: me,
                                              checked:
                                                m === D && (j[D] || 0) === me,
                                              onChange: () => Se(D, me),
                                              className:
                                                "w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500 hidden",
                                            }),
                                            r.jsx("div", {
                                              className: "text-center",
                                              children: r.jsxs("div", {
                                                className:
                                                  "text-sm font-semibold text-gray-900",
                                                children: [xe, " ", ne.unit],
                                              }),
                                            }),
                                          ],
                                        },
                                        `${D}-${me}`,
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
                                  children: x("form.drugInfo"),
                                }),
                                r.jsx("div", {
                                  children:
                                    n != null &&
                                    n.med_info &&
                                    n.med_info.length > 0
                                      ? r.jsx("div", {
                                          children: n.med_info.map((ne, D) =>
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
                                                          x("form.drugCode"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          ne.code ||
                                                          x("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    children: [
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-sm font-medium text-gray-600",
                                                        children: [
                                                          x("form.drugName"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          ne.name ||
                                                          x("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    children: [
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-sm font-medium text-gray-600",
                                                        children: [
                                                          x("form.chineseName"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          ne.cht_name ||
                                                          x("status.notSet"),
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
                                            children: x("status.noDrugData"),
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
                                  children: x("form.drugInfo"),
                                }),
                                r.jsx("div", {
                                  className:
                                    "bg-gray-50 border border-gray-200 rounded-lg py-2 px-4 min-h-[262px] max-h-[262px]",
                                  children: r.jsx("div", {
                                    className: "text-center py-8 space-y-4",
                                    children: r.jsx("div", {
                                      className: "text-gray-500 text-base",
                                      children: x("status.newMedBoxNoDrug"),
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
                                    children: x("form.drugSearch"),
                                  }),
                                  r.jsx("button", {
                                    onClick: () => w(!0),
                                    className:
                                      "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                    title: "掃描條碼",
                                    children: r.jsx(Fr, {
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
                                    onChange: (ne) => d(ne.target.value),
                                    placeholder: x("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  r.jsxs("select", {
                                    value: y,
                                    onChange: (ne) => v(ne.target.value),
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
                                    onClick: Pe,
                                    disabled: E,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      E &&
                                        r.jsx(Gt, {
                                          className: "w-4 h-4 animate-spin",
                                        }),
                                      x("button.search"),
                                    ],
                                  }),
                                ],
                              }),
                              r.jsx("div", {
                                className:
                                  "bg-white border rounded p-3 min-h-[220px] max-h-[220px] overflow-y-auto",
                                children: E
                                  ? r.jsxs("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: [
                                        r.jsx(Gt, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        x("status.searching"),
                                      ],
                                    })
                                  : I.length > 0
                                    ? r.jsx("div", {
                                        className: "space-y-1",
                                        children: I.map((ne, D) =>
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
                                                      children: ne.NAME,
                                                    }),
                                                    r.jsx("div", {
                                                      className:
                                                        "text-xs text-gray-500 truncate",
                                                      children: ne.CHT_NAME,
                                                    }),
                                                    r.jsx("div", {
                                                      className:
                                                        "text-xs text-gray-400 font-mono",
                                                      children: ne.CODE,
                                                    }),
                                                  ],
                                                }),
                                                r.jsx("button", {
                                                  onClick: () => Ge(ne),
                                                  className:
                                                    "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                  title: x("button.add"),
                                                  children: r.jsx(At, {
                                                    className: "w-4 h-4",
                                                  }),
                                                }),
                                              ],
                                            },
                                            ne.GUID || D,
                                          ),
                                        ),
                                      })
                                    : r.jsx("div", {
                                        className:
                                          "text-gray-500 text-center flex items-center justify-center h-full",
                                        children: x(
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
                      children: x("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: R,
                      disabled: M || L,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        (M || L) &&
                          r.jsx(Gt, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", {
                          children: M
                            ? "新增中..."
                            : L
                              ? "更新中..."
                              : x(c === "add" ? "button.add" : "button.save"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            r.jsx(dl, {
              isOpen: J,
              onClose: () => w(!1),
              onScanSuccess: Me,
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
      { t: o } = It(),
      [l, a] = u.useState(""),
      [i, c] = u.useState([]),
      [h, x] = u.useState(""),
      [m, p] = u.useState("N"),
      [j, b] = u.useState([]),
      [T, _] = u.useState(!1);
    u.useEffect(() => {
      n && e && (a(n.name || ""), c(n.med_info || []));
    }, [n, e]);
    const f = (S) => {
        c((E) => E.filter((F) => F.code !== S));
      },
      d = async () => {
        _(!0);
        try {
          const S = await Ee.searchMedicine(h, m);
          b(S);
        } catch (S) {
          (console.error("Search failed:", S), b([]));
        } finally {
          _(!1);
        }
      },
      y = (S) => {
        const E = {
          id: S.GUID || `${Date.now()}_${Math.random()}`,
          name: S.NAME,
          cht_name: S.CHT_NAME,
          code: S.CODE,
        };
        c((F) => (F.some((U) => U.code === E.code) ? F : [...F, E]));
      },
      v = () => {
        n && ((n.name = l), (n.med_info = i), s(), t());
      },
      I = () => {
        t();
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: I,
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
                        r.jsx($n, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: o("modal.listDrawSettings"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: I,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(tt, { className: "w-6 h-6" }),
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
                                                children: r.jsx(tt, {
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
                                    onChange: (S) => x(S.target.value),
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
                                        r.jsx(Gt, {
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
                                        r.jsx(Gt, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        o("status.searching"),
                                      ],
                                    })
                                  : j.length > 0
                                    ? r.jsx("div", {
                                        className: "space-y-1",
                                        children: j.map((S, E) =>
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
                                                  children: r.jsx(At, {
                                                    className: "w-4 h-4",
                                                  }),
                                                }),
                                              ],
                                            },
                                            S.GUID || E,
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
                      onClick: I,
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
  Lh = () => {
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
      { t: c } = It(),
      [h, x] = u.useState(""),
      [m, p] = u.useState(null),
      [j, b] = u.useState(!1),
      [T, _] = u.useState(!1),
      [f, d] = u.useState(null),
      [y, v] = u.useState(""),
      [I, S] = u.useState("N"),
      [E, F] = u.useState([]),
      [M, U] = u.useState(!1),
      [se, be] = u.useState(0),
      [k, N] = u.useState({ x: 0, y: 0 });
    (u.useEffect(() => {
      if (n && e)
        if ((x(n.name || ""), n.drawer)) {
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
        n && xe();
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
            const ie = (O) => {
                O.forEach((ae) => {
                  (ae.GUID === n.GUID &&
                    (console.log("🎯 找到目標格線抽屜，更新資料"),
                    (ae.drawer = W)),
                    ae.contents &&
                      Array.isArray(ae.contents) &&
                      ie(ae.contents),
                    ae.components &&
                      Array.isArray(ae.components) &&
                      ie(ae.components));
                });
              },
              we = JSON.parse(JSON.stringify(o));
            (ie(we), l(we), console.log("🔄 已更新全域資料狀態"));
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
      J = (W, ie) => {
        if (!f) return !1;
        const we = Math.min(f.startRow, f.endRow),
          O = Math.max(f.startRow, f.endRow),
          ae = Math.min(f.startCol, f.endCol),
          V = Math.max(f.startCol, f.endCol);
        return W >= we && W <= O && ie >= ae && ie <= V;
      },
      w = (W) => {
        var je;
        if (
          !((je = n == null ? void 0 : n.drawer) != null && je.Boxes) ||
          W.Slave
        )
          return { width: 1, height: 1 };
        const we = n.drawer.Boxes.flat().filter(
          (he) =>
            he.Slave &&
            he.MasterBox_Row === W.Row &&
            he.MasterBox_Column === W.Column,
        );
        if (we.length === 0) return { width: 1, height: 1 };
        const O = [W, ...we],
          ae = Math.min(...O.map((he) => he.Row)),
          V = Math.max(...O.map((he) => he.Row)),
          ye = Math.min(...O.map((he) => he.Column));
        return {
          width: Math.max(...O.map((he) => he.Column)) - ye + 1,
          height: V - ae + 1,
        };
      },
      z = () => {
        var ye;
        if (!f || !((ye = n == null ? void 0 : n.drawer) != null && ye.Boxes))
          return [];
        const W = n.drawer.Boxes.flat(),
          ie = Math.min(f.startRow, f.endRow),
          we = Math.max(f.startRow, f.endRow),
          O = Math.min(f.startCol, f.endCol),
          ae = Math.max(f.startCol, f.endCol),
          V = [];
        return (
          W.forEach((de) => {
            if (!de.Slave) {
              const je = w(de),
                he = de.Row + je.height - 1,
                C = de.Column + je.width - 1;
              de.Row >= ie &&
                he <= we &&
                de.Column >= O &&
                C <= ae &&
                V.push(de);
            }
          }),
          V
        );
      },
      te = (W, ie, we, O) => {
        var C;
        if (!f || !((C = n == null ? void 0 : n.drawer) != null && C.Boxes))
          return !1;
        const ae = n.drawer.Boxes.flat();
        let V = !0,
          ye = W,
          de = ie,
          je = we,
          he = O;
        for (; V; )
          ((V = !1),
            ae.forEach(($) => {
              if (!$.Slave) {
                const q = w($),
                  fe = $.Row + q.height - 1,
                  ce = $.Column + q.width - 1;
                !($.Row > de || fe < ye || $.Column > he || ce < je) &&
                  ($.Row < ye && ((ye = $.Row), (V = !0)),
                  fe > de && ((de = fe), (V = !0)),
                  $.Column < je && ((je = $.Column), (V = !0)),
                  ce > he && ((he = ce), (V = !0)));
              }
            }));
        return { minRow: ye, maxRow: de, minCol: je, maxCol: he };
      },
      H = () => {
        var V;
        if (!f || !((V = n == null ? void 0 : n.drawer) != null && V.Boxes))
          return !1;
        const W = Math.min(f.startRow, f.endRow),
          ie = Math.max(f.startRow, f.endRow),
          we = Math.min(f.startCol, f.endCol),
          O = Math.max(f.startCol, f.endCol),
          ae = n.drawer.Boxes.flat();
        for (let ye = W; ye <= ie; ye++)
          for (let de = we; de <= O; de++) {
            let je = !1;
            for (const he of ae)
              if (!he.Slave) {
                const C = w(he),
                  $ = he.Row + C.height - 1,
                  q = he.Column + C.width - 1;
                if (ye >= he.Row && ye <= $ && de >= he.Column && de <= q) {
                  je = !0;
                  break;
                }
              }
            if (!je) return !1;
          }
        return !0;
      },
      A = () => {
        var C, $;
        const W = z();
        if (!f) return { canMerge: !1, canUnmerge: !1 };
        if (W.length === 0) return { canMerge: !1, canUnmerge: !1 };
        const ie =
            (($ =
              (C = n == null ? void 0 : n.drawer) == null ? void 0 : C.Boxes) ==
            null
              ? void 0
              : $.flat()) || [],
          we = W.some(
            (q) =>
              ie.filter(
                (ce) =>
                  ce.Slave &&
                  ce.MasterBox_Row === q.Row &&
                  ce.MasterBox_Column === q.Column,
              ).length > 0,
          ),
          O = Math.min(f.startRow, f.endRow),
          ae = Math.max(f.startRow, f.endRow),
          V = Math.min(f.startCol, f.endCol),
          ye = Math.max(f.startCol, f.endCol),
          de = ie.some(
            (q) =>
              q.Slave &&
              q.Row >= O &&
              q.Row <= ae &&
              q.Column >= V &&
              q.Column <= ye,
          );
        return { canMerge: W.length > 1 && H(), canUnmerge: we || de };
      },
      { canMerge: Se, canUnmerge: R } = A(),
      G = async () => {
        U(!0);
        try {
          const W = y.toLowerCase().trim();
          let ie = i;
          (W &&
            (ie = ie.filter((we) => {
              var O, ae, V;
              return (
                ((O = we.CODE) == null
                  ? void 0
                  : O.toLowerCase().includes(W)) ||
                ((ae = we.NAME) == null
                  ? void 0
                  : ae.toLowerCase().includes(W)) ||
                ((V = we.CHT_NAME) == null
                  ? void 0
                  : V.toLowerCase().includes(W))
              );
            })),
            I !== "N" && (ie = ie.filter((we) => we.DRUGKIND === I)),
            F(ie));
        } catch (W) {
          (console.error("Search failed:", W), F([]));
        } finally {
          U(!1);
        }
      },
      ge = async (W) => {
        var we;
        if (!f || !((we = n == null ? void 0 : n.drawer) != null && we.Boxes))
          return;
        const ie = z();
        if (ie.length !== 0)
          try {
            const O = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [`guid=${ie[0].GUID}`, `code=${W.CODE}`],
              Data: n.drawer,
            };
            console.log("🚀 發送更新藥品 API 請求:", O);
            const ae = await Ee.request("/api/device/update_drawer_medcode", {
              method: "POST",
              body: JSON.stringify(O),
            });
            if (
              (console.log("📡 更新藥品 API 回應:", ae),
              ae.Code === 200 && ae.Data)
            ) {
              if (
                ((n.drawer = ae.Data),
                ae.Data.Boxes && (n.Boxes = ae.Data.Boxes),
                console.log("✅ 藥品資料更新成功"),
                o)
              ) {
                const V = (de) => {
                    de.forEach((je) => {
                      (je.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (je.drawer = n.drawer),
                        n.Boxes && (je.Boxes = n.Boxes)),
                        je.contents &&
                          Array.isArray(je.contents) &&
                          V(je.contents),
                        je.components &&
                          Array.isArray(je.components) &&
                          V(je.components));
                    });
                  },
                  ye = JSON.parse(JSON.stringify(o));
                (V(ye), l(ye));
              }
              (d(null), s());
            } else
              (console.error("❌ 藥品更新失敗:", ae),
                a(`藥品更新失敗：${ae.Result || "未知錯誤"}`, "error"));
          } catch (O) {
            (console.error("💥 藥品更新 API 調用失敗:", O),
              a("藥品更新失敗：網路錯誤", "error"));
          }
      },
      Z = (W, ie, we) => {
        (we.preventDefault(),
          we.stopPropagation(),
          "touches" in we &&
            (be(Date.now()),
            N({ x: we.touches[0].clientX, y: we.touches[0].clientY })),
          _(!0),
          d({ startRow: W, startCol: ie, endRow: W, endCol: ie }));
      },
      Ie = (W, ie) => {
        if (!T || !f) return;
        const we = Math.min(f.startRow, W),
          O = Math.max(f.startRow, W),
          ae = Math.min(f.startCol, ie),
          V = Math.max(f.startCol, ie),
          ye = te(we, O, ae, V);
        ye &&
          d((de) =>
            de
              ? {
                  startRow: de.startRow,
                  startCol: de.startCol,
                  endRow: W >= de.startRow ? ye.maxRow : ye.minRow,
                  endCol: ie >= de.startCol ? ye.maxCol : ye.minCol,
                }
              : null,
          );
      },
      Pe = () => {
        if (T && (_(!1), f && n != null && n.Boxes)) {
          const W = Math.min(f.startRow, f.endRow),
            ie = Math.max(f.startRow, f.endRow),
            we = Math.min(f.startCol, f.endCol),
            O = Math.max(f.startCol, f.endCol),
            ae = te(W, ie, we, O);
          ae &&
            d({
              startRow: ae.minRow,
              startCol: ae.minCol,
              endRow: ae.maxRow,
              endCol: ae.maxCol,
            });
        }
      },
      Me = () => {
        var W;
        !Se ||
          !((W = n == null ? void 0 : n.drawer) != null && W.Boxes) ||
          !f ||
          D();
      },
      Ge = () => {
        var W;
        !R ||
          !((W = n == null ? void 0 : n.drawer) != null && W.Boxes) ||
          !f ||
          (console.log(f), ne());
      },
      ne = async () => {
        var W;
        if (!(!f || !((W = n == null ? void 0 : n.drawer) != null && W.Boxes)))
          try {
            const ie = Math.min(f.startRow, f.endRow),
              we = Math.max(f.startRow, f.endRow),
              O = Math.min(f.startCol, f.endCol),
              ae = Math.max(f.startCol, f.endCol),
              ye = n.drawer.Boxes.flat().filter(
                ($) =>
                  $.Row >= ie && $.Row <= we && $.Column >= O && $.Column <= ae,
              ),
              de = [],
              je = [];
            ye.forEach(($) => {
              (de.push($.Column.toString()), je.push($.Row.toString()));
            });
            const he = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${de.join(",")}`,
                `SelectRows=${je.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", he);
            const C = await Ee.request("/api/device/separate_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(he),
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
                const $ = (fe) => {
                    fe.forEach((ce) => {
                      (ce.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (ce.drawer = n.drawer)),
                        ce.contents &&
                          Array.isArray(ce.contents) &&
                          $(ce.contents),
                        ce.components &&
                          Array.isArray(ce.components) &&
                          $(ce.components));
                    });
                  },
                  q = JSON.parse(JSON.stringify(o));
                ($(q), l(q));
              }
            } else
              (console.error("❌ API 回應錯誤:", C),
                a(`取消合併失敗：${C.Result || "未知錯誤"}`, "error"));
          } catch (ie) {
            (console.error("💥 API 調用失敗:", ie),
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
            const ie = Math.min(f.startRow, f.endRow),
              we = Math.max(f.startRow, f.endRow),
              O = Math.min(f.startCol, f.endCol),
              ae = Math.max(f.startCol, f.endCol),
              ye = n.drawer.Boxes.flat().filter(
                ($) =>
                  $.Row >= ie && $.Row <= we && $.Column >= O && $.Column <= ae,
              ),
              de = [],
              je = [];
            ye.forEach(($) => {
              (de.push($.Column.toString()), je.push($.Row.toString()));
            });
            const he = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${de.join(",")}`,
                `SelectRows=${je.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", he);
            const C = await Ee.request("/api/device/combine_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(he),
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
                const $ = (fe) => {
                    fe.forEach((ce) => {
                      (ce.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (ce.drawer = n.drawer)),
                        ce.contents &&
                          Array.isArray(ce.contents) &&
                          $(ce.contents),
                        ce.components &&
                          Array.isArray(ce.components) &&
                          $(ce.components));
                    });
                  },
                  q = JSON.parse(JSON.stringify(o));
                ($(q), l(q));
              }
            } else
              (console.error("❌ API 回應錯誤:", C),
                a(`取消合併失敗：${C.Result || "未知錯誤"}`, "error"));
          } catch (ie) {
            (console.error("💥 API 調用失敗:", ie),
              a("取消合併失敗：網路錯誤", "error"));
          } finally {
            (console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              d(null),
              s());
          }
      },
      xe = async () => {
        if (n)
          try {
            n.name = h;
            const W = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              Data: [n.drawer],
            };
            console.log("🚀 發送確認更新 API 請求:", W);
            const ie = await Ee.request("/api/device/update_epd583_drawers", {
              method: "POST",
              body: JSON.stringify(W),
            });
            if ((console.log("📡 確認更新 API 回應:", ie), ie.Code === 200)) {
              if (
                (console.log("✅ 抽屜資料更新成功"),
                a("抽屜資料更新成功", "success"),
                o)
              ) {
                const we = (ae) => {
                    ae.forEach((V) => {
                      (V.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新名稱"),
                        (V.name = n.name)),
                        V.contents &&
                          Array.isArray(V.contents) &&
                          we(V.contents),
                        V.components &&
                          Array.isArray(V.components) &&
                          we(V.components));
                    });
                  },
                  O = JSON.parse(JSON.stringify(o));
                (we(O), l(O));
              }
              (b(!1), p(null), s(), t());
            } else
              (console.error("❌ 抽屜資料更新失敗:", ie),
                a(`抽屜資料更新失敗：${ie.Result || "未知錯誤"}`, "error"));
          } catch (W) {
            (console.error("💥 抽屜資料更新 API 調用失敗:", W),
              a("抽屜資料更新失敗：網路錯誤", "error"));
          }
      },
      me = () => {
        var je;
        if (
          !((je = n == null ? void 0 : n.drawer) != null && je.Boxes) ||
          n.drawer.Boxes.length === 0
        )
          return r.jsx("div", {
            className:
              "bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg py-12",
            children: r.jsxs("div", {
              className: "text-center",
              children: [
                r.jsx(cf, {
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
          ie = (he) => {
            if (he.Slave) return { width: 1, height: 1 };
            const C = W.filter(
              (Ue) =>
                Ue.Slave &&
                Ue.MasterBox_Row === he.Row &&
                Ue.MasterBox_Column === he.Column,
            );
            if (C.length === 0) return { width: 1, height: 1 };
            const $ = [he, ...C],
              q = Math.min(...$.map((Ue) => Ue.Row)),
              fe = Math.max(...$.map((Ue) => Ue.Row)),
              ce = Math.min(...$.map((Ue) => Ue.Column));
            return {
              width: Math.max(...$.map((Ue) => Ue.Column)) - ce + 1,
              height: fe - q + 1,
            };
          },
          we = Math.max(...W.map((he) => he.Row + 1 - 1)),
          O = Math.max(...W.map((he) => he.Column + 1 - 1)),
          ae = we + 1,
          V = O + 1,
          ye = Array(ae)
            .fill(null)
            .map(() => Array(V).fill(!1)),
          de = {};
        return (
          W.forEach((he) => {
            if (!he.Slave) {
              const C = ie(he);
              ((de[`${he.Row},${he.Column}`] = he),
                (he.calculatedWidth = C.width),
                (he.calculatedHeight = C.height));
            }
          }),
          W.forEach((he) => {
            if (
              !he.Slave &&
              (he.calculatedWidth > 1 || he.calculatedHeight > 1)
            )
              for (let C = he.Row; C < he.Row + he.calculatedHeight; C++)
                for (let $ = he.Column; $ < he.Column + he.calculatedWidth; $++)
                  (C !== he.Row || $ !== he.Column) && (ye[C][$] = !0);
          }),
          r.jsx("div", {
            className: "rounded-lg",
            children: r.jsx("table", {
              className: "w-full",
              children: r.jsx("tbody", {
                children: Array.from({ length: ae }, (he, C) =>
                  r.jsx(
                    "tr",
                    {
                      children: Array.from({ length: V }, ($, q) => {
                        if (ye[C][q]) return null;
                        const fe = `${C},${q}`,
                          ce = de[fe];
                        return ce
                          ? r.jsx(
                              "td",
                              {
                                className: `border border-gray-400 pt-1 pl-1 align-top cursor-pointer select-none ${J(C, q) ? "bg-blue-200" : "bg-white hover:bg-gray-100"}`,
                                style: {
                                  width: `${100 / V}%`,
                                  minHeight: "40px",
                                  height: `${50 * ce.calculatedHeight}px`,
                                  maxHeight: `${50 * ce.calculatedHeight}px`,
                                },
                                colSpan: ce.calculatedWidth,
                                rowSpan: ce.calculatedHeight,
                                onMouseDown: (Ce) => Z(C, q, Ce),
                                onMouseEnter: () => Ie(C, q),
                                onMouseUp: Pe,
                                onTouchStart: (Ce) => Z(C, q, Ce),
                                onTouchMove: (Ce) => {
                                  if ((Ce.preventDefault(), !T)) return;
                                  const Ue = Ce.touches[0],
                                    We = document.elementFromPoint(
                                      Ue.clientX,
                                      Ue.clientY,
                                    ),
                                    ct = We == null ? void 0 : We.closest("td");
                                  if (ct) {
                                    const Et = parseInt(
                                        ct.getAttribute("data-row") || "0",
                                      ),
                                      Pt = parseInt(
                                        ct.getAttribute("data-col") || "0",
                                      );
                                    Ie(Et, Pt);
                                  }
                                },
                                onTouchEnd: Pe,
                                "data-row": C,
                                "data-col": q,
                                children: r.jsx("div", {
                                  className: "h-full flex flex-col",
                                  children:
                                    ce.Code || ce.Name || ce.ChineseName
                                      ? r.jsxs(r.Fragment, {
                                          children: [
                                            ce.Code &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs font-mono text-gray-600",
                                                children: ce.Code,
                                              }),
                                            ce.Name &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs font-medium text-gray-900",
                                                children: ce.Name,
                                              }),
                                            ce.ChineseName &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs text-gray-700",
                                                children: ce.ChineseName,
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
                                className: `border border-gray-300 p-2 align-top cursor-pointer select-none ${J(C, q) ? "border-1 border-blue-500 bg-blue-100" : "bg-gray-50 hover:bg-gray-100"}`,
                                style: {
                                  width: `${100 / V}%`,
                                  minWidth: "80px",
                                  minHeight: "80px",
                                },
                                onMouseDown: (Ce) => Z(C, q, Ce),
                                onMouseEnter: () => Ie(C, q),
                                onMouseUp: Pe,
                                onTouchStart: (Ce) => Z(C, q, Ce),
                                onTouchMove: (Ce) => {
                                  if ((Ce.preventDefault(), !T)) return;
                                  const Ue = Ce.touches[0],
                                    We = document.elementFromPoint(
                                      Ue.clientX,
                                      Ue.clientY,
                                    ),
                                    ct = We == null ? void 0 : We.closest("td");
                                  if (ct) {
                                    const Et = parseInt(
                                        ct.getAttribute("data-row") || "0",
                                      ),
                                      Pt = parseInt(
                                        ct.getAttribute("data-col") || "0",
                                      );
                                    Ie(Et, Pt);
                                  }
                                },
                                onTouchEnd: Pe,
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
                        r.jsx($n, { className: "w-6 h-6 text-gray-600" }),
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
                      children: r.jsx(tt, { className: "w-6 h-6" }),
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
                              onChange: (W) => x(W.target.value),
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
                          children: me(),
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
                                onClick: Me,
                                disabled: !Se,
                                className: `px-4 py-2 rounded transition-colors ${Se ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`,
                                children: c("button.merge"),
                              }),
                              r.jsx("button", {
                                onClick: Ge,
                                disabled: !R,
                                className: `px-4 py-2 rounded transition-colors ${R ? "bg-red-600 text-white hover:bg-red-700" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`,
                                children: c("button.unmerge"),
                              }),
                            ],
                          }),
                        }),
                        r.jsx("div", {
                          className: "space-y-2 w-[30%]",
                          children: (() => {
                            const W = z(),
                              ie = W.find((we) => !we.Slave);
                            return ie && (ie.Code || ie.Name || ie.ChineseName)
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
                                          children: ie.Code || "-",
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
                                          children: ie.Name || "-",
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
                                          children: ie.ChineseName || "-",
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
                                  value: I,
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
                                      r.jsx(Gt, {
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
                                      r.jsx(Gt, {
                                        className: "w-5 h-5 animate-spin mr-2",
                                      }),
                                      c("status.searching"),
                                    ],
                                  })
                                : E.length > 0
                                  ? r.jsx("div", {
                                      className: "space-y-1",
                                      children: E.map((W, ie) =>
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
                                                onClick: () => ge(W),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: c("button.add"),
                                                children: r.jsx(At, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          W.GUID || ie,
                                        ),
                                      ),
                                    })
                                  : r.jsx("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: c(
                                        y || I !== "N"
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
                  onMouseUp: Pe,
                  onMouseLeave: Pe,
                  onTouchEnd: Pe,
                  onTouchCancel: Pe,
                }),
              ],
            }),
          ],
        });
  },
  Gh = () => {
    var F;
    const {
        addParentContainerModalOpen: e,
        closeAddParentContainerModal: t,
        selectedDepartmentForAdd: n,
        showNotification: s,
        setSidebarOpen: o,
        addParentContainerToLocalData: l,
      } = it(),
      { t: a } = It(),
      [i, c] = u.useState(null),
      [h, x] = u.useState(0),
      [m, p] = u.useState(0),
      [j, b] = u.useState(!1);
    (u.useEffect(() => {
      e && (c(null), x(0), p(0), b(!1));
    }, [e]),
      u.useEffect(() => {
        i && (x(i.row), p(i.col));
      }, [i]));
    const T = () => {
        const M = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((U) => {
              U.type === "parent_container" &&
                U.gird_position &&
                M.add(U.gird_position);
            }),
          M
        );
      },
      _ = () => {
        const M = T(),
          U = [];
        if (M.size === 0) return (U.push({ row: 0, col: 0 }), U);
        const se = [];
        M.forEach((k) => {
          const [N, L] = k.split(",").map(Number);
          se.push({ row: N, col: L });
        });
        const be = new Set();
        return (
          se.forEach(({ row: k, col: N }) => {
            (be.add(`${k},${N + 1}`),
              be.add(`${k + 1},${N}`),
              N > 0 && be.add(`${k},${N - 1}`),
              k > 0 && be.add(`${k - 1},${N}`));
          }),
          be.forEach((k) => {
            if (!M.has(k)) {
              const [N, L] = k.split(",").map(Number);
              N >= 0 && L >= 0 && U.push({ row: N, col: L });
            }
          }),
          M.has("0,1") ||
            U.some((N) => N.row === 0 && N.col === 1) ||
            U.push({ row: 0, col: 1 }),
          M.has("1,0") ||
            U.some((N) => N.row === 1 && N.col === 0) ||
            U.push({ row: 1, col: 0 }),
          U.sort((k, N) => (k.row === N.row ? k.col - N.col : k.row - N.row))
        );
      },
      f = (M) => {
        c(M);
      },
      d = (M) => {
        (x(M), c({ row: M, col: m }));
      },
      y = (M) => {
        (p(M), c({ row: h, col: M }));
      },
      v = i && !T().has(`${i.row},${i.col}`) && i.row >= 0 && i.col >= 0,
      I = async () => {
        if (!(!i || !n || !v)) {
          b(!0);
          try {
            const M = `${i.row},${i.col}`;
            console.log(n);
            const U = await Ee.addMedMapSection(n.GUID, M, n.name, n.type);
            if (U.Code === 200) {
              const se = {
                GUID: U.Data.GUID,
                Master_GUID: U.Data.Master_GUID,
                gird_position: U.Data.position,
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
            } else s(`新增失敗：${U.Result || "未知錯誤"}`, "error");
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
      E = () => {
        const M = T(),
          U = _(),
          se = [...M]
            .map((w) => {
              const [z, te] = w.split(",").map(Number);
              return { row: z, col: te };
            })
            .concat(U);
        se.length === 0 && se.push({ row: 0, col: 0 });
        const be = Math.max(...se.map((w) => w.row)),
          k = Math.max(...se.map((w) => w.col)),
          N = Math.min(...se.map((w) => w.row)),
          L = Math.min(...se.map((w) => w.col)),
          P = be - N + 1,
          J = k - L + 1;
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
                style: { gridTemplateColumns: `repeat(${J}, 1fr)` },
                children: Array.from({ length: P * J }, (w, z) => {
                  const te = Math.floor(z / J) + N,
                    H = (z % J) + L,
                    A = `${te},${H}`,
                    Se = M.has(A),
                    R = U.some((ge) => ge.row === te && ge.col === H),
                    G =
                      (i == null ? void 0 : i.row) === te &&
                      (i == null ? void 0 : i.col) === H;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => R && f({ row: te, col: H }),
                      disabled: Se || !R,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${Se ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed" : G ? "bg-blue-500 border-blue-600 text-white shadow-lg" : R ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer" : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"}
                  `,
                      title: Se ? "已占用" : R ? "可選擇" : "不可用",
                      children: Se ? "占用" : `${te},${H}`,
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
                        r.jsx(At, { className: "w-6 h-6 text-green-600" }),
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
                      children: r.jsx(tt, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      E(),
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
                      onClick: I,
                      disabled: !v || j,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        j && r.jsx(Gt, { className: "w-4 h-4 animate-spin" }),
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
  Bc = [
    {
      value: "dispensing_shelves",
      label: "藥盒層架",
      icon: r.jsx(vh, { className: "w-5 h-5" }),
      isShelf: !0,
    },
    {
      value: "store_shelves",
      label: "藥品層架",
      icon: r.jsx(uh, { className: "w-5 h-5" }),
      isShelf: !0,
    },
    {
      value: "list_draw",
      label: "清單抽屜",
      icon: r.jsx(Ta, { className: "w-5 h-5" }),
      isShelf: !1,
    },
    {
      value: "grid_draw",
      label: "格線抽屜",
      icon: r.jsx(cf, { className: "w-5 h-5" }),
      isShelf: !1,
    },
  ],
  zh = () => {
    var te;
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
      { t: h } = It(),
      [x, m] = u.useState("dispensing_shelves"),
      [p, j] = u.useState("1"),
      [b, T] = u.useState("1"),
      [_, f] = u.useState(""),
      [d, y] = u.useState(null),
      [v, I] = u.useState(0),
      [S, E] = u.useState(0),
      [F, M] = u.useState(!1);
    (u.useEffect(() => {
      e &&
        (m("dispensing_shelves"),
        j("1"),
        T("1"),
        f(""),
        y(null),
        I(0),
        E(0),
        M(!1));
    }, [e]),
      u.useEffect(() => {
        d && (I(d.row), E(d.col));
      }, [d]));
    const U = () => {
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
        const H = U(),
          A = [];
        if (H.size === 0) return (A.push({ row: 0, col: 0 }), A);
        const Se = [];
        H.forEach((G) => {
          const [ge, Z] = G.split(",").map(Number);
          Se.push({ row: ge, col: Z });
        });
        const R = new Set();
        return (
          Se.forEach(({ row: G, col: ge }) => {
            (R.add(`${G},${ge + 1}`),
              R.add(`${G + 1},${ge}`),
              ge > 0 && R.add(`${G},${ge - 1}`),
              G > 0 && R.add(`${G - 1},${ge}`));
          }),
          R.forEach((G) => {
            if (!H.has(G)) {
              const [ge, Z] = G.split(",").map(Number);
              ge >= 0 && Z >= 0 && A.push({ row: ge, col: Z });
            }
          }),
          H.has("0,1") ||
            A.some((ge) => ge.row === 0 && ge.col === 1) ||
            A.push({ row: 0, col: 1 }),
          H.has("1,0") ||
            A.some((ge) => ge.row === 1 && ge.col === 0) ||
            A.push({ row: 1, col: 0 }),
          A.sort((G, ge) =>
            G.row === ge.row ? G.col - ge.col : G.row - ge.row,
          )
        );
      },
      be = (H) => {
        y(H);
      },
      k = (H) => {
        (I(H), y({ row: H, col: S }));
      },
      N = (H) => {
        (E(H), y({ row: v, col: H }));
      },
      L = d && !U().has(`${d.row},${d.col}`) && d.row >= 0 && d.col >= 0,
      P = async () => {
        if (!(!d || !n || !L)) {
          M(!0);
          try {
            const H = `${d.row},${d.col}`,
              A = Bc.find((R) => R.value === x);
            let Se;
            (A != null && A.isShelf
              ? (Se = await Ee.addMedMapShelf({
                  Master_GUID: n.GUID,
                  position: H,
                  width: p,
                  height: b,
                  ip_light: _,
                  type: x,
                  serverName: n.name,
                  serverType: n.type,
                }))
              : (Se = await Ee.addMedMapDrawer({
                  Master_GUID: n.GUID,
                  position: H,
                  width: p,
                  height: b,
                  ip_drawer: _,
                  type: x,
                  serverName: n.name,
                  serverType: n.type,
                })),
              Se.Code === 200
                ? (a("新增成功", "success"), t(), c(!1), await J())
                : a(`新增失敗：${Se.Result || "未知錯誤"}`, "error"));
          } catch (H) {
            (console.error("Add container failed:", H),
              a("新增失敗：網路錯誤", "error"));
          } finally {
            M(!1);
          }
        }
      },
      J = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        (console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0));
        try {
          const H = await Ee.getMedMapByDepartment(s);
          if (H.Code === 200 && H.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const A = $t.convertMedMapApiToFakeData(H.Data);
            if (!$t.validateConvertedData(A)) {
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
      z = () => {
        const H = U(),
          A = se(),
          Se = [...H]
            .map((Me) => {
              const [Ge, ne] = Me.split(",").map(Number);
              return { row: Ge, col: ne };
            })
            .concat(A);
        Se.length === 0 && Se.push({ row: 0, col: 0 });
        const R = Math.max(...Se.map((Me) => Me.row)),
          G = Math.max(...Se.map((Me) => Me.col)),
          ge = Math.min(...Se.map((Me) => Me.row)),
          Z = Math.min(...Se.map((Me) => Me.col)),
          Ie = R - ge + 1,
          Pe = G - Z + 1;
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
                style: { gridTemplateColumns: `repeat(${Pe}, 1fr)` },
                children: Array.from({ length: Ie * Pe }, (Me, Ge) => {
                  const ne = Math.floor(Ge / Pe) + ge,
                    D = (Ge % Pe) + Z,
                    xe = `${ne},${D}`,
                    me = H.has(xe),
                    W = A.some((we) => we.row === ne && we.col === D),
                    ie =
                      (d == null ? void 0 : d.row) === ne &&
                      (d == null ? void 0 : d.col) === D;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => W && be({ row: ne, col: D }),
                      disabled: me || !W,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${me ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed" : ie ? "bg-blue-500 border-blue-600 text-white shadow-lg" : W ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer" : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"}
                  `,
                      title: me ? "已占用" : W ? "可選擇" : "不可用",
                      children: me ? "占用" : `${ne},${D}`,
                    },
                    xe,
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
                        r.jsx(At, { className: "w-6 h-6 text-green-600" }),
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
                      children: r.jsx(tt, { className: "w-6 h-6" }),
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
                            children: Bc.map((H) =>
                              r.jsxs(
                                "label",
                                {
                                  className: `flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${x === H.value ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"}`,
                                  children: [
                                    r.jsx("input", {
                                      type: "radio",
                                      name: "containerType",
                                      value: H.value,
                                      checked: x === H.value,
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
                            value: _,
                            onChange: (H) => f(H.target.value),
                            placeholder: "請輸入 IP 位址",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                          }),
                        ],
                      }),
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
                                    value: v,
                                    onChange: (H) =>
                                      k(parseInt(H.target.value) || 0),
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
                                  ((te = n == null ? void 0 : n.contents) ==
                                  null
                                    ? void 0
                                    : te.length) || 0,
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
                        F && r.jsx(Gt, { className: "w-4 h-4 animate-spin" }),
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
      { t: a } = It(),
      [i, c] = u.useState(null),
      [h, x] = u.useState(0),
      [m, p] = u.useState(0),
      [j, b] = u.useState(!1);
    (u.useEffect(() => {
      e && (c(null), x(0), p(0), b(!1));
    }, [e]),
      u.useEffect(() => {
        i && (x(i.row), p(i.col));
      }, [i]));
    const T = () => {
        const M = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((U) => {
              U.type === "sub_container" &&
                U.gird_position &&
                M.add(U.gird_position);
            }),
          M
        );
      },
      _ = () => {
        const M = T(),
          U = [];
        if (M.size === 0) return (U.push({ row: 0, col: 0 }), U);
        const se = [];
        M.forEach((k) => {
          const [N, L] = k.split(",").map(Number);
          se.push({ row: N, col: L });
        });
        const be = new Set();
        return (
          se.forEach(({ row: k, col: N }) => {
            (be.add(`${k},${N + 1}`),
              be.add(`${k + 1},${N}`),
              N > 0 && be.add(`${k},${N - 1}`),
              k > 0 && be.add(`${k - 1},${N}`));
          }),
          be.forEach((k) => {
            if (!M.has(k)) {
              const [N, L] = k.split(",").map(Number);
              N >= 0 && L >= 0 && U.push({ row: N, col: L });
            }
          }),
          M.has("0,1") ||
            U.some((N) => N.row === 0 && N.col === 1) ||
            U.push({ row: 0, col: 1 }),
          M.has("1,0") ||
            U.some((N) => N.row === 1 && N.col === 0) ||
            U.push({ row: 1, col: 0 }),
          U.sort((k, N) => (k.row === N.row ? k.col - N.col : k.row - N.row))
        );
      },
      f = (M) => {
        c(M);
      },
      d = (M) => {
        (x(M), c({ row: M, col: m }));
      },
      y = (M) => {
        (p(M), c({ row: h, col: M }));
      },
      v = i && !T().has(`${i.row},${i.col}`) && i.row >= 0 && i.col >= 0,
      I = async () => {
        if (!(!i || !n || !v)) {
          b(!0);
          try {
            const M = `${i.row},${i.col}`,
              U = await Ee.addSubSection(n.GUID, M);
            if (U.Code === 200) {
              const se = {
                GUID: U.Data.GUID,
                Master_GUID: U.Data.Master_GUID,
                name: "",
                type: "sub_container",
                class: 2,
                gird_position: U.Data.position,
                contents: [],
                serverName: n.serverName,
                serverType: n.serverType,
                oriMaxCol: 0,
              };
              (l(n.GUID, se), s("新增成功", "success"), t(), o(!1));
            } else s(`新增失敗：${U.Result || "未知錯誤"}`, "error");
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
      E = () => {
        const M = T(),
          U = _(),
          se = [...M]
            .map((w) => {
              const [z, te] = w.split(",").map(Number);
              return { row: z, col: te };
            })
            .concat(U);
        se.length === 0 && se.push({ row: 0, col: 0 });
        const be = Math.max(...se.map((w) => w.row)),
          k = Math.max(...se.map((w) => w.col)),
          N = Math.min(...se.map((w) => w.row)),
          L = Math.min(...se.map((w) => w.col)),
          P = be - N + 1,
          J = k - L + 1;
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
                style: { gridTemplateColumns: `repeat(${J}, 1fr)` },
                children: Array.from({ length: P * J }, (w, z) => {
                  const te = Math.floor(z / J) + N,
                    H = (z % J) + L,
                    A = `${te},${H}`,
                    Se = M.has(A),
                    R = U.some((ge) => ge.row === te && ge.col === H),
                    G =
                      (i == null ? void 0 : i.row) === te &&
                      (i == null ? void 0 : i.col) === H;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => R && f({ row: te, col: H }),
                      disabled: Se || !R,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${Se ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed" : G ? "bg-blue-500 border-blue-600 text-white shadow-lg" : R ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer" : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"}
                  `,
                      title: Se ? "已占用" : R ? "可選擇" : "不可用",
                      children: Se ? "占用" : `${te},${H}`,
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
                        r.jsx(At, { className: "w-6 h-6 text-green-600" }),
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
                      children: r.jsx(tt, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      E(),
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
                      onClick: I,
                      disabled: !v || j,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        j && r.jsx(Gt, { className: "w-4 h-4 animate-spin" }),
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
  Fh = ({ isOpen: e, onClose: t, storeShelf: n }) => {
    const {
        showNotification: s,
        addStockToShelf: o,
        selectedStockItemForEdit: l,
        originalStockItemBackup: a,
        storeItemModalMode: i,
        updateStockInShelf: c,
      } = it(),
      [h, x] = u.useState(""),
      [m, p] = u.useState(""),
      [j, b] = u.useState(""),
      [T, _] = u.useState(""),
      [f, d] = u.useState([]),
      [y, v] = u.useState([]),
      [I, S] = u.useState(""),
      [E, F] = u.useState(""),
      [M, U] = u.useState(""),
      [se, be] = u.useState(""),
      [k, N] = u.useState("EPD290"),
      [L, P] = u.useState(null),
      [J, w] = u.useState([]),
      [z, te] = u.useState(""),
      [H, A] = u.useState(null),
      [Se, R] = u.useState(!1),
      [G, ge] = u.useState([]),
      [Z, Ie] = u.useState(!1),
      Pe = u.useRef(null);
    (u.useEffect(() => {
      (async () => {
        if (!e || !n) return;
        const ae = n.serverName,
          V = n.serverType;
        if (!ae || !V) {
          console.warn("層架缺少 ServerName 或 ServerType");
          return;
        }
        Ie(!0);
        try {
          console.log(
            `正在載入藥品資料... ServerName: ${ae}, ServerType: ${V}`,
          );
          const ye = await Ee.getStock(ae, V);
          ye.Code === 200 && ye.Data
            ? (ge(ye.Data),
              console.log(`成功載入 ${ye.Data.length} 筆藥品資料`),
              ye.Data.length > 0 &&
                console.log("📦 藥品資料範例（第一筆）:", ye.Data[0]))
            : (console.error("載入藥品資料失敗:", ye.Result),
              s(ye.Result || "載入藥品資料失敗", "error"),
              ge([]));
        } catch (ye) {
          (console.error("載入藥品資料時發生錯誤:", ye),
            s("載入藥品資料失敗，請稍後再試", "error"),
            ge([]));
        } finally {
          Ie(!1);
        }
      })();
    }, [e, n]),
      u.useEffect(() => {
        if (e && i === "edit" && l) {
          (console.log(l),
            x(l.code || ""),
            p(l.name || ""),
            b(""),
            _(l.material_no || ""));
          const O = l.lot || [],
            ae = l.expiry_date || [],
            V = l.qty || [],
            ye = [];
          if (O.length > 0 || ae.length > 0 || V.length > 0) {
            const he = Math.max(O.length, ae.length, V.length),
              C = [];
            for (let $ = 0; $ < he; $++) {
              const q = ae[$] || "";
              let fe = "";
              (q && (fe = q.split("T")[0]),
                (fe = fe.replace(/\//g, "-")),
                C.push({
                  id: `batch_${Date.now()}_${$}`,
                  lot: O[$] || "",
                  expiryDate: fe,
                  qty: String(V[$] || ""),
                }),
                console.log(C),
                fe && ye.push(fe));
            }
            (d(C), v(ye));
          } else v([]);
          const je = (l.location || "0,0").split(",");
          (S(je[0] || "0"),
            F(je[1] || "0"),
            U(l.led_index || ""),
            be(l.ip || ""),
            N(l.device_type || "EPD290"));
        } else if (e && i === "add") {
          if (
            (x(""),
            p(""),
            b(""),
            _(""),
            d([]),
            v([]),
            U(""),
            be(""),
            N("EPD290"),
            n && n.medMapStock && n.medMapStock.length > 0)
          ) {
            const O = n.medMapStock.map((V) => {
              const de = (V.location || "0,0").split(",");
              return Number(de[0] || "0");
            });
            let ae = 0;
            for (; O.includes(ae); ) ae++;
            S(String(ae));
          } else S("0");
          F("0");
        }
      }, [e, i, l, n]),
      u.useEffect(() => {
        const O = (ae) => {
          Pe.current && !Pe.current.contains(ae.target) && P(null);
        };
        return (
          document.addEventListener("mousedown", O),
          () => {
            document.removeEventListener("mousedown", O);
          }
        );
      }, []));
    const Me = (O, ae) => {
        if (!ae.trim()) {
          w([]);
          return;
        }
        const V = ae.toLowerCase(),
          ye = G.filter((de) => {
            var je, he, C, $;
            if (!de.med_cloud) return !1;
            switch (O) {
              case "code":
                if (de.med_cloud)
                  return (je = de.med_cloud.CODE) == null
                    ? void 0
                    : je.toLowerCase().includes(V);
                if (!de.med_cloud) return de.code.toLowerCase().includes(V);
              case "name":
                if (de.med_cloud)
                  return (he = de.med_cloud.NAME) == null
                    ? void 0
                    : he.toLowerCase().includes(V);
                if (!de.med_cloud) return de.name.toLowerCase().includes(V);
              case "chineseName":
                return (C = de.med_cloud.CHT_NAME) == null
                  ? void 0
                  : C.toLowerCase().includes(V);
              case "skdiacode":
                return ($ = de.med_cloud.SKDIACODE) == null
                  ? void 0
                  : $.toLowerCase().includes(V);
              default:
                return !1;
            }
          });
        w(ye.slice(0, 50));
      },
      Ge = (O, ae) => {
        switch ((P(O), O)) {
          case "code":
            x(ae);
            break;
          case "name":
            p(ae);
            break;
          case "chineseName":
            b(ae);
            break;
          case "skdiacode":
            _(ae);
            break;
        }
        Me(O, ae);
      },
      ne = (O, ae) => {
        var he, C, $;
        const V = O.med_cloud;
        (x(V.CODE || ""),
          p(V.NAME || ""),
          b(V.CHT_NAME || ""),
          _(V.SKDIACODE || ""),
          te(O.GUID),
          A(O),
          console.log("🔍 選擇的藥品完整資料:", O));
        let ye = O.lot || ((he = O.med_cloud) == null ? void 0 : he.lot) || [],
          de =
            O.expiry_date ||
            ((C = O.med_cloud) == null ? void 0 : C.expiry_date) ||
            [],
          je = O.qty || (($ = O.med_cloud) == null ? void 0 : $.qty) || [];
        if (
          i === "edit" &&
          n != null &&
          n.medMapStock &&
          ye.length === 0 &&
          de.length === 0 &&
          je.length === 0
        ) {
          const q = n.medMapStock.find(
            (fe) =>
              fe.code === (V.CODE || "") ||
              fe.GUID === O.GUID ||
              fe.material_no === (V.SKDIACODE || ""),
          );
          q &&
            (console.log("🔍 從層架找到相同藥品的批次資訊:", q),
            (ye = q.lot || []),
            (de = q.expiry_date || []),
            (je = q.qty || []));
        }
        if (
          (console.log(
            "🔍 批次資訊 - lot:",
            ye,
            "expiry_date:",
            de,
            "qty:",
            je,
          ),
          console.log("🔍 當前模式:", i),
          i === "edit")
        )
          if (ye.length > 0 || de.length > 0 || je.length > 0) {
            const q = [],
              fe = Math.max(ye.length, de.length, je.length),
              ce = [];
            for (let Ce = 0; Ce < fe; Ce++) {
              const Ue = de[Ce] || "";
              let We = "";
              (Ue && (We = Ue.split("T")[0]),
                (We = We.replace(/\//g, "-")),
                ce.push({
                  id: `batch_${Date.now()}_${Ce}`,
                  lot: ye[Ce] || "",
                  expiryDate: We,
                  qty: String(je[Ce] || ""),
                }),
                We && q.push(We));
            }
            (console.log("✅ 成功載入批次資訊:", ce), d(ce), v(q));
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
      xe = (O) => {
        d(f.filter((ae) => ae.id !== O));
      },
      me = (O, ae, V) => {
        d(f.map((ye) => (ye.id === O ? { ...ye, [ae]: V } : ye)));
      },
      W = async () => {
        var ye;
        if (!h || !m) {
          s("請選擇藥品", "error");
          return;
        }
        if (!n || !n.GUID) {
          s("層架資訊錯誤", "error");
          return;
        }
        const O = [],
          ae = [],
          V = [];
        f.forEach((de) => {
          O.push(de.lot || "");
          let je = "";
          (de.expiryDate && (je = `${de.expiryDate}`),
            ae.push(je),
            V.push(de.qty ? `${Number(de.qty)}` : "0"));
        });
        try {
          if (i === "edit" && l) {
            const de = {
                GUID: z || l.GUID,
                code: h,
                device_type: k,
                expiry_date: ae,
                ip_light: se || "",
                ip: se || "",
                led_index: M || "",
                location: `${I || "0"},${E || "0"}`,
                lot: O,
                material_no: T || "",
                name: m,
                qty: V,
                shelf_guid: n.GUID,
              },
              je = await Ee.updateStock([de], n.serverName, n.serverType);
            if ((console.log("==============>", de), je.Code === 200)) {
              (c(n.GUID, l.GUID, de), console.log("檢查有無貨物批次被刪除"));
              const he = y.filter((C) => !ae.includes(C));
              if ((console.log(he), he.length > 0)) {
                console.log("🗑️ 檢測到被刪除的批次效期:", he);
                let C = "";
                try {
                  l.Value &&
                    ((C = JSON.parse(l.Value).GUID || ""),
                    console.log("📦 從 Value 欄位解析出的 GUID:", C));
                } catch ($) {
                  console.error("❌ 解析 Value 欄位失敗:", $);
                }
                if (C) {
                  for (const $ of he)
                    try {
                      console.log(`🗑️ 正在刪除批次，GUID: ${C}, 效期: ${$}`);
                      const q = await Ee.stockDeleteValidityPeriod(C, $);
                      q.Code === 200
                        ? console.log(`✅ 成功刪除批次效期: ${$}`)
                        : console.warn(
                            `⚠️ 刪除批次失敗 (效期: ${$}):`,
                            q.Result,
                          );
                    } catch (q) {
                      console.error(`❌ 刪除批次時發生錯誤 (效期: ${$}):`, q);
                    }
                  s(`更新貨物成功，已刪除 ${he.length} 個批次`, "success");
                } else
                  (console.warn("⚠️ 無法取得 Value GUID，跳過批次刪除"),
                    s("更新貨物成功（但無法刪除批次）", "success"));
              } else s("更新貨物成功", "success");
              we();
            } else s(je.Result || "更新貨物失敗", "error");
          } else {
            let de, je;
            if (H && H.shelf_guid)
              if (window.confirm("該藥品已有其他儲位，是否新增儲位？"))
                ((je = {
                  code: h,
                  device_type: k,
                  expiry_date: ae,
                  ip_light: se || "",
                  ip: se || "",
                  led_index: M || "",
                  location: `${I || "0"},${E || "0"}`,
                  lot: O,
                  material_no: T || "",
                  name: m,
                  qty: V,
                  shelf_guid: n.GUID,
                }),
                  (de = await Ee.addStock([je], n.serverName, n.serverType)));
              else return;
            else
              ((je = {
                code: h,
                device_type: k,
                expiry_date: ae,
                ip_light: se || "",
                ip: se || "",
                led_index: M || "",
                location: `${I || "0"},${E || "0"}`,
                lot: O,
                material_no: T || "",
                name: m,
                qty: V,
                shelf_guid: n.GUID,
              }),
                !(H != null && H.shelf_guid) &&
                  z &&
                  ((je.GUID = z),
                  console.log("🆔 藥品無儲位，帶入藥品 GUID:", z)),
                (de = await Ee.updateStock([je], n.serverName, n.serverType)));
            de.Code === 200
              ? (o(n.GUID, {
                  GUID:
                    ((ye = de.Data) == null ? void 0 : ye.GUID) ||
                    `stock_${Date.now()}`,
                  ...je,
                }),
                s("新增貨物成功", "success"),
                we())
              : s(de.Result || "新增貨物失敗", "error");
          }
        } catch (de) {
          (console.error("貨物操作錯誤:", de),
            s(
              i === "edit"
                ? "更新貨物失敗，請稍後再試"
                : "新增貨物失敗，請稍後再試",
              "error",
            ));
        }
      },
      ie = (O, ae) => {
        console.log("📸 掃描成功，填入藥品資料:", ae);
        const V = ae[0];
        (x(V.CODE || V.code || ""),
          p(V.NAME || V.name || ""),
          b(V.CHT_NAME || V.cht_name || ""),
          _(V.SKDIACODE || V.skdiacode || V.material_no || ""),
          te(V.GUID || ""));
        const ye = {
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
        A(ye);
        let de = V.lot || [],
          je = V.expiry_date || [],
          he = V.qty || [];
        if (
          i === "edit" &&
          n != null &&
          n.medMapStock &&
          de.length === 0 &&
          je.length === 0 &&
          he.length === 0
        ) {
          const C = n.medMapStock.find(
            ($) =>
              $.code === (V.CODE || V.code || "") ||
              $.GUID === (V.GUID || "") ||
              $.material_no ===
                (V.SKDIACODE || V.skdiacode || V.material_no || ""),
          );
          C &&
            (console.log("📸 從層架找到相同藥品的批次資訊:", C),
            (de = C.lot || []),
            (je = C.expiry_date || []),
            (he = C.qty || []));
        }
        if (
          (console.log(
            "📸 QR掃描批次資訊 - lot:",
            de,
            "expiry_date:",
            je,
            "qty:",
            he,
          ),
          console.log("📸 當前模式:", i),
          i === "edit")
        )
          if (de.length > 0 || je.length > 0 || he.length > 0) {
            const C = [],
              $ = Math.max(de.length, je.length, he.length),
              q = [];
            for (let fe = 0; fe < $; fe++) {
              const ce = je[fe] || "";
              let Ce = "";
              (ce && (Ce = ce.split("T")[0]),
                (Ce = Ce.replace(/\//g, "-")),
                q.push({
                  id: `batch_${Date.now()}_${fe}`,
                  lot: de[fe] || "",
                  expiryDate: Ce,
                  qty: String(he[fe] || ""),
                }),
                Ce && C.push(Ce));
            }
            (console.log("✅ QR掃描成功載入批次資訊:", q), d(q), v(C));
          } else
            (console.log("🗑️ QR掃描清空批次資訊（藥品無批次資料）"),
              d([]),
              v([]));
        (R(!1), s("已自動填入藥品資料", "success"));
      },
      we = () => {
        (x(""),
          p(""),
          b(""),
          _(""),
          d([]),
          v([]),
          S(""),
          F(""),
          U(""),
          be(""),
          N("EPD290"),
          te(""),
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
                      onClick: we,
                      className:
                        "p-2 hover:bg-gray-100 rounded-full transition-colors",
                      children: r.jsx(tt, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "p-4 space-y-2",
                  children: Z
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
                                      onClick: () => R(!0),
                                      className:
                                        "hover:bg-gray-100 rounded-lg transition-colors p-2",
                                      title: "掃描條碼",
                                      children: r.jsx(Fr, {
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
                                      ref: L === "code" ? Pe : null,
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
                                            Ge("code", O.target.value),
                                          onFocus: () => P("code"),
                                          className:
                                            "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                          placeholder: "輸入藥品代碼",
                                        }),
                                        L === "code" &&
                                          J.length > 0 &&
                                          r.jsx("div", {
                                            className:
                                              "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                            children: J.map(
                                              (O) =>
                                                O.med_cloud &&
                                                r.jsxs(
                                                  "div",
                                                  {
                                                    onClick: () => ne(O),
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
                                      ref: L === "name" ? Pe : null,
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
                                            Ge("name", O.target.value),
                                          onFocus: () => P("name"),
                                          className:
                                            "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                          placeholder: "輸入藥品名稱",
                                        }),
                                        L === "name" &&
                                          J.length > 0 &&
                                          r.jsx("div", {
                                            className:
                                              "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                            children: J.map(
                                              (O) =>
                                                O.med_cloud &&
                                                r.jsxs(
                                                  "div",
                                                  {
                                                    onClick: () => ne(O),
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
                                      ref: L === "chineseName" ? Pe : null,
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
                                            Ge("chineseName", O.target.value),
                                          onFocus: () => P("chineseName"),
                                          className:
                                            "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                          placeholder: "輸入中文名稱",
                                        }),
                                        L === "chineseName" &&
                                          J.length > 0 &&
                                          r.jsx("div", {
                                            className:
                                              "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                            children: J.map(
                                              (O) =>
                                                O.med_cloud &&
                                                r.jsxs(
                                                  "div",
                                                  {
                                                    onClick: () => ne(O),
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
                                      ref: L === "skdiacode" ? Pe : null,
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
                                            Ge("skdiacode", O.target.value),
                                          onFocus: () => P("skdiacode"),
                                          className:
                                            "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                          placeholder: "輸入料號",
                                        }),
                                        L === "skdiacode" &&
                                          J.length > 0 &&
                                          r.jsx("div", {
                                            className:
                                              "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                            children: J.map(
                                              (O) =>
                                                O.med_cloud &&
                                                r.jsxs(
                                                  "div",
                                                  {
                                                    onClick: () => ne(O),
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
                                        r.jsx(At, { className: "w-4 h-4" }),
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
                                      children: f.map((O, ae) =>
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
                                                    children: ["批次 ", ae + 1],
                                                  }),
                                                  r.jsx("button", {
                                                    onClick: () => xe(O.id),
                                                    className:
                                                      "p-1 text-red-600 hover:bg-red-50 rounded transition-colors",
                                                    title: "刪除批次",
                                                    children: r.jsx(Mr, {
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
                                                          me(
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
                                                          me(
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
                                                          me(
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
                                          value: I,
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
                                          value: E,
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
                                          onChange: (O) => U(O.target.value),
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
                                          onChange: (O) => be(O.target.value),
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
                                          value: k,
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
                      onClick: we,
                      className:
                        "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: W,
                      disabled: Z || G.length === 0,
                      className:
                        "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400",
                      children: i === "edit" ? "修改" : "新增",
                    }),
                  ],
                }),
              ],
            }),
            r.jsx(dl, {
              isOpen: Se,
              onClose: () => R(!1),
              onScanSuccess: ie,
              mode: "set_store_med_mode",
            }),
          ],
        })
      : null;
  },
  Hh = ({ isOpen: e, onClose: t }) => {
    const {
        selectedDepartmentType: n,
        apiDepartmentData: s,
        allDepartmentsList: o,
        showNotification: l,
        triggerRefresh: a,
        reloadMedMapData: i,
      } = it(),
      [c, h] = u.useState(null),
      [x, m] = u.useState(""),
      [p, j] = u.useState(!1),
      b = () => (s ? s.map((E) => E.name) : []),
      T = () => (!n || !o ? [] : o.filter((E) => E["department_type "] === n)),
      _ = () => {
        const E = b();
        return T().filter((M) => !E.includes(M.name));
      },
      f = () => (s ? s.map((E) => E.gird_position) : []),
      d = () => {
        const E = f(),
          F = [];
        for (let M = 0; M < 10; M++)
          for (let U = 0; U < 10; U++) {
            const se = `${M},${U}`;
            E.includes(se) || F.push(se);
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
        if (!x) {
          l("請選擇位置", "error");
          return;
        }
        if (!n) {
          l("部門分類資訊錯誤", "error");
          return;
        }
        j(!0);
        try {
          const E = await Ee.addMedMap(c.name, c.type, x);
          E.Code === 200
            ? (l("新增部門成功", "success"), await i(), v())
            : l(E.Result || "新增部門失敗", "error");
        } catch (E) {
          (console.error("新增部門錯誤:", E),
            l("新增部門失敗，請稍後再試", "error"));
        } finally {
          j(!1);
        }
      },
      v = () => {
        (h(null), m(""), t());
      };
    if (!e) return null;
    const I = _(),
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
                children: r.jsx(tt, { className: "w-5 h-5" }),
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
                  I.length === 0
                    ? r.jsx("div", {
                        className: "text-center py-8",
                        children: r.jsx("p", {
                          className: "text-gray-600",
                          children: "所有部門都已新增",
                        }),
                      })
                    : r.jsx("div", {
                        className: "space-y-2",
                        children: I.map((E) =>
                          r.jsxs(
                            "label",
                            {
                              className: `flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${(c == null ? void 0 : c.name) === E.name ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"}`,
                              children: [
                                r.jsx("input", {
                                  type: "radio",
                                  name: "department",
                                  value: E.name,
                                  checked:
                                    (c == null ? void 0 : c.name) === E.name,
                                  onChange: () => h(E),
                                  className:
                                    "w-4 h-4 text-blue-600 focus:ring-blue-500",
                                }),
                                r.jsxs("div", {
                                  className: "ml-3",
                                  children: [
                                    r.jsx("div", {
                                      className:
                                        "text-sm font-medium text-gray-900",
                                      children: E.name,
                                    }),
                                    r.jsx("div", {
                                      className: "text-xs text-gray-500",
                                      children: E.type,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            E.name,
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
                          children: S.map((E) => {
                            const [F, M] = E.split(",");
                            return r.jsxs(
                              "button",
                              {
                                onClick: () => m(E),
                                className: `p-3 border-2 rounded-lg text-sm font-medium transition-all ${x === E ? "border-blue-500 bg-blue-500 text-white" : "border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700"}`,
                                children: ["(", F, ",", M, ")"],
                              },
                              E,
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
                disabled: !c || !x || p,
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
  Vh = ({ isOpen: e, onClose: t, initialBarcode: n = "" }) => {
    const {
        showNotification: s,
        medicineList: o,
        isLoadingMedicines: l,
      } = it(),
      [a, i] = u.useState(""),
      [c, h] = u.useState(""),
      [x, m] = u.useState(""),
      [p, j] = u.useState(""),
      [b, T] = u.useState(""),
      [_, f] = u.useState(null),
      [d, y] = u.useState([]),
      [v, I] = u.useState(""),
      [S, E] = u.useState(null),
      [F, M] = u.useState(!1),
      U = u.useRef(null);
    (u.useEffect(() => {
      e && (i(n), h(""), m(""), j(""), T(""), I(""), E(null), f(null));
    }, [e, n]),
      u.useEffect(() => {
        const P = (J) => {
          U.current && !U.current.contains(J.target) && f(null);
        };
        return (
          document.addEventListener("mousedown", P),
          () => {
            document.removeEventListener("mousedown", P);
          }
        );
      }, []));
    const se = (P, J) => {
        if (!J.trim() || l) {
          y([]);
          return;
        }
        const w = J.toLowerCase(),
          z = o.filter((te) => {
            var H, A, Se, R;
            switch (P) {
              case "code":
                return (H = te.CODE) == null
                  ? void 0
                  : H.toLowerCase().includes(w);
              case "name":
                return (A = te.NAME) == null
                  ? void 0
                  : A.toLowerCase().includes(w);
              case "chineseName":
                return (Se = te.CHT_NAME) == null
                  ? void 0
                  : Se.toLowerCase().includes(w);
              case "skdiacode":
                return (R = te.SKDIACODE) == null
                  ? void 0
                  : R.toLowerCase().includes(w);
              default:
                return !1;
            }
          });
        y(z.slice(0, 10));
      },
      be = (P, J) => {
        switch ((f(P), P)) {
          case "code":
            h(J);
            break;
          case "name":
            m(J);
            break;
          case "chineseName":
            j(J);
            break;
          case "skdiacode":
            T(J);
            break;
        }
        se(P, J);
      },
      k = (P) => {
        (I(P.GUID),
          E(P),
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
          I(""),
          E(null),
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
          const J = await Ee.addMedClouds(
            a.trim(),
            c.trim(),
            JSON.stringify(P),
            S.BARCODE,
          );
          J.Code === 200
            ? (s("條碼建立成功", "success"), N())
            : s(J.Result || "建立條碼失敗", "error");
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
                        children: r.jsx(At, {
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
                    children: r.jsx(tt, { className: "w-6 h-6 text-gray-600" }),
                  }),
                ],
              }),
              r.jsx("div", {
                className: "flex-1 overflow-y-auto p-6",
                children: r.jsxs("div", {
                  className: "space-y-4",
                  ref: U,
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
                          onChange: (P) => be("code", P.target.value),
                          onFocus: () => f("code"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥碼搜尋...",
                          disabled: F,
                        }),
                        _ === "code" &&
                          d.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: d.map((P) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => k(P),
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
                          value: x,
                          onChange: (P) => be("name", P.target.value),
                          onFocus: () => f("name"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥名搜尋...",
                          disabled: F,
                        }),
                        _ === "name" &&
                          d.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: d.map((P) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => k(P),
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
                          onChange: (P) => be("chineseName", P.target.value),
                          onFocus: () => f("chineseName"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入中文名搜尋...",
                          disabled: F,
                        }),
                        _ === "chineseName" &&
                          d.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: d.map((P) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => k(P),
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
                          onChange: (P) => be("skdiacode", P.target.value),
                          onFocus: () => f("skdiacode"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入料號搜尋...",
                          disabled: F,
                        }),
                        _ === "skdiacode" &&
                          d.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: d.map((P) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => k(P),
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
  qh = ({
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
          sortedContents: p.sort((_, f) =>
            _.gridPos.row !== f.gridPos.row
              ? _.gridPos.row - f.gridPos.row
              : _.gridPos.col - f.gridPos.col,
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
              children: x(m),
            }),
          },
          m.GUID,
        );
      },
      h = (m, p, j) => {
        const b = {};
        return (
          m.forEach((T) => {
            const _ = l(T.gird_position || "0,0");
            b[`${_.row},${_.col}`] = T;
          }),
          r.jsx("table", {
            className: "w-full h-full max-w-full table-fixed",
            style: { borderCollapse: "separate", borderSpacing: "0px" },
            children: r.jsx("tbody", {
              children: Array.from({ length: p + 1 }, (T, _) =>
                r.jsx(
                  "tr",
                  {
                    children: Array.from({ length: j + 1 }, (f, d) => {
                      const y = `${_},${d}`,
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
                  _,
                ),
              ),
            }),
          })
        );
      },
      x = (m) => {
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
                const f = _.location || _.gird_position || "0,0",
                  [d, y] = f.split(",").map(Number);
                (j[d] || (j[d] = []),
                  j[d].push({ ..._, _position: d, _depth: y }));
              });
              const b = Object.keys(j)
                  .map(Number)
                  .sort((_, f) => _ - f),
                T = b.length;
              return (
                Math.max(...b.map((_) => j[_].length)),
                r.jsx("div", {
                  className: "flex h-full w-full overflow-hidden gap-1",
                  children: b.map((_) => {
                    const f = j[_].sort((I, S) => S._depth - I._depth),
                      d = T > 0 ? 100 / T : 100,
                      y = f.length,
                      v = y > 0 ? 100 / y : 100;
                    return r.jsx(
                      "div",
                      {
                        className: "flex flex-col h-full",
                        style: { width: `${d}%` },
                        children: f.map((I, S) => {
                          let E = 0;
                          I.qty &&
                            I.qty.forEach((be) => {
                              E += +be;
                            });
                          const F = t && (I.code == t || I.material_no == t),
                            M = n.includes(I.code) || n.includes(I.material_no),
                            U = o(),
                            se = S === y - 1;
                          return r.jsxs(
                            "div",
                            {
                              className: `border-2 rounded-lg border-gray-300 p-2 flex flex-col text-gray-800 justify-center items-center transition-colors cursor-pointer min-w-0 overflow-hidden ${se ? "" : "mb-1"} ${M ? "highlight-breathe-red" : F ? `highlight-breathe-${U}` : ""}`,
                              style: {
                                height: `calc(${v}% - ${se ? "0px" : "0.25rem"})`,
                              },
                              onClick: () =>
                                s &&
                                s({
                                  code: I.code || I.material_no,
                                  name: I.name,
                                }),
                              children: [
                                r.jsx("div", {
                                  className:
                                    "text-sm font-semibold truncate w-full text-center whitespace-normal overflow-hidden",
                                  children: I.name || I.material_no,
                                }),
                                r.jsxs("div", {
                                  className: "text-xs mt-1",
                                  children: ["數量: ", E || 0],
                                }),
                              ],
                            },
                            I.GUID || S,
                          );
                        }),
                      },
                      _,
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
            children: x(e),
          }),
        })
      : r.jsx("div", {
          className: "flex items-center justify-center h-full text-gray-400",
          children: r.jsx("p", { children: "無容器資料" }),
        });
  },
  Wh = ({ isOpen: e, onClose: t, type: n, data: s, onApprove: o }) => {
    const [l, a] = u.useState("0"),
      [i, c] = u.useState("0"),
      [h, x] = u.useState(null),
      [m, p] = u.useState(null),
      [j, b] = u.useState(!1),
      [T, _] = u.useState(!1),
      [f, d] = u.useState(""),
      [y, v] = u.useState(""),
      [I, S] = u.useState([]),
      [E, F] = u.useState([]),
      [M, U] = u.useState([]),
      [se, be] = u.useState(!1),
      [k, N] = u.useState(!1),
      L = u.useRef(null),
      P = u.useRef(null),
      J = u.useRef(null),
      w = u.useRef(null);
    (u.useEffect(() => {
      if (e && s) {
        const D = s.issuedQuantity || s.requestedQuantity || "0";
        (a(D), c(D), x(null), p(null), b(!1));
        const xe = localStorage.getItem("medMap_setting");
        if (xe)
          try {
            const me = JSON.parse(xe);
            (d(me.default_person || ""), v(me.default_person_id || ""));
          } catch (me) {
            (console.error("讀取設定失敗:", me), d(""), v(""));
          }
        else (d(""), v(""));
        z();
      }
    }, [e, s]),
      u.useEffect(() => {
        const D = (xe) => {
          (J.current &&
            !J.current.contains(xe.target) &&
            L.current &&
            !L.current.contains(xe.target) &&
            be(!1),
            w.current &&
              !w.current.contains(xe.target) &&
              P.current &&
              !P.current.contains(xe.target) &&
              N(!1));
        };
        return (
          document.addEventListener("mousedown", D),
          () => document.removeEventListener("mousedown", D)
        );
      }, []));
    const z = async () => {
        try {
          const D = await Ee.getAllStaffInfo();
          D.Code === 200 && D.Data && S(D.Data);
        } catch (D) {
          console.error("獲取人員資料失敗:", D);
        }
      },
      te = (D) => {
        if ((d(D), D.trim() === "")) {
          (F([]), be(!1));
          return;
        }
        const xe = I.filter(
          (me) => me.name && me.name.toLowerCase().includes(D.toLowerCase()),
        );
        (F(xe), be(xe.length > 0));
      },
      H = (D) => {
        if ((v(D), D.trim() === "")) {
          (U([]), N(!1));
          return;
        }
        const xe = I.filter(
          (me) => me.ID && me.ID.toLowerCase().includes(D.toLowerCase()),
        );
        (U(xe), N(xe.length > 0));
      },
      A = (D) => {
        (d(D.name), v(D.ID), be(!1));
      },
      Se = (D) => {
        (d(D.name), v(D.ID), N(!1));
      };
    if (!e || !s) return null;
    const R = (D) => {
        if (j) (a(D), c(D), b(!1));
        else {
          const xe = l === "0" ? D : l + D;
          (a(xe), c(xe));
        }
      },
      G = (D) => {
        (h && m !== null && !j && ge(), p(i), x(D), b(!0));
      },
      ge = () => {
        if (h === null || m === null) return;
        const D = parseFloat(m),
          xe = parseFloat(i);
        let me = 0;
        switch (h) {
          case "+":
            me = D + xe;
            break;
          case "-":
            me = D - xe;
            break;
          case "×":
            me = D * xe;
            break;
          case "÷":
            me = xe !== 0 ? D / xe : 0;
            break;
          default:
            return;
        }
        const W = me.toString();
        (a(W), c(W), x(null), p(null), b(!0));
      },
      Z = () => {
        ge();
      },
      Ie = () => {
        if (j) (a("0."), c("0."), b(!1));
        else if (!l.includes(".")) {
          const D = l + ".";
          (a(D), c(D));
        }
      },
      Pe = () => {
        (a("0"), c("0"), x(null), p(null), b(!1));
      },
      Me = () => {
        const D = new Date(),
          xe = D.getFullYear(),
          me = String(D.getMonth() + 1).padStart(2, "0"),
          W = String(D.getDate()).padStart(2, "0"),
          ie = String(D.getHours()).padStart(2, "0"),
          we = String(D.getMinutes()).padStart(2, "0"),
          O = String(D.getSeconds()).padStart(2, "0");
        return `${xe}-${me}-${W}T${ie}:${we}:${O}`;
      },
      Ge = async () => {
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
          _(!0);
          try {
            const me = Me();
            if (n === "requisition") {
              const W = await Ee.updateRequisitionActualQuantity(s.GUID, l);
              if (W.Code !== 200) {
                (alert(`更新實際撥發量失敗：${W.Message || "未知錯誤"}`),
                  _(!1));
                return;
              }
              const ie = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuingPerson: f,
                issueTime: me,
              };
              console.log("申領request", ie);
              const we = await Ee.updateRequisitionByGuid(ie);
              if (we.Code !== 200) {
                (alert(`申領過帳失敗：${we.Message || "未知錯誤"}`), _(!1));
                return;
              }
              console.log("✅ 申領核撥成功:", {
                GUID: s.GUID,
                name: s.name,
                actualQuantity: l,
                issuingPerson: f,
                issueTime: me,
              });
            } else {
              const W = await Ee.updateDistributionActualQuantity(s.GUID, l);
              if (W.Code !== 200) {
                (alert(`更新實際撥發量失敗：${W.Message || "未知錯誤"}`),
                  _(!1));
                return;
              }
              const ie = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuer: f,
                issuanceTime: me,
              };
              console.log("撥補request", ie);
              const we = await Ee.updateDistributionByGuid(ie);
              if (we.Code !== 200) {
                (alert(`撥補過帳失敗：${we.Message || "未知錯誤"}`), _(!1));
                return;
              }
              console.log("✅ 撥補核撥成功:", {
                GUID: s.GUID,
                name: s.name,
                actualQuantity: l,
                issuer: f,
                issuanceTime: me,
              });
            }
            (o && (await o()), alert(`${D}核撥成功！`), t());
          } catch (me) {
            (console.error(`${D}核撥失敗:`, me),
              alert(`${D}核撥失敗，請稍後再試`));
          } finally {
            _(!1);
          }
        }
      },
      ne = n === "requisition" ? s.requestedQuantity : s.issuedQuantity;
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
                  children: r.jsx(tt, { className: "w-5 h-5 text-gray-700" }),
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
                                onChange: (D) => te(D.target.value),
                                onFocus: () => {
                                  f.trim() && te(f);
                                },
                                placeholder: "人員名稱",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              se &&
                                r.jsx("div", {
                                  ref: J,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: E.map((D, xe) =>
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
                                      xe,
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
                              k &&
                                r.jsx("div", {
                                  ref: w,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: M.map((D, xe) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => Se(D),
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
                                      xe,
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
                            children: ne || "-",
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
                        onClick: () => R("7"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "7",
                      }),
                      r.jsx("button", {
                        onClick: () => R("8"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "8",
                      }),
                      r.jsx("button", {
                        onClick: () => R("9"),
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
                        onClick: () => R("4"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "4",
                      }),
                      r.jsx("button", {
                        onClick: () => R("5"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "5",
                      }),
                      r.jsx("button", {
                        onClick: () => R("6"),
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
                        onClick: () => R("1"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "1",
                      }),
                      r.jsx("button", {
                        onClick: () => R("2"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "2",
                      }),
                      r.jsx("button", {
                        onClick: () => R("3"),
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
                        onClick: () => R("0"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "0",
                      }),
                      r.jsx("button", {
                        onClick: Ie,
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: ".",
                      }),
                      r.jsx("button", {
                        onClick: Z,
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
                  onClick: Pe,
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
  Yh = ({
    isOpen: e,
    onClose: t,
    medicineInfo: n,
    requisitions: s,
    distributions: o,
    onNoticeUpdated: l,
  }) => {
    const { setHighlightedMedicineCode: a } = it(),
      [i, c] = u.useState(s),
      [h, x] = u.useState(o),
      [m, p] = u.useState(null),
      [j, b] = u.useState(!1),
      [T, _] = u.useState(null),
      [f, d] = u.useState("requisition"),
      [y, v] = u.useState(!1),
      [I, S] = u.useState(!1);
    (No.useEffect(() => {
      (c(s), x(o));
    }, [s, o]),
      u.useEffect(
        () => () => {
          Ns.cleanup();
        },
        [],
      ));
    const E = async () => {
        var N;
        if (n && !I) {
          if (!n.serverName || !n.serverType) {
            alert("無法取得藥品位置資訊");
            return;
          }
          S(!0);
          try {
            const L = localStorage.getItem("medMap_setting");
            let P = "255,0,0",
              J = "1",
              w = 60;
            if (L)
              try {
                const z = JSON.parse(L);
                ((P =
                  {
                    blue: "255,0,0",
                    green: "0,255,0",
                    red: "0,0,255",
                    yellow: "0,255,255",
                    purple: "255,0,255",
                    cyan: "255,255,0",
                  }[z.light_color] || "255,0,0"),
                  (J =
                    ((N = z.brightness) == null ? void 0 : N.toString()) ||
                    "1"),
                  (w = z.light_sec || 60));
              } catch (z) {
                console.error("讀取設定失敗:", z);
              }
            if (y) (await Ns.turnOffAllLights(), v(!1), a(null));
            else {
              const z = [
                {
                  serverName: n.serverName,
                  serverType: n.serverType,
                  medicineCode: n.code,
                },
              ];
              (await Ns.startLighting(z, P, J, w * 1e3, () => {
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
          J = P.findIndex((w) => w.GUID === N.GUID);
        if (J === -1) {
          p(null);
          return;
        }
        ((P[J] = { ...N, notice: L }), c(P));
        try {
          const w = await Ee.updateRequisitionNotice(N.GUID, L);
          w.Code !== 200
            ? ((P[J] = { ...N, notice: N.notice }),
              c(P),
              console.error("更新申領通知狀態失敗:", w))
            : l && l();
        } catch (w) {
          ((P[J] = { ...N, notice: N.notice }),
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
          J = P.findIndex((w) => w.GUID === N.GUID);
        if (J === -1) {
          p(null);
          return;
        }
        ((P[J] = { ...N, notice: L }), x(P));
        try {
          const w = await Ee.updateDistributionNotice(N.GUID, L);
          w.Code !== 200
            ? ((P[J] = { ...N, notice: N.notice }),
              x(P),
              console.error("更新撥補通知狀態失敗:", w))
            : l && l();
        } catch (w) {
          ((P[J] = { ...N, notice: N.notice }),
            x(P),
            console.error("更新撥補通知狀態失敗:", w));
        } finally {
          p(null);
        }
      };
    if (!e || !n) return null;
    const U = i.filter((N) => N.state === "等待過帳"),
      se = h.filter((N) => N.state === "等待過帳"),
      be = U.length === 0 && se.length === 0,
      k = (N) => {
        if (!N || N === "1/01/01 00:00:00" || N === "0001-01-01T00:00:00")
          return "-";
        try {
          const L = new Date(N);
          if (isNaN(L.getTime())) return N;
          const P = L.getFullYear(),
            J = String(L.getMonth() + 1).padStart(2, "0"),
            w = String(L.getDate()).padStart(2, "0"),
            z = String(L.getHours()).padStart(2, "0"),
            te = String(L.getMinutes()).padStart(2, "0");
          return `${P}/${J}/${w} ${z}:${te}`;
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
                      onClick: E,
                      disabled: I,
                      className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed ${y ? "bg-green-500 text-white hover:bg-green-600 shadow-lg" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`,
                      title: y ? "點擊關燈" : "點擊亮燈",
                      children: r.jsx(gh, {
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
                    children: r.jsx(tt, { className: "w-6 h-6 text-gray-700" }),
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
              children: be
                ? r.jsx("div", {
                    className:
                      "flex items-center justify-center h-40 text-gray-400 text-lg",
                    children: "無藥品需求",
                  })
                : r.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      U.map((N, L) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-blue-200 rounded-lg p-3 bg-blue-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              (d("requisition"), _(N), b(!0));
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
                                        children: r.jsx(Gc, {
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
                                        children: k(N.requestTime),
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
                              (d("distribution"), _(N), b(!0));
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
                                    children: r.jsx(Gc, {
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
                                        children: k(N.addedTime),
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
        r.jsx(Wh, {
          isOpen: j,
          onClose: () => b(!1),
          type: f,
          data: T,
          onApprove: l,
        }),
      ],
    });
  },
  Qh = ({ isOpen: e, onClose: t, container: n }) => {
    const [s, o] = u.useState("list_mode"),
      { highlightedMedicineCode: l, apiDepartmentData: a } = it(),
      [i, c] = u.useState(!1),
      [h, x] = u.useState([]),
      [m, p] = u.useState([]),
      [j, b] = u.useState([]),
      [T, _] = u.useState(!1),
      [f, d] = u.useState(null),
      y = u.useRef(null),
      v = u.useRef(null),
      I = u.useCallback(
        (k) => {
          if (!a || !k) return null;
          const N = (L) => {
            for (const P of L) {
              if (P.GUID === k) return P;
              if (P.contents && Array.isArray(P.contents)) {
                const J = N(P.contents);
                if (J) return J;
              }
            }
            return null;
          };
          for (const L of a) {
            if (L.GUID === k) return L;
            if (L.contents && Array.isArray(L.contents)) {
              const P = N(L.contents);
              if (P) return P;
            }
          }
          return null;
        },
        [a],
      ),
      S = n ? I(n.GUID) || n : null,
      E = () => {
        try {
          const N = localStorage.getItem("medMap_setting");
          if (N) {
            const P = JSON.parse(N).light_sec;
            if (P != null && P !== "") {
              const J = Number(P);
              if (!isNaN(J) && J > 0) return J * 1e3;
            }
          }
        } catch (N) {
          console.error("讀取亮燈設定失敗:", N);
        }
        return 6e4;
      },
      F = () => {
        try {
          const k = localStorage.getItem("medMap_setting");
          if (k) return JSON.parse(k).light_color || "red";
        } catch (k) {
          console.error("讀取高亮顏色設定失敗:", k);
        }
        return "red";
      },
      M = u.useCallback(async () => {
        try {
          const k = new Date(),
            N = `${k.getFullYear()}-${String(k.getMonth() + 1).padStart(2, "0")}-${String(k.getDate()).padStart(2, "0")} 00:00:00`,
            L = `${k.getFullYear()}-${String(k.getMonth() + 1).padStart(2, "0")}-${String(k.getDate()).padStart(2, "0")} 23:59:59`,
            [P, J] = await Promise.all([
              Ee.getRequisitionByTime(N, L),
              Ee.getDistributionByTime(N, L),
            ]),
            w = [];
          if (P.Code === 200 && P.Data) {
            const z = P.Data.filter((H) => {
              var A;
              return (A = S == null ? void 0 : S.med_list) == null
                ? void 0
                : A.some((Se) => Se.code === H.code);
            });
            (p(z),
              z
                .filter((H) => H.state === "等待過帳" && H.notice === "True")
                .forEach((H) => {
                  H.code && w.push(H.code);
                }));
          }
          if (J.Code === 200 && J.Data) {
            const z = J.Data.filter((H) => {
              var A;
              return (A = S == null ? void 0 : S.med_list) == null
                ? void 0
                : A.some((Se) => Se.code === H.code);
            });
            (b(z),
              z
                .filter((H) => H.state === "等待過帳" && H.notice === "True")
                .forEach((H) => {
                  H.code && (w.includes(H.code) || w.push(H.code));
                }));
          }
          x(w);
        } catch (k) {
          console.error("檢查申領撥補資料失敗:", k);
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
        var k;
        S &&
          console.log("🔄 ContainerDetailModal: currentContainer updated", {
            GUID: S.GUID,
            name: S.name,
            medListCount: ((k = S.med_list) == null ? void 0 : k.length) || 0,
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
          const k = E();
          (console.log("✅ ContainerDetailModal - 啟動亮燈:", {
            medicineCode: l,
            duration: k / 1e3 + "秒",
          }),
            y.current && clearTimeout(y.current),
            (y.current = setTimeout(() => {
              (console.log("⏱️ ContainerDetailModal - 亮燈時間結束"),
                c(!1),
                (y.current = null));
            }, k)));
        } else c(!1);
        return () => {
          y.current && clearTimeout(y.current);
        };
      }, [e, l]));
    const U = (k) => {
      var P, J;
      (m.filter((w) => w.code === k.code), j.filter((w) => w.code === k.code));
      const N = (w) => {
          for (const z of w) {
            if (z.type === "store_shelves" && z.medMapStock) {
              const te = z.medMapStock.find((H) => H.code === k.code);
              if (te) return { stock: te, shelf: z };
            }
            if (z.contents && z.contents.length > 0) {
              const te = N(z.contents);
              if (te) return te;
            }
          }
          return null;
        },
        L = n ? N([n]) : null;
      (d({
        code: k.code,
        name: k.name,
        cht_name: k.cht_name,
        skdiacode: k.SKDIACODE || k.skdiacode,
        serverName:
          (P = L == null ? void 0 : L.shelf) == null ? void 0 : P.serverName,
        serverType:
          (J = L == null ? void 0 : L.shelf) == null ? void 0 : J.serverType,
      }),
        _(!0));
    };
    if (!e) return null;
    const se = () => {
        if (!(S != null && S.med_list) || S.med_list.length === 0)
          return r.jsx("div", {
            className: "flex items-center justify-center h-full text-gray-400",
            children: r.jsx("p", { children: "無藥品資料" }),
          });
        const k = [...S.med_list].sort((N, L) => N.code.localeCompare(L.code));
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
                children: k.map((N, L) => {
                  const P = i && l && N.code == l,
                    J = h.includes(N.code);
                  let w = 0;
                  (N.qty.forEach((te) => {
                    w += +te;
                  }),
                    L === 0 &&
                      console.log("🧪 ContainerDetailModal - 第一筆藥品檢查:", {
                        medCode: N.code,
                        highlightedCode: l,
                        isHighlightActive: i,
                        isHighlighted: P,
                        isPendingRequisition: J,
                        comparison: `${N.code} == ${l} = ${N.code == l}`,
                      }));
                  const z = F();
                  return r.jsxs(
                    "tr",
                    {
                      className: `transition-colors cursor-pointer ${J ? "highlight-breathe-red" : P ? `highlight-breathe-${z}` : "hover:bg-gray-50"}`,
                      onClick: () => U(N),
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
      be = () =>
        n
          ? r.jsx(qh, {
              container: S,
              highlightedMedicineCode: i ? l : null,
              pendingRequisitionCodes: h,
              onMedicineClick: U,
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
                      children: r.jsx(tt, {
                        className: "w-6 h-6 text-gray-700",
                      }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 overflow-hidden p-3",
                  children: s === "list_mode" ? se() : be(),
                }),
              ],
            }),
          ],
        }),
        r.jsx(Yh, {
          isOpen: T,
          onClose: () => _(!1),
          medicineInfo: f,
          requisitions: f ? m.filter((k) => k.code === f.code) : [],
          distributions: f ? j.filter((k) => k.code === f.code) : [],
          onNoticeUpdated: M,
        }),
      ],
    });
  },
  Xh = () => {
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
      x = async () => {
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
              b = `${(await Ee.getConfig()).domain}/api/medmap/update_shelf`,
              _ = await (
                await fetch(b, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(p),
                })
              ).json();
            (console.log(p),
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
                : s(_.Result || "更新失敗", "error"));
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
                        r.jsx(kr, { className: "w-6 h-6 text-gray-600" }),
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
                      children: r.jsx(tt, { className: "w-6 h-6" }),
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
                      onClick: x,
                      disabled: i,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        i && r.jsx(Gt, { className: "w-4 h-4 animate-spin" }),
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
  Kh = () => {
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
      x = async () => {
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
            const b = await Ee.updateMedMapSection(j);
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
                        r.jsx(kr, { className: "w-6 h-6 text-gray-600" }),
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
                      children: r.jsx(tt, { className: "w-6 h-6" }),
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
                      onClick: x,
                      disabled: i,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        i && r.jsx(Gt, { className: "w-4 h-4 animate-spin" }),
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
  Jh = ({ isOpen: e, onLoginSuccess: t }) => {
    const { t: n } = It(),
      [s, o] = u.useState(""),
      [l, a] = u.useState(""),
      [i, c] = u.useState(!1),
      [h, x] = u.useState(!1),
      [m, p] = u.useState(""),
      j = async (T) => {
        if ((T.preventDefault(), !s.trim() || !l.trim())) {
          p("Please enter both ID and password");
          return;
        }
        (x(!0), p(""));
        try {
          const _ = await Ee.login({ ID: s.trim(), Password: l });
          if (_.Code === 200 && _.Data) {
            const f = { ..._.Data, loginTime: new Date().toISOString() };
            (localStorage.setItem("user_session", JSON.stringify(f)), t(f));
          } else p(_.Result || "Login failed");
        } catch (_) {
          (console.error("Login failed:", _),
            p("Network error. Please try again."));
        } finally {
          x(!1);
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
                                    ? r.jsx(lf, { className: "w-5 h-5" })
                                    : r.jsx(af, { className: "w-5 h-5" }),
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
                                  r.jsx(Gt, {
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
  Zh = ({ isVisible: e, message: t }) => {
    const { t: n } = It();
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
                        children: r.jsx(ki, {
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
                      r.jsx(Gt, {
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
  eg = ({
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
                  ? r.jsx(fh, { className: "w-5 h-5 text-green-600" })
                  : r.jsx(Nh, { className: "w-5 h-5 text-red-600" }),
                r.jsx("span", {
                  className: "text-sm font-medium",
                  children: e,
                }),
                r.jsx("button", {
                  onClick: s,
                  className: `p-1 rounded-full hover:bg-black/10 transition-colors ${t === "success" ? "text-green-600" : "text-red-600"}`,
                  children: r.jsx(tt, { className: "w-4 h-4" }),
                }),
              ],
            }),
          })
        : null
    );
  };
function tg() {
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
    selectedDepartmentForAdd: x,
    addStoreItemModalOpen: m,
    closeAddStoreItemModal: p,
    selectedStoreShelfForAdd: j,
    addDepartmentModalOpen: b,
    closeAddDepartmentModal: T,
    qrCodeScannerModalOpen: _,
    qrCodeScannerMode: f,
    closeQRCodeScannerModal: d,
    addBarcodeModalOpen: y,
    closeAddBarcodeModal: v,
    initialBarcodeValue: I,
    containerDetailModalOpen: S,
    closeContainerDetailModal: E,
    selectedContainerForDetail: F,
    setMedicineList: M,
    setIsLoadingMedicines: U,
    showNotification: se,
  } = it();
  (u.useEffect(() => {
    (() => {
      try {
        const P = localStorage.getItem("user_session");
        if (P) {
          const J = JSON.parse(P);
          J.GUID && J.ID && J.Name
            ? (o(J), s(!0))
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
            U(!0);
            try {
              console.log("開始載入藥品資料...");
              const J = await Ee.getMedicineCloud();
              if ((console.log("藥品資料 API 回應:", J), !L)) return;
              J.Code === 200 && J.Data
                ? (M(J.Data),
                  console.log(`✅ 成功載入 ${J.Data.length} 筆藥品資料`),
                  se(`載入 ${J.Data.length} 筆藥品資料`, "success"))
                : (console.warn("API 回應異常:", J),
                  M([]),
                  se("藥品資料載入異常，請稍後重試", "error"));
            } catch (J) {
              if (!L) return;
              (console.error("載入藥品資料失敗:", J),
                M([]),
                se("無法連線到藥品資料庫，部分功能可能無法使用", "error"));
            } finally {
              L && U(!1);
            }
          }
        })(),
        () => {
          L = !1;
        }
      );
    }, [n]));
  const be = (L) => {
      (o(L), s(!0));
    },
    k = No.useRef(null),
    N = (L, P) => {
      if (
        (console.log("📸 QR掃描成功 - handleQRScanSuccess 被調用:", {
          barcode: L,
          medicineData: P,
          mode: f,
        }),
        console.log("📸 當前 mode:", f),
        console.log("📸 當前 viewMode:", t),
        console.log("📸 drugCanvasRef.current:", k.current),
        f === "track_Drug_mode")
      ) {
        if ((console.log("✅ 進入 track_Drug_mode 分支"), t !== "medicine")) {
          (console.warn("⚠️ 當前不在藥品地圖視圖，無法定位藥品"),
            se("請切換到藥品地圖視圖後再使用此功能", "error"));
          return;
        }
        k.current
          ? (console.log("✅ drugCanvasRef.current 存在"),
            console.log(
              "📸 drugCanvasRef.current.locateDrug 類型:",
              typeof k.current.locateDrug,
            ),
            typeof k.current.locateDrug == "function"
              ? (console.log("✅ 呼叫 locateDrug 函數"),
                k.current.locateDrug(P))
              : console.warn("⚠️ locateDrug 不是函數"))
          : console.warn("⚠️ drugCanvasRef.current 不存在");
      } else console.log("⚠️ mode 不是 track_Drug_mode，當前 mode:", f);
    };
  return n
    ? r.jsxs("div", {
        className: "min-h-screen bg-gray-50",
        children: [
          r.jsx(jh, {}),
          r.jsx(Sh, {}),
          r.jsx(kh, {}),
          r.jsx("div", {
            className: "fixed inset-0",
            children: r.jsx("div", {
              className: "w-full h-full",
              children:
                t === "department" ? r.jsx(Ph, {}) : r.jsx(pf, { ref: k }),
            }),
          }),
          r.jsx(Mh, {}),
          r.jsx(Uh, {}),
          r.jsx(Oh, {}),
          r.jsx(Lh, {}),
          r.jsx(Gh, {}),
          r.jsx(zh, {}),
          r.jsx(Bh, {}),
          r.jsx(Fh, { isOpen: m, onClose: p, storeShelf: j }),
          r.jsx(Hh, { isOpen: b, onClose: T }),
          r.jsx(dl, { isOpen: _, onClose: d, mode: f, onScanSuccess: N }),
          r.jsx(Vh, { isOpen: y, onClose: v, initialBarcode: I }),
          r.jsx(Qh, { isOpen: S, onClose: E, container: F }),
          r.jsx(Xh, {}),
          r.jsx(Kh, {}),
          r.jsx(Zh, { isVisible: l }),
          r.jsx(eg, {
            message: a.message,
            type: a.type,
            isVisible: a.isVisible,
            onClose: i,
          }),
        ],
      })
    : r.jsx(Jh, { isOpen: !0, onLoginSuccess: be });
}
function ng() {
  return r.jsx(ih, { children: r.jsx(lh, { children: r.jsx(tg, {}) }) });
}
tf(document.getElementById("root")).render(
  r.jsx(u.StrictMode, { children: r.jsx(ng, {}) }),
);
