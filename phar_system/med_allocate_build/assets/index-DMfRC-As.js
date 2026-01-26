function If(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
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
function Af(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Yu = { exports: {} },
  vo = {},
  qu = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zr = Symbol.for("react.element"),
  Hf = Symbol.for("react.portal"),
  Wf = Symbol.for("react.fragment"),
  Uf = Symbol.for("react.strict_mode"),
  Bf = Symbol.for("react.profiler"),
  Vf = Symbol.for("react.provider"),
  Qf = Symbol.for("react.context"),
  Yf = Symbol.for("react.forward_ref"),
  qf = Symbol.for("react.suspense"),
  Gf = Symbol.for("react.memo"),
  Kf = Symbol.for("react.lazy"),
  Na = Symbol.iterator;
function Xf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Na && e[Na]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Gu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ku = Object.assign,
  Xu = {};
function nr(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Xu),
    (this.updater = n || Gu));
}
nr.prototype.isReactComponent = {};
nr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
nr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ju() {}
Ju.prototype = nr.prototype;
function ks(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Xu),
    (this.updater = n || Gu));
}
var Ns = (ks.prototype = new Ju());
Ns.constructor = ks;
Ku(Ns, nr.prototype);
Ns.isPureReactComponent = !0;
var ja = Array.isArray,
  Zu = Object.prototype.hasOwnProperty,
  js = { current: null },
  ec = { key: !0, ref: !0, __self: !0, __source: !0 };
