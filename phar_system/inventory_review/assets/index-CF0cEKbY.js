var Yd = Object.defineProperty;
var Wd = (e, t, n) =>
  t in e
    ? Yd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Fl = (e, t, n) => Wd(e, typeof t != "symbol" ? t + "" : t, n);
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
function Gd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var gu = { exports: {} },
  Ys = {},
  hu = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ar = Symbol.for("react.element"),
  Xd = Symbol.for("react.portal"),
  Jd = Symbol.for("react.fragment"),
  Zd = Symbol.for("react.strict_mode"),
  qd = Symbol.for("react.profiler"),
  ef = Symbol.for("react.provider"),
  tf = Symbol.for("react.context"),
  nf = Symbol.for("react.forward_ref"),
  rf = Symbol.for("react.suspense"),
  sf = Symbol.for("react.memo"),
  of = Symbol.for("react.lazy"),
  $l = Symbol.iterator;
function lf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($l && e[$l]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var mu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  yu = Object.assign,
  xu = {};
function Un(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xu),
    (this.updater = n || mu);
}
Un.prototype.isReactComponent = {};
Un.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Un.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vu() {}
vu.prototype = Un.prototype;
function Ui(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xu),
    (this.updater = n || mu);
}
var zi = (Ui.prototype = new vu());
zi.constructor = Ui;
yu(zi, Un.prototype);
zi.isPureReactComponent = !0;
var Ul = Array.isArray,
  wu = Object.prototype.hasOwnProperty,
  Vi = { current: null },
  Su = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nu(e, t, n) {
  var r,
    s = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      wu.call(t, r) && !Su.hasOwnProperty(r) && (s[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) s.children = n;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    s.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
  return {
    $$typeof: Ar,
    type: e,
    key: o,
    ref: i,
    props: s,
    _owner: Vi.current,
  };
}
function af(e, t) {
  return {
    $$typeof: Ar,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Bi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ar;
}
function uf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var zl = /\/+/g;
function go(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? uf("" + e.key)
    : t.toString(36);
}
function is(e, t, n, r, s) {
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
          case Ar:
          case Xd:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (s = s(i)),
      (e = r === "" ? "." + go(i, 0) : r),
      Ul(s)
        ? ((n = ""),
          e != null && (n = e.replace(zl, "$&/") + "/"),
          is(s, t, n, "", function (c) {
            return c;
          }))
        : s != null &&
          (Bi(s) &&
            (s = af(
              s,
              n +
                (!s.key || (i && i.key === s.key)
                  ? ""
                  : ("" + s.key).replace(zl, "$&/") + "/") +
                e
            )),
          t.push(s)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Ul(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + go(o, a);
      i += is(o, t, n, u, s);
    }
  else if (((u = lf(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + go(o, a++)), (i += is(o, t, n, u, s));
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
function Vr(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    is(e, r, "", "", function (o) {
      return t.call(n, o, s++);
    }),
    r
  );
}
function cf(e) {
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
var Te = { current: null },
  ls = { transition: null },
  df = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: ls,
    ReactCurrentOwner: Vi,
  };
function Eu() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = {
  map: Vr,
  forEach: function (e, t, n) {
    Vr(
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
      Vr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Vr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Bi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
F.Component = Un;
F.Fragment = Jd;
F.Profiler = qd;
F.PureComponent = Ui;
F.StrictMode = Zd;
F.Suspense = rf;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = df;
F.act = Eu;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = yu({}, e.props),
    s = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Vi.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      wu.call(t, u) &&
        !Su.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Ar, type: e.type, key: s, ref: o, props: r, _owner: i };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: tf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ef, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = Nu;
F.createFactory = function (e) {
  var t = Nu.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: nf, render: e };
};
F.isValidElement = Bi;
F.lazy = function (e) {
  return { $$typeof: of, _payload: { _status: -1, _result: e }, _init: cf };
};
F.memo = function (e, t) {
  return { $$typeof: sf, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = ls.transition;
  ls.transition = {};
  try {
    e();
  } finally {
    ls.transition = t;
  }
};
F.unstable_act = Eu;
F.useCallback = function (e, t) {
  return Te.current.useCallback(e, t);
};
F.useContext = function (e) {
  return Te.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return Te.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return Te.current.useEffect(e, t);
};
F.useId = function () {
  return Te.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return Te.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return Te.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return Te.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return Te.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return Te.current.useRef(e);
};
F.useState = function (e) {
  return Te.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return Te.current.useTransition();
};
F.version = "18.3.1";
hu.exports = F;
var k = hu.exports;
const ff = Gd(k);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pf = k,
  gf = Symbol.for("react.element"),
  hf = Symbol.for("react.fragment"),
  mf = Object.prototype.hasOwnProperty,
  yf = pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  xf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cu(e, t, n) {
  var r,
    s = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) mf.call(t, r) && !xf.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: gf,
    type: e,
    key: o,
    ref: i,
    props: s,
    _owner: yf.current,
  };
}
Ys.Fragment = hf;
Ys.jsx = Cu;
Ys.jsxs = Cu;
gu.exports = Ys;
var l = gu.exports,
  ku = { exports: {} },
  Be = {},
  ju = { exports: {} },
  Ou = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, P) {
    var L = O.length;
    O.push(P);
    e: for (; 0 < L; ) {
      var B = (L - 1) >>> 1,
        te = O[B];
      if (0 < s(te, P)) (O[B] = P), (O[L] = te), (L = B);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var P = O[0],
      L = O.pop();
    if (L !== P) {
      O[0] = L;
      e: for (var B = 0, te = O.length, ft = te >>> 1; B < ft; ) {
        var Ke = 2 * (B + 1) - 1,
          Yt = O[Ke],
          He = Ke + 1,
          kt = O[He];
        if (0 > s(Yt, L))
          He < te && 0 > s(kt, Yt)
            ? ((O[B] = kt), (O[He] = L), (B = He))
            : ((O[B] = Yt), (O[Ke] = L), (B = Ke));
        else if (He < te && 0 > s(kt, L)) (O[B] = kt), (O[He] = L), (B = He);
        else break e;
      }
    }
    return P;
  }
  function s(O, P) {
    var L = O.sortIndex - P.sortIndex;
    return L !== 0 ? L : O.id - P.id;
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
    f = 1,
    g = null,
    d = 3,
    x = !1,
    v = !1,
    N = !1,
    R = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(O) {
    for (var P = n(c); P !== null; ) {
      if (P.callback === null) r(c);
      else if (P.startTime <= O)
        r(c), (P.sortIndex = P.expirationTime), t(u, P);
      else break;
      P = n(c);
    }
  }
  function S(O) {
    if (((N = !1), y(O), !v))
      if (n(u) !== null) (v = !0), ye(E);
      else {
        var P = n(c);
        P !== null && Fe(S, P.startTime - O);
      }
  }
  function E(O, P) {
    (v = !1), N && ((N = !1), m(C), (C = -1)), (x = !0);
    var L = d;
    try {
      for (
        y(P), g = n(u);
        g !== null && (!(g.expirationTime > P) || (O && !M()));

      ) {
        var B = g.callback;
        if (typeof B == "function") {
          (g.callback = null), (d = g.priorityLevel);
          var te = B(g.expirationTime <= P);
          (P = e.unstable_now()),
            typeof te == "function" ? (g.callback = te) : g === n(u) && r(u),
            y(P);
        } else r(u);
        g = n(u);
      }
      if (g !== null) var ft = !0;
      else {
        var Ke = n(c);
        Ke !== null && Fe(S, Ke.startTime - P), (ft = !1);
      }
      return ft;
    } finally {
      (g = null), (d = L), (x = !1);
    }
  }
  var h = !1,
    w = null,
    C = -1,
    _ = 5,
    I = -1;
  function M() {
    return !(e.unstable_now() - I < _);
  }
  function U() {
    if (w !== null) {
      var O = e.unstable_now();
      I = O;
      var P = !0;
      try {
        P = w(!0, O);
      } finally {
        P ? Z() : ((h = !1), (w = null));
      }
    } else h = !1;
  }
  var Z;
  if (typeof p == "function")
    Z = function () {
      p(U);
    };
  else if (typeof MessageChannel < "u") {
    var me = new MessageChannel(),
      ue = me.port2;
    (me.port1.onmessage = U),
      (Z = function () {
        ue.postMessage(null);
      });
  } else
    Z = function () {
      R(U, 0);
    };
  function ye(O) {
    (w = O), h || ((h = !0), Z());
  }
  function Fe(O, P) {
    C = R(function () {
      O(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || x || ((v = !0), ye(E));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (_ = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (O) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = d;
      }
      var L = d;
      d = P;
      try {
        return O();
      } finally {
        d = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, P) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var L = d;
      d = O;
      try {
        return P();
      } finally {
        d = L;
      }
    }),
    (e.unstable_scheduleCallback = function (O, P, L) {
      var B = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? B + L : B))
          : (L = B),
        O)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = L + te),
        (O = {
          id: f++,
          callback: P,
          priorityLevel: O,
          startTime: L,
          expirationTime: te,
          sortIndex: -1,
        }),
        L > B
          ? ((O.sortIndex = L),
            t(c, O),
            n(u) === null &&
              O === n(c) &&
              (N ? (m(C), (C = -1)) : (N = !0), Fe(S, L - B)))
          : ((O.sortIndex = te), t(u, O), v || x || ((v = !0), ye(E))),
        O
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (O) {
      var P = d;
      return function () {
        var L = d;
        d = P;
        try {
          return O.apply(this, arguments);
        } finally {
          d = L;
        }
      };
    });
})(Ou);
ju.exports = Ou;
var vf = ju.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wf = k,
  Ve = vf;
function j(e) {
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
var Ru = new Set(),
  yr = {};
function un(e, t) {
  Pn(e, t), Pn(e + "Capture", t);
}
function Pn(e, t) {
  for (yr[e] = t, e = 0; e < t.length; e++) Ru.add(t[e]);
}
var vt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ko = Object.prototype.hasOwnProperty,
  Sf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Vl = {},
  Bl = {};
function Nf(e) {
  return Ko.call(Bl, e)
    ? !0
    : Ko.call(Vl, e)
    ? !1
    : Sf.test(e)
    ? (Bl[e] = !0)
    : ((Vl[e] = !0), !1);
}
function Ef(e, t, n, r) {
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
function Cf(e, t, n, r) {
  if (t === null || typeof t > "u" || Ef(e, t, n, r)) return !0;
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
function _e(e, t, n, r, s, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new _e(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Se[t] = new _e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Se[e] = new _e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Se[e] = new _e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new _e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Se[e] = new _e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Se[e] = new _e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Se[e] = new _e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Se[e] = new _e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Qi = /[\-:]([a-z])/g;
function Ki(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qi, Ki);
    Se[t] = new _e(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Qi, Ki);
    Se[t] = new _e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Qi, Ki);
  Se[t] = new _e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Se[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new _e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Se[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Hi(e, t, n, r) {
  var s = Se.hasOwnProperty(t) ? Se[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Cf(t, n, s, r) && (n = null),
    r || s === null
      ? Nf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Et = wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Br = Symbol.for("react.element"),
  hn = Symbol.for("react.portal"),
  mn = Symbol.for("react.fragment"),
  Yi = Symbol.for("react.strict_mode"),
  Ho = Symbol.for("react.profiler"),
  bu = Symbol.for("react.provider"),
  Iu = Symbol.for("react.context"),
  Wi = Symbol.for("react.forward_ref"),
  Yo = Symbol.for("react.suspense"),
  Wo = Symbol.for("react.suspense_list"),
  Gi = Symbol.for("react.memo"),
  Ot = Symbol.for("react.lazy"),
  Tu = Symbol.for("react.offscreen"),
  Ql = Symbol.iterator;
function Hn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ql && e[Ql]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var le = Object.assign,
  ho;
function rr(e) {
  if (ho === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ho = (t && t[1]) || "";
    }
  return (
    `
` +
    ho +
    e
  );
}
var mo = !1;
function yo(e, t) {
  if (!e || mo) return "";
  mo = !0;
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
    (mo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? rr(e) : "";
}
function kf(e) {
  switch (e.tag) {
    case 5:
      return rr(e.type);
    case 16:
      return rr("Lazy");
    case 13:
      return rr("Suspense");
    case 19:
      return rr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = yo(e.type, !1)), e;
    case 11:
      return (e = yo(e.type.render, !1)), e;
    case 1:
      return (e = yo(e.type, !0)), e;
    default:
      return "";
  }
}
function Go(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case mn:
      return "Fragment";
    case hn:
      return "Portal";
    case Ho:
      return "Profiler";
    case Yi:
      return "StrictMode";
    case Yo:
      return "Suspense";
    case Wo:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Iu:
        return (e.displayName || "Context") + ".Consumer";
      case bu:
        return (e._context.displayName || "Context") + ".Provider";
      case Wi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Gi:
        return (
          (t = e.displayName || null), t !== null ? t : Go(e.type) || "Memo"
        );
      case Ot:
        (t = e._payload), (e = e._init);
        try {
          return Go(e(t));
        } catch {}
    }
  return null;
}
function jf(e) {
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
      return Go(t);
    case 8:
      return t === Yi ? "StrictMode" : "Mode";
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
function Vt(e) {
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
function _u(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Of(e) {
  var t = _u(e) ? "checked" : "value",
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
function Qr(e) {
  e._valueTracker || (e._valueTracker = Of(e));
}
function Pu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = _u(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function vs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xo(e, t) {
  var n = t.checked;
  return le({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Kl(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Vt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Lu(e, t) {
  (t = t.checked), t != null && Hi(e, "checked", t, !1);
}
function Jo(e, t) {
  Lu(e, t);
  var n = Vt(t.value),
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
    ? Zo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Zo(e, t.type, Vt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Hl(e, t, n) {
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
function Zo(e, t, n) {
  (t !== "number" || vs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var sr = Array.isArray;
function On(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      (s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Vt(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        (e[s].selected = !0), r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function qo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return le({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Yl(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (sr(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Vt(n) };
}
function Du(e, t) {
  var n = Vt(t.value),
    r = Vt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Wl(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Au(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ei(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Au(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Kr,
  Mu = (function (e) {
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
        Kr = Kr || document.createElement("div"),
          Kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Kr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function xr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var lr = {
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
  Rf = ["Webkit", "ms", "Moz", "O"];
Object.keys(lr).forEach(function (e) {
  Rf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (lr[t] = lr[e]);
  });
});
function Fu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (lr.hasOwnProperty(e) && lr[e])
    ? ("" + t).trim()
    : t + "px";
}
function $u(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = Fu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s);
    }
}
var bf = le(
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
function ti(e, t) {
  if (t) {
    if (bf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function ni(e, t) {
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
var ri = null;
function Xi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var si = null,
  Rn = null,
  bn = null;
function Gl(e) {
  if ((e = $r(e))) {
    if (typeof si != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = Zs(t)), si(e.stateNode, e.type, t));
  }
}
function Uu(e) {
  Rn ? (bn ? bn.push(e) : (bn = [e])) : (Rn = e);
}
function zu() {
  if (Rn) {
    var e = Rn,
      t = bn;
    if (((bn = Rn = null), Gl(e), t)) for (e = 0; e < t.length; e++) Gl(t[e]);
  }
}
function Vu(e, t) {
  return e(t);
}
function Bu() {}
var xo = !1;
function Qu(e, t, n) {
  if (xo) return e(t, n);
  xo = !0;
  try {
    return Vu(e, t, n);
  } finally {
    (xo = !1), (Rn !== null || bn !== null) && (Bu(), zu());
  }
}
function vr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Zs(n);
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
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var oi = !1;
if (vt)
  try {
    var Yn = {};
    Object.defineProperty(Yn, "passive", {
      get: function () {
        oi = !0;
      },
    }),
      window.addEventListener("test", Yn, Yn),
      window.removeEventListener("test", Yn, Yn);
  } catch {
    oi = !1;
  }
function If(e, t, n, r, s, o, i, a, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (f) {
    this.onError(f);
  }
}
var ar = !1,
  ws = null,
  Ss = !1,
  ii = null,
  Tf = {
    onError: function (e) {
      (ar = !0), (ws = e);
    },
  };
function _f(e, t, n, r, s, o, i, a, u) {
  (ar = !1), (ws = null), If.apply(Tf, arguments);
}
function Pf(e, t, n, r, s, o, i, a, u) {
  if ((_f.apply(this, arguments), ar)) {
    if (ar) {
      var c = ws;
      (ar = !1), (ws = null);
    } else throw Error(j(198));
    Ss || ((Ss = !0), (ii = c));
  }
}
function cn(e) {
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
function Ku(e) {
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
function Xl(e) {
  if (cn(e) !== e) throw Error(j(188));
}
function Lf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = cn(e)), t === null)) throw Error(j(188));
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
        if (o === n) return Xl(s), e;
        if (o === r) return Xl(s), t;
        o = o.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = s), (r = o);
    else {
      for (var i = !1, a = s.child; a; ) {
        if (a === n) {
          (i = !0), (n = s), (r = o);
          break;
        }
        if (a === r) {
          (i = !0), (r = s), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = s);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = s);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function Hu(e) {
  return (e = Lf(e)), e !== null ? Yu(e) : null;
}
function Yu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Yu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Wu = Ve.unstable_scheduleCallback,
  Jl = Ve.unstable_cancelCallback,
  Df = Ve.unstable_shouldYield,
  Af = Ve.unstable_requestPaint,
  ce = Ve.unstable_now,
  Mf = Ve.unstable_getCurrentPriorityLevel,
  Ji = Ve.unstable_ImmediatePriority,
  Gu = Ve.unstable_UserBlockingPriority,
  Ns = Ve.unstable_NormalPriority,
  Ff = Ve.unstable_LowPriority,
  Xu = Ve.unstable_IdlePriority,
  Ws = null,
  ct = null;
function $f(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function")
    try {
      ct.onCommitFiberRoot(Ws, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var rt = Math.clz32 ? Math.clz32 : Vf,
  Uf = Math.log,
  zf = Math.LN2;
function Vf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Uf(e) / zf) | 0)) | 0;
}
var Hr = 64,
  Yr = 4194304;
function or(e) {
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
function Es(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~s;
    a !== 0 ? (r = or(a)) : ((o &= i), o !== 0 && (r = or(o)));
  } else (i = n & ~s), i !== 0 ? (r = or(i)) : o !== 0 && (r = or(o));
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
      (n = 31 - rt(t)), (s = 1 << n), (r |= e[n]), (t &= ~s);
  return r;
}
function Bf(e, t) {
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
function Qf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - rt(o),
      a = 1 << i,
      u = s[i];
    u === -1
      ? (!(a & n) || a & r) && (s[i] = Bf(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function li(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ju() {
  var e = Hr;
  return (Hr <<= 1), !(Hr & 4194240) && (Hr = 64), e;
}
function vo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Mr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - rt(t)),
    (e[t] = n);
}
function Kf(e, t) {
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
    var s = 31 - rt(n),
      o = 1 << s;
    (t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~o);
  }
}
function Zi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - rt(n),
      s = 1 << r;
    (s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s);
  }
}
var Y = 0;
function Zu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var qu,
  qi,
  ec,
  tc,
  nc,
  ai = !1,
  Wr = [],
  Lt = null,
  Dt = null,
  At = null,
  wr = new Map(),
  Sr = new Map(),
  bt = [],
  Hf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Zl(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Lt = null;
      break;
    case "dragenter":
    case "dragleave":
      Dt = null;
      break;
    case "mouseover":
    case "mouseout":
      At = null;
      break;
    case "pointerover":
    case "pointerout":
      wr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Sr.delete(t.pointerId);
  }
}
function Wn(e, t, n, r, s, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [s],
      }),
      t !== null && ((t = $r(t)), t !== null && qi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function Yf(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return (Lt = Wn(Lt, e, t, n, r, s)), !0;
    case "dragenter":
      return (Dt = Wn(Dt, e, t, n, r, s)), !0;
    case "mouseover":
      return (At = Wn(At, e, t, n, r, s)), !0;
    case "pointerover":
      var o = s.pointerId;
      return wr.set(o, Wn(wr.get(o) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return (
        (o = s.pointerId), Sr.set(o, Wn(Sr.get(o) || null, e, t, n, r, s)), !0
      );
  }
  return !1;
}
function rc(e) {
  var t = Jt(e.target);
  if (t !== null) {
    var n = cn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ku(n)), t !== null)) {
          (e.blockedOn = t),
            nc(e.priority, function () {
              ec(n);
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
function as(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ui(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ri = r), n.target.dispatchEvent(r), (ri = null);
    } else return (t = $r(n)), t !== null && qi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ql(e, t, n) {
  as(e) && n.delete(t);
}
function Wf() {
  (ai = !1),
    Lt !== null && as(Lt) && (Lt = null),
    Dt !== null && as(Dt) && (Dt = null),
    At !== null && as(At) && (At = null),
    wr.forEach(ql),
    Sr.forEach(ql);
}
function Gn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ai ||
      ((ai = !0),
      Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, Wf)));
}
function Nr(e) {
  function t(s) {
    return Gn(s, e);
  }
  if (0 < Wr.length) {
    Gn(Wr[0], e);
    for (var n = 1; n < Wr.length; n++) {
      var r = Wr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Lt !== null && Gn(Lt, e),
      Dt !== null && Gn(Dt, e),
      At !== null && Gn(At, e),
      wr.forEach(t),
      Sr.forEach(t),
      n = 0;
    n < bt.length;
    n++
  )
    (r = bt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < bt.length && ((n = bt[0]), n.blockedOn === null); )
    rc(n), n.blockedOn === null && bt.shift();
}
var In = Et.ReactCurrentBatchConfig,
  Cs = !0;
function Gf(e, t, n, r) {
  var s = Y,
    o = In.transition;
  In.transition = null;
  try {
    (Y = 1), el(e, t, n, r);
  } finally {
    (Y = s), (In.transition = o);
  }
}
function Xf(e, t, n, r) {
  var s = Y,
    o = In.transition;
  In.transition = null;
  try {
    (Y = 4), el(e, t, n, r);
  } finally {
    (Y = s), (In.transition = o);
  }
}
function el(e, t, n, r) {
  if (Cs) {
    var s = ui(e, t, n, r);
    if (s === null) bo(e, t, r, ks, n), Zl(e, r);
    else if (Yf(s, e, t, n, r)) r.stopPropagation();
    else if ((Zl(e, r), t & 4 && -1 < Hf.indexOf(e))) {
      for (; s !== null; ) {
        var o = $r(s);
        if (
          (o !== null && qu(o),
          (o = ui(e, t, n, r)),
          o === null && bo(e, t, r, ks, n),
          o === s)
        )
          break;
        s = o;
      }
      s !== null && r.stopPropagation();
    } else bo(e, t, r, null, n);
  }
}
var ks = null;
function ui(e, t, n, r) {
  if (((ks = null), (e = Xi(r)), (e = Jt(e)), e !== null))
    if (((t = cn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ku(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ks = e), null;
}
function sc(e) {
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
      switch (Mf()) {
        case Ji:
          return 1;
        case Gu:
          return 4;
        case Ns:
        case Ff:
          return 16;
        case Xu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Tt = null,
  tl = null,
  us = null;
function oc() {
  if (us) return us;
  var e,
    t = tl,
    n = t.length,
    r,
    s = "value" in Tt ? Tt.value : Tt.textContent,
    o = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === s[o - r]; r++);
  return (us = s.slice(e, 1 < r ? 1 - r : void 0));
}
function cs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Gr() {
  return !0;
}
function ea() {
  return !1;
}
function Qe(e) {
  function t(n, r, s, o, i) {
    (this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Gr
        : ea),
      (this.isPropagationStopped = ea),
      this
    );
  }
  return (
    le(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Gr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Gr));
      },
      persist: function () {},
      isPersistent: Gr,
    }),
    t
  );
}
var zn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  nl = Qe(zn),
  Fr = le({}, zn, { view: 0, detail: 0 }),
  Jf = Qe(Fr),
  wo,
  So,
  Xn,
  Gs = le({}, Fr, {
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
    getModifierState: rl,
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
        : (e !== Xn &&
            (Xn && e.type === "mousemove"
              ? ((wo = e.screenX - Xn.screenX), (So = e.screenY - Xn.screenY))
              : (So = wo = 0),
            (Xn = e)),
          wo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : So;
    },
  }),
  ta = Qe(Gs),
  Zf = le({}, Gs, { dataTransfer: 0 }),
  qf = Qe(Zf),
  ep = le({}, Fr, { relatedTarget: 0 }),
  No = Qe(ep),
  tp = le({}, zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  np = Qe(tp),
  rp = le({}, zn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sp = Qe(rp),
  op = le({}, zn, { data: 0 }),
  na = Qe(op),
  ip = {
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
  lp = {
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
  ap = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function up(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ap[e]) ? !!t[e] : !1;
}
function rl() {
  return up;
}
var cp = le({}, Fr, {
    key: function (e) {
      if (e.key) {
        var t = ip[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = cs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? lp[e.keyCode] || "Unidentified"
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
    getModifierState: rl,
    charCode: function (e) {
      return e.type === "keypress" ? cs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? cs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  dp = Qe(cp),
  fp = le({}, Gs, {
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
  ra = Qe(fp),
  pp = le({}, Fr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: rl,
  }),
  gp = Qe(pp),
  hp = le({}, zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  mp = Qe(hp),
  yp = le({}, Gs, {
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
  xp = Qe(yp),
  vp = [9, 13, 27, 32],
  sl = vt && "CompositionEvent" in window,
  ur = null;
vt && "documentMode" in document && (ur = document.documentMode);
var wp = vt && "TextEvent" in window && !ur,
  ic = vt && (!sl || (ur && 8 < ur && 11 >= ur)),
  sa = " ",
  oa = !1;
function lc(e, t) {
  switch (e) {
    case "keyup":
      return vp.indexOf(t.keyCode) !== -1;
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
function ac(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var yn = !1;
function Sp(e, t) {
  switch (e) {
    case "compositionend":
      return ac(t);
    case "keypress":
      return t.which !== 32 ? null : ((oa = !0), sa);
    case "textInput":
      return (e = t.data), e === sa && oa ? null : e;
    default:
      return null;
  }
}
function Np(e, t) {
  if (yn)
    return e === "compositionend" || (!sl && lc(e, t))
      ? ((e = oc()), (us = tl = Tt = null), (yn = !1), e)
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
      return ic && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ep = {
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
function ia(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ep[e.type] : t === "textarea";
}
function uc(e, t, n, r) {
  Uu(r),
    (t = js(t, "onChange")),
    0 < t.length &&
      ((n = new nl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var cr = null,
  Er = null;
function Cp(e) {
  wc(e, 0);
}
function Xs(e) {
  var t = wn(e);
  if (Pu(t)) return e;
}
function kp(e, t) {
  if (e === "change") return t;
}
var cc = !1;
if (vt) {
  var Eo;
  if (vt) {
    var Co = "oninput" in document;
    if (!Co) {
      var la = document.createElement("div");
      la.setAttribute("oninput", "return;"),
        (Co = typeof la.oninput == "function");
    }
    Eo = Co;
  } else Eo = !1;
  cc = Eo && (!document.documentMode || 9 < document.documentMode);
}
function aa() {
  cr && (cr.detachEvent("onpropertychange", dc), (Er = cr = null));
}
function dc(e) {
  if (e.propertyName === "value" && Xs(Er)) {
    var t = [];
    uc(t, Er, e, Xi(e)), Qu(Cp, t);
  }
}
function jp(e, t, n) {
  e === "focusin"
    ? (aa(), (cr = t), (Er = n), cr.attachEvent("onpropertychange", dc))
    : e === "focusout" && aa();
}
function Op(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Xs(Er);
}
function Rp(e, t) {
  if (e === "click") return Xs(t);
}
function bp(e, t) {
  if (e === "input" || e === "change") return Xs(t);
}
function Ip(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ot = typeof Object.is == "function" ? Object.is : Ip;
function Cr(e, t) {
  if (ot(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Ko.call(t, s) || !ot(e[s], t[s])) return !1;
  }
  return !0;
}
function ua(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ca(e, t) {
  var n = ua(e);
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
    n = ua(n);
  }
}
function fc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? fc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function pc() {
  for (var e = window, t = vs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = vs(e.document);
  }
  return t;
}
function ol(e) {
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
function Tp(e) {
  var t = pc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    fc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ol(n)) {
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
        var s = n.textContent.length,
          o = Math.min(r.start, s);
        (r = r.end === void 0 ? o : Math.min(r.end, s)),
          !e.extend && o > r && ((s = r), (r = o), (o = s)),
          (s = ca(n, o));
        var i = ca(n, r);
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
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var _p = vt && "documentMode" in document && 11 >= document.documentMode,
  xn = null,
  ci = null,
  dr = null,
  di = !1;
function da(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  di ||
    xn == null ||
    xn !== vs(r) ||
    ((r = xn),
    "selectionStart" in r && ol(r)
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
    (dr && Cr(dr, r)) ||
      ((dr = r),
      (r = js(ci, "onSelect")),
      0 < r.length &&
        ((t = new nl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = xn))));
}
function Xr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var vn = {
    animationend: Xr("Animation", "AnimationEnd"),
    animationiteration: Xr("Animation", "AnimationIteration"),
    animationstart: Xr("Animation", "AnimationStart"),
    transitionend: Xr("Transition", "TransitionEnd"),
  },
  ko = {},
  gc = {};
vt &&
  ((gc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete vn.animationend.animation,
    delete vn.animationiteration.animation,
    delete vn.animationstart.animation),
  "TransitionEvent" in window || delete vn.transitionend.transition);
function Js(e) {
  if (ko[e]) return ko[e];
  if (!vn[e]) return e;
  var t = vn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in gc) return (ko[e] = t[n]);
  return e;
}
var hc = Js("animationend"),
  mc = Js("animationiteration"),
  yc = Js("animationstart"),
  xc = Js("transitionend"),
  vc = new Map(),
  fa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Qt(e, t) {
  vc.set(e, t), un(t, [e]);
}
for (var jo = 0; jo < fa.length; jo++) {
  var Oo = fa[jo],
    Pp = Oo.toLowerCase(),
    Lp = Oo[0].toUpperCase() + Oo.slice(1);
  Qt(Pp, "on" + Lp);
}
Qt(hc, "onAnimationEnd");
Qt(mc, "onAnimationIteration");
Qt(yc, "onAnimationStart");
Qt("dblclick", "onDoubleClick");
Qt("focusin", "onFocus");
Qt("focusout", "onBlur");
Qt(xc, "onTransitionEnd");
Pn("onMouseEnter", ["mouseout", "mouseover"]);
Pn("onMouseLeave", ["mouseout", "mouseover"]);
Pn("onPointerEnter", ["pointerout", "pointerover"]);
Pn("onPointerLeave", ["pointerout", "pointerover"]);
un(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
un(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
un("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
un(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
un(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
un(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ir =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Dp = new Set("cancel close invalid load scroll toggle".split(" ").concat(ir));
function pa(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Pf(r, t, void 0, e), (e.currentTarget = null);
}
function wc(e, t) {
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
          pa(s, a, c), (o = u);
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
          pa(s, a, c), (o = u);
        }
    }
  }
  if (Ss) throw ((e = ii), (Ss = !1), (ii = null), e);
}
function q(e, t) {
  var n = t[mi];
  n === void 0 && (n = t[mi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Sc(t, e, 2, !1), n.add(r));
}
function Ro(e, t, n) {
  var r = 0;
  t && (r |= 4), Sc(n, e, r, t);
}
var Jr = "_reactListening" + Math.random().toString(36).slice(2);
function kr(e) {
  if (!e[Jr]) {
    (e[Jr] = !0),
      Ru.forEach(function (n) {
        n !== "selectionchange" && (Dp.has(n) || Ro(n, !1, e), Ro(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Jr] || ((t[Jr] = !0), Ro("selectionchange", !1, t));
  }
}
function Sc(e, t, n, r) {
  switch (sc(t)) {
    case 1:
      var s = Gf;
      break;
    case 4:
      s = Xf;
      break;
    default:
      s = el;
  }
  (n = s.bind(null, t, n, e)),
    (s = void 0),
    !oi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
      ? e.addEventListener(t, n, { passive: s })
      : e.addEventListener(t, n, !1);
}
function bo(e, t, n, r, s) {
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
          if (((i = Jt(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Qu(function () {
    var c = o,
      f = Xi(n),
      g = [];
    e: {
      var d = vc.get(e);
      if (d !== void 0) {
        var x = nl,
          v = e;
        switch (e) {
          case "keypress":
            if (cs(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = dp;
            break;
          case "focusin":
            (v = "focus"), (x = No);
            break;
          case "focusout":
            (v = "blur"), (x = No);
            break;
          case "beforeblur":
          case "afterblur":
            x = No;
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
            x = ta;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = qf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = gp;
            break;
          case hc:
          case mc:
          case yc:
            x = np;
            break;
          case xc:
            x = mp;
            break;
          case "scroll":
            x = Jf;
            break;
          case "wheel":
            x = xp;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = sp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = ra;
        }
        var N = (t & 4) !== 0,
          R = !N && e === "scroll",
          m = N ? (d !== null ? d + "Capture" : null) : d;
        N = [];
        for (var p = c, y; p !== null; ) {
          y = p;
          var S = y.stateNode;
          if (
            (y.tag === 5 &&
              S !== null &&
              ((y = S),
              m !== null && ((S = vr(p, m)), S != null && N.push(jr(p, S, y)))),
            R)
          )
            break;
          p = p.return;
        }
        0 < N.length &&
          ((d = new x(d, v, null, n, f)), g.push({ event: d, listeners: N }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          d &&
            n !== ri &&
            (v = n.relatedTarget || n.fromElement) &&
            (Jt(v) || v[wt]))
        )
          break e;
        if (
          (x || d) &&
          ((d =
            f.window === f
              ? f
              : (d = f.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          x
            ? ((v = n.relatedTarget || n.toElement),
              (x = c),
              (v = v ? Jt(v) : null),
              v !== null &&
                ((R = cn(v)), v !== R || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((x = null), (v = c)),
          x !== v)
        ) {
          if (
            ((N = ta),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((N = ra),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (R = x == null ? d : wn(x)),
            (y = v == null ? d : wn(v)),
            (d = new N(S, p + "leave", x, n, f)),
            (d.target = R),
            (d.relatedTarget = y),
            (S = null),
            Jt(f) === c &&
              ((N = new N(m, p + "enter", v, n, f)),
              (N.target = y),
              (N.relatedTarget = R),
              (S = N)),
            (R = S),
            x && v)
          )
            t: {
              for (N = x, m = v, p = 0, y = N; y; y = fn(y)) p++;
              for (y = 0, S = m; S; S = fn(S)) y++;
              for (; 0 < p - y; ) (N = fn(N)), p--;
              for (; 0 < y - p; ) (m = fn(m)), y--;
              for (; p--; ) {
                if (N === m || (m !== null && N === m.alternate)) break t;
                (N = fn(N)), (m = fn(m));
              }
              N = null;
            }
          else N = null;
          x !== null && ga(g, d, x, N, !1),
            v !== null && R !== null && ga(g, R, v, N, !0);
        }
      }
      e: {
        if (
          ((d = c ? wn(c) : window),
          (x = d.nodeName && d.nodeName.toLowerCase()),
          x === "select" || (x === "input" && d.type === "file"))
        )
          var E = kp;
        else if (ia(d))
          if (cc) E = bp;
          else {
            E = Op;
            var h = jp;
          }
        else
          (x = d.nodeName) &&
            x.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (E = Rp);
        if (E && (E = E(e, c))) {
          uc(g, E, n, f);
          break e;
        }
        h && h(e, d, c),
          e === "focusout" &&
            (h = d._wrapperState) &&
            h.controlled &&
            d.type === "number" &&
            Zo(d, "number", d.value);
      }
      switch (((h = c ? wn(c) : window), e)) {
        case "focusin":
          (ia(h) || h.contentEditable === "true") &&
            ((xn = h), (ci = c), (dr = null));
          break;
        case "focusout":
          dr = ci = xn = null;
          break;
        case "mousedown":
          di = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (di = !1), da(g, n, f);
          break;
        case "selectionchange":
          if (_p) break;
        case "keydown":
        case "keyup":
          da(g, n, f);
      }
      var w;
      if (sl)
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
        yn
          ? lc(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (ic &&
          n.locale !== "ko" &&
          (yn || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && yn && (w = oc())
            : ((Tt = f),
              (tl = "value" in Tt ? Tt.value : Tt.textContent),
              (yn = !0))),
        (h = js(c, C)),
        0 < h.length &&
          ((C = new na(C, e, null, n, f)),
          g.push({ event: C, listeners: h }),
          w ? (C.data = w) : ((w = ac(n)), w !== null && (C.data = w)))),
        (w = wp ? Sp(e, n) : Np(e, n)) &&
          ((c = js(c, "onBeforeInput")),
          0 < c.length &&
            ((f = new na("onBeforeInput", "beforeinput", null, n, f)),
            g.push({ event: f, listeners: c }),
            (f.data = w)));
    }
    wc(g, t);
  });
}
function jr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function js(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      o = s.stateNode;
    s.tag === 5 &&
      o !== null &&
      ((s = o),
      (o = vr(e, n)),
      o != null && r.unshift(jr(e, o, s)),
      (o = vr(e, t)),
      o != null && r.push(jr(e, o, s))),
      (e = e.return);
  }
  return r;
}
function fn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ga(e, t, n, r, s) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      c = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      s
        ? ((u = vr(n, o)), u != null && i.unshift(jr(n, u, a)))
        : s || ((u = vr(n, o)), u != null && i.push(jr(n, u, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Ap = /\r\n?/g,
  Mp = /\u0000|\uFFFD/g;
function ha(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ap,
      `
`
    )
    .replace(Mp, "");
}
function Zr(e, t, n) {
  if (((t = ha(t)), ha(e) !== t && n)) throw Error(j(425));
}
function Os() {}
var fi = null,
  pi = null;
function gi(e, t) {
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
var hi = typeof setTimeout == "function" ? setTimeout : void 0,
  Fp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ma = typeof Promise == "function" ? Promise : void 0,
  $p =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ma < "u"
      ? function (e) {
          return ma.resolve(null).then(e).catch(Up);
        }
      : hi;
function Up(e) {
  setTimeout(function () {
    throw e;
  });
}
function Io(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(s), Nr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  Nr(t);
}
function Mt(e) {
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
function ya(e) {
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
var Vn = Math.random().toString(36).slice(2),
  at = "__reactFiber$" + Vn,
  Or = "__reactProps$" + Vn,
  wt = "__reactContainer$" + Vn,
  mi = "__reactEvents$" + Vn,
  zp = "__reactListeners$" + Vn,
  Vp = "__reactHandles$" + Vn;
function Jt(e) {
  var t = e[at];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[wt] || n[at])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ya(e); e !== null; ) {
          if ((n = e[at])) return n;
          e = ya(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function $r(e) {
  return (
    (e = e[at] || e[wt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function wn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function Zs(e) {
  return e[Or] || null;
}
var yi = [],
  Sn = -1;
function Kt(e) {
  return { current: e };
}
function ee(e) {
  0 > Sn || ((e.current = yi[Sn]), (yi[Sn] = null), Sn--);
}
function J(e, t) {
  Sn++, (yi[Sn] = e.current), (e.current = t);
}
var Bt = {},
  Oe = Kt(Bt),
  De = Kt(!1),
  rn = Bt;
function Ln(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Bt;
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
function Ae(e) {
  return (e = e.childContextTypes), e != null;
}
function Rs() {
  ee(De), ee(Oe);
}
function xa(e, t, n) {
  if (Oe.current !== Bt) throw Error(j(168));
  J(Oe, t), J(De, n);
}
function Nc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(j(108, jf(e) || "Unknown", s));
  return le({}, n, r);
}
function bs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Bt),
    (rn = Oe.current),
    J(Oe, e),
    J(De, De.current),
    !0
  );
}
function va(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = Nc(e, t, rn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ee(De),
      ee(Oe),
      J(Oe, e))
    : ee(De),
    J(De, n);
}
var ht = null,
  qs = !1,
  To = !1;
function Ec(e) {
  ht === null ? (ht = [e]) : ht.push(e);
}
function Bp(e) {
  (qs = !0), Ec(e);
}
function Ht() {
  if (!To && ht !== null) {
    To = !0;
    var e = 0,
      t = Y;
    try {
      var n = ht;
      for (Y = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ht = null), (qs = !1);
    } catch (s) {
      throw (ht !== null && (ht = ht.slice(e + 1)), Wu(Ji, Ht), s);
    } finally {
      (Y = t), (To = !1);
    }
  }
  return null;
}
var Nn = [],
  En = 0,
  Is = null,
  Ts = 0,
  Ye = [],
  We = 0,
  sn = null,
  mt = 1,
  yt = "";
function Gt(e, t) {
  (Nn[En++] = Ts), (Nn[En++] = Is), (Is = e), (Ts = t);
}
function Cc(e, t, n) {
  (Ye[We++] = mt), (Ye[We++] = yt), (Ye[We++] = sn), (sn = e);
  var r = mt;
  e = yt;
  var s = 32 - rt(r) - 1;
  (r &= ~(1 << s)), (n += 1);
  var o = 32 - rt(t) + s;
  if (30 < o) {
    var i = s - (s % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (s -= i),
      (mt = (1 << (32 - rt(t) + s)) | (n << s) | r),
      (yt = o + e);
  } else (mt = (1 << o) | (n << s) | r), (yt = e);
}
function il(e) {
  e.return !== null && (Gt(e, 1), Cc(e, 1, 0));
}
function ll(e) {
  for (; e === Is; )
    (Is = Nn[--En]), (Nn[En] = null), (Ts = Nn[--En]), (Nn[En] = null);
  for (; e === sn; )
    (sn = Ye[--We]),
      (Ye[We] = null),
      (yt = Ye[--We]),
      (Ye[We] = null),
      (mt = Ye[--We]),
      (Ye[We] = null);
}
var ze = null,
  Ue = null,
  re = !1,
  nt = null;
function kc(e, t) {
  var n = Ge(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function wa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ze = e), (Ue = Mt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ze = e), (Ue = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = sn !== null ? { id: mt, overflow: yt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ge(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ze = e),
            (Ue = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function vi(e) {
  if (re) {
    var t = Ue;
    if (t) {
      var n = t;
      if (!wa(e, t)) {
        if (xi(e)) throw Error(j(418));
        t = Mt(n.nextSibling);
        var r = ze;
        t && wa(e, t)
          ? kc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (re = !1), (ze = e));
      }
    } else {
      if (xi(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (re = !1), (ze = e);
    }
  }
}
function Sa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ze = e;
}
function qr(e) {
  if (e !== ze) return !1;
  if (!re) return Sa(e), (re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !gi(e.type, e.memoizedProps))),
    t && (t = Ue))
  ) {
    if (xi(e)) throw (jc(), Error(j(418)));
    for (; t; ) kc(e, t), (t = Mt(t.nextSibling));
  }
  if ((Sa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ue = Mt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ue = null;
    }
  } else Ue = ze ? Mt(e.stateNode.nextSibling) : null;
  return !0;
}
function jc() {
  for (var e = Ue; e; ) e = Mt(e.nextSibling);
}
function Dn() {
  (Ue = ze = null), (re = !1);
}
function al(e) {
  nt === null ? (nt = [e]) : nt.push(e);
}
var Qp = Et.ReactCurrentBatchConfig;
function Jn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
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
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function es(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Na(e) {
  var t = e._init;
  return t(e._payload);
}
function Oc(e) {
  function t(m, p) {
    if (e) {
      var y = m.deletions;
      y === null ? ((m.deletions = [p]), (m.flags |= 16)) : y.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function s(m, p) {
    return (m = zt(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, p, y) {
    return (
      (m.index = y),
      e
        ? ((y = m.alternate),
          y !== null
            ? ((y = y.index), y < p ? ((m.flags |= 2), p) : y)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, p, y, S) {
    return p === null || p.tag !== 6
      ? ((p = Fo(y, m.mode, S)), (p.return = m), p)
      : ((p = s(p, y)), (p.return = m), p);
  }
  function u(m, p, y, S) {
    var E = y.type;
    return E === mn
      ? f(m, p, y.props.children, S, y.key)
      : p !== null &&
        (p.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Ot &&
            Na(E) === p.type))
      ? ((S = s(p, y.props)), (S.ref = Jn(m, p, y)), (S.return = m), S)
      : ((S = ys(y.type, y.key, y.props, null, m.mode, S)),
        (S.ref = Jn(m, p, y)),
        (S.return = m),
        S);
  }
  function c(m, p, y, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== y.containerInfo ||
      p.stateNode.implementation !== y.implementation
      ? ((p = $o(y, m.mode, S)), (p.return = m), p)
      : ((p = s(p, y.children || [])), (p.return = m), p);
  }
  function f(m, p, y, S, E) {
    return p === null || p.tag !== 7
      ? ((p = tn(y, m.mode, S, E)), (p.return = m), p)
      : ((p = s(p, y)), (p.return = m), p);
  }
  function g(m, p, y) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Fo("" + p, m.mode, y)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Br:
          return (
            (y = ys(p.type, p.key, p.props, null, m.mode, y)),
            (y.ref = Jn(m, null, p)),
            (y.return = m),
            y
          );
        case hn:
          return (p = $o(p, m.mode, y)), (p.return = m), p;
        case Ot:
          var S = p._init;
          return g(m, S(p._payload), y);
      }
      if (sr(p) || Hn(p))
        return (p = tn(p, m.mode, y, null)), (p.return = m), p;
      es(m, p);
    }
    return null;
  }
  function d(m, p, y, S) {
    var E = p !== null ? p.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return E !== null ? null : a(m, p, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Br:
          return y.key === E ? u(m, p, y, S) : null;
        case hn:
          return y.key === E ? c(m, p, y, S) : null;
        case Ot:
          return (E = y._init), d(m, p, E(y._payload), S);
      }
      if (sr(y) || Hn(y)) return E !== null ? null : f(m, p, y, S, null);
      es(m, y);
    }
    return null;
  }
  function x(m, p, y, S, E) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (m = m.get(y) || null), a(p, m, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Br:
          return (m = m.get(S.key === null ? y : S.key) || null), u(p, m, S, E);
        case hn:
          return (m = m.get(S.key === null ? y : S.key) || null), c(p, m, S, E);
        case Ot:
          var h = S._init;
          return x(m, p, y, h(S._payload), E);
      }
      if (sr(S) || Hn(S)) return (m = m.get(y) || null), f(p, m, S, E, null);
      es(p, S);
    }
    return null;
  }
  function v(m, p, y, S) {
    for (
      var E = null, h = null, w = p, C = (p = 0), _ = null;
      w !== null && C < y.length;
      C++
    ) {
      w.index > C ? ((_ = w), (w = null)) : (_ = w.sibling);
      var I = d(m, w, y[C], S);
      if (I === null) {
        w === null && (w = _);
        break;
      }
      e && w && I.alternate === null && t(m, w),
        (p = o(I, p, C)),
        h === null ? (E = I) : (h.sibling = I),
        (h = I),
        (w = _);
    }
    if (C === y.length) return n(m, w), re && Gt(m, C), E;
    if (w === null) {
      for (; C < y.length; C++)
        (w = g(m, y[C], S)),
          w !== null &&
            ((p = o(w, p, C)), h === null ? (E = w) : (h.sibling = w), (h = w));
      return re && Gt(m, C), E;
    }
    for (w = r(m, w); C < y.length; C++)
      (_ = x(w, m, C, y[C], S)),
        _ !== null &&
          (e && _.alternate !== null && w.delete(_.key === null ? C : _.key),
          (p = o(_, p, C)),
          h === null ? (E = _) : (h.sibling = _),
          (h = _));
    return (
      e &&
        w.forEach(function (M) {
          return t(m, M);
        }),
      re && Gt(m, C),
      E
    );
  }
  function N(m, p, y, S) {
    var E = Hn(y);
    if (typeof E != "function") throw Error(j(150));
    if (((y = E.call(y)), y == null)) throw Error(j(151));
    for (
      var h = (E = null), w = p, C = (p = 0), _ = null, I = y.next();
      w !== null && !I.done;
      C++, I = y.next()
    ) {
      w.index > C ? ((_ = w), (w = null)) : (_ = w.sibling);
      var M = d(m, w, I.value, S);
      if (M === null) {
        w === null && (w = _);
        break;
      }
      e && w && M.alternate === null && t(m, w),
        (p = o(M, p, C)),
        h === null ? (E = M) : (h.sibling = M),
        (h = M),
        (w = _);
    }
    if (I.done) return n(m, w), re && Gt(m, C), E;
    if (w === null) {
      for (; !I.done; C++, I = y.next())
        (I = g(m, I.value, S)),
          I !== null &&
            ((p = o(I, p, C)), h === null ? (E = I) : (h.sibling = I), (h = I));
      return re && Gt(m, C), E;
    }
    for (w = r(m, w); !I.done; C++, I = y.next())
      (I = x(w, m, C, I.value, S)),
        I !== null &&
          (e && I.alternate !== null && w.delete(I.key === null ? C : I.key),
          (p = o(I, p, C)),
          h === null ? (E = I) : (h.sibling = I),
          (h = I));
    return (
      e &&
        w.forEach(function (U) {
          return t(m, U);
        }),
      re && Gt(m, C),
      E
    );
  }
  function R(m, p, y, S) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === mn &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Br:
          e: {
            for (var E = y.key, h = p; h !== null; ) {
              if (h.key === E) {
                if (((E = y.type), E === mn)) {
                  if (h.tag === 7) {
                    n(m, h.sibling),
                      (p = s(h, y.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  h.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Ot &&
                    Na(E) === h.type)
                ) {
                  n(m, h.sibling),
                    (p = s(h, y.props)),
                    (p.ref = Jn(m, h, y)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, h);
                break;
              } else t(m, h);
              h = h.sibling;
            }
            y.type === mn
              ? ((p = tn(y.props.children, m.mode, S, y.key)),
                (p.return = m),
                (m = p))
              : ((S = ys(y.type, y.key, y.props, null, m.mode, S)),
                (S.ref = Jn(m, p, y)),
                (S.return = m),
                (m = S));
          }
          return i(m);
        case hn:
          e: {
            for (h = y.key; p !== null; ) {
              if (p.key === h)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === y.containerInfo &&
                  p.stateNode.implementation === y.implementation
                ) {
                  n(m, p.sibling),
                    (p = s(p, y.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = $o(y, m.mode, S)), (p.return = m), (m = p);
          }
          return i(m);
        case Ot:
          return (h = y._init), R(m, p, h(y._payload), S);
      }
      if (sr(y)) return v(m, p, y, S);
      if (Hn(y)) return N(m, p, y, S);
      es(m, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = s(p, y)), (p.return = m), (m = p))
          : (n(m, p), (p = Fo(y, m.mode, S)), (p.return = m), (m = p)),
        i(m))
      : n(m, p);
  }
  return R;
}
var An = Oc(!0),
  Rc = Oc(!1),
  _s = Kt(null),
  Ps = null,
  Cn = null,
  ul = null;
function cl() {
  ul = Cn = Ps = null;
}
function dl(e) {
  var t = _s.current;
  ee(_s), (e._currentValue = t);
}
function wi(e, t, n) {
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
function Tn(e, t) {
  (Ps = e),
    (ul = Cn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Le = !0), (e.firstContext = null));
}
function Je(e) {
  var t = e._currentValue;
  if (ul !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Cn === null)) {
      if (Ps === null) throw Error(j(308));
      (Cn = e), (Ps.dependencies = { lanes: 0, firstContext: e });
    } else Cn = Cn.next = e;
  return t;
}
var Zt = null;
function fl(e) {
  Zt === null ? (Zt = [e]) : Zt.push(e);
}
function bc(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), fl(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    St(e, r)
  );
}
function St(e, t) {
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
var Rt = !1;
function pl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ic(e, t) {
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
function xt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), $ & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      St(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), fl(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    St(e, n)
  );
}
function ds(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zi(e, n);
  }
}
function Ea(e, t) {
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
        o === null ? (s = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (s = o = t) : (o = o.next = t);
    } else s = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
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
function Ls(e, t, n, r) {
  var s = e.updateQueue;
  Rt = !1;
  var o = s.firstBaseUpdate,
    i = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var u = a,
      c = u.next;
    (u.next = null), i === null ? (o = c) : (i.next = c), (i = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== i &&
        (a === null ? (f.firstBaseUpdate = c) : (a.next = c),
        (f.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var g = s.baseState;
    (i = 0), (f = c = u = null), (a = o);
    do {
      var d = a.lane,
        x = a.eventTime;
      if ((r & d) === d) {
        f !== null &&
          (f = f.next =
            {
              eventTime: x,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            N = a;
          switch (((d = t), (x = n), N.tag)) {
            case 1:
              if (((v = N.payload), typeof v == "function")) {
                g = v.call(x, g, d);
                break e;
              }
              g = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = N.payload),
                (d = typeof v == "function" ? v.call(x, g, d) : v),
                d == null)
              )
                break e;
              g = le({}, g, d);
              break e;
            case 2:
              Rt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = s.effects),
          d === null ? (s.effects = [a]) : d.push(a));
      } else
        (x = {
          eventTime: x,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((c = f = x), (u = g)) : (f = f.next = x),
          (i |= d);
      if (((a = a.next), a === null)) {
        if (((a = s.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (s.lastBaseUpdate = d),
          (s.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (u = g),
      (s.baseState = u),
      (s.firstBaseUpdate = c),
      (s.lastBaseUpdate = f),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do (i |= s.lane), (s = s.next);
      while (s !== t);
    } else o === null && (s.shared.lanes = 0);
    (ln |= i), (e.lanes = i), (e.memoizedState = g);
  }
}
function Ca(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(j(191, s));
        s.call(r);
      }
    }
}
var Ur = {},
  dt = Kt(Ur),
  Rr = Kt(Ur),
  br = Kt(Ur);
function qt(e) {
  if (e === Ur) throw Error(j(174));
  return e;
}
function gl(e, t) {
  switch ((J(br, t), J(Rr, e), J(dt, Ur), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ei(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ei(t, e));
  }
  ee(dt), J(dt, t);
}
function Mn() {
  ee(dt), ee(Rr), ee(br);
}
function Tc(e) {
  qt(br.current);
  var t = qt(dt.current),
    n = ei(t, e.type);
  t !== n && (J(Rr, e), J(dt, n));
}
function hl(e) {
  Rr.current === e && (ee(dt), ee(Rr));
}
var oe = Kt(0);
function Ds(e) {
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
var _o = [];
function ml() {
  for (var e = 0; e < _o.length; e++)
    _o[e]._workInProgressVersionPrimary = null;
  _o.length = 0;
}
var fs = Et.ReactCurrentDispatcher,
  Po = Et.ReactCurrentBatchConfig,
  on = 0,
  ie = null,
  fe = null,
  ge = null,
  As = !1,
  fr = !1,
  Ir = 0,
  Kp = 0;
function Ce() {
  throw Error(j(321));
}
function yl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ot(e[n], t[n])) return !1;
  return !0;
}
function xl(e, t, n, r, s, o) {
  if (
    ((on = o),
    (ie = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (fs.current = e === null || e.memoizedState === null ? Gp : Xp),
    (e = n(r, s)),
    fr)
  ) {
    o = 0;
    do {
      if (((fr = !1), (Ir = 0), 25 <= o)) throw Error(j(301));
      (o += 1),
        (ge = fe = null),
        (t.updateQueue = null),
        (fs.current = Jp),
        (e = n(r, s));
    } while (fr);
  }
  if (
    ((fs.current = Ms),
    (t = fe !== null && fe.next !== null),
    (on = 0),
    (ge = fe = ie = null),
    (As = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function vl() {
  var e = Ir !== 0;
  return (Ir = 0), e;
}
function lt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ge === null ? (ie.memoizedState = ge = e) : (ge = ge.next = e), ge;
}
function Ze() {
  if (fe === null) {
    var e = ie.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = fe.next;
  var t = ge === null ? ie.memoizedState : ge.next;
  if (t !== null) (ge = t), (fe = e);
  else {
    if (e === null) throw Error(j(310));
    (fe = e),
      (e = {
        memoizedState: fe.memoizedState,
        baseState: fe.baseState,
        baseQueue: fe.baseQueue,
        queue: fe.queue,
        next: null,
      }),
      ge === null ? (ie.memoizedState = ge = e) : (ge = ge.next = e);
  }
  return ge;
}
function Tr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Lo(e) {
  var t = Ze(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = fe,
    s = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (s !== null) {
      var i = s.next;
      (s.next = o.next), (o.next = i);
    }
    (r.baseQueue = s = o), (n.pending = null);
  }
  if (s !== null) {
    (o = s.next), (r = r.baseState);
    var a = (i = null),
      u = null,
      c = o;
    do {
      var f = c.lane;
      if ((on & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var g = {
          lane: f,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((a = u = g), (i = r)) : (u = u.next = g),
          (ie.lanes |= f),
          (ln |= f);
      }
      c = c.next;
    } while (c !== null && c !== o);
    u === null ? (i = r) : (u.next = a),
      ot(r, t.memoizedState) || (Le = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do (o = s.lane), (ie.lanes |= o), (ln |= o), (s = s.next);
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Do(e) {
  var t = Ze(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    o = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var i = (s = s.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== s);
    ot(o, t.memoizedState) || (Le = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function _c() {}
function Pc(e, t) {
  var n = ie,
    r = Ze(),
    s = t(),
    o = !ot(r.memoizedState, s);
  if (
    (o && ((r.memoizedState = s), (Le = !0)),
    (r = r.queue),
    wl(Ac.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ge !== null && ge.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      _r(9, Dc.bind(null, n, r, s, t), void 0, null),
      he === null)
    )
      throw Error(j(349));
    on & 30 || Lc(n, t, s);
  }
  return s;
}
function Lc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ie.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Dc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Mc(t) && Fc(e);
}
function Ac(e, t, n) {
  return n(function () {
    Mc(t) && Fc(e);
  });
}
function Mc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ot(e, n);
  } catch {
    return !0;
  }
}
function Fc(e) {
  var t = St(e, 1);
  t !== null && st(t, e, 1, -1);
}
function ka(e) {
  var t = lt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Tr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Wp.bind(null, ie, e)),
    [t.memoizedState, e]
  );
}
function _r(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ie.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function $c() {
  return Ze().memoizedState;
}
function ps(e, t, n, r) {
  var s = lt();
  (ie.flags |= e),
    (s.memoizedState = _r(1 | t, n, void 0, r === void 0 ? null : r));
}
function eo(e, t, n, r) {
  var s = Ze();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (fe !== null) {
    var i = fe.memoizedState;
    if (((o = i.destroy), r !== null && yl(r, i.deps))) {
      s.memoizedState = _r(t, n, o, r);
      return;
    }
  }
  (ie.flags |= e), (s.memoizedState = _r(1 | t, n, o, r));
}
function ja(e, t) {
  return ps(8390656, 8, e, t);
}
function wl(e, t) {
  return eo(2048, 8, e, t);
}
function Uc(e, t) {
  return eo(4, 2, e, t);
}
function zc(e, t) {
  return eo(4, 4, e, t);
}
function Vc(e, t) {
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
function Bc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), eo(4, 4, Vc.bind(null, t, e), n)
  );
}
function Sl() {}
function Qc(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Kc(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Hc(e, t, n) {
  return on & 21
    ? (ot(n, t) || ((n = Ju()), (ie.lanes |= n), (ln |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Le = !0)), (e.memoizedState = n));
}
function Hp(e, t) {
  var n = Y;
  (Y = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Po.transition;
  Po.transition = {};
  try {
    e(!1), t();
  } finally {
    (Y = n), (Po.transition = r);
  }
}
function Yc() {
  return Ze().memoizedState;
}
function Yp(e, t, n) {
  var r = Ut(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Wc(e))
  )
    Gc(t, n);
  else if (((n = bc(e, t, n, r)), n !== null)) {
    var s = Ie();
    st(n, e, r, s), Xc(n, t, r);
  }
}
function Wp(e, t, n) {
  var r = Ut(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Wc(e)) Gc(t, s);
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
        if (((s.hasEagerState = !0), (s.eagerState = a), ot(a, i))) {
          var u = t.interleaved;
          u === null
            ? ((s.next = s), fl(t))
            : ((s.next = u.next), (u.next = s)),
            (t.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (n = bc(e, t, s, r)),
      n !== null && ((s = Ie()), st(n, e, r, s), Xc(n, t, r));
  }
}
function Wc(e) {
  var t = e.alternate;
  return e === ie || (t !== null && t === ie);
}
function Gc(e, t) {
  fr = As = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Xc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Zi(e, n);
  }
}
var Ms = {
    readContext: Je,
    useCallback: Ce,
    useContext: Ce,
    useEffect: Ce,
    useImperativeHandle: Ce,
    useInsertionEffect: Ce,
    useLayoutEffect: Ce,
    useMemo: Ce,
    useReducer: Ce,
    useRef: Ce,
    useState: Ce,
    useDebugValue: Ce,
    useDeferredValue: Ce,
    useTransition: Ce,
    useMutableSource: Ce,
    useSyncExternalStore: Ce,
    useId: Ce,
    unstable_isNewReconciler: !1,
  },
  Gp = {
    readContext: Je,
    useCallback: function (e, t) {
      return (lt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Je,
    useEffect: ja,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ps(4194308, 4, Vc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ps(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ps(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = lt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = lt();
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
        (e = e.dispatch = Yp.bind(null, ie, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = lt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ka,
    useDebugValue: Sl,
    useDeferredValue: function (e) {
      return (lt().memoizedState = e);
    },
    useTransition: function () {
      var e = ka(!1),
        t = e[0];
      return (e = Hp.bind(null, e[1])), (lt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ie,
        s = lt();
      if (re) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), he === null)) throw Error(j(349));
        on & 30 || Lc(r, t, n);
      }
      s.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (s.queue = o),
        ja(Ac.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        _r(9, Dc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = lt(),
        t = he.identifierPrefix;
      if (re) {
        var n = yt,
          r = mt;
        (n = (r & ~(1 << (32 - rt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ir++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Kp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Xp = {
    readContext: Je,
    useCallback: Qc,
    useContext: Je,
    useEffect: wl,
    useImperativeHandle: Bc,
    useInsertionEffect: Uc,
    useLayoutEffect: zc,
    useMemo: Kc,
    useReducer: Lo,
    useRef: $c,
    useState: function () {
      return Lo(Tr);
    },
    useDebugValue: Sl,
    useDeferredValue: function (e) {
      var t = Ze();
      return Hc(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = Lo(Tr)[0],
        t = Ze().memoizedState;
      return [e, t];
    },
    useMutableSource: _c,
    useSyncExternalStore: Pc,
    useId: Yc,
    unstable_isNewReconciler: !1,
  },
  Jp = {
    readContext: Je,
    useCallback: Qc,
    useContext: Je,
    useEffect: wl,
    useImperativeHandle: Bc,
    useInsertionEffect: Uc,
    useLayoutEffect: zc,
    useMemo: Kc,
    useReducer: Do,
    useRef: $c,
    useState: function () {
      return Do(Tr);
    },
    useDebugValue: Sl,
    useDeferredValue: function (e) {
      var t = Ze();
      return fe === null ? (t.memoizedState = e) : Hc(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = Do(Tr)[0],
        t = Ze().memoizedState;
      return [e, t];
    },
    useMutableSource: _c,
    useSyncExternalStore: Pc,
    useId: Yc,
    unstable_isNewReconciler: !1,
  };
function et(e, t) {
  if (e && e.defaultProps) {
    (t = le({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Si(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : le({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var to = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? cn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ie(),
      s = Ut(e),
      o = xt(r, s);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Ft(e, o, s)),
      t !== null && (st(t, e, s, r), ds(t, e, s));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ie(),
      s = Ut(e),
      o = xt(r, s);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ft(e, o, s)),
      t !== null && (st(t, e, s, r), ds(t, e, s));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ie(),
      r = Ut(e),
      s = xt(n, r);
    (s.tag = 2),
      t != null && (s.callback = t),
      (t = Ft(e, s, r)),
      t !== null && (st(t, e, r, n), ds(t, e, r));
  },
};
function Oa(e, t, n, r, s, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Cr(n, r) || !Cr(s, o)
      : !0
  );
}
function Jc(e, t, n) {
  var r = !1,
    s = Bt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Je(o))
      : ((s = Ae(t) ? rn : Oe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Ln(e, s) : Bt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = to),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ra(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && to.enqueueReplaceState(t, t.state, null);
}
function Ni(e, t, n, r) {
  var s = e.stateNode;
  (s.props = n), (s.state = e.memoizedState), (s.refs = {}), pl(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (s.context = Je(o))
    : ((o = Ae(t) ? rn : Oe.current), (s.context = Ln(e, o))),
    (s.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Si(e, t, o, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && to.enqueueReplaceState(s, s.state, null),
      Ls(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function Fn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += kf(r)), (r = r.return);
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
function Ao(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ei(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Zp = typeof WeakMap == "function" ? WeakMap : Map;
function Zc(e, t, n) {
  (n = xt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      $s || (($s = !0), (Pi = r)), Ei(e, t);
    }),
    n
  );
}
function qc(e, t, n) {
  (n = xt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    (n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        Ei(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ei(e, t),
          typeof r != "function" &&
            ($t === null ? ($t = new Set([this])) : $t.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function ba(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Zp();
    var s = new Set();
    r.set(t, s);
  } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
  s.has(n) || (s.add(n), (e = fg.bind(null, e, t, n)), t.then(e, e));
}
function Ia(e) {
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
function Ta(e, t, n, r, s) {
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
              : ((t = xt(-1, 1)), (t.tag = 2), Ft(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var qp = Et.ReactCurrentOwner,
  Le = !1;
function be(e, t, n, r) {
  t.child = e === null ? Rc(t, null, n, r) : An(t, e.child, n, r);
}
function _a(e, t, n, r, s) {
  n = n.render;
  var o = t.ref;
  return (
    Tn(t, s),
    (r = xl(e, t, n, r, o, s)),
    (n = vl()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Nt(e, t, s))
      : (re && n && il(t), (t.flags |= 1), be(e, t, r, s), t.child)
  );
}
function Pa(e, t, n, r, s) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !bl(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), ed(e, t, o, r, s))
      : ((e = ys(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & s))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Cr), n(i, r) && e.ref === t.ref)
    )
      return Nt(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = zt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ed(e, t, n, r, s) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Cr(o, r) && e.ref === t.ref)
      if (((Le = !1), (t.pendingProps = r = o), (e.lanes & s) !== 0))
        e.flags & 131072 && (Le = !0);
      else return (t.lanes = e.lanes), Nt(e, t, s);
  }
  return Ci(e, t, n, r, s);
}
function td(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        J(jn, $e),
        ($e |= n);
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
          J(jn, $e),
          ($e |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        J(jn, $e),
        ($e |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      J(jn, $e),
      ($e |= r);
  return be(e, t, s, n), t.child;
}
function nd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ci(e, t, n, r, s) {
  var o = Ae(n) ? rn : Oe.current;
  return (
    (o = Ln(t, o)),
    Tn(t, s),
    (n = xl(e, t, n, r, o, s)),
    (r = vl()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        Nt(e, t, s))
      : (re && r && il(t), (t.flags |= 1), be(e, t, n, s), t.child)
  );
}
function La(e, t, n, r, s) {
  if (Ae(n)) {
    var o = !0;
    bs(t);
  } else o = !1;
  if ((Tn(t, s), t.stateNode === null))
    gs(e, t), Jc(t, n, r), Ni(t, n, r, s), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Je(c))
      : ((c = Ae(n) ? rn : Oe.current), (c = Ln(t, c)));
    var f = n.getDerivedStateFromProps,
      g =
        typeof f == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== c) && Ra(t, i, r, c)),
      (Rt = !1);
    var d = t.memoizedState;
    (i.state = d),
      Ls(t, r, i, s),
      (u = t.memoizedState),
      a !== r || d !== u || De.current || Rt
        ? (typeof f == "function" && (Si(t, n, f, r), (u = t.memoizedState)),
          (a = Rt || Oa(t, n, a, r, d, u, c))
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
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Ic(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : et(t.type, a)),
      (i.props = c),
      (g = t.pendingProps),
      (d = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Je(u))
        : ((u = Ae(n) ? rn : Oe.current), (u = Ln(t, u)));
    var x = n.getDerivedStateFromProps;
    (f =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== g || d !== u) && Ra(t, i, r, u)),
      (Rt = !1),
      (d = t.memoizedState),
      (i.state = d),
      Ls(t, r, i, s);
    var v = t.memoizedState;
    a !== g || d !== v || De.current || Rt
      ? (typeof x == "function" && (Si(t, n, x, r), (v = t.memoizedState)),
        (c = Rt || Oa(t, n, c, r, d, v, u) || !1)
          ? (f ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, v, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, v, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (i.props = r),
        (i.state = v),
        (i.context = u),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ki(e, t, n, r, o, s);
}
function ki(e, t, n, r, s, o) {
  nd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return s && va(t, n, !1), Nt(e, t, o);
  (r = t.stateNode), (qp.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = An(t, e.child, null, o)), (t.child = An(t, null, a, o)))
      : be(e, t, a, o),
    (t.memoizedState = r.state),
    s && va(t, n, !0),
    t.child
  );
}
function rd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? xa(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && xa(e, t.context, !1),
    gl(e, t.containerInfo);
}
function Da(e, t, n, r, s) {
  return Dn(), al(s), (t.flags |= 256), be(e, t, n, r), t.child;
}
var ji = { dehydrated: null, treeContext: null, retryLane: 0 };
function Oi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function sd(e, t, n) {
  var r = t.pendingProps,
    s = oe.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    J(oe, s & 1),
    e === null)
  )
    return (
      vi(t),
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
                : (o = so(i, r, 0, null)),
              (e = tn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Oi(n)),
              (t.memoizedState = ji),
              e)
            : Nl(t, i))
    );
  if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return eg(e, t, i, r, a, s, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (s = e.child), (a = s.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = zt(s, u)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (o = zt(a, o)) : ((o = tn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Oi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ji),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = zt(o, { mode: "visible", children: r.children })),
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
function Nl(e, t) {
  return (
    (t = so({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ts(e, t, n, r) {
  return (
    r !== null && al(r),
    An(t, e.child, null, n),
    (e = Nl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function eg(e, t, n, r, s, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ao(Error(j(422)))), ts(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (s = t.mode),
        (r = so({ mode: "visible", children: r.children }, s, 0, null)),
        (o = tn(o, s, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && An(t, e.child, null, i),
        (t.child.memoizedState = Oi(i)),
        (t.memoizedState = ji),
        o);
  if (!(t.mode & 1)) return ts(e, t, i, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(j(419))), (r = Ao(o, r, void 0)), ts(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), Le || a)) {
    if (((r = he), r !== null)) {
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
      (s = s & (r.suspendedLanes | i) ? 0 : s),
        s !== 0 &&
          s !== o.retryLane &&
          ((o.retryLane = s), St(e, s), st(r, e, s, -1));
    }
    return Rl(), (r = Ao(Error(j(421)))), ts(e, t, i, r);
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = pg.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ue = Mt(s.nextSibling)),
      (ze = t),
      (re = !0),
      (nt = null),
      e !== null &&
        ((Ye[We++] = mt),
        (Ye[We++] = yt),
        (Ye[We++] = sn),
        (mt = e.id),
        (yt = e.overflow),
        (sn = t)),
      (t = Nl(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Aa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), wi(e.return, t, n);
}
function Mo(e, t, n, r, s) {
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
function od(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    o = r.tail;
  if ((be(e, t, r.children, n), (r = oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Aa(e, n, t);
        else if (e.tag === 19) Aa(e, n, t);
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
  if ((J(oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          (e = n.alternate),
            e !== null && Ds(e) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Mo(t, !1, s, n, o);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && Ds(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = n), (n = s), (s = e);
        }
        Mo(t, !0, n, null, o);
        break;
      case "together":
        Mo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function gs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Nt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (ln |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = zt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = zt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function tg(e, t, n) {
  switch (t.tag) {
    case 3:
      rd(t), Dn();
      break;
    case 5:
      Tc(t);
      break;
    case 1:
      Ae(t.type) && bs(t);
      break;
    case 4:
      gl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      J(_s, r._currentValue), (r._currentValue = s);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (J(oe, oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? sd(e, t, n)
          : (J(oe, oe.current & 1),
            (e = Nt(e, t, n)),
            e !== null ? e.sibling : null);
      J(oe, oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return od(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        J(oe, oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), td(e, t, n);
  }
  return Nt(e, t, n);
}
var id, Ri, ld, ad;
id = function (e, t) {
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
Ri = function () {};
ld = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    (e = t.stateNode), qt(dt.current);
    var o = null;
    switch (n) {
      case "input":
        (s = Xo(e, s)), (r = Xo(e, r)), (o = []);
        break;
      case "select":
        (s = le({}, s, { value: void 0 })),
          (r = le({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (s = qo(e, s)), (r = qo(e, r)), (o = []);
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Os);
    }
    ti(n, r);
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
            (yr.hasOwnProperty(c)
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
          } else n || (o || (o = []), o.push(c, n)), (n = u);
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
              (yr.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && q("scroll", e),
                  o || a === u || (o = []))
                : (o = o || []).push(c, u));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
ad = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Zn(e, t) {
  if (!re)
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
function ke(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling);
  else
    for (s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ng(e, t, n) {
  var r = t.pendingProps;
  switch ((ll(t), t.tag)) {
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
      return ke(t), null;
    case 1:
      return Ae(t.type) && Rs(), ke(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Mn(),
        ee(De),
        ee(Oe),
        ml(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (qr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), nt !== null && (Ai(nt), (nt = null)))),
        Ri(e, t),
        ke(t),
        null
      );
    case 5:
      hl(t);
      var s = qt(br.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ld(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return ke(t), null;
        }
        if (((e = qt(dt.current)), qr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[at] = t), (r[Or] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              q("cancel", r), q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < ir.length; s++) q(ir[s], r);
              break;
            case "source":
              q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              q("error", r), q("load", r);
              break;
            case "details":
              q("toggle", r);
              break;
            case "input":
              Kl(r, o), q("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                q("invalid", r);
              break;
            case "textarea":
              Yl(r, o), q("invalid", r);
          }
          ti(n, o), (s = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Zr(r.textContent, a, e),
                    (s = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Zr(r.textContent, a, e),
                    (s = ["children", "" + a]))
                : yr.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  q("scroll", r);
            }
          switch (n) {
            case "input":
              Qr(r), Hl(r, o, !0);
              break;
            case "textarea":
              Qr(r), Wl(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Os);
          }
          (r = s), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Au(n)),
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
            (e[at] = t),
            (e[Or] = r),
            id(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ni(n, r)), n)) {
              case "dialog":
                q("cancel", e), q("close", e), (s = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", e), (s = r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < ir.length; s++) q(ir[s], e);
                s = r;
                break;
              case "source":
                q("error", e), (s = r);
                break;
              case "img":
              case "image":
              case "link":
                q("error", e), q("load", e), (s = r);
                break;
              case "details":
                q("toggle", e), (s = r);
                break;
              case "input":
                Kl(e, r), (s = Xo(e, r)), q("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = le({}, r, { value: void 0 })),
                  q("invalid", e);
                break;
              case "textarea":
                Yl(e, r), (s = qo(e, r)), q("invalid", e);
                break;
              default:
                s = r;
            }
            ti(n, s), (a = s);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style"
                  ? $u(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Mu(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && xr(e, u)
                    : typeof u == "number" && xr(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (yr.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && q("scroll", e)
                      : u != null && Hi(e, o, u, i));
              }
            switch (n) {
              case "input":
                Qr(e), Hl(e, r, !1);
                break;
              case "textarea":
                Qr(e), Wl(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Vt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? On(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      On(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = Os);
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
      return ke(t), null;
    case 6:
      if (e && t.stateNode != null) ad(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = qt(br.current)), qt(dt.current), qr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[at] = t),
            (o = r.nodeValue !== n) && ((e = ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                Zr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Zr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[at] = t),
            (t.stateNode = r);
      }
      return ke(t), null;
    case 13:
      if (
        (ee(oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (re && Ue !== null && t.mode & 1 && !(t.flags & 128))
          jc(), Dn(), (t.flags |= 98560), (o = !1);
        else if (((o = qr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(j(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(j(317));
            o[at] = t;
          } else
            Dn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ke(t), (o = !1);
        } else nt !== null && (Ai(nt), (nt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || oe.current & 1 ? pe === 0 && (pe = 3) : Rl())),
          t.updateQueue !== null && (t.flags |= 4),
          ke(t),
          null);
    case 4:
      return (
        Mn(), Ri(e, t), e === null && kr(t.stateNode.containerInfo), ke(t), null
      );
    case 10:
      return dl(t.type._context), ke(t), null;
    case 17:
      return Ae(t.type) && Rs(), ke(t), null;
    case 19:
      if ((ee(oe), (o = t.memoizedState), o === null)) return ke(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Zn(o, !1);
        else {
          if (pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Ds(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Zn(o, !1),
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
                return J(oe, (oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ce() > $n &&
            ((t.flags |= 128), (r = !0), Zn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ds(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Zn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !re)
            )
              return ke(t), null;
          } else
            2 * ce() - o.renderingStartTime > $n &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Zn(o, !1), (t.lanes = 4194304));
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
          (o.renderingStartTime = ce()),
          (t.sibling = null),
          (n = oe.current),
          J(oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (ke(t), null);
    case 22:
    case 23:
      return (
        Ol(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? $e & 1073741824 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ke(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function rg(e, t) {
  switch ((ll(t), t.tag)) {
    case 1:
      return (
        Ae(t.type) && Rs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Mn(),
        ee(De),
        ee(Oe),
        ml(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return hl(t), null;
    case 13:
      if (
        (ee(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        Dn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ee(oe), null;
    case 4:
      return Mn(), null;
    case 10:
      return dl(t.type._context), null;
    case 22:
    case 23:
      return Ol(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ns = !1,
  je = !1,
  sg = typeof WeakSet == "function" ? WeakSet : Set,
  T = null;
function kn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ae(e, t, r);
      }
    else n.current = null;
}
function bi(e, t, n) {
  try {
    n();
  } catch (r) {
    ae(e, t, r);
  }
}
var Ma = !1;
function og(e, t) {
  if (((fi = Cs), (e = pc()), ol(e))) {
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
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            u = -1,
            c = 0,
            f = 0,
            g = e,
            d = null;
          t: for (;;) {
            for (
              var x;
              g !== n || (s !== 0 && g.nodeType !== 3) || (a = i + s),
                g !== o || (r !== 0 && g.nodeType !== 3) || (u = i + r),
                g.nodeType === 3 && (i += g.nodeValue.length),
                (x = g.firstChild) !== null;

            )
              (d = g), (g = x);
            for (;;) {
              if (g === e) break t;
              if (
                (d === n && ++c === s && (a = i),
                d === o && ++f === r && (u = i),
                (x = g.nextSibling) !== null)
              )
                break;
              (g = d), (d = g.parentNode);
            }
            g = x;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (pi = { focusedElem: e, selectionRange: n }, Cs = !1, T = t; T !== null; )
    if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (T = e);
    else
      for (; T !== null; ) {
        t = T;
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
                  var N = v.memoizedProps,
                    R = v.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? N : et(t.type, N),
                      R
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
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
                throw Error(j(163));
            }
        } catch (S) {
          ae(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (T = e);
          break;
        }
        T = t.return;
      }
  return (v = Ma), (Ma = !1), v;
}
function pr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var o = s.destroy;
        (s.destroy = void 0), o !== void 0 && bi(t, n, o);
      }
      s = s.next;
    } while (s !== r);
  }
}
function no(e, t) {
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
function Ii(e) {
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
function ud(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ud(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[at], delete t[Or], delete t[mi], delete t[zp], delete t[Vp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function cd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || cd(e.return)) return null;
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
function Ti(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Os));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ti(e, t, n), e = e.sibling; e !== null; ) Ti(e, t, n), (e = e.sibling);
}
function _i(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_i(e, t, n), e = e.sibling; e !== null; ) _i(e, t, n), (e = e.sibling);
}
var ve = null,
  tt = !1;
function jt(e, t, n) {
  for (n = n.child; n !== null; ) dd(e, t, n), (n = n.sibling);
}
function dd(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function")
    try {
      ct.onCommitFiberUnmount(Ws, n);
    } catch {}
  switch (n.tag) {
    case 5:
      je || kn(n, t);
    case 6:
      var r = ve,
        s = tt;
      (ve = null),
        jt(e, t, n),
        (ve = r),
        (tt = s),
        ve !== null &&
          (tt
            ? ((e = ve),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ve.removeChild(n.stateNode));
      break;
    case 18:
      ve !== null &&
        (tt
          ? ((e = ve),
            (n = n.stateNode),
            e.nodeType === 8
              ? Io(e.parentNode, n)
              : e.nodeType === 1 && Io(e, n),
            Nr(e))
          : Io(ve, n.stateNode));
      break;
    case 4:
      (r = ve),
        (s = tt),
        (ve = n.stateNode.containerInfo),
        (tt = !0),
        jt(e, t, n),
        (ve = r),
        (tt = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !je &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var o = s,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && bi(n, t, i),
            (s = s.next);
        } while (s !== r);
      }
      jt(e, t, n);
      break;
    case 1:
      if (
        !je &&
        (kn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ae(n, t, a);
        }
      jt(e, t, n);
      break;
    case 21:
      jt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((je = (r = je) || n.memoizedState !== null), jt(e, t, n), (je = r))
        : jt(e, t, n);
      break;
    default:
      jt(e, t, n);
  }
}
function $a(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new sg()),
      t.forEach(function (r) {
        var s = gg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
  }
}
function qe(e, t) {
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
              (ve = a.stateNode), (tt = !1);
              break e;
            case 3:
              (ve = a.stateNode.containerInfo), (tt = !0);
              break e;
            case 4:
              (ve = a.stateNode.containerInfo), (tt = !0);
              break e;
          }
          a = a.return;
        }
        if (ve === null) throw Error(j(160));
        dd(o, i, s), (ve = null), (tt = !1);
        var u = s.alternate;
        u !== null && (u.return = null), (s.return = null);
      } catch (c) {
        ae(s, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) fd(t, e), (t = t.sibling);
}
function fd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((qe(t, e), it(e), r & 4)) {
        try {
          pr(3, e, e.return), no(3, e);
        } catch (N) {
          ae(e, e.return, N);
        }
        try {
          pr(5, e, e.return);
        } catch (N) {
          ae(e, e.return, N);
        }
      }
      break;
    case 1:
      qe(t, e), it(e), r & 512 && n !== null && kn(n, n.return);
      break;
    case 5:
      if (
        (qe(t, e),
        it(e),
        r & 512 && n !== null && kn(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          xr(s, "");
        } catch (N) {
          ae(e, e.return, N);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Lu(s, o),
              ni(a, i);
            var c = ni(a, o);
            for (i = 0; i < u.length; i += 2) {
              var f = u[i],
                g = u[i + 1];
              f === "style"
                ? $u(s, g)
                : f === "dangerouslySetInnerHTML"
                ? Mu(s, g)
                : f === "children"
                ? xr(s, g)
                : Hi(s, f, g, c);
            }
            switch (a) {
              case "input":
                Jo(s, o);
                break;
              case "textarea":
                Du(s, o);
                break;
              case "select":
                var d = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!o.multiple;
                var x = o.value;
                x != null
                  ? On(s, !!o.multiple, x, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? On(s, !!o.multiple, o.defaultValue, !0)
                      : On(s, !!o.multiple, o.multiple ? [] : "", !1));
            }
            s[Or] = o;
          } catch (N) {
            ae(e, e.return, N);
          }
      }
      break;
    case 6:
      if ((qe(t, e), it(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (s = e.stateNode), (o = e.memoizedProps);
        try {
          s.nodeValue = o;
        } catch (N) {
          ae(e, e.return, N);
        }
      }
      break;
    case 3:
      if (
        (qe(t, e), it(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Nr(t.containerInfo);
        } catch (N) {
          ae(e, e.return, N);
        }
      break;
    case 4:
      qe(t, e), it(e);
      break;
    case 13:
      qe(t, e),
        it(e),
        (s = e.child),
        s.flags & 8192 &&
          ((o = s.memoizedState !== null),
          (s.stateNode.isHidden = o),
          !o ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (kl = ce())),
        r & 4 && $a(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((je = (c = je) || f), qe(t, e), (je = c)) : qe(t, e),
        it(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !f && e.mode & 1)
        )
          for (T = e, f = e.child; f !== null; ) {
            for (g = T = f; T !== null; ) {
              switch (((d = T), (x = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  pr(4, d, d.return);
                  break;
                case 1:
                  kn(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (N) {
                      ae(r, n, N);
                    }
                  }
                  break;
                case 5:
                  kn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    za(g);
                    continue;
                  }
              }
              x !== null ? ((x.return = d), (T = x)) : za(g);
            }
            f = f.sibling;
          }
        e: for (f = null, g = e; ; ) {
          if (g.tag === 5) {
            if (f === null) {
              f = g;
              try {
                (s = g.stateNode),
                  c
                    ? ((o = s.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = g.stateNode),
                      (u = g.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = Fu("display", i)));
              } catch (N) {
                ae(e, e.return, N);
              }
            }
          } else if (g.tag === 6) {
            if (f === null)
              try {
                g.stateNode.nodeValue = c ? "" : g.memoizedProps;
              } catch (N) {
                ae(e, e.return, N);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            (g.child.return = g), (g = g.child);
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            f === g && (f = null), (g = g.return);
          }
          f === g && (f = null), (g.sibling.return = g.return), (g = g.sibling);
        }
      }
      break;
    case 19:
      qe(t, e), it(e), r & 4 && $a(e);
      break;
    case 21:
      break;
    default:
      qe(t, e), it(e);
  }
}
function it(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (cd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (xr(s, ""), (r.flags &= -33));
          var o = Fa(e);
          _i(e, o, s);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Fa(e);
          Ti(e, a, i);
          break;
        default:
          throw Error(j(161));
      }
    } catch (u) {
      ae(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ig(e, t, n) {
  (T = e), pd(e);
}
function pd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var s = T,
      o = s.child;
    if (s.tag === 22 && r) {
      var i = s.memoizedState !== null || ns;
      if (!i) {
        var a = s.alternate,
          u = (a !== null && a.memoizedState !== null) || je;
        a = ns;
        var c = je;
        if (((ns = i), (je = u) && !c))
          for (T = s; T !== null; )
            (i = T),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Va(s)
                : u !== null
                ? ((u.return = i), (T = u))
                : Va(s);
        for (; o !== null; ) (T = o), pd(o), (o = o.sibling);
        (T = s), (ns = a), (je = c);
      }
      Ua(e);
    } else
      s.subtreeFlags & 8772 && o !== null ? ((o.return = s), (T = o)) : Ua(e);
  }
}
function Ua(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              je || no(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !je)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : et(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ca(t, o, r);
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
                Ca(t, i, n);
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
                  var f = c.memoizedState;
                  if (f !== null) {
                    var g = f.dehydrated;
                    g !== null && Nr(g);
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
              throw Error(j(163));
          }
        je || (t.flags & 512 && Ii(t));
      } catch (d) {
        ae(t, t.return, d);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function za(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function Va(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            no(4, t);
          } catch (u) {
            ae(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ae(t, s, u);
            }
          }
          var o = t.return;
          try {
            Ii(t);
          } catch (u) {
            ae(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ii(t);
          } catch (u) {
            ae(t, i, u);
          }
      }
    } catch (u) {
      ae(t, t.return, u);
    }
    if (t === e) {
      T = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (T = a);
      break;
    }
    T = t.return;
  }
}
var lg = Math.ceil,
  Fs = Et.ReactCurrentDispatcher,
  El = Et.ReactCurrentOwner,
  Xe = Et.ReactCurrentBatchConfig,
  $ = 0,
  he = null,
  de = null,
  we = 0,
  $e = 0,
  jn = Kt(0),
  pe = 0,
  Pr = null,
  ln = 0,
  ro = 0,
  Cl = 0,
  gr = null,
  Pe = null,
  kl = 0,
  $n = 1 / 0,
  gt = null,
  $s = !1,
  Pi = null,
  $t = null,
  rs = !1,
  _t = null,
  Us = 0,
  hr = 0,
  Li = null,
  hs = -1,
  ms = 0;
function Ie() {
  return $ & 6 ? ce() : hs !== -1 ? hs : (hs = ce());
}
function Ut(e) {
  return e.mode & 1
    ? $ & 2 && we !== 0
      ? we & -we
      : Qp.transition !== null
      ? (ms === 0 && (ms = Ju()), ms)
      : ((e = Y),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : sc(e.type))),
        e)
    : 1;
}
function st(e, t, n, r) {
  if (50 < hr) throw ((hr = 0), (Li = null), Error(j(185)));
  Mr(e, n, r),
    (!($ & 2) || e !== he) &&
      (e === he && (!($ & 2) && (ro |= n), pe === 4 && It(e, we)),
      Me(e, r),
      n === 1 && $ === 0 && !(t.mode & 1) && (($n = ce() + 500), qs && Ht()));
}
function Me(e, t) {
  var n = e.callbackNode;
  Qf(e, t);
  var r = Es(e, e === he ? we : 0);
  if (r === 0)
    n !== null && Jl(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Jl(n), t === 1))
      e.tag === 0 ? Bp(Ba.bind(null, e)) : Ec(Ba.bind(null, e)),
        $p(function () {
          !($ & 6) && Ht();
        }),
        (n = null);
    else {
      switch (Zu(r)) {
        case 1:
          n = Ji;
          break;
        case 4:
          n = Gu;
          break;
        case 16:
          n = Ns;
          break;
        case 536870912:
          n = Xu;
          break;
        default:
          n = Ns;
      }
      n = Sd(n, gd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function gd(e, t) {
  if (((hs = -1), (ms = 0), $ & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (_n() && e.callbackNode !== n) return null;
  var r = Es(e, e === he ? we : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = zs(e, r);
  else {
    t = r;
    var s = $;
    $ |= 2;
    var o = md();
    (he !== e || we !== t) && ((gt = null), ($n = ce() + 500), en(e, t));
    do
      try {
        cg();
        break;
      } catch (a) {
        hd(e, a);
      }
    while (!0);
    cl(),
      (Fs.current = o),
      ($ = s),
      de !== null ? (t = 0) : ((he = null), (we = 0), (t = pe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = li(e)), s !== 0 && ((r = s), (t = Di(e, s)))), t === 1)
    )
      throw ((n = Pr), en(e, 0), It(e, r), Me(e, ce()), n);
    if (t === 6) It(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !ag(s) &&
          ((t = zs(e, r)),
          t === 2 && ((o = li(e)), o !== 0 && ((r = o), (t = Di(e, o)))),
          t === 1))
      )
        throw ((n = Pr), en(e, 0), It(e, r), Me(e, ce()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Xt(e, Pe, gt);
          break;
        case 3:
          if (
            (It(e, r), (r & 130023424) === r && ((t = kl + 500 - ce()), 10 < t))
          ) {
            if (Es(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              Ie(), (e.pingedLanes |= e.suspendedLanes & s);
              break;
            }
            e.timeoutHandle = hi(Xt.bind(null, e, Pe, gt), t);
            break;
          }
          Xt(e, Pe, gt);
          break;
        case 4:
          if ((It(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var i = 31 - rt(r);
            (o = 1 << i), (i = t[i]), i > s && (s = i), (r &= ~o);
          }
          if (
            ((r = s),
            (r = ce() - r),
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
                : 1960 * lg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = hi(Xt.bind(null, e, Pe, gt), r);
            break;
          }
          Xt(e, Pe, gt);
          break;
        case 5:
          Xt(e, Pe, gt);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return Me(e, ce()), e.callbackNode === n ? gd.bind(null, e) : null;
}
function Di(e, t) {
  var n = gr;
  return (
    e.current.memoizedState.isDehydrated && (en(e, t).flags |= 256),
    (e = zs(e, t)),
    e !== 2 && ((t = Pe), (Pe = n), t !== null && Ai(t)),
    e
  );
}
function Ai(e) {
  Pe === null ? (Pe = e) : Pe.push.apply(Pe, e);
}
function ag(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            o = s.getSnapshot;
          s = s.value;
          try {
            if (!ot(o(), s)) return !1;
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
function It(e, t) {
  for (
    t &= ~Cl,
      t &= ~ro,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - rt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ba(e) {
  if ($ & 6) throw Error(j(327));
  _n();
  var t = Es(e, 0);
  if (!(t & 1)) return Me(e, ce()), null;
  var n = zs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = li(e);
    r !== 0 && ((t = r), (n = Di(e, r)));
  }
  if (n === 1) throw ((n = Pr), en(e, 0), It(e, t), Me(e, ce()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Xt(e, Pe, gt),
    Me(e, ce()),
    null
  );
}
function jl(e, t) {
  var n = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    ($ = n), $ === 0 && (($n = ce() + 500), qs && Ht());
  }
}
function an(e) {
  _t !== null && _t.tag === 0 && !($ & 6) && _n();
  var t = $;
  $ |= 1;
  var n = Xe.transition,
    r = Y;
  try {
    if (((Xe.transition = null), (Y = 1), e)) return e();
  } finally {
    (Y = r), (Xe.transition = n), ($ = t), !($ & 6) && Ht();
  }
}
function Ol() {
  ($e = jn.current), ee(jn);
}
function en(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Fp(n)), de !== null))
    for (n = de.return; n !== null; ) {
      var r = n;
      switch ((ll(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Rs();
          break;
        case 3:
          Mn(), ee(De), ee(Oe), ml();
          break;
        case 5:
          hl(r);
          break;
        case 4:
          Mn();
          break;
        case 13:
          ee(oe);
          break;
        case 19:
          ee(oe);
          break;
        case 10:
          dl(r.type._context);
          break;
        case 22:
        case 23:
          Ol();
      }
      n = n.return;
    }
  if (
    ((he = e),
    (de = e = zt(e.current, null)),
    (we = $e = t),
    (pe = 0),
    (Pr = null),
    (Cl = ro = ln = 0),
    (Pe = gr = null),
    Zt !== null)
  ) {
    for (t = 0; t < Zt.length; t++)
      if (((n = Zt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = s), (r.next = i);
        }
        n.pending = r;
      }
    Zt = null;
  }
  return e;
}
function hd(e, t) {
  do {
    var n = de;
    try {
      if ((cl(), (fs.current = Ms), As)) {
        for (var r = ie.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), (r = r.next);
        }
        As = !1;
      }
      if (
        ((on = 0),
        (ge = fe = ie = null),
        (fr = !1),
        (Ir = 0),
        (El.current = null),
        n === null || n.return === null)
      ) {
        (pe = 1), (Pr = t), (de = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = we),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            f = a,
            g = f.tag;
          if (!(f.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var d = f.alternate;
            d
              ? ((f.updateQueue = d.updateQueue),
                (f.memoizedState = d.memoizedState),
                (f.lanes = d.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var x = Ia(i);
          if (x !== null) {
            (x.flags &= -257),
              Ta(x, i, a, o, t),
              x.mode & 1 && ba(o, c, t),
              (t = x),
              (u = c);
            var v = t.updateQueue;
            if (v === null) {
              var N = new Set();
              N.add(u), (t.updateQueue = N);
            } else v.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              ba(o, c, t), Rl();
              break e;
            }
            u = Error(j(426));
          }
        } else if (re && a.mode & 1) {
          var R = Ia(i);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256),
              Ta(R, i, a, o, t),
              al(Fn(u, a));
            break e;
          }
        }
        (o = u = Fn(u, a)),
          pe !== 4 && (pe = 2),
          gr === null ? (gr = [o]) : gr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = Zc(o, u, t);
              Ea(o, m);
              break e;
            case 1:
              a = u;
              var p = o.type,
                y = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    ($t === null || !$t.has(y))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = qc(o, a, t);
                Ea(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      xd(n);
    } catch (E) {
      (t = E), de === n && n !== null && (de = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function md() {
  var e = Fs.current;
  return (Fs.current = Ms), e === null ? Ms : e;
}
function Rl() {
  (pe === 0 || pe === 3 || pe === 2) && (pe = 4),
    he === null || (!(ln & 268435455) && !(ro & 268435455)) || It(he, we);
}
function zs(e, t) {
  var n = $;
  $ |= 2;
  var r = md();
  (he !== e || we !== t) && ((gt = null), en(e, t));
  do
    try {
      ug();
      break;
    } catch (s) {
      hd(e, s);
    }
  while (!0);
  if ((cl(), ($ = n), (Fs.current = r), de !== null)) throw Error(j(261));
  return (he = null), (we = 0), pe;
}
function ug() {
  for (; de !== null; ) yd(de);
}
function cg() {
  for (; de !== null && !Df(); ) yd(de);
}
function yd(e) {
  var t = wd(e.alternate, e, $e);
  (e.memoizedProps = e.pendingProps),
    t === null ? xd(e) : (de = t),
    (El.current = null);
}
function xd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = rg(n, t)), n !== null)) {
        (n.flags &= 32767), (de = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (pe = 6), (de = null);
        return;
      }
    } else if (((n = ng(n, t, $e)), n !== null)) {
      de = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      de = t;
      return;
    }
    de = t = e;
  } while (t !== null);
  pe === 0 && (pe = 5);
}
function Xt(e, t, n) {
  var r = Y,
    s = Xe.transition;
  try {
    (Xe.transition = null), (Y = 1), dg(e, t, n, r);
  } finally {
    (Xe.transition = s), (Y = r);
  }
  return null;
}
function dg(e, t, n, r) {
  do _n();
  while (_t !== null);
  if ($ & 6) throw Error(j(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Kf(e, o),
    e === he && ((de = he = null), (we = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      rs ||
      ((rs = !0),
      Sd(Ns, function () {
        return _n(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Xe.transition), (Xe.transition = null);
    var i = Y;
    Y = 1;
    var a = $;
    ($ |= 4),
      (El.current = null),
      og(e, n),
      fd(n, e),
      Tp(pi),
      (Cs = !!fi),
      (pi = fi = null),
      (e.current = n),
      ig(n),
      Af(),
      ($ = a),
      (Y = i),
      (Xe.transition = o);
  } else e.current = n;
  if (
    (rs && ((rs = !1), (_t = e), (Us = s)),
    (o = e.pendingLanes),
    o === 0 && ($t = null),
    $f(n.stateNode),
    Me(e, ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
  if ($s) throw (($s = !1), (e = Pi), (Pi = null), e);
  return (
    Us & 1 && e.tag !== 0 && _n(),
    (o = e.pendingLanes),
    o & 1 ? (e === Li ? hr++ : ((hr = 0), (Li = e))) : (hr = 0),
    Ht(),
    null
  );
}
function _n() {
  if (_t !== null) {
    var e = Zu(Us),
      t = Xe.transition,
      n = Y;
    try {
      if (((Xe.transition = null), (Y = 16 > e ? 16 : e), _t === null))
        var r = !1;
      else {
        if (((e = _t), (_t = null), (Us = 0), $ & 6)) throw Error(j(331));
        var s = $;
        for ($ |= 4, T = e.current; T !== null; ) {
          var o = T,
            i = o.child;
          if (T.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var c = a[u];
                for (T = c; T !== null; ) {
                  var f = T;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pr(8, f, o);
                  }
                  var g = f.child;
                  if (g !== null) (g.return = f), (T = g);
                  else
                    for (; T !== null; ) {
                      f = T;
                      var d = f.sibling,
                        x = f.return;
                      if ((ud(f), f === c)) {
                        T = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = x), (T = d);
                        break;
                      }
                      T = x;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var N = v.child;
                if (N !== null) {
                  v.child = null;
                  do {
                    var R = N.sibling;
                    (N.sibling = null), (N = R);
                  } while (N !== null);
                }
              }
              T = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (T = i);
          else
            e: for (; T !== null; ) {
              if (((o = T), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    pr(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (T = m);
                break e;
              }
              T = o.return;
            }
        }
        var p = e.current;
        for (T = p; T !== null; ) {
          i = T;
          var y = i.child;
          if (i.subtreeFlags & 2064 && y !== null) (y.return = i), (T = y);
          else
            e: for (i = p; T !== null; ) {
              if (((a = T), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      no(9, a);
                  }
                } catch (E) {
                  ae(a, a.return, E);
                }
              if (a === i) {
                T = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (T = S);
                break e;
              }
              T = a.return;
            }
        }
        if (
          (($ = s), Ht(), ct && typeof ct.onPostCommitFiberRoot == "function")
        )
          try {
            ct.onPostCommitFiberRoot(Ws, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Y = n), (Xe.transition = t);
    }
  }
  return !1;
}
function Qa(e, t, n) {
  (t = Fn(n, t)),
    (t = Zc(e, t, 1)),
    (e = Ft(e, t, 1)),
    (t = Ie()),
    e !== null && (Mr(e, 1, t), Me(e, t));
}
function ae(e, t, n) {
  if (e.tag === 3) Qa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Qa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            ($t === null || !$t.has(r)))
        ) {
          (e = Fn(n, e)),
            (e = qc(t, e, 1)),
            (t = Ft(t, e, 1)),
            (e = Ie()),
            t !== null && (Mr(t, 1, e), Me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function fg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ie()),
    (e.pingedLanes |= e.suspendedLanes & n),
    he === e &&
      (we & n) === n &&
      (pe === 4 || (pe === 3 && (we & 130023424) === we && 500 > ce() - kl)
        ? en(e, 0)
        : (Cl |= n)),
    Me(e, t);
}
function vd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Yr), (Yr <<= 1), !(Yr & 130023424) && (Yr = 4194304))
      : (t = 1));
  var n = Ie();
  (e = St(e, t)), e !== null && (Mr(e, t, n), Me(e, n));
}
function pg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), vd(e, n);
}
function gg(e, t) {
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
      throw Error(j(314));
  }
  r !== null && r.delete(t), vd(e, n);
}
var wd;
wd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || De.current) Le = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Le = !1), tg(e, t, n);
      Le = !!(e.flags & 131072);
    }
  else (Le = !1), re && t.flags & 1048576 && Cc(t, Ts, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      gs(e, t), (e = t.pendingProps);
      var s = Ln(t, Oe.current);
      Tn(t, n), (s = xl(null, t, r, e, s, n));
      var o = vl();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ae(r) ? ((o = !0), bs(t)) : (o = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            pl(t),
            (s.updater = to),
            (t.stateNode = s),
            (s._reactInternals = t),
            Ni(t, r, e, n),
            (t = ki(null, t, r, !0, o, n)))
          : ((t.tag = 0), re && o && il(t), be(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (gs(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = mg(r)),
          (e = et(r, e)),
          s)
        ) {
          case 0:
            t = Ci(null, t, r, e, n);
            break e;
          case 1:
            t = La(null, t, r, e, n);
            break e;
          case 11:
            t = _a(null, t, r, e, n);
            break e;
          case 14:
            t = Pa(null, t, r, et(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : et(r, s)),
        Ci(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : et(r, s)),
        La(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((rd(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (s = o.element),
          Ic(e, t),
          Ls(t, r, null, n);
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
            (s = Fn(Error(j(423)), t)), (t = Da(e, t, r, n, s));
            break e;
          } else if (r !== s) {
            (s = Fn(Error(j(424)), t)), (t = Da(e, t, r, n, s));
            break e;
          } else
            for (
              Ue = Mt(t.stateNode.containerInfo.firstChild),
                ze = t,
                re = !0,
                nt = null,
                n = Rc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Dn(), r === s)) {
            t = Nt(e, t, n);
            break e;
          }
          be(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Tc(t),
        e === null && vi(t),
        (r = t.type),
        (s = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = s.children),
        gi(r, s) ? (i = null) : o !== null && gi(r, o) && (t.flags |= 32),
        nd(e, t),
        be(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && vi(t), null;
    case 13:
      return sd(e, t, n);
    case 4:
      return (
        gl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = An(t, null, r, n)) : be(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : et(r, s)),
        _a(e, t, r, s, n)
      );
    case 7:
      return be(e, t, t.pendingProps, n), t.child;
    case 8:
      return be(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return be(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (o = t.memoizedProps),
          (i = s.value),
          J(_s, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (ot(o.value, i)) {
            if (o.children === s.children && !De.current) {
              t = Nt(e, t, n);
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
                      (u = xt(-1, n & -n)), (u.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var f = c.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (c.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      wi(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(j(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  wi(i, n, t),
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
        be(e, t, s.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        Tn(t, n),
        (s = Je(s)),
        (r = r(s)),
        (t.flags |= 1),
        be(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = et(r, t.pendingProps)),
        (s = et(r.type, s)),
        Pa(e, t, r, s, n)
      );
    case 15:
      return ed(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : et(r, s)),
        gs(e, t),
        (t.tag = 1),
        Ae(r) ? ((e = !0), bs(t)) : (e = !1),
        Tn(t, n),
        Jc(t, r, s),
        Ni(t, r, s, n),
        ki(null, t, r, !0, e, n)
      );
    case 19:
      return od(e, t, n);
    case 22:
      return td(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function Sd(e, t) {
  return Wu(e, t);
}
function hg(e, t, n, r) {
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
function Ge(e, t, n, r) {
  return new hg(e, t, n, r);
}
function bl(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function mg(e) {
  if (typeof e == "function") return bl(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Wi)) return 11;
    if (e === Gi) return 14;
  }
  return 2;
}
function zt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ge(e.tag, t, e.key, e.mode)),
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
function ys(e, t, n, r, s, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) bl(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case mn:
        return tn(n.children, s, o, t);
      case Yi:
        (i = 8), (s |= 8);
        break;
      case Ho:
        return (
          (e = Ge(12, n, t, s | 2)), (e.elementType = Ho), (e.lanes = o), e
        );
      case Yo:
        return (e = Ge(13, n, t, s)), (e.elementType = Yo), (e.lanes = o), e;
      case Wo:
        return (e = Ge(19, n, t, s)), (e.elementType = Wo), (e.lanes = o), e;
      case Tu:
        return so(n, s, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case bu:
              i = 10;
              break e;
            case Iu:
              i = 9;
              break e;
            case Wi:
              i = 11;
              break e;
            case Gi:
              i = 14;
              break e;
            case Ot:
              (i = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ge(i, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function tn(e, t, n, r) {
  return (e = Ge(7, e, r, t)), (e.lanes = n), e;
}
function so(e, t, n, r) {
  return (
    (e = Ge(22, e, r, t)),
    (e.elementType = Tu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Fo(e, t, n) {
  return (e = Ge(6, e, null, t)), (e.lanes = n), e;
}
function $o(e, t, n) {
  return (
    (t = Ge(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function yg(e, t, n, r, s) {
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
    (this.eventTimes = vo(0)),
    (this.expirationTimes = vo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = vo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function Il(e, t, n, r, s, o, i, a, u) {
  return (
    (e = new yg(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ge(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    pl(o),
    e
  );
}
function xg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: hn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Nd(e) {
  if (!e) return Bt;
  e = e._reactInternals;
  e: {
    if (cn(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ae(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ae(n)) return Nc(e, n, t);
  }
  return t;
}
function Ed(e, t, n, r, s, o, i, a, u) {
  return (
    (e = Il(n, r, !0, e, s, o, i, a, u)),
    (e.context = Nd(null)),
    (n = e.current),
    (r = Ie()),
    (s = Ut(n)),
    (o = xt(r, s)),
    (o.callback = t ?? null),
    Ft(n, o, s),
    (e.current.lanes = s),
    Mr(e, s, r),
    Me(e, r),
    e
  );
}
function oo(e, t, n, r) {
  var s = t.current,
    o = Ie(),
    i = Ut(s);
  return (
    (n = Nd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = xt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ft(s, t, i)),
    e !== null && (st(e, s, i, o), ds(e, s, i)),
    i
  );
}
function Vs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ka(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Tl(e, t) {
  Ka(e, t), (e = e.alternate) && Ka(e, t);
}
function vg() {
  return null;
}
var Cd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function _l(e) {
  this._internalRoot = e;
}
io.prototype.render = _l.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  oo(e, t, null, null);
};
io.prototype.unmount = _l.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    an(function () {
      oo(null, e, null, null);
    }),
      (t[wt] = null);
  }
};
function io(e) {
  this._internalRoot = e;
}
io.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = tc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < bt.length && t !== 0 && t < bt[n].priority; n++);
    bt.splice(n, 0, e), n === 0 && rc(e);
  }
};
function Pl(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function lo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ha() {}
function wg(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = Vs(i);
        o.call(c);
      };
    }
    var i = Ed(t, r, e, 0, null, !1, !1, "", Ha);
    return (
      (e._reactRootContainer = i),
      (e[wt] = i.current),
      kr(e.nodeType === 8 ? e.parentNode : e),
      an(),
      i
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = Vs(u);
      a.call(c);
    };
  }
  var u = Il(e, 0, !1, null, null, !1, !1, "", Ha);
  return (
    (e._reactRootContainer = u),
    (e[wt] = u.current),
    kr(e.nodeType === 8 ? e.parentNode : e),
    an(function () {
      oo(t, u, n, r);
    }),
    u
  );
}
function ao(e, t, n, r, s) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var u = Vs(i);
        a.call(u);
      };
    }
    oo(t, i, e, s);
  } else i = wg(n, t, e, s, r);
  return Vs(i);
}
qu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = or(t.pendingLanes);
        n !== 0 &&
          (Zi(t, n | 1), Me(t, ce()), !($ & 6) && (($n = ce() + 500), Ht()));
      }
      break;
    case 13:
      an(function () {
        var r = St(e, 1);
        if (r !== null) {
          var s = Ie();
          st(r, e, 1, s);
        }
      }),
        Tl(e, 1);
  }
};
qi = function (e) {
  if (e.tag === 13) {
    var t = St(e, 134217728);
    if (t !== null) {
      var n = Ie();
      st(t, e, 134217728, n);
    }
    Tl(e, 134217728);
  }
};
ec = function (e) {
  if (e.tag === 13) {
    var t = Ut(e),
      n = St(e, t);
    if (n !== null) {
      var r = Ie();
      st(n, e, t, r);
    }
    Tl(e, t);
  }
};
tc = function () {
  return Y;
};
nc = function (e, t) {
  var n = Y;
  try {
    return (Y = e), t();
  } finally {
    Y = n;
  }
};
si = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Jo(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var s = Zs(r);
            if (!s) throw Error(j(90));
            Pu(r), Jo(r, s);
          }
        }
      }
      break;
    case "textarea":
      Du(e, n);
      break;
    case "select":
      (t = n.value), t != null && On(e, !!n.multiple, t, !1);
  }
};
Vu = jl;
Bu = an;
var Sg = { usingClientEntryPoint: !1, Events: [$r, wn, Zs, Uu, zu, jl] },
  qn = {
    findFiberByHostInstance: Jt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Ng = {
    bundleType: qn.bundleType,
    version: qn.version,
    rendererPackageName: qn.rendererPackageName,
    rendererConfig: qn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Et.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Hu(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: qn.findFiberByHostInstance || vg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ss = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ss.isDisabled && ss.supportsFiber)
    try {
      (Ws = ss.inject(Ng)), (ct = ss);
    } catch {}
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sg;
Be.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Pl(t)) throw Error(j(200));
  return xg(e, t, null, n);
};
Be.createRoot = function (e, t) {
  if (!Pl(e)) throw Error(j(299));
  var n = !1,
    r = "",
    s = Cd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = Il(e, 1, !1, null, null, n, !1, r, s)),
    (e[wt] = t.current),
    kr(e.nodeType === 8 ? e.parentNode : e),
    new _l(t)
  );
};
Be.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = Hu(t)), (e = e === null ? null : e.stateNode), e;
};
Be.flushSync = function (e) {
  return an(e);
};
Be.hydrate = function (e, t, n) {
  if (!lo(t)) throw Error(j(200));
  return ao(null, e, t, !0, n);
};
Be.hydrateRoot = function (e, t, n) {
  if (!Pl(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    o = "",
    i = Cd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Ed(t, null, e, 1, n ?? null, s, !1, o, i)),
    (e[wt] = t.current),
    kr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s);
  return new io(t);
};
Be.render = function (e, t, n) {
  if (!lo(t)) throw Error(j(200));
  return ao(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function (e) {
  if (!lo(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (an(function () {
        ao(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[wt] = null);
        });
      }),
      !0)
    : !1;
};
Be.unstable_batchedUpdates = jl;
Be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!lo(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return ao(e, t, n, !1, r);
};
Be.version = "18.3.1-next-f1338f8080-20240426";
function kd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kd);
    } catch (e) {
      console.error(e);
    }
}
kd(), (ku.exports = Be);
var Eg = ku.exports,
  jd,
  Ya = Eg;
(jd = Ya.createRoot), Ya.hydrateRoot;
function Cg() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    nn(t[0]) && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
  }
}
const Wa = {};
function Mi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  (nn(t[0]) && Wa[t[0]]) || (nn(t[0]) && (Wa[t[0]] = new Date()), Cg(...t));
}
const Od = (e, t) => () => {
    if (e.isInitialized) t();
    else {
      const n = () => {
        setTimeout(() => {
          e.off("initialized", n);
        }, 0),
          t();
      };
      e.on("initialized", n);
    }
  },
  Ga = (e, t, n) => {
    e.loadNamespaces(t, Od(e, n));
  },
  Xa = (e, t, n, r) => {
    nn(n) && (n = [n]),
      n.forEach((s) => {
        e.options.ns.indexOf(s) < 0 && e.options.ns.push(s);
      }),
      e.loadLanguages(t, Od(e, r));
  },
  kg = function (e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const r = t.languages[0],
      s = t.options ? t.options.fallbackLng : !1,
      o = t.languages[t.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const i = (a, u) => {
      const c = t.services.backendConnector.state[`${a}|${u}`];
      return c === -1 || c === 2;
    };
    return n.bindI18n &&
      n.bindI18n.indexOf("languageChanging") > -1 &&
      t.services.backendConnector.backend &&
      t.isLanguageChangingTo &&
      !i(t.isLanguageChangingTo, e)
      ? !1
      : !!(
          t.hasResourceBundle(r, e) ||
          !t.services.backendConnector.backend ||
          (t.options.resources && !t.options.partialBundledLanguages) ||
          (i(r, e) && (!s || i(o, e)))
        );
  },
  jg = function (e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return !t.languages || !t.languages.length
      ? (Mi("i18n.languages were undefined or empty", t.languages), !0)
      : t.options.ignoreJSONStructure !== void 0
      ? t.hasLoadedNamespace(e, {
          lng: n.lng,
          precheck: (s, o) => {
            if (
              n.bindI18n &&
              n.bindI18n.indexOf("languageChanging") > -1 &&
              s.services.backendConnector.backend &&
              s.isLanguageChangingTo &&
              !o(s.isLanguageChangingTo, e)
            )
              return !1;
          },
        })
      : kg(e, t, n);
  },
  nn = (e) => typeof e == "string",
  Og = (e) => typeof e == "object" && e !== null,
  Rg =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  bg = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  Ig = (e) => bg[e],
  Tg = (e) => e.replace(Rg, Ig);
let Fi = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Tg,
};
const _g = function () {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Fi = { ...Fi, ...e };
  },
  Pg = () => Fi;
let Rd;
const Lg = (e) => {
    Rd = e;
  },
  Dg = () => Rd,
  Ag = {
    type: "3rdParty",
    init(e) {
      _g(e.options.react), Lg(e);
    },
  },
  Mg = k.createContext();
class Fg {
  constructor() {
    Fl(this, "getUsedNamespaces", () => Object.keys(this.usedNamespaces));
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
}
const $g = (e, t) => {
    const n = k.useRef();
    return (
      k.useEffect(() => {
        n.current = e;
      }, [e, t]),
      n.current
    );
  },
  bd = (e, t, n, r) => e.getFixedT(t, n, r),
  Ug = (e, t, n, r) => k.useCallback(bd(e, t, n, r), [e, t, n, r]),
  Ne = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { i18n: n } = t,
      { i18n: r, defaultNS: s } = k.useContext(Mg) || {},
      o = n || r || Dg();
    if ((o && !o.reportNamespaces && (o.reportNamespaces = new Fg()), !o)) {
      Mi(
        "You will need to pass in an i18next instance by using initReactI18next"
      );
      const S = (h, w) =>
          nn(w)
            ? w
            : Og(w) && nn(w.defaultValue)
            ? w.defaultValue
            : Array.isArray(h)
            ? h[h.length - 1]
            : h,
        E = [S, {}, !1];
      return (E.t = S), (E.i18n = {}), (E.ready = !1), E;
    }
    o.options.react &&
      o.options.react.wait !== void 0 &&
      Mi(
        "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
      );
    const i = { ...Pg(), ...o.options.react, ...t },
      { useSuspense: a, keyPrefix: u } = i;
    let c = s || (o.options && o.options.defaultNS);
    (c = nn(c) ? [c] : c || ["translation"]),
      o.reportNamespaces.addUsedNamespaces &&
        o.reportNamespaces.addUsedNamespaces(c);
    const f =
        (o.isInitialized || o.initializedStoreOnce) &&
        c.every((S) => jg(S, o, i)),
      g = Ug(o, t.lng || null, i.nsMode === "fallback" ? c : c[0], u),
      d = () => g,
      x = () => bd(o, t.lng || null, i.nsMode === "fallback" ? c : c[0], u),
      [v, N] = k.useState(d);
    let R = c.join();
    t.lng && (R = `${t.lng}${R}`);
    const m = $g(R),
      p = k.useRef(!0);
    k.useEffect(() => {
      const { bindI18n: S, bindI18nStore: E } = i;
      (p.current = !0),
        !f &&
          !a &&
          (t.lng
            ? Xa(o, t.lng, c, () => {
                p.current && N(x);
              })
            : Ga(o, c, () => {
                p.current && N(x);
              })),
        f && m && m !== R && p.current && N(x);
      const h = () => {
        p.current && N(x);
      };
      return (
        S && o && o.on(S, h),
        E && o && o.store.on(E, h),
        () => {
          (p.current = !1),
            S && o && S.split(" ").forEach((w) => o.off(w, h)),
            E && o && E.split(" ").forEach((w) => o.store.off(w, h));
        }
      );
    }, [o, R]),
      k.useEffect(() => {
        p.current && f && N(d);
      }, [o, u, f]);
    const y = [v, o, f];
    if (((y.t = v), (y.i18n = o), (y.ready = f), f || (!f && !a))) return y;
    throw new Promise((S) => {
      t.lng ? Xa(o, t.lng, c, () => S()) : Ga(o, c, () => S());
    });
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var zg = {
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
 */ const Vg = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  W = (e, t) => {
    const n = k.forwardRef(
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
        f
      ) =>
        k.createElement(
          "svg",
          {
            ref: f,
            ...zg,
            width: s,
            height: s,
            stroke: r,
            strokeWidth: i ? (Number(o) * 24) / Number(s) : o,
            className: ["lucide", `lucide-${Vg(e)}`, a].join(" "),
            ...c,
          },
          [
            ...t.map(([g, d]) => k.createElement(g, d)),
            ...(Array.isArray(u) ? u : [u]),
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
 */ const Id = W("BarChart3", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bn = W("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bg = W("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qg = W("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qn = W("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kg = W("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hg = W("Columns2", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M12 3v18", key: "108xh3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yg = W("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  [
    "path",
    { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zr = W("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wg = W("Eye", [
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
 */ const Gg = W("Globe", [
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
 */ const Xg = W("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jg = W("Layers", [
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
 */ const Pt = W("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xs = W("Lock", [
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
 */ const Zg = W("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qg = W("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Td = W("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eh = W("RotateCcw", [
  [
    "path",
    { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
  ],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kn = W("Save", [
  [
    "path",
    {
      d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
      key: "1owoqh",
    },
  ],
  ["polyline", { points: "17 21 17 13 7 13 7 21", key: "1md35c" }],
  ["polyline", { points: "7 3 7 8 15 8", key: "8nz8an" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const th = W("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nh = W("Settings", [
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
 */ const rh = W("SquarePen", [
  [
    "path",
    {
      d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      key: "1m0v6g",
    },
  ],
  [
    "path",
    { d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z", key: "1lpok0" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sh = W("Tag", [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0",
    },
  ],
  [
    "circle",
    { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oh = W("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ih = W("TrendingDown", [
  ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }],
  ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lh = W("Unlock", [
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
 */ const uo = W("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ct = W("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  ah = ({ user: e, onLogout: t }) => {
    const { t: n, i18n: r } = Ne(),
      s = () => {
        const o = r.language === "en" ? "zh" : "en";
        r.changeLanguage(o);
      };
    return l.jsx("nav", {
      className: "bg-transparent py-4 md:py-6 lg:py-8",
      children: l.jsx("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: l.jsxs("div", {
          className: "flex justify-between items-center h-16",
          children: [
            l.jsxs("div", {
              className: "flex items-center space-x-4",
              children: [
                l.jsxs("a", {
                  href: "../frontpage",
                  className:
                    "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors",
                  children: [
                    l.jsx("span", { className: "sr-only", children: "Home" }),
                    l.jsx(Jg, { className: "w-7 h-7" }),
                  ],
                }),
                l.jsxs("div", {
                  children: [
                    l.jsx("h1", {
                      className:
                        "text-2xl md:text-3xl font-semibold text-gray-800 mb-2",
                      children: n("inventoryMerge"),
                    }),
                    l.jsxs("p", {
                      className: "text-gray-600 text-base",
                      children: [e.Name, " - ", e.Employer],
                    }),
                  ],
                }),
              ],
            }),
            l.jsxs("div", {
              className: "flex items-center space-x-4",
              children: [
                l.jsxs("button", {
                  onClick: s,
                  className:
                    "px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center",
                  children: [
                    l.jsx(Gg, { className: "w-5 h-5 text-gray-600" }),
                    l.jsx("span", {
                      className:
                        "hidden sm:inline ml-2 text-base text-gray-700",
                      children: r.language === "en" ? "English" : "繁體中文",
                    }),
                  ],
                }),
                l.jsxs("button", {
                  onClick: t,
                  className:
                    "px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center",
                  children: [
                    l.jsx(Zg, { className: "w-5 h-5" }),
                    l.jsx("span", {
                      className: "hidden sm:inline ml-2 text-base",
                      children: n("logout"),
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
  uh = () => {
    const { t: e } = Ne();
    return l.jsx("div", {
      className: "h-[40px] mb-2",
      children: l.jsx("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: l.jsxs("div", {
          className: "flex space-x-8 border-b border-gray-200",
          children: [
            l.jsx("a", {
              href: "../inventory_manager",
              className:
                "px-4 py-2 text-base font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
              children: e("tabs.manage"),
            }),
            l.jsx("a", {
              href: "../inventory_merge",
              className:
                "px-4 py-2 text-base font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
              children: e("tabs.merge"),
            }),
            l.jsx("a", {
              href: "#",
              className:
                "px-4 py-2 text-base font-medium border-b-2 border-blue-500 text-blue-600",
              children: e("tabs.review"),
            }),
          ],
        }),
      }),
    });
  };
async function ch() {
  const t = await (await fetch("../config.txt")).text();
  return JSON.parse(t);
}
let Uo = null;
async function dh() {
  return Uo || (Uo = await ch()), Uo.domain;
}
const H = {
  LOGIN: "/api/session/login",
  GET_ALL_INV: "/api/inv_combinelist/get_all_inv",
  GET_FULL_INV_BY_SN: "/api/inv_combinelist/get_full_inv_by_SN",
  GET_DETAIL_INV_BY_SN: "/api/inv_combinelist/get_detail_inv_by_SN",
  GET_FULL_INV_EXCEL_BY_SN: "/api/inv_combinelist/get_full_inv_Excel_by_SN",
  GET_REPORT_BY_SN: "/api/inv_combinelist/get_report_by_SN",
  ADD_REPORT_BY_SN: "/api/inv_combinelist/add_report_by_SN",
  GET_STOCKS_BY_SN: "/api/inv_combinelist/get_stocks_by_SN",
  ADD_STOCKS_BY_SN: "/api/inv_combinelist/add_stocks_by_SN",
  EXCEL_UPLOAD_STOCKS: "/api/inv_combinelist/excel_upload_stocks",
  DOWNLOAD_EXCEL_STOCK: "/api/inv_combinelist/download_excel_Stock",
  GET_MEDPRICES_BY_SN: "/api/inv_combinelist/get_medPrices_by_SN",
  ADD_MEDPRICES_BY_SN: "/api/inv_combinelist/add_medPrices_by_SN",
  EXCEL_UPLOAD_MEDPRICES: "/api/inv_combinelist/excel_upload_medPrices",
  DOWNLOAD_EXCEL_MEDPRICES: "/api/inv_combinelist/download_excel_medPrices",
  GET_MEDNOTE_BY_SN: "/api/inv_combinelist/get_medNote_by_SN",
  ADD_MEDNOTE_BY_SN: "/api/inv_combinelist/add_medNote_by_SN",
  EXCEL_UPLOAD_MEDNOTE: "/api/inv_combinelist/excel_upload_medNote",
  DOWNLOAD_EXCEL_MEDNOTE: "/api/inv_combinelist/download_excel_medNote",
  CHECK_RECONCILIATION_STATE: "/api/inventory/creat_get_by_INVC",
  GENERATE_RECONCILIATION: "/api/inv_combinelist/review_auto_add",
  GET_RECONCILIATION_BY_IC_SN: "/api/inventory/creat_get_by_IC_SN",
  LOCK_INVENTORY_ORDER: "/api/inventory/creat_lock_by_IC_SN",
  UNLOCK_INVENTORY_ORDER: "/api/inventory/creat_unlock_by_IC_SN",
  GET_SETTINGS_BY_SN: "/api/inv_combinelist/get_setting_by_SN",
  UPDATE_SETTINGS_BY_SN: "/api/inv_combinelist/update_setting_by_SN",
  UPDATE_REPORT: "/api/inv_combinelist/update_report",
  SAVE_RECONCILIATION_SETTINGS: "/api/reconciliation/save_settings",
  GET_RECONCILIATION_SETTINGS: "/api/reconciliation/get_settings",
};
let pt = class {
  static logApiRequest(t, n, r) {
    console.group(`🌐 API Request: ${n} ${t}`),
      console.log("📤 Request Payload:", r || "No payload"),
      console.groupEnd();
  }
  static logApiResponse(t, n) {
    console.group(`✅ API Response: ${t}`),
      console.log("📥 Response Data:", n),
      console.groupEnd();
  }
  static logApiError(t, n) {
    console.group(`❌ API Error: ${t}`),
      console.error("Error Details:", n),
      console.groupEnd();
  }
};
class K {
  static async getBaseUrl() {
    return await dh();
  }
  static async fetchApi(t, n = "POST", r) {
    const o = `${await this.getBaseUrl()}${t}`;
    pt.logApiRequest(t, n, r);
    try {
      const i = await fetch(o, {
        method: n,
        headers: { "Content-Type": "application/json" },
        body: r ? JSON.stringify(r) : void 0,
      });
      if (!i.ok)
        throw new Error(
          `API call failed with status ${i.status}: ${
            i.statusText || "Unknown network error"
          }. Endpoint: ${t}`
        );
      const a = await i.json();
      return pt.logApiResponse(t, a), a;
    } catch (i) {
      throw (pt.logApiError(t, i), i);
    }
  }
  static async uploadFile(t, n, r) {
    const s = await this.getBaseUrl(),
      o = r ? `${s}${t}/${r}` : `${s}${t}`;
    pt.logApiRequest(t, "POST", { fileName: n.name, fileSize: n.size });
    try {
      const i = new FormData();
      i.append("file", n);
      const a = await fetch(o, { method: "POST", body: i });
      if (!a.ok)
        throw new Error(
          `File upload failed with status ${a.status}: ${a.statusText}`
        );
      const u = await a.json();
      return pt.logApiResponse(t, u), u;
    } catch (i) {
      throw (pt.logApiError(t, i), i);
    }
  }
  static async downloadFile(t, n, r) {
    const o = `${await this.getBaseUrl()}${t}`;
    pt.logApiRequest(t, "POST", n);
    try {
      const i = await fetch(o, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(n),
      });
      if (!i.ok)
        throw new Error(
          `Download failed with status ${i.status}: ${i.statusText}`
        );
      const a = i.headers.get("content-type");
      if (a && a.includes("application/json")) {
        const u = await i.json();
        if ((pt.logApiResponse(t, u), u.Code !== 200))
          throw new Error(u.Result || "Download failed");
      } else {
        const u = await i.blob(),
          c = window.URL.createObjectURL(u),
          f = document.createElement("a");
        (f.href = c),
          (f.download = r),
          document.body.appendChild(f),
          f.click(),
          window.URL.revokeObjectURL(c),
          document.body.removeChild(f);
      }
    } catch (i) {
      throw (pt.logApiError(t, i), i);
    }
  }
  static async login(t, n) {
    return this.fetchApi(H.LOGIN, "POST", { Data: { ID: t, Password: n } });
  }
  static async getMergedRecords() {
    try {
      return (
        (await this.fetchApi(H.GET_ALL_INV, "POST", { Data: {} })).Data || []
      );
    } catch (t) {
      return console.error("Failed to fetch merged records from API:", t), [];
    }
  }
  static filterMergedRecordsByTime(t, n, r) {
    if (!n || !r) return t;
    const s = new Date(n),
      o = new Date(r);
    return t.filter((i) => {
      if (!i.CT_TIME) return !1;
      const a = new Date(i.CT_TIME.replace(/\//g, "-"));
      return a >= s && a <= o;
    });
  }
  static async checkReconciliationState(t) {
    return await this.fetchApi(H.CHECK_RECONCILIATION_STATE, "POST", {
      Value: t,
      Data: {},
    });
  }
  static async generateReconciliation(t) {
    return await this.fetchApi(H.GENERATE_RECONCILIATION, "POST", {
      Value: t,
      Data: {},
    });
  }
  static async generateReconciliationWithName(t, n, r) {
    return await this.fetchApi(H.GENERATE_RECONCILIATION, "POST", {
      Value: t,
      Data: { CT: n, IC_NAME: r },
    });
  }
  static async getReconciliationByIcSn(t) {
    return await this.fetchApi(H.GET_RECONCILIATION_BY_IC_SN, "POST", {
      Value: t,
    });
  }
  static async getFullInventoryBySN(t) {
    return await this.fetchApi(H.GET_FULL_INV_BY_SN, "POST", {
      Value: t,
      Data: {},
    });
  }
  static async lockInventoryOrder(t) {
    return await this.fetchApi(H.LOCK_INVENTORY_ORDER, "POST", {
      Value: t,
      Data: {},
    });
  }
  static async unlockInventoryOrder(t) {
    return await this.fetchApi(H.UNLOCK_INVENTORY_ORDER, "POST", {
      Value: t,
      Data: {},
    });
  }
  static async getReportBySN(t) {
    try {
      return (
        (
          await this.fetchApi(H.GET_REPORT_BY_SN, "POST", {
            Value: t,
            Data: {},
          })
        ).Data || []
      ).map((s, o) => {
        const i = parseFloat(s.STOCK || "0"),
          a = parseFloat(s.COUNT || "0"),
          u = parseFloat(s.PRICE || "0");
        return {
          index: o + 1,
          GUID: s.GUID || "",
          CODE: s.CODE || "",
          SKDIACODE: s.SKDIACODE || "",
          NAME: s.NAME || "",
          ALIAS: s.ALIAS || "",
          PRICE: u,
          STOCK: i,
          COUNT: a,
          REVIEW: parseFloat(s.REVIEW || "0"),
          stockAmount: i * u,
          finalBalance: a * u,
          QTY: parseFloat(s.QTY || "0"),
          ERROR: parseFloat(s.ERROR || "0"),
          ERROR_MONEY: parseFloat(s.ERROR_MONEY || "0"),
          ERROR_PERCENT: parseFloat(s.ERROR_PERCENT || "0"),
          COMMENT: s.COMMENT || "",
        };
      });
    } catch (n) {
      return console.error("Failed to get report from API:", n), [];
    }
  }
  static async addReportBySN(t) {
    try {
      return (
        (
          await this.fetchApi(H.ADD_REPORT_BY_SN, "POST", {
            Value: t,
            Data: {},
          })
        ).Data || []
      ).map((s, o) => {
        const i = parseFloat(s.STOCK || "0"),
          a = parseFloat(s.COUNT || "0"),
          u = parseFloat(s.PRICE || "0");
        return {
          index: o + 1,
          GUID: s.GUID || "",
          CODE: s.CODE || "",
          SKDIACODE: s.SKDIACODE || "",
          NAME: s.NAME || "",
          ALIAS: s.ALIAS || "",
          PRICE: u,
          STOCK: i,
          COUNT: a,
          REVIEW: parseFloat(s.REVIEW || "0"),
          stockAmount: i * u,
          finalBalance: a * u,
          QTY: parseFloat(s.QTY || "0"),
          ERROR: parseFloat(s.ERROR || "0"),
          ERROR_MONEY: parseFloat(s.ERROR_MONEY || "0"),
          ERROR_PERCENT: parseFloat(s.ERROR_PERCENT || "0"),
          COMMENT: s.COMMENT || "",
        };
      });
    } catch (n) {
      throw (console.error("Failed to add report from API:", n), n);
    }
  }
  static async generateSummary(t) {
    try {
      return (
        console.log({ Value: t, Data: {} }),
        (
          (
            await this.fetchApi(H.GET_DETAIL_INV_BY_SN, "POST", {
              Value: t,
              Data: {},
            })
          ).Data || []
        ).map((s, o) => {
          const i = parseFloat(s.STOCK || "0"),
            a = parseFloat(s.COUNT || "0"),
            u = parseFloat(s.PRICE || "0");
          return {
            index: o + 1,
            GUID: s.GUID || "",
            CODE: s.CODE || "",
            SKDIACODE: s.SKDIACODE || "",
            NAME: s.NAME || "",
            ALIAS: s.ALIAS || "",
            PRICE: u,
            STOCK: i,
            COUNT: a,
            REVIEW: parseFloat(s.REVIEW || "0"),
            stockAmount: i * u,
            finalBalance: a * u,
            QTY: parseFloat(s.QTY || "0"),
            ERROR: parseFloat(s.ERROR || "0"),
            ERROR_MONEY: parseFloat(s.ERROR_MONEY || "0"),
            ERROR_PERCENT: parseFloat(s.ERROR_PERCENT || "0"),
            COMMENT: s.COMMENT || "",
          };
        })
      );
    } catch (n) {
      throw (console.error("Failed to generate summary from API:", n), n);
    }
  }
  static async downloadSummaryReport(t) {
    try {
      await this.downloadFile(
        H.GET_FULL_INV_EXCEL_BY_SN,
        { Value: t, Data: {} },
        `summary_report_${t}.xlsx`
      );
    } catch (n) {
      throw (console.error("Failed to download summary report:", n), n);
    }
  }
  static async getInventory(t) {
    try {
      return (
        (
          await this.fetchApi(H.GET_STOCKS_BY_SN, "POST", {
            Value: t,
            Data: {},
          })
        ).Data || []
      );
    } catch (n) {
      return console.error("Failed to fetch inventory from API:", n), [];
    }
  }
  static async updateInventory(t, n) {
    try {
      return (
        (
          await this.fetchApi(H.ADD_STOCKS_BY_SN, "POST", {
            Value: t,
            Data: n.map((s) => ({
              CODE: s.CODE,
              NAME: s.NAME,
              QTY: s.QTY.toString(),
            })),
          })
        ).Data || []
      );
    } catch (r) {
      throw (console.error("Failed to update inventory:", r), r);
    }
  }
  static async importInventoryExcel(t, n) {
    try {
      return (await this.uploadFile(H.EXCEL_UPLOAD_STOCKS, n, t)).Data || [];
    } catch (r) {
      throw (console.error("Failed to import inventory Excel:", r), r);
    }
  }
  static async exportInventory(t, n) {
    try {
      const r = n.map((s) => ({
        CODE: s.CODE,
        NAME: s.NAME,
        QTY: s.QTY.toString(),
      }));
      await this.downloadFile(
        H.DOWNLOAD_EXCEL_STOCK,
        { Value: t, Data: r },
        `inventory_${t}.xlsx`
      );
    } catch (r) {
      throw (console.error("Failed to export inventory:", r), r);
    }
  }
  static async getUnitPrices(t) {
    try {
      return (
        (
          await this.fetchApi(H.GET_MEDPRICES_BY_SN, "POST", {
            Value: t,
            Data: {},
          })
        ).Data || []
      );
    } catch (n) {
      return console.error("Failed to fetch unit prices from API:", n), [];
    }
  }
  static async updateUnitPrices(t, n) {
    try {
      return (
        (
          await this.fetchApi(H.ADD_MEDPRICES_BY_SN, "POST", {
            Value: t,
            Data: n.map((s) => ({
              CODE: s.CODE,
              NAME: s.NAME,
              price: s.price.toString(),
            })),
          })
        ).Data || []
      );
    } catch (r) {
      throw (console.error("Failed to update unit prices:", r), r);
    }
  }
  static async importUnitPricesExcel(t, n) {
    try {
      return (await this.uploadFile(H.EXCEL_UPLOAD_MEDPRICES, n, t)).Data || [];
    } catch (r) {
      throw (console.error("Failed to import unit prices Excel:", r), r);
    }
  }
  static async exportUnitPrices(t, n) {
    try {
      const r = n.map((s) => ({
        CODE: s.CODE,
        NAME: s.NAME,
        price: s.price.toString(),
      }));
      await this.downloadFile(
        H.DOWNLOAD_EXCEL_MEDPRICES,
        { Value: t, Data: r },
        `unit_prices_${t}.xlsx`
      );
    } catch (r) {
      throw (console.error("Failed to export unit prices:", r), r);
    }
  }
  static async getAliases(t) {
    try {
      return (
        (
          await this.fetchApi(H.GET_MEDNOTE_BY_SN, "POST", {
            Value: t,
            Data: {},
          })
        ).Data || []
      );
    } catch (n) {
      return console.error("Failed to fetch aliases from API:", n), [];
    }
  }
  static async updateAliases(t, n) {
    try {
      return (
        (
          await this.fetchApi(H.ADD_MEDNOTE_BY_SN, "POST", {
            Value: t,
            Data: n.map((s) => ({ CODE: s.CODE, NAME: s.NAME, note: s.note })),
          })
        ).Data || []
      );
    } catch (r) {
      throw (console.error("Failed to update aliases:", r), r);
    }
  }
  static async importAliasesExcel(t, n) {
    try {
      return (await this.uploadFile(H.EXCEL_UPLOAD_MEDNOTE, n, t)).Data || [];
    } catch (r) {
      throw (console.error("Failed to import aliases Excel:", r), r);
    }
  }
  static async exportAliases(t, n) {
    try {
      const r = n.map((s) => ({ CODE: s.CODE, NAME: s.NAME, note: s.note }));
      await this.downloadFile(
        H.DOWNLOAD_EXCEL_MEDNOTE,
        { Value: t, Data: r },
        `aliases_${t}.xlsx`
      );
    } catch (r) {
      throw (console.error("Failed to export aliases:", r), r);
    }
  }
  static async getReconciliationSettingsByRecord(t) {
    try {
      const r = (
        await this.fetchApi(H.GET_SETTINGS_BY_SN, "POST", {
          Value: t,
          Data: {},
        })
      ).Data;
      if (!r) throw new Error("No data found for the selected record");
      return {
        errorAmount: {
          enabled: r.TotalErrorAmountEnable === "True",
          min: parseFloat(r.MinTotalErrorAmount || "0"),
          max: parseFloat(r.MaxTotalErrorAmount || "1000"),
        },
        errorPercentage: {
          enabled: r.ErrorPercentageEnable === "True",
          min: parseFloat(r.MinErrorPercentage || "0"),
          max: parseFloat(r.MaxErrorPercentage || "10"),
        },
        errorQuantity: {
          enabled: r.ErrorCountEnable === "True",
          min: parseFloat(r.MinErrorCount || "0"),
          max: parseFloat(r.MaxErrorCount || "100"),
        },
      };
    } catch (n) {
      throw (
        (console.error("Failed to fetch reconciliation settings from API:", n),
        n)
      );
    }
  }
  static async saveReconciliationSettingsByRecord(t, n) {
    try {
      console.log("=== SAVING RECONCILIATION SETTINGS ==="),
        console.log("INV_SN:", t),
        console.log("Settings:", n);
      const s = (
        await this.fetchApi(H.GET_SETTINGS_BY_SN, "POST", {
          Value: t,
          Data: {},
        })
      ).Data;
      if (!s)
        throw new Error(
          "No current settings data found for the selected record"
        );
      console.log("Current Settings Data:", s);
      const o = {
        ...s,
        MaxTotalErrorAmount: n.errorAmount.max.toString(),
        MinTotalErrorAmount: n.errorAmount.min.toString(),
        TotalErrorAmountEnable: n.errorAmount.enabled ? "True" : "False",
        MaxErrorPercentage: n.errorPercentage.max.toString(),
        MinErrorPercentage: n.errorPercentage.min.toString(),
        ErrorPercentageEnable: n.errorPercentage.enabled ? "True" : "False",
        MaxErrorCount: n.errorQuantity.max.toString(),
        MinErrorCount: n.errorQuantity.min.toString(),
        ErrorCountEnable: n.errorQuantity.enabled ? "True" : "False",
      };
      console.log(
        "Update Data (keeping all existing data, changing only settings):",
        o
      );
      const i = await this.fetchApi(H.UPDATE_SETTINGS_BY_SN, "POST", {
        Value: "",
        Data: o,
      });
      if ((console.log("API Response:", i), i.Code !== 200))
        throw new Error(i.Result || "Failed to save reconciliation settings");
      console.log("=== RECONCILIATION SETTINGS SAVED SUCCESSFULLY ===");
    } catch (r) {
      throw (console.error("Failed to save reconciliation settings:", r), r);
    }
  }
  static async updateReport(t) {
    return await this.fetchApi(H.UPDATE_REPORT, "POST", { Valeu: "", Data: t });
  }
  static async getReconciliationSettings() {
    return (
      await new Promise((t) => setTimeout(t, 300)),
      {
        errorAmount: { enabled: !0, min: 10, max: 1e3 },
        errorPercentage: { enabled: !0, min: 1, max: 15 },
        errorQuantity: { enabled: !1, min: 5, max: 100 },
      }
    );
  }
  static async saveReconciliationSettings(t) {
    await new Promise((n) => setTimeout(n, 500)),
      console.log("Saved reconciliation settings:", t);
  }
  static async exportSummaryReport(t) {
    await new Promise((i) => setTimeout(i, 500));
    const n =
        `Index,Drug Code,Product Code,Drug Name,Alias,Unit Price,Stock Qty,Count Qty,Reconciled Qty,Stock Amount,Final Balance,Usage Qty,Error Qty,Error Amount,Error %,Notes
` +
        t.map(
          (i) =>
            `${i.index},${i.CODE},${i.SKDIACODE},${i.NAME},${i.ALIAS},${i.PRICE},${i.STOCK},${i.COUNT},${i.REVIEW},${i.stockAmount},${i.finalBalance},${i.QTY},${i.ERROR},${i.ERROR_MONEY},${i.ERROR_PERCENT},${i.COMMENT}`
        ).join(`
`),
      r = new Blob([n], { type: "text/csv" }),
      s = window.URL.createObjectURL(r),
      o = document.createElement("a");
    (o.href = s),
      (o.download = "reconciliation_summary_report.csv"),
      document.body.appendChild(o),
      o.click(),
      window.URL.revokeObjectURL(s),
      document.body.removeChild(o);
  }
}
const fh = ({ onLoginSuccess: e }) => {
    const { t } = Ne(),
      [n, r] = k.useState(""),
      [s, o] = k.useState(""),
      [i, a] = k.useState("");
    k.useEffect(
      () => (
        document.body.classList.add("modal-open"),
        () => {
          document.body.classList.remove("modal-open");
        }
      ),
      []
    );
    const u = async (c) => {
      c.preventDefault();
      try {
        const f = await K.login(n, s);
        f.Code === 200
          ? (sessionStorage.setItem("user_session", JSON.stringify(f.Data)),
            e(f.Data))
          : a(f.Result);
      } catch {
        a(t("loginError"));
      }
    };
    return l.jsx("div", {
      className:
        "fixed inset-0 z-[9999] bg-[#F8F9FF] flex items-center justify-center",
      children: l.jsxs("div", {
        className: "w-full max-w-md p-8",
        children: [
          l.jsx("div", {
            className: "text-center mb-12",
            children: l.jsx("h2", {
              className: "text-3xl font-bold mb-2 text-gray-900",
              children: t("inventoryMerge"),
            }),
          }),
          l.jsx("div", {
            className: "bg-white rounded-lg p-8 w-full max-w-md",
            children: l.jsxs("form", {
              onSubmit: u,
              className: "space-y-6 bg-white rounded-2xl shadow-sm",
              children: [
                l.jsxs("div", {
                  children: [
                    l.jsx("label", {
                      htmlFor: "id",
                      className:
                        "block text-base font-medium text-gray-700 mb-1",
                      children: t("userId"),
                    }),
                    l.jsx("input", {
                      id: "id",
                      type: "text",
                      value: n,
                      onChange: (c) => r(c.target.value),
                      className:
                        "block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out",
                      required: !0,
                      placeholder: t("login_id"),
                    }),
                  ],
                }),
                l.jsxs("div", {
                  children: [
                    l.jsx("label", {
                      htmlFor: "password",
                      className:
                        "block text-base font-medium text-gray-700 mb-1",
                      children: t("password"),
                    }),
                    l.jsx("input", {
                      id: "password",
                      type: "password",
                      value: s,
                      onChange: (c) => o(c.target.value),
                      className:
                        "block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out",
                      required: !0,
                      placeholder: t("login_password"),
                    }),
                  ],
                }),
                i &&
                  l.jsx("div", {
                    className: "text-red-600 text-base",
                    children: i,
                  }),
                l.jsx("button", {
                  type: "submit",
                  className:
                    "block w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out font-medium text-lg mt-2",
                  children: t("login"),
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  ph = () => {
    const { t: e } = Ne();
    return l.jsx("footer", {
      className:
        "fixed bottom-0 w-full bg-white shadow-lg bg-white border-t border-gray-200 z-20",
      children: l.jsx("div", {
        className: "max-w-7xl mx-auto px-1 sm:px-1 lg:px-2 py-1",
        children: l.jsx("p", {
          className: "text-sm text-center text-gray-600",
          children: e("copyright"),
        }),
      }),
    });
  },
  gh = ({
    startDate: e,
    startTime: t,
    endDate: n,
    endTime: r,
    onStartDateChange: s,
    onStartTimeChange: o,
    onEndDateChange: i,
    onEndTimeChange: a,
  }) => {
    const { t: u } = Ne(),
      [c, f] = k.useState(!1),
      g = () => {
        f(!c);
      };
    return l.jsxs("div", {
      className:
        "bg-white rounded-lg shadow-sm border border-gray-200 mb-8 overflow-hidden",
      children: [
        l.jsx("div", {
          className:
            "px-4 md:px-6 py-2 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-100",
          onClick: g,
          children: l.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              l.jsxs("div", {
                className: "flex items-center space-x-3",
                children: [
                  l.jsx(Kg, { className: "h-5 w-5 text-gray-600" }),
                  l.jsx("h3", {
                    className: "text-lg font-semibold text-gray-900",
                    children: u("timeRange"),
                  }),
                ],
              }),
              l.jsx("div", {
                className: "flex items-center space-x-2",
                children: c
                  ? l.jsx(Qn, {
                      className:
                        "h-5 w-5 text-gray-400 transition-transform duration-200",
                    })
                  : l.jsx(Bn, {
                      className:
                        "h-5 w-5 text-gray-400 transition-transform duration-200",
                    }),
              }),
            ],
          }),
        }),
        l.jsx("div", {
          className: `transition-all duration-300 ease-in-out overflow-hidden ${
            c ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`,
          children: l.jsx("div", {
            className: "p-4 md:p-6",
            children: l.jsxs("div", {
              className: "flex items-end gap-12",
              children: [
                l.jsxs("div", {
                  className: "w-[15%]",
                  children: [
                    l.jsx("label", {
                      className:
                        "block text-base font-medium text-gray-700 mb-2",
                      children: u("timeType"),
                    }),
                    l.jsx("select", {
                      value: "create_time",
                      className:
                        "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                      disabled: !0,
                      children: l.jsx("option", {
                        value: "create_time",
                        children: u("ctTime"),
                      }),
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "w-[30%]",
                  children: [
                    l.jsx("label", {
                      className:
                        "block text-base font-medium text-gray-700 mb-2",
                      children: u("startTime"),
                    }),
                    l.jsxs("div", {
                      className: "flex gap-4",
                      children: [
                        l.jsx("input", {
                          type: "date",
                          value: e,
                          onChange: (d) => s(d.target.value),
                          className:
                            "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                        }),
                        l.jsx("input", {
                          type: "time",
                          step: "1",
                          value: t,
                          onChange: (d) => o(d.target.value),
                          className:
                            "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                        }),
                      ],
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "w-[30%]",
                  children: [
                    l.jsx("label", {
                      className:
                        "block text-base font-medium text-gray-700 mb-2",
                      children: u("endTime"),
                    }),
                    l.jsxs("div", {
                      className: "flex gap-4",
                      children: [
                        l.jsx("input", {
                          type: "date",
                          value: n,
                          onChange: (d) => i(d.target.value),
                          className:
                            "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                        }),
                        l.jsx("input", {
                          type: "time",
                          step: "1",
                          value: r,
                          onChange: (d) => a(d.target.value),
                          className:
                            "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  hh = ({
    selectedRecord: e,
    mergedRecords: t,
    onRecordChange: n,
    onDownloadReport: r,
    isDownloadDisabled: s,
    isDownloadLoading: o,
    onGenerateSummary: i,
    isGenerateDisabled: a,
    hasExistingReport: u,
  }) => {
    const { t: c } = Ne();
    return l.jsx("div", {
      className: "bg-white rounded-lg shadow-sm border p-4 md:p-6 mb-6",
      children: l.jsxs("div", {
        className: "flex items-end justify-between gap-6",
        children: [
          l.jsxs("div", {
            className: "flex-1 max-w-md",
            children: [
              l.jsx("label", {
                className: "block text-base font-medium text-gray-700 mb-2",
                children: c("mergedRecord"),
              }),
              l.jsxs("select", {
                value: e,
                onChange: (f) => {
                  const g = f.target.value;
                  n(g);
                },
                className:
                  "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
                children: [
                  l.jsx("option", { value: "", children: c("selectRecord") }),
                  t.map((f) =>
                    l.jsx(
                      "option",
                      { value: f.INV_SN, children: f.INV_NAME },
                      f.INV_SN
                    )
                  ),
                ],
              }),
            ],
          }),
          l.jsxs("div", {
            className: "flex gap-3",
            children: [
              l.jsxs("button", {
                onClick: i,
                disabled: a,
                className: `flex items-center px-6 py-2 rounded-lg transition-colors ${
                  a
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`,
                children: [
                  l.jsx(Id, { className: "h-5 w-5 mr-2" }),
                  c(u ? "regenerateSummary" : "generateSummary"),
                ],
              }),
              l.jsxs("button", {
                onClick: r,
                disabled: s || o,
                className: `flex items-center px-6 py-2 rounded-lg transition-colors ${
                  s || o
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`,
                children: [
                  o
                    ? l.jsx(Pt, { className: "h-5 w-5 mr-2 animate-spin" })
                    : l.jsx(zr, { className: "h-5 w-5 mr-2" }),
                  c("downloadReport"),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  mh = ({
    onInventorySettings: e,
    onUnitPriceSettings: t,
    onUsageQtySettings: n,
    onAliasSettings: r,
    onReconciliationSettings: s,
    onColumnDisplaySettings: o,
  }) => {
    const { t: i } = Ne();
    return l.jsx("div", {
      className: "bg-white rounded-lg mb-6",
      children: l.jsxs("div", {
        className: "flex flex-wrap gap-3",
        children: [
          l.jsxs("button", {
            onClick: e,
            className:
              "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
            children: [
              l.jsx(nh, { className: "h-5 w-5 mr-2" }),
              i("inventorySettings"),
            ],
          }),
          l.jsxs("button", {
            onClick: t,
            className:
              "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
            children: [
              l.jsx(Yg, { className: "h-5 w-5 mr-2" }),
              i("unitPriceSettings"),
            ],
          }),
          l.jsxs("button", {
            onClick: n,
            className:
              "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
            children: [
              l.jsx(ih, { className: "h-5 w-5 mr-2" }),
              i("usageQtySettings"),
            ],
          }),
          l.jsxs("button", {
            onClick: r,
            className:
              "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
            children: [
              l.jsx(sh, { className: "h-5 w-5 mr-2" }),
              i("aliasSettings"),
            ],
          }),
          l.jsxs("button", {
            onClick: s,
            className:
              "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
            children: [
              l.jsx(oh, { className: "h-5 w-5 mr-2" }),
              i("reconciliationSettings"),
            ],
          }),
          l.jsxs("button", {
            onClick: o,
            className:
              "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
            children: [
              l.jsx(Hg, { className: "h-5 w-5 mr-2" }),
              i("columnDisplaySettings"),
            ],
          }),
        ],
      }),
    });
  },
  zo = 50,
  yh = ({
    data: e,
    selectedRecordName: t,
    columnSettings: n,
    onReconciliationAction: r,
    reconciliationButtonState: s,
    isReconciliationButtonDisabled: o,
    reconciliationLoading: i,
    onLockToggle: a,
    lockToggleLoading: u,
    reconciliationData: c,
    onDataUpdate: f,
    handleCreateReconciliation: g,
  }) => {
    const { t: d } = Ne(),
      [x, v] = k.useState(null),
      [N, R] = k.useState("asc"),
      [m, p] = k.useState(""),
      [y, S] = k.useState(1),
      [E, h] = k.useState(!1),
      [w, C] = k.useState({}),
      [_, I] = k.useState({}),
      [M, U] = k.useState(!1),
      [Z, me] = k.useState(!1),
      ue = (b) => {
        x === b ? R(N === "asc" ? "desc" : "asc") : (v(b), R("asc"));
      },
      ye = k.useMemo(() => {
        let b = e;
        if (m.trim()) {
          const G = m.toLowerCase().trim();
          b = e.filter(
            (z) =>
              z.CODE.toLowerCase().includes(G) ||
              z.NAME.toLowerCase().includes(G)
          );
        }
        return x
          ? [...b].sort((G, z) => {
              const ne = G[x],
                V = z[x];
              if (typeof ne == "number" && typeof V == "number")
                return N === "asc" ? ne - V : V - ne;
              const xe = String(ne).toLowerCase(),
                Wt = String(V).toLowerCase();
              return N === "asc" ? xe.localeCompare(Wt) : Wt.localeCompare(xe);
            })
          : b;
      }, [e, x, N, m]),
      Fe = k.useMemo(() => {
        if (
          (console.log(
            "=== CHECKING FOR REVIEW RECORDS (for Generate button disable) ==="
          ),
          console.log("Total data items:", e.length),
          e.length === 0)
        )
          return console.log("No data available"), !1;
        const b = e.filter((G) => {
          const z = G.COMMENT,
            ne = z.includes("覆盤");
          return (
            console.log(`Item ${G.CODE}: COMMENT="${z}", hasReview=${ne}`), ne
          );
        });
        return (
          console.log("Review records found:", b.length),
          console.log("Has review records:", b.length > 0),
          console.log("=== END REVIEW RECORDS CHECK ==="),
          b.length > 0
        );
      }, [e]),
      O = k.useMemo(() => {
        console.log("=== API-BASED BUTTON STATE LOGIC ==="),
          console.log("Reconciliation Button State from API:", s),
          console.log("Has review records in data:", Fe),
          console.log("Data length:", e.length),
          console.log("Loading:", i);
        const b = s === "generate",
          G = s === "enter" || s === "locked";
        console.log("Show Generate Button:", b),
          console.log("Show Enter Button:", G);
        const z = o || i || !Fe || s !== "generate",
          ne = o || i || s === "locked" || (s !== "enter" && s !== "locked");
        return (
          console.log("Generate Button Disabled:", z),
          console.log("Generate Button Disabled Reasons:"),
          console.log("  - isReconciliationButtonDisabled:", o),
          console.log("  - reconciliationLoading:", i),
          console.log("  - !hasReviewRecords:", !Fe),
          console.log(
            '  - reconciliationButtonState !== "generate":',
            s !== "generate"
          ),
          console.log("Enter Button Disabled:", ne),
          console.log("Enter Button Disabled Reasons:"),
          console.log("  - isReconciliationButtonDisabled:", o),
          console.log("  - reconciliationLoading:", i),
          console.log(
            '  - reconciliationButtonState === "locked":',
            s === "locked"
          ),
          console.log(
            "  - state not enter/locked:",
            s !== "enter" && s !== "locked"
          ),
          console.log("=== END API-BASED BUTTON STATE LOGIC ==="),
          {
            showGenerateButton: b,
            showEnterButton: G,
            generateButtonDisabled: z,
            enterButtonDisabled: ne,
          }
        );
      }, [s, Fe, o, i, e.length]),
      P = ye.length,
      L = Math.ceil(P / zo),
      B = (y - 1) * zo,
      te = Math.min(B + zo, P),
      ft = ye.slice(B, te);
    ff.useEffect(() => {
      S(1);
    }, [m]);
    const Ke = () => {
        const b = {};
        e.forEach((z) => {
          const ne = z.GUID || z.CODE,
            V = z.COMMENT === "覆盤";
          b[ne] = V;
        }),
          C(b),
          I({ ...b });
        const G = Object.values(b).every((z) => z);
        U(G);
      },
      Yt = async () => {
        if (!E) h(!0), Ke();
        else {
          me(!0);
          try {
            let b = [];
            if (
              (Object.keys(w).forEach((z) => {
                const ne = w[z],
                  V = _[z];
                if (ne !== V) {
                  const xe = e.find((Wt) => (Wt.GUID || Wt.CODE) === z);
                  xe &&
                    xe.GUID &&
                    b.push({ GUID: xe.GUID, COMMENT: ne ? "覆盤" : "" });
                }
              }),
              b.length === 0)
            ) {
              h(!1), me(!1);
              return;
            }
            if ((await K.updateReport(b)).Code === 200) {
              const z = [...e].map((V) => {
                const xe = V.GUID || V.CODE;
                return w.hasOwnProperty(xe)
                  ? { ...V, COMMENT: w[xe] ? "覆盤" : "" }
                  : V;
              });
              f == null || f(z),
                alert(d("reviewItemsUpdatedSuccessfully")),
                h(!1);
              const ne = {};
              if (
                (z.forEach((V) => {
                  const xe = V.GUID || V.CODE;
                  ne[xe] = V.COMMENT === "覆盤";
                }),
                C(ne),
                I({ ...ne }),
                O.showEnterButton && c && c[0] && c[0].IC_SN)
              ) {
                console.log(
                  "=== AUTO GENERATING NEW RECONCILIATION AFTER REVIEW ITEMS UPDATE ==="
                ),
                  console.log(
                    "buttonState.showEnterButton:",
                    O.showEnterButton
                  ),
                  console.log("IC_SN:", c[0].IC_SN);
                try {
                  const V = await K.getReconciliationByIcSn(c[0].IC_SN);
                  if (
                    (console.log("Get reconciliation by IC_SN response:", V),
                    V.Code === 200 && V.Data && V.Data[0])
                  ) {
                    const xe = V.Data[0].IC_NAME;
                    console.log("Got reconciliation name:", xe),
                      await g(xe),
                      console.log("Auto reconciliation creation completed");
                  } else
                    console.error(
                      "Failed to get reconciliation name from API response"
                    );
                } catch (V) {
                  console.error("Error getting reconciliation name:", V);
                }
              }
            } else alert(d("failedToUpdateReviewItems"));
          } catch (b) {
            console.error("Error updating review items:", b),
              alert(d("failedToUpdateReviewItems"));
          } finally {
            me(!1);
          }
        }
      },
      He = (b, G) => {
        const z = { ...w, [b]: G };
        C(z);
        const ne = Object.values(z).every((V) => V);
        Object.values(z).every((V) => !V), U(ne);
      },
      kt = (b) => {
        const G = {};
        Object.keys(w).forEach((z) => {
          G[z] = b;
        }),
          C(G),
          U(b);
      },
      dn = (b) => {
        b >= 1 && b <= L && S(b);
      },
      fo = (b) => {
        const G = parseInt(b.target.value);
        isNaN(G) || dn(G);
      },
      Ee = ({ field: b, children: G }) =>
        l.jsx("th", {
          className:
            "px-4 py-3 text-left text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors whitespace-nowrap",
          onClick: () => ue(b),
          children: l.jsxs("div", {
            className: "flex items-center space-x-1",
            children: [
              l.jsx("span", { children: G }),
              x === b &&
                (N === "asc"
                  ? l.jsx(Qn, { className: "h-4 w-4" })
                  : l.jsx(Bn, { className: "h-4 w-4" })),
            ],
          }),
        });
    return e.length === 0
      ? l.jsx("div", {
          className: "bg-white rounded-lg shadow-sm border border-gray-200 p-8",
          children: l.jsxs("div", {
            className: "text-center text-gray-500",
            children: [
              l.jsx(Id, { className: "h-12 w-12 mx-auto mb-4 text-gray-300" }),
              l.jsx("p", {
                className: "text-lg",
                children: d("noSummaryData"),
              }),
              l.jsx("p", {
                className: "text-sm",
                children: d("generateSummaryFirst"),
              }),
            ],
          }),
        })
      : l.jsxs("div", {
          children: [
            l.jsxs("div", {
              className: "py-6 flex items-center justify-between gap-6",
              children: [
                l.jsxs("div", {
                  className: "flex gap-4",
                  children: [
                    l.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        l.jsx("h3", {
                          className: "text-xl font-semibold text-gray-900",
                          children: t
                            ? `${t} - ${d("reconciliationSummary")}`
                            : d("reconciliationSummary"),
                        }),
                        l.jsxs("p", {
                          className: "text-sm text-gray-600 ml-2",
                          children: ["(", P, " ", d("totalItems"), ")"],
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "flex-1 max-w-md relative",
                      children: [
                        l.jsx("div", {
                          className:
                            "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                          children: l.jsx(th, {
                            className: "h-5 w-5 text-gray-400",
                          }),
                        }),
                        l.jsx("input", {
                          type: "text",
                          value: m,
                          onChange: (b) => p(b.target.value),
                          placeholder: d("searchPlaceholder"),
                          className:
                            "block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm",
                        }),
                        m &&
                          l.jsx("button", {
                            onClick: () => p(""),
                            className:
                              "absolute inset-y-0 right-0 pr-3 flex items-center hover:text-gray-600 transition-colors",
                            children: l.jsx(Ct, {
                              className: "h-4 w-4 text-gray-400",
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.length > 0 &&
                      l.jsxs("button", {
                        onClick: Yt,
                        disabled: Z || (E && Object.values(w).every((b) => !b)),
                        className: `flex items-center px-4 py-2 rounded-lg transition-colors ${
                          Z || (E && Object.values(w).every((b) => !b))
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : E
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`,
                        children: [
                          Z
                            ? l.jsx(Pt, {
                                className: "h-5 w-5 mr-2 animate-spin",
                              })
                            : E
                            ? l.jsx(Kn, { className: "h-5 w-5 mr-2" })
                            : l.jsx(rh, { className: "h-5 w-5 mr-2" }),
                          d(
                            Z
                              ? "saving"
                              : E
                              ? "saveReviewItems"
                              : "adjustReviewItems"
                          ),
                        ],
                      }),
                    c &&
                      c[0] &&
                      l.jsxs("button", {
                        onClick: a,
                        disabled: u,
                        className: `flex items-center px-4 py-2 rounded-lg transition-colors ${
                          u
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : c[0].STATE === "鎖定"
                            ? "bg-red-600 text-white hover:bg-red-700"
                            : "bg-green-600 text-white hover:bg-green-700"
                        }`,
                        children: [
                          u
                            ? l.jsx(Pt, {
                                className: "h-5 w-5 mr-2 animate-spin",
                              })
                            : c[0].STATE === "鎖定"
                            ? l.jsx(xs, { className: "h-5 w-5 mr-2" })
                            : l.jsx(lh, { className: "h-5 w-5 mr-2" }),
                          u
                            ? c[0].STATE === "鎖定"
                              ? d("unlocking")
                              : d("locking")
                            : c[0].STATE === "鎖定"
                            ? d("locked")
                            : d("unlocked"),
                        ],
                      }),
                    O.showGenerateButton &&
                      l.jsxs("button", {
                        onClick: r,
                        disabled: O.generateButtonDisabled,
                        className: `flex items-center px-4 py-2 rounded-lg transition-colors ${
                          O.generateButtonDisabled
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`,
                        children: [
                          i
                            ? l.jsx(Pt, {
                                className: "h-5 w-5 mr-2 animate-spin",
                              })
                            : l.jsx(Td, { className: "h-5 w-5 mr-2" }),
                          d("generateReviewSheet"),
                        ],
                      }),
                    O.showEnterButton &&
                      l.jsxs("button", {
                        onClick: r,
                        disabled: O.enterButtonDisabled,
                        className: `flex items-center px-4 py-2 rounded-lg transition-colors ${
                          O.enterButtonDisabled
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : s === "locked"
                            ? "bg-red-600 text-white hover:bg-red-700"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`,
                        children: [
                          i
                            ? l.jsx(Pt, {
                                className: "h-5 w-5 mr-2 animate-spin",
                              })
                            : l.jsx(qg, { className: "h-5 w-5 mr-2" }),
                          d(
                            s === "locked"
                              ? "lockedReviewSheet"
                              : "enterReviewSheet"
                          ),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            l.jsx("div", {
              className: "bg-white rounded-lg shadow-sm border border-gray-200",
              children: l.jsxs("div", {
                className: "relative overflow-x-auto",
                children: [
                  l.jsxs("div", {
                    className:
                      "px-3 py-2 bg-gray-50 border-b border-gray-200 flex items-center justify-between text-sm text-gray-600",
                    children: [
                      l.jsx("div", {
                        className: "text-sm text-gray-600",
                        children: l.jsxs("div", {
                          className: "flex items-center space-x-4",
                          children: [
                            l.jsxs("span", {
                              children: [
                                d("showing"),
                                " ",
                                P > 0 ? B + 1 : 0,
                                " - ",
                                te,
                                " ",
                                d("of"),
                                " ",
                                P,
                                " ",
                                d("records"),
                              ],
                            }),
                            E &&
                              l.jsxs("span", {
                                className:
                                  "px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium",
                                children: [
                                  "已選取: ",
                                  Object.values(w).filter((b) => b).length,
                                  " 項",
                                ],
                              }),
                          ],
                        }),
                      }),
                      L > 1 &&
                        l.jsxs("div", {
                          className: "flex items-center space-x-4",
                          children: [
                            l.jsxs("button", {
                              onClick: () => dn(y - 1),
                              disabled: y === 1,
                              className: `flex items-center px-3 py-2 rounded-lg transition-colors ${
                                y === 1
                                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                              }`,
                              children: [
                                l.jsx(Bg, { className: "h-4 w-4 mr-1" }),
                                d("previous"),
                              ],
                            }),
                            l.jsxs("div", {
                              className: "flex items-center space-x-2",
                              children: [
                                l.jsx("input", {
                                  type: "number",
                                  min: "1",
                                  max: L,
                                  value: y,
                                  onChange: fo,
                                  className:
                                    "w-16 px-2 py-1 text-center border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm",
                                }),
                                l.jsxs("span", {
                                  className: "text-sm text-gray-600",
                                  children: ["/ ", L],
                                }),
                              ],
                            }),
                            l.jsxs("button", {
                              onClick: () => dn(y + 1),
                              disabled: y === L,
                              className: `flex items-center px-3 py-2 rounded-lg transition-colors ${
                                y === L
                                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                              }`,
                              children: [
                                d("next"),
                                l.jsx(Qg, { className: "h-4 w-4 ml-1" }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                  l.jsx("div", {
                    className: "max-h-[calc(100vh-180px)] overflow-y-auto",
                    children: l.jsxs("table", {
                      className: "w-full",
                      children: [
                        l.jsx("thead", {
                          className: "bg-gray-100 sticky top-0 z-10",
                          children: l.jsxs("tr", {
                            children: [
                              E &&
                                l.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-sm font-medium text-gray-700 whitespace-nowrap",
                                  children: l.jsx("input", {
                                    type: "checkbox",
                                    checked: M,
                                    onChange: (b) => kt(b.target.checked),
                                    className:
                                      "rounded border-gray-300 text-blue-600 focus:ring-blue-500",
                                  }),
                                }),
                              l.jsx("th", {
                                className:
                                  "px-4 py-3 text-left text-sm font-medium text-gray-700 whitespace-nowrap",
                                children: d("index"),
                              }),
                              n.CODE &&
                                l.jsx(Ee, {
                                  field: "CODE",
                                  children: d("drugCode"),
                                }),
                              n.SKDIACODE &&
                                l.jsx(Ee, {
                                  field: "SKDIACODE",
                                  children: d("productCode"),
                                }),
                              n.NAME &&
                                l.jsx(Ee, {
                                  field: "NAME",
                                  children: d("drugName"),
                                }),
                              n.ALIAS &&
                                l.jsx(Ee, {
                                  field: "ALIAS",
                                  children: d("alias"),
                                }),
                              l.jsx(Ee, {
                                field: "COMMENT",
                                children: d("reviewStatus"),
                              }),
                              n.STOCK &&
                                l.jsx(Ee, {
                                  field: "STOCK",
                                  children: d("stockQty"),
                                }),
                              n.COUNT &&
                                l.jsx(Ee, {
                                  field: "COUNT",
                                  children: d("countQty"),
                                }),
                              n.REVIEW &&
                                l.jsx(Ee, {
                                  field: "REVIEW",
                                  children: d("reviewQty"),
                                }),
                              n.stockAmount &&
                                l.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-sm font-medium text-gray-700 whitespace-nowrap",
                                  children: d("stockAmount"),
                                }),
                              n.finalBalance &&
                                l.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-sm font-medium text-gray-700 whitespace-nowrap",
                                  children: d("finalBalance"),
                                }),
                              n.QTY &&
                                l.jsx(Ee, {
                                  field: "QTY",
                                  children: d("usageQty"),
                                }),
                              n.PRICE &&
                                l.jsx(Ee, {
                                  field: "PRICE",
                                  children: d("unitPrice"),
                                }),
                              n.ERROR &&
                                l.jsx(Ee, {
                                  field: "ERROR",
                                  children: d("errorQty"),
                                }),
                              n.ERROR_MONEY &&
                                l.jsx(Ee, {
                                  field: "ERROR_MONEY",
                                  children: d("errorAmount"),
                                }),
                              n.ERROR_PERCENT &&
                                l.jsx(Ee, {
                                  field: "ERROR_PERCENT",
                                  children: d("errorPercentage"),
                                }),
                            ],
                          }),
                        }),
                        l.jsx("tbody", {
                          className: "divide-y divide-gray-200",
                          children:
                            ft.length === 0
                              ? l.jsx("tr", {
                                  children: l.jsx("td", {
                                    colSpan: E ? 17 : 16,
                                    className:
                                      "px-4 py-8 text-center text-gray-500",
                                    children: d(
                                      m ? "noSearchResults" : "noData"
                                    ),
                                  }),
                                })
                              : ft.map((b) =>
                                  l.jsxs(
                                    "tr",
                                    {
                                      className: "hover:bg-gray-50",
                                      children: [
                                        E &&
                                          l.jsx("td", {
                                            className: "px-4 py-3",
                                            children: l.jsx("input", {
                                              type: "checkbox",
                                              checked:
                                                w[b.GUID || b.CODE] || !1,
                                              onChange: (G) =>
                                                He(
                                                  b.GUID || b.CODE,
                                                  G.target.checked
                                                ),
                                              className:
                                                "rounded border-gray-300 text-blue-600 focus:ring-blue-500",
                                            }),
                                          }),
                                        l.jsx("td", {
                                          className:
                                            "px-4 py-3 text-sm text-gray-900",
                                          children: b.index,
                                        }),
                                        n.CODE &&
                                          l.jsx("td", {
                                            className:
                                              "px-4 py-3 text-sm text-gray-900 whitespace-nowrap",
                                            children: b.CODE,
                                          }),
                                        n.SKDIACODE &&
                                          l.jsx("td", {
                                            className:
                                              "px-4 py-3 text-sm text-gray-900 whitespace-nowrap",
                                            children: b.SKDIACODE,
                                          }),
                                        n.NAME &&
                                          l.jsx("td", {
                                            className:
                                              "px-4 py-3 text-sm text-gray-900 whitespace-nowrap",
                                            children: b.NAME,
                                          }),
                                        n.ALIAS &&
                                          l.jsx("td", {
                                            className:
                                              "px-4 py-3 text-sm text-gray-600",
                                            children: b.ALIAS,
                                          }),
                                        l.jsx("td", {
                                          className:
                                            "px-4 py-3 text-sm text-gray-600",
                                          children:
                                            b.COMMENT === "覆盤" ? "Y" : "-",
                                        }),
                                        n.STOCK &&
                                          l.jsx("td", {
                                            className:
                                              "px-4 py-3 text-sm text-gray-900",
                                            children: b.STOCK.toLocaleString(),
                                          }),
                                        n.COUNT &&
                                          l.jsx("td", {
                                            className:
                                              "px-4 py-3 text-sm text-gray-900",
                                            children: b.COUNT.toLocaleString(),
                                          }),
                                        n.REVIEW &&
                                          l.jsx("td", {
                                            className:
                                              "px-4 py-3 text-sm text-gray-900",
                                            children: b.REVIEW.toLocaleString(),
                                          }),
                                        n.stockAmount &&
                                          l.jsx("td", {
                                            className:
                                              "px-4 py-3 text-sm text-gray-900",
                                            children:
                                              b.stockAmount.toLocaleString(),
                                          }),
                                        n.finalBalance &&
                                          l.jsx("td", {
                                            className:
                                              "px-4 py-3 text-sm text-gray-900",
                                            children:
                                              b.finalBalance.toLocaleString(),
                                          }),
                                        n.QTY &&
                                          l.jsx("td", {
                                            className:
                                              "px-4 py-3 text-sm text-gray-900",
                                            children: b.QTY.toLocaleString(),
                                          }),
                                        n.PRICE &&
                                          l.jsx("td", {
                                            className:
                                              "px-4 py-3 text-sm text-gray-900",
                                            children: b.PRICE.toLocaleString(),
                                          }),
                                        n.ERROR &&
                                          l.jsx("td", {
                                            className: `px-4 py-3 text-sm font-medium ${
                                              b.ERROR < 0
                                                ? "text-red-600"
                                                : "text-green-600"
                                            }`,
                                            children: b.ERROR.toLocaleString(),
                                          }),
                                        n.ERROR_MONEY &&
                                          l.jsx("td", {
                                            className: `px-4 py-3 text-sm font-medium ${
                                              b.ERROR_MONEY < 0
                                                ? "text-red-600"
                                                : "text-green-600"
                                            }`,
                                            children:
                                              b.ERROR_MONEY.toLocaleString(),
                                          }),
                                        n.ERROR_PERCENT &&
                                          l.jsxs("td", {
                                            className: `px-4 py-3 text-sm font-medium ${
                                              b.ERROR_PERCENT < 0
                                                ? "text-red-600"
                                                : "text-green-600"
                                            }`,
                                            children: [
                                              b.ERROR_PERCENT.toFixed(2),
                                              "%",
                                            ],
                                          }),
                                      ],
                                    },
                                    b.index
                                  )
                                ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
  },
  xh = ({ isOpen: e, onClose: t, selectedRecord: n }) => {
    const { t: r } = Ne(),
      [s, o] = k.useState([]),
      [i, a] = k.useState(!1),
      [u, c] = k.useState(!1),
      [f, g] = k.useState("CODE"),
      [d, x] = k.useState("asc");
    k.useState(!1),
      k.useEffect(() => {
        e && n && v();
      }, [e, n]);
    const v = async () => {
        if (n)
          try {
            a(!0);
            const h = await K.getInventory(n);
            o(h.map((w) => ({ ...w, selected: !1 })));
          } catch (h) {
            console.error("Failed to load inventory:", h), o([]);
          } finally {
            a(!1);
          }
      },
      N = (h) => {
        f === h ? x(d === "asc" ? "desc" : "asc") : (g(h), x("asc"));
      },
      R = k.useMemo(
        () =>
          [...s].sort((h, w) => {
            const C = h[f],
              _ = w[f];
            if (f === "QTY") {
              const U = typeof C == "string" ? parseFloat(C) || 0 : Number(C),
                Z = typeof _ == "string" ? parseFloat(_) || 0 : Number(_);
              return d === "asc" ? U - Z : Z - U;
            }
            const I = String(C).toLowerCase(),
              M = String(_).toLowerCase();
            return d === "asc" ? I.localeCompare(M) : M.localeCompare(I);
          }),
        [s, f, d]
      ),
      m = (h, w) => {
        o(s.map((C) => (C.CODE === h ? { ...C, QTY: w } : C)));
      },
      p = async () => {
        if (n)
          try {
            c(!0), await K.updateInventory(n, s), await v();
          } catch (h) {
            console.error("Failed to save inventory:", h);
          } finally {
            c(!1);
          }
      },
      y = () => {
        if (!n) {
          alert("Please select a merged record first");
          return;
        }
        const h = document.createElement("input");
        (h.type = "file"),
          (h.accept = ".xlsx,.xls"),
          (h.onchange = async (w) => {
            var _;
            const C = (_ = w.target.files) == null ? void 0 : _[0];
            if (C)
              try {
                a(!0), await K.importInventoryExcel(n, C), await v();
              } catch (I) {
                console.error("Failed to import inventory:", I),
                  alert("Failed to import inventory file");
              } finally {
                a(!1);
              }
          }),
          h.click();
      },
      S = async () => {
        if (!n) {
          alert("Please select a merged record first");
          return;
        }
        try {
          await K.exportInventory(n, s);
        } catch (h) {
          console.error("Failed to export inventory:", h),
            alert("Failed to export inventory");
        }
      },
      E = ({ field: h, children: w }) =>
        l.jsx("th", {
          className:
            "px-4 py-3 text-left text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors",
          onClick: () => N(h),
          children: l.jsxs("div", {
            className: "flex items-center space-x-1",
            children: [
              l.jsx("span", { children: w }),
              f === h &&
                (d === "asc"
                  ? l.jsx(Qn, { className: "h-4 w-4" })
                  : l.jsx(Bn, { className: "h-4 w-4" })),
            ],
          }),
        });
    return e
      ? l.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
          children: l.jsxs("div", {
            className:
              "bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden",
            children: [
              l.jsxs("div", {
                className: "px-6 py-4 border-b border-gray-200",
                children: [
                  l.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [
                      l.jsx("h2", {
                        className: "text-2xl font-semibold text-gray-900",
                        children: r("inventorySettings"),
                      }),
                      l.jsx("button", {
                        onClick: t,
                        className: "text-gray-500 hover:text-gray-700",
                        children: l.jsx(Ct, { className: "w-6 h-6" }),
                      }),
                    ],
                  }),
                  n &&
                    l.jsxs("p", {
                      className: "text-sm text-gray-600 mt-1",
                      children: ["Selected Record: ", n],
                    }),
                ],
              }),
              l.jsxs("div", {
                className: "p-6",
                children: [
                  l.jsxs("div", {
                    className: "flex justify-between items-center mb-6",
                    children: [
                      l.jsxs("div", {
                        className: "flex space-x-3",
                        children: [
                          l.jsxs("button", {
                            onClick: y,
                            disabled: !n || i,
                            className: `flex items-center px-4 py-2 rounded-lg transition-colors ${
                              !n || i
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                            }`,
                            children: [
                              l.jsx(uo, { className: "h-5 w-5 mr-2" }),
                              r("importExcel"),
                            ],
                          }),
                          l.jsxs("button", {
                            onClick: S,
                            disabled: !n || s.length === 0,
                            className: `flex items-center px-4 py-2 rounded-lg transition-colors ${
                              !n || s.length === 0
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-green-600 text-white hover:bg-green-700"
                            }`,
                            children: [
                              l.jsx(zr, { className: "h-5 w-5 mr-2" }),
                              r("exportExcel"),
                            ],
                          }),
                          l.jsxs("button", {
                            onClick: p,
                            disabled: !n || u || s.length === 0,
                            className: `flex items-center px-4 py-2 rounded-lg transition-colors ${
                              !n || u || s.length === 0
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                            }`,
                            children: [
                              l.jsx(Kn, { className: "h-5 w-5 mr-2" }),
                              r(u ? "saving" : "save"),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "text-sm text-gray-600",
                        children: ["(", s.length, " ", r("totalItems"), ")"],
                      }),
                    ],
                  }),
                  n
                    ? l.jsx("div", {
                        className: "overflow-x-auto max-h-96",
                        children: i
                          ? l.jsx("div", {
                              className: "text-center py-8",
                              children: r("loading"),
                            })
                          : s.length === 0
                          ? l.jsx("div", {
                              className: "text-center py-8 text-gray-500",
                              children: l.jsx("p", {
                                children:
                                  "No inventory data found for this record.",
                              }),
                            })
                          : l.jsxs("table", {
                              className: "w-full",
                              children: [
                                l.jsx("thead", {
                                  className: "bg-gray-50 sticky top-0",
                                  children: l.jsxs("tr", {
                                    children: [
                                      l.jsx(E, {
                                        field: "CODE",
                                        children: r("drugCode"),
                                      }),
                                      l.jsx(E, {
                                        field: "NAME",
                                        children: r("drugName"),
                                      }),
                                      l.jsx(E, {
                                        field: "QTY",
                                        children: r("stockQty"),
                                      }),
                                    ],
                                  }),
                                }),
                                l.jsx("tbody", {
                                  className: "divide-y divide-gray-200",
                                  children: R.map((h) =>
                                    l.jsxs(
                                      "tr",
                                      {
                                        className: "hover:bg-gray-50",
                                        children: [
                                          l.jsx("td", {
                                            className:
                                              "px-4 py-3 text-sm text-gray-900",
                                            children: h.CODE,
                                          }),
                                          l.jsx("td", {
                                            className:
                                              "px-4 py-3 text-sm text-gray-900",
                                            children: h.NAME,
                                          }),
                                          l.jsx("td", {
                                            className: "px-4 py-3",
                                            children: l.jsx("input", {
                                              type: "number",
                                              value: h.QTY,
                                              onChange: (w) =>
                                                m(h.CODE, w.target.value),
                                              className:
                                                "w-24 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right",
                                            }),
                                          }),
                                        ],
                                      },
                                      h.CODE
                                    )
                                  ),
                                }),
                              ],
                            }),
                      })
                    : l.jsx("div", {
                        className: "text-center py-8 text-gray-500",
                        children: l.jsx("p", {
                          children:
                            "Please select a merged record first to view inventory data.",
                        }),
                      }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  vh = ({ isOpen: e, onClose: t, selectedRecord: n }) => {
    const { t: r } = Ne(),
      [s, o] = k.useState([]),
      [i, a] = k.useState(!1),
      [u, c] = k.useState(!1),
      [f, g] = k.useState("CODE"),
      [d, x] = k.useState("asc");
    k.useState(!1),
      k.useEffect(() => {
        e && n && v();
      }, [e, n]);
    const v = async () => {
        if (n)
          try {
            a(!0);
            const h = await K.getUnitPrices(n);
            o(h.map((w) => ({ ...w, selected: !1 })));
          } catch (h) {
            console.error("Failed to load unit prices:", h), o([]);
          } finally {
            a(!1);
          }
      },
      N = (h) => {
        f === h ? x(d === "asc" ? "desc" : "asc") : (g(h), x("asc"));
      },
      R = k.useMemo(
        () =>
          [...s].sort((h, w) => {
            const C = h[f],
              _ = w[f];
            if (f === "price") {
              const U = typeof C == "string" ? parseFloat(C) || 0 : Number(C),
                Z = typeof _ == "string" ? parseFloat(_) || 0 : Number(_);
              return d === "asc" ? U - Z : Z - U;
            }
            const I = String(C).toLowerCase(),
              M = String(_).toLowerCase();
            return d === "asc" ? I.localeCompare(M) : M.localeCompare(I);
          }),
        [s, f, d]
      ),
      m = (h, w) => {
        o(s.map((C) => (C.CODE === h ? { ...C, price: w } : C)));
      },
      p = async () => {
        if (n)
          try {
            c(!0), await K.updateUnitPrices(n, s), await v();
          } catch (h) {
            console.error("Failed to save unit prices:", h);
          } finally {
            c(!1);
          }
      },
      y = () => {
        if (!n) {
          alert("Please select a merged record first");
          return;
        }
        const h = document.createElement("input");
        (h.type = "file"),
          (h.accept = ".xlsx,.xls"),
          (h.onchange = async (w) => {
            var _;
            const C = (_ = w.target.files) == null ? void 0 : _[0];
            if (C)
              try {
                a(!0), await K.importUnitPricesExcel(n, C), await v();
              } catch (I) {
                console.error("Failed to import unit prices:", I),
                  alert("Failed to import unit prices file");
              } finally {
                a(!1);
              }
          }),
          h.click();
      },
      S = async () => {
        if (!n) {
          alert("Please select a merged record first");
          return;
        }
        try {
          await K.exportUnitPrices(n, s);
        } catch (h) {
          console.error("Failed to export unit prices:", h),
            alert("Failed to export unit prices");
        }
      },
      E = ({ field: h, children: w }) =>
        l.jsx("th", {
          className:
            "px-4 py-3 text-left text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors",
          onClick: () => N(h),
          children: l.jsxs("div", {
            className: "flex items-center space-x-1",
            children: [
              l.jsx("span", { children: w }),
              f === h &&
                (d === "asc"
                  ? l.jsx(Qn, { className: "h-4 w-4" })
                  : l.jsx(Bn, { className: "h-4 w-4" })),
            ],
          }),
        });
    return e
      ? l.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
          children: l.jsxs("div", {
            className:
              "bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden",
            children: [
              l.jsxs("div", {
                className: "px-6 py-4 border-b border-gray-200",
                children: [
                  l.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [
                      l.jsx("h2", {
                        className: "text-2xl font-semibold text-gray-900",
                        children: r("unitPriceSettings"),
                      }),
                      l.jsx("button", {
                        onClick: t,
                        className: "text-gray-500 hover:text-gray-700",
                        children: l.jsx(Ct, { className: "w-6 h-6" }),
                      }),
                    ],
                  }),
                  n &&
                    l.jsxs("p", {
                      className: "text-sm text-gray-600 mt-1",
                      children: ["Selected Record: ", n],
                    }),
                ],
              }),
              l.jsxs("div", {
                className: "p-6",
                children: [
                  l.jsxs("div", {
                    className: "flex justify-between items-center mb-6",
                    children: [
                      l.jsxs("div", {
                        className: "flex space-x-3",
                        children: [
                          l.jsxs("button", {
                            onClick: y,
                            disabled: !n || i,
                            className: `flex items-center px-4 py-2 rounded-lg transition-colors ${
                              !n || i
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                            }`,
                            children: [
                              l.jsx(uo, { className: "h-5 w-5 mr-2" }),
                              r("importExcel"),
                            ],
                          }),
                          l.jsxs("button", {
                            onClick: S,
                            disabled: !n || s.length === 0,
                            className: `flex items-center px-4 py-2 rounded-lg transition-colors ${
                              !n || s.length === 0
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-green-600 text-white hover:bg-green-700"
                            }`,
                            children: [
                              l.jsx(zr, { className: "h-5 w-5 mr-2" }),
                              r("exportExcel"),
                            ],
                          }),
                          l.jsxs("button", {
                            onClick: p,
                            disabled: !n || u || s.length === 0,
                            className: `flex items-center px-4 py-2 rounded-lg transition-colors ${
                              !n || u || s.length === 0
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                            }`,
                            children: [
                              l.jsx(Kn, { className: "h-5 w-5 mr-2" }),
                              r(u ? "saving" : "save"),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "text-sm text-gray-600",
                        children: [s.length, r("totalItems")],
                      }),
                    ],
                  }),
                  n
                    ? l.jsx("div", {
                        className: "overflow-x-auto max-h-96",
                        children: i
                          ? l.jsx("div", {
                              className: "text-center py-8",
                              children: r("loading"),
                            })
                          : s.length === 0
                          ? l.jsx("div", {
                              className: "text-center py-8 text-gray-500",
                              children: l.jsx("p", {
                                children:
                                  "No unit price data found for this record.",
                              }),
                            })
                          : l.jsxs("table", {
                              className: "w-full",
                              children: [
                                l.jsx("thead", {
                                  className: "bg-gray-50 sticky top-0",
                                  children: l.jsxs("tr", {
                                    children: [
                                      l.jsx(E, {
                                        field: "CODE",
                                        children: r("drugCode"),
                                      }),
                                      l.jsx(E, {
                                        field: "NAME",
                                        children: r("drugName"),
                                      }),
                                      l.jsx(E, {
                                        field: "price",
                                        children: r("unitPrice"),
                                      }),
                                    ],
                                  }),
                                }),
                                l.jsx("tbody", {
                                  className: "divide-y divide-gray-200",
                                  children: R.map((h) =>
                                    l.jsxs(
                                      "tr",
                                      {
                                        className: "hover:bg-gray-50",
                                        children: [
                                          l.jsx("td", {
                                            className:
                                              "px-4 py-3 text-sm text-gray-900",
                                            children: h.CODE,
                                          }),
                                          l.jsx("td", {
                                            className:
                                              "px-4 py-3 text-sm text-gray-900",
                                            children: h.NAME,
                                          }),
                                          l.jsx("td", {
                                            className: "px-4 py-3",
                                            children: l.jsx("div", {
                                              className: "flex items-center",
                                              children: l.jsx("input", {
                                                type: "number",
                                                step: "0.01",
                                                value: h.price,
                                                onChange: (w) =>
                                                  m(h.CODE, w.target.value),
                                                className:
                                                  "w-24 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right",
                                              }),
                                            }),
                                          }),
                                        ],
                                      },
                                      h.CODE
                                    )
                                  ),
                                }),
                              ],
                            }),
                      })
                    : l.jsx("div", {
                        className: "text-center py-8 text-gray-500",
                        children: l.jsx("p", {
                          children:
                            "Please select a merged record first to view unit price data.",
                        }),
                      }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  wh = ({ isOpen: e, onClose: t, selectedRecord: n }) => {
    const { t: r } = Ne(),
      [s, o] = k.useState([]),
      [i, a] = k.useState(!1),
      [u, c] = k.useState(!1),
      [f, g] = k.useState("CODE"),
      [d, x] = k.useState("asc");
    k.useEffect(() => {
      e && n && v();
    }, [e, n]);
    const v = async () => {
        if (n)
          try {
            a(!0),
              await new Promise((w) => setTimeout(w, 500)),
              o(
                [
                  {
                    CODE: "MED001",
                    NAME: "阿斯匹靈",
                    SKDIACODE: "SKU001",
                    QTY: 150,
                  },
                  {
                    CODE: "MED002",
                    NAME: "普拿疼",
                    SKDIACODE: "SKU002",
                    QTY: 200,
                  },
                  {
                    CODE: "MED003",
                    NAME: "維他命C",
                    SKDIACODE: "SKU003",
                    QTY: 80,
                  },
                  {
                    CODE: "MED004",
                    NAME: "胃藥",
                    SKDIACODE: "SKU004",
                    QTY: 120,
                  },
                  {
                    CODE: "MED005",
                    NAME: "感冒藥",
                    SKDIACODE: "SKU005",
                    QTY: 95,
                  },
                ].map((w) => ({ ...w, selected: !1 }))
              );
          } catch (h) {
            console.error("Failed to load usage quantities:", h), o([]);
          } finally {
            a(!1);
          }
      },
      N = (h) => {
        f === h ? x(d === "asc" ? "desc" : "asc") : (g(h), x("asc"));
      },
      R = k.useMemo(
        () =>
          [...s].sort((h, w) => {
            const C = h[f],
              _ = w[f];
            if (f === "QTY") {
              const U = typeof C == "string" ? parseFloat(C) || 0 : Number(C),
                Z = typeof _ == "string" ? parseFloat(_) || 0 : Number(_);
              return d === "asc" ? U - Z : Z - U;
            }
            const I = String(C).toLowerCase(),
              M = String(_).toLowerCase();
            return d === "asc" ? I.localeCompare(M) : M.localeCompare(I);
          }),
        [s, f, d]
      ),
      m = (h, w) => {
        o(s.map((C) => (C.CODE === h ? { ...C, QTY: w } : C)));
      },
      p = async () => {
        if (n)
          try {
            c(!0),
              await new Promise((h) => setTimeout(h, 1e3)),
              console.log("Saving usage quantities:", s),
              await v();
          } catch (h) {
            console.error("Failed to save usage quantities:", h);
          } finally {
            c(!1);
          }
      },
      y = () => {
        if (!n) {
          alert("Please select a merged record first");
          return;
        }
        const h = document.createElement("input");
        (h.type = "file"),
          (h.accept = ".xlsx,.xls"),
          (h.onchange = async (w) => {
            var _;
            const C = (_ = w.target.files) == null ? void 0 : _[0];
            if (C)
              try {
                a(!0),
                  await new Promise((I) => setTimeout(I, 1e3)),
                  console.log("Importing file:", C.name),
                  await v();
              } catch (I) {
                console.error("Failed to import usage quantities:", I),
                  alert("Failed to import usage quantities file");
              } finally {
                a(!1);
              }
          }),
          h.click();
      },
      S = async () => {
        if (!n) {
          alert("Please select a merged record first");
          return;
        }
        try {
          console.log("Exporting usage quantities:", s),
            alert("Export feature will be implemented with API");
        } catch (h) {
          console.error("Failed to export usage quantities:", h),
            alert("Failed to export usage quantities");
        }
      },
      E = ({ field: h, children: w }) =>
        l.jsx("th", {
          className:
            "px-4 py-3 text-left text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors",
          onClick: () => N(h),
          children: l.jsxs("div", {
            className: "flex items-center space-x-1",
            children: [
              l.jsx("span", { children: w }),
              f === h &&
                (d === "asc"
                  ? l.jsx(Qn, { className: "h-4 w-4" })
                  : l.jsx(Bn, { className: "h-4 w-4" })),
            ],
          }),
        });
    return e
      ? l.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
          children: l.jsxs("div", {
            className:
              "bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden",
            children: [
              l.jsxs("div", {
                className: "px-6 py-4 border-b border-gray-200",
                children: [
                  l.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [
                      l.jsx("h2", {
                        className: "text-2xl font-semibold text-gray-900",
                        children: r("usageQtySettings"),
                      }),
                      l.jsx("button", {
                        onClick: t,
                        className: "text-gray-500 hover:text-gray-700",
                        children: l.jsx(Ct, { className: "w-6 h-6" }),
                      }),
                    ],
                  }),
                  n &&
                    l.jsxs("p", {
                      className: "text-sm text-gray-600 mt-1",
                      children: ["Selected Record: ", n],
                    }),
                ],
              }),
              l.jsxs("div", {
                className: "p-6",
                children: [
                  l.jsxs("div", {
                    className: "flex justify-between items-center mb-6",
                    children: [
                      l.jsxs("div", {
                        className: "flex space-x-3",
                        children: [
                          l.jsxs("button", {
                            onClick: y,
                            disabled: !n || i,
                            className: `flex items-center px-4 py-2 rounded-lg transition-colors ${
                              !n || i
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                            }`,
                            children: [
                              l.jsx(uo, { className: "h-5 w-5 mr-2" }),
                              r("importExcel"),
                            ],
                          }),
                          l.jsxs("button", {
                            onClick: S,
                            disabled: !n || s.length === 0,
                            className: `flex items-center px-4 py-2 rounded-lg transition-colors ${
                              !n || s.length === 0
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-green-600 text-white hover:bg-green-700"
                            }`,
                            children: [
                              l.jsx(zr, { className: "h-5 w-5 mr-2" }),
                              r("exportExcel"),
                            ],
                          }),
                          l.jsxs("button", {
                            onClick: p,
                            disabled: !n || u || s.length === 0,
                            className: `flex items-center px-4 py-2 rounded-lg transition-colors ${
                              !n || u || s.length === 0
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                            }`,
                            children: [
                              l.jsx(Kn, { className: "h-5 w-5 mr-2" }),
                              r(u ? "saving" : "save"),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "text-sm text-gray-600",
                        children: [s.length, r("totalItems")],
                      }),
                    ],
                  }),
                  n
                    ? l.jsx("div", {
                        className: "overflow-x-auto max-h-96",
                        children: i
                          ? l.jsx("div", {
                              className: "text-center py-8",
                              children: r("loading"),
                            })
                          : s.length === 0
                          ? l.jsx("div", {
                              className: "text-center py-8 text-gray-500",
                              children: l.jsx("p", {
                                children:
                                  "No usage quantity data found for this record.",
                              }),
                            })
                          : l.jsxs("table", {
                              className: "w-full",
                              children: [
                                l.jsx("thead", {
                                  className: "bg-gray-50 sticky top-0",
                                  children: l.jsxs("tr", {
                                    children: [
                                      l.jsx(E, {
                                        field: "CODE",
                                        children: r("drugCode"),
                                      }),
                                      l.jsx(E, {
                                        field: "NAME",
                                        children: r("drugName"),
                                      }),
                                      l.jsx(E, {
                                        field: "SKDIACODE",
                                        children: r("productCode"),
                                      }),
                                      l.jsx(E, {
                                        field: "QTY",
                                        children: r("usageQty"),
                                      }),
                                    ],
                                  }),
                                }),
                                l.jsx("tbody", {
                                  className: "divide-y divide-gray-200",
                                  children: R.map((h) =>
                                    l.jsxs(
                                      "tr",
                                      {
                                        className: "hover:bg-gray-50",
                                        children: [
                                          l.jsx("td", {
                                            className:
                                              "px-4 py-3 text-sm text-gray-900",
                                            children: h.CODE,
                                          }),
                                          l.jsx("td", {
                                            className:
                                              "px-4 py-3 text-sm text-gray-900",
                                            children: h.NAME,
                                          }),
                                          l.jsx("td", {
                                            className:
                                              "px-4 py-3 text-sm text-gray-900",
                                            children: h.SKDIACODE,
                                          }),
                                          l.jsx("td", {
                                            className: "px-4 py-3",
                                            children: l.jsx("div", {
                                              className: "flex items-center",
                                              children: l.jsx("input", {
                                                type: "number",
                                                step: "1",
                                                value: h.QTY,
                                                onChange: (w) =>
                                                  m(h.CODE, w.target.value),
                                                className:
                                                  "w-24 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right",
                                              }),
                                            }),
                                          }),
                                        ],
                                      },
                                      h.CODE
                                    )
                                  ),
                                }),
                              ],
                            }),
                      })
                    : l.jsx("div", {
                        className: "text-center py-8 text-gray-500",
                        children: l.jsx("p", {
                          children:
                            "Please select a merged record first to view usage quantity data.",
                        }),
                      }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  Sh = ({ isOpen: e, onClose: t, selectedRecord: n }) => {
    const { t: r } = Ne(),
      [s, o] = k.useState([]),
      [i, a] = k.useState(!1),
      [u, c] = k.useState(!1),
      [f, g] = k.useState("CODE"),
      [d, x] = k.useState("asc");
    k.useState(!1),
      k.useEffect(() => {
        e && n && v();
      }, [e, n]);
    const v = async () => {
        if (n)
          try {
            a(!0);
            const h = await K.getAliases(n);
            o(h.map((w) => ({ ...w, selected: !1 })));
          } catch (h) {
            console.error("Failed to load aliases:", h), o([]);
          } finally {
            a(!1);
          }
      },
      N = (h) => {
        f === h ? x(d === "asc" ? "desc" : "asc") : (g(h), x("asc"));
      },
      R = k.useMemo(
        () =>
          [...s].sort((h, w) => {
            const C = h[f],
              _ = w[f],
              I = String(C).toLowerCase(),
              M = String(_).toLowerCase();
            return d === "asc" ? I.localeCompare(M) : M.localeCompare(I);
          }),
        [s, f, d]
      ),
      m = (h, w) => {
        o(s.map((C) => (C.CODE === h ? { ...C, note: w } : C)));
      },
      p = async () => {
        if (n)
          try {
            c(!0), await K.updateAliases(n, s), await v();
          } catch (h) {
            console.error("Failed to save aliases:", h);
          } finally {
            c(!1);
          }
      },
      y = () => {
        if (!n) {
          alert("Please select a merged record first");
          return;
        }
        const h = document.createElement("input");
        (h.type = "file"),
          (h.accept = ".xlsx,.xls"),
          (h.onchange = async (w) => {
            var _;
            const C = (_ = w.target.files) == null ? void 0 : _[0];
            if (C)
              try {
                a(!0), await K.importAliasesExcel(n, C), await v();
              } catch (I) {
                console.error("Failed to import aliases:", I),
                  alert("Failed to import aliases file");
              } finally {
                a(!1);
              }
          }),
          h.click();
      },
      S = async () => {
        if (!n) {
          alert("Please select a merged record first");
          return;
        }
        try {
          await K.exportAliases(n, s);
        } catch (h) {
          console.error("Failed to export aliases:", h),
            alert("Failed to export aliases");
        }
      },
      E = ({ field: h, children: w }) =>
        l.jsx("th", {
          className:
            "px-4 py-3 text-left text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors",
          onClick: () => N(h),
          children: l.jsxs("div", {
            className: "flex items-center space-x-1",
            children: [
              l.jsx("span", { children: w }),
              f === h &&
                (d === "asc"
                  ? l.jsx(Qn, { className: "h-4 w-4" })
                  : l.jsx(Bn, { className: "h-4 w-4" })),
            ],
          }),
        });
    return e
      ? l.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
          children: l.jsxs("div", {
            className:
              "bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden",
            children: [
              l.jsxs("div", {
                className: "px-6 py-4 border-b border-gray-200",
                children: [
                  l.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [
                      l.jsx("h2", {
                        className: "text-2xl font-semibold text-gray-900",
                        children: r("aliasSettings"),
                      }),
                      l.jsx("button", {
                        onClick: t,
                        className: "text-gray-500 hover:text-gray-700",
                        children: l.jsx(Ct, { className: "w-6 h-6" }),
                      }),
                    ],
                  }),
                  n &&
                    l.jsxs("p", {
                      className: "text-sm text-gray-600 mt-1",
                      children: ["Selected Record: ", n],
                    }),
                ],
              }),
              l.jsxs("div", {
                className: "p-6",
                children: [
                  l.jsxs("div", {
                    className: "flex justify-between items-center mb-6",
                    children: [
                      l.jsxs("div", {
                        className: "flex space-x-3",
                        children: [
                          l.jsxs("button", {
                            onClick: y,
                            disabled: !n || i,
                            className: `flex items-center px-4 py-2 rounded-lg transition-colors ${
                              !n || i
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                            }`,
                            children: [
                              l.jsx(uo, { className: "h-5 w-5 mr-2" }),
                              r("importExcel"),
                            ],
                          }),
                          l.jsxs("button", {
                            onClick: S,
                            disabled: !n || s.length === 0,
                            className: `flex items-center px-4 py-2 rounded-lg transition-colors ${
                              !n || s.length === 0
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-green-600 text-white hover:bg-green-700"
                            }`,
                            children: [
                              l.jsx(zr, { className: "h-5 w-5 mr-2" }),
                              r("exportExcel"),
                            ],
                          }),
                          l.jsxs("button", {
                            onClick: p,
                            disabled: !n || u || s.length === 0,
                            className: `flex items-center px-4 py-2 rounded-lg transition-colors ${
                              !n || u || s.length === 0
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                            }`,
                            children: [
                              l.jsx(Kn, { className: "h-5 w-5 mr-2" }),
                              r(u ? "saving" : "save"),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "text-sm text-gray-600",
                        children: [s.length, r("totalItems")],
                      }),
                    ],
                  }),
                  n
                    ? l.jsx("div", {
                        className: "overflow-x-auto max-h-96",
                        children: i
                          ? l.jsx("div", {
                              className: "text-center py-8",
                              children: r("loading"),
                            })
                          : s.length === 0
                          ? l.jsx("div", {
                              className: "text-center py-8 text-gray-500",
                              children: l.jsx("p", {
                                children:
                                  "No alias data found for this record.",
                              }),
                            })
                          : l.jsxs("table", {
                              className: "w-full",
                              children: [
                                l.jsx("thead", {
                                  className: "bg-gray-50 sticky top-0",
                                  children: l.jsxs("tr", {
                                    children: [
                                      l.jsx(E, {
                                        field: "CODE",
                                        children: r("drugCode"),
                                      }),
                                      l.jsx(E, {
                                        field: "NAME",
                                        children: r("drugName"),
                                      }),
                                      l.jsx(E, {
                                        field: "note",
                                        children: r("note"),
                                      }),
                                    ],
                                  }),
                                }),
                                l.jsx("tbody", {
                                  className: "divide-y divide-gray-200",
                                  children: R.map((h) =>
                                    l.jsxs(
                                      "tr",
                                      {
                                        className: "hover:bg-gray-50",
                                        children: [
                                          l.jsx("td", {
                                            className:
                                              "px-4 py-3 text-sm text-gray-900",
                                            children: h.CODE,
                                          }),
                                          l.jsx("td", {
                                            className:
                                              "px-4 py-3 text-sm text-gray-900",
                                            children: h.NAME,
                                          }),
                                          l.jsx("td", {
                                            className: "px-4 py-3",
                                            children: l.jsx("input", {
                                              type: "text",
                                              value: h.note,
                                              onChange: (w) =>
                                                m(h.CODE, w.target.value),
                                              className:
                                                "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                              placeholder: "Enter note...",
                                            }),
                                          }),
                                        ],
                                      },
                                      h.CODE
                                    )
                                  ),
                                }),
                              ],
                            }),
                      })
                    : l.jsx("div", {
                        className: "text-center py-8 text-gray-500",
                        children: l.jsx("p", {
                          children:
                            "Please select a merged record first to view alias data.",
                        }),
                      }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  Nh = ({ isOpen: e, onClose: t, selectedRecord: n }) => {
    const { t: r } = Ne(),
      [s, o] = k.useState({
        errorAmount: { enabled: !1, min: 0, max: 1e3 },
        errorPercentage: { enabled: !1, min: 0, max: 10 },
        errorQuantity: { enabled: !1, min: 0, max: 100 },
      }),
      [i, a] = k.useState(!1),
      [u, c] = k.useState(!1);
    k.useEffect(() => {
      e && n && f();
    }, [e, n]);
    const f = async () => {
        if (n)
          try {
            a(!0);
            const x = await K.getReconciliationSettingsByRecord(n);
            o(x);
          } catch (x) {
            console.error("Failed to load reconciliation settings:", x),
              o({
                errorAmount: { enabled: !1, min: 0, max: 1e3 },
                errorPercentage: { enabled: !1, min: 0, max: 10 },
                errorQuantity: { enabled: !1, min: 0, max: 100 },
              });
          } finally {
            a(!1);
          }
      },
      g = async () => {
        if (n)
          try {
            c(!0), await K.saveReconciliationSettingsByRecord(n, s), t();
          } catch (x) {
            console.error("Failed to save reconciliation settings:", x),
              alert("Failed to save settings. Please try again.");
          } finally {
            c(!1);
          }
      },
      d = (x, v, N) => {
        o((R) => ({ ...R, [x]: { ...R[x], [v]: N } }));
      };
    return e
      ? l.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
          children: l.jsxs("div", {
            className:
              "bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden",
            children: [
              l.jsxs("div", {
                className: "px-6 py-4 border-b border-gray-200",
                children: [
                  l.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [
                      l.jsx("h2", {
                        className: "text-2xl font-semibold text-gray-900",
                        children: r("reconciliationSettings"),
                      }),
                      l.jsx("button", {
                        onClick: t,
                        className: "text-gray-500 hover:text-gray-700",
                        children: l.jsx(Ct, { className: "w-6 h-6" }),
                      }),
                    ],
                  }),
                  n &&
                    l.jsxs("p", {
                      className: "text-sm text-gray-600 mt-1",
                      children: ["Selected Record: ", n],
                    }),
                ],
              }),
              l.jsx("div", {
                className: "p-6 overflow-y-auto max-h-[calc(90vh-180px)]",
                children: n
                  ? i
                    ? l.jsx("div", {
                        className: "text-center py-8",
                        children: r("loading"),
                      })
                    : l.jsxs("div", {
                        className: "space-y-8",
                        children: [
                          l.jsx("div", {
                            className: "bg-blue-50 rounded-lg p-6",
                            children: l.jsxs("div", {
                              className: "flex items-start space-x-3",
                              children: [
                                l.jsx(Xg, {
                                  className: "h-6 w-6 text-blue-600 mt-0.5",
                                }),
                                l.jsxs("div", {
                                  children: [
                                    l.jsx("h3", {
                                      className:
                                        "text-lg font-semibold text-blue-900 mb-3",
                                      children: r("abnormalCountDefinition"),
                                    }),
                                    l.jsxs("div", {
                                      className: "space-y-2 text-blue-800",
                                      children: [
                                        l.jsxs("p", {
                                          children: [
                                            l.jsx("strong", {
                                              children: r("errorAmount"),
                                            }),
                                            " = ",
                                            r("errorQty"),
                                            " × ",
                                            r("unitPrice"),
                                          ],
                                        }),
                                        l.jsxs("p", {
                                          children: [
                                            l.jsx("strong", {
                                              children: r("errorPercentage"),
                                            }),
                                            " = ",
                                            r("errorQty"),
                                            " ÷ ",
                                            r("usageQty"),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          l.jsxs("div", {
                            children: [
                              l.jsx("h3", {
                                className:
                                  "text-lg font-semibold text-gray-900 mb-6",
                                children: r("abnormalSettings"),
                              }),
                              l.jsxs("div", {
                                className: "space-y-6",
                                children: [
                                  l.jsxs("div", {
                                    className: "bg-gray-50 rounded-lg p-6",
                                    children: [
                                      l.jsxs("div", {
                                        className:
                                          "flex items-center justify-between mb-4",
                                        children: [
                                          l.jsx("label", {
                                            className:
                                              "text-base font-medium text-gray-900",
                                            children: r("errorAmountRange"),
                                          }),
                                          l.jsxs("div", {
                                            className: "flex items-center",
                                            children: [
                                              l.jsx("span", {
                                                className:
                                                  "mr-3 text-sm text-gray-600",
                                                children: r("calculation"),
                                              }),
                                              l.jsx("button", {
                                                onClick: () =>
                                                  d(
                                                    "errorAmount",
                                                    "enabled",
                                                    !s.errorAmount.enabled
                                                  ),
                                                className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                                  s.errorAmount.enabled
                                                    ? "bg-blue-600"
                                                    : "bg-gray-300"
                                                }`,
                                                children: l.jsx("span", {
                                                  className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                                    s.errorAmount.enabled
                                                      ? "translate-x-6"
                                                      : "translate-x-1"
                                                  }`,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      l.jsxs("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                          l.jsxs("div", {
                                            children: [
                                              l.jsx("label", {
                                                className:
                                                  "block text-sm font-medium text-gray-700 mb-1",
                                                children: r("minValue"),
                                              }),
                                              l.jsxs("div", {
                                                className: "relative",
                                                children: [
                                                  l.jsx("input", {
                                                    type: "number",
                                                    value: s.errorAmount.min,
                                                    onChange: (x) =>
                                                      d(
                                                        "errorAmount",
                                                        "min",
                                                        Number(x.target.value)
                                                      ),
                                                    disabled:
                                                      !s.errorAmount.enabled,
                                                    className:
                                                      "w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100",
                                                  }),
                                                  l.jsx("span", {
                                                    className:
                                                      "absolute right-3 top-2.5 text-sm text-gray-500",
                                                    children: "NT$",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          l.jsxs("div", {
                                            children: [
                                              l.jsx("label", {
                                                className:
                                                  "block text-sm font-medium text-gray-700 mb-1",
                                                children: r("maxValue"),
                                              }),
                                              l.jsxs("div", {
                                                className: "relative",
                                                children: [
                                                  l.jsx("input", {
                                                    type: "number",
                                                    value: s.errorAmount.max,
                                                    onChange: (x) =>
                                                      d(
                                                        "errorAmount",
                                                        "max",
                                                        Number(x.target.value)
                                                      ),
                                                    disabled:
                                                      !s.errorAmount.enabled,
                                                    className:
                                                      "w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100",
                                                  }),
                                                  l.jsx("span", {
                                                    className:
                                                      "absolute right-3 top-2.5 text-sm text-gray-500",
                                                    children: "NT$",
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
                                    className: "bg-gray-50 rounded-lg p-6",
                                    children: [
                                      l.jsxs("div", {
                                        className:
                                          "flex items-center justify-between mb-4",
                                        children: [
                                          l.jsx("label", {
                                            className:
                                              "text-base font-medium text-gray-900",
                                            children: r("errorPercentageRange"),
                                          }),
                                          l.jsxs("div", {
                                            className: "flex items-center",
                                            children: [
                                              l.jsx("span", {
                                                className:
                                                  "mr-3 text-sm text-gray-600",
                                                children: r("calculation"),
                                              }),
                                              l.jsx("button", {
                                                onClick: () =>
                                                  d(
                                                    "errorPercentage",
                                                    "enabled",
                                                    !s.errorPercentage.enabled
                                                  ),
                                                className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                                  s.errorPercentage.enabled
                                                    ? "bg-blue-600"
                                                    : "bg-gray-300"
                                                }`,
                                                children: l.jsx("span", {
                                                  className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                                    s.errorPercentage.enabled
                                                      ? "translate-x-6"
                                                      : "translate-x-1"
                                                  }`,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      l.jsxs("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                          l.jsxs("div", {
                                            children: [
                                              l.jsx("label", {
                                                className:
                                                  "block text-sm font-medium text-gray-700 mb-1",
                                                children: r("minValue"),
                                              }),
                                              l.jsxs("div", {
                                                className: "relative",
                                                children: [
                                                  l.jsx("input", {
                                                    type: "number",
                                                    step: "0.1",
                                                    value:
                                                      s.errorPercentage.min,
                                                    onChange: (x) =>
                                                      d(
                                                        "errorPercentage",
                                                        "min",
                                                        Number(x.target.value)
                                                      ),
                                                    disabled:
                                                      !s.errorPercentage
                                                        .enabled,
                                                    className:
                                                      "w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100",
                                                  }),
                                                  l.jsx("span", {
                                                    className:
                                                      "absolute right-3 top-2.5 text-sm text-gray-500",
                                                    children: "%",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          l.jsxs("div", {
                                            children: [
                                              l.jsx("label", {
                                                className:
                                                  "block text-sm font-medium text-gray-700 mb-1",
                                                children: r("maxValue"),
                                              }),
                                              l.jsxs("div", {
                                                className: "relative",
                                                children: [
                                                  l.jsx("input", {
                                                    type: "number",
                                                    step: "0.1",
                                                    value:
                                                      s.errorPercentage.max,
                                                    onChange: (x) =>
                                                      d(
                                                        "errorPercentage",
                                                        "max",
                                                        Number(x.target.value)
                                                      ),
                                                    disabled:
                                                      !s.errorPercentage
                                                        .enabled,
                                                    className:
                                                      "w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100",
                                                  }),
                                                  l.jsx("span", {
                                                    className:
                                                      "absolute right-3 top-2.5 text-sm text-gray-500",
                                                    children: "%",
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
                                    className: "bg-gray-50 rounded-lg p-6",
                                    children: [
                                      l.jsxs("div", {
                                        className:
                                          "flex items-center justify-between mb-4",
                                        children: [
                                          l.jsx("label", {
                                            className:
                                              "text-base font-medium text-gray-900",
                                            children: r("errorQuantityRange"),
                                          }),
                                          l.jsxs("div", {
                                            className: "flex items-center",
                                            children: [
                                              l.jsx("span", {
                                                className:
                                                  "mr-3 text-sm text-gray-600",
                                                children: r("calculation"),
                                              }),
                                              l.jsx("button", {
                                                onClick: () =>
                                                  d(
                                                    "errorQuantity",
                                                    "enabled",
                                                    !s.errorQuantity.enabled
                                                  ),
                                                className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                                  s.errorQuantity.enabled
                                                    ? "bg-blue-600"
                                                    : "bg-gray-300"
                                                }`,
                                                children: l.jsx("span", {
                                                  className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                                    s.errorQuantity.enabled
                                                      ? "translate-x-6"
                                                      : "translate-x-1"
                                                  }`,
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      l.jsxs("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                          l.jsxs("div", {
                                            children: [
                                              l.jsx("label", {
                                                className:
                                                  "block text-sm font-medium text-gray-700 mb-1",
                                                children: r("minValue"),
                                              }),
                                              l.jsxs("div", {
                                                className: "relative",
                                                children: [
                                                  l.jsx("input", {
                                                    type: "number",
                                                    value: s.errorQuantity.min,
                                                    onChange: (x) =>
                                                      d(
                                                        "errorQuantity",
                                                        "min",
                                                        Number(x.target.value)
                                                      ),
                                                    disabled:
                                                      !s.errorQuantity.enabled,
                                                    className:
                                                      "w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100",
                                                  }),
                                                  l.jsx("span", {
                                                    className:
                                                      "absolute right-3 top-2.5 text-sm text-gray-500",
                                                    children: "pcs",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          l.jsxs("div", {
                                            children: [
                                              l.jsx("label", {
                                                className:
                                                  "block text-sm font-medium text-gray-700 mb-1",
                                                children: r("maxValue"),
                                              }),
                                              l.jsxs("div", {
                                                className: "relative",
                                                children: [
                                                  l.jsx("input", {
                                                    type: "number",
                                                    value: s.errorQuantity.max,
                                                    onChange: (x) =>
                                                      d(
                                                        "errorQuantity",
                                                        "max",
                                                        Number(x.target.value)
                                                      ),
                                                    disabled:
                                                      !s.errorQuantity.enabled,
                                                    className:
                                                      "w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100",
                                                  }),
                                                  l.jsx("span", {
                                                    className:
                                                      "absolute right-3 top-2.5 text-sm text-gray-500",
                                                    children: "pcs",
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
                            ],
                          }),
                        ],
                      })
                  : l.jsx("div", {
                      className: "text-center py-8 text-gray-500",
                      children: l.jsx("p", {
                        children:
                          "Please select a merged record first to configure reconciliation settings.",
                      }),
                    }),
              }),
              l.jsxs("div", {
                className:
                  "px-6 py-4 border-t border-gray-200 flex justify-end space-x-3",
                children: [
                  l.jsx("button", {
                    onClick: t,
                    className:
                      "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",
                    children: r("cancel"),
                  }),
                  l.jsxs("button", {
                    onClick: g,
                    disabled: u || !n,
                    className: `flex items-center px-6 py-2 rounded-lg transition-colors ${
                      u || !n
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`,
                    children: [
                      l.jsx(Kn, { className: "h-5 w-5 mr-2" }),
                      r(u ? "saving" : "save"),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  Ja = [
    { key: "CODE", label: "藥碼", translationKey: "drugCode" },
    { key: "SKDIACODE", label: "料號", translationKey: "productCode" },
    { key: "NAME", label: "藥名", translationKey: "drugName" },
    { key: "ALIAS", label: "別名", translationKey: "alias" },
    { key: "PRICE", label: "單價", translationKey: "unitPrice" },
    { key: "STOCK", label: "庫存量", translationKey: "stockQty" },
    { key: "COUNT", label: "盤點量", translationKey: "countQty" },
    { key: "REVIEW", label: "覆盤量", translationKey: "reviewQty" },
    { key: "stockAmount", label: "庫存金額", translationKey: "stockAmount" },
    { key: "finalBalance", label: "結存金額", translationKey: "finalBalance" },
    { key: "QTY", label: "消耗量", translationKey: "usageQty" },
    { key: "ERROR", label: "誤差量", translationKey: "errorQty" },
    { key: "ERROR_MONEY", label: "誤差金額", translationKey: "errorAmount" },
    {
      key: "ERROR_PERCENT",
      label: "誤差百分率",
      translationKey: "errorPercentage",
    },
  ],
  Vo = 10,
  Eh = ({ isOpen: e, onClose: t, columnSettings: n, onSettingsChange: r }) => {
    const { t: s } = Ne(),
      [o, i] = k.useState(n);
    k.useEffect(() => {
      i(n);
    }, [n]);
    const a = Object.values(o).filter(Boolean).length,
      u = a >= Vo,
      c = (d) => {
        const x = { ...o, [d]: !o[d] };
        Object.values(x).filter(Boolean).length >= Vo && i(x);
      },
      f = () => {
        i({
          CODE: !0,
          SKDIACODE: !0,
          NAME: !0,
          ALIAS: !0,
          PRICE: !0,
          STOCK: !0,
          COUNT: !0,
          REVIEW: !0,
          stockAmount: !0,
          finalBalance: !0,
          QTY: !0,
          ERROR: !0,
          ERROR_MONEY: !0,
          ERROR_PERCENT: !0,
        });
      },
      g = () => {
        r(o), t();
      };
    return e
      ? l.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
          children: l.jsxs("div", {
            className:
              "bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col",
            children: [
              l.jsxs("div", {
                className: "px-6 py-4 border-b border-gray-200",
                children: [
                  l.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [
                      l.jsx("h2", {
                        className: "text-2xl font-semibold text-gray-900",
                        children: s("columnDisplaySettings"),
                      }),
                      l.jsx("button", {
                        onClick: t,
                        className: "text-gray-500 hover:text-gray-700",
                        children: l.jsx(Ct, { className: "w-6 h-6" }),
                      }),
                    ],
                  }),
                  l.jsx("p", {
                    className: "text-sm text-gray-600 mt-1",
                    children: s("selectColumns"),
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "px-6 py-4 overflow-y-auto",
                children: [
                  l.jsxs("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [
                      l.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [
                          l.jsxs("div", {
                            className: `text-sm ${
                              u ? "text-green-600" : "text-red-600"
                            }`,
                            children: [
                              a,
                              " / ",
                              Ja.length,
                              " ",
                              s("columnVisibility"),
                            ],
                          }),
                          !u &&
                            l.jsx("div", {
                              className: "text-sm text-red-600",
                              children: s("minimumColumnsRequired"),
                            }),
                        ],
                      }),
                      l.jsxs("button", {
                        onClick: f,
                        className:
                          "flex items-center px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors",
                        children: [
                          l.jsx(eh, { className: "h-4 w-4 mr-2" }),
                          s("resetToDefault"),
                        ],
                      }),
                    ],
                  }),
                  l.jsx("div", {
                    className: "grid grid-cols-2 gap-3 mb-4",
                    children: Ja.map((d) => {
                      const x = o[d.key],
                        v = a > Vo || !x;
                      return l.jsxs(
                        "div",
                        {
                          className: `flex items-center p-3 rounded-lg border transition-colors ${
                            x
                              ? "bg-blue-50 border-blue-200"
                              : "bg-gray-50 border-gray-200"
                          }`,
                          children: [
                            l.jsx("button", {
                              onClick: () => c(d.key),
                              disabled: !v,
                              className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                x ? "bg-blue-600" : "bg-gray-300"
                              } ${
                                v
                                  ? "cursor-pointer"
                                  : "opacity-50 cursor-not-allowed"
                              }`,
                              children: l.jsx("span", {
                                className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  x ? "translate-x-6" : "translate-x-1"
                                }`,
                              }),
                            }),
                            l.jsxs("div", {
                              className: "ml-3 flex-1",
                              children: [
                                l.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    l.jsx(Wg, {
                                      className: `h-4 w-4 mr-2 ${
                                        x ? "text-blue-600" : "text-gray-400"
                                      }`,
                                    }),
                                    l.jsx("span", {
                                      className: `text-sm font-medium ${
                                        x ? "text-blue-900" : "text-gray-600"
                                      }`,
                                      children: s(d.translationKey),
                                    }),
                                  ],
                                }),
                                l.jsx("div", {
                                  className: "text-xs text-gray-500 mt-1",
                                  children: d.label,
                                }),
                              ],
                            }),
                          ],
                        },
                        d.key
                      );
                    }),
                  }),
                ],
              }),
              l.jsxs("div", {
                className:
                  "px-6 py-4 border-t border-gray-200 flex justify-end space-x-3",
                children: [
                  l.jsx("button", {
                    onClick: t,
                    className:
                      "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",
                    children: s("cancel"),
                  }),
                  l.jsx("button", {
                    onClick: g,
                    className:
                      "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                    children: s("save"),
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  Ch = ({
    isOpen: e,
    onClose: t,
    onCreateReconciliation: n,
    selectedRecord: r,
    user: s,
    loading: o,
  }) => {
    const { t: i } = Ne(),
      [a, u] = k.useState(""),
      c = async (g) => {
        if ((g.preventDefault(), !a.trim())) {
          alert(i("pleaseEnterReconciliationName"));
          return;
        }
        try {
          await n(a.trim()), u(""), t();
        } catch {}
      },
      f = () => {
        o || (u(""), t());
      };
    return e
      ? l.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
          children: l.jsxs("div", {
            className: "bg-white rounded-lg w-full max-w-md overflow-hidden",
            children: [
              l.jsxs("div", {
                className: "px-6 py-4 border-b border-gray-200",
                children: [
                  l.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [
                      l.jsx("h2", {
                        className: "text-xl font-semibold text-gray-900",
                        children: i("createReconciliationRecord"),
                      }),
                      l.jsx("button", {
                        onClick: f,
                        disabled: o,
                        className:
                          "text-gray-500 hover:text-gray-700 disabled:opacity-50",
                        children: l.jsx(Ct, { className: "w-6 h-6" }),
                      }),
                    ],
                  }),
                  r &&
                    l.jsxs("p", {
                      className: "text-sm text-gray-600 mt-1",
                      children: [i("selectedRecord"), ": ", r],
                    }),
                ],
              }),
              l.jsxs("form", {
                onSubmit: c,
                className: "p-6",
                children: [
                  l.jsxs("div", {
                    className: "mb-6",
                    children: [
                      l.jsx("label", {
                        htmlFor: "reconciliationName",
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: i("reconciliationRecordName"),
                      }),
                      l.jsx("input", {
                        id: "reconciliationName",
                        type: "text",
                        value: a,
                        onChange: (g) => u(g.target.value),
                        placeholder: i("enterReconciliationNamePlaceholder"),
                        disabled: o,
                        className:
                          "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed",
                        required: !0,
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "flex justify-end space-x-3",
                    children: [
                      l.jsx("button", {
                        type: "button",
                        onClick: f,
                        disabled: o,
                        className:
                          "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        children: i("cancel"),
                      }),
                      l.jsxs("button", {
                        type: "submit",
                        disabled: o || !a.trim(),
                        className: `flex items-center px-6 py-2 rounded-lg transition-colors ${
                          o || !a.trim()
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`,
                        children: [
                          o
                            ? l.jsx(Pt, {
                                className: "h-5 w-5 mr-2 animate-spin",
                              })
                            : l.jsx(Td, { className: "h-5 w-5 mr-2" }),
                          i(o ? "creating" : "create"),
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
  kh = ({ isOpen: e, onClose: t, selectedRecord: n, onLockComplete: r }) => {
    const { t: s } = Ne(),
      [o, i] = k.useState([]),
      [a, u] = k.useState(!1),
      [c, f] = k.useState(!1);
    k.useEffect(() => {
      e && n && g();
    }, [e, n]);
    const g = async () => {
        if (n)
          try {
            u(!0),
              console.log("=== LOADING INVENTORY ORDERS FOR LOCKING ==="),
              console.log("Selected Record:", n);
            const v = await K.getFullInventoryBySN(n);
            if (
              (console.log("Full Inventory Response:", v),
              v.Code === 200 && v.Data && v.Data.records_Ary)
            ) {
              const N = [];
              v.Data.records_Ary.forEach((R) => {
                if (R.creat) {
                  const m = {
                    IC_SN: R.creat.IC_SN || "",
                    IC_NAME: R.creat.IC_NAME || "",
                    STATE: R.creat.STATE || "",
                  };
                  m.STATE !== "鎖定" && N.push(m);
                }
              }),
                console.log("Filtered Inventory Orders (non-locked):", N),
                i(N);
            } else
              console.log("No inventory orders found or invalid response"),
                i([]);
          } catch (v) {
            console.error("Failed to load inventory orders:", v), i([]);
          } finally {
            u(!1);
          }
      },
      d = async () => {
        if (o.length !== 0)
          try {
            f(!0),
              console.log("=== LOCKING INVENTORY ORDERS ==="),
              console.log("Orders to lock:", o);
            for (const v of o) {
              console.log(`Locking order: ${v.IC_SN}`);
              const N = await K.lockInventoryOrder(v.IC_SN);
              if (
                (console.log(`Lock response for ${v.IC_SN}:`, N),
                N.Code !== 200)
              )
                throw new Error(`Failed to lock order ${v.IC_SN}: ${N.Result}`);
            }
            console.log("✅ All inventory orders locked successfully"),
              t(),
              r();
          } catch (v) {
            console.error("Failed to lock inventory orders:", v),
              alert(
                `Failed to lock inventory orders: ${
                  v instanceof Error ? v.message : "Unknown error"
                }`
              );
          } finally {
            f(!1);
          }
      },
      x = () => {
        c || t();
      };
    return e
      ? l.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
          children: l.jsxs("div", {
            className:
              "bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden",
            children: [
              l.jsxs("div", {
                className: "px-6 py-4 border-b border-gray-200",
                children: [
                  l.jsxs("div", {
                    className: "flex justify-between items-center",
                    children: [
                      l.jsx("h2", {
                        className: "text-2xl font-semibold text-gray-900",
                        children: s("lockInventoryOrders"),
                      }),
                      l.jsx("button", {
                        onClick: x,
                        disabled: c,
                        className:
                          "text-gray-500 hover:text-gray-700 disabled:opacity-50",
                        children: l.jsx(Ct, { className: "w-6 h-6" }),
                      }),
                    ],
                  }),
                  n &&
                    l.jsxs("p", {
                      className: "text-sm text-gray-600 mt-1",
                      children: [s("selectedRecord"), ": ", n],
                    }),
                ],
              }),
              l.jsx("div", {
                className: "p-6",
                children: a
                  ? l.jsxs("div", {
                      className: "text-center py-8",
                      children: [
                        l.jsx(Pt, {
                          className:
                            "h-8 w-8 animate-spin mx-auto mb-4 text-blue-600",
                        }),
                        l.jsx("p", {
                          className: "text-gray-600",
                          children: s("loading"),
                        }),
                      ],
                    })
                  : o.length === 0
                  ? l.jsxs("div", {
                      className: "text-center py-8 text-gray-500",
                      children: [
                        l.jsx(xs, {
                          className: "h-12 w-12 mx-auto mb-4 text-gray-300",
                        }),
                        l.jsx("p", {
                          className: "text-lg",
                          children: s("noUnlockedInventoryOrders"),
                        }),
                        l.jsx("p", {
                          className: "text-sm",
                          children: s("allOrdersAlreadyLocked"),
                        }),
                      ],
                    })
                  : l.jsxs(l.Fragment, {
                      children: [
                        l.jsx("div", {
                          className: "mb-6",
                          children: l.jsx("div", {
                            className:
                              "bg-yellow-50 border border-yellow-200 rounded-lg p-4",
                            children: l.jsxs("div", {
                              className: "flex items-start",
                              children: [
                                l.jsx("div", {
                                  className: "flex-shrink-0",
                                  children: l.jsx(xs, {
                                    className: "h-5 w-5 text-yellow-600",
                                  }),
                                }),
                                l.jsx("div", {
                                  className: "ml-3",
                                  children: l.jsx("h3", {
                                    className:
                                      "text-sm font-medium text-yellow-800",
                                    children: s("lockInventoryOrdersWarning"),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        l.jsx("div", {
                          className: "overflow-x-auto max-h-96",
                          children: l.jsxs("table", {
                            className: "w-full",
                            children: [
                              l.jsx("thead", {
                                className: "bg-gray-50 sticky top-0",
                                children: l.jsxs("tr", {
                                  children: [
                                    l.jsx("th", {
                                      className:
                                        "px-4 py-3 text-left text-sm font-medium text-gray-700",
                                      children: s("inventoryOrderNumber"),
                                    }),
                                    l.jsx("th", {
                                      className:
                                        "px-4 py-3 text-left text-sm font-medium text-gray-700",
                                      children: s("inventoryOrderName"),
                                    }),
                                    l.jsx("th", {
                                      className:
                                        "px-4 py-3 text-left text-sm font-medium text-gray-700",
                                      children: s("currentState"),
                                    }),
                                  ],
                                }),
                              }),
                              l.jsx("tbody", {
                                className: "divide-y divide-gray-200",
                                children: o.map((v) =>
                                  l.jsxs(
                                    "tr",
                                    {
                                      className: "hover:bg-gray-50",
                                      children: [
                                        l.jsx("td", {
                                          className:
                                            "px-4 py-3 text-sm text-gray-900 font-mono",
                                          children: v.IC_SN,
                                        }),
                                        l.jsx("td", {
                                          className:
                                            "px-4 py-3 text-sm text-gray-900",
                                          children: v.IC_NAME,
                                        }),
                                        l.jsx("td", {
                                          className: "px-4 py-3 text-sm",
                                          children: l.jsx("span", {
                                            className: `inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                              v.STATE === "鎖定"
                                                ? "bg-red-100 text-red-800"
                                                : "bg-yellow-100 text-yellow-800"
                                            }`,
                                            children: v.STATE,
                                          }),
                                        }),
                                      ],
                                    },
                                    v.IC_SN
                                  )
                                ),
                              }),
                            ],
                          }),
                        }),
                        l.jsxs("div", {
                          className: "mt-6 flex justify-between items-center",
                          children: [
                            l.jsxs("div", {
                              className: "text-sm text-gray-600",
                              children: [o.length, " ", s("ordersToLock")],
                            }),
                            l.jsxs("div", {
                              className: "flex space-x-3",
                              children: [
                                l.jsx("button", {
                                  onClick: x,
                                  disabled: c,
                                  className:
                                    "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                  children: s("cancel"),
                                }),
                                l.jsxs("button", {
                                  onClick: d,
                                  disabled: c || o.length === 0,
                                  className: `flex items-center px-6 py-2 rounded-lg transition-colors ${
                                    c || o.length === 0
                                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                      : "bg-red-600 text-white hover:bg-red-700"
                                  }`,
                                  children: [
                                    c
                                      ? l.jsx(Pt, {
                                          className:
                                            "h-5 w-5 mr-2 animate-spin",
                                        })
                                      : l.jsx(xs, {
                                          className: "h-5 w-5 mr-2",
                                        }),
                                    s(c ? "locking" : "lockOrders"),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
              }),
            ],
          }),
        })
      : null;
  },
  _d = "reconciliation_column_settings",
  Za = () => ({
    CODE: !0,
    SKDIACODE: !0,
    NAME: !0,
    ALIAS: !0,
    PRICE: !0,
    STOCK: !0,
    COUNT: !0,
    REVIEW: !0,
    stockAmount: !0,
    finalBalance: !0,
    QTY: !0,
    ERROR: !0,
    ERROR_MONEY: !0,
    ERROR_PERCENT: !0,
  }),
  jh = () => {
    try {
      const e = localStorage.getItem(_d);
      if (e) {
        const t = JSON.parse(e),
          n = Za(),
          r = { ...n };
        return (
          Object.keys(n).forEach((s) => {
            s in t && typeof t[s] == "boolean" && (r[s] = t[s]);
          }),
          r
        );
      }
    } catch (e) {
      console.error("Failed to load column settings from localStorage:", e);
    }
    return Za();
  },
  Oh = (e) => {
    try {
      localStorage.setItem(_d, JSON.stringify(e));
    } catch (t) {
      console.error("Failed to save column settings to localStorage:", t);
    }
  };
function Rh() {
  const { t: e } = Ne(),
    [t, n] = k.useState(null),
    [r, s] = k.useState(""),
    [o, i] = k.useState("00:00:00"),
    [a, u] = k.useState(""),
    [c, f] = k.useState("23:59:59"),
    [g, d] = k.useState(""),
    [x, v] = k.useState([]),
    [N, R] = k.useState([]),
    [m, p] = k.useState([]),
    [y, S] = k.useState(""),
    [E, h] = k.useState(!1),
    [w, C] = k.useState(!1),
    [_, I] = k.useState(!1),
    [M, U] = k.useState("disabled"),
    [Z, me] = k.useState(!1),
    [ue, ye] = k.useState(null),
    [Fe, O] = k.useState(!1),
    [P, L] = k.useState(jh()),
    [B, te] = k.useState(!1),
    [ft, Ke] = k.useState(!1),
    [Yt, He] = k.useState(!1),
    [kt, dn] = k.useState(!1),
    [fo, Ee] = k.useState(!1),
    [b, G] = k.useState(!1),
    [z, ne] = k.useState(!1),
    [V, xe] = k.useState(!1);
  k.useEffect(() => {
    const D = sessionStorage.getItem("user_session");
    D && n(JSON.parse(D));
  }, []),
    k.useEffect(() => {
      const D = new Date(),
        Q = D.toISOString().split("T")[0],
        X = new Date(D);
      X.setMonth(X.getMonth() - 1);
      const se = X.toISOString().split("T")[0];
      s(se), u(Q);
    }, []),
    k.useEffect(() => {
      $d();
    }, []),
    k.useEffect(() => {
      if (x.length > 0 && r && a) {
        const D = `${r} ${o}`,
          Q = `${a} ${c}`,
          X = K.filterMergedRecordsByTime(x, D, Q);
        R(X), g && !X.find((se) => se.INV_SN === g) && d("");
      }
    }, [x, r, o, a, c, g]);
  const Wt = () => {
      sessionStorage.removeItem("user_session"), n(null);
    },
    $d = async () => {
      try {
        const D = await K.getMergedRecords();
        v(D);
      } catch (D) {
        console.error("Failed to fetch all merged records:", D), v([]);
      }
    },
    po = async () => {
      var D;
      if (g)
        try {
          console.log("=== CHECKING RECONCILIATION STATE VIA API ==="),
            console.log("Selected Record:", g);
          const Q = await K.checkReconciliationState(g);
          if (
            (console.log("API Response Code:", Q.Code),
            console.log("API Response Data:", Q.Data),
            ye(Q.Data),
            Q.Code === 200)
          ) {
            const X = (D = Q.Data[0]) == null ? void 0 : D.STATE;
            console.log("Review State:", X),
              X === "鎖定"
                ? (console.log("Setting button state to: locked"), U("locked"))
                : (console.log("Setting button state to: enter"), U("enter"));
          } else
            Q.Code === -5
              ? (console.log("Setting button state to: generate"),
                U("generate"))
              : (console.log(
                  "Setting button state to: disabled (unexpected code)"
                ),
                U("disabled"));
          console.log("=== END RECONCILIATION STATE CHECK ===");
        } catch (Q) {
          console.error("Failed to check reconciliation state:", Q),
            U("disabled"),
            ye(null);
        }
    },
    Ud = async (D) => {
      var Q;
      if (D)
        try {
          console.log("=== CHECKING RECONCILIATION STATE VIA API ==="),
            console.log("Selected Record:", D);
          const X = await K.checkReconciliationState(D);
          if (
            (console.log("API Response Code:", X.Code),
            console.log("API Response Data:", X.Data),
            ye(X.Data),
            X.Code === 200)
          ) {
            const se = (Q = X.Data[0]) == null ? void 0 : Q.STATE;
            console.log("Review State:", se),
              se === "鎖定"
                ? (console.log("Setting button state to: locked"), U("locked"))
                : (console.log("Setting button state to: enter"), U("enter"));
          } else
            X.Code === -5
              ? (console.log("Setting button state to: generate"),
                U("generate"))
              : (console.log(
                  "Setting button state to: disabled (unexpected code)"
                ),
                U("disabled"));
          console.log("=== END RECONCILIATION STATE CHECK ===");
        } catch (X) {
          console.error("Failed to check reconciliation state:", X),
            U("disabled"),
            ye(null);
        }
    },
    Ll = async () => {
      if (
        !(
          !g ||
          !confirm(
            _
              ? "Are you sure you want to regenerate the summary? This will replace the existing data."
              : "Are you sure you want to generate the summary?"
          )
        )
      )
        try {
          h(!0);
          const Q = await K.addReportBySN(g);
          p(Q), I(!0), await po();
        } catch (Q) {
          console.error("Failed to generate summary:", Q),
            p([]),
            S(""),
            alert("Failed to generate summary. Please try again.");
        } finally {
          h(!1);
        }
    },
    Dl = async () => {
      if (g)
        try {
          C(!0), await K.downloadSummaryReport(g);
        } catch (D) {
          console.error("Failed to download report:", D),
            alert("Failed to download report. Please try again.");
        } finally {
          C(!1);
        }
    },
    zd = async (D) => {
      var Q;
      if ((d(D), D)) {
        const X =
          ((Q = N.find((se) => se.INV_SN === D)) == null
            ? void 0
            : Q.INV_NAME) || "";
        S(X);
        try {
          h(!0);
          const se = await K.getReportBySN(D);
          se.length > 0 ? (p(se), I(!0)) : (p([]), I(!1)), await Ud(D);
        } catch (se) {
          console.error("Failed to load existing report:", se), p([]), I(!1);
        } finally {
          h(!1);
        }
      } else p([]), S(""), I(!1), U("disabled"), ye(null);
    },
    Vd = async () => {
      if (g) {
        if (
          (console.log("=== RECONCILIATION ACTION TRIGGERED ==="),
          console.log("Current button state:", M),
          console.log("Reconciliation data:", ue),
          M === "generate")
        )
          console.log("Opening create reconciliation modal"), ne(!0);
        else if (M === "enter")
          if (
            (console.log("=== ENTERING REVIEW SHEET ==="),
            ue && ue[0] && ue[0].IC_SN)
          ) {
            const D = ue[0].IC_SN;
            console.log("Setting IC_SN in session storage:", D),
              sessionStorage.setItem("IC_SN", D),
              console.log(
                "Redirecting to ../inventory/index.html?administrator"
              ),
              (window.location.href = "../inventory/index.html?administrator");
          } else
            console.error("IC_SN not found in reconciliation data"),
              alert(
                "Unable to enter review sheet: IC_SN not found in response data"
              );
        else
          M === "locked" &&
            (console.log("Reconciliation is locked"),
            alert(
              "This reconciliation record is locked and cannot be modified."
            ));
        console.log("=== END RECONCILIATION ACTION ===");
      }
    },
    Al = async (D) => {
      if (!(!g || !t))
        try {
          me(!0),
            console.log("=== CREATING RECONCILIATION RECORD ==="),
            console.log("Selected Record:", g),
            console.log("User Name:", t.Name),
            console.log("Reconciliation Name:", D);
          const Q = await K.generateReconciliationWithName(g, t.Name, D);
          console.log("Create Reconciliation API Response:", Q),
            await Ml(Q),
            console.log("=== END RECONCILIATION CREATION ===");
        } catch (Q) {
          console.error("🌐 Network error during reconciliation creation:", Q),
            alert(e("failedToCreateReconciliationRecord"));
        } finally {
          me(!1);
        }
    },
    Ml = async (D) => {
      D.Code === 200
        ? (console.log("✅ Reconciliation created successfully"),
          alert(e("reconciliationRecordCreatedSuccessfully")),
          console.log(
            "🔄 Refreshing reconciliation state to get updated IC_SN..."
          ),
          await po())
        : D.Code === -200 && D.Result && D.Result.includes("沒有鎖定")
        ? (console.log("🔒 Need to lock inventory orders first"), xe(!0))
        : (console.log("❌ API returned error code:", D.Code),
          alert(D.Result || "Failed to create reconciliation record"));
    },
    Bd = async () => {
      if (
        (console.log("=== LOCK COMPLETE - RETRYING RECONCILIATION ==="),
        !(!g || !t))
      )
        try {
          me(!0);
          const D = await K.generateReconciliation(g);
          console.log("Reconciliation API Response after locking:", D),
            await Ml(D);
        } catch (D) {
          console.error("Failed to generate reconciliation after locking:", D),
            alert(e("failedToCreateReconciliationRecord"));
        } finally {
          me(!1);
        }
    },
    Qd = async () => {
      if (!ue || !ue[0] || !ue[0].IC_SN) {
        console.error("No IC_SN found in reconciliation data");
        return;
      }
      const D = ue[0].IC_SN,
        Q = ue[0].STATE,
        X = Q === "鎖定";
      try {
        O(!0),
          console.log(`=== ${X ? "UNLOCKING" : "LOCKING"} INVENTORY ORDER ===`),
          console.log("IC_SN:", D),
          console.log("Current State:", Q);
        let se;
        if (
          (X
            ? (se = await K.unlockInventoryOrder(D))
            : (se = await K.lockInventoryOrder(D)),
          console.log("Lock/Unlock API Response:", se),
          se.Code === 200)
        )
          console.log(
            `✅ Inventory order ${X ? "unlocked" : "locked"} successfully`
          ),
            await po();
        else
          throw new Error(
            se.Result || `Failed to ${X ? "unlock" : "lock"} inventory order`
          );
      } catch (se) {
        console.error(
          `Failed to ${X ? "unlock" : "lock"} inventory order:`,
          se
        ),
          alert(
            `Failed to ${X ? "unlock" : "lock"} inventory order: ${
              se instanceof Error ? se.message : "Unknown error"
            }`
          );
      } finally {
        O(!1);
      }
    },
    Kd = (D) => {
      L(D), Oh(D);
    },
    Hd = () => M === "disabled" || Z || !g;
  return t
    ? l.jsxs("div", {
        className: "min-h-screen",
        children: [
          l.jsx(ah, { user: t, onLogout: Wt }),
          l.jsx(uh, {}),
          l.jsxs("main", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-10",
            children: [
              l.jsx(mh, {
                onInventorySettings: () => te(!0),
                onUnitPriceSettings: () => Ke(!0),
                onUsageQtySettings: () => He(!0),
                onAliasSettings: () => dn(!0),
                onReconciliationSettings: () => Ee(!0),
                onColumnDisplaySettings: () => G(!0),
                onGenerateSummary: Ll,
                onDownloadReport: Dl,
                isGenerateDisabled: !g || E,
                isDownloadDisabled: !g,
              }),
              l.jsx(gh, {
                startDate: r,
                startTime: o,
                endDate: a,
                endTime: c,
                onStartDateChange: s,
                onStartTimeChange: i,
                onEndDateChange: u,
                onEndTimeChange: f,
              }),
              l.jsx(hh, {
                selectedRecord: g,
                mergedRecords: N,
                onRecordChange: zd,
                onDownloadReport: Dl,
                isDownloadDisabled: !g || !_,
                isDownloadLoading: w,
                onGenerateSummary: Ll,
                isGenerateDisabled: !g || E,
                hasExistingReport: _,
              }),
              E
                ? l.jsx("div", {
                    className:
                      "bg-white rounded-lg shadow-sm border border-gray-200 p-8",
                    children: l.jsxs("div", {
                      className: "text-center",
                      children: [
                        l.jsx("div", {
                          className:
                            "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4",
                        }),
                        l.jsx("p", {
                          className: "text-gray-600",
                          children: e("loading"),
                        }),
                      ],
                    }),
                  })
                : l.jsx(yh, {
                    data: m,
                    selectedRecordName: y,
                    columnSettings: P,
                    onReconciliationAction: Vd,
                    reconciliationButtonState: M,
                    isReconciliationButtonDisabled: Hd(),
                    reconciliationLoading: Z,
                    onLockToggle: Qd,
                    lockToggleLoading: Fe,
                    reconciliationData: ue,
                    onDataUpdate: p,
                    handleCreateReconciliation: Al,
                  }),
            ],
          }),
          l.jsx(xh, { isOpen: B, onClose: () => te(!1), selectedRecord: g }),
          l.jsx(vh, { isOpen: ft, onClose: () => Ke(!1), selectedRecord: g }),
          l.jsx(wh, { isOpen: Yt, onClose: () => He(!1), selectedRecord: g }),
          l.jsx(Sh, { isOpen: kt, onClose: () => dn(!1), selectedRecord: g }),
          l.jsx(Nh, { isOpen: fo, onClose: () => Ee(!1), selectedRecord: g }),
          l.jsx(Eh, {
            isOpen: b,
            onClose: () => G(!1),
            columnSettings: P,
            onSettingsChange: Kd,
          }),
          l.jsx(Ch, {
            isOpen: z,
            onClose: () => ne(!1),
            onCreateReconciliation: Al,
            selectedRecord: g,
            user: t,
            loading: Z,
          }),
          l.jsx(kh, {
            isOpen: V,
            onClose: () => xe(!1),
            selectedRecord: g,
            onLockComplete: Bd,
          }),
          l.jsx(ph, {}),
        ],
      })
    : l.jsx(fh, { onLoginSuccess: n });
}
const A = (e) => typeof e == "string",
  er = () => {
    let e, t;
    const n = new Promise((r, s) => {
      (e = r), (t = s);
    });
    return (n.resolve = e), (n.reject = t), n;
  },
  qa = (e) => (e == null ? "" : "" + e),
  bh = (e, t, n) => {
    e.forEach((r) => {
      t[r] && (n[r] = t[r]);
    });
  },
  Ih = /###/g,
  eu = (e) => (e && e.indexOf("###") > -1 ? e.replace(Ih, ".") : e),
  tu = (e) => !e || A(e),
  mr = (e, t, n) => {
    const r = A(t) ? t.split(".") : t;
    let s = 0;
    for (; s < r.length - 1; ) {
      if (tu(e)) return {};
      const o = eu(r[s]);
      !e[o] && n && (e[o] = new n()),
        Object.prototype.hasOwnProperty.call(e, o) ? (e = e[o]) : (e = {}),
        ++s;
    }
    return tu(e) ? {} : { obj: e, k: eu(r[s]) };
  },
  nu = (e, t, n) => {
    const { obj: r, k: s } = mr(e, t, Object);
    if (r !== void 0 || t.length === 1) {
      r[s] = n;
      return;
    }
    let o = t[t.length - 1],
      i = t.slice(0, t.length - 1),
      a = mr(e, i, Object);
    for (; a.obj === void 0 && i.length; )
      (o = `${i[i.length - 1]}.${o}`),
        (i = i.slice(0, i.length - 1)),
        (a = mr(e, i, Object)),
        a && a.obj && typeof a.obj[`${a.k}.${o}`] < "u" && (a.obj = void 0);
    a.obj[`${a.k}.${o}`] = n;
  },
  Th = (e, t, n, r) => {
    const { obj: s, k: o } = mr(e, t, Object);
    (s[o] = s[o] || []), s[o].push(n);
  },
  Bs = (e, t) => {
    const { obj: n, k: r } = mr(e, t);
    if (n) return n[r];
  },
  _h = (e, t, n) => {
    const r = Bs(e, n);
    return r !== void 0 ? r : Bs(t, n);
  },
  Pd = (e, t, n) => {
    for (const r in t)
      r !== "__proto__" &&
        r !== "constructor" &&
        (r in e
          ? A(e[r]) ||
            e[r] instanceof String ||
            A(t[r]) ||
            t[r] instanceof String
            ? n && (e[r] = t[r])
            : Pd(e[r], t[r], n)
          : (e[r] = t[r]));
    return e;
  },
  pn = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Ph = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
const Lh = (e) => (A(e) ? e.replace(/[&<>"'\/]/g, (t) => Ph[t]) : e);
class Dh {
  constructor(t) {
    (this.capacity = t), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0) return n;
    const r = new RegExp(t);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(t, r),
      this.regExpQueue.push(t),
      r
    );
  }
}
const Ah = [" ", ",", "?", "!", ";"],
  Mh = new Dh(20),
  Fh = (e, t, n) => {
    (t = t || ""), (n = n || "");
    const r = Ah.filter((i) => t.indexOf(i) < 0 && n.indexOf(i) < 0);
    if (r.length === 0) return !0;
    const s = Mh.getRegExp(
      `(${r.map((i) => (i === "?" ? "\\?" : i)).join("|")})`
    );
    let o = !s.test(e);
    if (!o) {
      const i = e.indexOf(n);
      i > 0 && !s.test(e.substring(0, i)) && (o = !0);
    }
    return o;
  },
  $i = function (e, t) {
    let n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (!e) return;
    if (e[t]) return e[t];
    const r = t.split(n);
    let s = e;
    for (let o = 0; o < r.length; ) {
      if (!s || typeof s != "object") return;
      let i,
        a = "";
      for (let u = o; u < r.length; ++u)
        if ((u !== o && (a += n), (a += r[u]), (i = s[a]), i !== void 0)) {
          if (
            ["string", "number", "boolean"].indexOf(typeof i) > -1 &&
            u < r.length - 1
          )
            continue;
          o += u - o + 1;
          break;
        }
      s = i;
    }
    return s;
  },
  Qs = (e) => e && e.replace("_", "-"),
  $h = {
    type: "logger",
    log(e) {
      this.output("log", e);
    },
    warn(e) {
      this.output("warn", e);
    },
    error(e) {
      this.output("error", e);
    },
    output(e, t) {
      console && console[e] && console[e].apply(console, t);
    },
  };
class Ks {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = n.prefix || "i18next:"),
      (this.logger = t || $h),
      (this.options = n),
      (this.debug = n.debug);
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, s) {
    return s && !this.debug
      ? null
      : (A(t[0]) && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new Ks(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    });
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new Ks(this.logger, t)
    );
  }
}
var ut = new Ks();
class co {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return (
      t.split(" ").forEach((r) => {
        this.observers[r] || (this.observers[r] = new Map());
        const s = this.observers[r].get(n) || 0;
        this.observers[r].set(n, s + 1);
      }),
      this
    );
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1;
      s < n;
      s++
    )
      r[s - 1] = arguments[s];
    this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach((i) => {
        let [a, u] = i;
        for (let c = 0; c < u; c++) a(...r);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach((i) => {
          let [a, u] = i;
          for (let c = 0; c < u; c++) a.apply(a, [t, ...r]);
        });
  }
}
class ru extends co {
  constructor(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ["translation"], defaultNS: "translation" };
    super(),
      (this.data = t || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o =
        s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator,
      i =
        s.ignoreJSONStructure !== void 0
          ? s.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let a;
    t.indexOf(".") > -1
      ? (a = t.split("."))
      : ((a = [t, n]),
        r &&
          (Array.isArray(r)
            ? a.push(...r)
            : A(r) && o
            ? a.push(...r.split(o))
            : a.push(r)));
    const u = Bs(this.data, a);
    return (
      !u &&
        !n &&
        !r &&
        t.indexOf(".") > -1 &&
        ((t = a[0]), (n = a[1]), (r = a.slice(2).join("."))),
      u || !i || !A(r)
        ? u
        : $i(this.data && this.data[t] && this.data[t][n], r, o)
    );
  }
  addResource(t, n, r, s) {
    let o =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const i =
      o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let a = [t, n];
    r && (a = a.concat(i ? r.split(i) : r)),
      t.indexOf(".") > -1 && ((a = t.split(".")), (s = n), (n = a[1])),
      this.addNamespaces(n),
      nu(this.data, a, s),
      o.silent || this.emit("added", t, n, r, s);
  }
  addResources(t, n, r) {
    let s =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const o in r)
      (A(r[o]) || Array.isArray(r[o])) &&
        this.addResource(t, n, o, r[o], { silent: !0 });
    s.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, s, o) {
    let i =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      a = [t, n];
    t.indexOf(".") > -1 && ((a = t.split(".")), (s = r), (r = n), (n = a[1])),
      this.addNamespaces(n);
    let u = Bs(this.data, a) || {};
    i.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      s ? Pd(u, r, o) : (u = { ...u, ...r }),
      nu(this.data, a, u),
      i.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n],
      this.removeNamespaces(n),
      this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return (
      n || (n = this.options.defaultNS),
      this.options.compatibilityAPI === "v1"
        ? { ...this.getResource(t, n) }
        : this.getResource(t, n)
    );
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!((n && Object.keys(n)) || []).find(
      (s) => n[s] && Object.keys(n[s]).length > 0
    );
  }
  toJSON() {
    return this.data;
  }
}
var Ld = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, s) {
    return (
      e.forEach((o) => {
        this.processors[o] && (t = this.processors[o].process(t, n, r, s));
      }),
      t
    );
  },
};
const su = {};
class Hs extends co {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      bh(
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ],
        t,
        this
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = ut.create("translator"));
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    if (t == null) return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const s =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let o = n.ns || this.options.defaultNS || [];
    const i = r && t.indexOf(r) > -1,
      a =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !Fh(t, r, s);
    if (i && !a) {
      const u = t.match(this.interpolator.nestingRegexp);
      if (u && u.length > 0) return { key: t, namespaces: A(o) ? [o] : o };
      const c = t.split(r);
      (r !== s || (r === s && this.options.ns.indexOf(c[0]) > -1)) &&
        (o = c.shift()),
        (t = c.join(s));
    }
    return { key: t, namespaces: A(o) ? [o] : o };
  }
  translate(t, n, r) {
    if (
      (typeof n != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == "object" && (n = { ...n }),
      n || (n = {}),
      t == null)
    )
      return "";
    Array.isArray(t) || (t = [String(t)]);
    const s =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      o =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: i, namespaces: a } = this.extractFromKey(t[t.length - 1], n),
      u = a[a.length - 1],
      c = n.lng || this.language,
      f = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (c && c.toLowerCase() === "cimode") {
      if (f) {
        const S = n.nsSeparator || this.options.nsSeparator;
        return s
          ? {
              res: `${u}${S}${i}`,
              usedKey: i,
              exactUsedKey: i,
              usedLng: c,
              usedNS: u,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${u}${S}${i}`;
      }
      return s
        ? {
            res: i,
            usedKey: i,
            exactUsedKey: i,
            usedLng: c,
            usedNS: u,
            usedParams: this.getUsedParamsDetails(n),
          }
        : i;
    }
    const g = this.resolve(t, n);
    let d = g && g.res;
    const x = (g && g.usedKey) || i,
      v = (g && g.exactUsedKey) || i,
      N = Object.prototype.toString.apply(d),
      R = ["[object Number]", "[object Function]", "[object RegExp]"],
      m = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      p = !this.i18nFormat || this.i18nFormat.handleAsObject,
      y = !A(d) && typeof d != "boolean" && typeof d != "number";
    if (p && d && y && R.indexOf(N) < 0 && !(A(m) && Array.isArray(d))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!"
          );
        const S = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(x, d, { ...n, ns: a })
          : `key '${i} (${this.language})' returned an object instead of string.`;
        return s
          ? ((g.res = S), (g.usedParams = this.getUsedParamsDetails(n)), g)
          : S;
      }
      if (o) {
        const S = Array.isArray(d),
          E = S ? [] : {},
          h = S ? v : x;
        for (const w in d)
          if (Object.prototype.hasOwnProperty.call(d, w)) {
            const C = `${h}${o}${w}`;
            (E[w] = this.translate(C, { ...n, joinArrays: !1, ns: a })),
              E[w] === C && (E[w] = d[w]);
          }
        d = E;
      }
    } else if (p && A(m) && Array.isArray(d))
      (d = d.join(m)), d && (d = this.extendTranslation(d, t, n, r));
    else {
      let S = !1,
        E = !1;
      const h = n.count !== void 0 && !A(n.count),
        w = Hs.hasDefaultValue(n),
        C = h ? this.pluralResolver.getSuffix(c, n.count, n) : "",
        _ =
          n.ordinal && h
            ? this.pluralResolver.getSuffix(c, n.count, { ordinal: !1 })
            : "",
        I =
          h &&
          !n.ordinal &&
          n.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        M =
          (I && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${C}`] ||
          n[`defaultValue${_}`] ||
          n.defaultValue;
      !this.isValidLookup(d) && w && ((S = !0), (d = M)),
        this.isValidLookup(d) || ((E = !0), (d = i));
      const Z =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          E
            ? void 0
            : d,
        me = w && M !== d && this.options.updateMissing;
      if (E || S || me) {
        if (
          (this.logger.log(
            me ? "updateKey" : "missingKey",
            c,
            u,
            i,
            me ? M : d
          ),
          o)
        ) {
          const O = this.resolve(i, { ...n, keySeparator: !1 });
          O &&
            O.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
            );
        }
        let ue = [];
        const ye = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language
        );
        if (this.options.saveMissingTo === "fallback" && ye && ye[0])
          for (let O = 0; O < ye.length; O++) ue.push(ye[O]);
        else
          this.options.saveMissingTo === "all"
            ? (ue = this.languageUtils.toResolveHierarchy(
                n.lng || this.language
              ))
            : ue.push(n.lng || this.language);
        const Fe = (O, P, L) => {
          const B = w && L !== d ? L : Z;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(O, u, P, B, me, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(O, u, P, B, me, n),
            this.emit("missingKey", O, u, P, d);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && h
            ? ue.forEach((O) => {
                const P = this.pluralResolver.getSuffixes(O, n);
                I &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  P.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  P.push(`${this.options.pluralSeparator}zero`),
                  P.forEach((L) => {
                    Fe([O], i + L, n[`defaultValue${L}`] || M);
                  });
              })
            : Fe(ue, i, M));
      }
      (d = this.extendTranslation(d, t, n, g, r)),
        E &&
          d === i &&
          this.options.appendNamespaceToMissingKey &&
          (d = `${u}:${i}`),
        (E || S) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== "v1"
            ? (d = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${u}:${i}` : i,
                S ? d : void 0
              ))
            : (d = this.options.parseMissingKeyHandler(d)));
    }
    return s
      ? ((g.res = d), (g.usedParams = this.getUsedParamsDetails(n)), g)
      : d;
  }
  extendTranslation(t, n, r, s, o) {
    var i = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || s.usedLng,
        s.usedNS,
        s.usedKey,
        { resolved: s }
      );
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: { ...this.options.interpolation, ...r.interpolation },
        });
      const c =
        A(t) &&
        (r && r.interpolation && r.interpolation.skipOnVariables !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let f;
      if (c) {
        const d = t.match(this.interpolator.nestingRegexp);
        f = d && d.length;
      }
      let g = r.replace && !A(r.replace) ? r.replace : r;
      if (
        (this.options.interpolation.defaultVariables &&
          (g = { ...this.options.interpolation.defaultVariables, ...g }),
        (t = this.interpolator.interpolate(
          t,
          g,
          r.lng || this.language || s.usedLng,
          r
        )),
        c)
      ) {
        const d = t.match(this.interpolator.nestingRegexp),
          x = d && d.length;
        f < x && (r.nest = !1);
      }
      !r.lng &&
        this.options.compatibilityAPI !== "v1" &&
        s &&
        s.res &&
        (r.lng = this.language || s.usedLng),
        r.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (
                var d = arguments.length, x = new Array(d), v = 0;
                v < d;
                v++
              )
                x[v] = arguments[v];
              return o && o[0] === x[0] && !r.context
                ? (i.logger.warn(
                    `It seems you are nesting recursively key: ${x[0]} in key: ${n[0]}`
                  ),
                  null)
                : i.translate(...x, n);
            },
            r
          )),
        r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess,
      u = A(a) ? [a] : a;
    return (
      t != null &&
        u &&
        u.length &&
        r.applyPostProcessor !== !1 &&
        (t = Ld.handle(
          u,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...s,
                  usedParams: this.getUsedParamsDetails(r),
                },
                ...r,
              }
            : r,
          this
        )),
      t
    );
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      s,
      o,
      i,
      a;
    return (
      A(t) && (t = [t]),
      t.forEach((u) => {
        if (this.isValidLookup(r)) return;
        const c = this.extractFromKey(u, n),
          f = c.key;
        s = f;
        let g = c.namespaces;
        this.options.fallbackNS && (g = g.concat(this.options.fallbackNS));
        const d = n.count !== void 0 && !A(n.count),
          x =
            d &&
            !n.ordinal &&
            n.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          v =
            n.context !== void 0 &&
            (A(n.context) || typeof n.context == "number") &&
            n.context !== "",
          N = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng
              );
        g.forEach((R) => {
          this.isValidLookup(r) ||
            ((a = R),
            !su[`${N[0]}-${R}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(a) &&
              ((su[`${N[0]}-${R}`] = !0),
              this.logger.warn(
                `key "${s}" for languages "${N.join(
                  ", "
                )}" won't get resolved as namespace "${a}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
              )),
            N.forEach((m) => {
              if (this.isValidLookup(r)) return;
              i = m;
              const p = [f];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(p, f, m, R, n);
              else {
                let S;
                d && (S = this.pluralResolver.getSuffix(m, n.count, n));
                const E = `${this.options.pluralSeparator}zero`,
                  h = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (d &&
                    (p.push(f + S),
                    n.ordinal &&
                      S.indexOf(h) === 0 &&
                      p.push(f + S.replace(h, this.options.pluralSeparator)),
                    x && p.push(f + E)),
                  v)
                ) {
                  const w = `${f}${this.options.contextSeparator}${n.context}`;
                  p.push(w),
                    d &&
                      (p.push(w + S),
                      n.ordinal &&
                        S.indexOf(h) === 0 &&
                        p.push(w + S.replace(h, this.options.pluralSeparator)),
                      x && p.push(w + E));
                }
              }
              let y;
              for (; (y = p.pop()); )
                this.isValidLookup(r) ||
                  ((o = y), (r = this.getResource(m, R, y, n)));
            }));
        });
      }),
      { res: r, usedKey: s, exactUsedKey: o, usedLng: i, usedNS: a }
    );
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === "")
    );
  }
  getResource(t, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, n, r, s)
      : this.resourceStore.getResource(t, n, r, s);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = [
        "defaultValue",
        "ordinal",
        "context",
        "replace",
        "lng",
        "lngs",
        "fallbackLng",
        "ns",
        "keySeparator",
        "nsSeparator",
        "returnObjects",
        "returnDetails",
        "joinArrays",
        "postProcess",
        "interpolation",
      ],
      r = t.replace && !A(t.replace);
    let s = r ? t.replace : t;
    if (
      (r && typeof t.count < "u" && (s.count = t.count),
      this.options.interpolation.defaultVariables &&
        (s = { ...this.options.interpolation.defaultVariables, ...s }),
      !r)
    ) {
      s = { ...s };
      for (const o of n) delete s[o];
    }
    return s;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t)
      if (
        Object.prototype.hasOwnProperty.call(t, r) &&
        n === r.substring(0, n.length) &&
        t[r] !== void 0
      )
        return !0;
    return !1;
  }
}
const Bo = (e) => e.charAt(0).toUpperCase() + e.slice(1);
class ou {
  constructor(t) {
    (this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = ut.create("languageUtils"));
  }
  getScriptPartFromCode(t) {
    if (((t = Qs(t)), !t || t.indexOf("-") < 0)) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (((t = Qs(t)), !t || t.indexOf("-") < 0)) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (A(t) && t.indexOf("-") > -1) {
      if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u")
        try {
          let s = Intl.getCanonicalLocales(t)[0];
          if ((s && this.options.lowerCaseLng && (s = s.toLowerCase()), s))
            return s;
        } catch {}
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return (
        this.options.lowerCaseLng
          ? (r = r.map((s) => s.toLowerCase()))
          : r.length === 2
          ? ((r[0] = r[0].toLowerCase()),
            (r[1] = r[1].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = Bo(r[1].toLowerCase())))
          : r.length === 3 &&
            ((r[0] = r[0].toLowerCase()),
            r[1].length === 2 && (r[1] = r[1].toUpperCase()),
            r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = Bo(r[1].toLowerCase())),
            n.indexOf(r[2].toLowerCase()) > -1 &&
              (r[2] = Bo(r[2].toLowerCase()))),
        r.join("-")
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? t.toLowerCase()
      : t;
  }
  isSupportedCode(t) {
    return (
      (this.options.load === "languageOnly" ||
        this.options.nonExplicitSupportedLngs) &&
        (t = this.getLanguagePartFromCode(t)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(t) > -1
    );
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return (
      t.forEach((r) => {
        if (n) return;
        const s = this.formatLanguageCode(r);
        (!this.options.supportedLngs || this.isSupportedCode(s)) && (n = s);
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((r) => {
          if (n) return;
          const s = this.getLanguagePartFromCode(r);
          if (this.isSupportedCode(s)) return (n = s);
          n = this.options.supportedLngs.find((o) => {
            if (o === s) return o;
            if (
              !(o.indexOf("-") < 0 && s.indexOf("-") < 0) &&
              ((o.indexOf("-") > 0 &&
                s.indexOf("-") < 0 &&
                o.substring(0, o.indexOf("-")) === s) ||
                (o.indexOf(s) === 0 && s.length > 1))
            )
              return o;
          });
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    );
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (
      (typeof t == "function" && (t = t(n)),
      A(t) && (t = [t]),
      Array.isArray(t))
    )
      return t;
    if (!n) return t.default || [];
    let r = t[n];
    return (
      r || (r = t[this.getScriptPartFromCode(n)]),
      r || (r = t[this.formatLanguageCode(n)]),
      r || (r = t[this.getLanguagePartFromCode(n)]),
      r || (r = t.default),
      r || []
    );
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
      s = [],
      o = (i) => {
        i &&
          (this.isSupportedCode(i)
            ? s.push(i)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${i}`
              ));
      };
    return (
      A(t) && (t.indexOf("-") > -1 || t.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            o(this.formatLanguageCode(t)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            o(this.getScriptPartFromCode(t)),
          this.options.load !== "currentOnly" &&
            o(this.getLanguagePartFromCode(t)))
        : A(t) && o(this.formatLanguageCode(t)),
      r.forEach((i) => {
        s.indexOf(i) < 0 && o(this.formatLanguageCode(i));
      }),
      s
    );
  }
}
let Uh = [
    {
      lngs: [
        "ach",
        "ak",
        "am",
        "arn",
        "br",
        "fil",
        "gun",
        "ln",
        "mfe",
        "mg",
        "mi",
        "oc",
        "pt",
        "pt-BR",
        "tg",
        "tl",
        "ti",
        "tr",
        "uz",
        "wa",
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        "af",
        "an",
        "ast",
        "az",
        "bg",
        "bn",
        "ca",
        "da",
        "de",
        "dev",
        "el",
        "en",
        "eo",
        "es",
        "et",
        "eu",
        "fi",
        "fo",
        "fur",
        "fy",
        "gl",
        "gu",
        "ha",
        "hi",
        "hu",
        "hy",
        "ia",
        "it",
        "kk",
        "kn",
        "ku",
        "lb",
        "mai",
        "ml",
        "mn",
        "mr",
        "nah",
        "nap",
        "nb",
        "ne",
        "nl",
        "nn",
        "no",
        "nso",
        "pa",
        "pap",
        "pms",
        "ps",
        "pt-PT",
        "rm",
        "sco",
        "se",
        "si",
        "so",
        "son",
        "sq",
        "sv",
        "sw",
        "ta",
        "te",
        "tk",
        "ur",
        "yo",
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        "ay",
        "bo",
        "cgg",
        "fa",
        "ht",
        "id",
        "ja",
        "jbo",
        "ka",
        "km",
        "ko",
        "ky",
        "lo",
        "ms",
        "sah",
        "su",
        "th",
        "tt",
        "ug",
        "vi",
        "wo",
        "zh",
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
    { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
    { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ["fr"], nr: [1, 2], fc: 9 },
    { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ["is"], nr: [1, 2], fc: 12 },
    { lngs: ["jv"], nr: [0, 1], fc: 13 },
    { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
    { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
    { lngs: ["mk"], nr: [1, 2], fc: 17 },
    { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
    { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ["or"], nr: [2, 1], fc: 2 },
    { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
    { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
  ],
  zh = {
    1: (e) => +(e > 1),
    2: (e) => +(e != 1),
    3: (e) => 0,
    4: (e) =>
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2,
    5: (e) =>
      e == 0
        ? 0
        : e == 1
        ? 1
        : e == 2
        ? 2
        : e % 100 >= 3 && e % 100 <= 10
        ? 3
        : e % 100 >= 11
        ? 4
        : 5,
    6: (e) => (e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2),
    7: (e) =>
      e == 1
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2,
    8: (e) => (e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3),
    9: (e) => +(e >= 2),
    10: (e) => (e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4),
    11: (e) =>
      e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3,
    12: (e) => +(e % 10 != 1 || e % 100 == 11),
    13: (e) => +(e !== 0),
    14: (e) => (e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3),
    15: (e) =>
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2,
    16: (e) => (e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2),
    17: (e) => (e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1),
    18: (e) => (e == 0 ? 0 : e == 1 ? 1 : 2),
    19: (e) =>
      e == 1
        ? 0
        : e == 0 || (e % 100 > 1 && e % 100 < 11)
        ? 1
        : e % 100 > 10 && e % 100 < 20
        ? 2
        : 3,
    20: (e) => (e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2),
    21: (e) =>
      e % 100 == 1
        ? 1
        : e % 100 == 2
        ? 2
        : e % 100 == 3 || e % 100 == 4
        ? 3
        : 0,
    22: (e) =>
      e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3,
  };
const Vh = ["v1", "v2", "v3"],
  Bh = ["v4"],
  iu = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  Qh = () => {
    const e = {};
    return (
      Uh.forEach((t) => {
        t.lngs.forEach((n) => {
          e[n] = { numbers: t.nr, plurals: zh[t.fc] };
        });
      }),
      e
    );
  };
class Kh {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = t),
      (this.options = n),
      (this.logger = ut.create("pluralResolver")),
      (!this.options.compatibilityJSON ||
        Bh.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > "u" || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = "v3"),
        this.logger.error(
          "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
        )),
      (this.rules = Qh()),
      (this.pluralRulesCache = {});
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      const r = Qs(t === "dev" ? "en" : t),
        s = n.ordinal ? "ordinal" : "cardinal",
        o = JSON.stringify({ cleanedCode: r, type: s });
      if (o in this.pluralRulesCache) return this.pluralRulesCache[o];
      let i;
      try {
        i = new Intl.PluralRules(r, { type: s });
      } catch {
        if (!t.match(/-|_/)) return;
        const u = this.languageUtils.getLanguagePartFromCode(t);
        i = this.getRule(u, n);
      }
      return (this.pluralRulesCache[o] = i), i;
    }
    return (
      this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
    );
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi()
      ? r && r.resolvedOptions().pluralCategories.length > 1
      : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((s) => `${n}${s}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r
      ? this.shouldUseIntlApi()
        ? r
            .resolvedOptions()
            .pluralCategories.sort((s, o) => iu[s] - iu[o])
            .map(
              (s) =>
                `${this.options.prepend}${
                  n.ordinal ? `ordinal${this.options.prepend}` : ""
                }${s}`
            )
        : r.numbers.map((s) => this.getSuffix(t, s, n))
      : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = this.getRule(t, r);
    return s
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${
            r.ordinal ? `ordinal${this.options.prepend}` : ""
          }${s.select(n)}`
        : this.getSuffixRetroCompatible(s, n)
      : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let s = t.numbers[r];
    this.options.simplifyPluralSuffix &&
      t.numbers.length === 2 &&
      t.numbers[0] === 1 &&
      (s === 2 ? (s = "plural") : s === 1 && (s = ""));
    const o = () =>
      this.options.prepend && s.toString()
        ? this.options.prepend + s.toString()
        : s.toString();
    return this.options.compatibilityJSON === "v1"
      ? s === 1
        ? ""
        : typeof s == "number"
        ? `_plural_${s.toString()}`
        : o()
      : this.options.compatibilityJSON === "v2" ||
        (this.options.simplifyPluralSuffix &&
          t.numbers.length === 2 &&
          t.numbers[0] === 1)
      ? o()
      : this.options.prepend && r.toString()
      ? this.options.prepend + r.toString()
      : r.toString();
  }
  shouldUseIntlApi() {
    return !Vh.includes(this.options.compatibilityJSON);
  }
}
const lu = function (e, t, n) {
    let r =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
      s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      o = _h(e, t, n);
    return (
      !o && s && A(n) && ((o = $i(e, n, r)), o === void 0 && (o = $i(t, n, r))),
      o
    );
  },
  Qo = (e) => e.replace(/\$/g, "$$$$");
class Hh {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = ut.create("interpolator")),
      (this.options = t),
      (this.format = (t.interpolation && t.interpolation.format) || ((n) => n)),
      this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: s,
      prefix: o,
      prefixEscaped: i,
      suffix: a,
      suffixEscaped: u,
      formatSeparator: c,
      unescapeSuffix: f,
      unescapePrefix: g,
      nestingPrefix: d,
      nestingPrefixEscaped: x,
      nestingSuffix: v,
      nestingSuffixEscaped: N,
      nestingOptionsSeparator: R,
      maxReplaces: m,
      alwaysFormat: p,
    } = t.interpolation;
    (this.escape = n !== void 0 ? n : Lh),
      (this.escapeValue = r !== void 0 ? r : !0),
      (this.useRawValueToEscape = s !== void 0 ? s : !1),
      (this.prefix = o ? pn(o) : i || "{{"),
      (this.suffix = a ? pn(a) : u || "}}"),
      (this.formatSeparator = c || ","),
      (this.unescapePrefix = f ? "" : g || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : f || ""),
      (this.nestingPrefix = d ? pn(d) : x || pn("$t(")),
      (this.nestingSuffix = v ? pn(v) : N || pn(")")),
      (this.nestingOptionsSeparator = R || ","),
      (this.maxReplaces = m || 1e3),
      (this.alwaysFormat = p !== void 0 ? p : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) =>
      n && n.source === r ? ((n.lastIndex = 0), n) : new RegExp(r, "g");
    (this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = t(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
      ));
  }
  interpolate(t, n, r, s) {
    let o, i, a;
    const u =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      c = (x) => {
        if (x.indexOf(this.formatSeparator) < 0) {
          const m = lu(
            n,
            u,
            x,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          );
          return this.alwaysFormat
            ? this.format(m, void 0, r, { ...s, ...n, interpolationkey: x })
            : m;
        }
        const v = x.split(this.formatSeparator),
          N = v.shift().trim(),
          R = v.join(this.formatSeparator).trim();
        return this.format(
          lu(
            n,
            u,
            N,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          ),
          R,
          r,
          { ...s, ...n, interpolationkey: N }
        );
      };
    this.resetRegExp();
    const f =
        (s && s.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      g =
        s && s.interpolation && s.interpolation.skipOnVariables !== void 0
          ? s.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (x) => Qo(x) },
        {
          regex: this.regexp,
          safeValue: (x) => (this.escapeValue ? Qo(this.escape(x)) : Qo(x)),
        },
      ].forEach((x) => {
        for (a = 0; (o = x.regex.exec(t)); ) {
          const v = o[1].trim();
          if (((i = c(v)), i === void 0))
            if (typeof f == "function") {
              const R = f(t, o, s);
              i = A(R) ? R : "";
            } else if (s && Object.prototype.hasOwnProperty.call(s, v)) i = "";
            else if (g) {
              i = o[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${v} for interpolating ${t}`
              ),
                (i = "");
          else !A(i) && !this.useRawValueToEscape && (i = qa(i));
          const N = x.safeValue(i);
          if (
            ((t = t.replace(o[0], N)),
            g
              ? ((x.regex.lastIndex += i.length),
                (x.regex.lastIndex -= o[0].length))
              : (x.regex.lastIndex = 0),
            a++,
            a >= this.maxReplaces)
          )
            break;
        }
      }),
      t
    );
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      s,
      o,
      i;
    const a = (u, c) => {
      const f = this.nestingOptionsSeparator;
      if (u.indexOf(f) < 0) return u;
      const g = u.split(new RegExp(`${f}[ ]*{`));
      let d = `{${g[1]}`;
      (u = g[0]), (d = this.interpolate(d, i));
      const x = d.match(/'/g),
        v = d.match(/"/g);
      ((x && x.length % 2 === 0 && !v) || v.length % 2 !== 0) &&
        (d = d.replace(/'/g, '"'));
      try {
        (i = JSON.parse(d)), c && (i = { ...c, ...i });
      } catch (N) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${u}`,
            N
          ),
          `${u}${f}${d}`
        );
      }
      return (
        i.defaultValue &&
          i.defaultValue.indexOf(this.prefix) > -1 &&
          delete i.defaultValue,
        u
      );
    };
    for (; (s = this.nestingRegexp.exec(t)); ) {
      let u = [];
      (i = { ...r }),
        (i = i.replace && !A(i.replace) ? i.replace : i),
        (i.applyPostProcessor = !1),
        delete i.defaultValue;
      let c = !1;
      if (s[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(s[1])) {
        const f = s[1].split(this.formatSeparator).map((g) => g.trim());
        (s[1] = f.shift()), (u = f), (c = !0);
      }
      if (((o = n(a.call(this, s[1].trim(), i), i)), o && s[0] === t && !A(o)))
        return o;
      A(o) || (o = qa(o)),
        o ||
          (this.logger.warn(`missed to resolve ${s[1]} for nesting ${t}`),
          (o = "")),
        c &&
          (o = u.reduce(
            (f, g) =>
              this.format(f, g, r.lng, { ...r, interpolationkey: s[1].trim() }),
            o.trim()
          )),
        (t = t.replace(s[0], o)),
        (this.regexp.lastIndex = 0);
    }
    return t;
  }
}
const Yh = (e) => {
    let t = e.toLowerCase().trim();
    const n = {};
    if (e.indexOf("(") > -1) {
      const r = e.split("(");
      t = r[0].toLowerCase().trim();
      const s = r[1].substring(0, r[1].length - 1);
      t === "currency" && s.indexOf(":") < 0
        ? n.currency || (n.currency = s.trim())
        : t === "relativetime" && s.indexOf(":") < 0
        ? n.range || (n.range = s.trim())
        : s.split(";").forEach((i) => {
            if (i) {
              const [a, ...u] = i.split(":"),
                c = u
                  .join(":")
                  .trim()
                  .replace(/^'+|'+$/g, ""),
                f = a.trim();
              n[f] || (n[f] = c),
                c === "false" && (n[f] = !1),
                c === "true" && (n[f] = !0),
                isNaN(c) || (n[f] = parseInt(c, 10));
            }
          });
    }
    return { formatName: t, formatOptions: n };
  },
  gn = (e) => {
    const t = {};
    return (n, r, s) => {
      let o = s;
      s &&
        s.interpolationkey &&
        s.formatParams &&
        s.formatParams[s.interpolationkey] &&
        s[s.interpolationkey] &&
        (o = { ...o, [s.interpolationkey]: void 0 });
      const i = r + JSON.stringify(o);
      let a = t[i];
      return a || ((a = e(Qs(r), s)), (t[i] = a)), a(n);
    };
  };
class Wh {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = ut.create("formatter")),
      (this.options = t),
      (this.formats = {
        number: gn((n, r) => {
          const s = new Intl.NumberFormat(n, { ...r });
          return (o) => s.format(o);
        }),
        currency: gn((n, r) => {
          const s = new Intl.NumberFormat(n, { ...r, style: "currency" });
          return (o) => s.format(o);
        }),
        datetime: gn((n, r) => {
          const s = new Intl.DateTimeFormat(n, { ...r });
          return (o) => s.format(o);
        }),
        relativetime: gn((n, r) => {
          const s = new Intl.RelativeTimeFormat(n, { ...r });
          return (o) => s.format(o, r.range || "day");
        }),
        list: gn((n, r) => {
          const s = new Intl.ListFormat(n, { ...r });
          return (o) => s.format(o);
        }),
      }),
      this.init(t);
  }
  init(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    this.formatSeparator = n.interpolation.formatSeparator || ",";
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = gn(n);
  }
  format(t, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = n.split(this.formatSeparator);
    if (
      o.length > 1 &&
      o[0].indexOf("(") > 1 &&
      o[0].indexOf(")") < 0 &&
      o.find((a) => a.indexOf(")") > -1)
    ) {
      const a = o.findIndex((u) => u.indexOf(")") > -1);
      o[0] = [o[0], ...o.splice(1, a)].join(this.formatSeparator);
    }
    return o.reduce((a, u) => {
      const { formatName: c, formatOptions: f } = Yh(u);
      if (this.formats[c]) {
        let g = a;
        try {
          const d =
              (s && s.formatParams && s.formatParams[s.interpolationkey]) || {},
            x = d.locale || d.lng || s.locale || s.lng || r;
          g = this.formats[c](a, x, { ...f, ...s, ...d });
        } catch (d) {
          this.logger.warn(d);
        }
        return g;
      } else this.logger.warn(`there was no format function for ${c}`);
      return a;
    }, t);
  }
}
const Gh = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class Xh extends co {
  constructor(t, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = s),
      (this.logger = ut.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = s.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5),
      (this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(r, s.backend, s);
  }
  queueLoad(t, n, r, s) {
    const o = {},
      i = {},
      a = {},
      u = {};
    return (
      t.forEach((c) => {
        let f = !0;
        n.forEach((g) => {
          const d = `${c}|${g}`;
          !r.reload && this.store.hasResourceBundle(c, g)
            ? (this.state[d] = 2)
            : this.state[d] < 0 ||
              (this.state[d] === 1
                ? i[d] === void 0 && (i[d] = !0)
                : ((this.state[d] = 1),
                  (f = !1),
                  i[d] === void 0 && (i[d] = !0),
                  o[d] === void 0 && (o[d] = !0),
                  u[g] === void 0 && (u[g] = !0)));
        }),
          f || (a[c] = !0);
      }),
      (Object.keys(o).length || Object.keys(i).length) &&
        this.queue.push({
          pending: i,
          pendingCount: Object.keys(i).length,
          loaded: {},
          errors: [],
          callback: s,
        }),
      {
        toLoad: Object.keys(o),
        pending: Object.keys(i),
        toLoadLanguages: Object.keys(a),
        toLoadNamespaces: Object.keys(u),
      }
    );
  }
  loaded(t, n, r) {
    const s = t.split("|"),
      o = s[0],
      i = s[1];
    n && this.emit("failedLoading", o, i, n),
      !n &&
        r &&
        this.store.addResourceBundle(o, i, r, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = n ? -1 : 2),
      n && r && (this.state[t] = 0);
    const a = {};
    this.queue.forEach((u) => {
      Th(u.loaded, [o], i),
        Gh(u, t),
        n && u.errors.push(n),
        u.pendingCount === 0 &&
          !u.done &&
          (Object.keys(u.loaded).forEach((c) => {
            a[c] || (a[c] = {});
            const f = u.loaded[c];
            f.length &&
              f.forEach((g) => {
                a[c][g] === void 0 && (a[c][g] = !0);
              });
          }),
          (u.done = !0),
          u.errors.length ? u.callback(u.errors) : u.callback());
    }),
      this.emit("loaded", a),
      (this.queue = this.queue.filter((u) => !u.done));
  }
  read(t, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      o =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      i = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return i(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: s,
        wait: o,
        callback: i,
      });
      return;
    }
    this.readingCalls++;
    const a = (c, f) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const g = this.waitingReads.shift();
          this.read(g.lng, g.ns, g.fcName, g.tried, g.wait, g.callback);
        }
        if (c && f && s < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, r, s + 1, o * 2, i);
          }, o);
          return;
        }
        i(c, f);
      },
      u = this.backend[r].bind(this.backend);
    if (u.length === 2) {
      try {
        const c = u(t, n);
        c && typeof c.then == "function"
          ? c.then((f) => a(null, f)).catch(a)
          : a(null, c);
      } catch (c) {
        a(c);
      }
      return;
    }
    return u(t, n, a);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      s = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources."
        ),
        s && s()
      );
    A(t) && (t = this.languageUtils.toResolveHierarchy(t)), A(n) && (n = [n]);
    const o = this.queueLoad(t, n, r, s);
    if (!o.toLoad.length) return o.pending.length || s(), null;
    o.toLoad.forEach((i) => {
      this.loadOne(i);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, { reload: !0 }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = t.split("|"),
      s = r[0],
      o = r[1];
    this.read(s, o, "read", void 0, void 0, (i, a) => {
      i &&
        this.logger.warn(
          `${n}loading namespace ${o} for language ${s} failed`,
          i
        ),
        !i &&
          a &&
          this.logger.log(`${n}loaded namespace ${o} for language ${s}`, a),
        this.loaded(t, i, a);
    });
  }
  saveMissing(t, n, r, s, o) {
    let i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      a =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {};
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(n)
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
      );
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const u = { ...i, isUpdate: o },
          c = this.backend.create.bind(this.backend);
        if (c.length < 6)
          try {
            let f;
            c.length === 5 ? (f = c(t, n, r, s, u)) : (f = c(t, n, r, s)),
              f && typeof f.then == "function"
                ? f.then((g) => a(null, g)).catch(a)
                : a(null, f);
          } catch (f) {
            a(f);
          }
        else c(t, n, r, s, a, u);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, s);
    }
  }
}
const au = () => ({
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (e) => {
      let t = {};
      if (
        (typeof e[1] == "object" && (t = e[1]),
        A(e[1]) && (t.defaultValue = e[1]),
        A(e[2]) && (t.tDescription = e[2]),
        typeof e[2] == "object" || typeof e[3] == "object")
      ) {
        const n = e[3] || e[2];
        Object.keys(n).forEach((r) => {
          t[r] = n[r];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  uu = (e) => (
    A(e.ns) && (e.ns = [e.ns]),
    A(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]),
    A(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf("cimode") < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
    e
  ),
  os = () => {},
  Jh = (e) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
      typeof e[n] == "function" && (e[n] = e[n].bind(e));
    });
  };
class Lr extends co {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = uu(t)),
      (this.services = {}),
      (this.logger = ut),
      (this.modules = { external: [] }),
      Jh(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof n == "function" && ((r = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (A(n.ns)
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const s = au();
    (this.options = { ...s, ...this.options, ...uu(n) }),
      this.options.compatibilityAPI !== "v1" &&
        (this.options.interpolation = {
          ...s.interpolation,
          ...this.options.interpolation,
        }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator);
    const o = (f) => (f ? (typeof f == "function" ? new f() : f) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? ut.init(o(this.modules.logger), this.options)
        : ut.init(null, this.options);
      let f;
      this.modules.formatter
        ? (f = this.modules.formatter)
        : typeof Intl < "u" && (f = Wh);
      const g = new ou(this.options);
      this.store = new ru(this.options.resources, this.options);
      const d = this.services;
      (d.logger = ut),
        (d.resourceStore = this.store),
        (d.languageUtils = g),
        (d.pluralResolver = new Kh(g, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        f &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === s.interpolation.format) &&
          ((d.formatter = o(f)),
          d.formatter.init(d, this.options),
          (this.options.interpolation.format = d.formatter.format.bind(
            d.formatter
          ))),
        (d.interpolator = new Hh(this.options)),
        (d.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (d.backendConnector = new Xh(
          o(this.modules.backend),
          d.resourceStore,
          d,
          this.options
        )),
        d.backendConnector.on("*", function (x) {
          for (
            var v = arguments.length, N = new Array(v > 1 ? v - 1 : 0), R = 1;
            R < v;
            R++
          )
            N[R - 1] = arguments[R];
          t.emit(x, ...N);
        }),
        this.modules.languageDetector &&
          ((d.languageDetector = o(this.modules.languageDetector)),
          d.languageDetector.init &&
            d.languageDetector.init(d, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((d.i18nFormat = o(this.modules.i18nFormat)),
          d.i18nFormat.init && d.i18nFormat.init(this)),
        (this.translator = new Hs(this.services, this.options)),
        this.translator.on("*", function (x) {
          for (
            var v = arguments.length, N = new Array(v > 1 ? v - 1 : 0), R = 1;
            R < v;
            R++
          )
            N[R - 1] = arguments[R];
          t.emit(x, ...N);
        }),
        this.modules.external.forEach((x) => {
          x.init && x.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = os),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const f = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      );
      f.length > 0 && f[0] !== "dev" && (this.options.lng = f[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined"
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((f) => {
        this[f] = function () {
          return t.store[f](...arguments);
        };
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((f) => {
        this[f] = function () {
          return t.store[f](...arguments), t;
        };
      });
    const u = er(),
      c = () => {
        const f = (g, d) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                "init: i18next is already initialized. You should call init just once!"
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            u.resolve(d),
            r(g, d);
        };
        if (
          this.languages &&
          this.options.compatibilityAPI !== "v1" &&
          !this.isInitialized
        )
          return f(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, f);
      };
    return (
      this.options.resources || !this.options.initImmediate
        ? c()
        : setTimeout(c, 0),
      u
    );
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : os;
    const s = A(t) ? t : this.language;
    if (
      (typeof t == "function" && (r = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        s &&
        s.toLowerCase() === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r();
      const o = [],
        i = (a) => {
          if (!a || a === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(a).forEach((c) => {
            c !== "cimode" && o.indexOf(c) < 0 && o.push(c);
          });
        };
      s
        ? i(s)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((u) => i(u)),
        this.options.preload && this.options.preload.forEach((a) => i(a)),
        this.services.backendConnector.load(o, this.options.ns, (a) => {
          !a &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            r(a);
        });
    } else r(null);
  }
  reloadResources(t, n, r) {
    const s = er();
    return (
      typeof t == "function" && ((r = t), (t = void 0)),
      typeof n == "function" && ((r = n), (n = void 0)),
      t || (t = this.languages),
      n || (n = this.options.ns),
      r || (r = os),
      this.services.backendConnector.reload(t, n, (o) => {
        s.resolve(), r(o);
      }),
      s
    );
  }
  use(t) {
    if (!t)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()"
      );
    if (!t.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()"
      );
    return (
      t.type === "backend" && (this.modules.backend = t),
      (t.type === "logger" || (t.log && t.warn && t.error)) &&
        (this.modules.logger = t),
      t.type === "languageDetector" && (this.modules.languageDetector = t),
      t.type === "i18nFormat" && (this.modules.i18nFormat = t),
      t.type === "postProcessor" && Ld.addPostProcessor(t),
      t.type === "formatter" && (this.modules.formatter = t),
      t.type === "3rdParty" && this.modules.external.push(t),
      this
    );
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (
          !(["cimode", "dev"].indexOf(r) > -1) &&
          this.store.hasLanguageSomeTranslations(r)
        ) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const s = er();
    this.emit("languageChanging", t);
    const o = (u) => {
        (this.language = u),
          (this.languages = this.services.languageUtils.toResolveHierarchy(u)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(u);
      },
      i = (u, c) => {
        c
          ? (o(c),
            this.translator.changeLanguage(c),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", c),
            this.logger.log("languageChanged", c))
          : (this.isLanguageChangingTo = void 0),
          s.resolve(function () {
            return r.t(...arguments);
          }),
          n &&
            n(u, function () {
              return r.t(...arguments);
            });
      },
      a = (u) => {
        !t && !u && this.services.languageDetector && (u = []);
        const c = A(u)
          ? u
          : this.services.languageUtils.getBestMatchFromCodes(u);
        c &&
          (this.language || o(c),
          this.translator.language || this.translator.changeLanguage(c),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(c)),
          this.loadResources(c, (f) => {
            i(f, c);
          });
      };
    return (
      !t &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? a(this.services.languageDetector.detect())
        : !t &&
          this.services.languageDetector &&
          this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(a)
          : this.services.languageDetector.detect(a)
        : a(t),
      s
    );
  }
  getFixedT(t, n, r) {
    var s = this;
    const o = function (i, a) {
      let u;
      if (typeof a != "object") {
        for (
          var c = arguments.length, f = new Array(c > 2 ? c - 2 : 0), g = 2;
          g < c;
          g++
        )
          f[g - 2] = arguments[g];
        u = s.options.overloadTranslationOptionHandler([i, a].concat(f));
      } else u = { ...a };
      (u.lng = u.lng || o.lng),
        (u.lngs = u.lngs || o.lngs),
        (u.ns = u.ns || o.ns),
        u.keyPrefix !== "" && (u.keyPrefix = u.keyPrefix || r || o.keyPrefix);
      const d = s.options.keySeparator || ".";
      let x;
      return (
        u.keyPrefix && Array.isArray(i)
          ? (x = i.map((v) => `${u.keyPrefix}${d}${v}`))
          : (x = u.keyPrefix ? `${u.keyPrefix}${d}${i}` : i),
        s.t(x, u)
      );
    };
    return A(t) ? (o.lng = t) : (o.lngs = t), (o.ns = n), (o.keyPrefix = r), o;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18next was not initialized",
          this.languages
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages
        ),
        !1
      );
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      s = this.options ? this.options.fallbackLng : !1,
      o = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const i = (a, u) => {
      const c = this.services.backendConnector.state[`${a}|${u}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (n.precheck) {
      const a = n.precheck(this, i);
      if (a !== void 0) return a;
    }
    return !!(
      this.hasResourceBundle(r, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (i(r, t) && (!s || i(o, t)))
    );
  }
  loadNamespaces(t, n) {
    const r = er();
    return this.options.ns
      ? (A(t) && (t = [t]),
        t.forEach((s) => {
          this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
        }),
        this.loadResources((s) => {
          r.resolve(), n && n(s);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = er();
    A(t) && (t = [t]);
    const s = this.options.preload || [],
      o = t.filter(
        (i) =>
          s.indexOf(i) < 0 && this.services.languageUtils.isSupportedCode(i)
      );
    return o.length
      ? ((this.options.preload = s.concat(o)),
        this.loadResources((i) => {
          r.resolve(), n && n(i);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !t)
    )
      return "rtl";
    const n = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ],
      r = (this.services && this.services.languageUtils) || new ou(au());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 ||
      t.toLowerCase().indexOf("-arab") > 1
      ? "rtl"
      : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new Lr(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : os;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const s = { ...this.options, ...t, isClone: !0 },
      o = new Lr(s);
    return (
      (t.debug !== void 0 || t.prefix !== void 0) &&
        (o.logger = o.logger.clone(t)),
      ["store", "services", "language"].forEach((a) => {
        o[a] = this[a];
      }),
      (o.services = { ...this.services }),
      (o.services.utils = { hasLoadedNamespace: o.hasLoadedNamespace.bind(o) }),
      r &&
        ((o.store = new ru(this.store.data, s)),
        (o.services.resourceStore = o.store)),
      (o.translator = new Hs(o.services, s)),
      o.translator.on("*", function (a) {
        for (
          var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), f = 1;
          f < u;
          f++
        )
          c[f - 1] = arguments[f];
        o.emit(a, ...c);
      }),
      o.init(s, n),
      (o.translator.options = s),
      (o.translator.backendConnector.services.utils = {
        hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
      }),
      o
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const Re = Lr.createInstance();
Re.createInstance = Lr.createInstance;
Re.createInstance;
Re.dir;
Re.init;
Re.loadResources;
Re.reloadResources;
Re.use;
Re.changeLanguage;
Re.getFixedT;
Re.t;
Re.exists;
Re.setDefaultNamespace;
Re.hasLoadedNamespace;
Re.loadNamespaces;
Re.loadLanguages;
function Zh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dr(e) {
  "@babel/helpers - typeof";
  return (
    (Dr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Dr(e)
  );
}
function qh(e, t) {
  if (Dr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Dr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function em(e) {
  var t = qh(e, "string");
  return Dr(t) == "symbol" ? t : t + "";
}
function tm(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, em(r.key), r);
  }
}
function nm(e, t, n) {
  return (
    t && tm(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
var Dd = [],
  rm = Dd.forEach,
  sm = Dd.slice;
function om(e) {
  return (
    rm.call(sm.call(arguments, 1), function (t) {
      if (t) for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    }),
    e
  );
}
var cu = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  im = function (t, n, r) {
    var s = r || {};
    s.path = s.path || "/";
    var o = encodeURIComponent(n),
      i = "".concat(t, "=").concat(o);
    if (s.maxAge > 0) {
      var a = s.maxAge - 0;
      if (Number.isNaN(a)) throw new Error("maxAge should be a Number");
      i += "; Max-Age=".concat(Math.floor(a));
    }
    if (s.domain) {
      if (!cu.test(s.domain)) throw new TypeError("option domain is invalid");
      i += "; Domain=".concat(s.domain);
    }
    if (s.path) {
      if (!cu.test(s.path)) throw new TypeError("option path is invalid");
      i += "; Path=".concat(s.path);
    }
    if (s.expires) {
      if (typeof s.expires.toUTCString != "function")
        throw new TypeError("option expires is invalid");
      i += "; Expires=".concat(s.expires.toUTCString());
    }
    if (
      (s.httpOnly && (i += "; HttpOnly"),
      s.secure && (i += "; Secure"),
      s.sameSite)
    ) {
      var u =
        typeof s.sameSite == "string" ? s.sameSite.toLowerCase() : s.sameSite;
      switch (u) {
        case !0:
          i += "; SameSite=Strict";
          break;
        case "lax":
          i += "; SameSite=Lax";
          break;
        case "strict":
          i += "; SameSite=Strict";
          break;
        case "none":
          i += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return i;
  },
  du = {
    create: function (t, n, r, s) {
      var o =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: "/", sameSite: "strict" };
      r &&
        ((o.expires = new Date()),
        o.expires.setTime(o.expires.getTime() + r * 60 * 1e3)),
        s && (o.domain = s),
        (document.cookie = im(t, encodeURIComponent(n), o));
    },
    read: function (t) {
      for (
        var n = "".concat(t, "="), r = document.cookie.split(";"), s = 0;
        s < r.length;
        s++
      ) {
        for (var o = r[s]; o.charAt(0) === " "; ) o = o.substring(1, o.length);
        if (o.indexOf(n) === 0) return o.substring(n.length, o.length);
      }
      return null;
    },
    remove: function (t) {
      this.create(t, "", -1);
    },
  },
  lm = {
    name: "cookie",
    lookup: function (t) {
      var n;
      if (t.lookupCookie && typeof document < "u") {
        var r = du.read(t.lookupCookie);
        r && (n = r);
      }
      return n;
    },
    cacheUserLanguage: function (t, n) {
      n.lookupCookie &&
        typeof document < "u" &&
        du.create(
          n.lookupCookie,
          t,
          n.cookieMinutes,
          n.cookieDomain,
          n.cookieOptions
        );
    },
  },
  am = {
    name: "querystring",
    lookup: function (t) {
      var n;
      if (typeof window < "u") {
        var r = window.location.search;
        !window.location.search &&
          window.location.hash &&
          window.location.hash.indexOf("?") > -1 &&
          (r = window.location.hash.substring(
            window.location.hash.indexOf("?")
          ));
        for (
          var s = r.substring(1), o = s.split("&"), i = 0;
          i < o.length;
          i++
        ) {
          var a = o[i].indexOf("=");
          if (a > 0) {
            var u = o[i].substring(0, a);
            u === t.lookupQuerystring && (n = o[i].substring(a + 1));
          }
        }
      }
      return n;
    },
  },
  tr = null,
  fu = function () {
    if (tr !== null) return tr;
    try {
      tr = window !== "undefined" && window.localStorage !== null;
      var t = "i18next.translate.boo";
      window.localStorage.setItem(t, "foo"), window.localStorage.removeItem(t);
    } catch {
      tr = !1;
    }
    return tr;
  },
  um = {
    name: "localStorage",
    lookup: function (t) {
      var n;
      if (t.lookupLocalStorage && fu()) {
        var r = window.localStorage.getItem(t.lookupLocalStorage);
        r && (n = r);
      }
      return n;
    },
    cacheUserLanguage: function (t, n) {
      n.lookupLocalStorage &&
        fu() &&
        window.localStorage.setItem(n.lookupLocalStorage, t);
    },
  },
  nr = null,
  pu = function () {
    if (nr !== null) return nr;
    try {
      nr = window !== "undefined" && window.sessionStorage !== null;
      var t = "i18next.translate.boo";
      window.sessionStorage.setItem(t, "foo"),
        window.sessionStorage.removeItem(t);
    } catch {
      nr = !1;
    }
    return nr;
  },
  cm = {
    name: "sessionStorage",
    lookup: function (t) {
      var n;
      if (t.lookupSessionStorage && pu()) {
        var r = window.sessionStorage.getItem(t.lookupSessionStorage);
        r && (n = r);
      }
      return n;
    },
    cacheUserLanguage: function (t, n) {
      n.lookupSessionStorage &&
        pu() &&
        window.sessionStorage.setItem(n.lookupSessionStorage, t);
    },
  },
  dm = {
    name: "navigator",
    lookup: function (t) {
      var n = [];
      if (typeof navigator < "u") {
        if (navigator.languages)
          for (var r = 0; r < navigator.languages.length; r++)
            n.push(navigator.languages[r]);
        navigator.userLanguage && n.push(navigator.userLanguage),
          navigator.language && n.push(navigator.language);
      }
      return n.length > 0 ? n : void 0;
    },
  },
  fm = {
    name: "htmlTag",
    lookup: function (t) {
      var n,
        r =
          t.htmlTag ||
          (typeof document < "u" ? document.documentElement : null);
      return (
        r &&
          typeof r.getAttribute == "function" &&
          (n = r.getAttribute("lang")),
        n
      );
    },
  },
  pm = {
    name: "path",
    lookup: function (t) {
      var n;
      if (typeof window < "u") {
        var r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
        if (r instanceof Array)
          if (typeof t.lookupFromPathIndex == "number") {
            if (typeof r[t.lookupFromPathIndex] != "string") return;
            n = r[t.lookupFromPathIndex].replace("/", "");
          } else n = r[0].replace("/", "");
      }
      return n;
    },
  },
  gm = {
    name: "subdomain",
    lookup: function (t) {
      var n =
          typeof t.lookupFromSubdomainIndex == "number"
            ? t.lookupFromSubdomainIndex + 1
            : 1,
        r =
          typeof window < "u" &&
          window.location &&
          window.location.hostname &&
          window.location.hostname.match(
            /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i
          );
      if (r) return r[n];
    },
  },
  Ad = !1;
try {
  document.cookie, (Ad = !0);
} catch {}
var Md = [
  "querystring",
  "cookie",
  "localStorage",
  "sessionStorage",
  "navigator",
  "htmlTag",
];
Ad || Md.splice(1, 1);
function hm() {
  return {
    order: Md,
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    convertDetectedLanguage: function (t) {
      return t;
    },
  };
}
var Fd = (function () {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Zh(this, e),
      (this.type = "languageDetector"),
      (this.detectors = {}),
      this.init(t, n);
  }
  return nm(e, [
    {
      key: "init",
      value: function (n) {
        var r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          s =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        (this.services = n || { languageUtils: {} }),
          (this.options = om(r, this.options || {}, hm())),
          typeof this.options.convertDetectedLanguage == "string" &&
            this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
            (this.options.convertDetectedLanguage = function (o) {
              return o.replace("-", "_");
            }),
          this.options.lookupFromUrlIndex &&
            (this.options.lookupFromPathIndex =
              this.options.lookupFromUrlIndex),
          (this.i18nOptions = s),
          this.addDetector(lm),
          this.addDetector(am),
          this.addDetector(um),
          this.addDetector(cm),
          this.addDetector(dm),
          this.addDetector(fm),
          this.addDetector(pm),
          this.addDetector(gm);
      },
    },
    {
      key: "addDetector",
      value: function (n) {
        return (this.detectors[n.name] = n), this;
      },
    },
    {
      key: "detect",
      value: function (n) {
        var r = this;
        n || (n = this.options.order);
        var s = [];
        return (
          n.forEach(function (o) {
            if (r.detectors[o]) {
              var i = r.detectors[o].lookup(r.options);
              i && typeof i == "string" && (i = [i]), i && (s = s.concat(i));
            }
          }),
          (s = s.map(function (o) {
            return r.options.convertDetectedLanguage(o);
          })),
          this.services.languageUtils.getBestMatchFromCodes
            ? s
            : s.length > 0
            ? s[0]
            : null
        );
      },
    },
    {
      key: "cacheUserLanguage",
      value: function (n, r) {
        var s = this;
        r || (r = this.options.caches),
          r &&
            ((this.options.excludeCacheFor &&
              this.options.excludeCacheFor.indexOf(n) > -1) ||
              r.forEach(function (o) {
                s.detectors[o] &&
                  s.detectors[o].cacheUserLanguage(n, s.options);
              }));
      },
    },
  ]);
})();
Fd.type = "languageDetector";
const mm = {
  en: {
    translation: {
      inventoryMerge: "Inventory Review",
      company: "Hongsen Technology",
      loading: "Loading",
      tabs: {
        manage: "Management",
        merge: "Merge",
        review: "Review",
        report: "Report",
        final: "Final",
      },
      copyright: "Copyright ©2025 鴻森智能科技",
      logout: "Logout",
      login: "Login",
      userId: "ID",
      password: "Password",
      loginError: "Login failed. Please try again.",
      login_id: "Enter account",
      login_password: "Enter password",
      welcomeMessage: "Welcome to Inventory Management System",
      pageDescription: "Your clean template is ready for new features",
      buildYourFeature:
        "This is your clean workspace. Start building your new feature here!",
      timeType: "Time Type",
      ctTime: "Create Time",
      searchConditions: "Search Conditions",
      timeRange: "Time Range",
      startTime: "Start Time",
      endTime: "End Time",
      expand: "Expand",
      collapse: "Collapse",
      mergedRecord: "Merged Record",
      selectMergedRecord: "Select Merged Record",
      selectRecord: "Please select a record",
      selectedRecord: "Selected Record",
      inventorySettings: "Inventory Settings",
      unitPriceSettings: "Unit Price Settings",
      usageQtySettings: "Usage Quantity Settings",
      aliasSettings: "Alias Settings",
      reconciliationSettings: "Reconciliation Suggestion Settings",
      columnDisplaySettings: "Column Display Settings",
      generateSummary: "Generate Summary",
      regenerateSummary: "Regenerate Summary",
      downloadReport: "Export",
      enterReview: "Enter Review",
      generateReconciliation: "Generate Reconciliation",
      generateReviewSheet: "Generate Review Sheet",
      enterReviewSheet: "Enter Review Sheet",
      lockedReviewSheet: "Locked Review Sheet",
      createReconciliationRecord: "Create Reconciliation Record",
      reconciliationRecordName: "Reconciliation Record Name",
      enterReconciliationNamePlaceholder:
        "Please enter reconciliation record name",
      create: "Create",
      creating: "Creating...",
      pleaseEnterReconciliationName:
        "Please enter a reconciliation record name",
      reconciliationRecordCreatedSuccessfully:
        "Reconciliation record created successfully!",
      failedToCreateReconciliationRecord:
        "Failed to create reconciliation record. Please try again.",
      reconciliationSummary: "Reconciliation Summary",
      totalItems: "entries",
      noSummaryData: "No summary data available",
      generateSummaryFirst: "Please generate summary first",
      searchPlaceholder: "Search drug code or name...",
      noSearchResults: "No data found matching search criteria",
      noData: "No data",
      noReviewRecordsFound: "No review records found",
      index: "Index",
      drugCode: "Drug Code",
      productCode: "Product Code",
      drugName: "Drug Name",
      alias: "Alias",
      unitPrice: "Unit Price",
      stockQty: "Stock Qty",
      countQty: "Count Qty",
      reviewQty: "Review Qty",
      stockAmount: "Stock Amount",
      finalBalance: "Final Balance",
      usageQty: "Usage Qty",
      errorQty: "Error Qty",
      errorAmount: "Error Amount",
      errorPercentage: "Error %",
      reviewStatus: "Review",
      notes: "Notes",
      importExcel: "Import",
      exportExcel: "Export",
      note: "Note",
      save: "Save",
      saving: "Saving...",
      showing: "Showing",
      of: "of",
      records: "records",
      previous: "Previous",
      next: "Next",
      columnVisibility: "Column Visibility",
      selectColumns: "Select columns to display",
      minimumColumnsRequired: "At least 10 columns must be enabled",
      resetToDefault: "Reset to Default",
      abnormalCountDefinition: "Abnormal Count Definition",
      abnormalSettings: "Abnormal Settings",
      errorAmountRange: "Error Amount Range",
      errorPercentageRange: "Error Percentage Range",
      errorQuantityRange: "Error Quantity Range",
      calculation: "Calculation",
      minValue: "Min Value",
      maxValue: "Max Value",
      cancel: "Cancel",
      lockInventoryOrders: "Lock Inventory Orders",
      noUnlockedInventoryOrders: "No Unlocked Inventory Orders",
      allOrdersAlreadyLocked: "All inventory orders are already locked",
      lockInventoryOrdersWarning: "Lock Required Before Reconciliation",
      lockInventoryOrdersDescription:
        "The following inventory orders must be locked before generating the reconciliation record. This action cannot be undone.",
      inventoryOrderNumber: "Order Number",
      inventoryOrderName: "Order Name",
      currentState: "Current State",
      ordersToLock: "orders to lock",
      lockOrders: "Lock Orders",
      locking: "Locking...",
      inventoryOrdersLockedSuccessfully:
        "Inventory orders locked successfully!",
      lockStatus: "Lock Status",
      locked: "Locked",
      unlocked: "Open",
      lockAction: "Lock",
      unlockAction: "Unlock",
      unlocking: "Unlocking...",
    },
  },
  zh: {
    translation: {
      inventoryMerge: "覆盤管理",
      company: "鴻森智能科技",
      loading: "載入中",
      tabs: {
        manage: "管理",
        merge: "合併",
        review: "覆盤",
        report: "報表",
        final: "定盤",
      },
      copyright: "Copyright ©2025 鴻森智能科技",
      logout: "登出",
      login: "登入",
      userId: "帳號",
      password: "密碼",
      loginError: "登入失敗，請重試。",
      login_id: "請輸入帳號",
      login_password: "請輸入密碼",
      welcomeMessage: "歡迎使用庫存管理系統",
      pageDescription: "您的乾淨模板已準備好用於新功能",
      buildYourFeature: "這是您的乾淨工作區。在此開始建立您的新功能！",
      timeType: "時間類型",
      ctTime: "建立時間",
      searchConditions: "搜尋條件",
      timeRange: "時間區間",
      startTime: "開始時間",
      endTime: "結束時間",
      expand: "展開",
      collapse: "收合",
      mergedRecord: "合併單據",
      selectMergedRecord: "選擇合併單據",
      selectRecord: "請選擇單據",
      selectedRecord: "合併單單號",
      inventorySettings: "庫存設定",
      unitPriceSettings: "單價設定",
      usageQtySettings: "消耗量設定",
      aliasSettings: "別名設定",
      reconciliationSettings: "覆盤建議設定",
      columnDisplaySettings: "欄位顯示設定",
      generateSummary: "生成總表",
      regenerateSummary: "重新生成總表",
      downloadReport: "匯出",
      enterReview: "進入覆盤",
      generateReconciliation: "生成覆盤單",
      generateReviewSheet: "生成覆盤單",
      enterReviewSheet: "進入覆盤單",
      lockedReviewSheet: "覆盤單已鎖定",
      createReconciliationRecord: "新增覆盤單",
      reconciliationRecordName: "覆盤單名稱",
      enterReconciliationNamePlaceholder: "請輸入覆盤單名稱",
      create: "建立",
      creating: "建立中...",
      pleaseEnterReconciliationName: "請輸入覆盤單名稱",
      reconciliationRecordCreatedSuccessfully: "覆盤單建立成功！",
      failedToCreateReconciliationRecord: "建立覆盤單失敗，請重試。",
      reconciliationSummary: "覆盤彙總表",
      totalItems: "筆",
      noSummaryData: "無彙總資料",
      generateSummaryFirst: "請先產生彙總表",
      searchPlaceholder: "搜尋藥碼或藥名...",
      noSearchResults: "沒有找到符合搜尋條件的資料",
      noData: "無資料",
      noReviewRecordsFound: "沒有找到覆盤記錄",
      index: "項次",
      drugCode: "藥碼",
      productCode: "料號",
      drugName: "藥名",
      alias: "別名",
      unitPrice: "單價",
      stockQty: "庫存量",
      countQty: "盤點量",
      reviewQty: "覆盤量",
      stockAmount: "庫存金額",
      finalBalance: "結存金額",
      usageQty: "消耗量",
      errorQty: "誤差量",
      errorAmount: "誤差金額",
      errorPercentage: "誤差百分率",
      reviewStatus: "覆盤",
      notes: "備註",
      importExcel: "匯入",
      exportExcel: "匯出",
      note: "備註",
      save: "儲存",
      saving: "儲存中...",
      showing: "顯示",
      of: "共",
      records: "筆記錄",
      previous: "上一頁",
      next: "下一頁",
      columnVisibility: "欄位顯示",
      selectColumns: "選擇要顯示的欄位",
      minimumColumnsRequired: "至少需要啟用10個欄位",
      resetToDefault: "重設為預設值",
      abnormalCountDefinition: "異常盤點定義",
      abnormalSettings: "異常設定",
      errorAmountRange: "誤差金額範圍",
      errorPercentageRange: "誤差百分比範圍",
      errorQuantityRange: "誤差數量範圍",
      calculation: "計算",
      minValue: "最小值",
      maxValue: "最大值",
      cancel: "取消",
      lockInventoryOrders: "鎖定盤點單",
      noUnlockedInventoryOrders: "無未鎖定的盤點單",
      allOrdersAlreadyLocked: "所有盤點單都已鎖定",
      lockInventoryOrdersWarning: "生成覆盤單前需要鎖定包含的盤點單",
      lockInventoryOrdersDescription: "",
      inventoryOrderNumber: "盤點單號",
      inventoryOrderName: "盤點單名稱",
      currentState: "狀態",
      ordersToLock: "筆單據待鎖定",
      lockOrders: "鎖定單據",
      locking: "鎖定中...",
      inventoryOrdersLockedSuccessfully: "盤點單鎖定成功！",
      lockStatus: "鎖定狀態",
      locked: "鎖定",
      unlocked: "開放中",
      lockAction: "鎖定",
      unlockAction: "解鎖",
      unlocking: "解鎖中...",
      adjustReviewItems: "調整覆盤項目",
      saveReviewItems: "儲存覆盤項目",
      reviewItemsUpdatedSuccessfully: "覆盤項目更新成功！",
      failedToUpdateReviewItems: "更新覆盤項目失敗，請重試。",
    },
  },
};
Re.use(Fd)
  .use(Ag)
  .init({
    resources: mm,
    fallbackLng: "zh",
    interpolation: { escapeValue: !1 },
  });
jd(document.getElementById("root")).render(
  l.jsx(k.StrictMode, { children: l.jsx(Rh, {}) })
);
