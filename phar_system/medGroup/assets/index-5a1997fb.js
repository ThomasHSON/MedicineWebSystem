var Nf = Object.defineProperty;
var Sf = (e, t, n) =>
  t in e
    ? Nf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Gi = (e, t, n) => (Sf(e, typeof t != "symbol" ? t + "" : t, n), n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o);
  }
})();
function jf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var wu = { exports: {} },
  Us = {},
  Nu = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cr = Symbol.for("react.element"),
  kf = Symbol.for("react.portal"),
  Cf = Symbol.for("react.fragment"),
  Ef = Symbol.for("react.strict_mode"),
  bf = Symbol.for("react.profiler"),
  Mf = Symbol.for("react.provider"),
  Lf = Symbol.for("react.context"),
  _f = Symbol.for("react.forward_ref"),
  Tf = Symbol.for("react.suspense"),
  Rf = Symbol.for("react.memo"),
  Pf = Symbol.for("react.lazy"),
  Qi = Symbol.iterator;
function Af(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Qi && e[Qi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Su = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ju = Object.assign,
  ku = {};
function Pn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = ku),
    (this.updater = n || Su));
}
Pn.prototype.isReactComponent = {};
Pn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Pn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Cu() {}
Cu.prototype = Pn.prototype;
function Fl(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = ku),
    (this.updater = n || Su));
}
var Bl = (Fl.prototype = new Cu());
Bl.constructor = Fl;
ju(Bl, Pn.prototype);
Bl.isPureReactComponent = !0;
var Ki = Array.isArray,
  Eu = Object.prototype.hasOwnProperty,
  $l = { current: null },
  bu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Mu(e, t, n) {
  var r,
    s = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Eu.call(t, r) && !bu.hasOwnProperty(r) && (s[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) s.children = n;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    s.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
  return {
    $$typeof: Cr,
    type: e,
    key: o,
    ref: i,
    props: s,
    _owner: $l.current,
  };
}
function Of(e, t) {
  return {
    $$typeof: Cr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Hl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Cr;
}
function Df(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var qi = /\/+/g;
function ao(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Df("" + e.key)
    : t.toString(36);
}
function qr(e, t, n, r, s) {
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
          case Cr:
          case kf:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (s = s(i)),
      (e = r === "" ? "." + ao(i, 0) : r),
      Ki(s)
        ? ((n = ""),
          e != null && (n = e.replace(qi, "$&/") + "/"),
          qr(s, t, n, "", function (c) {
            return c;
          }))
        : s != null &&
          (Hl(s) &&
            (s = Of(
              s,
              n +
                (!s.key || (i && i.key === s.key)
                  ? ""
                  : ("" + s.key).replace(qi, "$&/") + "/") +
                e,
            )),
          t.push(s)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Ki(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + ao(o, a);
      i += qr(o, t, n, u, s);
    }
  else if (((u = Af(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      ((o = o.value), (u = r + ao(o, a++)), (i += qr(o, t, n, u, s)));
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
function Rr(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    qr(e, r, "", "", function (o) {
      return t.call(n, o, s++);
    }),
    r
  );
}
function If(e) {
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
var Ee = { current: null },
  Yr = { transition: null },
  Uf = {
    ReactCurrentDispatcher: Ee,
    ReactCurrentBatchConfig: Yr,
    ReactCurrentOwner: $l,
  };
function Lu() {
  throw Error("act(...) is not supported in production builds of React.");
}
V.Children = {
  map: Rr,
  forEach: function (e, t, n) {
    Rr(
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
      Rr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Rr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Hl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
V.Component = Pn;
V.Fragment = Cf;
V.Profiler = bf;
V.PureComponent = Fl;
V.StrictMode = Ef;
V.Suspense = Tf;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uf;
V.act = Lu;
V.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = ju({}, e.props),
    s = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = $l.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      Eu.call(t, u) &&
        !bu.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Cr, type: e.type, key: s, ref: o, props: r, _owner: i };
};
V.createContext = function (e) {
  return (
    (e = {
      $$typeof: Lf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Mf, _context: e }),
    (e.Consumer = e)
  );
};
V.createElement = Mu;
V.createFactory = function (e) {
  var t = Mu.bind(null, e);
  return ((t.type = e), t);
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: _f, render: e };
};
V.isValidElement = Hl;
V.lazy = function (e) {
  return { $$typeof: Pf, _payload: { _status: -1, _result: e }, _init: If };
};
V.memo = function (e, t) {
  return { $$typeof: Rf, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
  var t = Yr.transition;
  Yr.transition = {};
  try {
    e();
  } finally {
    Yr.transition = t;
  }
};
V.unstable_act = Lu;
V.useCallback = function (e, t) {
  return Ee.current.useCallback(e, t);
};
V.useContext = function (e) {
  return Ee.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
  return Ee.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
  return Ee.current.useEffect(e, t);
};
V.useId = function () {
  return Ee.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
  return Ee.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
  return Ee.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
  return Ee.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return Ee.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return Ee.current.useReducer(e, t, n);
};
V.useRef = function (e) {
  return Ee.current.useRef(e);
};
V.useState = function (e) {
  return Ee.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
  return Ee.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
  return Ee.current.useTransition();
};
V.version = "18.3.1";
Nu.exports = V;
var w = Nu.exports;
const zf = jf(w);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ff = w,
  Bf = Symbol.for("react.element"),
  $f = Symbol.for("react.fragment"),
  Hf = Object.prototype.hasOwnProperty,
  Wf = Ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Vf = { key: !0, ref: !0, __self: !0, __source: !0 };
function _u(e, t, n) {
  var r,
    s = {},
    o = null,
    i = null;
  (n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref));
  for (r in t) Hf.call(t, r) && !Vf.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: Bf,
    type: e,
    key: o,
    ref: i,
    props: s,
    _owner: Wf.current,
  };
}
Us.Fragment = $f;
Us.jsx = _u;
Us.jsxs = _u;
wu.exports = Us;
var l = wu.exports,
  Fo = {},
  Tu = { exports: {} },
  Ue = {},
  Ru = { exports: {} },
  Pu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, _) {
    var A = L.length;
    L.push(_);
    e: for (; 0 < A; ) {
      var $ = (A - 1) >>> 1,
        H = L[$];
      if (0 < s(H, _)) ((L[$] = _), (L[A] = H), (A = $));
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var _ = L[0],
      A = L.pop();
    if (A !== _) {
      L[0] = A;
      e: for (var $ = 0, H = L.length, z = H >>> 1; $ < z; ) {
        var te = 2 * ($ + 1) - 1,
          me = L[te],
          Fe = te + 1,
          vt = L[Fe];
        if (0 > s(me, A))
          Fe < H && 0 > s(vt, me)
            ? ((L[$] = vt), (L[Fe] = A), ($ = Fe))
            : ((L[$] = me), (L[te] = A), ($ = te));
        else if (Fe < H && 0 > s(vt, A)) ((L[$] = vt), (L[Fe] = A), ($ = Fe));
        else break e;
      }
    }
    return _;
  }
  function s(L, _) {
    var A = L.sortIndex - _.sortIndex;
    return A !== 0 ? A : L.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    c = [],
    p = 1,
    m = null,
    h = 3,
    j = !1,
    y = !1,
    x = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(L) {
    for (var _ = n(c); _ !== null; ) {
      if (_.callback === null) r(c);
      else if (_.startTime <= L)
        (r(c), (_.sortIndex = _.expirationTime), t(u, _));
      else break;
      _ = n(c);
    }
  }
  function v(L) {
    if (((x = !1), g(L), !y))
      if (n(u) !== null) ((y = !0), T(E));
      else {
        var _ = n(c);
        _ !== null && W(v, _.startTime - L);
      }
  }
  function E(L, _) {
    ((y = !1), x && ((x = !1), f(C), (C = -1)), (j = !0));
    var A = h;
    try {
      for (
        g(_), m = n(u);
        m !== null && (!(m.expirationTime > _) || (L && !I()));
      ) {
        var $ = m.callback;
        if (typeof $ == "function") {
          ((m.callback = null), (h = m.priorityLevel));
          var H = $(m.expirationTime <= _);
          ((_ = e.unstable_now()),
            typeof H == "function" ? (m.callback = H) : m === n(u) && r(u),
            g(_));
        } else r(u);
        m = n(u);
      }
      if (m !== null) var z = !0;
      else {
        var te = n(c);
        (te !== null && W(v, te.startTime - _), (z = !1));
      }
      return z;
    } finally {
      ((m = null), (h = A), (j = !1));
    }
  }
  var M = !1,
    N = null,
    C = -1,
    R = 5,
    P = -1;
  function I() {
    return !(e.unstable_now() - P < R);
  }
  function B() {
    if (N !== null) {
      var L = e.unstable_now();
      P = L;
      var _ = !0;
      try {
        _ = N(!0, L);
      } finally {
        _ ? q() : ((M = !1), (N = null));
      }
    } else M = !1;
  }
  var q;
  if (typeof d == "function")
    q = function () {
      d(B);
    };
  else if (typeof MessageChannel < "u") {
    var Y = new MessageChannel(),
      xe = Y.port2;
    ((Y.port1.onmessage = B),
      (q = function () {
        xe.postMessage(null);
      }));
  } else
    q = function () {
      k(B, 0);
    };
  function T(L) {
    ((N = L), M || ((M = !0), q()));
  }
  function W(L, _) {
    C = k(function () {
      L(e.unstable_now());
    }, _);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || j || ((y = !0), T(E));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (R = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (L) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = h;
      }
      var A = h;
      h = _;
      try {
        return L();
      } finally {
        h = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, _) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var A = h;
      h = L;
      try {
        return _();
      } finally {
        h = A;
      }
    }),
    (e.unstable_scheduleCallback = function (L, _, A) {
      var $ = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? $ + A : $))
          : (A = $),
        L)
      ) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return (
        (H = A + H),
        (L = {
          id: p++,
          callback: _,
          priorityLevel: L,
          startTime: A,
          expirationTime: H,
          sortIndex: -1,
        }),
        A > $
          ? ((L.sortIndex = A),
            t(c, L),
            n(u) === null &&
              L === n(c) &&
              (x ? (f(C), (C = -1)) : (x = !0), W(v, A - $)))
          : ((L.sortIndex = H), t(u, L), y || j || ((y = !0), T(E))),
        L
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (L) {
      var _ = h;
      return function () {
        var A = h;
        h = _;
        try {
          return L.apply(this, arguments);
        } finally {
          h = A;
        }
      };
    }));
})(Pu);
Ru.exports = Pu;
var Gf = Ru.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qf = w,
  Ie = Gf;
function b(e) {
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
var Au = new Set(),
  lr = {};
function rn(e, t) {
  (En(e, t), En(e + "Capture", t));
}
function En(e, t) {
  for (lr[e] = t, e = 0; e < t.length; e++) Au.add(t[e]);
}
var mt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Bo = Object.prototype.hasOwnProperty,
  Kf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Yi = {},
  Ji = {};
function qf(e) {
  return Bo.call(Ji, e)
    ? !0
    : Bo.call(Yi, e)
      ? !1
      : Kf.test(e)
        ? (Ji[e] = !0)
        : ((Yi[e] = !0), !1);
}
function Yf(e, t, n, r) {
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
function Jf(e, t, n, r) {
  if (t === null || typeof t > "u" || Yf(e, t, n, r)) return !0;
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
function be(e, t, n, r, s, o, i) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i));
}
var ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ye[e] = new be(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ye[t] = new be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ye[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ye[e] = new be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ye[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ye[e] = new be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ye[e] = new be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ye[e] = new be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ye[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Wl = /[\-:]([a-z])/g;
function Vl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Wl, Vl);
    ye[t] = new be(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Wl, Vl);
    ye[t] = new be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Wl, Vl);
  ye[t] = new be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ye[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new be(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ye[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Gl(e, t, n, r) {
  var s = ye.hasOwnProperty(t) ? ye[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Jf(t, n, s, r) && (n = null),
    r || s === null
      ? qf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
        ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((t = s.attributeName),
          (r = s.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var xt = Qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Pr = Symbol.for("react.element"),
  an = Symbol.for("react.portal"),
  un = Symbol.for("react.fragment"),
  Ql = Symbol.for("react.strict_mode"),
  $o = Symbol.for("react.profiler"),
  Ou = Symbol.for("react.provider"),
  Du = Symbol.for("react.context"),
  Kl = Symbol.for("react.forward_ref"),
  Ho = Symbol.for("react.suspense"),
  Wo = Symbol.for("react.suspense_list"),
  ql = Symbol.for("react.memo"),
  Nt = Symbol.for("react.lazy"),
  Iu = Symbol.for("react.offscreen"),
  Xi = Symbol.iterator;
function Un(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Xi && e[Xi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var se = Object.assign,
  uo;
function Qn(e) {
  if (uo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      uo = (t && t[1]) || "";
    }
  return (
    `
` +
    uo +
    e
  );
}
var co = !1;
function fo(e, t) {
  if (!e || co) return "";
  co = !0;
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
        var s = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = s.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && s[i] !== o[a];
      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (s[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || s[i] !== o[a])) {
                var u =
                  `
` + s[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    ((co = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Qn(e) : "";
}
function Xf(e) {
  switch (e.tag) {
    case 5:
      return Qn(e.type);
    case 16:
      return Qn("Lazy");
    case 13:
      return Qn("Suspense");
    case 19:
      return Qn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = fo(e.type, !1)), e);
    case 11:
      return ((e = fo(e.type.render, !1)), e);
    case 1:
      return ((e = fo(e.type, !0)), e);
    default:
      return "";
  }
}
function Vo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case un:
      return "Fragment";
    case an:
      return "Portal";
    case $o:
      return "Profiler";
    case Ql:
      return "StrictMode";
    case Ho:
      return "Suspense";
    case Wo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Du:
        return (e.displayName || "Context") + ".Consumer";
      case Ou:
        return (e._context.displayName || "Context") + ".Provider";
      case Kl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ql:
        return (
          (t = e.displayName || null),
          t !== null ? t : Vo(e.type) || "Memo"
        );
      case Nt:
        ((t = e._payload), (e = e._init));
        try {
          return Vo(e(t));
        } catch {}
    }
  return null;
}
function Zf(e) {
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
      return Vo(t);
    case 8:
      return t === Ql ? "StrictMode" : "Mode";
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
function Ot(e) {
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
function Uu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ep(e) {
  var t = Uu(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
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
function Ar(e) {
  e._valueTracker || (e._valueTracker = ep(e));
}
function zu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Uu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ds(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Go(e, t) {
  var n = t.checked;
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Zi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Ot(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Fu(e, t) {
  ((t = t.checked), t != null && Gl(e, "checked", t, !1));
}
function Qo(e, t) {
  Fu(e, t);
  var n = Ot(t.value),
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
    ? Ko(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ko(e, t.type, Ot(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function ea(e, t, n) {
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
function Ko(e, t, n) {
  (t !== "number" || ds(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Kn = Array.isArray;
function wn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      ((s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Ot(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        ((e[s].selected = !0), r && (e[s].defaultSelected = !0));
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function qo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(b(91));
  return se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ta(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(b(92));
      if (Kn(n)) {
        if (1 < n.length) throw Error(b(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Ot(n) };
}
function Bu(e, t) {
  var n = Ot(t.value),
    r = Ot(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function na(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function $u(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Yo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? $u(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Or,
  Hu = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Or = Or || document.createElement("div"),
          Or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Or.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ir(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Jn = {
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
  tp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jn).forEach(function (e) {
  tp.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Jn[t] = Jn[e]));
  });
});
function Wu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Jn.hasOwnProperty(e) && Jn[e])
      ? ("" + t).trim()
      : t + "px";
}
function Vu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = Wu(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s));
    }
}
var np = se(
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
function Jo(e, t) {
  if (t) {
    if (np[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(b(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(b(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(b(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(b(62));
  }
}
function Xo(e, t) {
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
var Zo = null;
function Yl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var el = null,
  Nn = null,
  Sn = null;
function ra(e) {
  if ((e = Mr(e))) {
    if (typeof el != "function") throw Error(b(280));
    var t = e.stateNode;
    t && ((t = Hs(t)), el(e.stateNode, e.type, t));
  }
}
function Gu(e) {
  Nn ? (Sn ? Sn.push(e) : (Sn = [e])) : (Nn = e);
}
function Qu() {
  if (Nn) {
    var e = Nn,
      t = Sn;
    if (((Sn = Nn = null), ra(e), t)) for (e = 0; e < t.length; e++) ra(t[e]);
  }
}
function Ku(e, t) {
  return e(t);
}
function qu() {}
var po = !1;
function Yu(e, t, n) {
  if (po) return e(t, n);
  po = !0;
  try {
    return Ku(e, t, n);
  } finally {
    ((po = !1), (Nn !== null || Sn !== null) && (qu(), Qu()));
  }
}
function ar(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Hs(n);
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
  if (n && typeof n != "function") throw Error(b(231, t, typeof n));
  return n;
}
var tl = !1;
if (mt)
  try {
    var zn = {};
    (Object.defineProperty(zn, "passive", {
      get: function () {
        tl = !0;
      },
    }),
      window.addEventListener("test", zn, zn),
      window.removeEventListener("test", zn, zn));
  } catch {
    tl = !1;
  }
function rp(e, t, n, r, s, o, i, a, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (p) {
    this.onError(p);
  }
}
var Xn = !1,
  fs = null,
  ps = !1,
  nl = null,
  sp = {
    onError: function (e) {
      ((Xn = !0), (fs = e));
    },
  };
function op(e, t, n, r, s, o, i, a, u) {
  ((Xn = !1), (fs = null), rp.apply(sp, arguments));
}
function lp(e, t, n, r, s, o, i, a, u) {
  if ((op.apply(this, arguments), Xn)) {
    if (Xn) {
      var c = fs;
      ((Xn = !1), (fs = null));
    } else throw Error(b(198));
    ps || ((ps = !0), (nl = c));
  }
}
function sn(e) {
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
function Ju(e) {
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
function sa(e) {
  if (sn(e) !== e) throw Error(b(188));
}
function ip(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = sn(e)), t === null)) throw Error(b(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var o = s.alternate;
    if (o === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === o.child) {
      for (o = s.child; o; ) {
        if (o === n) return (sa(s), e);
        if (o === r) return (sa(s), t);
        o = o.sibling;
      }
      throw Error(b(188));
    }
    if (n.return !== r.return) ((n = s), (r = o));
    else {
      for (var i = !1, a = s.child; a; ) {
        if (a === n) {
          ((i = !0), (n = s), (r = o));
          break;
        }
        if (a === r) {
          ((i = !0), (r = s), (n = o));
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            ((i = !0), (n = o), (r = s));
            break;
          }
          if (a === r) {
            ((i = !0), (r = o), (n = s));
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(b(189));
      }
    }
    if (n.alternate !== r) throw Error(b(190));
  }
  if (n.tag !== 3) throw Error(b(188));
  return n.stateNode.current === n ? e : t;
}
function Xu(e) {
  return ((e = ip(e)), e !== null ? Zu(e) : null);
}
function Zu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Zu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ec = Ie.unstable_scheduleCallback,
  oa = Ie.unstable_cancelCallback,
  ap = Ie.unstable_shouldYield,
  up = Ie.unstable_requestPaint,
  le = Ie.unstable_now,
  cp = Ie.unstable_getCurrentPriorityLevel,
  Jl = Ie.unstable_ImmediatePriority,
  tc = Ie.unstable_UserBlockingPriority,
  ms = Ie.unstable_NormalPriority,
  dp = Ie.unstable_LowPriority,
  nc = Ie.unstable_IdlePriority,
  zs = null,
  it = null;
function fp(e) {
  if (it && typeof it.onCommitFiberRoot == "function")
    try {
      it.onCommitFiberRoot(zs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Xe = Math.clz32 ? Math.clz32 : hp,
  pp = Math.log,
  mp = Math.LN2;
function hp(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((pp(e) / mp) | 0)) | 0);
}
var Dr = 64,
  Ir = 4194304;
function qn(e) {
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
function hs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~s;
    a !== 0 ? (r = qn(a)) : ((o &= i), o !== 0 && (r = qn(o)));
  } else ((i = n & ~s), i !== 0 ? (r = qn(i)) : o !== 0 && (r = qn(o)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (o = t & -t), s >= o || (s === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Xe(t)), (s = 1 << n), (r |= e[n]), (t &= ~s));
  return r;
}
function gp(e, t) {
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
function yp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;
  ) {
    var i = 31 - Xe(o),
      a = 1 << i,
      u = s[i];
    (u === -1
      ? (!(a & n) || a & r) && (s[i] = gp(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a));
  }
}
function rl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function rc() {
  var e = Dr;
  return ((Dr <<= 1), !(Dr & 4194240) && (Dr = 64), e);
}
function mo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Er(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Xe(t)),
    (e[t] = n));
}
function xp(e, t) {
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
    var s = 31 - Xe(n),
      o = 1 << s;
    ((t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~o));
  }
}
function Xl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Xe(n),
      s = 1 << r;
    ((s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s));
  }
}
var K = 0;
function sc(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var oc,
  Zl,
  lc,
  ic,
  ac,
  sl = !1,
  Ur = [],
  bt = null,
  Mt = null,
  Lt = null,
  ur = new Map(),
  cr = new Map(),
  jt = [],
  vp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function la(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      bt = null;
      break;
    case "dragenter":
    case "dragleave":
      Mt = null;
      break;
    case "mouseover":
    case "mouseout":
      Lt = null;
      break;
    case "pointerover":
    case "pointerout":
      ur.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      cr.delete(t.pointerId);
  }
}
function Fn(e, t, n, r, s, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [s],
      }),
      t !== null && ((t = Mr(t)), t !== null && Zl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function wp(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return ((bt = Fn(bt, e, t, n, r, s)), !0);
    case "dragenter":
      return ((Mt = Fn(Mt, e, t, n, r, s)), !0);
    case "mouseover":
      return ((Lt = Fn(Lt, e, t, n, r, s)), !0);
    case "pointerover":
      var o = s.pointerId;
      return (ur.set(o, Fn(ur.get(o) || null, e, t, n, r, s)), !0);
    case "gotpointercapture":
      return (
        (o = s.pointerId),
        cr.set(o, Fn(cr.get(o) || null, e, t, n, r, s)),
        !0
      );
  }
  return !1;
}
function uc(e) {
  var t = Wt(e.target);
  if (t !== null) {
    var n = sn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ju(n)), t !== null)) {
          ((e.blockedOn = t),
            ac(e.priority, function () {
              lc(n);
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
function Jr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ol(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Zo = r), n.target.dispatchEvent(r), (Zo = null));
    } else return ((t = Mr(n)), t !== null && Zl(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function ia(e, t, n) {
  Jr(e) && n.delete(t);
}
function Np() {
  ((sl = !1),
    bt !== null && Jr(bt) && (bt = null),
    Mt !== null && Jr(Mt) && (Mt = null),
    Lt !== null && Jr(Lt) && (Lt = null),
    ur.forEach(ia),
    cr.forEach(ia));
}
function Bn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    sl ||
      ((sl = !0),
      Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, Np)));
}
function dr(e) {
  function t(s) {
    return Bn(s, e);
  }
  if (0 < Ur.length) {
    Bn(Ur[0], e);
    for (var n = 1; n < Ur.length; n++) {
      var r = Ur[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    bt !== null && Bn(bt, e),
      Mt !== null && Bn(Mt, e),
      Lt !== null && Bn(Lt, e),
      ur.forEach(t),
      cr.forEach(t),
      n = 0;
    n < jt.length;
    n++
  )
    ((r = jt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < jt.length && ((n = jt[0]), n.blockedOn === null); )
    (uc(n), n.blockedOn === null && jt.shift());
}
var jn = xt.ReactCurrentBatchConfig,
  gs = !0;
function Sp(e, t, n, r) {
  var s = K,
    o = jn.transition;
  jn.transition = null;
  try {
    ((K = 1), ei(e, t, n, r));
  } finally {
    ((K = s), (jn.transition = o));
  }
}
function jp(e, t, n, r) {
  var s = K,
    o = jn.transition;
  jn.transition = null;
  try {
    ((K = 4), ei(e, t, n, r));
  } finally {
    ((K = s), (jn.transition = o));
  }
}
function ei(e, t, n, r) {
  if (gs) {
    var s = ol(e, t, n, r);
    if (s === null) (ko(e, t, r, ys, n), la(e, r));
    else if (wp(s, e, t, n, r)) r.stopPropagation();
    else if ((la(e, r), t & 4 && -1 < vp.indexOf(e))) {
      for (; s !== null; ) {
        var o = Mr(s);
        if (
          (o !== null && oc(o),
          (o = ol(e, t, n, r)),
          o === null && ko(e, t, r, ys, n),
          o === s)
        )
          break;
        s = o;
      }
      s !== null && r.stopPropagation();
    } else ko(e, t, r, null, n);
  }
}
var ys = null;
function ol(e, t, n, r) {
  if (((ys = null), (e = Yl(r)), (e = Wt(e)), e !== null))
    if (((t = sn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ju(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((ys = e), null);
}
function cc(e) {
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
      switch (cp()) {
        case Jl:
          return 1;
        case tc:
          return 4;
        case ms:
        case dp:
          return 16;
        case nc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ct = null,
  ti = null,
  Xr = null;
function dc() {
  if (Xr) return Xr;
  var e,
    t = ti,
    n = t.length,
    r,
    s = "value" in Ct ? Ct.value : Ct.textContent,
    o = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === s[o - r]; r++);
  return (Xr = s.slice(e, 1 < r ? 1 - r : void 0));
}
function Zr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function zr() {
  return !0;
}
function aa() {
  return !1;
}
function ze(e) {
  function t(n, r, s, o, i) {
    ((this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? zr
        : aa),
      (this.isPropagationStopped = aa),
      this
    );
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = zr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = zr));
      },
      persist: function () {},
      isPersistent: zr,
    }),
    t
  );
}
var An = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ni = ze(An),
  br = se({}, An, { view: 0, detail: 0 }),
  kp = ze(br),
  ho,
  go,
  $n,
  Fs = se({}, br, {
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
    getModifierState: ri,
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
        : (e !== $n &&
            ($n && e.type === "mousemove"
              ? ((ho = e.screenX - $n.screenX), (go = e.screenY - $n.screenY))
              : (go = ho = 0),
            ($n = e)),
          ho);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : go;
    },
  }),
  ua = ze(Fs),
  Cp = se({}, Fs, { dataTransfer: 0 }),
  Ep = ze(Cp),
  bp = se({}, br, { relatedTarget: 0 }),
  yo = ze(bp),
  Mp = se({}, An, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Lp = ze(Mp),
  _p = se({}, An, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Tp = ze(_p),
  Rp = se({}, An, { data: 0 }),
  ca = ze(Rp),
  Pp = {
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
function Dp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Op[e]) ? !!t[e] : !1;
}
function ri() {
  return Dp;
}
var Ip = se({}, br, {
    key: function (e) {
      if (e.key) {
        var t = Pp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Zr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
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
    getModifierState: ri,
    charCode: function (e) {
      return e.type === "keypress" ? Zr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Zr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Up = ze(Ip),
  zp = se({}, Fs, {
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
  da = ze(zp),
  Fp = se({}, br, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ri,
  }),
  Bp = ze(Fp),
  $p = se({}, An, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hp = ze($p),
  Wp = se({}, Fs, {
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
  Vp = ze(Wp),
  Gp = [9, 13, 27, 32],
  si = mt && "CompositionEvent" in window,
  Zn = null;
mt && "documentMode" in document && (Zn = document.documentMode);
var Qp = mt && "TextEvent" in window && !Zn,
  fc = mt && (!si || (Zn && 8 < Zn && 11 >= Zn)),
  fa = String.fromCharCode(32),
  pa = !1;
function pc(e, t) {
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
function mc(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var cn = !1;
function Kp(e, t) {
  switch (e) {
    case "compositionend":
      return mc(t);
    case "keypress":
      return t.which !== 32 ? null : ((pa = !0), fa);
    case "textInput":
      return ((e = t.data), e === fa && pa ? null : e);
    default:
      return null;
  }
}
function qp(e, t) {
  if (cn)
    return e === "compositionend" || (!si && pc(e, t))
      ? ((e = dc()), (Xr = ti = Ct = null), (cn = !1), e)
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
      return fc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Yp = {
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
function ma(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Yp[e.type] : t === "textarea";
}
function hc(e, t, n, r) {
  (Gu(r),
    (t = xs(t, "onChange")),
    0 < t.length &&
      ((n = new ni("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var er = null,
  fr = null;
function Jp(e) {
  Ec(e, 0);
}
function Bs(e) {
  var t = pn(e);
  if (zu(t)) return e;
}
function Xp(e, t) {
  if (e === "change") return t;
}
var gc = !1;
if (mt) {
  var xo;
  if (mt) {
    var vo = "oninput" in document;
    if (!vo) {
      var ha = document.createElement("div");
      (ha.setAttribute("oninput", "return;"),
        (vo = typeof ha.oninput == "function"));
    }
    xo = vo;
  } else xo = !1;
  gc = xo && (!document.documentMode || 9 < document.documentMode);
}
function ga() {
  er && (er.detachEvent("onpropertychange", yc), (fr = er = null));
}
function yc(e) {
  if (e.propertyName === "value" && Bs(fr)) {
    var t = [];
    (hc(t, fr, e, Yl(e)), Yu(Jp, t));
  }
}
function Zp(e, t, n) {
  e === "focusin"
    ? (ga(), (er = t), (fr = n), er.attachEvent("onpropertychange", yc))
    : e === "focusout" && ga();
}
function em(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Bs(fr);
}
function tm(e, t) {
  if (e === "click") return Bs(t);
}
function nm(e, t) {
  if (e === "input" || e === "change") return Bs(t);
}
function rm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var tt = typeof Object.is == "function" ? Object.is : rm;
function pr(e, t) {
  if (tt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Bo.call(t, s) || !tt(e[s], t[s])) return !1;
  }
  return !0;
}
function ya(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function xa(e, t) {
  var n = ya(e);
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
    n = ya(n);
  }
}
function xc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? xc(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function vc() {
  for (var e = window, t = ds(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ds(e.document);
  }
  return t;
}
function oi(e) {
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
function sm(e) {
  var t = vc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    xc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && oi(n)) {
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
        var s = n.textContent.length,
          o = Math.min(r.start, s);
        ((r = r.end === void 0 ? o : Math.min(r.end, s)),
          !e.extend && o > r && ((s = r), (r = o), (o = s)),
          (s = xa(n, o)));
        var i = xa(n, r);
        s &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
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
var om = mt && "documentMode" in document && 11 >= document.documentMode,
  dn = null,
  ll = null,
  tr = null,
  il = !1;
function va(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  il ||
    dn == null ||
    dn !== ds(r) ||
    ((r = dn),
    "selectionStart" in r && oi(r)
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
    (tr && pr(tr, r)) ||
      ((tr = r),
      (r = xs(ll, "onSelect")),
      0 < r.length &&
        ((t = new ni("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = dn))));
}
function Fr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var fn = {
    animationend: Fr("Animation", "AnimationEnd"),
    animationiteration: Fr("Animation", "AnimationIteration"),
    animationstart: Fr("Animation", "AnimationStart"),
    transitionend: Fr("Transition", "TransitionEnd"),
  },
  wo = {},
  wc = {};
mt &&
  ((wc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete fn.animationend.animation,
    delete fn.animationiteration.animation,
    delete fn.animationstart.animation),
  "TransitionEvent" in window || delete fn.transitionend.transition);
function $s(e) {
  if (wo[e]) return wo[e];
  if (!fn[e]) return e;
  var t = fn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in wc) return (wo[e] = t[n]);
  return e;
}
var Nc = $s("animationend"),
  Sc = $s("animationiteration"),
  jc = $s("animationstart"),
  kc = $s("transitionend"),
  Cc = new Map(),
  wa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function It(e, t) {
  (Cc.set(e, t), rn(t, [e]));
}
for (var No = 0; No < wa.length; No++) {
  var So = wa[No],
    lm = So.toLowerCase(),
    im = So[0].toUpperCase() + So.slice(1);
  It(lm, "on" + im);
}
It(Nc, "onAnimationEnd");
It(Sc, "onAnimationIteration");
It(jc, "onAnimationStart");
It("dblclick", "onDoubleClick");
It("focusin", "onFocus");
It("focusout", "onBlur");
It(kc, "onTransitionEnd");
En("onMouseEnter", ["mouseout", "mouseover"]);
En("onMouseLeave", ["mouseout", "mouseover"]);
En("onPointerEnter", ["pointerout", "pointerover"]);
En("onPointerLeave", ["pointerout", "pointerover"]);
rn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
rn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
rn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
rn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Yn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  am = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));
function Na(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), lp(r, t, void 0, e), (e.currentTarget = null));
}
function Ec(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), u !== o && s.isPropagationStopped())) break e;
          (Na(s, a, c), (o = u));
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            u !== o && s.isPropagationStopped())
          )
            break e;
          (Na(s, a, c), (o = u));
        }
    }
  }
  if (ps) throw ((e = nl), (ps = !1), (nl = null), e);
}
function X(e, t) {
  var n = t[fl];
  n === void 0 && (n = t[fl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (bc(t, e, 2, !1), n.add(r));
}
function jo(e, t, n) {
  var r = 0;
  (t && (r |= 4), bc(n, e, r, t));
}
var Br = "_reactListening" + Math.random().toString(36).slice(2);
function mr(e) {
  if (!e[Br]) {
    ((e[Br] = !0),
      Au.forEach(function (n) {
        n !== "selectionchange" && (am.has(n) || jo(n, !1, e), jo(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Br] || ((t[Br] = !0), jo("selectionchange", !1, t));
  }
}
function bc(e, t, n, r) {
  switch (cc(t)) {
    case 1:
      var s = Sp;
      break;
    case 4:
      s = jp;
      break;
    default:
      s = ei;
  }
  ((n = s.bind(null, t, n, e)),
    (s = void 0),
    !tl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
        ? e.addEventListener(t, n, { passive: s })
        : e.addEventListener(t, n, !1));
}
function ko(e, t, n, r, s) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === s || (u.nodeType === 8 && u.parentNode === s))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = Wt(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Yu(function () {
    var c = o,
      p = Yl(n),
      m = [];
    e: {
      var h = Cc.get(e);
      if (h !== void 0) {
        var j = ni,
          y = e;
        switch (e) {
          case "keypress":
            if (Zr(n) === 0) break e;
          case "keydown":
          case "keyup":
            j = Up;
            break;
          case "focusin":
            ((y = "focus"), (j = yo));
            break;
          case "focusout":
            ((y = "blur"), (j = yo));
            break;
          case "beforeblur":
          case "afterblur":
            j = yo;
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
            j = ua;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            j = Ep;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            j = Bp;
            break;
          case Nc:
          case Sc:
          case jc:
            j = Lp;
            break;
          case kc:
            j = Hp;
            break;
          case "scroll":
            j = kp;
            break;
          case "wheel":
            j = Vp;
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
            j = da;
        }
        var x = (t & 4) !== 0,
          k = !x && e === "scroll",
          f = x ? (h !== null ? h + "Capture" : null) : h;
        x = [];
        for (var d = c, g; d !== null; ) {
          g = d;
          var v = g.stateNode;
          if (
            (g.tag === 5 &&
              v !== null &&
              ((g = v),
              f !== null && ((v = ar(d, f)), v != null && x.push(hr(d, v, g)))),
            k)
          )
            break;
          d = d.return;
        }
        0 < x.length &&
          ((h = new j(h, y, null, n, p)), m.push({ event: h, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (j = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Zo &&
            (y = n.relatedTarget || n.fromElement) &&
            (Wt(y) || y[ht]))
        )
          break e;
        if (
          (j || h) &&
          ((h =
            p.window === p
              ? p
              : (h = p.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          j
            ? ((y = n.relatedTarget || n.toElement),
              (j = c),
              (y = y ? Wt(y) : null),
              y !== null &&
                ((k = sn(y)), y !== k || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((j = null), (y = c)),
          j !== y)
        ) {
          if (
            ((x = ua),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = da),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (k = j == null ? h : pn(j)),
            (g = y == null ? h : pn(y)),
            (h = new x(v, d + "leave", j, n, p)),
            (h.target = k),
            (h.relatedTarget = g),
            (v = null),
            Wt(p) === c &&
              ((x = new x(f, d + "enter", y, n, p)),
              (x.target = g),
              (x.relatedTarget = k),
              (v = x)),
            (k = v),
            j && y)
          )
            t: {
              for (x = j, f = y, d = 0, g = x; g; g = ln(g)) d++;
              for (g = 0, v = f; v; v = ln(v)) g++;
              for (; 0 < d - g; ) ((x = ln(x)), d--);
              for (; 0 < g - d; ) ((f = ln(f)), g--);
              for (; d--; ) {
                if (x === f || (f !== null && x === f.alternate)) break t;
                ((x = ln(x)), (f = ln(f)));
              }
              x = null;
            }
          else x = null;
          (j !== null && Sa(m, h, j, x, !1),
            y !== null && k !== null && Sa(m, k, y, x, !0));
        }
      }
      e: {
        if (
          ((h = c ? pn(c) : window),
          (j = h.nodeName && h.nodeName.toLowerCase()),
          j === "select" || (j === "input" && h.type === "file"))
        )
          var E = Xp;
        else if (ma(h))
          if (gc) E = nm;
          else {
            E = em;
            var M = Zp;
          }
        else
          (j = h.nodeName) &&
            j.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (E = tm);
        if (E && (E = E(e, c))) {
          hc(m, E, n, p);
          break e;
        }
        (M && M(e, h, c),
          e === "focusout" &&
            (M = h._wrapperState) &&
            M.controlled &&
            h.type === "number" &&
            Ko(h, "number", h.value));
      }
      switch (((M = c ? pn(c) : window), e)) {
        case "focusin":
          (ma(M) || M.contentEditable === "true") &&
            ((dn = M), (ll = c), (tr = null));
          break;
        case "focusout":
          tr = ll = dn = null;
          break;
        case "mousedown":
          il = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((il = !1), va(m, n, p));
          break;
        case "selectionchange":
          if (om) break;
        case "keydown":
        case "keyup":
          va(m, n, p);
      }
      var N;
      if (si)
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
        cn
          ? pc(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      (C &&
        (fc &&
          n.locale !== "ko" &&
          (cn || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && cn && (N = dc())
            : ((Ct = p),
              (ti = "value" in Ct ? Ct.value : Ct.textContent),
              (cn = !0))),
        (M = xs(c, C)),
        0 < M.length &&
          ((C = new ca(C, e, null, n, p)),
          m.push({ event: C, listeners: M }),
          N ? (C.data = N) : ((N = mc(n)), N !== null && (C.data = N)))),
        (N = Qp ? Kp(e, n) : qp(e, n)) &&
          ((c = xs(c, "onBeforeInput")),
          0 < c.length &&
            ((p = new ca("onBeforeInput", "beforeinput", null, n, p)),
            m.push({ event: p, listeners: c }),
            (p.data = N))));
    }
    Ec(m, t);
  });
}
function hr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function xs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      o = s.stateNode;
    (s.tag === 5 &&
      o !== null &&
      ((s = o),
      (o = ar(e, n)),
      o != null && r.unshift(hr(e, o, s)),
      (o = ar(e, t)),
      o != null && r.push(hr(e, o, s))),
      (e = e.return));
  }
  return r;
}
function ln(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Sa(e, t, n, r, s) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      c = a.stateNode;
    if (u !== null && u === r) break;
    (a.tag === 5 &&
      c !== null &&
      ((a = c),
      s
        ? ((u = ar(n, o)), u != null && i.unshift(hr(n, u, a)))
        : s || ((u = ar(n, o)), u != null && i.push(hr(n, u, a)))),
      (n = n.return));
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var um = /\r\n?/g,
  cm = /\u0000|\uFFFD/g;
function ja(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      um,
      `
`,
    )
    .replace(cm, "");
}
function $r(e, t, n) {
  if (((t = ja(t)), ja(e) !== t && n)) throw Error(b(425));
}
function vs() {}
var al = null,
  ul = null;
function cl(e, t) {
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
var dl = typeof setTimeout == "function" ? setTimeout : void 0,
  dm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ka = typeof Promise == "function" ? Promise : void 0,
  fm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ka < "u"
        ? function (e) {
            return ka.resolve(null).then(e).catch(pm);
          }
        : dl;
function pm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Co(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(s), dr(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  dr(t);
}
function _t(e) {
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
function Ca(e) {
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
var On = Math.random().toString(36).slice(2),
  lt = "__reactFiber$" + On,
  gr = "__reactProps$" + On,
  ht = "__reactContainer$" + On,
  fl = "__reactEvents$" + On,
  mm = "__reactListeners$" + On,
  hm = "__reactHandles$" + On;
function Wt(e) {
  var t = e[lt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ht] || n[lt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ca(e); e !== null; ) {
          if ((n = e[lt])) return n;
          e = Ca(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Mr(e) {
  return (
    (e = e[lt] || e[ht]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function pn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(b(33));
}
function Hs(e) {
  return e[gr] || null;
}
var pl = [],
  mn = -1;
function Ut(e) {
  return { current: e };
}
function Z(e) {
  0 > mn || ((e.current = pl[mn]), (pl[mn] = null), mn--);
}
function J(e, t) {
  (mn++, (pl[mn] = e.current), (e.current = t));
}
var Dt = {},
  je = Ut(Dt),
  _e = Ut(!1),
  Yt = Dt;
function bn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Dt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    o;
  for (o in n) s[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function Te(e) {
  return ((e = e.childContextTypes), e != null);
}
function ws() {
  (Z(_e), Z(je));
}
function Ea(e, t, n) {
  if (je.current !== Dt) throw Error(b(168));
  (J(je, t), J(_e, n));
}
function Mc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(b(108, Zf(e) || "Unknown", s));
  return se({}, n, r);
}
function Ns(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dt),
    (Yt = je.current),
    J(je, e),
    J(_e, _e.current),
    !0
  );
}
function ba(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(b(169));
  (n
    ? ((e = Mc(e, t, Yt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Z(_e),
      Z(je),
      J(je, e))
    : Z(_e),
    J(_e, n));
}
var ct = null,
  Ws = !1,
  Eo = !1;
function Lc(e) {
  ct === null ? (ct = [e]) : ct.push(e);
}
function gm(e) {
  ((Ws = !0), Lc(e));
}
function zt() {
  if (!Eo && ct !== null) {
    Eo = !0;
    var e = 0,
      t = K;
    try {
      var n = ct;
      for (K = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((ct = null), (Ws = !1));
    } catch (s) {
      throw (ct !== null && (ct = ct.slice(e + 1)), ec(Jl, zt), s);
    } finally {
      ((K = t), (Eo = !1));
    }
  }
  return null;
}
var hn = [],
  gn = 0,
  Ss = null,
  js = 0,
  Be = [],
  $e = 0,
  Jt = null,
  dt = 1,
  ft = "";
function $t(e, t) {
  ((hn[gn++] = js), (hn[gn++] = Ss), (Ss = e), (js = t));
}
function _c(e, t, n) {
  ((Be[$e++] = dt), (Be[$e++] = ft), (Be[$e++] = Jt), (Jt = e));
  var r = dt;
  e = ft;
  var s = 32 - Xe(r) - 1;
  ((r &= ~(1 << s)), (n += 1));
  var o = 32 - Xe(t) + s;
  if (30 < o) {
    var i = s - (s % 5);
    ((o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (s -= i),
      (dt = (1 << (32 - Xe(t) + s)) | (n << s) | r),
      (ft = o + e));
  } else ((dt = (1 << o) | (n << s) | r), (ft = e));
}
function li(e) {
  e.return !== null && ($t(e, 1), _c(e, 1, 0));
}
function ii(e) {
  for (; e === Ss; )
    ((Ss = hn[--gn]), (hn[gn] = null), (js = hn[--gn]), (hn[gn] = null));
  for (; e === Jt; )
    ((Jt = Be[--$e]),
      (Be[$e] = null),
      (ft = Be[--$e]),
      (Be[$e] = null),
      (dt = Be[--$e]),
      (Be[$e] = null));
}
var Oe = null,
  Ae = null,
  ee = !1,
  Je = null;
function Tc(e, t) {
  var n = He(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Ma(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Oe = e), (Ae = _t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Oe = e), (Ae = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Jt !== null ? { id: dt, overflow: ft } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = He(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Oe = e),
            (Ae = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ml(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function hl(e) {
  if (ee) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!Ma(e, t)) {
        if (ml(e)) throw Error(b(418));
        t = _t(n.nextSibling);
        var r = Oe;
        t && Ma(e, t)
          ? Tc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Oe = e));
      }
    } else {
      if (ml(e)) throw Error(b(418));
      ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Oe = e));
    }
  }
}
function La(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Oe = e;
}
function Hr(e) {
  if (e !== Oe) return !1;
  if (!ee) return (La(e), (ee = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !cl(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (ml(e)) throw (Rc(), Error(b(418)));
    for (; t; ) (Tc(e, t), (t = _t(t.nextSibling)));
  }
  if ((La(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(b(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = _t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = Oe ? _t(e.stateNode.nextSibling) : null;
  return !0;
}
function Rc() {
  for (var e = Ae; e; ) e = _t(e.nextSibling);
}
function Mn() {
  ((Ae = Oe = null), (ee = !1));
}
function ai(e) {
  Je === null ? (Je = [e]) : Je.push(e);
}
var ym = xt.ReactCurrentBatchConfig;
function Hn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(b(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(b(147, e));
      var s = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = s.refs;
            i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(b(284));
    if (!n._owner) throw Error(b(290, e));
  }
  return e;
}
function Wr(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      b(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function _a(e) {
  var t = e._init;
  return t(e._payload);
}
function Pc(e) {
  function t(f, d) {
    if (e) {
      var g = f.deletions;
      g === null ? ((f.deletions = [d]), (f.flags |= 16)) : g.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) (t(f, d), (d = d.sibling));
    return null;
  }
  function r(f, d) {
    for (f = new Map(); d !== null; )
      (d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling));
    return f;
  }
  function s(f, d) {
    return ((f = At(f, d)), (f.index = 0), (f.sibling = null), f);
  }
  function o(f, d, g) {
    return (
      (f.index = g),
      e
        ? ((g = f.alternate),
          g !== null
            ? ((g = g.index), g < d ? ((f.flags |= 2), d) : g)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function i(f) {
    return (e && f.alternate === null && (f.flags |= 2), f);
  }
  function a(f, d, g, v) {
    return d === null || d.tag !== 6
      ? ((d = Po(g, f.mode, v)), (d.return = f), d)
      : ((d = s(d, g)), (d.return = f), d);
  }
  function u(f, d, g, v) {
    var E = g.type;
    return E === un
      ? p(f, d, g.props.children, v, g.key)
      : d !== null &&
          (d.elementType === E ||
            (typeof E == "object" &&
              E !== null &&
              E.$$typeof === Nt &&
              _a(E) === d.type))
        ? ((v = s(d, g.props)), (v.ref = Hn(f, d, g)), (v.return = f), v)
        : ((v = ls(g.type, g.key, g.props, null, f.mode, v)),
          (v.ref = Hn(f, d, g)),
          (v.return = f),
          v);
  }
  function c(f, d, g, v) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== g.containerInfo ||
      d.stateNode.implementation !== g.implementation
      ? ((d = Ao(g, f.mode, v)), (d.return = f), d)
      : ((d = s(d, g.children || [])), (d.return = f), d);
  }
  function p(f, d, g, v, E) {
    return d === null || d.tag !== 7
      ? ((d = qt(g, f.mode, v, E)), (d.return = f), d)
      : ((d = s(d, g)), (d.return = f), d);
  }
  function m(f, d, g) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return ((d = Po("" + d, f.mode, g)), (d.return = f), d);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Pr:
          return (
            (g = ls(d.type, d.key, d.props, null, f.mode, g)),
            (g.ref = Hn(f, null, d)),
            (g.return = f),
            g
          );
        case an:
          return ((d = Ao(d, f.mode, g)), (d.return = f), d);
        case Nt:
          var v = d._init;
          return m(f, v(d._payload), g);
      }
      if (Kn(d) || Un(d))
        return ((d = qt(d, f.mode, g, null)), (d.return = f), d);
      Wr(f, d);
    }
    return null;
  }
  function h(f, d, g, v) {
    var E = d !== null ? d.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return E !== null ? null : a(f, d, "" + g, v);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Pr:
          return g.key === E ? u(f, d, g, v) : null;
        case an:
          return g.key === E ? c(f, d, g, v) : null;
        case Nt:
          return ((E = g._init), h(f, d, E(g._payload), v));
      }
      if (Kn(g) || Un(g)) return E !== null ? null : p(f, d, g, v, null);
      Wr(f, g);
    }
    return null;
  }
  function j(f, d, g, v, E) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return ((f = f.get(g) || null), a(d, f, "" + v, E));
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Pr:
          return (
            (f = f.get(v.key === null ? g : v.key) || null),
            u(d, f, v, E)
          );
        case an:
          return (
            (f = f.get(v.key === null ? g : v.key) || null),
            c(d, f, v, E)
          );
        case Nt:
          var M = v._init;
          return j(f, d, g, M(v._payload), E);
      }
      if (Kn(v) || Un(v)) return ((f = f.get(g) || null), p(d, f, v, E, null));
      Wr(d, v);
    }
    return null;
  }
  function y(f, d, g, v) {
    for (
      var E = null, M = null, N = d, C = (d = 0), R = null;
      N !== null && C < g.length;
      C++
    ) {
      N.index > C ? ((R = N), (N = null)) : (R = N.sibling);
      var P = h(f, N, g[C], v);
      if (P === null) {
        N === null && (N = R);
        break;
      }
      (e && N && P.alternate === null && t(f, N),
        (d = o(P, d, C)),
        M === null ? (E = P) : (M.sibling = P),
        (M = P),
        (N = R));
    }
    if (C === g.length) return (n(f, N), ee && $t(f, C), E);
    if (N === null) {
      for (; C < g.length; C++)
        ((N = m(f, g[C], v)),
          N !== null &&
            ((d = o(N, d, C)),
            M === null ? (E = N) : (M.sibling = N),
            (M = N)));
      return (ee && $t(f, C), E);
    }
    for (N = r(f, N); C < g.length; C++)
      ((R = j(N, f, C, g[C], v)),
        R !== null &&
          (e && R.alternate !== null && N.delete(R.key === null ? C : R.key),
          (d = o(R, d, C)),
          M === null ? (E = R) : (M.sibling = R),
          (M = R)));
    return (
      e &&
        N.forEach(function (I) {
          return t(f, I);
        }),
      ee && $t(f, C),
      E
    );
  }
  function x(f, d, g, v) {
    var E = Un(g);
    if (typeof E != "function") throw Error(b(150));
    if (((g = E.call(g)), g == null)) throw Error(b(151));
    for (
      var M = (E = null), N = d, C = (d = 0), R = null, P = g.next();
      N !== null && !P.done;
      C++, P = g.next()
    ) {
      N.index > C ? ((R = N), (N = null)) : (R = N.sibling);
      var I = h(f, N, P.value, v);
      if (I === null) {
        N === null && (N = R);
        break;
      }
      (e && N && I.alternate === null && t(f, N),
        (d = o(I, d, C)),
        M === null ? (E = I) : (M.sibling = I),
        (M = I),
        (N = R));
    }
    if (P.done) return (n(f, N), ee && $t(f, C), E);
    if (N === null) {
      for (; !P.done; C++, P = g.next())
        ((P = m(f, P.value, v)),
          P !== null &&
            ((d = o(P, d, C)),
            M === null ? (E = P) : (M.sibling = P),
            (M = P)));
      return (ee && $t(f, C), E);
    }
    for (N = r(f, N); !P.done; C++, P = g.next())
      ((P = j(N, f, C, P.value, v)),
        P !== null &&
          (e && P.alternate !== null && N.delete(P.key === null ? C : P.key),
          (d = o(P, d, C)),
          M === null ? (E = P) : (M.sibling = P),
          (M = P)));
    return (
      e &&
        N.forEach(function (B) {
          return t(f, B);
        }),
      ee && $t(f, C),
      E
    );
  }
  function k(f, d, g, v) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === un &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Pr:
          e: {
            for (var E = g.key, M = d; M !== null; ) {
              if (M.key === E) {
                if (((E = g.type), E === un)) {
                  if (M.tag === 7) {
                    (n(f, M.sibling),
                      (d = s(M, g.props.children)),
                      (d.return = f),
                      (f = d));
                    break e;
                  }
                } else if (
                  M.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Nt &&
                    _a(E) === M.type)
                ) {
                  (n(f, M.sibling),
                    (d = s(M, g.props)),
                    (d.ref = Hn(f, M, g)),
                    (d.return = f),
                    (f = d));
                  break e;
                }
                n(f, M);
                break;
              } else t(f, M);
              M = M.sibling;
            }
            g.type === un
              ? ((d = qt(g.props.children, f.mode, v, g.key)),
                (d.return = f),
                (f = d))
              : ((v = ls(g.type, g.key, g.props, null, f.mode, v)),
                (v.ref = Hn(f, d, g)),
                (v.return = f),
                (f = v));
          }
          return i(f);
        case an:
          e: {
            for (M = g.key; d !== null; ) {
              if (d.key === M)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === g.containerInfo &&
                  d.stateNode.implementation === g.implementation
                ) {
                  (n(f, d.sibling),
                    (d = s(d, g.children || [])),
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
            ((d = Ao(g, f.mode, v)), (d.return = f), (f = d));
          }
          return i(f);
        case Nt:
          return ((M = g._init), k(f, d, M(g._payload), v));
      }
      if (Kn(g)) return y(f, d, g, v);
      if (Un(g)) return x(f, d, g, v);
      Wr(f, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = s(d, g)), (d.return = f), (f = d))
          : (n(f, d), (d = Po(g, f.mode, v)), (d.return = f), (f = d)),
        i(f))
      : n(f, d);
  }
  return k;
}
var Ln = Pc(!0),
  Ac = Pc(!1),
  ks = Ut(null),
  Cs = null,
  yn = null,
  ui = null;
function ci() {
  ui = yn = Cs = null;
}
function di(e) {
  var t = ks.current;
  (Z(ks), (e._currentValue = t));
}
function gl(e, t, n) {
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
function kn(e, t) {
  ((Cs = e),
    (ui = yn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Le = !0), (e.firstContext = null)));
}
function Ve(e) {
  var t = e._currentValue;
  if (ui !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), yn === null)) {
      if (Cs === null) throw Error(b(308));
      ((yn = e), (Cs.dependencies = { lanes: 0, firstContext: e }));
    } else yn = yn.next = e;
  return t;
}
var Vt = null;
function fi(e) {
  Vt === null ? (Vt = [e]) : Vt.push(e);
}
function Oc(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), fi(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    gt(e, r)
  );
}
function gt(e, t) {
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
var St = !1;
function pi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Dc(e, t) {
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
function pt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Tt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      gt(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), fi(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    gt(e, n)
  );
}
function es(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
  }
}
function Ta(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
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
        (o === null ? (s = o = i) : (o = o.next = i), (n = n.next));
      } while (n !== null);
      o === null ? (s = o = t) : (o = o.next = t);
    } else s = o = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
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
function Es(e, t, n, r) {
  var s = e.updateQueue;
  St = !1;
  var o = s.firstBaseUpdate,
    i = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var u = a,
      c = u.next;
    ((u.next = null), i === null ? (o = c) : (i.next = c), (i = u));
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (a = p.lastBaseUpdate),
      a !== i &&
        (a === null ? (p.firstBaseUpdate = c) : (a.next = c),
        (p.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var m = s.baseState;
    ((i = 0), (p = c = u = null), (a = o));
    do {
      var h = a.lane,
        j = a.eventTime;
      if ((r & h) === h) {
        p !== null &&
          (p = p.next =
            {
              eventTime: j,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            x = a;
          switch (((h = t), (j = n), x.tag)) {
            case 1:
              if (((y = x.payload), typeof y == "function")) {
                m = y.call(j, m, h);
                break e;
              }
              m = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = x.payload),
                (h = typeof y == "function" ? y.call(j, m, h) : y),
                h == null)
              )
                break e;
              m = se({}, m, h);
              break e;
            case 2:
              St = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = s.effects),
          h === null ? (s.effects = [a]) : h.push(a));
      } else
        ((j = {
          eventTime: j,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          p === null ? ((c = p = j), (u = m)) : (p = p.next = j),
          (i |= h));
      if (((a = a.next), a === null)) {
        if (((a = s.shared.pending), a === null)) break;
        ((h = a),
          (a = h.next),
          (h.next = null),
          (s.lastBaseUpdate = h),
          (s.shared.pending = null));
      }
    } while (1);
    if (
      (p === null && (u = m),
      (s.baseState = u),
      (s.firstBaseUpdate = c),
      (s.lastBaseUpdate = p),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do ((i |= s.lane), (s = s.next));
      while (s !== t);
    } else o === null && (s.shared.lanes = 0);
    ((Zt |= i), (e.lanes = i), (e.memoizedState = m));
  }
}
function Ra(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(b(191, s));
        s.call(r);
      }
    }
}
var Lr = {},
  at = Ut(Lr),
  yr = Ut(Lr),
  xr = Ut(Lr);
function Gt(e) {
  if (e === Lr) throw Error(b(174));
  return e;
}
function mi(e, t) {
  switch ((J(xr, t), J(yr, e), J(at, Lr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Yo(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Yo(t, e)));
  }
  (Z(at), J(at, t));
}
function _n() {
  (Z(at), Z(yr), Z(xr));
}
function Ic(e) {
  Gt(xr.current);
  var t = Gt(at.current),
    n = Yo(t, e.type);
  t !== n && (J(yr, e), J(at, n));
}
function hi(e) {
  yr.current === e && (Z(at), Z(yr));
}
var ne = Ut(0);
function bs(e) {
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
var bo = [];
function gi() {
  for (var e = 0; e < bo.length; e++)
    bo[e]._workInProgressVersionPrimary = null;
  bo.length = 0;
}
var ts = xt.ReactCurrentDispatcher,
  Mo = xt.ReactCurrentBatchConfig,
  Xt = 0,
  re = null,
  ue = null,
  de = null,
  Ms = !1,
  nr = !1,
  vr = 0,
  xm = 0;
function ve() {
  throw Error(b(321));
}
function yi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!tt(e[n], t[n])) return !1;
  return !0;
}
function xi(e, t, n, r, s, o) {
  if (
    ((Xt = o),
    (re = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ts.current = e === null || e.memoizedState === null ? Sm : jm),
    (e = n(r, s)),
    nr)
  ) {
    o = 0;
    do {
      if (((nr = !1), (vr = 0), 25 <= o)) throw Error(b(301));
      ((o += 1),
        (de = ue = null),
        (t.updateQueue = null),
        (ts.current = km),
        (e = n(r, s)));
    } while (nr);
  }
  if (
    ((ts.current = Ls),
    (t = ue !== null && ue.next !== null),
    (Xt = 0),
    (de = ue = re = null),
    (Ms = !1),
    t)
  )
    throw Error(b(300));
  return e;
}
function vi() {
  var e = vr !== 0;
  return ((vr = 0), e);
}
function ot() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (de === null ? (re.memoizedState = de = e) : (de = de.next = e), de);
}
function Ge() {
  if (ue === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ue.next;
  var t = de === null ? re.memoizedState : de.next;
  if (t !== null) ((de = t), (ue = e));
  else {
    if (e === null) throw Error(b(310));
    ((ue = e),
      (e = {
        memoizedState: ue.memoizedState,
        baseState: ue.baseState,
        baseQueue: ue.baseQueue,
        queue: ue.queue,
        next: null,
      }),
      de === null ? (re.memoizedState = de = e) : (de = de.next = e));
  }
  return de;
}
function wr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Lo(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = e;
  var r = ue,
    s = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (s !== null) {
      var i = s.next;
      ((s.next = o.next), (o.next = i));
    }
    ((r.baseQueue = s = o), (n.pending = null));
  }
  if (s !== null) {
    ((o = s.next), (r = r.baseState));
    var a = (i = null),
      u = null,
      c = o;
    do {
      var p = c.lane;
      if ((Xt & p) === p)
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
        var m = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (u === null ? ((a = u = m), (i = r)) : (u = u.next = m),
          (re.lanes |= p),
          (Zt |= p));
      }
      c = c.next;
    } while (c !== null && c !== o);
    (u === null ? (i = r) : (u.next = a),
      tt(r, t.memoizedState) || (Le = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do ((o = s.lane), (re.lanes |= o), (Zt |= o), (s = s.next));
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function _o(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    o = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var i = (s = s.next);
    do ((o = e(o, i.action)), (i = i.next));
    while (i !== s);
    (tt(o, t.memoizedState) || (Le = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o));
  }
  return [o, r];
}
function Uc() {}
function zc(e, t) {
  var n = re,
    r = Ge(),
    s = t(),
    o = !tt(r.memoizedState, s);
  if (
    (o && ((r.memoizedState = s), (Le = !0)),
    (r = r.queue),
    wi($c.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (de !== null && de.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Nr(9, Bc.bind(null, n, r, s, t), void 0, null),
      fe === null)
    )
      throw Error(b(349));
    Xt & 30 || Fc(n, t, s);
  }
  return s;
}
function Fc(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Bc(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Hc(t) && Wc(e));
}
function $c(e, t, n) {
  return n(function () {
    Hc(t) && Wc(e);
  });
}
function Hc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !tt(e, n);
  } catch {
    return !0;
  }
}
function Wc(e) {
  var t = gt(e, 1);
  t !== null && Ze(t, e, 1, -1);
}
function Pa(e) {
  var t = ot();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Nm.bind(null, re, e)),
    [t.memoizedState, e]
  );
}
function Nr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (re.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Vc() {
  return Ge().memoizedState;
}
function ns(e, t, n, r) {
  var s = ot();
  ((re.flags |= e),
    (s.memoizedState = Nr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Vs(e, t, n, r) {
  var s = Ge();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ue !== null) {
    var i = ue.memoizedState;
    if (((o = i.destroy), r !== null && yi(r, i.deps))) {
      s.memoizedState = Nr(t, n, o, r);
      return;
    }
  }
  ((re.flags |= e), (s.memoizedState = Nr(1 | t, n, o, r)));
}
function Aa(e, t) {
  return ns(8390656, 8, e, t);
}
function wi(e, t) {
  return Vs(2048, 8, e, t);
}
function Gc(e, t) {
  return Vs(4, 2, e, t);
}
function Qc(e, t) {
  return Vs(4, 4, e, t);
}
function Kc(e, t) {
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
function qc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Vs(4, 4, Kc.bind(null, t, e), n)
  );
}
function Ni() {}
function Yc(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Jc(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Xc(e, t, n) {
  return Xt & 21
    ? (tt(n, t) || ((n = rc()), (re.lanes |= n), (Zt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Le = !0)), (e.memoizedState = n));
}
function vm(e, t) {
  var n = K;
  ((K = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Mo.transition;
  Mo.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((K = n), (Mo.transition = r));
  }
}
function Zc() {
  return Ge().memoizedState;
}
function wm(e, t, n) {
  var r = Pt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ed(e))
  )
    td(t, n);
  else if (((n = Oc(e, t, n, r)), n !== null)) {
    var s = Ce();
    (Ze(n, e, r, s), nd(n, t, r));
  }
}
function Nm(e, t, n) {
  var r = Pt(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ed(e)) td(t, s);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((s.hasEagerState = !0), (s.eagerState = a), tt(a, i))) {
          var u = t.interleaved;
          (u === null
            ? ((s.next = s), fi(t))
            : ((s.next = u.next), (u.next = s)),
            (t.interleaved = s));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Oc(e, t, s, r)),
      n !== null && ((s = Ce()), Ze(n, e, r, s), nd(n, t, r)));
  }
}
function ed(e) {
  var t = e.alternate;
  return e === re || (t !== null && t === re);
}
function td(e, t) {
  nr = Ms = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function nd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Xl(e, n));
  }
}
var Ls = {
    readContext: Ve,
    useCallback: ve,
    useContext: ve,
    useEffect: ve,
    useImperativeHandle: ve,
    useInsertionEffect: ve,
    useLayoutEffect: ve,
    useMemo: ve,
    useReducer: ve,
    useRef: ve,
    useState: ve,
    useDebugValue: ve,
    useDeferredValue: ve,
    useTransition: ve,
    useMutableSource: ve,
    useSyncExternalStore: ve,
    useId: ve,
    unstable_isNewReconciler: !1,
  },
  Sm = {
    readContext: Ve,
    useCallback: function (e, t) {
      return ((ot().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Ve,
    useEffect: Aa,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ns(4194308, 4, Kc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ns(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ns(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ot();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = ot();
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
        (e = e.dispatch = wm.bind(null, re, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ot();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Pa,
    useDebugValue: Ni,
    useDeferredValue: function (e) {
      return (ot().memoizedState = e);
    },
    useTransition: function () {
      var e = Pa(!1),
        t = e[0];
      return ((e = vm.bind(null, e[1])), (ot().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = re,
        s = ot();
      if (ee) {
        if (n === void 0) throw Error(b(407));
        n = n();
      } else {
        if (((n = t()), fe === null)) throw Error(b(349));
        Xt & 30 || Fc(r, t, n);
      }
      s.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (s.queue = o),
        Aa($c.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Nr(9, Bc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ot(),
        t = fe.identifierPrefix;
      if (ee) {
        var n = ft,
          r = dt;
        ((n = (r & ~(1 << (32 - Xe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = vr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = xm++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  jm = {
    readContext: Ve,
    useCallback: Yc,
    useContext: Ve,
    useEffect: wi,
    useImperativeHandle: qc,
    useInsertionEffect: Gc,
    useLayoutEffect: Qc,
    useMemo: Jc,
    useReducer: Lo,
    useRef: Vc,
    useState: function () {
      return Lo(wr);
    },
    useDebugValue: Ni,
    useDeferredValue: function (e) {
      var t = Ge();
      return Xc(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = Lo(wr)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: Uc,
    useSyncExternalStore: zc,
    useId: Zc,
    unstable_isNewReconciler: !1,
  },
  km = {
    readContext: Ve,
    useCallback: Yc,
    useContext: Ve,
    useEffect: wi,
    useImperativeHandle: qc,
    useInsertionEffect: Gc,
    useLayoutEffect: Qc,
    useMemo: Jc,
    useReducer: _o,
    useRef: Vc,
    useState: function () {
      return _o(wr);
    },
    useDebugValue: Ni,
    useDeferredValue: function (e) {
      var t = Ge();
      return ue === null ? (t.memoizedState = e) : Xc(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = _o(wr)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: Uc,
    useSyncExternalStore: zc,
    useId: Zc,
    unstable_isNewReconciler: !1,
  };
function qe(e, t) {
  if (e && e.defaultProps) {
    ((t = se({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function yl(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Gs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? sn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ce(),
      s = Pt(e),
      o = pt(r, s);
    ((o.payload = t),
      n != null && (o.callback = n),
      (t = Tt(e, o, s)),
      t !== null && (Ze(t, e, s, r), es(t, e, s)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ce(),
      s = Pt(e),
      o = pt(r, s);
    ((o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Tt(e, o, s)),
      t !== null && (Ze(t, e, s, r), es(t, e, s)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ce(),
      r = Pt(e),
      s = pt(n, r);
    ((s.tag = 2),
      t != null && (s.callback = t),
      (t = Tt(e, s, r)),
      t !== null && (Ze(t, e, r, n), es(t, e, r)));
  },
};
function Oa(e, t, n, r, s, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !pr(n, r) || !pr(s, o)
        : !0
  );
}
function rd(e, t, n) {
  var r = !1,
    s = Dt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ve(o))
      : ((s = Te(t) ? Yt : je.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? bn(e, s) : Dt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Gs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Da(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Gs.enqueueReplaceState(t, t.state, null));
}
function xl(e, t, n, r) {
  var s = e.stateNode;
  ((s.props = n), (s.state = e.memoizedState), (s.refs = {}), pi(e));
  var o = t.contextType;
  (typeof o == "object" && o !== null
    ? (s.context = Ve(o))
    : ((o = Te(t) ? Yt : je.current), (s.context = bn(e, o))),
    (s.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (yl(e, t, o, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && Gs.enqueueReplaceState(s, s.state, null),
      Es(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308));
}
function Tn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Xf(r)), (r = r.return));
    while (r);
    var s = n;
  } catch (o) {
    s =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function To(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function vl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Cm = typeof WeakMap == "function" ? WeakMap : Map;
function sd(e, t, n) {
  ((n = pt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Ts || ((Ts = !0), (Ll = r)), vl(e, t));
    }),
    n
  );
}
function od(e, t, n) {
  ((n = pt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    ((n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        vl(e, t);
      }));
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        (vl(e, t),
          typeof r != "function" &&
            (Rt === null ? (Rt = new Set([this])) : Rt.add(this)));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Ia(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Cm();
    var s = new Set();
    r.set(t, s);
  } else ((s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s)));
  s.has(n) || (s.add(n), (e = zm.bind(null, e, t, n)), t.then(e, e));
}
function Ua(e) {
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
function za(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = pt(-1, 1)), (t.tag = 2), Tt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Em = xt.ReactCurrentOwner,
  Le = !1;
function ke(e, t, n, r) {
  t.child = e === null ? Ac(t, null, n, r) : Ln(t, e.child, n, r);
}
function Fa(e, t, n, r, s) {
  n = n.render;
  var o = t.ref;
  return (
    kn(t, s),
    (r = xi(e, t, n, r, o, s)),
    (n = vi()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        yt(e, t, s))
      : (ee && n && li(t), (t.flags |= 1), ke(e, t, r, s), t.child)
  );
}
function Ba(e, t, n, r, s) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Li(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), ld(e, t, o, r, s))
      : ((e = ls(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & s))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : pr), n(i, r) && e.ref === t.ref)
    )
      return yt(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = At(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ld(e, t, n, r, s) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (pr(o, r) && e.ref === t.ref)
      if (((Le = !1), (t.pendingProps = r = o), (e.lanes & s) !== 0))
        e.flags & 131072 && (Le = !0);
      else return ((t.lanes = e.lanes), yt(e, t, s));
  }
  return wl(e, t, n, r, s);
}
function id(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        J(vn, Pe),
        (Pe |= n));
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
          J(vn, Pe),
          (Pe |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        J(vn, Pe),
        (Pe |= r));
    }
  else
    (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      J(vn, Pe),
      (Pe |= r));
  return (ke(e, t, s, n), t.child);
}
function ad(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function wl(e, t, n, r, s) {
  var o = Te(n) ? Yt : je.current;
  return (
    (o = bn(t, o)),
    kn(t, s),
    (n = xi(e, t, n, r, o, s)),
    (r = vi()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        yt(e, t, s))
      : (ee && r && li(t), (t.flags |= 1), ke(e, t, n, s), t.child)
  );
}
function $a(e, t, n, r, s) {
  if (Te(n)) {
    var o = !0;
    Ns(t);
  } else o = !1;
  if ((kn(t, s), t.stateNode === null))
    (rs(e, t), rd(t, n, r), xl(t, n, r, s), (r = !0));
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ve(c))
      : ((c = Te(n) ? Yt : je.current), (c = bn(t, c)));
    var p = n.getDerivedStateFromProps,
      m =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    (m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== c) && Da(t, i, r, c)),
      (St = !1));
    var h = t.memoizedState;
    ((i.state = h),
      Es(t, r, i, s),
      (u = t.memoizedState),
      a !== r || h !== u || _e.current || St
        ? (typeof p == "function" && (yl(t, n, p, r), (u = t.memoizedState)),
          (a = St || Oa(t, n, a, r, h, u, c))
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
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = c),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((i = t.stateNode),
      Dc(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : qe(t.type, a)),
      (i.props = c),
      (m = t.pendingProps),
      (h = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ve(u))
        : ((u = Te(n) ? Yt : je.current), (u = bn(t, u))));
    var j = n.getDerivedStateFromProps;
    ((p =
      typeof j == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== m || h !== u) && Da(t, i, r, u)),
      (St = !1),
      (h = t.memoizedState),
      (i.state = h),
      Es(t, r, i, s));
    var y = t.memoizedState;
    a !== m || h !== y || _e.current || St
      ? (typeof j == "function" && (yl(t, n, j, r), (y = t.memoizedState)),
        (c = St || Oa(t, n, c, r, h, y, u) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, y, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, y, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (i.props = r),
        (i.state = y),
        (i.context = u),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Nl(e, t, n, r, o, s);
}
function Nl(e, t, n, r, s, o) {
  ad(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return (s && ba(t, n, !1), yt(e, t, o));
  ((r = t.stateNode), (Em.current = t));
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Ln(t, e.child, null, o)), (t.child = Ln(t, null, a, o)))
      : ke(e, t, a, o),
    (t.memoizedState = r.state),
    s && ba(t, n, !0),
    t.child
  );
}
function ud(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Ea(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ea(e, t.context, !1),
    mi(e, t.containerInfo));
}
function Ha(e, t, n, r, s) {
  return (Mn(), ai(s), (t.flags |= 256), ke(e, t, n, r), t.child);
}
var Sl = { dehydrated: null, treeContext: null, retryLane: 0 };
function jl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function cd(e, t, n) {
  var r = t.pendingProps,
    s = ne.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    J(ne, s & 1),
    e === null)
  )
    return (
      hl(t),
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
                : (o = qs(i, r, 0, null)),
              (e = qt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = jl(n)),
              (t.memoizedState = Sl),
              e)
            : Si(t, i))
    );
  if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return bm(e, t, i, r, a, s, n);
  if (o) {
    ((o = r.fallback), (i = t.mode), (s = e.child), (a = s.sibling));
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = At(s, u)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (o = At(a, o)) : ((o = qt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? jl(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Sl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = At(o, { mode: "visible", children: r.children })),
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
function Si(e, t) {
  return (
    (t = qs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Vr(e, t, n, r) {
  return (
    r !== null && ai(r),
    Ln(t, e.child, null, n),
    (e = Si(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function bm(e, t, n, r, s, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = To(Error(b(422)))), Vr(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (s = t.mode),
          (r = qs({ mode: "visible", children: r.children }, s, 0, null)),
          (o = qt(o, s, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && Ln(t, e.child, null, i),
          (t.child.memoizedState = jl(i)),
          (t.memoizedState = Sl),
          o);
  if (!(t.mode & 1)) return Vr(e, t, i, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (o = Error(b(419))),
      (r = To(o, r, void 0)),
      Vr(e, t, i, r)
    );
  }
  if (((a = (i & e.childLanes) !== 0), Le || a)) {
    if (((r = fe), r !== null)) {
      switch (i & -i) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
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
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      ((s = s & (r.suspendedLanes | i) ? 0 : s),
        s !== 0 &&
          s !== o.retryLane &&
          ((o.retryLane = s), gt(e, s), Ze(r, e, s, -1)));
    }
    return (Mi(), (r = To(Error(b(421)))), Vr(e, t, i, r));
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Fm.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ae = _t(s.nextSibling)),
      (Oe = t),
      (ee = !0),
      (Je = null),
      e !== null &&
        ((Be[$e++] = dt),
        (Be[$e++] = ft),
        (Be[$e++] = Jt),
        (dt = e.id),
        (ft = e.overflow),
        (Jt = t)),
      (t = Si(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Wa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), gl(e.return, t, n));
}
function Ro(e, t, n, r, s) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = s));
}
function dd(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    o = r.tail;
  if ((ke(e, t, r.children, n), (r = ne.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Wa(e, n, t);
        else if (e.tag === 19) Wa(e, n, t);
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
  if ((J(ne, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          ((e = n.alternate),
            e !== null && bs(e) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Ro(t, !1, s, n, o));
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && bs(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
        }
        Ro(t, !0, n, null, o);
        break;
      case "together":
        Ro(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function rs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Zt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(b(153));
  if (t.child !== null) {
    for (
      e = t.child, n = At(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = At(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Mm(e, t, n) {
  switch (t.tag) {
    case 3:
      (ud(t), Mn());
      break;
    case 5:
      Ic(t);
      break;
    case 1:
      Te(t.type) && Ns(t);
      break;
    case 4:
      mi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      (J(ks, r._currentValue), (r._currentValue = s));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (J(ne, ne.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? cd(e, t, n)
            : (J(ne, ne.current & 1),
              (e = yt(e, t, n)),
              e !== null ? e.sibling : null);
      J(ne, ne.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return dd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        J(ne, ne.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), id(e, t, n));
  }
  return yt(e, t, n);
}
var fd, kl, pd, md;
fd = function (e, t) {
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
kl = function () {};
pd = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    ((e = t.stateNode), Gt(at.current));
    var o = null;
    switch (n) {
      case "input":
        ((s = Go(e, s)), (r = Go(e, r)), (o = []));
        break;
      case "select":
        ((s = se({}, s, { value: void 0 })),
          (r = se({}, r, { value: void 0 })),
          (o = []));
        break;
      case "textarea":
        ((s = qo(e, s)), (r = qo(e, r)), (o = []));
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = vs);
    }
    Jo(n, r);
    var i;
    n = null;
    for (c in s)
      if (!r.hasOwnProperty(c) && s.hasOwnProperty(c) && s[c] != null)
        if (c === "style") {
          var a = s[c];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (lr.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((a = s != null ? s[c] : void 0),
        r.hasOwnProperty(c) && u !== a && (u != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                a[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else (n || (o || (o = []), o.push(c, n)), (n = u));
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(c, u))
            : c === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (o = o || []).push(c, "" + u)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (lr.hasOwnProperty(c)
                  ? (u != null && c === "onScroll" && X("scroll", e),
                    o || a === u || (o = []))
                  : (o = o || []).push(c, u));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
md = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Wn(e, t) {
  if (!ee)
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
function we(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling));
  else
    for (s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function Lm(e, t, n) {
  var r = t.pendingProps;
  switch ((ii(t), t.tag)) {
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
      return (we(t), null);
    case 1:
      return (Te(t.type) && ws(), we(t), null);
    case 3:
      return (
        (r = t.stateNode),
        _n(),
        Z(_e),
        Z(je),
        gi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Hr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Je !== null && (Rl(Je), (Je = null)))),
        kl(e, t),
        we(t),
        null
      );
    case 5:
      hi(t);
      var s = Gt(xr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (pd(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(b(166));
          return (we(t), null);
        }
        if (((e = Gt(at.current)), Hr(t))) {
          ((r = t.stateNode), (n = t.type));
          var o = t.memoizedProps;
          switch (((r[lt] = t), (r[gr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (X("cancel", r), X("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < Yn.length; s++) X(Yn[s], r);
              break;
            case "source":
              X("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (X("error", r), X("load", r));
              break;
            case "details":
              X("toggle", r);
              break;
            case "input":
              (Zi(r, o), X("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!o.multiple }),
                X("invalid", r));
              break;
            case "textarea":
              (ta(r, o), X("invalid", r));
          }
          (Jo(n, o), (s = null));
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      $r(r.textContent, a, e),
                    (s = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      $r(r.textContent, a, e),
                    (s = ["children", "" + a]))
                : lr.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  X("scroll", r);
            }
          switch (n) {
            case "input":
              (Ar(r), ea(r, o, !0));
              break;
            case "textarea":
              (Ar(r), na(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = vs);
          }
          ((r = s), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((i = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = $u(n)),
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
            (e[lt] = t),
            (e[gr] = r),
            fd(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((i = Xo(n, r)), n)) {
              case "dialog":
                (X("cancel", e), X("close", e), (s = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (X("load", e), (s = r));
                break;
              case "video":
              case "audio":
                for (s = 0; s < Yn.length; s++) X(Yn[s], e);
                s = r;
                break;
              case "source":
                (X("error", e), (s = r));
                break;
              case "img":
              case "image":
              case "link":
                (X("error", e), X("load", e), (s = r));
                break;
              case "details":
                (X("toggle", e), (s = r));
                break;
              case "input":
                (Zi(e, r), (s = Go(e, r)), X("invalid", e));
                break;
              case "option":
                s = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = se({}, r, { value: void 0 })),
                  X("invalid", e));
                break;
              case "textarea":
                (ta(e, r), (s = qo(e, r)), X("invalid", e));
                break;
              default:
                s = r;
            }
            (Jo(n, s), (a = s));
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style"
                  ? Vu(e, u)
                  : o === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && Hu(e, u))
                    : o === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && ir(e, u)
                        : typeof u == "number" && ir(e, "" + u)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (lr.hasOwnProperty(o)
                          ? u != null && o === "onScroll" && X("scroll", e)
                          : u != null && Gl(e, o, u, i));
              }
            switch (n) {
              case "input":
                (Ar(e), ea(e, r, !1));
                break;
              case "textarea":
                (Ar(e), na(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ot(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? wn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      wn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = vs);
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
      return (we(t), null);
    case 6:
      if (e && t.stateNode != null) md(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(b(166));
        if (((n = Gt(xr.current)), Gt(at.current), Hr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[lt] = t),
            (o = r.nodeValue !== n) && ((e = Oe), e !== null))
          )
            switch (e.tag) {
              case 3:
                $r(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  $r(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[lt] = t),
            (t.stateNode = r));
      }
      return (we(t), null);
    case 13:
      if (
        (Z(ne),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ee && Ae !== null && t.mode & 1 && !(t.flags & 128))
          (Rc(), Mn(), (t.flags |= 98560), (o = !1));
        else if (((o = Hr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(b(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(b(317));
            o[lt] = t;
          } else
            (Mn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (we(t), (o = !1));
        } else (Je !== null && (Rl(Je), (Je = null)), (o = !0));
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ne.current & 1 ? ce === 0 && (ce = 3) : Mi())),
          t.updateQueue !== null && (t.flags |= 4),
          we(t),
          null);
    case 4:
      return (
        _n(),
        kl(e, t),
        e === null && mr(t.stateNode.containerInfo),
        we(t),
        null
      );
    case 10:
      return (di(t.type._context), we(t), null);
    case 17:
      return (Te(t.type) && ws(), we(t), null);
    case 19:
      if ((Z(ne), (o = t.memoizedState), o === null)) return (we(t), null);
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Wn(o, !1);
        else {
          if (ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = bs(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Wn(o, !1),
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
                return (J(ne, (ne.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          o.tail !== null &&
            le() > Rn &&
            ((t.flags |= 128), (r = !0), Wn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = bs(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Wn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !ee)
            )
              return (we(t), null);
          } else
            2 * le() - o.renderingStartTime > Rn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Wn(o, !1), (t.lanes = 4194304));
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
          (o.renderingStartTime = le()),
          (t.sibling = null),
          (n = ne.current),
          J(ne, r ? (n & 1) | 2 : n & 1),
          t)
        : (we(t), null);
    case 22:
    case 23:
      return (
        bi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Pe & 1073741824 && (we(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : we(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(b(156, t.tag));
}
function _m(e, t) {
  switch ((ii(t), t.tag)) {
    case 1:
      return (
        Te(t.type) && ws(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        _n(),
        Z(_e),
        Z(je),
        gi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (hi(t), null);
    case 13:
      if ((Z(ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(b(340));
        Mn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (Z(ne), null);
    case 4:
      return (_n(), null);
    case 10:
      return (di(t.type._context), null);
    case 22:
    case 23:
      return (bi(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Gr = !1,
  Ne = !1,
  Tm = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function xn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        oe(e, t, r);
      }
    else n.current = null;
}
function Cl(e, t, n) {
  try {
    n();
  } catch (r) {
    oe(e, t, r);
  }
}
var Va = !1;
function Rm(e, t) {
  if (((al = gs), (e = vc()), oi(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, o.nodeType);
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            u = -1,
            c = 0,
            p = 0,
            m = e,
            h = null;
          t: for (;;) {
            for (
              var j;
              m !== n || (s !== 0 && m.nodeType !== 3) || (a = i + s),
                m !== o || (r !== 0 && m.nodeType !== 3) || (u = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (j = m.firstChild) !== null;
            )
              ((h = m), (m = j));
            for (;;) {
              if (m === e) break t;
              if (
                (h === n && ++c === s && (a = i),
                h === o && ++p === r && (u = i),
                (j = m.nextSibling) !== null)
              )
                break;
              ((m = h), (h = m.parentNode));
            }
            m = j;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ul = { focusedElem: e, selectionRange: n }, gs = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (O = e));
    else
      for (; O !== null; ) {
        t = O;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var x = y.memoizedProps,
                    k = y.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : qe(t.type, x),
                      k,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(b(163));
            }
        } catch (v) {
          oe(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (O = e));
          break;
        }
        O = t.return;
      }
  return ((y = Va), (Va = !1), y);
}
function rr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var o = s.destroy;
        ((s.destroy = void 0), o !== void 0 && Cl(t, n, o));
      }
      s = s.next;
    } while (s !== r);
  }
}
function Qs(e, t) {
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
function El(e) {
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
function hd(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), hd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[lt], delete t[gr], delete t[fl], delete t[mm], delete t[hm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function gd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ga(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || gd(e.return)) return null;
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
function bl(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = vs)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bl(e, t, n), e = e.sibling; e !== null; )
      (bl(e, t, n), (e = e.sibling));
}
function Ml(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ml(e, t, n), e = e.sibling; e !== null; )
      (Ml(e, t, n), (e = e.sibling));
}
var he = null,
  Ye = !1;
function wt(e, t, n) {
  for (n = n.child; n !== null; ) (yd(e, t, n), (n = n.sibling));
}
function yd(e, t, n) {
  if (it && typeof it.onCommitFiberUnmount == "function")
    try {
      it.onCommitFiberUnmount(zs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ne || xn(n, t);
    case 6:
      var r = he,
        s = Ye;
      ((he = null),
        wt(e, t, n),
        (he = r),
        (Ye = s),
        he !== null &&
          (Ye
            ? ((e = he),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : he.removeChild(n.stateNode)));
      break;
    case 18:
      he !== null &&
        (Ye
          ? ((e = he),
            (n = n.stateNode),
            e.nodeType === 8
              ? Co(e.parentNode, n)
              : e.nodeType === 1 && Co(e, n),
            dr(e))
          : Co(he, n.stateNode));
      break;
    case 4:
      ((r = he),
        (s = Ye),
        (he = n.stateNode.containerInfo),
        (Ye = !0),
        wt(e, t, n),
        (he = r),
        (Ye = s));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ne &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var o = s,
            i = o.destroy;
          ((o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Cl(n, t, i),
            (s = s.next));
        } while (s !== r);
      }
      wt(e, t, n);
      break;
    case 1:
      if (
        !Ne &&
        (xn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          oe(n, t, a);
        }
      wt(e, t, n);
      break;
    case 21:
      wt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ne = (r = Ne) || n.memoizedState !== null), wt(e, t, n), (Ne = r))
        : wt(e, t, n);
      break;
    default:
      wt(e, t, n);
  }
}
function Qa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Tm()),
      t.forEach(function (r) {
        var s = Bm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      }));
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((he = a.stateNode), (Ye = !1));
              break e;
            case 3:
              ((he = a.stateNode.containerInfo), (Ye = !0));
              break e;
            case 4:
              ((he = a.stateNode.containerInfo), (Ye = !0));
              break e;
          }
          a = a.return;
        }
        if (he === null) throw Error(b(160));
        (yd(o, i, s), (he = null), (Ye = !1));
        var u = s.alternate;
        (u !== null && (u.return = null), (s.return = null));
      } catch (c) {
        oe(s, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (xd(t, e), (t = t.sibling));
}
function xd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ke(t, e), rt(e), r & 4)) {
        try {
          (rr(3, e, e.return), Qs(3, e));
        } catch (x) {
          oe(e, e.return, x);
        }
        try {
          rr(5, e, e.return);
        } catch (x) {
          oe(e, e.return, x);
        }
      }
      break;
    case 1:
      (Ke(t, e), rt(e), r & 512 && n !== null && xn(n, n.return));
      break;
    case 5:
      if (
        (Ke(t, e),
        rt(e),
        r & 512 && n !== null && xn(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          ir(s, "");
        } catch (x) {
          oe(e, e.return, x);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            (a === "input" && o.type === "radio" && o.name != null && Fu(s, o),
              Xo(a, i));
            var c = Xo(a, o);
            for (i = 0; i < u.length; i += 2) {
              var p = u[i],
                m = u[i + 1];
              p === "style"
                ? Vu(s, m)
                : p === "dangerouslySetInnerHTML"
                  ? Hu(s, m)
                  : p === "children"
                    ? ir(s, m)
                    : Gl(s, p, m, c);
            }
            switch (a) {
              case "input":
                Qo(s, o);
                break;
              case "textarea":
                Bu(s, o);
                break;
              case "select":
                var h = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!o.multiple;
                var j = o.value;
                j != null
                  ? wn(s, !!o.multiple, j, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? wn(s, !!o.multiple, o.defaultValue, !0)
                      : wn(s, !!o.multiple, o.multiple ? [] : "", !1));
            }
            s[gr] = o;
          } catch (x) {
            oe(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Ke(t, e), rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(b(162));
        ((s = e.stateNode), (o = e.memoizedProps));
        try {
          s.nodeValue = o;
        } catch (x) {
          oe(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Ke(t, e), rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          dr(t.containerInfo);
        } catch (x) {
          oe(e, e.return, x);
        }
      break;
    case 4:
      (Ke(t, e), rt(e));
      break;
    case 13:
      (Ke(t, e),
        rt(e),
        (s = e.child),
        s.flags & 8192 &&
          ((o = s.memoizedState !== null),
          (s.stateNode.isHidden = o),
          !o ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Ci = le())),
        r & 4 && Qa(e));
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ne = (c = Ne) || p), Ke(t, e), (Ne = c)) : Ke(t, e),
        rt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !p && e.mode & 1)
        )
          for (O = e, p = e.child; p !== null; ) {
            for (m = O = p; O !== null; ) {
              switch (((h = O), (j = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  rr(4, h, h.return);
                  break;
                case 1:
                  xn(h, h.return);
                  var y = h.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    ((r = h), (n = h.return));
                    try {
                      ((t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount());
                    } catch (x) {
                      oe(r, n, x);
                    }
                  }
                  break;
                case 5:
                  xn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    qa(m);
                    continue;
                  }
              }
              j !== null ? ((j.return = h), (O = j)) : qa(m);
            }
            p = p.sibling;
          }
        e: for (p = null, m = e; ; ) {
          if (m.tag === 5) {
            if (p === null) {
              p = m;
              try {
                ((s = m.stateNode),
                  c
                    ? ((o = s.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = m.stateNode),
                      (u = m.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = Wu("display", i))));
              } catch (x) {
                oe(e, e.return, x);
              }
            }
          } else if (m.tag === 6) {
            if (p === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (x) {
                oe(e, e.return, x);
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
            (p === m && (p = null), (m = m.return));
          }
          (p === m && (p = null),
            (m.sibling.return = m.return),
            (m = m.sibling));
        }
      }
      break;
    case 19:
      (Ke(t, e), rt(e), r & 4 && Qa(e));
      break;
    case 21:
      break;
    default:
      (Ke(t, e), rt(e));
  }
}
function rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (gd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(b(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (ir(s, ""), (r.flags &= -33));
          var o = Ga(e);
          Ml(e, o, s);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Ga(e);
          bl(e, a, i);
          break;
        default:
          throw Error(b(161));
      }
    } catch (u) {
      oe(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Pm(e, t, n) {
  ((O = e), vd(e));
}
function vd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var s = O,
      o = s.child;
    if (s.tag === 22 && r) {
      var i = s.memoizedState !== null || Gr;
      if (!i) {
        var a = s.alternate,
          u = (a !== null && a.memoizedState !== null) || Ne;
        a = Gr;
        var c = Ne;
        if (((Gr = i), (Ne = u) && !c))
          for (O = s; O !== null; )
            ((i = O),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Ya(s)
                : u !== null
                  ? ((u.return = i), (O = u))
                  : Ya(s));
        for (; o !== null; ) ((O = o), vd(o), (o = o.sibling));
        ((O = s), (Gr = a), (Ne = c));
      }
      Ka(e);
    } else
      s.subtreeFlags & 8772 && o !== null ? ((o.return = s), (O = o)) : Ka(e);
  }
}
function Ka(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ne || Qs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ne)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : qe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && Ra(t, o, r);
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
                Ra(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
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
                    var m = p.dehydrated;
                    m !== null && dr(m);
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
              throw Error(b(163));
          }
        Ne || (t.flags & 512 && El(t));
      } catch (h) {
        oe(t, t.return, h);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (O = n));
      break;
    }
    O = t.return;
  }
}
function qa(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (O = n));
      break;
    }
    O = t.return;
  }
}
function Ya(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Qs(4, t);
          } catch (u) {
            oe(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              oe(t, s, u);
            }
          }
          var o = t.return;
          try {
            El(t);
          } catch (u) {
            oe(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            El(t);
          } catch (u) {
            oe(t, i, u);
          }
      }
    } catch (u) {
      oe(t, t.return, u);
    }
    if (t === e) {
      O = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (O = a));
      break;
    }
    O = t.return;
  }
}
var Am = Math.ceil,
  _s = xt.ReactCurrentDispatcher,
  ji = xt.ReactCurrentOwner,
  We = xt.ReactCurrentBatchConfig,
  Q = 0,
  fe = null,
  ie = null,
  ge = 0,
  Pe = 0,
  vn = Ut(0),
  ce = 0,
  Sr = null,
  Zt = 0,
  Ks = 0,
  ki = 0,
  sr = null,
  Me = null,
  Ci = 0,
  Rn = 1 / 0,
  ut = null,
  Ts = !1,
  Ll = null,
  Rt = null,
  Qr = !1,
  Et = null,
  Rs = 0,
  or = 0,
  _l = null,
  ss = -1,
  os = 0;
function Ce() {
  return Q & 6 ? le() : ss !== -1 ? ss : (ss = le());
}
function Pt(e) {
  return e.mode & 1
    ? Q & 2 && ge !== 0
      ? ge & -ge
      : ym.transition !== null
        ? (os === 0 && (os = rc()), os)
        : ((e = K),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : cc(e.type))),
          e)
    : 1;
}
function Ze(e, t, n, r) {
  if (50 < or) throw ((or = 0), (_l = null), Error(b(185)));
  (Er(e, n, r),
    (!(Q & 2) || e !== fe) &&
      (e === fe && (!(Q & 2) && (Ks |= n), ce === 4 && kt(e, ge)),
      Re(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((Rn = le() + 500), Ws && zt())));
}
function Re(e, t) {
  var n = e.callbackNode;
  yp(e, t);
  var r = hs(e, e === fe ? ge : 0);
  if (r === 0)
    (n !== null && oa(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && oa(n), t === 1))
      (e.tag === 0 ? gm(Ja.bind(null, e)) : Lc(Ja.bind(null, e)),
        fm(function () {
          !(Q & 6) && zt();
        }),
        (n = null));
    else {
      switch (sc(r)) {
        case 1:
          n = Jl;
          break;
        case 4:
          n = tc;
          break;
        case 16:
          n = ms;
          break;
        case 536870912:
          n = nc;
          break;
        default:
          n = ms;
      }
      n = bd(n, wd.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function wd(e, t) {
  if (((ss = -1), (os = 0), Q & 6)) throw Error(b(327));
  var n = e.callbackNode;
  if (Cn() && e.callbackNode !== n) return null;
  var r = hs(e, e === fe ? ge : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ps(e, r);
  else {
    t = r;
    var s = Q;
    Q |= 2;
    var o = Sd();
    (fe !== e || ge !== t) && ((ut = null), (Rn = le() + 500), Kt(e, t));
    do
      try {
        Im();
        break;
      } catch (a) {
        Nd(e, a);
      }
    while (1);
    (ci(),
      (_s.current = o),
      (Q = s),
      ie !== null ? (t = 0) : ((fe = null), (ge = 0), (t = ce)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = rl(e)), s !== 0 && ((r = s), (t = Tl(e, s)))), t === 1)
    )
      throw ((n = Sr), Kt(e, 0), kt(e, r), Re(e, le()), n);
    if (t === 6) kt(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !Om(s) &&
          ((t = Ps(e, r)),
          t === 2 && ((o = rl(e)), o !== 0 && ((r = o), (t = Tl(e, o)))),
          t === 1))
      )
        throw ((n = Sr), Kt(e, 0), kt(e, r), Re(e, le()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(b(345));
        case 2:
          Ht(e, Me, ut);
          break;
        case 3:
          if (
            (kt(e, r), (r & 130023424) === r && ((t = Ci + 500 - le()), 10 < t))
          ) {
            if (hs(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              (Ce(), (e.pingedLanes |= e.suspendedLanes & s));
              break;
            }
            e.timeoutHandle = dl(Ht.bind(null, e, Me, ut), t);
            break;
          }
          Ht(e, Me, ut);
          break;
        case 4:
          if ((kt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var i = 31 - Xe(r);
            ((o = 1 << i), (i = t[i]), i > s && (s = i), (r &= ~o));
          }
          if (
            ((r = s),
            (r = le() - r),
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
                          : 1960 * Am(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = dl(Ht.bind(null, e, Me, ut), r);
            break;
          }
          Ht(e, Me, ut);
          break;
        case 5:
          Ht(e, Me, ut);
          break;
        default:
          throw Error(b(329));
      }
    }
  }
  return (Re(e, le()), e.callbackNode === n ? wd.bind(null, e) : null);
}
function Tl(e, t) {
  var n = sr;
  return (
    e.current.memoizedState.isDehydrated && (Kt(e, t).flags |= 256),
    (e = Ps(e, t)),
    e !== 2 && ((t = Me), (Me = n), t !== null && Rl(t)),
    e
  );
}
function Rl(e) {
  Me === null ? (Me = e) : Me.push.apply(Me, e);
}
function Om(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            o = s.getSnapshot;
          s = s.value;
          try {
            if (!tt(o(), s)) return !1;
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
function kt(e, t) {
  for (
    t &= ~ki,
      t &= ~Ks,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Xe(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Ja(e) {
  if (Q & 6) throw Error(b(327));
  Cn();
  var t = hs(e, 0);
  if (!(t & 1)) return (Re(e, le()), null);
  var n = Ps(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = rl(e);
    r !== 0 && ((t = r), (n = Tl(e, r)));
  }
  if (n === 1) throw ((n = Sr), Kt(e, 0), kt(e, t), Re(e, le()), n);
  if (n === 6) throw Error(b(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ht(e, Me, ut),
    Re(e, le()),
    null
  );
}
function Ei(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    ((Q = n), Q === 0 && ((Rn = le() + 500), Ws && zt()));
  }
}
function en(e) {
  Et !== null && Et.tag === 0 && !(Q & 6) && Cn();
  var t = Q;
  Q |= 1;
  var n = We.transition,
    r = K;
  try {
    if (((We.transition = null), (K = 1), e)) return e();
  } finally {
    ((K = r), (We.transition = n), (Q = t), !(Q & 6) && zt());
  }
}
function bi() {
  ((Pe = vn.current), Z(vn));
}
function Kt(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), dm(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((ii(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && ws());
          break;
        case 3:
          (_n(), Z(_e), Z(je), gi());
          break;
        case 5:
          hi(r);
          break;
        case 4:
          _n();
          break;
        case 13:
          Z(ne);
          break;
        case 19:
          Z(ne);
          break;
        case 10:
          di(r.type._context);
          break;
        case 22:
        case 23:
          bi();
      }
      n = n.return;
    }
  if (
    ((fe = e),
    (ie = e = At(e.current, null)),
    (ge = Pe = t),
    (ce = 0),
    (Sr = null),
    (ki = Ks = Zt = 0),
    (Me = sr = null),
    Vt !== null)
  ) {
    for (t = 0; t < Vt.length; t++)
      if (((n = Vt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          ((o.next = s), (r.next = i));
        }
        n.pending = r;
      }
    Vt = null;
  }
  return e;
}
function Nd(e, t) {
  do {
    var n = ie;
    try {
      if ((ci(), (ts.current = Ls), Ms)) {
        for (var r = re.memoizedState; r !== null; ) {
          var s = r.queue;
          (s !== null && (s.pending = null), (r = r.next));
        }
        Ms = !1;
      }
      if (
        ((Xt = 0),
        (de = ue = re = null),
        (nr = !1),
        (vr = 0),
        (ji.current = null),
        n === null || n.return === null)
      ) {
        ((ce = 1), (Sr = t), (ie = null));
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = ge),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            p = a,
            m = p.tag;
          if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = p.alternate;
            h
              ? ((p.updateQueue = h.updateQueue),
                (p.memoizedState = h.memoizedState),
                (p.lanes = h.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var j = Ua(i);
          if (j !== null) {
            ((j.flags &= -257),
              za(j, i, a, o, t),
              j.mode & 1 && Ia(o, c, t),
              (t = j),
              (u = c));
            var y = t.updateQueue;
            if (y === null) {
              var x = new Set();
              (x.add(u), (t.updateQueue = x));
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              (Ia(o, c, t), Mi());
              break e;
            }
            u = Error(b(426));
          }
        } else if (ee && a.mode & 1) {
          var k = Ua(i);
          if (k !== null) {
            (!(k.flags & 65536) && (k.flags |= 256),
              za(k, i, a, o, t),
              ai(Tn(u, a)));
            break e;
          }
        }
        ((o = u = Tn(u, a)),
          ce !== 4 && (ce = 2),
          sr === null ? (sr = [o]) : sr.push(o),
          (o = i));
        do {
          switch (o.tag) {
            case 3:
              ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
              var f = sd(o, u, t);
              Ta(o, f);
              break e;
            case 1:
              a = u;
              var d = o.type,
                g = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Rt === null || !Rt.has(g))))
              ) {
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var v = od(o, a, t);
                Ta(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      kd(n);
    } catch (E) {
      ((t = E), ie === n && n !== null && (ie = n = n.return));
      continue;
    }
    break;
  } while (1);
}
function Sd() {
  var e = _s.current;
  return ((_s.current = Ls), e === null ? Ls : e);
}
function Mi() {
  ((ce === 0 || ce === 3 || ce === 2) && (ce = 4),
    fe === null || (!(Zt & 268435455) && !(Ks & 268435455)) || kt(fe, ge));
}
function Ps(e, t) {
  var n = Q;
  Q |= 2;
  var r = Sd();
  (fe !== e || ge !== t) && ((ut = null), Kt(e, t));
  do
    try {
      Dm();
      break;
    } catch (s) {
      Nd(e, s);
    }
  while (1);
  if ((ci(), (Q = n), (_s.current = r), ie !== null)) throw Error(b(261));
  return ((fe = null), (ge = 0), ce);
}
function Dm() {
  for (; ie !== null; ) jd(ie);
}
function Im() {
  for (; ie !== null && !ap(); ) jd(ie);
}
function jd(e) {
  var t = Ed(e.alternate, e, Pe);
  ((e.memoizedProps = e.pendingProps),
    t === null ? kd(e) : (ie = t),
    (ji.current = null));
}
function kd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = _m(n, t)), n !== null)) {
        ((n.flags &= 32767), (ie = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ce = 6), (ie = null));
        return;
      }
    } else if (((n = Lm(n, t, Pe)), n !== null)) {
      ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  ce === 0 && (ce = 5);
}
function Ht(e, t, n) {
  var r = K,
    s = We.transition;
  try {
    ((We.transition = null), (K = 1), Um(e, t, n, r));
  } finally {
    ((We.transition = s), (K = r));
  }
  return null;
}
function Um(e, t, n, r) {
  do Cn();
  while (Et !== null);
  if (Q & 6) throw Error(b(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(b(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var o = n.lanes | n.childLanes;
  if (
    (xp(e, o),
    e === fe && ((ie = fe = null), (ge = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Qr ||
      ((Qr = !0),
      bd(ms, function () {
        return (Cn(), null);
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ((o = We.transition), (We.transition = null));
    var i = K;
    K = 1;
    var a = Q;
    ((Q |= 4),
      (ji.current = null),
      Rm(e, n),
      xd(n, e),
      sm(ul),
      (gs = !!al),
      (ul = al = null),
      (e.current = n),
      Pm(n),
      up(),
      (Q = a),
      (K = i),
      (We.transition = o));
  } else e.current = n;
  if (
    (Qr && ((Qr = !1), (Et = e), (Rs = s)),
    (o = e.pendingLanes),
    o === 0 && (Rt = null),
    fp(n.stateNode),
    Re(e, le()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest }));
  if (Ts) throw ((Ts = !1), (e = Ll), (Ll = null), e);
  return (
    Rs & 1 && e.tag !== 0 && Cn(),
    (o = e.pendingLanes),
    o & 1 ? (e === _l ? or++ : ((or = 0), (_l = e))) : (or = 0),
    zt(),
    null
  );
}
function Cn() {
  if (Et !== null) {
    var e = sc(Rs),
      t = We.transition,
      n = K;
    try {
      if (((We.transition = null), (K = 16 > e ? 16 : e), Et === null))
        var r = !1;
      else {
        if (((e = Et), (Et = null), (Rs = 0), Q & 6)) throw Error(b(331));
        var s = Q;
        for (Q |= 4, O = e.current; O !== null; ) {
          var o = O,
            i = o.child;
          if (O.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var c = a[u];
                for (O = c; O !== null; ) {
                  var p = O;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rr(8, p, o);
                  }
                  var m = p.child;
                  if (m !== null) ((m.return = p), (O = m));
                  else
                    for (; O !== null; ) {
                      p = O;
                      var h = p.sibling,
                        j = p.return;
                      if ((hd(p), p === c)) {
                        O = null;
                        break;
                      }
                      if (h !== null) {
                        ((h.return = j), (O = h));
                        break;
                      }
                      O = j;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
                  do {
                    var k = x.sibling;
                    ((x.sibling = null), (x = k));
                  } while (x !== null);
                }
              }
              O = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) ((i.return = o), (O = i));
          else
            e: for (; O !== null; ) {
              if (((o = O), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    rr(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                ((f.return = o.return), (O = f));
                break e;
              }
              O = o.return;
            }
        }
        var d = e.current;
        for (O = d; O !== null; ) {
          i = O;
          var g = i.child;
          if (i.subtreeFlags & 2064 && g !== null) ((g.return = i), (O = g));
          else
            e: for (i = d; O !== null; ) {
              if (((a = O), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qs(9, a);
                  }
                } catch (E) {
                  oe(a, a.return, E);
                }
              if (a === i) {
                O = null;
                break e;
              }
              var v = a.sibling;
              if (v !== null) {
                ((v.return = a.return), (O = v));
                break e;
              }
              O = a.return;
            }
        }
        if (
          ((Q = s), zt(), it && typeof it.onPostCommitFiberRoot == "function")
        )
          try {
            it.onPostCommitFiberRoot(zs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((K = n), (We.transition = t));
    }
  }
  return !1;
}
function Xa(e, t, n) {
  ((t = Tn(n, t)),
    (t = sd(e, t, 1)),
    (e = Tt(e, t, 1)),
    (t = Ce()),
    e !== null && (Er(e, 1, t), Re(e, t)));
}
function oe(e, t, n) {
  if (e.tag === 3) Xa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Xa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Rt === null || !Rt.has(r)))
        ) {
          ((e = Tn(n, e)),
            (e = od(t, e, 1)),
            (t = Tt(t, e, 1)),
            (e = Ce()),
            t !== null && (Er(t, 1, e), Re(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function zm(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Ce()),
    (e.pingedLanes |= e.suspendedLanes & n),
    fe === e &&
      (ge & n) === n &&
      (ce === 4 || (ce === 3 && (ge & 130023424) === ge && 500 > le() - Ci)
        ? Kt(e, 0)
        : (ki |= n)),
    Re(e, t));
}
function Cd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ir), (Ir <<= 1), !(Ir & 130023424) && (Ir = 4194304))
      : (t = 1));
  var n = Ce();
  ((e = gt(e, t)), e !== null && (Er(e, t, n), Re(e, n)));
}
function Fm(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Cd(e, n));
}
function Bm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(b(314));
  }
  (r !== null && r.delete(t), Cd(e, n));
}
var Ed;
Ed = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || _e.current) Le = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Le = !1), Mm(e, t, n));
      Le = !!(e.flags & 131072);
    }
  else ((Le = !1), ee && t.flags & 1048576 && _c(t, js, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (rs(e, t), (e = t.pendingProps));
      var s = bn(t, je.current);
      (kn(t, n), (s = xi(null, t, r, e, s, n)));
      var o = vi();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Te(r) ? ((o = !0), Ns(t)) : (o = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            pi(t),
            (s.updater = Gs),
            (t.stateNode = s),
            (s._reactInternals = t),
            xl(t, r, e, n),
            (t = Nl(null, t, r, !0, o, n)))
          : ((t.tag = 0), ee && o && li(t), ke(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (rs(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = Hm(r)),
          (e = qe(r, e)),
          s)
        ) {
          case 0:
            t = wl(null, t, r, e, n);
            break e;
          case 1:
            t = $a(null, t, r, e, n);
            break e;
          case 11:
            t = Fa(null, t, r, e, n);
            break e;
          case 14:
            t = Ba(null, t, r, qe(r.type, e), n);
            break e;
        }
        throw Error(b(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : qe(r, s)),
        wl(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : qe(r, s)),
        $a(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((ud(t), e === null)) throw Error(b(387));
        ((r = t.pendingProps),
          (o = t.memoizedState),
          (s = o.element),
          Dc(e, t),
          Es(t, r, null, n));
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
            ((s = Tn(Error(b(423)), t)), (t = Ha(e, t, r, n, s)));
            break e;
          } else if (r !== s) {
            ((s = Tn(Error(b(424)), t)), (t = Ha(e, t, r, n, s)));
            break e;
          } else
            for (
              Ae = _t(t.stateNode.containerInfo.firstChild),
                Oe = t,
                ee = !0,
                Je = null,
                n = Ac(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Mn(), r === s)) {
            t = yt(e, t, n);
            break e;
          }
          ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ic(t),
        e === null && hl(t),
        (r = t.type),
        (s = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = s.children),
        cl(r, s) ? (i = null) : o !== null && cl(r, o) && (t.flags |= 32),
        ad(e, t),
        ke(e, t, i, n),
        t.child
      );
    case 6:
      return (e === null && hl(t), null);
    case 13:
      return cd(e, t, n);
    case 4:
      return (
        mi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ln(t, null, r, n)) : ke(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : qe(r, s)),
        Fa(e, t, r, s, n)
      );
    case 7:
      return (ke(e, t, t.pendingProps, n), t.child);
    case 8:
      return (ke(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (ke(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (o = t.memoizedProps),
          (i = s.value),
          J(ks, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (tt(o.value, i)) {
            if (o.children === s.children && !_e.current) {
              t = yt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      ((u = pt(-1, n & -n)), (u.tag = 2));
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var p = c.pending;
                        (p === null
                          ? (u.next = u)
                          : ((u.next = p.next), (p.next = u)),
                          (c.pending = u));
                      }
                    }
                    ((o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      gl(o.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(b(341));
                ((i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  gl(i, n, t),
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
        (ke(e, t, s.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        kn(t, n),
        (s = Ve(s)),
        (r = r(s)),
        (t.flags |= 1),
        ke(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = qe(r, t.pendingProps)),
        (s = qe(r.type, s)),
        Ba(e, t, r, s, n)
      );
    case 15:
      return ld(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : qe(r, s)),
        rs(e, t),
        (t.tag = 1),
        Te(r) ? ((e = !0), Ns(t)) : (e = !1),
        kn(t, n),
        rd(t, r, s),
        xl(t, r, s, n),
        Nl(null, t, r, !0, e, n)
      );
    case 19:
      return dd(e, t, n);
    case 22:
      return id(e, t, n);
  }
  throw Error(b(156, t.tag));
};
function bd(e, t) {
  return ec(e, t);
}
function $m(e, t, n, r) {
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
function He(e, t, n, r) {
  return new $m(e, t, n, r);
}
function Li(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Hm(e) {
  if (typeof e == "function") return Li(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Kl)) return 11;
    if (e === ql) return 14;
  }
  return 2;
}
function At(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = He(e.tag, t, e.key, e.mode)),
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
function ls(e, t, n, r, s, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Li(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case un:
        return qt(n.children, s, o, t);
      case Ql:
        ((i = 8), (s |= 8));
        break;
      case $o:
        return (
          (e = He(12, n, t, s | 2)),
          (e.elementType = $o),
          (e.lanes = o),
          e
        );
      case Ho:
        return ((e = He(13, n, t, s)), (e.elementType = Ho), (e.lanes = o), e);
      case Wo:
        return ((e = He(19, n, t, s)), (e.elementType = Wo), (e.lanes = o), e);
      case Iu:
        return qs(n, s, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ou:
              i = 10;
              break e;
            case Du:
              i = 9;
              break e;
            case Kl:
              i = 11;
              break e;
            case ql:
              i = 14;
              break e;
            case Nt:
              ((i = 16), (r = null));
              break e;
          }
        throw Error(b(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = He(i, n, t, s)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = o),
    t
  );
}
function qt(e, t, n, r) {
  return ((e = He(7, e, r, t)), (e.lanes = n), e);
}
function qs(e, t, n, r) {
  return (
    (e = He(22, e, r, t)),
    (e.elementType = Iu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Po(e, t, n) {
  return ((e = He(6, e, null, t)), (e.lanes = n), e);
}
function Ao(e, t, n) {
  return (
    (t = He(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Wm(e, t, n, r, s) {
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
    (this.eventTimes = mo(0)),
    (this.expirationTimes = mo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = mo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null));
}
function _i(e, t, n, r, s, o, i, a, u) {
  return (
    (e = new Wm(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = He(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    pi(o),
    e
  );
}
function Vm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: an,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Md(e) {
  if (!e) return Dt;
  e = e._reactInternals;
  e: {
    if (sn(e) !== e || e.tag !== 1) throw Error(b(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(b(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n)) return Mc(e, n, t);
  }
  return t;
}
function Ld(e, t, n, r, s, o, i, a, u) {
  return (
    (e = _i(n, r, !0, e, s, o, i, a, u)),
    (e.context = Md(null)),
    (n = e.current),
    (r = Ce()),
    (s = Pt(n)),
    (o = pt(r, s)),
    (o.callback = t ?? null),
    Tt(n, o, s),
    (e.current.lanes = s),
    Er(e, s, r),
    Re(e, r),
    e
  );
}
function Ys(e, t, n, r) {
  var s = t.current,
    o = Ce(),
    i = Pt(s);
  return (
    (n = Md(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = pt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Tt(s, t, i)),
    e !== null && (Ze(e, s, i, o), es(e, s, i)),
    i
  );
}
function As(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Za(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ti(e, t) {
  (Za(e, t), (e = e.alternate) && Za(e, t));
}
function Gm() {
  return null;
}
var _d =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ri(e) {
  this._internalRoot = e;
}
Js.prototype.render = Ri.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(b(409));
  Ys(e, t, null, null);
};
Js.prototype.unmount = Ri.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (en(function () {
      Ys(null, e, null, null);
    }),
      (t[ht] = null));
  }
};
function Js(e) {
  this._internalRoot = e;
}
Js.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ic();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < jt.length && t !== 0 && t < jt[n].priority; n++);
    (jt.splice(n, 0, e), n === 0 && uc(e));
  }
};
function Pi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Xs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function eu() {}
function Qm(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = As(i);
        o.call(c);
      };
    }
    var i = Ld(t, r, e, 0, null, !1, !1, "", eu);
    return (
      (e._reactRootContainer = i),
      (e[ht] = i.current),
      mr(e.nodeType === 8 ? e.parentNode : e),
      en(),
      i
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = As(u);
      a.call(c);
    };
  }
  var u = _i(e, 0, !1, null, null, !1, !1, "", eu);
  return (
    (e._reactRootContainer = u),
    (e[ht] = u.current),
    mr(e.nodeType === 8 ? e.parentNode : e),
    en(function () {
      Ys(t, u, n, r);
    }),
    u
  );
}
function Zs(e, t, n, r, s) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var u = As(i);
        a.call(u);
      };
    }
    Ys(t, i, e, s);
  } else i = Qm(n, t, e, s, r);
  return As(i);
}
oc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = qn(t.pendingLanes);
        n !== 0 &&
          (Xl(t, n | 1), Re(t, le()), !(Q & 6) && ((Rn = le() + 500), zt()));
      }
      break;
    case 13:
      (en(function () {
        var r = gt(e, 1);
        if (r !== null) {
          var s = Ce();
          Ze(r, e, 1, s);
        }
      }),
        Ti(e, 1));
  }
};
Zl = function (e) {
  if (e.tag === 13) {
    var t = gt(e, 134217728);
    if (t !== null) {
      var n = Ce();
      Ze(t, e, 134217728, n);
    }
    Ti(e, 134217728);
  }
};
lc = function (e) {
  if (e.tag === 13) {
    var t = Pt(e),
      n = gt(e, t);
    if (n !== null) {
      var r = Ce();
      Ze(n, e, t, r);
    }
    Ti(e, t);
  }
};
ic = function () {
  return K;
};
ac = function (e, t) {
  var n = K;
  try {
    return ((K = e), t());
  } finally {
    K = n;
  }
};
el = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Qo(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var s = Hs(r);
            if (!s) throw Error(b(90));
            (zu(r), Qo(r, s));
          }
        }
      }
      break;
    case "textarea":
      Bu(e, n);
      break;
    case "select":
      ((t = n.value), t != null && wn(e, !!n.multiple, t, !1));
  }
};
Ku = Ei;
qu = en;
var Km = { usingClientEntryPoint: !1, Events: [Mr, pn, Hs, Gu, Qu, Ei] },
  Vn = {
    findFiberByHostInstance: Wt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  qm = {
    bundleType: Vn.bundleType,
    version: Vn.version,
    rendererPackageName: Vn.rendererPackageName,
    rendererConfig: Vn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Xu(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Vn.findFiberByHostInstance || Gm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Kr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Kr.isDisabled && Kr.supportsFiber)
    try {
      ((zs = Kr.inject(qm)), (it = Kr));
    } catch {}
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Km;
Ue.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Pi(t)) throw Error(b(200));
  return Vm(e, t, null, n);
};
Ue.createRoot = function (e, t) {
  if (!Pi(e)) throw Error(b(299));
  var n = !1,
    r = "",
    s = _d;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = _i(e, 1, !1, null, null, n, !1, r, s)),
    (e[ht] = t.current),
    mr(e.nodeType === 8 ? e.parentNode : e),
    new Ri(t)
  );
};
Ue.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(b(188))
      : ((e = Object.keys(e).join(",")), Error(b(268, e)));
  return ((e = Xu(t)), (e = e === null ? null : e.stateNode), e);
};
Ue.flushSync = function (e) {
  return en(e);
};
Ue.hydrate = function (e, t, n) {
  if (!Xs(t)) throw Error(b(200));
  return Zs(null, e, t, !0, n);
};
Ue.hydrateRoot = function (e, t, n) {
  if (!Pi(e)) throw Error(b(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    o = "",
    i = _d;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Ld(t, null, e, 1, n ?? null, s, !1, o, i)),
    (e[ht] = t.current),
    mr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s));
  return new Js(t);
};
Ue.render = function (e, t, n) {
  if (!Xs(t)) throw Error(b(200));
  return Zs(null, e, t, !1, n);
};
Ue.unmountComponentAtNode = function (e) {
  if (!Xs(e)) throw Error(b(40));
  return e._reactRootContainer
    ? (en(function () {
        Zs(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[ht] = null));
        });
      }),
      !0)
    : !1;
};
Ue.unstable_batchedUpdates = Ei;
Ue.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Xs(n)) throw Error(b(200));
  if (e == null || e._reactInternals === void 0) throw Error(b(38));
  return Zs(e, t, n, !1, r);
};
Ue.version = "18.3.1-next-f1338f8080-20240426";
function Td() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Td);
    } catch (e) {
      console.error(e);
    }
}
(Td(), (Tu.exports = Ue));
var Ym = Tu.exports,
  tu = Ym;
((Fo.createRoot = tu.createRoot), (Fo.hydrateRoot = tu.hydrateRoot));
function Rd(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Jm } = Object.prototype,
  { getPrototypeOf: Ai } = Object,
  eo = ((e) => (t) => {
    const n = Jm.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  nt = (e) => ((e = e.toLowerCase()), (t) => eo(t) === e),
  to = (e) => (t) => typeof t === e,
  { isArray: Dn } = Array,
  jr = to("undefined");
function Xm(e) {
  return (
    e !== null &&
    !jr(e) &&
    e.constructor !== null &&
    !jr(e.constructor) &&
    De(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Pd = nt("ArrayBuffer");
function Zm(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Pd(e.buffer)),
    t
  );
}
const eh = to("string"),
  De = to("function"),
  Ad = to("number"),
  no = (e) => e !== null && typeof e == "object",
  th = (e) => e === !0 || e === !1,
  is = (e) => {
    if (eo(e) !== "object") return !1;
    const t = Ai(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  nh = nt("Date"),
  rh = nt("File"),
  sh = nt("Blob"),
  oh = nt("FileList"),
  lh = (e) => no(e) && De(e.pipe),
  ih = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (De(e.append) &&
          ((t = eo(e)) === "formdata" ||
            (t === "object" &&
              De(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  ah = nt("URLSearchParams"),
  [uh, ch, dh, fh] = ["ReadableStream", "Request", "Response", "Headers"].map(
    nt,
  ),
  ph = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function _r(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), Dn(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let a;
    for (r = 0; r < i; r++) ((a = o[r]), t.call(null, e[a], a, e));
  }
}
function Od(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const Qt = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global)(),
  Dd = (e) => !jr(e) && e !== Qt;
function Pl() {
  const { caseless: e } = (Dd(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && Od(t, s)) || s;
      is(t[o]) && is(r)
        ? (t[o] = Pl(t[o], r))
        : is(r)
          ? (t[o] = Pl({}, r))
          : Dn(r)
            ? (t[o] = r.slice())
            : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && _r(arguments[r], n);
  return t;
}
const mh = (e, t, n, { allOwnKeys: r } = {}) => (
    _r(
      t,
      (s, o) => {
        n && De(s) ? (e[o] = Rd(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r },
    ),
    e
  ),
  hh = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  gh = (e, t, n, r) => {
    ((e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n));
  },
  yh = (e, t, n, r) => {
    let s, o, i;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        ((i = s[o]),
          (!r || r(i, e, t)) && !a[i] && ((t[i] = e[i]), (a[i] = !0)));
      e = n !== !1 && Ai(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  xh = (e, t, n) => {
    ((e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length));
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  vh = (e) => {
    if (!e) return null;
    if (Dn(e)) return e;
    let t = e.length;
    if (!Ad(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  wh = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Ai(Uint8Array)),
  Nh = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  Sh = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  jh = nt("HTMLFormElement"),
  kh = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  nu = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Ch = nt("RegExp"),
  Id = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    (_r(n, (s, o) => {
      let i;
      (i = t(s, o, e)) !== !1 && (r[o] = i || s);
    }),
      Object.defineProperties(e, r));
  },
  Eh = (e) => {
    Id(e, (t, n) => {
      if (De(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (De(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  bh = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return (Dn(e) ? r(e) : r(String(e).split(t)), n);
  },
  Mh = () => {},
  Lh = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Oo = "abcdefghijklmnopqrstuvwxyz",
  ru = "0123456789",
  Ud = { DIGIT: ru, ALPHA: Oo, ALPHA_DIGIT: Oo + Oo.toUpperCase() + ru },
  _h = (e = 16, t = Ud.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function Th(e) {
  return !!(
    e &&
    De(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Rh = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (no(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const o = Dn(r) ? [] : {};
            return (
              _r(r, (i, a) => {
                const u = n(i, s + 1);
                !jr(u) && (o[a] = u);
              }),
              (t[s] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Ph = nt("AsyncFunction"),
  Ah = (e) => e && (no(e) || De(e)) && De(e.then) && De(e.catch),
  zd = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, r) => (
            Qt.addEventListener(
              "message",
              ({ source: s, data: o }) => {
                s === Qt && o === n && r.length && r.shift()();
              },
              !1,
            ),
            (s) => {
              (r.push(s), Qt.postMessage(n, "*"));
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    De(Qt.postMessage),
  ),
  Oh =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Qt)
      : (typeof process < "u" && process.nextTick) || zd,
  S = {
    isArray: Dn,
    isArrayBuffer: Pd,
    isBuffer: Xm,
    isFormData: ih,
    isArrayBufferView: Zm,
    isString: eh,
    isNumber: Ad,
    isBoolean: th,
    isObject: no,
    isPlainObject: is,
    isReadableStream: uh,
    isRequest: ch,
    isResponse: dh,
    isHeaders: fh,
    isUndefined: jr,
    isDate: nh,
    isFile: rh,
    isBlob: sh,
    isRegExp: Ch,
    isFunction: De,
    isStream: lh,
    isURLSearchParams: ah,
    isTypedArray: wh,
    isFileList: oh,
    forEach: _r,
    merge: Pl,
    extend: mh,
    trim: ph,
    stripBOM: hh,
    inherits: gh,
    toFlatObject: yh,
    kindOf: eo,
    kindOfTest: nt,
    endsWith: xh,
    toArray: vh,
    forEachEntry: Nh,
    matchAll: Sh,
    isHTMLForm: jh,
    hasOwnProperty: nu,
    hasOwnProp: nu,
    reduceDescriptors: Id,
    freezeMethods: Eh,
    toObjectSet: bh,
    toCamelCase: kh,
    noop: Mh,
    toFiniteNumber: Lh,
    findKey: Od,
    global: Qt,
    isContextDefined: Dd,
    ALPHABET: Ud,
    generateString: _h,
    isSpecCompliantForm: Th,
    toJSONObject: Rh,
    isAsyncFn: Ph,
    isThenable: Ah,
    setImmediate: zd,
    asap: Oh,
  };
function F(e, t, n, r, s) {
  (Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && ((this.response = s), (this.status = s.status ? s.status : null)));
}
S.inherits(F, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: S.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const Fd = F.prototype,
  Bd = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Bd[e] = { value: e };
});
Object.defineProperties(F, Bd);
Object.defineProperty(Fd, "isAxiosError", { value: !0 });
F.from = (e, t, n, r, s, o) => {
  const i = Object.create(Fd);
  return (
    S.toFlatObject(
      e,
      i,
      function (u) {
        return u !== Error.prototype;
      },
      (a) => a !== "isAxiosError",
    ),
    F.call(i, e.message, t, n, r, s),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const Dh = null;
function Al(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function $d(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function su(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return ((s = $d(s)), !n && o ? "[" + s + "]" : s);
        })
        .join(n ? "." : "")
    : t;
}
function Ih(e) {
  return S.isArray(e) && !e.some(Al);
}
const Uh = S.toFlatObject(S, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ro(e, t, n) {
  if (!S.isObject(e)) throw new TypeError("target must be an object");
  ((t = t || new FormData()),
    (n = S.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (x, k) {
        return !S.isUndefined(k[x]);
      },
    )));
  const r = n.metaTokens,
    s = n.visitor || p,
    o = n.dots,
    i = n.indexes,
    u = (n.Blob || (typeof Blob < "u" && Blob)) && S.isSpecCompliantForm(t);
  if (!S.isFunction(s)) throw new TypeError("visitor must be a function");
  function c(y) {
    if (y === null) return "";
    if (S.isDate(y)) return y.toISOString();
    if (!u && S.isBlob(y))
      throw new F("Blob is not supported. Use a Buffer instead.");
    return S.isArrayBuffer(y) || S.isTypedArray(y)
      ? u && typeof Blob == "function"
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function p(y, x, k) {
    let f = y;
    if (y && !k && typeof y == "object") {
      if (S.endsWith(x, "{}"))
        ((x = r ? x : x.slice(0, -2)), (y = JSON.stringify(y)));
      else if (
        (S.isArray(y) && Ih(y)) ||
        ((S.isFileList(y) || S.endsWith(x, "[]")) && (f = S.toArray(y)))
      )
        return (
          (x = $d(x)),
          f.forEach(function (g, v) {
            !(S.isUndefined(g) || g === null) &&
              t.append(
                i === !0 ? su([x], v, o) : i === null ? x : x + "[]",
                c(g),
              );
          }),
          !1
        );
    }
    return Al(y) ? !0 : (t.append(su(k, x, o), c(y)), !1);
  }
  const m = [],
    h = Object.assign(Uh, {
      defaultVisitor: p,
      convertValue: c,
      isVisitable: Al,
    });
  function j(y, x) {
    if (!S.isUndefined(y)) {
      if (m.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      (m.push(y),
        S.forEach(y, function (f, d) {
          (!(S.isUndefined(f) || f === null) &&
            s.call(t, f, S.isString(d) ? d.trim() : d, x, h)) === !0 &&
            j(f, x ? x.concat(d) : [d]);
        }),
        m.pop());
    }
  }
  if (!S.isObject(e)) throw new TypeError("data must be an object");
  return (j(e), t);
}
function ou(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Oi(e, t) {
  ((this._pairs = []), e && ro(e, this, t));
}
const Hd = Oi.prototype;
Hd.append = function (t, n) {
  this._pairs.push([t, n]);
};
Hd.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, ou);
      }
    : ou;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function zh(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Wd(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || zh;
  S.isFunction(n) && (n = { serialize: n });
  const s = n && n.serialize;
  let o;
  if (
    (s
      ? (o = s(t, n))
      : (o = S.isURLSearchParams(t) ? t.toString() : new Oi(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf("#");
    (i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o));
  }
  return e;
}
class Fh {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    S.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const lu = Fh,
  Vd = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Bh = typeof URLSearchParams < "u" ? URLSearchParams : Oi,
  $h = typeof FormData < "u" ? FormData : null,
  Hh = typeof Blob < "u" ? Blob : null,
  Wh = {
    isBrowser: !0,
    classes: { URLSearchParams: Bh, FormData: $h, Blob: Hh },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Di = typeof window < "u" && typeof document < "u",
  Ol = (typeof navigator == "object" && navigator) || void 0,
  Vh =
    Di &&
    (!Ol || ["ReactNative", "NativeScript", "NS"].indexOf(Ol.product) < 0),
  Gh = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  Qh = (Di && window.location.href) || "http://localhost",
  Kh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Di,
        hasStandardBrowserEnv: Vh,
        hasStandardBrowserWebWorkerEnv: Gh,
        navigator: Ol,
        origin: Qh,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Se = { ...Kh, ...Wh };
function qh(e, t) {
  return ro(
    e,
    new Se.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, o) {
          return Se.isNode && S.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t,
    ),
  );
}
function Yh(e) {
  return S.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0],
  );
}
function Jh(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) ((o = n[r]), (t[o] = e[o]));
  return t;
}
function Gd(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i),
      u = o >= n.length;
    return (
      (i = !i && S.isArray(s) ? s.length : i),
      u
        ? (S.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !a)
        : ((!s[i] || !S.isObject(s[i])) && (s[i] = []),
          t(n, r, s[i], o) && S.isArray(s[i]) && (s[i] = Jh(s[i])),
          !a)
    );
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {};
    return (
      S.forEachEntry(e, (r, s) => {
        t(Yh(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function Xh(e, t, n) {
  if (S.isString(e))
    try {
      return ((t || JSON.parse)(e), S.trim(e));
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ii = {
  transitional: Vd,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        o = S.isObject(t);
      if ((o && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t)))
        return s ? JSON.stringify(Gd(t)) : t;
      if (
        S.isArrayBuffer(t) ||
        S.isBuffer(t) ||
        S.isStream(t) ||
        S.isFile(t) ||
        S.isBlob(t) ||
        S.isReadableStream(t)
      )
        return t;
      if (S.isArrayBufferView(t)) return t.buffer;
      if (S.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let a;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return qh(t, this.formSerializer).toString();
        if ((a = S.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = this.env && this.env.FormData;
          return ro(
            a ? { "files[]": t } : t,
            u && new u(),
            this.formSerializer,
          );
        }
      }
      return o || s ? (n.setContentType("application/json", !1), Xh(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ii.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (S.isResponse(t) || S.isReadableStream(t)) return t;
      if (t && S.isString(t) && ((r && !this.responseType) || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (i)
            throw a.name === "SyntaxError"
              ? F.from(a, F.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Se.classes.FormData, Blob: Se.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
S.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ii.headers[e] = {};
});
const Ui = Ii,
  Zh = S.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  e0 = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (i) {
            ((s = i.indexOf(":")),
              (n = i.substring(0, s).trim().toLowerCase()),
              (r = i.substring(s + 1).trim()),
              !(!n || (t[n] && Zh[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r)));
          }),
      t
    );
  },
  iu = Symbol("internals");
function Gn(e) {
  return e && String(e).trim().toLowerCase();
}
function as(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(as) : String(e);
}
function t0(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const n0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Do(e, t, n, r, s) {
  if (S.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!S.isString(t))) {
    if (S.isString(r)) return t.indexOf(r) !== -1;
    if (S.isRegExp(r)) return r.test(t);
  }
}
function r0(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function s0(e, t) {
  const n = S.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0,
    });
  });
}
class so {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(a, u, c) {
      const p = Gn(u);
      if (!p) throw new Error("header name must be a non-empty string");
      const m = S.findKey(s, p);
      (!m || s[m] === void 0 || c === !0 || (c === void 0 && s[m] !== !1)) &&
        (s[m || u] = as(a));
    }
    const i = (a, u) => S.forEach(a, (c, p) => o(c, p, u));
    if (S.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (S.isString(t) && (t = t.trim()) && !n0(t)) i(e0(t), n);
    else if (S.isHeaders(t)) for (const [a, u] of t.entries()) o(u, a, r);
    else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Gn(t)), t)) {
      const r = S.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return t0(s);
        if (S.isFunction(n)) return n.call(this, s, r);
        if (S.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Gn(t)), t)) {
      const r = S.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Do(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (((i = Gn(i)), i)) {
        const a = S.findKey(r, i);
        a && (!n || Do(r, r[a], a, n)) && (delete r[a], (s = !0));
      }
    }
    return (S.isArray(t) ? t.forEach(o) : o(t), s);
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Do(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      S.forEach(this, (s, o) => {
        const i = S.findKey(r, o);
        if (i) {
          ((n[i] = as(s)), delete n[o]);
          return;
        }
        const a = t ? r0(o) : String(o).trim();
        (a !== o && delete n[o], (n[a] = as(s)), (r[a] = !0));
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      S.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && S.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return (n.forEach((s) => r.set(s)), r);
  }
  static accessor(t) {
    const r = (this[iu] = this[iu] = { accessors: {} }).accessors,
      s = this.prototype;
    function o(i) {
      const a = Gn(i);
      r[a] || (s0(s, i), (r[a] = !0));
    }
    return (S.isArray(t) ? t.forEach(o) : o(t), this);
  }
}
so.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
S.reduceDescriptors(so.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
S.freezeMethods(so);
const et = so;
function Io(e, t) {
  const n = this || Ui,
    r = t || n,
    s = et.from(r.headers);
  let o = r.data;
  return (
    S.forEach(e, function (a) {
      o = a.call(n, o, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    o
  );
}
function Qd(e) {
  return !!(e && e.__CANCEL__);
}
function In(e, t, n) {
  (F.call(this, e ?? "canceled", F.ERR_CANCELED, t, n),
    (this.name = "CanceledError"));
}
S.inherits(In, F, { __CANCEL__: !0 });
function Kd(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new F(
          "Request failed with status code " + n.status,
          [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n,
        ),
      );
}
function o0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function l0(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const c = Date.now(),
        p = r[o];
      (i || (i = c), (n[s] = u), (r[s] = c));
      let m = o,
        h = 0;
      for (; m !== s; ) ((h += n[m++]), (m = m % e));
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), c - i < t)) return;
      const j = p && c - p;
      return j ? Math.round((h * 1e3) / j) : void 0;
    }
  );
}
function i0(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    o;
  const i = (c, p = Date.now()) => {
    ((n = p), (s = null), o && (clearTimeout(o), (o = null)), e.apply(null, c));
  };
  return [
    (...c) => {
      const p = Date.now(),
        m = p - n;
      m >= r
        ? i(c, p)
        : ((s = c),
          o ||
            (o = setTimeout(() => {
              ((o = null), i(s));
            }, r - m)));
    },
    () => s && i(s),
  ];
}
const Os = (e, t, n = 3) => {
    let r = 0;
    const s = l0(50, 250);
    return i0((o) => {
      const i = o.loaded,
        a = o.lengthComputable ? o.total : void 0,
        u = i - r,
        c = s(u),
        p = i <= a;
      r = i;
      const m = {
        loaded: i,
        total: a,
        progress: a ? i / a : void 0,
        bytes: u,
        rate: c || void 0,
        estimated: c && a && p ? (a - i) / c : void 0,
        event: o,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(m);
    }, n);
  },
  au = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  uu =
    (e) =>
    (...t) =>
      S.asap(() => e(...t)),
  a0 = Se.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, Se.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(Se.origin),
        Se.navigator && /(msie|trident)/i.test(Se.navigator.userAgent),
      )
    : () => !0,
  u0 = Se.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, o) {
          const i = [e + "=" + encodeURIComponent(t)];
          (S.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
            S.isString(r) && i.push("path=" + r),
            S.isString(s) && i.push("domain=" + s),
            o === !0 && i.push("secure"),
            (document.cookie = i.join("; ")));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function c0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function d0(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function qd(e, t) {
  return e && !c0(t) ? d0(e, t) : t;
}
const cu = (e) => (e instanceof et ? { ...e } : e);
function tn(e, t) {
  t = t || {};
  const n = {};
  function r(c, p, m, h) {
    return S.isPlainObject(c) && S.isPlainObject(p)
      ? S.merge.call({ caseless: h }, c, p)
      : S.isPlainObject(p)
        ? S.merge({}, p)
        : S.isArray(p)
          ? p.slice()
          : p;
  }
  function s(c, p, m, h) {
    if (S.isUndefined(p)) {
      if (!S.isUndefined(c)) return r(void 0, c, m, h);
    } else return r(c, p, m, h);
  }
  function o(c, p) {
    if (!S.isUndefined(p)) return r(void 0, p);
  }
  function i(c, p) {
    if (S.isUndefined(p)) {
      if (!S.isUndefined(c)) return r(void 0, c);
    } else return r(void 0, p);
  }
  function a(c, p, m) {
    if (m in t) return r(c, p);
    if (m in e) return r(void 0, c);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (c, p, m) => s(cu(c), cu(p), m, !0),
  };
  return (
    S.forEach(Object.keys(Object.assign({}, e, t)), function (p) {
      const m = u[p] || s,
        h = m(e[p], t[p], p);
      (S.isUndefined(h) && m !== a) || (n[p] = h);
    }),
    n
  );
}
const Yd = (e) => {
    const t = tn({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: o,
      headers: i,
      auth: a,
    } = t;
    ((t.headers = i = et.from(i)),
      (t.url = Wd(qd(t.baseURL, t.url), e.params, e.paramsSerializer)),
      a &&
        i.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : ""),
            ),
        ));
    let u;
    if (S.isFormData(n)) {
      if (Se.hasStandardBrowserEnv || Se.hasStandardBrowserWebWorkerEnv)
        i.setContentType(void 0);
      else if ((u = i.getContentType()) !== !1) {
        const [c, ...p] = u
          ? u
              .split(";")
              .map((m) => m.trim())
              .filter(Boolean)
          : [];
        i.setContentType([c || "multipart/form-data", ...p].join("; "));
      }
    }
    if (
      Se.hasStandardBrowserEnv &&
      (r && S.isFunction(r) && (r = r(t)), r || (r !== !1 && a0(t.url)))
    ) {
      const c = s && o && u0.read(o);
      c && i.set(s, c);
    }
    return t;
  },
  f0 = typeof XMLHttpRequest < "u",
  p0 =
    f0 &&
    function (e) {
      return new Promise(function (n, r) {
        const s = Yd(e);
        let o = s.data;
        const i = et.from(s.headers).normalize();
        let { responseType: a, onUploadProgress: u, onDownloadProgress: c } = s,
          p,
          m,
          h,
          j,
          y;
        function x() {
          (j && j(),
            y && y(),
            s.cancelToken && s.cancelToken.unsubscribe(p),
            s.signal && s.signal.removeEventListener("abort", p));
        }
        let k = new XMLHttpRequest();
        (k.open(s.method.toUpperCase(), s.url, !0), (k.timeout = s.timeout));
        function f() {
          if (!k) return;
          const g = et.from(
              "getAllResponseHeaders" in k && k.getAllResponseHeaders(),
            ),
            E = {
              data:
                !a || a === "text" || a === "json"
                  ? k.responseText
                  : k.response,
              status: k.status,
              statusText: k.statusText,
              headers: g,
              config: e,
              request: k,
            };
          (Kd(
            function (N) {
              (n(N), x());
            },
            function (N) {
              (r(N), x());
            },
            E,
          ),
            (k = null));
        }
        ("onloadend" in k
          ? (k.onloadend = f)
          : (k.onreadystatechange = function () {
              !k ||
                k.readyState !== 4 ||
                (k.status === 0 &&
                  !(k.responseURL && k.responseURL.indexOf("file:") === 0)) ||
                setTimeout(f);
            }),
          (k.onabort = function () {
            k &&
              (r(new F("Request aborted", F.ECONNABORTED, e, k)), (k = null));
          }),
          (k.onerror = function () {
            (r(new F("Network Error", F.ERR_NETWORK, e, k)), (k = null));
          }),
          (k.ontimeout = function () {
            let v = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const E = s.transitional || Vd;
            (s.timeoutErrorMessage && (v = s.timeoutErrorMessage),
              r(
                new F(
                  v,
                  E.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
                  e,
                  k,
                ),
              ),
              (k = null));
          }),
          o === void 0 && i.setContentType(null),
          "setRequestHeader" in k &&
            S.forEach(i.toJSON(), function (v, E) {
              k.setRequestHeader(E, v);
            }),
          S.isUndefined(s.withCredentials) ||
            (k.withCredentials = !!s.withCredentials),
          a && a !== "json" && (k.responseType = s.responseType),
          c && (([h, y] = Os(c, !0)), k.addEventListener("progress", h)),
          u &&
            k.upload &&
            (([m, j] = Os(u)),
            k.upload.addEventListener("progress", m),
            k.upload.addEventListener("loadend", j)),
          (s.cancelToken || s.signal) &&
            ((p = (g) => {
              k &&
                (r(!g || g.type ? new In(null, e, k) : g),
                k.abort(),
                (k = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(p),
            s.signal &&
              (s.signal.aborted
                ? p()
                : s.signal.addEventListener("abort", p))));
        const d = o0(s.url);
        if (d && Se.protocols.indexOf(d) === -1) {
          r(new F("Unsupported protocol " + d + ":", F.ERR_BAD_REQUEST, e));
          return;
        }
        k.send(o || null);
      });
    },
  m0 = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const o = function (c) {
        if (!s) {
          ((s = !0), a());
          const p = c instanceof Error ? c : this.reason;
          r.abort(
            p instanceof F ? p : new In(p instanceof Error ? p.message : p),
          );
        }
      };
      let i =
        t &&
        setTimeout(() => {
          ((i = null), o(new F(`timeout ${t} of ms exceeded`, F.ETIMEDOUT)));
        }, t);
      const a = () => {
        e &&
          (i && clearTimeout(i),
          (i = null),
          e.forEach((c) => {
            c.unsubscribe
              ? c.unsubscribe(o)
              : c.removeEventListener("abort", o);
          }),
          (e = null));
      };
      e.forEach((c) => c.addEventListener("abort", o));
      const { signal: u } = r;
      return ((u.unsubscribe = () => S.asap(a)), u);
    }
  },
  h0 = m0,
  g0 = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) ((s = r + t), yield e.slice(r, s), (r = s));
  },
  y0 = async function* (e, t) {
    for await (const n of x0(e)) yield* g0(n, t);
  },
  x0 = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  du = (e, t, n, r) => {
    const s = y0(e, t);
    let o = 0,
      i,
      a = (u) => {
        i || ((i = !0), r && r(u));
      };
    return new ReadableStream(
      {
        async pull(u) {
          try {
            const { done: c, value: p } = await s.next();
            if (c) {
              (a(), u.close());
              return;
            }
            let m = p.byteLength;
            if (n) {
              let h = (o += m);
              n(h);
            }
            u.enqueue(new Uint8Array(p));
          } catch (c) {
            throw (a(c), c);
          }
        },
        cancel(u) {
          return (a(u), s.return());
        },
      },
      { highWaterMark: 2 },
    );
  },
  oo =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Jd = oo && typeof ReadableStream == "function",
  v0 =
    oo &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Xd = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  w0 =
    Jd &&
    Xd(() => {
      let e = !1;
      const t = new Request(Se.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return ((e = !0), "half");
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  fu = 64 * 1024,
  Dl = Jd && Xd(() => S.isReadableStream(new Response("").body)),
  Ds = { stream: Dl && ((e) => e.body) };
oo &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Ds[t] &&
        (Ds[t] = S.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new F(
                `Response type '${t}' is not supported`,
                F.ERR_NOT_SUPPORT,
                r,
              );
            });
    });
  })(new Response());
const N0 = async (e) => {
    if (e == null) return 0;
    if (S.isBlob(e)) return e.size;
    if (S.isSpecCompliantForm(e))
      return (
        await new Request(Se.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (S.isArrayBufferView(e) || S.isArrayBuffer(e)) return e.byteLength;
    if ((S.isURLSearchParams(e) && (e = e + ""), S.isString(e)))
      return (await v0(e)).byteLength;
  },
  S0 = async (e, t) => {
    const n = S.toFiniteNumber(e.getContentLength());
    return n ?? N0(t);
  },
  j0 =
    oo &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: o,
        timeout: i,
        onDownloadProgress: a,
        onUploadProgress: u,
        responseType: c,
        headers: p,
        withCredentials: m = "same-origin",
        fetchOptions: h,
      } = Yd(e);
      c = c ? (c + "").toLowerCase() : "text";
      let j = h0([s, o && o.toAbortSignal()], i),
        y;
      const x =
        j &&
        j.unsubscribe &&
        (() => {
          j.unsubscribe();
        });
      let k;
      try {
        if (
          u &&
          w0 &&
          n !== "get" &&
          n !== "head" &&
          (k = await S0(p, r)) !== 0
        ) {
          let E = new Request(t, { method: "POST", body: r, duplex: "half" }),
            M;
          if (
            (S.isFormData(r) &&
              (M = E.headers.get("content-type")) &&
              p.setContentType(M),
            E.body)
          ) {
            const [N, C] = au(k, Os(uu(u)));
            r = du(E.body, fu, N, C);
          }
        }
        S.isString(m) || (m = m ? "include" : "omit");
        const f = "credentials" in Request.prototype;
        y = new Request(t, {
          ...h,
          signal: j,
          method: n.toUpperCase(),
          headers: p.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: f ? m : void 0,
        });
        let d = await fetch(y);
        const g = Dl && (c === "stream" || c === "response");
        if (Dl && (a || (g && x))) {
          const E = {};
          ["status", "statusText", "headers"].forEach((R) => {
            E[R] = d[R];
          });
          const M = S.toFiniteNumber(d.headers.get("content-length")),
            [N, C] = (a && au(M, Os(uu(a), !0))) || [];
          d = new Response(
            du(d.body, fu, N, () => {
              (C && C(), x && x());
            }),
            E,
          );
        }
        c = c || "text";
        let v = await Ds[S.findKey(Ds, c) || "text"](d, e);
        return (
          !g && x && x(),
          await new Promise((E, M) => {
            Kd(E, M, {
              data: v,
              headers: et.from(d.headers),
              status: d.status,
              statusText: d.statusText,
              config: e,
              request: y,
            });
          })
        );
      } catch (f) {
        throw (
          x && x(),
          f && f.name === "TypeError" && /fetch/i.test(f.message)
            ? Object.assign(new F("Network Error", F.ERR_NETWORK, e, y), {
                cause: f.cause || f,
              })
            : F.from(f, f && f.code, e, y)
        );
      }
    }),
  Il = { http: Dh, xhr: p0, fetch: j0 };
S.forEach(Il, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const pu = (e) => `- ${e}`,
  k0 = (e) => S.isFunction(e) || e === null || e === !1,
  Zd = {
    getAdapter: (e) => {
      e = S.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (
          ((r = n),
          !k0(n) && ((r = Il[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new F(`Unknown adapter '${i}'`);
        if (r) break;
        s[i || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(s).map(
          ([a, u]) =>
            `adapter ${a} ` +
            (u === !1
              ? "is not supported by the environment"
              : "is not available in the build"),
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(pu).join(`
`)
            : " " + pu(o[0])
          : "as no adapter specified";
        throw new F(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT",
        );
      }
      return r;
    },
    adapters: Il,
  };
function Uo(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new In(null, e);
}
function mu(e) {
  return (
    Uo(e),
    (e.headers = et.from(e.headers)),
    (e.data = Io.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Zd.getAdapter(e.adapter || Ui.adapter)(e).then(
      function (r) {
        return (
          Uo(e),
          (r.data = Io.call(e, e.transformResponse, r)),
          (r.headers = et.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          Qd(r) ||
            (Uo(e),
            r &&
              r.response &&
              ((r.response.data = Io.call(e, e.transformResponse, r.response)),
              (r.response.headers = et.from(r.response.headers)))),
          Promise.reject(r)
        );
      },
    )
  );
}
const ef = "1.7.9",
  lo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    lo[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const hu = {};
lo.transitional = function (t, n, r) {
  function s(o, i) {
    return (
      "[Axios v" +
      ef +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (o, i, a) => {
    if (t === !1)
      throw new F(
        s(i, " has been removed" + (n ? " in " + n : "")),
        F.ERR_DEPRECATED,
      );
    return (
      n &&
        !hu[i] &&
        ((hu[i] = !0),
        console.warn(
          s(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      t ? t(o, i, a) : !0
    );
  };
};
lo.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function C0(e, t, n) {
  if (typeof e != "object")
    throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s],
      i = t[o];
    if (i) {
      const a = e[o],
        u = a === void 0 || i(a, o, e);
      if (u !== !0)
        throw new F("option " + o + " must be " + u, F.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new F("Unknown option " + o, F.ERR_BAD_OPTION);
  }
}
const us = { assertOptions: C0, validators: lo },
  st = us.validators;
class Is {
  constructor(t) {
    ((this.defaults = t),
      (this.interceptors = { request: new lu(), response: new lu() }));
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(s)
          : (s = new Error());
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? o &&
              !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + o)
            : (r.stack = o);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    (typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = tn(this.defaults, n)));
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    (r !== void 0 &&
      us.assertOptions(
        r,
        {
          silentJSONParsing: st.transitional(st.boolean),
          forcedJSONParsing: st.transitional(st.boolean),
          clarifyTimeoutError: st.transitional(st.boolean),
        },
        !1,
      ),
      s != null &&
        (S.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : us.assertOptions(
              s,
              { encode: st.function, serialize: st.function },
              !0,
            )),
      us.assertOptions(
        n,
        {
          baseUrl: st.spelling("baseURL"),
          withXsrfToken: st.spelling("withXSRFToken"),
        },
        !0,
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase()));
    let i = o && S.merge(o.common, o[n.method]);
    (o &&
      S.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (y) => {
          delete o[y];
        },
      ),
      (n.headers = et.concat(i, o)));
    const a = [];
    let u = !0;
    this.interceptors.request.forEach(function (x) {
      (typeof x.runWhen == "function" && x.runWhen(n) === !1) ||
        ((u = u && x.synchronous), a.unshift(x.fulfilled, x.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (x) {
      c.push(x.fulfilled, x.rejected);
    });
    let p,
      m = 0,
      h;
    if (!u) {
      const y = [mu.bind(this), void 0];
      for (
        y.unshift.apply(y, a),
          y.push.apply(y, c),
          h = y.length,
          p = Promise.resolve(n);
        m < h;
      )
        p = p.then(y[m++], y[m++]);
      return p;
    }
    h = a.length;
    let j = n;
    for (m = 0; m < h; ) {
      const y = a[m++],
        x = a[m++];
      try {
        j = y(j);
      } catch (k) {
        x.call(this, k);
        break;
      }
    }
    try {
      p = mu.call(this, j);
    } catch (y) {
      return Promise.reject(y);
    }
    for (m = 0, h = c.length; m < h; ) p = p.then(c[m++], c[m++]);
    return p;
  }
  getUri(t) {
    t = tn(this.defaults, t);
    const n = qd(t.baseURL, t.url);
    return Wd(n, t.params, t.paramsSerializer);
  }
}
S.forEach(["delete", "get", "head", "options"], function (t) {
  Is.prototype[t] = function (n, r) {
    return this.request(
      tn(r || {}, { method: t, url: n, data: (r || {}).data }),
    );
  };
});
S.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, i, a) {
      return this.request(
        tn(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        }),
      );
    };
  }
  ((Is.prototype[t] = n()), (Is.prototype[t + "Form"] = n(!0)));
});
const cs = Is;
class zi {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    (this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let o;
        const i = new Promise((a) => {
          (r.subscribe(a), (o = a));
        }).then(s);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, a) {
        r.reason || ((r.reason = new In(o, i, a)), n(r.reason));
      }));
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new zi(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
const E0 = zi;
function b0(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function M0(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const Ul = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Ul).forEach(([e, t]) => {
  Ul[t] = e;
});
const L0 = Ul;
function tf(e) {
  const t = new cs(e),
    n = Rd(cs.prototype.request, t);
  return (
    S.extend(n, cs.prototype, t, { allOwnKeys: !0 }),
    S.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return tf(tn(e, s));
    }),
    n
  );
}
const ae = tf(Ui);
ae.Axios = cs;
ae.CanceledError = In;
ae.CancelToken = E0;
ae.isCancel = Qd;
ae.VERSION = ef;
ae.toFormData = ro;
ae.AxiosError = F;
ae.Cancel = ae.CanceledError;
ae.all = function (t) {
  return Promise.all(t);
};
ae.spread = b0;
ae.isAxiosError = M0;
ae.mergeConfig = tn;
ae.AxiosHeaders = et;
ae.formToJSON = (e) => Gd(S.isHTMLForm(e) ? new FormData(e) : e);
ae.getAdapter = Zd.getAdapter;
ae.HttpStatusCode = L0;
ae.default = ae;
const G = ae;
class nf {
  static enable() {
    ((this.isEnabled = !0), console.log("🔧 API Logging enabled"));
  }
  static disable() {
    ((this.isEnabled = !1), console.log("🔧 API Logging disabled"));
  }
  static logRequest(t, n, r, s) {
    this.isEnabled &&
      (console.group(`🚀 API REQUEST: ${n} ${t}`),
      console.log("📍 URL:", t),
      console.log("🔧 Method:", n),
      s && console.log("📋 Headers:", s),
      r && console.log("📦 Request Body:", r),
      console.log("⏰ Timestamp:", new Date().toISOString()),
      console.groupEnd());
  }
  static logResponse(t, n, r, s, o) {
    if (!this.isEnabled) return;
    const i = s && s >= 200 && s < 300 ? "✅" : "❌";
    (console.group(`${i} API RESPONSE: ${n} ${t}`),
      console.log("📍 URL:", t),
      console.log("🔧 Method:", n),
      s && console.log("📊 Status:", s),
      o && console.log("⏱️ Duration:", `${o}ms`),
      console.log("📦 Response Data:", r),
      console.log("⏰ Timestamp:", new Date().toISOString()),
      console.groupEnd());
  }
  static logError(t, n, r, s) {
    this.isEnabled &&
      (console.group(`💥 API ERROR: ${n} ${t}`),
      console.log("📍 URL:", t),
      console.log("🔧 Method:", n),
      s && console.log("⏱️ Duration:", `${s}ms`),
      console.error("💥 Error:", r),
      console.log("⏰ Timestamp:", new Date().toISOString()),
      console.groupEnd());
  }
}
Gi(nf, "isEnabled", !0);
const kr = nf,
  zl = new Map(),
  _0 = () => Math.random().toString(36).substr(2, 9);
G.interceptors.request.use(
  (e) => {
    const t = _0(),
      n = Date.now();
    return (
      zl.set(t, n),
      (e.metadata = { requestId: t, startTime: n }),
      kr.logRequest(
        e.url || "Unknown URL",
        (e.method || "GET").toUpperCase(),
        e.data,
        e.headers,
      ),
      e
    );
  },
  (e) => (kr.logError("Request Setup", "UNKNOWN", e), Promise.reject(e)),
);
G.interceptors.response.use(
  (e) => {
    var o, i;
    const t = e.config,
      n = (o = t.metadata) == null ? void 0 : o.requestId,
      r = (i = t.metadata) == null ? void 0 : i.startTime,
      s = r ? Date.now() - r : void 0;
    return (
      n && zl.delete(n),
      kr.logResponse(
        t.url || "Unknown URL",
        (t.method || "GET").toUpperCase(),
        e.data,
        e.status,
        s,
      ),
      e
    );
  },
  (e) => {
    var o, i, a, u, c;
    const t = e.config,
      n = (o = t == null ? void 0 : t.metadata) == null ? void 0 : o.requestId,
      r = (i = t == null ? void 0 : t.metadata) == null ? void 0 : i.startTime,
      s = r ? Date.now() - r : void 0;
    return (
      n && zl.delete(n),
      kr.logError(
        (t == null ? void 0 : t.url) || "Unknown URL",
        ((t == null ? void 0 : t.method) || "GET").toUpperCase(),
        {
          message: e.message,
          status: (a = e.response) == null ? void 0 : a.status,
          statusText: (u = e.response) == null ? void 0 : u.statusText,
          responseData: (c = e.response) == null ? void 0 : c.data,
          requestData: t == null ? void 0 : t.data,
        },
        s,
      ),
      Promise.reject(e)
    );
  },
);
let rf = "https://www.kutech.tw:4443",
  T0 = "https://www.kutech.tw:450";
const R0 = async () => {
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error(`HTTP error! status: ${e.status}`);
      const t = await e.text(),
        n = JSON.parse(t);
      ((rf = n.domain), (T0 = n.homepage));
    } catch (e) {
      console.error("Error loading config:", e);
    }
  },
  on = () => rf,
  sf = async (e) => {
    try {
      const t = {
        ...e,
        result:
          typeof e.result == "string" ? e.result : JSON.stringify(e.result),
      };
      await G.post(`${on()}/api/logger/add`, { Data: t });
    } catch (t) {
      console.error("Error logging operation:", t);
    }
  },
  of = () => {
    const e = sessionStorage.getItem("user_session");
    if (e)
      try {
        return JSON.parse(e);
      } catch (t) {
        return (console.error("Error parsing user session:", t), null);
      }
    return null;
  },
  Ft = () => `${on()}/api/MED_page`,
  lf = async () => {
    try {
      const e = await G.post(`${Ft()}/get_med_cloud`, {});
      if (e.data.Code === 200) return e.data.Data.map(Fi);
      throw new Error(e.data.Result || "Failed to fetch drugs");
    } catch (e) {
      throw (console.error("Error fetching drugs:", e), e);
    }
  },
  P0 = async () => {
    try {
      const e = await G.post(`${Ft()}/get_med_cloud`, {});
      if (e.data.Code === 200) {
        const t = e.data.Data.map((n) => n.TYPE).filter((n) => !!n);
        return Array.from(new Set(t)).sort();
      }
      throw new Error(e.data.Result || "Failed to fetch drug types");
    } catch (e) {
      throw (console.error("Error fetching drug types:", e), e);
    }
  },
  A0 = async (e, t) => {
    try {
      const n = t ? "開檔中" : "關檔中",
        r = await G.post(`${Ft()}/update_med_clouds_status_by_guid`, {
          ValueAry: [e, n],
        });
      if (r.data.Code === 200 && r.data.Data.length > 0)
        return Fi(r.data.Data[0]);
      throw new Error(r.data.Result || "Failed to update drug status");
    } catch (n) {
      throw (console.error("Error updating drug status:", n), n);
    }
  },
  O0 = async (e) => {
    try {
      const t = !!e.id,
        n = {
          Data: [
            {
              GUID: e.id || "",
              Master_GUID: e.masterId || "",
              CODE: e.drugCode || "",
              SKDIACODE: e.materialNumber || "",
              ATC: e.atcCode || "",
              CHT_NAME: e.chineseName || "",
              NAME: e.englishName || "",
              DIANAME: e.genericName || "",
              GROUP: e.drugGroup || "",
              HI_CODE: e.healthInsuranceCode || "",
              PAKAGE: e.packageUnit || "",
              PAKAGE_VAL: e.packageQuantity || "",
              MIN_PAKAGE: e.minPackageUnit || "",
              MIN_PAKAGE_VAL: e.minPackageQuantity || "",
              BARCODE1: e.barcode1 || "",
              BARCODE2: e.barcode2 || "",
              SUGGESTED_FREQUENCY: e.suggestedFrequency || "",
              SUGGESTED_DOSE: e.suggestedDose || "",
              TREATMENT_CATEGORY_CODE: e.treatmentCategoryCode || "",
              TREATMENT_CATEGORY_NAME: e.treatmentCategoryName || "",
              PHARMACOLOGICAL_SEQ: e.pharmacologicalSeq || "",
              PHARMACOLOGICAL_CODE: e.pharmacologicalCode || "",
              PHARMACOLOGICAL_NAME: e.pharmacologicalName || "",
              INDICATION: e.indications || "",
              HI_REGULATION: e.healthInsuranceRegulation || "",
              INSTRUCTIONS: e.instructions || "",
              IS_WARRING: e.warningDrug ? "Y" : "N",
              IS_H_COST: e.highCostDrug ? "Y" : "N",
              SELF_PAY_MEDICINE: e.selfPayMedicine ? "Y" : "N",
              REFRIGERATED_MEDICINE: e.refrigeratedMedicine ? "Y" : "N",
              IS_BIO: e.biologicalProduct ? "Y" : "N",
              DRUGKIND: e.controlLevel || "N",
              PREGNANCY_LEVEL: e.pregnancyLevel || "",
              PHAR_QTY: e.pharmacyStock || "",
              DRUG_QTY: e.drugWarehouseStock || "",
              TOLTAL_QTY: e.totalStock || "",
              QTY: e.stockQuantity || "",
              REF_QTY: e.referenceQuantity || "",
              SAFE_QTY: e.safetyStock || "",
              BRD: e.brand || "",
              LICENSE: e.licenseNumber || "",
              TYPE: e.category || "",
              TORW: e.traditionalOrWestern || "西藥",
              PIC_URL: e.imageUrl || "",
              PIC1_URL: e.imageUrl1 || "",
              PIL_URL: e.instructionSheetUrl || "",
              MANUAL_URL: e.manualUrl || "",
              FILE_STATUS: e.openStatus ? "開檔中" : "關檔中",
              STORAGE_NOTE: e.storageNote || "",
              NOTE: e.note || "",
              SUPPLIER: e.supplier || "",
              SUPPLIER_LICENSE: e.supplierLicense || "",
              DeviceBasics: e.deviceBasics || [],
            },
          ],
        },
        r = await G.post(`${Ft()}/add_med_clouds`, n);
      if (r.data.Code === 200 && r.data.Data.length > 0) {
        const s = Fi(r.data.Data[0]),
          o = of();
        return (
          o &&
            (await sf({
              url: window.location.href,
              op_type: t ? "update_med_cloud" : "add_med_cloud",
              op_id: o.ID || "",
              op_name: o.Name || "",
              result: r.data,
              event: t ? `編輯藥碼 ${e.drugCode}` : `新增藥碼 ${e.drugCode}`,
            })),
          s
        );
      }
      throw new Error(r.data.Result || "Failed to add drug");
    } catch (t) {
      throw (console.error("Error adding drug:", t), t);
    }
  },
  Fi = (e) => ({
    id: e.GUID,
    masterId: e.Master_GUID,
    drugCode: e.CODE,
    materialNumber: e.SKDIACODE,
    atcCode: e.ATC,
    englishName: e.NAME,
    chineseName: e.CHT_NAME,
    genericName: e.DIANAME,
    drugGroup: e.GROUP,
    healthInsuranceCode: e.HI_CODE,
    packageUnit: e.PAKAGE,
    packageQuantity: e.PAKAGE_VAL,
    minPackageUnit: e.MIN_PAKAGE,
    minPackageQuantity: e.MIN_PAKAGE_VAL,
    barcode1: e.BARCODE1,
    barcode2: e.BARCODE2,
    suggestedFrequency: e.SUGGESTED_FREQUENCY,
    suggestedDose: e.SUGGESTED_DOSE,
    treatmentCategoryCode: e.TREATMENT_CATEGORY_CODE,
    treatmentCategoryName: e.TREATMENT_CATEGORY_NAME,
    pharmacologicalSeq: e.PHARMACOLOGICAL_SEQ,
    pharmacologicalCode: e.PHARMACOLOGICAL_CODE,
    pharmacologicalName: e.PHARMACOLOGICAL_NAME,
    indications: e.INDICATION,
    healthInsuranceRegulation: e.HI_REGULATION,
    instructions: e.INSTRUCTIONS,
    warningDrug: e.IS_WARRING === "Y",
    highCostDrug: e.IS_H_COST === "Y",
    selfPayMedicine: e.SELF_PAY_MEDICINE === "Y",
    refrigeratedMedicine: e.REFRIGERATED_MEDICINE === "Y",
    biologicalProduct: e.IS_BIO === "Y",
    controlLevel: e.DRUGKIND || "N",
    pregnancyLevel: e.PREGNANCY_LEVEL,
    pharmacyStock: e.PHAR_QTY,
    drugWarehouseStock: e.DRUG_QTY,
    totalStock: e.TOLTAL_QTY,
    stockQuantity: e.QTY,
    referenceQuantity: e.REF_QTY,
    safetyStock: e.SAFE_QTY,
    brand: e.BRD,
    licenseNumber: e.LICENSE,
    category: e.TYPE,
    traditionalOrWestern: e.TORW || "西藥",
    imageUrl: e.PIC_URL,
    imageUrl1: e.PIC1_URL,
    instructionSheetUrl: e.PIL_URL,
    manualUrl: e.MANUAL_URL,
    openStatus: e.FILE_STATUS === "開檔中" || e.FILE_STATUS === "",
    storageNote: e.STORAGE_NOTE,
    note: e.NOTE,
    supplier: e.SUPPLIER,
    supplierLicense: e.SUPPLIER_LICENSE,
    deviceBasics: e.DeviceBasics || [],
  }),
  D0 = async () => {
    try {
      const e = await G.get(`${Ft()}/excel_download`, { responseType: "blob" }),
        t = window.URL.createObjectURL(new Blob([e.data])),
        n = document.createElement("a");
      n.href = t;
      const r = e.headers["content-disposition"];
      let s = "藥檔範例表頭.xlsx";
      if (r) {
        const o = r.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        o && o[1] && (s = o[1].replace(/['"]/g, ""));
      }
      (n.setAttribute("download", s),
        document.body.appendChild(n),
        n.click(),
        n.remove(),
        window.URL.revokeObjectURL(t));
    } catch (e) {
      throw (console.error("Error downloading sample excel:", e), e);
    }
  },
  I0 = async (e) => {
    try {
      const t = new FormData();
      t.append("file", e);
      const n = await G.post(`${Ft()}/excel_upload`, t, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (n.data.Code !== 200)
        throw new Error(n.data.Result || "Upload failed");
    } catch (t) {
      throw (console.error("Error uploading excel file:", t), t);
    }
  },
  U0 = async (e) => {
    try {
      const t = await G.post(
          `${Ft()}/download_med_cloud`,
          { Data: e },
          { responseType: "blob" },
        ),
        n = window.URL.createObjectURL(new Blob([t.data])),
        r = document.createElement("a");
      r.href = n;
      const s = t.headers["content-disposition"];
      let o = "雲端藥檔.xlsx";
      if (s) {
        const i = s.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
        i && i[1] && (o = i[1].replace(/['"]/g, ""));
      }
      (r.setAttribute("download", o),
        document.body.appendChild(r),
        r.click(),
        r.remove(),
        window.URL.revokeObjectURL(n));
    } catch (t) {
      throw (console.error("Error downloading filtered data:", t), t);
    }
  },
  z0 = async (e, t) => {
    try {
      const n = await G.post(`${Ft()}/delete_by_guid`, {
        Data: { GUID: e },
        TableName: "medicine_page_cloud",
      });
      if (n.data.Code !== 200)
        throw new Error(n.data.Result || "Failed to delete drug");
      const r = of();
      r &&
        (await sf({
          url: window.location.href,
          op_type: "delete_med_cloud",
          op_id: r.ID || "",
          op_name: r.Name || "",
          result: n.data,
          event: `刪除藥碼 ${t || e}`,
        }));
    } catch (n) {
      throw (console.error("Error deleting drug:", n), n);
    }
  },
  F0 = {
    zh: {
      "system.title": "藥品管理系統",
      "system.home": "回到首頁",
      "system.loading": "載入中...",
      "system.confirm": "確認",
      "system.cancel": "取消",
      "system.delete": "刪除",
      "system.edit": "編輯",
      "system.add": "新增",
      "system.search": "搜尋",
      "system.clear": "清除",
      "system.processing": "處理中...",
      "system.success": "成功",
      "system.error": "錯誤",
      "system.logout": "登出",
      "tabs.drugFiles": "藥品檔案",
      "tabs.drugGroups": "藥品群組",
      "tabs.publicList": "公藥清單",
      "tabs.selfControlList": "自控品清單",
      "drugList.addDrug": "新增藥檔",
      "drugList.noResults": "沒有符合搜尋條件的藥品",
      "viewMode.card": "卡片",
      "viewMode.table": "表格",
      "search.placeholder": "輸入藥碼或藥名搜尋...",
      "search.all": "全部",
      "search.allStatus": "全部狀態",
      "search.allLevel": "全部級別",
      "search.allType": "全部類別",
      "table.select": "選擇",
      "table.drugCode": "藥碼",
      "table.materialNumber": "料號",
      "table.drugName": "藥名",
      "table.chineseName": "中文名",
      "table.unit": "單位",
      "table.controlLevel": "管制級別",
      "table.category": "類別",
      "table.medicineType": "中西藥",
      "table.status": "開檔狀態",
      "table.actions": "操作",
      "drugModal.addTitle": "新增藥檔",
      "drugModal.editTitle": "編輯藥檔",
      "drugModal.drugCode": "藥碼",
      "drugModal.drugCodePlaceholder": "請輸入藥碼",
      "drugModal.materialNo": "料號",
      "drugModal.materialNoPlaceholder": "請輸入料號",
      "drugModal.drugName": "藥名",
      "drugModal.drugNamePlaceholder": "請輸入藥名",
      "drugModal.genericName": "學名",
      "drugModal.genericNamePlaceholder": "請輸入學名",
      "drugModal.chineseName": "中文名",
      "drugModal.chineseNamePlaceholder": "請輸入中文名",
      "drugModal.nhiCode": "健保碼",
      "drugModal.nhiCodePlaceholder": "請輸入健保碼",
      "drugModal.controlLevel": "管制級別",
      "drugModal.category": "類別",
      "drugModal.categoryPlaceholder": "請選擇類別",
      "drugModal.addCategory": "新增類別",
      "drugModal.type": "中西藥",
      "drugModal.western": "西藥",
      "drugModal.chinese": "中藥",
      "drugModal.status": "開檔狀態",
      "drugModal.active": "開檔中",
      "drugModal.inactive": "關檔中",
      "drugModal.alertDrug": "警訊藥品",
      "drugModal.highCostDrug": "高價藥品",
      "drugModal.biologic": "生物藥劑",
      "drugModal.refrigerated": "冷藏藥品",
      "drugModal.addCategoryTitle": "新增類別",
      "drugModal.categoryNamePlaceholder": "請輸入新類別名稱",
      "drugModal.categoryExists": "此類別已存在",
      "drugModal.categoryRequired": "請輸入類別名稱",
      "drugModal.drugCodeRequired": "藥碼不能為空",
      "drugModal.drugNameRequired": "藥名不能為空",
      "drugModal.addFailed": "新增藥檔失敗，請稍後再試",
      "drugModal.editFailed": "編輯藥檔失敗，請稍後再試",
      "medication.selected": "已選擇的藥品",
      "medication.addToPublic": "新增到公藥清單",
      "medication.addToSelfControl": "新增到自控品清單",
      "medication.removeFromList": "從清單中移除",
      "medication.selectToAdd": "請選擇要新增的藥品",
      "medication.selectToDelete": "請選擇要刪除的藥品",
      "medication.addSuccess": "新增藥品成功",
      "medication.deleteSuccess": "刪除藥品成功",
      "medication.deleteConfirm": "確定要從清單中移除選擇的 {count} 個藥品嗎？",
      "pagination.previous": "上一頁",
      "pagination.next": "下一頁",
      "pagination.page": "頁碼",
      "pagination.total": "共 {total} 筆",
      "pagination.showing": "第 {start} - {end} 筆",
      "pagination.of": "/",
      "dropdown.allStatus": "全部狀態",
      "dropdown.active": "開檔中",
      "dropdown.inactive": "關檔中",
      "dropdown.allLevels": "全部級別",
      "dropdown.allTypes": "全部類別",
      "dropdown.western": "西藥",
      "dropdown.traditional": "中藥",
      "language.switch": "繁體中文",
      "group.add": "新增群組",
      "group.delete": "刪除群組",
      "group.select": "請選擇群組",
      "group.addSuccess": "新增群組成功",
      "group.deleteSuccess": "刪除群組成功",
      "group.addMedication": "新增到群組",
      "group.noSelection": "請選擇一個群組以查看藥品清單",
      "error.loadMedications": "載入藥品清單失敗，請稍後再試",
      "error.addMedications": "新增藥品失敗，請稍後再試",
      "error.deleteMedications": "刪除藥品失敗，請稍後再試",
      "error.deleteGroup": "刪除群組失敗，請稍後再試",
      "batchUpload.title": "批次上傳藥品圖片",
      "batchUpload.instructions": "您可以一次選擇多個圖片檔案進行上傳：",
      "batchUpload.fileNameRule":
        "圖片檔名必須與藥品代碼相同（例如：ABC123.jpg）",
      "batchUpload.supportedFormats": "支援的格式：JPG、PNG",
      "batchUpload.sizeLimit": "每個檔案大小限制：5MB",
      "batchUpload.selectFiles": "選擇檔案",
      "batchUpload.dragDrop": "或拖放至此",
      "batchUpload.uploading": "上傳中...",
      "batchUpload.status": "上傳狀態",
      "batchUpload.success": "上傳成功",
      "batchUpload.error": "上傳失敗",
      "batchUpload.noMatch": "找不到對應的藥品代碼: {code}",
      "login.title": "藥品管理系統登入",
      "login.id": "帳號",
      "login.idPlaceholder": "請輸入帳號",
      "login.password": "密碼",
      "login.passwordPlaceholder": "請輸入密碼",
      "login.submit": "登入",
      "login.processing": "登入中...",
      "login.failed": "登入失敗，請稍後再試",
      "login.required": "請輸入帳號和密碼",
    },
    en: {
      "system.title": "Drug Management System",
      "system.home": "Back to Home",
      "system.loading": "Loading...",
      "system.confirm": "Confirm",
      "system.cancel": "Cancel",
      "system.delete": "Delete",
      "system.edit": "Edit",
      "system.add": "Add",
      "system.search": "Search",
      "system.clear": "Clear",
      "system.processing": "Processing...",
      "system.success": "Success",
      "system.error": "Error",
      "system.logout": "Logout",
      "tabs.drugFiles": "Drug Files",
      "tabs.drugGroups": "Drug Groups",
      "tabs.publicList": "Public Medications",
      "tabs.selfControlList": "Self-Control Medications",
      "drugList.addDrug": "Add Drug",
      "drugList.noResults": "No drugs match your search criteria",
      "viewMode.card": "Card",
      "viewMode.table": "Table",
      "search.placeholder": "Search by drug code or name...",
      "search.all": "All",
      "search.allStatus": "All Status",
      "search.allLevel": "All Levels",
      "search.allType": "All Types",
      "table.select": "Select",
      "table.drugCode": "Drug Code",
      "table.materialNumber": "Material No.",
      "table.drugName": "Drug Name",
      "table.unit": "Unit",
      "table.chineseName": "Chinese Name",
      "table.controlLevel": "Control Level",
      "table.category": "Category",
      "table.medicineType": "Medicine Type",
      "table.status": "Status",
      "table.actions": "Actions",
      "drugModal.addTitle": "Add New Drug",
      "drugModal.editTitle": "Edit Drug",
      "drugModal.drugCode": "Drug Code",
      "drugModal.drugCodePlaceholder": "Enter drug code",
      "drugModal.materialNo": "Material No.",
      "drugModal.materialNoPlaceholder": "Enter material no.",
      "drugModal.drugName": "Drug Name",
      "drugModal.drugNamePlaceholder": "Enter drug name",
      "drugModal.genericName": "Generic Name",
      "drugModal.genericNamePlaceholder": "Enter generic name",
      "drugModal.chineseName": "Chinese Name",
      "drugModal.chineseNamePlaceholder": "Enter Chinese name",
      "drugModal.nhiCode": "NHI Code",
      "drugModal.nhiCodePlaceholder": "Enter NHI code",
      "drugModal.controlLevel": "Control Level",
      "drugModal.category": "Category",
      "drugModal.categoryPlaceholder": "Select category",
      "drugModal.addCategory": "Add Category",
      "drugModal.type": "Type",
      "drugModal.western": "Western",
      "drugModal.chinese": "Chinese",
      "drugModal.status": "Status",
      "drugModal.active": "Active",
      "drugModal.inactive": "Inactive",
      "drugModal.alertDrug": "Alert Drug",
      "drugModal.highCostDrug": "High-Cost Drug",
      "drugModal.biologic": "Biologic",
      "drugModal.refrigerated": "Refrigerated Drug",
      "drugModal.addCategoryTitle": "Add Category",
      "drugModal.categoryNamePlaceholder": "Enter new category name",
      "drugModal.categoryExists": "This category already exists",
      "drugModal.categoryRequired": "Please enter a category name",
      "drugModal.drugCodeRequired": "Drug code is required",
      "drugModal.drugNameRequired": "Drug name is required",
      "drugModal.addFailed": "Failed to add drug, please try again later",
      "drugModal.editFailed": "Failed to edit drug, please try again later",
      "medication.selected": "Selected Medications",
      "medication.addToPublic": "Add to Public List",
      "medication.addToSelfControl": "Add to Self-Control List",
      "medication.removeFromList": "Remove from List",
      "medication.selectToAdd": "Please select medications to add",
      "medication.selectToDelete": "Please select medications to delete",
      "medication.addSuccess": "Medications added successfully",
      "medication.deleteSuccess": "Medications deleted successfully",
      "medication.deleteConfirm":
        "Are you sure you want to remove {count} selected medications?",
      "pagination.previous": "Previous",
      "pagination.next": "Next",
      "pagination.page": "Page",
      "pagination.total": "{total} items total",
      "pagination.showing": "Items {start} - {end}",
      "pagination.of": "of",
      "dropdown.allStatus": "All Status",
      "dropdown.active": "Active",
      "dropdown.inactive": "Inactive",
      "dropdown.allLevels": "All Levels",
      "dropdown.allTypes": "All Types",
      "dropdown.western": "Western",
      "dropdown.traditional": "Traditional",
      "language.switch": "English",
      "group.add": "Add Group",
      "group.delete": "Delete Group",
      "group.select": "Please select a group",
      "group.addSuccess": "Group added successfully",
      "group.deleteSuccess": "Group deleted successfully",
      "group.addMedication": "Add to Group",
      "group.noSelection": "Please select a group to view medications",
      "error.loadMedications":
        "Failed to load medications, please try again later",
      "error.addMedications":
        "Failed to add medications, please try again later",
      "error.deleteMedications":
        "Failed to delete medications, please try again later",
      "error.deleteGroup": "Failed to delete group, please try again later",
      "batchUpload.title": "Batch Upload Drug Images",
      "batchUpload.instructions":
        "You can select multiple image files to upload at once:",
      "batchUpload.fileNameRule":
        "File names must match the drug code (e.g., ABC123.jpg)",
      "batchUpload.supportedFormats": "Supported formats: JPG, PNG",
      "batchUpload.sizeLimit": "Max file size per image: 5MB",
      "batchUpload.selectFiles": "Select files",
      "batchUpload.dragDrop": "or drag and drop here",
      "batchUpload.uploading": "Uploading...",
      "batchUpload.status": "Upload Status",
      "batchUpload.success": "Upload successful",
      "batchUpload.error": "Upload failed",
      "batchUpload.noMatch": "No matching drug code found: {code}",
      "login.title": "Drug Management System Login",
      "login.id": "Account ID",
      "login.idPlaceholder": "Enter your account ID",
      "login.password": "Password",
      "login.passwordPlaceholder": "Enter your password",
      "login.submit": "Sign In",
      "login.processing": "Signing in...",
      "login.failed": "Login failed. Please try again.",
      "login.required": "Please enter your account ID and password",
    },
  },
  af = w.createContext(void 0),
  pe = () => {
    const e = w.useContext(af);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  B0 = ({ children: e }) => {
    const [t, n] = w.useState("zh"),
      r = (s) => F0[t][s] || s;
    return l.jsx(af.Provider, {
      value: { language: t, setLanguage: n, t: r },
      children: e,
    });
  };
function $0({ isOpen: e, onClose: t, drug: n }) {
  if (!e) return null;
  const r = [
      { label: "藥理分類", value: n.pharmacologicalName },
      { label: "治療分類", value: n.treatmentCategoryName },
      { label: "健保規範", value: n.healthInsuranceRegulation },
      { label: "適應症", value: n.indications },
      { label: "使用說明", value: n.instructions },
    ],
    s = [
      { label: "仿單連結", value: n.instructionSheetUrl },
      { label: "說明書連結", value: n.manualUrl },
    ];
  return l.jsx("div", {
    className:
      "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[150]",
    children: l.jsxs("div", {
      className:
        "bg-white rounded-lg w-[600px] max-h-[90vh] flex flex-col animate-slide-down",
      children: [
        l.jsx("div", {
          className: "flex-shrink-0 p-6 pb-0",
          children: l.jsxs("div", {
            className: "flex justify-between items-center",
            children: [
              l.jsxs("h2", {
                className:
                  "text-xl font-bold text-center bg-gray-200 py-3 rounded-lg flex-1 mr-4 mb-6",
                children: ["藥品詳細資訊 - ", n.englishName],
              }),
              l.jsx("button", {
                onClick: t,
                className: "text-gray-500 hover:text-gray-700",
                children: l.jsx("svg", {
                  className: "w-6 h-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: l.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12",
                  }),
                }),
              }),
            ],
          }),
        }),
        l.jsx("div", {
          className: "flex-1 overflow-auto p-6 pt-0",
          children: l.jsxs("div", {
            className: "space-y-6",
            children: [
              l.jsx("div", {
                className: "space-y-4",
                children: r.map((o) =>
                  l.jsxs(
                    "div",
                    {
                      className: "flex flex-col gap-2",
                      children: [
                        l.jsx("label", {
                          className:
                            "w-full bg-gray-200 px-4 py-2 rounded flex items-center justify-center min-h-[40px]",
                          children: o.label,
                        }),
                        l.jsx("div", {
                          className:
                            "w-full border rounded px-3 py-2 bg-gray-50 min-h-[80px] whitespace-pre-wrap",
                          children: o.value || "無資料",
                        }),
                      ],
                    },
                    o.label,
                  ),
                ),
              }),
              l.jsx("div", {
                className: "space-y-4",
                children: s.map((o) =>
                  l.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-4",
                      children: [
                        l.jsx("label", {
                          className:
                            "w-24 bg-gray-200 px-4 py-2 rounded flex items-center justify-center min-h-[40px]",
                          children: o.label,
                        }),
                        l.jsx("div", {
                          className:
                            "flex-1 border rounded px-3 py-2 bg-gray-50",
                          children: o.value
                            ? l.jsx("a", {
                                href: o.value,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "text-blue-600 hover:text-blue-800 underline break-all",
                                children: o.value,
                              })
                            : l.jsx("span", {
                                className: "text-gray-500",
                                children: "無連結",
                              }),
                        }),
                      ],
                    },
                    o.label,
                  ),
                ),
              }),
              l.jsx("div", {
                className: "flex justify-center mt-8 pt-4 border-t",
                children: l.jsxs("button", {
                  onClick: t,
                  className:
                    "flex items-center gap-2 bg-gray-600 text-white px-8 py-2 rounded hover:bg-gray-700 transition-colors duration-200",
                  children: [
                    l.jsx("svg", {
                      className: "w-5 h-5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: l.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12",
                      }),
                    }),
                    "關閉",
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
const zo = "drugCustomTypes",
  H0 = ({ isOpen: e, message: t, onClose: n }) => {
    const { t: r } = pe();
    return e
      ? l.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[200]",
          children: l.jsxs("div", {
            className:
              "bg-white rounded-lg p-6 max-w-sm w-full mx-4 animate-slide-down",
            children: [
              l.jsx("p", { className: "text-center mb-6", children: t }),
              l.jsx("div", {
                className: "flex justify-center",
                children: l.jsx("button", {
                  onClick: n,
                  className:
                    "bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors duration-200",
                  children: r("system.confirm"),
                }),
              }),
            ],
          }),
        })
      : null;
  },
  W0 = ({ isOpen: e, onClose: t, onSubmit: n, existingTypes: r }) => {
    const { t: s } = pe(),
      [o, i] = w.useState(""),
      [a, u] = w.useState("");
    if (!e) return null;
    const c = (p) => {
      if ((p.preventDefault(), !o.trim())) {
        u(s("drugModal.categoryRequired"));
        return;
      }
      if (r.includes(o.trim())) {
        u(s("drugModal.categoryExists"));
        return;
      }
      (n(o.trim()), i(""), u(""));
    };
    return l.jsx("div", {
      className:
        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[150]",
      children: l.jsxs("div", {
        className: "bg-white rounded-lg p-6 w-[400px] animate-slide-down",
        children: [
          l.jsx("h3", {
            className: "text-lg font-semibold mb-4",
            children: s("drugModal.addCategoryTitle"),
          }),
          l.jsxs("form", {
            onSubmit: c,
            children: [
              l.jsxs("div", {
                className: "mb-4",
                children: [
                  l.jsx("input", {
                    type: "text",
                    value: o,
                    onChange: (p) => {
                      (i(p.target.value), u(""));
                    },
                    placeholder: s("drugModal.categoryNamePlaceholder"),
                    className:
                      "w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
                  }),
                  a &&
                    l.jsx("p", {
                      className: "text-red-600 text-sm mt-1",
                      children: a,
                    }),
                ],
              }),
              l.jsxs("div", {
                className: "flex justify-end gap-4",
                children: [
                  l.jsx("button", {
                    type: "button",
                    onClick: () => {
                      (t(), i(""), u(""));
                    },
                    className:
                      "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded",
                    children: s("system.cancel"),
                  }),
                  l.jsx("button", {
                    type: "submit",
                    className:
                      "px-4 py-2 bg-black text-white rounded hover:bg-gray-800",
                    children: s("system.confirm"),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  };
function gu({
  isOpen: e,
  onClose: t,
  onSubmit: n,
  mode: r = "add",
  initialData: s,
}) {
  const { t: o } = pe(),
    [i, a] = w.useState({
      drugCode: "",
      controlLevel: "N",
      englishName: "",
      genericName: "",
      chineseName: "",
      materialNumber: "",
      healthInsuranceCode: "",
      pregnancyLevel: "",
      minPackageUnit: "",
      traditionalOrWestern: "西藥",
      category: "",
      openStatus: !0,
      warningDrug: !1,
      highCostDrug: !1,
      biologicalProduct: !1,
      refrigeratedMedicine: !1,
    }),
    [u, c] = w.useState(!1),
    [p, m] = w.useState(!1),
    [h, j] = w.useState(""),
    [y, x] = w.useState(null),
    [k, f] = w.useState([]),
    [d, g] = w.useState(!1),
    [v, E] = w.useState(!1);
  (w.useEffect(() => {
    e &&
      (async () => {
        try {
          const B = await P0(),
            q = JSON.parse(localStorage.getItem(zo) || "[]"),
            Y = Array.from(new Set([...B, ...q])).sort();
          f(Y);
        } catch (B) {
          console.error("Error loading drug types:", B);
        }
      })();
  }, [e]),
    w.useEffect(() => {
      a(
        r === "edit" && s
          ? { ...s }
          : {
              drugCode: "",
              controlLevel: "N",
              englishName: "",
              genericName: "",
              chineseName: "",
              materialNumber: "",
              healthInsuranceCode: "",
              pregnancyLevel: "",
              minPackageUnit: "",
              traditionalOrWestern: "西藥",
              category: "",
              openStatus: !0,
              warningDrug: !1,
              highCostDrug: !1,
              biologicalProduct: !1,
              refrigeratedMedicine: !1,
            },
      );
    }, [r, s, e]));
  const M = (I) => {
      const B = JSON.parse(localStorage.getItem(zo) || "[]"),
        q = Array.from(new Set([...B, I])).sort();
      (localStorage.setItem(zo, JSON.stringify(q)),
        f((Y) => Array.from(new Set([...Y, I])).sort()),
        a((Y) => ({ ...Y, category: I })),
        g(!1));
    },
    N = (I) => {
      const B = I.target.value;
      B === "add_new" ? g(!0) : a((q) => ({ ...q, category: B }));
    };
  if (!e) return null;
  const C = async (I) => {
      var B, q;
      if ((I.preventDefault(), !((B = i.drugCode) != null && B.trim()))) {
        (j(o("drugModal.drugCodeRequired")), m(!0));
        return;
      }
      if (!((q = i.englishName) != null && q.trim())) {
        (j(o("drugModal.drugNameRequired")), m(!0));
        return;
      }
      try {
        c(!0);
        const Y = await O0(i);
        (n(Y), t());
      } catch (Y) {
        (console.error("Error submitting drug data:", Y),
          j(o(r === "add" ? "drugModal.addFailed" : "drugModal.editFailed")),
          m(!0));
      } finally {
        c(!1);
      }
    },
    R = (I) => {
      const { name: B, value: q, type: Y } = I.target,
        xe = I.target.checked;
      a((T) => ({ ...T, [B]: Y === "checkbox" ? xe : q }));
    },
    P = o(r === "add" ? "drugModal.addTitle" : "drugModal.editTitle");
  return l.jsxs(l.Fragment, {
    children: [
      l.jsxs("div", {
        className:
          "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4",
        children: [
          l.jsxs("div", {
            className:
              "bg-white rounded-lg w-full max-w-[95vw] xl:max-w-[1400px] lg:max-w-[1200px] md:max-w-[900px] max-h-[95vh] flex flex-col animate-slide-down",
            children: [
              l.jsx("div", {
                className: "flex-shrink-0 p-6 pb-0",
                children: l.jsx("h2", {
                  className:
                    "text-xl font-bold text-center bg-gray-200 py-3 rounded-lg",
                  children: P,
                }),
              }),
              l.jsx("div", {
                className: "flex-1 overflow-auto p-6 pt-6",
                children: l.jsx("form", {
                  onSubmit: C,
                  className: "space-y-4",
                  children: l.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      l.jsxs("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                        children: [
                          l.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              l.jsx("label", {
                                className:
                                  "w-32 bg-gray-200 px-4 py-2 rounded flex items-center justify-center min-h-[40px] transition-colors duration-200",
                                children: o("drugModal.drugCode"),
                              }),
                              l.jsx("input", {
                                type: "text",
                                name: "drugCode",
                                value: String(i.drugCode || ""),
                                onChange: R,
                                onFocus: () => x("drugCode"),
                                onBlur: () => x(null),
                                className: `flex-1 border rounded px-3 py-2 text-center transition-all duration-200 ${y === "drugCode" ? "border-blue-500 ring-2 ring-blue-200" : "hover:border-gray-400"}`,
                                placeholder: o("drugModal.drugCodePlaceholder"),
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              l.jsx("label", {
                                className:
                                  "w-32 bg-gray-200 px-4 py-2 rounded flex items-center justify-center min-h-[40px] transition-colors duration-200",
                                children: o("drugModal.controlLevel"),
                              }),
                              l.jsxs("select", {
                                name: "controlLevel",
                                value: i.controlLevel || "N",
                                onChange: R,
                                onFocus: () => x("controlLevel"),
                                onBlur: () => x(null),
                                className: `flex-1 border rounded px-3 py-2 text-center transition-all duration-200 ${y === "controlLevel" ? "border-blue-500 ring-2 ring-blue-200" : "hover:border-gray-400"}`,
                                children: [
                                  l.jsx("option", {
                                    value: "N",
                                    children: "N",
                                  }),
                                  l.jsx("option", {
                                    value: "1",
                                    children: "1",
                                  }),
                                  l.jsx("option", {
                                    value: "2",
                                    children: "2",
                                  }),
                                  l.jsx("option", {
                                    value: "3",
                                    children: "3",
                                  }),
                                  l.jsx("option", {
                                    value: "4",
                                    children: "4",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                        children: [
                          l.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              l.jsx("label", {
                                className:
                                  "w-32 bg-gray-200 px-4 py-2 rounded flex items-center justify-center min-h-[40px] transition-colors duration-200",
                                children: o("drugModal.materialNo"),
                              }),
                              l.jsx("input", {
                                type: "text",
                                name: "materialNumber",
                                value: String(i.materialNumber || ""),
                                onChange: R,
                                onFocus: () => x("materialNumber"),
                                onBlur: () => x(null),
                                placeholder: o(
                                  "drugModal.materialNoPlaceholder",
                                ),
                                className: `flex-1 border rounded px-3 py-2 text-center transition-all duration-200 ${y === "materialNumber" ? "border-blue-500 ring-2 ring-blue-200" : "hover:border-gray-400"}`,
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              l.jsx("label", {
                                className:
                                  "w-32 bg-gray-200 px-4 py-2 rounded flex items-center justify-center min-h-[40px] transition-colors duration-200",
                                children: o("drugModal.category"),
                              }),
                              l.jsxs("select", {
                                name: "category",
                                value: i.category || "",
                                onChange: N,
                                onFocus: () => x("category"),
                                onBlur: () => x(null),
                                className: `flex-1 border rounded px-3 py-2 text-center transition-all duration-200 ${y === "category" ? "border-blue-500 ring-2 ring-blue-200" : "hover:border-gray-400"}`,
                                children: [
                                  l.jsx("option", {
                                    value: "",
                                    children: o(
                                      "drugModal.categoryPlaceholder",
                                    ),
                                  }),
                                  k.map((I) =>
                                    l.jsx(
                                      "option",
                                      { value: I, children: I },
                                      I,
                                    ),
                                  ),
                                  l.jsx("option", {
                                    value: "add_new",
                                    children: o("drugModal.addCategory"),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                          l.jsx("label", {
                            className:
                              "w-32 bg-gray-200 px-4 py-2 rounded flex items-center justify-center min-h-[40px]",
                            children: o("drugModal.drugName"),
                          }),
                          l.jsx("input", {
                            type: "text",
                            name: "englishName",
                            value: String(i.englishName || ""),
                            onChange: R,
                            onFocus: () => x("englishName"),
                            onBlur: () => x(null),
                            placeholder: o("drugModal.drugNamePlaceholder"),
                            className: `flex-1 border rounded px-3 py-2 text-center transition-all duration-200 ${y === "englishName" ? "border-blue-500 ring-2 ring-blue-200" : "hover:border-gray-400"}`,
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                        children: [
                          l.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              l.jsx("label", {
                                className:
                                  "w-32 bg-gray-200 px-4 py-2 rounded flex items-center justify-center min-h-[40px]",
                                children: o("drugModal.genericName"),
                              }),
                              l.jsx("input", {
                                type: "text",
                                name: "genericName",
                                value: String(i.genericName || ""),
                                onChange: R,
                                onFocus: () => x("genericName"),
                                onBlur: () => x(null),
                                placeholder: o(
                                  "drugModal.genericNamePlaceholder",
                                ),
                                className: `flex-1 border rounded px-3 py-2 text-center transition-all duration-200 ${y === "genericName" ? "border-blue-500 ring-2 ring-blue-200" : "hover:border-gray-400"}`,
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              l.jsx("label", {
                                className:
                                  "w-32 bg-gray-200 px-4 py-2 rounded flex items-center justify-center min-h-[40px]",
                                children: o("drugModal.chineseName"),
                              }),
                              l.jsx("input", {
                                type: "text",
                                name: "chineseName",
                                value: String(i.chineseName || ""),
                                onChange: R,
                                onFocus: () => x("chineseName"),
                                onBlur: () => x(null),
                                placeholder: o(
                                  "drugModal.chineseNamePlaceholder",
                                ),
                                className: `flex-1 border rounded px-3 py-2 text-center transition-all duration-200 ${y === "chineseName" ? "border-blue-500 ring-2 ring-blue-200" : "hover:border-gray-400"}`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                        children: [
                          l.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              l.jsx("label", {
                                className:
                                  "w-32 bg-gray-200 px-4 py-2 rounded flex items-center justify-center min-h-[40px]",
                                children: o("drugModal.nhiCode"),
                              }),
                              l.jsx("input", {
                                type: "text",
                                name: "healthInsuranceCode",
                                value: String(i.healthInsuranceCode || ""),
                                onChange: R,
                                onFocus: () => x("healthInsuranceCode"),
                                onBlur: () => x(null),
                                placeholder: o("drugModal.nhiCodePlaceholder"),
                                className: `flex-1 border rounded px-3 py-2 text-center transition-all duration-200 ${y === "healthInsuranceCode" ? "border-blue-500 ring-2 ring-blue-200" : "hover:border-gray-400"}`,
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              l.jsx("label", {
                                className:
                                  "w-32 bg-gray-200 px-4 py-2 rounded flex items-center justify-center min-h-[40px]",
                                children: "最小包裝單位",
                              }),
                              l.jsx("input", {
                                type: "text",
                                name: "minPackageUnit",
                                value: String(i.minPackageUnit || ""),
                                onChange: R,
                                onFocus: () => x("minPackageUnit"),
                                onBlur: () => x(null),
                                placeholder: "請輸入最小包裝單位",
                                className: `flex-1 border rounded px-3 py-2 text-center transition-all duration-200 ${y === "minPackageUnit" ? "border-blue-500 ring-2 ring-blue-200" : "hover:border-gray-400"}`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                        children: [
                          l.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              l.jsx("label", {
                                className:
                                  "w-32 bg-gray-200 px-4 py-2 rounded flex items-center justify-center min-h-[40px] transition-colors duration-200",
                                children: "藥品許可證字號",
                              }),
                              l.jsx("input", {
                                type: "text",
                                name: "licenseNumber",
                                value: String(i.licenseNumber || ""),
                                onChange: R,
                                onFocus: () => x("licenseNumber"),
                                onBlur: () => x(null),
                                placeholder: "請輸入藥品許可證字號",
                                className: `flex-1 border rounded px-3 py-2 text-center transition-all duration-200 ${y === "licenseNumber" ? "border-blue-500 ring-2 ring-blue-200" : "hover:border-gray-400"}`,
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              l.jsx("label", {
                                className:
                                  "w-32 bg-gray-200 px-4 py-2 rounded flex items-center justify-center min-h-[40px] transition-colors duration-200",
                                children: "懷孕用藥級別",
                              }),
                              l.jsx("input", {
                                type: "text",
                                name: "pregnancyLevel",
                                value: String(i.pregnancyLevel || ""),
                                onChange: R,
                                onFocus: () => x("pregnancyLevel"),
                                onBlur: () => x(null),
                                placeholder: "請輸入懷孕用藥級別",
                                className: `flex-1 border rounded px-3 py-2 text-center transition-all duration-200 ${y === "pregnancyLevel" ? "border-blue-500 ring-2 ring-blue-200" : "hover:border-gray-400"}`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                        children: [
                          l.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              l.jsx("label", {
                                className:
                                  "w-32 bg-gray-200 px-4 py-2 rounded flex items-center justify-center min-h-[40px] transition-colors duration-200",
                                children: "製造廠商",
                              }),
                              l.jsx("input", {
                                type: "text",
                                name: "brand",
                                value: String(i.brand || ""),
                                onChange: R,
                                onFocus: () => x("brand"),
                                onBlur: () => x(null),
                                placeholder: "請輸入製造廠商",
                                className: `flex-1 border rounded px-3 py-2 text-center transition-all duration-200 ${y === "brand" ? "border-blue-500 ring-2 ring-blue-200" : "hover:border-gray-400"}`,
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              l.jsx("label", {
                                className:
                                  "w-32 bg-gray-200 px-4 py-2 rounded flex items-center justify-center min-h-[40px] transition-colors duration-200",
                                children: "供應廠商",
                              }),
                              l.jsx("input", {
                                type: "text",
                                name: "supplier",
                                value: String(i.supplier || ""),
                                onChange: R,
                                onFocus: () => x("supplier"),
                                onBlur: () => x(null),
                                placeholder: "請輸入供應廠商",
                                className: `flex-1 border rounded px-3 py-2 text-center transition-all duration-200 ${y === "supplier" ? "border-blue-500 ring-2 ring-blue-200" : "hover:border-gray-400"}`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                          l.jsx("label", {
                            className:
                              "w-32 bg-gray-200 px-4 py-2 rounded flex items-center justify-center min-h-[40px] transition-colors duration-200",
                            children: "供應廠商證字號",
                          }),
                          l.jsx("input", {
                            type: "text",
                            name: "supplierLicense",
                            value: String(i.supplierLicense || ""),
                            onChange: R,
                            onFocus: () => x("supplierLicense"),
                            onBlur: () => x(null),
                            placeholder: "請輸入供應廠商證字號",
                            className: `flex-1 border rounded px-3 py-2 text-center transition-all duration-200 ${y === "supplierLicense" ? "border-blue-500 ring-2 ring-blue-200" : "hover:border-gray-400"}`,
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                        children: [
                          l.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              l.jsx("label", {
                                className:
                                  "w-32 bg-gray-200 px-4 py-2 rounded flex items-center justify-center min-h-[40px]",
                                children: o("drugModal.type"),
                              }),
                              l.jsxs("div", {
                                className:
                                  "flex-1 flex items-center gap-8 px-4",
                                children: [
                                  l.jsxs("label", {
                                    className:
                                      "flex items-center gap-2 cursor-pointer",
                                    children: [
                                      l.jsx("input", {
                                        type: "radio",
                                        name: "traditionalOrWestern",
                                        value: "西藥",
                                        checked:
                                          i.traditionalOrWestern === "西藥",
                                        onChange: R,
                                        className:
                                          "text-blue-600 focus:ring-blue-500",
                                      }),
                                      l.jsx("span", {
                                        className: "select-none",
                                        children: o("drugModal.western"),
                                      }),
                                    ],
                                  }),
                                  l.jsxs("label", {
                                    className:
                                      "flex items-center gap-2 cursor-pointer",
                                    children: [
                                      l.jsx("input", {
                                        type: "radio",
                                        name: "traditionalOrWestern",
                                        value: "中藥",
                                        checked:
                                          i.traditionalOrWestern === "中藥",
                                        onChange: R,
                                        className:
                                          "text-blue-600 focus:ring-blue-500",
                                      }),
                                      l.jsx("span", {
                                        className: "select-none",
                                        children: o("drugModal.chinese"),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              l.jsx("label", {
                                className:
                                  "w-32 bg-gray-200 px-4 py-2 rounded flex items-center justify-center min-h-[40px]",
                                children: o("drugModal.status"),
                              }),
                              l.jsxs("div", {
                                className:
                                  "flex-1 flex items-center gap-8 px-4",
                                children: [
                                  l.jsxs("label", {
                                    className:
                                      "flex items-center gap-2 cursor-pointer",
                                    children: [
                                      l.jsx("input", {
                                        type: "radio",
                                        name: "openStatus",
                                        checked: i.openStatus === !0,
                                        onChange: () =>
                                          a((I) => ({ ...I, openStatus: !0 })),
                                        className:
                                          "text-blue-600 focus:ring-blue-500",
                                      }),
                                      l.jsx("span", {
                                        className: "select-none",
                                        children: o("drugModal.active"),
                                      }),
                                    ],
                                  }),
                                  l.jsxs("label", {
                                    className:
                                      "flex items-center gap-2 cursor-pointer",
                                    children: [
                                      l.jsx("input", {
                                        type: "radio",
                                        name: "openStatus",
                                        checked: i.openStatus === !1,
                                        onChange: () =>
                                          a((I) => ({ ...I, openStatus: !1 })),
                                        className:
                                          "text-blue-600 focus:ring-blue-500",
                                      }),
                                      l.jsx("span", {
                                        className: "select-none",
                                        children: o("drugModal.inactive"),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "flex flex-wrap items-center gap-4 lg:gap-8 justify-center mt-4 bg-gray-50 p-4 rounded-lg",
                        children: [
                          l.jsxs("label", {
                            className: "flex items-center gap-2 cursor-pointer",
                            children: [
                              l.jsx("input", {
                                type: "checkbox",
                                name: "warningDrug",
                                checked: i.warningDrug === !0,
                                onChange: R,
                                className:
                                  "rounded border-gray-300 text-blue-600 focus:ring-blue-500",
                              }),
                              l.jsx("span", {
                                className: "select-none",
                                children: o("drugModal.alertDrug"),
                              }),
                            ],
                          }),
                          l.jsxs("label", {
                            className: "flex items-center gap-2 cursor-pointer",
                            children: [
                              l.jsx("input", {
                                type: "checkbox",
                                name: "highCostDrug",
                                checked: i.highCostDrug === !0,
                                onChange: R,
                                className:
                                  "rounded border-gray-300 text-blue-600 focus:ring-blue-500",
                              }),
                              l.jsx("span", {
                                className: "select-none",
                                children: o("drugModal.highCostDrug"),
                              }),
                            ],
                          }),
                          l.jsxs("label", {
                            className: "flex items-center gap-2 cursor-pointer",
                            children: [
                              l.jsx("input", {
                                type: "checkbox",
                                name: "biologicalProduct",
                                checked: i.biologicalProduct === !0,
                                onChange: R,
                                className:
                                  "rounded border-gray-300 text-blue-600 focus:ring-blue-500",
                              }),
                              l.jsx("span", {
                                className: "select-none",
                                children: o("drugModal.biologic"),
                              }),
                            ],
                          }),
                          l.jsxs("label", {
                            className: "flex items-center gap-2 cursor-pointer",
                            children: [
                              l.jsx("input", {
                                type: "checkbox",
                                name: "refrigeratedMedicine",
                                checked: i.refrigeratedMedicine === !0,
                                onChange: R,
                                className:
                                  "rounded border-gray-300 text-blue-600 focus:ring-blue-500",
                              }),
                              l.jsx("span", {
                                className: "select-none",
                                children: o("drugModal.refrigerated"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      r === "edit" &&
                        s &&
                        l.jsx("div", {
                          className: "flex justify-center pt-3 border-t",
                          children: l.jsxs("button", {
                            type: "button",
                            onClick: () => E(!0),
                            className:
                              "flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors duration-200",
                            children: [
                              l.jsx("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: l.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                }),
                              }),
                              "查看更多",
                            ],
                          }),
                        }),
                      l.jsxs("div", {
                        className:
                          "flex justify-center gap-8 mt-4 pt-3 border-t",
                        children: [
                          l.jsxs("button", {
                            type: "submit",
                            disabled: u,
                            className: `flex items-center gap-2 bg-black text-white px-8 py-2 rounded hover:bg-gray-800 transition-colors duration-200 ${u ? "opacity-50 cursor-not-allowed" : ""}`,
                            children: [
                              l.jsx("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: l.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M5 13l4 4L19 7",
                                }),
                              }),
                              o(u ? "system.processing" : "system.confirm"),
                            ],
                          }),
                          l.jsxs("button", {
                            type: "button",
                            onClick: t,
                            disabled: u,
                            className: `flex items-center gap-2 bg-red-600 text-white px-8 py-2 rounded hover:bg-red-700 transition-colors duration-200 ${u ? "opacity-50 cursor-not-allowed" : ""}`,
                            children: [
                              l.jsx("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: l.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M6 18L18 6M6 6l12 12",
                                }),
                              }),
                              o("system.cancel"),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          l.jsx(H0, { isOpen: p, message: h, onClose: () => m(!1) }),
          l.jsx(W0, {
            isOpen: d,
            onClose: () => g(!1),
            onSubmit: M,
            existingTypes: k,
          }),
        ],
      }),
      r === "edit" &&
        s &&
        l.jsx($0, { isOpen: v, onClose: () => E(!1), drug: s }),
    ],
  });
}
const uf = () => `${on()}/api/medPic`,
  V0 = async (e) => {
    var t;
    try {
      const n = await G.post(`${uf()}/get_by_code`, { ValueAry: [e] });
      return n.data.Code === 200 && (t = n.data.Data) != null && t.pic_base64
        ? n.data.Data.pic_base64
        : null;
    } catch (n) {
      return (console.error("Error fetching medication image:", n), null);
    }
  },
  cf = async (e, t, n) => {
    var r;
    try {
      const s = await new Promise((i, a) => {
        const u = new FileReader();
        (u.readAsDataURL(n),
          (u.onload = () => {
            const p = u.result.split(",")[1];
            i(p);
          }),
          (u.onerror = a));
      });
      return (
        (
          await G.post(`${uf()}/add`, {
            Data: [
              {
                code: e,
                name: t,
                extension:
                  ((r = n.name.split(".").pop()) == null
                    ? void 0
                    : r.toLowerCase()) || "jpg",
                pic_base64: s,
              },
            ],
          })
        ).data.Code === 200
      );
    } catch (s) {
      return (console.error("Error uploading medication image:", s), !1);
    }
  };
function G0({
  isOpen: e,
  onClose: t,
  drugCode: n,
  drugName: r,
  imageData: s,
  imageUrls: o,
  onImageUpdated: i,
}) {
  const [a, u] = w.useState(!1),
    [c, p] = w.useState(null),
    [m, h] = w.useState(1),
    [j, y] = w.useState(!1),
    [x, k] = w.useState({ x: 0, y: 0 }),
    [f, d] = w.useState({ x: 0, y: 0 }),
    [g, v] = w.useState(0),
    E = w.useRef(null),
    M = w.useRef(null);
  if (!e) return null;
  const N = o.length > 1,
    C = o.length > 0 ? o[g] : null,
    R = () => {
      N && (v((_) => (_ === 0 ? o.length - 1 : _ - 1)), L());
    },
    P = () => {
      N && (v((_) => (_ === o.length - 1 ? 0 : _ + 1)), L());
    },
    I = async (_) => {
      var H;
      const A = (H = _.target.files) == null ? void 0 : H[0];
      if (!A) return;
      if (!["image/jpeg", "image/jpg", "image/png"].includes(A.type)) {
        p("請選擇 JPG 或 PNG 格式的圖片");
        return;
      }
      if (A.size > 5 * 1024 * 1024) {
        p("圖片大小不能超過 5MB");
        return;
      }
      try {
        (u(!0),
          p(null),
          (await cf(n, r, A)) ? (i(), t()) : p("上傳失敗，請稍後再試"));
      } catch (z) {
        (console.error("Error uploading image:", z), p("上傳失敗，請稍後再試"));
      } finally {
        u(!1);
      }
    },
    B = (_) => {
      _.preventDefault();
      const A = _.deltaY * -0.01,
        $ = Math.min(Math.max(1, m + A), 4);
      h($);
    },
    q = (_) => {
      m > 1 && (y(!0), d({ x: _.clientX - x.x, y: _.clientY - x.y }));
    },
    Y = (_) => {
      if (j && m > 1) {
        const A = _.clientX - f.x,
          $ = _.clientY - f.y,
          H = M.current;
        if (H) {
          const z = H.getBoundingClientRect(),
            te = (z.width * (m - 1)) / 2,
            me = (z.height * (m - 1)) / 2;
          k({
            x: Math.min(Math.max(A, -te), te),
            y: Math.min(Math.max($, -me), me),
          });
        }
      }
    },
    xe = () => {
      y(!1);
    },
    T = () => {
      h((_) => Math.min(_ + 0.5, 4));
    },
    W = () => {
      h((_) => Math.max(_ - 0.5, 1));
    },
    L = () => {
      (h(1), k({ x: 0, y: 0 }));
    };
  return l.jsx("div", {
    className:
      "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4",
    onClick: t,
    children: l.jsxs("div", {
      className: "bg-white rounded-lg w-full max-w-4xl overflow-hidden",
      onClick: (_) => _.stopPropagation(),
      children: [
        l.jsxs("div", {
          className: "px-6 py-4 border-b flex justify-between items-center",
          children: [
            l.jsx("h2", {
              className: "text-xl font-bold truncate",
              children: r,
            }),
            l.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                N &&
                  l.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      l.jsx("button", {
                        onClick: R,
                        className: "p-1 hover:bg-gray-100 rounded",
                        title: "上一張",
                        children: l.jsx("svg", {
                          className: "w-6 h-6",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: l.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M15 19l-7-7 7-7",
                          }),
                        }),
                      }),
                      l.jsxs("span", {
                        className: "text-sm text-gray-600",
                        children: [g + 1, " / ", o.length],
                      }),
                      l.jsx("button", {
                        onClick: P,
                        className: "p-1 hover:bg-gray-100 rounded",
                        title: "下一張",
                        children: l.jsx("svg", {
                          className: "w-6 h-6",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: l.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5l7 7-7 7",
                          }),
                        }),
                      }),
                    ],
                  }),
                l.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    l.jsx("button", {
                      onClick: W,
                      disabled: m <= 1,
                      className:
                        "p-1 hover:bg-gray-100 rounded disabled:opacity-50",
                      title: "縮小",
                      children: l.jsx("svg", {
                        className: "w-6 h-6",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: l.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M20 12H4",
                        }),
                      }),
                    }),
                    l.jsxs("button", {
                      onClick: L,
                      disabled: m === 1,
                      className:
                        "px-2 py-1 text-sm hover:bg-gray-100 rounded disabled:opacity-50",
                      title: "重設",
                      children: [Math.round(m * 100), "%"],
                    }),
                    l.jsx("button", {
                      onClick: T,
                      disabled: m >= 4,
                      className:
                        "p-1 hover:bg-gray-100 rounded disabled:opacity-50",
                      title: "放大",
                      children: l.jsx("svg", {
                        className: "w-6 h-6",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: l.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M12 4v16m8-8H4",
                        }),
                      }),
                    }),
                  ],
                }),
                l.jsx("button", {
                  onClick: t,
                  className: "text-gray-500 hover:text-gray-700",
                  children: l.jsx("svg", {
                    className: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: l.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M6 18L18 6M6 6l12 12",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
        l.jsx("div", {
          className: "relative overflow-hidden bg-gray-100",
          style: { height: "calc(100vh - 300px)", minHeight: "400px" },
          onWheel: B,
          onMouseDown: q,
          onMouseMove: Y,
          onMouseUp: xe,
          onMouseLeave: xe,
          ref: M,
          children: l.jsx("div", {
            className:
              "absolute inset-0 flex items-center justify-center transition-transform duration-200",
            style: {
              transform: `scale(${m}) translate(${x.x / m}px, ${x.y / m}px)`,
              cursor: m > 1 ? (j ? "grabbing" : "grab") : "default",
            },
            children: C
              ? l.jsx("img", {
                  src: C,
                  alt: r,
                  className: "max-h-full max-w-full object-contain select-none",
                  draggable: !1,
                })
              : s
                ? l.jsx("img", {
                    src: `data:image/jpeg;base64,${s}`,
                    alt: r,
                    className:
                      "max-h-full max-w-full object-contain select-none",
                    draggable: !1,
                  })
                : l.jsx("svg", {
                    className: "w-24 h-24 text-gray-400",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: l.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                    }),
                  }),
          }),
        }),
        !C &&
          l.jsx("div", {
            className: "p-6 border-t",
            children: l.jsxs("div", {
              className: "flex flex-col items-center gap-4",
              children: [
                l.jsx("input", {
                  ref: E,
                  type: "file",
                  accept: "image/jpeg,image/jpg,image/png",
                  onChange: I,
                  className: "hidden",
                }),
                l.jsx("button", {
                  onClick: () => {
                    var _;
                    return (_ = E.current) == null ? void 0 : _.click();
                  },
                  disabled: a,
                  className:
                    "flex items-center gap-2 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed",
                  children: a
                    ? l.jsxs(l.Fragment, {
                        children: [
                          l.jsxs("svg", {
                            className: "animate-spin h-5 w-5",
                            viewBox: "0 0 24 24",
                            children: [
                              l.jsx("circle", {
                                className: "opacity-25",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                strokeWidth: "4",
                                fill: "none",
                              }),
                              l.jsx("path", {
                                className: "opacity-75",
                                fill: "currentColor",
                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                              }),
                            ],
                          }),
                          "上傳中...",
                        ],
                      })
                    : l.jsxs(l.Fragment, {
                        children: [
                          l.jsx("svg", {
                            className: "w-5 h-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: l.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
                            }),
                          }),
                          "上傳圖片",
                        ],
                      }),
                }),
                c &&
                  l.jsx("p", {
                    className: "text-red-600 text-sm",
                    children: c,
                  }),
              ],
            }),
          }),
      ],
    }),
  });
}
const Q0 = ({ drug: e, onModify: t, onDelete: n }) => {
    const { t: r } = pe(),
      [s, o] = w.useState(null),
      [i, a] = w.useState([]),
      [u, c] = w.useState(!1),
      [p, m] = w.useState(!1),
      h = async () => {
        if (
          (console.log("Drug imageUrl:", e.imageUrl),
          console.log("Drug object:", e),
          e.imageUrl && e.imageUrl.trim())
        ) {
          const y = e.imageUrl.split(";").filter((x) => x.trim());
          if ((console.log("Parsed URLs:", y), y.length > 0)) {
            (a(y), o(y[0]), console.log("Using imageUrl image:", y[0]));
            return;
          }
        }
        if (
          (console.log("No imageUrl found, using API method"), !!e.drugCode)
        ) {
          c(!0);
          try {
            const y = await V0(e.drugCode);
            (o(y), a([]));
          } catch (y) {
            console.error("Error loading medication image:", y);
          } finally {
            c(!1);
          }
        }
      };
    w.useEffect(() => {
      h();
    }, [e.drugCode]);
    const j = (y) => {
      (y.stopPropagation(), m(!0));
    };
    return l.jsxs(l.Fragment, {
      children: [
        l.jsxs("div", {
          className:
            "bg-white rounded-lg shadow-md p-3 iphone:p-4 flex flex-col",
          children: [
            l.jsx("div", {
              className:
                "w-full aspect-square max-w-[200px] bg-gray-100 rounded-lg mb-4 mx-auto flex items-center justify-center overflow-hidden cursor-pointer",
              onClick: j,
              children: u
                ? l.jsx("div", {
                    className: "flex items-center justify-center",
                    children: l.jsxs("svg", {
                      className: "animate-spin h-8 w-8 text-gray-400",
                      viewBox: "0 0 24 24",
                      children: [
                        l.jsx("circle", {
                          className: "opacity-25",
                          cx: "12",
                          cy: "12",
                          r: "10",
                          stroke: "currentColor",
                          strokeWidth: "4",
                          fill: "none",
                        }),
                        l.jsx("path", {
                          className: "opacity-75",
                          fill: "currentColor",
                          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                        }),
                      ],
                    }),
                  })
                : s && i.length > 0
                  ? l.jsx("img", {
                      src: s,
                      alt: e.englishName,
                      className: "w-full h-full object-cover",
                    })
                  : s
                    ? l.jsx("img", {
                        src: `data:image/jpeg;base64,${s}`,
                        alt: e.englishName,
                        className: "w-full h-full object-cover",
                      })
                    : l.jsx("svg", {
                        className:
                          "w-12 h-12 iphone:w-16 iphone:h-16 text-gray-400",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: l.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                        }),
                      }),
            }),
            l.jsxs("div", {
              className: "space-y-2 flex-grow",
              children: [
                l.jsx("h3", {
                  className:
                    "font-medium text-base iphone:text-lg line-clamp-2",
                  children: e.englishName,
                }),
                l.jsx("p", {
                  className:
                    "text-gray-600 text-sm iphone:text-base line-clamp-2",
                  children: e.chineseName,
                }),
                l.jsxs("p", {
                  className: "text-xs iphone:text-sm text-gray-500",
                  children: [r("table.drugCode"), ": ", e.drugCode],
                }),
              ],
            }),
            l.jsxs("div", {
              className: "mt-4 flex gap-2",
              children: [
                l.jsxs("button", {
                  onClick: () => t(e),
                  className:
                    "flex-1 flex items-center justify-center gap-2 bg-black text-white px-3 iphone:px-4 py-2 rounded-md hover:bg-gray-800 text-sm iphone:text-base",
                  children: [
                    l.jsx("svg", {
                      className: "w-4 h-4 iphone:w-5 iphone:h-5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: l.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                      }),
                    }),
                    r("system.edit"),
                  ],
                }),
                l.jsx("button", {
                  onClick: (y) => {
                    (y.stopPropagation(), n(e));
                  },
                  className:
                    "flex items-center justify-center gap-2 bg-red-600 text-white px-3 iphone:px-4 py-2 rounded-md hover:bg-red-700 text-sm iphone:text-base",
                  children: l.jsx("svg", {
                    className: "w-4 h-4 iphone:w-5 iphone:h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: l.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
        l.jsx(G0, {
          isOpen: p,
          onClose: () => m(!1),
          drugCode: e.drugCode,
          drugName: e.englishName,
          imageData: s,
          imageUrls: i,
          onImageUpdated: h,
        }),
      ],
    });
  },
  K0 = ["全部", "藥碼", "料號", "藥名", "中文名"],
  q0 = ["N", "1", "2", "3", "4"],
  Y0 = ["西藥", "中藥"],
  yu = {
    全部: "All",
    藥碼: "table.drugCode",
    料號: "table.materialNumber",
    藥名: "table.drugName",
    中文名: "table.chineseName",
  };
function J0({ onSearch: e, categoryOptions: t }) {
  const { t: n, language: r } = pe(),
    [s, o] = w.useState(""),
    [i, a] = w.useState("全部"),
    [u, c] = w.useState(null),
    [p, m] = w.useState(null),
    [h, j] = w.useState(null),
    [y, x] = w.useState(null),
    k = () => {
      e({
        query: s,
        column: i,
        fileStatus: u,
        drugKind: p,
        medicineType: h,
        category: y,
      });
    },
    f = () => {
      (o(""),
        c(null),
        m(null),
        j(null),
        x(null),
        e({
          query: "",
          column: i,
          fileStatus: null,
          drugKind: null,
          medicineType: null,
          category: null,
        }));
    },
    d = (N) => (N === "全部" ? (r === "zh" ? "全部" : "All") : n(yu[N])),
    g = (N) => {
      (c(N),
        e({
          query: s,
          column: i,
          fileStatus: N,
          drugKind: p,
          medicineType: h,
          category: y,
        }));
    },
    v = (N) => {
      (m(N),
        e({
          query: s,
          column: i,
          fileStatus: u,
          drugKind: N,
          medicineType: h,
          category: y,
        }));
    },
    E = (N) => {
      (j(N),
        e({
          query: s,
          column: i,
          fileStatus: u,
          drugKind: p,
          medicineType: N,
          category: y,
        }));
    },
    M = (N) => {
      (x(N),
        e({
          query: s,
          column: i,
          fileStatus: u,
          drugKind: p,
          medicineType: h,
          category: N,
        }));
    };
  return l.jsxs("div", {
    className: "w-full",
    children: [
      l.jsxs("div", {
        className:
          "flex flex-wrap gap-8 bg-white p-6 rounded-lg shadow w-full mb-4",
        children: [
          l.jsxs("div", {
            className: "flex flex-col gap-3",
            children: [
              l.jsx("span", {
                className: "text-sm font-medium text-gray-700",
                children: "狀態",
              }),
              l.jsxs("div", {
                className: "flex gap-4",
                children: [
                  l.jsxs("label", {
                    className:
                      "inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer transition-colors",
                    children: [
                      l.jsx("input", {
                        type: "radio",
                        className:
                          "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500",
                        name: "status",
                        checked: u === !0,
                        onChange: () => g(!0),
                      }),
                      l.jsx("span", {
                        className: "ml-2 text-base text-gray-700",
                        children: "開檔中",
                      }),
                    ],
                  }),
                  l.jsxs("label", {
                    className:
                      "inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer transition-colors",
                    children: [
                      l.jsx("input", {
                        type: "radio",
                        className:
                          "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500",
                        name: "status",
                        checked: u === !1,
                        onChange: () => g(!1),
                      }),
                      l.jsx("span", {
                        className: "ml-2 text-base text-gray-700",
                        children: "關檔中",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          l.jsxs("div", {
            className: "flex flex-col gap-3",
            children: [
              l.jsx("span", {
                className: "text-sm font-medium text-gray-700",
                children: "級別",
              }),
              l.jsx("div", {
                className: "flex gap-4",
                children: q0.map((N) =>
                  l.jsxs(
                    "label",
                    {
                      className:
                        "inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer transition-colors",
                      children: [
                        l.jsx("input", {
                          type: "radio",
                          className:
                            "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500",
                          name: "level",
                          checked: p === N,
                          onChange: () => v(N),
                        }),
                        l.jsx("span", {
                          className: "ml-2 text-base text-gray-700",
                          children: N,
                        }),
                      ],
                    },
                    N,
                  ),
                ),
              }),
            ],
          }),
          l.jsxs("div", {
            className: "flex flex-col gap-3",
            children: [
              l.jsx("span", {
                className: "text-sm font-medium text-gray-700",
                children: "藥品類型",
              }),
              l.jsx("div", {
                className: "flex gap-4",
                children: Y0.map((N) =>
                  l.jsxs(
                    "label",
                    {
                      className:
                        "inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer transition-colors",
                      children: [
                        l.jsx("input", {
                          type: "radio",
                          className:
                            "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500",
                          name: "medicineType",
                          checked: h === N,
                          onChange: () => E(N),
                        }),
                        l.jsx("span", {
                          className: "ml-2 text-base text-gray-700",
                          children: N,
                        }),
                      ],
                    },
                    N,
                  ),
                ),
              }),
            ],
          }),
          l.jsxs("div", {
            className: "flex flex-col gap-3",
            children: [
              l.jsx("span", {
                className: "text-sm font-medium text-gray-700",
                children: "藥品類別",
              }),
              l.jsx("div", {
                className: "flex gap-4 flex-wrap",
                children: t.map((N) =>
                  l.jsxs(
                    "label",
                    {
                      className:
                        "inline-flex items-center px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer transition-colors",
                      children: [
                        l.jsx("input", {
                          type: "radio",
                          className:
                            "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500",
                          name: "category",
                          checked: y === N,
                          onChange: () => M(N),
                        }),
                        l.jsx("span", {
                          className: "ml-2 text-base text-gray-700",
                          children: N,
                        }),
                      ],
                    },
                    N,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      l.jsxs("div", {
        className: "flex gap-2 items-center",
        children: [
          l.jsx("select", {
            className:
              "border rounded-md px-3 py-2 bg-white min-w-[120px] h-10",
            value: i,
            onChange: (N) => a(N.target.value),
            children: K0.map((N) =>
              l.jsx("option", { value: N, children: d(N) }, N),
            ),
          }),
          l.jsxs("div", {
            className: "flex-1 flex gap-2 items-center",
            children: [
              l.jsx("input", {
                type: "text",
                className: "flex-1 border rounded-md px-3 py-2 h-10",
                placeholder: `${n("system.search")}${i === "全部" ? "" : " " + n(yu[i])}...`,
                value: s,
                onChange: (N) => o(N.target.value),
                onKeyDown: (N) => {
                  N.key === "Enter" && k();
                },
              }),
              l.jsx("button", {
                className:
                  "bg-black text-white px-4 py-2 rounded-md whitespace-nowrap hover:bg-gray-800 h-10 flex items-center gap-2",
                onClick:
                  s || u !== null || p !== null || h !== null || y !== null
                    ? f
                    : k,
                children:
                  s || u !== null || p !== null || h !== null || y !== null
                    ? l.jsxs(l.Fragment, {
                        children: [
                          l.jsx("svg", {
                            className: "w-5 h-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: l.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M6 18L18 6M6 6l12 12",
                            }),
                          }),
                          n("system.clear"),
                        ],
                      })
                    : l.jsxs(l.Fragment, {
                        children: [
                          l.jsx("svg", {
                            className: "w-5 h-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: l.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                            }),
                          }),
                          n("system.search"),
                        ],
                      }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function X0({ drugs: e, onSuccess: t }) {
  const { t: n } = pe(),
    [r, s] = w.useState(!1),
    [o, i] = w.useState([]),
    [a, u] = w.useState(!1),
    [c, p] = w.useState(!1),
    m = async (x) => {
      var f;
      if (!(x != null && x.length)) return;
      (s(!0), i([]), u(!0));
      const k = [];
      for (const d of x) {
        const g = d.name,
          v = (f = g.split(".").pop()) == null ? void 0 : f.toLowerCase(),
          E = g.replace(`.${v}`, ""),
          M = e.find((N) => N.drugCode === E);
        if (!M) {
          k.push({
            fileName: g,
            status: "error",
            message: n("batchUpload.noMatch").replace("{code}", E),
          });
          continue;
        }
        try {
          const N = await cf(E, M.englishName, d);
          k.push({
            fileName: g,
            status: N ? "success" : "error",
            message: n(N ? "batchUpload.success" : "batchUpload.error"),
          });
        } catch {
          k.push({
            fileName: g,
            status: "error",
            message: n("batchUpload.error"),
          });
        }
        i([...k]);
      }
      (s(!1), t());
    },
    h = (x) => {
      (x.preventDefault(), p(!0));
    },
    j = (x) => {
      (x.preventDefault(), p(!1));
    },
    y = (x) => {
      (x.preventDefault(), p(!1), m(x.dataTransfer.files));
    };
  return l.jsxs("div", {
    className: "space-y-4",
    children: [
      l.jsx("div", {
        className: "bg-white rounded-lg shadow p-6",
        children: l.jsxs("div", {
          className: "flex items-start gap-4",
          children: [
            l.jsxs("div", {
              className: "flex-1",
              children: [
                l.jsx("h3", {
                  className: "text-lg font-semibold mb-2",
                  children: n("batchUpload.title"),
                }),
                l.jsxs("div", {
                  className: "text-sm text-gray-600 space-y-2",
                  children: [
                    l.jsx("p", { children: n("batchUpload.instructions") }),
                    l.jsxs("ul", {
                      className: "list-disc ml-5 space-y-1",
                      children: [
                        l.jsx("li", {
                          children: n("batchUpload.fileNameRule"),
                        }),
                        l.jsx("li", {
                          children: n("batchUpload.supportedFormats"),
                        }),
                        l.jsx("li", { children: n("batchUpload.sizeLimit") }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            l.jsxs("div", {
              children: [
                l.jsx("input", {
                  type: "file",
                  accept: "image/jpeg,image/jpg,image/png",
                  multiple: !0,
                  onChange: (x) => m(x.target.files),
                  className: "hidden",
                  id: "batch-image-upload",
                  disabled: r,
                }),
                l.jsx("label", {
                  htmlFor: "batch-image-upload",
                  className: `flex flex-col items-center justify-center gap-3 w-48 h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${c ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400 hover:bg-gray-50"} ${r ? "opacity-50 cursor-not-allowed" : ""}`,
                  onDragOver: h,
                  onDragLeave: j,
                  onDrop: y,
                  children: r
                    ? l.jsxs(l.Fragment, {
                        children: [
                          l.jsxs("svg", {
                            className: "animate-spin h-8 w-8 text-gray-400",
                            viewBox: "0 0 24 24",
                            children: [
                              l.jsx("circle", {
                                className: "opacity-25",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                strokeWidth: "4",
                                fill: "none",
                              }),
                              l.jsx("path", {
                                className: "opacity-75",
                                fill: "currentColor",
                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                              }),
                            ],
                          }),
                          l.jsx("span", {
                            className: "text-sm text-gray-500",
                            children: n("batchUpload.uploading"),
                          }),
                        ],
                      })
                    : l.jsxs(l.Fragment, {
                        children: [
                          l.jsx("svg", {
                            className: "w-8 h-8 text-gray-400",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: l.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
                            }),
                          }),
                          l.jsxs("div", {
                            className: "text-center",
                            children: [
                              l.jsx("span", {
                                className: "text-sm font-medium text-blue-600",
                                children: n("batchUpload.selectFiles"),
                              }),
                              l.jsx("span", {
                                className: "text-sm text-gray-500 block",
                                children: n("batchUpload.dragDrop"),
                              }),
                            ],
                          }),
                        ],
                      }),
                }),
              ],
            }),
          ],
        }),
      }),
      a &&
        o.length > 0 &&
        l.jsxs("div", {
          className: "bg-white rounded-lg shadow p-4",
          children: [
            l.jsx("h4", {
              className: "font-medium mb-3",
              children: n("batchUpload.status"),
            }),
            l.jsx("div", {
              className: "space-y-2 max-h-60 overflow-auto",
              children: o.map((x, k) =>
                l.jsxs(
                  "div",
                  {
                    className: `flex items-center justify-between p-2 rounded ${x.status === "success" ? "bg-green-100" : "bg-red-100"}`,
                    children: [
                      l.jsxs("div", {
                        className: "flex items-center gap-2 flex-1",
                        children: [
                          l.jsx("svg", {
                            className: `w-5 h-5 ${x.status === "success" ? "text-green-600" : "text-red-600"}`,
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children:
                              x.status === "success"
                                ? l.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M5 13l4 4L19 7",
                                  })
                                : l.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12",
                                  }),
                          }),
                          l.jsx("span", {
                            className: "text-sm truncate",
                            children: x.fileName,
                          }),
                        ],
                      }),
                      l.jsx("span", {
                        className: `text-sm ${x.status === "success" ? "text-green-800" : "text-red-800"}`,
                        children: x.message,
                      }),
                    ],
                  },
                  k,
                ),
              ),
            }),
          ],
        }),
    ],
  });
}
const Z0 = {
    藥碼: "drugCode",
    料號: "materialNumber",
    藥名: "englishName",
    中文名: "chineseName",
    全部: null,
  },
  xu = "drugListViewMode",
  eg = 4,
  tg = ({
    currentPage: e,
    totalPages: t,
    onPageChange: n,
    pageInput: r,
    onPageInputChange: s,
    onPageInputSubmit: o,
    t: i,
  }) =>
    l.jsxs("div", {
      className: "flex items-center gap-2",
      children: [
        l.jsx("button", {
          onClick: () => n(Math.max(e - 1, 1)),
          disabled: e === 1,
          className:
            "px-3 py-1 rounded border bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm",
          children: i("pagination.previous"),
        }),
        l.jsxs("form", {
          onSubmit: o,
          className: "flex items-center gap-2",
          children: [
            l.jsx("input", {
              type: "text",
              value: r,
              onChange: s,
              placeholder: e.toString(),
              className: "w-16 px-2 py-1 border rounded text-center text-sm",
              "aria-label": i("pagination.page"),
            }),
            l.jsxs("span", {
              className: "text-sm text-gray-600",
              children: [i("pagination.of"), " ", t],
            }),
          ],
        }),
        l.jsx("button", {
          onClick: () => n(Math.min(e + 1, t)),
          disabled: e === t,
          className:
            "px-3 py-1 rounded border bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm",
          children: i("pagination.next"),
        }),
      ],
    });
function ng({
  drugs: e,
  isLoading: t,
  onModify: n,
  onStatusChange: r,
  onDrugDeleted: s,
  defaultViewMode: o = "table",
  onViewModeChange: i,
}) {
  const { t: a } = pe(),
    [u, c] = w.useState(1),
    [p, m] = w.useState(""),
    [h, j] = w.useState({
      query: "",
      column: "全部",
      fileStatus: null,
      drugKind: null,
      medicineType: null,
      category: null,
    }),
    [y, x] = w.useState(() =>
      localStorage.getItem(xu) === "card" ? "card" : o,
    ),
    [k, f] = w.useState(null),
    [d, g] = w.useState(0),
    [v, E] = w.useState(50),
    M = w.useRef(null),
    N = w.useRef(null),
    C = w.useRef(null),
    [R, P] = w.useState(!1),
    [I, B] = w.useState(!1),
    [q, Y] = w.useState(!1),
    [xe, T] = w.useState([]),
    [W, L] = w.useState(!1),
    [_, A] = w.useState(null),
    [$, H] = w.useState(!1);
  (w.useEffect(() => {
    (localStorage.setItem(xu, y), i == null || i(y));
  }, [y, i]),
    w.useEffect(() => {
      const D = Array.from(
        new Set(e.map((U) => U.category).filter((U) => !!U && U.trim() !== "")),
      ).sort();
      T(D);
    }, [e]),
    w.useEffect(() => {
      (c(1), m(""));
    }, [h, y]),
    w.useEffect(() => {
      C.current && (C.current.scrollTop = 0);
    }, [u]),
    w.useEffect(() => {
      if (y === "card") {
        const D = () => {
          if (M.current) {
            const Qe = window
              .getComputedStyle(M.current)
              .gridTemplateColumns.split(" ").length;
            E(Qe * eg);
          }
        };
        return (
          D(),
          window.addEventListener("resize", D),
          () => {
            window.removeEventListener("resize", D);
          }
        );
      } else E(50);
    }, [y]));
  const z = (D, U) => D.toLowerCase().includes(U.toLowerCase()),
    te = (D, U) => D.toLowerCase().startsWith(U.toLowerCase()),
    me = w.useMemo(
      () =>
        e.filter((D) => {
          if (
            (h.fileStatus !== null && D.openStatus !== h.fileStatus) ||
            (h.drugKind !== null && D.controlLevel !== h.drugKind) ||
            (h.medicineType !== null &&
              D.traditionalOrWestern !== h.medicineType) ||
            (h.category !== null &&
              h.category.trim() !== "" &&
              D.category !== h.category)
          )
            return !1;
          if (!h.query) return !0;
          if (h.column === "全部")
            return (
              te(D.drugCode, h.query) ||
              te(D.materialNumber, h.query) ||
              z(D.englishName, h.query) ||
              z(D.chineseName, h.query)
            );
          const U = Z0[h.column];
          if (!U) return !0;
          const Qe = D[U],
            Bt = String(Qe || "");
          return U === "drugCode" || U === "materialNumber"
            ? te(Bt, h.query)
            : z(Bt, h.query);
        }),
      [h, e],
    ),
    Fe = Math.ceil(me.length / v),
    vt = (u - 1) * v,
    Wi = vt + v,
    Tr = me.slice(vt, Wi),
    ff = async (D, U) => {
      D.stopPropagation();
      try {
        f(U);
        const Qe = e.find((io) => io.id === U);
        if (!Qe) return;
        const Bt = await A0(U, !Qe.openStatus);
        r(Bt);
      } catch (Qe) {
        console.error("Error updating drug status:", Qe);
      } finally {
        f(null);
      }
    },
    pf = (D) => {
      const U = D.target.value;
      (U === "" || /^\d+$/.test(U)) && m(U);
    },
    mf = (D) => {
      D.preventDefault();
      const U = parseInt(p, 10);
      (U >= 1 && U <= Fe && c(U), m(""));
    },
    hf = () => {
      g((D) => D + 1);
    },
    gf = async () => {
      try {
        (B(!0), await D0());
      } catch (D) {
        console.error("Error downloading sample:", D);
      } finally {
        B(!1);
      }
    },
    yf = async (D) => {
      var Bt;
      const U = (Bt = D.target.files) == null ? void 0 : Bt[0];
      if (!U) return;
      const Qe = U.name.toLowerCase();
      if (!Qe.endsWith(".xlsx") && !Qe.endsWith(".xls")) {
        alert("請選擇 .xls 或 .xlsx 格式的檔案");
        return;
      }
      try {
        (P(!0), await I0(U), alert("檔案上傳成功"), window.location.reload());
      } catch (io) {
        (console.error("Error uploading file:", io),
          alert("檔案上傳失敗，請稍後再試"));
      } finally {
        (P(!1), N.current && (N.current.value = ""));
      }
    },
    xf = async () => {
      try {
        Y(!0);
        const D = me.map((U) => ({
          GUID: U.id,
          CODE: U.drugCode,
          SKDIACODE: U.materialNumber,
          CHT_NAME: U.chineseName,
          NAME: U.englishName,
          DIANAME: U.genericName,
          HI_CODE: U.healthInsuranceCode,
          TREATMENT_CATEGORY_NAME: U.treatmentCategoryName,
          PHARMACOLOGICAL_NAME: U.pharmacologicalName,
          INDICATION: U.indications,
          HI_REGULATION: U.healthInsuranceRegulation,
          INSTRUCTIONS: U.instructions,
          PIL_URL: U.instructionSheetUrl,
          MANUAL_URL: U.manualUrl,
          FILE_STATUS: U.openStatus ? "開檔中" : "關檔中",
          PREGNANCY_LEVEL: U.pregnancyLevel,
          TORW: U.traditionalOrWestern,
          TYPE: U.category,
          DeviceBasics: U.deviceBasics || [],
        }));
        await U0(D);
      } catch (D) {
        (console.error("Error downloading filtered data:", D),
          alert("下載失敗，請稍後再試"));
      } finally {
        Y(!1);
      }
    },
    Vi = (D) => {
      (A(D), L(!0));
    },
    vf = async () => {
      if (_)
        try {
          (H(!0), await z0(_.id), s(_.id), L(!1), A(null));
        } catch (D) {
          (console.error("Error deleting drug:", D),
            alert("刪除失敗，請稍後再試"));
        } finally {
          H(!1);
        }
    },
    wf = () => {
      (L(!1), A(null));
    };
  return t
    ? l.jsx("div", {
        className: "flex items-center justify-center h-64",
        children: l.jsx("div", {
          className: "text-gray-500",
          children: a("system.loading"),
        }),
      })
    : l.jsxs("div", {
        children: [
          l.jsx("div", {
            className: "space-y-4 mb-4",
            children: l.jsxs("div", {
              className: "flex flex-col gap-4",
              children: [
                l.jsx("div", {
                  className: "flex-grow",
                  children: l.jsx(J0, { onSearch: j, categoryOptions: xe }),
                }),
                l.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-4 justify-between",
                  children: [
                    l.jsxs("div", {
                      className: "flex gap-2 flex-wrap",
                      children: [
                        l.jsxs("button", {
                          onClick: gf,
                          disabled: I,
                          className:
                            "flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap h-10",
                          children: [
                            I
                              ? l.jsxs("svg", {
                                  className: "animate-spin h-5 w-5",
                                  viewBox: "0 0 24 24",
                                  children: [
                                    l.jsx("circle", {
                                      className: "opacity-25",
                                      cx: "12",
                                      cy: "12",
                                      r: "10",
                                      stroke: "currentColor",
                                      strokeWidth: "4",
                                      fill: "none",
                                    }),
                                    l.jsx("path", {
                                      className: "opacity-75",
                                      fill: "currentColor",
                                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                    }),
                                  ],
                                })
                              : l.jsx("svg", {
                                  className: "w-5 h-5",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: l.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                                  }),
                                }),
                            "範例下載",
                          ],
                        }),
                        l.jsx("input", {
                          ref: N,
                          type: "file",
                          accept: ".xls,.xlsx",
                          onChange: yf,
                          className: "hidden",
                        }),
                        l.jsxs("button", {
                          onClick: () => {
                            var D;
                            return (D = N.current) == null ? void 0 : D.click();
                          },
                          disabled: R,
                          className:
                            "flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap h-10",
                          children: [
                            R
                              ? l.jsxs("svg", {
                                  className: "animate-spin h-5 w-5",
                                  viewBox: "0 0 24 24",
                                  children: [
                                    l.jsx("circle", {
                                      className: "opacity-25",
                                      cx: "12",
                                      cy: "12",
                                      r: "10",
                                      stroke: "currentColor",
                                      strokeWidth: "4",
                                      fill: "none",
                                    }),
                                    l.jsx("path", {
                                      className: "opacity-75",
                                      fill: "currentColor",
                                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                    }),
                                  ],
                                })
                              : l.jsx("svg", {
                                  className: "w-5 h-5",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: l.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10",
                                  }),
                                }),
                            "藥檔上傳",
                          ],
                        }),
                        l.jsxs("button", {
                          onClick: xf,
                          disabled: q || me.length === 0,
                          className:
                            "flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap h-10",
                          children: [
                            q
                              ? l.jsxs("svg", {
                                  className: "animate-spin h-5 w-5",
                                  viewBox: "0 0 24 24",
                                  children: [
                                    l.jsx("circle", {
                                      className: "opacity-25",
                                      cx: "12",
                                      cy: "12",
                                      r: "10",
                                      stroke: "currentColor",
                                      strokeWidth: "4",
                                      fill: "none",
                                    }),
                                    l.jsx("path", {
                                      className: "opacity-75",
                                      fill: "currentColor",
                                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                    }),
                                  ],
                                })
                              : l.jsx("svg", {
                                  className: "w-5 h-5",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: l.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                                  }),
                                }),
                            "藥檔下載",
                          ],
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "flex gap-2 flex-shrink-0",
                      children: [
                        l.jsxs("button", {
                          onClick: () => x("card"),
                          className: `px-4 py-2 rounded-md flex items-center gap-2 h-10 ${y === "card" ? "bg-black text-white" : "bg-white text-gray-700 border hover:bg-gray-50"}`,
                          children: [
                            l.jsx("svg", {
                              className: "w-5 h-5",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: l.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
                              }),
                            }),
                            a("viewMode.card"),
                          ],
                        }),
                        l.jsxs("button", {
                          onClick: () => x("table"),
                          className: `px-4 py-2 rounded-md flex items-center gap-2 h-10 ${y === "table" ? "bg-black text-white" : "bg-white text-gray-700 border hover:bg-gray-50"}`,
                          children: [
                            l.jsx("svg", {
                              className: "w-5 h-5",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: l.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
                              }),
                            }),
                            a("viewMode.table"),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          y === "card" &&
            l.jsx("div", {
              className: "mt-4",
              children: l.jsx(X0, { drugs: e, onSuccess: hf }),
            }),
          Tr.length > 0 &&
            l.jsxs("div", {
              className:
                "sticky top-32 z-30 flex justify-between items-center mb-2 px-3 py-3 iphone:px-4 bg-white rounded-lg shadow border",
              children: [
                l.jsxs("div", {
                  className: "text-sm text-gray-700",
                  children: [
                    a("pagination.showing")
                      .replace("{start}", String(vt + 1))
                      .replace("{end}", String(Math.min(Wi, me.length))),
                    ", ",
                    a("pagination.total").replace("{total}", String(me.length)),
                  ],
                }),
                l.jsx(tg, {
                  currentPage: u,
                  totalPages: Fe,
                  onPageChange: c,
                  pageInput: p,
                  onPageInputChange: pf,
                  onPageInputSubmit: mf,
                  t: a,
                }),
              ],
            }),
          y === "card"
            ? l.jsx("div", {
                ref: M,
                className:
                  "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-3 iphone:gap-4 mb-6 mt-4",
                children: Tr.map((D) =>
                  l.jsx(
                    Q0,
                    { drug: D, onModify: n, onDelete: Vi },
                    `${D.id}-${d}`,
                  ),
                ),
              })
            : l.jsx("div", {
                className: "bg-white rounded-lg shadow overflow-hidden",
                children: l.jsx("div", {
                  className: "relative overflow-hidden rounded-lg",
                  children: l.jsx("div", {
                    ref: C,
                    className: "overflow-auto",
                    style: { maxHeight: "calc(100vh - 250px)" },
                    children: l.jsxs("table", {
                      className: "min-w-full divide-y divide-gray-200",
                      children: [
                        l.jsx("thead", {
                          className: "bg-gray-50 sticky top-0 z-20",
                          children: l.jsxs("tr", {
                            children: [
                              l.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider bg-gray-50 sticky top-0",
                                children: a("table.drugCode"),
                              }),
                              l.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider bg-gray-50 sticky top-0",
                                children: a("table.materialNumber"),
                              }),
                              l.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider bg-gray-50 sticky top-0",
                                children: a("table.drugName"),
                              }),
                              l.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider bg-gray-50 sticky top-0",
                                children: a("table.unit"),
                              }),
                              l.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider bg-gray-50 sticky top-0",
                                children: a("table.controlLevel"),
                              }),
                              l.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider bg-gray-50 sticky top-0",
                                children: a("table.category"),
                              }),
                              l.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider bg-gray-50 sticky top-0",
                                children: a("table.medicineType"),
                              }),
                              l.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider bg-gray-50 sticky top-0",
                                children: a("table.status"),
                              }),
                              l.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider bg-gray-50 sticky top-0",
                                children: a("table.actions"),
                              }),
                            ],
                          }),
                        }),
                        l.jsx("tbody", {
                          className: "bg-white divide-y divide-gray-200",
                          children: Tr.map((D) =>
                            l.jsxs(
                              "tr",
                              {
                                className: "hover:bg-gray-50",
                                children: [
                                  l.jsx("td", {
                                    className:
                                      "px-6 py-4 whitespace-nowrap text-base text-gray-900",
                                    children: D.drugCode,
                                  }),
                                  l.jsx("td", {
                                    className:
                                      "px-6 py-4 whitespace-nowrap text-base text-gray-900",
                                    children: D.materialNumber,
                                  }),
                                  l.jsxs("td", {
                                    className:
                                      "px-6 py-4 text-base text-gray-900",
                                    children: [
                                      D.englishName,
                                      l.jsx("br", {}),
                                      D.chineseName,
                                    ],
                                  }),
                                  l.jsx("td", {
                                    className:
                                      "px-6 py-4 text-base text-gray-900",
                                    children: D.minPackageUnit,
                                  }),
                                  l.jsx("td", {
                                    className:
                                      "px-6 py-4 whitespace-nowrap text-base text-gray-900",
                                    children: D.controlLevel,
                                  }),
                                  l.jsx("td", {
                                    className:
                                      "px-6 py-4 whitespace-nowrap text-base text-gray-900",
                                    children: D.category,
                                  }),
                                  l.jsx("td", {
                                    className:
                                      "px-6 py-4 whitespace-nowrap text-base text-gray-900",
                                    children: D.traditionalOrWestern,
                                  }),
                                  l.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: l.jsx("button", {
                                      onClick: (U) => ff(U, D.id),
                                      disabled: k === D.id,
                                      className: `px-3 py-1 rounded-full text-base font-medium ${D.openStatus ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800 hover:bg-red-200"} ${k === D.id ? "opacity-50 cursor-not-allowed" : ""}`,
                                      children:
                                        k === D.id
                                          ? a("system.processing")
                                          : D.openStatus
                                            ? a("dropdown.active")
                                            : a("dropdown.inactive"),
                                    }),
                                  }),
                                  l.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: l.jsxs("div", {
                                      className: "flex gap-2",
                                      children: [
                                        l.jsx("button", {
                                          onClick: () => n(D),
                                          className:
                                            "text-black hover:text-gray-700",
                                          children: l.jsx("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: l.jsx("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: 2,
                                              d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                                            }),
                                          }),
                                        }),
                                        l.jsx("button", {
                                          onClick: () => Vi(D),
                                          className:
                                            "text-red-600 hover:text-red-800",
                                          children: l.jsx("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: l.jsx("path", {
                                              strokeLinecap: "round",
                                              strokeLinejoin: "round",
                                              strokeWidth: 2,
                                              d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              },
                              D.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
          Tr.length === 0 &&
            l.jsx("div", {
              className: "text-center py-8 text-gray-500",
              children: a("drugList.noResults"),
            }),
          W &&
            _ &&
            l.jsx("div", {
              className:
                "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
              children: l.jsxs("div", {
                className: "bg-white rounded-lg p-6 max-w-md w-full mx-4",
                children: [
                  l.jsx("h3", {
                    className: "text-lg font-semibold mb-4",
                    children: "確認刪除",
                  }),
                  l.jsx("p", {
                    className: "text-gray-600 mb-2",
                    children: "確定要刪除以下藥品嗎？",
                  }),
                  l.jsxs("div", {
                    className: "bg-gray-50 p-3 rounded mb-4",
                    children: [
                      l.jsxs("p", {
                        className: "text-sm",
                        children: [
                          l.jsx("strong", { children: "藥碼：" }),
                          _.drugCode,
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-sm",
                        children: [
                          l.jsx("strong", { children: "藥名：" }),
                          _.englishName,
                        ],
                      }),
                      l.jsxs("p", {
                        className: "text-sm",
                        children: [
                          l.jsx("strong", { children: "中文名：" }),
                          _.chineseName,
                        ],
                      }),
                    ],
                  }),
                  l.jsx("p", {
                    className: "text-sm text-red-600 mb-6",
                    children: "此操作無法復原",
                  }),
                  l.jsxs("div", {
                    className: "flex justify-end gap-4",
                    children: [
                      l.jsx("button", {
                        onClick: wf,
                        disabled: $,
                        className:
                          "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50",
                        children: "取消",
                      }),
                      l.jsx("button", {
                        onClick: vf,
                        disabled: $,
                        className:
                          "px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50 flex items-center gap-2",
                        children: $
                          ? l.jsxs(l.Fragment, {
                              children: [
                                l.jsxs("svg", {
                                  className: "animate-spin h-5 w-5",
                                  viewBox: "0 0 24 24",
                                  children: [
                                    l.jsx("circle", {
                                      className: "opacity-25",
                                      cx: "12",
                                      cy: "12",
                                      r: "10",
                                      stroke: "currentColor",
                                      strokeWidth: "4",
                                      fill: "none",
                                    }),
                                    l.jsx("path", {
                                      className: "opacity-75",
                                      fill: "currentColor",
                                      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                    }),
                                  ],
                                }),
                                "刪除中...",
                              ],
                            })
                          : "確認刪除",
                      }),
                    ],
                  }),
                ],
              }),
            }),
        ],
      });
}
const nn = () => `${on()}/api/medGroup`,
  rg = async () => {
    try {
      const e = await G.post(`${nn()}/get_all_group`, {});
      if (e.data.Code === 200) return e.data.Data;
      throw new Error(e.data.Result || "Failed to fetch medication groups");
    } catch (e) {
      throw (console.error("Error fetching medication groups:", e), e);
    }
  },
  sg = async (e) => {
    try {
      const t = await G.post(`${nn()}/add_group_name`, { ValueAry: [e] });
      if (t.data.Code === -200) throw new Error(t.data.Result);
      if (t.data.Code !== 200)
        throw new Error("Failed to create medication group");
      const n = await G.post(`${nn()}/get_all_group`, {});
      if (n.data.Code === 200) {
        const r = n.data.Data.find((s) => s.NAME === e);
        if (r) return r;
      }
      throw new Error("Failed to retrieve the new group information");
    } catch (t) {
      throw t instanceof Error
        ? t
        : new Error("Failed to create medication group");
    }
  },
  og = async (e) => {
    try {
      const t = await G.post(`${nn()}/get_group_by_guid`, { ValueAry: [e] });
      if (t.data.Code === 200 && t.data.Data.length > 0) return t.data.Data[0];
      throw new Error(t.data.Result || "Failed to fetch group medications");
    } catch (t) {
      throw (console.error("Error fetching group medications:", t), t);
    }
  },
  lg = async (e, t) => {
    try {
      const n = await G.post(`${nn()}/delete_meds_in_group`, {
        Data: { GUID: e, MedClasses: t.map((r) => ({ CODE: r })) },
      });
      if (n.data.Code !== 200)
        throw new Error(
          n.data.Result || "Failed to delete medications from group",
        );
    } catch (n) {
      throw (console.error("Error deleting medications from group:", n), n);
    }
  },
  ig = async (e, t) => {
    try {
      const n = await G.post(`${nn()}/add_meds_in_group`, {
        Data: { GUID: e, MedClasses: t.map((r) => ({ CODE: r })) },
      });
      if (n.data.Code !== 200)
        throw new Error(n.data.Result || "Failed to add medications to group");
    } catch (n) {
      throw (console.error("Error adding medications to group:", n), n);
    }
  },
  ag = async (e) => {
    try {
      const t = await G.post(`${nn()}/delete_group_by_guid`, { Value: e });
      if (t.data.Code === 200) return t.data.Result;
      throw new Error(t.data.Result || "Failed to delete group");
    } catch (t) {
      throw (console.error("Error deleting group:", t), t);
    }
  },
  ug = ({ isOpen: e, onClose: t, onConfirm: n, count: r }) =>
    e
      ? l.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[200]",
          children: l.jsxs("div", {
            className:
              "bg-white rounded-lg p-6 max-w-sm w-full mx-4 animate-slide-down",
            children: [
              l.jsx("h3", {
                className: "text-lg font-semibold mb-4",
                children: "確認刪除",
              }),
              l.jsxs("p", {
                className: "text-gray-600 mb-6",
                children: ["確定要從群組中移除選擇的 ", r, " 個藥品嗎？"],
              }),
              l.jsxs("div", {
                className: "flex justify-end gap-4",
                children: [
                  l.jsx("button", {
                    onClick: t,
                    className:
                      "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded",
                    children: "取消",
                  }),
                  l.jsx("button", {
                    onClick: n,
                    className:
                      "px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",
                    children: "確認刪除",
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
function cg({
  selectedGroup: e,
  medications: t,
  isLoading: n,
  onMedicationsDeleted: r,
}) {
  const [s, o] = w.useState(!1),
    [i, a] = w.useState(!1),
    [u, c] = w.useState([]),
    [p, m] = w.useState(!1),
    [h, j] = w.useState(!1),
    [y, x] = w.useState("CODE"),
    [k, f] = w.useState("asc"),
    d = (C) => {
      y === C ? f(k === "asc" ? "desc" : "asc") : (x(C), f("asc"));
    },
    g = [...t].sort((C, R) => {
      const P = C[y] || "",
        I = R[y] || "",
        B = P.localeCompare(I, "zh-TW", { numeric: !0 });
      return k === "asc" ? B : -B;
    }),
    v = ({ field: C, children: R }) =>
      l.jsx("th", {
        className:
          "p-3 text-left text-sm font-medium text-gray-600 cursor-pointer hover:bg-gray-100 transition-colors select-none",
        onClick: () => d(C),
        children: R,
      }),
    E = (C, R) => {
      (C.stopPropagation(),
        c((P) => {
          const I = P.includes(R) ? P.filter((B) => B !== R) : [...P, R];
          return (a(I.length > 0), I);
        }));
    },
    M = async () => {
      if (!(!e || u.length === 0))
        try {
          (j(!0),
            await lg(e, u),
            o(!0),
            setTimeout(() => o(!1), 3e3),
            c([]),
            a(!1),
            r == null || r());
        } catch (C) {
          console.error("Error deleting medications:", C);
        } finally {
          (j(!1), m(!1));
        }
    },
    N = () => {
      (c([]), a(!1));
    };
  return n
    ? l.jsx("div", {
        className: "flex items-center justify-center h-64",
        children: l.jsx("div", {
          className: "text-gray-500",
          children: "載入中...",
        }),
      })
    : e
      ? l.jsxs("div", {
          className: "bg-white rounded-lg shadow relative",
          children: [
            s &&
              l.jsxs("div", {
                className:
                  "absolute top-4 right-4 bg-green-100 text-green-800 px-4 py-2 rounded-md flex items-center gap-2 animate-slide-in",
                children: [
                  l.jsx("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: l.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M5 13l4 4L19 7",
                    }),
                  }),
                  "刪除成功",
                ],
              }),
            l.jsx("div", {
              className: `${i ? "pb-20" : ""}`,
              children: l.jsx("div", {
                className: "overflow-x-auto",
                children: l.jsxs("table", {
                  className: "min-w-full table-fixed",
                  children: [
                    l.jsx("thead", {
                      children: l.jsxs("tr", {
                        className: "bg-gray-50",
                        children: [
                          l.jsx("th", {
                            className:
                              "w-16 p-3 text-left text-sm font-medium text-gray-600",
                            children: "選擇",
                          }),
                          l.jsx(v, { field: "CODE", children: "藥碼" }),
                          l.jsx(v, { field: "SKDIACODE", children: "料號" }),
                          l.jsx(v, { field: "NAME", children: "藥名" }),
                          l.jsx(v, { field: "CHT_NAME", children: "中文名" }),
                          l.jsx(v, { field: "DRUGKIND", children: "管制級別" }),
                        ],
                      }),
                    }),
                    l.jsx("tbody", {
                      className: "divide-y divide-gray-200",
                      children: g.map((C) =>
                        l.jsxs(
                          "tr",
                          {
                            className: "hover:bg-gray-50",
                            children: [
                              l.jsx("td", {
                                className: "p-3",
                                children: l.jsx("input", {
                                  type: "checkbox",
                                  checked: u.includes(C.CODE),
                                  onChange: (R) => R.stopPropagation(),
                                  onClick: (R) => E(R, C.CODE),
                                  className: "rounded border-gray-300",
                                  disabled: h,
                                }),
                              }),
                              l.jsx("td", {
                                className: "p-3 text-sm text-gray-600",
                                children: C.CODE,
                              }),
                              l.jsx("td", {
                                className: "p-3 text-sm text-gray-600",
                                children: C.SKDIACODE,
                              }),
                              l.jsx("td", {
                                className: "p-3 text-sm text-gray-600",
                                children: C.NAME,
                              }),
                              l.jsx("td", {
                                className: "p-3 text-sm text-gray-600",
                                children: C.CHT_NAME,
                              }),
                              l.jsx("td", {
                                className: "p-3 text-sm text-gray-600",
                                children: C.DRUGKIND,
                              }),
                            ],
                          },
                          C.GUID,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
            }),
            i &&
              l.jsx("div", {
                className:
                  "fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-md animate-slide-up",
                children: l.jsxs("div", {
                  className: "max-w-7xl mx-auto flex justify-end gap-4",
                  children: [
                    l.jsx("button", {
                      onClick: N,
                      className:
                        "px-4 py-2 text-gray-700 bg-white border rounded-md hover:bg-gray-50 transition-colors",
                      disabled: h,
                      children: "取消",
                    }),
                    l.jsx("button", {
                      onClick: () => m(!0),
                      className:
                        "px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors flex items-center gap-2",
                      disabled: h,
                      children: h
                        ? l.jsxs(l.Fragment, {
                            children: [
                              l.jsxs("svg", {
                                className: "animate-spin h-5 w-5",
                                viewBox: "0 0 24 24",
                                children: [
                                  l.jsx("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4",
                                    fill: "none",
                                  }),
                                  l.jsx("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                  }),
                                ],
                              }),
                              "處理中...",
                            ],
                          })
                        : l.jsxs(l.Fragment, {
                            children: [
                              l.jsx("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: l.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                                }),
                              }),
                              "刪除",
                            ],
                          }),
                    }),
                  ],
                }),
              }),
            l.jsx(ug, {
              isOpen: p,
              onClose: () => m(!1),
              onConfirm: M,
              count: u.length,
            }),
          ],
        })
      : l.jsx("div", {
          className: "text-center py-8 text-gray-500",
          children: "請選擇一個群組以查看藥品清單",
        });
}
function vu({
  isOpen: e,
  onClose: t,
  onSubmit: n,
  mode: r = "add",
  initialData: s,
}) {
  const [o, i] = w.useState((s == null ? void 0 : s.name) || ""),
    [a, u] = w.useState(""),
    [c, p] = w.useState(!1);
  if (!e) return null;
  const m = async (h) => {
    if ((h.preventDefault(), !o.trim())) {
      u("請輸入群組名稱");
      return;
    }
    try {
      (p(!0), u(""), await sg(o), n({ name: o }), i(""), t());
    } catch (j) {
      j instanceof Error ? u(j.message) : u("新增群組失敗");
    } finally {
      p(!1);
    }
  };
  return l.jsx("div", {
    className:
      "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
    children: l.jsxs("div", {
      className: "bg-white rounded-lg p-6 w-[400px] animate-slide-down",
      onClick: (h) => h.stopPropagation(),
      children: [
        l.jsxs("div", {
          className: "flex justify-between items-center mb-6",
          children: [
            l.jsx("h2", {
              className: "text-xl font-bold",
              children: r === "add" ? "新增群組" : "編輯群組",
            }),
            l.jsx("button", {
              onClick: t,
              className: "text-gray-500 hover:text-gray-700",
              disabled: c,
              children: l.jsx("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: l.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M6 18L18 6M6 6l12 12",
                }),
              }),
            }),
          ],
        }),
        l.jsxs("form", {
          onSubmit: m,
          children: [
            l.jsxs("div", {
              className: "mb-6",
              children: [
                l.jsx("label", {
                  className: "block text-sm font-medium text-gray-700 mb-2",
                  children: "群組名稱",
                }),
                l.jsx("input", {
                  type: "text",
                  value: o,
                  onChange: (h) => {
                    (i(h.target.value), u(""));
                  },
                  placeholder: "輸入群組名稱...",
                  className: `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${a ? "border-red-500" : "border-gray-300"}`,
                  disabled: c,
                }),
                a &&
                  l.jsx("p", {
                    className: "mt-2 text-sm text-red-600",
                    children: a,
                  }),
              ],
            }),
            l.jsxs("div", {
              className: "flex justify-end gap-4",
              children: [
                l.jsx("button", {
                  type: "button",
                  onClick: t,
                  className:
                    "px-4 py-2 border rounded-md hover:bg-gray-50 disabled:opacity-50",
                  disabled: c,
                  children: "取消",
                }),
                l.jsx("button", {
                  type: "submit",
                  className:
                    "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2",
                  disabled: c || !o.trim(),
                  children: c
                    ? l.jsxs(l.Fragment, {
                        children: [
                          l.jsxs("svg", {
                            className: "animate-spin h-5 w-5",
                            viewBox: "0 0 24 24",
                            children: [
                              l.jsx("circle", {
                                className: "opacity-25",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                strokeWidth: "4",
                                fill: "none",
                              }),
                              l.jsx("path", {
                                className: "opacity-75",
                                fill: "currentColor",
                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                              }),
                            ],
                          }),
                          "處理中...",
                        ],
                      })
                    : "確認",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const dg = ({ isOpen: e, onClose: t, onConfirm: n, groupName: r }) =>
  e
    ? l.jsx("div", {
        className:
          "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        children: l.jsxs("div", {
          className: "bg-white rounded-lg p-6 w-[400px]",
          onClick: (s) => s.stopPropagation(),
          children: [
            l.jsxs("div", {
              className: "flex justify-between items-center mb-6",
              children: [
                l.jsx("h2", {
                  className: "text-xl font-bold",
                  children: "刪除群組",
                }),
                l.jsx("button", {
                  onClick: t,
                  className: "text-gray-500 hover:text-gray-700",
                  children: l.jsx("svg", {
                    className: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: l.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M6 18L18 6M6 6l12 12",
                    }),
                  }),
                }),
              ],
            }),
            l.jsxs("div", {
              className: "mb-6",
              children: [
                l.jsxs("p", {
                  className: "text-gray-700",
                  children: [
                    "確定要刪除群組 ",
                    l.jsxs("span", {
                      className: "font-semibold",
                      children: ['"', r, '"'],
                    }),
                    " 嗎？",
                  ],
                }),
                l.jsx("p", {
                  className: "text-sm text-gray-500 mt-2",
                  children: "此操作無法復原。",
                }),
              ],
            }),
            l.jsxs("div", {
              className: "flex justify-end gap-4",
              children: [
                l.jsx("button", {
                  onClick: t,
                  className: "px-4 py-2 border rounded-md hover:bg-gray-50",
                  children: "取消",
                }),
                l.jsx("button", {
                  onClick: n,
                  className:
                    "px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700",
                  children: "確認刪除",
                }),
              ],
            }),
          ],
        }),
      })
    : null;
function Bi({
  onSelect: e,
  selectedMedications: t,
  existingMedicationCodes: n = [],
}) {
  const { t: r } = pe(),
    [s, o] = w.useState(""),
    [i, a] = w.useState([]),
    [u, c] = w.useState([]),
    [p, m] = w.useState(!1),
    [h, j] = w.useState(!1),
    y = w.useRef(null);
  (w.useEffect(() => {
    (async () => {
      try {
        m(!0);
        const d = await lf();
        a(d);
      } catch (d) {
        console.error("Error loading medications:", d);
      } finally {
        m(!1);
      }
    })();
  }, []),
    w.useEffect(() => {
      const f = (d) => {
        y.current && !y.current.contains(d.target) && j(!1);
      };
      return (
        document.addEventListener("mousedown", f),
        () => document.removeEventListener("mousedown", f)
      );
    }, []),
    w.useEffect(() => {
      if (!s.trim()) {
        c([]);
        return;
      }
      const f = s.toLowerCase(),
        d = i
          .filter(
            (g) =>
              (g.drugCode.toLowerCase().includes(f) ||
                g.englishName.toLowerCase().includes(f)) &&
              !n.includes(g.drugCode),
          )
          .slice(0, 10);
      c(d);
    }, [s, i]));
  const x = (f) => {
      if (!t.find((d) => d.id === f.id)) {
        const d = [...t, f];
        e(d);
      }
      (o(""), j(!1));
    },
    k = (f) => {
      const d = t.filter((g) => g.id !== f);
      e(d);
    };
  return l.jsxs("div", {
    className: "space-y-4",
    children: [
      l.jsxs("div", {
        ref: y,
        className: "relative",
        children: [
          l.jsx("div", {
            className: "flex gap-2",
            children: l.jsxs("div", {
              className: "relative flex-1",
              children: [
                l.jsx("input", {
                  type: "text",
                  value: s,
                  onChange: (f) => {
                    (o(f.target.value), j(!0));
                  },
                  onFocus: () => j(!0),
                  placeholder: r("search.placeholder"),
                  className:
                    "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                }),
                p &&
                  l.jsx("div", {
                    className: "absolute right-3 top-1/2 -translate-y-1/2",
                    children: l.jsxs("svg", {
                      className: "animate-spin h-5 w-5 text-gray-400",
                      viewBox: "0 0 24 24",
                      children: [
                        l.jsx("circle", {
                          className: "opacity-25",
                          cx: "12",
                          cy: "12",
                          r: "10",
                          stroke: "currentColor",
                          strokeWidth: "4",
                          fill: "none",
                        }),
                        l.jsx("path", {
                          className: "opacity-75",
                          fill: "currentColor",
                          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                        }),
                      ],
                    }),
                  }),
              ],
            }),
          }),
          h &&
            u.length > 0 &&
            l.jsx("div", {
              className:
                "absolute z-50 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto",
              children: u.map((f) =>
                l.jsxs(
                  "button",
                  {
                    onClick: () => x(f),
                    className:
                      "w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center justify-between",
                    children: [
                      l.jsxs("div", {
                        children: [
                          l.jsx("div", {
                            className: "font-medium",
                            children: f.englishName,
                          }),
                          l.jsxs("div", {
                            className: "text-sm text-gray-600",
                            children: [r("table.drugCode"), ": ", f.drugCode],
                          }),
                        ],
                      }),
                      l.jsx("div", {
                        className: "text-blue-600",
                        children: l.jsx("svg", {
                          className: "w-5 h-5",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: l.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 4v16m8-8H4",
                          }),
                        }),
                      }),
                    ],
                  },
                  f.id,
                ),
              ),
            }),
        ],
      }),
      t.length > 0 &&
        l.jsxs("div", {
          className: "space-y-2",
          children: [
            l.jsxs("h3", {
              className: "font-medium text-gray-700",
              children: [r("medication.selected"), ":"],
            }),
            l.jsx("div", {
              className: "flex flex-wrap gap-2",
              children: t.map((f) =>
                l.jsxs(
                  "div",
                  {
                    className:
                      "bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2",
                    children: [
                      l.jsx("span", {
                        className: "text-sm",
                        children: f.englishName,
                      }),
                      l.jsx("button", {
                        onClick: () => k(f.id),
                        className: "text-gray-500 hover:text-gray-700",
                        children: l.jsx("svg", {
                          className: "w-4 h-4",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: l.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M6 18L18 6M6 6l12 12",
                          }),
                        }),
                      }),
                    ],
                  },
                  f.id,
                ),
              ),
            }),
          ],
        }),
    ],
  });
}
function fg() {
  var H;
  const { t: e } = pe(),
    [t, n] = w.useState(!1),
    [r, s] = w.useState(!1),
    [o, i] = w.useState(!1),
    [a, u] = w.useState(null),
    [c, p] = w.useState(""),
    [m, h] = w.useState([]),
    [j, y] = w.useState([]),
    [x, k] = w.useState(!1),
    [f, d] = w.useState(!1),
    [g, v] = w.useState(!1),
    [E, M] = w.useState(!1),
    [N, C] = w.useState([]),
    [R, P] = w.useState(!1),
    [I, B] = w.useState(""),
    [q, Y] = w.useState(""),
    xe = async () => {
      try {
        k(!0);
        const z = await rg();
        return (h(z), z);
      } catch (z) {
        return (console.error("Error loading groups:", z), []);
      } finally {
        k(!1);
      }
    };
  w.useEffect(() => {
    xe();
  }, []);
  const T = async (z) => {
      if (!z) {
        y([]);
        return;
      }
      try {
        d(!0);
        const te = await og(z);
        te && te.MedClasses ? y(te.MedClasses) : y([]);
      } catch (te) {
        (console.error("Error loading group medications:", te), y([]));
      } finally {
        d(!1);
      }
    },
    W = (z) => {
      (p(z), T(z), C([]), Y(""));
    },
    L = async (z) => {
      try {
        const me = (await xe()).find((Fe) => Fe.NAME === z.name);
        (me && (p(me.GUID), T(me.GUID)),
          B(e("group.addSuccess")),
          P(!0),
          setTimeout(() => P(!1), 3e3));
      } catch (te) {
        console.error("Error handling new group:", te);
      }
    },
    _ = (z) => {
      (console.log("Updated group data:", z), s(!1), u(null));
    },
    A = async () => {
      if (c)
        try {
          (M(!0),
            await ag(c),
            await xe(),
            p(""),
            y([]),
            C([]),
            B(e("group.deleteSuccess")),
            P(!0),
            setTimeout(() => P(!1), 3e3));
        } catch (z) {
          (console.error("Error deleting group:", z),
            Y(z instanceof Error ? z.message : e("error.deleteGroup")));
        } finally {
          (M(!1), i(!1));
        }
    },
    $ = async () => {
      if (!(!c || N.length === 0))
        try {
          (v(!0),
            Y(""),
            await ig(
              c,
              N.map((z) => z.drugCode),
            ),
            await T(c),
            C([]),
            B(e("medication.addSuccess")),
            P(!0),
            setTimeout(() => P(!1), 3e3));
        } catch (z) {
          (console.error("Error adding medications to group:", z),
            Y(z instanceof Error ? z.message : e("error.addMedications")));
        } finally {
          v(!1);
        }
    };
  return x
    ? l.jsx("div", {
        className: "flex items-center justify-center h-64",
        children: l.jsx("div", {
          className: "text-gray-500",
          children: e("system.loading"),
        }),
      })
    : l.jsxs("div", {
        className: "p-4",
        children: [
          R &&
            l.jsxs("div", {
              className:
                "fixed top-4 right-4 bg-green-100 text-green-800 px-4 py-2 rounded-md flex items-center gap-2 animate-slide-in z-[200]",
              children: [
                l.jsx("svg", {
                  className: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: l.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M5 13l4 4L19 7",
                  }),
                }),
                I,
              ],
            }),
          q &&
            l.jsxs("div", {
              className:
                "fixed top-4 right-4 bg-red-100 text-red-800 px-4 py-2 rounded-md flex items-center gap-2 animate-slide-in z-[200]",
              children: [
                l.jsx("svg", {
                  className: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: l.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                  }),
                }),
                q,
              ],
            }),
          l.jsxs("div", {
            className: "flex gap-4 my-4",
            children: [
              l.jsxs("button", {
                className:
                  "flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700",
                onClick: () => n(!0),
                children: [
                  l.jsx("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: l.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M12 4v16m8-8H4",
                    }),
                  }),
                  e("group.add"),
                ],
              }),
              c &&
                l.jsx("button", {
                  className:
                    "flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700",
                  onClick: () => i(!0),
                  disabled: E,
                  children: E
                    ? l.jsxs(l.Fragment, {
                        children: [
                          l.jsxs("svg", {
                            className: "animate-spin h-5 w-5",
                            viewBox: "0 0 24 24",
                            children: [
                              l.jsx("circle", {
                                className: "opacity-25",
                                cx: "12",
                                cy: "12",
                                r: "10",
                                stroke: "currentColor",
                                strokeWidth: "4",
                                fill: "none",
                              }),
                              l.jsx("path", {
                                className: "opacity-75",
                                fill: "currentColor",
                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                              }),
                            ],
                          }),
                          e("system.processing"),
                        ],
                      })
                    : l.jsxs(l.Fragment, {
                        children: [
                          l.jsx("svg", {
                            className: "w-5 h-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: l.jsx("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                            }),
                          }),
                          e("group.delete"),
                        ],
                      }),
                }),
            ],
          }),
          l.jsx("div", {
            className: "mb-4",
            children: l.jsxs("select", {
              className: "w-full border rounded-md px-3 py-2 bg-white",
              value: c,
              onChange: (z) => W(z.target.value),
              children: [
                l.jsx("option", { value: "", children: e("group.select") }),
                m.map((z) =>
                  l.jsx("option", { value: z.GUID, children: z.NAME }, z.GUID),
                ),
              ],
            }),
          }),
          c &&
            l.jsxs(l.Fragment, {
              children: [
                l.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    l.jsx(Bi, {
                      onSelect: C,
                      selectedMedications: N,
                      existingMedicationCodes: j.map((z) => z.CODE),
                    }),
                    N.length > 0 &&
                      l.jsx("div", {
                        className: "flex justify-end",
                        children: l.jsx("button", {
                          onClick: $,
                          disabled: g,
                          className:
                            "flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed",
                          children: g
                            ? l.jsxs(l.Fragment, {
                                children: [
                                  l.jsxs("svg", {
                                    className: "animate-spin h-5 w-5",
                                    viewBox: "0 0 24 24",
                                    children: [
                                      l.jsx("circle", {
                                        className: "opacity-25",
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "4",
                                        fill: "none",
                                      }),
                                      l.jsx("path", {
                                        className: "opacity-75",
                                        fill: "currentColor",
                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                      }),
                                    ],
                                  }),
                                  e("system.processing"),
                                ],
                              })
                            : l.jsxs(l.Fragment, {
                                children: [
                                  l.jsx("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: l.jsx("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M12 4v16m8-8H4",
                                    }),
                                  }),
                                  e("group.addMedication"),
                                ],
                              }),
                        }),
                      }),
                  ],
                }),
                l.jsx("div", {
                  className: "mt-4",
                  children: l.jsx(cg, {
                    selectedGroup: c,
                    medications: j,
                    isLoading: f,
                    onMedicationsDeleted: () => T(c),
                  }),
                }),
              ],
            }),
          !c &&
            l.jsx("div", {
              className: "text-center py-8 text-gray-500",
              children: e("group.noSelection"),
            }),
          l.jsx(vu, {
            isOpen: t,
            onClose: () => n(!1),
            onSubmit: L,
            mode: "add",
          }),
          l.jsx(vu, {
            isOpen: r,
            onClose: () => {
              (s(!1), u(null));
            },
            onSubmit: _,
            mode: "edit",
            initialData: a || void 0,
          }),
          l.jsx(dg, {
            isOpen: o,
            onClose: () => i(!1),
            onConfirm: A,
            groupName:
              ((H = m.find((z) => z.GUID === c)) == null ? void 0 : H.NAME) ||
              "",
          }),
        ],
      });
}
const $i = () => `${on()}/api/medList`,
  pg = async () => {
    var e, t;
    try {
      const n = await G.post(`${$i()}/get_all`, {
        TableName: "medList_public",
      });
      if (n.data.Code === 200) return n.data.Data || [];
      throw new Error(n.data.Result || "載入藥品清單失敗，請稍後再試");
    } catch (n) {
      if (G.isAxiosError(n)) {
        if (
          (t = (e = n.response) == null ? void 0 : e.data) != null &&
          t.Result
        )
          throw new Error(n.response.data.Result);
        if (!n.response) throw new Error("網路連線異常，請檢查網路狀態");
      }
      throw new Error("載入藥品清單失敗，請稍後再試");
    }
  },
  mg = async (e) => {
    var t, n, r;
    if (!e.length) throw new Error("請選擇要新增的藥品");
    try {
      const s = await G.post(`${$i()}/add_meds_in_list`, {
        TableName: "medList_public",
        ValueAry: [e.join(";")],
      });
      if (!s.data || s.data.Code !== 200)
        throw new Error(
          ((t = s.data) == null ? void 0 : t.Result) ||
            "新增藥品失敗，請稍後再試",
        );
    } catch (s) {
      if ((console.error("Add medications error:", s), G.isAxiosError(s))) {
        if (
          (r = (n = s.response) == null ? void 0 : n.data) != null &&
          r.Result
        )
          throw new Error(s.response.data.Result);
        if (!s.response) throw new Error("網路連線異常，請檢查網路狀態");
      }
      throw new Error("新增藥品失敗，請稍後再試");
    }
  },
  hg = async (e) => {
    var t, n, r;
    if (!e.length) throw new Error("請選擇要刪除的藥品");
    try {
      const s = await G.post(`${$i()}/delete_meds_in_list`, {
        TableName: "medList_public",
        ValueAry: [e.join(";")],
      });
      if (!s.data || s.data.Code !== 200)
        throw new Error(
          ((t = s.data) == null ? void 0 : t.Result) ||
            "刪除藥品失敗，請稍後再試",
        );
    } catch (s) {
      if ((console.error("Delete medications error:", s), G.isAxiosError(s))) {
        if (
          (r = (n = s.response) == null ? void 0 : n.data) != null &&
          r.Result
        )
          throw new Error(s.response.data.Result);
        if (!s.response) throw new Error("網路連線異常，請檢查網路狀態");
      }
      throw new Error("刪除藥品失敗，請稍後再試");
    }
  },
  gg = ({ isOpen: e, onClose: t, onConfirm: n, count: r }) => {
    const { t: s } = pe();
    return e
      ? l.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[200]",
          children: l.jsxs("div", {
            className:
              "bg-white rounded-lg p-6 max-w-sm w-full mx-4 animate-slide-down",
            children: [
              l.jsx("h3", {
                className: "text-lg font-semibold mb-4",
                children: s("system.confirm"),
              }),
              l.jsx("p", {
                className: "text-gray-600 mb-6",
                children: s("medication.deleteConfirm").replace(
                  "{count}",
                  String(r),
                ),
              }),
              l.jsxs("div", {
                className: "flex justify-end gap-4",
                children: [
                  l.jsx("button", {
                    onClick: t,
                    className:
                      "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded",
                    children: s("system.cancel"),
                  }),
                  l.jsx("button", {
                    onClick: n,
                    className:
                      "px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",
                    children: s("system.confirm"),
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  };
function yg() {
  const { t: e } = pe(),
    [t, n] = w.useState([]),
    [r, s] = w.useState(!1),
    [o, i] = w.useState(!1),
    [a, u] = w.useState(!1),
    [c, p] = w.useState([]),
    [m, h] = w.useState([]),
    [j, y] = w.useState(!1),
    [x, k] = w.useState(!1),
    [f, d] = w.useState(""),
    [g, v] = w.useState(""),
    [E, M] = w.useState("CODE"),
    [N, C] = w.useState("asc"),
    R = (T) => {
      E === T ? C(N === "asc" ? "desc" : "asc") : (M(T), C("asc"));
    },
    P = [...t].sort((T, W) => {
      var $, H;
      const L = (($ = T.med_cloud) == null ? void 0 : $[E]) || "",
        _ = ((H = W.med_cloud) == null ? void 0 : H[E]) || "",
        A = L.localeCompare(_, "zh-TW", { numeric: !0 });
      return N === "asc" ? A : -A;
    }),
    I = ({ field: T, children: W }) =>
      l.jsx("th", {
        className:
          "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors select-none",
        onClick: () => R(T),
        children: W,
      }),
    B = async () => {
      try {
        (s(!0), v(""));
        const W = (await pg()).filter((L) => L.med_cloud);
        n(W);
      } catch (T) {
        (console.error("Error loading medications:", T),
          T instanceof Error ? v(T.message) : v(e("error.loadMedications")));
      } finally {
        s(!1);
      }
    };
  w.useEffect(() => {
    B();
  }, []);
  const q = async () => {
      if (c.length === 0) {
        v(e("medication.selectToAdd"));
        return;
      }
      try {
        (i(!0), v(""));
        const T = c.map((W) => W.drugCode);
        (await mg(T),
          await B(),
          p([]),
          d(e("medication.addSuccess")),
          k(!0),
          setTimeout(() => k(!1), 3e3));
      } catch (T) {
        (console.error("Error adding medications:", T),
          T instanceof Error ? v(T.message) : v(e("error.addMedications")));
      } finally {
        i(!1);
      }
    },
    Y = async () => {
      if (m.length === 0) {
        v(e("medication.selectToDelete"));
        return;
      }
      try {
        (u(!0),
          v(""),
          await hg(m),
          await B(),
          h([]),
          d(e("medication.deleteSuccess")),
          k(!0),
          setTimeout(() => k(!1), 3e3));
      } catch (T) {
        (console.error("Error deleting medications:", T),
          T instanceof Error ? v(T.message) : v(e("error.deleteMedications")));
      } finally {
        (u(!1), y(!1));
      }
    },
    xe = (T, W) => {
      (T.stopPropagation(),
        h((L) => (L.includes(W) ? L.filter((A) => A !== W) : [...L, W])));
    };
  return r
    ? l.jsx("div", {
        className: "flex items-center justify-center h-64",
        children: l.jsx("div", {
          className: "text-gray-500",
          children: e("system.loading"),
        }),
      })
    : l.jsxs("div", {
        className: "p-4",
        children: [
          x &&
            l.jsxs("div", {
              className:
                "fixed top-4 right-4 bg-green-100 text-green-800 px-4 py-2 rounded-md flex items-center gap-2 animate-slide-in z-[200]",
              children: [
                l.jsx("svg", {
                  className: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: l.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M5 13l4 4L19 7",
                  }),
                }),
                f,
              ],
            }),
          g &&
            l.jsxs("div", {
              className:
                "fixed top-4 right-4 bg-red-100 text-red-800 px-4 py-2 rounded-md flex items-center gap-2 animate-slide-in z-[200]",
              children: [
                l.jsx("svg", {
                  className: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: l.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                  }),
                }),
                g,
              ],
            }),
          l.jsxs("div", {
            className: "space-y-4",
            children: [
              l.jsx(Bi, {
                onSelect: p,
                selectedMedications: c,
                existingMedicationCodes: t.map((T) => T.CODE),
              }),
              c.length > 0 &&
                l.jsx("div", {
                  className: "flex justify-end",
                  children: l.jsx("button", {
                    onClick: q,
                    disabled: o,
                    className:
                      "flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed",
                    children: o
                      ? l.jsxs(l.Fragment, {
                          children: [
                            l.jsxs("svg", {
                              className: "animate-spin h-5 w-5",
                              viewBox: "0 0 24 24",
                              children: [
                                l.jsx("circle", {
                                  className: "opacity-25",
                                  cx: "12",
                                  cy: "12",
                                  r: "10",
                                  stroke: "currentColor",
                                  strokeWidth: "4",
                                  fill: "none",
                                }),
                                l.jsx("path", {
                                  className: "opacity-75",
                                  fill: "currentColor",
                                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                }),
                              ],
                            }),
                            e("system.processing"),
                          ],
                        })
                      : l.jsxs(l.Fragment, {
                          children: [
                            l.jsx("svg", {
                              className: "w-5 h-5",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: l.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 4v16m8-8H4",
                              }),
                            }),
                            e("medication.addToPublic"),
                          ],
                        }),
                  }),
                }),
            ],
          }),
          l.jsx("div", {
            className: "mt-4 bg-white rounded-lg shadow overflow-hidden",
            children: l.jsx("div", {
              className: "overflow-x-auto",
              children: l.jsxs("table", {
                className: "min-w-full divide-y divide-gray-200",
                children: [
                  l.jsx("thead", {
                    className: "bg-gray-50",
                    children: l.jsxs("tr", {
                      children: [
                        l.jsx("th", {
                          className:
                            "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider",
                          children: e("table.select"),
                        }),
                        l.jsx(I, {
                          field: "CODE",
                          children: e("table.drugCode"),
                        }),
                        l.jsx(I, {
                          field: "SKDIACODE",
                          children: e("table.materialNumber"),
                        }),
                        l.jsx(I, {
                          field: "NAME",
                          children: e("table.drugName"),
                        }),
                        l.jsx(I, {
                          field: "CHT_NAME",
                          children: e("table.chineseName"),
                        }),
                        l.jsx(I, {
                          field: "DRUGKIND",
                          children: e("table.controlLevel"),
                        }),
                      ],
                    }),
                  }),
                  l.jsx("tbody", {
                    className: "bg-white divide-y divide-gray-200",
                    children: P.map((T) => {
                      var W, L, _, A, $;
                      return l.jsxs(
                        "tr",
                        {
                          className: "hover:bg-gray-50",
                          children: [
                            l.jsx("td", {
                              className: "px-6 py-4",
                              children: l.jsx("input", {
                                type: "checkbox",
                                checked: m.includes(T.CODE),
                                onChange: (H) => H.stopPropagation(),
                                onClick: (H) => xe(H, T.CODE),
                                className: "rounded border-gray-300",
                                disabled: a,
                              }),
                            }),
                            l.jsx("td", {
                              className:
                                "px-6 py-4 whitespace-nowrap text-base text-gray-900",
                              children:
                                ((W = T.med_cloud) == null ? void 0 : W.CODE) ||
                                "-",
                            }),
                            l.jsx("td", {
                              className:
                                "px-6 py-4 whitespace-nowrap text-base text-gray-900",
                              children:
                                ((L = T.med_cloud) == null
                                  ? void 0
                                  : L.SKDIACODE) || "-",
                            }),
                            l.jsx("td", {
                              className: "px-6 py-4 text-base text-gray-900",
                              children:
                                ((_ = T.med_cloud) == null ? void 0 : _.NAME) ||
                                "-",
                            }),
                            l.jsx("td", {
                              className: "px-6 py-4 text-base text-gray-900",
                              children:
                                ((A = T.med_cloud) == null
                                  ? void 0
                                  : A.CHT_NAME) || "-",
                            }),
                            l.jsx("td", {
                              className:
                                "px-6 py-4 whitespace-nowrap text-base text-gray-900",
                              children:
                                (($ = T.med_cloud) == null
                                  ? void 0
                                  : $.DRUGKIND) || "-",
                            }),
                          ],
                        },
                        T.GUID,
                      );
                    }),
                  }),
                ],
              }),
            }),
          }),
          m.length > 0 &&
            l.jsx("div", {
              className:
                "fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-md animate-slide-up",
              children: l.jsxs("div", {
                className: "max-w-7xl mx-auto flex justify-end gap-4",
                children: [
                  l.jsx("button", {
                    onClick: () => h([]),
                    className:
                      "px-4 py-2 text-gray-700 bg-white border rounded-md hover:bg-gray-50 transition-colors",
                    disabled: a,
                    children: e("system.cancel"),
                  }),
                  l.jsx("button", {
                    onClick: () => y(!0),
                    className:
                      "px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors flex items-center gap-2",
                    disabled: a,
                    children: a
                      ? l.jsxs(l.Fragment, {
                          children: [
                            l.jsxs("svg", {
                              className: "animate-spin h-5 w-5",
                              viewBox: "0 0 24 24",
                              children: [
                                l.jsx("circle", {
                                  className: "opacity-25",
                                  cx: "12",
                                  cy: "12",
                                  r: "10",
                                  stroke: "currentColor",
                                  strokeWidth: "4",
                                  fill: "none",
                                }),
                                l.jsx("path", {
                                  className: "opacity-75",
                                  fill: "currentColor",
                                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                }),
                              ],
                            }),
                            e("system.processing"),
                          ],
                        })
                      : l.jsxs(l.Fragment, {
                          children: [
                            l.jsx("svg", {
                              className: "w-5 h-5",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: l.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                              }),
                            }),
                            e("system.delete"),
                          ],
                        }),
                  }),
                ],
              }),
            }),
          l.jsx(gg, {
            isOpen: j,
            onClose: () => y(!1),
            onConfirm: Y,
            count: m.length,
          }),
        ],
      });
}
const Hi = () => `${on()}/api/medList`,
  xg = async () => {
    var e, t;
    try {
      const n = await G.post(`${Hi()}/get_all`, {
        TableName: "medList_selfControl",
      });
      if (n.data.Code === 200) return n.data.Data || [];
      throw new Error(
        n.data.Result || "Failed to fetch self-control medications",
      );
    } catch (n) {
      throw G.isAxiosError(n) &&
        (t = (e = n.response) == null ? void 0 : e.data) != null &&
        t.Result
        ? new Error(n.response.data.Result)
        : new Error("載入藥品清單失敗，請稍後再試");
    }
  },
  vg = async (e) => {
    var t, n, r;
    if (!e.length) throw new Error("請選擇要新增的藥品");
    try {
      const s = await G.post(`${Hi()}/add_meds_in_list`, {
        TableName: "medList_selfControl",
        ValueAry: [e.join(";")],
      });
      if (!s.data || s.data.Code !== 200)
        throw new Error(
          ((t = s.data) == null ? void 0 : t.Result) || "新增藥品失敗",
        );
    } catch (s) {
      if ((console.error("Add medications error:", s), G.isAxiosError(s))) {
        if (
          (r = (n = s.response) == null ? void 0 : n.data) != null &&
          r.Result
        )
          throw new Error(s.response.data.Result);
        if (!s.response) throw new Error("網路連線異常，請檢查網路狀態");
      }
      throw new Error("新增藥品失敗，請稍後再試");
    }
  },
  wg = async (e) => {
    var t, n, r;
    if (!e.length) throw new Error("請選擇要刪除的藥品");
    try {
      const s = await G.post(`${Hi()}/delete_meds_in_list`, {
        TableName: "medList_selfControl",
        ValueAry: [e.join(";")],
      });
      if (!s.data || s.data.Code !== 200)
        throw new Error(
          ((t = s.data) == null ? void 0 : t.Result) || "刪除藥品失敗",
        );
    } catch (s) {
      if ((console.error("Delete medications error:", s), G.isAxiosError(s))) {
        if (
          (r = (n = s.response) == null ? void 0 : n.data) != null &&
          r.Result
        )
          throw new Error(s.response.data.Result);
        if (!s.response) throw new Error("網路連線異常，請檢查網路狀態");
      }
      throw new Error("刪除藥品失敗，請稍後再試");
    }
  },
  Ng = ({ isOpen: e, onClose: t, onConfirm: n, count: r }) => {
    const { t: s } = pe();
    return e
      ? l.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[200]",
          children: l.jsxs("div", {
            className:
              "bg-white rounded-lg p-6 max-w-sm w-full mx-4 animate-slide-down",
            children: [
              l.jsx("h3", {
                className: "text-lg font-semibold mb-4",
                children: s("system.confirm"),
              }),
              l.jsx("p", {
                className: "text-gray-600 mb-6",
                children: s("medication.deleteConfirm").replace(
                  "{count}",
                  String(r),
                ),
              }),
              l.jsxs("div", {
                className: "flex justify-end gap-4",
                children: [
                  l.jsx("button", {
                    onClick: t,
                    className:
                      "px-4 py-2 text-gray-600 hover:bg-gray-100 rounded",
                    children: s("system.cancel"),
                  }),
                  l.jsx("button", {
                    onClick: n,
                    className:
                      "px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700",
                    children: s("system.confirm"),
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  };
function Sg() {
  const { t: e } = pe(),
    [t, n] = w.useState([]),
    [r, s] = w.useState(!1),
    [o, i] = w.useState(!1),
    [a, u] = w.useState(!1),
    [c, p] = w.useState([]),
    [m, h] = w.useState([]),
    [j, y] = w.useState(!1),
    [x, k] = w.useState(!1),
    [f, d] = w.useState(""),
    [g, v] = w.useState(""),
    [E, M] = w.useState("CODE"),
    [N, C] = w.useState("asc"),
    R = (T) => {
      E === T ? C(N === "asc" ? "desc" : "asc") : (M(T), C("asc"));
    },
    P = [...t].sort((T, W) => {
      var $, H;
      const L = (($ = T.med_cloud) == null ? void 0 : $[E]) || "",
        _ = ((H = W.med_cloud) == null ? void 0 : H[E]) || "",
        A = L.localeCompare(_, "zh-TW", { numeric: !0 });
      return N === "asc" ? A : -A;
    }),
    I = ({ field: T, children: W }) =>
      l.jsx("th", {
        className:
          "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors select-none",
        onClick: () => R(T),
        children: W,
      }),
    B = async () => {
      try {
        (s(!0), v(""));
        const T = await xg();
        n(T);
      } catch (T) {
        (console.error("Error loading medications:", T),
          T instanceof Error ? v(T.message) : v(e("error.loadMedications")));
      } finally {
        s(!1);
      }
    };
  w.useEffect(() => {
    B();
  }, []);
  const q = async () => {
      if (c.length === 0) {
        v(e("medication.selectToAdd"));
        return;
      }
      try {
        (i(!0), v(""));
        const T = c.map((W) => W.drugCode);
        (await vg(T),
          await B(),
          p([]),
          d(e("medication.addSuccess")),
          k(!0),
          setTimeout(() => k(!1), 3e3));
      } catch (T) {
        (console.error("Error adding medications:", T),
          T instanceof Error ? v(T.message) : v(e("error.addMedications")));
      } finally {
        i(!1);
      }
    },
    Y = async () => {
      if (m.length === 0) {
        v(e("medication.selectToDelete"));
        return;
      }
      try {
        (u(!0),
          v(""),
          await wg(m),
          await B(),
          h([]),
          d(e("medication.deleteSuccess")),
          k(!0),
          setTimeout(() => k(!1), 3e3));
      } catch (T) {
        (console.error("Error deleting medications:", T),
          T instanceof Error ? v(T.message) : v(e("error.deleteMedications")));
      } finally {
        (u(!1), y(!1));
      }
    },
    xe = (T, W) => {
      (T.stopPropagation(),
        h((L) => (L.includes(W) ? L.filter((A) => A !== W) : [...L, W])));
    };
  return r
    ? l.jsx("div", {
        className: "flex items-center justify-center h-64",
        children: l.jsx("div", {
          className: "text-gray-500",
          children: e("system.loading"),
        }),
      })
    : l.jsxs("div", {
        className: "p-4",
        children: [
          x &&
            l.jsxs("div", {
              className:
                "fixed top-4 right-4 bg-green-100 text-green-800 px-4 py-2 rounded-md flex items-center gap-2 animate-slide-in z-[200]",
              children: [
                l.jsx("svg", {
                  className: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: l.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M5 13l4 4L19 7",
                  }),
                }),
                f,
              ],
            }),
          g &&
            l.jsxs("div", {
              className:
                "fixed top-4 right-4 bg-red-100 text-red-800 px-4 py-2 rounded-md flex items-center gap-2 animate-slide-in z-[200]",
              children: [
                l.jsx("svg", {
                  className: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: l.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                  }),
                }),
                g,
              ],
            }),
          l.jsxs("div", {
            className: "space-y-4",
            children: [
              l.jsx(Bi, {
                onSelect: p,
                selectedMedications: c,
                existingMedicationCodes: t.map((T) => T.CODE),
              }),
              c.length > 0 &&
                l.jsx("div", {
                  className: "flex justify-end",
                  children: l.jsx("button", {
                    onClick: q,
                    disabled: o,
                    className:
                      "flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed",
                    children: o
                      ? l.jsxs(l.Fragment, {
                          children: [
                            l.jsxs("svg", {
                              className: "animate-spin h-5 w-5",
                              viewBox: "0 0 24 24",
                              children: [
                                l.jsx("circle", {
                                  className: "opacity-25",
                                  cx: "12",
                                  cy: "12",
                                  r: "10",
                                  stroke: "currentColor",
                                  strokeWidth: "4",
                                  fill: "none",
                                }),
                                l.jsx("path", {
                                  className: "opacity-75",
                                  fill: "currentColor",
                                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                }),
                              ],
                            }),
                            e("system.processing"),
                          ],
                        })
                      : l.jsxs(l.Fragment, {
                          children: [
                            l.jsx("svg", {
                              className: "w-5 h-5",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: l.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 4v16m8-8H4",
                              }),
                            }),
                            e("medication.addToSelfControl"),
                          ],
                        }),
                  }),
                }),
            ],
          }),
          l.jsx("div", {
            className: "mt-4 bg-white rounded-lg shadow overflow-hidden",
            children: l.jsx("div", {
              className: "overflow-x-auto",
              children: l.jsxs("table", {
                className: "min-w-full divide-y divide-gray-200",
                children: [
                  l.jsx("thead", {
                    className: "bg-gray-50",
                    children: l.jsxs("tr", {
                      children: [
                        l.jsx("th", {
                          className:
                            "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider",
                          children: e("table.select"),
                        }),
                        l.jsx(I, {
                          field: "CODE",
                          children: e("table.drugCode"),
                        }),
                        l.jsx(I, {
                          field: "SKDIACODE",
                          children: e("table.materialNumber"),
                        }),
                        l.jsx(I, {
                          field: "NAME",
                          children: e("table.drugName"),
                        }),
                        l.jsx(I, {
                          field: "CHT_NAME",
                          children: e("table.chineseName"),
                        }),
                        l.jsx(I, {
                          field: "DRUGKIND",
                          children: e("table.controlLevel"),
                        }),
                      ],
                    }),
                  }),
                  l.jsx("tbody", {
                    className: "bg-white divide-y divide-gray-200",
                    children: P.map((T) =>
                      l.jsxs(
                        "tr",
                        {
                          className: "hover:bg-gray-50",
                          children: [
                            l.jsx("td", {
                              className: "px-6 py-4",
                              children: l.jsx("input", {
                                type: "checkbox",
                                checked: m.includes(T.CODE),
                                onChange: (W) => W.stopPropagation(),
                                onClick: (W) => xe(W, T.CODE),
                                className: "rounded border-gray-300",
                                disabled: a,
                              }),
                            }),
                            l.jsx("td", {
                              className:
                                "px-6 py-4 whitespace-nowrap text-base text-gray-900",
                              children: T.med_cloud.CODE,
                            }),
                            l.jsx("td", {
                              className:
                                "px-6 py-4 whitespace-nowrap text-base text-gray-900",
                              children: T.med_cloud.SKDIACODE,
                            }),
                            l.jsx("td", {
                              className: "px-6 py-4 text-base text-gray-900",
                              children: T.med_cloud.NAME,
                            }),
                            l.jsx("td", {
                              className: "px-6 py-4 text-base text-gray-900",
                              children: T.med_cloud.CHT_NAME,
                            }),
                            l.jsx("td", {
                              className:
                                "px-6 py-4 whitespace-nowrap text-base text-gray-900",
                              children: T.med_cloud.DRUGKIND,
                            }),
                          ],
                        },
                        T.GUID,
                      ),
                    ),
                  }),
                ],
              }),
            }),
          }),
          m.length > 0 &&
            l.jsx("div", {
              className:
                "fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-md animate-slide-up",
              children: l.jsxs("div", {
                className: "max-w-7xl mx-auto flex justify-end gap-4",
                children: [
                  l.jsx("button", {
                    onClick: () => h([]),
                    className:
                      "px-4 py-2 text-gray-700 bg-white border rounded-md hover:bg-gray-50 transition-colors",
                    disabled: a,
                    children: e("system.cancel"),
                  }),
                  l.jsx("button", {
                    onClick: () => y(!0),
                    className:
                      "px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors flex items-center gap-2",
                    disabled: a,
                    children: a
                      ? l.jsxs(l.Fragment, {
                          children: [
                            l.jsxs("svg", {
                              className: "animate-spin h-5 w-5",
                              viewBox: "0 0 24 24",
                              children: [
                                l.jsx("circle", {
                                  className: "opacity-25",
                                  cx: "12",
                                  cy: "12",
                                  r: "10",
                                  stroke: "currentColor",
                                  strokeWidth: "4",
                                  fill: "none",
                                }),
                                l.jsx("path", {
                                  className: "opacity-75",
                                  fill: "currentColor",
                                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                }),
                              ],
                            }),
                            e("system.processing"),
                          ],
                        })
                      : l.jsxs(l.Fragment, {
                          children: [
                            l.jsx("svg", {
                              className: "w-5 h-5",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: l.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
                              }),
                            }),
                            e("system.delete"),
                          ],
                        }),
                  }),
                ],
              }),
            }),
          l.jsx(Ng, {
            isOpen: j,
            onClose: () => y(!1),
            onConfirm: Y,
            count: m.length,
          }),
        ],
      });
}
function jg() {
  const { language: e, setLanguage: t, t: n } = pe();
  return l.jsxs("button", {
    onClick: () => t(e === "zh" ? "en" : "zh"),
    className:
      "flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
    children: [
      l.jsx("svg", {
        className: "w-4 h-4",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: l.jsx("path", {
          d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 1-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 1-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z",
        }),
      }),
      n("language.switch"),
    ],
  });
}
function kg() {
  const [e, t] = w.useState(""),
    [n, r] = w.useState("");
  return (
    w.useEffect(() => {
      const s = sessionStorage.getItem("user_session");
      if (s)
        try {
          const o = JSON.parse(s);
          (t(o.Name || ""), r(o.Employer || ""));
        } catch (o) {
          console.error("Failed to parse session data:", o);
        }
    }, []),
    l.jsx("div", {
      className: "text-sm text-gray-600",
      children: e && n ? `${e} - ${n}` : "",
    })
  );
}
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Cg = {
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
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Eg = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  df = (e, t) => {
    const n = w.forwardRef(
      (
        {
          color: r = "currentColor",
          size: s = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: i,
          className: a = "",
          children: u,
          ...c
        },
        p,
      ) =>
        w.createElement(
          "svg",
          {
            ref: p,
            ...Cg,
            width: s,
            height: s,
            stroke: r,
            strokeWidth: i ? (Number(o) * 24) / Number(s) : o,
            className: ["lucide", `lucide-${Eg(e)}`, a].join(" "),
            ...c,
          },
          [
            ...t.map(([m, h]) => w.createElement(m, h)),
            ...(Array.isArray(u) ? u : [u]),
          ],
        ),
    );
    return ((n.displayName = `${e}`), n);
  };
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bg = df("Layers", [
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
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mg = df("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
function Lg({ onLogout: e }) {
  const { t } = pe();
  return l.jsxs("button", {
    onClick: e,
    className:
      "inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
    children: [l.jsx(Mg, { className: "h-4 w-4 mr-2" }), t("system.logout")],
  });
}
function _g({ onLogout: e, activeTab: t, onTabChange: n }) {
  const { t: r } = pe();
  return l.jsxs("div", {
    className: "fixed top-0 left-0 right-0 z-50 bg-white shadow",
    children: [
      l.jsxs("div", {
        className: "h-16 flex items-center justify-between px-5",
        children: [
          l.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              l.jsx("a", {
                href: "../frontpage",
                className:
                  "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors",
                children: l.jsx(bg, { size: 28 }),
              }),
              l.jsxs("div", {
                className: "flex flex-col leading-tight",
                children: [
                  l.jsx("h1", {
                    className:
                      "text-2xl md:text-3xl font-semibold text-gray-800",
                    children: r("system.title"),
                  }),
                  l.jsx(kg, {}),
                ],
              }),
            ],
          }),
          l.jsxs("div", {
            className: "flex items-center gap-4",
            children: [l.jsx(jg, {}), e && l.jsx(Lg, { onLogout: e })],
          }),
        ],
      }),
      l.jsx("div", {
        className: "px-4",
        children: l.jsxs("div", {
          className: "flex space-x-8",
          children: [
            l.jsx("button", {
              onClick: () => n("drugs"),
              className: `py-4 px-1 border-b-2 font-medium text-base ${t === "drugs" ? "border-black text-black" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`,
              children: r("tabs.drugFiles"),
            }),
            l.jsx("button", {
              onClick: () => n("groups"),
              className: `py-4 px-1 border-b-2 font-medium text-base ${t === "groups" ? "border-black text-black" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`,
              children: r("tabs.drugGroups"),
            }),
            l.jsx("button", {
              onClick: () => n("public"),
              className: `py-4 px-1 border-b-2 font-medium text-base ${t === "public" ? "border-black text-black" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`,
              children: r("tabs.publicList"),
            }),
            l.jsx("button", {
              onClick: () => n("selfControl"),
              className: `py-4 px-1 border-b-2 font-medium text-base ${t === "selfControl" ? "border-black text-black" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`,
              children: r("tabs.selfControlList"),
            }),
          ],
        }),
      }),
    ],
  });
}
const Tg = ({ className: e = "" }) =>
    l.jsx("footer", {
      className: `w-full bg-white py-3 border-t border-gray-200 ${e}`,
      children: l.jsx("div", {
        className: "max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8",
        children: l.jsx("p", {
          className: "text-center text-sm text-gray-600",
          children: "Copyright ©2025 鴻森智能科技",
        }),
      }),
    }),
  Rg = async (e, t) => {
    var n, r;
    try {
      const s = await G.post(`${on()}/api/session/login`, {
        Data: { ID: e, Password: t },
      });
      if (s.data.Code === 200)
        return (
          sessionStorage.setItem("user_session", JSON.stringify(s.data.Data)),
          s.data.Data
        );
      throw new Error(s.data.Result || "Login failed");
    } catch (s) {
      throw G.isAxiosError(s) &&
        (r = (n = s.response) == null ? void 0 : n.data) != null &&
        r.Result
        ? new Error(s.response.data.Result)
        : new Error("Login failed. Please try again.");
    }
  },
  Pg = () => {
    sessionStorage.removeItem("user_session");
  };
function Ag({ onLoginSuccess: e }) {
  const { t } = pe(),
    [n, r] = w.useState(""),
    [s, o] = w.useState(""),
    [i, a] = w.useState(""),
    [u, c] = w.useState(!1),
    p = async (m) => {
      if ((m.preventDefault(), !n || !s)) {
        a(t("login.required"));
        return;
      }
      try {
        (c(!0), a(""), await Rg(n, s), e());
      } catch (h) {
        a(h instanceof Error ? h.message : t("login.failed"));
      } finally {
        c(!1);
      }
    };
  return l.jsx("div", {
    className:
      "min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",
    children: l.jsxs("div", {
      className: "max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md",
      children: [
        l.jsx("div", {
          children: l.jsx("h2", {
            className: "mt-6 text-center text-3xl font-extrabold text-gray-900",
            children: t("login.title"),
          }),
        }),
        l.jsxs("form", {
          className: "mt-8 space-y-6",
          onSubmit: p,
          children: [
            l.jsxs("div", {
              className: "rounded-md shadow-sm space-y-4",
              children: [
                l.jsxs("div", {
                  children: [
                    l.jsx("label", {
                      htmlFor: "id",
                      className: "block text-sm font-medium text-gray-700",
                      children: t("login.id"),
                    }),
                    l.jsx("input", {
                      id: "id",
                      name: "id",
                      type: "text",
                      required: !0,
                      value: n,
                      onChange: (m) => r(m.target.value),
                      className:
                        "mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm",
                      placeholder: t("login.idPlaceholder"),
                    }),
                  ],
                }),
                l.jsxs("div", {
                  children: [
                    l.jsx("label", {
                      htmlFor: "password",
                      className: "block text-sm font-medium text-gray-700",
                      children: t("login.password"),
                    }),
                    l.jsx("input", {
                      id: "password",
                      name: "password",
                      type: "password",
                      required: !0,
                      value: s,
                      onChange: (m) => o(m.target.value),
                      className:
                        "mt-1 appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm",
                      placeholder: t("login.passwordPlaceholder"),
                    }),
                  ],
                }),
              ],
            }),
            i &&
              l.jsx("div", {
                className: "rounded-md bg-red-50 p-4",
                children: l.jsxs("div", {
                  className: "flex",
                  children: [
                    l.jsx("div", {
                      className: "flex-shrink-0",
                      children: l.jsx("svg", {
                        className: "h-5 w-5 text-red-400",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: l.jsx("path", {
                          fillRule: "evenodd",
                          d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                          clipRule: "evenodd",
                        }),
                      }),
                    }),
                    l.jsx("div", {
                      className: "ml-3",
                      children: l.jsx("p", {
                        className: "text-sm text-red-700",
                        children: i,
                      }),
                    }),
                  ],
                }),
              }),
            l.jsx("button", {
              type: "submit",
              disabled: u,
              className:
                "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed",
              children: t(u ? "login.processing" : "login.submit"),
            }),
          ],
        }),
      ],
    }),
  });
}
function Og() {
  const { t: e } = pe(),
    [t, n] = w.useState(!1),
    [r, s] = w.useState(!1),
    [o, i] = w.useState(null),
    [a, u] = w.useState([]),
    [c, p] = w.useState(!1),
    [m, h] = w.useState("drugs"),
    [j, y] = w.useState("table"),
    [x, k] = w.useState(() => !!sessionStorage.getItem("user_session"));
  w.useEffect(() => {
    const C = () => {
      k(!!sessionStorage.getItem("user_session"));
    };
    return (
      window.addEventListener("storage", C),
      () => window.removeEventListener("storage", C)
    );
  }, []);
  const f = async () => {
    if (x)
      try {
        p(!0);
        const C = await lf();
        u(C);
      } catch (C) {
        console.error("Error loading drugs:", C);
      } finally {
        p(!1);
      }
  };
  w.useEffect(() => {
    f();
  }, [x]);
  const d = (C) => {
      (u((R) => [...R, C]), n(!1));
    },
    g = (C) => {
      (i(C), s(!0));
    },
    v = (C) => {
      (u((R) => R.map((P) => (P.id === C.id ? C : P))), s(!1), i(null));
    },
    E = (C) => {
      u((R) => R.map((P) => (P.id === C.id ? C : P)));
    },
    M = (C) => {
      u((R) => R.filter((P) => P.id !== C));
    },
    N = () => {
      (k(!1), Pg());
    };
  return x
    ? l.jsxs("div", {
        className: "min-h-screen bg-gray-50 flex flex-col",
        children: [
          l.jsx(_g, { onLogout: N, activeTab: m, onTabChange: h }),
          l.jsxs("div", {
            className: "flex-1 pt-32 px-2 iphone-se:px-4 pb-4",
            children: [
              m === "drugs"
                ? l.jsxs(l.Fragment, {
                    children: [
                      l.jsx("div", {
                        className:
                          "flex flex-col iphone:flex-row gap-2 iphone:gap-4 my-4",
                        children: l.jsxs("button", {
                          onClick: () => n(!0),
                          className:
                            "flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700",
                          children: [
                            l.jsx("svg", {
                              className: "w-5 h-5",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: l.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 4v16m8-8H4",
                              }),
                            }),
                            l.jsx("span", { children: e("drugList.addDrug") }),
                          ],
                        }),
                      }),
                      l.jsx(ng, {
                        drugs: a,
                        isLoading: c,
                        onModify: g,
                        onStatusChange: E,
                        onDrugDeleted: M,
                        defaultViewMode: j,
                        onViewModeChange: y,
                      }),
                    ],
                  })
                : m === "groups"
                  ? l.jsx(fg, {})
                  : m === "public"
                    ? l.jsx(yg, {})
                    : l.jsx(Sg, {}),
              l.jsx(gu, {
                isOpen: t,
                onClose: () => n(!1),
                onSubmit: d,
                mode: "add",
              }),
              l.jsx(gu, {
                isOpen: r,
                onClose: () => {
                  (s(!1), i(null));
                },
                onSubmit: v,
                mode: "edit",
                initialData: o || void 0,
              }),
            ],
          }),
          l.jsx(Tg, {}),
        ],
      })
    : l.jsx(Ag, { onLoginSuccess: () => k(!0) });
}
const Dg = async () => {
  (await R0(),
    kr.enable(),
    console.log(
      "🔧 API Logging initialized - All API requests and responses will be logged to console",
    ),
    Fo.createRoot(document.getElementById("root")).render(
      l.jsx(zf.StrictMode, {
        children: l.jsx(B0, { children: l.jsx(Og, {}) }),
      }),
    ));
};
Dg();