function tc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Zu.call(t, r) && !ec.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: Zr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: js.current,
  };
}
function Jf(e, t) {
  return {
    $$typeof: Zr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function bs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zr;
}
function Zf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ba = /\/+/g;
function Wo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Zf("" + e.key)
    : t.toString(36);
}
function Pl(e, t, n, r, l) {
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
          case Zr:
          case Hf:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Wo(i, 0) : r),
      ja(l)
        ? ((n = ""),
          e != null && (n = e.replace(ba, "$&/") + "/"),
          Pl(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (bs(l) &&
            (l = Jf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ba, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), ja(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + Wo(o, a);
      i += Pl(o, t, n, u, l);
    }
  else if (((u = Xf(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      ((o = o.value), (u = r + Wo(o, a++)), (i += Pl(o, t, n, u, l)));
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
function al(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Pl(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function ep(e) {
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
var Te = { current: null },
  Tl = { transition: null },
  tp = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: Tl,
    ReactCurrentOwner: js,
  };
function nc() {
  throw Error("act(...) is not supported in production builds of React.");
}
I.Children = {
  map: al,
  forEach: function (e, t, n) {
    al(
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
      al(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      al(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!bs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
I.Component = nr;
I.Fragment = Wf;
I.Profiler = Bf;
I.PureComponent = ks;
I.StrictMode = Uf;
I.Suspense = qf;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tp;
I.act = nc;
I.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Ku({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = js.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      Zu.call(t, u) &&
        !ec.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Zr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: Qf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Vf, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = tc;
I.createFactory = function (e) {
  var t = tc.bind(null, e);
  return ((t.type = e), t);
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: Yf, render: e };
};
I.isValidElement = bs;
I.lazy = function (e) {
  return { $$typeof: Kf, _payload: { _status: -1, _result: e }, _init: ep };
};
I.memo = function (e, t) {
  return { $$typeof: Gf, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = Tl.transition;
  Tl.transition = {};
  try {
    e();
  } finally {
    Tl.transition = t;
  }
};
I.unstable_act = nc;
I.useCallback = function (e, t) {
  return Te.current.useCallback(e, t);
};
I.useContext = function (e) {
  return Te.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return Te.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return Te.current.useEffect(e, t);
};
I.useId = function () {
  return Te.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return Te.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return Te.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return Te.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return Te.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return Te.current.useRef(e);
};
I.useState = function (e) {
  return Te.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return Te.current.useTransition();
};
I.version = "18.3.1";
qu.exports = I;
var h = qu.exports;
const R = Af(h),
  _r = If({ __proto__: null, default: R }, [h]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var np = h,
  rp = Symbol.for("react.element"),
  lp = Symbol.for("react.fragment"),
  op = Object.prototype.hasOwnProperty,
  ip = np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  sp = { key: !0, ref: !0, __self: !0, __source: !0 };
function rc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  (n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref));
  for (r in t) op.call(t, r) && !sp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: rp,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ip.current,
  };
}
vo.Fragment = lp;
vo.jsx = rc;
vo.jsxs = rc;
Yu.exports = vo;
var s = Yu.exports,
  lc = { exports: {} },
  Be = {},
  oc = { exports: {} },
  ic = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, L) {
    var _ = E.length;
    E.push(L);
    e: for (; 0 < _; ) {
      var A = (_ - 1) >>> 1,
        D = E[A];
      if (0 < l(D, L)) ((E[A] = L), (E[_] = D), (_ = A));
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var L = E[0],
      _ = E.pop();
    if (_ !== L) {
      E[0] = _;
      e: for (var A = 0, D = E.length, Z = D >>> 1; A < Z; ) {
        var k = 2 * (A + 1) - 1,
          W = E[k],
          V = k + 1,
          me = E[V];
        if (0 > l(W, _))
          V < D && 0 > l(me, W)
            ? ((E[A] = me), (E[V] = _), (A = V))
            : ((E[A] = W), (E[k] = _), (A = k));
        else if (V < D && 0 > l(me, _)) ((E[A] = me), (E[V] = _), (A = V));
        else break e;
      }
    }
    return L;
  }
  function l(E, L) {
    var _ = E.sortIndex - L.sortIndex;
    return _ !== 0 ? _ : E.id - L.id;
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
    p = null,
    y = 3,
    x = !1,
    w = !1,
    S = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(E) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= E)
        (r(c), (L.sortIndex = L.expirationTime), t(u, L));
      else break;
      L = n(c);
    }
  }
  function v(E) {
    if (((S = !1), g(E), !w))
      if (n(u) !== null) ((w = !0), ve(b));
      else {
        var L = n(c);
        L !== null && Y(v, L.startTime - E);
      }
  }
  function b(E, L) {
    ((w = !1), S && ((S = !1), m(P), (P = -1)), (x = !0));
    var _ = y;
    try {
      for (
        g(L), p = n(u);
        p !== null && (!(p.expirationTime > L) || (E && !Q()));
      ) {
        var A = p.callback;
        if (typeof A == "function") {
          ((p.callback = null), (y = p.priorityLevel));
          var D = A(p.expirationTime <= L);
          ((L = e.unstable_now()),
            typeof D == "function" ? (p.callback = D) : p === n(u) && r(u),
            g(L));
        } else r(u);
        p = n(u);
      }
      if (p !== null) var Z = !0;
      else {
        var k = n(c);
        (k !== null && Y(v, k.startTime - L), (Z = !1));
      }
      return Z;
    } finally {
      ((p = null), (y = _), (x = !1));
    }
  }
  var j = !1,
    T = null,
    P = -1,
    z = 5,
    F = -1;
  function Q() {
    return !(e.unstable_now() - F < z);
  }
  function X() {
    if (T !== null) {
      var E = e.unstable_now();
      F = E;
      var L = !0;
      try {
        L = T(!0, E);
      } finally {
        L ? ue() : ((j = !1), (T = null));
      }
    } else j = !1;
  }
  var ue;
  if (typeof d == "function")
    ue = function () {
      d(X);
    };
  else if (typeof MessageChannel < "u") {
    var J = new MessageChannel(),
      se = J.port2;
    ((J.port1.onmessage = X),
      (ue = function () {
        se.postMessage(null);
      }));
  } else
    ue = function () {
      N(X, 0);
    };
  function ve(E) {
    ((T = E), j || ((j = !0), ue()));
  }
  function Y(E, L) {
    P = N(function () {
      E(e.unstable_now());
    }, L);
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
      w || x || ((w = !0), ve(b));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (z = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return y;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (E) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = y;
      }
      var _ = y;
      y = L;
      try {
        return E();
      } finally {
        y = _;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, L) {
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
      var _ = y;
      y = E;
      try {
        return L();
      } finally {
        y = _;
      }
    }),
    (e.unstable_scheduleCallback = function (E, L, _) {
      var A = e.unstable_now();
      switch (
        (typeof _ == "object" && _ !== null
          ? ((_ = _.delay), (_ = typeof _ == "number" && 0 < _ ? A + _ : A))
          : (_ = A),
        E)
      ) {
        case 1:
          var D = -1;
          break;
        case 2:
          D = 250;
          break;
        case 5:
          D = 1073741823;
          break;
        case 4:
          D = 1e4;
          break;
        default:
          D = 5e3;
      }
      return (
        (D = _ + D),
        (E = {
          id: f++,
          callback: L,
          priorityLevel: E,
          startTime: _,
          expirationTime: D,
          sortIndex: -1,
        }),
        _ > A
          ? ((E.sortIndex = _),
            t(c, E),
            n(u) === null &&
              E === n(c) &&
              (S ? (m(P), (P = -1)) : (S = !0), Y(v, _ - A)))
          : ((E.sortIndex = D), t(u, E), w || x || ((w = !0), ve(b))),
        E
      );
    }),
    (e.unstable_shouldYield = Q),
    (e.unstable_wrapCallback = function (E) {
      var L = y;
      return function () {
        var _ = y;
        y = L;
        try {
          return E.apply(this, arguments);
        } finally {
          y = _;
        }
      };
    }));
})(ic);
oc.exports = ic;
var ap = oc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var up = h,
  Ue = ap;
function C(e) {
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
var sc = new Set(),
  Fr = {};
function Nn(e, t) {
  (qn(e, t), qn(e + "Capture", t));
}
function qn(e, t) {
  for (Fr[e] = t, e = 0; e < t.length; e++) sc.add(t[e]);
}
var Ct = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Si = Object.prototype.hasOwnProperty,
  cp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ea = {},
  Ca = {};
function dp(e) {
  return Si.call(Ca, e)
    ? !0
    : Si.call(Ea, e)
      ? !1
      : cp.test(e)
        ? (Ca[e] = !0)
        : ((Ea[e] = !0), !1);
}
function fp(e, t, n, r) {
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
function pp(e, t, n, r) {
  if (t === null || typeof t > "u" || fp(e, t, n, r)) return !0;
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
function De(e, t, n, r, l, o, i) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i));
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new De(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Se[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Se[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Se[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Se[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Se[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Se[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Se[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Es = /[\-:]([a-z])/g;
function Cs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Es, Cs);
    Se[t] = new De(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Es, Cs);
    Se[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Es, Cs);
  Se[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Se[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new De(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Se[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ps(e, t, n, r) {
  var l = Se.hasOwnProperty(t) ? Se[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (pp(t, n, l, r) && (n = null),
    r || l === null
      ? dp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Ot = up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ul = Symbol.for("react.element"),
  Dn = Symbol.for("react.portal"),
  On = Symbol.for("react.fragment"),
  Ts = Symbol.for("react.strict_mode"),
  ki = Symbol.for("react.profiler"),
  ac = Symbol.for("react.provider"),
  uc = Symbol.for("react.context"),
  Ds = Symbol.for("react.forward_ref"),
  Ni = Symbol.for("react.suspense"),
  ji = Symbol.for("react.suspense_list"),
  Os = Symbol.for("react.memo"),
  Ft = Symbol.for("react.lazy"),
  cc = Symbol.for("react.offscreen"),
  Pa = Symbol.iterator;
function sr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Pa && e[Pa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var oe = Object.assign,
  Uo;
function xr(e) {
  if (Uo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Uo = (t && t[1]) || "";
    }
  return (
    `
` +
    Uo +
    e
  );
}
var Bo = !1;
function Vo(e, t) {
  if (!e || Bo) return "";
  Bo = !0;
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
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];
      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
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
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    ((Bo = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? xr(e) : "";
}
function mp(e) {
  switch (e.tag) {
    case 5:
      return xr(e.type);
    case 16:
      return xr("Lazy");
    case 13:
      return xr("Suspense");
    case 19:
      return xr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Vo(e.type, !1)), e);
    case 11:
      return ((e = Vo(e.type.render, !1)), e);
    case 1:
      return ((e = Vo(e.type, !0)), e);
    default:
      return "";
  }
}
function bi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case On:
      return "Fragment";
    case Dn:
      return "Portal";
    case ki:
      return "Profiler";
    case Ts:
      return "StrictMode";
    case Ni:
      return "Suspense";
    case ji:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case uc:
        return (e.displayName || "Context") + ".Consumer";
      case ac:
        return (e._context.displayName || "Context") + ".Provider";
      case Ds:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Os:
        return (
          (t = e.displayName || null),
          t !== null ? t : bi(e.type) || "Memo"
        );
      case Ft:
        ((t = e._payload), (e = e._init));
        try {
          return bi(e(t));
        } catch {}
    }
  return null;
}
function hp(e) {
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
      return bi(t);
    case 8:
      return t === Ts ? "StrictMode" : "Mode";
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
function Xt(e) {
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
function dc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function gp(e) {
  var t = dc(e) ? "checked" : "value",
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
function cl(e) {
  e._valueTracker || (e._valueTracker = gp(e));
}
function fc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = dc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Hl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ei(e, t) {
  var n = t.checked;
  return oe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ta(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = Xt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function pc(e, t) {
  ((t = t.checked), t != null && Ps(e, "checked", t, !1));
}
function Ci(e, t) {
  pc(e, t);
  var n = Xt(t.value),
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
    ? Pi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Pi(e, t.type, Xt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Da(e, t, n) {
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
function Pi(e, t, n) {
  (t !== "number" || Hl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var wr = Array.isArray;
function Wn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      ((l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + Xt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ti(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return oe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Oa(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (wr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: Xt(n) };
}
function mc(e, t) {
  var n = Xt(t.value),
    r = Xt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function La(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function hc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Di(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? hc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var dl,
  gc = (function (e) {
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
        dl = dl || document.createElement("div"),
          dl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = dl.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function $r(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var jr = {
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
  yp = ["Webkit", "ms", "Moz", "O"];
Object.keys(jr).forEach(function (e) {
  yp.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (jr[t] = jr[e]));
  });
});
function yc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (jr.hasOwnProperty(e) && jr[e])
      ? ("" + t).trim()
      : t + "px";
}
function vc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = yc(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
var vp = oe(
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
function Oi(e, t) {
  if (t) {
    if (vp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function Li(e, t) {
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
var Mi = null;
function Ls(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var _i = null,
  Un = null,
  Bn = null;
function Ma(e) {
  if ((e = nl(e))) {
    if (typeof _i != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = No(t)), _i(e.stateNode, e.type, t));
  }
}
function xc(e) {
  Un ? (Bn ? Bn.push(e) : (Bn = [e])) : (Un = e);
}
function wc() {
  if (Un) {
    var e = Un,
      t = Bn;
    if (((Bn = Un = null), Ma(e), t)) for (e = 0; e < t.length; e++) Ma(t[e]);
  }
}
function Sc(e, t) {
  return e(t);
}
function kc() {}
var Qo = !1;
function Nc(e, t, n) {
  if (Qo) return e(t, n);
  Qo = !0;
  try {
    return Sc(e, t, n);
  } finally {
    ((Qo = !1), (Un !== null || Bn !== null) && (kc(), wc()));
  }
}
function zr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = No(n);
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
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var Fi = !1;
if (Ct)
  try {
    var ar = {};
    (Object.defineProperty(ar, "passive", {
      get: function () {
        Fi = !0;
      },
    }),
      window.addEventListener("test", ar, ar),
      window.removeEventListener("test", ar, ar));
  } catch {
    Fi = !1;
  }
function xp(e, t, n, r, l, o, i, a, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (f) {
    this.onError(f);
  }
}
var br = !1,
  Wl = null,
  Ul = !1,
  $i = null,
  wp = {
    onError: function (e) {
      ((br = !0), (Wl = e));
    },
  };
function Sp(e, t, n, r, l, o, i, a, u) {
  ((br = !1), (Wl = null), xp.apply(wp, arguments));
}
function kp(e, t, n, r, l, o, i, a, u) {
  if ((Sp.apply(this, arguments), br)) {
    if (br) {
      var c = Wl;
      ((br = !1), (Wl = null));
    } else throw Error(C(198));
    Ul || ((Ul = !0), ($i = c));
  }
}
function jn(e) {
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
function jc(e) {
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
function _a(e) {
  if (jn(e) !== e) throw Error(C(188));
}
function Np(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jn(e)), t === null)) throw Error(C(188));
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
        if (o === n) return (_a(l), e);
        if (o === r) return (_a(l), t);
        o = o.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) ((n = l), (r = o));
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          ((i = !0), (n = l), (r = o));
          break;
        }
        if (a === r) {
          ((i = !0), (r = l), (n = o));
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            ((i = !0), (n = o), (r = l));
            break;
          }
          if (a === r) {
            ((i = !0), (r = o), (n = l));
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function bc(e) {
  return ((e = Np(e)), e !== null ? Ec(e) : null);
}
function Ec(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ec(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Cc = Ue.unstable_scheduleCallback,
  Fa = Ue.unstable_cancelCallback,
  jp = Ue.unstable_shouldYield,
  bp = Ue.unstable_requestPaint,
  ae = Ue.unstable_now,
  Ep = Ue.unstable_getCurrentPriorityLevel,
  Ms = Ue.unstable_ImmediatePriority,
  Pc = Ue.unstable_UserBlockingPriority,
  Bl = Ue.unstable_NormalPriority,
  Cp = Ue.unstable_LowPriority,
  Tc = Ue.unstable_IdlePriority,
  xo = null,
  vt = null;
function Pp(e) {
  if (vt && typeof vt.onCommitFiberRoot == "function")
    try {
      vt.onCommitFiberRoot(xo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ut = Math.clz32 ? Math.clz32 : Op,
  Tp = Math.log,
  Dp = Math.LN2;
function Op(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Tp(e) / Dp) | 0)) | 0);
}
var fl = 64,
  pl = 4194304;
function Sr(e) {
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
function Vl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = Sr(a)) : ((o &= i), o !== 0 && (r = Sr(o)));
  } else ((i = n & ~l), i !== 0 ? (r = Sr(i)) : o !== 0 && (r = Sr(o)));
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
      ((n = 31 - ut(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
  return r;
}
function Lp(e, t) {
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
function Mp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;
  ) {
    var i = 31 - ut(o),
      a = 1 << i,
      u = l[i];
    (u === -1
      ? (!(a & n) || a & r) && (l[i] = Lp(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a));
  }
}
function zi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Dc() {
  var e = fl;
  return ((fl <<= 1), !(fl & 4194240) && (fl = 64), e);
}
function Yo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function el(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ut(t)),
    (e[t] = n));
}
function _p(e, t) {
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
    var l = 31 - ut(n),
      o = 1 << l;
    ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o));
  }
}
function _s(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ut(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
var B = 0;
function Oc(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Lc,
  Fs,
  Mc,
  _c,
  Fc,
  Ri = !1,
  ml = [],
  Ut = null,
  Bt = null,
  Vt = null,
  Rr = new Map(),
  Ir = new Map(),
  zt = [],
  Fp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function $a(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ut = null;
      break;
    case "dragenter":
    case "dragleave":
      Bt = null;
      break;
    case "mouseover":
    case "mouseout":
      Vt = null;
      break;
    case "pointerover":
    case "pointerout":
      Rr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ir.delete(t.pointerId);
  }
}
function ur(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = nl(t)), t !== null && Fs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function $p(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ((Ut = ur(Ut, e, t, n, r, l)), !0);
    case "dragenter":
      return ((Bt = ur(Bt, e, t, n, r, l)), !0);
    case "mouseover":
      return ((Vt = ur(Vt, e, t, n, r, l)), !0);
    case "pointerover":
      var o = l.pointerId;
      return (Rr.set(o, ur(Rr.get(o) || null, e, t, n, r, l)), !0);
    case "gotpointercapture":
      return (
        (o = l.pointerId),
        Ir.set(o, ur(Ir.get(o) || null, e, t, n, r, l)),
        !0
      );
  }
  return !1;
}
function $c(e) {
  var t = un(e.target);
  if (t !== null) {
    var n = jn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = jc(n)), t !== null)) {
          ((e.blockedOn = t),
            Fc(e.priority, function () {
              Mc(n);
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
function Dl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ii(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Mi = r), n.target.dispatchEvent(r), (Mi = null));
    } else return ((t = nl(n)), t !== null && Fs(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function za(e, t, n) {
  Dl(e) && n.delete(t);
}
function zp() {
  ((Ri = !1),
    Ut !== null && Dl(Ut) && (Ut = null),
    Bt !== null && Dl(Bt) && (Bt = null),
    Vt !== null && Dl(Vt) && (Vt = null),
    Rr.forEach(za),
    Ir.forEach(za));
}
function cr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ri ||
      ((Ri = !0),
      Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, zp)));
}
function Ar(e) {
  function t(l) {
    return cr(l, e);
  }
  if (0 < ml.length) {
    cr(ml[0], e);
    for (var n = 1; n < ml.length; n++) {
      var r = ml[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ut !== null && cr(Ut, e),
      Bt !== null && cr(Bt, e),
      Vt !== null && cr(Vt, e),
      Rr.forEach(t),
      Ir.forEach(t),
      n = 0;
    n < zt.length;
    n++
  )
    ((r = zt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < zt.length && ((n = zt[0]), n.blockedOn === null); )
    ($c(n), n.blockedOn === null && zt.shift());
}
var Vn = Ot.ReactCurrentBatchConfig,
  Ql = !0;
function Rp(e, t, n, r) {
  var l = B,
    o = Vn.transition;
  Vn.transition = null;
  try {
    ((B = 1), $s(e, t, n, r));
  } finally {
    ((B = l), (Vn.transition = o));
  }
}
function Ip(e, t, n, r) {
  var l = B,
    o = Vn.transition;
  Vn.transition = null;
  try {
    ((B = 4), $s(e, t, n, r));
  } finally {
    ((B = l), (Vn.transition = o));
  }
}
function $s(e, t, n, r) {
  if (Ql) {
    var l = Ii(e, t, n, r);
    if (l === null) (ri(e, t, r, Yl, n), $a(e, r));
    else if ($p(l, e, t, n, r)) r.stopPropagation();
    else if (($a(e, r), t & 4 && -1 < Fp.indexOf(e))) {
      for (; l !== null; ) {
        var o = nl(l);
        if (
          (o !== null && Lc(o),
          (o = Ii(e, t, n, r)),
          o === null && ri(e, t, r, Yl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ri(e, t, r, null, n);
  }
}
var Yl = null;
function Ii(e, t, n, r) {
  if (((Yl = null), (e = Ls(r)), (e = un(e)), e !== null))
    if (((t = jn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = jc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Yl = e), null);
}
function zc(e) {
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
      switch (Ep()) {
        case Ms:
          return 1;
        case Pc:
          return 4;
        case Bl:
        case Cp:
          return 16;
        case Tc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var At = null,
  zs = null,
  Ol = null;
function Rc() {
  if (Ol) return Ol;
  var e,
    t = zs,
    n = t.length,
    r,
    l = "value" in At ? At.value : At.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Ol = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ll(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function hl() {
  return !0;
}
function Ra() {
  return !1;
}
function Ve(e) {
  function t(n, r, l, o, i) {
    ((this._reactName = n),
      (this._targetInst = l),
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
        ? hl
        : Ra),
      (this.isPropagationStopped = Ra),
      this
    );
  }
  return (
    oe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = hl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = hl));
      },
      persist: function () {},
      isPersistent: hl,
    }),
    t
  );
}
var rr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Rs = Ve(rr),
  tl = oe({}, rr, { view: 0, detail: 0 }),
  Ap = Ve(tl),
  qo,
  Go,
  dr,
  wo = oe({}, tl, {
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
    getModifierState: Is,
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
        : (e !== dr &&
            (dr && e.type === "mousemove"
              ? ((qo = e.screenX - dr.screenX), (Go = e.screenY - dr.screenY))
              : (Go = qo = 0),
            (dr = e)),
          qo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Go;
    },
  }),
  Ia = Ve(wo),
  Hp = oe({}, wo, { dataTransfer: 0 }),
  Wp = Ve(Hp),
  Up = oe({}, tl, { relatedTarget: 0 }),
  Ko = Ve(Up),
  Bp = oe({}, rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vp = Ve(Bp),
  Qp = oe({}, rr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Yp = Ve(Qp),
  qp = oe({}, rr, { data: 0 }),
  Aa = Ve(qp),
  Gp = {
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
  Kp = {
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
  Xp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Jp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Xp[e]) ? !!t[e] : !1;
}
function Is() {
  return Jp;
}
var Zp = oe({}, tl, {
    key: function (e) {
      if (e.key) {
        var t = Gp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ll(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Kp[e.keyCode] || "Unidentified"
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
    getModifierState: Is,
    charCode: function (e) {
      return e.type === "keypress" ? Ll(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ll(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  em = Ve(Zp),
  tm = oe({}, wo, {
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
  Ha = Ve(tm),
  nm = oe({}, tl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Is,
  }),
  rm = Ve(nm),
  lm = oe({}, rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  om = Ve(lm),
  im = oe({}, wo, {
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
  sm = Ve(im),
  am = [9, 13, 27, 32],
  As = Ct && "CompositionEvent" in window,
  Er = null;
Ct && "documentMode" in document && (Er = document.documentMode);
var um = Ct && "TextEvent" in window && !Er,
  Ic = Ct && (!As || (Er && 8 < Er && 11 >= Er)),
  Wa = " ",
  Ua = !1;
function Ac(e, t) {
  switch (e) {
    case "keyup":
      return am.indexOf(t.keyCode) !== -1;
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
function Hc(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Ln = !1;
function cm(e, t) {
  switch (e) {
    case "compositionend":
      return Hc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ua = !0), Wa);
    case "textInput":
      return ((e = t.data), e === Wa && Ua ? null : e);
    default:
      return null;
  }
}
function dm(e, t) {
  if (Ln)
    return e === "compositionend" || (!As && Ac(e, t))
      ? ((e = Rc()), (Ol = zs = At = null), (Ln = !1), e)
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
      return Ic && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var fm = {
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
function Ba(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!fm[e.type] : t === "textarea";
}
function Wc(e, t, n, r) {
  (xc(r),
    (t = ql(t, "onChange")),
    0 < t.length &&
      ((n = new Rs("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Cr = null,
  Hr = null;
function pm(e) {
  Zc(e, 0);
}
function So(e) {
  var t = Fn(e);
  if (fc(t)) return e;
}
function mm(e, t) {
  if (e === "change") return t;
}
var Uc = !1;
if (Ct) {
  var Xo;
  if (Ct) {
    var Jo = "oninput" in document;
    if (!Jo) {
      var Va = document.createElement("div");
      (Va.setAttribute("oninput", "return;"),
        (Jo = typeof Va.oninput == "function"));
    }
    Xo = Jo;
  } else Xo = !1;
  Uc = Xo && (!document.documentMode || 9 < document.documentMode);
}
function Qa() {
  Cr && (Cr.detachEvent("onpropertychange", Bc), (Hr = Cr = null));
}
function Bc(e) {
  if (e.propertyName === "value" && So(Hr)) {
    var t = [];
    (Wc(t, Hr, e, Ls(e)), Nc(pm, t));
  }
}
function hm(e, t, n) {
  e === "focusin"
    ? (Qa(), (Cr = t), (Hr = n), Cr.attachEvent("onpropertychange", Bc))
    : e === "focusout" && Qa();
}
function gm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return So(Hr);
}
function ym(e, t) {
  if (e === "click") return So(t);
}
function vm(e, t) {
  if (e === "input" || e === "change") return So(t);
}
function xm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var dt = typeof Object.is == "function" ? Object.is : xm;
function Wr(e, t) {
  if (dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Si.call(t, l) || !dt(e[l], t[l])) return !1;
  }
  return !0;
}
function Ya(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function qa(e, t) {
  var n = Ya(e);
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
    n = Ya(n);
  }
}
function Vc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Vc(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Qc() {
  for (var e = window, t = Hl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Hl(e.document);
  }
  return t;
}
function Hs(e) {
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
function wm(e) {
  var t = Qc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Vc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Hs(n)) {
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
          (l = qa(n, o)));
        var i = qa(n, r);
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
var Sm = Ct && "documentMode" in document && 11 >= document.documentMode,
  Mn = null,
  Ai = null,
  Pr = null,
  Hi = !1;
function Ga(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Hi ||
    Mn == null ||
    Mn !== Hl(r) ||
    ((r = Mn),
    "selectionStart" in r && Hs(r)
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
    (Pr && Wr(Pr, r)) ||
      ((Pr = r),
      (r = ql(Ai, "onSelect")),
      0 < r.length &&
        ((t = new Rs("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Mn))));
}
function gl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var _n = {
    animationend: gl("Animation", "AnimationEnd"),
    animationiteration: gl("Animation", "AnimationIteration"),
    animationstart: gl("Animation", "AnimationStart"),
    transitionend: gl("Transition", "TransitionEnd"),
  },
  Zo = {},
  Yc = {};
Ct &&
  ((Yc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete _n.animationend.animation,
    delete _n.animationiteration.animation,
    delete _n.animationstart.animation),
  "TransitionEvent" in window || delete _n.transitionend.transition);
function ko(e) {
  if (Zo[e]) return Zo[e];
  if (!_n[e]) return e;
  var t = _n[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Yc) return (Zo[e] = t[n]);
  return e;
}
var qc = ko("animationend"),
  Gc = ko("animationiteration"),
  Kc = ko("animationstart"),
  Xc = ko("transitionend"),
  Jc = new Map(),
  Ka =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Zt(e, t) {
  (Jc.set(e, t), Nn(t, [e]));
}
for (var ei = 0; ei < Ka.length; ei++) {
  var ti = Ka[ei],
    km = ti.toLowerCase(),
    Nm = ti[0].toUpperCase() + ti.slice(1);
  Zt(km, "on" + Nm);
}
Zt(qc, "onAnimationEnd");
Zt(Gc, "onAnimationIteration");
Zt(Kc, "onAnimationStart");
Zt("dblclick", "onDoubleClick");
Zt("focusin", "onFocus");
Zt("focusout", "onBlur");
Zt(Xc, "onTransitionEnd");
qn("onMouseEnter", ["mouseout", "mouseover"]);
qn("onMouseLeave", ["mouseout", "mouseover"]);
qn("onPointerEnter", ["pointerout", "pointerover"]);
qn("onPointerLeave", ["pointerout", "pointerover"]);
Nn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Nn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Nn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Nn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Nn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var kr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  jm = new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));
function Xa(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), kp(r, t, void 0, e), (e.currentTarget = null));
}
function Zc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), u !== o && l.isPropagationStopped())) break e;
          (Xa(l, a, c), (o = u));
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          (Xa(l, a, c), (o = u));
        }
    }
  }
  if (Ul) throw ((e = $i), (Ul = !1), ($i = null), e);
}
function G(e, t) {
  var n = t[Qi];
  n === void 0 && (n = t[Qi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ed(t, e, 2, !1), n.add(r));
}
function ni(e, t, n) {
  var r = 0;
  (t && (r |= 4), ed(n, e, r, t));
}
var yl = "_reactListening" + Math.random().toString(36).slice(2);
function Ur(e) {
  if (!e[yl]) {
    ((e[yl] = !0),
      sc.forEach(function (n) {
        n !== "selectionchange" && (jm.has(n) || ni(n, !1, e), ni(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[yl] || ((t[yl] = !0), ni("selectionchange", !1, t));
  }
}
function ed(e, t, n, r) {
  switch (zc(t)) {
    case 1:
      var l = Rp;
      break;
    case 4:
      l = Ip;
      break;
    default:
      l = $s;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !Fi ||
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
function ri(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
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
        for (; a !== null; ) {
          if (((i = un(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Nc(function () {
    var c = o,
      f = Ls(n),
      p = [];
    e: {
      var y = Jc.get(e);
      if (y !== void 0) {
        var x = Rs,
          w = e;
        switch (e) {
          case "keypress":
            if (Ll(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = em;
            break;
          case "focusin":
            ((w = "focus"), (x = Ko));
            break;
          case "focusout":
            ((w = "blur"), (x = Ko));
            break;
          case "beforeblur":
          case "afterblur":
            x = Ko;
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
            x = Ia;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Wp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = rm;
            break;
          case qc:
          case Gc:
          case Kc:
            x = Vp;
            break;
          case Xc:
            x = om;
            break;
          case "scroll":
            x = Ap;
            break;
          case "wheel":
            x = sm;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Yp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Ha;
        }
        var S = (t & 4) !== 0,
          N = !S && e === "scroll",
          m = S ? (y !== null ? y + "Capture" : null) : y;
        S = [];
        for (var d = c, g; d !== null; ) {
          g = d;
          var v = g.stateNode;
          if (
            (g.tag === 5 &&
              v !== null &&
              ((g = v),
              m !== null && ((v = zr(d, m)), v != null && S.push(Br(d, v, g)))),
            N)
          )
            break;
          d = d.return;
        }
        0 < S.length &&
          ((y = new x(y, w, null, n, f)), p.push({ event: y, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((y = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          y &&
            n !== Mi &&
            (w = n.relatedTarget || n.fromElement) &&
            (un(w) || w[Pt]))
        )
          break e;
        if (
          (x || y) &&
          ((y =
            f.window === f
              ? f
              : (y = f.ownerDocument)
                ? y.defaultView || y.parentWindow
                : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = c),
              (w = w ? un(w) : null),
              w !== null &&
                ((N = jn(w)), w !== N || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = c)),
          x !== w)
        ) {
          if (
            ((S = Ia),
            (v = "onMouseLeave"),
            (m = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = Ha),
              (v = "onPointerLeave"),
              (m = "onPointerEnter"),
              (d = "pointer")),
            (N = x == null ? y : Fn(x)),
            (g = w == null ? y : Fn(w)),
            (y = new S(v, d + "leave", x, n, f)),
            (y.target = N),
            (y.relatedTarget = g),
            (v = null),
            un(f) === c &&
              ((S = new S(m, d + "enter", w, n, f)),
              (S.target = g),
              (S.relatedTarget = N),
              (v = S)),
            (N = v),
            x && w)
          )
            t: {
              for (S = x, m = w, d = 0, g = S; g; g = Pn(g)) d++;
              for (g = 0, v = m; v; v = Pn(v)) g++;
              for (; 0 < d - g; ) ((S = Pn(S)), d--);
              for (; 0 < g - d; ) ((m = Pn(m)), g--);
              for (; d--; ) {
                if (S === m || (m !== null && S === m.alternate)) break t;
                ((S = Pn(S)), (m = Pn(m)));
              }
              S = null;
            }
          else S = null;
          (x !== null && Ja(p, y, x, S, !1),
            w !== null && N !== null && Ja(p, N, w, S, !0));
        }
      }
      e: {
        if (
          ((y = c ? Fn(c) : window),
          (x = y.nodeName && y.nodeName.toLowerCase()),
          x === "select" || (x === "input" && y.type === "file"))
        )
          var b = mm;
        else if (Ba(y))
          if (Uc) b = vm;
          else {
            b = gm;
            var j = hm;
          }
        else
          (x = y.nodeName) &&
            x.toLowerCase() === "input" &&
            (y.type === "checkbox" || y.type === "radio") &&
            (b = ym);
        if (b && (b = b(e, c))) {
          Wc(p, b, n, f);
          break e;
        }
        (j && j(e, y, c),
          e === "focusout" &&
            (j = y._wrapperState) &&
            j.controlled &&
            y.type === "number" &&
            Pi(y, "number", y.value));
      }
      switch (((j = c ? Fn(c) : window), e)) {
        case "focusin":
          (Ba(j) || j.contentEditable === "true") &&
            ((Mn = j), (Ai = c), (Pr = null));
          break;
        case "focusout":
          Pr = Ai = Mn = null;
          break;
        case "mousedown":
          Hi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Hi = !1), Ga(p, n, f));
          break;
        case "selectionchange":
          if (Sm) break;
        case "keydown":
        case "keyup":
          Ga(p, n, f);
      }
      var T;
      if (As)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Ln
          ? Ac(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      (P &&
        (Ic &&
          n.locale !== "ko" &&
          (Ln || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Ln && (T = Rc())
            : ((At = f),
              (zs = "value" in At ? At.value : At.textContent),
              (Ln = !0))),
        (j = ql(c, P)),
        0 < j.length &&
          ((P = new Aa(P, e, null, n, f)),
          p.push({ event: P, listeners: j }),
          T ? (P.data = T) : ((T = Hc(n)), T !== null && (P.data = T)))),
        (T = um ? cm(e, n) : dm(e, n)) &&
          ((c = ql(c, "onBeforeInput")),
          0 < c.length &&
            ((f = new Aa("onBeforeInput", "beforeinput", null, n, f)),
            p.push({ event: f, listeners: c }),
            (f.data = T))));
    }
    Zc(p, t);
  });
}
function Br(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ql(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    (l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = zr(e, n)),
      o != null && r.unshift(Br(e, o, l)),
      (o = zr(e, t)),
      o != null && r.push(Br(e, o, l))),
      (e = e.return));
  }
  return r;
}
function Pn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ja(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      c = a.stateNode;
    if (u !== null && u === r) break;
    (a.tag === 5 &&
      c !== null &&
      ((a = c),
      l
        ? ((u = zr(n, o)), u != null && i.unshift(Br(n, u, a)))
        : l || ((u = zr(n, o)), u != null && i.push(Br(n, u, a)))),
      (n = n.return));
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var bm = /\r\n?/g,
  Em = /\u0000|\uFFFD/g;
function Za(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      bm,
      `
`,
    )
    .replace(Em, "");
}
function vl(e, t, n) {
  if (((t = Za(t)), Za(e) !== t && n)) throw Error(C(425));
}
function Gl() {}
var Wi = null,
  Ui = null;
function Bi(e, t) {
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
var Vi = typeof setTimeout == "function" ? setTimeout : void 0,
  Cm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  eu = typeof Promise == "function" ? Promise : void 0,
  Pm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof eu < "u"
        ? function (e) {
            return eu.resolve(null).then(e).catch(Tm);
          }
        : Vi;
function Tm(e) {
  setTimeout(function () {
    throw e;
  });
}
function li(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(l), Ar(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Ar(t);
}
function Qt(e) {
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
function tu(e) {
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
var lr = Math.random().toString(36).slice(2),
  gt = "__reactFiber$" + lr,
  Vr = "__reactProps$" + lr,
  Pt = "__reactContainer$" + lr,
  Qi = "__reactEvents$" + lr,
  Dm = "__reactListeners$" + lr,
  Om = "__reactHandles$" + lr;
function un(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Pt] || n[gt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = tu(e); e !== null; ) {
          if ((n = e[gt])) return n;
          e = tu(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function nl(e) {
  return (
    (e = e[gt] || e[Pt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Fn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function No(e) {
  return e[Vr] || null;
}
var Yi = [],
  $n = -1;
function en(e) {
  return { current: e };
}
function K(e) {
  0 > $n || ((e.current = Yi[$n]), (Yi[$n] = null), $n--);
}
function q(e, t) {
  ($n++, (Yi[$n] = e.current), (e.current = t));
}
var Jt = {},
  Ee = en(Jt),
  Fe = en(!1),
  yn = Jt;
function Gn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jt;
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
function $e(e) {
  return ((e = e.childContextTypes), e != null);
}
function Kl() {
  (K(Fe), K(Ee));
}
function nu(e, t, n) {
  if (Ee.current !== Jt) throw Error(C(168));
  (q(Ee, t), q(Fe, n));
}
function td(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(C(108, hp(e) || "Unknown", l));
  return oe({}, n, r);
}
function Xl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jt),
    (yn = Ee.current),
    q(Ee, e),
    q(Fe, Fe.current),
    !0
  );
}
function ru(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  (n
    ? ((e = td(e, t, yn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      K(Fe),
      K(Ee),
      q(Ee, e))
    : K(Fe),
    q(Fe, n));
}
var St = null,
  jo = !1,
  oi = !1;
function nd(e) {
  St === null ? (St = [e]) : St.push(e);
}
function Lm(e) {
  ((jo = !0), nd(e));
}
function tn() {
  if (!oi && St !== null) {
    oi = !0;
    var e = 0,
      t = B;
    try {
      var n = St;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((St = null), (jo = !1));
    } catch (l) {
      throw (St !== null && (St = St.slice(e + 1)), Cc(Ms, tn), l);
    } finally {
      ((B = t), (oi = !1));
    }
  }
  return null;
}
var zn = [],
  Rn = 0,
  Jl = null,
  Zl = 0,
  Ge = [],
  Ke = 0,
  vn = null,
  kt = 1,
  Nt = "";
function ln(e, t) {
  ((zn[Rn++] = Zl), (zn[Rn++] = Jl), (Jl = e), (Zl = t));
}
function rd(e, t, n) {
  ((Ge[Ke++] = kt), (Ge[Ke++] = Nt), (Ge[Ke++] = vn), (vn = e));
  var r = kt;
  e = Nt;
  var l = 32 - ut(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var o = 32 - ut(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    ((o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (kt = (1 << (32 - ut(t) + l)) | (n << l) | r),
      (Nt = o + e));
  } else ((kt = (1 << o) | (n << l) | r), (Nt = e));
}
function Ws(e) {
  e.return !== null && (ln(e, 1), rd(e, 1, 0));
}
function Us(e) {
  for (; e === Jl; )
    ((Jl = zn[--Rn]), (zn[Rn] = null), (Zl = zn[--Rn]), (zn[Rn] = null));
  for (; e === vn; )
    ((vn = Ge[--Ke]),
      (Ge[Ke] = null),
      (Nt = Ge[--Ke]),
      (Ge[Ke] = null),
      (kt = Ge[--Ke]),
      (Ge[Ke] = null));
}
var We = null,
  He = null,
  te = !1,
  at = null;
function ld(e, t) {
  var n = Xe(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function lu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (We = e), (He = Qt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (We = e), (He = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = vn !== null ? { id: kt, overflow: Nt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Xe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (We = e),
            (He = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function qi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Gi(e) {
  if (te) {
    var t = He;
    if (t) {
      var n = t;
      if (!lu(e, t)) {
        if (qi(e)) throw Error(C(418));
        t = Qt(n.nextSibling);
        var r = We;
        t && lu(e, t)
          ? ld(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (te = !1), (We = e));
      }
    } else {
      if (qi(e)) throw Error(C(418));
      ((e.flags = (e.flags & -4097) | 2), (te = !1), (We = e));
    }
  }
}
function ou(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  We = e;
}
function xl(e) {
  if (e !== We) return !1;
  if (!te) return (ou(e), (te = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Bi(e.type, e.memoizedProps))),
    t && (t = He))
  ) {
    if (qi(e)) throw (od(), Error(C(418)));
    for (; t; ) (ld(e, t), (t = Qt(t.nextSibling)));
  }
  if ((ou(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              He = Qt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      He = null;
    }
  } else He = We ? Qt(e.stateNode.nextSibling) : null;
  return !0;
}
function od() {
  for (var e = He; e; ) e = Qt(e.nextSibling);
}
function Kn() {
  ((He = We = null), (te = !1));
}
function Bs(e) {
  at === null ? (at = [e]) : at.push(e);
}
var Mm = Ot.ReactCurrentBatchConfig;
function fr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function wl(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function iu(e) {
  var t = e._init;
  return t(e._payload);
}
function id(e) {
  function t(m, d) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [d]), (m.flags |= 16)) : g.push(d);
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
    return ((m = Kt(m, d)), (m.index = 0), (m.sibling = null), m);
  }
  function o(m, d, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < d ? ((m.flags |= 2), d) : g)
            : ((m.flags |= 2), d))
        : ((m.flags |= 1048576), d)
    );
  }
  function i(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function a(m, d, g, v) {
    return d === null || d.tag !== 6
      ? ((d = fi(g, m.mode, v)), (d.return = m), d)
      : ((d = l(d, g)), (d.return = m), d);
  }
  function u(m, d, g, v) {
    var b = g.type;
    return b === On
      ? f(m, d, g.props.children, v, g.key)
      : d !== null &&
          (d.elementType === b ||
            (typeof b == "object" &&
              b !== null &&
              b.$$typeof === Ft &&
              iu(b) === d.type))
        ? ((v = l(d, g.props)), (v.ref = fr(m, d, g)), (v.return = m), v)
        : ((v = Il(g.type, g.key, g.props, null, m.mode, v)),
          (v.ref = fr(m, d, g)),
          (v.return = m),
          v);
  }
  function c(m, d, g, v) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== g.containerInfo ||
      d.stateNode.implementation !== g.implementation
      ? ((d = pi(g, m.mode, v)), (d.return = m), d)
      : ((d = l(d, g.children || [])), (d.return = m), d);
  }
  function f(m, d, g, v, b) {
    return d === null || d.tag !== 7
      ? ((d = hn(g, m.mode, v, b)), (d.return = m), d)
      : ((d = l(d, g)), (d.return = m), d);
  }
  function p(m, d, g) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return ((d = fi("" + d, m.mode, g)), (d.return = m), d);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ul:
          return (
            (g = Il(d.type, d.key, d.props, null, m.mode, g)),
            (g.ref = fr(m, null, d)),
            (g.return = m),
            g
          );
        case Dn:
          return ((d = pi(d, m.mode, g)), (d.return = m), d);
        case Ft:
          var v = d._init;
          return p(m, v(d._payload), g);
      }
      if (wr(d) || sr(d))
        return ((d = hn(d, m.mode, g, null)), (d.return = m), d);
      wl(m, d);
    }
    return null;
  }
  function y(m, d, g, v) {
    var b = d !== null ? d.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return b !== null ? null : a(m, d, "" + g, v);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ul:
          return g.key === b ? u(m, d, g, v) : null;
        case Dn:
          return g.key === b ? c(m, d, g, v) : null;
        case Ft:
          return ((b = g._init), y(m, d, b(g._payload), v));
      }
      if (wr(g) || sr(g)) return b !== null ? null : f(m, d, g, v, null);
      wl(m, g);
    }
    return null;
  }
  function x(m, d, g, v, b) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return ((m = m.get(g) || null), a(d, m, "" + v, b));
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ul:
          return (
            (m = m.get(v.key === null ? g : v.key) || null),
            u(d, m, v, b)
          );
        case Dn:
          return (
            (m = m.get(v.key === null ? g : v.key) || null),
            c(d, m, v, b)
          );
        case Ft:
          var j = v._init;
          return x(m, d, g, j(v._payload), b);
      }
      if (wr(v) || sr(v)) return ((m = m.get(g) || null), f(d, m, v, b, null));
      wl(d, v);
    }
    return null;
  }
  function w(m, d, g, v) {
    for (
      var b = null, j = null, T = d, P = (d = 0), z = null;
      T !== null && P < g.length;
      P++
    ) {
      T.index > P ? ((z = T), (T = null)) : (z = T.sibling);
      var F = y(m, T, g[P], v);
      if (F === null) {
        T === null && (T = z);
        break;
      }
      (e && T && F.alternate === null && t(m, T),
        (d = o(F, d, P)),
        j === null ? (b = F) : (j.sibling = F),
        (j = F),
        (T = z));
    }
    if (P === g.length) return (n(m, T), te && ln(m, P), b);
    if (T === null) {
      for (; P < g.length; P++)
        ((T = p(m, g[P], v)),
          T !== null &&
            ((d = o(T, d, P)),
            j === null ? (b = T) : (j.sibling = T),
            (j = T)));
      return (te && ln(m, P), b);
    }
    for (T = r(m, T); P < g.length; P++)
      ((z = x(T, m, P, g[P], v)),
        z !== null &&
          (e && z.alternate !== null && T.delete(z.key === null ? P : z.key),
          (d = o(z, d, P)),
          j === null ? (b = z) : (j.sibling = z),
          (j = z)));
    return (
      e &&
        T.forEach(function (Q) {
          return t(m, Q);
        }),
      te && ln(m, P),
      b
    );
  }
  function S(m, d, g, v) {
    var b = sr(g);
    if (typeof b != "function") throw Error(C(150));
    if (((g = b.call(g)), g == null)) throw Error(C(151));
    for (
      var j = (b = null), T = d, P = (d = 0), z = null, F = g.next();
      T !== null && !F.done;
      P++, F = g.next()
    ) {
      T.index > P ? ((z = T), (T = null)) : (z = T.sibling);
      var Q = y(m, T, F.value, v);
      if (Q === null) {
        T === null && (T = z);
        break;
      }
      (e && T && Q.alternate === null && t(m, T),
        (d = o(Q, d, P)),
        j === null ? (b = Q) : (j.sibling = Q),
        (j = Q),
        (T = z));
    }
    if (F.done) return (n(m, T), te && ln(m, P), b);
    if (T === null) {
      for (; !F.done; P++, F = g.next())
        ((F = p(m, F.value, v)),
          F !== null &&
            ((d = o(F, d, P)),
            j === null ? (b = F) : (j.sibling = F),
            (j = F)));
      return (te && ln(m, P), b);
    }
    for (T = r(m, T); !F.done; P++, F = g.next())
      ((F = x(T, m, P, F.value, v)),
        F !== null &&
          (e && F.alternate !== null && T.delete(F.key === null ? P : F.key),
          (d = o(F, d, P)),
          j === null ? (b = F) : (j.sibling = F),
          (j = F)));
    return (
      e &&
        T.forEach(function (X) {
          return t(m, X);
        }),
      te && ln(m, P),
      b
    );
  }
  function N(m, d, g, v) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === On &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case ul:
          e: {
            for (var b = g.key, j = d; j !== null; ) {
              if (j.key === b) {
                if (((b = g.type), b === On)) {
                  if (j.tag === 7) {
                    (n(m, j.sibling),
                      (d = l(j, g.props.children)),
                      (d.return = m),
                      (m = d));
                    break e;
                  }
                } else if (
                  j.elementType === b ||
                  (typeof b == "object" &&
                    b !== null &&
                    b.$$typeof === Ft &&
                    iu(b) === j.type)
                ) {
                  (n(m, j.sibling),
                    (d = l(j, g.props)),
                    (d.ref = fr(m, j, g)),
                    (d.return = m),
                    (m = d));
                  break e;
                }
                n(m, j);
                break;
              } else t(m, j);
              j = j.sibling;
            }
            g.type === On
              ? ((d = hn(g.props.children, m.mode, v, g.key)),
                (d.return = m),
                (m = d))
              : ((v = Il(g.type, g.key, g.props, null, m.mode, v)),
                (v.ref = fr(m, d, g)),
                (v.return = m),
                (m = v));
          }
          return i(m);
        case Dn:
          e: {
            for (j = g.key; d !== null; ) {
              if (d.key === j)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === g.containerInfo &&
                  d.stateNode.implementation === g.implementation
                ) {
                  (n(m, d.sibling),
                    (d = l(d, g.children || [])),
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
            ((d = pi(g, m.mode, v)), (d.return = m), (m = d));
          }
          return i(m);
        case Ft:
          return ((j = g._init), N(m, d, j(g._payload), v));
      }
      if (wr(g)) return w(m, d, g, v);
      if (sr(g)) return S(m, d, g, v);
      wl(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        d !== null && d.tag === 6
          ? (n(m, d.sibling), (d = l(d, g)), (d.return = m), (m = d))
          : (n(m, d), (d = fi(g, m.mode, v)), (d.return = m), (m = d)),
        i(m))
      : n(m, d);
  }
  return N;
}
var Xn = id(!0),
  sd = id(!1),
  eo = en(null),
  to = null,
  In = null,
  Vs = null;
function Qs() {
  Vs = In = to = null;
}
function Ys(e) {
  var t = eo.current;
  (K(eo), (e._currentValue = t));
}
function Ki(e, t, n) {
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
function Qn(e, t) {
  ((to = e),
    (Vs = In = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (_e = !0), (e.firstContext = null)));
}
function Ze(e) {
  var t = e._currentValue;
  if (Vs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), In === null)) {
      if (to === null) throw Error(C(308));
      ((In = e), (to.dependencies = { lanes: 0, firstContext: e }));
    } else In = In.next = e;
  return t;
}
var cn = null;
function qs(e) {
  cn === null ? (cn = [e]) : cn.push(e);
}
function ad(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), qs(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Tt(e, r)
  );
}
function Tt(e, t) {
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
var $t = !1;
function Gs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ud(e, t) {
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
function jt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), H & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Tt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), qs(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Tt(e, n)
  );
}
function Ml(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), _s(e, n));
  }
}
function su(e, t) {
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
function no(e, t, n, r) {
  var l = e.updateQueue;
  $t = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      c = u.next;
    ((u.next = null), i === null ? (o = c) : (i.next = c), (i = u));
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== i &&
        (a === null ? (f.firstBaseUpdate = c) : (a.next = c),
        (f.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var p = l.baseState;
    ((i = 0), (f = c = u = null), (a = o));
    do {
      var y = a.lane,
        x = a.eventTime;
      if ((r & y) === y) {
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
          var w = e,
            S = a;
          switch (((y = t), (x = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                p = w.call(x, p, y);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (y = typeof w == "function" ? w.call(x, p, y) : w),
                y == null)
              )
                break e;
              p = oe({}, p, y);
              break e;
            case 2:
              $t = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (y = l.effects),
          y === null ? (l.effects = [a]) : y.push(a));
      } else
        ((x = {
          eventTime: x,
          lane: y,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((c = f = x), (u = p)) : (f = f.next = x),
          (i |= y));
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        ((y = a),
          (a = y.next),
          (y.next = null),
          (l.lastBaseUpdate = y),
          (l.shared.pending = null));
      }
    } while (!0);
    if (
      (f === null && (u = p),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((i |= l.lane), (l = l.next));
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    ((wn |= i), (e.lanes = i), (e.memoizedState = p));
  }
}
function au(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(C(191, l));
        l.call(r);
      }
    }
}
var rl = {},
  xt = en(rl),
  Qr = en(rl),
  Yr = en(rl);
function dn(e) {
  if (e === rl) throw Error(C(174));
  return e;
}
function Ks(e, t) {
  switch ((q(Yr, t), q(Qr, e), q(xt, rl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Di(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Di(t, e)));
  }
  (K(xt), q(xt, t));
}
function Jn() {
  (K(xt), K(Qr), K(Yr));
}
function cd(e) {
  dn(Yr.current);
  var t = dn(xt.current),
    n = Di(t, e.type);
  t !== n && (q(Qr, e), q(xt, n));
}
function Xs(e) {
  Qr.current === e && (K(xt), K(Qr));
}
var re = en(0);
function ro(e) {
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
var ii = [];
function Js() {
  for (var e = 0; e < ii.length; e++)
    ii[e]._workInProgressVersionPrimary = null;
  ii.length = 0;
}
var _l = Ot.ReactCurrentDispatcher,
  si = Ot.ReactCurrentBatchConfig,
  xn = 0,
  le = null,
  fe = null,
  he = null,
  lo = !1,
  Tr = !1,
  qr = 0,
  _m = 0;
function ke() {
  throw Error(C(321));
}
function Zs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!dt(e[n], t[n])) return !1;
  return !0;
}
function ea(e, t, n, r, l, o) {
  if (
    ((xn = o),
    (le = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (_l.current = e === null || e.memoizedState === null ? Rm : Im),
    (e = n(r, l)),
    Tr)
  ) {
    o = 0;
    do {
      if (((Tr = !1), (qr = 0), 25 <= o)) throw Error(C(301));
      ((o += 1),
        (he = fe = null),
        (t.updateQueue = null),
        (_l.current = Am),
        (e = n(r, l)));
    } while (Tr);
  }
  if (
    ((_l.current = oo),
    (t = fe !== null && fe.next !== null),
    (xn = 0),
    (he = fe = le = null),
    (lo = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function ta() {
  var e = qr !== 0;
  return ((qr = 0), e);
}
function ht() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (he === null ? (le.memoizedState = he = e) : (he = he.next = e), he);
}
function et() {
  if (fe === null) {
    var e = le.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = fe.next;
  var t = he === null ? le.memoizedState : he.next;
  if (t !== null) ((he = t), (fe = e));
  else {
    if (e === null) throw Error(C(310));
    ((fe = e),
      (e = {
        memoizedState: fe.memoizedState,
        baseState: fe.baseState,
        baseQueue: fe.baseQueue,
        queue: fe.queue,
        next: null,
      }),
      he === null ? (le.memoizedState = he = e) : (he = he.next = e));
  }
  return he;
}
function Gr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ai(e) {
  var t = et(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = fe,
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
    var a = (i = null),
      u = null,
      c = o;
    do {
      var f = c.lane;
      if ((xn & f) === f)
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
        var p = {
          lane: f,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (u === null ? ((a = u = p), (i = r)) : (u = u.next = p),
          (le.lanes |= f),
          (wn |= f));
      }
      c = c.next;
    } while (c !== null && c !== o);
    (u === null ? (i = r) : (u.next = a),
      dt(r, t.memoizedState) || (_e = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((o = l.lane), (le.lanes |= o), (wn |= o), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ui(e) {
  var t = et(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do ((o = e(o, i.action)), (i = i.next));
    while (i !== l);
    (dt(o, t.memoizedState) || (_e = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o));
  }
  return [o, r];
}
function dd() {}
function fd(e, t) {
  var n = le,
    r = et(),
    l = t(),
    o = !dt(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (_e = !0)),
    (r = r.queue),
    na(hd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (he !== null && he.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Kr(9, md.bind(null, n, r, l, t), void 0, null),
      ge === null)
    )
      throw Error(C(349));
    xn & 30 || pd(n, t, l);
  }
  return l;
}
function pd(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function md(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), gd(t) && yd(e));
}
function hd(e, t, n) {
  return n(function () {
    gd(t) && yd(e);
  });
}
function gd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dt(e, n);
  } catch {
    return !0;
  }
}
function yd(e) {
  var t = Tt(e, 1);
  t !== null && ct(t, e, 1, -1);
}
function uu(e) {
  var t = ht();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = zm.bind(null, le, e)),
    [t.memoizedState, e]
  );
}
function Kr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function vd() {
  return et().memoizedState;
}
function Fl(e, t, n, r) {
  var l = ht();
  ((le.flags |= e),
    (l.memoizedState = Kr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function bo(e, t, n, r) {
  var l = et();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (fe !== null) {
    var i = fe.memoizedState;
    if (((o = i.destroy), r !== null && Zs(r, i.deps))) {
      l.memoizedState = Kr(t, n, o, r);
      return;
    }
  }
  ((le.flags |= e), (l.memoizedState = Kr(1 | t, n, o, r)));
}
function cu(e, t) {
  return Fl(8390656, 8, e, t);
}
function na(e, t) {
  return bo(2048, 8, e, t);
}
function xd(e, t) {
  return bo(4, 2, e, t);
}
function wd(e, t) {
  return bo(4, 4, e, t);
}
function Sd(e, t) {
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
function kd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    bo(4, 4, Sd.bind(null, t, e), n)
  );
}
function ra() {}
function Nd(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function jd(e, t) {
  var n = et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function bd(e, t, n) {
  return xn & 21
    ? (dt(n, t) || ((n = Dc()), (le.lanes |= n), (wn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (_e = !0)), (e.memoizedState = n));
}
function Fm(e, t) {
  var n = B;
  ((B = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = si.transition;
  si.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((B = n), (si.transition = r));
  }
}
function Ed() {
  return et().memoizedState;
}
function $m(e, t, n) {
  var r = Gt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Cd(e))
  )
    Pd(t, n);
  else if (((n = ad(e, t, n, r)), n !== null)) {
    var l = Pe();
    (ct(n, e, r, l), Td(n, t, r));
  }
}
function zm(e, t, n) {
  var r = Gt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Cd(e)) Pd(t, l);
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
        if (((l.hasEagerState = !0), (l.eagerState = a), dt(a, i))) {
          var u = t.interleaved;
          (u === null
            ? ((l.next = l), qs(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((n = ad(e, t, l, r)),
      n !== null && ((l = Pe()), ct(n, e, r, l), Td(n, t, r)));
  }
}
function Cd(e) {
  var t = e.alternate;
  return e === le || (t !== null && t === le);
}
function Pd(e, t) {
  Tr = lo = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Td(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), _s(e, n));
  }
}
var oo = {
    readContext: Ze,
    useCallback: ke,
    useContext: ke,
    useEffect: ke,
    useImperativeHandle: ke,
    useInsertionEffect: ke,
    useLayoutEffect: ke,
    useMemo: ke,
    useReducer: ke,
    useRef: ke,
    useState: ke,
    useDebugValue: ke,
    useDeferredValue: ke,
    useTransition: ke,
    useMutableSource: ke,
    useSyncExternalStore: ke,
    useId: ke,
    unstable_isNewReconciler: !1,
  },
  Rm = {
    readContext: Ze,
    useCallback: function (e, t) {
      return ((ht().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Ze,
    useEffect: cu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Fl(4194308, 4, Sd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Fl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Fl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ht();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = ht();
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
        (e = e.dispatch = $m.bind(null, le, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ht();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: uu,
    useDebugValue: ra,
    useDeferredValue: function (e) {
      return (ht().memoizedState = e);
    },
    useTransition: function () {
      var e = uu(!1),
        t = e[0];
      return ((e = Fm.bind(null, e[1])), (ht().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = le,
        l = ht();
      if (te) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), ge === null)) throw Error(C(349));
        xn & 30 || pd(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        cu(hd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Kr(9, md.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ht(),
        t = ge.identifierPrefix;
      if (te) {
        var n = Nt,
          r = kt;
        ((n = (r & ~(1 << (32 - ut(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = qr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = _m++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Im = {
    readContext: Ze,
    useCallback: Nd,
    useContext: Ze,
    useEffect: na,
    useImperativeHandle: kd,
    useInsertionEffect: xd,
    useLayoutEffect: wd,
    useMemo: jd,
    useReducer: ai,
    useRef: vd,
    useState: function () {
      return ai(Gr);
    },
    useDebugValue: ra,
    useDeferredValue: function (e) {
      var t = et();
      return bd(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = ai(Gr)[0],
        t = et().memoizedState;
      return [e, t];
    },
    useMutableSource: dd,
    useSyncExternalStore: fd,
    useId: Ed,
    unstable_isNewReconciler: !1,
  },
  Am = {
    readContext: Ze,
    useCallback: Nd,
    useContext: Ze,
    useEffect: na,
    useImperativeHandle: kd,
    useInsertionEffect: xd,
    useLayoutEffect: wd,
    useMemo: jd,
    useReducer: ui,
    useRef: vd,
    useState: function () {
      return ui(Gr);
    },
    useDebugValue: ra,
    useDeferredValue: function (e) {
      var t = et();
      return fe === null ? (t.memoizedState = e) : bd(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = ui(Gr)[0],
        t = et().memoizedState;
      return [e, t];
    },
    useMutableSource: dd,
    useSyncExternalStore: fd,
    useId: Ed,
    unstable_isNewReconciler: !1,
  };
function it(e, t) {
  if (e && e.defaultProps) {
    ((t = oe({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Xi(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : oe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Eo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe(),
      l = Gt(e),
      o = jt(r, l);
    ((o.payload = t),
      n != null && (o.callback = n),
      (t = Yt(e, o, l)),
      t !== null && (ct(t, e, l, r), Ml(t, e, l)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe(),
      l = Gt(e),
      o = jt(r, l);
    ((o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Yt(e, o, l)),
      t !== null && (ct(t, e, l, r), Ml(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Pe(),
      r = Gt(e),
      l = jt(n, r);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = Yt(e, l, r)),
      t !== null && (ct(t, e, r, n), Ml(t, e, r)));
  },
};
function du(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Wr(n, r) || !Wr(l, o)
        : !0
  );
}
function Dd(e, t, n) {
  var r = !1,
    l = Jt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ze(o))
      : ((l = $e(t) ? yn : Ee.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Gn(e, l) : Jt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Eo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function fu(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Eo.enqueueReplaceState(t, t.state, null));
}
function Ji(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Gs(e));
  var o = t.contextType;
  (typeof o == "object" && o !== null
    ? (l.context = Ze(o))
    : ((o = $e(t) ? yn : Ee.current), (l.context = Gn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Xi(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Eo.enqueueReplaceState(l, l.state, null),
      no(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308));
}
function Zn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += mp(r)), (r = r.return));
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
function ci(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Zi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Hm = typeof WeakMap == "function" ? WeakMap : Map;
function Od(e, t, n) {
  ((n = jt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (so || ((so = !0), (us = r)), Zi(e, t));
    }),
    n
  );
}
function Ld(e, t, n) {
  ((n = jt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Zi(e, t);
      }));
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        (Zi(e, t),
          typeof r != "function" &&
            (qt === null ? (qt = new Set([this])) : qt.add(this)));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function pu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Hm();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = th.bind(null, e, t, n)), t.then(e, e));
}
function mu(e) {
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
function hu(e, t, n, r, l) {
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
              : ((t = jt(-1, 1)), (t.tag = 2), Yt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Wm = Ot.ReactCurrentOwner,
  _e = !1;
function Ce(e, t, n, r) {
  t.child = e === null ? sd(t, null, n, r) : Xn(t, e.child, n, r);
}
function gu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Qn(t, l),
    (r = ea(e, t, n, r, o, l)),
    (n = ta()),
    e !== null && !_e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Dt(e, t, l))
      : (te && n && Ws(t), (t.flags |= 1), Ce(e, t, r, l), t.child)
  );
}
function yu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !da(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Md(e, t, o, r, l))
      : ((e = Il(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Wr), n(i, r) && e.ref === t.ref)
    )
      return Dt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Kt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Md(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Wr(o, r) && e.ref === t.ref)
      if (((_e = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (_e = !0);
      else return ((t.lanes = e.lanes), Dt(e, t, l));
  }
  return es(e, t, n, r, l);
}
function _d(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        q(Hn, Ie),
        (Ie |= n));
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
          q(Hn, Ie),
          (Ie |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        q(Hn, Ie),
        (Ie |= r));
    }
  else
    (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      q(Hn, Ie),
      (Ie |= r));
  return (Ce(e, t, l, n), t.child);
}
function Fd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function es(e, t, n, r, l) {
  var o = $e(n) ? yn : Ee.current;
  return (
    (o = Gn(t, o)),
    Qn(t, l),
    (n = ea(e, t, n, r, o, l)),
    (r = ta()),
    e !== null && !_e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Dt(e, t, l))
      : (te && r && Ws(t), (t.flags |= 1), Ce(e, t, n, l), t.child)
  );
}
function vu(e, t, n, r, l) {
  if ($e(n)) {
    var o = !0;
    Xl(t);
  } else o = !1;
  if ((Qn(t, l), t.stateNode === null))
    ($l(e, t), Dd(t, n, r), Ji(t, n, r, l), (r = !0));
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ze(c))
      : ((c = $e(n) ? yn : Ee.current), (c = Gn(t, c)));
    var f = n.getDerivedStateFromProps,
      p =
        typeof f == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    (p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== c) && fu(t, i, r, c)),
      ($t = !1));
    var y = t.memoizedState;
    ((i.state = y),
      no(t, r, i, l),
      (u = t.memoizedState),
      a !== r || y !== u || Fe.current || $t
        ? (typeof f == "function" && (Xi(t, n, f, r), (u = t.memoizedState)),
          (a = $t || du(t, n, a, r, y, u, c))
            ? (p ||
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
      ud(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : it(t.type, a)),
      (i.props = c),
      (p = t.pendingProps),
      (y = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ze(u))
        : ((u = $e(n) ? yn : Ee.current), (u = Gn(t, u))));
    var x = n.getDerivedStateFromProps;
    ((f =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== p || y !== u) && fu(t, i, r, u)),
      ($t = !1),
      (y = t.memoizedState),
      (i.state = y),
      no(t, r, i, l));
    var w = t.memoizedState;
    a !== p || y !== w || Fe.current || $t
      ? (typeof x == "function" && (Xi(t, n, x, r), (w = t.memoizedState)),
        (c = $t || du(t, n, c, r, y, w, u) || !1)
          ? (f ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = u),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ts(e, t, n, r, o, l);
}
function ts(e, t, n, r, l, o) {
  Fd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return (l && ru(t, n, !1), Dt(e, t, o));
  ((r = t.stateNode), (Wm.current = t));
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Xn(t, e.child, null, o)), (t.child = Xn(t, null, a, o)))
      : Ce(e, t, a, o),
    (t.memoizedState = r.state),
    l && ru(t, n, !0),
    t.child
  );
}
function $d(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? nu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && nu(e, t.context, !1),
    Ks(e, t.containerInfo));
}
function xu(e, t, n, r, l) {
  return (Kn(), Bs(l), (t.flags |= 256), Ce(e, t, n, r), t.child);
}
var ns = { dehydrated: null, treeContext: null, retryLane: 0 };
function rs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function zd(e, t, n) {
  var r = t.pendingProps,
    l = re.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    q(re, l & 1),
    e === null)
  )
    return (
      Gi(t),
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
                : (o = To(i, r, 0, null)),
              (e = hn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = rs(n)),
              (t.memoizedState = ns),
              e)
            : la(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Um(e, t, i, r, a, l, n);
  if (o) {
    ((o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling));
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Kt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = Kt(a, o)) : ((o = hn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? rs(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ns),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Kt(o, { mode: "visible", children: r.children })),
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
function la(e, t) {
  return (
    (t = To({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Sl(e, t, n, r) {
  return (
    r !== null && Bs(r),
    Xn(t, e.child, null, n),
    (e = la(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Um(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ci(Error(C(422)))), Sl(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = To({ mode: "visible", children: r.children }, l, 0, null)),
          (o = hn(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && Xn(t, e.child, null, i),
          (t.child.memoizedState = rs(i)),
          (t.memoizedState = ns),
          o);
  if (!(t.mode & 1)) return Sl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (o = Error(C(419))),
      (r = ci(o, r, void 0)),
      Sl(e, t, i, r)
    );
  }
  if (((a = (i & e.childLanes) !== 0), _e || a)) {
    if (((r = ge), r !== null)) {
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
          ((o.retryLane = l), Tt(e, l), ct(r, e, l, -1)));
    }
    return (ca(), (r = ci(Error(C(421)))), Sl(e, t, i, r));
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = nh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (He = Qt(l.nextSibling)),
      (We = t),
      (te = !0),
      (at = null),
      e !== null &&
        ((Ge[Ke++] = kt),
        (Ge[Ke++] = Nt),
        (Ge[Ke++] = vn),
        (kt = e.id),
        (Nt = e.overflow),
        (vn = t)),
      (t = la(t, r.children)),
      (t.flags |= 4096),
      t);
}
function wu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Ki(e.return, t, n));
}
function di(e, t, n, r, l) {
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
function Rd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Ce(e, t, r.children, n), (r = re.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && wu(e, n, t);
        else if (e.tag === 19) wu(e, n, t);
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
  if ((q(re, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate),
            e !== null && ro(e) === null && (l = n),
            (n = n.sibling));
        ((n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          di(t, !1, l, n, o));
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ro(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        di(t, !0, n, null, o);
        break;
      case "together":
        di(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function $l(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Dt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (wn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Kt(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Bm(e, t, n) {
  switch (t.tag) {
    case 3:
      ($d(t), Kn());
      break;
    case 5:
      cd(t);
      break;
    case 1:
      $e(t.type) && Xl(t);
      break;
    case 4:
      Ks(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      (q(eo, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (q(re, re.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? zd(e, t, n)
            : (q(re, re.current & 1),
              (e = Dt(e, t, n)),
              e !== null ? e.sibling : null);
      q(re, re.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Rd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        q(re, re.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), _d(e, t, n));
  }
  return Dt(e, t, n);
}
var Id, ls, Ad, Hd;
Id = function (e, t) {
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
ls = function () {};
Ad = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = t.stateNode), dn(xt.current));
    var o = null;
    switch (n) {
      case "input":
        ((l = Ei(e, l)), (r = Ei(e, r)), (o = []));
        break;
      case "select":
        ((l = oe({}, l, { value: void 0 })),
          (r = oe({}, r, { value: void 0 })),
          (o = []));
        break;
      case "textarea":
        ((l = Ti(e, l)), (r = Ti(e, r)), (o = []));
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Gl);
    }
    Oi(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var a = l[c];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Fr.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((a = l != null ? l[c] : void 0),
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
                (Fr.hasOwnProperty(c)
                  ? (u != null && c === "onScroll" && G("scroll", e),
                    o || a === u || (o = []))
                  : (o = o || []).push(c, u));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Hd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function pr(e, t) {
  if (!te)
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
function Ne(e) {
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
function Vm(e, t, n) {
  var r = t.pendingProps;
  switch ((Us(t), t.tag)) {
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
      return (Ne(t), null);
    case 1:
      return ($e(t.type) && Kl(), Ne(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Jn(),
        K(Fe),
        K(Ee),
        Js(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (xl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), at !== null && (fs(at), (at = null)))),
        ls(e, t),
        Ne(t),
        null
      );
    case 5:
      Xs(t);
      var l = dn(Yr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Ad(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return (Ne(t), null);
        }
        if (((e = dn(xt.current)), xl(t))) {
          ((r = t.stateNode), (n = t.type));
          var o = t.memoizedProps;
          switch (((r[gt] = t), (r[Vr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (G("cancel", r), G("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < kr.length; l++) G(kr[l], r);
              break;
            case "source":
              G("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (G("error", r), G("load", r));
              break;
            case "details":
              G("toggle", r);
              break;
            case "input":
              (Ta(r, o), G("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!o.multiple }),
                G("invalid", r));
              break;
            case "textarea":
              (Oa(r, o), G("invalid", r));
          }
          (Oi(n, o), (l = null));
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      vl(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      vl(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : Fr.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  G("scroll", r);
            }
          switch (n) {
            case "input":
              (cl(r), Da(r, o, !0));
              break;
            case "textarea":
              (cl(r), La(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Gl);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = hc(n)),
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
            (e[gt] = t),
            (e[Vr] = r),
            Id(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((i = Li(n, r)), n)) {
              case "dialog":
                (G("cancel", e), G("close", e), (l = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (G("load", e), (l = r));
                break;
              case "video":
              case "audio":
                for (l = 0; l < kr.length; l++) G(kr[l], e);
                l = r;
                break;
              case "source":
                (G("error", e), (l = r));
                break;
              case "img":
              case "image":
              case "link":
                (G("error", e), G("load", e), (l = r));
                break;
              case "details":
                (G("toggle", e), (l = r));
                break;
              case "input":
                (Ta(e, r), (l = Ei(e, r)), G("invalid", e));
                break;
              case "option":
                l = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = oe({}, r, { value: void 0 })),
                  G("invalid", e));
                break;
              case "textarea":
                (Oa(e, r), (l = Ti(e, r)), G("invalid", e));
                break;
              default:
                l = r;
            }
            (Oi(n, l), (a = l));
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style"
                  ? vc(e, u)
                  : o === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && gc(e, u))
                    : o === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && $r(e, u)
                        : typeof u == "number" && $r(e, "" + u)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Fr.hasOwnProperty(o)
                          ? u != null && o === "onScroll" && G("scroll", e)
                          : u != null && Ps(e, o, u, i));
              }
            switch (n) {
              case "input":
                (cl(e), Da(e, r, !1));
                break;
              case "textarea":
                (cl(e), La(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Xt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Wn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Wn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Gl);
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
      return (Ne(t), null);
    case 6:
      if (e && t.stateNode != null) Hd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = dn(Yr.current)), dn(xt.current), xl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[gt] = t),
            (o = r.nodeValue !== n) && ((e = We), e !== null))
          )
            switch (e.tag) {
              case 3:
                vl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  vl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[gt] = t),
            (t.stateNode = r));
      }
      return (Ne(t), null);
    case 13:
      if (
        (K(re),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (te && He !== null && t.mode & 1 && !(t.flags & 128))
          (od(), Kn(), (t.flags |= 98560), (o = !1));
        else if (((o = xl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(C(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(C(317));
            o[gt] = t;
          } else
            (Kn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Ne(t), (o = !1));
        } else (at !== null && (fs(at), (at = null)), (o = !0));
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || re.current & 1 ? pe === 0 && (pe = 3) : ca())),
          t.updateQueue !== null && (t.flags |= 4),
          Ne(t),
          null);
    case 4:
      return (
        Jn(),
        ls(e, t),
        e === null && Ur(t.stateNode.containerInfo),
        Ne(t),
        null
      );
    case 10:
      return (Ys(t.type._context), Ne(t), null);
    case 17:
      return ($e(t.type) && Kl(), Ne(t), null);
    case 19:
      if ((K(re), (o = t.memoizedState), o === null)) return (Ne(t), null);
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) pr(o, !1);
        else {
          if (pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ro(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    pr(o, !1),
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
                return (q(re, (re.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ae() > er &&
            ((t.flags |= 128), (r = !0), pr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ro(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              pr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !te)
            )
              return (Ne(t), null);
          } else
            2 * ae() - o.renderingStartTime > er &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), pr(o, !1), (t.lanes = 4194304));
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
          (o.renderingStartTime = ae()),
          (t.sibling = null),
          (n = re.current),
          q(re, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ne(t), null);
    case 22:
    case 23:
      return (
        ua(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ie & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function Qm(e, t) {
  switch ((Us(t), t.tag)) {
    case 1:
      return (
        $e(t.type) && Kl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Jn(),
        K(Fe),
        K(Ee),
        Js(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Xs(t), null);
    case 13:
      if ((K(re), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        Kn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (K(re), null);
    case 4:
      return (Jn(), null);
    case 10:
      return (Ys(t.type._context), null);
    case 22:
    case 23:
      return (ua(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var kl = !1,
  je = !1,
  Ym = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function An(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ie(e, t, r);
      }
    else n.current = null;
}
function os(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var Su = !1;
function qm(e, t) {
  if (((Wi = Ql), (e = Qc()), Hs(e))) {
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
            a = -1,
            u = -1,
            c = 0,
            f = 0,
            p = e,
            y = null;
          t: for (;;) {
            for (
              var x;
              p !== n || (l !== 0 && p.nodeType !== 3) || (a = i + l),
                p !== o || (r !== 0 && p.nodeType !== 3) || (u = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (x = p.firstChild) !== null;
            )
              ((y = p), (p = x));
            for (;;) {
              if (p === e) break t;
              if (
                (y === n && ++c === l && (a = i),
                y === o && ++f === r && (u = i),
                (x = p.nextSibling) !== null)
              )
                break;
              ((p = y), (y = p.parentNode));
            }
            p = x;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ui = { focusedElem: e, selectionRange: n }, Ql = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (O = e));
    else
      for (; O !== null; ) {
        t = O;
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
                    N = w.memoizedState,
                    m = t.stateNode,
                    d = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : it(t.type, S),
                      N,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = d;
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
                throw Error(C(163));
            }
        } catch (v) {
          ie(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (O = e));
          break;
        }
        O = t.return;
      }
  return ((w = Su), (Su = !1), w);
}
function Dr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        ((l.destroy = void 0), o !== void 0 && os(t, n, o));
      }
      l = l.next;
    } while (l !== r);
  }
}
function Co(e, t) {
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
function is(e) {
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
function Wd(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Wd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[gt], delete t[Vr], delete t[Qi], delete t[Dm], delete t[Om])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Ud(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ku(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ud(e.return)) return null;
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
function ss(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Gl)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ss(e, t, n), e = e.sibling; e !== null; )
      (ss(e, t, n), (e = e.sibling));
}
function as(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (as(e, t, n), e = e.sibling; e !== null; )
      (as(e, t, n), (e = e.sibling));
}
var xe = null,
  st = !1;
function Lt(e, t, n) {
  for (n = n.child; n !== null; ) (Bd(e, t, n), (n = n.sibling));
}
function Bd(e, t, n) {
  if (vt && typeof vt.onCommitFiberUnmount == "function")
    try {
      vt.onCommitFiberUnmount(xo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      je || An(n, t);
    case 6:
      var r = xe,
        l = st;
      ((xe = null),
        Lt(e, t, n),
        (xe = r),
        (st = l),
        xe !== null &&
          (st
            ? ((e = xe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : xe.removeChild(n.stateNode)));
      break;
    case 18:
      xe !== null &&
        (st
          ? ((e = xe),
            (n = n.stateNode),
            e.nodeType === 8
              ? li(e.parentNode, n)
              : e.nodeType === 1 && li(e, n),
            Ar(e))
          : li(xe, n.stateNode));
      break;
    case 4:
      ((r = xe),
        (l = st),
        (xe = n.stateNode.containerInfo),
        (st = !0),
        Lt(e, t, n),
        (xe = r),
        (st = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !je &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          ((o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && os(n, t, i),
            (l = l.next));
        } while (l !== r);
      }
      Lt(e, t, n);
      break;
    case 1:
      if (
        !je &&
        (An(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          ie(n, t, a);
        }
      Lt(e, t, n);
      break;
    case 21:
      Lt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((je = (r = je) || n.memoizedState !== null), Lt(e, t, n), (je = r))
        : Lt(e, t, n);
      break;
    default:
      Lt(e, t, n);
  }
}
function Nu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Ym()),
      t.forEach(function (r) {
        var l = rh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      }));
  }
}
function ot(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((xe = a.stateNode), (st = !1));
              break e;
            case 3:
              ((xe = a.stateNode.containerInfo), (st = !0));
              break e;
            case 4:
              ((xe = a.stateNode.containerInfo), (st = !0));
              break e;
          }
          a = a.return;
        }
        if (xe === null) throw Error(C(160));
        (Bd(o, i, l), (xe = null), (st = !1));
        var u = l.alternate;
        (u !== null && (u.return = null), (l.return = null));
      } catch (c) {
        ie(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Vd(t, e), (t = t.sibling));
}
function Vd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ot(t, e), mt(e), r & 4)) {
        try {
          (Dr(3, e, e.return), Co(3, e));
        } catch (S) {
          ie(e, e.return, S);
        }
        try {
          Dr(5, e, e.return);
        } catch (S) {
          ie(e, e.return, S);
        }
      }
      break;
    case 1:
      (ot(t, e), mt(e), r & 512 && n !== null && An(n, n.return));
      break;
    case 5:
      if (
        (ot(t, e),
        mt(e),
        r & 512 && n !== null && An(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          $r(l, "");
        } catch (S) {
          ie(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            (a === "input" && o.type === "radio" && o.name != null && pc(l, o),
              Li(a, i));
            var c = Li(a, o);
            for (i = 0; i < u.length; i += 2) {
              var f = u[i],
                p = u[i + 1];
              f === "style"
                ? vc(l, p)
                : f === "dangerouslySetInnerHTML"
                  ? gc(l, p)
                  : f === "children"
                    ? $r(l, p)
                    : Ps(l, f, p, c);
            }
            switch (a) {
              case "input":
                Ci(l, o);
                break;
              case "textarea":
                mc(l, o);
                break;
              case "select":
                var y = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var x = o.value;
                x != null
                  ? Wn(l, !!o.multiple, x, !1)
                  : y !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Wn(l, !!o.multiple, o.defaultValue, !0)
                      : Wn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Vr] = o;
          } catch (S) {
            ie(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((ot(t, e), mt(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        ((l = e.stateNode), (o = e.memoizedProps));
        try {
          l.nodeValue = o;
        } catch (S) {
          ie(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (ot(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ar(t.containerInfo);
        } catch (S) {
          ie(e, e.return, S);
        }
      break;
    case 4:
      (ot(t, e), mt(e));
      break;
    case 13:
      (ot(t, e),
        mt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (sa = ae())),
        r & 4 && Nu(e));
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((je = (c = je) || f), ot(t, e), (je = c)) : ot(t, e),
        mt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !f && e.mode & 1)
        )
          for (O = e, f = e.child; f !== null; ) {
            for (p = O = f; O !== null; ) {
              switch (((y = O), (x = y.child), y.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Dr(4, y, y.return);
                  break;
                case 1:
                  An(y, y.return);
                  var w = y.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    ((r = y), (n = y.return));
                    try {
                      ((t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount());
                    } catch (S) {
                      ie(r, n, S);
                    }
                  }
                  break;
                case 5:
                  An(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    bu(p);
                    continue;
                  }
              }
              x !== null ? ((x.return = y), (O = x)) : bu(p);
            }
            f = f.sibling;
          }
        e: for (f = null, p = e; ; ) {
          if (p.tag === 5) {
            if (f === null) {
              f = p;
              try {
                ((l = p.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = p.stateNode),
                      (u = p.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = yc("display", i))));
              } catch (S) {
                ie(e, e.return, S);
              }
            }
          } else if (p.tag === 6) {
            if (f === null)
              try {
                p.stateNode.nodeValue = c ? "" : p.memoizedProps;
              } catch (S) {
                ie(e, e.return, S);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            ((p.child.return = p), (p = p.child));
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            (f === p && (f = null), (p = p.return));
          }
          (f === p && (f = null),
            (p.sibling.return = p.return),
            (p = p.sibling));
        }
      }
      break;
    case 19:
      (ot(t, e), mt(e), r & 4 && Nu(e));
      break;
    case 21:
      break;
    default:
      (ot(t, e), mt(e));
  }
}
function mt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ud(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && ($r(l, ""), (r.flags &= -33));
          var o = ku(e);
          as(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = ku(e);
          ss(e, a, i);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      ie(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Gm(e, t, n) {
  ((O = e), Qd(e));
}
function Qd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var l = O,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || kl;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || je;
        a = kl;
        var c = je;
        if (((kl = i), (je = u) && !c))
          for (O = l; O !== null; )
            ((i = O),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Eu(l)
                : u !== null
                  ? ((u.return = i), (O = u))
                  : Eu(l));
        for (; o !== null; ) ((O = o), Qd(o), (o = o.sibling));
        ((O = l), (kl = a), (je = c));
      }
      ju(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (O = o)) : ju(e);
  }
}
function ju(e) {
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
              je || Co(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !je)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : it(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && au(t, o, r);
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
                au(t, i, n);
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
                    var p = f.dehydrated;
                    p !== null && Ar(p);
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
              throw Error(C(163));
          }
        je || (t.flags & 512 && is(t));
      } catch (y) {
        ie(t, t.return, y);
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
function bu(e) {
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
function Eu(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Co(4, t);
          } catch (u) {
            ie(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ie(t, l, u);
            }
          }
          var o = t.return;
          try {
            is(t);
          } catch (u) {
            ie(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            is(t);
          } catch (u) {
            ie(t, i, u);
          }
      }
    } catch (u) {
      ie(t, t.return, u);
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
var Km = Math.ceil,
  io = Ot.ReactCurrentDispatcher,
  oa = Ot.ReactCurrentOwner,
  Je = Ot.ReactCurrentBatchConfig,
  H = 0,
  ge = null,
  ce = null,
  we = 0,
  Ie = 0,
  Hn = en(0),
  pe = 0,
  Xr = null,
  wn = 0,
  Po = 0,
  ia = 0,
  Or = null,
  Me = null,
  sa = 0,
  er = 1 / 0,
  wt = null,
  so = !1,
  us = null,
  qt = null,
  Nl = !1,
  Ht = null,
  ao = 0,
  Lr = 0,
  cs = null,
  zl = -1,
  Rl = 0;
function Pe() {
  return H & 6 ? ae() : zl !== -1 ? zl : (zl = ae());
}
function Gt(e) {
  return e.mode & 1
    ? H & 2 && we !== 0
      ? we & -we
      : Mm.transition !== null
        ? (Rl === 0 && (Rl = Dc()), Rl)
        : ((e = B),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : zc(e.type))),
          e)
    : 1;
}
function ct(e, t, n, r) {
  if (50 < Lr) throw ((Lr = 0), (cs = null), Error(C(185)));
  (el(e, n, r),
    (!(H & 2) || e !== ge) &&
      (e === ge && (!(H & 2) && (Po |= n), pe === 4 && Rt(e, we)),
      ze(e, r),
      n === 1 && H === 0 && !(t.mode & 1) && ((er = ae() + 500), jo && tn())));
}
function ze(e, t) {
  var n = e.callbackNode;
  Mp(e, t);
  var r = Vl(e, e === ge ? we : 0);
  if (r === 0)
    (n !== null && Fa(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Fa(n), t === 1))
      (e.tag === 0 ? Lm(Cu.bind(null, e)) : nd(Cu.bind(null, e)),
        Pm(function () {
          !(H & 6) && tn();
        }),
        (n = null));
    else {
      switch (Oc(r)) {
        case 1:
          n = Ms;
          break;
        case 4:
          n = Pc;
          break;
        case 16:
          n = Bl;
          break;
        case 536870912:
          n = Tc;
          break;
        default:
          n = Bl;
      }
      n = ef(n, Yd.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Yd(e, t) {
  if (((zl = -1), (Rl = 0), H & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Yn() && e.callbackNode !== n) return null;
  var r = Vl(e, e === ge ? we : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = uo(e, r);
  else {
    t = r;
    var l = H;
    H |= 2;
    var o = Gd();
    (ge !== e || we !== t) && ((wt = null), (er = ae() + 500), mn(e, t));
    do
      try {
        Zm();
        break;
      } catch (a) {
        qd(e, a);
      }
    while (!0);
    (Qs(),
      (io.current = o),
      (H = l),
      ce !== null ? (t = 0) : ((ge = null), (we = 0), (t = pe)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = zi(e)), l !== 0 && ((r = l), (t = ds(e, l)))), t === 1)
    )
      throw ((n = Xr), mn(e, 0), Rt(e, r), ze(e, ae()), n);
    if (t === 6) Rt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Xm(l) &&
          ((t = uo(e, r)),
          t === 2 && ((o = zi(e)), o !== 0 && ((r = o), (t = ds(e, o)))),
          t === 1))
      )
        throw ((n = Xr), mn(e, 0), Rt(e, r), ze(e, ae()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          on(e, Me, wt);
          break;
        case 3:
          if (
            (Rt(e, r), (r & 130023424) === r && ((t = sa + 500 - ae()), 10 < t))
          ) {
            if (Vl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (Pe(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = Vi(on.bind(null, e, Me, wt), t);
            break;
          }
          on(e, Me, wt);
          break;
        case 4:
          if ((Rt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - ut(r);
            ((o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o));
          }
          if (
            ((r = l),
            (r = ae() - r),
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
                          : 1960 * Km(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Vi(on.bind(null, e, Me, wt), r);
            break;
          }
          on(e, Me, wt);
          break;
        case 5:
          on(e, Me, wt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return (ze(e, ae()), e.callbackNode === n ? Yd.bind(null, e) : null);
}
function ds(e, t) {
  var n = Or;
  return (
    e.current.memoizedState.isDehydrated && (mn(e, t).flags |= 256),
    (e = uo(e, t)),
    e !== 2 && ((t = Me), (Me = n), t !== null && fs(t)),
    e
  );
}
function fs(e) {
  Me === null ? (Me = e) : Me.push.apply(Me, e);
}
function Xm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!dt(o(), l)) return !1;
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
function Rt(e, t) {
  for (
    t &= ~ia,
      t &= ~Po,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - ut(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Cu(e) {
  if (H & 6) throw Error(C(327));
  Yn();
  var t = Vl(e, 0);
  if (!(t & 1)) return (ze(e, ae()), null);
  var n = uo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = zi(e);
    r !== 0 && ((t = r), (n = ds(e, r)));
  }
  if (n === 1) throw ((n = Xr), mn(e, 0), Rt(e, t), ze(e, ae()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    on(e, Me, wt),
    ze(e, ae()),
    null
  );
}
function aa(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    ((H = n), H === 0 && ((er = ae() + 500), jo && tn()));
  }
}
function Sn(e) {
  Ht !== null && Ht.tag === 0 && !(H & 6) && Yn();
  var t = H;
  H |= 1;
  var n = Je.transition,
    r = B;
  try {
    if (((Je.transition = null), (B = 1), e)) return e();
  } finally {
    ((B = r), (Je.transition = n), (H = t), !(H & 6) && tn());
  }
}
function ua() {
  ((Ie = Hn.current), K(Hn));
}
function mn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Cm(n)), ce !== null))
    for (n = ce.return; n !== null; ) {
      var r = n;
      switch ((Us(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Kl());
          break;
        case 3:
          (Jn(), K(Fe), K(Ee), Js());
          break;
        case 5:
          Xs(r);
          break;
        case 4:
          Jn();
          break;
        case 13:
          K(re);
          break;
        case 19:
          K(re);
          break;
        case 10:
          Ys(r.type._context);
          break;
        case 22:
        case 23:
          ua();
      }
      n = n.return;
    }
  if (
    ((ge = e),
    (ce = e = Kt(e.current, null)),
    (we = Ie = t),
    (pe = 0),
    (Xr = null),
    (ia = Po = wn = 0),
    (Me = Or = null),
    cn !== null)
  ) {
    for (t = 0; t < cn.length; t++)
      if (((n = cn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          ((o.next = l), (r.next = i));
        }
        n.pending = r;
      }
    cn = null;
  }
  return e;
}
function qd(e, t) {
  do {
    var n = ce;
    try {
      if ((Qs(), (_l.current = oo), lo)) {
        for (var r = le.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        lo = !1;
      }
      if (
        ((xn = 0),
        (he = fe = le = null),
        (Tr = !1),
        (qr = 0),
        (oa.current = null),
        n === null || n.return === null)
      ) {
        ((pe = 1), (Xr = t), (ce = null));
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
            p = f.tag;
          if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var y = f.alternate;
            y
              ? ((f.updateQueue = y.updateQueue),
                (f.memoizedState = y.memoizedState),
                (f.lanes = y.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var x = mu(i);
          if (x !== null) {
            ((x.flags &= -257),
              hu(x, i, a, o, t),
              x.mode & 1 && pu(o, c, t),
              (t = x),
              (u = c));
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              (S.add(u), (t.updateQueue = S));
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              (pu(o, c, t), ca());
              break e;
            }
            u = Error(C(426));
          }
        } else if (te && a.mode & 1) {
          var N = mu(i);
          if (N !== null) {
            (!(N.flags & 65536) && (N.flags |= 256),
              hu(N, i, a, o, t),
              Bs(Zn(u, a)));
            break e;
          }
        }
        ((o = u = Zn(u, a)),
          pe !== 4 && (pe = 2),
          Or === null ? (Or = [o]) : Or.push(o),
          (o = i));
        do {
          switch (o.tag) {
            case 3:
              ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
              var m = Od(o, u, t);
              su(o, m);
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
                    (qt === null || !qt.has(g))))
              ) {
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var v = Ld(o, a, t);
                su(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Xd(n);
    } catch (b) {
      ((t = b), ce === n && n !== null && (ce = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Gd() {
  var e = io.current;
  return ((io.current = oo), e === null ? oo : e);
}
function ca() {
  ((pe === 0 || pe === 3 || pe === 2) && (pe = 4),
    ge === null || (!(wn & 268435455) && !(Po & 268435455)) || Rt(ge, we));
}
function uo(e, t) {
  var n = H;
  H |= 2;
  var r = Gd();
  (ge !== e || we !== t) && ((wt = null), mn(e, t));
  do
    try {
      Jm();
      break;
    } catch (l) {
      qd(e, l);
    }
  while (!0);
  if ((Qs(), (H = n), (io.current = r), ce !== null)) throw Error(C(261));
  return ((ge = null), (we = 0), pe);
}
function Jm() {
  for (; ce !== null; ) Kd(ce);
}
function Zm() {
  for (; ce !== null && !jp(); ) Kd(ce);
}
function Kd(e) {
  var t = Zd(e.alternate, e, Ie);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Xd(e) : (ce = t),
    (oa.current = null));
}
function Xd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Qm(n, t)), n !== null)) {
        ((n.flags &= 32767), (ce = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((pe = 6), (ce = null));
        return;
      }
    } else if (((n = Vm(n, t, Ie)), n !== null)) {
      ce = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ce = t;
      return;
    }
    ce = t = e;
  } while (t !== null);
  pe === 0 && (pe = 5);
}
function on(e, t, n) {
  var r = B,
    l = Je.transition;
  try {
    ((Je.transition = null), (B = 1), eh(e, t, n, r));
  } finally {
    ((Je.transition = l), (B = r));
  }
  return null;
}
function eh(e, t, n, r) {
  do Yn();
  while (Ht !== null);
  if (H & 6) throw Error(C(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var o = n.lanes | n.childLanes;
  if (
    (_p(e, o),
    e === ge && ((ce = ge = null), (we = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Nl ||
      ((Nl = !0),
      ef(Bl, function () {
        return (Yn(), null);
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ((o = Je.transition), (Je.transition = null));
    var i = B;
    B = 1;
    var a = H;
    ((H |= 4),
      (oa.current = null),
      qm(e, n),
      Vd(n, e),
      wm(Ui),
      (Ql = !!Wi),
      (Ui = Wi = null),
      (e.current = n),
      Gm(n),
      bp(),
      (H = a),
      (B = i),
      (Je.transition = o));
  } else e.current = n;
  if (
    (Nl && ((Nl = !1), (Ht = e), (ao = l)),
    (o = e.pendingLanes),
    o === 0 && (qt = null),
    Pp(n.stateNode),
    ze(e, ae()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (so) throw ((so = !1), (e = us), (us = null), e);
  return (
    ao & 1 && e.tag !== 0 && Yn(),
    (o = e.pendingLanes),
    o & 1 ? (e === cs ? Lr++ : ((Lr = 0), (cs = e))) : (Lr = 0),
    tn(),
    null
  );
}
function Yn() {
  if (Ht !== null) {
    var e = Oc(ao),
      t = Je.transition,
      n = B;
    try {
      if (((Je.transition = null), (B = 16 > e ? 16 : e), Ht === null))
        var r = !1;
      else {
        if (((e = Ht), (Ht = null), (ao = 0), H & 6)) throw Error(C(331));
        var l = H;
        for (H |= 4, O = e.current; O !== null; ) {
          var o = O,
            i = o.child;
          if (O.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var c = a[u];
                for (O = c; O !== null; ) {
                  var f = O;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dr(8, f, o);
                  }
                  var p = f.child;
                  if (p !== null) ((p.return = f), (O = p));
                  else
                    for (; O !== null; ) {
                      f = O;
                      var y = f.sibling,
                        x = f.return;
                      if ((Wd(f), f === c)) {
                        O = null;
                        break;
                      }
                      if (y !== null) {
                        ((y.return = x), (O = y));
                        break;
                      }
                      O = x;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var N = S.sibling;
                    ((S.sibling = null), (S = N));
                  } while (S !== null);
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
                    Dr(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                ((m.return = o.return), (O = m));
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
                      Co(9, a);
                  }
                } catch (b) {
                  ie(a, a.return, b);
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
          ((H = l), tn(), vt && typeof vt.onPostCommitFiberRoot == "function")
        )
          try {
            vt.onPostCommitFiberRoot(xo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((B = n), (Je.transition = t));
    }
  }
  return !1;
}
function Pu(e, t, n) {
  ((t = Zn(n, t)),
    (t = Od(e, t, 1)),
    (e = Yt(e, t, 1)),
    (t = Pe()),
    e !== null && (el(e, 1, t), ze(e, t)));
}
function ie(e, t, n) {
  if (e.tag === 3) Pu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Pu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (qt === null || !qt.has(r)))
        ) {
          ((e = Zn(n, e)),
            (e = Ld(t, e, 1)),
            (t = Yt(t, e, 1)),
            (e = Pe()),
            t !== null && (el(t, 1, e), ze(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function th(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Pe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ge === e &&
      (we & n) === n &&
      (pe === 4 || (pe === 3 && (we & 130023424) === we && 500 > ae() - sa)
        ? mn(e, 0)
        : (ia |= n)),
    ze(e, t));
}
function Jd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = pl), (pl <<= 1), !(pl & 130023424) && (pl = 4194304))
      : (t = 1));
  var n = Pe();
  ((e = Tt(e, t)), e !== null && (el(e, t, n), ze(e, n)));
}
function nh(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Jd(e, n));
}
function rh(e, t) {
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
      throw Error(C(314));
  }
  (r !== null && r.delete(t), Jd(e, n));
}
var Zd;
Zd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Fe.current) _e = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((_e = !1), Bm(e, t, n));
      _e = !!(e.flags & 131072);
    }
  else ((_e = !1), te && t.flags & 1048576 && rd(t, Zl, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ($l(e, t), (e = t.pendingProps));
      var l = Gn(t, Ee.current);
      (Qn(t, n), (l = ea(null, t, r, e, l, n)));
      var o = ta();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            $e(r) ? ((o = !0), Xl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Gs(t),
            (l.updater = Eo),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ji(t, r, e, n),
            (t = ts(null, t, r, !0, o, n)))
          : ((t.tag = 0), te && o && Ws(t), Ce(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          ($l(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = oh(r)),
          (e = it(r, e)),
          l)
        ) {
          case 0:
            t = es(null, t, r, e, n);
            break e;
          case 1:
            t = vu(null, t, r, e, n);
            break e;
          case 11:
            t = gu(null, t, r, e, n);
            break e;
          case 14:
            t = yu(null, t, r, it(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : it(r, l)),
        es(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : it(r, l)),
        vu(e, t, r, l, n)
      );
    case 3:
      e: {
        if (($d(t), e === null)) throw Error(C(387));
        ((r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          ud(e, t),
          no(t, r, null, n));
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
            ((l = Zn(Error(C(423)), t)), (t = xu(e, t, r, n, l)));
            break e;
          } else if (r !== l) {
            ((l = Zn(Error(C(424)), t)), (t = xu(e, t, r, n, l)));
            break e;
          } else
            for (
              He = Qt(t.stateNode.containerInfo.firstChild),
                We = t,
                te = !0,
                at = null,
                n = sd(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Kn(), r === l)) {
            t = Dt(e, t, n);
            break e;
          }
          Ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        cd(t),
        e === null && Gi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Bi(r, l) ? (i = null) : o !== null && Bi(r, o) && (t.flags |= 32),
        Fd(e, t),
        Ce(e, t, i, n),
        t.child
      );
    case 6:
      return (e === null && Gi(t), null);
    case 13:
      return zd(e, t, n);
    case 4:
      return (
        Ks(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Xn(t, null, r, n)) : Ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : it(r, l)),
        gu(e, t, r, l, n)
      );
    case 7:
      return (Ce(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Ce(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Ce(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          q(eo, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (dt(o.value, i)) {
            if (o.children === l.children && !Fe.current) {
              t = Dt(e, t, n);
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
                      ((u = jt(-1, n & -n)), (u.tag = 2));
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var f = c.pending;
                        (f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (c.pending = u));
                      }
                    }
                    ((o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Ki(o.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(C(341));
                ((i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Ki(i, n, t),
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
        (Ce(e, t, l.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Qn(t, n),
        (l = Ze(l)),
        (r = r(l)),
        (t.flags |= 1),
        Ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = it(r, t.pendingProps)),
        (l = it(r.type, l)),
        yu(e, t, r, l, n)
      );
    case 15:
      return Md(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : it(r, l)),
        $l(e, t),
        (t.tag = 1),
        $e(r) ? ((e = !0), Xl(t)) : (e = !1),
        Qn(t, n),
        Dd(t, r, l),
        Ji(t, r, l, n),
        ts(null, t, r, !0, e, n)
      );
    case 19:
      return Rd(e, t, n);
    case 22:
      return _d(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function ef(e, t) {
  return Cc(e, t);
}
function lh(e, t, n, r) {
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
function Xe(e, t, n, r) {
  return new lh(e, t, n, r);
}
function da(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function oh(e) {
  if (typeof e == "function") return da(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ds)) return 11;
    if (e === Os) return 14;
  }
  return 2;
}
function Kt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Xe(e.tag, t, e.key, e.mode)),
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
function Il(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) da(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case On:
        return hn(n.children, l, o, t);
      case Ts:
        ((i = 8), (l |= 8));
        break;
      case ki:
        return (
          (e = Xe(12, n, t, l | 2)),
          (e.elementType = ki),
          (e.lanes = o),
          e
        );
      case Ni:
        return ((e = Xe(13, n, t, l)), (e.elementType = Ni), (e.lanes = o), e);
      case ji:
        return ((e = Xe(19, n, t, l)), (e.elementType = ji), (e.lanes = o), e);
      case cc:
        return To(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ac:
              i = 10;
              break e;
            case uc:
              i = 9;
              break e;
            case Ds:
              i = 11;
              break e;
            case Os:
              i = 14;
              break e;
            case Ft:
              ((i = 16), (r = null));
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Xe(i, n, t, l)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = o),
    t
  );
}
function hn(e, t, n, r) {
  return ((e = Xe(7, e, r, t)), (e.lanes = n), e);
}
function To(e, t, n, r) {
  return (
    (e = Xe(22, e, r, t)),
    (e.elementType = cc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function fi(e, t, n) {
  return ((e = Xe(6, e, null, t)), (e.lanes = n), e);
}
function pi(e, t, n) {
  return (
    (t = Xe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ih(e, t, n, r, l) {
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
    (this.eventTimes = Yo(0)),
    (this.expirationTimes = Yo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Yo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function fa(e, t, n, r, l, o, i, a, u) {
  return (
    (e = new ih(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Xe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Gs(o),
    e
  );
}
function sh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function tf(e) {
  if (!e) return Jt;
  e = e._reactInternals;
  e: {
    if (jn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if ($e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if ($e(n)) return td(e, n, t);
  }
  return t;
}
function nf(e, t, n, r, l, o, i, a, u) {
  return (
    (e = fa(n, r, !0, e, l, o, i, a, u)),
    (e.context = tf(null)),
    (n = e.current),
    (r = Pe()),
    (l = Gt(n)),
    (o = jt(r, l)),
    (o.callback = t ?? null),
    Yt(n, o, l),
    (e.current.lanes = l),
    el(e, l, r),
    ze(e, r),
    e
  );
}
function Do(e, t, n, r) {
  var l = t.current,
    o = Pe(),
    i = Gt(l);
  return (
    (n = tf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = jt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Yt(l, t, i)),
    e !== null && (ct(e, l, i, o), Ml(e, l, i)),
    i
  );
}
function co(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Tu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function pa(e, t) {
  (Tu(e, t), (e = e.alternate) && Tu(e, t));
}
function ah() {
  return null;
}
var rf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ma(e) {
  this._internalRoot = e;
}
Oo.prototype.render = ma.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Do(e, t, null, null);
};
Oo.prototype.unmount = ma.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Sn(function () {
      Do(null, e, null, null);
    }),
      (t[Pt] = null));
  }
};
function Oo(e) {
  this._internalRoot = e;
}
Oo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = _c();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < zt.length && t !== 0 && t < zt[n].priority; n++);
    (zt.splice(n, 0, e), n === 0 && $c(e));
  }
};
function ha(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Lo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Du() {}
function uh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = co(i);
        o.call(c);
      };
    }
    var i = nf(t, r, e, 0, null, !1, !1, "", Du);
    return (
      (e._reactRootContainer = i),
      (e[Pt] = i.current),
      Ur(e.nodeType === 8 ? e.parentNode : e),
      Sn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = co(u);
      a.call(c);
    };
  }
  var u = fa(e, 0, !1, null, null, !1, !1, "", Du);
  return (
    (e._reactRootContainer = u),
    (e[Pt] = u.current),
    Ur(e.nodeType === 8 ? e.parentNode : e),
    Sn(function () {
      Do(t, u, n, r);
    }),
    u
  );
}
function Mo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = co(i);
        a.call(u);
      };
    }
    Do(t, i, e, l);
  } else i = uh(n, t, e, l, r);
  return co(i);
}
Lc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Sr(t.pendingLanes);
        n !== 0 &&
          (_s(t, n | 1), ze(t, ae()), !(H & 6) && ((er = ae() + 500), tn()));
      }
      break;
    case 13:
      (Sn(function () {
        var r = Tt(e, 1);
        if (r !== null) {
          var l = Pe();
          ct(r, e, 1, l);
        }
      }),
        pa(e, 1));
  }
};
Fs = function (e) {
  if (e.tag === 13) {
    var t = Tt(e, 134217728);
    if (t !== null) {
      var n = Pe();
      ct(t, e, 134217728, n);
    }
    pa(e, 134217728);
  }
};
Mc = function (e) {
  if (e.tag === 13) {
    var t = Gt(e),
      n = Tt(e, t);
    if (n !== null) {
      var r = Pe();
      ct(n, e, t, r);
    }
    pa(e, t);
  }
};
_c = function () {
  return B;
};
Fc = function (e, t) {
  var n = B;
  try {
    return ((B = e), t());
  } finally {
    B = n;
  }
};
_i = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ci(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = No(r);
            if (!l) throw Error(C(90));
            (fc(r), Ci(r, l));
          }
        }
      }
      break;
    case "textarea":
      mc(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Wn(e, !!n.multiple, t, !1));
  }
};
Sc = aa;
kc = Sn;
var ch = { usingClientEntryPoint: !1, Events: [nl, Fn, No, xc, wc, aa] },
  mr = {
    findFiberByHostInstance: un,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  dh = {
    bundleType: mr.bundleType,
    version: mr.version,
    rendererPackageName: mr.rendererPackageName,
    rendererConfig: mr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ot.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = bc(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: mr.findFiberByHostInstance || ah,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var jl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jl.isDisabled && jl.supportsFiber)
    try {
      ((xo = jl.inject(dh)), (vt = jl));
    } catch {}
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ch;
Be.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ha(t)) throw Error(C(200));
  return sh(e, t, null, n);
};
Be.createRoot = function (e, t) {
  if (!ha(e)) throw Error(C(299));
  var n = !1,
    r = "",
    l = rf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = fa(e, 1, !1, null, null, n, !1, r, l)),
    (e[Pt] = t.current),
    Ur(e.nodeType === 8 ? e.parentNode : e),
    new ma(t)
  );
};
Be.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return ((e = bc(t)), (e = e === null ? null : e.stateNode), e);
};
Be.flushSync = function (e) {
  return Sn(e);
};
Be.hydrate = function (e, t, n) {
  if (!Lo(t)) throw Error(C(200));
  return Mo(null, e, t, !0, n);
};
Be.hydrateRoot = function (e, t, n) {
  if (!ha(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = rf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = nf(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Pt] = t.current),
    Ur(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l));
  return new Oo(t);
};
Be.render = function (e, t, n) {
  if (!Lo(t)) throw Error(C(200));
  return Mo(null, e, t, !1, n);
};
Be.unmountComponentAtNode = function (e) {
  if (!Lo(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Sn(function () {
        Mo(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Pt] = null));
        });
      }),
      !0)
    : !1;
};
Be.unstable_batchedUpdates = aa;
Be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Lo(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Mo(e, t, n, !1, r);
};
Be.version = "18.3.1-next-f1338f8080-20240426";
function lf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lf);
    } catch (e) {
      console.error(e);
    }
}
(lf(), (lc.exports = Be));
var _o = lc.exports,
  of,
  Ou = _o;
((of = Ou.createRoot), Ou.hydrateRoot);
function ft(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || (typeof e == "object" && t === "[object Date]")
    ? new e.constructor(+e)
    : typeof e == "number" ||
        t === "[object Number]" ||
        typeof e == "string" ||
        t === "[object String]"
      ? new Date(e)
      : new Date(NaN);
}
function kn(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const sf = 6048e5,
  fh = 864e5;
let ph = {};
function Fo() {
  return ph;
}
function Jr(e, t) {
  var a, u, c, f;
  const n = Fo(),
    r =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((u = (a = t == null ? void 0 : t.locale) == null ? void 0 : a.options) ==
      null
        ? void 0
        : u.weekStartsOn) ??
      n.weekStartsOn ??
      ((f = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : f.weekStartsOn) ??
      0,
    l = ft(e),
    o = l.getDay(),
    i = (o < r ? 7 : 0) + o - r;
  return (l.setDate(l.getDate() - i), l.setHours(0, 0, 0, 0), l);
}
function fo(e) {
  return Jr(e, { weekStartsOn: 1 });
}
function af(e) {
  const t = ft(e),
    n = t.getFullYear(),
    r = kn(e, 0);
  (r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0));
  const l = fo(r),
    o = kn(e, 0);
  (o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0));
  const i = fo(o);
  return t.getTime() >= l.getTime()
    ? n + 1
    : t.getTime() >= i.getTime()
      ? n
      : n - 1;
}
function Lu(e) {
  const t = ft(e);
  return (t.setHours(0, 0, 0, 0), t);
}
function Mu(e) {
  const t = ft(e),
    n = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds(),
      ),
    );
  return (n.setUTCFullYear(t.getFullYear()), +e - +n);
}
function mh(e, t) {
  const n = Lu(e),
    r = Lu(t),
    l = +n - Mu(n),
    o = +r - Mu(r);
  return Math.round((l - o) / fh);
}
function hh(e) {
  const t = af(e),
    n = kn(e, 0);
  return (n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), fo(n));
}
function gh(e) {
  return (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  );
}
function yh(e) {
  if (!gh(e) && typeof e != "number") return !1;
  const t = ft(e);
  return !isNaN(Number(t));
}
function vh(e) {
  const t = ft(e),
    n = kn(e, 0);
  return (n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n);
}
const xh = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  wh = (e, t, n) => {
    let r;
    const l = xh[e];
    return (
      typeof l == "string"
        ? (r = l)
        : t === 1
          ? (r = l.one)
          : (r = l.other.replace("{{count}}", t.toString())),
      n != null && n.addSuffix
        ? n.comparison && n.comparison > 0
          ? "in " + r
          : r + " ago"
        : r
    );
  };
function mi(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Sh = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  kh = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  Nh = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  jh = {
    date: mi({ formats: Sh, defaultWidth: "full" }),
    time: mi({ formats: kh, defaultWidth: "full" }),
    dateTime: mi({ formats: Nh, defaultWidth: "full" }),
  },
  bh = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  Eh = (e, t, n, r) => bh[e];
function hr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let l;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth,
        a = n != null && n.width ? String(n.width) : i;
      l = e.formattingValues[a] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth,
        a = n != null && n.width ? String(n.width) : e.defaultWidth;
      l = e.values[a] || e.values[i];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return l[o];
  };
}
const Ch = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  Ph = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  Th = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  Dh = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  Oh = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  Lh = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  Mh = (e, t) => {
    const n = Number(e),
      r = n % 100;
    if (r > 20 || r < 10)
      switch (r % 10) {
        case 1:
          return n + "st";
        case 2:
          return n + "nd";
        case 3:
          return n + "rd";
      }
    return n + "th";
  },
  _h = {
    ordinalNumber: Mh,
    era: hr({ values: Ch, defaultWidth: "wide" }),
    quarter: hr({
      values: Ph,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: hr({ values: Th, defaultWidth: "wide" }),
    day: hr({ values: Dh, defaultWidth: "wide" }),
    dayPeriod: hr({
      values: Oh,
      defaultWidth: "wide",
      formattingValues: Lh,
      defaultFormattingWidth: "wide",
    }),
  };
function gr(e) {
  return (t, n = {}) => {
    const r = n.width,
      l = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      o = t.match(l);
    if (!o) return null;
    const i = o[0],
      a = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      u = Array.isArray(a) ? $h(a, (p) => p.test(i)) : Fh(a, (p) => p.test(i));
    let c;
    ((c = e.valueCallback ? e.valueCallback(u) : u),
      (c = n.valueCallback ? n.valueCallback(c) : c));
    const f = t.slice(i.length);
    return { value: c, rest: f };
  };
}
function Fh(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function $h(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function zh(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const l = r[0],
      o = t.match(e.parsePattern);
    if (!o) return null;
    let i = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const a = t.slice(l.length);
    return { value: i, rest: a };
  };
}
const Rh = /^(\d+)(th|st|nd|rd)?/i,
  Ih = /\d+/i,
  Ah = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  Hh = { any: [/^b/i, /^(a|c)/i] },
  Wh = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  Uh = { any: [/1/i, /2/i, /3/i, /4/i] },
  Bh = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  Vh = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  Qh = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  Yh = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  qh = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  Gh = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  Kh = {
    ordinalNumber: zh({
      matchPattern: Rh,
      parsePattern: Ih,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: gr({
      matchPatterns: Ah,
      defaultMatchWidth: "wide",
      parsePatterns: Hh,
      defaultParseWidth: "any",
    }),
    quarter: gr({
      matchPatterns: Wh,
      defaultMatchWidth: "wide",
      parsePatterns: Uh,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: gr({
      matchPatterns: Bh,
      defaultMatchWidth: "wide",
      parsePatterns: Vh,
      defaultParseWidth: "any",
    }),
    day: gr({
      matchPatterns: Qh,
      defaultMatchWidth: "wide",
      parsePatterns: Yh,
      defaultParseWidth: "any",
    }),
    dayPeriod: gr({
      matchPatterns: qh,
      defaultMatchWidth: "any",
      parsePatterns: Gh,
      defaultParseWidth: "any",
    }),
  },
  Xh = {
    code: "en-US",
    formatDistance: wh,
    formatLong: jh,
    formatRelative: Eh,
    localize: _h,
    match: Kh,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function Jh(e) {
  const t = ft(e);
  return mh(t, vh(t)) + 1;
}
function Zh(e) {
  const t = ft(e),
    n = +fo(t) - +hh(t);
  return Math.round(n / sf) + 1;
}
function uf(e, t) {
  var f, p, y, x;
  const n = ft(e),
    r = n.getFullYear(),
    l = Fo(),
    o =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((p = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) ==
      null
        ? void 0
        : p.firstWeekContainsDate) ??
      l.firstWeekContainsDate ??
      ((x = (y = l.locale) == null ? void 0 : y.options) == null
        ? void 0
        : x.firstWeekContainsDate) ??
      1,
    i = kn(e, 0);
  (i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0));
  const a = Jr(i, t),
    u = kn(e, 0);
  (u.setFullYear(r, 0, o), u.setHours(0, 0, 0, 0));
  const c = Jr(u, t);
  return n.getTime() >= a.getTime()
    ? r + 1
    : n.getTime() >= c.getTime()
      ? r
      : r - 1;
}
function e0(e, t) {
  var a, u, c, f;
  const n = Fo(),
    r =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((u = (a = t == null ? void 0 : t.locale) == null ? void 0 : a.options) ==
      null
        ? void 0
        : u.firstWeekContainsDate) ??
      n.firstWeekContainsDate ??
      ((f = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : f.firstWeekContainsDate) ??
      1,
    l = uf(e, t),
    o = kn(e, 0);
  return (o.setFullYear(l, 0, r), o.setHours(0, 0, 0, 0), Jr(o, t));
}
function t0(e, t) {
  const n = ft(e),
    r = +Jr(n, t) - +e0(n, t);
  return Math.round(r / sf) + 1;
}
function U(e, t) {
  const n = e < 0 ? "-" : "",
    r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Mt = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return U(t === "yy" ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === "M" ? String(n + 1) : U(n + 1, 2);
    },
    d(e, t) {
      return U(e.getDate(), t.length);
    },
    a(e, t) {
      const n = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.toUpperCase();
        case "aaa":
          return n;
        case "aaaaa":
          return n[0];
        case "aaaa":
        default:
          return n === "am" ? "a.m." : "p.m.";
      }
    },
    h(e, t) {
      return U(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return U(e.getHours(), t.length);
    },
    m(e, t) {
      return U(e.getMinutes(), t.length);
    },
    s(e, t) {
      return U(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        l = Math.trunc(r * Math.pow(10, n - 3));
      return U(l, t.length);
    },
  },
  Tn = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  _u = {
    G: function (e, t, n) {
      const r = e.getFullYear() > 0 ? 1 : 0;
      switch (t) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(r, { width: "abbreviated" });
        case "GGGGG":
          return n.era(r, { width: "narrow" });
        case "GGGG":
        default:
          return n.era(r, { width: "wide" });
      }
    },
    y: function (e, t, n) {
      if (t === "yo") {
        const r = e.getFullYear(),
          l = r > 0 ? r : 1 - r;
        return n.ordinalNumber(l, { unit: "year" });
      }
      return Mt.y(e, t);
    },
    Y: function (e, t, n, r) {
      const l = uf(e, r),
        o = l > 0 ? l : 1 - l;
      if (t === "YY") {
        const i = o % 100;
        return U(i, 2);
      }
      return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : U(o, t.length);
    },
    R: function (e, t) {
      const n = af(e);
      return U(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return U(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return U(r, 2);
        case "Qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "QQQ":
          return n.quarter(r, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return n.quarter(r, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return n.quarter(r, { width: "wide", context: "formatting" });
      }
    },
    q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "q":
          return String(r);
        case "qq":
          return U(r, 2);
        case "qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "qqq":
          return n.quarter(r, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return n.quarter(r, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return n.quarter(r, { width: "wide", context: "standalone" });
      }
    },
    M: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "M":
        case "MM":
          return Mt.M(e, t);
        case "Mo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "MMM":
          return n.month(r, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return n.month(r, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return n.month(r, { width: "wide", context: "formatting" });
      }
    },
    L: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case "L":
          return String(r + 1);
        case "LL":
          return U(r + 1, 2);
        case "Lo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "LLL":
          return n.month(r, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return n.month(r, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return n.month(r, { width: "wide", context: "standalone" });
      }
    },
    w: function (e, t, n, r) {
      const l = t0(e, r);
      return t === "wo" ? n.ordinalNumber(l, { unit: "week" }) : U(l, t.length);
    },
    I: function (e, t, n) {
      const r = Zh(e);
      return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : U(r, t.length);
    },
    d: function (e, t, n) {
      return t === "do"
        ? n.ordinalNumber(e.getDate(), { unit: "date" })
        : Mt.d(e, t);
    },
    D: function (e, t, n) {
      const r = Jh(e);
      return t === "Do"
        ? n.ordinalNumber(r, { unit: "dayOfYear" })
        : U(r, t.length);
    },
    E: function (e, t, n) {
      const r = e.getDay();
      switch (t) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return n.day(r, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    e: function (e, t, n, r) {
      const l = e.getDay(),
        o = (l - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(o);
        case "ee":
          return U(o, 2);
        case "eo":
          return n.ordinalNumber(o, { unit: "day" });
        case "eee":
          return n.day(l, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return n.day(l, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return n.day(l, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return n.day(l, { width: "wide", context: "formatting" });
      }
    },
    c: function (e, t, n, r) {
      const l = e.getDay(),
        o = (l - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(o);
        case "cc":
          return U(o, t.length);
        case "co":
          return n.ordinalNumber(o, { unit: "day" });
        case "ccc":
          return n.day(l, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return n.day(l, { width: "narrow", context: "standalone" });
        case "cccccc":
          return n.day(l, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return n.day(l, { width: "wide", context: "standalone" });
      }
    },
    i: function (e, t, n) {
      const r = e.getDay(),
        l = r === 0 ? 7 : r;
      switch (t) {
        case "i":
          return String(l);
        case "ii":
          return U(l, t.length);
        case "io":
          return n.ordinalNumber(l, { unit: "day" });
        case "iii":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return n.day(r, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    a: function (e, t, n) {
      const l = e.getHours() / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.dayPeriod(l, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return n
            .dayPeriod(l, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return n.dayPeriod(l, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return n.dayPeriod(l, { width: "wide", context: "formatting" });
      }
    },
    b: function (e, t, n) {
      const r = e.getHours();
      let l;
      switch (
        (r === 12
          ? (l = Tn.noon)
          : r === 0
            ? (l = Tn.midnight)
            : (l = r / 12 >= 1 ? "pm" : "am"),
        t)
      ) {
        case "b":
        case "bb":
          return n.dayPeriod(l, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return n
            .dayPeriod(l, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return n.dayPeriod(l, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return n.dayPeriod(l, { width: "wide", context: "formatting" });
      }
    },
    B: function (e, t, n) {
      const r = e.getHours();
      let l;
      switch (
        (r >= 17
          ? (l = Tn.evening)
          : r >= 12
            ? (l = Tn.afternoon)
            : r >= 4
              ? (l = Tn.morning)
              : (l = Tn.night),
        t)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(l, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return n.dayPeriod(l, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return n.dayPeriod(l, { width: "wide", context: "formatting" });
      }
    },
    h: function (e, t, n) {
      if (t === "ho") {
        let r = e.getHours() % 12;
        return (r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" }));
      }
      return Mt.h(e, t);
    },
    H: function (e, t, n) {
      return t === "Ho"
        ? n.ordinalNumber(e.getHours(), { unit: "hour" })
        : Mt.H(e, t);
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : U(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return (
        r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : U(r, t.length)
      );
    },
    m: function (e, t, n) {
      return t === "mo"
        ? n.ordinalNumber(e.getMinutes(), { unit: "minute" })
        : Mt.m(e, t);
    },
    s: function (e, t, n) {
      return t === "so"
        ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
        : Mt.s(e, t);
    },
    S: function (e, t) {
      return Mt.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (t) {
        case "X":
          return $u(r);
        case "XXXX":
        case "XX":
          return sn(r);
        case "XXXXX":
        case "XXX":
        default:
          return sn(r, ":");
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "x":
          return $u(r);
        case "xxxx":
        case "xx":
          return sn(r);
        case "xxxxx":
        case "xxx":
        default:
          return sn(r, ":");
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Fu(r, ":");
        case "OOOO":
        default:
          return "GMT" + sn(r, ":");
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Fu(r, ":");
        case "zzzz":
        default:
          return "GMT" + sn(r, ":");
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return U(r, t.length);
    },
    T: function (e, t, n) {
      const r = e.getTime();
      return U(r, t.length);
    },
  };
function Fu(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    l = Math.trunc(r / 60),
    o = r % 60;
  return o === 0 ? n + String(l) : n + String(l) + t + U(o, 2);
}
function $u(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + U(Math.abs(e) / 60, 2) : sn(e, t);
}
function sn(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    l = U(Math.trunc(r / 60), 2),
    o = U(r % 60, 2);
  return n + l + t + o;
}
const zu = (e, t) => {
    switch (e) {
      case "P":
        return t.date({ width: "short" });
      case "PP":
        return t.date({ width: "medium" });
      case "PPP":
        return t.date({ width: "long" });
      case "PPPP":
      default:
        return t.date({ width: "full" });
    }
  },
  cf = (e, t) => {
    switch (e) {
      case "p":
        return t.time({ width: "short" });
      case "pp":
        return t.time({ width: "medium" });
      case "ppp":
        return t.time({ width: "long" });
      case "pppp":
      default:
        return t.time({ width: "full" });
    }
  },
  n0 = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      l = n[2];
    if (!l) return zu(e, t);
    let o;
    switch (r) {
      case "P":
        o = t.dateTime({ width: "short" });
        break;
      case "PP":
        o = t.dateTime({ width: "medium" });
        break;
      case "PPP":
        o = t.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        o = t.dateTime({ width: "full" });
        break;
    }
    return o.replace("{{date}}", zu(r, t)).replace("{{time}}", cf(l, t));
  },
  r0 = { p: cf, P: n0 },
  l0 = /^D+$/,
  o0 = /^Y+$/,
  i0 = ["D", "DD", "YY", "YYYY"];
function s0(e) {
  return l0.test(e);
}
function a0(e) {
  return o0.test(e);
}
function u0(e, t, n) {
  const r = c0(e, t, n);
  if ((console.warn(r), i0.includes(e))) throw new RangeError(r);
}
function c0(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const d0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  f0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  p0 = /^'([^]*?)'?$/,
  m0 = /''/g,
  h0 = /[a-zA-Z]/;
function de(e, t, n) {
  var f, p, y, x;
  const r = Fo(),
    l = r.locale ?? Xh,
    o =
      r.firstWeekContainsDate ??
      ((p = (f = r.locale) == null ? void 0 : f.options) == null
        ? void 0
        : p.firstWeekContainsDate) ??
      1,
    i =
      r.weekStartsOn ??
      ((x = (y = r.locale) == null ? void 0 : y.options) == null
        ? void 0
        : x.weekStartsOn) ??
      0,
    a = ft(e);
  if (!yh(a)) throw new RangeError("Invalid time value");
  let u = t
    .match(f0)
    .map((w) => {
      const S = w[0];
      if (S === "p" || S === "P") {
        const N = r0[S];
        return N(w, l.formatLong);
      }
      return w;
    })
    .join("")
    .match(d0)
    .map((w) => {
      if (w === "''") return { isToken: !1, value: "'" };
      const S = w[0];
      if (S === "'") return { isToken: !1, value: g0(w) };
      if (_u[S]) return { isToken: !0, value: w };
      if (S.match(h0))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            S +
            "`",
        );
      return { isToken: !1, value: w };
    });
  l.localize.preprocessor && (u = l.localize.preprocessor(a, u));
  const c = { firstWeekContainsDate: o, weekStartsOn: i, locale: l };
  return u
    .map((w) => {
      if (!w.isToken) return w.value;
      const S = w.value;
      (a0(S) || s0(S)) && u0(S, t, String(e));
      const N = _u[S[0]];
      return N(a, S, l.localize, c);
    })
    .join("");
}
function g0(e) {
  const t = e.match(p0);
  return t ? t[1].replace(m0, "'") : e;
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var y0 = {
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
 */ const v0 = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  ye = (e, t) => {
    const n = h.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: i,
          className: a = "",
          children: u,
          ...c
        },
        f,
      ) =>
        h.createElement(
          "svg",
          {
            ref: f,
            ...y0,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(o) * 24) / Number(l) : o,
            className: ["lucide", `lucide-${v0(e)}`, a].join(" "),
            ...c,
          },
          [
            ...t.map(([p, y]) => h.createElement(p, y)),
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
 */ const Mr = ye("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ru = ye("Calendar", [
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
 */ const ps = ye("Camera", [
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
 */ const x0 = ye("CheckCircle2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w0 = ye("CheckSquare", [
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
 */ const df = ye("FileSpreadsheet", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M8 13h2", key: "yr2amv" }],
  ["path", { d: "M14 13h2", key: "un5t4a" }],
  ["path", { d: "M8 17h2", key: "2yhykz" }],
  ["path", { d: "M14 17h2", key: "10kma7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S0 = ye("Globe", [
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
 */ const Iu = ye("Hash", [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k0 = ye("Layers", [
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
 */ const N0 = ye("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j0 = ye("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bl = ye("Package", [
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
 */ const ff = ye("ScanLine", [
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
 */ const pf = ye("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Au = ye("Square", [
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
 */ const Hu = ye("Trash2", [
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
 */ const Wu = ye("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tr = ye("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
var b0 = Object.defineProperty,
  E0 = (e, t, n) =>
    t in e
      ? b0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  hi = (e, t, n) => (E0(e, typeof t != "symbol" ? t + "" : t, n), n);
let C0 = class {
    constructor() {
      (hi(this, "current", this.detect()),
        hi(this, "handoffState", "pending"),
        hi(this, "currentId", 0));
    }
    set(t) {
      this.current !== t &&
        ((this.handoffState = "pending"),
        (this.currentId = 0),
        (this.current = t));
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window > "u" || typeof document > "u" ? "server" : "client";
    }
    handoff() {
      this.handoffState === "pending" && (this.handoffState = "complete");
    }
    get isHandoffComplete() {
      return this.handoffState === "complete";
    }
  },
  bt = new C0(),
  tt = (e, t) => {
    bt.isServer ? h.useEffect(e, t) : h.useLayoutEffect(e, t);
  };
function Et(e) {
  let t = h.useRef(e);
  return (
    tt(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let ne = function (e) {
  let t = Et(e);
  return R.useCallback((...n) => t.current(...n), [t]);
};
function $o(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          }),
        );
}
function bn() {
  let e = [],
    t = {
      addEventListener(n, r, l, o) {
        return (
          n.addEventListener(r, l, o),
          t.add(() => n.removeEventListener(r, l, o))
        );
      },
      requestAnimationFrame(...n) {
        let r = requestAnimationFrame(...n);
        return t.add(() => cancelAnimationFrame(r));
      },
      nextFrame(...n) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
      },
      setTimeout(...n) {
        let r = setTimeout(...n);
        return t.add(() => clearTimeout(r));
      },
      microTask(...n) {
        let r = { current: !0 };
        return (
          $o(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, l) {
        let o = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: l }),
          this.add(() => {
            Object.assign(n.style, { [r]: o });
          })
        );
      },
      group(n) {
        let r = bn();
        return (n(r), this.add(() => r.dispose()));
      },
      add(n) {
        return (
          e.push(n),
          () => {
            let r = e.indexOf(n);
            if (r >= 0) for (let l of e.splice(r, 1)) l();
          }
        );
      },
      dispose() {
        for (let n of e.splice(0)) n();
      },
    };
  return t;
}
function ga() {
  let [e] = h.useState(bn);
  return (h.useEffect(() => () => e.dispose(), [e]), e);
}
function P0() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in _r
    ? ((t) => t.useSyncExternalStore)(_r)(
        () => () => {},
        () => !1,
        () => !e,
      )
    : !1;
}
function or() {
  let e = P0(),
    [t, n] = h.useState(bt.isHandoffComplete);
  return (
    t && bt.isHandoffComplete === !1 && n(!1),
    h.useEffect(() => {
      t !== !0 && n(!0);
    }, [t]),
    h.useEffect(() => bt.handoff(), []),
    e ? !1 : t
  );
}
var Uu;
let ir =
  (Uu = R.useId) != null
    ? Uu
    : function () {
        let e = or(),
          [t, n] = R.useState(e ? () => bt.nextId() : null);
        return (
          tt(() => {
            t === null && n(bt.nextId());
          }, [t]),
          t != null ? "" + t : void 0
        );
      };
function be(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t,
    )
      .map((l) => `"${l}"`)
      .join(", ")}.`,
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, be), r);
}
function mf(e) {
  return bt.isServer
    ? null
    : e instanceof Node
      ? e.ownerDocument
      : e != null && e.hasOwnProperty("current") && e.current instanceof Node
        ? e.current.ownerDocument
        : document;
}
let ms = [
  "[contentEditable=true]",
  "[tabindex]",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "iframe",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
]
  .map((e) => `${e}:not([tabindex='-1'])`)
  .join(",");
var an = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(an || {}),
  hf = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(hf || {}),
  T0 = ((e) => (
    (e[(e.Previous = -1)] = "Previous"),
    (e[(e.Next = 1)] = "Next"),
    e
  ))(T0 || {});
function D0(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(ms)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER),
        ),
      );
}
var gf = ((e) => (
  (e[(e.Strict = 0)] = "Strict"),
  (e[(e.Loose = 1)] = "Loose"),
  e
))(gf || {});
function O0(e, t = 0) {
  var n;
  return e === ((n = mf(e)) == null ? void 0 : n.body)
    ? !1
    : be(t, {
        0() {
          return e.matches(ms);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(ms)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
var L0 = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"),
  (e[(e.Mouse = 1)] = "Mouse"),
  e
))(L0 || {});
typeof window < "u" &&
  typeof document < "u" &&
  (document.addEventListener(
    "keydown",
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0,
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0,
  ));
function gn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let M0 = ["textarea", "input"].join(",");
function _0(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, M0)) !=
    null
    ? n
    : !1;
}
function F0(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let l = t(n),
      o = t(r);
    if (l === null || o === null) return 0;
    let i = l.compareDocumentPosition(o);
    return i & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : i & Node.DOCUMENT_POSITION_PRECEDING
        ? 1
        : 0;
  });
}
function Al(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: l = [] } = {},
) {
  let o = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    i = Array.isArray(e) ? (n ? F0(e) : e) : D0(e);
  (l.length > 0 && i.length > 1 && (i = i.filter((x) => !l.includes(x))),
    (r = r ?? o.activeElement));
  let a = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      );
    })(),
    u = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, i.indexOf(r)) - 1;
      if (t & 4) return Math.max(0, i.indexOf(r)) + 1;
      if (t & 8) return i.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      );
    })(),
    c = t & 32 ? { preventScroll: !0 } : {},
    f = 0,
    p = i.length,
    y;
  do {
    if (f >= p || f + p <= 0) return 0;
    let x = u + f;
    if (t & 16) x = (x + p) % p;
    else {
      if (x < 0) return 3;
      if (x >= p) return 1;
    }
    ((y = i[x]), y == null || y.focus(c), (f += a));
  } while (y !== o.activeElement);
  return (t & 6 && _0(y) && y.select(), 2);
}
function yf() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function $0() {
  return /Android/gi.test(window.navigator.userAgent);
}
function z0() {
  return yf() || $0();
}
function El(e, t, n) {
  let r = Et(t);
  h.useEffect(() => {
    function l(o) {
      r.current(o);
    }
    return (
      document.addEventListener(e, l, n),
      () => document.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function vf(e, t, n) {
  let r = Et(t);
  h.useEffect(() => {
    function l(o) {
      r.current(o);
    }
    return (
      window.addEventListener(e, l, n),
      () => window.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function R0(e, t, n = !0) {
  let r = h.useRef(!1);
  h.useEffect(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function l(i, a) {
    if (!r.current || i.defaultPrevented) return;
    let u = a(i);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
    let c = (function f(p) {
      return typeof p == "function"
        ? f(p())
        : Array.isArray(p) || p instanceof Set
          ? p
          : [p];
    })(e);
    for (let f of c) {
      if (f === null) continue;
      let p = f instanceof HTMLElement ? f : f.current;
      if (
        (p != null && p.contains(u)) ||
        (i.composed && i.composedPath().includes(p))
      )
        return;
    }
    return (
      !O0(u, gf.Loose) && u.tabIndex !== -1 && i.preventDefault(),
      t(i, u)
    );
  }
  let o = h.useRef(null);
  (El(
    "pointerdown",
    (i) => {
      var a, u;
      r.current &&
        (o.current =
          ((u = (a = i.composedPath) == null ? void 0 : a.call(i)) == null
            ? void 0
            : u[0]) || i.target);
    },
    !0,
  ),
    El(
      "mousedown",
      (i) => {
        var a, u;
        r.current &&
          (o.current =
            ((u = (a = i.composedPath) == null ? void 0 : a.call(i)) == null
              ? void 0
              : u[0]) || i.target);
      },
      !0,
    ),
    El(
      "click",
      (i) => {
        z0() || (o.current && (l(i, () => o.current), (o.current = null)));
      },
      !0,
    ),
    El(
      "touchend",
      (i) => l(i, () => (i.target instanceof HTMLElement ? i.target : null)),
      !0,
    ),
    vf(
      "blur",
      (i) =>
        l(i, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null,
        ),
      !0,
    ));
}
function ll(...e) {
  return h.useMemo(() => mf(...e), [...e]);
}
let xf = Symbol();
function I0(e, t = !0) {
  return Object.assign(e, { [xf]: t });
}
function pt(...e) {
  let t = h.useRef(e);
  h.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = ne((r) => {
    for (let l of t.current)
      l != null && (typeof l == "function" ? l(r) : (l.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[xf])) ? void 0 : n;
}
function ya(e, t) {
  let n = h.useRef([]),
    r = ne(e);
  h.useEffect(() => {
    let l = [...n.current];
    for (let [o, i] of t.entries())
      if (n.current[o] !== i) {
        let a = r(t, l);
        return ((n.current = t), a);
      }
  }, [r, ...t]);
}
function po(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == "string" ? t.split(" ") : []))),
  )
    .filter(Boolean)
    .join(" ");
}
var mo = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(mo || {}),
  Wt = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"),
    (e[(e.Hidden = 1)] = "Hidden"),
    e
  ))(Wt || {});
function nt({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: l,
  visible: o = !0,
  name: i,
  mergeRefs: a,
}) {
  a = a ?? A0;
  let u = wf(t, e);
  if (o) return Cl(u, n, r, i, a);
  let c = l ?? 0;
  if (c & 2) {
    let { static: f = !1, ...p } = u;
    if (f) return Cl(p, n, r, i, a);
  }
  if (c & 1) {
    let { unmount: f = !0, ...p } = u;
    return be(f ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return Cl({ ...p, hidden: !0, style: { display: "none" } }, n, r, i, a);
      },
    });
  }
  return Cl(u, n, r, i, a);
}
function Cl(e, t = {}, n, r, l) {
  let {
      as: o = n,
      children: i,
      refName: a = "ref",
      ...u
    } = gi(e, ["unmount", "static"]),
    c = e.ref !== void 0 ? { [a]: e.ref } : {},
    f = typeof i == "function" ? i(t) : i;
  "className" in u &&
    u.className &&
    typeof u.className == "function" &&
    (u.className = u.className(t));
  let p = {};
  if (t) {
    let y = !1,
      x = [];
    for (let [w, S] of Object.entries(t))
      (typeof S == "boolean" && (y = !0), S === !0 && x.push(w));
    y && (p["data-headlessui-state"] = x.join(" "));
  }
  if (o === h.Fragment && Object.keys(Bu(u)).length > 0) {
    if (!h.isValidElement(f) || (Array.isArray(f) && f.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${r} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(u).map((S) => `  - ${S}`).join(`
`),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element.",
          ].map((S) => `  - ${S}`).join(`
`),
        ].join(`
`),
      );
    let y = f.props,
      x =
        typeof (y == null ? void 0 : y.className) == "function"
          ? (...S) => po(y == null ? void 0 : y.className(...S), u.className)
          : po(y == null ? void 0 : y.className, u.className),
      w = x ? { className: x } : {};
    return h.cloneElement(
      f,
      Object.assign(
        {},
        wf(f.props, Bu(gi(u, ["ref"]))),
        p,
        c,
        { ref: l(f.ref, c.ref) },
        w,
      ),
    );
  }
  return h.createElement(
    o,
    Object.assign(
      {},
      gi(u, ["ref"]),
      o !== h.Fragment && c,
      o !== h.Fragment && p,
    ),
    f,
  );
}
function A0(...e) {
  return e.every((t) => t == null)
    ? void 0
    : (t) => {
        for (let n of e)
          n != null && (typeof n == "function" ? n(t) : (n.current = t));
      };
}
function wf(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let l in r)
      l.startsWith("on") && typeof r[l] == "function"
        ? (n[l] != null || (n[l] = []), n[l].push(r[l]))
        : (t[l] = r[l]);
  if (t.disabled || t["aria-disabled"])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map((r) => [r, void 0])),
    );
  for (let r in n)
    Object.assign(t, {
      [r](l, ...o) {
        let i = n[r];
        for (let a of i) {
          if (
            (l instanceof Event ||
              (l == null ? void 0 : l.nativeEvent) instanceof Event) &&
            l.defaultPrevented
          )
            return;
          a(l, ...o);
        }
      },
    });
  return t;
}
function Qe(e) {
  var t;
  return Object.assign(h.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function Bu(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function gi(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let H0 = "div";
var ho = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(ho || {});
function W0(e, t) {
  var n;
  let { features: r = 1, ...l } = e,
    o = {
      ref: t,
      "aria-hidden":
        (r & 2) === 2 ? !0 : (n = l["aria-hidden"]) != null ? n : void 0,
      hidden: (r & 4) === 4 ? !0 : void 0,
      style: {
        position: "fixed",
        top: 1,
        left: 1,
        width: 1,
        height: 0,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        borderWidth: "0",
        ...((r & 4) === 4 && (r & 2) !== 2 && { display: "none" }),
      },
    };
  return nt({
    ourProps: o,
    theirProps: l,
    slot: {},
    defaultTag: H0,
    name: "Hidden",
  });
}
let hs = Qe(W0),
  va = h.createContext(null);
va.displayName = "OpenClosedContext";
var Ae = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(Ae || {});
function xa() {
  return h.useContext(va);
}
function U0({ value: e, children: t }) {
  return R.createElement(va.Provider, { value: e }, t);
}
function B0(e) {
  function t() {
    document.readyState !== "loading" &&
      (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
let It = [];
B0(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      It[0] !== t.target &&
      (It.unshift(t.target),
      (It = It.filter((n) => n != null && n.isConnected)),
      It.splice(10));
  }
  (window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 }));
});
function V0(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    (t instanceof HTMLLegendElement && (n = t), (t = t.parentElement));
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && Q0(n) ? !1 : r;
}
function Q0(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
var Sf = ((e) => (
  (e.Space = " "),
  (e.Enter = "Enter"),
  (e.Escape = "Escape"),
  (e.Backspace = "Backspace"),
  (e.Delete = "Delete"),
  (e.ArrowLeft = "ArrowLeft"),
  (e.ArrowUp = "ArrowUp"),
  (e.ArrowRight = "ArrowRight"),
  (e.ArrowDown = "ArrowDown"),
  (e.Home = "Home"),
  (e.End = "End"),
  (e.PageUp = "PageUp"),
  (e.PageDown = "PageDown"),
  (e.Tab = "Tab"),
  e
))(Sf || {});
function kf(e, t, n, r) {
  let l = Et(n);
  h.useEffect(() => {
    e = e ?? window;
    function o(i) {
      l.current(i);
    }
    return (e.addEventListener(t, o, r), () => e.removeEventListener(t, o, r));
  }, [e, t, r]);
}
function ol() {
  let e = h.useRef(!1);
  return (
    tt(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      [],
    ),
    e
  );
}
function Nf(e) {
  let t = ne(e),
    n = h.useRef(!1);
  h.useEffect(
    () => (
      (n.current = !1),
      () => {
        ((n.current = !0),
          $o(() => {
            n.current && t();
          }));
      }
    ),
    [t],
  );
}
var Nr = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"),
  (e[(e.Backwards = 1)] = "Backwards"),
  e
))(Nr || {});
function Y0() {
  let e = h.useRef(0);
  return (
    vf(
      "keydown",
      (t) => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
      },
      !0,
    ),
    e
  );
}
function jf(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let q0 = "div";
var bf = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.InitialFocus = 2)] = "InitialFocus"),
  (e[(e.TabLock = 4)] = "TabLock"),
  (e[(e.FocusLock = 8)] = "FocusLock"),
  (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
  (e[(e.All = 30)] = "All"),
  e
))(bf || {});
function G0(e, t) {
  let n = h.useRef(null),
    r = pt(n, t),
    { initialFocus: l, containers: o, features: i = 30, ...a } = e;
  or() || (i = 1);
  let u = ll(n);
  J0({ ownerDocument: u }, !!(i & 16));
  let c = Z0({ ownerDocument: u, container: n, initialFocus: l }, !!(i & 2));
  eg(
    { ownerDocument: u, container: n, containers: o, previousActiveElement: c },
    !!(i & 8),
  );
  let f = Y0(),
    p = ne((S) => {
      let N = n.current;
      N &&
        ((m) => m())(() => {
          be(f.current, {
            [Nr.Forwards]: () => {
              Al(N, an.First, { skipElements: [S.relatedTarget] });
            },
            [Nr.Backwards]: () => {
              Al(N, an.Last, { skipElements: [S.relatedTarget] });
            },
          });
        });
    }),
    y = ga(),
    x = h.useRef(!1),
    w = {
      ref: r,
      onKeyDown(S) {
        S.key == "Tab" &&
          ((x.current = !0),
          y.requestAnimationFrame(() => {
            x.current = !1;
          }));
      },
      onBlur(S) {
        let N = jf(o);
        n.current instanceof HTMLElement && N.add(n.current);
        let m = S.relatedTarget;
        m instanceof HTMLElement &&
          m.dataset.headlessuiFocusGuard !== "true" &&
          (Ef(N, m) ||
            (x.current
              ? Al(
                  n.current,
                  be(f.current, {
                    [Nr.Forwards]: () => an.Next,
                    [Nr.Backwards]: () => an.Previous,
                  }) | an.WrapAround,
                  { relativeTo: S.target },
                )
              : S.target instanceof HTMLElement && gn(S.target)));
      },
    };
  return R.createElement(
    R.Fragment,
    null,
    !!(i & 4) &&
      R.createElement(hs, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: p,
        features: ho.Focusable,
      }),
    nt({ ourProps: w, theirProps: a, defaultTag: q0, name: "FocusTrap" }),
    !!(i & 4) &&
      R.createElement(hs, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: p,
        features: ho.Focusable,
      }),
  );
}
let K0 = Qe(G0),
  yr = Object.assign(K0, { features: bf });
function X0(e = !0) {
  let t = h.useRef(It.slice());
  return (
    ya(
      ([n], [r]) => {
        (r === !0 &&
          n === !1 &&
          $o(() => {
            t.current.splice(0);
          }),
          r === !1 && n === !0 && (t.current = It.slice()));
      },
      [e, It, t],
    ),
    ne(() => {
      var n;
      return (n = t.current.find((r) => r != null && r.isConnected)) != null
        ? n
        : null;
    })
  );
}
function J0({ ownerDocument: e }, t) {
  let n = X0(t);
  (ya(() => {
    t ||
      ((e == null ? void 0 : e.activeElement) ===
        (e == null ? void 0 : e.body) &&
        gn(n()));
  }, [t]),
    Nf(() => {
      t && gn(n());
    }));
}
function Z0({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let l = h.useRef(null),
    o = ol();
  return (
    ya(() => {
      if (!r) return;
      let i = t.current;
      i &&
        $o(() => {
          if (!o.current) return;
          let a = e == null ? void 0 : e.activeElement;
          if (n != null && n.current) {
            if ((n == null ? void 0 : n.current) === a) {
              l.current = a;
              return;
            }
          } else if (i.contains(a)) {
            l.current = a;
            return;
          }
          (n != null && n.current
            ? gn(n.current)
            : Al(i, an.First) === hf.Error &&
              console.warn(
                "There are no focusable elements inside the <FocusTrap />",
              ),
            (l.current = e == null ? void 0 : e.activeElement));
        });
    }, [r]),
    l
  );
}
function eg(
  { ownerDocument: e, container: t, containers: n, previousActiveElement: r },
  l,
) {
  let o = ol();
  kf(
    e == null ? void 0 : e.defaultView,
    "focus",
    (i) => {
      if (!l || !o.current) return;
      let a = jf(n);
      t.current instanceof HTMLElement && a.add(t.current);
      let u = r.current;
      if (!u) return;
      let c = i.target;
      c && c instanceof HTMLElement
        ? Ef(a, c)
          ? ((r.current = c), gn(c))
          : (i.preventDefault(), i.stopPropagation(), gn(u))
        : gn(r.current);
    },
    !0,
  );
}
function Ef(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
let Cf = h.createContext(!1);
function tg() {
  return h.useContext(Cf);
}
function gs(e) {
  return R.createElement(Cf.Provider, { value: e.force }, e.children);
}
function ng(e) {
  let t = tg(),
    n = h.useContext(Pf),
    r = ll(e),
    [l, o] = h.useState(() => {
      if ((!t && n !== null) || bt.isServer) return null;
      let i = r == null ? void 0 : r.getElementById("headlessui-portal-root");
      if (i) return i;
      if (r === null) return null;
      let a = r.createElement("div");
      return (
        a.setAttribute("id", "headlessui-portal-root"),
        r.body.appendChild(a)
      );
    });
  return (
    h.useEffect(() => {
      l !== null &&
        ((r != null && r.body.contains(l)) ||
          r == null ||
          r.body.appendChild(l));
    }, [l, r]),
    h.useEffect(() => {
      t || (n !== null && o(n.current));
    }, [n, o, t]),
    l
  );
}
let rg = h.Fragment;
function lg(e, t) {
  let n = e,
    r = h.useRef(null),
    l = pt(
      I0((f) => {
        r.current = f;
      }),
      t,
    ),
    o = ll(r),
    i = ng(r),
    [a] = h.useState(() => {
      var f;
      return bt.isServer
        ? null
        : (f = o == null ? void 0 : o.createElement("div")) != null
          ? f
          : null;
    }),
    u = h.useContext(ys),
    c = or();
  return (
    tt(() => {
      !i ||
        !a ||
        i.contains(a) ||
        (a.setAttribute("data-headlessui-portal", ""), i.appendChild(a));
    }, [i, a]),
    tt(() => {
      if (a && u) return u.register(a);
    }, [u, a]),
    Nf(() => {
      var f;
      !i ||
        !a ||
        (a instanceof Node && i.contains(a) && i.removeChild(a),
        i.childNodes.length <= 0 &&
          ((f = i.parentElement) == null || f.removeChild(i)));
    }),
    c
      ? !i || !a
        ? null
        : _o.createPortal(
            nt({
              ourProps: { ref: l },
              theirProps: n,
              defaultTag: rg,
              name: "Portal",
            }),
            a,
          )
      : null
  );
}
let og = h.Fragment,
  Pf = h.createContext(null);
function ig(e, t) {
  let { target: n, ...r } = e,
    l = { ref: pt(t) };
  return R.createElement(
    Pf.Provider,
    { value: n },
    nt({ ourProps: l, theirProps: r, defaultTag: og, name: "Popover.Group" }),
  );
}
let ys = h.createContext(null);
function sg() {
  let e = h.useContext(ys),
    t = h.useRef([]),
    n = ne((o) => (t.current.push(o), e && e.register(o), () => r(o))),
    r = ne((o) => {
      let i = t.current.indexOf(o);
      (i !== -1 && t.current.splice(i, 1), e && e.unregister(o));
    }),
    l = h.useMemo(
      () => ({ register: n, unregister: r, portals: t }),
      [n, r, t],
    );
  return [
    t,
    h.useMemo(
      () =>
        function ({ children: o }) {
          return R.createElement(ys.Provider, { value: l }, o);
        },
      [l],
    ),
  ];
}
let ag = Qe(lg),
  ug = Qe(ig),
  vs = Object.assign(ag, { Group: ug });
function cg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const dg = typeof Object.is == "function" ? Object.is : cg,
  { useState: fg, useEffect: pg, useLayoutEffect: mg, useDebugValue: hg } = _r;
function gg(e, t, n) {
  const r = t(),
    [{ inst: l }, o] = fg({ inst: { value: r, getSnapshot: t } });
  return (
    mg(() => {
      ((l.value = r), (l.getSnapshot = t), yi(l) && o({ inst: l }));
    }, [e, r, t]),
    pg(
      () => (
        yi(l) && o({ inst: l }),
        e(() => {
          yi(l) && o({ inst: l });
        })
      ),
      [e],
    ),
    hg(r),
    r
  );
}
function yi(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !dg(n, r);
  } catch {
    return !0;
  }
}
function yg(e, t, n) {
  return t();
}
const vg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  xg = !vg,
  wg = xg ? yg : gg,
  Sg = "useSyncExternalStore" in _r ? ((e) => e.useSyncExternalStore)(_r) : wg;
function kg(e) {
  return Sg(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function Ng(e, t) {
  let n = e(),
    r = new Set();
  return {
    getSnapshot() {
      return n;
    },
    subscribe(l) {
      return (r.add(l), () => r.delete(l));
    },
    dispatch(l, ...o) {
      let i = t[l].call(n, ...o);
      i && ((n = i), r.forEach((a) => a()));
    },
  };
}
function jg() {
  let e;
  return {
    before({ doc: t }) {
      var n;
      let r = t.documentElement;
      e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth;
    },
    after({ doc: t, d: n }) {
      let r = t.documentElement,
        l = r.clientWidth - r.offsetWidth,
        o = e - l;
      n.style(r, "paddingRight", `${o}px`);
    },
  };
}
function bg() {
  return yf()
    ? {
        before({ doc: e, d: t, meta: n }) {
          function r(l) {
            return n.containers.flatMap((o) => o()).some((o) => o.contains(l));
          }
          t.microTask(() => {
            var l;
            if (
              window.getComputedStyle(e.documentElement).scrollBehavior !==
              "auto"
            ) {
              let a = bn();
              (a.style(e.documentElement, "scrollBehavior", "auto"),
                t.add(() => t.microTask(() => a.dispose())));
            }
            let o = (l = window.scrollY) != null ? l : window.pageYOffset,
              i = null;
            (t.addEventListener(
              e,
              "click",
              (a) => {
                if (a.target instanceof HTMLElement)
                  try {
                    let u = a.target.closest("a");
                    if (!u) return;
                    let { hash: c } = new URL(u.href),
                      f = e.querySelector(c);
                    f && !r(f) && (i = f);
                  } catch {}
              },
              !0,
            ),
              t.addEventListener(e, "touchstart", (a) => {
                if (a.target instanceof HTMLElement)
                  if (r(a.target)) {
                    let u = a.target;
                    for (; u.parentElement && r(u.parentElement); )
                      u = u.parentElement;
                    t.style(u, "overscrollBehavior", "contain");
                  } else t.style(a.target, "touchAction", "none");
              }),
              t.addEventListener(
                e,
                "touchmove",
                (a) => {
                  if (a.target instanceof HTMLElement)
                    if (r(a.target)) {
                      let u = a.target;
                      for (
                        ;
                        u.parentElement &&
                        u.dataset.headlessuiPortal !== "" &&
                        !(
                          u.scrollHeight > u.clientHeight ||
                          u.scrollWidth > u.clientWidth
                        );
                      )
                        u = u.parentElement;
                      u.dataset.headlessuiPortal === "" && a.preventDefault();
                    } else a.preventDefault();
                },
                { passive: !1 },
              ),
              t.add(() => {
                var a;
                let u = (a = window.scrollY) != null ? a : window.pageYOffset;
                (o !== u && window.scrollTo(0, o),
                  i &&
                    i.isConnected &&
                    (i.scrollIntoView({ block: "nearest" }), (i = null)));
              }));
          });
        },
      }
    : {};
}
function Eg() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function Cg(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let fn = Ng(() => new Map(), {
  PUSH(e, t) {
    var n;
    let r =
      (n = this.get(e)) != null
        ? n
        : { doc: e, count: 0, d: bn(), meta: new Set() };
    return (r.count++, r.meta.add(t), this.set(e, r), this);
  },
  POP(e, t) {
    let n = this.get(e);
    return (n && (n.count--, n.meta.delete(t)), this);
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
    let r = { doc: e, d: t, meta: Cg(n) },
      l = [bg(), jg(), Eg()];
    (l.forEach(({ before: o }) => (o == null ? void 0 : o(r))),
      l.forEach(({ after: o }) => (o == null ? void 0 : o(r))));
  },
  SCROLL_ALLOW({ d: e }) {
    e.dispose();
  },
  TEARDOWN({ doc: e }) {
    this.delete(e);
  },
});
fn.subscribe(() => {
  let e = fn.getSnapshot(),
    t = new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden",
      l = n.count !== 0;
    (((l && !r) || (!l && r)) &&
      fn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
      n.count === 0 && fn.dispatch("TEARDOWN", n));
  }
});
function Pg(e, t, n) {
  let r = kg(fn),
    l = e ? r.get(e) : void 0,
    o = l ? l.count > 0 : !1;
  return (
    tt(() => {
      if (!(!e || !t))
        return (fn.dispatch("PUSH", e, n), () => fn.dispatch("POP", e, n));
    }, [t, e]),
    o
  );
}
let vi = new Map(),
  vr = new Map();
function Vu(e, t = !0) {
  tt(() => {
    var n;
    if (!t) return;
    let r = typeof e == "function" ? e() : e.current;
    if (!r) return;
    function l() {
      var i;
      if (!r) return;
      let a = (i = vr.get(r)) != null ? i : 1;
      if ((a === 1 ? vr.delete(r) : vr.set(r, a - 1), a !== 1)) return;
      let u = vi.get(r);
      u &&
        (u["aria-hidden"] === null
          ? r.removeAttribute("aria-hidden")
          : r.setAttribute("aria-hidden", u["aria-hidden"]),
        (r.inert = u.inert),
        vi.delete(r));
    }
    let o = (n = vr.get(r)) != null ? n : 0;
    return (
      vr.set(r, o + 1),
      o !== 0 ||
        (vi.set(r, {
          "aria-hidden": r.getAttribute("aria-hidden"),
          inert: r.inert,
        }),
        r.setAttribute("aria-hidden", "true"),
        (r.inert = !0)),
      l
    );
  }, [e, t]);
}
function Tg({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  var r;
  let l = h.useRef((r = n == null ? void 0 : n.current) != null ? r : null),
    o = ll(l),
    i = ne(() => {
      var a, u, c;
      let f = [];
      for (let p of e)
        p !== null &&
          (p instanceof HTMLElement
            ? f.push(p)
            : "current" in p &&
              p.current instanceof HTMLElement &&
              f.push(p.current));
      if (t != null && t.current) for (let p of t.current) f.push(p);
      for (let p of (a =
        o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null
        ? a
        : [])
        p !== document.body &&
          p !== document.head &&
          p instanceof HTMLElement &&
          p.id !== "headlessui-portal-root" &&
          (p.contains(l.current) ||
            p.contains(
              (c = (u = l.current) == null ? void 0 : u.getRootNode()) == null
                ? void 0
                : c.host,
            ) ||
            f.some((y) => p.contains(y)) ||
            f.push(p));
      return f;
    });
  return {
    resolveContainers: i,
    contains: ne((a) => i().some((u) => u.contains(a))),
    mainTreeNodeRef: l,
    MainTreeNode: h.useMemo(
      () =>
        function () {
          return n != null
            ? null
            : R.createElement(hs, { features: ho.Hidden, ref: l });
        },
      [l, n],
    ),
  };
}
let wa = h.createContext(() => {});
wa.displayName = "StackContext";
var xs = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
  xs || {},
);
function Dg() {
  return h.useContext(wa);
}
function Og({ children: e, onUpdate: t, type: n, element: r, enabled: l }) {
  let o = Dg(),
    i = ne((...a) => {
      (t == null || t(...a), o(...a));
    });
  return (
    tt(() => {
      let a = l === void 0 || l === !0;
      return (
        a && i(0, n, r),
        () => {
          a && i(1, n, r);
        }
      );
    }, [i, n, r, l]),
    R.createElement(wa.Provider, { value: i }, e)
  );
}
let Tf = h.createContext(null);
function Df() {
  let e = h.useContext(Tf);
  if (e === null) {
    let t = new Error(
      "You used a <Description /> component, but it is not inside a relevant parent.",
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(t, Df), t);
  }
  return e;
}
function Lg() {
  let [e, t] = h.useState([]);
  return [
    e.length > 0 ? e.join(" ") : void 0,
    h.useMemo(
      () =>
        function (n) {
          let r = ne(
              (o) => (
                t((i) => [...i, o]),
                () =>
                  t((i) => {
                    let a = i.slice(),
                      u = a.indexOf(o);
                    return (u !== -1 && a.splice(u, 1), a);
                  })
              ),
            ),
            l = h.useMemo(
              () => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props,
              }),
              [r, n.slot, n.name, n.props],
            );
          return R.createElement(Tf.Provider, { value: l }, n.children);
        },
      [t],
    ),
  ];
}
let Mg = "p";
function _g(e, t) {
  let n = ir(),
    { id: r = `headlessui-description-${n}`, ...l } = e,
    o = Df(),
    i = pt(t);
  tt(() => o.register(r), [r, o.register]);
  let a = { ref: i, ...o.props, id: r };
  return nt({
    ourProps: a,
    theirProps: l,
    slot: o.slot || {},
    defaultTag: Mg,
    name: o.name || "Description",
  });
}
let Fg = Qe(_g),
  $g = Object.assign(Fg, {});
var zg = ((e) => (
    (e[(e.Open = 0)] = "Open"),
    (e[(e.Closed = 1)] = "Closed"),
    e
  ))(zg || {}),
  Rg = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(Rg || {});
let Ig = {
    0(e, t) {
      return e.titleId === t.id ? e : { ...e, titleId: t.id };
    },
  },
  go = h.createContext(null);
go.displayName = "DialogContext";
function il(e) {
  let t = h.useContext(go);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, il), n);
  }
  return t;
}
function Ag(e, t, n = () => [document.body]) {
  Pg(e, t, (r) => {
    var l;
    return { containers: [...((l = r.containers) != null ? l : []), n] };
  });
}
function Hg(e, t) {
  return be(t.type, Ig, e, t);
}
let Wg = "div",
  Ug = mo.RenderStrategy | mo.Static;
function Bg(e, t) {
  let n = ir(),
    {
      id: r = `headlessui-dialog-${n}`,
      open: l,
      onClose: o,
      initialFocus: i,
      role: a = "dialog",
      __demoMode: u = !1,
      ...c
    } = e,
    [f, p] = h.useState(0),
    y = h.useRef(!1);
  a = (function () {
    return a === "dialog" || a === "alertdialog"
      ? a
      : (y.current ||
          ((y.current = !0),
          console.warn(
            `Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`,
          )),
        "dialog");
  })();
  let x = xa();
  l === void 0 && x !== null && (l = (x & Ae.Open) === Ae.Open);
  let w = h.useRef(null),
    S = pt(w, t),
    N = ll(w),
    m = e.hasOwnProperty("open") || x !== null,
    d = e.hasOwnProperty("onClose");
  if (!m && !d)
    throw new Error(
      "You have to provide an `open` and an `onClose` prop to the `Dialog` component.",
    );
  if (!m)
    throw new Error(
      "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.",
    );
  if (!d)
    throw new Error(
      "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.",
    );
  if (typeof l != "boolean")
    throw new Error(
      `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`,
    );
  if (typeof o != "function")
    throw new Error(
      `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`,
    );
  let g = l ? 0 : 1,
    [v, b] = h.useReducer(Hg, {
      titleId: null,
      descriptionId: null,
      panelRef: h.createRef(),
    }),
    j = ne(() => o(!1)),
    T = ne((ee) => b({ type: 0, id: ee })),
    P = or() ? (u ? !1 : g === 0) : !1,
    z = f > 1,
    F = h.useContext(go) !== null,
    [Q, X] = sg(),
    ue = {
      get current() {
        var ee;
        return (ee = v.panelRef.current) != null ? ee : w.current;
      },
    },
    {
      resolveContainers: J,
      mainTreeNodeRef: se,
      MainTreeNode: ve,
    } = Tg({ portals: Q, defaultContainers: [ue] }),
    Y = z ? "parent" : "leaf",
    E = x !== null ? (x & Ae.Closing) === Ae.Closing : !1,
    L = F || E ? !1 : P,
    _ = h.useCallback(() => {
      var ee, lt;
      return (lt = Array.from(
        (ee = N == null ? void 0 : N.querySelectorAll("body > *")) != null
          ? ee
          : [],
      ).find((Oe) =>
        Oe.id === "headlessui-portal-root"
          ? !1
          : Oe.contains(se.current) && Oe instanceof HTMLElement,
      )) != null
        ? lt
        : null;
    }, [se]);
  Vu(_, L);
  let A = z ? !0 : P,
    D = h.useCallback(() => {
      var ee, lt;
      return (lt = Array.from(
        (ee =
          N == null
            ? void 0
            : N.querySelectorAll("[data-headlessui-portal]")) != null
          ? ee
          : [],
      ).find((Oe) => Oe.contains(se.current) && Oe instanceof HTMLElement)) !=
        null
        ? lt
        : null;
    }, [se]);
  (Vu(D, A),
    R0(
      J,
      (ee) => {
        (ee.preventDefault(), j());
      },
      !(!P || z),
    ));
  let k = !(z || g !== 0);
  (kf(N == null ? void 0 : N.defaultView, "keydown", (ee) => {
    k &&
      (ee.defaultPrevented ||
        (ee.key === Sf.Escape &&
          (ee.preventDefault(), ee.stopPropagation(), j())));
  }),
    Ag(N, !(E || g !== 0 || F), J),
    h.useEffect(() => {
      if (g !== 0 || !w.current) return;
      let ee = new ResizeObserver((lt) => {
        for (let Oe of lt) {
          let En = Oe.target.getBoundingClientRect();
          En.x === 0 && En.y === 0 && En.width === 0 && En.height === 0 && j();
        }
      });
      return (ee.observe(w.current), () => ee.disconnect());
    }, [g, w, j]));
  let [V, me] = Lg(),
    nn = h.useMemo(
      () => [{ dialogState: g, close: j, setTitleId: T }, v],
      [g, v, j, T],
    ),
    sl = h.useMemo(() => ({ open: g === 0 }), [g]),
    Ao = {
      ref: S,
      id: r,
      role: a,
      "aria-modal": g === 0 ? !0 : void 0,
      "aria-labelledby": v.titleId,
      "aria-describedby": V,
    };
  return R.createElement(
    Og,
    {
      type: "Dialog",
      enabled: g === 0,
      element: w,
      onUpdate: ne((ee, lt) => {
        lt === "Dialog" &&
          be(ee, {
            [xs.Add]: () => p((Oe) => Oe + 1),
            [xs.Remove]: () => p((Oe) => Oe - 1),
          });
      }),
    },
    R.createElement(
      gs,
      { force: !0 },
      R.createElement(
        vs,
        null,
        R.createElement(
          go.Provider,
          { value: nn },
          R.createElement(
            vs.Group,
            { target: w },
            R.createElement(
              gs,
              { force: !1 },
              R.createElement(
                me,
                { slot: sl, name: "Dialog.Description" },
                R.createElement(
                  yr,
                  {
                    initialFocus: i,
                    containers: J,
                    features: P
                      ? be(Y, {
                          parent: yr.features.RestoreFocus,
                          leaf: yr.features.All & ~yr.features.FocusLock,
                        })
                      : yr.features.None,
                  },
                  R.createElement(
                    X,
                    null,
                    nt({
                      ourProps: Ao,
                      theirProps: c,
                      slot: sl,
                      defaultTag: Wg,
                      features: Ug,
                      visible: g === 0,
                      name: "Dialog",
                    }),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    R.createElement(ve, null),
  );
}
let Vg = "div";
function Qg(e, t) {
  let n = ir(),
    { id: r = `headlessui-dialog-overlay-${n}`, ...l } = e,
    [{ dialogState: o, close: i }] = il("Dialog.Overlay"),
    a = pt(t),
    u = ne((f) => {
      if (f.target === f.currentTarget) {
        if (V0(f.currentTarget)) return f.preventDefault();
        (f.preventDefault(), f.stopPropagation(), i());
      }
    }),
    c = h.useMemo(() => ({ open: o === 0 }), [o]);
  return nt({
    ourProps: { ref: a, id: r, "aria-hidden": !0, onClick: u },
    theirProps: l,
    slot: c,
    defaultTag: Vg,
    name: "Dialog.Overlay",
  });
}
let Yg = "div";
function qg(e, t) {
  let n = ir(),
    { id: r = `headlessui-dialog-backdrop-${n}`, ...l } = e,
    [{ dialogState: o }, i] = il("Dialog.Backdrop"),
    a = pt(t);
  h.useEffect(() => {
    if (i.panelRef.current === null)
      throw new Error(
        "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.",
      );
  }, [i.panelRef]);
  let u = h.useMemo(() => ({ open: o === 0 }), [o]);
  return R.createElement(
    gs,
    { force: !0 },
    R.createElement(
      vs,
      null,
      nt({
        ourProps: { ref: a, id: r, "aria-hidden": !0 },
        theirProps: l,
        slot: u,
        defaultTag: Yg,
        name: "Dialog.Backdrop",
      }),
    ),
  );
}
let Gg = "div";
function Kg(e, t) {
  let n = ir(),
    { id: r = `headlessui-dialog-panel-${n}`, ...l } = e,
    [{ dialogState: o }, i] = il("Dialog.Panel"),
    a = pt(t, i.panelRef),
    u = h.useMemo(() => ({ open: o === 0 }), [o]),
    c = ne((f) => {
      f.stopPropagation();
    });
  return nt({
    ourProps: { ref: a, id: r, onClick: c },
    theirProps: l,
    slot: u,
    defaultTag: Gg,
    name: "Dialog.Panel",
  });
}
let Xg = "h2";
function Jg(e, t) {
  let n = ir(),
    { id: r = `headlessui-dialog-title-${n}`, ...l } = e,
    [{ dialogState: o, setTitleId: i }] = il("Dialog.Title"),
    a = pt(t);
  h.useEffect(() => (i(r), () => i(null)), [r, i]);
  let u = h.useMemo(() => ({ open: o === 0 }), [o]);
  return nt({
    ourProps: { ref: a, id: r },
    theirProps: l,
    slot: u,
    defaultTag: Xg,
    name: "Dialog.Title",
  });
}
let Zg = Qe(Bg),
  ey = Qe(qg),
  ty = Qe(Kg),
  ny = Qe(Qg),
  ry = Qe(Jg),
  Ye = Object.assign(Zg, {
    Backdrop: ey,
    Panel: ty,
    Overlay: ny,
    Title: ry,
    Description: $g,
  });
function ly(e = 0) {
  let [t, n] = h.useState(e),
    r = ol(),
    l = h.useCallback(
      (u) => {
        r.current && n((c) => c | u);
      },
      [t, r],
    ),
    o = h.useCallback((u) => !!(t & u), [t]),
    i = h.useCallback(
      (u) => {
        r.current && n((c) => c & ~u);
      },
      [n, r],
    ),
    a = h.useCallback(
      (u) => {
        r.current && n((c) => c ^ u);
      },
      [n],
    );
  return { flags: t, addFlag: l, hasFlag: o, removeFlag: i, toggleFlag: a };
}
function oy(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return ((t.called = !0), e(...n));
  };
}
function xi(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function wi(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function iy(e, t) {
  let n = bn();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: l } = getComputedStyle(e),
    [o, i] = [r, l].map((u) => {
      let [c = 0] = u
        .split(",")
        .filter(Boolean)
        .map((f) => (f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3))
        .sort((f, p) => p - f);
      return c;
    }),
    a = o + i;
  if (a !== 0) {
    n.group((c) => {
      (c.setTimeout(() => {
        (t(), c.dispose());
      }, a),
        c.addEventListener(e, "transitionrun", (f) => {
          f.target === f.currentTarget && c.dispose();
        }));
    });
    let u = n.addEventListener(e, "transitionend", (c) => {
      c.target === c.currentTarget && (t(), u());
    });
  } else t();
  return (n.add(() => t()), n.dispose);
}
function sy(e, t, n, r) {
  let l = n ? "enter" : "leave",
    o = bn(),
    i = r !== void 0 ? oy(r) : () => {};
  l === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
  let a = be(l, { enter: () => t.enter, leave: () => t.leave }),
    u = be(l, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    c = be(l, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    wi(
      e,
      ...t.base,
      ...t.enter,
      ...t.enterTo,
      ...t.enterFrom,
      ...t.leave,
      ...t.leaveFrom,
      ...t.leaveTo,
      ...t.entered,
    ),
    xi(e, ...t.base, ...a, ...c),
    o.nextFrame(() => {
      (wi(e, ...t.base, ...a, ...c),
        xi(e, ...t.base, ...a, ...u),
        iy(
          e,
          () => (wi(e, ...t.base, ...a), xi(e, ...t.base, ...t.entered), i()),
        ));
    }),
    o.dispose
  );
}
function ay({
  immediate: e,
  container: t,
  direction: n,
  classes: r,
  onStart: l,
  onStop: o,
}) {
  let i = ol(),
    a = ga(),
    u = Et(n);
  (tt(() => {
    e && (u.current = "enter");
  }, [e]),
    tt(() => {
      let c = bn();
      a.add(c.dispose);
      let f = t.current;
      if (f && u.current !== "idle" && i.current)
        return (
          c.dispose(),
          l.current(u.current),
          c.add(
            sy(f, r.current, u.current === "enter", () => {
              (c.dispose(), o.current(u.current));
            }),
          ),
          c.dispose
        );
    }, [n]));
}
function _t(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let zo = h.createContext(null);
zo.displayName = "TransitionContext";
var uy = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(uy || {});
function cy() {
  let e = h.useContext(zo);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
    );
  return e;
}
function dy() {
  let e = h.useContext(Ro);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
    );
  return e;
}
let Ro = h.createContext(null);
Ro.displayName = "NestingContext";
function Io(e) {
  return "children" in e
    ? Io(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function Of(e, t) {
  let n = Et(e),
    r = h.useRef([]),
    l = ol(),
    o = ga(),
    i = ne((x, w = Wt.Hidden) => {
      let S = r.current.findIndex(({ el: N }) => N === x);
      S !== -1 &&
        (be(w, {
          [Wt.Unmount]() {
            r.current.splice(S, 1);
          },
          [Wt.Hidden]() {
            r.current[S].state = "hidden";
          },
        }),
        o.microTask(() => {
          var N;
          !Io(r) && l.current && ((N = n.current) == null || N.call(n));
        }));
    }),
    a = ne((x) => {
      let w = r.current.find(({ el: S }) => S === x);
      return (
        w
          ? w.state !== "visible" && (w.state = "visible")
          : r.current.push({ el: x, state: "visible" }),
        () => i(x, Wt.Unmount)
      );
    }),
    u = h.useRef([]),
    c = h.useRef(Promise.resolve()),
    f = h.useRef({ enter: [], leave: [], idle: [] }),
    p = ne((x, w, S) => {
      (u.current.splice(0),
        t &&
          (t.chains.current[w] = t.chains.current[w].filter(([N]) => N !== x)),
        t == null ||
          t.chains.current[w].push([
            x,
            new Promise((N) => {
              u.current.push(N);
            }),
          ]),
        t == null ||
          t.chains.current[w].push([
            x,
            new Promise((N) => {
              Promise.all(f.current[w].map(([m, d]) => d)).then(() => N());
            }),
          ]),
        w === "enter"
          ? (c.current = c.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => S(w)))
          : S(w));
    }),
    y = ne((x, w, S) => {
      Promise.all(f.current[w].splice(0).map(([N, m]) => m))
        .then(() => {
          var N;
          (N = u.current.shift()) == null || N();
        })
        .then(() => S(w));
    });
  return h.useMemo(
    () => ({
      children: r,
      register: a,
      unregister: i,
      onStart: p,
      onStop: y,
      wait: c,
      chains: f,
    }),
    [a, i, r, p, y, f, c],
  );
}
function fy() {}
let py = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Qu(e) {
  var t;
  let n = {};
  for (let r of py) n[r] = (t = e[r]) != null ? t : fy;
  return n;
}
function my(e) {
  let t = h.useRef(Qu(e));
  return (
    h.useEffect(() => {
      t.current = Qu(e);
    }, [e]),
    t
  );
}
let hy = "div",
  Lf = mo.RenderStrategy;
function gy(e, t) {
  var n, r;
  let {
      beforeEnter: l,
      afterEnter: o,
      beforeLeave: i,
      afterLeave: a,
      enter: u,
      enterFrom: c,
      enterTo: f,
      entered: p,
      leave: y,
      leaveFrom: x,
      leaveTo: w,
      ...S
    } = e,
    N = h.useRef(null),
    m = pt(N, t),
    d = (n = S.unmount) == null || n ? Wt.Unmount : Wt.Hidden,
    { show: g, appear: v, initial: b } = cy(),
    [j, T] = h.useState(g ? "visible" : "hidden"),
    P = dy(),
    { register: z, unregister: F } = P;
  (h.useEffect(() => z(N), [z, N]),
    h.useEffect(() => {
      if (d === Wt.Hidden && N.current) {
        if (g && j !== "visible") {
          T("visible");
          return;
        }
        return be(j, { hidden: () => F(N), visible: () => z(N) });
      }
    }, [j, N, z, F, g, d]));
  let Q = Et({
      base: _t(S.className),
      enter: _t(u),
      enterFrom: _t(c),
      enterTo: _t(f),
      entered: _t(p),
      leave: _t(y),
      leaveFrom: _t(x),
      leaveTo: _t(w),
    }),
    X = my({ beforeEnter: l, afterEnter: o, beforeLeave: i, afterLeave: a }),
    ue = or();
  h.useEffect(() => {
    if (ue && j === "visible" && N.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?",
      );
  }, [N, j, ue]);
  let J = b && !v,
    se = v && g && b,
    ve = !ue || J ? "idle" : g ? "enter" : "leave",
    Y = ly(0),
    E = ne((k) =>
      be(k, {
        enter: () => {
          (Y.addFlag(Ae.Opening), X.current.beforeEnter());
        },
        leave: () => {
          (Y.addFlag(Ae.Closing), X.current.beforeLeave());
        },
        idle: () => {},
      }),
    ),
    L = ne((k) =>
      be(k, {
        enter: () => {
          (Y.removeFlag(Ae.Opening), X.current.afterEnter());
        },
        leave: () => {
          (Y.removeFlag(Ae.Closing), X.current.afterLeave());
        },
        idle: () => {},
      }),
    ),
    _ = Of(() => {
      (T("hidden"), F(N));
    }, P),
    A = h.useRef(!1);
  ay({
    immediate: se,
    container: N,
    classes: Q,
    direction: ve,
    onStart: Et((k) => {
      ((A.current = !0), _.onStart(N, k, E));
    }),
    onStop: Et((k) => {
      ((A.current = !1),
        _.onStop(N, k, L),
        k === "leave" && !Io(_) && (T("hidden"), F(N)));
    }),
  });
  let D = S,
    Z = { ref: m };
  return (
    se
      ? (D = {
          ...D,
          className: po(
            S.className,
            ...Q.current.enter,
            ...Q.current.enterFrom,
          ),
        })
      : A.current &&
        ((D.className = po(
          S.className,
          (r = N.current) == null ? void 0 : r.className,
        )),
        D.className === "" && delete D.className),
    R.createElement(
      Ro.Provider,
      { value: _ },
      R.createElement(
        U0,
        { value: be(j, { visible: Ae.Open, hidden: Ae.Closed }) | Y.flags },
        nt({
          ourProps: Z,
          theirProps: D,
          defaultTag: hy,
          features: Lf,
          visible: j === "visible",
          name: "Transition.Child",
        }),
      ),
    )
  );
}
function yy(e, t) {
  let { show: n, appear: r = !1, unmount: l = !0, ...o } = e,
    i = h.useRef(null),
    a = pt(i, t);
  or();
  let u = xa();
  if (
    (n === void 0 && u !== null && (n = (u & Ae.Open) === Ae.Open),
    ![!0, !1].includes(n))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop.",
    );
  let [c, f] = h.useState(n ? "visible" : "hidden"),
    p = Of(() => {
      f("hidden");
    }),
    [y, x] = h.useState(!0),
    w = h.useRef([n]);
  tt(() => {
    y !== !1 &&
      w.current[w.current.length - 1] !== n &&
      (w.current.push(n), x(!1));
  }, [w, n]);
  let S = h.useMemo(() => ({ show: n, appear: r, initial: y }), [n, r, y]);
  h.useEffect(() => {
    if (n) f("visible");
    else if (!Io(p)) f("hidden");
    else {
      let g = i.current;
      if (!g) return;
      let v = g.getBoundingClientRect();
      v.x === 0 && v.y === 0 && v.width === 0 && v.height === 0 && f("hidden");
    }
  }, [n, p]);
  let N = { unmount: l },
    m = ne(() => {
      var g;
      (y && x(!1), (g = e.beforeEnter) == null || g.call(e));
    }),
    d = ne(() => {
      var g;
      (y && x(!1), (g = e.beforeLeave) == null || g.call(e));
    });
  return R.createElement(
    Ro.Provider,
    { value: p },
    R.createElement(
      zo.Provider,
      { value: S },
      nt({
        ourProps: {
          ...N,
          as: h.Fragment,
          children: R.createElement(Mf, {
            ref: a,
            ...N,
            ...o,
            beforeEnter: m,
            beforeLeave: d,
          }),
        },
        theirProps: {},
        defaultTag: h.Fragment,
        features: Lf,
        visible: c === "visible",
        name: "Transition",
      }),
    ),
  );
}
function vy(e, t) {
  let n = h.useContext(zo) !== null,
    r = xa() !== null;
  return R.createElement(
    R.Fragment,
    null,
    !n && r
      ? R.createElement(ws, { ref: t, ...e })
      : R.createElement(Mf, { ref: t, ...e }),
  );
}
let ws = Qe(yy),
  Mf = Qe(gy),
  xy = Qe(vy),
  qe = Object.assign(ws, { Child: xy, Root: ws }),
  pn = null;
const wy = async () => {
    if (pn) return pn;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return ((pn = await e.json()), pn);
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  _f = (e) => {
    if (!pn) throw new Error("Configuration not loaded");
    return `${pn.domain}${e}`;
  },
  Sy = () => pn,
  yt = async (e, t = {}) => {
    const n = _f(e),
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
      } catch (a) {
        throw (
          console.error("Failed to parse response as JSON:", a),
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
  ky = async (e) =>
    yt("/api/drugStotreDistribution/barcode", {
      method: "POST",
      body: { ValueAry: [e] },
    }),
  Ny = async (e, t) => {
    const n = _f("/api/drugStotreDistribution/excel_upload");
    (console.group("🌐 API Request: /api/drugStotreDistribution/excel_upload"),
      console.log(`URL: ${n}`),
      console.log(`File: ${e.name}`),
      console.log(`Operator Name: ${t}`));
    try {
      const r = new FormData();
      (r.append("file", e), r.append("op_name", t));
      const l = await fetch(n, { method: "POST", body: r }),
        o = await l.text();
      let i;
      try {
        i = JSON.parse(o);
      } catch (a) {
        throw (
          console.error("Failed to parse response as JSON:", a),
          new Error("Invalid JSON response")
        );
      }
      if ((console.log("Response:", i), console.groupEnd(), !l.ok))
        throw new Error(`HTTP error! status: ${l.status}`);
      return i;
    } catch (r) {
      throw (console.error("API Error:", r), console.groupEnd(), r);
    }
  },
  Ff = ({ value: e, onChange: t, onClose: n }) => {
    const [r, l] = R.useState(e),
      [o, i] = R.useState(null),
      [a, u] = R.useState(null),
      [c, f] = R.useState(!1),
      [p, y] = R.useState(!0),
      x = R.useRef(null);
    (h.useEffect(() => {
      const v =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        );
      x.current && !v && x.current.focus();
    }, []),
      h.useEffect(() => {
        const v = (b) => {
          const j = b.key;
          j >= "0" && j <= "9"
            ? (b.preventDefault(), w(j))
            : j === "+" || j === "-"
              ? (b.preventDefault(), S(j))
              : j === "*"
                ? (b.preventDefault(), S("×"))
                : j === "/"
                  ? (b.preventDefault(), S("÷"))
                  : j === "Enter"
                    ? (b.preventDefault(), d())
                    : j === "Escape"
                      ? (b.preventDefault(), n())
                      : j === "Backspace" &&
                        (b.preventDefault(), l(r.slice(0, -1) || "0"));
        };
        return (
          window.addEventListener("keydown", v),
          () => window.removeEventListener("keydown", v)
        );
      }, [n, r, a, o]));
    const w = (v) => {
        p
          ? (l(v), y(!1))
          : c
            ? (l(v), f(!1))
            : o && !a
              ? (u(r), l(v))
              : l(r === "0" ? v : r + v);
      },
      S = (v) => {
        (a && N(), i(v), f(!1), y(!1));
      },
      N = () => {
        if (!a || !o) return;
        const v = parseFloat(a),
          b = parseFloat(r);
        let j = 0;
        switch (o) {
          case "+":
            j = v + b;
            break;
          case "-":
            j = v - b;
            break;
          case "×":
            j = v * b;
            break;
          case "÷":
            if (b === 0) {
              alert("不能除以零");
              return;
            }
            j = v / b;
            break;
        }
        (l(Math.round(j).toString()), u(null), i(null), f(!0), y(!1));
      },
      m = () => {
        (l("0"), u(null), i(null), f(!1), y(!0));
      },
      d = () => {
        let v = r;
        if (a && o) {
          const b = parseFloat(a),
            j = parseFloat(r);
          let T = 0;
          switch (o) {
            case "+":
              T = b + j;
              break;
            case "-":
              T = b - j;
              break;
            case "×":
              T = b * j;
              break;
            case "÷":
              if (j === 0) {
                alert("不能除以零");
                return;
              }
              T = b / j;
              break;
          }
          v = Math.round(T).toString();
        }
        (t(v),
          setTimeout(() => {
            n();
          }, 0));
      },
      g = s.jsx("div", {
        className:
          "fixed inset-0 flex items-center justify-center bg-black/25 backdrop-blur-sm",
        style: { zIndex: 999999 },
        onClick: n,
        children: s.jsxs("div", {
          className:
            "w-[90vw] max-w-md bg-white rounded-lg shadow-xl p-4 md:p-6",
          style: { zIndex: 1e6 },
          onClick: (v) => v.stopPropagation(),
          children: [
            s.jsxs("div", {
              className: "flex justify-between items-center mb-4",
              children: [
                s.jsx("div", {
                  className: "text-sm font-medium text-gray-700",
                }),
                s.jsx("button", {
                  onClick: n,
                  className:
                    "p-1.5 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors duration-150",
                  children: s.jsx(tr, { size: 20 }),
                }),
              ],
            }),
            s.jsx("div", {
              className: "mb-6",
              children: s.jsx("input", {
                ref: x,
                type: "text",
                value: r,
                readOnly: !0,
                className:
                  "w-full px-3 py-2 text-xl font-medium tracking-wider border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-gray-900",
              }),
            }),
            s.jsxs("div", {
              className: "grid grid-cols-4 gap-2",
              children: [
                ["7", "8", "9", "÷"].map((v) =>
                  s.jsx(
                    "button",
                    {
                      onClick: (b) => {
                        (b.stopPropagation(), v === "÷" ? S(v) : w(v));
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${v === "÷" ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700" : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"}`,
                      children: v,
                    },
                    v,
                  ),
                ),
                ["4", "5", "6", "×"].map((v) =>
                  s.jsx(
                    "button",
                    {
                      onClick: (b) => {
                        (b.stopPropagation(), v === "×" ? S(v) : w(v));
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${v === "×" ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700" : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"}`,
                      children: v,
                    },
                    v,
                  ),
                ),
                ["1", "2", "3", "-"].map((v) =>
                  s.jsx(
                    "button",
                    {
                      onClick: (b) => {
                        (b.stopPropagation(), v === "-" ? S(v) : w(v));
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${v === "-" ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700" : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"}`,
                      children: v,
                    },
                    v,
                  ),
                ),
                ["0", ".", "=", "+"].map((v) =>
                  s.jsx(
                    "button",
                    {
                      onClick: (b) => {
                        (b.stopPropagation(),
                          v === "=" ? N() : v === "+" ? S(v) : w(v));
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${v === "=" ? "bg-green-500 hover:bg-green-600 text-white" : v === "+" ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700" : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"}`,
                      children: v,
                    },
                    v,
                  ),
                ),
              ],
            }),
            s.jsxs("div", {
              className: "mt-4 flex justify-between gap-3",
              children: [
                s.jsx("button", {
                  onClick: (v) => {
                    (v.stopPropagation(), m());
                  },
                  className:
                    "flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-150 shadow-sm active:scale-95 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50",
                  children: "清除",
                }),
                s.jsx("button", {
                  onClick: (v) => {
                    (v.stopPropagation(), d());
                  },
                  className:
                    "flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-150 shadow-sm active:scale-95 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
                  children: "確認",
                }),
              ],
            }),
          ],
        }),
      });
    return _o.createPortal(g, document.body);
  },
  jy = {
    zh: {
      "app.title": "撥補建單",
      "app.search.placeholder": "搜尋藥品（藥名或藥碼）",
      "app.drug.name": "藥名",
      "app.drug.code": "藥碼",
      "app.drug.notSelected": "尚未選擇藥品",
      "app.store.source": "來源庫別",
      "app.store.source.placeholder": "請選擇來源庫別",
      "app.store.destination": "目的庫別",
      "app.store.destination.placeholder": "請選擇目的庫別",
      "app.quantity": "撥補數量",
      "app.quantity.placeholder": "點擊開啟計算機",
      "app.quantity.available": "可用庫存",
      "app.button.create": "建立撥補單",
      "app.button.processing": "處理中...",
      "app.button.scan": "掃碼建單",
      "app.orders.title": "歷史清單",
      "app.orders.empty": "無撥補單資料",
      "app.orders.loading": "載入中...",
      "app.toast.success": "撥補單建立成功",
      "app.filter.placeholder": "請輸入搜尋關鍵字",
      "app.filter.source": "來源",
      "app.filter.destination": "目的",
      "app.filter.code": "藥碼",
      "app.filter.name": "藥名",
      "table.source": "來源",
      "table.destination": "目的",
      "table.drugCode": "藥碼",
      "table.drugName": "藥名",
      "table.issuedQty": "撥發量",
      "table.actualQty": "實撥量",
      "table.createdTime": "加入時間",
      "table.operator": "操作者",
      "table.status": "狀態",
      "table.issuanceTime": "撥發時間",
      "table.issuer": "撥發人",
      "table.lotNumber": "批號",
      "table.expiryDate": "效期",
      "modal.editOrder": "編輯撥補單",
      "time.type": "時間類型",
      "time.operation": "操作時間",
      "time.start": "開始日期時間",
      "time.end": "結束日期時間",
      "login.title": "撥補建單系統",
      "login.username": "帳號",
      "login.password": "密碼",
      "login.button": "登入",
      "login.processing": "登入中...",
      "button.logout": "登出",
      "button.home": "回到首頁",
      "footer.copyright": "Copyright ©2025 鴻森智能科技",
      "platform.title": "智慧藥局平台",
    },
    en: {
      "app.title": "Create Distribution Order",
      "app.search.placeholder": "Search drug (name or code)",
      "app.drug.name": "Drug Name",
      "app.drug.code": "Drug Code",
      "app.drug.notSelected": "No drug selected",
      "app.store.source": "Source Store",
      "app.store.source.placeholder": "Please select source store",
      "app.store.destination": "Destination Store",
      "app.store.destination.placeholder": "Please select destination store",
      "app.quantity": "Distribution Quantity",
      "app.quantity.placeholder": "Click to open calculator",
      "app.quantity.available": "Available Stock",
      "app.button.create": "Create Distribution Order",
      "app.button.processing": "Processing...",
      "app.button.scan": "Scan Barcode",
      "app.orders.title": "Historical Orders",
      "app.orders.empty": "No orders found",
      "app.orders.loading": "Loading...",
      "app.toast.success": "Distribution order created successfully",
      "app.filter.placeholder": "Enter search keyword",
      "app.filter.source": "Source",
      "app.filter.destination": "Destination",
      "app.filter.code": "Code",
      "app.filter.name": "Name",
      "table.source": "Source",
      "table.destination": "Destination",
      "table.drugCode": "Drug Code",
      "table.drugName": "Drug Name",
      "table.issuedQty": "Issued Qty",
      "table.actualQty": "Actual Qty",
      "table.createdTime": "Created Time",
      "table.operator": "Operator",
      "table.status": "Status",
      "table.issuanceTime": "Issuance Time",
      "table.issuer": "Issuer",
      "table.lotNumber": "Lot Number",
      "table.expiryDate": "Expiry Date",
      "modal.editOrder": "Edit Distribution Order",
      "time.type": "Time Type",
      "time.operation": "Operation Time",
      "time.start": "Start Date Time",
      "time.end": "End Date Time",
      "login.title": "Distribution Order System",
      "login.username": "Username",
      "login.password": "Password",
      "login.button": "Login",
      "login.processing": "Logging in...",
      "button.logout": "Logout",
      "button.home": "Home",
      "footer.copyright": "Copyright ©2025 鴻森智能科技",
      "platform.title": "Smart Pharmacy Platform",
    },
  },
  $f = h.createContext(void 0),
  by = ({ children: e }) => {
    const [t, n] = h.useState("zh"),
      r = () => {
        n((o) => (o === "zh" ? "en" : "zh"));
      },
      l = (o) => jy[t][o] || o;
    return s.jsx($f.Provider, {
      value: { language: t, toggleLanguage: r, t: l },
      children: e,
    });
  },
  rt = () => {
    const e = h.useContext($f);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  Ey = ({ startDate: e, endDate: t, onDateChange: n }) => {
    const { t: r } = rt(),
      l = (o, i, a, u) => {
        const c = new Date(`${o}T${i}`),
          f = new Date(`${a}T${u}`);
        n(c, f);
      };
    return s.jsxs("div", {
      className: "space-y-6 lg:space-y-0 lg:flex lg:items-start lg:gap-6",
      children: [
        s.jsxs("div", {
          className: "lg:w-[200px]",
          children: [
            s.jsx("label", {
              className: "block text-base font-medium text-gray-700 mb-2",
              children: r("time.type"),
            }),
            s.jsx("select", {
              defaultValue: "操作時間",
              className:
                "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
              children: s.jsx("option", {
                value: "操作時間",
                children: r("time.operation"),
              }),
            }),
          ],
        }),
        s.jsxs("div", {
          className: "flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6",
          children: [
            s.jsxs("div", {
              className: "space-y-2",
              children: [
                s.jsx("label", {
                  className: "block text-base font-medium text-gray-700",
                  children: r("time.start"),
                }),
                s.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-3",
                  children: [
                    s.jsx("input", {
                      type: "date",
                      value: de(e, "yyyy-MM-dd"),
                      onChange: (o) =>
                        l(
                          o.target.value,
                          de(e, "HH:mm:ss"),
                          de(t, "yyyy-MM-dd"),
                          de(t, "HH:mm:ss"),
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                    }),
                    s.jsx("input", {
                      type: "time",
                      value: de(e, "HH:mm:ss"),
                      onChange: (o) =>
                        l(
                          de(e, "yyyy-MM-dd"),
                          o.target.value,
                          de(t, "yyyy-MM-dd"),
                          de(t, "HH:mm:ss"),
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                      step: "1",
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "space-y-2",
              children: [
                s.jsx("label", {
                  className: "block text-base font-medium text-gray-700",
                  children: r("time.end"),
                }),
                s.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-3",
                  children: [
                    s.jsx("input", {
                      type: "date",
                      value: de(t, "yyyy-MM-dd"),
                      onChange: (o) =>
                        l(
                          de(e, "yyyy-MM-dd"),
                          de(e, "HH:mm:ss"),
                          o.target.value,
                          de(t, "HH:mm:ss"),
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                    }),
                    s.jsx("input", {
                      type: "time",
                      value: de(t, "HH:mm:ss"),
                      onChange: (o) =>
                        l(
                          de(e, "yyyy-MM-dd"),
                          de(e, "HH:mm:ss"),
                          de(t, "yyyy-MM-dd"),
                          o.target.value,
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                      step: "1",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Cy = ({
    orders: e,
    startDate: t,
    endDate: n,
    onDateChange: r,
    isLoading: l,
  }) => {
    const { t: o } = rt(),
      [i, a] = h.useState(null),
      [u, c] = h.useState(!1),
      [f, p] = h.useState(!1),
      [y, x] = h.useState(!1),
      [w, S] = h.useState(""),
      [N, m] = h.useState(null),
      [d, g] = h.useState(!1),
      [v, b] = h.useState("name"),
      [j, T] = h.useState(""),
      [P, z] = h.useState(new Set()),
      [F, Q] = h.useState(!1),
      X = (k) =>
        !k || k === "0001-01-01T00:00:00"
          ? "-"
          : de(new Date(k), "yyyy-MM-dd HH:mm:ss"),
      ue = (k) => (!k || k.trim() === "" ? "-" : k),
      J = [
        { value: "name", label: o("app.filter.name") },
        { value: "code", label: o("app.filter.code") },
        { value: "source", label: o("app.filter.source") },
        { value: "destination", label: o("app.filter.destination") },
      ],
      se = e.filter((k) => {
        if (!j) return !0;
        const W = j.toLowerCase();
        switch (v) {
          case "name":
            return k.name.toLowerCase().includes(W);
          case "code":
            return k.code.toLowerCase().includes(W);
          case "source":
            return k.sourceStoreType.toLowerCase().includes(W);
          case "destination":
            return k.destinationStoreType.toLowerCase().includes(W);
          default:
            return !0;
        }
      }),
      ve = async () => {
        if (i) {
          (g(!0), m(null));
          try {
            const k = await yt("/api/drugStotreDistribution/delete_by_guid", {
              method: "POST",
              body: { ValueAry: [i.GUID] },
            });
            if (k.Code === 200) (p(!1), c(!1), r(t, n));
            else throw new Error(k.Result || "刪除失敗");
          } catch (k) {
            m(k instanceof Error ? k.message : "系統錯誤，請稍後再試");
          } finally {
            g(!1);
          }
        }
      },
      Y = async () => {
        if (i) {
          if (!w || isNaN(Number(w)) || Number(w) <= 0) {
            m("請輸入有效的數量");
            return;
          }
          (g(!0), m(null));
          try {
            const k = await yt(
              "/api/drugStotreDistribution/update_qty_by_guid",
              { method: "POST", body: { ValueAry: [i.GUID, w] } },
            );
            if (k.Code === 200) (c(!1), r(t, n));
            else throw new Error(k.Result || "更新失敗");
          } catch (k) {
            m(k instanceof Error ? k.message : "系統錯誤，請稍後再試");
          } finally {
            g(!1);
          }
        }
      },
      E = (k) => {
        k.state === "等待過帳" && (a(k), S(k.issuedQuantity), m(null), c(!0));
      },
      L = (k) => {
        k.preventDefault();
      },
      _ = (k) => {
        z((W) => {
          const V = new Set(W);
          return (V.has(k) ? V.delete(k) : V.add(k), V);
        });
      },
      A = () => {
        const k = se.filter((W) => W.state === "等待過帳");
        P.size === k.length && k.length > 0
          ? z(new Set())
          : z(new Set(k.map((W) => W.GUID)));
      },
      D = async () => {
        if (P.size !== 0) {
          (g(!0), m(null));
          try {
            const k = Array.from(P).join(";"),
              W = await yt("/api/drugStotreDistribution/delete_by_guid", {
                method: "POST",
                body: { ValueAry: [k] },
              });
            if (W.Code === 200) (Q(!1), z(new Set()), r(t, n));
            else throw new Error(W.Result || "批次刪除失敗");
          } catch (k) {
            m(k instanceof Error ? k.message : "系統錯誤，請稍後再試");
          } finally {
            g(!1);
          }
        }
      },
      Z = (k) => {
        const W = k.state === "等待過帳",
          V = P.has(k.GUID);
        return s.jsxs(
          "div",
          {
            className: `
          p-4 rounded-lg border mb-4 transition-colors duration-150
          ${W ? "bg-yellow-50 border-yellow-200" : "bg-white border-gray-200"}
          ${V ? "ring-2 ring-blue-500" : ""}
        `,
            children: [
              s.jsxs("div", {
                className: "flex justify-between items-start mb-3",
                children: [
                  s.jsxs("div", {
                    className: "flex items-start gap-3 flex-1",
                    children: [
                      W &&
                        s.jsx("button", {
                          onClick: (me) => {
                            (me.stopPropagation(), _(k.GUID));
                          },
                          className: "mt-1 text-blue-600 hover:text-blue-700",
                          children: V
                            ? s.jsx(w0, { size: 20 })
                            : s.jsx(Au, { size: 20 }),
                        }),
                      s.jsxs("div", {
                        className: "space-y-1 flex-1",
                        onClick: () => E(k),
                        children: [
                          s.jsx("div", {
                            className: "font-medium text-gray-900",
                            children: k.name,
                          }),
                          s.jsx("div", {
                            className: "font-mono text-sm text-gray-600",
                            children: k.code,
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsx("span", {
                    className: `px-2 py-1 rounded-full text-xs font-medium ${k.state === "等待過帳" ? "bg-yellow-100 text-yellow-800" : k.state === "已過帳" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`,
                    children: k.state,
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "grid grid-cols-2 gap-x-4 gap-y-3",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: o("table.source"),
                      }),
                      s.jsx("div", {
                        className: "font-medium",
                        children: k.sourceStoreType,
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: o("table.destination"),
                      }),
                      s.jsx("div", {
                        className: "font-medium",
                        children: k.destinationStoreType,
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: o("table.issuedQty"),
                      }),
                      s.jsx("div", {
                        className: "font-medium",
                        children: k.issuedQuantity,
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: o("table.actualQty"),
                      }),
                      s.jsx("div", {
                        className: "font-medium",
                        children: k.actualIssuedQuantity || "-",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: o("table.operator"),
                      }),
                      s.jsx("div", {
                        className: "font-medium",
                        children: k.reportName || "-",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: o("table.issuer"),
                      }),
                      s.jsx("div", {
                        className: "font-medium",
                        children: k.issuer || "-",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: o("table.lotNumber"),
                      }),
                      s.jsx("div", {
                        className: "font-medium",
                        children: k.LOT || "-",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: o("table.expiryDate"),
                      }),
                      s.jsx("div", {
                        className: "font-medium",
                        children: ue(k.VAL),
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: o("table.createdTime"),
                      }),
                      s.jsx("div", {
                        className: "font-medium",
                        children: X(k.addedTime),
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: o("table.issuanceTime"),
                      }),
                      s.jsx("div", {
                        className: "font-medium",
                        children: X(k.issuanceTime),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          },
          k.GUID,
        );
      };
    return s.jsxs("div", {
      children: [
        s.jsx("h2", {
          className: "text-xl font-bold text-gray-900 mb-6",
          children: o("app.orders.title"),
        }),
        s.jsx("div", {
          className: "mb-6",
          children: s.jsx(Ey, { startDate: t, endDate: n, onDateChange: r }),
        }),
        P.size > 0 &&
          s.jsxs("div", {
            className:
              "mb-4 flex items-center justify-between bg-blue-50 p-4 rounded-lg",
            children: [
              s.jsxs("span", {
                className: "text-base font-medium text-blue-900",
                children: ["已選擇 ", P.size, " 筆申領單"],
              }),
              s.jsxs("button", {
                onClick: () => Q(!0),
                className:
                  "px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2",
                children: [s.jsx(Hu, { size: 18 }), "批次刪除"],
              }),
            ],
          }),
        s.jsx("div", {
          className: "mb-6 space-y-4",
          children: s.jsxs("form", {
            onSubmit: L,
            className: "flex gap-3 max-w-2xl",
            children: [
              s.jsx("select", {
                value: v,
                onChange: (k) => b(k.target.value),
                className:
                  "w-32 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                children: J.map((k) =>
                  s.jsx(
                    "option",
                    { value: k.value, children: k.label },
                    k.value,
                  ),
                ),
              }),
              s.jsxs("div", {
                className: "relative w-64",
                children: [
                  s.jsx("input", {
                    type: "text",
                    value: j,
                    onChange: (k) => T(k.target.value),
                    placeholder: o("app.filter.placeholder"),
                    className:
                      "w-full pl-10 pr-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                  }),
                  s.jsx(pf, {
                    className: "absolute left-3 top-2.5 text-gray-400",
                    size: 20,
                  }),
                ],
              }),
            ],
          }),
        }),
        N &&
          s.jsxs("div", {
            className:
              "mb-6 p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
            children: [
              s.jsx(Mr, { size: 20 }),
              s.jsx("span", { className: "text-base", children: N }),
            ],
          }),
        l
          ? s.jsxs("div", {
              className: "text-center py-8",
              children: [
                s.jsx("div", {
                  className:
                    "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto",
                }),
                s.jsx("p", {
                  className: "mt-2 text-base text-gray-600",
                  children: o("app.orders.loading"),
                }),
              ],
            })
          : se.length === 0
            ? s.jsx("div", {
                className: "text-center py-8 text-base text-gray-500",
                children: o("app.orders.empty"),
              })
            : s.jsxs(s.Fragment, {
                children: [
                  s.jsx("div", {
                    className: "sm:hidden space-y-4",
                    children: se.map(Z),
                  }),
                  s.jsx("div", {
                    className:
                      "hidden sm:block overflow-x-auto border border-gray-200 rounded-lg",
                    children: s.jsxs("table", {
                      className: "min-w-full",
                      children: [
                        s.jsx("thead", {
                          className: "bg-gray-50",
                          children: s.jsxs("tr", {
                            children: [
                              s.jsx("th", {
                                className: "px-4 py-3 text-center",
                                children: s.jsx("input", {
                                  type: "checkbox",
                                  checked:
                                    P.size ===
                                      se.filter((k) => k.state === "等待過帳")
                                        .length &&
                                    se.filter((k) => k.state === "等待過帳")
                                      .length > 0,
                                  onChange: A,
                                  className:
                                    "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
                                }),
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: o("table.source"),
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: o("table.destination"),
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: o("table.drugCode"),
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: o("table.drugName"),
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: o("table.issuedQty"),
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: o("table.actualQty"),
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: o("table.createdTime"),
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: o("table.operator"),
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: o("table.lotNumber"),
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: o("table.expiryDate"),
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: o("table.status"),
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: o("table.issuanceTime"),
                              }),
                              s.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: o("table.issuer"),
                              }),
                            ],
                          }),
                        }),
                        s.jsx("tbody", {
                          className: "bg-white divide-y divide-gray-200",
                          children: se.map((k) => {
                            const W = k.state === "等待過帳",
                              V = P.has(k.GUID);
                            return s.jsxs(
                              "tr",
                              {
                                className: `
                        transition-colors duration-150
                        ${W ? "bg-yellow-50 hover:bg-yellow-100" : "hover:bg-gray-50"}
                        
                      `,
                                children: [
                                  s.jsx("td", {
                                    className: "px-4 py-3 text-center",
                                    children: W
                                      ? s.jsx("input", {
                                          type: "checkbox",
                                          checked: V,
                                          onChange: () => _(k.GUID),
                                          className:
                                            "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
                                        })
                                      : s.jsx("span", {
                                          className: "text-gray-300",
                                          children: s.jsx(Au, { size: 20 }),
                                        }),
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-900 cursor-pointer",
                                    onClick: () => E(k),
                                    children: k.sourceStoreType,
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-900 cursor-pointer",
                                    onClick: () => E(k),
                                    children: k.destinationStoreType,
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap font-mono text-base text-gray-900 cursor-pointer",
                                    onClick: () => E(k),
                                    children: k.code,
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-900 cursor-pointer",
                                    onClick: () => E(k),
                                    children: k.name,
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base font-medium text-gray-900 cursor-pointer",
                                    onClick: () => E(k),
                                    children: k.issuedQuantity,
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base font-medium text-gray-900 cursor-pointer",
                                    onClick: () => E(k),
                                    children: k.actualIssuedQuantity || "-",
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-500 cursor-pointer",
                                    onClick: () => E(k),
                                    children: X(k.addedTime),
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-900 cursor-pointer",
                                    onClick: () => E(k),
                                    children: k.reportName || "-",
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-900 cursor-pointer",
                                    onClick: () => E(k),
                                    children: k.LOT || "-",
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-900 cursor-pointer",
                                    onClick: () => E(k),
                                    children: ue(k.VAL),
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap cursor-pointer",
                                    onClick: () => E(k),
                                    children: s.jsx("span", {
                                      className: `px-2 py-1 rounded-full text-xs font-medium ${k.state === "等待過帳" ? "bg-yellow-100 text-yellow-800" : k.state === "已過帳" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`,
                                      children: k.state,
                                    }),
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-500 cursor-pointer",
                                    onClick: () => E(k),
                                    children: X(k.issuanceTime),
                                  }),
                                  s.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-900 cursor-pointer",
                                    onClick: () => E(k),
                                    children: k.issuer || "-",
                                  }),
                                ],
                              },
                              k.GUID,
                            );
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
        s.jsx(qe, {
          appear: !0,
          show: u,
          as: h.Fragment,
          children: s.jsxs(Ye, {
            as: "div",
            className: "relative z-50",
            onClose: () => !d && c(!1),
            children: [
              s.jsx(qe.Child, {
                as: h.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: s.jsx("div", {
                  className: "fixed inset-0 bg-black bg-opacity-25",
                }),
              }),
              s.jsx("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: s.jsx("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center",
                  children: s.jsx(qe.Child, {
                    as: h.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: s.jsxs(Ye.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        s.jsx(Ye.Title, {
                          as: "h3",
                          className: "text-xl font-bold text-gray-900 mb-6",
                          children: o("modal.editOrder"),
                        }),
                        i &&
                          s.jsxs("div", {
                            className: "space-y-6",
                            children: [
                              s.jsxs("div", {
                                className: "grid grid-cols-2 gap-x-4 gap-y-4",
                                children: [
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: o("table.source"),
                                      }),
                                      s.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.sourceStoreType,
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: o("table.destination"),
                                      }),
                                      s.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.destinationStoreType,
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: o("table.issuedQty"),
                                      }),
                                      s.jsx("div", {
                                        className: "flex gap-2 items-center",
                                        children: s.jsx("input", {
                                          type: "text",
                                          value: w,
                                          onClick: () => x(!0),
                                          readOnly: !0,
                                          className:
                                            "w-32 p-2 border rounded text-base cursor-pointer",
                                          placeholder: o(
                                            "app.quantity.placeholder",
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: o("table.actualQty"),
                                      }),
                                      s.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.actualIssuedQuantity || "-",
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: o("table.operator"),
                                      }),
                                      s.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.reportName || "-",
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: o("table.issuer"),
                                      }),
                                      s.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.issuer || "-",
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: o("table.lotNumber"),
                                      }),
                                      s.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.LOT || "-",
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: o("table.expiryDate"),
                                      }),
                                      s.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: ue(i.VAL),
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: o("table.createdTime"),
                                      }),
                                      s.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: X(i.addedTime),
                                      }),
                                    ],
                                  }),
                                  s.jsxs("div", {
                                    children: [
                                      s.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: o("table.issuanceTime"),
                                      }),
                                      s.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: X(i.issuanceTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              N &&
                                s.jsxs("div", {
                                  className:
                                    "p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
                                  children: [
                                    s.jsx(Mr, { size: 20 }),
                                    s.jsx("span", {
                                      className: "text-base",
                                      children: N,
                                    }),
                                  ],
                                }),
                              s.jsxs("div", {
                                className: "mt-6 flex justify-between gap-4",
                                children: [
                                  s.jsxs("button", {
                                    type: "button",
                                    onClick: () => p(!0),
                                    disabled: d,
                                    className:
                                      "inline-flex justify-center items-center gap-2 rounded-md border border-transparent bg-red-100 px-4 py-2 text-base font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: [s.jsx(Hu, { size: 16 }), "刪除"],
                                  }),
                                  s.jsxs("div", {
                                    className: "flex gap-2",
                                    children: [
                                      s.jsx("button", {
                                        type: "button",
                                        onClick: () => !d && c(!1),
                                        disabled: d,
                                        className:
                                          "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: "取消",
                                      }),
                                      s.jsx("button", {
                                        type: "button",
                                        onClick: Y,
                                        disabled: d,
                                        className:
                                          "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-base font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: d ? "處理中..." : "儲存",
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
                }),
              }),
            ],
          }),
        }),
        s.jsx(qe, {
          appear: !0,
          show: f,
          as: h.Fragment,
          children: s.jsxs(Ye, {
            as: "div",
            className: "relative z-[60]",
            onClose: () => !d && p(!1),
            children: [
              s.jsx(qe.Child, {
                as: h.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: s.jsx("div", {
                  className: "fixed inset-0 bg-black bg-opacity-25",
                }),
              }),
              s.jsx("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: s.jsx("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center",
                  children: s.jsx(qe.Child, {
                    as: h.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: s.jsxs(Ye.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        s.jsx(Ye.Title, {
                          as: "h3",
                          className: "text-xl font-bold text-gray-900 mb-6",
                          children: "確認刪除撥補單",
                        }),
                        s.jsx("div", {
                          className: "mt-2",
                          children: s.jsx("p", {
                            className: "text-base text-gray-500",
                            children: "確定要刪除此筆撥補資料嗎？",
                          }),
                        }),
                        s.jsxs("div", {
                          className: "mt-6 flex justify-end gap-3",
                          children: [
                            s.jsx("button", {
                              type: "button",
                              onClick: () => !d && p(!1),
                              disabled: d,
                              className:
                                "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: "取消",
                            }),
                            s.jsx("button", {
                              type: "button",
                              onClick: ve,
                              disabled: d,
                              className:
                                "inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: d ? "處理中..." : "確認刪除",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          }),
        }),
        y && s.jsx(Ff, { value: w, onChange: S, onClose: () => x(!1) }),
        s.jsx(qe, {
          appear: !0,
          show: F,
          as: h.Fragment,
          children: s.jsxs(Ye, {
            as: "div",
            className: "relative z-[60]",
            onClose: () => !d && Q(!1),
            children: [
              s.jsx(qe.Child, {
                as: h.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: s.jsx("div", {
                  className: "fixed inset-0 bg-black bg-opacity-25",
                }),
              }),
              s.jsx("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: s.jsx("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center",
                  children: s.jsx(qe.Child, {
                    as: h.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: s.jsxs(Ye.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        s.jsx(Ye.Title, {
                          as: "h3",
                          className:
                            "text-lg font-medium leading-6 text-gray-900",
                          children: "批次刪除確認",
                        }),
                        s.jsx("div", {
                          className: "mt-4",
                          children: s.jsxs("p", {
                            className: "text-base text-gray-600",
                            children: [
                              "確定要刪除所選的 ",
                              P.size,
                              " 筆撥補單嗎？此操作無法復原。",
                            ],
                          }),
                        }),
                        N &&
                          s.jsxs("div", {
                            className:
                              "mt-4 p-3 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
                            children: [
                              s.jsx(Mr, { size: 18 }),
                              s.jsx("span", {
                                className: "text-sm",
                                children: N,
                              }),
                            ],
                          }),
                        s.jsxs("div", {
                          className: "mt-6 flex justify-end gap-3",
                          children: [
                            s.jsx("button", {
                              type: "button",
                              onClick: () => !d && Q(!1),
                              disabled: d,
                              className:
                                "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: "取消",
                            }),
                            s.jsx("button", {
                              type: "button",
                              onClick: D,
                              disabled: d,
                              className:
                                "inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: d ? "處理中..." : "確認刪除",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  zf = (e) => {
    const t = e.find((n) => n.name === "撥補建單");
    return (t == null ? void 0 : t.state) === !0;
  },
  Py = (e) =>
    zf(e.Permissions)
      ? (sessionStorage.setItem("user_session", JSON.stringify(e)), !0)
      : !1,
  Sa = () => {
    const e = sessionStorage.getItem("user_session");
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      return !t.GUID || !t.ID || !t.Name || !zf(t.Permissions)
        ? (yo(), null)
        : t;
    } catch {
      return (yo(), null);
    }
  },
  yo = () => {
    sessionStorage.removeItem("user_session");
  },
  Ty = () => {
    const e = Sa();
    if (!e) return !1;
    const t = new Date(e.loginTime).getTime();
    return (new Date().getTime() - t) / (1e3 * 60 * 60) > 24 ? (yo(), !1) : !0;
  },
  Rf = () => {
    const e = Sa();
    return (e == null ? void 0 : e.Name) || "";
  },
  Dy = ({
    onLogin: e,
    className: t = "",
    title: n = "撥補建單系統",
    logo: r,
  }) => {
    const [l, o] = h.useState(""),
      [i, a] = h.useState(""),
      [u, c] = h.useState(null),
      [f, p] = h.useState(!1),
      y = async (x) => {
        (x.preventDefault(), c(null), p(!0));
        try {
          const w = await yt("/api/session/login", {
            method: "POST",
            body: { Data: { ID: l, Password: i } },
          });
          if (w.Code === 200) {
            if (!Py(w.Data)) {
              c("無撥補建單權限，無法登入");
              return;
            }
            e();
          } else c(w.Result || "登入失敗，請檢查帳號密碼是否正確");
        } catch (w) {
          (console.error("Login error:", w),
            c(w instanceof Error ? w.message : "系統錯誤，請稍後再試"));
        } finally {
          p(!1);
        }
      };
    return s.jsx("div", {
      className: `min-h-screen bg-gray-100 flex items-center justify-center p-4 ${t}`,
      children: s.jsxs("div", {
        className: "bg-white rounded-lg shadow-md p-8 w-full max-w-md",
        children: [
          r &&
            s.jsx("div", {
              className: "mb-6 flex justify-center",
              children: r,
            }),
          s.jsx("h1", {
            className: "text-2xl font-bold text-center mb-8",
            children: n,
          }),
          u &&
            s.jsxs("div", {
              className:
                "mb-6 p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
              children: [
                s.jsx(Mr, { size: 20 }),
                s.jsx("span", { children: u }),
              ],
            }),
          s.jsxs("form", {
            onSubmit: y,
            className: "space-y-6",
            children: [
              s.jsxs("div", {
                children: [
                  s.jsx("label", {
                    htmlFor: "id",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "帳號",
                  }),
                  s.jsx("input", {
                    type: "text",
                    id: "id",
                    value: l,
                    onChange: (x) => o(x.target.value),
                    className:
                      "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    required: !0,
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("label", {
                    htmlFor: "password",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "密碼",
                  }),
                  s.jsx("input", {
                    type: "password",
                    id: "password",
                    value: i,
                    onChange: (x) => a(x.target.value),
                    className:
                      "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    required: !0,
                  }),
                ],
              }),
              s.jsx("button", {
                type: "submit",
                disabled: f,
                className: `w-full py-2 px-4 rounded font-medium transition-colors duration-200 ${f ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"}`,
                children: f ? "登入中..." : "登入",
              }),
            ],
          }),
        ],
      }),
    });
  },
  Oy = () => {
    const { language: e, toggleLanguage: t } = rt();
    return s.jsxs("button", {
      onClick: t,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: e === "zh" ? "繁體中文" : "English",
      children: [
        s.jsx(S0, { className: "h-4 w-4" }),
        s.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: e === "zh" ? "繁體中文" : "English",
        }),
      ],
    });
  },
  Ly = ({ title: e }) =>
    s.jsx("h1", {
      className: "text-2xl md:text-3xl font-semibold text-gray-800",
      children: e,
    }),
  My = () => {
    const e = Sa();
    return e
      ? s.jsxs("p", {
          className: "text-sm text-gray-600",
          children: [e.Name, " - ", e.Employer],
        })
      : null;
  },
  _y = ({ onLogout: e }) => {
    const { t } = rt();
    return s.jsxs("button", {
      onClick: e,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: t("button.logout"),
      children: [
        s.jsx(j0, { className: "h-4 w-4" }),
        s.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: t("button.logout"),
        }),
      ],
    });
  },
  Fy = () => {
    const { t: e } = rt(),
      t = () => {
        const n = Sy();
        n != null &&
          n.homepage &&
          (window.location.href = `${n.homepage}/phar_system/frontpage/`);
      };
    return s.jsxs("button", {
      onClick: t,
      className:
        "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
      title: e("platform.title"),
      children: [
        s.jsx(k0, { size: 24 }),
        s.jsx("span", {
          className:
            "absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
          children: e("platform.title"),
        }),
      ],
    });
  },
  $y = ({ onLogout: e }) => {
    const { t } = rt();
    return s.jsx("header", {
      className: "bg-white",
      children: s.jsx("div", {
        className: "w-full px-4",
        children: s.jsxs("div", {
          className: "flex justify-between items-center py-6",
          children: [
            s.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                s.jsx(Fy, {}),
                s.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    s.jsx(Ly, { title: t("app.title") }),
                    s.jsx(My, {}),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "flex items-center gap-4",
              children: [s.jsx(Oy, {}), s.jsx(_y, { onLogout: e })],
            }),
          ],
        }),
      }),
    });
  },
  Ss = ({ message: e, onClose: t, duration: n = 3e3, type: r = "success" }) => {
    const { t: l } = rt(),
      [o, i] = h.useState(!1);
    h.useEffect(() => {
      const S = setTimeout(() => {
        (i(!0),
          setTimeout(() => {
            t();
          }, 300));
      }, n);
      return () => clearTimeout(S);
    }, [n, t]);
    const a = () => {
        (i(!0),
          setTimeout(() => {
            t();
          }, 300));
      },
      u = r === "success",
      c = u ? "bg-green-50" : "bg-red-50",
      f = u ? "text-green-800" : "text-red-800",
      p = u ? "border-green-200" : "border-red-200",
      y = u ? "text-green-500" : "text-red-500",
      x = u
        ? "text-green-600 hover:text-green-800"
        : "text-red-600 hover:text-red-800",
      w = s.jsxs("div", {
        className: `fixed top-4 right-4 min-w-[200px] max-w-[400px] flex items-center gap-2 ${c} ${f} px-4 py-3 rounded-lg shadow-xl border ${p} ${o ? "animate-slide-out" : "animate-slide-in"}`,
        style: { zIndex: 1e6 },
        children: [
          u
            ? s.jsx(x0, { size: 20, className: y })
            : s.jsx(Mr, { size: 20, className: y }),
          s.jsx("span", {
            className: "text-sm font-medium",
            children: r === "success" ? l(e) : e,
          }),
          s.jsx("button", {
            onClick: a,
            className: `ml-2 ${x} transition-colors duration-150`,
            children: s.jsx(tr, { size: 16 }),
          }),
        ],
      });
    return _o.createPortal(w, document.body);
  },
  zy = ({
    isOpen: e,
    title: t,
    message: n,
    confirmText: r,
    cancelText: l,
    onConfirm: o,
    onCancel: i,
    isProcessing: a = !1,
  }) =>
    s.jsx(qe, {
      appear: !0,
      show: e,
      as: h.Fragment,
      children: s.jsxs(Ye, {
        as: "div",
        className: "relative z-[60]",
        onClose: () => !a && i(),
        children: [
          s.jsx(qe.Child, {
            as: h.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: s.jsx("div", {
              className: "fixed inset-0 bg-black bg-opacity-25",
            }),
          }),
          s.jsx("div", {
            className: "fixed inset-0 overflow-y-auto",
            children: s.jsx("div", {
              className:
                "flex min-h-full items-center justify-center p-4 text-center",
              children: s.jsx(qe.Child, {
                as: h.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0 scale-95",
                enterTo: "opacity-100 scale-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-95",
                children: s.jsxs(Ye.Panel, {
                  className:
                    "w-[90vw] max-w-md transform overflow-hidden rounded-lg bg-white p-4 md:p-6 text-left align-middle shadow-xl transition-all",
                  children: [
                    s.jsx(Ye.Title, {
                      as: "h3",
                      className: "text-xl font-medium text-gray-900",
                      children: t,
                    }),
                    s.jsx("div", {
                      className: "mt-4",
                      children: s.jsx("p", {
                        className: "text-sm text-gray-600",
                        children: n,
                      }),
                    }),
                    s.jsxs("div", {
                      className: "mt-6 flex justify-end gap-3",
                      children: [
                        s.jsx("button", {
                          type: "button",
                          onClick: () => !a && i(),
                          disabled: a,
                          className:
                            "inline-flex justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                          children: l,
                        }),
                        s.jsx("button", {
                          type: "button",
                          onClick: o,
                          disabled: a,
                          className:
                            "inline-flex justify-center rounded-lg border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                          children: a ? "處理中..." : r,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        ],
      }),
    });
async function Ry() {
  try {
    const e = await fetch("../config.txt");
    if (!e.ok) throw new Error("Failed to load configuration");
    return (await e.json()).ai;
  } catch (e) {
    throw (console.error("載入設定檔錯誤:", e), e);
  }
}
async function Iy(e) {
  var t, n, r;
  try {
    const o = `${await Ry()}/barcode`,
      i = new FormData();
    i.append("file", e);
    const a = await fetch(o, { method: "POST", body: i });
    if (!a.ok) throw new Error("API request failed");
    const u = await a.json();
    return (
      ((r =
        (n = (t = u == null ? void 0 : u.results) == null ? void 0 : t[0]) ==
        null
          ? void 0
          : n.code) == null
        ? void 0
        : r.trim()) || null
    );
  } catch (l) {
    return (console.error("條碼掃描 API 錯誤:", l), null);
  }
}
const Ay = ({ isOpen: e, onClose: t, onBarcodeDetected: n }) => {
    const r = h.useRef(null),
      l = h.useRef(null),
      o = h.useRef(null),
      i = h.useRef(null),
      [a, u] = h.useState(null),
      [c, f] = h.useState(!1),
      [p, y] = h.useState(window.innerWidth < 768),
      [x, w] = h.useState(null);
    h.useEffect(() => {
      const N = () => y(window.innerWidth < 768);
      return (
        window.addEventListener("resize", N),
        () => window.removeEventListener("resize", N)
      );
    }, []);
    const S = async (N) => {
      if (!r.current || !i.current) return;
      const m = N.currentTarget.getBoundingClientRect(),
        d = (N.clientX - m.left) / m.width,
        g = (N.clientY - m.top) / m.height;
      (w({ x: N.clientX - m.left, y: N.clientY - m.top }),
        setTimeout(() => w(null), 1e3));
      try {
        const v = i.current.getVideoTracks()[0],
          b = v.getCapabilities();
        if ("focusMode" in b) {
          const j = { advanced: [{ focusMode: "single-shot" }] };
          await v.applyConstraints(j);
        }
        if ("pointsOfInterest" in b) {
          const j = { advanced: [{ pointsOfInterest: [{ x: d, y: g }] }] };
          await v.applyConstraints(j);
        }
      } catch (v) {
        console.log("對焦功能不支援或失敗:", v);
      }
    };
    return (
      h.useEffect(() => {
        let N = null,
          m = null;
        const d = () => {
            (m && clearInterval(m),
              N &&
                (N.getTracks().forEach((b) => b.stop()), (i.current = null)));
          },
          g = async () => {
            if (!r.current || !l.current) return;
            const b = r.current,
              j = l.current,
              T = j.getContext("2d");
            if (!T || b.readyState < 2) return;
            ((j.width = b.videoWidth),
              (j.height = b.videoHeight),
              T.drawImage(b, 0, 0, j.width, j.height));
            const P = await new Promise((F) => j.toBlob(F, "image/jpeg", 0.8));
            if (!P) return;
            const z = await Iy(P);
            z && (d(), n(z), t());
          };
        return (
          e
            ? (async () => {
                try {
                  ((N = await navigator.mediaDevices.getUserMedia({
                    video: {
                      facingMode: "environment",
                      width: { ideal: 1920 },
                      height: { ideal: 1080 },
                    },
                  })),
                    (i.current = N),
                    r.current && (r.current.srcObject = N),
                    f(!0),
                    (m = setInterval(g, 600)));
                } catch (b) {
                  (console.error("無法開啟相機:", b),
                    u("無法開啟相機，請確認已授權使用相機"));
                }
              })()
            : d(),
          () => d()
        );
      }, [e, n, t]),
      e
        ? p
          ? s.jsxs("div", {
              className:
                "fixed inset-0 bg-black text-white flex flex-col z-[100]",
              children: [
                s.jsxs("div", {
                  className: "absolute inset-0 w-full h-full",
                  onClick: S,
                  children: [
                    s.jsx("video", {
                      ref: r,
                      autoPlay: !0,
                      playsInline: !0,
                      muted: !0,
                      className: "w-full h-full object-cover",
                    }),
                    s.jsx("div", {
                      className:
                        "absolute inset-0 flex items-center justify-center pointer-events-none",
                      children: s.jsxs("div", {
                        className:
                          "relative w-64 h-48 border-2 border-blue-400 rounded-lg",
                        children: [
                          s.jsx("div", {
                            className:
                              "absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-blue-400 -mt-1 -ml-1",
                          }),
                          s.jsx("div", {
                            className:
                              "absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-blue-400 -mt-1 -mr-1",
                          }),
                          s.jsx("div", {
                            className:
                              "absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-blue-400 -mb-1 -ml-1",
                          }),
                          s.jsx("div", {
                            className:
                              "absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-blue-400 -mb-1 -mr-1",
                          }),
                        ],
                      }),
                    }),
                    x &&
                      s.jsx("div", {
                        className:
                          "absolute w-20 h-20 border-2 border-green-400 rounded-full pointer-events-none",
                        style: {
                          left: x.x - 40,
                          top: x.y - 40,
                          animation: "ping 0.5s ease-out",
                        },
                      }),
                  ],
                }),
                s.jsxs("div", {
                  className:
                    "relative z-10 p-4 flex justify-between items-center bg-black bg-opacity-40 backdrop-blur-sm",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        s.jsx(ps, { className: "w-5 h-5 text-blue-400 mr-2" }),
                        s.jsx("h2", {
                          className: "text-lg font-semibold",
                          children: "條碼掃描",
                        }),
                      ],
                    }),
                    s.jsx("button", {
                      onClick: t,
                      children: s.jsx(tr, {
                        className: "w-6 h-6 text-gray-300",
                      }),
                    }),
                  ],
                }),
                s.jsx("div", {
                  className:
                    "flex-1 flex items-center justify-center pointer-events-none",
                  children:
                    a &&
                    s.jsx("div", {
                      className:
                        "bg-red-600 bg-opacity-60 text-sm px-4 py-2 rounded-lg",
                      children: a,
                    }),
                }),
                s.jsxs("div", {
                  className:
                    "relative z-10 bg-black bg-opacity-60 text-center py-3 pb-[env(safe-area-inset-bottom)]",
                  children: [
                    !a &&
                      s.jsxs(s.Fragment, {
                        children: [
                          s.jsx("p", {
                            className: "text-sm",
                            children: "請將條碼對準掃描框",
                          }),
                          s.jsx("p", {
                            className: "text-xs text-gray-400",
                            children: "點擊畫面可對焦 | 支援一維與二維條碼",
                          }),
                        ],
                      }),
                    s.jsx("button", {
                      onClick: t,
                      className:
                        "mt-3 px-4 py-2 border border-gray-400 rounded-lg text-gray-300 hover:bg-gray-700",
                      children: "取消",
                    }),
                  ],
                }),
                s.jsx("canvas", { ref: l, className: "hidden" }),
              ],
            })
          : s.jsx("div", {
              className:
                "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100]",
              children: s.jsxs("div", {
                className: "bg-white rounded-lg shadow-xl max-w-2xl w-full",
                children: [
                  s.jsxs("div", {
                    className: "flex items-center justify-between p-4 border-b",
                    children: [
                      s.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          s.jsx(ps, {
                            className: "w-6 h-6 text-blue-600 mr-2",
                          }),
                          s.jsx("h3", {
                            className: "text-lg font-semibold text-gray-900",
                            children: "條碼掃描",
                          }),
                        ],
                      }),
                      s.jsx("button", {
                        onClick: t,
                        className: "text-gray-400 hover:text-gray-600",
                        children: s.jsx(tr, { className: "w-6 h-6" }),
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "p-4",
                    children: [
                      a &&
                        s.jsx("div", {
                          className:
                            "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm",
                          children: a,
                        }),
                      s.jsxs("div", {
                        ref: o,
                        className:
                          "relative bg-black rounded-lg overflow-hidden cursor-pointer",
                        style: { aspectRatio: "16/9" },
                        onClick: S,
                        children: [
                          s.jsx("video", {
                            ref: r,
                            autoPlay: !0,
                            playsInline: !0,
                            muted: !0,
                            className: "w-full h-full object-cover",
                          }),
                          s.jsx("div", {
                            className:
                              "absolute inset-0 flex items-center justify-center pointer-events-none",
                            children: s.jsxs("div", {
                              className:
                                "relative w-64 h-48 border-2 border-blue-500 rounded-lg",
                              children: [
                                s.jsx("div", {
                                  className:
                                    "absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-blue-500 -mt-1 -ml-1",
                                }),
                                s.jsx("div", {
                                  className:
                                    "absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-blue-500 -mt-1 -mr-1",
                                }),
                                s.jsx("div", {
                                  className:
                                    "absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-blue-500 -mb-1 -ml-1",
                                }),
                                s.jsx("div", {
                                  className:
                                    "absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-blue-500 -mb-1 -mr-1",
                                }),
                              ],
                            }),
                          }),
                          x &&
                            s.jsx("div", {
                              className:
                                "absolute w-16 h-16 border-2 border-green-400 rounded-full pointer-events-none animate-ping",
                              style: {
                                left: x.x - 32,
                                top: x.y - 32,
                                animation: "ping 0.5s ease-out",
                              },
                            }),
                        ],
                      }),
                      s.jsx("canvas", { ref: l, className: "hidden" }),
                      s.jsxs("div", {
                        className: "mt-4 text-center text-sm text-gray-600",
                        children: [
                          s.jsx("p", { children: "請將條碼對準掃描框中央" }),
                          s.jsx("p", {
                            className: "text-xs text-gray-500 mt-1",
                            children:
                              "點擊畫面可對焦 | 支援一維條碼與二維條碼（QR Code）",
                          }),
                        ],
                      }),
                      s.jsx("div", {
                        className: "mt-4 flex justify-end",
                        children: s.jsx("button", {
                          onClick: t,
                          className:
                            "px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50",
                          children: "取消",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
        : null
    );
  },
  Hy = ({ isOpen: e, onClose: t, onScan: n, isScanning: r }) => {
    const { t: l, language: o } = rt(),
      [i, a] = h.useState(""),
      [u, c] = h.useState(!1),
      f = h.useRef(null);
    (h.useEffect(() => {
      e && f.current && f.current.focus();
    }, [e]),
      h.useEffect(() => {
        !r && e && f.current && f.current.focus();
      }, [r, e]));
    const p = (w) => {
        (w.preventDefault(), i.trim() && !r && (n(i.trim()), a("")));
      },
      y = () => {
        (a(""), t());
      },
      x = (w) => {
        (a(w), c(!1), n(w));
      };
    return e
      ? s.jsxs(s.Fragment, {
          children: [
            s.jsx(Ay, {
              isOpen: u,
              onClose: () => c(!1),
              onBarcodeDetected: x,
            }),
            s.jsx("div", {
              className:
                "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
              children: s.jsxs("div", {
                className: "bg-white rounded-lg shadow-xl max-w-md w-full",
                children: [
                  s.jsxs("div", {
                    className:
                      "flex items-center justify-between p-6 border-b border-gray-200",
                    children: [
                      s.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          s.jsx(ff, { className: "text-blue-600", size: 24 }),
                          s.jsx("h2", {
                            className: "text-xl font-semibold text-gray-800",
                            children: o === "zh" ? "掃碼建單" : "Scan Barcode",
                          }),
                        ],
                      }),
                      s.jsx("button", {
                        onClick: y,
                        disabled: r,
                        className:
                          "text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50",
                        children: s.jsx(tr, { size: 24 }),
                      }),
                    ],
                  }),
                  s.jsxs("form", {
                    onSubmit: p,
                    className: "p-6 space-y-4",
                    children: [
                      s.jsxs("div", {
                        children: [
                          s.jsx("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children:
                              o === "zh"
                                ? "請掃描條碼或手動輸入"
                                : "Scan barcode or enter manually",
                          }),
                          s.jsxs("div", {
                            className: "relative",
                            children: [
                              s.jsx("input", {
                                ref: f,
                                type: "text",
                                value: i,
                                onChange: (w) => a(w.target.value),
                                disabled: r,
                                className:
                                  "w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed text-lg",
                                placeholder:
                                  o === "zh" ? "條碼內容" : "Barcode content",
                                autoComplete: "off",
                              }),
                              s.jsx("button", {
                                type: "button",
                                onClick: () => c(!0),
                                disabled: r,
                                className:
                                  "absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                title:
                                  o === "zh"
                                    ? "開啟相機掃描"
                                    : "Open camera scanner",
                                children: s.jsx(ps, { size: 20 }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      r &&
                        s.jsxs("div", {
                          className:
                            "flex items-center justify-center gap-2 text-blue-600",
                          children: [
                            s.jsx("div", {
                              className:
                                "animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600",
                            }),
                            s.jsx("span", {
                              className: "text-sm font-medium",
                              children:
                                o === "zh" ? "處理中..." : "Processing...",
                            }),
                          ],
                        }),
                      s.jsxs("div", {
                        className: "flex gap-3 pt-2",
                        children: [
                          s.jsx("button", {
                            type: "button",
                            onClick: y,
                            disabled: r,
                            className:
                              "flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium",
                            children: o === "zh" ? "取消" : "Cancel",
                          }),
                          s.jsx("button", {
                            type: "submit",
                            disabled: !i.trim() || r,
                            className:
                              "flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-medium",
                            children: o === "zh" ? "確認" : "Confirm",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
      : null;
  },
  Wy = ({ isOpen: e, onClose: t, onUpload: n, isUploading: r }) => {
    rt();
    const [l, o] = h.useState(!1),
      [i, a] = h.useState(null),
      u = h.useRef(null);
    if (!e) return null;
    const c = (N) => {
        (N.preventDefault(), o(!0));
      },
      f = (N) => {
        (N.preventDefault(), o(!1));
      },
      p = (N) => {
        (N.preventDefault(), o(!1));
        const m = N.dataTransfer.files;
        if (m.length > 0) {
          const d = m[0];
          x(d) && a(d);
        }
      },
      y = (N) => {
        const m = N.target.files;
        if (m && m.length > 0) {
          const d = m[0];
          x(d) && a(d);
        }
      },
      x = (N) => {
        const m = [
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/vnd.ms-excel.sheet.macroEnabled.12",
          ],
          d = [".xls", ".xlsx", ".xlsm"];
        return (
          m.includes(N.type) || d.some((g) => N.name.toLowerCase().endsWith(g))
        );
      },
      w = async () => {
        i && !r && (await n(i), a(null));
      },
      S = () => {
        r || (a(null), t());
      };
    return s.jsx("div", {
      className:
        "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4",
      children: s.jsxs("div", {
        className: "bg-white rounded-xl shadow-2xl w-full max-w-md",
        children: [
          s.jsxs("div", {
            className:
              "flex items-center justify-between p-6 border-b border-gray-200",
            children: [
              s.jsx("h2", {
                className: "text-xl font-semibold text-gray-900",
                children: "上傳撥補單",
              }),
              s.jsx("button", {
                onClick: S,
                disabled: r,
                className:
                  "text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50",
                children: s.jsx(tr, { size: 24 }),
              }),
            ],
          }),
          s.jsxs("div", {
            className: "p-6",
            children: [
              s.jsxs("div", {
                onDragOver: c,
                onDragLeave: f,
                onDrop: p,
                onClick: () => {
                  var N;
                  return (N = u.current) == null ? void 0 : N.click();
                },
                className: `
              border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
              transition-all duration-200
              ${l ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"}
              ${r ? "opacity-50 cursor-not-allowed" : ""}
            `,
                children: [
                  s.jsx("input", {
                    ref: u,
                    type: "file",
                    accept: ".xls,.xlsx,.xlsm",
                    onChange: y,
                    disabled: r,
                    className: "hidden",
                  }),
                  i
                    ? s.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          s.jsx(df, {
                            size: 48,
                            className: "mx-auto text-green-600",
                          }),
                          s.jsxs("div", {
                            children: [
                              s.jsx("p", {
                                className:
                                  "text-base font-medium text-gray-900",
                                children: i.name,
                              }),
                              s.jsxs("p", {
                                className: "text-sm text-gray-500 mt-1",
                                children: [(i.size / 1024).toFixed(2), " KB"],
                              }),
                            ],
                          }),
                        ],
                      })
                    : s.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          s.jsx(Wu, {
                            size: 48,
                            className: "mx-auto text-gray-400",
                          }),
                          s.jsxs("div", {
                            children: [
                              s.jsx("p", {
                                className:
                                  "text-base font-medium text-gray-900",
                                children: "拖拽文件到此處或點擊選擇",
                              }),
                              s.jsx("p", {
                                className: "text-sm text-gray-500 mt-1",
                                children: "支援格式: .xls, .xlsx, .xlsm",
                              }),
                            ],
                          }),
                        ],
                      }),
                ],
              }),
              i &&
                s.jsxs("div", {
                  className: "mt-6 flex gap-3",
                  children: [
                    s.jsx("button", {
                      onClick: (N) => {
                        (N.stopPropagation(), a(null));
                      },
                      disabled: r,
                      className:
                        "flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: "取消選擇",
                    }),
                    s.jsx("button", {
                      onClick: (N) => {
                        (N.stopPropagation(), w());
                      },
                      disabled: r,
                      className:
                        "flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                      children: r
                        ? s.jsxs(s.Fragment, {
                            children: [
                              s.jsx(N0, {
                                size: 18,
                                className: "animate-spin",
                              }),
                              s.jsx("span", { children: "上傳中..." }),
                            ],
                          })
                        : s.jsxs(s.Fragment, {
                            children: [
                              s.jsx(Wu, { size: 18 }),
                              s.jsx("span", { children: "上傳" }),
                            ],
                          }),
                    }),
                  ],
                }),
            ],
          }),
          s.jsx("div", {
            className: "px-6 pb-6",
            children: s.jsx("div", {
              className: "bg-blue-50 rounded-lg p-4 border border-blue-200",
              children: s.jsxs("p", {
                className: "text-sm text-blue-800",
                children: [
                  s.jsx("strong", { children: "提示：" }),
                  "請確保 Excel 文件格式正確，包含所有必要的欄位資訊。",
                ],
              }),
            }),
          }),
        ],
      }),
    });
  },
  Uy = ({
    drugs: e,
    warehouses: t,
    onSubmit: n,
    isSubmitting: r,
    resetTrigger: l = 0,
    onRefreshOrders: o,
  }) => {
    const { t: i } = rt(),
      [a, u] = h.useState(""),
      [c, f] = h.useState([]),
      [p, y] = h.useState(null),
      [x, w] = h.useState(""),
      [S, N] = h.useState(""),
      [m, d] = h.useState(""),
      [g, v] = h.useState(!1),
      [b, j] = h.useState(!1),
      [T, P] = h.useState(!1),
      [z, F] = h.useState(!1),
      [Q, X] = h.useState(!1),
      [ue, J] = h.useState(null),
      [se, ve] = h.useState(null),
      [Y, E] = h.useState(null),
      [L, _] = h.useState(null),
      [A, D] = h.useState(!1),
      [Z, k] = h.useState(!1);
    h.useEffect(() => {
      l > 0 && (u(""), f([]), y(null), d(""), E(null), _(null), J(null));
    }, [l]);
    const W = (M) => {
        const $ = M.target.value;
        if ((u($), !$.trim())) {
          f([]);
          return;
        }
        const Le = $.toLowerCase(),
          Cn = e
            .filter((Re) => {
              var rn;
              return (
                Re.NAME.toLowerCase().includes(Le) ||
                Re.CODE.toLowerCase().includes(Le) ||
                Re.CHT_NAME.toLowerCase().includes(Le) ||
                ((rn = Re.SKDIACODE) == null
                  ? void 0
                  : rn.toLowerCase().includes(Le))
              );
            })
            .slice(0, 10);
        f(Cn);
      },
      V = (M) => {
        (y(M), u(""), f([]), E(null), _(null));
      },
      me = async (M, $, Le) => {
        var Cn;
        Le ? D(!0) : k(!0);
        try {
          const rn =
            ((Cn = (
              await yt("/api/stock/get_stock_by_code", {
                method: "POST",
                body: {
                  ServerName: $.name === "DS01" ? "藥庫" : $.name,
                  ServerType: $.type,
                  ValueAry: [M],
                },
              })
            ).Data) == null
              ? void 0
              : Cn[0]) || null;
          Le ? E(rn) : _(rn);
        } catch (Re) {
          (console.error("Error fetching new stock data:", Re),
            Le ? E(null) : _(null));
        } finally {
          Le ? D(!1) : k(!1);
        }
      };
    (h.useEffect(() => {
      if (p && x) {
        const M = t.find(($) => $.displayName === x);
        M && me(p.CODE, M, !0);
      } else E(null);
    }, [p, x]),
      h.useEffect(() => {
        if (p && S) {
          const M = t.find(($) => $.displayName === S);
          M && me(p.CODE, M, !1);
        } else _(null);
      }, [p, S]));
    const nn = (M) => {
        const $ = M.target.value;
        (w($), $ === S && $ !== "" && J("來源庫別與目的庫別不能相同"));
      },
      sl = (M) => {
        const $ = M.target.value;
        (N($), $ === x && $ !== "" && J("來源庫別與目的庫別不能相同"));
      },
      Ao = (M) => {
        const $ = M.target.value;
        ($ === "" || /^\d+$/.test($)) && d($);
      },
      ee = async (M) => {
        (P(!0), j(!1));
        try {
          const $ = await ky(M);
          if ($.Code === 200 && $.Data) {
            const Le = $.Data.code,
              Cn = $.Data.issuedQuantity,
              Re = e.find((rn) => rn.CODE.toLowerCase() === Le.toLowerCase());
            Re && (y(Re), u(Re.NAME || Re.CHT_NAME || Re.CODE), d(Cn));
          }
        } catch ($) {
          console.error("Barcode scan error:", $);
        } finally {
          P(!1);
        }
      },
      lt = async (M) => {
        (X(!0), F(!1));
        try {
          const $ = Rf() || "",
            Le = await Ny(M, $);
          (console.log("Excel upload response:", Le),
            Le.Code === 200
              ? (ve("Excel 上傳成功"), o == null || o())
              : J("Excel 上傳失敗"));
        } catch ($) {
          (console.error("Excel upload error:", $),
            J("Excel 上傳失敗，請稍後再試"));
        } finally {
          X(!1);
        }
      },
      Oe = async (M) => {
        if ((M && M.preventDefault(), !p)) {
          J("請選擇藥品");
          return;
        }
        if (!x) {
          J("請選擇來源庫別");
          return;
        }
        if (!S) {
          J("請選擇目的庫別");
          return;
        }
        if (!m) {
          J("請輸入撥補數量");
          return;
        }
        if (x === S) {
          J("來源庫別與目的庫別不能相同");
          return;
        }
        await n({
          drug: p,
          sourceWarehouse: x,
          destinationWarehouse: S,
          quantity: m,
          sourceStockInfo: Y,
          destinationStockInfo: L,
        });
      },
      En = (M) => {
        M.key === "Enter" && a && c.length > 0 && V(c[0]);
      },
      ka = (M) => (!M || M === "2050/01/01" ? "無期限" : M),
      Ho = () =>
        Y && Y.qty.length > 0
          ? Y.qty.reduce((M, $) => M + parseInt($ || "0"), 0).toString()
          : null;
    return s.jsxs(s.Fragment, {
      children: [
        ue &&
          s.jsx(Ss, {
            message: ue,
            onClose: () => J(null),
            duration: 3e3,
            type: "error",
          }),
        se &&
          s.jsx(Ss, {
            message: se,
            onClose: () => ve(null),
            duration: 3e3,
            type: "success",
          }),
        s.jsx(Hy, {
          isOpen: b,
          onClose: () => j(!1),
          onScan: ee,
          isScanning: T,
        }),
        s.jsx(Wy, {
          isOpen: z,
          onClose: () => F(!1),
          onUpload: lt,
          isUploading: Q,
        }),
        s.jsxs("form", {
          onSubmit: Oe,
          className:
            "bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 space-y-6",
          children: [
            s.jsxs("div", {
              children: [
                s.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    s.jsxs("div", {
                      className: "relative flex-1",
                      children: [
                        s.jsx("input", {
                          type: "text",
                          value: a,
                          onChange: W,
                          onKeyPress: En,
                          placeholder: i("app.search.placeholder"),
                          className:
                            "w-full px-3 py-2 pl-8 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                        }),
                        s.jsx(pf, {
                          size: 18,
                          className: "absolute left-2 top-2.5 text-gray-400",
                        }),
                      ],
                    }),
                    s.jsxs("button", {
                      type: "button",
                      onClick: () => j(!0),
                      className:
                        "flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap",
                      children: [
                        s.jsx(ff, { size: 18 }),
                        s.jsx("span", {
                          className: "hidden sm:inline",
                          children: i("app.button.scan"),
                        }),
                      ],
                    }),
                    s.jsxs("button", {
                      type: "button",
                      onClick: () => F(!0),
                      className:
                        "flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium whitespace-nowrap",
                      children: [
                        s.jsx(df, { size: 18 }),
                        s.jsx("span", {
                          className: "hidden sm:inline",
                          children: "上傳撥補單",
                        }),
                      ],
                    }),
                  ],
                }),
                c.length > 0 &&
                  s.jsx("div", {
                    className:
                      "mt-2 max-h-60 overflow-y-auto border rounded-lg shadow-sm",
                    children: c.map((M) =>
                      s.jsxs(
                        "div",
                        {
                          onClick: () => V(M),
                          className:
                            "p-4 hover:bg-gray-50 cursor-pointer border-b transition-colors duration-150",
                          children: [
                            s.jsx("div", {
                              className: "text-base font-medium text-gray-900",
                              children: M.NAME,
                            }),
                            s.jsxs("div", {
                              className: "text-base text-gray-600",
                              children: ["藥碼: ", M.CODE],
                            }),
                            M.SKDIACODE &&
                              s.jsxs("div", {
                                className: "text-base text-gray-600",
                                children: ["料號: ", M.SKDIACODE],
                              }),
                            M.CHT_NAME &&
                              s.jsx("div", {
                                className: "text-base text-gray-600",
                                children: M.CHT_NAME,
                              }),
                          ],
                        },
                        M.GUID,
                      ),
                    ),
                  }),
              ],
            }),
            s.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
              children: [
                s.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    s.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: i("app.drug.name"),
                    }),
                    s.jsx("div", {
                      className: "bg-gray-50 rounded-lg border border-gray-200",
                      children: p
                        ? s.jsxs("div", {
                            className: "p-4",
                            children: [
                              s.jsx("div", {
                                className:
                                  "text-base font-medium text-gray-900",
                                children: p.NAME,
                              }),
                              p.SKDIACODE &&
                                s.jsxs("div", {
                                  className: "text-base text-gray-600 mt-1",
                                  children: ["料號: ", p.SKDIACODE],
                                }),
                              p.CHT_NAME &&
                                s.jsx("div", {
                                  className: "text-base text-gray-600 mt-1",
                                  children: p.CHT_NAME,
                                }),
                            ],
                          })
                        : s.jsx("div", {
                            className: "p-4",
                            children: s.jsx("div", {
                              className: "text-base text-gray-600",
                              children: i("app.drug.notSelected"),
                            }),
                          }),
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    s.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: i("app.drug.code"),
                    }),
                    s.jsx("div", {
                      className: "bg-gray-50 rounded-lg border border-gray-200",
                      children: p
                        ? s.jsx("div", {
                            className: "p-4",
                            children: s.jsx("div", {
                              className: "text-base font-medium text-gray-900",
                              children: p.CODE,
                            }),
                          })
                        : s.jsx("div", {
                            className: "p-4",
                            children: s.jsx("div", {
                              className: "text-base text-gray-600",
                              children: i("app.drug.notSelected"),
                            }),
                          }),
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
              children: [
                s.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    s.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: i("app.store.source"),
                    }),
                    s.jsxs("select", {
                      value: x,
                      onChange: nn,
                      className:
                        "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                      children: [
                        s.jsx("option", {
                          value: "",
                          children: i("app.store.source.placeholder"),
                        }),
                        t.map((M) =>
                          s.jsx(
                            "option",
                            { value: M.displayName, children: M.displayName },
                            M.GUID,
                          ),
                        ),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    s.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: i("app.store.destination"),
                    }),
                    s.jsxs("select", {
                      value: S,
                      onChange: sl,
                      className:
                        "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                      children: [
                        s.jsx("option", {
                          value: "",
                          children: i("app.store.destination.placeholder"),
                        }),
                        t.map((M) =>
                          s.jsx(
                            "option",
                            { value: M.displayName, children: M.displayName },
                            M.GUID,
                          ),
                        ),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            p &&
              x &&
              s.jsxs("div", {
                className: "space-y-4",
                children: [
                  s.jsx("label", {
                    className: "block text-base font-medium text-gray-700",
                    children: "來源庫別庫存明細",
                  }),
                  s.jsx("div", {
                    className:
                      "bg-gray-50 rounded-lg border border-gray-200 p-4",
                    children: A
                      ? s.jsxs("div", {
                          className: "flex items-center justify-center py-4",
                          children: [
                            s.jsx("div", {
                              className:
                                "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600",
                            }),
                            s.jsx("span", {
                              className: "ml-2 text-base text-gray-600",
                              children: "載入庫存資訊中...",
                            }),
                          ],
                        })
                      : Y
                        ? s.jsxs("div", {
                            className: "space-y-3",
                            children: [
                              s.jsxs("div", {
                                className:
                                  "flex items-center gap-2 text-base font-medium text-gray-900 mb-3",
                                children: [
                                  s.jsx(bl, {
                                    size: 18,
                                    className: "text-blue-600",
                                  }),
                                  "總庫存: ",
                                  Y.qty.reduce(
                                    (M, $) => M + parseInt($ || "0"),
                                    0,
                                  ),
                                ],
                              }),
                              Y.lot.length > 0
                                ? s.jsx("div", {
                                    className: "space-y-2",
                                    children: Y.lot.map((M, $) =>
                                      s.jsx(
                                        "div",
                                        {
                                          className:
                                            "bg-white rounded-lg border border-gray-200 p-3",
                                          children: s.jsxs("div", {
                                            className:
                                              "grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm",
                                            children: [
                                              s.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  s.jsx(Iu, {
                                                    size: 16,
                                                    className:
                                                      "text-purple-600",
                                                  }),
                                                  s.jsx("span", {
                                                    className: "text-gray-600",
                                                    children: "批號:",
                                                  }),
                                                  s.jsx("span", {
                                                    className: "font-medium",
                                                    children: M || "無",
                                                  }),
                                                ],
                                              }),
                                              s.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  s.jsx(Ru, {
                                                    size: 16,
                                                    className: "text-green-600",
                                                  }),
                                                  s.jsx("span", {
                                                    className: "text-gray-600",
                                                    children: "效期:",
                                                  }),
                                                  s.jsx("span", {
                                                    className: "font-medium",
                                                    children: ka(
                                                      Y.expiry_date[$] || "",
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              s.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  s.jsx(bl, {
                                                    size: 16,
                                                    className: "text-blue-600",
                                                  }),
                                                  s.jsx("span", {
                                                    className: "text-gray-600",
                                                    children: "數量:",
                                                  }),
                                                  s.jsx("span", {
                                                    className: "font-medium",
                                                    children: Y.qty[$] || "0",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        },
                                        $,
                                      ),
                                    ),
                                  })
                                : s.jsx("div", {
                                    className: "text-base text-gray-600",
                                    children: "無批號資訊",
                                  }),
                            ],
                          })
                        : s.jsx("div", {
                            className: "text-base text-gray-600",
                            children: "請選擇藥品和來源庫別以查看庫存資訊",
                          }),
                  }),
                ],
              }),
            p &&
              S &&
              s.jsxs("div", {
                className: "space-y-4",
                children: [
                  s.jsx("label", {
                    className: "block text-base font-medium text-gray-700",
                    children: "目的庫別庫存明細",
                  }),
                  s.jsx("div", {
                    className:
                      "bg-gray-50 rounded-lg border border-gray-200 p-4",
                    children: Z
                      ? s.jsxs("div", {
                          className: "flex items-center justify-center py-4",
                          children: [
                            s.jsx("div", {
                              className:
                                "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600",
                            }),
                            s.jsx("span", {
                              className: "ml-2 text-base text-gray-600",
                              children: "載入庫存資訊中...",
                            }),
                          ],
                        })
                      : L
                        ? s.jsxs("div", {
                            className: "space-y-3",
                            children: [
                              s.jsxs("div", {
                                className:
                                  "flex items-center gap-2 text-base font-medium text-gray-900 mb-3",
                                children: [
                                  s.jsx(bl, {
                                    size: 18,
                                    className: "text-blue-600",
                                  }),
                                  "總庫存: ",
                                  L.qty.reduce(
                                    (M, $) => M + parseInt($ || "0"),
                                    0,
                                  ),
                                ],
                              }),
                              L.lot.length > 0
                                ? s.jsx("div", {
                                    className: "space-y-2",
                                    children: L.lot.map((M, $) =>
                                      s.jsx(
                                        "div",
                                        {
                                          className:
                                            "bg-white rounded-lg border border-gray-200 p-3",
                                          children: s.jsxs("div", {
                                            className:
                                              "grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm",
                                            children: [
                                              s.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  s.jsx(Iu, {
                                                    size: 16,
                                                    className:
                                                      "text-purple-600",
                                                  }),
                                                  s.jsx("span", {
                                                    className: "text-gray-600",
                                                    children: "批號:",
                                                  }),
                                                  s.jsx("span", {
                                                    className: "font-medium",
                                                    children: M || "無",
                                                  }),
                                                ],
                                              }),
                                              s.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  s.jsx(Ru, {
                                                    size: 16,
                                                    className: "text-green-600",
                                                  }),
                                                  s.jsx("span", {
                                                    className: "text-gray-600",
                                                    children: "效期:",
                                                  }),
                                                  s.jsx("span", {
                                                    className: "font-medium",
                                                    children: ka(
                                                      L.expiry_date[$] || "",
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              s.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  s.jsx(bl, {
                                                    size: 16,
                                                    className: "text-blue-600",
                                                  }),
                                                  s.jsx("span", {
                                                    className: "text-gray-600",
                                                    children: "數量:",
                                                  }),
                                                  s.jsx("span", {
                                                    className: "font-medium",
                                                    children: L.qty[$] || "0",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        },
                                        $,
                                      ),
                                    ),
                                  })
                                : s.jsx("div", {
                                    className: "text-base text-gray-600",
                                    children: "無批號資訊",
                                  }),
                            ],
                          })
                        : s.jsx("div", {
                            className: "text-base text-gray-600",
                            children: "請選擇藥品和目的庫別以查看庫存資訊",
                          }),
                  }),
                ],
              }),
            s.jsxs("div", {
              className: "space-y-4",
              children: [
                s.jsx("label", {
                  className: "block text-base font-medium text-gray-700",
                  children: i("app.quantity"),
                }),
                s.jsxs("div", {
                  className: "flex gap-4 items-center flex-wrap",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        s.jsx("input", {
                          type: "text",
                          value: m,
                          onChange: Ao,
                          onClick: () => v(!0),
                          placeholder: i("app.quantity.placeholder"),
                          className:
                            "w-40 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900 cursor-pointer",
                        }),
                        (p == null ? void 0 : p.MIN_PAKAGE) &&
                          s.jsx("span", {
                            className: "text-base font-medium text-gray-700",
                            children: p.MIN_PAKAGE,
                          }),
                      ],
                    }),
                    Ho() &&
                      s.jsxs("span", {
                        className: `text-base font-medium ${parseInt(Ho()) > 0 ? "text-green-600" : "text-red-600"}`,
                        children: [i("app.quantity.available"), ": ", Ho()],
                      }),
                  ],
                }),
              ],
            }),
            g && s.jsx(Ff, { value: m, onChange: d, onClose: () => v(!1) }),
            s.jsx("button", {
              type: "submit",
              disabled: r || (x && S && x === S),
              className: `w-full px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-opacity-50 ${r || (x && S && x === S) ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500"}`,
              children: i(r ? "app.button.processing" : "app.button.create"),
            }),
          ],
        }),
      ],
    });
  },
  By = ({ className: e = "" }) => {
    const { t } = rt();
    return s.jsx("footer", {
      className: `fixed bottom-0 left-0 w-full bg-white py-2 shadow-inner border-t border-gray-200 z-50 ${e}`,
      children: s.jsx("div", {
        className: "max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8",
        children: s.jsx("p", {
          className: "text-center text-sm text-gray-600",
          children: t("footer.copyright"),
        }),
      }),
    });
  };
function Vy() {
  rt();
  const [e, t] = h.useState(!1),
    [n, r] = h.useState(!0),
    [l, o] = h.useState([]),
    [i, a] = h.useState([]),
    [u, c] = h.useState(null),
    [f, p] = h.useState(!1),
    [y, x] = h.useState(!1),
    [w, S] = h.useState(!1),
    [N, m] = h.useState(!1),
    [d, g] = h.useState(null),
    [v, b] = h.useState([]),
    [j, T] = h.useState(() => {
      const D = new Date();
      return (D.setHours(0, 0, 0, 0), D);
    }),
    [P, z] = h.useState(() => {
      const D = new Date();
      return (D.setHours(23, 59, 59, 999), D);
    }),
    [F, Q] = h.useState(!1),
    [X, ue] = h.useState(0);
  (h.useEffect(() => {
    (async () => {
      try {
        (await wy(), x(!0));
        const Z = Ty();
        t(Z);
      } catch (Z) {
        (console.error("Error during initialization:", Z),
          c("系統初始化失敗，請重新整理頁面"));
      } finally {
        r(!1);
      }
    })();
  }, []),
    h.useEffect(() => {
      e && y && (se(), J(), ve());
    }, [e, y]));
  const J = async () => {
      try {
        const Z = (
          await yt("/api/med_page/get_med_cloud", { method: "POST", body: {} })
        ).Data.filter((k) => k.FILE_STATUS !== "關檔中");
        (o(Z), c(null));
      } catch (D) {
        (console.error("Error fetching drugs:", D),
          c("無法取得藥品資料，請稍後再試"),
          o([]));
      }
    },
    se = async () => {
      try {
        const D = await yt("/api/ServerSetting/get_name", {
          method: "POST",
          body: {},
        });
        if (!D || !D.Data) throw new Error("Invalid response format");
        const Z = D.Data.map((k) => ({
          ...k,
          displayName: k.name === "DS01" ? "藥庫" : k.name,
        }));
        (a(Z), c(null));
      } catch (D) {
        (console.error("Error fetching warehouses:", D),
          c("無法取得庫別資料，請稍後再試"),
          a([]));
      }
    },
    ve = async () => {
      Q(!0);
      try {
        const D = await yt("/api/drugStotreDistribution/get_by_addedTime", {
          method: "POST",
          body: {
            ValueAry: [
              de(j, "yyyy-MM-dd HH:mm:ss"),
              de(P, "yyyy-MM-dd HH:mm:ss"),
            ],
          },
        });
        (b(D.Data), c(null));
      } catch (D) {
        (console.error("Error fetching orders:", D),
          c("無法取得撥補單資料，請稍後再試"),
          b([]));
      } finally {
        Q(!1);
      }
    },
    Y = (D, Z) => {
      (T(D), z(Z), ve());
    },
    E = async (D) => {
      var V;
      (p(!0), c(null));
      const Z = Rf(),
        k =
          ((V = D.sourceStockInfo) == null
            ? void 0
            : V.qty
                .reduce((me, nn) => me + parseInt(nn || "0"), 0)
                .toString()) || "",
        W = {
          sourceStoreType:
            D.sourceWarehouse === "藥庫" ? "DS01" : D.sourceWarehouse,
          destinationStoreType:
            D.destinationWarehouse === "藥庫" ? "DS01" : D.destinationWarehouse,
          code: D.drug.CODE,
          name: D.drug.NAME,
          sourceStoreInventory: k,
          issuedQuantity: D.quantity,
          reportName: Z || "",
          state: "等待過帳",
          LOT: "",
          VAL: "",
          packageUnit: D.drug.MIN_PAKAGE || "",
        };
      try {
        const me = await yt("/api/drugStotreDistribution/add", {
          method: "POST",
          body: { Data: [W] },
        });
        if (me.Code === 200) (S(!0), c(null), ve(), ue((nn) => nn + 1));
        else throw new Error(me.Result || "建立撥補單失敗");
      } catch (me) {
        (console.error("Error creating order:", me),
          c("建立撥補單失敗，請稍後再試"));
      } finally {
        p(!1);
      }
    },
    L = async () => {
      d && (await E(d), g(null));
    },
    _ = async (D) => {
      var k;
      (((k = D.sourceStockInfo) == null
        ? void 0
        : k.qty.reduce((W, V) => W + parseInt(V || "0"), 0)) || 0) === 0
        ? (g(D), m(!0))
        : await E(D);
    },
    A = () => {
      (yo(), t(!1));
    };
  return n
    ? s.jsx("div", {
        className: "min-h-screen bg-white flex items-center justify-center",
        children: s.jsxs("div", {
          className: "text-center",
          children: [
            s.jsx("div", {
              className:
                "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto",
            }),
            s.jsx("p", {
              className: "mt-2 text-base text-gray-600",
              children: "載入中...",
            }),
          ],
        }),
      })
    : e
      ? s.jsxs("div", {
          className: "min-h-screen flex flex-col",
          children: [
            s.jsx($y, { onLogout: A }),
            w &&
              s.jsx(Ss, {
                message: "app.toast.success",
                onClose: () => S(!1),
                duration: 3e3,
              }),
            s.jsx("main", {
              className: "flex-grow flex flex-col bg-white",
              children: s.jsxs("div", {
                className: "w-full px-4 py-8 pb-24",
                children: [
                  s.jsx(Uy, {
                    drugs: l,
                    warehouses: i,
                    onSubmit: _,
                    isSubmitting: f,
                    resetTrigger: X,
                    onRefreshOrders: ve,
                  }),
                  s.jsx("div", {
                    className: "mt-8",
                    children: s.jsx(Cy, {
                      orders: v,
                      startDate: j,
                      endDate: P,
                      onDateChange: Y,
                      isLoading: F,
                    }),
                  }),
                ],
              }),
            }),
            s.jsx(zy, {
              isOpen: N,
              title: "確認建立撥補單",
              message: "來源庫存為 0，是否仍要建立撥補單？",
              confirmText: "確認建立",
              cancelText: "取消",
              onConfirm: async () => {
                (m(!1), await L());
              },
              onCancel: () => m(!1),
              isProcessing: f,
            }),
            s.jsx(By, {}),
          ],
        })
      : s.jsx(Dy, { onLogin: () => t(!0) });
}
of(document.getElementById("root")).render(
  s.jsx(h.StrictMode, { children: s.jsx(by, { children: s.jsx(Vy, {}) }) }),
);
